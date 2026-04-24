"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '@/data/case-studies';
import { ArrowRight } from "@phosphor-icons/react";

// Icons
const IconClose = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

interface CaseStudyDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    caseStudy: CaseStudy | null;
}

// Sub-component to handle scroll logic safely
function DrawerInnerContent({ caseStudy, onClose }: { caseStudy: CaseStudy, onClose: () => void }) {
    // Callback ref pattern to ensure useScroll only sees the container when it's ready
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    const containerRef = useCallback((node: HTMLDivElement) => {
        if (node !== null) {
            setContainer(node);
        }
    }, []);

    // Scroll Progress logic like Modal
    const { scrollYProgress } = useScroll({
        container: container ? { current: container } : undefined,
        offset: ["start start", "end end"]
    });

    // --- APPLE / CRYSTAL EFFECT MAPPINGS ---
    // Background stays sharp initially and throughout
    const imageScale = useTransform(scrollYProgress, [0.05, 0.2], [1, 1.05]);

    // Hero Text Animations
    const heroTextOpacity = useTransform(scrollYProgress, [0.02, 0.1], [1, 0]);
    const heroTextY = useTransform(scrollYProgress, [0.05, 0.15], [0, -50]);

    // Content Entrance
    const contentOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
    const contentY = useTransform(scrollYProgress, [0.05, 0.2], [300, 0]);

    // Original Global Blur Effect
    const blurOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);

    return (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
            className="relative z-[101] w-full md:w-[85vw] lg:w-[70vw] h-full bg-black shadow-2xl border-l border-white/10 overflow-hidden"
        >
            {/* 1. FIXED BACKGROUND LAYER (Video & Initial Text) */}
            <div className="absolute inset-0 z-0 w-full h-full flex flex-col items-center justify-center pointer-events-none">

                {/* Media Layer */}
                <motion.div style={{ scale: imageScale }} className="absolute inset-0 z-0 h-full w-full">
                    {caseStudy.videoUrl ? (
                        <>
                            {caseStudy.videoUrl.startsWith('/') || caseStudy.videoUrl.endsWith('.mp4') ? (
                                <video
                                    src={caseStudy.videoUrl}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster={caseStudy.coverImage}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 brightness-[0.5] ${caseStudy.slug.includes('haddock') ? 'scale-[1.75]' : ''}`}
                                />
                            ) : (
                                <iframe
                                    src={`https://player.vimeo.com/video/${caseStudy.videoUrl.split('/').pop()}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
                                    className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none brightness-50"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                />
                            )}
                            <Image
                                src={caseStudy.coverImage}
                                alt={caseStudy.title}
                                fill
                                className="object-cover -z-10 brightness-50"
                                priority
                                quality={95}
                            />
                        </>
                    ) : (
                        <Image
                            src={caseStudy.coverImage}
                            alt={caseStudy.title}
                            fill
                            className="object-cover brightness-[0.5]"
                            priority
                            quality={95}
                        />
                    )}
                </motion.div>

                {/* Gradient Overlay for Contrast */}
                <div className="absolute inset-0 z-[5] bg-gradient-to-t from-black via-transparent to-black/30" />

                {/* Original Approved Blur Layer */}
                <motion.div
                    style={{ opacity: blurOpacity }}
                    className="absolute inset-0 z-10 bg-zinc-900/10 backdrop-blur-md"
                />

                {/* Hero Text */}
                <motion.div
                    style={{ opacity: heroTextOpacity, y: heroTextY }}
                    className="relative z-20 text-center px-6 max-w-5xl"
                >
                    {/* Tags (2x2 Centered Grid) */}
                    <div className="grid grid-cols-2 gap-2 mb-8 w-fit mx-auto pointer-events-auto">
                        <span className={`px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm shadow-lg ${caseStudy.color} bg-opacity-90 flex items-center justify-center`}>
                            {caseStudy.tag}
                        </span>
                        {caseStudy.techStack?.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm bg-white/20 text-white border border-white/10 backdrop-blur-sm flex items-center justify-center">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h2 className="font-display font-black text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.8] tracking-tighter text-white mb-6 drop-shadow-2xl">
                        {caseStudy.title}
                    </h2>
                    <p className="font-meta text-xl md:text-2xl font-bold text-white max-w-2xl mx-auto drop-shadow-md">
                        {caseStudy.subtitle}
                    </p>
                </motion.div>

                {/* Floating Metrics (Transparent Light Rows) */}
                <motion.div
                    style={{ opacity: heroTextOpacity, y: heroTextY }}
                    className="absolute bottom-8 md:bottom-24 w-full flex flex-col md:flex-row justify-center gap-3 md:gap-8 px-6 z-20 pointer-events-auto"
                >
                    {caseStudy.snapshot.map((item, idx) => (
                        <div key={idx} className="bg-white/10 border border-white/10 p-3 md:p-6 rounded-xl flex md:flex-col items-center md:items-center justify-between md:justify-center gap-4 min-w-0 md:min-w-[120px] shadow-2xl backdrop-blur-xl">
                            <div className="flex flex-col items-start md:items-center leading-tight">
                                <div className="text-[9px] uppercase tracking-[0.2em] text-white/50 font-bold order-2 md:order-1">{item.label}</div>
                                <div className="text-lg md:text-3xl font-black text-white order-1 md:order-2 leading-none">{item.value}</div>
                            </div>
                            <div className="md:hidden w-6 h-[1px] bg-white/20" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Close Button - Floating Fixed - Lowered to avoid Menu */}
            <button
                onClick={onClose}
                className="fixed top-28 right-8 z-[10000] p-2 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-xl"
            >
                <IconClose />
            </button>

            {/* 2. SCROLL CONTAINER */}
            <div
                ref={containerRef}
                className="absolute inset-0 z-10 overflow-y-auto no-scrollbar scroll-smooth bg-transparent"
            >
                <div className="relative w-full pb-32">
                    <div className="h-[100vh] w-full" />

                    {/* CONTENT AREA - NO BACKGROUND, JUST TEXT ON TOP OF BLURRED VIDEO */}
                    <div className="relative z-30 -mt-[15vh]">

                        <motion.div
                            style={{ opacity: contentOpacity, y: contentY }}
                            className="w-full py-32 px-6 md:px-24 flex flex-col items-center"
                        >
                            <div className="w-full max-w-4xl space-y-24">
                                {/* 01. Challenge */}
                                <div className={`relative pl-8 border-l-4 transition-colors duration-500 ${caseStudy.borderColor || 'border-white/10'} space-y-4`}>
                                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">01 — El Desafío</span>
                                    <p className="text-lg md:text-xl font-light leading-relaxed text-white drop-shadow-md">
                                        {caseStudy.challenge}
                                    </p>
                                </div>

                                {/* 02. Solution */}
                                <div className={`relative pl-8 border-l-4 transition-colors duration-500 ${caseStudy.borderColor || 'border-white/10'} space-y-4`}>
                                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">02 — La Solución</span>
                                    <p className="text-lg md:text-xl font-light leading-relaxed text-white drop-shadow-md">
                                        {caseStudy.solution}
                                    </p>
                                </div>

                                {/* 03. Impact */}
                                <div className={`relative pl-8 border-l-4 transition-colors duration-500 ${caseStudy.borderColor || 'border-white/10'} space-y-4`}>
                                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">03 — El Impacto</span>
                                    <p className="text-lg md:text-xl font-light leading-relaxed text-white drop-shadow-md">
                                        {caseStudy.impact}
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="pt-20 border-t border-white/5 flex justify-start">
                                    {caseStudy.url && caseStudy.url !== '#' && (
                                        <a
                                            href={caseStudy.url}
                                            target="_blank"
                                            className="group flex items-center gap-2 text-white hover:text-white/80 transition-colors text-xl md:text-2xl font-medium drop-shadow-md"
                                        >
                                            Ver caso completo
                                            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function CaseStudyDrawer({ isOpen, onClose, caseStudy }: CaseStudyDrawerProps) {
    // Handle Scroll Lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!caseStudy) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex justify-end">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Drawer Panel content with its own scroll logic */}
                    <DrawerInnerContent caseStudy={caseStudy} onClose={onClose} />
                </div>
            )}
        </AnimatePresence>
    );
}
