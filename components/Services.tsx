"use client";

import { motion } from "motion/react";
import Grainient from "./Grainient";

const services = [
  {
    id: "01",
    title: "Landings Nuevas",
    tag: "DESDE_CERO",
    desc: "Construidas para convertir. Rápidas, únicas, completamente tuyas. Ningún otro sitio tiene tu código.",
  },
  {
    id: "02",
    title: "Rescate de Webs Antiguas",
    tag: "RECONSTRUCCIÓN",
    desc: "Tu web actual tiene potencial sin explotar. Lo desbloqueamos eliminando todo lo que la frena.",
  },
  {
    id: "03",
    title: "Portafolios",
    tag: "PARA_CREATIVOS",
    desc: "Para profesionales que no pueden permitirse verse como los demás.",
  },
  {
    id: "04",
    title: "Optimización y SEO",
    tag: "PERFORMANCE",
    desc: "Core Web Vitals perfectos. Tu web carga antes de que el usuario note que cargó.",
  },
];

type Service = (typeof services)[0];

export function Services() {
  return (
    <section className="py-[120px] relative overflow-hidden">
      {/* Grainient: bright lime palette, IS the background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Grainient
          color1="#C6F135"
          color2="#DAFF70"
          color3="#FFFFFF"
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
          grainAmount={0.12}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.2}
          gamma={0.9}
          saturation={1.3}
          zoom={0.9}
        />
      </div>

      {/* SERVICIOS watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-1">
        <span className="font-display font-extrabold text-[120px] md:text-[220px] text-black/10 leading-none tracking-tighter whitespace-nowrap">
          SERVICIOS
        </span>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-[120px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[11px] text-black/50 tracking-[0.14em] mb-8 uppercase"
        >
          FIG_02 — LO QUE HACEMOS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-[48px] lg:text-[56px] leading-none tracking-[-0.02em] text-[#0A0A0A] max-w-160 mb-16"
        >
          No vendemos plantillas. Construimos desde cero.
        </motion.h2>

        <div className="flex flex-col border-t border-black/15">
          {services.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Pure-CSS hover — zero React state, zero re-renders */
function ServiceRow({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group border-b border-black/15 relative cursor-pointer"
    >
      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1A5200] opacity-0 group-hover:opacity-50 transition-opacity duration-200" />

      {/* Static row */}
      <div className="px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8 lg:gap-16 w-full">
          <span className="font-mono text-[12px] w-8 text-black/40 group-hover:text-[#1A5200] transition-colors duration-200">
            {service.id}
          </span>
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8 flex-1">
            <span className="font-display font-bold text-[20px] lg:text-[28px] text-[#0A0A0A] whitespace-nowrap">
              {service.title}
            </span>
            <span className="font-mono text-[10px] text-black/40 hidden md:block">
              [{service.tag}]
            </span>
          </div>
        </div>
        <span className="font-sans text-[20px] ml-4 text-black/40 group-hover:text-[#1A5200] group-hover:rotate-45 transition-all duration-200 inline-block">
          ↗
        </span>
      </div>

      {/* Expandable description — grid trick, no JS state */}
      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-200 ease-out">
        <div className="overflow-hidden">
          <div className="px-6 lg:px-8 pb-6 pl-[64px] lg:pl-[96px]">
            <p className="font-sans text-[15px] text-[#1A1A1A] max-w-[520px] leading-relaxed">
              {service.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
