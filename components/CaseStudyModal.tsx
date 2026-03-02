"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
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
    slug: string;
    tag: string;
    tagDisplay: string;
    img: string;
    color: string;
    borderColor?: string;
    videoUrl?: string;
    details?: CaseStudyDetails;
    keyMetrics?: KeyMetric[];
    techStack?: string[];
    gallery?: string[];
    cta?: {
        text: string;
        url: string;
    };
    extended?: {
        intro: string;
        body: string;
    };
}

interface CaseStudyModalProps {
    isOpen: boolean;
    onClose: () => void;
    caseStudy: CaseStudy | null;
    lang: "es" | "en";
}

// Sub-component to safely handle useScroll with a container ref
function ModalInnerContent({ caseStudy, lang, onClose }: { caseStudy: CaseStudy, lang: "es" | "en", onClose: () => void }) {
    // Callback ref pattern to ensure useScroll only sees the container when it's ready
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    const containerRef = useCallback((node: HTMLDivElement) => {
        if (node !== null) {
            setContainer(node);
        }
    }, []);

    // Scroll Progress for Apple Effect - Safe here because ModalInnerContent only mounts when visible
    const { scrollYProgress } = useScroll({
        container: container ? { current: container } : undefined,
        offset: ["start start", "end end"]
    });

    // Mappings for the transition
    const blurOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
    const imageScale = useTransform(scrollYProgress, [0.05, 0.2], [1, 1.05]);
    const textFadeOut = useTransform(scrollYProgress, [0.02, 0.1], [1, 0]);
    const metricsY = useTransform(scrollYProgress, [0.05, 0.15], [0, -50]);

    // Content entrance - More gradual for a luxurious feel
    const contentOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
    const contentY = useTransform(scrollYProgress, [0.05, 0.2], [400, 0]);

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Container (Drawer) */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 35, stiffness: 300 }}
                className="relative z-[101] w-full lg:w-[70vw] xl:w-[60vw] bg-black shadow-2xl border-l border-white/10 overflow-hidden"
            >
                {/* 1. FIXED BACKGROUND LAYER (Hero Image & Text) */}
                <div className="absolute inset-0 z-0 w-full h-full overflow-hidden flex flex-col items-center justify-start md:justify-center pt-24 md:pt-0 pointer-events-none">
                    {/* Background Media Layer */}
                    <motion.div
                        style={{ scale: imageScale }}
                        className="absolute inset-0 z-0 h-full w-full"
                    >
                        {caseStudy.videoUrl ? (
                            <>
                                {/* Video Layer */}
                                {caseStudy.videoUrl.startsWith('/') || caseStudy.videoUrl.endsWith('.mp4') ? (
                                    <video
                                        src={caseStudy.videoUrl}
                                        poster={caseStudy.img}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className={`absolute inset-0 w-full h-full object-cover brightness-[0.35] ${caseStudy.slug.includes('haddock') ? 'scale-[1.75]' : ''}`}
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
                                    src={caseStudy.img}
                                    alt={caseStudy.title}
                                    fill
                                    className="object-cover brightness-50 -z-10"
                                    priority
                                />
                            </>
                        ) : (
                            <Image
                                src={caseStudy.img}
                                alt={caseStudy.title}
                                fill
                                className="object-cover brightness-[0.35]"
                                priority
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
                        style={{ opacity: textFadeOut, y: metricsY }}
                        className="relative z-20 text-center px-10 max-w-4xl"
                    >
                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                            <span className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.4em] text-white ${caseStudy.color}`}>
                                {caseStudy.tagDisplay}
                            </span>
                            {caseStudy.techStack?.map((tag, idx) => (
                                <span key={idx} className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.4em] rounded-sm bg-white/30 text-white border border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h2 className="font-display font-black text-6xl md:text-[7vw] uppercase leading-[0.85] tracking-tighter text-white mb-6">
                            {caseStudy.title}
                        </h2>
                        <p className="font-meta text-lg md:text-xl font-light text-white/80 uppercase tracking-[0.3em] drop-shadow-md">
                            {caseStudy.subtitle}
                        </p>
                    </motion.div>

                    {/* Metrics */}
                    {caseStudy.keyMetrics && (
                        <motion.div
                            style={{ opacity: textFadeOut, y: metricsY }}
                            className="absolute bottom-10 md:bottom-16 left-0 w-full flex flex-col md:flex-row justify-center items-stretch md:items-center gap-2 md:gap-4 px-8 md:px-6 z-20"
                        >
                            {caseStudy.keyMetrics.map((m, i) => (
                                <div key={i} className="bg-white/80 backdrop-blur-md border border-white/20 p-3 md:p-6 rounded-full md:rounded-2xl flex items-center justify-center gap-3 md:flex-col md:gap-1 md:min-w-[140px] text-center shadow-xl">
                                    <p className="text-lg md:text-3xl font-display font-bold text-black">{m.value}</p>
                                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-black/60 font-bold">{m.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 z-[110] p-4 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-2xl"
                >
                    <X size={24} weight="bold" />
                </button>

                {/* 2. SCROLL CONTAINER */}
                <div
                    ref={containerRef}
                    className="absolute inset-0 z-10 overflow-y-auto no-scrollbar scroll-smooth bg-transparent"
                >
                    <div className="relative w-full pb-32">
                        <div className="h-[100vh] w-full" />

                        {/* CONTENT AREA - NO BACKGROUND, JUST TEXT ON TOP OF FULL-SCREEN BLUR */}
                        <div className="relative z-30 -mt-[15vh]">
                            <motion.div
                                style={{
                                    opacity: contentOpacity,
                                    y: contentY,
                                }}
                                className="w-full py-32 px-8 md:px-20 flex flex-col items-center"
                            >
                                <div className="max-w-4xl w-full flex flex-col gap-16">
                                    {/* Challenge */}
                                    <div className={`relative pl-8 border-l-4 transition-colors duration-500 ${caseStudy.borderColor || 'border-white/10'} flex flex-col gap-4`}>
                                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">
                                            01 — {lang === 'es' ? 'EL DESAFÍO' : 'THE CHALLENGE'}
                                        </span>
                                        <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-[1.1] text-white">
                                            "{caseStudy.details?.challenge}"
                                        </p>
                                    </div>

                                    {/* Solution */}
                                    <div className={`relative pl-8 border-l-4 transition-colors duration-500 ${caseStudy.borderColor || 'border-white/10'} flex flex-col gap-4`}>
                                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">
                                            02 — {lang === 'es' ? 'LA SOLUCIÓN' : 'THE SOLUTION'}
                                        </span>
                                        <div className="space-y-6">
                                            <p className="text-lg md:text-xl font-light leading-relaxed text-white/70">
                                                {caseStudy.details?.solution}
                                            </p>
                                            {caseStudy.techStack && (
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {caseStudy.techStack.map(tech => (
                                                        <span key={tech} className="px-4 py-1 rounded-sm bg-white/30 text-white border border-white/10 text-[10px] uppercase font-bold backdrop-blur-sm">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Impact */}
                                    <div className={`relative pl-8 border-l-4 transition-colors duration-500 ${caseStudy.borderColor || 'border-white/10'} flex flex-col gap-4`}>
                                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">
                                            03 — {lang === 'es' ? 'EL IMPACTO' : 'THE IMPACT'}
                                        </span>
                                        <p className="text-xl md:text-2xl font-display font-medium leading-[1.3] text-white">
                                            {caseStudy.details?.impact}
                                        </p>
                                    </div>

                                    {/* CTA */}
                                    <div className="pt-16 border-t border-white/5 flex justify-start">
                                        <button
                                            onClick={() => {
                                                // Forced reload to full page prevents staying in the intercepted drawer
                                                window.location.href = `/work/${caseStudy.slug}`;
                                            }}
                                            className="group flex items-center gap-2 text-white hover:text-white/80 transition-colors text-xl md:text-2xl font-medium drop-shadow-md"
                                        >
                                            {lang === 'es' ? 'Ver caso completo' : 'View full case'}
                                            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function CaseStudyModal({ isOpen, onClose, caseStudy, lang }: CaseStudyModalProps) {
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

    return (
        <AnimatePresence>
            {isOpen && caseStudy && (
                <ModalInnerContent caseStudy={caseStudy} lang={lang} onClose={onClose} />
            )}
        </AnimatePresence>
    );
}
