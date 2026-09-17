// Inhalte der Französisch-App.
// Jeder Eintrag gehört zu einer "station" (siehe stations). "level" ist ein Relikt und wird nicht mehr ausgewertet.
// "tip" ist die Regel oder Merkhilfe, "trap" der typische Fehler von Deutschsprachigen (nur bei falscher Antwort gezeigt).
// Vokabeln: "de" und "fr" mit Artikel. "alt" sind weitere akzeptierte französische, "altDe" weitere deutsche Antworten.
// "ctxFr"/"ctxDe": optionaler Beispielsatz, wird bei mehrdeutigen Wörtern in der Sprache der Aufgabe angezeigt.
// Fehler finden: "words" sind die antippbaren Teile, "wrong" ist der Index des falschen Teils.
// Zeiten: "___" im Satz ist die Lücke, "answer" der Index der richtigen Option.

window.CONTENT = {
  meta: { lang: "fr-FR", title: "Flâner" },

  vocab: [
    // Station Bordeaux: Im Café bestellen
    { id: "c01", pos: "nomen", station: "bordeaux", level: 1, theme: "Im Café", de: "der Kaffee", fr: "le café", altDe: ["das Café"], ctxFr: "Un café, s'il vous plaît.", ctxDe: "Einen Kaffee, bitte.", tip: "Un café ist ein kleiner schwarzer Espresso. Wer Filterkaffee will, sagt un café allongé." },
    { id: "c02", pos: "nomen", station: "bordeaux", level: 1, theme: "Im Café", de: "der Milchkaffee", fr: "le café au lait", alt: ["le café crème", "le crème"], tip: "Im Café bestellt man eher un crème oder un café crème." },
    { id: "c03", pos: "nomen", station: "bordeaux", level: 1, theme: "Im Café", de: "der Tee", fr: "le thé", tip: "Mit Akzent, sonst wäre es te (dich)." },
    { id: "c04", pos: "nomen", station: "bordeaux", level: 1, theme: "Im Café", de: "das Croissant", fr: "le croissant", tip: "Maskulin, obwohl es im Deutschen sächlich ist. Das t am Ende ist stumm." },
    { id: "c05", pos: "nomen", station: "bordeaux", level: 1, theme: "Im Café", de: "das Butterbrot", fr: "la tartine", altDe: ["die Brotscheibe"], tip: "Ein Stück Baguette mit Butter oder Marmelade, das klassische Frühstück." },
    { id: "c06", pos: "nomen", station: "bordeaux", level: 1, theme: "Im Café", de: "der Orangensaft", fr: "le jus d'orange", tip: "Jus mit stummem s. Un jus de pomme: Apfelsaft." },
    { id: "c07", pos: "nomen", station: "bordeaux", level: 1, theme: "Im Café", de: "das Sprudelwasser", fr: "l'eau gazeuse", alt: ["l'eau pétillante"], tip: "Stilles Wasser: l'eau plate. Leitungswasser ist kostenlos: une carafe d'eau." },
    { id: "c08", pos: "nomen", station: "bordeaux", level: 1, theme: "Im Café", de: "die Speisekarte", fr: "la carte", altDe: ["die Karte"], ctxFr: "La carte, s'il vous plaît.", ctxDe: "Die Karte, bitte.", tip: "Auch: die Landkarte, die Bankkarte.", trap: "Stolperstein: le menu ist nicht die Speisekarte, sondern das feste Tagesmenü. Die Karte ist la carte." },
    { id: "c09", pos: "nomen", station: "bordeaux", level: 1, theme: "Im Café", de: "die Terrasse", fr: "la terrasse", tip: "En terrasse: draußen sitzen. Doppel-r, Doppel-s." },
    { id: "c10", pos: "nomen", station: "bordeaux", level: 1, theme: "Im Café", de: "der Kellner", fr: "le serveur", alt: ["la serveuse"], tip: "Vom Verb servir. Kellnerin: la serveuse.", trap: "Stolperstein: Garçon! ruft heute niemand mehr. Man sagt s'il vous plaît oder Monsieur, Madame." },
    { id: "c11", pos: "verb", station: "bordeaux", level: 1, theme: "Im Café", de: "bestellen", fr: "commander", tip: "Je voudrais commander. Auch: befehlen, steuern." },
    { id: "c12", pos: "verb", station: "bordeaux", level: 1, theme: "Im Café", de: "nehmen", fr: "prendre", ctxFr: "Je prends un café.", ctxDe: "Ich nehme einen Kaffee.", tip: "Je prends, vous prenez, ils prennent. Das übliche Wort beim Bestellen.", trap: "Stolperstein: Beim Bestellen nicht j'ai un café, sondern je prends un café." },
    { id: "c13", pos: "verb", station: "bordeaux", level: 1, theme: "Im Café", de: "trinken", fr: "boire", tip: "Unregelmäßig: je bois, nous buvons, ils boivent." },
    { id: "c14", pos: "verb", station: "bordeaux", level: 1, theme: "Im Café", de: "essen", fr: "manger", tip: "Nous mangeons, mit e vor dem o, damit das g weich bleibt." },
    { id: "c15", pos: "verb", station: "bordeaux", level: 1, theme: "Im Café", de: "kosten", fr: "coûter", ctxFr: "Ça coûte combien ?", ctxDe: "Wie viel kostet das?", tip: "Ça coûte deux euros. Mit Zirkumflex auf dem u." },
    { id: "c16", pos: "adjektiv", station: "bordeaux", level: 1, theme: "Im Café", de: "heiß", fr: "chaud", alt: ["chaude"], altDe: ["warm"], tip: "Un chocolat chaud: eine heiße Schokolade. Feminin: chaude." },
    { id: "c17", pos: "adjektiv", station: "bordeaux", level: 1, theme: "Im Café", de: "kalt", fr: "froid", alt: ["froide"], tip: "Une boisson froide. Das d hört man erst im Femininum." },
    { id: "c18", pos: "adjektiv", station: "bordeaux", level: 1, theme: "Im Café", de: "süß", fr: "sucré", alt: ["sucrée"], tip: "Von le sucre. Sans sucre: ohne Zucker." },
    { id: "c19", pos: "wendung", station: "bordeaux", level: 1, theme: "Im Café", de: "Ich hätte gern", fr: "Je voudrais", tip: "Die höfliche Form von vouloir. Je veux klingt fordernd." },
    { id: "c20", pos: "wendung", station: "bordeaux", level: 1, theme: "Im Café", de: "Guten Appetit", fr: "Bon appétit", tip: "Zwei p, ein t. Sagt auch der Kellner beim Servieren." },
    // Station Brest: Begrüßen und sich vorstellen
    { id: "b01", pos: "wendung", station: "brest", level: 1, theme: "Begrüßen", de: "Guten Tag", fr: "Bonjour", tip: "Wörtlich: guten Tag. Gilt bis zum frühen Abend, danach bonsoir." },
    { id: "b02", pos: "wendung", station: "brest", level: 1, theme: "Begrüßen", de: "Hallo", fr: "Salut", altDe: ["Tschüss"], ctxFr: "Salut Marie, ça va ?", ctxDe: "Hallo Marie, wie geht's?", tip: "Nur unter Freunden und Jüngeren. Heißt auch tschüss.", trap: "Stolperstein: Salut zu Fremden oder Älteren wirkt unhöflich. Im Zweifel bonjour." },
    { id: "b03", pos: "wendung", station: "brest", level: 1, theme: "Begrüßen", de: "Auf Wiedersehen", fr: "Au revoir", tip: "Wörtlich: auf das Wiedersehen." },
    { id: "b04", pos: "wendung", station: "brest", level: 1, theme: "Begrüßen", de: "Vielen Dank", fr: "Merci beaucoup", tip: "Beaucoup heißt viel oder sehr." },
    { id: "b05", pos: "wendung", station: "brest", level: 1, theme: "Begrüßen", de: "bitte", fr: "S'il vous plaît", alt: ["s'il te plaît"], ctxFr: "Un café, s'il vous plaît.", ctxDe: "Einen Kaffee, bitte.", tip: "Wörtlich: wenn es Ihnen gefällt. Unter Freunden: s'il te plaît.", trap: "Stolperstein: Für bitte als Antwort auf danke sagt man nicht s'il vous plaît, sondern de rien oder je vous en prie." },
    { id: "b06", pos: "adjektiv", station: "brest", level: 1, theme: "Vorstellen", de: "sehr erfreut", fr: "enchanté", alt: ["enchantée"], tip: "Sagt man beim Kennenlernen. Frauen schreiben enchantée, klingt gleich." },
    { id: "b07", pos: "nomen", station: "brest", level: 1, theme: "Vorstellen", de: "der Vorname", fr: "le prénom", tip: "Pré heißt vor: der Name, der vor dem Nachnamen steht." },
    { id: "b08", pos: "nomen", station: "brest", level: 1, theme: "Vorstellen", de: "der Nachname", fr: "le nom", altDe: ["der Name"], ctxFr: "Votre nom, s'il vous plaît ?", ctxDe: "Ihr Nachname, bitte?", tip: "Nom heißt Name und meist Nachname. Le nom de famille ist eindeutig." },
    { id: "b09", pos: "nomen", station: "brest", level: 1, theme: "Vorstellen", de: "die Stadt", fr: "la ville", tip: "Nicht mit village (Dorf) verwechseln." },
    { id: "b10", pos: "nomen", station: "brest", level: 1, theme: "Vorstellen", de: "Deutschland", fr: "l'Allemagne", tip: "Länder haben im Französischen einen Artikel: l'Allemagne, la France.", trap: "Stolperstein: in Deutschland heißt en Allemagne, ohne Artikel. Aber: j'aime l'Allemagne." },
    { id: "b11", pos: "adjektiv", station: "brest", level: 1, theme: "Vorstellen", de: "deutsch", fr: "allemand", alt: ["allemande"], tip: "Als Nationalität klein: je suis allemand. Als Person groß: un Allemand." },
    { id: "b12", pos: "verb", station: "brest", level: 1, theme: "Vorstellen", de: "wohnen", fr: "habiter", tip: "J'habite à Brest. Das h ist stumm, deshalb j'." },
    { id: "b13", pos: "verb", station: "brest", level: 1, theme: "Vorstellen", de: "sprechen", fr: "parler", tip: "Parler français, ohne Präposition.", trap: "Stolperstein: parler le français geht auch, aber parler en français heißt auf Französisch reden, nicht die Sprache können." },
    { id: "b14", pos: "verb", station: "brest", level: 1, theme: "Vorstellen", de: "heißen", fr: "s'appeler", tip: "Je m'appelle, tu t'appelles, il s'appelle. Reflexiv.", trap: "Stolperstein: nicht je suis appelé. Heißen ist im Französischen sich nennen." },
    { id: "b15", pos: "verb", station: "brest", level: 1, theme: "Vorstellen", de: "verstehen", fr: "comprendre", tip: "Je comprends, vous comprenez. Wie prendre." },
    { id: "b16", pos: "wendung", station: "brest", level: 1, theme: "Vorstellen", de: "ein bisschen", fr: "un peu", tip: "Je parle un peu français." },
    { id: "b17", pos: "wendung", station: "brest", level: 1, theme: "Begrüßen", de: "willkommen", fr: "Bienvenue", tip: "Bienvenue en France. Feminin, aber unveränderlich als Ausruf." },
    { id: "b18", pos: "wendung", station: "brest", level: 1, theme: "Begrüßen", de: "Entschuldigung", fr: "Excusez-moi", alt: ["pardon"], ctxFr: "Excusez-moi, madame, vous avez l'heure ?", ctxDe: "Entschuldigung, haben Sie die Uhrzeit?", tip: "Um jemanden anzusprechen. Pardon, wenn man jemanden anrempelt." },
    { id: "b19", pos: "nomen", station: "brest", level: 1, theme: "Begrüßen", de: "der Tag", fr: "la journée", altDe: ["der Tagesverlauf"], ctxFr: "Bonne journée !", ctxDe: "Schönen Tag noch!", tip: "Le jour ist der Tag als Datum, la journée der Tag als Verlauf. Bonne journée!" },
    { id: "b20", pos: "nomen", station: "brest", level: 1, theme: "Vorstellen", de: "die Reise", fr: "le voyage", tip: "Bon voyage! Maskulin, wie alle -age-Wörter außer la plage, la page, la cage, l'image." },
    // Stufe 1: Einkaufen und Alltag
    { id: "v01", pos: "nomen", level: 1, station: "marseille", theme: "Einkaufen", de: "die Bäckerei", fr: "la boulangerie", tip: "Vom Wort boule (Kugel), wie ein rundes Brot." },
    { id: "v02", pos: "nomen", level: 1, station: "marseille", theme: "Einkaufen", de: "der Markt", fr: "le marché", tip: "Klingt wie das deutsche Wort, aber mit Akzent am Ende." },
    { id: "v03", pos: "nomen", level: 1, station: "marseille", theme: "Einkaufen", de: "das Brot", fr: "le pain", tip: "Nicht mit pin (Kiefer) verwechseln: der Nasal am Ende." },
    { id: "v04", pos: "nomen", level: 1, station: "marseille", theme: "Einkaufen", de: "der Käse", fr: "le fromage", tip: "Alle Wörter auf -age sind maskulin, außer la page, la plage, la cage." },
    { id: "v05", pos: "nomen", level: 1, station: "marseille", theme: "Einkaufen", de: "die Rechnung", fr: "l'addition", altDe: ["die Addition"], ctxFr: "L'addition, s'il vous plaît.", ctxDe: "Die Rechnung, bitte.", tip: "Im Restaurant: L'addition, s'il vous plaît." },
    { id: "v06", pos: "nomen", level: 1, station: "marseille", theme: "Einkaufen", de: "der Apfel", fr: "la pomme", tip: "Pomme de terre ist die Kartoffel, der Erdapfel." },
    { id: "v07", pos: "nomen", level: 1, station: "marseille", theme: "Einkaufen", de: "das Wasser", fr: "l'eau", tip: "Drei Buchstaben, nur ein Laut: o." },
    { id: "v08", pos: "adjektiv", level: 1, station: "marseille", theme: "Einkaufen", de: "teuer", fr: "cher", alt: ["chère"], altDe: ["lieb"], ctxFr: "C'est trop cher.", ctxDe: "Das ist zu teuer.", tip: "Cher heißt auch lieb, wie in cher ami.", trap: "Stolperstein: cher nach dem Nomen heißt teuer (un hôtel cher), vor dem Nomen lieb (mon cher ami)." },
    { id: "v09", pos: "adjektiv", level: 1, station: "marseille", theme: "Einkaufen", de: "billig", fr: "bon marché", alt: ["pas cher"], tip: "Wörtlich: guter Markt. Wird nicht verändert." },
    { id: "v10", pos: "nomen", level: 1, station: "marseille", theme: "Einkaufen", de: "das Geld", fr: "l'argent", altDe: ["das Silber"], ctxFr: "Je n'ai pas d'argent sur moi.", ctxDe: "Ich habe kein Geld dabei.", tip: "Argent heißt auch Silber.", trap: "Stolperstein: l'argent ist maskulin, obwohl der Artikel es verschluckt: l'argent est cher." },
    { id: "v11", pos: "nomen", level: 1, station: "marseille", theme: "Einkaufen", de: "die Tasche", fr: "le sac", altDe: ["der Beutel", "die Tüte"], ctxFr: "Vous voulez un sac ?", ctxDe: "Möchten Sie eine Tasche?", tip: "Le sac à main ist die Handtasche." },
    { id: "v12", pos: "nomen", level: 1, station: "marseille", theme: "Einkaufen", de: "der Preis", fr: "le prix", tip: "Das x am Ende ist stumm." },
    { id: "v13", pos: "verb", level: 1, station: "marseille", theme: "Einkaufen", de: "kaufen", fr: "acheter", tip: "j'achète, mit accent grave in der Einzahl.", trap: "Stolperstein: acheter quelque chose à quelqu'un kann kaufen von und kaufen für heißen, der Zusammenhang entscheidet." },
    { id: "v14", pos: "verb", level: 1, station: "marseille", theme: "Einkaufen", de: "bezahlen", fr: "payer", tip: "je paie, nous payons." },
    { id: "v15", pos: "nomen", level: 1, station: "marseille", theme: "Einkaufen", de: "die Kasse", fr: "la caisse", tip: "Auch: die Kiste." },
    { id: "v16", pos: "adjektiv", level: 1, station: "marseille", theme: "Einkaufen", de: "geschlossen", fr: "fermé", alt: ["fermée"], tip: "Fermer heißt schließen. Steht so an jeder Ladentür." },

    // Stufe 2: Arbeit und Gefühle
    { id: "v17", pos: "nomen", level: 2, station: "paris", theme: "Arbeit", de: "die Besprechung", fr: "la réunion", tip: "Wörtlich: das Wiedervereinen." },
    { id: "v18", pos: "nomen", level: 2, station: "paris", theme: "Arbeit", de: "der Termin", fr: "le rendez-vous", tip: "Gilt für Arzt, Friseur und Verabredung gleichermaßen.", trap: "Stolperstein: rendez-vous ist neutral, auch beim Zahnarzt. Kein romantischer Unterton wie im Deutschen." },
    { id: "v19", pos: "nomen", level: 2, station: "paris", theme: "Arbeit", de: "die Frist", fr: "le délai", ctxFr: "Le délai est de deux semaines.", ctxDe: "Die Frist beträgt zwei Wochen.", tip: "Vorsicht: heißt nicht Verzögerung, sondern der Zeitraum, der einem bleibt.", trap: "Stolperstein: délai heißt nicht Verzögerung. Die Verspätung ist le retard." },
    { id: "v20", pos: "verb", level: 2, station: "paris", theme: "Arbeit", de: "verschieben", fr: "reporter", altDe: ["vertagen"], ctxFr: "On doit reporter la réunion.", ctxDe: "Wir müssen die Besprechung verschieben.", tip: "Un reporter ist der Reporter, reporter (Verb) heißt verschieben.", trap: "Stolperstein: nicht mit remettre verwechseln, das heißt eher aufschieben oder übergeben." },
    { id: "v21", pos: "nomen", level: 2, station: "paris", theme: "Arbeit", de: "der Kollege", fr: "le collègue", tip: "Gleiches Wort für die Kollegin: la collègue." },
    { id: "v22", pos: "nomen", level: 2, station: "paris", theme: "Arbeit", de: "die Erfahrung", fr: "l'expérience", altDe: ["das Experiment"], ctxFr: "Elle a beaucoup d'expérience.", ctxDe: "Sie hat viel Erfahrung.", tip: "Auch: das Experiment." },
    { id: "v23", pos: "adjektiv", level: 2, station: "paris", theme: "Gefühle", de: "müde", fr: "fatigué", alt: ["fatiguée"], tip: "Je suis fatigué. Das Akzent-e am Ende wird gesprochen." },
    { id: "v24", pos: "adjektiv", level: 2, station: "paris", theme: "Gefühle", de: "besorgt", fr: "inquiet", alt: ["inquiète"], tip: "Das Gegenteil von tranquille." },
    { id: "v25", pos: "adjektiv", level: 2, station: "paris", theme: "Gefühle", de: "stolz", fr: "fier", alt: ["fière"], tip: "Je suis fier de toi: Ich bin stolz auf dich." },
    { id: "v26", pos: "adjektiv", level: 2, station: "paris", theme: "Gefühle", de: "zufrieden", fr: "content", alt: ["contente", "satisfait", "satisfaite"], altDe: ["froh", "glücklich"], ctxFr: "Je suis content du résultat.", ctxDe: "Ich bin zufrieden mit dem Ergebnis.", tip: "Content heißt hier zufrieden, nicht Inhalt.", trap: "Stolperstein: content heißt zufrieden. Der Inhalt ist le contenu." },

    // Stufe 3: Wendungen
    { id: "v27", pos: "wendung", level: 3, station: "paris", theme: "Wendungen", de: "Es ist mir egal", fr: "Ça m'est égal", tip: "Wörtlich: Das ist mir gleich." },
    { id: "v28", pos: "wendung", level: 3, station: "paris", theme: "Wendungen", de: "sich Sorgen machen", fr: "s'inquiéter", tip: "Ne t'inquiète pas: Mach dir keine Sorgen." },
    { id: "v29", pos: "wendung", level: 3, station: "paris", theme: "Wendungen", de: "Ich habe es satt", fr: "J'en ai marre", tip: "Umgangssprachlich, sehr häufig." },
    { id: "v30", pos: "wendung", level: 3, station: "paris", theme: "Wendungen", de: "sich an etwas gewöhnen", fr: "s'habituer à quelque chose", tip: "Merke die Präposition à." },
    { id: "v31", pos: "wendung", level: 3, station: "paris", theme: "Wendungen", de: "zurechtkommen", fr: "se débrouiller", tip: "Je me débrouille: Ich komme klar." },
    { id: "v32", pos: "wendung", level: 3, station: "paris", theme: "Wendungen", de: "Es lohnt sich", fr: "Ça vaut le coup", alt: ["Ça vaut la peine"], tip: "Vom Verb valoir (wert sein)." },
    { id: "v33", pos: "wendung", level: 3, station: "paris", theme: "Wendungen", de: "jemandem fehlen", fr: "manquer à quelqu'un", tip: "Tu me manques heißt: Du fehlst mir. Die Richtung ist umgedreht.", trap: "Stolperstein: Tu me manques heißt Du fehlst mir, nicht Ich fehle dir. Subjekt ist die Person, die fehlt." },
    { id: "v34", pos: "wendung", level: 3, station: "paris", theme: "Wendungen", de: "auf etwas verzichten", fr: "renoncer à quelque chose", tip: "Präposition à, wie bei s'habituer." },
    // Ergänzung: weitere Verben und Adjektive (für Hilfe und Zuordnen nach Wortart)
    { id: "v35", pos: "verb", level: 1, station: "marseille", theme: "Einkaufen", de: "suchen", fr: "chercher", tip: "Je cherche la gare: Ich suche den Bahnhof. Ohne Präposition.", trap: "Stolperstein: kein pour und kein après. Chercher la gare, chercher ses clés." },
    { id: "v36", pos: "verb", level: 1, station: "marseille", theme: "Einkaufen", de: "finden", fr: "trouver", tip: "Je trouve, wie in trouvaille (Fundstück)." },
    { id: "v37", pos: "verb", level: 1, station: "marseille", theme: "Einkaufen", de: "warten", fr: "attendre", tip: "Attendre ohne Präposition: attendre le bus.", trap: "Stolperstein: kein pour und kein sur. Attendre quelqu'un, attendre le bus." },
    { id: "v38", pos: "verb", level: 1, station: "marseille", theme: "Einkaufen", de: "öffnen", fr: "ouvrir", tip: "Unregelmäßig: j'ouvre, nous ouvrons, Partizip ouvert." },
    { id: "v39", pos: "verb", level: 1, station: "marseille", theme: "Einkaufen", de: "schließen", fr: "fermer", tip: "Regelmäßig auf -er: je ferme." },
    { id: "v40", pos: "adjektiv", level: 1, station: "marseille", theme: "Einkaufen", de: "frisch", fr: "frais", alt: ["fraîche"], tip: "Feminin: fraîche, mit Zirkumflex." },
    { id: "v41", pos: "adjektiv", level: 1, station: "marseille", theme: "Einkaufen", de: "voll", fr: "plein", alt: ["pleine"], tip: "Faire le plein: volltanken." },
    { id: "v42", pos: "verb", level: 2, station: "paris", theme: "Arbeit", de: "vorschlagen", fr: "proposer", tip: "Proposer quelque chose à quelqu'un." },
    { id: "v43", pos: "verb", level: 2, station: "paris", theme: "Arbeit", de: "erklären", fr: "expliquer", tip: "Je t'explique: Ich erkläre es dir." },
    { id: "v44", pos: "verb", level: 2, station: "paris", theme: "Arbeit", de: "sich beeilen", fr: "se dépêcher", tip: "Dépêche-toi ! Beeil dich!" },
    { id: "v45", pos: "adjektiv", level: 2, station: "paris", theme: "Gefühle", de: "gelassen", fr: "tranquille", tip: "Gleiche Form für maskulin und feminin." },
    { id: "v46", pos: "adjektiv", level: 2, station: "paris", theme: "Gefühle", de: "enttäuscht", fr: "déçu", alt: ["déçue"], tip: "Vom Verb décevoir (enttäuschen)." },
    { id: "v47", pos: "verb", level: 3, station: "paris", theme: "Wendungen", de: "sich erinnern an", fr: "se souvenir de", tip: "Je me souviens de toi. Präposition de." },
    { id: "v48", pos: "verb", level: 3, station: "paris", theme: "Wendungen", de: "aufgeben", fr: "abandonner", alt: ["renoncer"], tip: "Auch: verlassen, im Stich lassen." },
    { id: "v49", pos: "adjektiv", level: 3, station: "paris", theme: "Wendungen", de: "überflüssig", fr: "inutile", tip: "Gegenteil von utile (nützlich)." },
    { id: "v50", pos: "adjektiv", level: 3, station: "paris", theme: "Wendungen", de: "ungefähr", fr: "environ", tip: "Adverb, steht vor der Zahl: environ dix minutes." }
  ],


  // Artikel: Stufe 1 und 2 bestimmter Artikel (le, la, l', les), Stufe 3 Teilungsartikel (du, de la, de l', des, und de nach Verneinung).
  // "prompt" mit ___ ist die Lücke, "answer" der Index der richtigen Option, "de" die Übersetzung für die Auflösung.
  articles: [
    { id: "ca1", station: "bordeaux", level: 1, prompt: "___ café", options: ["le", "la", "l'", "les"], answer: 0, explain: "Le café ist maskulin, wie le thé, le jus.", de: "der Kaffee" },
    { id: "ca2", station: "bordeaux", level: 1, prompt: "___ carte", options: ["le", "la", "l'", "les"], answer: 1, explain: "La carte ist feminin.", de: "die Speisekarte" },
    { id: "ca3", station: "bordeaux", level: 1, prompt: "___ addition", options: ["le", "la", "l'", "les"], answer: 2, explain: "Vor Vokal: l'addition. Feminin, wie alle Wörter auf -tion.", de: "die Rechnung" },
    { id: "ca4", station: "bordeaux", level: 1, prompt: "___ croissant", options: ["le", "la", "l'", "les"], answer: 0, explain: "Le croissant ist maskulin, anders als im Deutschen.", de: "das Croissant" },
    { id: "ca5", station: "bordeaux", level: 1, prompt: "___ terrasse", options: ["le", "la", "l'", "les"], answer: 1, explain: "La terrasse ist feminin, wie die meisten Wörter auf -e.", de: "die Terrasse" },
    { id: "ba1", station: "brest", level: 1, prompt: "___ prénom", options: ["le", "la", "l'", "les"], answer: 0, explain: "Le prénom ist maskulin, wie le nom.", de: "der Vorname" },
    { id: "ba2", station: "brest", level: 1, prompt: "___ ville", options: ["le", "la", "l'", "les"], answer: 1, explain: "La ville ist feminin. Auch la ville de Brest.", de: "die Stadt" },
    { id: "ba3", station: "brest", level: 1, prompt: "___ Allemagne", options: ["le", "la", "l'", "les"], answer: 2, explain: "Allemagne ist feminin und beginnt mit Vokal: l'Allemagne.", de: "Deutschland" },
    { id: "ba4", station: "brest", level: 1, prompt: "___ voyage", options: ["le", "la", "l'", "les"], answer: 0, explain: "Wörter auf -age sind maskulin: le voyage.", de: "die Reise" },
    { id: "ba5", station: "brest", level: 1, prompt: "___ journée", options: ["le", "la", "l'", "les"], answer: 1, explain: "Wörter auf -ée sind feminin: la journée, la soirée. Ausnahmen: le musée, le lycée.", de: "der Tag" },
    { id: "a01", level: 1, station: "marseille", prompt: "___ pain", options: ["le", "la", "l'", "les"], answer: 0, explain: "Le pain ist maskulin.", de: "das Brot" },
    { id: "a02", level: 1, station: "marseille", prompt: "___ boulangerie", options: ["le", "la", "l'", "les"], answer: 1, explain: "Wörter auf -erie sind feminin: la boulangerie, la boucherie.", de: "die Bäckerei" },
    { id: "a03", level: 1, station: "marseille", prompt: "___ eau", options: ["le", "la", "l'", "les"], answer: 2, explain: "Vor Vokal wird le oder la zu l'. Eau ist feminin: une eau fraîche.", trap: "Stolperstein: Vor Vokal sieht man das Geschlecht nicht. Merke es dir am Adjektiv: une eau froide.", de: "das Wasser" },
    { id: "a04", level: 1, station: "marseille", prompt: "___ enfants", options: ["le", "la", "l'", "les"], answer: 3, explain: "Plural, also les. Das s hört man vor Vokal: les‿enfants.", de: "die Kinder" },
    { id: "a05", level: 1, station: "marseille", prompt: "___ fromage", options: ["le", "la", "l'", "les"], answer: 0, explain: "Wörter auf -age sind maskulin, Ausnahmen: la page, la plage, la cage, l'image.", trap: "Stolperstein: Das Geschlecht folgt der Endung, nicht dem deutschen Wort. Le fromage, le garage, le village, aber la plage (der Strand).", de: "der Käse" },
    { id: "a06", level: 1, station: "marseille", prompt: "___ pomme", options: ["le", "la", "l'", "les"], answer: 1, explain: "Die meisten Wörter auf -e sind feminin, la pomme.", de: "der Apfel" },
    { id: "a07", level: 1, station: "marseille", prompt: "___ argent", options: ["le", "la", "l'", "les"], answer: 2, explain: "Vokal am Anfang: l'argent. Maskulin: de l'argent, il est cher.", de: "das Geld" },
    { id: "a08", level: 1, station: "marseille", prompt: "___ marché", options: ["le", "la", "l'", "les"], answer: 0, explain: "Le marché ist maskulin, wie le café, le thé.", de: "der Markt" },

    { id: "a09", level: 2, station: "strasbourg", prompt: "___ réunion", options: ["le", "la", "l'", "les"], answer: 1, explain: "Wörter auf -tion und -sion sind feminin: la réunion, la décision.", de: "die Besprechung" },
    { id: "a10", level: 2, station: "strasbourg", prompt: "___ problème", options: ["le", "la", "l'", "les"], answer: 0, explain: "Trotz -e maskulin: le problème, le système, le thème (griechischer Ursprung).", trap: "Stolperstein: Viele Wörter griechischen Ursprungs auf -ème und -amme sind maskulin: le problème, le programme.", de: "das Problem" },
    { id: "a11", level: 2, station: "strasbourg", prompt: "___ musée", options: ["le", "la", "l'", "les"], answer: 0, explain: "Le musée und le lycée sind maskulin, obwohl sie auf -ée enden.", de: "das Museum" },
    { id: "a12", level: 2, station: "strasbourg", prompt: "___ hôtel", options: ["le", "la", "l'", "les"], answer: 2, explain: "Stummes h zählt wie ein Vokal: l'hôtel, l'homme. Aber: le haricot (h aspiré).", trap: "Stolperstein: Nicht jedes h ist stumm. Le haricot, le héros, la haine (h aspiré) behalten den vollen Artikel.", de: "das Hotel" },
    { id: "a13", level: 2, station: "strasbourg", prompt: "___ vacances", options: ["le", "la", "l'", "les"], answer: 3, explain: "Vacances steht immer im Plural: les vacances.", de: "die Ferien" },
    { id: "a14", level: 2, station: "strasbourg", prompt: "___ main", options: ["le", "la", "l'", "les"], answer: 1, explain: "La main ist feminin, obwohl es nicht auf -e endet.", de: "die Hand" },
    { id: "a15", level: 2, station: "strasbourg", prompt: "___ voiture", options: ["le", "la", "l'", "les"], answer: 1, explain: "Wörter auf -ure sind feminin: la voiture, la nature.", de: "das Auto" },
    { id: "a16", level: 2, station: "strasbourg", prompt: "___ journal", options: ["le", "la", "l'", "les"], answer: 0, explain: "Wörter auf -al sind maskulin: le journal, le cheval. Plural: les journaux.", de: "die Zeitung" },

    { id: "a17", level: 3, station: "lyon", prompt: "Je voudrais ___ pain.", options: ["du", "de la", "de l'", "des"], answer: 0, explain: "Unbestimmte Menge, maskulin: du pain (de + le).", de: "Ich hätte gern Brot." },
    { id: "a18", level: 3, station: "lyon", prompt: "Elle mange ___ confiture.", options: ["du", "de la", "de l'", "des"], answer: 1, explain: "Unbestimmte Menge, feminin: de la confiture.", de: "Sie isst Marmelade." },
    { id: "a19", level: 3, station: "lyon", prompt: "Tu veux ___ eau ?", options: ["du", "de la", "de l'", "des"], answer: 2, explain: "Vor Vokal: de l'eau, de l'argent.", de: "Möchtest du Wasser?" },
    { id: "a20", level: 3, station: "lyon", prompt: "On achète ___ œufs.", options: ["du", "de la", "de l'", "des"], answer: 3, explain: "Plural: des œufs (de + les).", de: "Wir kaufen Eier." },
    { id: "a21", level: 3, station: "lyon", prompt: "Il boit ___ café.", options: ["du", "de la", "de l'", "des"], answer: 0, explain: "Du café: eine unbestimmte Menge Kaffee. Un café wäre eine Tasse.", de: "Er trinkt Kaffee." },
    { id: "a22", level: 3, station: "lyon", prompt: "Il n'y a pas ___ lait.", options: ["du", "de la", "de", "des"], answer: 2, explain: "Nach Verneinung wird der Teilungsartikel zu de: pas de lait, pas d'eau.", trap: "Stolperstein: Nach pas, plus, jamais wird du, de la, des zu de. Nur nach être bleibt der Artikel: ce n'est pas du lait.", de: "Es gibt keine Milch." },
    { id: "a23", level: 3, station: "lyon", prompt: "Je ne prends pas ___ sucre.", options: ["du", "de", "de la", "des"], answer: 1, explain: "Verneinung: pas de sucre. Du sucre nur im bejahten Satz.", de: "Ich nehme keinen Zucker." },
    { id: "a24", level: 3, station: "lyon", prompt: "Vous avez ___ enfants ?", options: ["du", "de la", "de l'", "des"], answer: 3, explain: "Plural, unbestimmt: des enfants.", de: "Haben Sie Kinder?" }
  ],

  errors: [
    { id: "ce1", station: "bordeaux", level: 1, words: ["Je", "prends", "une", "croissant."], wrong: 2, correct: "un", explain: "Le croissant ist maskulin: un croissant." },
    { id: "ce2", station: "bordeaux", level: 1, words: ["L'addition,", "s'il", "te", "plaît."], wrong: 2, correct: "vous", explain: "Den Kellner siezt man: s'il vous plaît. S'il te plaît nur unter Freunden." },
    { id: "ce3", station: "bordeaux", level: 1, words: ["Je", "voudrais", "de l'eau", "gazeux."], wrong: 3, correct: "gazeuse", explain: "Eau ist feminin, das Adjektiv folgt: de l'eau gazeuse." },
    { id: "ce4", station: "bordeaux", level: 1, words: ["Vous", "avez", "de la", "thé ?"], wrong: 2, correct: "du", explain: "Le thé ist maskulin, also du thé (de + le)." },
    { id: "ce5", station: "bordeaux", level: 1, words: ["Il fait chaud,", "je", "voudrais", "une", "boisson", "froid."], wrong: 5, correct: "froide", explain: "La boisson ist feminin: une boisson froide." },
    { id: "be1", station: "brest", level: 1, words: ["Je", "suis appelle", "Thomas."], wrong: 1, correct: "m'appelle", explain: "Heißen ist reflexiv: je m'appelle, tu t'appelles, il s'appelle." },
    { id: "be2", station: "brest", level: 1, words: ["J'habite", "en", "Munich."], wrong: 1, correct: "à", explain: "Vor Städten steht à: à Munich, à Paris. En vor femininen Ländern: en Allemagne." },
    { id: "be3", station: "brest", level: 1, words: ["Je", "viens", "de", "Allemagne."], wrong: 2, correct: "d'", explain: "Vor Vokal wird de zu d': d'Allemagne, d'Italie." },
    { id: "be4", station: "brest", level: 1, words: ["Comment", "tu", "t'appelle", "?"], wrong: 2, correct: "t'appelles", explain: "Die tu-Form endet auf -es: tu t'appelles, tu parles, tu habites." },
    { id: "be5", station: "brest", level: 1, words: ["Je habite", "à", "Berlin."], wrong: 0, correct: "J'habite", explain: "Vor Vokal und stummem h wird je zu j': j'habite, j'ai, j'aime." },
    { id: "e01", level: 1, station: "marseille", words: ["Je", "suis", "allé", "à le", "marché."], wrong: 3, correct: "au", explain: "à + le wird immer zu au. Ebenso à + les zu aux." },
    { id: "e02", level: 1, station: "marseille", words: ["Elle", "a", "un", "belle", "robe."], wrong: 2, correct: "une", explain: "Robe ist feminin, also une belle robe." },
    { id: "e03", level: 1, station: "marseille", words: ["Il", "habite", "en", "Paris."], wrong: 2, correct: "à", explain: "Vor Städten steht à. En steht vor femininen Ländern (en France)." },
    { id: "e04", level: 1, station: "marseille", words: ["Tu as faim ?", "Oui,", "je", "suis", "faim."], wrong: 3, correct: "ai", explain: "Hunger hat man im Französischen: avoir faim, avoir soif, avoir froid." },
    { id: "e05", level: 1, station: "marseille", words: ["Ils", "sont", "trois", "enfants."], wrong: 1, correct: "ont", explain: "Kinder hat man: avoir. Sont hieße, sie sind drei Kinder." },

    { id: "e06", level: 2, station: "avignon", words: ["Je", "pense", "à", "mon", "vacances."], wrong: 3, correct: "mes", explain: "Vacances steht immer im Plural: les vacances, mes vacances." },
    { id: "e07", level: 2, station: "avignon", words: ["Elle", "est", "plus grande", "comme", "moi."], wrong: 3, correct: "que", explain: "Beim Vergleich steht que, nicht comme: plus grande que moi." },
    { id: "e08", level: 2, station: "avignon", words: ["J'ai", "téléphoné", "mon frère", "hier."], wrong: 1, correct: "téléphoné à", explain: "Téléphoner à quelqu'un: das Verb braucht die Präposition à." },
    { id: "e09", level: 2, station: "avignon", words: ["Il", "attend pour", "le", "bus."], wrong: 1, correct: "attend", explain: "Attendre steht ohne Präposition: attendre le bus, attendre quelqu'un." },
    { id: "e10", level: 2, station: "avignon", words: ["Elle", "a", "mal", "au", "tête."], wrong: 3, correct: "à la", explain: "Tête ist feminin: avoir mal à la tête. Au nur bei maskulinen Wörtern (mal au dos)." },

    { id: "e11", level: 3, station: "paris", words: ["Quand j'étais petit,", "je", "suis allé", "souvent", "à la mer."], wrong: 2, correct: "allais", explain: "Gewohnheiten in der Vergangenheit stehen im Imparfait, nicht im Passé composé." },
    { id: "e12", level: 3, station: "paris", words: ["Hier,", "il faisait beau", "et", "nous", "sommes", "sorti."], wrong: 5, correct: "sortis", explain: "Bei être richtet sich das Partizip nach dem Subjekt: nous sommes sortis." },
    { id: "e13", level: 3, station: "paris", words: ["Si", "j'aurais", "le temps,", "je", "viendrais."], wrong: 1, correct: "j'avais", explain: "Nach si steht nie das Konditional: si + Imparfait, dann Konditional im Hauptsatz." },
    { id: "e14", level: 3, station: "paris", words: ["Le livre", "que", "je t'ai parlé", "est", "génial."], wrong: 1, correct: "dont", explain: "Parler de quelque chose: bei de wird das Relativpronomen zu dont." },
    { id: "e15", level: 3, station: "paris", words: ["Elle", "m'a dit", "qu'elle", "viendra", "demain."], wrong: 3, correct: "viendrait", explain: "Zeitenfolge in der indirekten Rede: nach einem Verb der Vergangenheit steht das Konditional." }
  ],

  speak: [
    { id: "cs1", station: "bordeaux", level: 1, fr: "Un café au lait et un croissant, s'il vous plaît.", de: "Einen Milchkaffee und ein Croissant, bitte." },
    { id: "cs2", station: "bordeaux", level: 1, fr: "Vous avez une table en terrasse ?", de: "Haben Sie einen Tisch draußen?" },
    { id: "cs3", station: "bordeaux", level: 1, fr: "Je prends un thé, sans sucre.", de: "Ich nehme einen Tee, ohne Zucker." },
    { id: "cs4", station: "bordeaux", level: 1, fr: "L'addition, s'il vous plaît. Merci, c'était très bon.", de: "Die Rechnung, bitte. Danke, es war sehr gut." },
    { id: "bs1", station: "brest", level: 1, fr: "Bonjour, je m'appelle Thomas.", de: "Guten Tag, ich heiße Thomas." },
    { id: "bs2", station: "brest", level: 1, fr: "Enchanté ! Comment vous appelez-vous ?", de: "Sehr erfreut! Wie heißen Sie?" },
    { id: "bs3", station: "brest", level: 1, fr: "Je viens d'Allemagne, j'habite près de Francfort.", de: "Ich komme aus Deutschland, ich wohne bei Frankfurt." },
    { id: "bs4", station: "brest", level: 1, fr: "Je parle un peu français, mais je comprends bien.", de: "Ich spreche ein bisschen Französisch, aber ich verstehe gut." },
    { id: "bs5", station: "brest", level: 1, fr: "Merci beaucoup, bonne journée, au revoir !", de: "Vielen Dank, schönen Tag noch, auf Wiedersehen!" },
    { id: "s01", station: "bordeaux", level: 1, fr: "Bonjour, je voudrais un café, s'il vous plaît.", de: "Guten Tag, ich hätte gern einen Kaffee, bitte." },
    { id: "s02", station: "bordeaux", level: 1, fr: "Où sont les toilettes ?", de: "Wo sind die Toiletten?" },
    { id: "s03", station: "marseille", level: 1, fr: "Ça coûte combien ?", de: "Wie viel kostet das?" },
    { id: "s04", station: "bordeaux", level: 1, fr: "Je ne comprends pas, vous pouvez répéter ?", de: "Ich verstehe nicht, können Sie das wiederholen?" },

    { id: "s05", station: "avignon", level: 2, fr: "Je cherche la gare, c'est loin d'ici ?", de: "Ich suche den Bahnhof, ist das weit von hier?" },
    { id: "s06", station: "lyon", level: 2, fr: "Est-ce que vous avez une table pour deux personnes ?", de: "Haben Sie einen Tisch für zwei Personen?" },
    { id: "s07", station: "strasbourg", level: 2, fr: "Je voudrais réserver une chambre pour deux nuits.", de: "Ich möchte ein Zimmer für zwei Nächte reservieren." },
    { id: "s08", station: "strasbourg", level: 2, fr: "Excusez-moi, je suis en retard, il y avait des bouchons.", de: "Entschuldigung, ich bin zu spät, es gab Stau." },

    { id: "s09", station: "strasbourg", level: 3, fr: "Si tu veux, on pourrait se voir ce week-end.", de: "Wenn du willst, könnten wir uns dieses Wochenende treffen." },
    { id: "s10", station: "paris", level: 3, fr: "Je n'ai pas eu le temps de finir, je m'en occupe demain.", de: "Ich hatte keine Zeit, fertig zu werden, ich kümmere mich morgen darum." },
    { id: "s11", station: "paris", level: 3, fr: "Ce n'est pas la peine de vous déranger, je vais me débrouiller.", de: "Machen Sie sich keine Umstände, ich komme zurecht." },
    { id: "s12", station: "avignon", level: 3, fr: "Vous pourriez me dire à quelle heure ferme le musée ?", de: "Könnten Sie mir sagen, um wie viel Uhr das Museum schließt?" }
  ],

  texts: [
    {
      id: "ct1", station: "bordeaux", level: 1, title: "Au café du port",
      text: "Il est dix heures. Marie et Paul sont au café du port. Marie commande un café crème et un croissant. Paul prend un thé et une tartine. Ils sont en terrasse parce qu'il fait beau. Le serveur est très gentil. Ça fait huit euros cinquante.",
      questions: [
        { q: "Was bestellt Paul?", options: ["Tee und Butterbrot", "Kaffee und Croissant", "Orangensaft"], answer: 0 },
        { q: "Warum sitzen sie draußen?", options: ["Weil das Wetter schön ist", "Weil drinnen kein Platz ist", "Weil es billiger ist"], answer: 0 },
        { q: "Wie viel bezahlen sie?", options: ["8,50 Euro", "10 Euro", "18,50 Euro"], answer: 0 }
      ]
    },
    {
      id: "ct2", station: "bordeaux", level: 1, title: "La carte",
      text: "Café : 2 euros. Café crème : 3 euros. Thé : 2 euros 50. Jus d'orange : 3 euros 50. Croissant : 1 euro 50. Tartine beurre : 2 euros. Petit-déjeuner complet : une boisson chaude, un jus d'orange et un croissant, 6 euros.",
      questions: [
        { q: "Was kostet ein Croissant?", options: ["1,50 Euro", "2 Euro", "3 Euro"], answer: 0 },
        { q: "Was gehört zum kompletten Frühstück?", options: ["Heißgetränk, Saft, Croissant", "Zwei Kaffee und eine Tartine", "Tee und Butterbrot"], answer: 0 },
        { q: "Welches Getränk ist am teuersten?", options: ["Orangensaft", "Café crème", "Tee"], answer: 0 }
      ]
    },
    {
      id: "ct3", station: "bordeaux", level: 1, title: "Un mot de la serveuse",
      text: "Bonjour ! Aujourd'hui, le café est fermé l'après-midi. Nous ouvrons de sept heures à treize heures. Le matin, il y a des croissants chauds. Le week-end, la terrasse est ouverte. À bientôt !",
      questions: [
        { q: "Bis wann ist das Café heute geöffnet?", options: ["Bis 13 Uhr", "Bis 7 Uhr", "Bis 19 Uhr"], answer: 0 },
        { q: "Wann gibt es warme Croissants?", options: ["Morgens", "Nachmittags", "Nur am Wochenende"], answer: 0 },
        { q: "Wann ist die Terrasse geöffnet?", options: ["Am Wochenende", "Jeden Tag", "Nie"], answer: 0 }
      ]
    },
    {
      id: "bt1", station: "brest", level: 1, title: "Léa se présente",
      text: "Bonjour ! Je m'appelle Léa. J'ai trente ans et j'habite à Brest, en Bretagne. Je suis professeure. Je parle français, anglais et un peu allemand. Enchantée de faire votre connaissance !",
      questions: [
        { q: "Wo wohnt Léa?", options: ["In Brest", "In Paris", "In Lyon"], answer: 0 },
        { q: "Was ist Léa von Beruf?", options: ["Lehrerin", "Ärztin", "Köchin"], answer: 0 },
        { q: "Welche Sprache spricht sie nur ein bisschen?", options: ["Deutsch", "Englisch", "Französisch"], answer: 0 }
      ]
    },
    {
      id: "bt2", station: "brest", level: 1, title: "Un message de Paul",
      text: "Salut ! Moi, c'est Paul. J'habite à Rennes, mais je viens de Nantes. Je suis étudiant en informatique. Le week-end, je fais du vélo avec des amis. Et toi, tu viens d'où ?",
      questions: [
        { q: "Wo wohnt Paul jetzt?", options: ["In Rennes", "In Nantes", "In Brest"], answer: 0 },
        { q: "Was studiert Paul?", options: ["Informatik", "Medizin", "Geschichte"], answer: 0 },
        { q: "Was macht er am Wochenende?", options: ["Fahrrad fahren", "Kochen", "Fußball spielen"], answer: 0 }
      ]
    },
    {
      id: "bt3", station: "brest", level: 1, title: "À la réception",
      text: "Bonjour, madame. Je m'appelle Anna Weber, je suis allemande. J'ai une réservation pour deux nuits. Je parle un peu français, mais je comprends bien. Vous pouvez parler lentement, s'il vous plaît ?",
      questions: [
        { q: "Wie lange bleibt Anna?", options: ["Zwei Nächte", "Eine Nacht", "Eine Woche"], answer: 0 },
        { q: "Worum bittet sie?", options: ["Langsam zu sprechen", "Auf Deutsch zu sprechen", "Um einen Stadtplan"], answer: 0 },
        { q: "Was sagt sie über ihr Französisch?", options: ["Sie versteht gut", "Sie spricht fließend", "Sie versteht nichts"], answer: 0 }
      ]
    },
    {
      id: "t01", station: "marseille", level: 1, title: "Un message de Claire",
      text: "Salut Thomas ! Demain, je vais au marché à neuf heures. Tu viens avec moi ? Après, on peut prendre un café. Le marché ferme à midi. À demain !",
      questions: [
        { q: "Wann geht Claire zum Markt?", options: ["Um neun Uhr", "Um zwölf Uhr", "Am Abend"], answer: 0 },
        { q: "Was schlägt Claire nach dem Markt vor?", options: ["Einen Kaffee trinken", "Ins Kino gehen", "Zu Hause essen"], answer: 0 },
        { q: "Wann schließt der Markt?", options: ["Um neun Uhr", "Um zwölf Uhr", "Um zehn Uhr"], answer: 1 }
      ]
    },
    {
      id: "t02", station: "strasbourg", level: 2, title: "Une annonce",
      text: "À louer : appartement de deux pièces au centre-ville, au troisième étage sans ascenseur. Cuisine équipée, balcon, très lumineux. Loyer : 650 euros par mois, charges comprises. Pas d'animaux. Disponible à partir du premier octobre. Visites le samedi matin.",
      questions: [
        { q: "Wo liegt die Wohnung im Haus?", options: ["Im dritten Stock", "Im Erdgeschoss", "Im ersten Stock"], answer: 0 },
        { q: "Was ist im Mietpreis enthalten?", options: ["Die Nebenkosten", "Die Möbel", "Ein Parkplatz"], answer: 0 },
        { q: "Wann kann man die Wohnung besichtigen?", options: ["Samstagvormittag", "Sonntagnachmittag", "Jeden Tag"], answer: 0 }
      ]
    },
    {
      id: "t03", station: "paris", level: 3, title: "Un souvenir",
      text: "Quand j'étais enfant, nous passions tous les étés chez ma grand-mère, dans un petit village près de Bordeaux. Elle se levait avant tout le monde pour aller chercher le pain. Un jour, j'ai voulu y aller à sa place, mais je me suis perdu dans les vignes. Elle m'a retrouvé une heure plus tard, sans un mot de reproche. Depuis, l'odeur du pain chaud me rappelle toujours ce village.",
      questions: [
        { q: "Warum hat sich der Erzähler verlaufen?", options: ["Er wollte allein Brot holen", "Er spielte mit Freunden", "Er suchte seine Großmutter"], answer: 0 },
        { q: "Wie reagierte die Großmutter?", options: ["Ohne Vorwurf", "Sehr wütend", "Sie lachte ihn aus"], answer: 0 },
        { q: "Woran erinnert ihn der Geruch von warmem Brot?", options: ["An das Dorf", "An seine Schule", "An das Meer"], answer: 0 }
      ]
    }
  ],

  // Stationen der Reise, in Reihenfolge. Jede Station ist eine Alltagssituation.
  // "lon"/"lat" für die Karte, "dy" verschiebt die Beschriftung bei Überlappung.
  // Die Sätze zu den Orten sind Allgemeinwissen, Zahlen gerundet; Fakten werden noch nachgeschlagen.
  stations: [
    { id: "brest", name: "Brest", theme: "Begrüßen und sich vorstellen", lon: -4.49, lat: 48.39, title: "Le bout de la Bretagne",
      fr: ["Brest est un grand port tout à l'ouest de la Bretagne.", "La ville a été reconstruite après la Seconde Guerre mondiale."],
      de: ["Brest ist ein großer Hafen ganz im Westen der Bretagne.", "Die Stadt wurde nach dem Zweiten Weltkrieg wieder aufgebaut."] },
    { id: "bordeaux", name: "Bordeaux", theme: "Im Café bestellen", lon: -0.58, lat: 44.84, title: "Les vins de Bordeaux",
      fr: ["Bordeaux est célèbre pour ses vins rouges.", "Le centre-ville est inscrit au patrimoine mondial de l'UNESCO."],
      de: ["Bordeaux ist berühmt für seine Rotweine.", "Die Innenstadt gehört zum UNESCO-Welterbe."] },
    { id: "marseille", name: "Marseille", theme: "Auf dem Markt einkaufen", lon: 5.37, lat: 43.3, title: "Marseille et la pétanque",
      fr: ["Marseille est la plus vieille ville de France.", "On y joue à la pétanque sur les places, à l'ombre."],
      de: ["Marseille ist die älteste Stadt Frankreichs.", "Auf den Plätzen spielt man im Schatten Pétanque."] },
    { id: "avignon", name: "Avignon", theme: "Nach dem Weg fragen", lon: 4.81, lat: 43.95, title: "Le palais des Papes",
      fr: ["Au XIVe siècle, les papes ont vécu à Avignon.", "Le pont Saint-Bénézet est connu grâce à une vieille chanson."],
      de: ["Im 14. Jahrhundert lebten die Päpste in Avignon.", "Die Brücke Saint-Bénézet ist durch ein altes Lied bekannt."] },
    { id: "lyon", name: "Lyon", theme: "Essen und Restaurant", lon: 4.84, lat: 45.76, title: "La cuisine de Lyon",
      fr: ["Lyon est connue pour sa cuisine.", "Les petits restaurants traditionnels s'appellent des bouchons."],
      de: ["Lyon ist bekannt für seine Küche.", "Die kleinen traditionellen Restaurants heißen Bouchons."] },
    { id: "strasbourg", name: "Strasbourg", theme: "Wohnen, Uhrzeit, Verabredungen", lon: 7.75, lat: 48.57, title: "La cathédrale de Strasbourg",
      fr: ["La cathédrale de Strasbourg est en grès rose.", "En décembre, la ville accueille un grand marché de Noël."],
      de: ["Das Straßburger Münster ist aus rosa Sandstein.", "Im Dezember gibt es in der Stadt einen großen Weihnachtsmarkt."] },
    { id: "paris", name: "Paris", theme: "Arbeit, Telefon, Alltag", lon: 2.35, lat: 48.86, title: "La tour Eiffel",
      fr: ["La tour Eiffel a été construite pour l'Exposition universelle de 1889.", "Elle mesure environ 330 mètres."],
      de: ["Der Eiffelturm wurde für die Weltausstellung 1889 gebaut.", "Er ist etwa 330 Meter hoch."] }
  ],

  // Dialoge: am Ende der letzten Etappe einer Station. Pro Zug drei Antworten, "ok" markiert die passende,
  // "note" erklärt kurz, warum die anderen nicht ideal sind.
  dialogs: [
    { id: "cd1", station: "bordeaux", title: "Au café", intro: "Ein Café in Bordeaux, vormittags. Der Kellner kommt an den Tisch.",
      turns: [
        { npc: "Bonjour, vous désirez ?", npcDe: "Guten Tag, was darf es sein?",
          options: [
            { fr: "Bonjour. Je voudrais un café crème, s'il vous plaît.", de: "Guten Tag. Ich hätte gern einen Milchkaffee, bitte.", ok: true },
            { fr: "Je veux un café.", de: "Ich will einen Kaffee.", note: "Grammatisch richtig, aber je veux klingt wie ein Befehl. Bestellt wird mit je voudrais oder je prends." },
            { fr: "Un café crème, c'est combien ?", de: "Ein Milchkaffee, wie viel kostet der?", note: "Nicht falsch, aber der Kellner hat nach der Bestellung gefragt. Preise stehen auf der Karte." }
          ] },
        { npc: "Très bien. Et avec ça ? Un croissant, une tartine ?", npcDe: "Sehr gern. Und dazu? Ein Croissant, ein Butterbrot?",
          options: [
            { fr: "Un croissant, s'il vous plaît.", de: "Ein Croissant, bitte.", ok: true },
            { fr: "Oui.", de: "Ja.", note: "Ja, aber was? Der Kellner weiß nicht, welches von beiden." },
            { fr: "Je veux le croissant.", de: "Ich will das Croissant.", note: "Le croissant klingt, als gäbe es nur eines. Beim Bestellen: un croissant. Und wieder je veux." }
          ] },
        { npc: "Vous êtes en terrasse ou à l'intérieur ?", npcDe: "Sitzen Sie draußen oder drinnen?",
          options: [
            { fr: "En terrasse, s'il vous plaît, il fait beau.", de: "Draußen bitte, das Wetter ist schön.", ok: true },
            { fr: "Dans la terrasse.", de: "In der Terrasse.", note: "Die feste Wendung heißt en terrasse oder à la terrasse. Dans passt hier nicht." },
            { fr: "Je suis à l'extérieur de la France.", de: "Ich bin außerhalb Frankreichs.", note: "Missverständnis: à l'intérieur heißt hier drinnen, nicht im Landesinneren." }
          ] },
        { npc: "Voilà. Ça fait cinq euros cinquante.", npcDe: "Bitte sehr. Das macht fünf Euro fünfzig.",
          options: [
            { fr: "Merci. Voilà, gardez la monnaie.", de: "Danke. Bitte, stimmt so.", ok: true },
            { fr: "C'est trop cher !", de: "Das ist zu teuer!", note: "Nach dem Trinken über den Preis zu streiten kommt nicht gut an." },
            { fr: "Je paie demain.", de: "Ich bezahle morgen.", note: "Das geht im Café nicht. Bezahlt wird jetzt." }
          ] }
      ] },
    { id: "bd1", station: "brest", title: "À l'accueil", intro: "Du kommst in einer Pension in Brest an. Die Vermieterin begrüßt dich.",
      turns: [
        { npc: "Bonjour ! Vous êtes Monsieur Schmidt ?", npcDe: "Guten Tag! Sind Sie Herr Schmidt?",
          options: [
            { fr: "Oui, bonjour. Je m'appelle Thomas Schmidt.", de: "Ja, guten Tag. Ich heiße Thomas Schmidt.", ok: true },
            { fr: "Salut, ouais, c'est moi.", de: "Hi, jo, das bin ich.", note: "Zu locker für eine erste Begegnung. Salut und ouais sind für Freunde." },
            { fr: "Je suis allemand.", de: "Ich bin Deutscher.", note: "Stimmt vielleicht, beantwortet aber nicht die Frage." }
          ] },
        { npc: "Enchantée ! Moi, c'est Claire. Vous venez d'où ?", npcDe: "Sehr erfreut! Ich bin Claire. Woher kommen Sie?",
          options: [
            { fr: "Je viens d'Allemagne, de Munich.", de: "Ich komme aus Deutschland, aus München.", ok: true },
            { fr: "Je suis en Allemagne.", de: "Ich bin in Deutschland.", note: "Être heißt sein, nicht kommen. Gefragt war die Herkunft: venir de." },
            { fr: "J'habite à Allemagne.", de: "Ich wohne in Deutschland.", note: "Vor Ländern steht en, nicht à: en Allemagne. À nur vor Städten." }
          ] },
        { npc: "Vous parlez très bien français !", npcDe: "Sie sprechen sehr gut Französisch!",
          options: [
            { fr: "Merci, mais je parle seulement un peu.", de: "Danke, aber ich spreche nur ein bisschen.", ok: true },
            { fr: "Oui, je parle très bien.", de: "Ja, ich spreche sehr gut.", note: "Grammatisch richtig, aber ein Kompliment nimmt man in Frankreich eher bescheiden an." },
            { fr: "Non, je ne parle pas allemand.", de: "Nein, ich spreche kein Deutsch.", note: "Falsches Wort: allemand statt français. Das ergibt keinen Sinn." }
          ] },
        { npc: "Bon, je vous laisse. Bonne journée !", npcDe: "Gut, ich lasse Sie in Ruhe. Schönen Tag!",
          options: [
            { fr: "Merci, bonne journée, au revoir !", de: "Danke, schönen Tag, auf Wiedersehen!", ok: true },
            { fr: "Salut, à plus !", de: "Tschau, bis später!", note: "Zu informell für die Vermieterin. À plus sagt man unter Freunden." },
            { fr: "Bonne nuit !", de: "Gute Nacht!", note: "Bonne nuit nur beim Schlafengehen. Tagsüber: bonne journée, abends: bonne soirée." }
          ] }
      ] }
  ],

  tenses: [
    { id: "cz1", station: "bordeaux", level: 1, topic: "Präsens: prendre", sentence: "Je ___ un café.", options: ["prends", "prend", "prenez"], answer: 0, explain: "Prendre: je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent." },
    { id: "cz2", station: "bordeaux", level: 1, topic: "Präsens: prendre", sentence: "Vous ___ un thé ?", options: ["prenez", "prends", "prennent"], answer: 0, explain: "Vous-Form: vous prenez. Die Kellnerfrage schlechthin." },
    { id: "cz3", station: "bordeaux", level: 1, topic: "Präsens: boire", sentence: "Nous ___ de l'eau.", options: ["buvons", "boivent", "bois"], answer: 0, explain: "Boire ist unregelmäßig: je bois, nous buvons, ils boivent." },
    { id: "cz4", station: "bordeaux", level: 1, topic: "Präsens: -er", sentence: "Ils ___ des croissants.", options: ["mangent", "mange", "mangez"], answer: 0, explain: "Ils-Form auf -ent, das man nicht hört: ils mangent." },
    { id: "cz5", station: "bordeaux", level: 1, topic: "Höflichkeitsform", sentence: "Elle ___ un jus d'orange, s'il vous plaît.", options: ["voudrait", "voudrais", "veut"], answer: 0, explain: "Konditional als höfliche Form: je voudrais, elle voudrait. Elle veut wäre grammatisch richtig, aber fordernd." },
    { id: "bz1", station: "brest", level: 1, topic: "Präsens: être", sentence: "Je ___ allemand.", options: ["suis", "es", "est"], answer: 0, explain: "Être: je suis, tu es, il est, nous sommes, vous êtes, ils sont." },
    { id: "bz2", station: "brest", level: 1, topic: "Präsens: avoir", sentence: "Tu ___ quel âge ?", options: ["as", "a", "ai"], answer: 0, explain: "Avoir: j'ai, tu as, il a. Das Alter hat man: j'ai trente ans.", trap: "Stolperstein: nicht je suis trente ans. Alter wird mit avoir gebildet." },
    { id: "bz3", station: "brest", level: 1, topic: "Präsens: -er", sentence: "Nous ___ à Brest.", options: ["habitons", "habitez", "habitent"], answer: 0, explain: "Regelmäßig auf -er: nous habitons, vous habitez, ils habitent." },
    { id: "bz4", station: "brest", level: 1, topic: "Präsens: -er", sentence: "Vous ___ français ?", options: ["parlez", "parlons", "parlent"], answer: 0, explain: "Vous-Form auf -ez: vous parlez, vous habitez." },
    { id: "bz5", station: "brest", level: 1, topic: "Präsens: reflexiv", sentence: "Elle ___ Léa.", options: ["s'appelle", "m'appelle", "t'appelles"], answer: 0, explain: "Das Reflexivpronomen richtet sich nach der Person: je m'appelle, tu t'appelles, elle s'appelle." },
    { id: "z01", level: 1, station: "marseille", topic: "Präsens", sentence: "Le matin, je ___ de la maison à huit heures.", options: ["sors", "sortez", "sortent"], answer: 0, explain: "Sortir im Präsens: je sors, tu sors, il sort, nous sortons, vous sortez, ils sortent." },
    { id: "z02", level: 1, station: "marseille", topic: "Futur proche", sentence: "Ce soir, nous ___ manger au restaurant.", options: ["allons", "allez", "vont"], answer: 0, explain: "Futur proche: aller (gebeugt) + Infinitiv. Nous allons manger." },
    { id: "z03", level: 1, station: "marseille", topic: "Futur proche", sentence: "Demain, tu ___ voir un film ?", options: ["vas", "va", "vais"], answer: 0, explain: "Tu vas, il va, je vais. Die Form richtet sich nach dem Subjekt." },
    { id: "z04", level: 1, station: "marseille", topic: "Präsens", sentence: "Vous ___ un café ?", options: ["voulez", "veux", "veulent"], answer: 0, explain: "Vouloir: je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent." },

    { id: "z05", level: 2, station: "avignon", topic: "Passé composé", sentence: "Ce matin, je ___ de la maison à huit heures.", options: ["suis sorti", "ai sorti", "sors"], answer: 0, explain: "Sortir bildet das Passé composé mit être, wie alle Bewegungsverben der Gruppe aller, venir, partir, arriver.", trap: "Stolperstein: Die Bewegungsverben mit être sind eine feste Gruppe (aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner, passer). Alle anderen mit avoir." },
    { id: "z06", level: 2, station: "avignon", topic: "Passé composé", sentence: "Hier, nous ___ un bon film.", options: ["avons vu", "sommes vus", "voyons"], answer: 0, explain: "Voir bildet das Passé composé mit avoir: nous avons vu." },
    { id: "z07", level: 2, station: "avignon", topic: "Passé composé", sentence: "Elle ___ à Lyon en 2020.", options: ["est arrivée", "a arrivé", "arrive"], answer: 0, explain: "Arriver mit être, und das Partizip richtet sich nach elle: arrivée." },
    { id: "z08", level: 2, station: "avignon", topic: "Passé composé", sentence: "Tu ___ tes clés ?", options: ["as trouvé", "es trouvé", "trouves"], answer: 0, explain: "Trouver mit avoir: tu as trouvé. Die Frage bezieht sich auf ein abgeschlossenes Ereignis." },

    { id: "z09", level: 3, station: "paris", topic: "Imparfait", sentence: "Quand j'___ enfant, je jouais au foot tous les jours.", options: ["étais", "ai été", "serais"], answer: 0, explain: "Zustände und Gewohnheiten in der Vergangenheit: Imparfait.", trap: "Stolperstein: Deutsch nutzt oft das Perfekt (ich war), Französisch für Zustände und Gewohnheiten das Imparfait." },
    { id: "z10", level: 3, station: "paris", topic: "Konditional", sentence: "Je ___ un thé, s'il vous plaît.", options: ["voudrais", "veux", "voulais"], answer: 0, explain: "Je voudrais ist die höfliche Form (Konditional). Je veux klingt fordernd.", trap: "Stolperstein: Je veux ist grammatisch richtig, klingt aber wie ein Befehl. Im Café immer je voudrais oder je prends." },
    { id: "z11", level: 3, station: "paris", topic: "Imparfait und Passé composé", sentence: "Il ___ tranquillement quand le téléphone a sonné.", options: ["lisait", "a lu", "lira"], answer: 0, explain: "Hintergrundhandlung im Imparfait (il lisait), das Ereignis, das dazwischenkommt, im Passé composé (a sonné)." },
    { id: "z12", level: 3, station: "paris", topic: "Imparfait und Passé composé", sentence: "Soudain, la porte ___.", options: ["s'est ouverte", "s'ouvrait", "s'ouvre"], answer: 0, explain: "Soudain kündigt ein plötzliches Ereignis an: Passé composé.", trap: "Stolperstein: Signalwörter für das Passé composé: soudain, tout à coup, à ce moment-là. Für das Imparfait: souvent, tous les jours, pendant que." }
  ]
};
