import { UNITS, GRAMMAR, BADGES, PLACEMENT, LEVELS, LEVEL_INFO } from "./data.js";
import * as L from "./logic.js";
import { canSpeak, canListen, say, listen, stopListening } from "./speech.js";

const KEY = "english-v1";
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const svg = d => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const ICON = {
  close: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
  speaker: svg('<path d="M4 9.5h3.5L12 5.5v13L7.5 14.5H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>'),
  mic: svg('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>'),
  fire: svg('<path d="M12 3c.5 3.5 4.5 5 4.5 10a4.5 4.5 0 0 1-9 0c0-2.2 1.2-3.6 2.3-4.6.3 1.6 1 2.6 2 3.1C11.4 9.5 11 6 12 3z"/>'),
  chev: svg('<path d="M9 5l7 7-7 7"/>'),
};
const EMBLEM = '<svg viewBox="0 0 24 24"><path d="M4.5 5.5h15a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H11l-4.5 3.5V16.5h-2A1.5 1.5 0 0 1 3 15V7a1.5 1.5 0 0 1 1.5-1.5z" fill="currentColor"/><circle cx="8" cy="11" r="1.4" fill="#000"/><circle cx="12" cy="11" r="1.4" fill="#000"/><circle cx="16" cy="11" r="1.4" fill="#000"/></svg>';
const PRAISE = ["Richtig!", "Genau!", "Super!", "Stimmt!", "Sehr gut!"];
// Eine Lektion bringt etwa 100–150 XP
const GOALS = [[50, "Locker", "ca. 5 min"], [100, "Normal", "ca. 10 min"], [200, "Intensiv", "ca. 20 min"]];

// ---------- Zustand (localStorage) ----------
const DEFAULT = {
  placed: false, level: "A2", refresh: false, goal: 100, voice: "en-GB", rate: 1, theme: "auto",
  xp: 0, days: {}, cards: {}, grammar: {}, lessons: 0, perfect: 0, speakOk: 0, early: false, night: false, badges: {},
};
const fresh = () => JSON.parse(JSON.stringify(DEFAULT));
let S = fresh();
try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && typeof s === "object") S = { ...S, ...s }; } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

function applyTheme() {
  if (S.theme === "auto") delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = S.theme;
}
applyTheme();

const opts = () => ({ tts: canSpeak, speech: canListen });
const sayEn = t => say(t, { lang: S.voice, rate: S.rate });
const sayBtn = (text, cls = "") => canSpeak ? `<button type="button" class="say ${cls}" data-say="${esc(text)}" aria-label="Vorlesen">${ICON.speaker}</button>` : "";
const today = () => S.days[L.dayKey(Date.now())] || 0;
const streakNow = () => L.streak(S.days, S.goal, Date.now());
const unitOf = id => UNITS.find(u => u.id === id);

let toastT = 0, toastQ = [];
function toast(msg) {
  toastQ.push(msg);
  if (toastQ.length === 1) showToast();
}
function showToast() {
  const t = $("#toast");
  if (!toastQ.length) { t.hidden = true; return; }
  t.textContent = toastQ[0]; t.hidden = false;
  clearTimeout(toastT);
  toastT = setTimeout(() => { toastQ.shift(); showToast(); }, 2800);
}

// XP gutschreiben, Tagesziel und Tageszeit-Abzeichen merken
function gain(n) {
  const k = L.dayKey(Date.now()), before = S.days[k] || 0;
  S.xp += n; S.days[k] = before + n;
  if (R) R.xp += n;
  if (before < S.goal && before + n >= S.goal) toast("🔥 Tagesziel erreicht!");
  const h = new Date().getHours();
  if (h < 8) S.early = true;
  if (h >= 22) S.night = true;
}
function checkBadges() {
  const got = L.badgesFor(S, Date.now()).filter(id => !S.badges[id]);
  got.forEach(id => { S.badges[id] = Date.now(); });
  save();
  return got.map(id => BADGES.find(b => b.id === id)).filter(Boolean);
}

// ---------- Ansichten ----------
let tab = "heute";
function show(which) {
  $("#app").hidden = which !== "app";
  $("#intro").hidden = which !== "intro";
  $("#run").hidden = which !== "run";
  window.scrollTo(0, 0);
}

function render() {
  if (!S.placed) return renderIntro();
  show("app");
  const st = streakNow();
  $("#top-sub").textContent = `Niveau ${S.level} · ${LEVEL_INFO[S.level]}`;
  $("#top-streak").innerHTML = `${ICON.fire}<span class="num">${st}</span>`;
  $("#top-streak").title = `${st} ${st === 1 ? "Tag" : "Tage"} in Folge`;
  document.querySelectorAll(".tabs button").forEach(b => b.setAttribute("aria-current", b.dataset.tab === tab ? "page" : "false"));
  ({ heute: renderToday, woerter: renderUnits, grammatik: renderGrammar, profil: renderProfile })[tab]();
}

