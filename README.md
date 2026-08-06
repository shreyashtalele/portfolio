# Shreyash Talele — Portfolio (Next.js)

Rebuilt from the original static HTML template into **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, with content pulled from your resume. Same dark, editorial visual style as the original — Fraunces display type, Inter body, IBM Plex Mono for labels, sage-green accent.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Before you publish — a few TODOs

1. **Email** — `components/data.ts` has a placeholder email (`your.email@example.com`). Replace it with your real address.
2. **Company name** — the internship entry in `components/data.ts` (`experience`) uses a placeholder company name since it wasn't in your resume. Swap in the real one.
3. **Photo** — replace the `[ Your photo here ]` placeholder in `components/Hero.tsx` with a real `<Image />` (use `next/image` and drop your photo in `/public`).
4. **Project thumbnails** — each card in `components/Work.tsx` currently shows a placeholder pattern. Add real screenshots to `/public` and swap in `<Image />` tags.
5. **Résumé download** — the "Download résumé" button in `components/Contact.tsx` points to `#`. Add your résumé PDF to `/public` and link it, e.g. `href="/resume.pdf"`.

## Project structure

```
app/
  layout.tsx      — fonts, metadata, global shell
  page.tsx         — assembles all sections
  globals.css       — Tailwind entrypoint + a couple of custom patterns
components/
  data.ts           — all your content lives here (name, projects, skills, experience)
  Header.tsx        — sticky nav with mobile menu
  Hero.tsx
  About.tsx
  Work.tsx          — project grid
  Skills.tsx
  Experience.tsx
  Contact.tsx
  Footer.tsx
```

Everything you'd want to edit content-wise is in **`components/data.ts`** — you shouldn't need to touch the component files unless you want to change layout or styling.

## Deploying

This is a standard Next.js app — deploys cleanly to [Vercel](https://vercel.com) (`vercel deploy`) or Netlify.
