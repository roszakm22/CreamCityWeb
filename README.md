# Cream City Web Co.

This repository holds Cream City Web Co.'s own agency page, the reusable website template, and private concept work for prospective businesses. Pre-sale concepts live under `previews/<slug>/`. Work sold to a customer but not yet live lives under `customers/<slug>/`; these are working folders, not live customer sites.

## Three stages

1. **Pre-sale concept:** a prospect's unofficial concept is developed here under `previews/<slug>/`.
2. **Sold, not yet live:** approved customer work remains here under `customers/<slug>/` while it is being prepared.
3. **Go-live:** the customer receives a separate repository and their own Cloudflare project. The copy in this repository is archived and never edited again. There is one site and one source of truth; we do not maintain drifting copies.

## Adding a concept

Add a business configuration entry to `src/data/businesses.ts`, then add a small route file under `src/routes/previews/` that passes the config to the reusable `BusinessTemplate`. Keep concept routes labeled unofficial and marked `noindex`.

Build locally with `bun run build`. The connected working site is served by the platform; do not commit `node_modules`, build output, runtime files, generated route trees, or secrets.