document.querySelector(".tabs").addEventListener("click", e => {
  const b = e.target.closest("[data-tab]");
  if (!b) return;
  tab = b.dataset.tab;
  render();
  window.scrollTo(0, 0);
});

// ---------- Heute ----------
function renderToday() {
  const now = Date.now();
  const unit = L.nextUnit(S.cards, S.level);
  const due = L.dueWords(S.cards, now).length;
  const topic = L.nextGrammar(S.grammar, S.level);
  const learnedN = L.learned(S.cards).length;
  const t = today(), pct = Math.min(100, t / S.goal * 100);
  const nextDue = Object.values(S.cards).filter(c => c.right + c.wrong > 0).reduce((m, c) => Math.min(m, c.due), Infinity);
  const unitNew = unit ? L.unitWords(unit.id).filter(w => !S.cards[w.en]).length : 0;

  $("#view").innerHTML = `
    <section class="goal">
      <div class="goal-top"><div><small>Tagesziel</small><b class="num">${t} / ${S.goal} XP</b></div>
        <div class="streak"><span class="num">${streakNow()}</span><small>${streakNow() === 1 ? "Tag" : "Tage"} Serie</small></div></div>
      <div class="prog lg"><i style="width:${pct}%"></i></div>
      <p class="hint">${t >= S.goal ? "Geschafft für heute. Alles Weitere ist Bonus." : `Noch ${S.goal - t} XP – etwa ${Math.ceil((S.goal - t) / 10)} richtige Antworten.`}</p>
    </section>
    ${unit ? `<button type="button" class="btn-big" data-a="lesson" data-id="${unit.id}">
        <span class="bb-ic">${unit.icon}</span><span class="bb-t"><small>Nächste Lektion · ${unit.level}</small>${esc(unit.title)}<small>${Math.min(unitNew, L.NEW_PER_LESSON)} neue Wörter</small></span>${ICON.chev}</button>`
      : `<div class="empty">Alle Einheiten begonnen – stark! Wiederhole fällige Wörter oder übe Grammatik.</div>`}
    <div class="tiles">
      <button type="button" class="tile" data-a="review" ${due ? "" : "disabled"}><b class="num">${due}</b><span>Wörter fällig</span>
        <small>${due ? "Jetzt wiederholen" : nextDue < Infinity ? `nächste ${when(nextDue)}` : "noch nichts gelernt"}</small></button>
      ${topic ? `<button type="button" class="tile" data-a="topic" data-id="${topic.id}"><b>${topic.icon}</b><span>${esc(topic.title)}</span><small>Grammatik · ${topic.level}</small></button>`
        : `<button type="button" class="tile" data-tab-go="grammatik"><b>🎓</b><span>Grammatik</span><small>Alles geübt – wiederholen</small></button>`}
    </div>
    ${canListen ? `<button type="button" class="row-card" data-a="speaking" ${learnedN >= 3 ? "" : "disabled"}><span class="ic">${ICON.mic}</span>
      <span><b>Sprechtraining</b><small>${learnedN >= 3 ? "Beispielsätze nachsprechen – die App hört zu" : "Ab 3 gelernten Wörtern"}</small></span></button>` : ""}
    ${S.refresh ? `<button type="button" class="row-card soft" data-tab-go="woerter"><span class="ic">↺</span><span><b>Tipp: Grundlagen auffrischen</b><small>Die A1-Einheiten sind kurz und schließen Lücken.</small></span></button>` : ""}
    <section class="kv3">
      <div><small>Gelernt</small><b class="num">${learnedN}<span>/${L.WORDS.length}</span></b></div>
      <div><small>XP gesamt</small><b class="num">${S.xp}</b></div>
      <div><small>Abzeichen</small><b class="num">${Object.keys(S.badges).length}<span>/${BADGES.length}</span></b></div>
    </section>`;
}

function when(ts) {
  const d = Math.round((new Date(ts).setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)) / L.DAY);
  return d <= 0 ? "heute" : d === 1 ? "morgen" : `in ${d} Tagen`;
}

// ---------- Wörter ----------
// Eigenes Niveau zuerst, A1 (Auffrischen) zuletzt und eingeklappt
const levelOrder = () => S.level === "B1" ? ["B1", "A2", "A1"] : ["A2", "B1", "A1"];
function unitStats(u) {
  const ws = L.unitWords(u.id);
  return {
    total: ws.length,
    learned: ws.filter(w => S.cards[w.en]?.right > 0).length,
    fresh: ws.filter(w => !S.cards[w.en]).length,
    due: L.dueWords(S.cards, Date.now(), Infinity, ws).length,
  };
}
function unitCard(u, rec) {
  const s = unitStats(u);
  return `<button type="button" class="u-card" data-unit="${u.id}">
    <span class="u-ic">${u.icon}</span>
    <span class="u-mid"><b>${esc(u.title)}</b>
      <small>${s.learned}/${s.total} gelernt${s.due ? ` · <em>${s.due} fällig</em>` : ""}${rec ? ' · <em>empfohlen</em>' : ""}</small>
      <span class="prog"><i style="width:${s.learned / s.total * 100}%"></i></span></span>
    <span class="tag">${u.level}</span></button>`;
}
function renderUnits() {
  const rec = L.nextUnit(S.cards, S.level);
  const sec = lvl => {
    const us = UNITS.filter(u => u.level === lvl);
    const head = `<div class="sec-h"><h2>${lvl} · ${LEVEL_INFO[lvl]}</h2><span>${us.length} Einheiten</span></div>`;
    const list = `<div class="list">${us.map(u => unitCard(u, u === rec)).join("")}</div>`;
    if (lvl === "A1") return `<details class="fold" ${S.refresh ? "open" : ""}><summary>${head}</summary>${list}</details>`;
    return `<section>${head}${list}</section>`;
  };
  $("#view").innerHTML = `<h2 class="h-title">Wortschatz</h2>${levelOrder().map(sec).join("")}`;
}

