"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { X } from "@phosphor-icons/react";

interface CaseStudyDetails {
    challenge: string;
    solution: string;
    impact: string;
}

interface CaseStudy {
    id: number;
    title: string;
    subtitle: string;
    tag: string;
    tagDisplay: string;
    img: string;
    color: string;
    details?: CaseStudyDetails;
}

interface CaseStudyModalProps {
    isOpen: boolean;
    onClose: () => void;
    caseStudy: CaseStudy | null;
    lang: "es" | "en";
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
                        className="fixed inset-0 z-[100] bg-carbon/90 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-y-0 right-0 z-[101] w-full lg:w-2/3 xl:w-1/2 bg-background-light shadow-2xl overflow-y-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-50 p-2 bg-white rounded-full hover:rotate-90 transition-transform duration-300 shadow-lg"
                        >
                            <X size={24} weight="bold" className="text-carbon" />
                        </button>

                        {/* Content */}
                        <div className="relative">
                            {/* Hero Image */}
                            <div className="relative w-full h-[50vh]">
                                <Image
                                    src={caseStudy.img}
                                    alt={caseStudy.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 to-transparent" />

                                <div className="absolute bottom-8 left-6 md:left-12 text-white">
                                    <span className={`inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest text-carbon ${caseStudy.color}`}>
                                        {caseStudy.tagDisplay}
                                    </span>
                                    <h2 className="font-display font-black text-4xl md:text-6xl uppercase leading-[0.9] mb-2">
                                        {caseStudy.title}
                                    </h2>
                                    <p className="font-meta text-sm md:text-base font-bold uppercase tracking-widest opacity-80">
                                        {caseStudy.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="p-6 md:p-12 text-carbon">
                                <div className="grid grid-cols-1 gap-12">
                                    {/* Challenge */}
                                    <div>
                                        <h3 className="font-display font-bold text-2xl uppercase mb-4 text-carbon/40">
                                            {lang === 'es' ? 'El Desafío' : 'The Challenge'}
                                        </h3>
                                        <p className="font-sans text-lg md:text-xl leading-relaxed font-medium">
                                            {caseStudy.details?.challenge || "Details coming soon..."}
                                        </p>
                                    </div>

                                    {/* Solution */}
                                    <div>
                                        <h3 className="font-display font-bold text-2xl uppercase mb-4 text-carbon/40">
                                            {lang === 'es' ? 'La Solución' : 'The Solution'}
                                        </h3>
                                        <p className="font-sans text-lg md:text-xl leading-relaxed font-medium">
                                            {caseStudy.details?.solution || "Details coming soon..."}
                                        </p>
                                    </div>

                                    {/* Impact */}
                                    <div>
                                        <h3 className="font-display font-bold text-2xl uppercase mb-4 text-carbon/40">
                                            {lang === 'es' ? 'El Impacto' : 'The Impact'}
                                        </h3>
                                        <div className={`p-6 md:p-8 ${caseStudy.color} bg-opacity-20 border-l-4 border-carbon`}>
                                            <p className="font-display font-bold text-2xl md:text-3xl leading-tight uppercase">
                                                "{caseStudy.details?.impact || "Details coming soon..."}"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
