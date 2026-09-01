# Horse Shoe Pop

A responsive browser game for Conservation Legacy centered on the Pure Puerto Rican Paso Fino, Puerto Rico, and breed conservation.

The current build includes 100 levels across 10 heritage chapters, a Puerto Rico adventure map, chapter lessons, achievements, championship challenges, bubble-topic unlocks, pressure rows, combos, power-ups, prizes, animated bubble settling, bank shots, gravity drops, sound effects, and local progress saves.

## Play locally

Open `index.html` in a modern browser. No build step or dependencies are required. For the local preview server, run `npm run dev -- --host 0.0.0.0 --port 4173`.

## Integration

The folder is self-contained and can be hosted as a static route or embedded in Conservation Legacy with an iframe. The game is structured so Conservation Coins can later be connected to the platform account API.

See `GOOGLE_PLAY_READINESS.md` before planning an Android release. The browser prototype still needs an Android wrapper/native build and signed `.aab` before it can be submitted to Google Play.