function openUnit(id) {
  const u = unitOf(id), s = unitStats(u), ws = L.unitWords(id);
  const dots = c => `<span class="dots" title="Fach ${c?.box || 0} von 6">${[1, 2, 3, 4, 5, 6].map(i => `<i class="${(c?.box || 0) >= i ? "on" : ""}"></i>`).join("")}</span>`;
  openSheet(u.title, `
    <div class="sheet-h"><span class="u-ic">${u.icon}</span><div><h2>${esc(u.title)}</h2><p class="hint">${u.level} · ${s.learned}/${s.total} gelernt</p></div></div>
    <button type="button" class="btn block" data-a="lesson" data-id="${id}">${s.fresh ? `Lektion starten · ${Math.min(s.fresh, L.NEW_PER_LESSON)} neue Wörter` : "Einheit üben"}</button>
    <ul class="words">${ws.map(w => `<li>${sayBtn(w.en)}<span><b lang="en">${esc(w.en)}</b><small>${esc(w.de)}</small></span>${dots(S.cards[w.en])}</li>`).join("")}</ul>`);
}

// ---------- Grammatik ----------
function topicCard(g) {
  const p = S.grammar[g.id];
  return `<button type="button" class="u-card" data-topic="${g.id}">
    <span class="u-ic">${g.icon}</span>
    <span class="u-mid"><b>${esc(g.title)}</b><small>${g.ex.length} Übungen${p ? ` · beste Runde <em>${p.best} %</em>` : ""}</small>
      <span class="prog"><i style="width:${p ? p.best : 0}%"></i></span></span>
    <span class="tag">${g.level}</span></button>`;
}
function renderGrammar() {
  const sec = lvl => {
    const gs = GRAMMAR.filter(g => g.level === lvl);
    const head = `<div class="sec-h"><h2>${lvl} · ${LEVEL_INFO[lvl]}</h2><span>${gs.filter(g => S.grammar[g.id]).length}/${gs.length} geübt</span></div>`;
    const list = `<div class="list">${gs.map(topicCard).join("")}</div>`;
    if (lvl === "A1") return `<details class="fold" ${S.refresh ? "open" : ""}><summary>${head}</summary>${list}</details>`;
    return `<section>${head}${list}</section>`;
  };
  $("#view").innerHTML = `<h2 class="h-title">Grammatik</h2>${levelOrder().map(sec).join("")}`;
}

function openTopic(id) {
  const g = GRAMMAR.find(x => x.id === id);
  openSheet(g.title, `
    <div class="sheet-h"><span class="u-ic">${g.icon}</span><div><h2>${esc(g.title)}</h2><p class="hint">${g.level} · ${g.ex.length} Übungen</p></div></div>
    <div class="explain">${g.explain}</div>
    <div><div class="sec-h"><h2>Beispiele</h2></div>
      <ul class="examples">${g.examples.map(e => `<li>${sayBtn(e)}<span lang="en">${esc(e)}</span></li>`).join("")}</ul></div>
    <button type="button" class="btn block" data-a="grammar" data-id="${id}">Üben</button>`);
}

