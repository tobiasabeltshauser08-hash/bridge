// Lerninhalte – Schwerpunkt A2 bis B1, dazu ein kurzer A1-Bereich zum Auffrischen.
// Vokabel-Format: [englisch, deutsch, Beispielsatz EN, Beispielsatz DE, Form im Satz (optional)]
// Die Form ist die Schreibweise, in der das Wort im Beispielsatz vorkommt (z. B. 'to live' → 'live').

export const LEVELS = ['A1', 'A2', 'B1'];
export const LEVEL_INFO = {
  A1: 'Auffrischen',
  A2: 'Grundlagen festigen',
  B1: 'Selbstständig sprechen',
};

export const UNITS = [
  // ---------- A1: Auffrischen ----------
  { id: 'r1', level: 'A1', icon: '👋', title: 'Ich & meine Leute', words: [
    ['nice to meet you', 'freut mich (kennenzulernen)', 'Hi Tom, nice to meet you.', 'Hallo Tom, freut mich, dich kennenzulernen.'],
    ['how are you', 'wie geht es dir', 'Hi Lisa, how are you today?', 'Hallo Lisa, wie geht es dir heute?'],
    ['sorry', 'Entschuldigung', "Sorry, I don't understand.", 'Entschuldigung, ich verstehe das nicht.'],
    ['friend', 'Freund / Freundin', 'Sarah is my best friend.', 'Sarah ist meine beste Freundin.'],
    ['from', 'aus / von', "I'm from Germany.", 'Ich komme aus Deutschland.'],
    ['to live', 'wohnen / leben', 'I live in Munich.', 'Ich wohne in München.', 'live'],
    ['parents', 'Eltern', 'My parents live in Hamburg.', 'Meine Eltern wohnen in Hamburg.'],
    ['sister', 'Schwester', 'I have one sister.', 'Ich habe eine Schwester.'],
    ['brother', 'Bruder', 'My brother is 25 years old.', 'Mein Bruder ist 25 Jahre alt.'],
    ['children', 'Kinder', 'They have three children.', 'Sie haben drei Kinder.'],
    ['husband', 'Ehemann', 'Her husband is from Spain.', 'Ihr Mann kommt aus Spanien.'],
    ['wife', 'Ehefrau', 'His wife is a doctor.', 'Seine Frau ist Ärztin.'],
    ['married', 'verheiratet', 'Are you married?', 'Bist du verheiratet?'],
    ['neighbour', 'Nachbar / Nachbarin', 'Our neighbour has a dog.', 'Unser Nachbar hat einen Hund.'],
  ]},
  { id: 'r2', level: 'A1', icon: '🕒', title: 'Alltag & Essen', words: [
    ['yesterday', 'gestern', 'I was at home yesterday.', 'Ich war gestern zu Hause.'],
    ['tomorrow', 'morgen', 'See you tomorrow.', 'Bis morgen.'],
    ['weekend', 'Wochenende', 'What are you doing at the weekend?', 'Was machst du am Wochenende?'],
    ['always', 'immer', 'She always drinks tea.', 'Sie trinkt immer Tee.'],
    ['never', 'nie', 'I never eat meat.', 'Ich esse nie Fleisch.'],
    ['early', 'früh', 'I get up early.', 'Ich stehe früh auf.'],
    ['late', 'spät', 'Sorry, I am late.', 'Entschuldigung, ich bin spät dran.'],
    ['breakfast', 'Frühstück', 'I have breakfast at seven.', 'Ich frühstücke um sieben.'],
    ['lunch', 'Mittagessen', "Let's have lunch together.", 'Lass uns zusammen zu Mittag essen.'],
    ['dinner', 'Abendessen', 'Dinner is ready!', 'Das Abendessen ist fertig!'],
    ['vegetables', 'Gemüse', 'You should eat more vegetables.', 'Du solltest mehr Gemüse essen.'],
    ['hungry', 'hungrig', "I'm so hungry!", 'Ich habe so einen Hunger!'],
    ['bill', 'Rechnung', 'Can we have the bill, please?', 'Können wir bitte die Rechnung haben?'],
    ['delicious', 'lecker', 'The soup is delicious.', 'Die Suppe ist lecker.'],
  ]},
  { id: 'r3', level: 'A1', icon: '🗺️', title: 'Stadt & Freizeit', words: [
    ['station', 'Bahnhof', 'How do I get to the station?', 'Wie komme ich zum Bahnhof?'],
    ['left', 'links', 'Turn left at the church.', 'Biegen Sie an der Kirche links ab.'],
    ['right', 'rechts', 'The museum is on the right.', 'Das Museum ist auf der rechten Seite.'],
    ['straight on', 'geradeaus', 'Go straight on for 200 metres.', 'Gehen Sie 200 Meter geradeaus.'],
    ['near', 'in der Nähe', 'Is there a supermarket near here?', 'Gibt es hier in der Nähe einen Supermarkt?'],
    ['bus stop', 'Bushaltestelle', 'Where is the next bus stop?', 'Wo ist die nächste Bushaltestelle?'],
    ['ticket', 'Fahrkarte / Eintrittskarte', 'I need a ticket to London.', 'Ich brauche eine Fahrkarte nach London.'],
    ['cheap', 'billig / günstig', 'These shoes were really cheap.', 'Diese Schuhe waren echt günstig.'],
    ['expensive', 'teuer', 'London is very expensive.', 'London ist sehr teuer.'],
    ['how much', 'wie viel', 'How much is this?', 'Wie viel kostet das?'],
    ['to pay', 'bezahlen', 'Can I pay in cash?', 'Kann ich bar bezahlen?', 'pay'],
    ['free time', 'Freizeit', 'What do you do in your free time?', 'Was machst du in deiner Freizeit?'],
    ['to meet', 'treffen', "Let's meet at the café.", 'Lass uns im Café treffen.', 'meet'],
    ['tired', 'müde', "I'm really tired today.", 'Ich bin heute echt müde.'],
  ]},

  // ---------- A2 ----------
  { id: 'work', level: 'A2', icon: '💼', title: 'Arbeit & Beruf', words: [
    ['colleague', 'Kollege / Kollegin', 'My colleague helped me with the report.', 'Mein Kollege hat mir beim Bericht geholfen.'],
    ['to work full-time', 'Vollzeit arbeiten', 'She works full-time at a bank.', 'Sie arbeitet Vollzeit bei einer Bank.', 'works full-time'],
    ['part-time', 'Teilzeit', 'I have a part-time job in a café.', 'Ich habe einen Teilzeitjob in einem Café.'],
    ['to be responsible for', 'zuständig sein für', 'I am responsible for the customer service team.', 'Ich bin für das Kundenservice-Team zuständig.', 'am responsible for'],
    ['deadline', 'Abgabetermin / Frist', 'The deadline for the project is Friday.', 'Die Frist für das Projekt ist Freitag.'],
    ['salary', 'Gehalt', 'She asked her boss for a higher salary.', 'Sie hat ihren Chef um ein höheres Gehalt gebeten.'],
    ['to work overtime', 'Überstunden machen', 'We had to work overtime last week.', 'Wir mussten letzte Woche Überstunden machen.', 'work overtime'],
    ['shift', 'Schicht', 'Nurses often work night shifts.', 'Pflegekräfte arbeiten oft in Nachtschichten.'],
    ['to take a day off', 'sich einen Tag freinehmen', "I'm taking a day off on Monday.", 'Ich nehme mir am Montag einen Tag frei.', 'taking a day off'],
    ['customer', 'Kunde / Kundin', "The customer wasn't happy with the service.", 'Der Kunde war mit dem Service nicht zufrieden.'],
    ['company', 'Firma / Unternehmen', 'He works for a small company in Leipzig.', 'Er arbeitet für eine kleine Firma in Leipzig.'],
    ['to run a business', 'ein Geschäft führen', 'My aunt runs a small business.', 'Meine Tante führt ein kleines Geschäft.', 'runs a small business'],
    ['experience', 'Erfahrung', 'Do you have any experience in sales?', 'Haben Sie Erfahrung im Verkauf?'],
    ['to be on sick leave', 'krankgeschrieben sein', 'Tom is on sick leave this week.', 'Tom ist diese Woche krankgeschrieben.', 'is on sick leave'],
  ]},
  { id: 'travel', level: 'A2', icon: '✈️', title: 'Reisen & Unterkunft', words: [
    ['to check in', 'einchecken', 'We can check in after 3 pm.', 'Wir können ab 15 Uhr einchecken.', 'check in'],
    ['to check out', 'auschecken', "You have to check out by 11 o'clock.", 'Sie müssen bis 11 Uhr auschecken.', 'check out'],
    ['reservation', 'Reservierung', 'I have a reservation for two nights.', 'Ich habe eine Reservierung für zwei Nächte.'],
    ['single room', 'Einzelzimmer', 'A single room costs 80 pounds a night.', 'Ein Einzelzimmer kostet 80 Pfund pro Nacht.'],
    ['double room', 'Doppelzimmer', "We'd like a double room with a balcony.", 'Wir hätten gern ein Doppelzimmer mit Balkon.'],
    ['return ticket', 'Rückfahrkarte', 'A return ticket to Oxford, please.', 'Eine Rückfahrkarte nach Oxford, bitte.'],
    ['delayed', 'verspätet', 'Our train was delayed by forty minutes.', 'Unser Zug hatte vierzig Minuten Verspätung.'],
    ['to miss', 'verpassen', "Hurry up or we'll miss the bus!", 'Beeil dich, sonst verpassen wir den Bus!', 'miss'],
    ['luggage', 'Gepäck', 'How much luggage can I take on the plane?', 'Wie viel Gepäck darf ich ins Flugzeug mitnehmen?'],
    ['to set off', 'aufbrechen / losfahren', 'We set off early to avoid the traffic.', 'Wir sind früh losgefahren, um dem Verkehr zu entgehen.', 'set off'],
    ['accommodation', 'Unterkunft', 'Accommodation in London is very expensive.', 'Unterkünfte in London sind sehr teuer.'],
    ['sights', 'Sehenswürdigkeiten', 'We saw all the sights in two days.', 'Wir haben alle Sehenswürdigkeiten in zwei Tagen gesehen.'],
    ['to go abroad', 'ins Ausland reisen', 'Have you ever gone abroad on your own?', 'Bist du schon einmal allein ins Ausland gereist?', 'gone abroad'],
    ['passport control', 'Passkontrolle', 'There was a long wait at passport control.', 'An der Passkontrolle mussten wir lange warten.'],
    ['to queue', '(in einer Schlange) anstehen', 'We had to queue for an hour at the museum.', 'Wir mussten am Museum eine Stunde anstehen.', 'queue'],
  ]},
  { id: 'health', level: 'A2', icon: '🩺', title: 'Gesundheit', words: [
    ['to make an appointment', 'einen Termin vereinbaren', "I'd like to make an appointment with Dr Smith.", 'Ich möchte einen Termin bei Dr. Smith vereinbaren.', 'make an appointment'],
    ['sore throat', 'Halsschmerzen', "I've got a sore throat and a cough.", 'Ich habe Halsschmerzen und Husten.'],
    ['cough', 'Husten', 'That cough sounds bad.', 'Der Husten klingt schlimm.'],
    ['headache', 'Kopfschmerzen', 'Screens give me a headache.', 'Von Bildschirmen bekomme ich Kopfschmerzen.'],
    ['to feel sick', 'sich übel fühlen', 'I always feel sick on boats.', 'Auf Booten wird mir immer übel.', 'feel sick'],
    ['to have a temperature', 'Fieber haben', 'He has a temperature of 39 degrees.', 'Er hat 39 Grad Fieber.', 'has a temperature'],
    ['prescription', 'Rezept (vom Arzt)', 'You need a prescription for these tablets.', 'Für diese Tabletten brauchst du ein Rezept.'],
    ['painkiller', 'Schmerzmittel', 'Take a painkiller and lie down.', 'Nimm ein Schmerzmittel und leg dich hin.'],
    ['to get better', 'gesund werden / sich erholen', 'I hope you get better soon.', 'Ich hoffe, du wirst bald wieder gesund.', 'get better'],
    ['to hurt', 'wehtun', 'My back hurts when I sit too long.', 'Mein Rücken tut weh, wenn ich zu lange sitze.', 'hurts'],
    ['to break', 'brechen (Knochen)', 'She broke her arm when she was skiing.', 'Sie hat sich beim Skifahren den Arm gebrochen.', 'broke'],
    ['allergic to', 'allergisch gegen', "I'm allergic to nuts.", 'Ich bin allergisch gegen Nüsse.'],
    ['to keep fit', 'fit bleiben', 'I cycle to work to keep fit.', 'Ich fahre mit dem Rad zur Arbeit, um fit zu bleiben.', 'keep fit'],
    ['healthy', 'gesund', 'A healthy diet is important.', 'Eine gesunde Ernährung ist wichtig.'],
  ]},
  { id: 'home', level: 'A2', icon: '🏠', title: 'Wohnen', words: [
    ['flat', 'Wohnung', "We're looking for a flat with two bedrooms.", 'Wir suchen eine Wohnung mit zwei Schlafzimmern.'],
    ['to rent', 'mieten', "We rent our flat; we don't own it.", 'Wir mieten unsere Wohnung, sie gehört uns nicht.', 'rent'],
    ['landlord', 'Vermieter', 'The landlord wants to raise the rent.', 'Der Vermieter will die Miete erhöhen.'],
    ['bills', 'Nebenkosten / Rechnungen', 'Are the bills included in the rent?', 'Sind die Nebenkosten in der Miete enthalten?'],
    ['furnished', 'möbliert', 'The flat is fully furnished.', 'Die Wohnung ist komplett möbliert.'],
    ['to move', 'umziehen', 'We moved to Cologne last year.', 'Wir sind letztes Jahr nach Köln gezogen.', 'moved'],
    ['to move in', 'einziehen', 'When can we move in?', 'Wann können wir einziehen?', 'move in'],
    ['neighbourhood', 'Wohngegend / Viertel', "It's a quiet neighbourhood with lots of parks.", 'Es ist eine ruhige Gegend mit vielen Parks.'],
    ['to do the washing-up', 'abwaschen', "It's your turn to do the washing-up.", 'Du bist mit Abwaschen dran.', 'do the washing-up'],
    ['to tidy up', 'aufräumen', 'Please tidy up your room.', 'Bitte räum dein Zimmer auf.', 'tidy up'],
    ['to fix', 'reparieren', 'Can you fix the heating?', 'Kannst du die Heizung reparieren?', 'fix'],
    ['heating', 'Heizung', "The heating doesn't work.", 'Die Heizung funktioniert nicht.'],
    ['upstairs', 'oben / nach oben', 'The bathroom is upstairs.', 'Das Bad ist oben.'],
    ['downstairs', 'unten / nach unten', 'Our neighbours downstairs are very loud.', 'Unsere Nachbarn unten sind sehr laut.'],
    ['flatmate', 'Mitbewohner / Mitbewohnerin', 'My flatmate always forgets to buy milk.', 'Mein Mitbewohner vergisst immer, Milch zu kaufen.'],
  ]},
  { id: 'shop', level: 'A2', icon: '🛍️', title: 'Einkaufen & Reklamieren', words: [
    ['to try on', 'anprobieren', 'Can I try on these jeans?', 'Kann ich diese Jeans anprobieren?', 'try on'],
    ['size', 'Größe', 'Have you got this in a smaller size?', 'Haben Sie das eine Nummer kleiner?'],
    ['to fit', 'passen (Größe)', "This jacket doesn't fit me.", 'Diese Jacke passt mir nicht.', 'fit'],
    ['receipt', 'Kassenbon / Quittung', 'Do you still have the receipt?', 'Haben Sie den Kassenbon noch?'],
    ['refund', 'Rückerstattung', "I'd like a refund, please.", 'Ich hätte gern mein Geld zurück.'],
    ['to take back', 'zurückbringen', 'I took the shoes back because they were too small.', 'Ich habe die Schuhe zurückgebracht, weil sie zu klein waren.', 'took the shoes back'],
    ['to exchange', 'umtauschen', 'Can I exchange this for a different colour?', 'Kann ich das gegen eine andere Farbe umtauschen?', 'exchange'],
    ['to complain', 'sich beschweren', 'I want to complain about the service.', 'Ich möchte mich über den Service beschweren.', 'complain'],
    ['broken', 'kaputt', 'The zip on this bag is broken.', 'Der Reißverschluss an dieser Tasche ist kaputt.'],
    ['on sale', 'im Angebot / reduziert', 'These boots are on sale this week.', 'Diese Stiefel sind diese Woche reduziert.'],
    ['bargain', 'Schnäppchen', "Only ten euros? That's a bargain!", 'Nur zehn Euro? Das ist ein Schnäppchen!'],
    ['to pay by card', 'mit Karte zahlen', 'Can I pay by card?', 'Kann ich mit Karte zahlen?', 'pay by card'],
    ['to order', 'bestellen', 'I often order books online.', 'Ich bestelle oft Bücher im Internet.', 'order'],
    ['delivery', 'Lieferung', 'Delivery is free for orders over 50 euros.', 'Die Lieferung ist ab 50 Euro kostenlos.'],
    ['customer service', 'Kundenservice', 'I called customer service three times.', 'Ich habe dreimal beim Kundenservice angerufen.'],
  ]},
  { id: 'feel', level: 'A2', icon: '😊', title: 'Gefühle & Beziehungen', words: [
    ['excited', 'gespannt / voller Vorfreude', "I'm so excited about the trip!", 'Ich freue mich so auf die Reise!'],
    ['worried', 'besorgt', "She's worried about her exam.", 'Sie macht sich Sorgen wegen ihrer Prüfung.'],
    ['disappointed', 'enttäuscht', 'We were disappointed with the hotel.', 'Wir waren vom Hotel enttäuscht.'],
    ['embarrassed', 'verlegen / peinlich berührt', 'I was so embarrassed when I fell over.', 'Es war mir so peinlich, als ich hingefallen bin.'],
    ['proud of', 'stolz auf', "I'm really proud of you.", 'Ich bin wirklich stolz auf dich.'],
    ['jealous', 'eifersüchtig / neidisch', 'He gets jealous when she talks to other men.', 'Er wird eifersüchtig, wenn sie mit anderen Männern redet.'],
    ['upset', 'traurig / aufgewühlt', 'She was upset because nobody called her.', 'Sie war traurig, weil niemand sie angerufen hat.'],
    ['relaxed', 'entspannt', 'I feel relaxed after a long walk.', 'Nach einem langen Spaziergang fühle ich mich entspannt.'],
    ['scared of', 'Angst haben vor', 'My son is scared of dogs.', 'Mein Sohn hat Angst vor Hunden.'],
    ['annoyed', 'genervt', 'I get annoyed when people are late.', 'Ich bin genervt, wenn Leute zu spät kommen.'],
    ['to get on well with', 'sich gut verstehen mit', 'I get on well with my sister.', 'Ich verstehe mich gut mit meiner Schwester.', 'get on well with'],
    ['to fall in love', 'sich verlieben', 'They fell in love in Paris.', 'Sie haben sich in Paris verliebt.', 'fell in love'],
    ['to break up', 'sich trennen / Schluss machen', 'Tom and Mia broke up last month.', 'Tom und Mia haben sich letzten Monat getrennt.', 'broke up'],
    ['to miss someone', 'jemanden vermissen', 'I miss you so much!', 'Ich vermisse dich so sehr!', 'miss you'],
    ['to cheer up', 'aufmuntern / fröhlicher werden', "Cheer up! It's not that bad.", 'Kopf hoch! So schlimm ist es nicht.', 'cheer up'],
  ]},

  // ---------- B1 ----------
  { id: 'phone', level: 'B1', icon: '📞', title: 'Telefon & E-Mail', words: [
    ['to call back', 'zurückrufen', 'Can I call you back in ten minutes?', 'Kann ich dich in zehn Minuten zurückrufen?', 'call you back'],
    ['to hang up', 'auflegen', "Don't hang up, I'm still here!", 'Leg nicht auf, ich bin noch dran!', 'hang up'],
    ['to hold on', 'dranbleiben / kurz warten', "Hold on, I'll check.", 'Bleiben Sie dran, ich sehe nach.', 'hold on'],
    ['to put through', 'durchstellen', 'Could you put me through to the sales department?', 'Könnten Sie mich zur Verkaufsabteilung durchstellen?', 'put me through'],
    ['to leave a message', 'eine Nachricht hinterlassen', 'Would you like to leave a message?', 'Möchten Sie eine Nachricht hinterlassen?', 'leave a message'],
    ['to get through', 'durchkommen (am Telefon)', "I tried to call, but I couldn't get through.", 'Ich habe versucht anzurufen, bin aber nicht durchgekommen.', 'get through'],
    ['attachment', 'Anhang', 'Please find the invoice in the attachment.', 'Die Rechnung finden Sie im Anhang.'],
    ['to forward', 'weiterleiten', 'Could you forward me his email?', 'Könntest du mir seine E-Mail weiterleiten?', 'forward'],
    ['I look forward to hearing from you', 'Ich freue mich auf Ihre Antwort', 'Thank you for your help. I look forward to hearing from you.', 'Danke für Ihre Hilfe. Ich freue mich auf Ihre Antwort.'],
    ['regarding', 'bezüglich', "I'm writing regarding your order.", 'Ich schreibe bezüglich Ihrer Bestellung.'],
    ['to reply', 'antworten', 'Sorry for not replying sooner.', 'Entschuldige, dass ich nicht früher geantwortet habe.', 'replying'],
    ['Kind regards', 'Mit freundlichen Grüßen', 'Kind regards, Julia Weber', 'Mit freundlichen Grüßen, Julia Weber'],
    ['to confirm', 'bestätigen', 'Can you confirm the date of the meeting?', 'Können Sie das Datum der Besprechung bestätigen?', 'confirm'],
    ['bad connection', 'schlechte Verbindung', "Sorry, it's a bad connection. Can you repeat that?", 'Entschuldigung, die Verbindung ist schlecht. Können Sie das wiederholen?'],
    ['to get in touch', 'sich melden / Kontakt aufnehmen', "I'll get in touch next week.", 'Ich melde mich nächste Woche.', 'get in touch'],
  ]},
  { id: 'opinion', level: 'B1', icon: '💬', title: 'Meinungen äußern', words: [
    ['in my opinion', 'meiner Meinung nach', 'In my opinion, the film was too long.', 'Meiner Meinung nach war der Film zu lang.'],
    ['I agree', 'ich stimme zu', 'I agree with you completely.', 'Ich stimme dir völlig zu.'],
    ['I disagree', 'ich sehe das anders', 'Sorry, but I disagree.', 'Tut mir leid, aber ich sehe das anders.'],
    ['as far as I know', 'soweit ich weiß', 'As far as I know, the shop is closed on Sundays.', 'Soweit ich weiß, hat der Laden sonntags zu.'],
    ['on the one hand', 'einerseits', "On the one hand, the city is exciting. On the other hand, it's very expensive.", 'Einerseits ist die Stadt spannend. Andererseits ist sie sehr teuer.'],
    ['on the other hand', 'andererseits', 'Cars are practical. On the other hand, they are bad for the environment.', 'Autos sind praktisch. Andererseits schaden sie der Umwelt.'],
    ['to be against', 'dagegen sein', 'Many people are against the new airport.', 'Viele Leute sind gegen den neuen Flughafen.', 'are against'],
    ['to be in favour of', 'dafür sein', "I'm in favour of a four-day week.", 'Ich bin für eine Vier-Tage-Woche.', 'in favour of'],
    ['advantage', 'Vorteil', 'The big advantage is the price.', 'Der große Vorteil ist der Preis.'],
    ['disadvantage', 'Nachteil', 'One disadvantage of working from home is that you feel lonely.', 'Ein Nachteil vom Homeoffice ist, dass man sich einsam fühlt.'],
    ['to convince', 'überzeugen', "You haven't convinced me.", 'Du hast mich nicht überzeugt.', 'convinced'],
    ["that's a good point", 'guter Punkt / da hast du recht', "That's a good point. I hadn't thought of that.", 'Guter Punkt. Daran hatte ich nicht gedacht.'],
    ['it depends', 'es kommt darauf an', 'Do I like big cities? It depends.', 'Ob ich Großstädte mag? Es kommt darauf an.'],
    ['to be sure', 'sicher sein', "I'm not sure that's true.", 'Ich bin nicht sicher, ob das stimmt.', 'sure'],
    ['actually', 'eigentlich / tatsächlich (nicht: aktuell!)', "Actually, I think you're wrong.", 'Eigentlich glaube ich, dass du falschliegst.'],
  ]},
  { id: 'media', level: 'B1', icon: '📱', title: 'Medien & Internet', words: [
    ['news', 'Nachrichten (Einzahl!)', 'The news is on at eight.', 'Die Nachrichten kommen um acht.'],
    ['headline', 'Schlagzeile', 'Did you see the headline this morning?', 'Hast du heute Morgen die Schlagzeile gesehen?'],
    ['article', 'Artikel', 'I read an interesting article about sleep.', 'Ich habe einen interessanten Artikel über Schlaf gelesen.'],
    ['to post', 'posten / veröffentlichen', 'She posts photos online every day.', 'Sie postet jeden Tag Fotos im Netz.', 'posts'],
    ['social media', 'soziale Medien', 'Teenagers spend hours on social media.', 'Teenager verbringen Stunden in den sozialen Medien.'],
    ['to share', 'teilen', 'Can you share the link with me?', 'Kannst du den Link mit mir teilen?', 'share'],
    ['to download', 'herunterladen', 'You can download the app for free.', 'Du kannst die App kostenlos herunterladen.', 'download'],
    ['to subscribe to', 'abonnieren', 'I subscribe to a few podcasts.', 'Ich habe ein paar Podcasts abonniert.', 'subscribe to'],
    ['fake news', 'Falschmeldungen', "It's not always easy to recognise fake news.", 'Es ist nicht immer leicht, Falschmeldungen zu erkennen.'],
    ['reliable', 'zuverlässig', 'Is this website a reliable source?', 'Ist diese Webseite eine zuverlässige Quelle?'],
    ['advert', 'Werbung / Anzeige', 'There are too many adverts on TV.', 'Im Fernsehen gibt es zu viel Werbung.'],
    ['screen time', 'Bildschirmzeit', 'I want to reduce my screen time.', 'Ich will meine Bildschirmzeit reduzieren.'],
    ['to go viral', 'sich rasend schnell verbreiten', 'The video went viral overnight.', 'Das Video hat sich über Nacht rasend schnell verbreitet.', 'went viral'],
    ['series', 'Serie', 'I watched a whole series in one weekend.', 'Ich habe an einem Wochenende eine ganze Serie geschaut.'],
    ['to keep up with', 'auf dem Laufenden bleiben', 'I read the news to keep up with politics.', 'Ich lese Nachrichten, um bei der Politik auf dem Laufenden zu bleiben.', 'keep up with'],
  ]},
  { id: 'nature', level: 'B1', icon: '🌱', title: 'Umwelt', words: [
    ['environment', 'Umwelt', 'We must protect the environment.', 'Wir müssen die Umwelt schützen.'],
    ['climate change', 'Klimawandel', 'Climate change affects everyone.', 'Der Klimawandel betrifft alle.'],
    ['pollution', 'Verschmutzung', 'Air pollution is a big problem in many cities.', 'Luftverschmutzung ist in vielen Städten ein großes Problem.'],
    ['to recycle', 'recyceln', 'We recycle glass, paper and plastic.', 'Wir recyceln Glas, Papier und Plastik.', 'recycle'],
    ['waste', 'Abfall / Verschwendung', "Throwing away good food is a waste.", 'Gutes Essen wegzuwerfen ist Verschwendung.'],
    ['to throw away', 'wegwerfen', "Don't throw away old clothes. Give them to a charity shop.", 'Wirf alte Kleidung nicht weg. Gib sie einem Secondhandladen.', 'throw away'],
    ['to save energy', 'Energie sparen', 'Turn off the lights to save energy.', 'Mach das Licht aus, um Energie zu sparen.', 'save energy'],
    ['renewable energy', 'erneuerbare Energie', 'Germany produces a lot of renewable energy.', 'Deutschland erzeugt viel erneuerbare Energie.'],
    ['public transport', 'öffentliche Verkehrsmittel', 'I use public transport instead of my car.', 'Ich nutze öffentliche Verkehrsmittel statt meines Autos.'],
    ['to reduce', 'verringern', 'We need to reduce the amount of plastic we use.', 'Wir müssen die Menge an Plastik verringern, die wir verbrauchen.', 'reduce'],
    ['carbon footprint', 'CO₂-Fußabdruck', 'Flying increases your carbon footprint.', 'Fliegen vergrößert deinen CO₂-Fußabdruck.'],
    ['sustainable', 'nachhaltig', 'We buy sustainable products where possible.', 'Wir kaufen nachhaltige Produkte, wo es geht.'],
    ['to run out of', 'ausgehen (Vorrat)', 'One day we will run out of oil.', 'Eines Tages wird uns das Öl ausgehen.', 'run out of'],
    ['flood', 'Überschwemmung', 'The flood destroyed hundreds of homes.', 'Die Überschwemmung hat Hunderte Häuser zerstört.'],
    ['heatwave', 'Hitzewelle', 'During the heatwave it was 38 degrees.', 'Während der Hitzewelle waren es 38 Grad.'],
  ]},
  { id: 'career', level: 'B1', icon: '📝', title: 'Bewerbung & Besprechungen', words: [
    ['to apply for', 'sich bewerben um', "I've applied for a job in Hamburg.", 'Ich habe mich auf eine Stelle in Hamburg beworben.', 'applied for'],
    ['application', 'Bewerbung', 'Send your application by 30 June.', 'Schicken Sie Ihre Bewerbung bis zum 30. Juni.'],
    ['CV', 'Lebenslauf', 'Please send us your CV.', 'Bitte schicken Sie uns Ihren Lebenslauf.'],
    ['job interview', 'Vorstellungsgespräch', 'I have a job interview tomorrow.', 'Ich habe morgen ein Vorstellungsgespräch.'],
    ['skills', 'Fähigkeiten', 'What skills do you need for this job?', 'Welche Fähigkeiten braucht man für diese Stelle?'],
    ['to be in charge of', 'leiten / verantwortlich sein für', 'She is in charge of the marketing team.', 'Sie leitet das Marketing-Team.', 'in charge of'],
    ['to hire', 'einstellen', 'The company is hiring new staff.', 'Die Firma stellt neue Mitarbeiter ein.', 'hiring'],
    ['to fire', 'entlassen / feuern', 'He was fired because he was late every day.', 'Er wurde entlassen, weil er jeden Tag zu spät kam.', 'fired'],
    ['to quit', 'kündigen (selbst)', 'She quit her job to travel the world.', 'Sie hat ihren Job gekündigt, um die Welt zu bereisen.', 'quit'],
    ['promotion', 'Beförderung', 'He got a promotion after two years.', 'Er wurde nach zwei Jahren befördert.'],
    ['agenda', 'Tagesordnung', "What's on the agenda for today's meeting?", 'Was steht heute auf der Tagesordnung?'],
    ['to postpone', 'verschieben', 'The meeting has been postponed until Friday.', 'Die Besprechung wurde auf Freitag verschoben.', 'postponed'],
    ['to take notes', 'Notizen machen', 'Could you take notes during the meeting?', 'Könntest du während der Besprechung Notizen machen?', 'take notes'],
    ['to go through', 'durchgehen / besprechen', "Let's go through the figures again.", 'Lass uns die Zahlen noch einmal durchgehen.', 'go through'],
    ['to come up with', 'sich ausdenken', 'We need to come up with a better idea.', 'Wir müssen uns eine bessere Idee ausdenken.', 'come up with'],
  ]},
  { id: 'phrasal', level: 'B1', icon: '🧩', title: 'Phrasal Verbs im Alltag', words: [
    ['to find out', 'herausfinden', 'I found out the truth yesterday.', 'Ich habe gestern die Wahrheit herausgefunden.', 'found out'],
    ['to look for', 'suchen', "I'm looking for my glasses.", 'Ich suche meine Brille.', 'looking for'],
    ['to look after', 'aufpassen auf / sich kümmern um', 'Can you look after the kids tonight?', 'Kannst du heute Abend auf die Kinder aufpassen?', 'look after'],
    ['to look forward to', 'sich freuen auf', "I'm looking forward to the weekend.", 'Ich freue mich aufs Wochenende.', 'looking forward to'],
    ['to give up', 'aufgeben / aufhören mit', 'He gave up smoking last year.', 'Er hat letztes Jahr mit dem Rauchen aufgehört.', 'gave up'],
    ['to turn down', 'ablehnen', 'She turned down the job offer.', 'Sie hat das Jobangebot abgelehnt.', 'turned down'],
    ['to pick up', 'abholen', "I'll pick you up at the station.", 'Ich hole dich am Bahnhof ab.', 'pick you up'],
    ['to put off', 'aufschieben', 'Stop putting off your homework!', 'Hör auf, deine Hausaufgaben aufzuschieben!', 'putting off'],
    ['to work out', 'trainieren', 'I work out three times a week.', 'Ich trainiere dreimal pro Woche.', 'work out'],
    ['to take up', '(ein Hobby) anfangen', "I've taken up yoga.", 'Ich habe mit Yoga angefangen.', 'taken up'],
    ['to fill in', 'ausfüllen', 'Please fill in this form.', 'Bitte füllen Sie dieses Formular aus.', 'fill in'],
    ['to run into', 'zufällig treffen', 'I ran into an old friend at the supermarket.', 'Ich habe im Supermarkt zufällig einen alten Freund getroffen.', 'ran into'],
    ['to sort out', 'klären / in Ordnung bringen', "Don't worry, we'll sort it out.", 'Keine Sorge, wir klären das.', 'sort it out'],
    ['to calm down', 'sich beruhigen', 'Calm down! Everything is fine.', 'Beruhig dich! Alles ist gut.', 'calm down'],
    ['to carry on', 'weitermachen', "Carry on, I'm listening.", 'Mach weiter, ich höre zu.', 'carry on'],
  ]},
];

