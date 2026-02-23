"use client";

import { motion } from "motion/react";

  export function FinalCTA() {
    return (
      <section id="contacto" className="bg-accent py-[160px] relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%">
            <filter id="noise-cta">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise-cta)" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
          <span className="font-display font-extrabold text-[120px] md:text-[300px] text-[#B8E02F] opacity-6 leading-none tracking-tighter whitespace-nowrap">
            ROME
          </span>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 lg:px-[120px] relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[11px] text-[#0A0A0A]/50 tracking-[0.14em] mb-8 uppercase"
          >
            FIG_05 — SIGUIENTE PASO
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-[44px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] text-[#0A0A0A] max-w-[800px] mb-8"
          >
            ¿Tu web está dejando<br />dinero sobre la mesa?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[18px] text-[#0A0A0A]/70 leading-[1.65] max-w-[480px] mb-12"
          >
            30 minutos. Analizamos tu web, identificamos lo que la frena y te
            mostramos exactamente cómo la reconstruimos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <button className="bg-[#0A0A0A] text-accent font-display font-bold text-[16px] px-11 py-4 rounded-none hover:scale-105 transition-transform duration-300 shadow-[0_0_0_rgba(10,10,10,0)] hover:shadow-[0_0_30px_rgba(10,10,10,0.2)]">
              Agendar llamada
            </button>
            <span className="font-mono text-[11px] text-[#0A0A0A]/50 tracking-[0.14em]">
              — respuesta en menos de 24h
            </span>
          </motion.div>
        </div>
      </section>
    );
  }
