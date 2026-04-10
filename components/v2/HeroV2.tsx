"use client";

import { content } from '@/app/content';

interface HeroProps {
    lang: "es" | "en";
}

export default function Hero({ lang }: HeroProps) {
    const t = content[lang].hero;

    return (
        <section className="px-4 md:px-8 max-w-[1440px] mx-auto mb-32 pt-24 min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
            {/* Tech Dots Background para respetar el estilo industrial */}
            <div className="absolute inset-0 tech-dot-bg opacity-30 pointer-events-none -z-10 bg-surface"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 pt-16">
                <div className="md:col-span-12 lg:col-span-10">
                    <h1 className="massive-text text-[clamp(2.5rem,8vw,7rem)] text-on-surface mb-12">
                        <span className="block mb-4 leading-none">{t.strategy || "ESTRATEGIA."}</span>
                        <span className="block mb-4 leading-none">{t.systems || "SISTEMAS."}</span>
                        <div className="flex flex-wrap items-end gap-x-8 border-b-0">
                            <span className="leading-[0.8]">CAPACIDADES.</span>
                            <button className="group flex items-center gap-4 bg-secondary text-white px-8 py-5 font-bold uppercase tracking-widest text-sm hover:bg-secondary-container transition-colors flex-shrink-0 mb-[0.1em]" onClick={() => {
                                const footer = document.getElementById('site-footer');
                                if(footer) footer.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                COTIZAR PROYECTO
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </h1>
                    
                    <p className="max-w-2xl text-on-surface opacity-70 font-label font-medium text-lg md:text-xl leading-relaxed mt-16">
                        {t.desc || "Unificamos modernización digital, comunicación corporativa y activos audiovisuales avanzados bajo una misma ingeniería."}
                    </p>
                </div>
            </div>
        </section>
    );
}
