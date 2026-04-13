"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CALENDLY_URL = "https://calendly.com/itsfashia/30min";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const textWrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const ctaPanelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const btnWrapRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !textRef.current || !ctaPanelRef.current) return;

      // === PHASE 1: Text zoom + bg color transition ===
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "50% top",
          scrub: 1,
          pin: textWrapRef.current,
          anticipatePin: 1,
        },
      });

      // Text scales from normal to massive
      textTl.fromTo(
        textRef.current,
        { scale: 1, opacity: 1, letterSpacing: "-0.04em" },
        { scale: 12, opacity: 0, letterSpacing: "0.3em", ease: "power2.in" },
        0
      );

      // Background: black → verde acido
      textTl.fromTo(
        sectionRef.current,
        { backgroundColor: "#0A0A0A" },
        { backgroundColor: "#C6F135", ease: "power1.in" },
        0
      );

      // Text color: verde → negro as bg changes
      textTl.fromTo(
        textRef.current,
        { color: "#C6F135" },
        { color: "#0A0A0A", ease: "none" },
        0
      );

      // Label fades out
      const label = sectionRef.current.querySelector(".cta-label");
      if (label) {
        textTl.to(label, { opacity: 0, y: -30, ease: "power2.in" }, 0);
      }

      // === PHASE 2: CTA panel reveal ===
      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaPanelRef.current,
          start: "top 90%",
          end: "top 20%",
          scrub: 1,
        },
      });

      // Panel entrance
      ctaTl.fromTo(
        ctaPanelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "none" },
        0
      );

      // Stagger reveal: line1, line2, button, line3, badge
      ctaTl.fromTo(
        line1Ref.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
        0.1
      );

      ctaTl.fromTo(
        line2Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
        0.2
      );

      ctaTl.fromTo(
        btnWrapRef.current,
        { y: 40, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.4)" },
        0.35
      );

      ctaTl.fromTo(
        line3Ref.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
        0.45
      );

      ctaTl.fromTo(
        badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
        0.55
      );
    },
    { scope: sectionRef }
  );

  // Magnetic button
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btnRef.current, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="relative bg-[#0A0A0A]"
    >
      {/* === PHASE 1: Zoom text === */}
      <div ref={textWrapRef} className="h-screen flex flex-col items-center justify-center relative z-10 overflow-hidden">
        <span className="cta-label font-mono text-[11px] text-accent/40 tracking-[0.14em] mb-10 uppercase">
          FIG_05 — SIGUIENTE PASO
        </span>

        <h2
          ref={textRef}
          className="font-display font-extrabold text-[56px] md:text-[90px] lg:text-[140px] leading-[0.9] tracking-[-0.04em] text-accent whitespace-nowrap pointer-events-none select-none"
        >
          &iquest;HABLAMOS?
        </h2>
      </div>

      {/* === PHASE 2: CTA panel with Calendly === */}
      <div
        ref={ctaPanelRef}
        className="min-h-screen flex flex-col items-center justify-center relative z-20 bg-accent"
      >
        {/* Noise texture overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
          <svg width="100%" height="100%">
            <filter id="noise-cta">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise-cta)" />
          </svg>
        </div>

        {/* Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
          <span className="font-display font-extrabold text-[30vw] text-[#b8e02f] opacity-[0.07] leading-none tracking-tighter whitespace-nowrap">
            ROME
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[800px] mx-auto">
          {/* Headline */}
          <div ref={line1Ref} className="mb-4">
            <span className="font-mono text-[11px] text-[#0A0A0A]/40 tracking-[0.14em] uppercase">
              AGENDA TU LLAMADA GRATIS
            </span>
          </div>

          <h3
            ref={line2Ref}
            className="font-display font-extrabold text-[40px] md:text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] text-[#0A0A0A] mb-10"
          >
            Tu web esta dejando
            <br />
            dinero sobre la mesa.
          </h3>

          {/* Calendly CTA button */}
          <div ref={btnWrapRef} className="mb-8">
            <a
              ref={btnRef}
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="group relative bg-[#0A0A0A] text-accent font-display font-bold text-[16px] lg:text-[20px] px-12 py-5 lg:px-16 lg:py-6 inline-flex items-center gap-3 transition-shadow duration-500 hover:shadow-[0_0_80px_rgba(10,10,10,0.3)]"
            >
              {/* Pulse ring */}
              <span className="absolute -inset-[3px] border-2 border-[#0A0A0A]/20 animate-pulse pointer-events-none" />

              {/* Calendar icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <circle cx="12" cy="16" r="1" fill="currentColor" />
              </svg>

              Agendar llamada gratuita

              {/* Arrow */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Supporting text */}
          <div ref={line3Ref} className="flex flex-col items-center gap-3 mb-8">
            <p className="font-sans text-[16px] lg:text-[18px] text-[#0A0A0A]/60 leading-[1.6] max-w-[480px]">
              30 minutos. Analizamos tu web, identificamos lo que la frena
              y te mostramos exactamente como la reconstruimos.
            </p>
          </div>

          {/* Trust badges */}
          <div ref={badgeRef} className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0A0A0A]/30" />
              <span className="font-mono text-[11px] text-[#0A0A0A]/40 tracking-[0.1em]">
                SIN COMPROMISO
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0A0A0A]/30" />
              <span className="font-mono text-[11px] text-[#0A0A0A]/40 tracking-[0.1em]">
                30 MIN
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0A0A0A]/30" />
              <span className="font-mono text-[11px] text-[#0A0A0A]/40 tracking-[0.1em]">
                RESPUESTA &lt; 24H
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
