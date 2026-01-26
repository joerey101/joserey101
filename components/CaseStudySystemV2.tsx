"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X, CaretLeft, CaretRight } from '@phosphor-icons/react';

// Types covering our Hybrid Schema
interface KeyMetric {
    value: string;
    label: string;
    icon?: string;
}

interface CaseStudy {
    id: string;
    title: string;
    subtitle: string;
    slug: { current: string };
    tier: number;
    tagDisplay: string;
    filterTag?: string; // Mapped from 'tag'
    color: string;
    mainImage: string;
    duration?: string;
    keyMetrics?: KeyMetric[];
    techStack?: string[];
    challenge?: string;
    solution?: string;
    impact?: string;
    gallery?: string[];
}

interface CaseStudySystemProps {
    initialCases: any[]; // We'll map raw sanity data to CaseStudy
    lang: "es" | "en";
}

export default function CaseStudySystemV2({ initialCases, lang }: CaseStudySystemProps) {
    const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const drawerContainerRef = useRef<HTMLDivElement>(null);

    // Scroll Progress logic for the Apple Effect (Targeting the internal container)
    const { scrollYProgress } = useScroll({
        container: drawerContainerRef,
        offset: ["start start", "end end"]
    });

    // Transforms for the "Apple Esfumado" inside the drawer
    const blurOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const imageScale = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);
    const textFadeOut = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
    const metricsY = useTransform(scrollYProgress, [0, 0.1], [0, -30]);

    // Content entrance
    const contentOpacity = useTransform(scrollYProgress, [0.08, 0.15], [0, 1]);
    const contentY = useTransform(scrollYProgress, [0.08, 0.15], [30, 0]);

    // Scroll Lock Effect
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isDrawerOpen]);

    const openDrawer = (c: any) => {
        const formatted = {
            ...c,
            id: c._id,
            mainImage: c.imgUrl || (c.mainImage?.asset?.url) || ""
        };
        setSelectedCase(formatted);
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
        setTimeout(() => setSelectedCase(null), 500);
    };

    const handleNext = () => {
        if (!selectedCase) return;
        const currentIndex = initialCases.findIndex(c => c._id === selectedCase.id);
        const nextIndex = (currentIndex + 1) % initialCases.length;
        if (drawerContainerRef.current) drawerContainerRef.current.scrollTop = 0;
        openDrawer(initialCases[nextIndex]);
    };

    const handlePrev = () => {
        if (!selectedCase) return;
        const currentIndex = initialCases.findIndex(c => c._id === selectedCase.id);
        const prevIndex = (currentIndex - 1 + initialCases.length) % initialCases.length;
        if (drawerContainerRef.current) drawerContainerRef.current.scrollTop = 0;
        openDrawer(initialCases[prevIndex]);
    };

    return (
        <>
            {/* 1. THE GRID (Industrial Aesthetics) */}
            <section className="px-4 py-20 bg-background-light">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1400px] mx-auto">
                    {initialCases.map((item) => (
                        <div
                            key={item._id}
                            onClick={() => openDrawer(item)}
                            className="group relative aspect-[4/3] bg-carbon cursor-pointer overflow-hidden border border-carbon/10"
                        >
                            <Image
                                src={item.imgUrl || "/assets/img/haddock.png"}
                                alt={item.title}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <span
                                    className={`inline-block w-fit px-2 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest text-carbon ${item.color}`}
                                >
                                    {item.tagDisplay}
                                </span>
                                <h3 className="text-4xl md:text-5xl font-display font-black uppercase text-white leading-[0.9]">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. THE RIGHT SIDE DRAWER (Hybrid: Gemini Mobility + Apple Aesthetics) */}
            <AnimatePresence>
                {isDrawerOpen && selectedCase && (
                    <div className="fixed inset-0 z-[9999] pointer-events-none">

                        {/* Backdrop (GEMINI MOBILITY) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeDrawer}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
                        />

                        {/* Drawer Panel (SIDE DEPLOYMENT) */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 200 }}
                            className="absolute top-0 right-0 h-full w-full md:w-[85vw] lg:w-[65vw] bg-carbon shadow-2xl pointer-events-auto flex flex-col"
                        >

                            {/* Scroll Area inside Drawer */}
                            <div
                                ref={drawerContainerRef}
                                className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth w-full h-full relative"
                            >
                                <div className="relative h-[250vh] w-full">

                                    {/* STICKY HERO SECTION (APPLE STYLE) */}
                                    <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                                        {/* Background Image inside Drawer */}
                                        <motion.div
                                            style={{ scale: imageScale }}
                                            className="absolute inset-0 z-0"
                                        >
                                            <Image
                                                src={selectedCase.mainImage}
                                                alt={selectedCase.title}
                                                fill
                                                className="object-cover brightness-50"
                                                priority
                                                unoptimized
                                            />
                                        </motion.div>

                                        {/* Esfumado (Blur) Layer */}
                                        <motion.div
                                            style={{ opacity: blurOpacity }}
                                            className="absolute inset-0 z-10 bg-black/70 backdrop-blur-3xl"
                                        />

                                        {/* Top Controls (FIXED Z-INDEX TO BE TOP) */}
                                        <div className="absolute top-0 left-0 w-full p-6 md:p-10 z-[100] flex justify-between items-center">
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={handlePrev}
                                                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-carbon transition-all"
                                                >
                                                    <CaretLeft size={24} weight="bold" />
                                                </button>
                                                <button
                                                    onClick={handleNext}
                                                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-carbon transition-all"
                                                >
                                                    <CaretRight size={24} weight="bold" />
                                                </button>
                                            </div>
                                            <button
                                                onClick={closeDrawer}
                                                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-carbon rounded-full hover:rotate-90 transition-all duration-300 shadow-xl"
                                            >
                                                <X size={24} weight="bold" />
                                            </button>
                                        </div>

                                        {/* Hero Text */}
                                        <motion.div
                                            style={{ opacity: textFadeOut, y: metricsY }}
                                            className="relative z-20 text-center px-8 md:px-16"
                                        >
                                            <span className={`inline-block px-3 py-1 mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-carbon ${selectedCase.color}`}>
                                                {selectedCase.tagDisplay}
                                            </span>
                                            <h2 className="text-5xl md:text-[7vw] font-display font-black uppercase leading-[0.85] tracking-tighter text-white mb-6">
                                                {selectedCase.title}
                                            </h2>
                                            <p className="text-lg md:text-xl font-light text-white/50 uppercase tracking-widest">
                                                {selectedCase.subtitle}
                                            </p>
                                        </motion.div>

                                        {/* Float Metrics */}
                                        {selectedCase.keyMetrics && (
                                            <motion.div
                                                style={{ opacity: textFadeOut, y: metricsY }}
                                                className="absolute bottom-12 left-0 w-full flex justify-center gap-4 px-6 overflow-x-auto no-scrollbar"
                                            >
                                                {selectedCase.keyMetrics.map((m, i) => (
                                                    <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-xl min-w-[140px] text-center">
                                                        <p className="text-2xl font-display font-bold text-white mb-1">{m.value}</p>
                                                        <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">{m.label}</p>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* SCROLLABLE CONTENT AREA */}
                                    <motion.div
                                        style={{ opacity: contentOpacity, y: contentY }}
                                        className="relative z-30 -mt-[45vh] pb-32 bg-transparent"
                                    >
                                        <div className="max-w-4xl mx-auto px-8 md:px-16 flex flex-col gap-32">

                                            {/* Challenge */}
                                            <div className="flex flex-col gap-6">
                                                <h3 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">{lang === 'es' ? 'El Desafío' : 'The Challenge'}</h3>
                                                <p className="text-2xl md:text-4xl font-light leading-tight text-white italic">
                                                    "{selectedCase.challenge}"
                                                </p>
                                            </div>

                                            {/* Solution */}
                                            <div className="flex flex-col gap-6">
                                                <h3 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">{lang === 'es' ? 'La Solución' : 'The Solution'}</h3>
                                                <div className="space-y-10">
                                                    <p className="text-lg md:text-xl font-light leading-relaxed text-white/70">
                                                        {selectedCase.solution}
                                                    </p>

                                                    {/* Tech Grid */}
                                                    {selectedCase.techStack && (
                                                        <div className="pt-10 border-t border-white/5">
                                                            <div className="flex flex-wrap gap-2">
                                                                {selectedCase.techStack.map(tech => (
                                                                    <span key={tech} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold text-white/40">
                                                                        {tech}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Impact */}
                                            <div className="flex flex-col gap-6">
                                                <h3 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">{lang === 'es' ? 'El Impacto' : 'The Impact'}</h3>
                                                <p className="text-xl md:text-3xl font-display font-medium leading-relaxed text-white">
                                                    {selectedCase.impact}
                                                </p>
                                            </div>

                                            {/* Simple Gallery */}
                                            {selectedCase.gallery && selectedCase.gallery.length > 0 && (
                                                <div className="grid grid-cols-1 gap-4">
                                                    {selectedCase.gallery.map((img, i) => (
                                                        <div key={i} className="relative aspect-video rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                                            <Image src={img} alt="Detail" fill className="object-cover" />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Bottom CTA */}
                                            <div className="py-20 text-center border-t border-white/5">
                                                <button
                                                    onClick={handleNext}
                                                    className="group flex flex-col items-center gap-4 mx-auto"
                                                >
                                                    <span className="text-white/20 text-[10px] uppercase tracking-[0.4em]">{lang === 'es' ? 'Próximo Proyecto' : 'Next Project'}</span>
                                                    <span className="text-4xl md:text-6xl font-display font-black uppercase text-white group-hover:text-electric-blue transition-colors">
                                                        CONTINUAR
                                                    </span>
                                                </button>
                                            </div>

                                        </div>
                                    </motion.div>

                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
