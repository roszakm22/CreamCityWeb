# Static hosting verification

Verified 2026-09-24 on branch `feat/static-pages-verification`.

## Result

The site can be exported as ordinary static files. TanStack Start's Vite plugin prerenders all three current routes into `dist/client/`:

```text
dist/client/index.html
dist/client/previews/mr-clean/index.html
dist/client/previews/time-to-cut/index.html
dist/client/assets/...
dist/client/images/*.webp
```

The server bundle in `dist/server/` is still produced because the private preview workflow uses it. It is not part of the static Cloudflare Pages upload.

## Build command

From the repository root:

```bash
bun run build
```

The `tanstackStart` plugin in `vite.config.ts` enables:

```ts
prerender: {
  enabled: true,
  crawlLinks: true,
  failOnError: true,
}
```

The build log must end with all three routes listed under `Prerendered`.

## Cloudflare Pages settings

For a Git-connected Cloudflare Pages project, use:

- **Build command:** `bun run build`
- **Build output directory:** `dist/client`
- **Root directory:** `/` (repository root)
- **Functions directory:** leave unset; this package is static and does not use Pages Functions
- **Node/Bun runtime:** use the repository's Bun lockfile/package-manager detection; no SSR process is required at runtime

Cloudflare's build-configuration documentation explains the build command and output-directory fields:

- https://developers.cloudflare.com/pages/configuration/build-configuration/

TanStack's static-prerendering documentation describes enabling prerendering in `vite.config.ts` and automatic route discovery:

- https://tanstack.com/router/latest/docs/framework/react/guide/static-prerendering

The Pages upload must be `dist/client`, not the repository's top-level `dist/`, because the latter also contains the SSR server bundle.

## Free-tier boundaries

This verification uses only static Pages hosting. It does not use Workers, Pages Functions, databases, or other paid products. Cloudflare's current Pages limits documentation is the source of truth for quotas:

- https://developers.cloudflare.com/pages/platform/limits/

Relevant limits to watch before quoting scale include the Free plan's 100 Pages projects per account, 500 builds per month, one concurrent build, 20,000 files per site, and 25 MiB maximum single asset. These are account/project limits, not an unlimited-scale promise.

## Local evidence

A plain Python file server was run against `dist/client` on port 4173 after stopping the local SSR preview wrapper. The three route URLs returned 200 and their HTML retained business names, phone links, directions links, `noindex` metadata, the unofficial-concept label, and the sticky mobile call bar. `.webp` image requests returned 200 with `image/webp`.

The private preview workflow was then restored with:

```bash
bash publish.sh
```

It continued to serve on port 3000. Preview routes redirect from a trailing slash to the canonical route without the slash; following that redirect returns 200.
