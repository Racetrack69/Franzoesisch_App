// Inhalte der Französisch-App.
// Jeder Eintrag hat ein "level" (1, 2 oder 3). Die App filtert danach.
// "tip" ist die Regel oder Merkhilfe, "trap" der typische Fehler von Deutschsprachigen (nur bei falscher Antwort gezeigt).
// Vokabeln: "de" und "fr" mit Artikel. "alt" sind weitere akzeptierte französische, "altDe" weitere deutsche Antworten.
// "ctxFr"/"ctxDe": optionaler Beispielsatz, wird bei mehrdeutigen Wörtern in der Sprache der Aufgabe angezeigt.
// Fehler finden: "words" sind die antippbaren Teile, "wrong" ist der Index des falschen Teils.
// Zeiten: "___" im Satz ist die Lücke, "answer" der Index der richtigen Option.

window.CONTENT = {
  meta: { lang: "fr-FR", title: "Flâner" },

  vocab: [
    // Stufe 1: Einkaufen und Alltag
    { id: "v01", pos: "nomen", level: 1, theme: "Einkaufen", de: "die Bäckerei", fr: "la boulangerie", tip: "Vom Wort boule (Kugel), wie ein rundes Brot." },
    { id: "v02", pos: "nomen", level: 1, theme: "Einkaufen", de: "der Markt", fr: "le marché", tip: "Klingt wie das deutsche Wort, aber mit Akzent am Ende." },
    { id: "v03", pos: "nomen", level: 1, theme: "Einkaufen", de: "das Brot", fr: "le pain", tip: "Nicht mit pin (Kiefer) verwechseln: der Nasal am Ende." },
    { id: "v04", pos: "nomen", level: 1, theme: "Einkaufen", de: "der Käse", fr: "le fromage", tip: "Alle Wörter auf -age sind maskulin, außer la page, la plage, la cage." },
    { id: "v05", pos: "nomen", level: 1, theme: "Einkaufen", de: "die Rechnung", fr: "l'addition", altDe: ["die Addition"], ctxFr: "L'addition, s'il vous plaît.", ctxDe: "Die Rechnung, bitte.", tip: "Im Restaurant: L'addition, s'il vous plaît." },
    { id: "v06", pos: "nomen", level: 1, theme: "Einkaufen", de: "der Apfel", fr: "la pomme", tip: "Pomme de terre ist die Kartoffel, der Erdapfel." },
    { id: "v07", pos: "nomen", level: 1, theme: "Einkaufen", de: "das Wasser", fr: "l'eau", tip: "Drei Buchstaben, nur ein Laut: o." },
    { id: "v08", pos: "adjektiv", level: 1, theme: "Einkaufen", de: "teuer", fr: "cher", alt: ["chère"], altDe: ["lieb"], ctxFr: "C'est trop cher.", ctxDe: "Das ist zu teuer.", tip: "Cher heißt auch lieb, wie in cher ami.", trap: "Stolperstein: cher nach dem Nomen heißt teuer (un hôtel cher), vor dem Nomen lieb (mon cher ami)." },
    { id: "v09", pos: "adjektiv", level: 1, theme: "Einkaufen", de: "billig", fr: "bon marché", alt: ["pas cher"], tip: "Wörtlich: guter Markt. Wird nicht verändert." },
    { id: "v10", pos: "nomen", level: 1, theme: "Einkaufen", de: "das Geld", fr: "l'argent", altDe: ["das Silber"], ctxFr: "Je n'ai pas d'argent sur moi.", ctxDe: "Ich habe kein Geld dabei.", tip: "Argent heißt auch Silber.", trap: "Stolperstein: l'argent ist maskulin, obwohl der Artikel es verschluckt: l'argent est cher." },
    { id: "v11", pos: "nomen", level: 1, theme: "Einkaufen", de: "die Tasche", fr: "le sac", altDe: ["der Beutel", "die Tüte"], ctxFr: "Vous voulez un sac ?", ctxDe: "Möchten Sie eine Tasche?", tip: "Le sac à main ist die Handtasche." },
    { id: "v12", pos: "nomen", level: 1, theme: "Einkaufen", de: "der Preis", fr: "le prix", tip: "Das x am Ende ist stumm." },
    { id: "v13", pos: "verb", level: 1, theme: "Einkaufen", de: "kaufen", fr: "acheter", tip: "j'achète, mit accent grave in der Einzahl.", trap: "Stolperstein: acheter quelque chose à quelqu'un kann kaufen von und kaufen für heißen, der Zusammenhang entscheidet." },
    { id: "v14", pos: "verb", level: 1, theme: "Einkaufen", de: "bezahlen", fr: "payer", tip: "je paie, nous payons." },
    { id: "v15", pos: "nomen", level: 1, theme: "Einkaufen", de: "die Kasse", fr: "la caisse", tip: "Auch: die Kiste." },
    { id: "v16", pos: "adjektiv", level: 1, theme: "Einkaufen", de: "geschlossen", fr: "fermé", alt: ["fermée"], tip: "Fermer heißt schließen. Steht so an jeder Ladentür." },

    // Stufe 2: Arbeit und Gefühle
    { id: "v17", pos: "nomen", level: 2, theme: "Arbeit", de: "die Besprechung", fr: "la réunion", tip: "Wörtlich: das Wiedervereinen." },
    { id: "v18", pos: "nomen", level: 2, theme: "Arbeit", de: "der Termin", fr: "le rendez-vous", tip: "Gilt für Arzt, Friseur und Verabredung gleichermaßen.", trap: "Stolperstein: rendez-vous ist neutral, auch beim Zahnarzt. Kein romantischer Unterton wie im Deutschen." },
    { id: "v19", pos: "nomen", level: 2, theme: "Arbeit", de: "die Frist", fr: "le délai", ctxFr: "Le délai est de deux semaines.", ctxDe: "Die Frist beträgt zwei Wochen.", tip: "Vorsicht: heißt nicht Verzögerung, sondern der Zeitraum, der einem bleibt.", trap: "Stolperstein: délai heißt nicht Verzögerung. Die Verspätung ist le retard." },
    { id: "v20", pos: "verb", level: 2, theme: "Arbeit", de: "verschieben", fr: "reporter", altDe: ["vertagen"], ctxFr: "On doit reporter la réunion.", ctxDe: "Wir müssen die Besprechung verschieben.", tip: "Un reporter ist der Reporter, reporter (Verb) heißt verschieben.", trap: "Stolperstein: nicht mit remettre verwechseln, das heißt eher aufschieben oder übergeben." },
    { id: "v21", pos: "nomen", level: 2, theme: "Arbeit", de: "der Kollege", fr: "le collègue", tip: "Gleiches Wort für die Kollegin: la collègue." },
    { id: "v22", pos: "nomen", level: 2, theme: "Arbeit", de: "die Erfahrung", fr: "l'expérience", altDe: ["das Experiment"], ctxFr: "Elle a beaucoup d'expérience.", ctxDe: "Sie hat viel Erfahrung.", tip: "Auch: das Experiment." },
    { id: "v23", pos: "adjektiv", level: 2, theme: "Gefühle", de: "müde", fr: "fatigué", alt: ["fatiguée"], tip: "Je suis fatigué. Das Akzent-e am Ende wird gesprochen." },
    { id: "v24", pos: "adjektiv", level: 2, theme: "Gefühle", de: "besorgt", fr: "inquiet", alt: ["inquiète"], tip: "Das Gegenteil von tranquille." },
    { id: "v25", pos: "adjektiv", level: 2, theme: "Gefühle", de: "stolz", fr: "fier", alt: ["fière"], tip: "Je suis fier de toi: Ich bin stolz auf dich." },
    { id: "v26", pos: "adjektiv", level: 2, theme: "Gefühle", de: "zufrieden", fr: "content", alt: ["contente", "satisfait", "satisfaite"], altDe: ["froh", "glücklich"], ctxFr: "Je suis content du résultat.", ctxDe: "Ich bin zufrieden mit dem Ergebnis.", tip: "Content heißt hier zufrieden, nicht Inhalt.", trap: "Stolperstein: content heißt zufrieden. Der Inhalt ist le contenu." },

    // Stufe 3: Wendungen
    { id: "v27", pos: "wendung", level: 3, theme: "Wendungen", de: "Es ist mir egal", fr: "Ça m'est égal", tip: "Wörtlich: Das ist mir gleich." },
    { id: "v28", pos: "wendung", level: 3, theme: "Wendungen", de: "sich Sorgen machen", fr: "s'inquiéter", tip: "Ne t'inquiète pas: Mach dir keine Sorgen." },
    { id: "v29", pos: "wendung", level: 3, theme: "Wendungen", de: "Ich habe es satt", fr: "J'en ai marre", tip: "Umgangssprachlich, sehr häufig." },
    { id: "v30", pos: "wendung", level: 3, theme: "Wendungen", de: "sich an etwas gewöhnen", fr: "s'habituer à quelque chose", tip: "Merke die Präposition à." },
    { id: "v31", pos: "wendung", level: 3, theme: "Wendungen", de: "zurechtkommen", fr: "se débrouiller", tip: "Je me débrouille: Ich komme klar." },
    { id: "v32", pos: "wendung", level: 3, theme: "Wendungen", de: "Es lohnt sich", fr: "Ça vaut le coup", alt: ["Ça vaut la peine"], tip: "Vom Verb valoir (wert sein)." },
    { id: "v33", pos: "wendung", level: 3, theme: "Wendungen", de: "jemandem fehlen", fr: "manquer à quelqu'un", tip: "Tu me manques heißt: Du fehlst mir. Die Richtung ist umgedreht.", trap: "Stolperstein: Tu me manques heißt Du fehlst mir, nicht Ich fehle dir. Subjekt ist die Person, die fehlt." },
    { id: "v34", pos: "wendung", level: 3, theme: "Wendungen", de: "auf etwas verzichten", fr: "renoncer à quelque chose", tip: "Präposition à, wie bei s'habituer." },
    // Ergänzung: weitere Verben und Adjektive (für Hilfe und Zuordnen nach Wortart)
    { id: "v35", pos: "verb", level: 1, theme: "Einkaufen", de: "suchen", fr: "chercher", tip: "Je cherche la gare: Ich suche den Bahnhof. Ohne Präposition.", trap: "Stolperstein: kein pour und kein après. Chercher la gare, chercher ses clés." },
    { id: "v36", pos: "verb", level: 1, theme: "Einkaufen", de: "finden", fr: "trouver", tip: "Je trouve, wie in trouvaille (Fundstück)." },
    { id: "v37", pos: "verb", level: 1, theme: "Einkaufen", de: "warten", fr: "attendre", tip: "Attendre ohne Präposition: attendre le bus.", trap: "Stolperstein: kein pour und kein sur. Attendre quelqu'un, attendre le bus." },
    { id: "v38", pos: "verb", level: 1, theme: "Einkaufen", de: "öffnen", fr: "ouvrir", tip: "Unregelmäßig: j'ouvre, nous ouvrons, Partizip ouvert." },
    { id: "v39", pos: "verb", level: 1, theme: "Einkaufen", de: "schließen", fr: "fermer", tip: "Regelmäßig auf -er: je ferme." },
    { id: "v40", pos: "adjektiv", level: 1, theme: "Einkaufen", de: "frisch", fr: "frais", alt: ["fraîche"], tip: "Feminin: fraîche, mit Zirkumflex." },
    { id: "v41", pos: "adjektiv", level: 1, theme: "Einkaufen", de: "voll", fr: "plein", alt: ["pleine"], tip: "Faire le plein: volltanken." },
    { id: "v42", pos: "verb", level: 2, theme: "Arbeit", de: "vorschlagen", fr: "proposer", tip: "Proposer quelque chose à quelqu'un." },
    { id: "v43", pos: "verb", level: 2, theme: "Arbeit", de: "erklären", fr: "expliquer", tip: "Je t'explique: Ich erkläre es dir." },
    { id: "v44", pos: "verb", level: 2, theme: "Arbeit", de: "sich beeilen", fr: "se dépêcher", tip: "Dépêche-toi ! Beeil dich!" },
    { id: "v45", pos: "adjektiv", level: 2, theme: "Gefühle", de: "gelassen", fr: "tranquille", tip: "Gleiche Form für maskulin und feminin." },
    { id: "v46", pos: "adjektiv", level: 2, theme: "Gefühle", de: "enttäuscht", fr: "déçu", alt: ["déçue"], tip: "Vom Verb décevoir (enttäuschen)." },
    { id: "v47", pos: "verb", level: 3, theme: "Wendungen", de: "sich erinnern an", fr: "se souvenir de", tip: "Je me souviens de toi. Präposition de." },
    { id: "v48", pos: "verb", level: 3, theme: "Wendungen", de: "aufgeben", fr: "abandonner", alt: ["renoncer"], tip: "Auch: verlassen, im Stich lassen." },
    { id: "v49", pos: "adjektiv", level: 3, theme: "Wendungen", de: "überflüssig", fr: "inutile", tip: "Gegenteil von utile (nützlich)." },
    { id: "v50", pos: "adjektiv", level: 3, theme: "Wendungen", de: "ungefähr", fr: "environ", tip: "Adverb, steht vor der Zahl: environ dix minutes." }
  ],


  // Artikel: Stufe 1 und 2 bestimmter Artikel (le, la, l', les), Stufe 3 Teilungsartikel (du, de la, de l', des, und de nach Verneinung).
  // "prompt" mit ___ ist die Lücke, "answer" der Index der richtigen Option, "de" die Übersetzung für die Auflösung.
  articles: [
    { id: "a01", level: 1, prompt: "___ pain", options: ["le", "la", "l'", "les"], answer: 0, explain: "Le pain ist maskulin.", de: "das Brot" },
    { id: "a02", level: 1, prompt: "___ boulangerie", options: ["le", "la", "l'", "les"], answer: 1, explain: "Wörter auf -erie sind feminin: la boulangerie, la boucherie.", de: "die Bäckerei" },
    { id: "a03", level: 1, prompt: "___ eau", options: ["le", "la", "l'", "les"], answer: 2, explain: "Vor Vokal wird le oder la zu l'. Eau ist feminin: une eau fraîche.", trap: "Stolperstein: Vor Vokal sieht man das Geschlecht nicht. Merke es dir am Adjektiv: une eau froide.", de: "das Wasser" },
    { id: "a04", level: 1, prompt: "___ enfants", options: ["le", "la", "l'", "les"], answer: 3, explain: "Plural, also les. Das s hört man vor Vokal: les‿enfants.", de: "die Kinder" },
    { id: "a05", level: 1, prompt: "___ fromage", options: ["le", "la", "l'", "les"], answer: 0, explain: "Wörter auf -age sind maskulin, Ausnahmen: la page, la plage, la cage, l'image.", trap: "Stolperstein: Das Geschlecht folgt der Endung, nicht dem deutschen Wort. Le fromage, le garage, le village, aber la plage (der Strand).", de: "der Käse" },
    { id: "a06", level: 1, prompt: "___ pomme", options: ["le", "la", "l'", "les"], answer: 1, explain: "Die meisten Wörter auf -e sind feminin, la pomme.", de: "der Apfel" },
    { id: "a07", level: 1, prompt: "___ argent", options: ["le", "la", "l'", "les"], answer: 2, explain: "Vokal am Anfang: l'argent. Maskulin: de l'argent, il est cher.", de: "das Geld" },
    { id: "a08", level: 1, prompt: "___ marché", options: ["le", "la", "l'", "les"], answer: 0, explain: "Le marché ist maskulin, wie le café, le thé.", de: "der Markt" },

    { id: "a09", level: 2, prompt: "___ réunion", options: ["le", "la", "l'", "les"], answer: 1, explain: "Wörter auf -tion und -sion sind feminin: la réunion, la décision.", de: "die Besprechung" },
    { id: "a10", level: 2, prompt: "___ problème", options: ["le", "la", "l'", "les"], answer: 0, explain: "Trotz -e maskulin: le problème, le système, le thème (griechischer Ursprung).", trap: "Stolperstein: Viele Wörter griechischen Ursprungs auf -ème und -amme sind maskulin: le problème, le programme.", de: "das Problem" },
    { id: "a11", level: 2, prompt: "___ musée", options: ["le", "la", "l'", "les"], answer: 0, explain: "Le musée und le lycée sind maskulin, obwohl sie auf -ée enden.", de: "das Museum" },
    { id: "a12", level: 2, prompt: "___ hôtel", options: ["le", "la", "l'", "les"], answer: 2, explain: "Stummes h zählt wie ein Vokal: l'hôtel, l'homme. Aber: le haricot (h aspiré).", trap: "Stolperstein: Nicht jedes h ist stumm. Le haricot, le héros, la haine (h aspiré) behalten den vollen Artikel.", de: "das Hotel" },
    { id: "a13", level: 2, prompt: "___ vacances", options: ["le", "la", "l'", "les"], answer: 3, explain: "Vacances steht immer im Plural: les vacances.", de: "die Ferien" },
    { id: "a14", level: 2, prompt: "___ main", options: ["le", "la", "l'", "les"], answer: 1, explain: "La main ist feminin, obwohl es nicht auf -e endet.", de: "die Hand" },
    { id: "a15", level: 2, prompt: "___ voiture", options: ["le", "la", "l'", "les"], answer: 1, explain: "Wörter auf -ure sind feminin: la voiture, la nature.", de: "das Auto" },
    { id: "a16", level: 2, prompt: "___ journal", options: ["le", "la", "l'", "les"], answer: 0, explain: "Wörter auf -al sind maskulin: le journal, le cheval. Plural: les journaux.", de: "die Zeitung" },

    { id: "a17", level: 3, prompt: "Je voudrais ___ pain.", options: ["du", "de la", "de l'", "des"], answer: 0, explain: "Unbestimmte Menge, maskulin: du pain (de + le).", de: "Ich hätte gern Brot." },
    { id: "a18", level: 3, prompt: "Elle mange ___ confiture.", options: ["du", "de la", "de l'", "des"], answer: 1, explain: "Unbestimmte Menge, feminin: de la confiture.", de: "Sie isst Marmelade." },
    { id: "a19", level: 3, prompt: "Tu veux ___ eau ?", options: ["du", "de la", "de l'", "des"], answer: 2, explain: "Vor Vokal: de l'eau, de l'argent.", de: "Möchtest du Wasser?" },
    { id: "a20", level: 3, prompt: "On achète ___ œufs.", options: ["du", "de la", "de l'", "des"], answer: 3, explain: "Plural: des œufs (de + les).", de: "Wir kaufen Eier." },
    { id: "a21", level: 3, prompt: "Il boit ___ café.", options: ["du", "de la", "de l'", "des"], answer: 0, explain: "Du café: eine unbestimmte Menge Kaffee. Un café wäre eine Tasse.", de: "Er trinkt Kaffee." },
    { id: "a22", level: 3, prompt: "Il n'y a pas ___ lait.", options: ["du", "de la", "de", "des"], answer: 2, explain: "Nach Verneinung wird der Teilungsartikel zu de: pas de lait, pas d'eau.", trap: "Stolperstein: Nach pas, plus, jamais wird du, de la, des zu de. Nur nach être bleibt der Artikel: ce n'est pas du lait.", de: "Es gibt keine Milch." },
    { id: "a23", level: 3, prompt: "Je ne prends pas ___ sucre.", options: ["du", "de", "de la", "des"], answer: 1, explain: "Verneinung: pas de sucre. Du sucre nur im bejahten Satz.", de: "Ich nehme keinen Zucker." },
    { id: "a24", level: 3, prompt: "Vous avez ___ enfants ?", options: ["du", "de la", "de l'", "des"], answer: 3, explain: "Plural, unbestimmt: des enfants.", de: "Haben Sie Kinder?" }
  ],

  errors: [
    { id: "e01", level: 1, words: ["Je", "suis", "allé", "à le", "marché."], wrong: 3, correct: "au", explain: "à + le wird immer zu au. Ebenso à + les zu aux." },
    { id: "e02", level: 1, words: ["Elle", "a", "un", "belle", "robe."], wrong: 2, correct: "une", explain: "Robe ist feminin, also une belle robe." },
    { id: "e03", level: 1, words: ["Il", "habite", "en", "Paris."], wrong: 2, correct: "à", explain: "Vor Städten steht à. En steht vor femininen Ländern (en France)." },
    { id: "e04", level: 1, words: ["Tu as faim ?", "Oui,", "je", "suis", "faim."], wrong: 3, correct: "ai", explain: "Hunger hat man im Französischen: avoir faim, avoir soif, avoir froid." },
    { id: "e05", level: 1, words: ["Ils", "sont", "trois", "enfants."], wrong: 1, correct: "ont", explain: "Kinder hat man: avoir. Sont hieße, sie sind drei Kinder." },

    { id: "e06", level: 2, words: ["Je", "pense", "à", "mon", "vacances."], wrong: 3, correct: "mes", explain: "Vacances steht immer im Plural: les vacances, mes vacances." },
    { id: "e07", level: 2, words: ["Elle", "est", "plus grande", "comme", "moi."], wrong: 3, correct: "que", explain: "Beim Vergleich steht que, nicht comme: plus grande que moi." },
    { id: "e08", level: 2, words: ["J'ai", "téléphoné", "mon frère", "hier."], wrong: 1, correct: "téléphoné à", explain: "Téléphoner à quelqu'un: das Verb braucht die Präposition à." },
    { id: "e09", level: 2, words: ["Il", "attend pour", "le", "bus."], wrong: 1, correct: "attend", explain: "Attendre steht ohne Präposition: attendre le bus, attendre quelqu'un." },
    { id: "e10", level: 2, words: ["Elle", "a", "mal", "au", "tête."], wrong: 3, correct: "à la", explain: "Tête ist feminin: avoir mal à la tête. Au nur bei maskulinen Wörtern (mal au dos)." },

    { id: "e11", level: 3, words: ["Quand j'étais petit,", "je", "suis allé", "souvent", "à la mer."], wrong: 2, correct: "allais", explain: "Gewohnheiten in der Vergangenheit stehen im Imparfait, nicht im Passé composé." },
    { id: "e12", level: 3, words: ["Hier,", "il faisait beau", "et", "nous", "sommes", "sorti."], wrong: 5, correct: "sortis", explain: "Bei être richtet sich das Partizip nach dem Subjekt: nous sommes sortis." },
    { id: "e13", level: 3, words: ["Si", "j'aurais", "le temps,", "je", "viendrais."], wrong: 1, correct: "j'avais", explain: "Nach si steht nie das Konditional: si + Imparfait, dann Konditional im Hauptsatz." },
    { id: "e14", level: 3, words: ["Le livre", "que", "je t'ai parlé", "est", "génial."], wrong: 1, correct: "dont", explain: "Parler de quelque chose: bei de wird das Relativpronomen zu dont." },
    { id: "e15", level: 3, words: ["Elle", "m'a dit", "qu'elle", "viendra", "demain."], wrong: 3, correct: "viendrait", explain: "Zeitenfolge in der indirekten Rede: nach einem Verb der Vergangenheit steht das Konditional." }
  ],

  speak: [
    { id: "s01", level: 1, fr: "Bonjour, je voudrais un café, s'il vous plaît.", de: "Guten Tag, ich hätte gern einen Kaffee, bitte." },
    { id: "s02", level: 1, fr: "Où sont les toilettes ?", de: "Wo sind die Toiletten?" },
    { id: "s03", level: 1, fr: "Ça coûte combien ?", de: "Wie viel kostet das?" },
    { id: "s04", level: 1, fr: "Je ne comprends pas, vous pouvez répéter ?", de: "Ich verstehe nicht, können Sie das wiederholen?" },

    { id: "s05", level: 2, fr: "Je cherche la gare, c'est loin d'ici ?", de: "Ich suche den Bahnhof, ist das weit von hier?" },
    { id: "s06", level: 2, fr: "Est-ce que vous avez une table pour deux personnes ?", de: "Haben Sie einen Tisch für zwei Personen?" },
    { id: "s07", level: 2, fr: "Je voudrais réserver une chambre pour deux nuits.", de: "Ich möchte ein Zimmer für zwei Nächte reservieren." },
    { id: "s08", level: 2, fr: "Excusez-moi, je suis en retard, il y avait des bouchons.", de: "Entschuldigung, ich bin zu spät, es gab Stau." },

    { id: "s09", level: 3, fr: "Si tu veux, on pourrait se voir ce week-end.", de: "Wenn du willst, könnten wir uns dieses Wochenende treffen." },
    { id: "s10", level: 3, fr: "Je n'ai pas eu le temps de finir, je m'en occupe demain.", de: "Ich hatte keine Zeit, fertig zu werden, ich kümmere mich morgen darum." },
    { id: "s11", level: 3, fr: "Ce n'est pas la peine de vous déranger, je vais me débrouiller.", de: "Machen Sie sich keine Umstände, ich komme zurecht." },
    { id: "s12", level: 3, fr: "Vous pourriez me dire à quelle heure ferme le musée ?", de: "Könnten Sie mir sagen, um wie viel Uhr das Museum schließt?" }
  ],

  texts: [
    {
      id: "t01", level: 1, title: "Un message de Claire",
      text: "Salut Thomas ! Demain, je vais au marché à neuf heures. Tu viens avec moi ? Après, on peut prendre un café. Le marché ferme à midi. À demain !",
      questions: [
        { q: "Wann geht Claire zum Markt?", options: ["Um neun Uhr", "Um zwölf Uhr", "Am Abend"], answer: 0 },
        { q: "Was schlägt Claire nach dem Markt vor?", options: ["Einen Kaffee trinken", "Ins Kino gehen", "Zu Hause essen"], answer: 0 },
        { q: "Wann schließt der Markt?", options: ["Um neun Uhr", "Um zwölf Uhr", "Um zehn Uhr"], answer: 1 }
      ]
    },
    {
      id: "t02", level: 2, title: "Une annonce",
      text: "À louer : appartement de deux pièces au centre-ville, au troisième étage sans ascenseur. Cuisine équipée, balcon, très lumineux. Loyer : 650 euros par mois, charges comprises. Pas d'animaux. Disponible à partir du premier octobre. Visites le samedi matin.",
      questions: [
        { q: "Wo liegt die Wohnung im Haus?", options: ["Im dritten Stock", "Im Erdgeschoss", "Im ersten Stock"], answer: 0 },
        { q: "Was ist im Mietpreis enthalten?", options: ["Die Nebenkosten", "Die Möbel", "Ein Parkplatz"], answer: 0 },
        { q: "Wann kann man die Wohnung besichtigen?", options: ["Samstagvormittag", "Sonntagnachmittag", "Jeden Tag"], answer: 0 }
      ]
    },
    {
      id: "t03", level: 3, title: "Un souvenir",
      text: "Quand j'étais enfant, nous passions tous les étés chez ma grand-mère, dans un petit village près de Bordeaux. Elle se levait avant tout le monde pour aller chercher le pain. Un jour, j'ai voulu y aller à sa place, mais je me suis perdu dans les vignes. Elle m'a retrouvé une heure plus tard, sans un mot de reproche. Depuis, l'odeur du pain chaud me rappelle toujours ce village.",
      questions: [
        { q: "Warum hat sich der Erzähler verlaufen?", options: ["Er wollte allein Brot holen", "Er spielte mit Freunden", "Er suchte seine Großmutter"], answer: 0 },
        { q: "Wie reagierte die Großmutter?", options: ["Ohne Vorwurf", "Sehr wütend", "Sie lachte ihn aus"], answer: 0 },
        { q: "Woran erinnert ihn der Geruch von warmem Brot?", options: ["An das Dorf", "An seine Schule", "An das Meer"], answer: 0 }
      ]
    }
  ],

  // Orte auf der Frankreichkarte. "at" ist die Punktzahl, ab der der Ort erscheint.
  // "lon"/"lat" sind die Koordinaten für die Karte, "dy" verschiebt die Beschriftung bei Überlappung.
  // Die Sätze sind Allgemeinwissen, Zahlen sind gerundet.
  places: [
    { id: "paris", at: 10, name: "Paris", lon: 2.35, lat: 48.86, title: "La tour Eiffel",
      fr: ["La tour Eiffel a été construite pour l'Exposition universelle de 1889.", "Elle mesure environ 330 mètres."],
      de: ["Der Eiffelturm wurde für die Weltausstellung 1889 gebaut.", "Er ist etwa 330 Meter hoch."] },
    { id: "brest", at: 30, name: "Brest", lon: -4.49, lat: 48.39, title: "Le bout de la Bretagne",
      fr: ["Brest est un grand port tout à l'ouest de la Bretagne.", "La ville a été reconstruite après la Seconde Guerre mondiale."],
      de: ["Brest ist ein großer Hafen ganz im Westen der Bretagne.", "Die Stadt wurde nach dem Zweiten Weltkrieg wieder aufgebaut."] },
    { id: "bordeaux", at: 60, name: "Bordeaux", lon: -0.58, lat: 44.84, title: "Les vins de Bordeaux",
      fr: ["Bordeaux est célèbre pour ses vins rouges.", "Le centre-ville est inscrit au patrimoine mondial de l'UNESCO."],
      de: ["Bordeaux ist berühmt für seine Rotweine.", "Die Innenstadt gehört zum UNESCO-Welterbe."] },
    { id: "avignon", at: 110, name: "Avignon", lon: 4.81, lat: 43.95, title: "Le palais des Papes",
      fr: ["Au XIVe siècle, les papes ont vécu à Avignon.", "Le pont Saint-Bénézet est connu grâce à une vieille chanson."],
      de: ["Im 14. Jahrhundert lebten die Päpste in Avignon.", "Die Brücke Saint-Bénézet ist durch ein altes Lied bekannt."] },
    { id: "marseille", at: 180, name: "Marseille", lon: 5.37, lat: 43.3, title: "Marseille et la pétanque",
      fr: ["Marseille est la plus vieille ville de France.", "On y joue à la pétanque sur les places, à l'ombre."],
      de: ["Marseille ist die älteste Stadt Frankreichs.", "Auf den Plätzen spielt man im Schatten Pétanque."] },
    { id: "lyon", at: 280, name: "Lyon", lon: 4.84, lat: 45.76, title: "La cuisine de Lyon",
      fr: ["Lyon est connue pour sa cuisine.", "Les petits restaurants traditionnels s'appellent des bouchons."],
      de: ["Lyon ist bekannt für seine Küche.", "Die kleinen traditionellen Restaurants heißen Bouchons."] },
    { id: "strasbourg", at: 420, name: "Strasbourg", lon: 7.75, lat: 48.57, title: "La cathédrale de Strasbourg",
      fr: ["La cathédrale de Strasbourg est en grès rose.", "En décembre, la ville accueille un grand marché de Noël."],
      de: ["Das Straßburger Münster ist aus rosa Sandstein.", "Im Dezember gibt es in der Stadt einen großen Weihnachtsmarkt."] }
  ],

  tenses: [
    { id: "z01", level: 1, topic: "Präsens", sentence: "Le matin, je ___ de la maison à huit heures.", options: ["sors", "sortez", "sortent"], answer: 0, explain: "Sortir im Präsens: je sors, tu sors, il sort, nous sortons, vous sortez, ils sortent." },
    { id: "z02", level: 1, topic: "Futur proche", sentence: "Ce soir, nous ___ manger au restaurant.", options: ["allons", "allez", "vont"], answer: 0, explain: "Futur proche: aller (gebeugt) + Infinitiv. Nous allons manger." },
    { id: "z03", level: 1, topic: "Futur proche", sentence: "Demain, tu ___ voir un film ?", options: ["vas", "va", "vais"], answer: 0, explain: "Tu vas, il va, je vais. Die Form richtet sich nach dem Subjekt." },
    { id: "z04", level: 1, topic: "Präsens", sentence: "Vous ___ un café ?", options: ["voulez", "veux", "veulent"], answer: 0, explain: "Vouloir: je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent." },

    { id: "z05", level: 2, topic: "Passé composé", sentence: "Ce matin, je ___ de la maison à huit heures.", options: ["suis sorti", "ai sorti", "sors"], answer: 0, explain: "Sortir bildet das Passé composé mit être, wie alle Bewegungsverben der Gruppe aller, venir, partir, arriver.", trap: "Stolperstein: Die Bewegungsverben mit être sind eine feste Gruppe (aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner, passer). Alle anderen mit avoir." },
    { id: "z06", level: 2, topic: "Passé composé", sentence: "Hier, nous ___ un bon film.", options: ["avons vu", "sommes vus", "voyons"], answer: 0, explain: "Voir bildet das Passé composé mit avoir: nous avons vu." },
    { id: "z07", level: 2, topic: "Passé composé", sentence: "Elle ___ à Lyon en 2020.", options: ["est arrivée", "a arrivé", "arrive"], answer: 0, explain: "Arriver mit être, und das Partizip richtet sich nach elle: arrivée." },
    { id: "z08", level: 2, topic: "Passé composé", sentence: "Tu ___ tes clés ?", options: ["as trouvé", "es trouvé", "trouves"], answer: 0, explain: "Trouver mit avoir: tu as trouvé. Die Frage bezieht sich auf ein abgeschlossenes Ereignis." },

    { id: "z09", level: 3, topic: "Imparfait", sentence: "Quand j'___ enfant, je jouais au foot tous les jours.", options: ["étais", "ai été", "serais"], answer: 0, explain: "Zustände und Gewohnheiten in der Vergangenheit: Imparfait.", trap: "Stolperstein: Deutsch nutzt oft das Perfekt (ich war), Französisch für Zustände und Gewohnheiten das Imparfait." },
    { id: "z10", level: 3, topic: "Konditional", sentence: "Je ___ un thé, s'il vous plaît.", options: ["voudrais", "veux", "voulais"], answer: 0, explain: "Je voudrais ist die höfliche Form (Konditional). Je veux klingt fordernd.", trap: "Stolperstein: Je veux ist grammatisch richtig, klingt aber wie ein Befehl. Im Café immer je voudrais oder je prends." },
    { id: "z11", level: 3, topic: "Imparfait und Passé composé", sentence: "Il ___ tranquillement quand le téléphone a sonné.", options: ["lisait", "a lu", "lira"], answer: 0, explain: "Hintergrundhandlung im Imparfait (il lisait), das Ereignis, das dazwischenkommt, im Passé composé (a sonné)." },
    { id: "z12", level: 3, topic: "Imparfait und Passé composé", sentence: "Soudain, la porte ___.", options: ["s'est ouverte", "s'ouvrait", "s'ouvre"], answer: 0, explain: "Soudain kündigt ein plötzliches Ereignis an: Passé composé.", trap: "Stolperstein: Signalwörter für das Passé composé: soudain, tout à coup, à ce moment-là. Für das Imparfait: souvent, tous les jours, pendant que." }
  ]
};
