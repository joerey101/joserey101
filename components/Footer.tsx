"use client";

import { useState, useRef } from 'react';
import { content } from '@/app/content';
import ContactForm from './ContactForm';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LinkedinLogo } from "@phosphor-icons/react";

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

    return (
        <footer id="site-footer" ref={containerRef} className="bg-black text-white min-h-screen flex flex-col justify-between p-6 lg:p-12 relative overflow-hidden z-10 border-t border-white/10">

            {/* Background Grid Accent */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            <div className="absolute left-6 top-12 hidden xl:block">
                <p className="font-display font-bold text-xs tracking-[0.4em] uppercase opacity-40 text-white">
                    {t.label}
                </p>
            </div>

            <div className="flex-grow flex flex-col justify-center items-center relative z-10 py-20 px-4">
                <motion.div style={{ y, opacity }} className="text-center w-full">

                    <h2 className="font-display font-black text-[15vw] md:text-[12vw] leading-[0.8] tracking-tighter uppercase mb-16 md:mb-24">
                        EL FUTURO <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">ES AHORA.</span>
                    </h2>

                    <div className="font-meta text-lg text-white/80 max-w-6xl mx-auto font-light leading-snug mb-16 md:mb-24 uppercase tracking-widest md:text-[30px] md:font-normal md:leading-normal">
                        {lang === 'es' ? (
                            <>
                                {/* Mobile Layout (Stacked) */}
                                <div className="md:hidden">
                                    <span className="block">Convertimos</span>
                                    <span className="block">tu visión de negocio</span>
                                    <span className="block mb-2">en un activo digital</span>
                                    <span className="block">con ingeniería, medición</span>
                                    <span className="block">y foco en los detalles.</span>
                                </div>

                                {/* Desktop Layout (2 Lines) */}
                                <div className="hidden md:block">
                                    Convertimos tu visión de negocio en un activo digital <br />
                                    con ingeniería, medición y foco en los detalles.
                                </div>
                            </>
                        ) : (
                            t.desc
                        )}
                    </div>

                    <button
                        onClick={() => setIsFormOpen(true)}
                        className="group relative inline-flex items-center justify-center gap-2 md:gap-4 px-8 py-4 md:px-10 md:py-5 bg-cyan-400 text-black rounded-full font-display font-black text-xl md:text-2xl uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all duration-500 cursor-pointer overflow-hidden"
                    >
                        <span className="relative z-10">{t.cta}</span>
                        <span className="material-symbols-outlined text-2xl md:text-3xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 relative z-10">arrow_outward</span>

                        {/* Button Hover Fill */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>

                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end relative z-10 pb-4 border-t border-white/10 pt-8">
                <div className="md:col-span-4 lg:col-span-5 flex items-center gap-4">
                    <span className="block font-display font-bold text-2xl tracking-tighter">BESTARLIGHT</span>
                    <a
                        href="https://linkedin.com/in/joserey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-cyan-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <LinkedinLogo size={32} weight="fill" />
                    </a>
                </div>
                <div className="md:col-span-4 lg:col-span-2 flex justify-center items-center font-display text-xs uppercase tracking-widest font-bold">
                    {/* Social Links removed from center as per request */}
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