// ---------- Profil & Einstellungen ----------
function chips(name, list, cur) {
  return `<div class="chips">${list.map(([v, label, sub]) => `<label class="chip"><input type="radio" name="${name}" value="${v}" ${String(v) === String(cur) ? "checked" : ""}><span>${label}${sub ? `<small>${sub}</small>` : ""}</span></label>`).join("")}</div>`;
}
function renderProfile() {
  const got = BADGES.filter(b => S.badges[b.id]).length;
  $("#view").innerHTML = `
    <h2 class="h-title">Profil</h2>
    <section class="kv3">
      <div><small>Serie</small><b class="num">${streakNow()}</b></div>
      <div><small>XP gesamt</small><b class="num">${S.xp}</b></div>
      <div><small>Wörter</small><b class="num">${L.learned(S.cards).length}</b></div>
    </section>
    <section><div class="sec-h"><h2>Abzeichen</h2><span>${got}/${BADGES.length}</span></div>
      <div class="badges">${BADGES.map(b => `<div class="badge ${S.badges[b.id] ? "on" : ""}"><span>${b.icon}</span><b>${esc(b.title)}</b><small>${esc(b.desc)}</small></div>`).join("")}</div></section>
    <section class="settings">
      <div class="sec-h"><h2>Einstellungen</h2></div>
      <div class="field"><span>Tagesziel</span>${chips("goal", GOALS.map(([v, l]) => [v, l, `${v} XP`]), S.goal)}</div>
      <div class="field"><span>Aussprache</span>
        ${canSpeak ? `${chips("voice", [["en-GB", "Britisch"], ["en-US", "Amerikanisch"]], S.voice)}
        ${chips("rate", [[1, "Normal"], [0.8, "Langsam"]], S.rate)}
        <button type="button" class="btn sec" data-say="Hello! Nice to meet you. How are you today?">${ICON.speaker} Probe hören</button>`
        : `<p class="hint">Dein Browser kann leider nicht vorlesen.</p>`}
        <p class="hint">${canListen ? "Spracherkennung ist verfügbar: Du kannst Wörter und Sätze nachsprechen." : "Spracherkennung gibt es in diesem Browser nicht (am besten klappt sie in Chrome)."}</p></div>
      <div class="field"><span>Design</span>${chips("theme", [["auto", "Automatisch"], ["light", "Hell"], ["dark", "Dunkel"]], S.theme)}</div>
      <div class="field"><span>Niveau</span>${chips("level", [["A2", "A2"], ["B1", "B1"]], S.level)}
        <button type="button" class="btn sec" data-a="replace">Einstufungstest wiederholen</button></div>
      <div class="field"><span>Daten</span><p class="hint">Dein Fortschritt liegt nur auf diesem Gerät.</p>
        <button type="button" class="btn sec warn-t" data-a="reset">Fortschritt löschen</button></div>
    </section>`;
}

$("#view").addEventListener("change", e => {
  const i = e.target;
  if (!i.name) return;
  const v = i.value;
  if (i.name === "goal" || i.name === "rate") S[i.name] = Number(v);
  else S[i.name] = v;
  if (i.name === "theme") applyTheme();
  if (i.name === "level") S.refresh = false;
  save();
  render();
});

$("#view").addEventListener("click", e => {
  const b = e.target.closest("[data-a],[data-unit],[data-topic],[data-tab-go]");
  if (!b || b.disabled) return;
  if (b.dataset.unit) return openUnit(b.dataset.unit);
  if (b.dataset.topic) return openTopic(b.dataset.topic);
  if (b.dataset.tabGo) { tab = b.dataset.tabGo; render(); return; }
  act(b);
});

function act(b) {
  const a = b.dataset.a;
  if (a === "lesson") return startLesson(b.dataset.id);
  if (a === "review") return startReview();
  if (a === "topic") return openTopic(b.dataset.id);
  if (a === "grammar") return startGrammar(b.dataset.id);
  if (a === "speaking") return startSpeaking();
  if (a === "replace") return startPlacement();
  if (a === "reset") return openSheet("Zurücksetzen", `<h2>Fortschritt löschen?</h2><p>Alle gelernten Wörter, XP, Serie und Abzeichen werden auf diesem Gerät gelöscht.</p>
    <div class="btns"><button type="button" class="btn sec" data-a="close">Abbrechen</button><button type="button" class="btn warn" data-a="reset-yes">Löschen</button></div>`);
  if (a === "reset-yes") { S = fresh(); save(); applyTheme(); closeSheet(); tab = "heute"; return render(); }
}

// ---------- Sheet ----------
function openSheet(label, html) {
  $("#sheet").innerHTML = `<div class="sheet-in" role="dialog" aria-modal="true" aria-label="${esc(label)}"><div class="grab"></div>${html}</div>`;
  $("#sheet").hidden = false;
  $("#sheet .sheet-in").focus?.();
}
function closeSheet() { $("#sheet").hidden = true; $("#sheet").innerHTML = ""; }
$("#sheet").addEventListener("click", e => {
  if (e.target === $("#sheet") || e.target.closest("[data-a=close]")) return closeSheet();
  const b = e.target.closest("[data-a]");
  if (b && !b.dataset.say) { if (b.dataset.a !== "reset-yes") closeSheet(); act(b); }
});
document.addEventListener("keydown", e => { if (e.key === "Escape" && !$("#sheet").hidden) closeSheet(); });

// Vorlesen überall per data-say
document.addEventListener("click", e => {
  const b = e.target.closest("[data-say]");
  if (b) { e.stopPropagation(); sayEn(b.dataset.say); }
}, true);

