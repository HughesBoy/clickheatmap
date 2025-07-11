import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url = 'https://glenhughes.dev/about';
const viewport = { width: 1440, height: 900 };
const screenshotName = 'about.png';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport(viewport);
  await page.goto(url, { waitUntil: 'networkidle0' });

  const outputPath = path.resolve('public', 'screenshots', screenshotName) as `${string}.png`;

  await fs.promises.mkdir(path.dirname(outputPath), { recursive: true });

  await page.screenshot({ path: outputPath, fullPage: false });

  await browser.close();
  console.log(`✅ Screenshot saved to ${outputPath}`);
})();
