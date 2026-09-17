# Sprachlern-Apps

Zwei kleine Lern-Apps fürs Handy, gebaut als Progressive Web App (eine HTML-Datei plus Inhalte, kein Server).

- `franzoesisch/` – Französisch (A2), Prototyp
- `englisch/` – Englisch für die Grundschule, folgt

## Auf GitHub Pages veröffentlichen

1. Dieses Repository auf GitHub anlegen und die Ordner hochladen.
2. Settings → Pages → Source: "Deploy from a branch", Branch `main`, Ordner `/ (root)`.
3. Die App ist dann unter `https://<name>.github.io/<repo>/franzoesisch/` erreichbar.
4. Auf dem Handy im Browser öffnen und "Zum Home-Bildschirm" wählen. Danach läuft sie auch offline.

## Inhalte pflegen

Alle Vokabeln, Sätze und Texte stehen in `content.js`. Nach jeder Änderung an einer Datei in `sw.js` die `VERSION` hochzählen (z. B. `fr-v2`), sonst behalten Handys, die die App schon installiert haben, den alten Stand.

## Fortschritt

Wird nur lokal auf dem Gerät gespeichert (localStorage). Auf der Startseite lässt er sich löschen.
