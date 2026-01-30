"use client";

import { useEffect, useRef } from 'react';
import { content } from '@/app/content';

interface HeroBaseProps {
    lang: "es" | "en";
    background?: React.ReactNode;
}

export default function HeroBase({ lang, background }: HeroBaseProps) {
    const t = content[lang].hero;
    const dynamicTextRef = useRef<HTMLSpanElement>(null);
    const blockARef = useRef<HTMLDivElement>(null);
    const blockBRef = useRef<HTMLDivElement>(null);
    const footerTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const words = t.typingWords;
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId: NodeJS.Timeout;

        const type = () => {
            const currentWord = words[wordIndex];
            const dynamicText = dynamicTextRef.current;
            if (!dynamicText) return;

            if (isDeleting) {
                dynamicText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                dynamicText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 40 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                if (wordIndex === words.length - 1) {
                    dynamicText.classList.remove("typing-cursor");
                    timeoutId = setTimeout(() => {
                        if (blockARef.current) {
                            blockARef.current.classList.add("fade-out");
                            blockARef.current.style.opacity = "0";
                        }
                        timeoutId = setTimeout(() => {
                            if (blockARef.current) blockARef.current.classList.add("hidden");
                            if (blockBRef.current) {
                                blockBRef.current.classList.remove("hidden");
                                blockBRef.current.classList.add("fade-in-reveal", "visible");
                                blockBRef.current.style.opacity = "1";
                            }
                            if (footerTextRef.current) {
                                footerTextRef.current.style.opacity = "1";
                            }
                        }, 1000);
                    }, 1000);
                    return;
                }
                typeSpeed = 1500;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex++;
                typeSpeed = 300;
            }

            timeoutId = setTimeout(type, typeSpeed);
        };

        timeoutId = setTimeout(type, 1000);
        return () => clearTimeout(timeoutId);
    }, [t.typingWords]);

    return (
        <section className="flex flex-col items-center justify-center pt-0 px-8 text-center h-screen relative overflow-hidden bg-background-light border-grid-line">
            {/* Custom Background provided by child */}
            {background}

            <div className="max-w-[1400px] w-full relative z-10 flex flex-col items-center justify-center h-full">

                {/* Block A */}
                <div id="block-a" ref={blockARef} className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 -mt-12">
                    <p className="font-meta text-sm md:text-base font-extrabold tracking-[0.3em] uppercase mb-8 md:mb-12 text-neon-pink animate-pulse">
                        {t.label}
                    </p>
                    <div className="flex flex-col items-center gap-2 md:gap-4">
                        <span className="block text-[8vw] md:text-[5rem] tracking-[0.1em] font-bold leading-none text-carbon">{t.logic}</span>
                        <span id="dynamic-text" ref={dynamicTextRef} className="text-carbon typing-cursor block font-mono text-[10vw] md:text-[7rem] leading-none text-center break-words max-w-full min-h-[1.2em]"></span>
                    </div>
                </div>

                {/* Block B */}
                <div id="block-b" ref={blockBRef} className="hidden opacity-0 flex flex-col items-center justify-center transition-all duration-1000 w-full h-full py-12 md:py-0 gap-8 text-carbon">
                    <div className="flex flex-col items-center justify-center -mt-12 md:mt-0">
                        <span className="block text-xs md:text-sm font-meta font-bold opacity-40 mb-4 tracking-[0.3em] uppercase">{t.weCreate}</span>
                        <div className="flex flex-col items-center text-center gap-0">
                            <span className="text-gradient-pop font-display font-black text-[clamp(2.5rem,7vw,6.5rem)] gradient-text-fix tracking-tighter leading-none">{t.strategy}</span>
                            <div className="w-6 h-6 md:w-8 md:h-8 my-[-10px] md:my-[-35px] z-10 relative">
                                <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform -rotate-6">
                                    <path d="M 40 10 L 45 5 L 55 8 L 60 5 L 58 40 L 90 38 L 95 45 L 92 55 L 58 58 L 60 90 L 50 95 L 42 90 L 40 60 L 10 62 L 5 50 L 8 40 L 42 42 Z" />
                                </svg>
                            </div>
                            <span className="text-gradient-pop font-display font-black text-[clamp(2.5rem,7vw,6.5rem)] gradient-text-fix tracking-tighter leading-none relative z-0">{t.systems}</span>
                            <div className="w-6 h-6 md:w-8 md:h-8 my-[-10px] md:my-[-35px] z-10 relative">
                                <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform -rotate-6">
                                    <path d="M 40 10 L 45 5 L 55 8 L 60 5 L 58 40 L 90 38 L 95 45 L 92 55 L 58 58 L 60 90 L 50 95 L 42 90 L 40 60 L 10 62 L 5 50 L 8 40 L 42 42 Z" />
                                </svg>
                            </div>
                            <span className="text-gradient-pop font-display font-black text-[clamp(2.5rem,7vw,6.5rem)] gradient-text-fix tracking-tighter leading-none whitespace-nowrap relative z-0">{t.digitalMind}</span>
                        </div>
                    </div>

                    <div id="hero-footer-text" ref={footerTextRef} className="opacity-0 transition-all duration-1000 relative flex flex-col items-center justify-start gap-8 w-full max-w-4xl mx-auto -mt-4 md:-mt-[40px]">
                        <p className="text-sm md:text-xl leading-relaxed text-carbon/70 font-medium text-balance text-center max-w-3xl mx-auto block">
                            {t.desc}
                        </p>

                        <a href="#work" className="bg-carbon text-white px-8 py-3 rounded-full font-meta text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-neon-pink hover:scale-105 transition-all shadow-lg">
                            {t.cta}
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
