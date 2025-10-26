# Ajita Manochetana Website

Static Next.js site for Ajita Manochetana, a special school in Bengaluru. The site is CSR-ready, editable via Decap CMS, and optimised for deployment on Cloudflare Pages.

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

- Build: `npm run build` (runs `next build && next export`, output in `out/`).
- Deploy to Cloudflare Pages with:
  - Build command: `npm run build`
  - Output directory: `out`
  - Node.js version: 18+
- Configure the same environment variables in Cloudflare Pages → Settings → Environment Variables.

## Editing via Decap CMS

1. Ensure GitHub OAuth app is configured for the repo and update `public/admin/config.yml` with the correct `repo`, `cloud_name`, and `api_key`.
2. Visit `/admin` on the deployed site and log in with GitHub.
3. Pages → edit Markdown files (About, Programs, Facilities, Admissions, CSR).
4. News → create, edit, or delete posts. Publish to commit changes back to the repo.

### Media & images

- Upload images through the Cloudinary media library in the CMS.
- Recommended format: landscape JPG/PNG, 1600px wide, ≤ 300KB.
- Optimise images before upload to keep the site fast.

### CSR PDFs

- Place documents in `public/docs/` (e.g., `public/docs/registration-pan.pdf`).
- Update links on the CSR page Markdown or directly in the page component if structure changes.

### News posts

- Each post lives in `content/news/*.md` with frontmatter fields: `title`, `date`, `cover`, optional `summary`.
- Use `/admin` → News to create or update posts; Decap will commit Markdown files automatically.

### Gallery updates

- Edit `app/(site)/gallery/page.tsx` to update albums or image lists.
- Use Cloudinary URLs (ensure they are set to `delivery type: secure`), and keep using `loading="lazy"` for performance.
- Longer-term, migrate albums into a Decap collection if needed.

## Content structure

- Markdown pages: `content/pages/*.md`
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
- Run Lighthouse audits (Perf, Access, SEO ≥ 90) on `/`, `/about`, `/csr`, `/news/<slug>`.
- Submit the Formspree form (use their test endpoint while configuring).
- Validate that Decap CMS can authenticate and save updates to the repo.
