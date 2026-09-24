// One-off image optimiser for concept images.
//
// Why this exists: our generated concept images shipped as ~2 MB PNGs, which makes a
// page we sell as "simple and fast" slow on a phone. Run this after adding any new
// image to public/images/ so we never ship multi-megabyte pictures again.
//
//   bun run scripts/optimize-images.ts
//
// It writes a .webp next to each .png (max 1600px wide, quality 80) and prints the
// before/after sizes. References in src/data/businesses.ts point at the .webp files.
import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const DIR = "public/images";
const MAX_WIDTH = 1600;
const QUALITY = 80;

const kb = (n: number) => `${(n / 1024).toFixed(0)} KB`;

const entries = await readdir(DIR);
const pngs = entries.filter((f) => f.toLowerCase().endsWith(".png"));

if (pngs.length === 0) {
  console.log(`No .png files in ${DIR} — nothing to do.`);
}

for (const file of pngs) {
  const src = join(DIR, file);
  const out = join(DIR, file.replace(/\.png$/i, ".webp"));
  const before = (await stat(src)).size;

  const image = sharp(src);
  const meta = await image.metadata();

  await image
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);

  const after = (await stat(out)).size;
  const saved = ((1 - after / before) * 100).toFixed(1);
  console.log(
    `${file} ${meta.width}x${meta.height} ${kb(before)}  ->  ${out.replace(/^.*\//, "")} ${kb(after)}  (-${saved}%)`,
  );
}

console.log("\nNow point the config at the .webp files and remove the .png originals.");
