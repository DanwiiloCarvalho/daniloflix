# AGENTS.md

React 18 + TypeScript SPA (Vite 4) that fetches data from the TMDB API and deploys to GitHub Pages. UI copy is Portuguese (pt-BR).

## Commands

- `npm run dev` — Vite dev server at `http://127.0.0.1:5173/daniloflix/` (host pinned to 127.0.0.1)
- `npm test` — vitest in **watch mode** (never exits). For a one-shot run use `npx vitest run <path-to-spec>`; to run one file, pass its path directly.
- `npm run lint` — eslint with `--max-warnings 0` (zero warnings tolerated)
- `npm run build` — `tsc && vite build`; this is the typecheck + build (there is no standalone typecheck script). TypeScript is strict with `noUnusedLocals`/`noUnusedParameters`.
- `npm run deploy` — deploys `dist/` to GitHub Pages; CI also builds+deploys on push to `main` (`.github/workflows/deploy.yml`). Required order when touching code: `npm run lint` → `npx vitest run` → `npm run build`.

## Architecture

- App is served under the `/daniloflix/` base path (`base` in `vite.config.ts`). Routes in `src/Router/index.tsx` hardcode the `/daniloflix/` prefix — keep it in sync with `base`.
- Folder-per-component pattern: each component/page lives in `src/{Components,Pages}/<Name>/` with `index.tsx`, `Name.module.css` (CSS Modules), and a co-located `*.spec.tsx`.
- No service/data layer: components call `fetch` directly and read config from `import.meta.env.VITE_*`. Test components directly with `MemoryRouter`, not the app router.

## Env config gotcha

TMDB config `VITE_*` values (incl. the API key) are duplicated in three places: `.env` (committed), `vitest.config.ts` `test.env` (only `VITE_IMAGE` is set there; other vars come from `.env`), and `cypress.config.ts`. Changing a VITE_* value requires updating all three.

## Tests

- Vitest with globals + jsdom; specs must match `src/**/*.spec.{tsx,ts}`. Setup in `vitest-setup.ts` (jest-dom + auto cleanup).
- Tests mock `global.fetch` directly per test (`vi.fn()` / `vi.stubGlobal`) — no MSW or mock server.
- Cypress e2e baseUrl is `http://localhost:5173` (works with the 127.0.0.1 dev server).

## Docker

- `Dockerfile` builds `dist/` then serves it via `vite preview --host 0.0.0.0` on port 4173. `docker-compose.yml` maps host `8080:4173`. Env vars are baked at build time (commented-out examples in compose); the container doesn't re-inject env at runtime.