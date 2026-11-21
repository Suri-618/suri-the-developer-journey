// Builds optimized portrait assets from the original photos in the project root.
// pic1.jpeg = high-resolution source, pic.png = cutout/mask source (same framing).
// The cutout's alpha mask is upscaled and applied to the high-res photo so the face stays sharp.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const hi = sharp('pic1.jpeg');
const { width, height } = await hi.metadata();

const cutoutSource = await sharp('pic.png').raw().toBuffer({ resolveWithObject: true });
let alpha;

if (cutoutSource.info.channels === 4) {
  let minAlpha = 255;
  for (let i = 3; i < cutoutSource.data.length; i += 4) {
    if (cutoutSource.data[i] < minAlpha) minAlpha = cutoutSource.data[i];
  }
  if (minAlpha < 250) {
    alpha = (await sharp('pic.png')
      .ensureAlpha()
      .extractChannel('alpha')
      .resize(width, height, { kernel: 'lanczos3' })
      .blur(0.8)
      .raw()
      .toBuffer({ resolveWithObject: true })).data;
  }
}

if (!alpha) {
  const { data: src, info: srcInfo } = cutoutSource;
  const mask = Buffer.alloc(srcInfo.width * srcInfo.height);
  for (let i = 0; i < mask.length; i++) {
    const p = i * srcInfo.channels;
    const luma = src[p] * 0.299 + src[p + 1] * 0.587 + src[p + 2] * 0.114;
    mask[i] = Math.max(0, Math.min(255, Math.round((luma - 20) / 25 * 255)));
  }
  alpha = (await sharp(mask, { raw: { width: srcInfo.width, height: srcInfo.height, channels: 1 } })
    .greyscale()
    .resize(width, height, { kernel: 'lanczos3' })
    .blur(0.8)
    .raw()
    .toBuffer({ resolveWithObject: true })).data;
}

const rgb = await sharp('pic1.jpeg').removeAlpha().raw().toBuffer();
const rgba = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  rgba[i * 4] = rgb[i * 3];
  rgba[i * 4 + 1] = rgb[i * 3 + 1];
  rgba[i * 4 + 2] = rgb[i * 3 + 2];
  rgba[i * 4 + 3] = alpha[i];
}
const cutout = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();

for (const w of [1100, 720, 420]) {
  await sharp(cutout).resize({ width: w }).webp({ quality: 86, alphaQuality: 90 }).toFile(`${OUT}/portrait-${w}.webp`);
}

await sharp('pic1.jpeg').resize({ width: 800 }).webp({ quality: 85 }).toFile(`${OUT}/avatar.webp`);

// Social share image (1200x630) on a dark backdrop
const portrait = await sharp(cutout).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="128" fill="#f4f1ec" letter-spacing="4">SURI</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE DEVELOPER JOURNEY</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">SOFTWARE DEVELOPER • AI / ML • OPEN SOURCE</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);
console.log('images built');
