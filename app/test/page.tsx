"use client";

import Grainient from "@/components/shared/Grainient/Grainient";

export default function TestPage() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "fixed", inset: 0, zIndex: 9999 }}>
      <Grainient
        color1="#C6F135"
        color2="#0A2A00"
        color3="#0A0A0A"
        timeSpeed={0.25}
        colorBalance={0.0}
        warpStrength={1.0}
        warpFrequency={5.0}
        warpSpeed={2.0}
        warpAmplitude={50.0}
        blendAngle={0.0}
        blendSoftness={0.05}
        rotationAmount={500.0}
        noiseScale={2.0}
        grainAmount={0.1}
        grainScale={2.0}
        grainAnimated={false}
        contrast={1.5}
        gamma={1.0}
        saturation={1.0}
        zoom={0.9}
      />
    </div>
  );
}
