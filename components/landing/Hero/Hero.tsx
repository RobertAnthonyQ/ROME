"use client";

import { motion } from "motion/react";
import ColorBends from "./ColorBends";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const lineVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section className="relative z-0 min-h-screen flex flex-col justify-center pt-32 pb-24 lg:pt-0 lg:pb-0">
      <div className="absolute inset-0">
        <ColorBends
          colors={["#C6F135", "#8fdb00", "#4a8000", "#1a3300", "#0A0A0A"]}
          rotation={0}
          speed={0.2}
          scale={0.4}
          frequency={1.2}
          warpStrength={1.0}
          mouseInfluence={0.6}
          parallax={0.3}
          noise={0.04}
          transparent={false}
          autoRotate={1.5}
        />
      </div>
      <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-[120px] relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-[11px] text-accent tracking-[0.14em] mb-8"
            >
              ● AGENCIA WEB — EST. 2024
            </motion.div>

            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display font-extrabold text-[52px] lg:text-[88px] leading-[0.95] tracking-[-0.03em] text-text-primary mb-8"
            >
              <motion.div variants={lineVariants} className="overflow-hidden">
                Tu web
              </motion.div>
              <motion.div variants={lineVariants} className="overflow-hidden">
                no debería
              </motion.div>
              <motion.div variants={lineVariants} className="overflow-hidden">
                verse como
              </motion.div>
              <motion.div variants={lineVariants} className="overflow-hidden">
                la de todos.
              </motion.div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-sans text-[18px] text-text-secondary max-w-[480px] mb-10 leading-[1.65]"
            >
              Rome construye desde cero. Sin plantillas. Sin atajos. Solo código
              que convierte.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-accent text-[#0A0A0A] font-display font-bold text-[14px] px-7 py-3.5 rounded-none hover:scale-105 transition-transform duration-300 shadow-[0_0_0_rgba(198,241,53,0)] hover:shadow-[0_0_30px_rgba(198,241,53,0.25)]">
                Ver nuestro trabajo &rarr;
              </button>
              <a
                href="https://wa.me/51947096592"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border-accent text-accent font-display font-bold text-[14px] px-7 py-3.5 rounded-none hover:bg-accent-muted transition-colors duration-300 inline-block text-center"
              >
                Hablar con Rome
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-12 flex flex-wrap gap-y-4 items-center"
            >
              <div className="pr-8 border-r border-border-subtle">
                <span className="font-mono text-[11px] text-text-muted">
                  PROYECTOS_ENTREGADOS:{" "}
                </span>
                <span className="font-mono text-[11px] text-accent">40+</span>
              </div>
              <div className="px-8 border-r border-border-subtle">
                <span className="font-mono text-[11px] text-text-muted">
                  ENTREGA:{" "}
                </span>
                <span className="font-mono text-[11px] text-accent">
                  &lt; 14 días
                </span>
              </div>
              <div className="pl-8">
                <span className="font-mono text-[11px] text-text-muted">
                  CÓDIGO:{" "}
                </span>
                <span className="font-mono text-[11px] text-accent">
                  100% propio
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[44px] border-t border-b border-border-subtle bg-transparent overflow-hidden flex items-center">
        <motion.div
          className="whitespace-nowrap font-mono text-[11px] text-text-muted flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center">
              CÓDIGO PURO <span className="text-accent mx-2">·</span> SIN
              PLANTILLAS <span className="text-accent mx-2">·</span> SIN
              WORDPRESS <span className="text-accent mx-2">·</span> HECHO PARA
              CONVERTIR <span className="text-accent mx-2">·</span> TECNOLOGÍA
              REAL <span className="text-accent mx-2">·</span> SIN ELEMENTOR{" "}
              <span className="text-accent mx-2">·</span> TUYO PARA SIEMPRE{" "}
              <span className="text-accent mx-2">·</span>{" "}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
