// Reine Lernlogik ohne DOM, damit sie sich mit Node testen lässt:
// Wörterliste, Antwortprüfung, Spaced Repetition, Lektionen, Einstufung, Serie und Abzeichen.
import { UNITS, GRAMMAR, PLACEMENT, LEVELS } from './data.js';

export const DAY = 86400000;
const pad = n => String(n).padStart(2, '0');
export const dayKey = ts => { const d = new Date(ts); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };

// ---------- Wörter ----------
export const toWord = (w, u) => ({ en: w[0], de: w[1], ex: w[2], exDe: w[3], form: w[4] || w[0], unit: u.id, level: u.level });
export const WORDS = UNITS.flatMap(u => u.words.map(w => toWord(w, u)));
export const unitWords = id => WORDS.filter(w => w.unit === id);
export const levelRank = l => LEVELS.indexOf(l);

// ---------- Antworten prüfen ----------
export const normalize = s => String(s ?? '').toLowerCase()
  .replace(/[’‘`´]/g, "'")
  .replace(/[.,!?;:"“”()…]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

// Akzeptierte Schreibweisen: "to try on" → "to try on", "try on"; Alternativen mit " / "
export function accepted(word) {
  const out = new Set();
  for (const v of [word.en, word.form]) {
    for (const part of v.split(' / ')) {
      const n = normalize(part);
      out.add(n);
      if (n.startsWith('to ')) out.add(n.slice(3));
    }
  }
  return [...out];
}

export function levenshtein(a, b) {
  const m = a.length, n = b.length;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
}

// 'ok' = richtig, 'almost' = kleiner Tippfehler (zählt, Schreibweise wird gezeigt), 'wrong'
export function checkTyped(input, word) {
  const n = normalize(input);
  if (!n) return 'wrong';
  const ok = accepted(word);
  if (ok.includes(n)) return 'ok';
  const best = Math.min(...ok.map(a => levenshtein(n, a)));
  const len = Math.min(...ok.map(a => a.length));
  if ((len >= 5 && best <= 1) || (len >= 9 && best <= 2)) return 'almost';
  return 'wrong';
}

// Satzbau: Wortbausteine und Vergleich
export const tokens = sentence => String(sentence).trim().split(/\s+/);
export const sameSentence = (a, b) => normalize(a) === normalize(b);

// Aussprache: Anteil der Zielwörter, die erkannt wurden (Reihenfolge egal)
export function speechScore(heard, target) {
  const h = normalize(heard).split(' ').filter(Boolean);
  const t = normalize(target).split(' ').filter(Boolean);
  if (!t.length) return 0;
  const pool = [...h];
  let hit = 0;
  for (const w of t) { const i = pool.indexOf(w); if (i >= 0) { hit++; pool.splice(i, 1); } }
  return hit / t.length;
}
export const speechOk = (alternatives, target) => alternatives.some(a => speechScore(a, target) >= 0.8);

// Lückensatz: die Form des Wortes im Beispielsatz durch ___ ersetzen
export function cloze(sentence, form) {
  const i = sentence.toLowerCase().indexOf(form.toLowerCase());
  if (i < 0) return null;
  return sentence.slice(0, i) + '_____' + sentence.slice(i + form.length);
}

// ---------- Zufall ----------
export function shuffle(arr, rnd = Math.random) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
// Bausteine mischen, aber nicht in der richtigen Reihenfolge lassen (wenn möglich)
export function scramble(sentence, rnd = Math.random) {
  const t = tokens(sentence);
  if (new Set(t).size < 2) return t;
  for (let i = 0; i < 10; i++) { const s = shuffle(t, rnd); if (s.join(' ') !== t.join(' ')) return s; }
  return [...t].reverse();
}

// Auswahlmöglichkeiten: richtige + bis zu n-1 andere aus dem Pool, ohne doppelte Texte
export function choices(word, pool, field, n = 4, rnd = Math.random) {
  const right = word[field];
  const others = [];
  for (const w of shuffle(pool, rnd)) {
    const v = w[field];
    if (w.en === word.en || v === right || others.includes(v)) continue;
    others.push(v);
    if (others.length >= n - 1) break;
  }
  const o = shuffle([right, ...others], rnd);
  return { o, a: o.indexOf(right) };
}

// ---------- Spaced Repetition ----------
// Fächer 0–6. Richtig → ein Fach höher, Abstand wächst. Falsch → zurück in Fach 1, morgen wieder dran.
// Wörter mit vielen Fehlern bekommen kürzere Abstände (falsche öfter).
export const INTERVALS = [0, 1, 3, 7, 14, 30, 60]; // Tage je Fach
export const newCard = now => ({ box: 0, due: now, right: 0, wrong: 0, seen: now });

export function ease(card) { return Math.max(0.4, 1 / (1 + 0.25 * card.wrong)); }

export function review(card, correct, now) {
  const c = { ...(card || newCard(now)) };
  if (correct) {
    c.right++;
    c.box = Math.min(INTERVALS.length - 1, c.box + 1);
    c.due = now + Math.max(1, Math.round(INTERVALS[c.box] * ease(c))) * DAY;
  } else {
    c.wrong++;
    c.box = Math.min(c.box, 1);
    c.due = now + DAY;
  }
  c.last = now;
  return c;
}

export const isDue = (card, now) => !!card && card.right + card.wrong > 0 && card.due <= now;

// Fällige Wörter: am längsten überfällig zuerst, bei Gleichstand die mit mehr Fehlern und niedrigem Fach
export function dueWords(cards, now, limit = Infinity, words = WORDS) {
  const prio = c => (now - c.due) / DAY + c.wrong * 0.5 - c.box * 0.25;
  return words
    .filter(w => isDue(cards[w.en], now))
    .sort((a, b) => prio(cards[b.en]) - prio(cards[a.en]))
    .slice(0, limit);
}
export const learned = (cards, words = WORDS) => words.filter(w => cards[w.en]?.right > 0);
export const seenWords = (cards, words = WORDS) => words.filter(w => cards[w.en]);

// ---------- Aufgaben ----------
// Typen: mc-de (EN zeigen, DE wählen), mc-en (DE zeigen, EN wählen), cloze (Lücke im Satz),
// type (EN eintippen), build (Satz bauen), listen (hören, DE wählen), speak (nachsprechen)
export function task(type, word, pool, rnd = Math.random) {
  const t = { type, word };
  if (type === 'mc-de' || type === 'listen') Object.assign(t, choices(word, pool, 'de', 4, rnd));
  if (type === 'mc-en') Object.assign(t, choices(word, pool, 'en', 4, rnd));
  if (type === 'cloze') Object.assign(t, { q: cloze(word.ex, word.form) }, choices(word, pool, 'form', 4, rnd));
  if (type === 'build') t.tiles = scramble(word.ex, rnd);
  return t;
}

const buildable = w => tokens(w.ex).length >= 3 && tokens(w.ex).length <= 11;

// Aufgabe passend zum Lernstand: neue Wörter erst wiedererkennen, dann selbst schreiben
export function pickType(card, i, opts = {}, w) {
  const box = card?.box || 0;
  const easy = ['mc-de', 'mc-en', opts.tts ? 'listen' : 'mc-de'];
  const mid = ['cloze', 'mc-en', 'type', buildable(w) ? 'build' : 'cloze'];
  const hard = ['type', buildable(w) ? 'build' : 'type', 'cloze', opts.speech ? 'speak' : 'type'];
  const list = box <= 1 ? easy : box <= 3 ? mid : hard;
  return list[i % list.length];
}

// Lektion einer Einheit: bis zu 6 neue Wörter lernen + üben; sind alle bekannt, gemischtes Üben
export const NEW_PER_LESSON = 6;
export function buildLesson(unitId, cards, now, opts = {}, rnd = Math.random) {
  const pool = unitWords(unitId);
  const fresh = pool.filter(w => !cards[w.en]).slice(0, NEW_PER_LESSON);
  const tasks = [];
  if (fresh.length) {
    // Jedes neue Wort zweimal: erst erkennen, dann aktiv (Lücke, Satzbau oder Eintippen)
    fresh.forEach((w, i) => tasks.push(task(i % 2 ? 'mc-en' : 'mc-de', w, pool, rnd)));
    const active = shuffle(fresh, rnd).map((w, i) => task(['cloze', buildable(w) ? 'build' : 'type', 'type'][i % 3], w, pool, rnd));
    const due = dueWords(cards, now, 3, pool).map((w, i) => task(pickType(cards[w.en], i, opts, w), w, pool, rnd));
    return { learn: fresh, tasks: [...tasks, ...shuffle([...active, ...due], rnd)] };
  }
  const order = [...pool].sort((a, b) => (cards[a.en].box - cards[b.en].box) || (cards[a.en].due - cards[b.en].due));
  const pick = shuffle(order.slice(0, 8), rnd);
  return { learn: [], tasks: pick.map((w, i) => task(pickType(cards[w.en], i, opts, w), w, pool, rnd)) };
}

// Wiederholung über alle Einheiten
export function buildReview(cards, now, opts = {}, limit = 12, rnd = Math.random) {
  const due = dueWords(cards, now, limit);
  return due.map((w, i) => task(pickType(cards[w.en], i, opts, w), w, unitWords(w.unit).length >= 4 ? unitWords(w.unit) : WORDS, rnd));
}

// Sprechtraining: Beispielsätze gelernter Wörter nachsprechen
export function buildSpeaking(cards, n = 5, rnd = Math.random) {
  return shuffle(learned(cards), rnd).slice(0, n).map(w => ({ type: 'speak', word: w }));
}

// Nächste empfohlene Einheit: erste mit neuen Wörtern ab dem Startniveau, sonst die erste offene
export function nextUnit(cards, level = 'A2') {
  const open = UNITS.filter(u => unitWords(u.id).some(w => !cards[w.en]));
  return open.find(u => levelRank(u.level) >= levelRank(level)) || open[0] || null;
}
export function nextGrammar(progress, level = 'A2') {
  const open = GRAMMAR.filter(g => !progress[g.id]);
  return open.find(g => levelRank(g.level) >= levelRank(level)) || open[0] || null;
}

// ---------- Einstufung ----------
// answers[i] = gewählter Index (oder null = übersprungen).
// B1, wenn A2 sicher (≥ 3 von 4) und B1 überwiegend (≥ 3 von 4) richtig ist.
// Auffrischen empfohlen, wenn A1-Fragen falsch waren oder A2 schwach ist.
export function placement(answers, questions = PLACEMENT) {
  const by = {};
  questions.forEach((q, i) => {
    const b = by[q.level] ||= { right: 0, total: 0 };
    b.total++;
    if (answers[i] === q.a) b.right++;
  });
  const r = l => by[l]?.right || 0, t = l => by[l]?.total || 0;
  const level = r('A2') >= Math.ceil(t('A2') * 0.75) && r('B1') >= Math.ceil(t('B1') * 0.75) ? 'B1' : 'A2';
  const refresh = r('A1') < t('A1') || r('A2') <= Math.floor(t('A2') / 2);
  return { score: questions.reduce((a, q, i) => a + (answers[i] === q.a ? 1 : 0), 0), total: questions.length, by, level, refresh };
}

// ---------- XP, Tagesziel, Serie ----------
export const XP = { right: 10, almost: 7, lesson: 20, grammar: 20, review: 10 };

// Serie: Tage am Stück mit erreichtem Tagesziel – bis heute oder bis gestern, wenn heute noch offen
export function streak(days, goal, now) {
  const d = new Date(now); d.setHours(12, 0, 0, 0);
  const hit = () => (days[dayKey(d)] || 0) >= goal;
  if (!hit()) d.setDate(d.getDate() - 1);
  let n = 0;
  while (hit()) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

// Welche Abzeichen der Stand gerade erfüllt (die App merkt sich, welche neu sind)
export function badgesFor(st, now) {
  const words = learned(st.cards).length;
  const practiced = Object.keys(st.grammar || {}).length;
  const s = streak(st.days || {}, st.goal, now);
  const b1 = UNITS.filter(u => u.level === 'B1');
  const ok = {
    first: st.lessons >= 1,
    streak3: s >= 3, streak7: s >= 7, streak30: s >= 30,
    words25: words >= 25, words100: words >= 100, wordsAll: words >= WORDS.length,
    perfect: st.perfect >= 1,
    speaker: st.speakOk >= 10,
    grammar3: practiced >= 3, grammarAll: practiced >= GRAMMAR.length,
    b1: b1.every(u => unitWords(u.id).some(w => st.cards[w.en])),
    xp1000: st.xp >= 1000,
    early: !!st.early, night: !!st.night,
  };
  return Object.keys(ok).filter(k => ok[k]);
}
