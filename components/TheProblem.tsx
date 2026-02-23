"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import MagicBento, { GlobalSpotlight } from "./MagicBento";

const GLOW_COLOR = "198, 241, 53";

const bentoCards = [
  { label: "Visibilidad", title: "Invisible en Google", description: "Sin rastro digital, no existes." },
  { label: "Conversión", title: "Web lenta", description: "Cada segundo extra cuesta ventas." },
  { label: "Identidad", title: "Sin identidad propia", description: "Plantillas genéricas no posicionan." },
  { label: "Tiempo", title: "14 días", description: "De cero a online.", stat: "14 días", accent: true },
  { label: "SEO", title: "Desde el día 1", description: "Indexación y métricas.", accent: true },
  { label: "Coste", title: "0€ mensualidades", description: "Tuyo para siempre.", stat: "0€", accent: true },
];


export function TheProblem() {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section id="servicios" className="bg-bg-secondary py-[120px]">
      <GlobalSpotlight
        gridRef={gridRef}
        glowColor={GLOW_COLOR}
        spotlightRadius={400}
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[11px] text-text-muted tracking-[0.14em] mb-8 uppercase"
        >
          FIG_01 — EL PROBLEMA
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-[48px] lg:text-[56px] leading-none tracking-[-0.02em] text-text-primary max-w-160 mb-16"
        >
          Mientras lees esto, alguien busca lo que tú ofreces. ¿Apareces?
        </motion.h2>

        <motion.div
          ref={gridRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bento-section"
        >
          <MagicBento
            cards={bentoCards}
            textAutoHide={true}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="132, 0, 255"
            disableAnimations={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
