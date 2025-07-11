import HeatmapOverlay from '../../components/heatmap-overlay';

export default function HeatmapDynamic(){
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