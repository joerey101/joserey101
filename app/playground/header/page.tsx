"use client";

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroVariant1 from "./variants/HeroVariant1";
import HeroVariant2 from "./variants/HeroVariant2";
import HeroVariant3 from "./variants/HeroVariant3";

export default function HeaderPlayground() {
    const [activeVariant, setActiveVariant] = useState(1);
    const lang = "es";

    return (
        <div className="min-h-screen bg-background-light">
            <Header lang={lang} />

            {/* Selector UI */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex gap-4 p-2 bg-white/80 backdrop-blur-md border border-carbon/10 rounded-full shadow-2xl">
                {[1, 2, 3].map((num) => (
                    <button
                        key={num}
                        onClick={() => setActiveVariant(num)}
                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeVariant === num
                                ? 'bg-carbon text-white scale-110'
                                : 'bg-transparent text-carbon/40 hover:text-carbon'
                            }`}
                    >
                        Opción 0{num}
                    </button>
                ))}
            </div>

            <main className="relative pt-24 overflow-hidden">
                {activeVariant === 1 && <HeroVariant1 lang={lang} />}
                {activeVariant === 2 && <HeroVariant2 lang={lang} />}
                {activeVariant === 3 && <HeroVariant3 lang={lang} />}
            </main>

            <Footer lang={lang} />
        </div>
    );
}
