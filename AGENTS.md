# AGENTS.md

IA Know: AI and LLM knowledge base for developers, in Portuguese (pt-BR), built as a static site with VitePress.

## Stack

- VitePress 1.x (Vue-based static site generator), Markdown content, JavaScript config
- Docker image served by nginx (`Dockerfile`, `docker/nginx.conf`)
- npm with `package-lock.json`

## Commands

```bash
npm install
npm run docs:dev       # dev server, http://localhost:5173
npm run docs:build     # static build into docs/.vitepress/dist
npm run docs:preview   # serve the production build
```

No lint, test or format script exists in `package.json`.

## Structure

- `docs/` - all content, in Markdown; sections: `llm/`, `agentes/`, `agi/`, `ferramentas/`, `praticas/`
- `docs/.vitepress/config.js` - VitePress config: sidebar and nav
- `docs/papers/ia-llms.json` and `ia-llms.md` - papers list
- `docs/glossario.md`, `docs/resumo.md`, `docs/index.md` - entry pages
- `docs/PROJECT_HEALTH.md` - repository health record
- `.github/workflows/` - `validate.yml`, `security.yml`, `sast.yml` (reusable from `juninmd/base-actions`), `deploy.yml` (Docker image on push to `main` or `master`), `release-drafter.yml`

## Conventions

- Content lives in `docs/`; navigation changes go in `docs/.vitepress/config.js`.
- Content is in Portuguese (pt-BR) for the Brazilian developer community.

<!-- base-actions-main-policy -->
## GitHub Actions — padrão obrigatório (@main)

- Referencie as actions internas sempre pelo branch, nunca por SHA:
  - `uses: juninmd/base-actions/<action>@main`
  - `uses: juninmd/base-actions/.github/workflows/<arquivo>.yml@main`
- Não fixe `@<sha>` em `juninmd/base-actions`: a atualização é centralizada no
  `main` e passa a valer no próximo run.
- PRs cujos checks não iniciam por billing/spending limit são mesclados pelo bot central
  `juninmd/base-actions/.github/workflows/auto-merge-billing-blocked.yml`.
  Para impedir o merge automático de um PR, aplique a label `do-not-merge`.

## Gotchas

- Run `npm run docs:build` before opening a PR that changes navigation or many pages, to check the build locally.
- `docs/.vitepress/dist` is build output and is not committed.
