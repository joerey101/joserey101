"use client";

import { useState, useRef } from 'react';
import { content } from '@/app/content';
import ContactForm from './ContactForm';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FooterProps {
    lang: "es" | "en";
}

export default function Footer({ lang }: FooterProps) {
    const t = content[lang].footer;
    const [isFormOpen, setIsFormOpen] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    const socialLinks = [
        { name: "LinkedIn", url: "https://linkedin.com/in/joserey" }
    ];

    return (
        <footer ref={containerRef} className="bg-black text-white min-h-screen flex flex-col justify-between p-6 lg:p-12 relative overflow-hidden z-10 border-t border-white/10">

            {/* Background Grid Accent */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            <div className="absolute left-6 top-12 hidden xl:block">
                <p className="font-display font-bold text-xs tracking-[0.4em] uppercase opacity-40 text-white">
                    {t.label}
                </p>
            </div>

            <div className="flex-grow flex flex-col justify-center items-center relative z-10 py-20">
                <motion.div style={{ y, opacity }} className="text-center">

                    <h2 className="font-display font-black text-[12vw] leading-[0.8] tracking-tighter uppercase mb-12 mix-blend-difference">
                        EL FUTURO <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">ES AHORA.</span>
                    </h2>

                    <p className="font-meta text-lg md:text-[24px] text-white/60 max-w-2xl mx-auto font-light leading-relaxed mb-16 uppercase tracking-widest">
                        {t.desc}
                    </p>

                    <button
                        onClick={() => setIsFormOpen(true)}
                        className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-white text-black rounded-full font-display font-black text-2xl md:text-3xl uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-500 cursor-pointer overflow-hidden"
                    >
                        <span className="relative z-10">{t.cta}</span>
                        <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 relative z-10">arrow_outward</span>

                        {/* Button Hover Fill */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>

                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end relative z-10 pb-4 border-t border-white/10 pt-8">
                <div className="md:col-span-4 lg:col-span-5">
                    <span className="block font-display font-bold text-2xl tracking-tighter">JOSEREY101</span>
                </div>
                <div className="md:col-span-4 lg:col-span-2 flex justify-center items-center font-display text-xs uppercase tracking-widest font-bold">
                    {socialLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-neon-pink transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className="md:col-span-4 lg:col-span-5 text-right">
                    <p className="font-meta text-[10px] uppercase tracking-widest font-bold opacity-40">
                        {t.copyright}
                    </p>
                </div>
            </div>

            {/* Giant Background Detail */}
            <span className="font-display font-black absolute bottom-[-10vw] left-1/2 -translate-x-1/2 text-[30vw] opacity-[0.03] pointer-events-none whitespace-nowrap select-none">
                FUTURE
            </span>

            <ContactForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                lang={lang}
            />
        </footer>
    );
}
