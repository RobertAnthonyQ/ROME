"use client";

import { motion } from "motion/react";

const phases = [
  {
    id: "04",
    title: "LAUNCH",
    desc: "Salimos en vivo. El código es tuyo para siempre. Cero lock-in.",
  },
  {
    id: "03",
    title: "BUILD",
    desc: "Construimos. Ves el progreso en tiempo real. Iteramos rápido.",
  },
  {
    id: "02",
    title: "ESTRATEGIA",
    desc: "Definimos exactamente qué necesita tu web para vender. No suposiciones.",
  },
  {
    id: "01",
    title: "CALL",
    desc: "Entendemos tu negocio, no tu brief. 30 minutos que cambian el resultado.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="bg-bg-primary py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[11px] text-text-muted tracking-[0.14em] mb-8 uppercase"
        >
          FIG_03 — CÓMO TRABAJAMOS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-[48px] lg:text-[56px] leading-[1.0] tracking-[-0.02em] text-text-primary max-w-[640px] mb-16"
        >
          De la llamada al lanzamiento.
        </motion.h2>

        <div className="relative flex flex-col-reverse">
          <div className="absolute left-[24px] lg:left-[48px] top-0 bottom-0 w-[1px] bg-border-subtle z-0">
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-accent origin-bottom"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ height: "100%" }}
            />
          </div>

          {phases.map((phase, i) => (
            <ProcessBlock key={phase.id} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessBlock({
  phase,
  index,
}: {
  phase: any;
  index: number;
  key?: string | number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: 0.25 * (3 - index),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full bg-bg-card border border-border-subtle rounded-none p-6 lg:py-9 lg:px-12 flex flex-col lg:flex-row relative z-10 mb-[-1px] group"
    >
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[1px] bg-accent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1, 0] }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.25 * (3 - index) + 0.2 }}
      />

      <div className="absolute left-[24px] lg:left-[48px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-bg-primary border-2 border-accent z-20" />

      <div className="flex flex-col lg:flex-row w-full ml-8 lg:ml-12">
        <div className="w-full lg:w-[280px] flex-shrink-0 flex flex-col justify-center mb-4 lg:mb-0">
          <div className="font-mono text-[11px] text-accent tracking-[0.14em] mb-2">
            FASE_{phase.id}
          </div>
          <div className="font-display font-bold text-[24px] text-text-primary">
            {phase.title}
          </div>
        </div>

        <div className="hidden lg:block w-[1px] bg-border-subtle mx-8 self-stretch" />

        <div className="flex-1 flex items-center">
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65] max-w-[480px]">
            {phase.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