// ---------- Einstieg & Einstufung ----------
function renderIntro(result) {
  show("intro");
  const head = `<header class="top"><div class="emblem" aria-hidden="true">${EMBLEM}</div><div><h1 class="brand">Bridge</h1><p class="top-sub">Englisch A2–B1</p></div></header>`;
  if (!result) {
    $("#intro").innerHTML = `${head}
      <h2 class="hero">Vom Schulenglisch zum sicheren Alltagsenglisch.</h2>
      <ul class="feat">
        <li><b>220 Wörter in 15 Einheiten</b> – Arbeit, Reisen, Gesundheit, Wohnen, E-Mails, Meinungen …</li>
        <li><b>22 Grammatik-Themen</b> auf Deutsch erklärt, mit sofortigem Feedback</li>
        <li><b>Wiederholung zur richtigen Zeit</b> – schwierige Wörter kommen öfter</li>
        <li><b>Hören und Sprechen</b> mit britischer oder amerikanischer Aussprache</li>
      </ul>
      <button type="button" class="btn-big" data-a="placement"><span class="bb-t">Einstufungstest starten<small>10 Fragen · ca. 2 Minuten</small></span>${ICON.chev}</button>
      <button type="button" class="btn sec block" data-a="skip">Überspringen – bei A2 beginnen</button>
      <p class="hint center">Alles bleibt auf deinem Gerät und funktioniert auch offline.</p>`;
    return;
  }
  const txt = result.level === "B1"
    ? "Die Grundlagen sitzen. Du startest mit den B1-Einheiten: Telefon & E-Mail, Meinungen, Medien und mehr."
    : "Du startest mit den A2-Einheiten und festigst Zeiten, Vergleiche und Alltagswortschatz. B1 kannst du jederzeit öffnen.";
  $("#intro").innerHTML = `${head}
    <div class="done-hero"><small>Dein Startpunkt</small><div class="big">${result.level}</div><p>${result.score} von ${result.total} richtig</p></div>
    <p>${txt}</p>
    ${result.refresh ? `<p class="note">Tipp: Bei ein paar Grundlagen hat es gehakt. Die kurzen A1-Einheiten zum Auffrischen sind für dich geöffnet.</p>` : ""}
    <div class="field"><span>Wie viel möchtest du am Tag lernen?</span>${chips("goal", GOALS, S.goal)}</div>
    <button type="button" class="btn-big" data-a="start"><span class="bb-t">Los geht's</span>${ICON.chev}</button>`;
}
$("#intro").addEventListener("change", e => { if (e.target.name === "goal") { S.goal = Number(e.target.value); save(); } });
$("#intro").addEventListener("click", e => {
  const b = e.target.closest("[data-a]");
  if (!b) return;
  if (b.dataset.a === "placement") startPlacement();
  if (b.dataset.a === "skip") { S.level = "A2"; S.placed = true; save(); render(); }
  if (b.dataset.a === "start") { S.placed = true; save(); tab = "heute"; render(); }
});

// ---------- Übungs-Runden ----------
// R = laufende Runde: steps (Aufgaben), i (Position), Zählung für den ersten Versuch je Aufgabe
let R = null;

function startRun(cfg) {
  R = { i: 0, right: 0, wrong: 0, xp: 0, mistakes: [], srs: new Set(), answers: [], retry: false, ...cfg };
  show("run");
  step();
}
function startLesson(id) {
  const l = L.buildLesson(id, S.cards, Date.now(), opts());
  const u = unitOf(id);
  startRun({ kind: "lesson", id, title: u.title, retry: true, steps: [...l.learn.map(w => ({ type: "learn", word: w })), ...l.tasks] });
}
function startReview() {
  const tasks = L.buildReview(S.cards, Date.now(), opts());
  if (!tasks.length) return toast("Gerade ist nichts fällig.");
  startRun({ kind: "review", title: "Wiederholung", retry: true, steps: tasks });
}
function startGrammar(id) {
  const g = GRAMMAR.find(x => x.id === id);
  startRun({ kind: "grammar", id, title: g.title, retry: true, steps: g.ex.map(ex => ex.b ? { type: "gb", ex, tiles: L.scramble(ex.b) } : { type: "gc", ex }) });
}
function startSpeaking() {
  startRun({ kind: "speaking", title: "Sprechtraining", steps: L.buildSpeaking(S.cards) });
}
function startPlacement() {
  startRun({ kind: "placement", title: "Einstufung", steps: PLACEMENT.map(q => ({ type: "pq", q })) });
}

function step() {
  stopListening();
  if (R.i >= R.steps.length) return finishRun();
  const t = R.steps[R.i];
  Object.assign(R, { answered: false, built: [], tries: 0 });
  $("#run").innerHTML = `<div class="run-in">
    <div class="run-top"><button type="button" class="icon-btn" data-a="close" aria-label="Runde beenden">${ICON.close}</button>
      <div class="prog"><i style="width:${R.i / R.steps.length * 100}%"></i></div><span class="num">${R.i + 1}/${R.steps.length}</span></div>
    <div class="run-body">${body(t)}</div>
    <div class="run-foot" id="run-foot">${foot(t)}</div></div>`;
  if (t.type === "listen") setTimeout(() => sayEn(t.word.en), 250);
  $("#run input[type=text]")?.focus();
}

