// components/HeatmapOverlayDynamic.tsx
'use client';

import { useEffect, useRef } from 'react';
import * as h337 from 'heatmap.js';

export type ClickPoint = {
  x: number;
  y: number;
  value: number;
  screen_width: number;
  screen_height: number;
};

type Props = {
  data: ClickPoint[];
  width: number;
  height: number;
  imageSrc: string;
};

export default function HeatmapOverlayDynamic({ data, width, height, imageSrc }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const heatmap = h337.create({
      container: containerRef.current,
      radius: 40,
      maxOpacity: 0.6,
      minOpacity: 0,
      blur: 0.9,
    });

    heatmap.setData({ max: 10, data });
  }, [data]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top left',
        border: '2px solid #ccc',
      }}
    />
  );
}
