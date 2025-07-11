import HeatmapOverlay from '../../components/heatmap-overlay';
import data from '../data/clicks.json';

export default function HeatmapPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <HeatmapOverlay
        data={data}
        imageSrc="/screenshots/about.png" // 👈 PNG screenshot from Puppeteer
        width={1440}
        height={900}
      />
    </div>
  );
}