# Conservation Legacy Game Impact Model

Horse Shoe Pop uses two intentionally separate measures:

1. **Legacy Points** measure player participation. They unlock Care Trail badges and have no cash value.
2. **Verified financial impact** reports real net proceeds allocated to an approved breed project. It must never be calculated from a player's points or individual ad views.

## Player Care Trail

A first-time level completion awards `18 + (stars × 6)` Legacy Points. A replay awards `6 + (stars × 2)`. Points are stored both as a lifetime total and against the current ten-level chapter. Each chapter has a care theme and target in `impact-config.js`.

The Care Trail is educational and motivational. Completing a player goal does not claim that an item or service was purchased.

## Verified Community Project

The current static configuration begins in a planning state and truthfully displays that no verified funds have been reported. When the platform backend is connected, the project response should provide:

```json
{
  "projectId": "ppr-hay-2026-01",
  "breedId": "pure-puerto-rican-paso-fino",
  "title": "Hay & Forage Assistance",
  "status": "open",
  "targetDescription": "20 bales",
  "verifiedRaised": 286,
  "verifiedTarget": 600,
  "currency": "USD",
  "updatedAt": "2026-09-02T00:00:00Z",
  "ledgerUrl": "/impact/ppr-hay-2026-01"
}
```

Only reconciled allocations should populate `verifiedRaised`. Estimated advertising revenue, gross store receipts, pending payments, refunded purchases, taxes, and platform fees must not appear as verified impact.

## Public ledger requirements

Every completed project should show, subject to recipient consent and privacy:

- Project and care category
- Approval and completion dates
- Gross revenue source totals
- Store, payment, tax, and approved operating deductions
- Net amount allocated to the breed fund
- Recipient organization or program
- Receipts, photographs, or other available proof
- A short explanation of the animal, farm, and community outcome

Conservation staff—not popularity alone—must verify urgency, breed relevance, recipient eligibility, and animal-welfare standards. Player voting may be used only among already-approved, similarly important projects.

## Reuse for another breed

The game engine, level framework, rewards, saving, accessibility, and Impact Center remain shared. A new breed edition replaces the artwork, map, stories, sound, care priorities, beneficiary fund, and `impact-config.js`. Each edition should also include breed-specific mechanics or challenges so it does not feel like a superficial recolor.
