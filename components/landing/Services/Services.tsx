"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Landings\nNuevas",
    tag: "DESDE_CERO",
    desc: "Construidas para convertir. Rapidas, unicas, completamente tuyas. Ningun otro sitio tiene tu codigo.",
  },
  {
    id: "02",
    title: "Rescate de\nWebs Antiguas",
    tag: "RECONSTRUCCION",
    desc: "Tu web actual tiene potencial sin explotar. Lo desbloqueamos eliminando todo lo que la frena.",
  },
  {
    id: "03",
    title: "Portafolios\nCreativos",
    tag: "PARA_CREATIVOS",
    desc: "Para profesionales que no pueden permitirse verse como los demas.",
  },
  {
    id: "04",
    title: "Optimizacion\ny SEO",
    tag: "PERFORMANCE",
    desc: "Core Web Vitals perfectos. Tu web carga antes de que el usuario note que cargo.",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !containerRef.current) return;

      const slides = gsap.utils.toArray<HTMLElement>(".service-slide");
      const totalSlides = slides.length;

      // Horizontal scroll animation
      const scrollTween = gsap.to(slides, {
        xPercent: -100 * (totalSlides - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${window.innerWidth * totalSlides}`,
          anticipatePin: 1,
        },
      });

      // Progress bar
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 1,
          start: "top top",
          end: () => `+=${window.innerWidth * totalSlides}`,
        },
      });

      // Animate each slide's content
      slides.forEach((slide, i) => {
        const number = slide.querySelector(".service-number");
        const title = slide.querySelector(".service-title");
        const desc = slide.querySelector(".service-desc");
        const tag = slide.querySelector(".service-tag");
        const line = slide.querySelector(".service-line");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            containerAnimation: scrollTween,
            start: "left 80%",
            end: "left 20%",
            scrub: 1,
          },
        });

        tl.fromTo(
          number,
          { scale: 3, opacity: 0, y: 100 },
          { scale: 1, opacity: 0.08, y: 0, duration: 1, ease: "power3.out" }
        )
          .fromTo(
            title,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            0.2
          )
          .fromTo(
            line,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.8, ease: "power2.out" },
            0.4
          )
          .fromTo(
            tag,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
            0.5
          )
          .fromTo(
            desc,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            0.5
          );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="servicios-scroll"
      className="relative overflow-hidden bg-bg-primary"
    >
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none opacity-0 services-progress-bar">
        <div
          ref={progressRef}
          className="h-full bg-accent origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Header label - fixed during pin */}
      <div className="absolute top-12 left-6 lg:left-[120px] z-20">
        <span className="font-mono text-[11px] text-text-muted tracking-[0.14em] uppercase">
          FIG_02 — LO QUE HACEMOS
        </span>
      </div>

      {/* Slides container */}
      <div ref={containerRef} className="flex h-screen w-max">
        {services.map((service, i) => (
          <div
            key={service.id}
            className="service-slide w-screen h-screen flex items-center justify-center relative overflow-hidden"
          >
            {/* Giant background number */}
            <div className="service-number absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="font-display font-extrabold text-[40vw] lg:text-[35vw] text-text-primary opacity-[0.03] leading-none">
                {service.id}
              </span>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-[120px] w-full">
              {/* Tag */}
              <div className="service-tag font-mono text-[11px] text-accent tracking-[0.14em] mb-6">
                [{service.tag}]
              </div>

              {/* Title */}
              <h2 className="service-title font-display font-extrabold text-[64px] lg:text-[120px] leading-[0.9] tracking-[-0.04em] text-text-primary mb-8 whitespace-pre-line">
                {service.title}
              </h2>

              {/* Line separator */}
              <div className="service-line h-[2px] bg-accent mb-8 origin-left" />

              {/* Description */}
              <p className="service-desc font-sans text-[18px] lg:text-[22px] text-text-secondary leading-[1.6] max-w-[520px]">
                {service.desc}
              </p>
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-12 right-6 lg:right-[120px]">
              <span className="font-mono text-[12px] text-text-muted">
                {service.id}
                <span className="text-border-subtle mx-2">/</span>
                <span className="text-text-muted">04</span>
              </span>
            </div>

            {/* Vertical divider between slides */}
            {i < services.length - 1 && (
              <div className="absolute right-0 top-[20%] bottom-[20%] w-[1px] bg-border-subtle" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