// Grammatik: Erklärung (HTML) + Beispiele + Übungen
// Lücke wählen: { q, o: [Optionen], a: Index richtig, de, x: kurze Erklärung (optional) }
// Satz bauen:   { b: 'englischer Satz', de }
export const GRAMMAR = [
  // ---------- A1: Auffrischen ----------
  { id: 'be', level: 'A1', icon: '🟰', title: 'to be: am / is / are',
    explain: `<table class="gtable"><tr><td>I</td><td><b>am</b> (I'm)</td></tr><tr><td>you / we / they</td><td><b>are</b> (you're, we're, they're)</td></tr><tr><td>he / she / it</td><td><b>is</b> (he's, she's, it's)</td></tr></table>
<p><b>Verneinung:</b> I'm <b>not</b>, he <b>isn't</b>, they <b>aren't</b> · <b>Frage:</b> Verb nach vorne: <i>Are you tired?</i></p>`,
    examples: ["I'm from Berlin.", 'She is a nurse.', "We aren't at home.", 'Are you ready?'],
    ex: [
      { q: 'She ___ my sister.', o: ['are', 'is', 'am'], a: 1, de: 'Sie ist meine Schwester.', x: 'he / she / it → is' },
      { q: 'They ___ from Italy.', o: ['is', 'am', 'are'], a: 2, de: 'Sie kommen aus Italien.', x: 'we / you / they → are' },
      { q: '___ you hungry?', o: ['Is', 'Are', 'Am'], a: 1, de: 'Hast du Hunger?', x: 'Frage: Verb nach vorne. you → are' },
      { q: "He ___ a doctor, he's a nurse.", o: ["isn't", "aren't", 'not'], a: 0, de: 'Er ist kein Arzt, er ist Krankenpfleger.', x: 'he → is not = isn\'t' },
      { b: 'Is your brother married?', de: 'Ist dein Bruder verheiratet?' },
      { b: "I'm not very hungry.", de: 'Ich habe nicht viel Hunger.' },
    ]},
  { id: 'articles', level: 'A1', icon: '🔢', title: 'a / an & Mehrzahl',
    explain: `<p><b>a</b> vor Konsonanten-<i>Laut</i>: a car, a <b>u</b>niversity („ju“) · <b>an</b> vor Vokal-<i>Laut</i>: an apple, an <b>h</b>our</p>
<p><b>Mehrzahl:</b> meist <b>-s</b>; nach s, sh, ch, x <b>-es</b> (buses); Konsonant + y → <b>-ies</b> (cities)</p>
<p><b>Unregelmäßig:</b> man → men, woman → women, child → children, person → people, foot → feet, tooth → teeth</p>`,
    examples: ['I eat an apple every day.', 'She studies at a university.', 'Three children are in the garden.'],
    ex: [
      { q: 'I need ___ umbrella.', o: ['a', 'an'], a: 1, de: 'Ich brauche einen Regenschirm.', x: 'umbrella beginnt mit Vokal-Laut → an' },
      { q: 'We waited for ___ hour.', o: ['a', 'an'], a: 1, de: 'Wir haben eine Stunde gewartet.', x: 'Das h in hour ist stumm → an' },
      { q: 'He studies at ___ university.', o: ['a', 'an'], a: 0, de: 'Er studiert an einer Universität.', x: 'university spricht man „ju…“ → a' },
      { q: 'Many ___ live in London.', o: ['peoples', 'people', 'persons'], a: 1, de: 'Viele Menschen leben in London.', x: 'Mehrzahl von person ist people' },
      { q: 'I visited three ___ last year.', o: ['citys', 'cityes', 'cities'], a: 2, de: 'Ich habe letztes Jahr drei Städte besucht.', x: 'Konsonant + y → -ies' },
      { b: 'I have an old car.', de: 'Ich habe ein altes Auto.' },
    ]},
  { id: 'present-simple', level: 'A1', icon: '🔁', title: 'Present Simple mit do / does',
    explain: `<p>Für <b>Gewohnheiten</b> und Fakten. Bei <b>he / she / it</b> kommt <b>-s</b> dazu: <i>she work<b>s</b>, he go<b>es</b>, she <b>has</b></i>.</p>
<table class="gtable"><tr><td>Frage</td><td><b>Do</b> you like tea? · <b>Does</b> she like tea?</td></tr><tr><td>Verneinung</td><td>I <b>don't</b> like tea. · She <b>doesn't</b> like tea.</td></tr></table>
<p>⚠️ Nach <b>does / doesn't</b> steht das Verb <b>ohne -s</b>. Signalwörter: <i>always, usually, often, never, every day</i></p>`,
    examples: ['He works in a bank.', 'Do you speak English?', "She doesn't eat meat."],
    ex: [
      { q: 'My brother ___ to the gym on Mondays.', o: ['go', 'goes', 'gos'], a: 1, de: 'Mein Bruder geht montags ins Fitnessstudio.', x: 'he → -s; bei go: goes' },
      { q: '___ your sister live in Berlin?', o: ['Do', 'Does', 'Is'], a: 1, de: 'Wohnt deine Schwester in Berlin?', x: 'your sister = she → Does' },
      { q: "He ___ drink alcohol.", o: ["don't", "isn't", "doesn't"], a: 2, de: 'Er trinkt keinen Alkohol.', x: 'he → doesn\'t + Grundform' },
      { q: 'Does she ___ English?', o: ['speaks', 'speak', 'speaking'], a: 1, de: 'Spricht sie Englisch?', x: 'Nach does: Verb ohne -s' },
      { q: 'Tom ___ TV every evening.', o: ['watchs', 'watch', 'watches'], a: 2, de: 'Tom schaut jeden Abend fern.', x: 'nach ch → -es' },
      { b: 'What do you do in your free time?', de: 'Was machst du in deiner Freizeit?' },
      { b: "She doesn't like football.", de: 'Sie mag keinen Fußball.' },
    ]},
  { id: 'present-progressive', level: 'A1', icon: '⏳', title: 'Present Progressive',
    explain: `<p>Für Dinge, die <b>gerade jetzt</b> passieren: <b>am / is / are + Verb-ing</b></p>
<p>Schreibweise: make → mak<b>ing</b>, swim → swim<b>ming</b>, sit → sit<b>ting</b> · Signalwörter: <i>now, at the moment, look!, listen!</i></p>
<p>Vergleich: <i>I <b>work</b> in Munich</i> (immer) ↔ <i>I'<b>m working</b> from home today</i> (gerade, vorübergehend)</p>`,
    examples: ["I'm cooking dinner right now.", 'Look! It is raining.', 'What are you doing?'],
    ex: [
      { q: 'Look! The children ___ in the garden.', o: ['play', 'are playing', 'plays'], a: 1, de: 'Schau! Die Kinder spielen im Garten.', x: 'Look! → passiert gerade' },
      { q: 'She is ___ dinner right now.', o: ['makeing', 'making', 'make'], a: 1, de: 'Sie macht gerade Abendessen.', x: 'stummes e fällt weg: making' },
      { q: 'He is ___ in the pool.', o: ['swiming', 'swimming', 'swims'], a: 1, de: 'Er schwimmt im Pool.', x: 'kurzer Vokal + Konsonant → verdoppeln' },
      { q: "I usually ___ to work, but today I'm taking the bus.", o: ['walk', 'am walking', 'walking'], a: 0, de: 'Normalerweise gehe ich zu Fuß, aber heute nehme ich den Bus.', x: 'usually → Gewohnheit → Present Simple' },
      { b: "I'm working from home today.", de: 'Ich arbeite heute von zu Hause.' },
      { b: 'Are you listening to me?', de: 'Hörst du mir zu?' },
    ]},
  { id: 'pronouns', level: 'A1', icon: '🫵', title: 'my, your … & me, him, her …',
    explain: `<table class="gtable"><tr><th>Person</th><th>besitzt</th><th>Objekt</th></tr>
<tr><td>I</td><td><b>my</b></td><td><b>me</b></td></tr><tr><td>you</td><td><b>your</b></td><td><b>you</b></td></tr>
<tr><td>he</td><td><b>his</b></td><td><b>him</b></td></tr><tr><td>she</td><td><b>her</b></td><td><b>her</b></td></tr>
<tr><td>it</td><td><b>its</b></td><td><b>it</b></td></tr><tr><td>we</td><td><b>our</b></td><td><b>us</b></td></tr><tr><td>they</td><td><b>their</b></td><td><b>them</b></td></tr></table>
<p>⚠️ <b>its</b> (sein) ≠ <b>it's</b> (= it is) · <b>their</b> ≠ <b>there</b> (dort)</p>`,
    examples: ['This is my brother. His name is Max.', 'Can you help me?', 'I like them a lot.'],
    ex: [
      { q: 'Anna lives with ___ parents.', o: ['his', 'her', 'their'], a: 1, de: 'Anna wohnt bei ihren Eltern.', x: 'Anna = she → her' },
      { q: 'Tom and Lisa love ___ new flat.', o: ['their', 'there', 'they'], a: 0, de: 'Tom und Lisa lieben ihre neue Wohnung.', x: 'Besitz von they → their' },
      { q: 'I know Peter. I work with ___.', o: ['he', 'him', 'his'], a: 1, de: 'Ich kenne Peter. Ich arbeite mit ihm.', x: 'nach Präposition: Objektform him' },
      { q: 'The dog is eating ___ food.', o: ["it's", 'its', 'his'], a: 1, de: 'Der Hund frisst sein Futter.', x: 'its = sein/ihr; it\'s = it is' },
      { q: "Where are my keys? I can't find ___.", o: ['them', 'they', 'their'], a: 0, de: 'Wo sind meine Schlüssel? Ich finde sie nicht.', x: 'Objekt von they → them' },
      { b: 'Can you call me tomorrow?', de: 'Kannst du mich morgen anrufen?' },
    ]},

  // ---------- A2 ----------
  { id: 'past-simple', level: 'A2', icon: '⏪', title: 'Past Simple',
    explain: `<p>Für <b>abgeschlossene</b> Dinge zu einem bestimmten Zeitpunkt in der Vergangenheit.</p>
<p>Regelmäßig: <b>-ed</b> → work<b>ed</b>, stud<b>ied</b>, stop<b>ped</b> · Unregelmäßig: go → <b>went</b>, see → <b>saw</b>, buy → <b>bought</b>, be → <b>was / were</b></p>
<p>Frage & Verneinung mit <b>did</b> + Grundform: <i><b>Did</b> you go? I <b>didn't</b> go.</i></p>
<p>Signalwörter: <i>yesterday, last week, two days ago, in 2010</i></p>`,
    examples: ['I went to London last year.', 'We watched a film yesterday.', "She didn't come to the party."],
    ex: [
      { q: 'Yesterday I ___ to the cinema.', o: ['go', 'went', 'goed'], a: 1, de: 'Gestern bin ich ins Kino gegangen.', x: 'go ist unregelmäßig: went' },
      { q: 'She ___ a new car last month.', o: ['buyed', 'bought', 'buys'], a: 1, de: 'Sie hat letzten Monat ein neues Auto gekauft.', x: 'buy → bought' },
      { q: 'They ___ at home last night.', o: ['was', 'were', 'are'], a: 1, de: 'Sie waren gestern Abend zu Hause.', x: 'they → were' },
      { q: '___ you see the match?', o: ['Do', 'Did', 'Was'], a: 1, de: 'Hast du das Spiel gesehen?', x: 'Frage in der Vergangenheit: Did + Grundform' },
      { q: "He didn't ___ breakfast this morning.", o: ['ate', 'eat', 'eaten'], a: 1, de: 'Er hat heute Morgen nicht gefrühstückt.', x: 'nach didn\'t: Grundform' },
      { b: 'We visited my grandmother last weekend.', de: 'Wir haben letztes Wochenende meine Oma besucht.' },
      { b: 'Did you have a nice holiday?', de: 'Hattest du einen schönen Urlaub?' },
    ]},
  { id: 'past-progressive', level: 'A2', icon: '🎞️', title: 'Past Progressive',
    explain: `<p><b>was / were + Verb-ing</b>: Eine Handlung <b>lief gerade</b> in der Vergangenheit.</p>
<p>Oft mit einer <b>kurzen Handlung</b> im Past Simple, die sie unterbricht:<br><i>I <b>was cooking</b> when the phone <b>rang</b>.</i></p>
<table class="gtable"><tr><td><b>when</b> + Past Simple</td><td>als (plötzlich)</td></tr><tr><td><b>while</b> + Past Progressive</td><td>während (lief gerade)</td></tr></table>`,
    examples: ['At 8 o\'clock I was having breakfast.', 'It was raining when we left.', 'While I was walking home, I met Tom.'],
    ex: [
      { q: 'I ___ TV when you called.', o: ['watched', 'was watching', 'am watching'], a: 1, de: 'Ich habe gerade ferngesehen, als du angerufen hast.', x: 'lief gerade → was + -ing; der Anruf unterbricht' },
      { q: 'They ___ football when it started to rain.', o: ['were playing', 'was playing', 'played'], a: 0, de: 'Sie spielten gerade Fußball, als es anfing zu regnen.', x: 'they → were + -ing' },
      { q: 'While she was driving, her phone ___.', o: ['was ringing', 'rang', 'rings'], a: 1, de: 'Während sie Auto fuhr, klingelte ihr Handy.', x: 'kurze, plötzliche Handlung → Past Simple' },
      { q: 'What ___ you doing at 10 last night?', o: ['did', 'was', 'were'], a: 2, de: 'Was hast du gestern um 10 Uhr abends gemacht?', x: 'you → were + -ing' },
      { q: 'I cut my finger ___ I was cooking.', o: ['while', 'during', 'when it'], a: 0, de: 'Ich habe mir beim Kochen in den Finger geschnitten.', x: 'while + Satz mit -ing; during + Nomen (during dinner)' },
      { q: 'At 7 am I ___ still sleeping.', o: ['were', 'was', 'did'], a: 1, de: 'Um 7 Uhr habe ich noch geschlafen.', x: 'I → was + -ing' },
      { b: 'I was waiting for the bus when I saw her.', de: 'Ich wartete gerade auf den Bus, als ich sie sah.' },
      { b: 'What were you doing yesterday evening?', de: 'Was hast du gestern Abend gemacht?' },
    ]},
  { id: 'present-perfect', level: 'A2', icon: '✅', title: 'Present Perfect vs. Past Simple',
    explain: `<p><b>Present Perfect</b> = <b>have / has + 3. Form</b> (worked, seen, been). Wichtig ist das <b>Ergebnis jetzt</b>, nicht der Zeitpunkt.</p>
<table class="gtable"><tr><th>Present Perfect</th><th>Past Simple</th></tr>
<tr><td>Zeitpunkt egal / offen<br><i>I've been to Rome.</i></td><td>Zeitpunkt genannt<br><i>I went to Rome in 2019.</i></td></tr>
<tr><td>ever, never, already, yet, just, so far, since, for</td><td>yesterday, last …, … ago, in 2019, when …?</td></tr></table>
<p>⚠️ Deutsch sagt „Ich <b>habe</b> gestern … <b>gesehen</b>“ – Englisch braucht hier das <b>Past Simple</b>: <i>I <b>saw</b> it yesterday.</i></p>
<p>Frage nach dem Zeitpunkt (<b>When …?</b>) immer im Past Simple.</p>`,
    examples: ["I've lost my keys.", 'Have you ever been to Scotland?', 'We met in 2018.', "She hasn't called yet."],
    ex: [
      { q: 'I ___ that film last week.', o: ['have seen', 'saw', 'have saw'], a: 1, de: 'Ich habe den Film letzte Woche gesehen.', x: 'last week = Zeitpunkt → Past Simple' },
      { q: '___ you ever ___ sushi?', o: ['Did … eat', 'Have … eaten', 'Have … ate'], a: 1, de: 'Hast du schon einmal Sushi gegessen?', x: 'ever, Zeitpunkt offen → Present Perfect' },
      { q: "Oh no! I ___ my phone. I can't find it.", o: ['lost', 'have lost', 'was losing'], a: 1, de: 'Oh nein! Ich habe mein Handy verloren. Ich finde es nicht.', x: 'Ergebnis jetzt wichtig (es ist weg) → Present Perfect' },
      { q: 'When ___ you move to Berlin?', o: ['have', 'did', 'do'], a: 1, de: 'Wann bist du nach Berlin gezogen?', x: 'Frage mit When → Past Simple' },
      { q: "She ___ finished her homework yet.", o: ["didn't", "hasn't", "isn't"], a: 1, de: 'Sie hat ihre Hausaufgaben noch nicht fertig.', x: 'yet → Present Perfect: hasn\'t + 3. Form' },
      { q: 'We ___ here since 2020.', o: ['live', 'lived', 'have lived'], a: 2, de: 'Wir wohnen seit 2020 hier.', x: 'seit + bis heute → Present Perfect (nicht Präsens wie im Deutschen!)' },
      { q: 'I ___ my grandparents two days ago.', o: ['visited', 'have visited', 'have visit'], a: 0, de: 'Ich habe vor zwei Tagen meine Großeltern besucht.', x: 'ago → Past Simple' },
      { b: "I've just finished my work.", de: 'Ich bin gerade mit meiner Arbeit fertig geworden.' },
      { b: 'Have you ever been to London?', de: 'Warst du schon einmal in London?' },
    ]},
  { id: 'future', level: 'A2', icon: '🔮', title: 'Zukunft: will, going to, Present Progressive',
    explain: `<table class="gtable">
<tr><td><b>going to</b></td><td>Plan, Absicht<br><i>I'm going to learn Spanish.</i><br>sichere Vorhersage (man sieht es)<br><i>Look at the clouds! It's going to rain.</i></td></tr>
<tr><td><b>will</b></td><td>spontane Entscheidung, Versprechen, Vermutung<br><i>I'll help you. · I think it will be OK.</i></td></tr>
<tr><td><b>Present Progressive</b></td><td>feste Verabredung mit Zeit/Ort<br><i>I'm meeting Anna at 6.</i></td></tr></table>
<p>Verneinung: <b>won't</b> · <b>I'm not going to</b></p>`,
    examples: ["I'm going to visit my parents next weekend.", "It's cold. I'll close the window.", "We're flying to Spain on Friday."],
    ex: [
      { q: 'The phone is ringing. I ___ answer it.', o: ["'ll", "'m going to", 'am'], a: 0, de: 'Das Telefon klingelt. Ich gehe ran.', x: 'spontane Entscheidung → will' },
      { q: "We've saved money. We ___ buy a new car.", o: ['will', 'are going to', 'buy'], a: 1, de: 'Wir haben gespart. Wir wollen ein neues Auto kaufen.', x: 'Plan, schon beschlossen → going to' },
      { q: "I ___ the dentist at 3 pm tomorrow. It's in my calendar.", o: ['will see', "'m seeing", 'see'], a: 1, de: 'Ich habe morgen um 15 Uhr einen Zahnarzttermin.', x: 'feste Verabredung → Present Progressive' },
      { q: "Look at that black sky! It ___ rain.", o: ['will', 'is going to', 'rains'], a: 1, de: 'Schau dir den schwarzen Himmel an! Gleich regnet es.', x: 'man sieht es kommen → going to' },
      { q: "Don't worry, I ___ tell anyone.", o: ["won't", "willn't", "don't will"], a: 0, de: 'Keine Sorge, ich sage es niemandem.', x: 'Versprechen; will not = won\'t' },
      { q: 'I think Germany ___ win the match.', o: ['will', 'is winning', 'wins'], a: 0, de: 'Ich glaube, Deutschland gewinnt das Spiel.', x: 'Vermutung mit I think → will' },
      { b: "I'm going to cook pasta tonight.", de: 'Ich werde heute Abend Nudeln kochen.' },
      { b: "We're meeting at the station at ten.", de: 'Wir treffen uns um zehn am Bahnhof.' },
    ]},
  { id: 'comparison', level: 'A2', icon: '📈', title: 'Vergleiche: bigger, the biggest',
    explain: `<p><b>Kurze Adjektive:</b> small – small<b>er</b> – the small<b>est</b> · big – bi<b>gger</b> · happy – happ<b>ier</b></p>
<p><b>Lange Adjektive:</b> <b>more</b> expensive – the <b>most</b> expensive</p>
<p><b>Unregelmäßig:</b> good – better – best · bad – worse – worst · far – further – furthest</p>
<p>„als“ = <b>than</b> · „so … wie“ = <b>as … as</b>: <i>She's as tall as me.</i></p>`,
    examples: ['My flat is smaller than yours.', 'This is the best pizza in town.', "It isn't as cold as yesterday."],
    ex: [
      { q: 'This hotel is ___ than the other one.', o: ['expensiver', 'more expensive', 'most expensive'], a: 1, de: 'Dieses Hotel ist teurer als das andere.', x: 'langes Adjektiv → more' },
      { q: 'Today is ___ day of the year.', o: ['the hottest', 'the hotest', 'the most hot'], a: 0, de: 'Heute ist der heißeste Tag des Jahres.', x: 'hot → hottest (Konsonant verdoppeln)' },
      { q: 'My English is ___ than last year.', o: ['gooder', 'better', 'best'], a: 1, de: 'Mein Englisch ist besser als letztes Jahr.', x: 'good – better – best' },
      { q: 'Anna is older ___ her brother.', o: ['as', 'than', 'then'], a: 1, de: 'Anna ist älter als ihr Bruder.', x: 'als (Vergleich) = than; then = dann' },
      { q: "The film wasn't as good ___ the book.", o: ['than', 'as', 'like'], a: 1, de: 'Der Film war nicht so gut wie das Buch.', x: 'so … wie = as … as' },
      { b: 'Berlin is bigger than Munich.', de: 'Berlin ist größer als München.' },
    ]},
  { id: 'modals', level: 'A2', icon: '💪', title: 'can, must, have to, should',
    explain: `<p>Danach immer die <b>Grundform</b> – ohne „to“ (außer <i>have to</i>) und ohne -s.</p>
<table class="gtable"><tr><td><b>can / can't</b></td><td>können / nicht können</td></tr><tr><td><b>must</b></td><td>müssen (eigene Überzeugung)</td></tr><tr><td><b>have to / has to</b></td><td>müssen (Regel, Pflicht)</td></tr><tr><td><b>don't have to</b></td><td>nicht müssen</td></tr><tr><td><b>mustn't</b></td><td>nicht dürfen!</td></tr><tr><td><b>should</b></td><td>sollte (Rat)</td></tr></table>
<p>⚠️ <i>You mustn't</i> = du darfst nicht – <b>nicht</b> „du musst nicht“.</p>`,
    examples: ['I can speak a little English.', 'You should drink more water.', 'She has to work on Saturday.'],
    ex: [
      { q: "You ___ smoke here. It's forbidden.", o: ["don't have to", "mustn't", "shouldn't to"], a: 1, de: 'Du darfst hier nicht rauchen. Es ist verboten.', x: 'verboten → mustn\'t' },
      { q: "It's Sunday. I ___ get up early.", o: ["mustn't", "don't have to", "can't to"], a: 1, de: 'Es ist Sonntag. Ich muss nicht früh aufstehen.', x: 'nicht nötig → don\'t have to' },
      { q: 'He ___ wear a uniform at work.', o: ['have to', 'has to', 'must to'], a: 1, de: 'Er muss bei der Arbeit eine Uniform tragen.', x: 'he → has to' },
      { q: 'You look tired. You ___ go to bed.', o: ['should', 'can', 'have'], a: 0, de: 'Du siehst müde aus. Du solltest ins Bett gehen.', x: 'Rat → should' },
      { q: 'Can you ___ me the salt?', o: ['passing', 'to pass', 'pass'], a: 2, de: 'Kannst du mir das Salz geben?', x: 'nach can: Grundform ohne to' },
      { b: 'You should see a doctor.', de: 'Du solltest zum Arzt gehen.' },
    ]},
  { id: 'used-to', level: 'A2', icon: '🕰️', title: 'used to',
    explain: `<p><b>used to + Grundform</b> = früher (aber heute nicht mehr). Für Gewohnheiten und Zustände.</p>
<p><i>I <b>used to</b> smoke.</i> = Früher habe ich geraucht.</p>
<table class="gtable"><tr><td>Verneinung</td><td>I <b>didn't use to</b> like coffee.</td></tr><tr><td>Frage</td><td><b>Did</b> you <b>use to</b> play football?</td></tr></table>
<p>⚠️ Nach <b>did / didn't</b> ohne d: <b>use to</b>. Für die Gegenwart gibt es kein „use to“ – dann <i>usually</i>: <i>I usually get up at 7.</i></p>`,
    examples: ['I used to live in Dresden.', 'There used to be a cinema here.', "We didn't use to have a car."],
    ex: [
      { q: 'When I was a child, I ___ climb trees.', o: ['used to', 'use to', 'was used to'], a: 0, de: 'Als Kind bin ich auf Bäume geklettert.', x: 'früher, heute nicht mehr → used to' },
      { q: 'Did you ___ have long hair?', o: ['used to', 'use to', 'using to'], a: 1, de: 'Hattest du früher lange Haare?', x: 'nach did: use to (ohne d)' },
      { q: "I ___ like vegetables, but now I love them.", o: ["didn't use to", "didn't used to", "don't use to"], a: 0, de: 'Früher mochte ich kein Gemüse, aber jetzt liebe ich es.', x: 'didn\'t + use to' },
      { q: 'There ___ a bakery on this corner.', o: ['used to have', 'used to be', 'use to be'], a: 1, de: 'An dieser Ecke war früher eine Bäckerei.', x: 'es gab früher = there used to be' },
      { q: 'I ___ go to the gym on Mondays. (heute, regelmäßig)', o: ['use to', 'usually', 'used to'], a: 1, de: 'Ich gehe normalerweise montags ins Fitnessstudio.', x: 'Gegenwart → usually (kein „use to“)' },
      { b: 'My dad used to work in a factory.', de: 'Mein Vater hat früher in einer Fabrik gearbeitet.' },
      { b: 'Where did you use to live?', de: 'Wo hast du früher gewohnt?' },
    ]},
  { id: 'quantities', level: 'A2', icon: '🧮', title: 'some, any, much, many, a few, a little',
    explain: `<table class="gtable"><tr><th></th><th>zählbar (books)</th><th>nicht zählbar (water, money)</th></tr>
<tr><td>viel(e)</td><td><b>many</b></td><td><b>much</b></td></tr>
<tr><td>ein paar / ein bisschen</td><td><b>a few</b></td><td><b>a little</b></td></tr>
<tr><td>viel (Aussage)</td><td colspan="2"><b>a lot of / lots of</b></td></tr></table>
<p><b>some</b> in Aussagen und Angeboten (<i>Would you like some tea?</i>), <b>any</b> in Fragen und Verneinungen (<i>I don't have any time.</i>)</p>
<p>⚠️ Nicht zählbar im Englischen: <i>information, advice, news, furniture, luggage, homework</i> – also <b>much</b> information, <b>no</b> „an advice“.</p>`,
    examples: ['How many people are coming?', "I don't have much time.", 'Can I have a little milk?', 'There are a few problems.'],
    ex: [
      { q: 'How ___ money do you need?', o: ['many', 'much', 'few'], a: 1, de: 'Wie viel Geld brauchst du?', x: 'money ist nicht zählbar → much' },
      { q: 'How ___ brothers have you got?', o: ['many', 'much', 'little'], a: 0, de: 'Wie viele Brüder hast du?', x: 'brothers ist zählbar → many' },
      { q: "We haven't got ___ bread left.", o: ['some', 'any', 'many'], a: 1, de: 'Wir haben kein Brot mehr.', x: 'Verneinung → any' },
      { q: 'Would you like ___ cake?', o: ['any', 'some', 'many'], a: 1, de: 'Möchtest du etwas Kuchen?', x: 'Angebot → some, auch als Frage' },
      { q: 'I only need ___ minutes.', o: ['a few', 'a little', 'much'], a: 0, de: 'Ich brauche nur ein paar Minuten.', x: 'minutes ist zählbar → a few' },
      { q: "I speak ___ Spanish, but not much.", o: ['a few', 'a little', 'many'], a: 1, de: 'Ich spreche ein bisschen Spanisch, aber nicht viel.', x: 'Sprache nicht zählbar → a little' },
      { q: 'Can you give me ___ advice?', o: ['an', 'some', 'many'], a: 1, de: 'Kannst du mir einen Rat geben?', x: 'advice ist nicht zählbar → some advice' },
      { b: 'There are a lot of people here.', de: 'Hier sind viele Leute.' },
    ]},
  { id: 'adverbs', level: 'A2', icon: '🏃', title: 'Adjektiv oder Adverb?',
    explain: `<p>Im Deutschen gleich („Er ist <b>schnell</b>. Er fährt <b>schnell</b>.“), im Englischen nicht:</p>
<table class="gtable"><tr><td><b>Adjektiv</b> beschreibt ein Nomen<br>(auch nach be, look, feel, sound, taste)</td><td><i>a <b>careful</b> driver · She looks <b>happy</b>.</i></td></tr>
<tr><td><b>Adverb</b> beschreibt ein Verb: <b>-ly</b></td><td><i>He drives <b>carefully</b>.</i></td></tr></table>
<p>Schreibweise: easy → eas<b>ily</b>, terrible → terrib<b>ly</b>. Unregelmäßig: good → <b>well</b>, fast → <b>fast</b>, hard → <b>hard</b>, late → <b>late</b></p>
<p>⚠️ <i>hardly</i> = kaum, <i>lately</i> = in letzter Zeit</p>`,
    examples: ['She speaks English very well.', 'Please drive carefully.', 'The soup tastes good.'],
    ex: [
      { q: 'He speaks English very ___.', o: ['good', 'well', 'goodly'], a: 1, de: 'Er spricht sehr gut Englisch.', x: 'beschreibt speaks (Verb) → Adverb well' },
      { q: 'Please drive ___. The road is icy.', o: ['careful', 'carefully', 'carefuly'], a: 1, de: 'Bitte fahr vorsichtig. Die Straße ist glatt.', x: 'beschreibt drive → Adverb mit -ly' },
      { q: 'You look ___ today!', o: ['beautiful', 'beautifully'], a: 0, de: 'Du siehst heute wunderschön aus!', x: 'nach look (aussehen) → Adjektiv' },
      { q: 'She works very ___.', o: ['hardly', 'hard', 'hardy'], a: 1, de: 'Sie arbeitet sehr hart.', x: 'hard bleibt hard; hardly heißt kaum' },
      { q: 'I ___ ever eat meat. (kaum)', o: ['hard', 'hardly', 'harder'], a: 1, de: 'Ich esse kaum Fleisch.', x: 'kaum = hardly' },
      { q: 'This coffee tastes ___.', o: ['terribly', 'terrible'], a: 1, de: 'Dieser Kaffee schmeckt furchtbar.', x: 'nach taste (schmecken) → Adjektiv' },
      { b: 'He answered the question quickly.', de: 'Er hat die Frage schnell beantwortet.' },
    ]},
  { id: 'if-1', level: 'A2', icon: '🔀', title: 'If-Sätze Typ 0 und 1',
    explain: `<table class="gtable"><tr><th>Typ</th><th>if-Teil</th><th>Hauptsatz</th></tr>
<tr><td><b>0</b> – immer wahr</td><td>Present Simple</td><td>Present Simple<br><i>If you heat ice, it melts.</i></td></tr>
<tr><td><b>1</b> – real möglich</td><td>Present Simple</td><td><b>will</b> + Grundform<br><i>If it rains, we'll stay at home.</i></td></tr></table>
<p>⚠️ Im if-Teil <b>kein will</b>, auch wenn das Deutsche „wird“ nahelegt. Gleiches gilt nach <b>when, as soon as, before, after, until</b>.</p>
<p><b>unless</b> = wenn … nicht: <i>Unless you hurry, we'll be late.</i></p>`,
    examples: ["If I have time, I'll call you.", "If you don't hurry, you'll miss the train.", 'If you mix blue and yellow, you get green.'],
    ex: [
      { q: "If it ___ tomorrow, we'll have a picnic.", o: ["won't rain", "doesn't rain", "isn't raining"], a: 1, de: 'Wenn es morgen nicht regnet, machen wir ein Picknick.', x: 'if-Teil: Present Simple, kein will' },
      { q: "If you study hard, you ___ the exam.", o: ['pass', 'will pass', 'passed'], a: 1, de: 'Wenn du fleißig lernst, bestehst du die Prüfung.', x: 'Typ 1 Hauptsatz: will + Grundform' },
      { q: "I'll call you as soon as I ___ home.", o: ['get', 'will get', 'got'], a: 0, de: 'Ich rufe dich an, sobald ich zu Hause bin.', x: 'nach as soon as: Present Simple' },
      { q: 'If you heat water to 100 degrees, it ___.', o: ['will boil', 'boils', 'boiled'], a: 1, de: 'Wenn man Wasser auf 100 Grad erhitzt, kocht es.', x: 'immer wahr → Typ 0' },
      { q: "___ you leave now, you'll be late.", o: ['If', 'Unless', 'When not'], a: 1, de: 'Wenn du nicht jetzt gehst, kommst du zu spät.', x: 'wenn … nicht = unless' },
      { q: 'What will you do if you ___ the job?', o: ["won't get", "don't get", "didn't get"], a: 1, de: 'Was machst du, wenn du die Stelle nicht bekommst?', x: 'if-Teil: Present Simple' },
      { b: "If I see him, I'll tell him.", de: 'Wenn ich ihn sehe, sage ich es ihm.' },
      { b: "We'll start when everyone is here.", de: 'Wir fangen an, wenn alle da sind.' },
    ]},

  // ---------- B1 ----------
  { id: 'pp-progressive', level: 'B1', icon: '⏱️', title: 'Present Perfect Progressive',
    explain: `<p><b>have / has been + Verb-ing</b>: Eine Handlung hat in der Vergangenheit begonnen und <b>läuft bis jetzt</b> (oder hat gerade aufgehört, man sieht die Folgen).</p>
<p><i>I'<b>ve been waiting</b> for an hour.</i> = Ich warte <b>seit</b> einer Stunde.</p>
<table class="gtable"><tr><td><b>for</b> + Zeitdauer</td><td>for two hours, for ten years</td></tr><tr><td><b>since</b> + Zeitpunkt</td><td>since Monday, since 2019, since I was a child</td></tr></table>
<p>⚠️ Deutsch: „Ich lerne <b>seit</b> drei Jahren Englisch.“ → <i>I'<b>ve been learning</b> English for three years.</i> – nie Präsens!</p>
<p>Mit Zustandsverben (know, like, have = besitzen) das einfache Present Perfect: <i>I've known her since school.</i></p>`,
    examples: ["I've been learning English for three years.", "It's been raining all day.", "You're out of breath. Have you been running?"],
    ex: [
      { q: 'I ___ for the bus for 20 minutes.', o: ['wait', 'am waiting', 'have been waiting'], a: 2, de: 'Ich warte seit 20 Minuten auf den Bus.', x: 'seit … bis jetzt → have been + -ing' },
      { q: "She's been working here ___ 2021.", o: ['for', 'since', 'from'], a: 1, de: 'Sie arbeitet seit 2021 hier.', x: '2021 ist ein Zeitpunkt → since' },
      { q: "We've been living in this flat ___ six years.", o: ['for', 'since', 'during'], a: 0, de: 'Wir wohnen seit sechs Jahren in dieser Wohnung.', x: 'six years ist eine Dauer → for' },
      { q: 'How long ___ you been learning English?', o: ['are', 'have', 'did'], a: 1, de: 'Wie lange lernst du schon Englisch?', x: 'have + been + -ing' },
      { q: 'I ___ him since we were at school.', o: ['have been knowing', 'have known', 'know'], a: 1, de: 'Ich kenne ihn seit der Schulzeit.', x: 'know ist ein Zustandsverb → kein -ing' },
      { q: 'Your eyes are red. ___ you been crying?', o: ['Have', 'Did', 'Are'], a: 0, de: 'Deine Augen sind rot. Hast du geweint?', x: 'gerade aufgehört, Folgen sichtbar' },
      { b: "It's been raining since this morning.", de: 'Es regnet seit heute Morgen.' },
      { b: 'How long have you been waiting?', de: 'Wie lange wartest du schon?' },
    ]},
  { id: 'if-2', level: 'B1', icon: '💭', title: 'If-Sätze Typ 2',
    explain: `<p>Für <b>unwahrscheinliche</b> oder <b>ausgedachte</b> Situationen (Gegenwart/Zukunft) – wie der deutsche Konjunktiv „würde / hätte / wäre“.</p>
<table class="gtable"><tr><td>if-Teil</td><td><b>Past Simple</b></td></tr><tr><td>Hauptsatz</td><td><b>would</b> + Grundform</td></tr></table>
<p><i>If I <b>had</b> more money, I <b>would travel</b> more.</i> = Wenn ich mehr Geld hätte, würde ich mehr reisen.</p>
<p>⚠️ Kein would im if-Teil. Bei be oft <b>were</b> für alle Personen: <i>If I <b>were</b> you, I'd …</i> (Ratschlag)</p>
<p>Vergleich: <i>If I <b>win</b>, I'll …</i> (realistisch) ↔ <i>If I <b>won</b> the lottery, I'd …</i> (unwahrscheinlich)</p>`,
    examples: ["If I had more time, I'd learn the guitar.", "If I were you, I'd take the job.", 'What would you do if you lost your phone?'],
    ex: [
      { q: 'If I ___ rich, I would buy a house by the sea.', o: ['am', 'were', 'would be'], a: 1, de: 'Wenn ich reich wäre, würde ich ein Haus am Meer kaufen.', x: 'Typ 2: if + Past (were)' },
      { q: "If she had a car, she ___ to work.", o: ['will drive', 'would drive', 'drives'], a: 1, de: 'Wenn sie ein Auto hätte, würde sie zur Arbeit fahren.', x: 'Hauptsatz: would + Grundform' },
      { q: "If I ___ you, I'd talk to him.", o: ['were', 'am', 'would be'], a: 0, de: 'An deiner Stelle würde ich mit ihm reden.', x: 'Ratschlag: If I were you' },
      { q: 'What would you do if you ___ a million euros?', o: ['win', 'won', 'would win'], a: 1, de: 'Was würdest du tun, wenn du eine Million Euro gewinnen würdest?', x: 'if-Teil: Past Simple, kein would' },
      { q: "I ___ help you if I had time, but I'm too busy.", o: ['will', 'would', 'did'], a: 1, de: 'Ich würde dir helfen, wenn ich Zeit hätte, aber ich habe zu viel zu tun.', x: 'ausgedacht → would' },
      { q: "If it rains tomorrow, we ___ inside.", o: ['would stay', "'ll stay", 'stayed'], a: 1, de: 'Wenn es morgen regnet, bleiben wir drinnen.', x: 'realistisch → Typ 1 mit will' },
      { b: "If I lived in London, I'd go to the theatre every week.", de: 'Wenn ich in London wohnen würde, würde ich jede Woche ins Theater gehen.' },
      { b: 'What would you do if you were me?', de: 'Was würdest du an meiner Stelle tun?' },
    ]},
  { id: 'passive', level: 'B1', icon: '🏗️', title: 'Passiv (Present & Past)',
    explain: `<p>Wichtig ist die <b>Handlung</b>, nicht wer sie macht: <b>be + 3. Form</b></p>
<table class="gtable"><tr><td>Present</td><td><b>am / is / are</b> + 3. Form<br><i>English <b>is spoken</b> here.</i></td></tr>
<tr><td>Past</td><td><b>was / were</b> + 3. Form<br><i>The bridge <b>was built</b> in 1890.</i></td></tr></table>
<p>Wer es gemacht hat, mit <b>by</b>: <i>The book was written <b>by</b> J. K. Rowling.</i></p>
<p>⚠️ Deutsches „werden“ ≠ englisches <i>will</i>: „Das Auto <b>wird</b> repariert“ = <i>The car <b>is being</b> repaired.</i> / „Es wurde gebaut“ = <i>It <b>was</b> built.</i></p>`,
    examples: ['Breakfast is served from 7 to 10.', 'My bike was stolen last night.', 'These phones are made in China.'],
    ex: [
      { q: 'This cheese ___ in Switzerland.', o: ['makes', 'is made', 'is make'], a: 1, de: 'Dieser Käse wird in der Schweiz hergestellt.', x: 'Passiv Präsens: is + 3. Form' },
      { q: 'My wallet ___ on the train yesterday.', o: ['was stolen', 'is stolen', 'stole'], a: 0, de: 'Mein Geldbeutel wurde gestern im Zug gestohlen.', x: 'yesterday → was + 3. Form' },
      { q: 'The windows ___ every week.', o: ['are cleaned', 'is cleaned', 'clean'], a: 0, de: 'Die Fenster werden jede Woche geputzt.', x: 'windows (Mehrzahl) → are' },
      { q: 'The Mona Lisa was painted ___ Leonardo da Vinci.', o: ['from', 'of', 'by'], a: 2, de: 'Die Mona Lisa wurde von Leonardo da Vinci gemalt.', x: 'Urheber im Passiv: by' },
      { q: 'Where ___ these shoes made?', o: ['did', 'were', 'have'], a: 1, de: 'Wo wurden diese Schuhe hergestellt?', x: 'Frage im Passiv: were + 3. Form' },
      { q: 'The meeting ___ cancelled because the boss was ill.', o: ['became', 'was', 'has'], a: 1, de: 'Die Besprechung wurde abgesagt, weil der Chef krank war.', x: '„wurde“ im Passiv = was, nicht became' },
      { b: 'The museum was opened in 1995.', de: 'Das Museum wurde 1995 eröffnet.' },
      { b: 'Is breakfast included in the price?', de: 'Ist das Frühstück im Preis enthalten?' },
    ]},
  { id: 'relative', level: 'B1', icon: '🔗', title: 'Relativsätze: who, which, that',
    explain: `<table class="gtable"><tr><td><b>who</b></td><td>für Personen<br><i>The woman <b>who</b> lives next door is a pilot.</i></td></tr>
<tr><td><b>which</b></td><td>für Dinge und Tiere<br><i>The car <b>which</b> I bought is red.</i></td></tr>
<tr><td><b>that</b></td><td>für beides (Alltagssprache)</td></tr>
<tr><td><b>whose</b></td><td>dessen / deren<br><i>the man <b>whose</b> car was stolen</i></td></tr>
<tr><td><b>where</b></td><td>wo (Orte)<br><i>the café <b>where</b> we met</i></td></tr></table>
<p>Ist das Relativpronomen <b>Objekt</b>, kann man es weglassen: <i>The film (that) we saw was great.</i></p>
<p>Keine Kommas wie im Deutschen bei notwendigen Relativsätzen.</p>`,
    examples: ['I have a friend who speaks five languages.', 'This is the book that I told you about.', "That's the hotel where we stayed."],
    ex: [
      { q: 'The man ___ helped me was very kind.', o: ['which', 'who', 'where'], a: 1, de: 'Der Mann, der mir geholfen hat, war sehr freundlich.', x: 'Person → who' },
      { q: 'Where is the cake ___ I bought?', o: ['who', 'which', 'whose'], a: 1, de: 'Wo ist der Kuchen, den ich gekauft habe?', x: 'Ding → which (oder that)' },
      { q: "That's the restaurant ___ we had our first date.", o: ['which', 'where', 'who'], a: 1, de: 'Das ist das Restaurant, in dem wir unser erstes Date hatten.', x: 'Ort → where' },
      { q: 'I know a girl ___ father is a famous actor.', o: ['who', "who's", 'whose'], a: 2, de: 'Ich kenne ein Mädchen, dessen Vater ein berühmter Schauspieler ist.', x: 'dessen/deren → whose' },
      { q: 'The people ___ work here are very friendly.', o: ['who', 'which', 'whose'], a: 0, de: 'Die Leute, die hier arbeiten, sind sehr freundlich.', x: 'Personen → who' },
      { q: 'Which sentence is correct?', o: ['The film we watched was boring.', 'The film who we watched was boring.', 'The film, what we watched, was boring.'], a: 0, de: 'Der Film, den wir gesehen haben, war langweilig.', x: 'Objekt-Relativpronomen darf wegfallen; nie „what“' },
      { b: 'She is the woman who lives next door.', de: 'Sie ist die Frau, die nebenan wohnt.' },
      { b: 'This is the phone that I want to buy.', de: 'Das ist das Handy, das ich kaufen will.' },
    ]},
  { id: 'gerund', level: 'B1', icon: '🔤', title: 'Gerund oder Infinitiv?',
    explain: `<p>Manche Verben brauchen danach <b>-ing</b>, andere <b>to + Grundform</b>. Das muss man lernen:</p>
<table class="gtable"><tr><th>+ -ing</th><th>+ to …</th></tr>
<tr><td>enjoy, finish, mind, avoid, suggest, keep, give up, look forward to, can't stand</td><td>want, decide, hope, plan, agree, promise, refuse, learn, would like</td></tr></table>
<p>Nach <b>Präpositionen</b> immer -ing: <i>interested <b>in</b> learning, good <b>at</b> cooking, before leav<b>ing</b></i></p>
<p>Als Subjekt -ing: <i><b>Swimming</b> is good for you.</i> · Zweck („um zu“) mit to: <i>I came <b>to help</b>.</i></p>
<p>Mit Bedeutungsunterschied: <i>I <b>stopped smoking</b></i> (aufgehört) ↔ <i>I <b>stopped to smoke</b></i> (angehalten, um zu rauchen)</p>`,
    examples: ['I enjoy cooking for friends.', 'She decided to quit her job.', "I'm looking forward to seeing you."],
    ex: [
      { q: 'I enjoy ___ in the mountains.', o: ['to walk', 'walking', 'walk'], a: 1, de: 'Ich wandere gern in den Bergen.', x: 'enjoy + -ing' },
      { q: 'We decided ___ a new car.', o: ['buying', 'to buy', 'buy'], a: 1, de: 'Wir haben beschlossen, ein neues Auto zu kaufen.', x: 'decide + to' },
      { q: "I'm looking forward to ___ you.", o: ['see', 'seeing', 'to see'], a: 1, de: 'Ich freue mich darauf, dich zu sehen.', x: 'to ist hier eine Präposition → -ing' },
      { q: 'Would you mind ___ the window?', o: ['to open', 'opening', 'open'], a: 1, de: 'Würde es dir etwas ausmachen, das Fenster zu öffnen?', x: 'mind + -ing' },
      { q: "She's interested in ___ photography.", o: ['learning', 'to learn', 'learn'], a: 0, de: 'Sie interessiert sich dafür, Fotografie zu lernen.', x: 'nach Präposition in → -ing' },
      { q: 'I hope ___ you again soon.', o: ['seeing', 'to see', 'see'], a: 1, de: 'Ich hoffe, dich bald wiederzusehen.', x: 'hope + to' },
      { q: 'He gave up ___ two years ago.', o: ['to smoke', 'smoking', 'smoke'], a: 1, de: 'Er hat vor zwei Jahren mit dem Rauchen aufgehört.', x: 'give up + -ing' },
      { q: 'I went to the shop ___ some milk.', o: ['for buying', 'to buy', 'buying'], a: 1, de: 'Ich bin in den Laden gegangen, um Milch zu kaufen.', x: '„um zu“ = to' },
      { b: 'Learning a language takes time.', de: 'Eine Sprache zu lernen braucht Zeit.' },
      { b: 'She promised to call me.', de: 'Sie hat versprochen, mich anzurufen.' },
    ]},
  { id: 'reported', level: 'B1', icon: '🗨️', title: 'Reported Speech (indirekte Rede)',
    explain: `<p>Wenn das Einleitungsverb in der Vergangenheit steht (<b>said, told</b>), geht die Zeit <b>einen Schritt zurück</b>:</p>
<table class="gtable"><tr><th>direkt</th><th>indirekt</th></tr>
<tr><td>am / is</td><td><b>was</b></td></tr><tr><td>Present Simple (I live)</td><td>Past Simple (he <b>lived</b>)</td></tr>
<tr><td>Past / Present Perfect</td><td><b>had</b> + 3. Form</td></tr><tr><td>will / can</td><td><b>would / could</b></td></tr></table>
<p>Auch Personen und Orte ändern sich: I → he/she, here → there, tomorrow → the next day.</p>
<p><b>say</b> ohne Person, <b>tell</b> mit Person: <i>She <b>said</b> (that) … · She <b>told me</b> (that) …</i></p>
<p>Fragen: Satzstellung wie in Aussagen, kein do: <i>He asked where I <b>lived</b>.</i> · Ja/Nein-Fragen mit <b>if</b>.</p>`,
    examples: ['"I\'m tired." → She said she was tired.', '"I will call you." → He said he would call me.', '"Do you like it?" → She asked if I liked it.'],
    ex: [
      { q: '"I am hungry." → Tom said he ___ hungry.', o: ['is', 'was', 'were'], a: 1, de: 'Tom sagte, er habe Hunger.', x: 'am → was' },
      { q: '"I will help you." → She said she ___ help me.', o: ['will', 'would', 'could'], a: 1, de: 'Sie sagte, sie würde mir helfen.', x: 'will → would' },
      { q: 'He ___ me that he was leaving.', o: ['said', 'told', 'says'], a: 1, de: 'Er sagte mir, dass er gehe.', x: 'mit Person (me) → told' },
      { q: 'She ___ that she liked the film.', o: ['told', 'said', 'told to'], a: 1, de: 'Sie sagte, dass ihr der Film gefalle.', x: 'ohne Person → said' },
      { q: '"Where do you live?" → He asked me where I ___.', o: ['live', 'lived', 'did live'], a: 1, de: 'Er fragte mich, wo ich wohne.', x: 'Zeit zurück, Aussage-Wortstellung, kein do' },
      { q: '"Are you coming?" → She asked ___ I was coming.', o: ['that', 'if', 'do'], a: 1, de: 'Sie fragte, ob ich komme.', x: 'Ja/Nein-Frage → if (ob)' },
      { q: '"I can swim." → My son said he ___ swim.', o: ['can', 'could', 'would'], a: 1, de: 'Mein Sohn sagte, er könne schwimmen.', x: 'can → could' },
      { b: 'She said that she was busy.', de: 'Sie sagte, dass sie beschäftigt sei.' },
      { b: 'He asked me where the station was.', de: 'Er fragte mich, wo der Bahnhof sei.' },
    ]},
  { id: 'german-traps', level: 'B1', icon: '⚠️', title: 'Typische Fehler deutscher Lerner',
    explain: `<table class="gtable">
<tr><td><b>become</b> = werden<br><b>get</b> = bekommen</td><td><i>I <b>got</b> a letter.</i> (nicht: I became a letter!)</td></tr>
<tr><td><b>since</b> + Zeitpunkt<br><b>for</b> + Dauer</td><td>since Monday · for three days – beide = „seit“</td></tr>
<tr><td><b>make</b> = herstellen, erschaffen<br><b>do</b> = tun, erledigen</td><td>make a cake, a mistake, a decision, a phone call · do homework, the shopping, sport, a job</td></tr>
<tr><td><b>actual(ly)</b> = eigentlich, tatsächlich</td><td>„aktuell“ = <b>current(ly)</b></td></tr>
<tr><td><b>sensible</b> = vernünftig</td><td>„sensibel“ = <b>sensitive</b></td></tr>
<tr><td><b>gift</b> = Geschenk · <b>chef</b> = Koch</td><td>„Chef“ = <b>boss</b></td></tr>
<tr><td><b>handy</b> = praktisch</td><td>„Handy“ = <b>mobile (phone)</b></td></tr>
<tr><td><b>eventually</b> = schließlich</td><td>„eventuell“ = <b>maybe, possibly</b></td></tr>
<tr><td><b>also</b> = auch</td><td>„also“ (daher) = <b>so</b></td></tr>
<tr><td><b>borrow</b> = sich leihen<br><b>lend</b> = verleihen</td><td><i>Can I borrow your pen? · Can you lend me your pen?</i></td></tr></table>`,
    examples: ['I got a new phone for my birthday.', "I've lived here for ten years.", "Don't worry, everyone makes mistakes."],
    ex: [
      { q: 'I ___ a nice present from my parents.', o: ['became', 'got', 'was'], a: 1, de: 'Ich habe ein schönes Geschenk von meinen Eltern bekommen.', x: 'bekommen = get (got); become = werden' },
      { q: 'She wants to ___ a doctor.', o: ['get', 'become', 'make'], a: 1, de: 'Sie möchte Ärztin werden.', x: 'werden = become' },
      { q: "I've known her ___ ten years.", o: ['since', 'for', 'from'], a: 1, de: 'Ich kenne sie seit zehn Jahren.', x: 'Dauer → for' },
      { q: "He's been ill ___ Monday.", o: ['since', 'for', 'until'], a: 0, de: 'Er ist seit Montag krank.', x: 'Zeitpunkt → since' },
      { q: "Don't be afraid to ___ mistakes.", o: ['do', 'make', 'have'], a: 1, de: 'Hab keine Angst, Fehler zu machen.', x: 'a mistake → make' },
      { q: 'I have to ___ my homework first.', o: ['make', 'do', 'work'], a: 1, de: 'Ich muss zuerst meine Hausaufgaben machen.', x: 'homework → do' },
      { q: 'What is the ___ situation? (aktuell)', o: ['actual', 'current', 'eventual'], a: 1, de: 'Wie ist die aktuelle Lage?', x: 'aktuell = current; actual = tatsächlich' },
      { q: 'Can I ___ your charger for a minute?', o: ['lend', 'borrow', 'rent'], a: 1, de: 'Kann ich mir kurz dein Ladegerät leihen?', x: 'sich leihen = borrow; verleihen = lend' },
      { q: 'My ___ is out of battery. (Handy)', o: ['handy', 'mobile', 'portable'], a: 1, de: 'Mein Handy hat keinen Akku mehr.', x: 'Handy = mobile (BrE) / cell phone (AmE)' },
      { b: "It's getting dark.", de: 'Es wird dunkel.' },
      { b: 'Could you lend me ten euros?', de: 'Könntest du mir zehn Euro leihen?' },
    ]},
];

