"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;

      const items = gsap.utils.toArray<HTMLElement>(".footer-item");

      // Footer reveal - clip from bottom
      gsap.fromTo(
        footerRef.current,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // Staggered items entrance
      gsap.fromTo(
        items,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 60%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="bg-[#050505] border-t border-border-subtle pt-[100px] pb-[40px] relative"
    >
      {/* Large ROME watermark */}
      <div className="absolute top-8 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <span className="font-display font-extrabold text-[20vw] text-white/[0.02] leading-none tracking-tighter block text-center">
          ROME
        </span>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-[120px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-0">
          {/* Brand */}
          <div className="footer-item flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2 w-fit group">
              <span className="h-5 w-5 shrink-0 bg-accent transition-transform duration-300 group-hover:rotate-45" aria-hidden />
              <span className="font-display font-extrabold text-[18px] text-text-primary tracking-tight">
                ROME
              </span>
            </a>
            <span className="font-sans text-[14px] text-text-secondary leading-relaxed max-w-[280px]">
              Codigo puro. Resultados reales.
              Construimos webs que convierten.
            </span>
          </div>

          {/* Navigation */}
          <div className="footer-item flex flex-col gap-3">
            <span className="font-mono text-[11px] text-accent tracking-[0.14em] mb-2">
              NAVEGACION
            </span>
            {[
              { label: "Servicios", href: "#servicios" },
              { label: "Proceso", href: "#proceso" },
              { label: "Trabajo", href: "#trabajo" },
              { label: "Contacto", href: "#contacto" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-[14px] text-text-muted hover:text-text-primary transition-colors duration-200 w-fit group flex items-center gap-2"
              >
                <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-4" />
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="footer-item flex flex-col gap-4">
            <span className="font-mono text-[11px] text-accent tracking-[0.14em] mb-2">
              CONTACTO
            </span>
            <a
              href="mailto:hola@rome.co"
              className="font-mono text-[13px] text-text-muted hover:text-accent transition-colors duration-200 w-fit"
            >
              hola@rome.co
            </a>
            <a
              href="https://wa.me/51986060731"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-[#0A0A0A] font-display font-bold text-[13px] px-6 py-3 rounded-none hover:bg-[#D4FF3D] transition-colors w-fit"
            >
              Hablar por WhatsApp &rarr;
            </a>
            <div className="flex items-center gap-5 mt-2">
              <SocialIcon icon="twitter" href="#" />
              <SocialIcon icon="linkedin" href="#" />
              <SocialIcon icon="github" href="#" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-item mt-[60px] pt-[24px] border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <span className="font-sans text-[12px] text-text-muted">
            &copy; 2025 Rome. Todos los derechos reservados.
          </span>
          <span className="font-mono text-[10px] text-text-muted/40">
            Construido con el mismo stack que usamos para nuestros clientes.
          </span>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: string; href: string }) {
  return (
    <a
      href={href}
      className="text-text-muted hover:text-accent transition-colors duration-200 hover:scale-110 transform"
      aria-label={icon}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icon === "twitter" && (
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        )}
        {icon === "linkedin" && (
          <>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </>
        )}
        {icon === "github" && (
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        )}
      </svg>
    </a>
  );
}
