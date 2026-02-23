import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "ROME",
  description: "Código puro. Resultados reales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
