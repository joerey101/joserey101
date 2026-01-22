import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Blueprints from "@/components/Blueprints";
import DeepDive from "@/components/DeepDive";
import SelectedWork from "@/components/SelectedWork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Global Grid Overlay */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-40 z-0"></div>

      {/* Sticky Edge Labels */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4 mix-blend-multiply">
        <span className="sticky-label font-meta text-[10px] font-extrabold tracking-[0.2em] uppercase opacity-40">ESTRATEGIA / DISEÑO / IA</span>
        <div className="w-[1px] h-20 bg-carbon/20"></div>
      </div>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4 mix-blend-multiply pointer-events-none">
        <div className="w-[1px] h-20 bg-carbon/20"></div>
        <span className="sticky-label rotate-180 font-meta text-[10px] font-extrabold tracking-[0.2em] uppercase opacity-40">EST. 2024 / TOKYO / NYC</span>
      </div>

      <Header />

      <main className="relative z-10 pt-24">
        <Hero />
        <Blueprints />
        <DeepDive />
        <SelectedWork />
      </main>

      <Footer />
    </>
  );
}
