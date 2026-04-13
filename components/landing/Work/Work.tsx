"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: number;
  name: string;
  tag: string;
  url: string;
  previewType: "iframe" | "image";
  previewImage?: string;
  color: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Zentry",
    tag: "LANDING_PAGE",
    url: "https://radins-zentry.netlify.app/",
    previewType: "iframe",
    color: "#1A1A1A",
  },
  {
    id: 2,
    name: "Magma Clone",
    tag: "WEB_APP",
    url: "https://kahkasha17.github.io/thisismagma-clone/",
    previewType: "image",
    previewImage: "/work/magma-preview.jpg",
    color: "#151515",
  },
  {
    id: 3,
    name: "GenAxis",
    tag: "WEB_APP",
    url: "https://genaxis.devlyhub.in/",
    previewType: "image",
    previewImage: "/work/genaxis-preview.jpg",
    color: "#121212",
  },
];

// Text scramble effect
function scrambleText(
  element: HTMLElement,
  finalText: string,
  duration: number = 0.8
) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";
  let frame = 0;
  const totalFrames = Math.floor(duration * 60);

  const interval = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;

    let result = "";
    for (let i = 0; i < finalText.length; i++) {
      if (i < finalText.length * progress) {
        result += finalText[i];
      } else {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    element.textContent = result;

    if (frame >= totalFrames) {
      element.textContent = finalText;
      clearInterval(interval);
    }
  }, 1000 / 60);

  return () => clearInterval(interval);
}

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(".work-card");

      cards.forEach((card, i) => {
        // Parallax - different speeds for asymmetry
        const speed = i % 2 === 0 ? 60 : -40;
        gsap.fromTo(
          card,
          { y: speed },
          {
            y: -speed,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );

        // Entrance animation
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );

        // 3D tilt on hover
        const cardInner = card.querySelector(".work-card-inner");
        if (cardInner) {
          const xTo = gsap.quickTo(cardInner, "rotateY", {
            duration: 0.3,
            ease: "power2.out",
          });
          const yTo = gsap.quickTo(cardInner, "rotateX", {
            duration: 0.3,
            ease: "power2.out",
          });

          card.addEventListener("mouseenter", () => {
            gsap.to(cardInner, {
              scale: 1.02,
              duration: 0.4,
              ease: "power2.out",
            });
            // Scramble the project name
            const nameEl = card.querySelector(
              ".work-card-name"
            ) as HTMLElement;
            if (nameEl) {
              scrambleText(nameEl, nameEl.dataset.name || nameEl.textContent || "");
            }
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(cardInner, {
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
            });
          });

          card.addEventListener("mousemove", (e: Event) => {
            const mouseEvent = e as MouseEvent;
            const rect = card.getBoundingClientRect();
            const x = mouseEvent.clientX - rect.left;
            const y = mouseEvent.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            xTo(((x - centerX) / centerX) * 8);
            yTo((-(y - centerY) / centerY) * 8);
          });
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="trabajo"
      className="bg-bg-secondary py-[200px] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[120px]">
        {/* Header */}
        <div className="mb-24">
          <span className="font-mono text-[11px] text-text-muted tracking-[0.14em] mb-8 uppercase block">
            FIG_04 — TRABAJO RECIENTE
          </span>
          <h2 className="font-display font-extrabold text-[56px] lg:text-[80px] leading-[0.9] tracking-[-0.04em] text-text-primary max-w-[700px]">
            Lo que hemos construido.
          </h2>
        </div>

        {/* Cards grid - asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large card - spans 7 cols */}
          <div className="lg:col-span-7 work-card" style={{ perspective: "1000px" }}>
            <ProjectCard project={projects[0]} isLarge />
          </div>

          {/* Two smaller cards - spans 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            <div className="work-card" style={{ perspective: "1000px" }}>
              <ProjectCard project={projects[1]} />
            </div>
            <div className="work-card" style={{ perspective: "1000px" }}>
              <ProjectCard project={projects[2]} />
            </div>
          </div>
        </div>
      </div>

      {/* Background watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <span className="font-display font-extrabold text-[20vw] text-text-primary/[0.02] leading-none tracking-tighter whitespace-nowrap">
          WORK
        </span>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  isLarge = false,
}: {
  project: Project;
  isLarge?: boolean;
}) {
  const handleClick = () => {
    window.open(project.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      className={`work-card-inner group cursor-pointer relative overflow-hidden border border-border-subtle transition-shadow duration-500 hover:shadow-[0_0_80px_rgba(198,241,53,0.08)] ${
        isLarge ? "h-[420px] lg:h-[700px]" : "h-[320px] lg:h-[340px]"
      }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Preview area */}
      <div className="absolute inset-0 top-0 left-0 right-0 h-[80%] bg-bg-elevated overflow-hidden">
        {project.previewType === "iframe" ? (
          <iframe
            src={project.url}
            title={project.name}
            className="h-full w-[calc(100%+20px)] max-w-none border-0 pointer-events-none"
            sandbox="allow-scripts allow-same-origin"
          />
        ) : project.previewImage ? (
          <Image
            src={project.previewImage}
            alt={`Preview de ${project.name}`}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes={
              isLarge
                ? "(max-width: 1024px) 100vw, 58vw"
                : "(max-width: 1024px) 100vw, 42vw"
            }
          />
        ) : (
          <div
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundColor: project.color }}
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center z-20">
        <span className="font-display font-bold text-[13px] text-accent tracking-widest bg-bg-primary/80 px-5 py-3 backdrop-blur-sm border border-border-accent">
          VER PROYECTO
        </span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-bg-elevated p-6 flex items-center justify-between border-t border-border-subtle z-10 transition-colors duration-300 group-hover:border-accent/30">
        <span
          className="work-card-name font-display font-bold text-[20px] lg:text-[24px] text-text-primary"
          data-name={project.name}
        >
          {project.name}
        </span>
        <span className="font-mono text-[10px] text-text-muted">
          [{project.tag}]
        </span>
      </div>

      {/* Corner arrow */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 z-20">
        <span className="font-sans text-[24px] text-accent">&#8599;</span>
      </div>

      {/* Accent border glow */}
      <div className="absolute inset-0 border border-transparent group-hover:border-accent/20 transition-colors duration-500 pointer-events-none z-30" />
    </div>
  );
}
