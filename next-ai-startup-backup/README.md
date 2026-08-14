This is a Next.js boilerplate intended for use as a Shopify template starter (headless storefront + marketing pages).

## Quick start

1. Copy `.env.example` to `.env.local` and fill the values.
2. Install dependencies:

```bash
npm install
```

3. Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

## Previewing for marketplace listing

- Add preview images to `public/preview-desktop.png` and `public/preview-mobile.png`.
- Deploy a demo site (Vercel recommended) and add the URL to your listing.
- Follow the checklist in `MARKETPLACE.md` when preparing the store listing.

## Scripts

- `npm run dev` — Run development server
- `npm run build` — Build for production
- `npm run start` — Run the production build
- `npm run lint` — Run ESLint
- `npm run typecheck` — Run TypeScript type check
- `npm run format` — Format code with Prettier

## Packaging & publishing

To prepare a release for the Shopify template marketplace:

1. Ensure `npm run build`, `npm run lint`, and `npm run typecheck` all pass.
2. Include `LICENSE`, `README.md`, `MARKETPLACE.md`, and `env.example` in the package.
3. Provide high-quality preview images and a live demo link.

See [MARKETPLACE.md](MARKETPLACE.md) for a full checklist and metadata sample.

