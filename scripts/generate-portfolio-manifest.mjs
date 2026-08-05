// Escanea public/Assets/Portafolio/{folder}/03_WEB y genera un manifest
// tecnico (dimensiones + tiers disponibles) para lib/portfolio.
// Se regenera cada vez que cambian los assets: npm run portfolio:manifest
import { readdirSync, statSync, writeFileSync } from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = path.resolve("public/Assets/Portafolio");
const OUT = path.resolve("lib/portfolio/manifest.generated.json");
const TIERS = ["mobile", "tablet", "desktop"];

const CATEGORY_BY_FOLDER = {
  "01_fotografías": "fotografia",
  "02_renders": "render",
  "03_obra": "obra",
};

function isDir(p) {
  return statSync(p).isDirectory();
}

function findCategory(selectDir, base) {
  for (const entry of readdirSync(selectDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const category = CATEGORY_BY_FOLDER[entry.name.toLowerCase()];
    if (!category) continue;
    const dir = path.join(selectDir, entry.name);
    const hit = readdirSync(dir).some(
      (f) => path.basename(f, path.extname(f)) === base
    );
    if (hit) return category;
  }
  return null;
}

const manifest = {};

for (const folder of readdirSync(ROOT)) {
  const projectDir = path.join(ROOT, folder);
  if (!isDir(projectDir)) continue;

  const webDir = path.join(projectDir, "03_WEB");
  const selectDir = path.join(projectDir, "02_Select");
  try {
    if (!isDir(webDir)) continue;
  } catch {
    continue;
  }

  const byBase = {};
  for (const file of readdirSync(webDir)) {
    const ext = path.extname(file).toLowerCase();
    if (ext !== ".webp") continue; // avif comparte dimensiones, basta 1 formato
    const stem = path.basename(file, ext);
    const match = TIERS.map((t) => `-${t}`).find((suffix) =>
      stem.endsWith(suffix)
    );
    if (!match) continue;
    const tier = match.slice(1);
    const base = stem.slice(0, -match.length);
    byBase[base] ??= {};
    const meta = sharp(path.join(webDir, file)).metadata();
    byBase[base][tier] = meta; // promise, resolved below
  }

  const resolvedEntries = await Promise.all(
    Object.entries(byBase).map(async ([base, tiers]) => {
      const resolvedTiers = {};
      for (const tier of TIERS) {
        if (!tiers[tier]) continue;
        const meta = await tiers[tier];
        resolvedTiers[tier] = { width: meta.width, height: meta.height };
      }
      const desktop =
        resolvedTiers.desktop ?? resolvedTiers.tablet ?? resolvedTiers.mobile;
      const category = findCategory(selectDir, base);
      return [
        base,
        {
          category,
          width: desktop.width,
          height: desktop.height,
          tiers: resolvedTiers,
        },
      ];
    })
  );

  manifest[folder] = Object.fromEntries(
    resolvedEntries.sort(([a], [b]) => a.localeCompare(b))
  );
}

writeFileSync(OUT, JSON.stringify(manifest, null, 2) + "\n");

const totalImages = Object.values(manifest).reduce(
  (sum, project) => sum + Object.keys(project).length,
  0
);
console.log(
  `Manifest generado: ${Object.keys(manifest).length} proyectos, ${totalImages} imagenes -> ${path.relative(process.cwd(), OUT)}`
);
