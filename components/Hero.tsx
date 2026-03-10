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
        <section className="flex flex-col items-center justify-center pt-0 px-8 text-center h-screen relative overflow-hidden bg-[#02050B] border-b border-grid-line">
            <MilkyWay />

            <div className="max-w-[1800px] mx-auto w-full relative z-10 flex flex-col items-start justify-center h-full px-3 md:px-6 lg:px-12">

                {/* Block B - Ahora único bloque visible */}
                <div id="block-b" ref={blockBRef} className="flex flex-col justify-center w-full h-full py-12 md:py-0 gap-2 md:gap-4 max-w-5xl">

                    <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left w-full h-full lg:pt-[5vh]">
                        <span className="block text-base md:text-xl font-meta font-bold opacity-70 mb-4 tracking-[0.4em] uppercase text-electric-blue">{t.weCreate}</span>

                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 md:gap-1 mb-6 w-full">
                            <span className="text-white font-display font-black text-[clamp(2.75rem,11vw,9rem)] md:text-[clamp(3.5rem,9vw,9rem)] tracking-tighter leading-[0.85] uppercase">{t.strategy}</span>
                            <span className="text-white font-display font-black text-[clamp(2.75rem,11vw,9rem)] md:text-[clamp(3.5rem,9vw,9rem)] tracking-tighter leading-[0.85] uppercase">{t.systems}</span>
                            <span className="text-white font-display font-black text-[clamp(2.75rem,11vw,9rem)] md:text-[clamp(3.5rem,9vw,9rem)] tracking-tighter leading-[0.85] uppercase whitespace-normal md:whitespace-nowrap break-words max-w-full">{t.digitalMind}</span>
                        </div>

                        <div id="hero-footer-text" ref={footerTextRef} className="flex flex-col items-center lg:items-start justify-start gap-4 w-full">
                            <div className="text-xl md:text-[1.7rem] md:whitespace-nowrap leading-snug md:leading-tight text-white font-medium text-center lg:text-left hidden md:block">
                                {t.desc}
                            </div>
                            <p className="text-base leading-relaxed text-white/80 font-medium text-center lg:text-left md:hidden px-4">
                                {t.descMobile}
                            </p>

                            {/* Botones temporalmente removidos por pedido */}
                        </div>
                    </div>
                </div>

            </div>

            {/* Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-neon-pink/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        </section>
    );
}
