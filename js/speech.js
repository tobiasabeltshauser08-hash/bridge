// Aussprache: Vorlesen (speechSynthesis) und Spracherkennung (SpeechRecognition), jeweils nur wenn vorhanden
const synth = typeof window !== "undefined" ? window.speechSynthesis : undefined;
const Recognition = typeof window !== "undefined" ? (window.SpeechRecognition || window.webkitSpeechRecognition) : undefined;

export const canSpeak = !!synth && typeof SpeechSynthesisUtterance !== "undefined";
export const canListen = !!Recognition;

let voices = [];
function loadVoices() { try { voices = synth.getVoices(); } catch (e) { voices = []; } }
if (canSpeak) { loadVoices(); synth.addEventListener?.("voiceschanged", loadVoices); }

// Passende Stimme: genau die Sprache (en-GB / en-US), sonst irgendein Englisch
function voiceFor(lang) {
  const norm = v => v.lang.replace("_", "-").toLowerCase();
  return voices.find(v => norm(v) === lang.toLowerCase() && v.localService)
    || voices.find(v => norm(v) === lang.toLowerCase())
    || voices.find(v => norm(v).startsWith("en"));
}
export const hasEnglishVoice = () => canSpeak && (!voices.length || !!voiceFor("en-GB"));

export function say(text, { lang = "en-GB", rate = 1 } = {}) {
  if (!canSpeak) return;
  try {
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = rate;
    const v = voiceFor(lang);
    if (v) u.voice = v;
    synth.speak(u);
  } catch (e) {}
}

// Hört einmal zu und liefert die erkannten Varianten (bis zu 5)
let active = null;
export function listen(lang = "en-GB") {
  if (!canListen) return Promise.reject(new Error("unsupported"));
  stopListening();
  return new Promise((resolve, reject) => {
    const r = new Recognition();
    active = r;
    r.lang = lang;
    r.interimResults = false;
    r.maxAlternatives = 5;
    let done = false;
    r.onresult = e => { done = true; resolve([...e.results[0]].map(a => a.transcript)); };
    r.onerror = e => { done = true; reject(new Error(e.error || "error")); };
    r.onend = () => { active = null; if (!done) resolve([]); };
    try { r.start(); } catch (e) { reject(e); }
  });
}
export function stopListening() { try { active?.abort(); } catch (e) {} active = null; }
