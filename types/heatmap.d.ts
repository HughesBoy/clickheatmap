declare module 'heatmap.js' {
  namespace h337 {
    interface HeatmapConfiguration {
      container: HTMLElement;
      radius?: number;
      maxOpacity?: number;
      minOpacity?: number;
      blur?: number;
    }

    interface HeatmapDataPoint {
      x: number;
      y: number;
      value: number;
    }

    interface HeatmapData {
      max?: number;
      min?: number;
      data: HeatmapDataPoint[];
    }

    interface HeatmapInstance {
      setData(data: HeatmapData): void;
      addData(point: HeatmapDataPoint): void;
      repaint(): void;
    }

    function create(config: HeatmapConfiguration): HeatmapInstance;
  }

  export = h337;
}