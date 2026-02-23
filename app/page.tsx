import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TheProblem } from "@/components/TheProblem";
import { Numbers } from "@/components/Numbers";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TheProblem />
        <Numbers />
        <Services />
        <Process />
        <Work />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
