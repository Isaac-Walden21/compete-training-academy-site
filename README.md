# Compete Training Academy

High-impact React rebuild using Next.js App Router and TypeScript.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS + CSS variables
- Framer Motion
- React Hook Form + Zod
- Resend email integration
- Vercel Analytics
- Vitest + Playwright

## Run Locally

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY`
- `LEAD_TO_EMAIL`
- `LEAD_FROM_EMAIL`
- `CALENDLY_URL`
- `NEXT_PUBLIC_SITE_URL`

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run test
npm run test:e2e
```

## Key Paths

- App routes: `src/app`
- Reusable components: `src/components`
- Typed content: `src/content`
- Validation and helpers: `src/lib`
- API endpoint: `src/app/api/leads/route.ts`
- Placeholder asset manifest: `src/content/assets.ts`
- Imported source images: `public/images/source`

## Deployment

Deploy to Vercel and configure environment variables in project settings.
