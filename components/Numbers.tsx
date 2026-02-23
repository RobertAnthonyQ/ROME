"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Numbers() {
  return (
    <section className="bg-bg-secondary py-[80px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          <StatBlock
            number="48"
            suffix="+"
            label="PROYECTOS ENTREGADOS"
            delay={0.1}
          />
          <Divider />
          <StatBlock
            number="100"
            suffix="%"
            label="CÓDIGO PROPIO"
            delay={0.2}
          />
          <Divider />
          <StatBlock
            number="3"
            suffix="×"
            label="MÁS RÁPIDO QUE WORDPRESS"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

function Divider() {
  return (
    <div className="hidden lg:block h-[80px] w-[1px] relative">
      <svg
        width="1"
        height="80"
        viewBox="0 0 1 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 0L0.5 10L0 15L1 25L0.5 30L0.5 50L1 55L0 65L0.5 70L0.5 80"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

function StatBlock({
  number,
  suffix,
  label,
  delay,
}: {
  number: string;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(number);
      const duration = 1200; // 1.2s
      const startTime = performance.now();

      const updateCount = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // ease-out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(end * easeOut));

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isInView, number]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center relative">
      <div className="font-display font-extrabold text-[72px] lg:text-[96px] text-accent tracking-[-0.03em] leading-none mb-2">
        {count}
        {suffix}
      </div>

      <div className="relative w-full h-[3px] mb-4">
        <svg
          width="100%"
          height="3"
          viewBox="0 0 200 3"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 0 1.5 Q 50 0 100 1.5 T 200 1.5"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeOut" }}
          />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
        className="font-mono text-[11px] text-text-muted uppercase tracking-[0.14em]"
      >
        {label}
      </motion.div>
    </div>
  );
}
