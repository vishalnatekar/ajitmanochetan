# Ajita Manochetana Website

Static Next.js site for Ajita Manochetana Trust, a mental health and special education organisation based in Sirsi, Uttara Kannada.

## Stack

- Next.js 16 (App Router, static export)
- TypeScript + Tailwind CSS
- Markdown content with `gray-matter` + `marked`
- Decap CMS (`/admin`) with Cloudinary media library
- Form submissions via Formspree

## Getting Started

```bash
npm install
npm run dev
```

### Environment variables

Copy `.env.example` to `.env` and update values, especially the Formspree endpoint, contact information, and map embed URL.

```bash
cp .env.example .env
```

## Build & Deploy

- Build: `npm run build` (Next.js generates a static export in `out/`).
- On Vercel set:
  - Framework preset: **Other** (so Vercel serves the static export)
  - Install command: leave blank or `npm install`
  - Build command: `npm run build`
  - Output directory: `out`
- Add the same environment variables in Vercel → Project → Settings → Environment Variables (Preview + Production).

## Editing via Decap CMS

1. Ensure a GitHub OAuth app is configured for the repo and update `public/admin/config.yml` with the correct `repo`, `cloud_name`, and `api_key` (plus `base_url`/`auth_endpoint` once the OAuth bridge is deployed).
2. Visit `/admin` on the deployed site and log in with GitHub.
3. Pages → edit Markdown files (currently only the About page lives in Markdown).
4. Gallery → upload photos (Cloudinary) and add captions/order for the gallery page.
5. News → create or edit articles with cover images, summaries, and body content.

### Media & images

- Upload images through the Cloudinary media library in the CMS.
- Recommended format: landscape JPG/PNG, 1600px wide, ≤ 300KB.
- Optimise images before upload to keep the site fast.

### Gallery updates

- Manage entries from `/admin` → Gallery (images + captions stored under `content/gallery/`).
- Uploaded media is stored in Cloudinary; the gallery page reads directly from these Markdown files.

### News updates

- Manage posts from `/admin` → News (Markdown files stored under `content/news/`).
- Each post supports title, publish date, cover image, summary, and rich body content.

## Content structure

- Markdown pages: `content/pages/about.md`
- Gallery entries: `content/gallery/*.md`
- News posts: `content/news/*.md`
- Public assets: `public/`
- Markdown utilities: `app/components/md.ts`

## Accessibility & Performance

- Semantic landmarks (header, main, footer) and skip link in layout.
- Tailwind theme ensures contrast and focus styles.
- Images marked `loading="lazy"` to boost performance.
- Sitemap and robots.txt available under `public/` for SEO.

## Admin protection

- Consider protecting `/admin` with Cloudflare Access or an email allowlist.

## Testing checklist

- `npm run lint`
- `npm run build`
- Run Lighthouse audits (Perf, Access, SEO ≥ 90) on `/`, `/about`, `/gallery`.
- Submit the Formspree form (use their test endpoint while configuring).
- Validate that Decap CMS can authenticate and save updates to the repo.
