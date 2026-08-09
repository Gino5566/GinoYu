# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check with `vue-tsc -b`, then build to `dist/` (the build fails on any type error)
- `npm run preview` — serve the production build locally

There is no test runner or linter configured in this project.

## Architecture

Single-page portfolio site built with Vue 3 (`<script setup>` SFCs), TypeScript, Vue Router, and Vite.

- Entry: `src/main.ts` mounts `App.vue` with the router.
- `src/App.vue` is the shared layout: `<NavBar />`, a `<router-view />` inside `main.container`, and `<Footer />`. Page components under `src/pages/` (Home, Projects, About, Contact) render into the router view.
- Routes are declared in `src/router.ts` using `createWebHistory(import.meta.env.BASE_URL)`. When adding a page, add both the component under `src/pages/` and its route here.

## Deployment & base path

- `vite.config.ts` sets `base: '/GinoYu/'` because the site deploys to GitHub Pages at that sub-path. All router history and asset URLs derive from this base — changing the repo/Pages path means updating `base` here.
- `.github/workflows/deploy.yaml` builds and publishes `dist/` to GitHub Pages on push to the **`main`** branch. Note: active development happens on other branches (e.g. `FirstEditionDevelop`), so deploys only trigger after merging to `main`.

## Styling

- Tailwind CSS **v4** via the `@tailwindcss/vite` plugin (configured in `vite.config.ts`). Global stylesheet `src/style.css` is just `@import "tailwindcss";` — this is the v4 entry, not the v3 `@tailwind` directives.
- `tailwind.config.js` exists but v4 largely configures via CSS; prefer utility classes in templates. Some layout styling still lives in scoped/global `<style>` blocks (e.g. `.container` in `App.vue`).
