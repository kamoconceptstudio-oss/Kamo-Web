// Escanea public/Assets/Portafolio/{slug}/03_WEB y genera un manifest
// tecnico (dimensiones + tiers disponibles) para lib/portfolio.
// Se regenera cada vez que cambian los assets: npm run portfolio:manifest
//
// La carpeta publica esta nombrada por "slug" (identificador publico, ver
// lib/portfolio/projects.ts). Los originales (02_Select) viven fuera de
// public/ en assets-source/Portafolio/{codename}/02_Select, nombrados por el
// codename interno del cliente -- ese codename nunca debe volver a public/.
import { readdirSync, statSync, writeFileSync } from "fs";
import path from "path";
import sharp from "sharp";
import { projects } from "../lib/portfolio/projects.ts";

const WEB_ROOT = path.resolve("public/Assets/Portafolio");
const SOURCE_ROOT = path.resolve("assets-source/Portafolio");
const OUT = path.resolve("lib/portfolio/manifest.generated.json");
const TIERS = ["mobile", "tablet", "desktop"];

const CATEGORY_BY_FOLDER = {
  "01_fotografías": "fotografia",
  "02_renders": "render",
  "03_obra": "obra",
};

const SOURCE_FOLDER_BY_SLUG = Object.fromEntries(
  projects.map((p) => [p.slug, p.folder])
);

function isDir(p) {
  return statSync(p).isDirectory();
}

// Los nombres en 02_Select siguen el codename original ("thijs-hero-bano"),
// mientras que "base" ya viene con el prefijo del slug publico
// ("bano-cocina-contemporaneos-hero-bano"). Comparamos por el sufijo comun
// (todo lo que va detras del prefijo del proyecto) en vez de por nombre
// exacto, para no tener que tocar los originales.
function findCategory(slug, base) {
  const sourceFolder = SOURCE_FOLDER_BY_SLUG[slug];
  if (!sourceFolder) return null;
  const selectDir = path.join(SOURCE_ROOT, sourceFolder, "02_Select");
  try {
    if (!isDir(selectDir)) return null;
  } catch {
    return null;
  }
  const suffix = base.startsWith(`${slug}-`) ? base.slice(slug.length + 1) : base;
  for (const entry of readdirSync(selectDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const category = CATEGORY_BY_FOLDER[entry.name.toLowerCase()];
    if (!category) continue;
    const dir = path.join(selectDir, entry.name);
    const hit = readdirSync(dir).some((f) => {
      const name = path.basename(f, path.extname(f));
      return name === suffix || name.endsWith(`-${suffix}`);
    });
    if (hit) return category;
  }
  return null;
}

const manifest = {};

for (const slug of readdirSync(WEB_ROOT)) {
  const projectDir = path.join(WEB_ROOT, slug);
  if (!isDir(projectDir)) continue;

  const webDir = path.join(projectDir, "03_WEB");
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
      const category = findCategory(slug, base);
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

  manifest[slug] = Object.fromEntries(
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
