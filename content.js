// Inhalte der Französisch-App.
// Jeder Eintrag hat ein "level" (1, 2 oder 3). Die App filtert danach.
// Vokabeln: "de" und "fr" mit Artikel. "alt" sind weitere akzeptierte Antworten.
// Fehler finden: "words" sind die antippbaren Teile, "wrong" ist der Index des falschen Teils.
// Zeiten: "___" im Satz ist die Lücke, "answer" der Index der richtigen Option.

window.CONTENT = {
  meta: { lang: "fr-FR", title: "Français" },

  vocab: [
    // Stufe 1: Einkaufen und Alltag
    { id: "v01", level: 1, theme: "Einkaufen", de: "die Bäckerei", fr: "la boulangerie", tip: "Vom Wort boule (Kugel), wie ein rundes Brot." },
    { id: "v02", level: 1, theme: "Einkaufen", de: "der Markt", fr: "le marché", tip: "Klingt wie das deutsche Wort, aber mit Akzent am Ende." },
    { id: "v03", level: 1, theme: "Einkaufen", de: "das Brot", fr: "le pain", tip: "Nicht mit pin (Kiefer) verwechseln: der Nasal am Ende." },
    { id: "v04", level: 1, theme: "Einkaufen", de: "der Käse", fr: "le fromage", tip: "Alle Wörter auf -age sind maskulin, außer la page, la plage, la cage." },
    { id: "v05", level: 1, theme: "Einkaufen", de: "die Rechnung", fr: "l'addition", tip: "Im Restaurant: L'addition, s'il vous plaît." },
    { id: "v06", level: 1, theme: "Einkaufen", de: "der Apfel", fr: "la pomme", tip: "Pomme de terre ist die Kartoffel, der Erdapfel." },
    { id: "v07", level: 1, theme: "Einkaufen", de: "das Wasser", fr: "l'eau", tip: "Drei Buchstaben, nur ein Laut: o." },
    { id: "v08", level: 1, theme: "Einkaufen", de: "teuer", fr: "cher", alt: ["chère"], tip: "Cher heißt auch lieb, wie in cher ami." },
    { id: "v09", level: 1, theme: "Einkaufen", de: "billig", fr: "bon marché", alt: ["pas cher"], tip: "Wörtlich: guter Markt. Wird nicht verändert." },
    { id: "v10", level: 1, theme: "Einkaufen", de: "das Geld", fr: "l'argent", tip: "Argent heißt auch Silber." },
    { id: "v11", level: 1, theme: "Einkaufen", de: "die Tasche", fr: "le sac", tip: "Le sac à main ist die Handtasche." },
    { id: "v12", level: 1, theme: "Einkaufen", de: "der Preis", fr: "le prix", tip: "Das x am Ende ist stumm." },
    { id: "v13", level: 1, theme: "Einkaufen", de: "kaufen", fr: "acheter", tip: "j'achète, mit accent grave in der Einzahl." },
    { id: "v14", level: 1, theme: "Einkaufen", de: "bezahlen", fr: "payer", tip: "je paie, nous payons." },
    { id: "v15", level: 1, theme: "Einkaufen", de: "die Kasse", fr: "la caisse", tip: "Auch: die Kiste." },
    { id: "v16", level: 1, theme: "Einkaufen", de: "geschlossen", fr: "fermé", alt: ["fermée"], tip: "Fermer heißt schließen. Steht so an jeder Ladentür." },

    // Stufe 2: Arbeit und Gefühle
    { id: "v17", level: 2, theme: "Arbeit", de: "die Besprechung", fr: "la réunion", tip: "Wörtlich: das Wiedervereinen." },
    { id: "v18", level: 2, theme: "Arbeit", de: "der Termin", fr: "le rendez-vous", tip: "Gilt für Arzt, Friseur und Verabredung gleichermaßen." },
    { id: "v19", level: 2, theme: "Arbeit", de: "die Frist", fr: "le délai", tip: "Vorsicht: heißt nicht Verzögerung, sondern der Zeitraum, der einem bleibt." },
    { id: "v20", level: 2, theme: "Arbeit", de: "verschieben", fr: "reporter", tip: "Un reporter ist der Reporter, reporter (Verb) heißt verschieben." },
    { id: "v21", level: 2, theme: "Arbeit", de: "der Kollege", fr: "le collègue", tip: "Gleiches Wort für die Kollegin: la collègue." },
    { id: "v22", level: 2, theme: "Arbeit", de: "die Erfahrung", fr: "l'expérience", tip: "Auch: das Experiment." },
    { id: "v23", level: 2, theme: "Gefühle", de: "müde", fr: "fatigué", alt: ["fatiguée"], tip: "Je suis fatigué. Das Akzent-e am Ende wird gesprochen." },
    { id: "v24", level: 2, theme: "Gefühle", de: "besorgt", fr: "inquiet", alt: ["inquiète"], tip: "Das Gegenteil von tranquille." },
    { id: "v25", level: 2, theme: "Gefühle", de: "stolz", fr: "fier", alt: ["fière"], tip: "Je suis fier de toi: Ich bin stolz auf dich." },
    { id: "v26", level: 2, theme: "Gefühle", de: "zufrieden", fr: "content", alt: ["contente", "satisfait", "satisfaite"], tip: "Content heißt hier zufrieden, nicht Inhalt." },

    // Stufe 3: Wendungen
    { id: "v27", level: 3, theme: "Wendungen", de: "Es ist mir egal", fr: "Ça m'est égal", tip: "Wörtlich: Das ist mir gleich." },
    { id: "v28", level: 3, theme: "Wendungen", de: "sich Sorgen machen", fr: "s'inquiéter", tip: "Ne t'inquiète pas: Mach dir keine Sorgen." },
    { id: "v29", level: 3, theme: "Wendungen", de: "Ich habe es satt", fr: "J'en ai marre", tip: "Umgangssprachlich, sehr häufig." },
    { id: "v30", level: 3, theme: "Wendungen", de: "sich an etwas gewöhnen", fr: "s'habituer à quelque chose", tip: "Merke die Präposition à." },
    { id: "v31", level: 3, theme: "Wendungen", de: "zurechtkommen", fr: "se débrouiller", tip: "Je me débrouille: Ich komme klar." },
    { id: "v32", level: 3, theme: "Wendungen", de: "Es lohnt sich", fr: "Ça vaut le coup", alt: ["Ça vaut la peine"], tip: "Vom Verb valoir (wert sein)." },
    { id: "v33", level: 3, theme: "Wendungen", de: "jemandem fehlen", fr: "manquer à quelqu'un", tip: "Tu me manques heißt: Du fehlst mir. Die Richtung ist umgedreht." },
    { id: "v34", level: 3, theme: "Wendungen", de: "auf etwas verzichten", fr: "renoncer à quelque chose", tip: "Präposition à, wie bei s'habituer." }
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

  tenses: [
    { id: "z01", level: 1, topic: "Präsens", sentence: "Le matin, je ___ de la maison à huit heures.", options: ["sors", "sortez", "sortent"], answer: 0, explain: "Sortir im Präsens: je sors, tu sors, il sort, nous sortons, vous sortez, ils sortent." },
    { id: "z02", level: 1, topic: "Futur proche", sentence: "Ce soir, nous ___ manger au restaurant.", options: ["allons", "allez", "vont"], answer: 0, explain: "Futur proche: aller (gebeugt) + Infinitiv. Nous allons manger." },
    { id: "z03", level: 1, topic: "Futur proche", sentence: "Demain, tu ___ voir un film ?", options: ["vas", "va", "vais"], answer: 0, explain: "Tu vas, il va, je vais. Die Form richtet sich nach dem Subjekt." },
    { id: "z04", level: 1, topic: "Präsens", sentence: "Vous ___ un café ?", options: ["voulez", "veux", "veulent"], answer: 0, explain: "Vouloir: je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent." },

    { id: "z05", level: 2, topic: "Passé composé", sentence: "Ce matin, je ___ de la maison à huit heures.", options: ["suis sorti", "ai sorti", "sors"], answer: 0, explain: "Sortir bildet das Passé composé mit être, wie alle Bewegungsverben der Gruppe aller, venir, partir, arriver." },
    { id: "z06", level: 2, topic: "Passé composé", sentence: "Hier, nous ___ un bon film.", options: ["avons vu", "sommes vus", "voyons"], answer: 0, explain: "Voir bildet das Passé composé mit avoir: nous avons vu." },
    { id: "z07", level: 2, topic: "Passé composé", sentence: "Elle ___ à Lyon en 2020.", options: ["est arrivée", "a arrivé", "arrive"], answer: 0, explain: "Arriver mit être, und das Partizip richtet sich nach elle: arrivée." },
    { id: "z08", level: 2, topic: "Passé composé", sentence: "Tu ___ tes clés ?", options: ["as trouvé", "es trouvé", "trouves"], answer: 0, explain: "Trouver mit avoir: tu as trouvé. Die Frage bezieht sich auf ein abgeschlossenes Ereignis." },

    { id: "z09", level: 3, topic: "Imparfait", sentence: "Quand j'___ enfant, je jouais au foot tous les jours.", options: ["étais", "ai été", "serais"], answer: 0, explain: "Zustände und Gewohnheiten in der Vergangenheit: Imparfait." },
    { id: "z10", level: 3, topic: "Konditional", sentence: "Je ___ un thé, s'il vous plaît.", options: ["voudrais", "veux", "voulais"], answer: 0, explain: "Je voudrais ist die höfliche Form (Konditional). Je veux klingt fordernd." },
    { id: "z11", level: 3, topic: "Imparfait und Passé composé", sentence: "Il ___ tranquillement quand le téléphone a sonné.", options: ["lisait", "a lu", "lira"], answer: 0, explain: "Hintergrundhandlung im Imparfait (il lisait), das Ereignis, das dazwischenkommt, im Passé composé (a sonné)." },
    { id: "z12", level: 3, topic: "Imparfait und Passé composé", sentence: "Soudain, la porte ___.", options: ["s'est ouverte", "s'ouvrait", "s'ouvre"], answer: 0, explain: "Soudain kündigt ein plötzliches Ereignis an: Passé composé." }
  ]
};
