# Enactus Suez

Next.js 16 (App Router) + Tailwind CSS v4. Arabic is the default language (`/ar`), English is at `/en`.

```
npm install
npm run dev
```

## Where to edit content

| File | What it holds |
| --- | --- |
| `src/data/events.json` | Events, dates (ISO with +02:00), locations, agenda |
| `src/data/team.json` | President, six departments, head and vice head per department |
| `src/data/projects.json` | Impact projects shown as cards and in the popup |
| `src/data/categories.json` | Project categories (filter chips) |
| `src/data/stats.json` | Home page numbers |
| `src/data/social.json` | Footer social links |
| `src/data/dictionaries/*.json` | All interface text, Arabic and English |

Every text field is `{ "ar": "...", "en": "..." }`. To fill a vice head, set `vice.name` and `vice.initials` in `team.json`.
