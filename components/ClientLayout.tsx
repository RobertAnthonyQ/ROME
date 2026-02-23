"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion } from "motion/react";
import { WhatsAppButton } from "./WhatsAppButton";

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

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
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

function DotGrid() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(198, 241, 53, 0.025) 1.5px, transparent 1.5px)",
        backgroundSize: "32px 32px",
      }}
    />
  );
}

function NoiseOverlay() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03]">
      <svg width="100%" height="100%">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves={4}
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia("(pointer: fine)").matches);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isDesktop) {
      window.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-[10px] h-[10px] bg-accent rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-[36px] h-[36px] border border-accent rounded-full pointer-events-none z-[99] mix-blend-difference"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.12 }}
      />
    </>
  );
}
