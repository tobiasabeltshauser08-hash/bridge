# Bridge – Englisch A2–B1

Englisch-App (PWA) für alle, die zwischen Anfänger und Fortgeschritten stehen: vom Schulenglisch zum sicheren Alltagsenglisch.
Sie lässt sich auf dem Handy installieren und läuft danach auch offline.

- **Einstufung beim ersten Start:** 10 kurze Fragen → Startpunkt A2 oder B1 (überspringbar, im Profil wiederholbar).
  Wenn bei Grundlagen etwas hakt, empfiehlt die App die A1-Einheiten zum Auffrischen.
- **Wortschatz:** 220 Wörter in 15 Einheiten (A1 Auffrischen, A2, B1) – Arbeit, Reisen & Unterkunft, Gesundheit, Wohnen,
  Einkaufen & Reklamieren, Gefühle, Telefon & E-Mail, Meinungen, Medien, Umwelt, Bewerbung, Phrasal Verbs.
  Jede Lektion: neue Wörter als Karte mit Beispielsatz, dann üben mit Auswahl, Lückensatz, Eintippen und Satzbau.
- **Wiederholung (Spaced Repetition):** fällige Wörter zuerst. Richtig → längerer Abstand (1, 3, 7, 14, 30, 60 Tage),
  falsch → morgen wieder. Wörter mit vielen Fehlern kommen öfter. Falsche Antworten kommen am Ende der Runde noch einmal.
- **Grammatik:** 22 Themen, auf Deutsch erklärt, mit Tabellen, Beispielen zum Anhören und 167 Übungen mit sofortiger Erklärung.
  Dazu typische Fehler deutscher Lerner (become/get, since/for, make/do, actual/current …).
- **Aussprache:** Vorlesen in britischem oder amerikanischem Englisch, auf Wunsch langsamer.
  Nachsprechen mit Spracherkennung, wo der Browser sie anbietet (Chrome); sonst wird es ausgeblendet.
- **Motivation:** XP, Tagesziel, Serie (Tage mit erreichtem Tagesziel) und 15 Abzeichen.
- **Mobil zuerst**, Hell-/Dunkelmodus (automatisch oder fest).

Alles bleibt auf dem Gerät (localStorage im Browser). Nichts wird hochgeladen.

## Starten

```bash
cd english-app
python3 -m http.server 8000
```

Dann im Browser **http://localhost:8000** öffnen.

## Als App installieren

- **Android (Chrome):** Seite öffnen → Menü ⋮ → „App installieren“
- **iPhone (Safari):** Teilen → „Zum Home-Bildschirm“
- **PC (Chrome/Edge):** In der Adressleiste auf das Installieren-Symbol klicken

Wenn du später Dateien änderst, erhöhe in `sw.js` die Versionsnummer (z. B. `bridge-v1` → `bridge-v2`).
Sonst zeigen bereits installierte Apps weiter die alte Version.

## Test

```bash
node tests/test.js
```

Prüft die Inhalte (gültige Antwort-Indizes, keine doppelten Wörter, Niveau je Einheit, Wort steht im Beispielsatz)
und die Logik ohne Browser (Antwortprüfung, Spaced Repetition, Lektionen, Einstufung, Serie, Abzeichen).

## Inhalte erweitern

In `js/data.js`:

- **Vokabel:** `['englisch', 'deutsch', 'Beispielsatz EN', 'Beispielsatz DE', 'Form im Satz']` –
  die Form nur angeben, wenn das Wort im Satz anders geschrieben wird (`'to live'` → `'live'`).
- **Grammatik-Übung:** `{ q: 'Satz mit ___', o: [Optionen], a: Index der richtigen, de: 'Übersetzung', x: 'kurze Erklärung' }`
  oder Satzbau `{ b: 'englischer Satz', de: 'Übersetzung' }`.
- Jede Einheit und jedes Thema braucht `level: 'A1' | 'A2' | 'B1'`.

## Aufbau

| Datei | Inhalt |
|---|---|
| `js/app.js` | Oberfläche: Einstieg & Einstufung, Heute, Wörter, Grammatik, Profil, Übungs-Runden |
| `js/logic.js` | Lernlogik ohne DOM: Antwortprüfung, Spaced Repetition, Lektionen, Einstufung, Serie, Abzeichen |
| `js/data.js` | Lerninhalte: Einheiten, Grammatik, Einstufungsfragen, Abzeichen |
| `js/speech.js` | Vorlesen (speechSynthesis) und Spracherkennung (SpeechRecognition) |
| `sw.js` | Service Worker für den Offline-Betrieb |
