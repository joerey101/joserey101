
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CASE_STUDIES, CaseStudy } from '@/data/case-studies';
import CaseStudyDrawer from './CaseStudyDrawer';

export default function MasonryCaseGrid() {
    const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

    // Handle Browser Back Button and Deep Linking
    useEffect(() => {
        const handlePopState = () => {
            const path = window.location.pathname;
            if (path === '/' || path === '/case-studies') {
                setSelectedCase(null);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const openDrawer = (c: CaseStudy) => {
        setSelectedCase(c);
        window.history.pushState({ caseId: c.id }, '', `/case-studies/${c.slug}`);
    };

    const closeDrawer = () => {
        window.history.pushState(null, '', '/');
        setSelectedCase(null);
    };

    return (
        <>
            <section className="px-4 py-20 bg-background-light">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1400px] mx-auto">
                    {CASE_STUDIES.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => openDrawer(item)}
                            className="group relative aspect-[4/3] bg-neutral-900 cursor-pointer overflow-hidden border border-white/10"
                        >
                            <Image
                                src={item.coverImage}
                                alt={item.title}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100" // Grayscale default, color hover for dramatic effect
                            />

                            {/* Overlay Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
                                {/* Tag Badge - Using the color prop from data */}
                                <span className={`inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm text-white shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 ${item.color}`}>
                                    {item.tag}
                                </span>

                                {/* Big Title */}
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
                                    {item.title}
                                </h3>

                                {/* Metric/Subtitle on hover */}
                                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                                    <p className="pt-4 text-white/80 font-light text-lg border-l-2 border-white/50 pl-4 mt-4">
                                        {item.highlight}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CaseStudyDrawer
                isOpen={!!selectedCase}
                onClose={closeDrawer}
                caseStudy={selectedCase}
            />
        </>
    );
}
