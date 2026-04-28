import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Blueprints from "@/components/Blueprints";
import DeepDive from "@/components/DeepDive";
import SelectedWork from "@/components/SelectedWork";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "BeStarLight — Marketing, Communication & Technology",
    description: "Marketing, communication and technology agency with 27 years of experience. Strategy, e-commerce, applied AI and visual production. Buenos Aires · Miami.",
    alternates: {
        canonical: "/en",
    },
    openGraph: {
        title: "BeStarLight — Marketing, Communication & Technology",
        description: "27 years of experience accompanying brands with strategy, digital development, applied AI and visual production. Buenos Aires · Miami.",
        url: "https://bestarlight.com/en",
        siteName: "BeStarLight",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1024,
                height: 1024,
                alt: "BeStarLight — Marketing, Communication & Technology",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "BeStarLight — Marketing, Communication & Technology",
        description: "27 years accompanying brands with strategy, digital development, applied AI and visual production.",
        images: ["/og-image.png"],
    },
};

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
