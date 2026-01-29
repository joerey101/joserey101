
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
            // If navigating back to root/home, close drawer
            const path = window.location.pathname;
            if (path === '/' || path === '/case-studies') {
                setSelectedCase(null);
            } else if (path.startsWith('/case-studies/')) {
                // Potentially reopen if we are handling forward navigation, 
                // but for now simplest is to rely on page load or explicit interaction.
                // This primarily handles the "Back" action closing the drawer.
                // The "Deep Link" logic for initial load is handled by the page.tsx component anyway.
            }
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
        // Go back to remove the pushed state, but only if we pushed it ourselves.
        // A safer heuristic for this SPA-like behavior:
        window.history.pushState(null, '', window.location.pathname.replace(/\/case-studies\/[^\/]+/, '/case-studies'));
        // Or simply back() if we are sure we came from there. 
        // Let's use history.back() as it's more natural for "closing" a state navigation
        // Check if we can go back? Hard to know strict history stack.
        // Fallback: replaceState to root if unsure.
        // Actually, simplest UX:
        window.history.pushState(null, '', '/'); // Reset to home anchor or current page context
        setSelectedCase(null);
    };

    return (
        <>
            <section className="px-4 md:px-6 lg:px-12 py-20 bg-background">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-[1400px] mx-auto grid-flow-dense">
                    {CASE_STUDIES.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => openDrawer(item)}
                            className={`group relative cursor-pointer overflow-hidden border border-border/50 bg-neutral-900
                                ${item.isFlagship ? 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto' : 'col-span-1 row-span-1 aspect-[4/3]'}
                            `}
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                                <Image
                                    src={item.coverImage}
                                    alt={item.title}
                                    fill
                                    className="object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content Content Overlay */}
                            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end items-start transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">

                                <span className={`inline-block px-3 py-1 mb-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-black bg-white
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100`}>
                                    {item.tag}
                                </span>

                                <h3 className={`font-display font-black uppercase text-white leading-[0.85] tracking-tight
                                    ${item.isFlagship ? 'text-4xl md:text-6xl lg:text-7xl' : 'text-2xl md:text-3xl'}
                                `}>
                                    {item.title}
                                </h3>

                                <div className={`overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-[100px] mt-0 group-hover:mt-4`}>
                                    <p className="text-white/90 font-light text-sm md:text-base border-l-2 border-white/50 pl-4">
                                        {item.highlight}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />
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
