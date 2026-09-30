/**
 * Build the starter's copy-and-adapt HTML into a plain static site.
 * This runs at build time only; generated pages contain no client JavaScript.
 *
 * Usage after copying starter/* into a customer repo:
 *   bun scripts/build-starter.ts
 *   bun scripts/build-starter.ts --out-dir /tmp/customer-site
 */
import {
  mkdir,
  readFile,
  readdir,
  writeFile,
  copyFile,
} from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

type Business = {
  name: string;
  phone: string;
  address: string;
  description: string;
  siteUrl: string;
};
type PageMeta = {
  path: string;
  title: string;
  description: string;
  noindex: boolean;
};

const starterRoot = resolve(import.meta.dir, "..");
const args = process.argv.slice(2);
const outIndex = args.indexOf("--out-dir");
const outDir = resolve(
  outIndex === -1 ? starterRoot : (args[outIndex + 1] ?? starterRoot),
);
const business = JSON.parse(
  await readFile(join(starterRoot, "data", "business.json"), "utf8"),
) as Business;
const canonicalBase = business.siteUrl.replace(/\/+$/, "");
const phoneTel = business.phone.replace(/[^+\d]/g, "");
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`;
const htmlEscape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
const textValues: Record<string, string> = {
  businessName: htmlEscape(business.name),
  businessDescription: htmlEscape(business.description),
  businessAddress: htmlEscape(business.address),
  phoneDisplay: htmlEscape(business.phone),
  phoneTel: htmlEscape(phoneTel),
  mapsUrl: htmlEscape(mapsUrl),
};
const tokenise = (value: string, page: PageMeta) =>
  value
    .replaceAll("BUSINESS_NAME", textValues.businessName)
    .replaceAll("BUSINESS_DESCRIPTION", textValues.businessDescription)
    .replaceAll("{{businessName}}", textValues.businessName)
    .replaceAll("{{businessDescription}}", textValues.businessDescription)
    .replaceAll("{{businessAddress}}", textValues.businessAddress)
    .replaceAll("{{phoneDisplay}}", textValues.phoneDisplay)
    .replaceAll("{{phoneTel}}", textValues.phoneTel)
    .replaceAll("{{mapsUrl}}", textValues.mapsUrl)
    .replaceAll(
      "{{pageTitle}}",
      htmlEscape(page.title.replaceAll("BUSINESS_NAME", business.name)),
    )
    .replaceAll(
      "{{pageDescription}}",
      htmlEscape(
        page.description
          .replaceAll("BUSINESS_NAME", business.name)
          .replaceAll("BUSINESS_DESCRIPTION", business.description),
      ),
    )
    .replaceAll(
      "{{canonicalUrl}}",
      htmlEscape(`${canonicalBase}${page.path === "/" ? "/" : page.path}`),
    )
    .replaceAll(
      "{{robotsMeta}}",
      page.noindex
        ? '<meta name="robots" content="noindex, nofollow, noarchive" />'
        : "",
    );

function parseMeta(source: string, file: string): PageMeta {
  const match = source.match(/^<!-- starter-meta: (.+) -->/);
  if (!match) throw new Error(`${file}: missing starter-meta comment`);
  const meta = JSON.parse(match[1]) as PageMeta;
  if (!meta.path.startsWith("/"))
    throw new Error(`${file}: path must start with /`);
  return meta;
}

const templateDir = join(starterRoot, "templates");
const templateFiles = (await readdir(templateDir)).filter((file) =>
  file.endsWith(".html"),
);
for (const file of templateFiles) {
  const source = await readFile(join(templateDir, file), "utf8");
  const page = parseMeta(source, file);
  const outputName =
    page.path === "/"
      ? "index.html"
      : page.path === "/404.html"
        ? "404.html"
        : join(page.path.replace(/^\//, ""), "index.html");
  const outputPath = join(outDir, outputName);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(
    outputPath,
    tokenise(source.replace(/^<!-- starter-meta: .+ -->\n/, ""), page),
  );
}
await mkdir(outDir, { recursive: true });
await copyFile(
  join(starterRoot, "styles", "placeholder.css"),
  join(outDir, "styles.css"),
);
await writeFile(
  join(outDir, "robots.txt"),
  `User-agent: *\nSitemap: ${canonicalBase}/sitemap.xml\n`,
);
await writeFile(
  join(outDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${["/", "/services/", "/contact/"].map((path) => `  <url><loc>${canonicalBase}${path}</loc></url>`).join("\n")}\n</urlset>\n`,
);
await writeFile(
  join(outDir, "_redirects"),
  "/services /services/ 301\n/contact /contact/ 301\n/* /404.html 404\n",
);
console.log(
  `Built ${templateFiles.length} HTML pages plus styles.css, robots.txt, sitemap.xml, and _redirects in ${outDir}`,
);
