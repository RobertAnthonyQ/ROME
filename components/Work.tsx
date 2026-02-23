"use client";

import { motion } from "motion/react";
import Image from "next/image";

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

export function Work() {
  return (
    <section id="trabajo" className="bg-bg-secondary py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[11px] text-text-muted tracking-[0.14em] mb-8 uppercase"
        >
          FIG_04 — TRABAJO RECIENTE
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-[48px] lg:text-[56px] leading-[1.0] tracking-[-0.02em] text-text-primary max-w-[640px] mb-16"
        >
          Lo que hemos construido.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <ProjectCard project={projects[0]} isLarge />
          <div className="flex flex-col gap-3">
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[2]} />
          </div>
        </div>
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      className={`bg-bg-elevated border border-border-subtle overflow-hidden relative rounded-none group cursor-pointer ${
        isLarge ? "h-[420px] lg:h-[852px]" : "h-[420px]"
      }`}
    >
      {/* Área de preview (80% altura): scroll habilitado al pasar el mouse, scrollbar oculta */}
      <div className="absolute inset-0 top-0 left-0 right-0 h-[80%] bg-bg-elevated overflow-hidden">
        {project.previewType === "iframe" ? (
          <iframe
            src={project.url}
            title={project.name}
            className="h-full w-[calc(100%+20px)] max-w-none border-0 pointer-events-auto"
            sandbox="allow-scripts allow-same-origin"
          />
        ) : project.previewImage ? (
          <Image
            src={project.previewImage}
            alt={`Preview de ${project.name}`}
            fill
            className="object-cover object-top transition-all duration-500 group-hover:brightness-110"
            sizes={isLarge ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 25vw"}
          />
        ) : (
          <div
            className="w-full h-full transition-all duration-500 group-hover:brightness-110"
            style={{ backgroundColor: project.color }}
          />
        )}
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center z-20">
        <span className="font-display font-bold text-[13px] text-accent tracking-widest bg-bg-primary/80 px-4 py-2 backdrop-blur-sm">
          VER PROYECTO
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-bg-elevated p-6 flex items-center justify-between border-t border-border-subtle z-10 transition-colors duration-300 group-hover:border-border-accent">
        <span className="font-display font-bold text-[20px] text-text-primary">
          {project.name}
        </span>
        <span className="font-mono text-[10px] text-text-muted">
          [{project.tag}]
        </span>
      </div>

      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <span className="font-sans text-[20px] text-accent">↗</span>
      </div>

      <div className="absolute inset-0 border border-transparent group-hover:border-border-accent transition-colors duration-300 pointer-events-none z-30" />
      <div className="absolute inset-0 shadow-none group-hover:shadow-[inset_0_0_60px_rgba(198,241,53,0.04)] transition-shadow duration-300 pointer-events-none z-30" />
    </motion.div>
  );
}
