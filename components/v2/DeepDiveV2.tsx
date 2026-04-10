"use client";

import { content } from '@/app/content';

interface DeepDiveProps {
    lang: "es" | "en";
}

export default function DeepDive({ lang }: DeepDiveProps) {
    const isEs = lang === "es";

    return (
        <section className="bg-on-background py-40 px-8 overflow-hidden relative" id="lab">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center">
                <h2 className="massive-text text-surface text-6xl md:text-[8rem] mb-12">
                    {isEs ? "DEJE DE GESTIONAR POR INTUICIÓN." : "STOP MANAGING BY INTUITION."}
                </h2>
                <button 
                    className="bg-secondary text-white px-12 py-6 font-bold uppercase tracking-widest text-lg transition-transform active:scale-95 hover:bg-secondary-container hover:text-on-secondary-container"
                    onClick={() => {
                        const footer = document.getElementById('site-footer');
                        if(footer) footer.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    {isEs ? "HABLEMOS DE RESULTADOS" : "LET'S TALK RESULTS"}
                </button>
            </div>
        </section>
    );
}
