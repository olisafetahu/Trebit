# Trebit website

SaaS marketing site for **Trebit**, a Kosovo business-management platform (sales, fiscalization, stock, finance, reports).

## Run

```bash
npm install
npm run dev
```

## Edit later

- Copy (Albanian + English): `src/i18n/sq.ts`, `src/i18n/en.ts`
- Prices: set `price` on each item in `src/data/packages.ts` (leave `null` to keep “Kontakto për çmim”)
- Email / phone / social: `src/data/contact.ts` (empty values are hidden or marked “së shpejti”)
- Contact requests are stored in the browser (`localStorage` key `trebit-contact-requests`) until a backend is connected
