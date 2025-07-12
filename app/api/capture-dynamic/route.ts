// app/api/capture-dynamic/route.ts
import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { url, width, height } = await req.json();

    const parsedWidth = parseInt(width);
    const parsedHeight = parseInt(height);

    if (isNaN(parsedWidth) || isNaN(parsedHeight)) {
      return NextResponse.json({ error: 'Invalid screen dimensions' }, { status: 400 });
    }

    const filename = `ss_${Date.now()}.png`;
    const screenshotPath = path.resolve('./public/screenshots', filename);

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: parsedWidth, height: parsedHeight });
    await page.goto(url, { waitUntil: 'networkidle0' });

    await fs.mkdir(path.dirname(screenshotPath), { recursive: true });
    await page.screenshot({
      path: screenshotPath as `${string}.png`,
      fullPage: false,
    });

    await browser.close();

    return NextResponse.json({ imagePath: `/screenshots/${filename}` });
  } catch (err) {
    console.error('[capture-dynamic error]', err);
    return NextResponse.json({ error: 'Failed to capture screenshot' }, { status: 500 });
  }
}
