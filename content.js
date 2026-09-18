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
    // Station Lyon: Essen und Restaurant
    { id: "l01", pos: "nomen", station: "lyon", level: 2, theme: "Restaurant", de: "die Vorspeise", fr: "l'entrée", altDe: ["der Eingang"], ctxFr: "En entrée, une salade.", ctxDe: "Als Vorspeise einen Salat.", tip: "Feminin. Heißt auch der Eingang, im Restaurant aber der erste Gang." },
    { id: "l02", pos: "nomen", station: "lyon", level: 2, theme: "Restaurant", de: "das Hauptgericht", fr: "le plat", altDe: ["der Teller"], ctxFr: "Comme plat, du poisson.", ctxDe: "Als Hauptgericht Fisch.", tip: "Le plat ist der Teller und der Gang. Le plat du jour: das Tagesgericht." },
    { id: "l03", pos: "nomen", station: "lyon", level: 2, theme: "Restaurant", de: "der Nachtisch", fr: "le dessert", tip: "Ein s klingt wie z zwischen Vokalen, daher zwei s." },
    { id: "l04", pos: "nomen", station: "lyon", level: 2, theme: "Restaurant", de: "das Fleisch", fr: "la viande", tip: "Feminin. Von vivenda, was zum Leben dient." },
    { id: "l05", pos: "nomen", station: "lyon", level: 2, theme: "Restaurant", de: "der Fisch", fr: "le poisson", tip: "Mit zwei s, sonst wäre es le poison, das Gift.", trap: "Stolperstein: le poisson (Fisch) und le poison (Gift) unterscheiden sich nur im s. Das doppelte s klingt scharf." },
    { id: "l06", pos: "nomen", station: "lyon", level: 2, theme: "Restaurant", de: "das Gemüse", fr: "les légumes", tip: "Steht meist im Plural, maskulin: des légumes verts." },
    { id: "l07", pos: "nomen", station: "lyon", level: 2, theme: "Restaurant", de: "die Vorspeisenplatte", fr: "les hors-d’œuvre", alt: ["les hors-d'oeuvre"], tip: "Wörtlich: außerhalb des Werks, also außerhalb des eigentlichen Menüs. Unveränderlich." },
    { id: "l08", pos: "nomen", station: "lyon", level: 2, theme: "Restaurant", de: "die Rechnung", fr: "l’addition", alt: ["l'addition"], tip: "Im Restaurant immer l'addition, nicht la facture." },
    { id: "l09", pos: "nomen", station: "lyon", level: 2, theme: "Restaurant", de: "das Trinkgeld", fr: "le pourboire", tip: "Wörtlich: zum Trinken. In Frankreich ist der Service meist enthalten." },
    { id: "l10", pos: "nomen", station: "lyon", level: 2, theme: "Restaurant", de: "der Tisch", fr: "la table", tip: "Une table pour deux, s'il vous plaît." },
    { id: "l11", pos: "verb", station: "lyon", level: 2, theme: "Restaurant", de: "reservieren", fr: "réserver", tip: "J'ai réservé une table au nom de Schmidt." },
    { id: "l12", pos: "verb", station: "lyon", level: 2, theme: "Restaurant", de: "empfehlen", fr: "recommander", alt: ["conseiller"], tip: "Qu'est-ce que vous recommandez ? Was empfehlen Sie?" },
    { id: "l13", pos: "verb", station: "lyon", level: 2, theme: "Restaurant", de: "wählen", fr: "choisir", tip: "Auf -ir: je choisis, nous choisissons." },
    { id: "l14", pos: "verb", station: "lyon", level: 2, theme: "Restaurant", de: "probieren", fr: "goûter", tip: "Von le goût, der Geschmack. Mit Zirkumflex." },
    { id: "l15", pos: "adjektiv", station: "lyon", level: 2, theme: "Restaurant", de: "lecker", fr: "délicieux", alt: ["délicieuse", "bon", "bonne"], tip: "C'était délicieux. Feminin: délicieuse." },
    { id: "l16", pos: "adjektiv", station: "lyon", level: 2, theme: "Restaurant", de: "satt", fr: "rassasié", alt: ["rassasiée"], altDe: ["gesättigt"], ctxFr: "Merci, je suis rassasié.", ctxDe: "Danke, ich bin satt.", tip: "Auch: Je n'ai plus faim, ich habe keinen Hunger mehr.", trap: "Stolperstein: Je suis plein heißt nicht ich bin satt, sondern eher ich bin voll wie ein Fass." },
    { id: "l17", pos: "adjektiv", station: "lyon", level: 2, theme: "Restaurant", de: "scharf", fr: "épicé", alt: ["épicée", "piquant"], tip: "Von l'épice, das Gewürz. Ein scharfes Messer wäre coupant." },
    { id: "l18", pos: "wendung", station: "lyon", level: 2, theme: "Restaurant", de: "zum Wohl", fr: "Santé", alt: ["À votre santé", "Tchin-tchin"], tip: "Beim Anstoßen. Wörtlich: Gesundheit." },
    { id: "l19", pos: "wendung", station: "lyon", level: 2, theme: "Restaurant", de: "Ich bin allergisch gegen", fr: "Je suis allergique à", tip: "Mit à: allergique aux noix, allergique au lait." },
    { id: "l20", pos: "wendung", station: "lyon", level: 2, theme: "Restaurant", de: "Ich nehme dasselbe", fr: "Je prends la même chose", tip: "La même chose: dasselbe. Chose ist feminin." },

    // Station Strasbourg: Wohnen, Uhrzeit, Verabredungen
    { id: "t01s", pos: "nomen", station: "strasbourg", level: 2, theme: "Zeit", de: "die Uhrzeit", fr: "l’heure", alt: ["l'heure"], altDe: ["die Stunde"], ctxFr: "Vous avez l'heure ?", ctxDe: "Haben Sie die Uhrzeit?", tip: "Feminin, mit stummem h. Quelle heure est-il ?" },
    { id: "t02s", pos: "nomen", station: "strasbourg", level: 2, theme: "Zeit", de: "die Minute", fr: "la minute", tip: "Wie im Deutschen, feminin." },
    { id: "t03s", pos: "nomen", station: "strasbourg", level: 2, theme: "Zeit", de: "der Morgen", fr: "le matin", tip: "Le matin: morgens. Demain matin: morgen früh." },
    { id: "t04s", pos: "nomen", station: "strasbourg", level: 2, theme: "Zeit", de: "der Nachmittag", fr: "l’après-midi", alt: ["l'après-midi"], tip: "Nach dem Mittag. Meist maskulin." },
    { id: "t05s", pos: "nomen", station: "strasbourg", level: 2, theme: "Zeit", de: "der Abend", fr: "le soir", altDe: ["abends"], ctxFr: "Ce soir, on sort.", ctxDe: "Heute Abend gehen wir aus.", tip: "La soirée ist der Abend als Verlauf, wie journée und jour." },
    { id: "t06s", pos: "nomen", station: "strasbourg", level: 2, theme: "Zeit", de: "die Woche", fr: "la semaine", tip: "Von sept, sieben. Sieben Tage." },
    { id: "t07s", pos: "nomen", station: "strasbourg", level: 2, theme: "Wohnen", de: "die Wohnung", fr: "l’appartement", alt: ["l'appartement"], tip: "Maskulin, mit zwei p und einem t." },
    { id: "t08s", pos: "nomen", station: "strasbourg", level: 2, theme: "Wohnen", de: "das Zimmer", fr: "la chambre", altDe: ["das Schlafzimmer"], ctxFr: "Une chambre pour deux nuits.", ctxDe: "Ein Zimmer für zwei Nächte.", tip: "La chambre ist das Schlafzimmer oder Hotelzimmer. Ein Raum allgemein: la pièce.", trap: "Stolperstein: Das Wohnzimmer ist le salon, nicht la chambre." },
    { id: "t09s", pos: "nomen", station: "strasbourg", level: 2, theme: "Wohnen", de: "die Küche", fr: "la cuisine", altDe: ["die Kochkunst"], ctxFr: "La cuisine est petite mais claire.", ctxDe: "Die Küche ist klein, aber hell.", tip: "Auch: die Küche als Kochkunst, la cuisine française." },
    { id: "t10s", pos: "nomen", station: "strasbourg", level: 2, theme: "Wohnen", de: "der Schlüssel", fr: "la clé", alt: ["la clef"], tip: "Feminin. Zwei Schreibweisen, clé ist die heutige." },
    { id: "t11s", pos: "nomen", station: "strasbourg", level: 2, theme: "Wohnen", de: "der Aufzug", fr: "l’ascenseur", alt: ["l'ascenseur"], tip: "Maskulin. Sans ascenseur steht in vielen Anzeigen." },
    { id: "t12s", pos: "nomen", station: "strasbourg", level: 2, theme: "Wohnen", de: "der Stock", fr: "l’étage", alt: ["l'étage"], tip: "Maskulin, wie alle -age. Le rez-de-chaussée ist das Erdgeschoss.", trap: "Stolperstein: Le premier étage ist der erste Stock über dem Erdgeschoss, also das deutsche erste Obergeschoss." },
    { id: "t13s", pos: "verb", station: "strasbourg", level: 2, theme: "Verabredung", de: "sich treffen", fr: "se retrouver", alt: ["se voir"], tip: "On se retrouve à huit heures ? Treffen wir uns um acht?" },
    { id: "t14s", pos: "verb", station: "strasbourg", level: 2, theme: "Verabredung", de: "anrufen", fr: "appeler", alt: ["téléphoner"], tip: "Je t'appelle ce soir. Doppel-l in den betonten Formen." },
    { id: "t15s", pos: "verb", station: "strasbourg", level: 2, theme: "Verabredung", de: "warten auf", fr: "attendre", tip: "Ohne Präposition: je t'attends devant le cinéma." },
    { id: "t16s", pos: "verb", station: "strasbourg", level: 2, theme: "Verabredung", de: "absagen", fr: "annuler", tip: "Je dois annuler, désolé." },
    { id: "t17s", pos: "adjektiv", station: "strasbourg", level: 2, theme: "Verabredung", de: "früh", fr: "tôt", tip: "Mit Zirkumflex. Gegenteil: tard." },
    { id: "t18s", pos: "adjektiv", station: "strasbourg", level: 2, theme: "Verabredung", de: "spät", fr: "tard", altDe: ["spät dran"], ctxFr: "Il est déjà tard.", ctxDe: "Es ist schon spät.", tip: "En retard heißt verspätet, tard einfach spät." },
    { id: "t19s", pos: "wendung", station: "strasbourg", level: 2, theme: "Zeit", de: "Viertel nach", fr: "et quart", tip: "Il est huit heures et quart: Viertel nach acht." },
    { id: "t20s", pos: "wendung", station: "strasbourg", level: 2, theme: "Zeit", de: "halb", fr: "et demie", tip: "Huit heures et demie ist halb neun, nicht halb acht.", trap: "Stolperstein: Deutsch halb neun heißt acht Uhr dreißig. Französisch zählt von der vollen Stunde aus: huit heures et demie." },

    // Station Paris: Arbeit, Telefon, Alltag
    { id: "p01", pos: "nomen", station: "paris", level: 3, theme: "Alltag", de: "das Handy", fr: "le portable", altDe: ["der Laptop"], ctxFr: "Mon portable est éteint.", ctxDe: "Mein Handy ist aus.", tip: "Le portable ist Handy und Laptop. Eindeutig: le téléphone portable." },
    { id: "p02", pos: "nomen", station: "paris", level: 3, theme: "Alltag", de: "die Nachricht", fr: "le message", tip: "Maskulin, wie alle -age. Laisser un message: eine Nachricht hinterlassen." },
    { id: "p03", pos: "nomen", station: "paris", level: 3, theme: "Alltag", de: "der Termin", fr: "le rendez-vous", tip: "Auch beim Arzt. Prendre rendez-vous: einen Termin machen." },
    { id: "p04", pos: "verb", station: "paris", level: 3, theme: "Alltag", de: "zurückrufen", fr: "rappeler", tip: "Je vous rappelle demain." },
    { id: "p05", pos: "verb", station: "paris", level: 3, theme: "Alltag", de: "hinterlassen", fr: "laisser", tip: "Laisser un message, laisser la clé." },
    { id: "p06", pos: "wendung", station: "paris", level: 3, theme: "Alltag", de: "Am Apparat", fr: "À l’appareil", alt: ["à l'appareil"], tip: "Bonjour, Claire à l'appareil. So meldet man sich am Telefon." },
    // Station Avignon: Nach dem Weg fragen
    { id: "d01", pos: "nomen", station: "avignon", level: 2, theme: "Unterwegs", de: "die Straße", fr: "la rue", tip: "Rue de la République. Die große Straße zwischen Städten ist la route." },
    { id: "d02", pos: "nomen", station: "avignon", level: 2, theme: "Unterwegs", de: "der Platz", fr: "la place", altDe: ["der Sitzplatz"], ctxFr: "La place du marché.", ctxDe: "Der Marktplatz.", tip: "Feminin. Auch: der Sitzplatz, der Parkplatz (une place de parking)." },
    { id: "d03", pos: "nomen", station: "avignon", level: 2, theme: "Unterwegs", de: "die Brücke", fr: "le pont", tip: "Maskulin. Sur le pont d'Avignon." },
    { id: "d04", pos: "nomen", station: "avignon", level: 2, theme: "Unterwegs", de: "der Bahnhof", fr: "la gare", tip: "Feminin. Le garage ist die Werkstatt.", trap: "Stolperstein: la gare (Bahnhof) und le garage (Werkstatt, Garage) klingen ähnlich, sind aber zwei Wörter." },
    { id: "d05", pos: "nomen", station: "avignon", level: 2, theme: "Unterwegs", de: "die Bushaltestelle", fr: "l'arrêt de bus", tip: "Arrêt kommt von arrêter, anhalten. Maskulin: un arrêt." },
    { id: "d06", pos: "nomen", station: "avignon", level: 2, theme: "Unterwegs", de: "die Innenstadt", fr: "le centre-ville", tip: "Maskulin, mit Bindestrich. Aller en ville: in die Stadt gehen." },
    { id: "d07", pos: "wendung", station: "avignon", level: 2, theme: "Unterwegs", de: "links", fr: "à gauche", tip: "Tournez à gauche. Ohne à heißt gauche linkisch." },
    { id: "d08", pos: "wendung", station: "avignon", level: 2, theme: "Unterwegs", de: "rechts", fr: "à droite", tip: "Tournez à droite, mit e am Ende." },
    { id: "d09", pos: "wendung", station: "avignon", level: 2, theme: "Unterwegs", de: "geradeaus", fr: "tout droit", tip: "Ohne e: droit. Continuez tout droit.", trap: "Stolperstein: tout droit (geradeaus) und à droite (rechts) unterscheiden sich nur im e. Wer es mitspricht, schickt Leute in die falsche Richtung." },
    { id: "d10", pos: "adjektiv", station: "avignon", level: 2, theme: "Unterwegs", de: "weit", fr: "loin", tip: "C'est loin ? Ist das weit? Gegenteil: près." },
    { id: "d11", pos: "wendung", station: "avignon", level: 2, theme: "Unterwegs", de: "in der Nähe von", fr: "près de", tip: "Près de la gare. Mit accent grave." },
    { id: "d12", pos: "wendung", station: "avignon", level: 2, theme: "Unterwegs", de: "gegenüber von", fr: "en face de", tip: "En face de l'hôtel. Face heißt Gesicht, man steht Gesicht zu Gesicht." },
    { id: "d13", pos: "wendung", station: "avignon", level: 2, theme: "Unterwegs", de: "neben", fr: "à côté de", tip: "À côté de la cathédrale. Côté heißt Seite." },
    { id: "d14", pos: "verb", station: "avignon", level: 2, theme: "Unterwegs", de: "abbiegen", fr: "tourner", altDe: ["drehen"], ctxFr: "Tournez à gauche au feu.", ctxDe: "Biegen Sie an der Ampel links ab.", tip: "Auch: sich drehen, einen Film drehen." },
    { id: "d15", pos: "verb", station: "avignon", level: 2, theme: "Unterwegs", de: "weitergehen", fr: "continuer", altDe: ["fortsetzen"], ctxFr: "Continuez tout droit.", ctxDe: "Gehen Sie geradeaus weiter.", tip: "Continuez jusqu'à la place: bis zum Platz." },
    { id: "d16", pos: "verb", station: "avignon", level: 2, theme: "Unterwegs", de: "überqueren", fr: "traverser", tip: "Traverser la rue, traverser le pont." },
    { id: "d17", pos: "verb", station: "avignon", level: 2, theme: "Unterwegs", de: "sich verirren", fr: "se perdre", tip: "Je suis perdu: Ich habe mich verlaufen. Perdre: verlieren." },
    { id: "d18", pos: "nomen", station: "avignon", level: 2, theme: "Unterwegs", de: "der Stadtplan", fr: "le plan", tip: "Le plan de la ville. Die Landkarte ist la carte.", trap: "Stolperstein: Für den Stadtplan sagt man le plan, nicht la carte. La carte ist die Landkarte oder die Speisekarte." },
    { id: "d19", pos: "nomen", station: "avignon", level: 2, theme: "Unterwegs", de: "die Ampel", fr: "le feu", altDe: ["das Feuer"], ctxFr: "Au feu rouge, tournez à droite.", ctxDe: "An der roten Ampel rechts.", tip: "Feu heißt Feuer. Die Ampel ist le feu rouge oder kurz le feu. Plural: les feux." },
    { id: "d20", pos: "nomen", station: "avignon", level: 2, theme: "Unterwegs", de: "die Kreuzung", fr: "le carrefour", tip: "Wörtlich: vier Wege, quatre fours (altfranzösisch). Auch der Name der Supermarktkette." },
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
    { id: "la1", station: "lyon", level: 2, prompt: "___ addition", options: ["le", "la", "l'", "les"], answer: 2, explain: "Vor Vokal l'. Feminin, wie alle Wörter auf -tion.", de: "die Rechnung" },
    { id: "la2", station: "lyon", level: 2, prompt: "___ viande", options: ["le", "la", "l'", "les"], answer: 1, explain: "La viande ist feminin.", de: "das Fleisch" },
    { id: "la3", station: "lyon", level: 2, prompt: "___ poisson", options: ["le", "la", "l'", "les"], answer: 0, explain: "Le poisson ist maskulin.", de: "der Fisch" },
    { id: "la4", station: "lyon", level: 2, prompt: "___ légumes", options: ["le", "la", "l'", "les"], answer: 3, explain: "Steht meist im Plural: les légumes.", de: "das Gemüse" },
    { id: "la5", station: "lyon", level: 2, prompt: "___ dessert", options: ["le", "la", "l'", "les"], answer: 0, explain: "Le dessert ist maskulin, wie le plat.", de: "der Nachtisch" },
    { id: "pa1", station: "paris", level: 3, prompt: "___ heure", options: ["le", "la", "l'", "les"], answer: 2, explain: "Stummes h zählt wie ein Vokal: l'heure. Feminin.", de: "die Uhrzeit" },
    { id: "pa2", station: "paris", level: 3, prompt: "___ message", options: ["le", "la", "l'", "les"], answer: 0, explain: "Wörter auf -age sind maskulin: le message.", de: "die Nachricht" },
    { id: "pa3", station: "paris", level: 3, prompt: "___ travail", options: ["le", "la", "l'", "les"], answer: 0, explain: "Le travail ist maskulin. Plural: les travaux.", de: "die Arbeit" },
    { id: "pa4", station: "paris", level: 3, prompt: "Je bois ___ eau.", options: ["du", "de la", "de l'", "des"], answer: 2, explain: "Vor Vokal: de l'eau.", de: "Ich trinke Wasser." },
    { id: "pa5", station: "paris", level: 3, prompt: "Il n’y a pas ___ places.", options: ["du", "de la", "de", "des"], answer: 2, explain: "Nach Verneinung wird des zu de: pas de places.", de: "Es gibt keine Plätze." },
    { id: "da1", station: "avignon", level: 2, prompt: "___ rue", options: ["le", "la", "l'", "les"], answer: 1, explain: "La rue ist feminin.", de: "die Straße" },
    { id: "da2", station: "avignon", level: 2, prompt: "___ pont", options: ["le", "la", "l'", "les"], answer: 0, explain: "Le pont ist maskulin.", de: "die Brücke" },
    { id: "da3", station: "avignon", level: 2, prompt: "___ gare", options: ["le", "la", "l'", "les"], answer: 1, explain: "La gare ist feminin, obwohl Bahnhof im Deutschen maskulin ist.", de: "der Bahnhof" },
    { id: "da4", station: "avignon", level: 2, prompt: "___ arrêt", options: ["le", "la", "l'", "les"], answer: 2, explain: "Vor Vokal l'. Maskulin: un arrêt.", de: "die Haltestelle" },
    { id: "da5", station: "avignon", level: 2, prompt: "___ feux", options: ["le", "la", "l'", "les"], answer: 3, explain: "Plural von le feu: les feux, mit x statt s.", de: "die Ampeln" },
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
    { id: "le1", station: "lyon", level: 2, words: ["Je", "voudrais", "le", "poisson,", "s'il vous plaît."], wrong: 2, correct: "du", explain: "Unbestimmte Menge: du poisson. Le poisson wäre ein bestimmter, schon erwähnter Fisch." },
    { id: "le2", station: "lyon", level: 2, words: ["C'était", "très", "délicieuse."], wrong: 2, correct: "délicieux", explain: "Ce ist maskulin, also délicieux. Délicieuse nur bei einem femininen Bezug." },
    { id: "le3", station: "lyon", level: 2, words: ["Je", "suis", "allergique", "de", "noix."], wrong: 3, correct: "aux", explain: "Allergique à: à + les wird zu aux. Allergique aux noix." },
    { id: "le4", station: "lyon", level: 2, words: ["J'ai", "réservé", "une", "table", "pour", "deux", "personne."], wrong: 6, correct: "personnes", explain: "Deux verlangt den Plural: deux personnes." },
    { id: "le5", station: "lyon", level: 2, words: ["Qu'est-ce que", "vous", "recommande", "?"], wrong: 2, correct: "recommandez", explain: "Vous-Form auf -ez: vous recommandez." },
    { id: "se1", station: "strasbourg", level: 2, words: ["Il", "est", "huit", "heure", "et demie."], wrong: 3, correct: "heures", explain: "Ab zwei steht heures im Plural: deux heures, huit heures." },
    { id: "se2", station: "strasbourg", level: 2, words: ["On", "se", "retrouve", "à", "le", "cinéma ?"], wrong: 4, correct: "au", explain: "à + le wird zu au: au cinéma." },
    { id: "se3", station: "strasbourg", level: 2, words: ["Je", "t'attends", "devant", "la", "appartement."], wrong: 3, correct: "l'", explain: "Vor Vokal: l'appartement. Und es ist maskulin." },
    { id: "se4", station: "strasbourg", level: 2, words: ["Je", "suis", "en", "retard", "pour", "dix", "minutes."], wrong: 4, correct: "de", explain: "En retard de dix minutes. Pour passt hier nicht." },
    { id: "se5", station: "strasbourg", level: 2, words: ["Nous", "habitons", "à le", "troisième", "étage."], wrong: 2, correct: "au", explain: "à + le wird zu au: au troisième étage." },
    { id: "de1", station: "avignon", level: 2, words: ["Tournez", "à la", "droite", "au feu."], wrong: 1, correct: "à", explain: "Die Wendung heißt à droite, ohne Artikel. Ebenso à gauche." },
    { id: "de2", station: "avignon", level: 2, words: ["Allez", "tout", "droite", "jusqu'au pont."], wrong: 2, correct: "droit", explain: "Geradeaus heißt tout droit, ohne e. À droite ist rechts." },
    { id: "de3", station: "avignon", level: 2, words: ["La gare", "est", "en face", "du", "hôtel."], wrong: 3, correct: "de l'", explain: "Vor stummem h wird de le nicht zu du: en face de l'hôtel." },
    { id: "de4", station: "avignon", level: 2, words: ["Continuez", "jusqu'au", "la place."], wrong: 1, correct: "jusqu'à", explain: "Jusqu'à + la bleibt jusqu'à la. Nur jusqu'à + le wird zu jusqu'au." },
    { id: "de5", station: "avignon", level: 2, words: ["Où", "est", "le", "arrêt", "de bus ?"], wrong: 2, correct: "l'", explain: "Vor Vokal: l'arrêt." },
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
    { id: "ls1", station: "lyon", level: 2, fr: "J'ai réservé une table pour deux, au nom de Schmidt.", de: "Ich habe einen Tisch für zwei reserviert, auf den Namen Schmidt." },
    { id: "ls2", station: "lyon", level: 2, fr: "Qu'est-ce que vous recommandez ?", de: "Was empfehlen Sie?" },
    { id: "ls3", station: "lyon", level: 2, fr: "Je prends le plat du jour et un verre de vin rouge.", de: "Ich nehme das Tagesgericht und ein Glas Rotwein." },
    { id: "ls4", station: "lyon", level: 2, fr: "C'était délicieux, merci beaucoup.", de: "Das war köstlich, vielen Dank." },
    { id: "ss1", station: "strasbourg", level: 2, fr: "Il est huit heures et quart.", de: "Es ist Viertel nach acht." },
    { id: "ss2", station: "strasbourg", level: 2, fr: "On se retrouve demain à midi devant la cathédrale ?", de: "Treffen wir uns morgen um zwölf vor der Kathedrale?" },
    { id: "ps1", station: "paris", level: 3, fr: "Bonjour, Claire à l'appareil. Je vous rappelle plus tard.", de: "Guten Tag, Claire am Apparat. Ich rufe Sie später zurück." },
    { id: "ps2", station: "paris", level: 3, fr: "Je voudrais prendre rendez-vous pour la semaine prochaine.", de: "Ich möchte einen Termin für nächste Woche vereinbaren." },
    { id: "ds1", station: "avignon", level: 2, fr: "Pardon, où est la gare, s'il vous plaît ?", de: "Entschuldigung, wo ist der Bahnhof, bitte?" },
    { id: "ds2", station: "avignon", level: 2, fr: "Tournez à gauche, puis continuez tout droit.", de: "Biegen Sie links ab, dann gehen Sie geradeaus weiter." },
    { id: "ds3", station: "avignon", level: 2, fr: "C'est loin ? Non, c'est à cinq minutes à pied.", de: "Ist das weit? Nein, fünf Minuten zu Fuß." },
    { id: "ms1", station: "marseille", level: 1, fr: "Je voudrais un kilo de pommes, s'il vous plaît.", de: "Ich hätte gern ein Kilo Äpfel, bitte." },
    { id: "ms2", station: "marseille", level: 1, fr: "C'est combien, le fromage ?", de: "Wie viel kostet der Käse?" },
    { id: "ms3", station: "marseille", level: 1, fr: "Vous avez du pain frais ?", de: "Haben Sie frisches Brot?" },
    { id: "ms4", station: "marseille", level: 1, fr: "Ça fait dix euros cinquante. Voilà, merci.", de: "Das macht zehn Euro fünfzig. Bitte sehr, danke." },
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
      id: "lt1", station: "lyon", level: 2, title: "Le bouchon lyonnais",
      text: "À Lyon, les petits restaurants traditionnels s'appellent des bouchons. On y mange des plats simples et copieux. Le midi, il y a souvent un menu à prix fixe : entrée, plat et dessert. Il vaut mieux réserver, surtout le week-end.",
      questions: [
        { q: "Wie heißen die traditionellen Restaurants in Lyon?", options: ["Bouchons", "Bistros", "Brasseries"], answer: 0 },
        { q: "Was gehört mittags zum festen Menü?", options: ["Vorspeise, Hauptgang, Nachtisch", "Nur ein Hauptgang", "Käse und Wein"], answer: 0 },
        { q: "Was wird empfohlen?", options: ["Zu reservieren", "Früh zu kommen", "Bar zu zahlen"], answer: 0 }
      ]
    },
    {
      id: "lt2", station: "lyon", level: 2, title: "Au restaurant",
      text: "Bonsoir. Nous avons une table près de la fenêtre. Ce soir, le plat du jour est un poisson avec des légumes. Comme dessert, il y a une tarte aux pommes. Le service est compris, mais le pourboire fait toujours plaisir.",
      questions: [
        { q: "Was ist das Tagesgericht?", options: ["Fisch mit Gemüse", "Fleisch mit Kartoffeln", "Eine Suppe"], answer: 0 },
        { q: "Was gibt es als Nachtisch?", options: ["Apfelkuchen", "Eis", "Käse"], answer: 0 },
        { q: "Was gilt für das Trinkgeld?", options: ["Es ist freiwillig", "Es ist Pflicht", "Es ist verboten"], answer: 0 }
      ]
    },
    {
      id: "st1", station: "strasbourg", level: 2, title: "Un rendez-vous",
      text: "Salut Anna ! On se retrouve demain ? Je finis le travail à dix-sept heures. On peut se voir à dix-huit heures devant la cathédrale. Si tu es en retard, envoie-moi un message. À demain !",
      questions: [
        { q: "Wann endet die Arbeit?", options: ["Um 17 Uhr", "Um 18 Uhr", "Um 15 Uhr"], answer: 0 },
        { q: "Wo treffen sie sich?", options: ["Vor der Kathedrale", "Im Café", "Am Bahnhof"], answer: 0 },
        { q: "Was soll Anna bei Verspätung tun?", options: ["Eine Nachricht schicken", "Anrufen", "Warten"], answer: 0 }
      ]
    },
    {
      id: "pt1", station: "paris", level: 3, title: "Un message sur le répondeur",
      text: "Bonjour, ici Monsieur Leroy. Je vous appelle au sujet du rendez-vous de jeudi. Malheureusement, je dois l'annuler. Est-ce que vendredi matin serait possible ? Rappelez-moi au zéro six, douze, trente-quatre. Merci et bonne journée.",
      questions: [
        { q: "Warum ruft Herr Leroy an?", options: ["Er sagt einen Termin ab", "Er bestätigt einen Termin", "Er sucht eine Wohnung"], answer: 0 },
        { q: "Welchen neuen Termin schlägt er vor?", options: ["Freitagvormittag", "Donnerstagabend", "Montag"], answer: 0 },
        { q: "Worum bittet er?", options: ["Um einen Rückruf", "Um eine E-Mail", "Um einen Besuch"], answer: 0 }
      ]
    },
    {
      id: "dt1", station: "avignon", level: 2, title: "Le chemin vers le palais",
      text: "Pour aller au palais des Papes, prenez la rue de la République tout droit. Au feu, tournez à gauche. Continuez jusqu'à la grande place. Le palais est en face de vous, à côté de la cathédrale.",
      questions: [
        { q: "Wo muss man abbiegen?", options: ["An der Ampel nach links", "Am Platz nach rechts", "An der Brücke"], answer: 0 },
        { q: "Was liegt neben dem Palast?", options: ["Die Kathedrale", "Der Bahnhof", "Das Rathaus"], answer: 0 },
        { q: "Wie geht man die rue de la République entlang?", options: ["Geradeaus", "Nach links", "Mit dem Bus"], answer: 0 }
      ]
    },
    {
      id: "dt2", station: "avignon", level: 2, title: "Un message",
      text: "Salut ! Je suis perdu. Je suis devant la gare, mais je ne trouve pas le pont. Tu peux m'envoyer le plan ? Je prends le bus 5 jusqu'au centre-ville. À tout de suite !",
      questions: [
        { q: "Wo ist die Person gerade?", options: ["Vor dem Bahnhof", "Auf der Brücke", "Im Bus"], answer: 0 },
        { q: "Was findet sie nicht?", options: ["Die Brücke", "Den Bahnhof", "Das Café"], answer: 0 },
        { q: "Welchen Bus nimmt sie?", options: ["Linie 5", "Linie 15", "Keinen"], answer: 0 }
      ]
    },
    {
      id: "dt3", station: "avignon", level: 2, title: "À l'office de tourisme",
      text: "Bonjour ! Le pont Saint-Bénézet est à dix minutes à pied. Sortez à droite, traversez la place et prenez la rue à gauche, le long du fleuve. Le pont est ouvert de neuf heures à dix-neuf heures. L'entrée coûte cinq euros.",
      questions: [
        { q: "Wie weit ist die Brücke?", options: ["Zehn Minuten zu Fuß", "Zehn Minuten mit dem Bus", "Eine halbe Stunde"], answer: 0 },
        { q: "Woran entlang führt der Weg?", options: ["Am Fluss", "Am Bahnhof", "Am Markt"], answer: 0 },
        { q: "Bis wann ist die Brücke geöffnet?", options: ["Bis 19 Uhr", "Bis 9 Uhr", "Bis 17 Uhr"], answer: 0 }
      ]
    },
    {
      id: "mt1", station: "marseille", level: 1, title: "Au marché",
      text: "Le samedi matin, il y a un grand marché près du Vieux-Port. On y trouve des fruits, des légumes, du poisson et du fromage. Marie achète un kilo de pommes et du pain. Les prix sont bons, mais il faut arriver tôt.",
      questions: [
        { q: "Wann ist der Markt?", options: ["Samstagmorgen", "Sonntag", "Jeden Abend"], answer: 0 },
        { q: "Was kauft Marie?", options: ["Äpfel und Brot", "Fisch", "Käse"], answer: 0 },
        { q: "Was sollte man tun?", options: ["Früh kommen", "Spät kommen", "Mit dem Auto kommen"], answer: 0 }
      ]
    },
    {
      id: "mt2", station: "marseille", level: 1, title: "La liste de courses",
      text: "À acheter : un kilo de pommes, du pain, un fromage de chèvre, six œufs, deux bouteilles d'eau gazeuse. Ne pas oublier : le sac !",
      questions: [
        { q: "Wie viele Eier stehen auf der Liste?", options: ["Sechs", "Zwei", "Zwölf"], answer: 0 },
        { q: "Welcher Käse?", options: ["Ziegenkäse", "Kuhmilchkäse", "Kein Käse"], answer: 0 },
        { q: "Was darf man nicht vergessen?", options: ["Die Tasche", "Das Geld", "Den Stadtplan"], answer: 0 }
      ]
    },
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
    { id: "ld1", station: "lyon", title: "Au bouchon", intro: "Ein Bouchon in Lyon, abends. Die Kellnerin kommt an den Tisch.",
      turns: [
        { npc: "Bonsoir ! Vous avez réservé ?", npcDe: "Guten Abend! Haben Sie reserviert?",
          options: [
            { fr: "Oui, une table pour deux au nom de Schmidt.", de: "Ja, ein Tisch für zwei auf den Namen Schmidt.", ok: true },
            { fr: "Non, je veux manger.", de: "Nein, ich will essen.", note: "Ein einfaches Non, mais avez-vous une table ? wäre höflicher. Und je veux klingt fordernd." },
            { fr: "Oui, j'ai réservé un hôtel.", de: "Ja, ich habe ein Hotel reserviert.", note: "Falscher Ort: gefragt war nach der Tischreservierung." }
          ] },
        { npc: "Très bien. Voici la carte. Le plat du jour est un poisson avec des légumes.", npcDe: "Sehr gut. Hier ist die Karte. Das Tagesgericht ist Fisch mit Gemüse.",
          options: [
            { fr: "Qu’est-ce que vous recommandez comme entrée ?", de: "Was empfehlen Sie als Vorspeise?", ok: true },
            { fr: "Je prends le poison.", de: "Ich nehme das Gift.", note: "Ein s fehlt: le poisson. Mit einem s wird daraus Gift." },
            { fr: "Je suis rassasié, merci.", de: "Ich bin satt, danke.", note: "Vor dem Essen ergibt das wenig Sinn." }
          ] },
        { npc: "La salade lyonnaise, c’est notre spécialité. Et à boire ?", npcDe: "Der Salat nach Lyoner Art ist unsere Spezialität. Und zu trinken?",
          options: [
            { fr: "Un verre de vin rouge et une carafe d’eau, s’il vous plaît.", de: "Ein Glas Rotwein und eine Karaffe Wasser, bitte.", ok: true },
            { fr: "De l’eau du robinet gratuite.", de: "Kostenloses Leitungswasser.", note: "Verständlich, aber man sagt schlicht une carafe d'eau. Gratuite muss man nicht betonen." },
            { fr: "Rien, je n’ai pas soif.", de: "Nichts, ich habe keinen Durst.", note: "Geht, wirkt im Restaurant aber knapp. Wasser nimmt man fast immer." }
          ] },
        { npc: "Parfait. Bon appétit !", npcDe: "Perfekt. Guten Appetit!",
          options: [
            { fr: "Merci ! Et l’addition à la fin, s’il vous plaît.", de: "Danke! Und die Rechnung am Ende, bitte.", ok: true },
            { fr: "Vous aussi, bon appétit.", de: "Ihnen auch, guten Appetit.", note: "Die Kellnerin isst nicht mit. Ein einfaches merci genügt." },
            { fr: "Santé !", de: "Zum Wohl!", note: "Santé sagt man beim Anstoßen, nicht als Antwort auf bon appétit." }
          ] }
      ] },
    { id: "sd1", station: "strasbourg", title: "Au téléphone", intro: "Du rufst wegen einer Wohnungsbesichtigung an.",
      turns: [
        { npc: "Allô, oui ?", npcDe: "Hallo, ja?",
          options: [
            { fr: "Bonjour, Thomas Schmidt à l’appareil. Je vous appelle pour l’appartement.", de: "Guten Tag, Thomas Schmidt am Apparat. Ich rufe wegen der Wohnung an.", ok: true },
            { fr: "Salut, c’est moi.", de: "Hi, ich bin's.", note: "Am Telefon mit Fremden immer bonjour und den eigenen Namen." },
            { fr: "Je suis l’appartement.", de: "Ich bin die Wohnung.", note: "Être passt hier nicht. Man ruft wegen etwas an: appeler pour." }
          ] },
        { npc: "Ah oui, l’annonce. Vous voulez le visiter quand ?", npcDe: "Ach ja, die Anzeige. Wann wollen Sie sie besichtigen?",
          options: [
            { fr: "Demain après-midi, si c’est possible.", de: "Morgen Nachmittag, wenn es möglich ist.", ok: true },
            { fr: "Maintenant tout de suite.", de: "Jetzt sofort.", note: "Grammatisch richtig, aber sehr fordernd. Ein si c'est possible macht viel aus." },
            { fr: "Je ne sais pas, peut-être.", de: "Ich weiß nicht, vielleicht.", note: "Wer besichtigen will, sollte einen Vorschlag machen." }
          ] },
        { npc: "Disons quinze heures. C’est au troisième étage, sans ascenseur.", npcDe: "Sagen wir fünfzehn Uhr. Es ist im dritten Stock, ohne Aufzug.",
          options: [
            { fr: "D’accord, quinze heures, troisième étage. Merci.", de: "In Ordnung, fünfzehn Uhr, dritter Stock. Danke.", ok: true },
            { fr: "Trois heures du matin ?", de: "Drei Uhr nachts?", note: "Quinze heures ist fünfzehn Uhr. Die Vierundzwanzig-Stunden-Zählung ist bei Terminen üblich." },
            { fr: "Il y a un ascenseur ?", de: "Gibt es einen Aufzug?", note: "Sie hat gerade gesagt, dass es keinen gibt." }
          ] },
        { npc: "Très bien, à demain alors.", npcDe: "Sehr gut, dann bis morgen.",
          options: [
            { fr: "À demain, bonne journée !", de: "Bis morgen, schönen Tag!", ok: true },
            { fr: "À bientôt, bonne nuit.", de: "Bis bald, gute Nacht.", note: "Bonne nuit passt nur zum Schlafengehen." },
            { fr: "De rien.", de: "Keine Ursache.", note: "Das antwortet man auf merci, nicht auf einen Abschied." }
          ] }
      ] },
    { id: "pd1", station: "paris", title: "Au bureau", intro: "Eine Kollegin spricht dich im Büro an.",
      turns: [
        { npc: "Bonjour ! Tu as deux minutes ?", npcDe: "Guten Morgen! Hast du zwei Minuten?",
          options: [
            { fr: "Bien sûr, qu’est-ce qu’il y a ?", de: "Klar, worum geht es?", ok: true },
            { fr: "Non, je suis occupé.", de: "Nein, ich bin beschäftigt.", note: "Nicht falsch, aber schroff. Ein Pas tout de suite, dans dix minutes ? wäre freundlicher." },
            { fr: "J’ai deux minutes.", de: "Ich habe zwei Minuten.", note: "Wörtlich richtig, klingt aber wie eine Stoppuhr." }
          ] },
        { npc: "La réunion de jeudi est reportée à vendredi. Ça te va ?", npcDe: "Die Besprechung am Donnerstag wird auf Freitag verschoben. Passt dir das?",
          options: [
            { fr: "Oui, vendredi me va très bien.", de: "Ja, Freitag passt mir sehr gut.", ok: true },
            { fr: "Oui, jeudi est bien.", de: "Ja, Donnerstag ist gut.", note: "Der Termin wurde gerade auf Freitag verschoben." },
            { fr: "Je suis reporté.", de: "Ich bin verschoben.", note: "Verschoben wird die Besprechung, nicht du." }
          ] },
        { npc: "Super. Tu peux prévenir Marc ? Il ne répond pas au téléphone.", npcDe: "Prima. Kannst du Marc Bescheid sagen? Er geht nicht ans Telefon.",
          options: [
            { fr: "Je lui laisse un message.", de: "Ich hinterlasse ihm eine Nachricht.", ok: true },
            { fr: "Je le laisse un message.", de: "Ich hinterlasse ihn eine Nachricht.", note: "Wem? Das verlangt lui: je lui laisse un message." },
            { fr: "Marc est au téléphone.", de: "Marc telefoniert.", note: "Sie hat gerade gesagt, dass er nicht rangeht." }
          ] },
        { npc: "Merci beaucoup, tu me sauves !", npcDe: "Vielen Dank, du rettest mich!",
          options: [
            { fr: "De rien, c’est normal.", de: "Keine Ursache, gern geschehen.", ok: true },
            { fr: "S’il vous plaît.", de: "Bitte.", note: "S'il vous plaît heißt bitte im Sinne einer Bitte, nicht als Antwort auf danke." },
            { fr: "Merci à toi.", de: "Danke dir.", note: "Sie hat sich bedankt. Ein Dank zurück wirkt hier verdreht." }
          ] }
      ] },
    { id: "dd1", station: "avignon", title: "Dans la rue", intro: "Du stehst mit dem Stadtplan in Avignon. Eine Passantin spricht dich an.",
      turns: [
        { npc: "Bonjour, je peux vous aider ? Vous cherchez quelque chose ?", npcDe: "Guten Tag, kann ich helfen? Suchen Sie etwas?",
          options: [
            { fr: "Oui, je cherche la gare, s'il vous plaît.", de: "Ja, ich suche den Bahnhof, bitte.", ok: true },
            { fr: "Où est gare ?", de: "Wo ist Bahnhof?", note: "Der Artikel fehlt: la gare. Und ein s'il vous plaît schadet nie." },
            { fr: "Je suis la gare.", de: "Ich bin der Bahnhof.", note: "Être heißt sein. Suchen ist chercher." }
          ] },
        { npc: "C'est facile : vous continuez tout droit, puis vous tournez à droite après le pont.", npcDe: "Ganz einfach: geradeaus weiter, dann nach der Brücke rechts.",
          options: [
            { fr: "D'accord, tout droit, puis à droite après le pont. Merci !", de: "Alles klar, geradeaus, dann nach der Brücke rechts. Danke!", ok: true },
            { fr: "À gauche après le pont ?", de: "Links nach der Brücke?", note: "Sie hat à droite gesagt. Wiederholen ist gut, aber richtig." },
            { fr: "Je ne comprends pas l'allemand.", de: "Ich verstehe kein Deutsch.", note: "Falsches Wort: Sie sprechen Französisch. Je ne comprends pas reicht." }
          ] },
        { npc: "C'est à dix minutes à pied. Vous voulez prendre le bus ?", npcDe: "Zehn Minuten zu Fuß. Wollen Sie den Bus nehmen?",
          options: [
            { fr: "Non merci, je vais marcher, il fait beau.", de: "Nein danke, ich gehe zu Fuß, das Wetter ist schön.", ok: true },
            { fr: "Oui, je prends la voiture.", de: "Ja, ich nehme das Auto.", note: "Gefragt war der Bus. La voiture passt nicht zur Frage." },
            { fr: "Non, je veux le bus.", de: "Nein, ich will den Bus.", note: "Non und dann doch den Bus? Das widerspricht sich, und je veux klingt hart." }
          ] },
        { npc: "Très bien. Bonne route !", npcDe: "Sehr gut. Gute Reise!",
          options: [
            { fr: "Merci beaucoup, bonne journée !", de: "Vielen Dank, schönen Tag!", ok: true },
            { fr: "Bon appétit !", de: "Guten Appetit!", note: "Passt nur beim Essen." },
            { fr: "De rien.", de: "Keine Ursache.", note: "De rien antwortet man auf merci, nicht auf einen Wunsch." }
          ] }
      ] },
    { id: "md1", station: "marseille", title: "Au marché", intro: "Ein Obststand auf dem Markt in Marseille. Der Verkäufer ruft dich heran.",
      turns: [
        { npc: "Bonjour ! Qu'est-ce qu'il vous faut ?", npcDe: "Guten Tag! Was brauchen Sie?",
          options: [
            { fr: "Bonjour, je voudrais un kilo de tomates.", de: "Guten Tag, ich hätte gern ein Kilo Tomaten.", ok: true },
            { fr: "Donnez tomates.", de: "Geben Tomaten.", note: "Zu knapp und ohne Artikel. Beim Einkaufen: je voudrais plus Menge." },
            { fr: "Je cherche le marché.", de: "Ich suche den Markt.", note: "Sie stehen schon darauf." }
          ] },
        { npc: "Un kilo, voilà. Et avec ceci ?", npcDe: "Ein Kilo, bitte sehr. Und dazu?",
          options: [
            { fr: "Du fromage, s'il vous plaît. Un morceau de celui-là.", de: "Käse, bitte. Ein Stück von dem da.", ok: true },
            { fr: "Non.", de: "Nein.", note: "Nicht falsch, aber kurz angebunden. Non merci, ce sera tout wäre freundlich." },
            { fr: "Je prends le fromage tout.", de: "Ich nehme den Käse alles.", note: "Wortstellung: tout le fromage. Und der ganze Laib wäre viel." }
          ] },
        { npc: "Ça fait huit euros cinquante.", npcDe: "Das macht acht Euro fünfzig.",
          options: [
            { fr: "Voilà dix euros.", de: "Hier sind zehn Euro.", ok: true },
            { fr: "C'est cher, je paie cinq.", de: "Das ist teuer, ich zahle fünf.", note: "Auf dem Markt wird nicht gehandelt wie auf dem Basar." },
            { fr: "Je n'ai pas d'argent, merci.", de: "Ich habe kein Geld, danke.", note: "Dann bleibt die Ware hier." }
          ] },
        { npc: "Et un euro cinquante pour vous. Merci, bonne journée !", npcDe: "Und ein Euro fünfzig zurück. Danke, schönen Tag!",
          options: [
            { fr: "Merci, à vous aussi !", de: "Danke, Ihnen auch!", ok: true },
            { fr: "Bonne nuit !", de: "Gute Nacht!", note: "Es ist Vormittag." },
            { fr: "Salut !", de: "Tschau!", note: "Zu locker für den Verkäufer. Au revoir." }
          ] }
      ] },
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
    { id: "lz1", station: "lyon", level: 2, topic: "Teilungsartikel", sentence: "Je voudrais ___ viande, s’il vous plaît.", options: ["de la", "du", "des"], answer: 0, explain: "La viande ist feminin: de la viande." },
    { id: "lz2", station: "lyon", level: 2, topic: "Präsens: choisir", sentence: "Nous ___ le menu.", options: ["choisissons", "choisons", "choisissez"], answer: 0, explain: "Verben auf -ir: nous choisissons, vous choisissez, ils choisissent." },
    { id: "lz3", station: "lyon", level: 2, topic: "Passé composé", sentence: "Hier soir, nous ___ au restaurant.", options: ["avons mangé", "sommes mangés", "mangeons"], answer: 0, explain: "Manger mit avoir: nous avons mangé." },
    { id: "lz4", station: "lyon", level: 2, topic: "Höflichkeitsform", sentence: "___ -vous nous recommander un plat ?", options: ["Pourriez", "Pouvez", "Pouvoir"], answer: 0, explain: "Konditional für die höfliche Frage: pourriez-vous. Pouvez-vous ist richtig, aber direkter." },
    { id: "lz5", station: "lyon", level: 2, topic: "Passé composé", sentence: "J’___ une table pour vingt heures.", options: ["ai réservé", "suis réservé", "réserve"], answer: 0, explain: "Réserver mit avoir: j'ai réservé." },
    { id: "sz1", station: "strasbourg", level: 2, topic: "Uhrzeit", sentence: "Il est huit heures ___.", options: ["et demie", "et demi", "de demie"], answer: 0, explain: "Nach heures (feminin) steht demie mit e: huit heures et demie. Nach midi: midi et demi." },
    { id: "sz2", station: "strasbourg", level: 2, topic: "Futur proche", sentence: "Demain, je ___ appeler le propriétaire.", options: ["vais", "va", "vas"], answer: 0, explain: "Futur proche: je vais appeler." },
    { id: "sz3", station: "strasbourg", level: 2, topic: "Präsens: attendre", sentence: "Nous t’___ devant la gare.", options: ["attendons", "attendez", "attendent"], answer: 0, explain: "Attendre: j'attends, nous attendons, vous attendez." },
    { id: "sz4", station: "strasbourg", level: 2, topic: "Imperativ", sentence: "___ -moi un message si tu es en retard.", options: ["Envoie", "Envoies", "Envoyer"], answer: 0, explain: "Imperativ der tu-Form bei -er-Verben ohne s: envoie, regarde, écoute." },
    { id: "pz1", station: "paris", level: 3, topic: "Indirekte Rede", sentence: "Il a dit qu’il ___ plus tard.", options: ["rappellerait", "rappellera", "rappelle"], answer: 0, explain: "Nach einem Verb der Vergangenheit steht das Konditional: il a dit qu'il rappellerait." },
    { id: "dz1", station: "avignon", level: 2, topic: "Imperativ", sentence: "___ à gauche au feu.", options: ["Tournez", "Tournes", "Tourner"], answer: 0, explain: "Höfliche Aufforderung: die vous-Form ohne vous. Tournez, continuez, traversez." },
    { id: "mz1", station: "marseille", level: 1, topic: "Präsens: acheter", sentence: "Nous ___ des pommes.", options: ["achetons", "achetez", "achètent"], answer: 0, explain: "Acheter: j'achète, nous achetons, ils achètent. Der accent grave nur in den Formen, die auf stummes e enden." },
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
