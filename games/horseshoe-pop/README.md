# Horse Shoe Pop

A responsive browser game for Conservation Legacy centered on the Pure Puerto Rican Paso Fino, Puerto Rico, and breed conservation.

The current build includes 100 levels across 10 island destinations. Each destination contains 10 games; completing all ten opens the next golden trail segment. The selected Puerto Rico adventure map includes place-based heritage lessons, achievements, championship challenges, bubble-topic unlocks, pressure rows, combos, power-ups, prizes, animated bubble settling, bank shots, gravity drops, and sound effects.

Every destination explains why it appears in that part of the island, and its ten games unfold ten related story beats covering ports, towns, plantations and their full labor history, rainforest and dryland terrain, coastal ranches, mountain communities, breeding farms, coffee haciendas, registries, and conservation stewardship.

Return players can continue the exact unfinished board. The local save remembers level and chapter progress, board layout, shots, level score, combo, next bubbles, selected power-up, coins, stars, power inventory, achievements, completed levels, best scores, sound preference, and daily reward streak.

## Play locally

Open `index.html` in a modern browser. No build step or dependencies are required. For the local preview server, run `npm run dev -- --host 0.0.0.0 --port 4173`.

## Integration

The folder is self-contained and can be hosted as a static route or embedded in Conservation Legacy with an iframe. The game is structured so Conservation Coins can later be connected to the platform account API.

See `GOOGLE_PLAY_READINESS.md` before planning an Android release. The browser prototype still needs an Android wrapper/native build and signed `.aab` before it can be submitted to Google Play.
