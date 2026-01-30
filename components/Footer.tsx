"use client";

import { useState } from 'react';
import { content } from '@/app/content';
import ContactForm from './ContactForm';

interface FooterProps {
    lang: "es" | "en";
}

export default function Footer({ lang }: FooterProps) {
    const t = content[lang].footer;
    const [isFormOpen, setIsFormOpen] = useState(false);

    const socialLinks = [
        { name: "LinkedIn", url: "https://linkedin.com/in/joserey" }
    ];

    return (
        <footer className="bg-electric-blue text-carbon min-h-screen flex flex-col justify-between p-6 lg:p-12 relative overflow-hidden z-10">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:block">
                <p className="sticky-label font-display font-bold text-xs tracking-[0.4em] uppercase opacity-40">
                    {t.label}
                </p>
            </div>

            <div className="pt-20 relative z-10 mb-12">
                <h2 className="font-display font-black text-[7vw] md:text-[80px] lg:text-[100px] leading-[0.9] tracking-[-0.03em] uppercase mb-6">
                    {t.title}
                </h2>
                <p className="font-meta text-lg md:text-[32px] text-carbon/80 max-w-4xl font-bold leading-tight">
                    {t.desc}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end relative z-10 pb-12">
                <div className="md:col-span-4 lg:col-span-5">
                    <button
                        onClick={() => setIsFormOpen(true)}
                        className="inline-flex items-center gap-4 px-10 py-5 bg-carbon text-white rounded-full font-display font-bold text-xl md:text-2xl uppercase tracking-widest hover:scale-105 hover:bg-white hover:text-carbon transition-all shadow-xl group cursor-pointer"
                    >
                        {t.cta} <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform">arrow_outward</span>
                    </button>
                </div>
                <div className="md:col-span-4 lg:col-span-2 flex justify-center items-center font-display text-xs uppercase tracking-widest font-bold">
                    {socialLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className="md:col-span-4 lg:col-span-5 text-right">
                    <p className="font-meta text-[10px] uppercase tracking-widest font-bold opacity-60">
                        {t.copyright}
                    </p>
                </div>
            </div>

            <span className="material-symbols-outlined absolute bottom-[-50px] right-[-50px] text-[300px] opacity-10 pointer-events-none icon-filled animate-pulse">
                bolt
            </span>

            <ContactForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                lang={lang}
            />
        </footer>
    );
}