const optsHtml = (o, lang) => `<div class="opts">${o.map((x, i) => `<button type="button" class="opt" data-a="opt" data-i="${i}" ${lang ? `lang="${lang}"` : ""}>${esc(x)}</button>`).join("")}</div>`;
const gap = s => esc(s).replace(/_{3,}/, '<span class="gap">&nbsp;</span>');
const mark = (s, form) => { const i = s.toLowerCase().indexOf(form.toLowerCase()); return i < 0 ? esc(s) : esc(s.slice(0, i)) + `<b>${esc(s.slice(i, i + form.length))}</b>` + esc(s.slice(i + form.length)); };
const buildArea = t => `<div class="build" id="build">
  <div class="slots">${R.built.map((ti, k) => `<button type="button" class="tile-w on" data-a="untile" data-k="${k}">${esc(t.tiles[ti])}</button>`).join("") || '<span class="ph">Tippe die Wörter in der richtigen Reihenfolge an</span>'}</div>
  <div class="pool">${t.tiles.map((w, i) => `<button type="button" class="tile-w" data-a="tile" data-i="${i}" ${R.built.includes(i) ? "disabled" : ""}>${esc(w)}</button>`).join("")}</div></div>`;
const micBtn = () => canListen ? `<button type="button" class="btn sec mic" data-a="mic">${ICON.mic} Nachsprechen</button><p class="heard" id="heard" aria-live="polite"></p>` : "";

function body(t) {
  const w = t.word;
  switch (t.type) {
    case "learn": return `<p class="kicker">Neues Wort · ${esc(unitOf(w.unit).title)}</p>
      <div class="word"><h2 lang="en">${esc(w.en)}</h2>${sayBtn(w.en, "lg")}</div>
      <p class="de">${esc(w.de)}</p>
      <div class="example"><p lang="en">${mark(w.ex, w.form)} ${sayBtn(w.ex)}</p><p class="muted">${esc(w.exDe)}</p></div>${micBtn()}`;
    case "mc-de": return `<p class="kicker">Was bedeutet das?</p><div class="word"><h2 lang="en">${esc(w.en)}</h2>${sayBtn(w.en, "lg")}</div>${optsHtml(t.o)}`;
    case "listen": return `<p class="kicker">Hör zu – was bedeutet das?</p><div class="word">${sayBtn(w.en, "xl")}</div>${optsHtml(t.o)}`;
    case "mc-en": return `<p class="kicker">Wie sagt man das auf Englisch?</p><div class="word"><h2>${esc(w.de)}</h2></div>${optsHtml(t.o, "en")}`;
    case "cloze": return `<p class="kicker">Was passt in die Lücke?</p><p class="sentence" lang="en">${gap(t.q)}</p><p class="muted">${esc(w.exDe)}</p>${optsHtml(t.o, "en")}`;
    case "type": return `<p class="kicker">Schreib es auf Englisch</p><div class="word"><h2>${esc(w.de)}</h2></div>
      <p class="muted">${esc(w.exDe)}</p>
      <input type="text" class="answer" id="answer" lang="en" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Englisch eintippen" aria-label="Antwort auf Englisch">`;
    case "build": return `<p class="kicker">Bau den Satz auf Englisch</p><p class="sentence">${esc(w.exDe)}</p>${buildArea(t)}`;
    case "speak": return `<p class="kicker">Sprich den Satz nach</p><p class="sentence" lang="en">${esc(w.ex)} ${sayBtn(w.ex)}</p><p class="muted">${esc(w.exDe)}</p>
      <button type="button" class="mic-big" data-a="mic" aria-label="Sprechen">${ICON.mic}</button><p class="heard" id="heard" aria-live="polite">Tippe aufs Mikrofon und sprich.</p>`;
    case "gc": return `<p class="kicker">${esc(R.title)}</p><p class="sentence" lang="en">${gap(t.ex.q)}</p>${optsHtml(t.ex.o, "en")}`;
    case "gb": return `<p class="kicker">${esc(R.title)} · Satz bauen</p><p class="sentence">${esc(t.ex.de)}</p>${buildArea(t)}`;
    case "pq": return `<p class="kicker">Einstufung · Frage ${R.i + 1} von ${R.steps.length}</p><p class="sentence" lang="en">${gap(t.q.q)}</p>${optsHtml(t.q.o, "en")}`;
  }
  return "";
}

function foot(t) {
  if (t.type === "learn") return `<button type="button" class="btn block" data-a="next">Weiter</button>`;
  if (t.type === "type") return `<div class="btns"><button type="button" class="btn sec" data-a="dunno">Weiß ich nicht</button><button type="button" class="btn" data-a="check">Prüfen</button></div>`;
  if (t.type === "build" || t.type === "gb") return `<div class="btns"><button type="button" class="btn sec" data-a="clear">Zurücksetzen</button><button type="button" class="btn" data-a="check" ${R.built.length === t.tiles.length ? "" : "disabled"}>Prüfen</button></div>`;
  if (t.type === "speak") return `<button type="button" class="btn sec block" data-a="skip">Überspringen</button>`;
  if (t.type === "pq") return `<button type="button" class="btn sec block" data-a="pq-skip">Weiß ich nicht</button>`;
  return "";
}

