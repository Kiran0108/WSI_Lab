import { Vector2 } from "@/utils/vec";
import { useEffect, useRef, useState } from "react";

export const defaultOptions = {
  width: 900,
  height: 360,
  upscale: 0.12,
  rounded: 36,
  bubbleness: 0.9,
  displacementScale: 1.2,
  beforeBlur: 0.01,
  afterBlur: 24,
};

export type LiquidGlassOptions = typeof defaultOptions;

function createDisplacementImage(options: LiquidGlassOptions) {
  const w = Math.floor(options.width * options.upscale);
  const h = Math.floor(options.height * options.upscale);

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;

  const ctx = canvas.getContext("2d")!;
  const img = ctx.createImageData(w, h);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = x / w - 0.5;
      const dy = y / h - 0.5;
      const d = Math.sqrt(dx * dx + dy * dy);

      const strength = Math.max(0, 1 - d * options.bubbleness) * 255;

      const i = (y * w + x) * 4;
      img.data[i] = 128 + dx * strength;
      img.data[i + 1] = 128 + dy * strength;
      img.data[i + 2] = 0;
      img.data[i + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL();
}

export function LiquidGlass({
  options,
  children,
  className = "",
}: {
  options: LiquidGlassOptions;
  children?: React.ReactNode;
  className?: string;
}) {
  const [map, setMap] = useState<string>();

  useEffect(() => {
    setMap(createDisplacementImage(options));
  }, [options]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: options.width,
        height: options.height,
        borderRadius: options.rounded,
        backdropFilter: `url(#liquid) blur(${options.afterBlur}px)`,
      }}
    >
      {map && (
        <svg width="0" height="0">
          <filter id="liquid">
            <feImage href={map} result="map" />
            <feGaussianBlur stdDeviation={options.beforeBlur} />
            <feDisplacementMap
              in2="map"
              scale={options.displacementScale}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
      )}
      {children}
    </div>
  );
}