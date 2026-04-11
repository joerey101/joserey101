"use client";

import { content } from '@/app/content';
import { useState } from 'react';
import ContactForm from './ContactForm';

interface SectionProps {
    lang: "es" | "en";
}

export function LaboratorioIASection({ lang }: SectionProps) {
    const t = content[lang];
    if (lang !== "es") return null;
    return (
        <section className="bg-carbon text-white py-24 px-8 lg:px-16 border-y border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-electric-blue/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-[1400px] mx-auto">
                <span className="font-meta text-[10px] font-bold uppercase tracking-[0.4em] text-neon-pink mb-4 block">
                    Module // 004
                </span>
                <h2 className="font-display font-black text-5xl md:text-7xl uppercase italic tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">
                    {t.laboratorioIA?.title}
                </h2>
                <p className="font-meta text-neon-pink text-xl md:text-2xl font-bold uppercase tracking-widest mb-6">
                    {t.laboratorioIA?.subtitle}
                </p>
                <p className="font-meta text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed">
                    {t.laboratorioIA?.desc}
                </p>
            </div>
        </section>
    );
}

export function EntryFilterSection({ lang }: SectionProps) {
    const t = content[lang];
    if (lang !== "es") return null;
    return (
        <section className="bg-white text-carbon py-24 px-8 lg:px-16 border-b border-grid-line">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 items-baseline">
                <div className="flex-1">
                    <h2 className="font-display font-black text-4xl md:text-6xl uppercase italic tracking-tighter leading-[0.9]">
                        {t.filtroEntrada?.title}
                    </h2>
                </div>
                <div className="flex-1">
                    <p className="font-meta text-carbon/60 text-xl leading-relaxed">
                        {t.filtroEntrada?.desc}
                    </p>
                </div>
            </div>
        </section>
    );
}

export function DiagnosticCTASection({ lang }: SectionProps) {
    const t = content[lang];
    const [isFormOpen, setIsFormOpen] = useState(false);
    if (lang !== "es") return null;
    return (
        <section className="bg-electric-blue text-white py-32 px-8 lg:px-16 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto text-center relative z-10">
                <h2 className="font-display font-black text-5xl md:text-8xl uppercase italic tracking-tighter mb-8 leading-[0.8]">
                    {t.ctaPrincipal?.title}
                </h2>
                <p className="font-meta text-white/80 text-xl md:text-2xl max-w-4xl mx-auto mb-16 leading-relaxed">
                    {t.ctaPrincipal?.desc}
                </p>
                <button 
                    onClick={() => setIsFormOpen(true)}
                    className="bg-white text-carbon px-12 py-6 rounded-none font-display font-black text-2xl uppercase tracking-widest hover:bg-carbon hover:text-white transition-all shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2"
                >
                    {t.ctaPrincipal?.buttonText}
                </button>
            </div>
            
            <span className="absolute bottom-[-5vw] right-[-5vw] font-display font-black text-[25vw] opacity-10 pointer-events-none select-none italic">
                DIAGNOSTIC
            </span>

            <ContactForm 
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                lang={lang}
            />
        </section>
    );
}
