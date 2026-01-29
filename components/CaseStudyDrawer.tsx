"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CaseStudy } from '@/data/case-studies';

// Use standard SVG icons if lucide is not installed to be safe.
const IconClose = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const IconArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

interface CaseStudyDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    caseStudy: CaseStudy | null;
}

export default function CaseStudyDrawer({ isOpen, onClose, caseStudy }: CaseStudyDrawerProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 500); // Wait for transition
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    const currentCase = caseStudy;
    if (!currentCase) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex justify-end transition-visibility duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            {/* Drawer Panel */}
            <div
                className={`relative w-full md:w-[85vw] lg:w-[60vw] h-full bg-background border-l border-border transform transition-transform duration-500 cubic-bezier(0.19, 1, 0.22, 1) shadow-2xl overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Close Button extended area */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-foreground hover:text-background transition-colors border border-border"
                >
                    <IconClose />
                </button>

                <div className="flex flex-col min-h-full">

                    {/* Hero Section - sticky-ish effect can be done with sticky top-0 if needed, but simple linear for now as requested */}
                    <div className="relative h-[60vh] w-full shrink-0 group">
                        <Image
                            src={currentCase.coverImage}
                            alt={currentCase.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                            <span className="inline-block px-3 py-1 mb-4 text-xs font-mono uppercase tracking-widest bg-foreground text-background">
                                {currentCase.tag}
                            </span>
                            <h2 className="text-5xl md:text-7xl font-display font-black uppercase leading-[0.9] mb-4">
                                {currentCase.title}
                            </h2>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
                                {currentCase.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-12 bg-background space-y-16">

                        {/* Snapshot Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border/50">
                            {currentCase.snapshot.map((item, idx) => (
                                <div key={idx} className="flex flex-col gap-2">
                                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</span>
                                    <span className="text-lg font-bold font-display">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Narrative Blocks */}
                        <div className="grid gap-12 max-w-3xl">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold font-display uppercase tracking-tight">El Desafío</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {currentCase.challenge}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold font-display uppercase tracking-tight">La Solución</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {currentCase.solution}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold font-display uppercase tracking-tight">El Impacto</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {currentCase.impact}
                                </p>
                            </div>
                        </div>

                        {/* Footer / CTA */}
                        <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                            {currentCase.hasStandalone && (
                                <Link
                                    href={`/case-studies/${currentCase.slug}`}
                                    className="text-lg font-bold hover:underline underline-offset-4 decoration-2"
                                >
                                    Ver Caso Completo
                                </Link>
                            )}

                            <a
                                href={currentCase.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-bold uppercase tracking-wide hover:bg-foreground/90 transition-colors"
                            >
                                {currentCase.ctaText || "Visitar Sitio"}
                                <IconArrow />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