// Einstufung beim ersten Start: 2 × A1, 4 × A2, 4 × B1 (Auswertung in logic.js)
export const PLACEMENT = [
  { level: 'A1', q: 'She ___ two brothers.', o: ['have', 'has', 'haves'], a: 1, de: 'Sie hat zwei Brüder.' },
  { level: 'A1', q: 'Where ___ you live?', o: ['do', 'does', 'are'], a: 0, de: 'Wo wohnst du?' },
  { level: 'A2', q: 'I ___ to Spain last summer.', o: ['go', 'went', 'have gone'], a: 1, de: 'Ich war letzten Sommer in Spanien.' },
  { level: 'A2', q: "We ___ the new film yet.", o: ["didn't see", "haven't seen", "don't see"], a: 1, de: 'Wir haben den neuen Film noch nicht gesehen.' },
  { level: 'A2', q: 'This is ___ restaurant in town.', o: ['the best', 'the better', 'the most good'], a: 0, de: 'Das ist das beste Restaurant der Stadt.' },
  { level: 'A2', q: "If it rains, we ___ at home.", o: ['stay', "'ll stay", "'d stayed"], a: 1, de: 'Wenn es regnet, bleiben wir zu Hause.' },
  { level: 'B1', q: 'If I ___ more time, I would learn Spanish.', o: ['have', 'had', 'will have'], a: 1, de: 'Wenn ich mehr Zeit hätte, würde ich Spanisch lernen.' },
  { level: 'B1', q: 'The bridge ___ in 1890.', o: ['built', 'was built', 'has built'], a: 1, de: 'Die Brücke wurde 1890 gebaut.' },
  { level: 'B1', q: 'I ___ English for three years.', o: ['learn', 'am learning', 'have been learning'], a: 2, de: 'Ich lerne seit drei Jahren Englisch.' },
  { level: 'B1', q: '"I\'m tired." → She said she ___ tired.', o: ['is', 'was', 'be'], a: 1, de: 'Sie sagte, sie sei müde.' },
];

