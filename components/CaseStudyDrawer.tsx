"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({ container: scrollRef });

    // Apple-Style "Crystal" Blur Effect
    // As user scrolls 400px, blur opacity goes from 0 to 1
    const blurOpacity = useTransform(scrollY, [0, 400], [0, 1]);
    // Parallax scale for depth
    const imageScale = useTransform(scrollY, [0, 600], [1, 1.1]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            if (scrollRef.current) scrollRef.current.scrollTop = 0; // Reset scroll
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!caseStudy) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100]">

                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        onClick={onClose}
                    >
                        <div className="absolute top-8 left-8 text-white hidden md:flex items-center gap-2 opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
                            <IconArrowLeft /> <span>VOLVER AL INDICE</span>
                        </div>
                    </motion.div>

                    {/* Drawer Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="absolute top-0 right-0 h-full w-full md:w-[85vw] lg:w-[70vw] bg-black shadow-[0_0_100px_rgba(0,0,0,0.8)] border-l border-white/10"
                    >
                        {/* Scroll Container */}
                        <div ref={scrollRef} className="absolute inset-0 overflow-y-auto no-scrollbar scroll-smooth">

                            {/* Sticky Hero Section (Apple Mode) */}
                            <div className="sticky top-0 h-[80vh] w-full overflow-hidden z-0">
                                <motion.div style={{ scale: imageScale }} className="relative w-full h-full">
                                    <Image
                                        src={caseStudy.coverImage}
                                        alt={caseStudy.title}
                                        fill
                                        className="object-cover"
                                        priority
                                        quality={90}
                                    />
                                    {/* Gradient for text readability at bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />
                                </motion.div>

                                {/* The Magic Crystal Blur Layer */}
                                <motion.div
                                    style={{ opacity: blurOpacity }}
                                    className="absolute inset-0 bg-black/80 backdrop-blur-xl pointer-events-none"
                                />

                                {/* Hero Text Content - Initially visible, then fades/blurs out slightly or stays legible? 
                                   User said "foto se esfumaba". Text usually stays or parallax. 
                                   Let's keep text fixed relative to image container bottom, but maybe fade it?
                                   Actually, usually the text SCROLLS UP over the blur.
                                */}
                                <div className="absolute bottom-0 left-0 p-8 md:p-20 w-full max-w-6xl z-10 pointer-events-none">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.8 }}
                                        className="text-6xl md:text-8xl lg:text-9xl font-display font-black uppercase leading-[0.85] tracking-tighter text-white mb-6"
                                    >
                                        {caseStudy.title}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                        className="text-xl md:text-3xl text-white/80 font-light max-w-3xl leading-snug"
                                    >
                                        {caseStudy.subtitle}
                                    </motion.p>
                                </div>
                            </div>

                            {/* Scrolling Content (z-index higher than sticky hero) */}
                            <div className="relative z-10 w-full bg-transparent">
                                {/* Spacer to push content below the 80vh hero */}
                                <div className="h-[80vh] pointer-events-none" />

                                {/* Content Body - Background black to cover image as we scroll up */}
                                <div className="bg-black border-t border-white/10 min-h-screen">

                                    {/* Floating Snapshot Bar */}
                                    <div className="-mt-16 px-8 md:px-20 mb-20 relative z-20">
                                        <div className="bg-neutral-900/80 backdrop-blur-2xl border border-white/10 p-8 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 rounded-sm shadow-2xl">
                                            {caseStudy.snapshot.map((item, idx) => (
                                                <div key={idx} className="flex flex-col gap-2">
                                                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40">{item.label}</span>
                                                    <span className="text-lg md:text-xl font-bold font-display text-white">{item.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Narrative Content */}
                                    <div className="px-8 md:px-20 pb-40 max-w-5xl">
                                        <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-24">
                                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">El Desafío</h3>
                                            <p className="text-2xl md:text-4xl font-light leading-relaxed text-white/90">
                                                {caseStudy.challenge}
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-24">
                                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">La Solución</h3>
                                            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
                                                {caseStudy.solution}
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-32">
                                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">Impacto</h3>
                                            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl border-l-2 border-white/20 pl-6">
                                                {caseStudy.impact}
                                            </p>
                                        </div>

                                        {/* CTA */}
                                        <div className="flex flex-col md:flex-row gap-8 items-center justify-between border-t border-white/10 pt-20">
                                            {caseStudy.url && (
                                                <a
                                                    href={caseStudy.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors text-sm"
                                                >
                                                    Visitar Sitio Projecto
                                                </a>
                                            )}

                                            {caseStudy.hasStandalone && (
                                                <Link
                                                    href={`/case-studies/${caseStudy.slug}`}
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

                        {/* Close Button fixed over everything */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-50 p-4 rounded-full bg-black/20 text-white hover:bg-white hover:text-black transition-all border border-white/10 backdrop-blur-md group"
                        >
                            <div className="group-hover:rotate-90 transition-transform duration-300">
                                <IconClose />
                            </div>
                        </button>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
