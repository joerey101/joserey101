import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Blueprints from "@/components/Blueprints";
import DeepDive from "@/components/DeepDive";
import SelectedWork from "@/components/SelectedWork";
import Footer from "@/components/Footer";

export default function Home() {
    const lang = "en";
    return (
        <>
            <Header lang={lang} />

            <main className="relative z-10 pt-24">
                <Hero lang={lang} />
                <Blueprints lang={lang} />
                <DeepDive lang={lang} />
                <SelectedWork lang={lang} />
            </main>

            <Footer lang={lang} />
        </>
    );
}
