import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Blueprints from "@/components/Blueprints";
import DeepDive from "@/components/DeepDive";
import SelectedWork from "@/components/SelectedWork";
import Footer from "@/components/Footer";
import { LaboratorioIASection, EntryFilterSection, DiagnosticCTASection } from "@/components/AdditionalSections";

export default function Home() {
  const lang = "es";
  return (
    <>
      <Header lang={lang} />

      <main className="relative pt-24">
        <Hero lang={lang} />
        <Blueprints lang={lang} />
        <LaboratorioIASection lang={lang} />
        <DeepDive lang={lang} />
        <EntryFilterSection lang={lang} />
        <SelectedWork lang={lang} />
        <DiagnosticCTASection lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}
