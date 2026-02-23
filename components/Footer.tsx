"use client";

import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-border-subtle pt-[80px] pb-[40px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-0">
          <div className="flex flex-col gap-2">
            <a href="/" className="flex items-center gap-2 w-fit">
              <span className="h-4 w-4 shrink-0 bg-accent" aria-hidden />
              <span className="font-display font-extrabold text-[16px] text-text-primary tracking-tight">
                ROME
              </span>
            </a>
            <span className="font-sans text-[13px] text-text-muted">
              Código puro. Resultados reales.
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {["Servicios", "Trabajo", "Proceso"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-sans text-[13px] text-text-muted hover:text-text-primary transition-colors duration-150 w-fit"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:hola@rome.co"
              className="font-mono text-[12px] text-text-muted hover:text-accent transition-colors duration-150 w-fit"
            >
              hola@rome.co
            </a>
            <a
              href="https://wa.me/51986060731"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-[#0A0A0A] font-display font-bold text-[13px] px-5 py-2.5 rounded-none hover:bg-[#D4FF3D] transition-colors w-fit"
            >
              Hablar por WhatsApp &rarr;
            </a>
            <div className="flex items-center gap-4">
              <SocialIcon icon="twitter" />
              <SocialIcon icon="linkedin" />
              <SocialIcon icon="github" />
            </div>
          </div>
        </div>

        <div className="mt-[48px] pt-[24px] border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <span className="font-sans text-[11px] text-text-muted">
            © 2025 Rome. Todos los derechos reservados.
          </span>
          <span className="font-mono text-[10px] text-text-muted/35">
            Construido con el mismo stack que usamos para nuestros clientes.
          </span>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  return (
    <a
      href="#"
      className="text-text-muted hover:text-accent transition-colors duration-150"
      aria-label={icon}
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