// Auswertung einer Antwort: Spaced Repetition (nur erster Versuch je Wort und Runde), XP, Feedback
function resolve(t, correct, info = {}) {
  R.answered = true;
  const now = Date.now();
  if (t.word && !info.noSrs && !R.srs.has(t.word.en)) {
    S.cards[t.word.en] = L.review(S.cards[t.word.en], correct, now);
    R.srs.add(t.word.en);
  }
  if (!t.again) correct ? R.right++ : R.wrong++;
  if (correct) gain(info.almost ? L.XP.almost : L.XP.right);
  else {
    const label = t.word ? t.word.en : (t.ex.b || t.ex.q.replace(/_{3,}/, t.ex.o[t.ex.a]));
    if (!R.mistakes.includes(label)) R.mistakes.push(label);
    // Falsches kommt am Ende der Runde noch einmal dran
    if (R.retry && !t.again) R.steps.push(again(t));
  }
  if (t.type === "speak" && correct) S.speakOk++;
  save();
  document.querySelectorAll("#run .opt, #run .tile-w, #run .answer").forEach(x => { x.disabled = true; });
  $("#run-foot").innerHTML = feedback(t, correct, info);
  $("#run-foot [data-a=next]").focus({ preventScroll: true });
}
function again(t) {
  if (t.word) { const pool = L.unitWords(t.word.unit); return { ...L.task(t.type === "speak" ? "type" : t.type, t.word, pool), again: true }; }
  if (t.type === "gb") return { ...t, tiles: L.scramble(t.ex.b), again: true };
  return { ...t, again: true };
}

function feedback(t, correct, info) {
  const head = correct ? (info.almost ? "Fast richtig – achte auf die Schreibweise" : PRAISE[Math.floor(Math.random() * PRAISE.length)]) : (info.skip ? "Übersprungen" : "Nicht ganz");
  let sol = "";
  if (t.word) {
    const w = t.word;
    sol = `<p class="sol"><b lang="en">${esc(w.en)}</b> ${sayBtn(w.en)} = ${esc(w.de)}</p>
      ${info.given && !correct ? `<p class="muted">Deine Antwort: ${esc(info.given)}</p>` : ""}
      <p class="ex" lang="en">${mark(w.ex, w.form)} ${sayBtn(w.ex)}</p><p class="muted">${esc(w.exDe)}</p>`;
    if (info.heard != null) sol = `<p class="muted">Verstanden: „${esc(info.heard || "…")}“</p>` + sol;
  } else if (t.type === "gc") {
    sol = `<p class="ex" lang="en">${esc(t.ex.q).replace(/_{3,}/, `<b>${esc(t.ex.o[t.ex.a])}</b>`)}</p><p class="muted">${esc(t.ex.de)}</p>${t.ex.x ? `<p class="why">💡 ${esc(t.ex.x)}</p>` : ""}`;
  } else if (t.type === "gb") {
    sol = `<p class="ex" lang="en">${esc(t.ex.b)} ${sayBtn(t.ex.b)}</p><p class="muted">${esc(t.ex.de)}</p>`;
  }
  return `<div class="fb ${correct ? "ok" : "bad"}" role="status"><b class="fb-h">${head}</b>${sol}
    <button type="button" class="btn block" data-a="next">Weiter</button></div>`;
}

$("#run").addEventListener("click", async e => {
  const b = e.target.closest("[data-a]");
  if (!b || b.disabled || !R) return;
  const t = R.steps[R.i], a = b.dataset.a;
  if (a === "close") { stopListening(); const k = R.kind; R = null; return k === "placement" && !S.placed ? renderIntro() : render(); }
  if (a === "next") { R.i++; return step(); }
  if (R.answered) return;
  if (a === "opt") {
    const i = Number(b.dataset.i);
    if (t.type === "pq") { R.answers[R.i] = i; R.i++; return step(); }
    const right = t.type === "gc" ? t.ex.a : t.a;
    document.querySelectorAll("#run .opt").forEach((o, k) => { if (k === right) o.classList.add("right"); });
    if (i !== right) b.classList.add("wrong");
    if (t.word && i === right) sayEn(t.word.en);
    return resolve(t, i === right);
  }
  if (a === "pq-skip") { R.answers[R.i] = null; R.i++; return step(); }
  if (a === "tile" || a === "untile" || a === "clear") {
    if (a === "tile") R.built.push(Number(b.dataset.i));
    if (a === "untile") R.built.splice(Number(b.dataset.k), 1);
    if (a === "clear") R.built = [];
    $("#build").outerHTML = buildArea(t);
    $("#run-foot").innerHTML = foot(t);
    return;
  }
  if (a === "check") {
    if (t.type === "type") {
      const v = $("#answer").value;
      if (!v.trim()) return $("#answer").focus();
      const res = L.checkTyped(v, t.word);
      if (res !== "wrong") sayEn(t.word.en);
      return resolve(t, res !== "wrong", { almost: res === "almost", given: v });
    }
    const target = t.type === "gb" ? t.ex.b : t.word.ex;
    const ok = L.sameSentence(R.built.map(i => t.tiles[i]).join(" "), target);
    if (ok) sayEn(target);
    return resolve(t, ok);
  }
  if (a === "dunno") return resolve(t, false);
  if (a === "skip") return resolve(t, false, { noSrs: true, skip: true });
  if (a === "mic") return speakAttempt(t, b);
});
$("#run").addEventListener("keydown", e => {
  if (e.key !== "Enter" || !R || R.finished) return;
  if (R.answered) { e.preventDefault(); R.i++; return step(); }
  if (e.target.id === "answer") { e.preventDefault(); $("#run [data-a=check]").click(); }
});

