import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const clientDir = join(import.meta.dirname, "..", "dist", "client");

async function htmlFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await htmlFiles(path)));
    } else if (entry.name.endsWith(".html")) {
      files.push(path);
    }
  }

  return files;
}

const files = await htmlFiles(clientDir);
let changed = 0;

for (const file of files) {
  const before = await readFile(file, "utf8");
  const after = before
    // These prerendered pages are deliberately static: no hydration or
    // client-side route manifest is needed for their plain HTML links.
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(
      /<link\b[^>]*\brel=["'][^"']*modulepreload[^"']*["'][^>]*\/?>/gi,
      "",
    );

  if (after !== before) {
    await writeFile(file, after);
    changed += 1;
  }
}

console.log(`Removed client scripts and modulepreloads from ${changed} prerendered HTML files.`);
