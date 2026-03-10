"use client";

import Image from 'next/image';
import { content } from '@/app/content';
import { useState } from 'react';
import ContactForm from './ContactForm';

interface DeepDiveProps {
    lang: "es" | "en";
}

export default function DeepDive({ lang }: DeepDiveProps) {
    const t = content[lang].deepDive;
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <section className="relative w-full bg-white pt-16 border-b border-grid-line">
            <div className="relative py-16 px-6 md:px-12 overflow-hidden bg-[#003B85]">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                    <div className="flex-1">
                        <h2 className="font-display font-black text-5xl md:text-[6.4rem] uppercase leading-[0.9] tracking-tighter mb-6 text-white relative">
                            {t.titleMain} <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-white/70">{t.titleHighlight}</span>
                            <br />{t.titleSub} <span className="italic font-serif font-light text-white/50">{t.titleSubHighlight}</span>
                        </h2>
                        <p className="font-meta text-white/80 text-2xl max-w-xl">
                            {t.desc}
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="group relative inline-flex items-center justify-center px-12 py-6 bg-white overflow-hidden rounded-[5px] transition-all hover:scale-105 shadow-xl cursor-pointer"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-electric-blue rounded-full group-hover:w-96 group-hover:h-96 opacity-10"></span>
                            <span className="relative font-bold font-display uppercase tracking-widest text-[#003B85] text-xl group-hover:tracking-[0.3em] transition-all">{t.cta}</span>
                            <span className="material-symbols-outlined ml-4 text-[#003B85] relative group-hover:translate-x-2 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>

            <ContactForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                lang={lang}
            />
        </section>
    );
}
