"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    id: "01",
    title: "CALL",
    desc: "Entendemos tu negocio, no tu brief. 30 minutos que cambian el resultado.",
  },
  {
    id: "02",
    title: "ESTRATEGIA",
    desc: "Definimos exactamente que necesita tu web para vender. No suposiciones.",
  },
  {
    id: "03",
    title: "BUILD",
    desc: "Construimos. Ves el progreso en tiempo real. Iteramos rapido.",
  },
  {
    id: "04",
    title: "LAUNCH",
    desc: "Salimos en vivo. El codigo es tuyo para siempre. Cero lock-in.",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const steps = gsap.utils.toArray<HTMLElement>(".process-step");

      // Draw the vertical line with scroll
      if (lineRef.current) {
        const lineLength = lineRef.current.getTotalLength();
        gsap.set(lineRef.current, {
          strokeDasharray: lineLength,
          strokeDashoffset: lineLength,
        });

        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        });
      }

      // Animate each step
      steps.forEach((step, i) => {
        const number = step.querySelector(".process-number");
        const title = step.querySelector(".process-title");
        const desc = step.querySelector(".process-desc");
        const dot = step.querySelector(".process-dot");
        const card = step.querySelector(".process-card");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 75%",
            end: "top 30%",
            scrub: 1,
          },
        });

        // Number scales down from huge
        tl.fromTo(
          number,
          { scale: 5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
        );

        // Dot pulses
        tl.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" },
          0.3
        );

        // Card slides in from right
        tl.fromTo(
          card,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          0.2
        );

        // Title reveal
        tl.fromTo(
          title,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          0.4
        );

        // Description
        tl.fromTo(
          desc,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          0.6
        );

        // Glow effect on dot when active
        ScrollTrigger.create({
          trigger: step,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => {
            gsap.to(dot, {
              boxShadow: "0 0 30px rgba(198, 241, 53, 0.6), 0 0 60px rgba(198, 241, 53, 0.3)",
              scale: 1.3,
              duration: 0.4,
              ease: "power2.out",
            });
          },
          onLeave: () => {
            gsap.to(dot, {
              boxShadow: "0 0 0px rgba(198, 241, 53, 0)",
              scale: 1,
              duration: 0.3,
            });
          },
          onEnterBack: () => {
            gsap.to(dot, {
              boxShadow: "0 0 30px rgba(198, 241, 53, 0.6), 0 0 60px rgba(198, 241, 53, 0.3)",
              scale: 1.3,
              duration: 0.4,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(dot, {
              boxShadow: "0 0 0px rgba(198, 241, 53, 0)",
              scale: 1,
              duration: 0.3,
            });
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="proceso"
      className="bg-bg-primary py-[200px] relative"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[120px]">
        {/* Header */}
        <div className="mb-32">
          <span className="font-mono text-[11px] text-text-muted tracking-[0.14em] mb-8 uppercase block">
            FIG_03 — COMO TRABAJAMOS
          </span>
          <h2 className="font-display font-extrabold text-[56px] lg:text-[80px] leading-[0.9] tracking-[-0.04em] text-text-primary max-w-[700px]">
            De la llamada al lanzamiento.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* SVG line */}
          <div className="absolute left-[28px] lg:left-[40px] top-0 bottom-0 w-[2px]">
            <svg
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 2 1000"
            >
              <path
                ref={lineRef}
                d="M1 0 L1 1000"
                stroke="rgba(198, 241, 53, 0.4)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            {/* Background line */}
            <div className="absolute inset-0 bg-border-subtle" />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-[200px]">
            {phases.map((phase) => (
              <div key={phase.id} className="process-step relative pl-[80px] lg:pl-[120px]">
                {/* Dot on timeline */}
                <div className="process-dot absolute left-[20px] lg:left-[32px] top-[40px] w-[18px] h-[18px] rounded-full bg-accent border-[3px] border-bg-primary z-10" />

                {/* Number - huge, positioned behind */}
                <div className="process-number absolute -left-[10px] lg:left-[60px] -top-[60px] lg:-top-[80px] pointer-events-none select-none">
                  <span className="font-display font-extrabold text-[180px] lg:text-[280px] text-accent/[0.06] leading-none">
                    {phase.id}
                  </span>
                </div>

                {/* Card content */}
                <div className="process-card relative z-10">
                  <div className="bg-bg-card/50 border border-border-subtle p-8 lg:p-12 backdrop-blur-sm">
                    <div className="font-mono text-[11px] text-accent tracking-[0.14em] mb-4">
                      FASE_{phase.id}
                    </div>
                    <h3 className="process-title font-display font-extrabold text-[36px] lg:text-[56px] leading-[0.95] tracking-[-0.03em] text-text-primary mb-6">
                      {phase.title}
                    </h3>
                    <p className="process-desc font-sans text-[16px] lg:text-[18px] text-text-secondary leading-[1.65] max-w-[480px]">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
