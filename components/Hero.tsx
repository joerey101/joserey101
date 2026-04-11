"use client";

import { useEffect, useRef } from 'react';
import { content } from '@/app/content';
import MilkyWay from './MilkyWay';

interface HeroProps {
    lang: "es" | "en";
}

export default function Hero({ lang }: HeroProps) {
    const t = content[lang].hero;
    const dynamicTextRef = useRef<HTMLSpanElement>(null);
    const blockARef = useRef<HTMLDivElement>(null);
    const blockBRef = useRef<HTMLDivElement>(null);
    const footerTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // La animación de tipeo se removió. Mostramos el bloque B directamente
        if (blockBRef.current) {
            blockBRef.current.classList.remove("hidden", "opacity-0");
            blockBRef.current.style.opacity = "1";
        }
        if (footerTextRef.current) {
            footerTextRef.current.classList.remove("opacity-0");
            footerTextRef.current.style.opacity = "1";
        }
    }, [t]);

    return (
        <section className="flex flex-col items-start justify-center pt-0 h-[100svh] relative overflow-hidden bg-[#02050B] border-b border-grid-line w-full">
            {/* Video de fondo */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src="/assets/img/HOME-VIDEO-STARLIGHT.mp4"
            />
            <div className="absolute inset-0 bg-carbon/60 pointer-events-none" />

            <div className="w-full relative z-10 flex flex-col justify-center h-full px-8 lg:px-16">

                <span className="font-meta text-[10px] font-bold uppercase tracking-[0.4em] text-electric-blue mb-6">
                    {t.label}
                </span>

                <h1 className="font-display font-black tracking-tighter uppercase italic text-white leading-[0.95] mb-6">
                    <span className="block text-[5vw] whitespace-nowrap">
                        {t.weCreate} <span className="text-electric-blue">{t.strategy},</span>
                    </span>
                    <span className="block text-[5vw] whitespace-nowrap">
                        {t.systems} y <span className="text-neon-pink">{t.digitalMind}</span>.
                    </span>
                </h1>

                <p className="font-meta text-base text-white/60 whitespace-nowrap mb-10">
                    {t.descMobile}
                </p>

                <div className="flex items-center gap-4">
                    <a href="#blueprints" className="bg-white text-carbon px-8 py-4 rounded-full font-meta text-[11px] font-black uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all">
                        {t.cta}
                    </a>
                    <a href="#work" className="border border-white/30 text-white px-8 py-4 rounded-full font-meta text-[11px] font-black uppercase tracking-widest hover:border-white transition-all">
                        {lang === "es" ? "Ver trabajo" : "Our work"}
                    </a>
                </div>

            </div>

            {/* Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-neon-pink/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        </section>
    );
}
