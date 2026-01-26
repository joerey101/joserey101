"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

export default function CaseStudySystem({ initialCases, lang }: CaseStudySystemProps) {
    const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        // Map raw Sanity data to our Type if needed, or assume it's passed formatted
        const formatted = {
            ...c,
            id: c._id,
            mainImage: c.imgUrl || c.mainImage // Handle different prop names from GROQ
        };
        setSelectedCase(formatted);
        setIsDrawerOpen(true);
        // Silent URL update for Deep Linking feel? Maybe later.
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
        setTimeout(() => setSelectedCase(null), 500); // Wait for animation
    };

    const handleNext = () => {
        if (!selectedCase) return;
        const currentIndex = initialCases.findIndex(c => c._id === selectedCase.id);
        const nextIndex = (currentIndex + 1) % initialCases.length;
        openDrawer(initialCases[nextIndex]);
    };

    const handlePrev = () => {
        if (!selectedCase) return;
        const currentIndex = initialCases.findIndex(c => c._id === selectedCase.id);
        const prevIndex = (currentIndex - 1 + initialCases.length) % initialCases.length;
        openDrawer(initialCases[prevIndex]);
    };

    return (
        <>
            {/* 1. THE GRID (ChatGPT UX - Clean & Functional) */}
            <section className="px-4 py-20 bg-background-light">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1400px] mx-auto">
                    {initialCases.map((item) => (
                        <div
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

            {/* 2. THE DRAWER (Gemini Tech - Slide In Overlay) */}
            <div
                className={`fixed inset-0 z-50 transition-visibility duration-500 ${isDrawerOpen ? 'visible' : 'invisible delay-500'}`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${isDrawerOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={closeDrawer}
                />

                {/* Drawer Panel */}
                <div
                    className={`absolute top-0 right-0 h-full w-full md:w-[85vw] lg:w-[70vw] bg-carbon text-white overflow-y-auto transform transition-transform duration-500 ease-out shadow-2xl ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    {selectedCase && (
                        <div className="relative min-h-screen">

                            {/* 3. CLAUDE VISUALS - Massive Hero */}
                            <div className="relative h-[80vh] w-full">
                                <Image
                                    src={selectedCase.mainImage}
                                    alt={selectedCase.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-carbon/20 to-carbon" />

                                {/* Navigation Overlay (ChatGPT UX) */}
                                <div className="absolute top-0 right-0 p-8 z-50 flex gap-4">
                                    <button onClick={handlePrev} className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white text-white hover:text-carbon transition-colors">←</button>
                                    <button onClick={handleNext} className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white text-white hover:text-carbon transition-colors">→</button>
                                    <button onClick={closeDrawer} className="p-2 bg-white text-carbon rounded-full font-bold px-6">CLOSE</button>
                                </div>

                                {/* Hero Content */}
                                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full max-w-5xl">
                                    <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-black uppercase leading-[0.9] tracking-tighter mb-6">
                                        {selectedCase.title}
                                    </h1>

                                    {/* Key Metrics Floating Cards (Claude Visuals) */}
                                    {selectedCase.keyMetrics && (
                                        <div className="flex flex-wrap gap-4 mt-8">
                                            {selectedCase.keyMetrics.map((m, i) => (
                                                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-sm min-w-[120px]">
                                                    <p className="text-2xl font-bold font-display">{m.value}</p>
                                                    <p className="text-[10px] uppercase tracking-widest opacity-60">{m.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Content Blocks */}
                            <div className="p-8 md:p-16 max-w-4xl grid gap-20">
                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
                                    <h3 className="text-xl font-bold text-white/40 uppercase tracking-widest">{lang === 'es' ? 'Desafío' : 'Challenge'}</h3>
                                    <p className="text-2xl md:text-3xl font-light leading-relaxed">{selectedCase.challenge || "Lorem ipsum dolor sit amet..."}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
                                    <h3 className="text-xl font-bold text-white/40 uppercase tracking-widest">{lang === 'es' ? 'Solución' : 'Solution'}</h3>
                                    <p className="text-xl font-light leading-relaxed opacity-80">{selectedCase.solution || "Implementation details..."}</p>
                                </div>

                                {/* Tech Stack Tags */}
                                {selectedCase.techStack && (
                                    <div className="border-t border-white/10 pt-12">
                                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-50">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedCase.techStack.map(t => (
                                                <span key={t} className="px-4 py-2 border border-white/20 rounded-full text-sm uppercase tracking-wide hover:bg-white hover:text-carbon transition-colors cursor-default">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
