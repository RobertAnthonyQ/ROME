"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const isDesktop = useRef(true);

  useEffect(() => {
    isDesktop.current = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop.current || !dotRef.current || !ringRef.current) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    const xDot = gsap.quickTo(dot, "x", { duration: 0, ease: "none" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0, ease: "none" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.15, ease: "power3.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.15, ease: "power3.out" });

    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      xDot(e.clientX - 5);
      yDot(e.clientY - 5);
      xRing(e.clientX - 18);
      yRing(e.clientY - 18);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[10px] h-[10px] bg-accent rounded-full pointer-events-none z-[100] mix-blend-difference"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[36px] h-[36px] border border-accent rounded-full pointer-events-none z-[99] mix-blend-difference"
      />
    </>
  );
}
