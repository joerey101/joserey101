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

    // Transforms for the "Apple Esfumado"
    const blurOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const imageScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
    const textFadeOut = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const metricsY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Content entrance
    const contentOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
    const contentY = useTransform(scrollYProgress, [0.15, 0.3], [50, 0]);

    // Scroll Lock Effect
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset scroll when closing
            if (drawerContainerRef.current) drawerContainerRef.current.scrollTop = 0;
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isDrawerOpen]);

    const openDrawer = (c: any) => {
        const formatted = {
            ...c,
            id: c._id,
            mainImage: c.imgUrl || c.mainImage
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
                        <motion.div
                            layoutId={`card-${item._id}`}
                            key={item._id}
                            onClick={() => openDrawer(item)}
                            className="group relative aspect-[4/3] bg-carbon cursor-pointer overflow-hidden border border-carbon/10"
                        >
                            <Image
                                src={item.imgUrl || item.img}
                                alt={item.title}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <motion.span
                                    className={`inline-block w-fit px-2 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest text-carbon ${item.color}`}
                                >
                                    {item.tagDisplay}
                                </motion.span>
                                <h3 className="text-4xl md:text-5xl font-display font-black uppercase text-white leading-[0.9]">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 2. THE APPLE DRAWER (Full Page Transition) */}
            <AnimatePresence>
                {isDrawerOpen && selectedCase && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black"
                    >
                        {/* Scroll Container */}
                        <div
                            ref={drawerContainerRef}
                            className="h-full overflow-y-auto overflow-x-hidden"
                        >
                            <div className="relative h-[300vh] w-full">

                                {/* STICKY HERO (Apple Style) */}
                                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                                    {/* Background Image with Scale & Blur */}
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
                                        />
                                    </motion.div>

                                    {/* The "Esfumado" Layer */}
                                    <motion.div
                                        style={{ opacity: blurOpacity }}
                                        className="absolute inset-0 z-10 bg-black/60 backdrop-blur-3xl"
                                    />

                                    {/* Top Controls */}
                                    <div className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-center">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={handlePrev}
                                                className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-carbon transition-all"
                                            >
                                                <CaretLeft size={24} weight="bold" />
                                            </button>
                                            <button
                                                onClick={handleNext}
                                                className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-carbon transition-all"
                                            >
                                                <CaretRight size={24} weight="bold" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={closeDrawer}
                                            className="w-12 h-12 flex items-center justify-center bg-white text-carbon rounded-full hover:scale-110 transition-transform"
                                        >
                                            <X size={24} weight="bold" />
                                        </button>
                                    </div>

                                    {/* Primary Hero Text (Fades out on scroll) */}
                                    <motion.div
                                        style={{ opacity: textFadeOut, y: metricsY }}
                                        className="relative z-20 text-center px-6 max-w-5xl"
                                    >
                                        <span className={`inline-block px-3 py-1 mb-6 text-xs font-bold uppercase tracking-[0.3em] text-carbon ${selectedCase.color}`}>
                                            {selectedCase.tagDisplay}
                                        </span>
                                        <h1 className="text-6xl md:text-[10vw] font-display font-black uppercase leading-[0.8] tracking-tighter text-white mb-8">
                                            {selectedCase.title}
                                        </h1>
                                        <p className="text-xl md:text-2xl font-light text-white/60 uppercase tracking-widest">
                                            {selectedCase.subtitle}
                                        </p>
                                    </motion.div>

                                    {/* Metrics (Float with hero then stay visible or fade) */}
                                    {selectedCase.keyMetrics && (
                                        <motion.div
                                            style={{ opacity: textFadeOut, y: metricsY }}
                                            className="absolute bottom-16 left-0 w-full flex justify-center gap-4 px-6 overflow-x-auto no-scrollbar"
                                        >
                                            {selectedCase.keyMetrics.map((m, i) => (
                                                <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl min-w-[160px] text-center">
                                                    <p className="text-3xl font-display font-bold text-white mb-1">{m.value}</p>
                                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">{m.label}</p>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>

                                {/* SCROLLABLE CONTENT (Appears after hero fades) */}
                                <motion.div
                                    style={{ opacity: contentOpacity, y: contentY }}
                                    className="relative z-30 -mt-[40vh] pb-32" // Pull up to meet the fading hero
                                >
                                    <div className="max-w-5xl mx-auto px-6 md:px-12 grid gap-32">

                                        {/* Block: The Challenge */}
                                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
                                            <h2 className="text-white/20 text-sm font-bold uppercase tracking-[0.4em] lg:sticky lg:top-32">
                                                {lang === 'es' ? 'El Desafío' : 'The Challenge'}
                                            </h2>
                                            <p className="text-3xl md:text-5xl font-light leading-tight text-white">
                                                {selectedCase.challenge}
                                            </p>
                                        </div>

                                        {/* Block: The Solution */}
                                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
                                            <h2 className="text-white/20 text-sm font-bold uppercase tracking-[0.4em] lg:sticky lg:top-32">
                                                {lang === 'es' ? 'La Solución' : 'The Solution'}
                                            </h2>
                                            <div className="space-y-12">
                                                <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80">
                                                    {selectedCase.solution}
                                                </p>

                                                {/* Tech Stack Grid */}
                                                {selectedCase.techStack && (
                                                    <div className="pt-12 border-t border-white/10">
                                                        <p className="text-[10px] uppercase tracking-widest text-white/40 mb-6">Built with</p>
                                                        <div className="flex flex-wrap gap-3">
                                                            {selectedCase.techStack.map(tech => (
                                                                <span key={tech} className="px-5 py-2 rounded-full border border-white/10 text-sm text-white/60 hover:border-white/40 transition-colors">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Block: The Impact */}
                                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
                                            <h2 className="text-white/20 text-sm font-bold uppercase tracking-[0.4em] lg:sticky lg:top-32">
                                                {lang === 'es' ? 'El Impacto' : 'The Impact'}
                                            </h2>
                                            <p className="text-2xl md:text-4xl font-display font-medium leading-tight text-white">
                                                {selectedCase.impact}
                                            </p>
                                        </div>

                                        {/* Gallery (If exists) */}
                                        {selectedCase.gallery && selectedCase.gallery.length > 0 && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {selectedCase.gallery.map((img, i) => (
                                                    <div key={i} className="relative aspect-video rounded-2xl overflow-hidden border border-white/5">
                                                        <Image src={img} alt="Gallery item" fill className="object-cover" />
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Bottom CTA / Next Project */}
                                        <div className="py-20 text-center border-t border-white/10">
                                            <button
                                                onClick={handleNext}
                                                className="group inline-flex flex-col items-center gap-4"
                                            >
                                                <span className="text-white/40 text-xs uppercase tracking-widest">{lang === 'es' ? 'Siguiente Caso' : 'Next Case'}</span>
                                                <span className="text-4xl md:text-6xl font-display font-black uppercase text-white group-hover:text-stroke-white group-hover:text-transparent transition-all">
                                                    NEXT PROJECT
                                                </span>
                                            </button>
                                        </div>

                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
