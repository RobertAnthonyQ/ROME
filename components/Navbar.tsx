"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-bg-secondary/95 backdrop-blur-[20px] border-b border-border-subtle" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[120px] h-[80px] flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <span className="h-5 w-5 shrink-0 bg-accent" aria-hidden />
          <span className="font-display font-extrabold text-[18px] text-text-primary tracking-tight">
            ROME
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Servicios", "Trabajo", "Proceso", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-sans font-medium text-[13px] text-text-primary hover:text-accent transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/51986060731"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-[#0A0A0A] font-display font-bold text-[13px] px-5 py-2.5 rounded-none hover:bg-[#D4FF3D] transition-colors inline-block"
        >
          Hablar con Rome &rarr;
        </a>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-border-subtle origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.nav>
  );
}
