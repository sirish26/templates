# Shopify Template Marketplace Checklist

Use this file to prepare a published listing for the Shopify template marketplace.

Required assets & metadata:
- Title: Clear, searchable name.
- Short description: 1–2 lines explaining the template's purpose.
- Long description: Features, included pages, integrations, and customization points.
- Preview images: `public/preview-*.png` — include desktop and mobile shots.
- Demo link: live deploy (Vercel/Netlify) showcasing the template.
- Compatibility notes: Next.js 14, React 18, Tailwind CSS 3.
- License: MIT (included in `LICENSE`).

Packaging notes:
- Provide instructions to build and export a production-ready package.
- Include `env.example` and `README.md` with setup and preview steps.

Suggested listing metadata (JSON sample):

{
  "name": "Next AI Startup — Shopify Template",
  "version": "0.1.0",
  "author": "Your Name",
  "category": "Startup",
  "tags": ["nextjs","shopify","tailwind","headless"],
  "preview_images": ["preview-desktop.png","preview-mobile.png"],
  "demo_url": "https://your-demo.vercel.app",
  "license": "MIT"
}
