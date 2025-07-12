'use client';

import { useState } from 'react';
import HeatmapOverlayDynamic, { ClickPoint } from '../../components/heatmap-overlay-dynamic'

export default function HeatmapDynamicPage() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState<ClickPoint[]>([]);
  const [imagePath, setImagePath] = useState('');
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  function handleJsonUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string) as ClickPoint[];

        // Optional: check for consistent screen size
        const { screen_width, screen_height } = parsed[0];
        const consistent = parsed.every(p => p.screen_width === screen_width && p.screen_height === screen_height);
        if (!consistent) {
          alert('All data points must have the same screen dimensions');
          return;
        }

        setDimensions({ width: screen_width, height: screen_height });
        setData(parsed);
      } catch (err) {
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!dimensions.width || !dimensions.height || !url || data.length === 0) {
      alert('Please upload click data and enter a URL');
      return;
    }

    const response = await fetch('/api/capture-dynamic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url,
        width: dimensions.width,
        height: dimensions.height,
      }),
    });

    const result = await response.json();
    setImagePath(result.imagePath); // Ex: '/screenshots/ss_123456.png'
  }

  return (
    <div className="p-6 space-y-4">
      <input
        type="file"
        accept=".json"
        onChange={handleJsonUpload}
        className="w-full"
      />

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Website URL"
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2"
          disabled={!data.length || !url}
        >
          Capture Screenshot & Show Heatmap
        </button>
      </form>

      {data.length > 0 && imagePath && (
        <div className="pt-8">
          <HeatmapOverlayDynamic
            data={data}
            width={dimensions.width}
            height={dimensions.height}
            imageSrc={imagePath}
          />
        </div>
      )}
    </div>
  );
}