export const BADGES = [
  { id: 'first', icon: '🎯', title: 'Erste Schritte', desc: 'Erste Lektion abgeschlossen' },
  { id: 'streak3', icon: '🔥', title: 'Dranbleiber', desc: '3 Tage in Folge Tagesziel erreicht' },
  { id: 'streak7', icon: '📅', title: 'Eine Woche!', desc: '7 Tage in Folge' },
  { id: 'streak30', icon: '🏆', title: 'Gewohnheit', desc: '30 Tage in Folge' },
  { id: 'words25', icon: '📚', title: 'Wortsammler', desc: '25 Wörter gelernt' },
  { id: 'words100', icon: '🧠', title: 'Vielwisser', desc: '100 Wörter gelernt' },
  { id: 'wordsAll', icon: '🌍', title: 'Wortschatz komplett', desc: 'Alle Wörter gelernt' },
  { id: 'perfect', icon: '💯', title: 'Fehlerfrei', desc: 'Eine Lektion ohne Fehler' },
  { id: 'speaker', icon: '🎙️', title: 'Sprechprofi', desc: '10× richtig ausgesprochen' },
  { id: 'grammar3', icon: '✍️', title: 'Grammatik-Fan', desc: '3 Grammatik-Themen geübt' },
  { id: 'grammarAll', icon: '🎓', title: 'Grammatik-Meister', desc: 'Alle Grammatik-Themen geübt' },
  { id: 'b1', icon: '🚀', title: 'B1 erreicht', desc: 'Alle B1-Einheiten begonnen' },
  { id: 'xp1000', icon: '⭐', title: '1000 XP', desc: '1000 Erfahrungspunkte gesammelt' },
  { id: 'early', icon: '🌅', title: 'Früher Vogel', desc: 'Vor 8 Uhr gelernt' },
  { id: 'night', icon: '🦉', title: 'Nachteule', desc: 'Nach 22 Uhr gelernt' },
];
