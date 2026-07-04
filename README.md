# michaelcastilla.com

Portfolio site for Michael L. Castilla — GTM Engineer.

## Stack

- React 17 + React Router 5
- Webpack 5 + Babel
- Sass
- Supabase (data)
- PostHog (analytics)
- Firebase Hosting

## Dev

```bash
pnpm install
pnpm start
```

## Build & deploy

```bash
pnpm run build
firebase deploy
```

## Env

Create a `.env` file at the root:

```
SUPABASE_URL=
SUPABASE_ANON_KEY=
POSTHOG_API_KEY=
```
