'use client';

import { useEffect, useRef } from 'react';
import * as h337 from 'heatmap.js';

type ClickPoint = {
  x: number;
  y: number;
  value: number;
};

type HeatmapOverlayProps = {
  data: ClickPoint[];
  imageSrc: string; // 🔥 Path to screenshot, e.g. '/screenshots/some-page.png'
  width: number;    // Must match Puppeteer viewport width
  height: number;   // Must match Puppeteer viewport height
};

export default function HeatmapOverlay({ data, imageSrc, width, height }: HeatmapOverlayProps) {
  const heatmapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heatmapContainerRef.current) return;

    const heatmapInstance = h337.create({
      container: heatmapContainerRef.current,
      radius: 40,
      maxOpacity: 0.6,
      minOpacity: 0,
      blur: 0.9,
    });

    heatmapInstance.setData({
      max: 10,
      data,
    });
  }, [data]);

  return (
    <div
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top left',
      }}
      ref={heatmapContainerRef}
    />
  );
}
