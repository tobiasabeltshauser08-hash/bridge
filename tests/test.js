// Selbsttest für die Lerninhalte und die Lernlogik (ohne DOM).
// Aufruf: node tests/test.js
import assert from 'node:assert/strict';
import { UNITS, GRAMMAR, BADGES, PLACEMENT, LEVELS } from '../js/data.js';
import * as L from '../js/logic.js';

// Feste Zufallsfolge, damit die Tests immer gleich laufen
function seeded(seed = 1) { return () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }; }

// ---------- Daten: Einheiten ----------
const unitIds = new Set(), allEn = new Set();
for (const u of UNITS) {
  assert.ok(!unitIds.has(u.id), `doppelte Einheit ${u.id}`); unitIds.add(u.id);
  assert.ok(LEVELS.includes(u.level), `${u.id}: Niveau fehlt oder ungültig`);
  assert.ok(u.title && u.icon, `${u.id}: Titel/Icon fehlt`);
  const min = u.level === 'A1' ? 10 : 12;
  assert.ok(u.words.length >= min && u.words.length <= 15, `${u.id}: ${u.words.length} Wörter`);
  const en = new Set();
  for (const w of u.words) {
    assert.ok(w.length === 4 || w.length === 5, `${u.id}/${w[0]}: Format`);
    assert.ok(w.slice(0, 4).every(x => typeof x === 'string' && x.trim()), `${u.id}/${w[0]}: leeres Feld`);
    assert.ok(!en.has(w[0]), `${u.id}: doppeltes Wort ${w[0]}`); en.add(w[0]);
    assert.ok(!allEn.has(w[0]), `${w[0]} kommt in mehreren Einheiten vor`); allEn.add(w[0]);
    assert.ok(/[.!?]$|^Kind regards/.test(w[2]), `${u.id}/${w[0]}: Beispielsatz EN ohne Satzzeichen`);
    assert.ok(w[2] !== w[3], `${u.id}/${w[0]}: Beispiel nicht übersetzt`);
    const form = w[4] || w[0];
    assert.ok(w[2].toLowerCase().includes(form.toLowerCase()), `${u.id}/${w[0]}: „${form}“ steht nicht im Beispielsatz`);
  }
}
// Schwerpunkt A2–B1: dort liegen die meisten Wörter
const per = l => UNITS.filter(u => u.level === l).reduce((a, u) => a + u.words.length, 0);
assert.ok(per('A2') + per('B1') > per('A1') * 3, 'Schwerpunkt soll auf A2–B1 liegen');

// ---------- Daten: Grammatik ----------
const gIds = new Set();
for (const g of GRAMMAR) {
  assert.ok(!gIds.has(g.id), `doppeltes Thema ${g.id}`); gIds.add(g.id);
  assert.ok(LEVELS.includes(g.level), `${g.id}: Niveau fehlt`);
  assert.ok(g.explain.length > 50 && g.examples.length >= 2, `${g.id}: Erklärung/Beispiele`);
  assert.ok(g.ex.length >= 5, `${g.id}: zu wenige Übungen`);
  for (const e of g.ex) {
    assert.ok(e.de, `${g.id}: Übung ohne Übersetzung`);
    if (e.b) { assert.ok(L.tokens(e.b).length >= 3, `${g.id}: Satzbau zu kurz: ${e.b}`); continue; }
    assert.ok(Array.isArray(e.o) && e.o.length >= 2, `${g.id}: Optionen fehlen`);
    assert.ok(Number.isInteger(e.a) && e.a >= 0 && e.a < e.o.length, `${g.id}: ungültiger Antwort-Index bei „${e.q}“`);
    assert.equal(new Set(e.o).size, e.o.length, `${g.id}: doppelte Option bei „${e.q}“`);
    assert.ok(e.q.includes('___') || e.q.endsWith('?'), `${g.id}: Lücke fehlt bei „${e.q}“`);
  }
}
// Alle verlangten Themen sind da
for (const id of ['present-perfect', 'pp-progressive', 'past-progressive', 'future', 'if-1', 'if-2', 'passive', 'relative',
  'gerund', 'used-to', 'reported', 'quantities', 'adverbs', 'german-traps']) assert.ok(gIds.has(id), `Thema ${id} fehlt`);

// ---------- Daten: Einstufung & Abzeichen ----------
assert.equal(PLACEMENT.length, 10);
for (const q of PLACEMENT) {
  assert.ok(LEVELS.includes(q.level));
  assert.ok(q.a >= 0 && q.a < q.o.length, `Einstufung: Index bei „${q.q}“`);
}
const badgeIds = new Set(BADGES.map(b => b.id));
assert.equal(badgeIds.size, BADGES.length);

