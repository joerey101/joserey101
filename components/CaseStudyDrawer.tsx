
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CaseStudy } from '@/data/case-studies';

// Basic Icons from SVG
const IconArrowLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);
const IconClose = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

interface CaseStudyDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    caseStudy: CaseStudy | null;
}

export default function CaseStudyDrawer({ isOpen, onClose, caseStudy }: CaseStudyDrawerProps) {
    const [mount, setMount] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setMount(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setMount(false), 500); // Animation duration
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!mount && !isOpen) return null;

    const currentCase = caseStudy;
    if (!currentCase) return null;

    return (
        <div className={`fixed inset-0 z-[100] transition-visibility duration-0 ${isOpen ? 'visible' : 'invisible delay-500'}`}>

            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            >
                <div className="absolute top-8 left-8 text-white hidden md:flex items-center gap-2 opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
                    <IconArrowLeft /> <span>VOLVER AL INDICE</span>
                </div>
            </div>

            {/* Drawer Panel - Restoring the "Massive Slide" feel */}
            <div
                className={`absolute top-0 right-0 h-full w-full md:w-[85vw] lg:w-[70vw] bg-neutral-900 border-l border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-y-auto overflow-x-hidden transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Close Button fixed inside drawer */}
                <button
                    onClick={onClose}
                    className="fixed top-6 right-6 z-50 p-4 rounded-full bg-black/20 text-white hover:bg-white hover:text-black transition-all border border-white/10 backdrop-blur-md group"
                >
                    <div className="group-hover:rotate-90 transition-transform duration-300">
                        <IconClose />
                    </div>
                </button>

                <div className="relative min-h-screen">

                    {/* Hero Section */}
                    <div className="relative h-[70vh] w-full">
                        <Image
                            src={currentCase.coverImage}
                            alt={currentCase.title}
                            fill
                            className="object-cover"
                            priority
                            quality={90}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-neutral-900" />

                        <div className="absolute bottom-0 left-0 p-8 md:p-20 w-full max-w-6xl">
                            {/* Tagline Animation */}
                            <div className={`transition-all duration-700 delay-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black uppercase leading-[0.85] tracking-tighter text-white mb-6">
                                    {currentCase.title}
                                </h1>
                            </div>

                            <div className={`transition-all duration-700 delay-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <p className="text-xl md:text-3xl text-white/80 font-light max-w-3xl leading-snug">
                                    {currentCase.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Snapshot Bar - Floating Effect */}
                    <div className="relative z-10 -mt-16 px-8 md:px-20 mb-20">
                        <div className="bg-neutral-800/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 rounded-sm">
                            {currentCase.snapshot.map((item, idx) => (
                                <div key={idx} className="flex flex-col gap-2">
                                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40">{item.label}</span>
                                    <span className="text-lg md:text-xl font-bold font-display text-white">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Blocks */}
                    <div className="px-8 md:px-20 pb-40 max-w-5xl">

                        {/* Challenge */}
                        <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-24">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-accent">El Desafío</h3>
                            <p className="text-2xl md:text-4xl font-light leading-relaxed text-white/90">
                                {currentCase.challenge}
                            </p>
                        </div>

                        {/* Solution */}
                        <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-24 transition-opacity duration-1000 delay-300">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-accent">La Solución</h3>
                            <div className="space-y-8">
                                <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
                                    {currentCase.solution}
                                </p>
                            </div>
                        </div>

                        {/* Impact */}
                        <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-32">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Impacto</h3>
                            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl border-l-2 border-white/20 pl-6">
                                {currentCase.impact}
                            </p>
                        </div>

                        {/* Call To Action */}
                        <div className="flex flex-col md:flex-row gap-8 items-center justify-between border-t border-white/10 pt-20">
                            {currentCase.url && (
                                <a
                                    href={currentCase.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-accent transition-colors text-sm"
                                >
                                    Visitar Sitio Projecto
                                </a>
                            )}

                            {currentCase.hasStandalone && (
                                <Link
                                    href={`/case-studies/${currentCase.slug}`}
                                    className="text-white/40 hover:text-white uppercase tracking-widest text-sm border-b border-transparent hover:border-white transition-all pb-1"
                                >
                                    Leer Caso Detallado →
                                </Link>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
