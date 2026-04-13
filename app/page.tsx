import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TheProblem } from "@/components/landing/TheProblem";
import { Services } from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
import { Work } from "@/components/landing/Work";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TheProblem />
        <Services />
        <Process />
        <Work />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
