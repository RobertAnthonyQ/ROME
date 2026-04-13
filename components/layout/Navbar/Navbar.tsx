"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    // Scroll progress bar
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    }

    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Navbar entrance
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      });
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-bg-secondary/90 backdrop-blur-[20px] border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[120px] h-[80px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <span className="h-5 w-5 shrink-0 bg-accent transition-transform duration-300 group-hover:rotate-45" aria-hidden />
          <span className="font-display font-extrabold text-[18px] text-text-primary tracking-tight">
            ROME
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Servicios", href: "#servicios" },
            { label: "Proceso", href: "#proceso" },
            { label: "Trabajo", href: "#trabajo" },
            { label: "Contacto", href: "#contacto" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans font-medium text-[13px] text-text-primary hover:text-accent transition-colors duration-200 relative group/link"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover/link:w-full" />
            </a>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/51986060731"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-accent text-[#0A0A0A] font-display font-bold text-[13px] px-5 py-2.5 rounded-none hover:bg-[#D4FF3D] transition-colors"
          >
            Hablar con Rome &rarr;
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menu"
          >
            <span
              className={`w-6 h-[2px] bg-text-primary transition-all duration-300 ${
                isMobileOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-text-primary transition-all duration-300 ${
                isMobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-text-primary transition-all duration-300 ${
                isMobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-accent origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-[80px] left-0 right-0 bg-bg-secondary/95 backdrop-blur-[20px] border-b border-border-subtle transition-all duration-500 overflow-hidden ${
          isMobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {[
            { label: "Servicios", href: "#servicios" },
            { label: "Proceso", href: "#proceso" },
            { label: "Trabajo", href: "#trabajo" },
            { label: "Contacto", href: "#contacto" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className="font-display font-bold text-[24px] text-text-primary hover:text-accent transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/51986060731"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-[#0A0A0A] font-display font-bold text-[14px] px-6 py-3 rounded-none inline-block text-center mt-4"
          >
            Hablar con Rome &rarr;
          </a>
        </div>
      </div>
    </nav>
  );
}
