// Genera propuestas de portada Open Graph (1200x630) a partir de la
// fotografía editorial del Hero y el logotipo de marca. Uso puntual para
// evaluar variantes en review/og-image/ antes de sustituir la portada
// definitiva en public/Assets/Brand/og-image.png.
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const W = 1200;
const H = 630;

const HERO = "public/Assets/Hero/hero-desktop.webp";
const LOGO_BLACK = "public/Assets/Brand/logo-horizontal.svg";
const LOGO_WHITE = "public/Assets/Brand/logo-horizontal-white.svg";

const OUT_DIR = "review/og-image";

const TAGLINE = "ESTUDIO DE INTERIORISMO RESIDENCIAL CONTEMPORÁNEO";

function taglineSvg({ width, color, fontSize = 20, letterSpacing = 4 }) {
  return Buffer.from(`
    <svg width="${width}" height="60" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="20" font-family="Arial, sans-serif" font-size="${fontSize}"
        letter-spacing="${letterSpacing}" fill="${color}">${TAGLINE}</text>
    </svg>
  `);
}

async function variantFullBleed() {
  const heroBuf = await sharp(HERO)
    .resize(W, H, { fit: "cover", position: "left" })
    .toBuffer();

  const gradient = Buffer.from(`
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1c1917" stop-opacity="0" />
          <stop offset="45%" stop-color="#1c1917" stop-opacity="0" />
          <stop offset="100%" stop-color="#1c1917" stop-opacity="0.82" />
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#g)" />
    </svg>
  `);

  const logoWidth = 220;
  const logoHeight = Math.round((129 / 200) * logoWidth);
  const logoBuf = await sharp(LOGO_WHITE).resize(logoWidth).png().toBuffer();

  const marginX = 64;
  const logoY = H - 64 - 40 - logoHeight;

  const tagline = taglineSvg({ width: 700, color: "#f5f5f4", fontSize: 18, letterSpacing: 3 });

  return sharp(heroBuf)
    .composite([
      { input: gradient, left: 0, top: 0 },
      { input: logoBuf, left: marginX, top: logoY },
      { input: tagline, left: marginX + 2, top: H - 64 },
    ])
    .png()
    .toBuffer();
}

async function variantSplit() {
  const leftW = 552; // 46% — panel más ancho para dar más protagonismo a la marca
  const rightW = W - leftW;

  const bg = sharp({
    create: { width: W, height: H, channels: 3, background: "#fafaf9" },
  });

  const rightPhoto = await sharp(HERO)
    .resize(rightW, H, { fit: "cover", position: "left" })
    .toBuffer();

  const logoWidth = 280; // ~17% más grande que la propuesta inicial (240)
  const logoHeight = Math.round((129 / 200) * logoWidth);
  const logoBuf = await sharp(LOGO_BLACK).resize(logoWidth).png().toBuffer();

  const contentX = 64;
  const contentWidth = leftW - contentX * 2;

  const taglineLines = [
    "ESTUDIO DE INTERIORISMO",
    "RESIDENCIAL CONTEMPORÁNEO",
  ];
  const gapAfterLogo = 32;
  const taglineSvgMulti = Buffer.from(`
    <svg width="${contentWidth}" height="74" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="22" font-family="Arial, sans-serif" font-size="17"
        letter-spacing="3.5" fill="#a8a29e">${taglineLines[0]}</text>
      <text x="0" y="54" font-family="Arial, sans-serif" font-size="17"
        letter-spacing="3.5" fill="#a8a29e">${taglineLines[1]}</text>
    </svg>
  `);

  const blockHeight = logoHeight + gapAfterLogo + 64;
  const logoY = Math.round((H - blockHeight) / 2);
  const taglineY = logoY + logoHeight + gapAfterLogo;

  return bg
    .composite([
      { input: rightPhoto, left: leftW, top: 0 },
      { input: logoBuf, left: contentX, top: logoY },
      { input: taglineSvgMulti, left: contentX, top: taglineY },
    ])
    .png()
    .toBuffer();
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const [fullBleed, split] = await Promise.all([
    variantFullBleed(),
    variantSplit(),
  ]);

  await sharp(fullBleed).toFile(`${OUT_DIR}/variante-a-full-bleed.png`);
  await sharp(split).toFile(`${OUT_DIR}/variante-b-split-refinada.png`);

  console.log("OK:", `${OUT_DIR}/variante-a-full-bleed.png`, `${OUT_DIR}/variante-b-split-refinada.png`);
}

main();
