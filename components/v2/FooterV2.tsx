"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '@/app/content';
import ContactForm from '../ContactForm';

export default function Footer({ lang }: { lang: "es" | "en" }) {
    const isEs = lang === "es";
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <>
            <footer id="site-footer" className="bg-surface-container-low py-32 px-8 relative overflow-hidden">
                <div className="absolute top-20 left-0 w-full select-none opacity-10 pointer-events-none overflow-hidden">
                    <motion.div 
                        initial={{ x: "0%" }}
                        animate={{ x: "-50%" }}
                        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                        className="flex whitespace-nowrap w-max"
                    >
                        {Array.from({ length: 10 }).map((_, i) => (
                            <span key={i} className="massive-text text-[15rem] md:text-[20rem] leading-none text-on-surface pr-32">
                                FUTURO
                            </span>
                        ))}
                    </motion.div>
                </div>
                
                <div className="max-w-[1440px] mx-auto flex flex-col items-start gap-12 w-full relative z-10">
                    <div className="w-full">
                        <h2 className="massive-text text-6xl md:text-9xl text-on-surface mb-6">
                            {isEs ? "EL FUTURO ES AHORA." : "THE FUTURE IS NOW."}
                        </h2>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                            <div className="max-w-md">
                                <p className="text-on-surface font-label text-lg font-medium mb-8">
                                    {isEs 
                                        ? "Convertimos tu visión en un activo digital productivo. Cotiza con ingeniería." 
                                        : "We turn your vision into a productive digital asset. Engineer your quote."}
                                </p>
                                <button 
                                    className="bg-secondary text-white px-10 py-5 font-bold uppercase tracking-widest text-sm transition-transform active:scale-95 hover:bg-secondary-container hover:text-on-secondary-container"
                                    onClick={() => setIsFormOpen(true)}
                                >
                                    {isEs ? "HABLEMOS DE TU PROYECTO" : "LET'S TALK ABOUT YOUR PROJECT"}
                                </button>
                            </div>
                            <div className="flex flex-col gap-4 items-end">
                                <div className="text-2xl font-black tracking-tighter text-on-surface">BS</div>
                                <div className="flex flex-wrap gap-4 md:gap-8 justify-end">
                                    <a className="text-sm font-label tracking-widest uppercase opacity-50 hover:text-secondary hover:opacity-100 transition-colors text-on-surface" href="https://linkedin.com">LinkedIn</a>
                                    <a className="text-sm font-label tracking-widest uppercase opacity-50 hover:text-secondary hover:opacity-100 transition-colors text-on-surface" href="https://instagram.com">Instagram</a>
                                    <a className="text-sm font-label tracking-widest uppercase opacity-50 hover:text-secondary hover:opacity-100 transition-colors text-on-surface" href="#">Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full pt-12 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between text-[10px] sm:text-xs font-label tracking-[0.3em] uppercase opacity-40 text-on-surface gap-4">
                        <span>© {new Date().getFullYear()} Bestarlight. {isEs ? "El futuro es ahora" : "The future is now"}.</span>
                        <span>BUENOS AIRES / LONDON / TOKYO</span>
                    </div>
                </div>
            </footer>
            
            <ContactForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                lang={lang}
            />
        </>
    );
}
