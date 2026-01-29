"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CASE_STUDIES, CaseStudy } from '@/data/case-studies';
import CaseStudyDrawer from './CaseStudyDrawer';

export default function MasonryCaseGrid() {
    const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

    // Handle Browser Back Button
    useEffect(() => {
        const handlePopState = () => {
            // Check if URL is root or /case-studies, if so close drawer
            // Ideally we could parse the URL to open the correct drawer if we navigated Forward too.
            // For now, simple behavior: Back button -> Close drawer.
            setSelectedCase(null);
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const openDrawer = (c: CaseStudy) => {
        setSelectedCase(c);
        // Push state so URL updates and Back button works
        window.history.pushState({ caseId: c.id }, '', `/case-studies/${c.slug}`);
    };

    const closeDrawer = () => {
        // Go back to remove the pushed state
        window.history.back();
        // State update happens in popstate listener, but to be snappy:
        setSelectedCase(null);
    };

    return (
        <>
            <section className="px-4 py-20 bg-background">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto auto-rows-[400px]">
                    {CASE_STUDIES.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => openDrawer(item)}
                            className={`group relative cursor-pointer overflow-hidden border border-border/50 bg-card
                                ${item.isFlagship ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'}
                            `}
                        >
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-neutral-900">
                                {item.coverImage && (
                                    <Image
                                        src={item.coverImage}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"
                                    />
                                )}
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <span className="inline-block w-fit px-2 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest bg-white text-black">
                                    {item.tag}
                                </span>
                                <h3 className={`font-display font-black uppercase text-white leading-[0.9]
                                    ${item.isFlagship ? 'text-5xl md:text-7xl' : 'text-3xl md:text-4xl'}
                                `}>
                                    {item.title}
                                </h3>
                                <p className="text-white/80 mt-4 line-clamp-1 font-light text-lg">
                                    {item.highlight}
                                </p>
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