// Nachsprechen: auf Lernkarten nur als Übung, im Sprechtraining zählt es als Aufgabe
async function speakAttempt(t, btn) {
  const target = t.type === "learn" ? t.word.en.replace(/^to /, "") : t.word.ex;
  const out = $("#heard");
  btn.classList.add("rec"); btn.disabled = true;
  out.textContent = "Ich höre zu …";
  let alts = [];
  try { alts = await listen(S.voice); }
  catch (err) { out.textContent = err.message === "not-allowed" ? "Kein Zugriff aufs Mikrofon. Bitte im Browser erlauben." : "Das hat nicht geklappt. Versuch es noch einmal."; }
  btn.classList.remove("rec"); btn.disabled = false;
  if (!R || R.steps[R.i] !== t) return;
  if (!alts.length) { if (out.textContent === "Ich höre zu …") out.textContent = "Nichts gehört. Versuch es noch einmal."; return; }
  const ok = L.speechOk(alts, target);
  if (t.type === "learn") {
    out.innerHTML = ok ? `✅ Gut ausgesprochen!` : `Verstanden: „${esc(alts[0])}“ – hör noch mal hin und versuch es erneut.`;
    if (ok) { S.speakOk++; save(); }
    return;
  }
  if (ok) return resolve(t, true, { heard: alts[0] });
  R.tries++;
  if (R.tries >= 2) return resolve(t, false, { noSrs: true, heard: alts[0] });
  out.innerHTML = `Verstanden: „${esc(alts[0])}“ – noch ein Versuch!`;
}

function finishRun() {
  const r = R, now = Date.now();
  if (r.kind === "placement") {
    const res = L.placement(r.answers);
    S.level = res.level; S.refresh = res.refresh;
    save(); R = null;
    return renderIntro(res);
  }
  const total = r.right + r.wrong, pct = total ? Math.round(r.right / total * 100) : 100;
  if (r.kind === "lesson") { gain(L.XP.lesson); S.lessons++; if (!r.wrong) S.perfect++; }
  if (r.kind === "review") gain(L.XP.review);
  if (r.kind === "grammar") {
    gain(L.XP.grammar);
    const p = S.grammar[r.id] || { best: 0, runs: 0 };
    S.grammar[r.id] = { best: Math.max(p.best, pct), runs: p.runs + 1, last: now };
  }
  save();
  const badges = checkBadges();
  const next = r.kind === "lesson" ? L.nextUnit(S.cards, S.level) : null;
  const sub = r.kind === "speaking" ? `${r.right} von ${total} Sätzen erkannt` : `${r.right} von ${total} beim ersten Versuch richtig`;
  $("#run").innerHTML = `<div class="run-in done">
    <div class="done-hero"><small>${esc(r.title)}</small><div class="big">${pct} %</div><p>${sub}</p></div>
    <section class="kv3"><div><small>XP</small><b class="num">+${r.xp}</b></div><div><small>Heute</small><b class="num">${today()}<span>/${S.goal}</span></b></div><div><small>Serie</small><b class="num">${streakNow()}</b></div></section>
    ${badges.length ? `<section><div class="sec-h"><h2>Neue Abzeichen</h2></div><div class="badges">${badges.map(b => `<div class="badge on"><span>${b.icon}</span><b>${esc(b.title)}</b><small>${esc(b.desc)}</small></div>`).join("")}</div></section>` : ""}
    ${r.mistakes.length ? `<section><div class="sec-h"><h2>Kommt bald wieder</h2></div><ul class="words plain">${r.mistakes.map(m => `<li>${sayBtn(m)}<span lang="en">${esc(m)}</span></li>`).join("")}</ul></section>` : ""}
    <div class="btns">${next && next.id === r.id ? `<button type="button" class="btn sec" data-a="more">Weiter mit ${esc(next.title)}</button>` : ""}<button type="button" class="btn" data-a="done">Fertig</button></div></div>`;
  R = { ...r, i: r.steps.length, answered: true, finished: true };
  badges.forEach(b => toast(`${b.icon} Abzeichen: ${b.title}`));
}

$("#run").addEventListener("click", e => {
  const b = e.target.closest("[data-a=done],[data-a=more]");
  if (!b || !R?.finished) return;
  const id = R.id;
  R = null;
  if (b.dataset.a === "more") return startLesson(id);
  render();
});

render();

// Laufende Runde nicht durch ein App-Update neu laden
window.appBusy = () => !!(R && !R.finished);
