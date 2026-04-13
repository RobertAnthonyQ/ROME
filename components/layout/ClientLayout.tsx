"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { DotGrid } from "@/components/effects/DotGrid";
import { NoiseOverlay } from "@/components/effects/NoiseOverlay";
import { CustomCursor } from "@/components/effects/CustomCursor";

gsap.registerPlugin(ScrollTrigger);

export function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf as any);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-accent selection:text-bg-primary">
      <DotGrid />
      <NoiseOverlay />
      <CustomCursor />
      <main className="relative z-10">{children}</main>
      <WhatsAppButton />
    </div>
  );
}
