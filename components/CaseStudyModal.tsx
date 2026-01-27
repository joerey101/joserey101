"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { X, ArrowRight } from "@phosphor-icons/react";

interface CaseStudyDetails {
    challenge: string;
    solution: string;
    impact: string;
}

interface KeyMetric {
    value: string;
    label: string;
}

interface CaseStudy {
    id: string | number;
    title: string;
    subtitle: string;
    tag: string;
    tagDisplay: string;
    img: string;
    color: string;
    details?: CaseStudyDetails;
    keyMetrics?: KeyMetric[];
    techStack?: string[];
    gallery?: string[];
}

interface CaseStudyModalProps {
    isOpen: boolean;
    onClose: () => void;
    caseStudy: CaseStudy | null;
    lang: "es" | "en";
}

export default function CaseStudyModal({ isOpen, onClose, caseStudy, lang }: CaseStudyModalProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll Progress for Apple Effect
    const { scrollYProgress } = useScroll({
        container: containerRef,
        offset: ["start start", "end end"]
    });

    // Mappings for the transition
    const blurOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
    const imageScale = useTransform(scrollYProgress, [0.05, 0.2], [1, 1.1]);
    const textFadeOut = useTransform(scrollYProgress, [0.02, 0.1], [1, 0]);
    const metricsY = useTransform(scrollYProgress, [0.05, 0.15], [0, -50]);

    // Content entrance
    const contentOpacity = useTransform(scrollYProgress, [0.12, 0.25], [0, 1]);
    const contentY = useTransform(scrollYProgress, [0.12, 0.25], [100, 0]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen || !caseStudy) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm"
                    />

                    {/* Modal Container (Drawer) */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 35, stiffness: 300 }}
                        className="fixed inset-y-0 right-0 z-[101] w-full lg:w-[70vw] xl:w-[60vw] bg-black shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Scrollable Area */}
                        <div
                            ref={containerRef}
                            className="flex-1 overflow-y-auto no-scrollbar scroll-smooth relative bg-black"
                        >
                            {/* Height wrapper to enable scroll range */}
                            <div className="relative h-[400vh] w-full">

                                {/* STICKY HERO (The Apple Style part) */}
                                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                                    {/* Close Button - Floats on top */}
                                    <button
                                        onClick={onClose}
                                        className="absolute top-8 right-8 z-[110] p-4 bg-white text-carbon rounded-full hover:scale-110 transition-transform shadow-2xl"
                                    >
                                        <X size={24} weight="bold" />
                                    </button>

                                    {/* Background Image */}
                                    <motion.div
                                        style={{ scale: imageScale }}
                                        className="absolute inset-0 z-0 h-full w-full"
                                    >
                                        <Image
                                            src={caseStudy.img}
                                            alt={caseStudy.title}
                                            fill
                                            className="object-cover brightness-50"
                                            priority
                                        />
                                    </motion.div>

                                    {/* Blur Layer (Esfumado) */}
                                    <motion.div
                                        style={{ opacity: blurOpacity }}
                                        className="absolute inset-0 z-10 bg-zinc-900/10 backdrop-blur-md"
                                    />

                                    {/* Hero Text */}
                                    <motion.div
                                        style={{ opacity: textFadeOut, y: metricsY }}
                                        className="relative z-20 text-center px-10 max-w-4xl"
                                    >
                                        <span className={`inline-block px-4 py-1.5 mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-carbon ${caseStudy.color}`}>
                                            {caseStudy.tagDisplay}
                                        </span>
                                        <h2 className="font-display font-black text-6xl md:text-[7vw] uppercase leading-[0.85] tracking-tighter text-white mb-6">
                                            {caseStudy.title}
                                        </h2>
                                        <p className="font-meta text-lg md:text-xl font-light text-white/50 uppercase tracking-[0.3em]">
                                            {caseStudy.subtitle}
                                        </p>
                                    </motion.div>

                                    {/* Metrics floating at bottom */}
                                    {caseStudy.keyMetrics && (
                                        <motion.div
                                            style={{ opacity: textFadeOut, y: metricsY }}
                                            className="absolute bottom-16 left-0 w-full flex justify-center gap-4 px-6"
                                        >
                                            {caseStudy.keyMetrics.map((m, i) => (
                                                <div key={i} className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-2xl min-w-[140px] text-center">
                                                    <p className="text-3xl font-display font-bold text-white mb-1">{m.value}</p>
                                                    <p className="text-[10px] uppercase tracking-widest text-white/40">{m.label}</p>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>

                                {/* CONTENT AREA (Appears with scroll) */}
                                <motion.div
                                    style={{ opacity: contentOpacity, y: contentY }}
                                    className="relative z-30 -mt-[30vh] pb-40 px-8 md:px-20"
                                >
                                    <div className="max-w-4xl mx-auto flex flex-col gap-32">

                                        {/* Challenge Section */}
                                        <div className="flex flex-col gap-8">
                                            <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
                                                {lang === 'es' ? 'EL DESAFÍO' : 'THE CHALLENGE'}
                                            </span>
                                            <p className="text-3xl md:text-5xl font-light leading-[1.1] text-white italic">
                                                "{caseStudy.details?.challenge}"
                                            </p>
                                        </div>

                                        {/* Solution Section */}
                                        <div className="flex flex-col gap-10">
                                            <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
                                                {lang === 'es' ? 'LA SOLUCIÓN' : 'THE SOLUTION'}
                                            </span>
                                            <div className="space-y-12">
                                                <p className="text-xl md:text-2xl font-light leading-relaxed text-white/70">
                                                    {caseStudy.details?.solution}
                                                </p>

                                                {/* Tech Stack */}
                                                {caseStudy.techStack && (
                                                    <div className="flex flex-wrap gap-3 pt-10 border-t border-white/5">
                                                        {caseStudy.techStack.map(tech => (
                                                            <span key={tech} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold text-white/40">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Impact Section */}
                                        <div className="flex flex-col gap-8">
                                            <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
                                                {lang === 'es' ? 'EL IMPACTO' : 'THE IMPACT'}
                                            </span>
                                            <p className="text-2xl md:text-4xl font-display font-medium leading-[1.3] text-white">
                                                {caseStudy.details?.impact}
                                            </p>
                                        </div>

                                        {/* Gallery if any */}
                                        {caseStudy.gallery && (
                                            <div className="grid grid-cols-1 gap-8 pt-20">
                                                {caseStudy.gallery.map((img, i) => (
                                                    <div key={i} className="relative aspect-video rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                                                        <Image src={img} alt="Detail" fill className="object-cover" />
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Footer / Next */}
                                        <div className="pt-32 border-t border-white/5 text-center">
                                            <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] mb-8">
                                                {lang === 'es' ? 'FIN DEL CASO' : 'END OF CASE'}
                                            </p>
                                            <button
                                                onClick={() => {
                                                    // Force navigation to the full page version
                                                    window.location.href = `/work/${caseStudy.id}?lang=${lang}`;
                                                }}
                                                className="group flex items-center gap-4 mx-auto text-white hover:text-acid-green transition-colors"
                                            >
                                                <span className="text-4xl md:text-6xl font-display font-black uppercase">
                                                    {lang === 'es' ? 'PROFUNDIZAR' : 'GO DEEPER'}
                                                </span>
                                                <ArrowRight size={48} weight="bold" className="group-hover:translate-x-4 transition-transform" />
                                            </button>
                                        </div>

                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