// ---------- Antworten prüfen ----------
const word = en => L.WORDS.find(w => w.en === en);
assert.equal(L.checkTyped('to try on', word('to try on')), 'ok');
assert.equal(L.checkTyped('Try on', word('to try on')), 'ok');
assert.equal(L.checkTyped('  try   on! ', word('to try on')), 'ok');
assert.equal(L.checkTyped('accomodation', word('accommodation')), 'almost');
assert.equal(L.checkTyped('hotel', word('accommodation')), 'wrong');
assert.equal(L.checkTyped('', word('flat')), 'wrong');
assert.equal(L.checkTyped('flt', word('flat')), 'wrong'); // kurze Wörter müssen exakt stimmen
assert.equal(L.checkTyped('I’m allergic to', word('allergic to')), 'wrong');
assert.equal(L.checkTyped("that’s a good point", word("that's a good point")), 'ok');
assert.equal(L.cloze('I live in Munich.', 'live'), 'I _____ in Munich.');
assert.equal(L.cloze('Hold on, I will check.', 'hold on'), '_____, I will check.');
assert.ok(L.sameSentence("I'm not very hungry", "I'm not very hungry."));
assert.ok(!L.sameSentence('hungry not very I\'m', "I'm not very hungry."));
assert.ok(L.speechOk(['I live in Munich'], 'I live in Munich.'));
assert.ok(L.speechOk(['nonsense', 'see you tomorrow'], 'See you tomorrow.'));
assert.ok(!L.speechOk(['I love Munich'], 'I live in Munich.'));

// Satzbau: Bausteine gemischt, aber vollständig
const sc = L.scramble('She is the woman who lives next door.', seeded(3));
assert.deepEqual([...sc].sort(), L.tokens('She is the woman who lives next door.').sort());
assert.notEqual(sc.join(' '), 'She is the woman who lives next door.');

// Auswahl: richtige Antwort genau einmal, keine doppelten Optionen
const pool = L.unitWords('travel');
for (const w of pool) for (const f of ['de', 'en', 'form']) {
  const c = L.choices(w, pool, f, 4, seeded(7));
  assert.equal(c.o.length, 4);
  assert.equal(new Set(c.o).size, 4);
  assert.equal(c.o[c.a], w[f]);
}

// ---------- Spaced Repetition ----------
const DAY = L.DAY, t0 = new Date(2025, 10, 12, 18).getTime();
let c = L.review(undefined, true, t0);
assert.equal(c.box, 1); assert.equal(c.due, t0 + DAY);
c = L.review(c, true, t0 + DAY);
assert.equal(c.box, 2); assert.equal(c.due, t0 + DAY + 3 * DAY);
c = L.review(c, true, t0 + 4 * DAY);
assert.equal(c.box, 3); assert.equal(c.due, t0 + 4 * DAY + 7 * DAY);
// Falsch: zurück in Fach 1, morgen wieder fällig
const w1 = L.review(c, false, t0 + 11 * DAY);
assert.equal(w1.box, 1); assert.equal(w1.due, t0 + 12 * DAY); assert.equal(w1.wrong, 1);
// Wer oft falsch lag, bekommt kürzere Abstände
const easy = { box: 3, due: 0, right: 3, wrong: 0, seen: 0 };
const hard = { box: 3, due: 0, right: 3, wrong: 4, seen: 0 };
assert.ok(L.review(hard, true, t0).due < L.review(easy, true, t0).due, 'falsche Wörter sollen öfter kommen');
assert.ok(L.review({ box: 6, due: 0, right: 9, wrong: 0 }, true, t0).box === 6, 'Fach 6 ist das höchste');

// Fällige Wörter: überfällige zuerst, bei Gleichstand die mit mehr Fehlern; neue/ungeübte nicht
const cards = {
  'flat': { box: 2, due: t0 - 2 * DAY, right: 2, wrong: 0 },
  'landlord': { box: 1, due: t0 - 2 * DAY, right: 1, wrong: 3 },
  'heating': { box: 4, due: t0 - 5 * DAY, right: 4, wrong: 0 },
  'upstairs': { box: 3, due: t0 + DAY, right: 3, wrong: 0 },
  'downstairs': { box: 0, due: t0 - DAY, right: 0, wrong: 0 },
};
const due = L.dueWords(cards, t0).map(w => w.en);
assert.deepEqual(due, ['heating', 'landlord', 'flat']);
assert.equal(L.dueWords(cards, t0, 1).length, 1);
assert.equal(L.learned(cards).length, 4);

