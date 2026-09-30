# Customer site starter

This directory is a **copy-and-adapt starter**, not a route or component imported by
Cream City Web Co.'s own site. Copy its contents into a new customer repository. The
starter's structure is reusable; its look and all placeholder copy must be replaced
for each customer so no two client sites share a visual identity.

## What is here

- `data/business.json` — the one place to enter the customer's name, phone, address,
  short description, and canonical site URL. The build script derives the `tel:` value
  and Google Maps directions URL from these fields, so do not repeat business facts in
  links or templates.
- `templates/` — a home page plus optional Services and Contact pages, and a 404 page.
  Each template has a `starter-meta` comment containing its title, description, path,
  and a per-page `noindex` switch. Edit that switch to `true` for a public concept
  preview. **A public URL is still accessible: `noindex` only asks search engines not
  to index it; it is not privacy or access control.**
- `styles/placeholder.css` — intentionally neutral placeholder CSS. It is labelled
  throughout and must be replaced or substantially redesigned for the customer.
- `scripts/build-starter.ts` — a build-time-only Bun script. It emits plain HTML and
  assets; it adds no runtime JavaScript and has no package dependencies.

## New customer repo checklist

1. Copy `starter/.` into the new customer repository (so `scripts/`, `templates/`,
   `styles/`, and `data/` are at the repository root).
2. Edit `data/business.json`: enter the business **once** for `name`, `phone`,
   `address`, `description`, and `siteUrl`. Use confirmed facts only.
3. Replace the placeholder look and copy. Do not leave the yellow placeholder notices,
   placeholder service cards, or the placeholder stylesheet as the finished design.
   Keep the skip link, landmark structure, visible focus styles, readable contrast,
   and meaningful image alt text.
4. If this is a public concept preview, set `"noindex": true` in that page's
   `starter-meta` comment. Remember: public plus `noindex` is not private.
5. Build the static files: `bun scripts/build-starter.ts`. The generated output is
   `index.html`, `services/index.html`, `contact/index.html`, `404.html`,
   `styles.css`, `robots.txt`, `sitemap.xml`, and `_redirects`.
6. Optimise every image before committing it: `bun run scripts/optimize-images.ts`.
   Each image must be `.webp`, under about 150 KB, with a longest edge of at most
   1600 px. Write useful alt text; never use a filename or generic "image" as alt text.
7. Connect the repository to Cloudflare Pages. Routine pushes can deploy from the
   default branch. The owner's manual step is creating the Cloudflare Pages project
   and connecting the customer's own domain.
8. Verify the output locally and review every business fact, link, title, canonical,
   and image before asking for approval to publish.

## Static hosting recipe

This is deliberately a zero-client-JavaScript site: the Bun script runs before
shipping, and the generated pages use ordinary HTML/CSS links. Do not add hydration,
analytics bundles, or interactive client code to the standard informational package.

- `404.html` is the real fallback page.
- `robots.txt` points crawlers to the generated sitemap.
- `sitemap.xml` lists the home, Services, and Contact URLs. Remove optional pages from
  it if they are not used.
- `_redirects` normalises extensionless section paths **before** the catch-all 404 rule:
  `/services` to `/services/`, `/contact` to `/contact/`, then `/* /404.html 404`.
  Keep the trailing-slash rules above the catch-all; otherwise the catch-all can swallow
  the normalisation redirect. Add any new section's redirect before the catch-all.
- Cloudflare Pages serves `index.html` for `/` and the section `index.html` files for
  their slash URLs. The owner's domain connection is still a manual dashboard step.

## Accessibility and content guardrails

The skeleton includes a skip link, `header`/`nav`/`main`/`footer` landmarks, a labelled
primary navigation, visible keyboard focus styles, and dark default text on a light
background. Keep those basics when redesigning. Every non-decorative image needs
specific alt text describing what a visitor needs to know; decorative images should
use `alt=""`. Never invent hours, services, addresses, phone numbers, awards, or claims.
