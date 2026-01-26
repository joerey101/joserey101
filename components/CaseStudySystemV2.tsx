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

    // Scroll Progress logic for the Apple Effect
    const { scrollYProgress } = useScroll({
        container: drawerContainerRef,
        offset: ["start start", "end end"]
    });

    // MUCH MORE CONSERVATIVE RANGES - Only start fading after 20% scroll
    const blurOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
    const imageScale = useTransform(scrollYProgress, [0.2, 0.5], [1, 1.1]);
    const textFadeOut = useTransform(scrollYProgress, [0.15, 0.4], [1, 0]);
    const metricsY = useTransform(scrollYProgress, [0.2, 0.5], [0, -100]);

    // Content entrance (Start even later to ensure zero overlap at start)
    const contentOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    const contentY = useTransform(scrollYProgress, [0.4, 0.6], [100, 0]);

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

        // Immediate scroll reset
        if (drawerContainerRef.current) {
            drawerContainerRef.current.scrollTop = 0;
        }
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
            {/* 1. THE GRID */}
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
                                <span className={`inline-block w-fit px-2 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest text-carbon ${item.color}`}>
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

            {/* 2. THE DRAWER */}
            <AnimatePresence>
                {isDrawerOpen && selectedCase && (
                    <div className="fixed inset-0 z-[10000] pointer-events-none">

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeDrawer}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto"
                        />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 35, stiffness: 250 }}
                            className="absolute top-0 right-0 h-full w-full md:w-[85vw] lg:w-[65vw] bg-black shadow-2xl pointer-events-auto flex flex-col overflow-hidden"
                        >

                            <div
                                ref={drawerContainerRef}
                                className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth relative"
                            >
                                <div className="relative h-[400vh] w-full bg-black">

                                    {/* STICKY HERO - ENSURING VISIBILITY */}
                                    <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden z-20">

                                        {/* Background Image - Brightness Fix */}
                                        <motion.div
                                            style={{ scale: imageScale }}
                                            className="absolute inset-0 z-0 h-full w-full"
                                        >
                                            {selectedCase.mainImage && (
                                                <Image
                                                    src={selectedCase.mainImage}
                                                    alt={selectedCase.title}
                                                    fill
                                                    className="object-cover brightness-75" // Slightly brighter for better visibility
                                                    priority
                                                    unoptimized
                                                />
                                            )}
                                        </motion.div>

                                        {/* Esfumado (Blur) Layer - Start at 0% opacity */}
                                        <motion.div
                                            style={{ opacity: blurOpacity }}
                                            className="absolute inset-0 z-10 bg-black/80 backdrop-blur-3xl"
                                        />

                                        {/* Top Controls - Fixed on Top */}
                                        <div className="absolute top-0 left-0 w-full p-6 md:p-10 z-[100] flex justify-between items-center">
                                            <div className="flex gap-3">
                                                <button onClick={handlePrev} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/20 backdrop-blur-xl rounded-full text-white hover:bg-white hover:text-carbon transition-all">
                                                    <CaretLeft size={24} weight="bold" />
                                                </button>
                                                <button onClick={handleNext} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/20 backdrop-blur-xl rounded-full text-white hover:bg-white hover:text-carbon transition-all">
                                                    <CaretRight size={24} weight="bold" />
                                                </button>
                                            </div>
                                            <button onClick={closeDrawer} className="w-12 h-12 flex items-center justify-center bg-white text-carbon rounded-full shadow-2xl hover:scale-110 transition-transform">
                                                <X size={24} weight="bold" />
                                            </button>
                                        </div>

                                        {/* Hero Text - Force Opacity 1 at Start */}
                                        <motion.div
                                            style={{ opacity: textFadeOut, y: metricsY }}
                                            className="relative z-30 text-center px-8 md:px-16"
                                        >
                                            <span className={`inline-block px-4 py-1.5 mb-8 text-[10px] font-bold uppercase tracking-[0.5em] text-carbon ${selectedCase.color}`}>
                                                {selectedCase.tagDisplay}
                                            </span>
                                            <h2 className="text-5xl md:text-[6vw] font-display font-black uppercase leading-[0.8] tracking-tighter text-white mb-6">
                                                {selectedCase.title}
                                            </h2>
                                            <p className="text-lg md:text-xl font-light text-white/70 uppercase tracking-[0.3em]">
                                                {selectedCase.subtitle}
                                            </p>
                                        </motion.div>

                                        {/* Metrics */}
                                        {selectedCase.keyMetrics && (
                                            <motion.div
                                                style={{ opacity: textFadeOut, y: metricsY }}
                                                className="absolute bottom-12 left-0 w-full flex justify-center gap-4 px-6 overflow-x-auto no-scrollbar"
                                            >
                                                {selectedCase.keyMetrics.map((m, i) => (
                                                    <div key={i} className="bg-white/10 backdrop-blur-2xl border border-white/10 p-6 rounded-2xl min-w-[140px] text-center">
                                                        <p className="text-2xl font-display font-bold text-white mb-1">{m.value}</p>
                                                        <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">{m.label}</p>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* CONTENT AREA - Massive top padding to prevent early appearance */}
                                    <motion.div
                                        style={{ opacity: contentOpacity, y: contentY }}
                                        className="relative z-40 pb-32"
                                    >
                                        <div className="max-w-4xl mx-auto px-8 md:px-16 flex flex-col gap-32 bg-transparent">

                                            <div className="flex flex-col gap-8">
                                                <h3 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">{lang === 'es' ? 'El Desafío' : 'The Challenge'}</h3>
                                                <p className="text-2xl md:text-5xl font-light leading-tight text-white italic">
                                                    "{selectedCase.challenge}"
                                                </p>
                                            </div>

                                            <div className="flex flex-col gap-8">
                                                <h3 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">{lang === 'es' ? 'La Solución' : 'The Solution'}</h3>
                                                <div className="space-y-12">
                                                    <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80">
                                                        {selectedCase.solution}
                                                    </p>

                                                    {selectedCase.techStack && (
                                                        <div className="pt-12 border-t border-white/5">
                                                            <div className="flex flex-wrap gap-3">
                                                                {selectedCase.techStack.map(tech => (
                                                                    <span key={tech} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold text-white/40">
                                                                        {tech}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-8">
                                                <h3 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">{lang === 'es' ? 'El Impacto' : 'The Impact'}</h3>
                                                <p className="text-2xl md:text-4xl font-display font-medium leading-relaxed text-white">
                                                    {selectedCase.impact}
                                                </p>
                                            </div>

                                            {selectedCase.gallery && selectedCase.gallery.length > 0 && (
                                                <div className="grid grid-cols-1 gap-12">
                                                    {selectedCase.gallery.map((img, i) => (
                                                        <div key={i} className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                                            <Image src={img} alt="Detail" fill className="object-cover" />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="py-32 text-center border-t border-white/5">
                                                <button onClick={handleNext} className="group flex flex-col items-center gap-6 mx-auto">
                                                    <span className="text-white/20 text-[10px] uppercase tracking-[0.5em]">{lang === 'es' ? 'Siguiente Proyecto' : 'Next Project'}</span>
                                                    <span className="text-4xl md:text-7xl font-display font-black uppercase text-white group-hover:text-electric-blue transition-colors">
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
 