// ---------- Lektionen ----------
const opts = { tts: true, speech: false };
const l1 = L.buildLesson('home', {}, t0, opts, seeded(2));
assert.equal(l1.learn.length, L.NEW_PER_LESSON);
assert.ok(l1.tasks.length >= 2 * L.NEW_PER_LESSON);
for (const t of l1.tasks) {
  assert.ok(['mc-de', 'mc-en', 'cloze', 'type', 'build', 'listen'].includes(t.type), t.type);
  if (t.o) assert.ok(t.a >= 0 && t.o[t.a] !== undefined);
  if (t.type === 'cloze') assert.ok(t.q.includes('_____'));
  if (t.type === 'build') assert.deepEqual([...t.tiles].sort(), L.tokens(t.word.ex).sort());
}
// Jedes neue Wort wird mindestens zweimal geübt
for (const w of l1.learn) assert.ok(l1.tasks.filter(t => t.word.en === w.en).length >= 2, w.en);
// Danach kommen die nächsten neuen Wörter, ohne die schon gelernten zu wiederholen
const after = Object.fromEntries(l1.learn.map(w => [w.en, L.review(undefined, true, t0)]));
const l2 = L.buildLesson('home', after, t0, opts, seeded(2));
assert.ok(l2.learn.every(w => !after[w.en]));
// Alle Wörter bekannt → gemischtes Üben ohne Lernkarten
const allHome = Object.fromEntries(L.unitWords('home').map(w => [w.en, L.review(undefined, true, t0)]));
const l3 = L.buildLesson('home', allHome, t0, opts, seeded(2));
assert.equal(l3.learn.length, 0); assert.ok(l3.tasks.length > 0);
// Ohne Vorlesen keine Hör-Aufgaben, ohne Spracherkennung keine Sprech-Aufgaben
const deep = Object.fromEntries(L.WORDS.map(w => [w.en, { box: 5, due: t0 - DAY, right: 5, wrong: 0 }]));
const rv = L.buildReview(deep, t0, { tts: false, speech: false }, 40, seeded(4));
assert.equal(rv.length, 40);
assert.ok(rv.every(t => t.type !== 'listen' && t.type !== 'speak'));
assert.ok(L.buildReview(deep, t0, { tts: true, speech: true }, 40, seeded(4)).some(t => t.type === 'speak'));
assert.equal(L.buildReview({}, t0, opts).length, 0);

// Empfehlung: erste offene Einheit ab dem Startniveau
assert.equal(L.nextUnit({}, 'A2').level, 'A2');
assert.equal(L.nextUnit({}, 'B1').level, 'B1');
assert.equal(L.nextGrammar({}, 'B1').level, 'B1');
assert.equal(L.nextUnit(deep, 'B1'), null);

// ---------- Einstufung ----------
const right = PLACEMENT.map(q => q.a);
const wrong = PLACEMENT.map(q => (q.a + 1) % q.o.length);
const mix = (lv, ok) => PLACEMENT.map((q, i) => ok.includes(q.level) ? right[i] : wrong[i]);
assert.deepEqual(L.placement(right), { ...L.placement(right), level: 'B1', refresh: false, score: 10 });
assert.equal(L.placement(wrong).level, 'A2');
assert.equal(L.placement(wrong).refresh, true);
assert.equal(L.placement(mix(0, ['A1', 'A2'])).level, 'A2');
assert.equal(L.placement(mix(0, ['A1', 'A2'])).refresh, false);
assert.equal(L.placement(mix(0, ['A2', 'B1'])).refresh, true); // A1-Fehler → auffrischen
assert.equal(L.placement(PLACEMENT.map(() => null)).level, 'A2'); // alles übersprungen
// B1 schon mit einem Fehler pro Stufe
const oneOff = [...right]; oneOff[3] = wrong[3]; oneOff[9] = wrong[9];
assert.equal(L.placement(oneOff).level, 'B1');

// ---------- Serie & Abzeichen ----------
const k = d => L.dayKey(new Date(2025, 10, d, 10).getTime());
const days = { [k(12)]: 60, [k(11)]: 50, [k(10)]: 80, [k(9)]: 20, [k(8)]: 90 };
assert.equal(L.streak(days, 50, t0), 3);
assert.equal(L.streak({ [k(11)]: 50, [k(10)]: 50 }, 50, t0), 2); // heute noch offen → zählt ab gestern
assert.equal(L.streak({}, 50, t0), 0);
assert.equal(L.streak(days, 20, t0), 5);

const base = { cards: {}, grammar: {}, days: {}, goal: 50, xp: 0, lessons: 0, perfect: 0, speakOk: 0 };
assert.deepEqual(L.badgesFor(base, t0), []);
const rich = { ...base, cards: deep, grammar: Object.fromEntries(GRAMMAR.map(g => [g.id, { best: 90 }])), days, xp: 1200, lessons: 3, perfect: 1, speakOk: 12, early: true, night: true };
const got = L.badgesFor(rich, t0);
for (const id of ['first', 'streak3', 'words25', 'words100', 'wordsAll', 'perfect', 'speaker', 'grammar3', 'grammarAll', 'b1', 'xp1000', 'early', 'night'])
  assert.ok(got.includes(id), `Abzeichen ${id} fehlt`);
assert.ok(!got.includes('streak7'));
for (const id of got) assert.ok(badgeIds.has(id), `unbekanntes Abzeichen ${id}`);

console.log(`OK: ${UNITS.length} Einheiten / ${L.WORDS.length} Wörter, ${GRAMMAR.length} Grammatik-Themen / ${GRAMMAR.reduce((a, g) => a + g.ex.length, 0)} Übungen, Logik geprüft`);
