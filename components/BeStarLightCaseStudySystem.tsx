"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { CASE_STUDIES } from '@/data/case-studies';
const CaseStudyDrawer = dynamic(() => import('./CaseStudyDrawer'), { ssr: false });

interface CaseStudy {
    id: string | number;
    title: string;
    subtitle: string;
    slug: string;
    tag: string;
    tagDisplay: string;
    img: string;
    color: string;
    videoUrl?: string;
    techStack?: string[];
    alt?: string;
}

interface BeStarLightCaseStudySystemProps {
    initialCases: any[];
    lang: "es" | "en";
    label?: string;
    title?: string;
}

const FLAGSHIP_COUNT = 3;

// 1. Accordion Card (Desktop Flagship)
const AccordionCard = ({
    item,
    isActive,
    onHover,
    onLeave,
    onClick
}: {
    item: CaseStudy,
    isActive: boolean,
    onHover: () => void,
    onLeave: () => void,
    onClick: (e: React.MouseEvent) => void
}) => {
    return (
        <div
            onClick={onClick}
            role="button"
            aria-label={`Ver caso de estudio: ${item.title}`}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(e as any); } }}
            className="relative h-[600px] overflow-hidden rounded-[24px] cursor-pointer transition-all duration-500 ease-in-out border border-transparent hover:border-[#141010]/10"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            style={{
                flex: isActive ? 3 : 1,
            }}
        >
            {/* Background Media */}
            <div className="absolute inset-0 z-0 bg-[#141010]">
                {item.videoUrl ? (
                    item.videoUrl.startsWith('/') || item.videoUrl.endsWith('.mp4') ? (
                        <video
                            src={item.videoUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${item.slug.includes('haddock') || item.slug.includes('oscar')
                                ? 'scale-[1.75]'
                                : isActive ? 'scale-105 brightness-90' : 'scale-110 brightness-50 grayscale'
                                }`}
                        />
                    ) : (
                        <iframe
                            src={`https://player.vimeo.com/video/${item.videoUrl.split('/').pop()}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
                            className="absolute top-1/2 left-1/2 w-[800%] h-[200%] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        />
                    )
                ) : (
                    <Image
                        src={item.img}
                        alt={item.alt || item.title}
                        fill
                        priority={item.id === 1}
                        className={`object-cover transition-all duration-700 ${isActive ? 'scale-105 brightness-75' : 'scale-110 brightness-50 grayscale'}`}
                    />
                )}
            </div>

            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 z-0" />

            {/* Content Overlay */}
            <div className={`absolute inset-0 z-10 flex flex-col justify-end p-8 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block w-fit px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#d4380d] text-white rounded-sm" style={{ fontFamily: 'var(--mono)' }}>
                        {item.tagDisplay}
                    </span>
                    {isActive && item.techStack && (
                        <div className="flex flex-wrap gap-2">
                            {item.techStack
                                .filter(tag => ["ESTRATEGIA", "STRATEGY", "B2B", "INDUSTRIA", "INDUSTRY"].includes(tag.toUpperCase()))
                                .map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white border border-white/20 rounded-sm" style={{ fontFamily: 'var(--mono)' }}>
                                        {tag}
                                    </span>
                                ))}
                        </div>
                    )}
                </div>

                {/* Title Main */}
                <h3 className={`font-black uppercase text-white leading-[0.9] transition-all duration-300 ${isActive ? 'text-5xl md:text-6xl mb-2' : 'text-2xl md:text-3xl mb-0'}`} style={{ fontFamily: 'var(--serif)' }}>
                    {item.title}
                </h3>

                {/* Subtitle (Only visible when active) */}
                <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/80 font-light text-sm md:text-lg mt-2 uppercase tracking-widest" style={{ fontFamily: 'var(--sans)' }}>
                        {item.subtitle}
                    </p>
                </div>
            </div>

            {/* Vertical Label (When inactive) */}
            <div className={`absolute top-8 right-8 z-20 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                <span className="text-white/40 font-bold text-xs uppercase tracking-widest writing-vertical-rl" style={{ fontFamily: 'var(--mono)' }}>
                    0{item.id}
                </span>
            </div>
        </div>
    );
};


// 2. Bento Card (Secondary Grid Items)
const BentoCard = ({ item, isLarge, onClick }: { item: CaseStudy, isLarge?: boolean, onClick: (e: React.MouseEvent) => void }) => {
    return (
        <div
            onClick={onClick}
            role="button"
            aria-label={`Ver caso de estudio: ${item.title}`}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(e as any); } }}
            className={`group relative rounded-[24px] overflow-hidden bg-[#141010] border border-[#141010]/5 hover:border-[#141010]/20 transition-all duration-300 cursor-pointer ${isLarge ? 'md:col-span-3' : 'md:col-span-2'}`}
        >
            <div className="aspect-[4/3] w-full h-full relative">
                {/* Background Media */}
                <div className="absolute inset-0 z-0">
                    {item.videoUrl ? (
                        item.videoUrl.startsWith('/') || item.videoUrl.endsWith('.mp4') ? (
                            <video
                                src={item.videoUrl}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-all duration-700 grayscale group-hover:grayscale-0 pointer-events-none"
                            />
                        ) : (
                            <iframe
                                src={`https://player.vimeo.com/video/${item.videoUrl.split('/').pop()}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
                                className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none opacity-60 group-hover:opacity-80"
                                allow="autoplay; fullscreen; picture-in-picture"
                            />
                        )
                    ) : (
                        <Image
                            src={item.img}
                            alt={item.alt || item.title}
                            fill
                            className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                        />
                    )}
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10">
                    <div className="flex flex-wrap gap-2 mb-4 group-hover:translate-x-2 transition-transform">
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-[#d4380d] text-white px-2 py-0.5 rounded-sm" style={{ fontFamily: 'var(--mono)' }}>
                            {item.tagDisplay}
                        </span>
                        {item.techStack && item.techStack
                            .filter(tag => ["ESTRATEGIA", "STRATEGY", "B2B", "INDUSTRIA", "INDUSTRY"].includes(tag.toUpperCase()))
                            .map((tag, idx) => (
                                <span key={idx} className="text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 px-2 py-0.5 rounded-sm bg-white/20" style={{ fontFamily: 'var(--mono)' }}>
                                    {tag}
                                </span>
                            ))}
                    </div>
                    <div>
                        <h4 className="font-bold text-xl md:text-2xl text-white uppercase leading-none mb-2 group-hover:translate-x-2 transition-transform" style={{ fontFamily: 'var(--serif)' }}>
                            {item.title}
                        </h4>
                        <p className="text-white/60 text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform delay-75" style={{ fontFamily: 'var(--sans)' }}>
                            {item.subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


// --- MAIN ORCHESTRATOR ---
export default function BeStarLightCaseStudySystem({ initialCases, lang, label, title }: BeStarLightCaseStudySystemProps) {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeFilter, setActiveFilter] = useState<string>("ALL");

    // --- DRAWER STATE ---
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedCase, setSelectedCase] = useState<any>(null);

    const handleOpenDrawer = (slug: string) => {
        const found = CASE_STUDIES.find(c => c.slug === slug);
        if (found) {
            setSelectedCase(found);
            setIsDrawerOpen(true);
        }
    };

    // 1. EXTRACT UNIQUE TAGS
    const allTags = Array.from(new Set([
        "ALL",
        ...initialCases.flatMap(c => [c.tagDisplay, ...(c.techStack || [])]).map(t => t.toUpperCase())
    ]));

    // 2. FILTER CASES
    const filteredCases = initialCases.filter(c => {
        if (activeFilter === "ALL") return true;
        return c.tagDisplay.toUpperCase() === activeFilter ||
            (c.techStack && c.techStack.some((t: string) => t.toUpperCase() === activeFilter));
    });

    // 3. SPLIT DATA
    const flagships = filteredCases.slice(0, activeFilter === "ALL" ? FLAGSHIP_COUNT : 4);
    const secondaryList = filteredCases.slice(activeFilter === "ALL" ? FLAGSHIP_COUNT : 4);

    return (
        <section id="casos" className="w-full pt-16 pb-24 relative z-10" style={{ background: 'var(--bg)' }}>
            <div className="max-w-[1800px] mx-auto px-4 md:px-8">
                
                {/* Section Title matching BeStarLight */}
                <div className="mb-12">
                    <div className="text-[10px] uppercase tracking-[0.25em] mb-6" style={{ fontFamily: 'var(--mono)', color: 'var(--accent)' }}>
                        {lang === 'es' ? 'Casos de estudio' : 'Case Studies'}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9]" style={{ fontFamily: 'var(--serif)', color: 'var(--text)' }}>
                        {lang === 'es' ? (
                            <>TRABAJOS <em style={{ color: 'rgb(212, 56, 13)', fontStyle: 'italic' }}>SELECCIONADOS</em></>
                        ) : (
                            <>SELECTED <em style={{ color: 'rgb(212, 56, 13)', fontStyle: 'italic' }}>WORKS</em></>
                        )}
                    </h2>
                    <p className="mt-6 text-sm md:text-xl font-light max-w-2xl" style={{ fontFamily: 'var(--sans)', color: 'var(--text)', opacity: 0.7, lineHeight: 1.6 }}>
                        {title || (lang === 'es' ? 'Implementaciones reales en entornos complejos.' : 'Real-world implementations in complex environments.')}
                    </p>
                </div>

                {/* 0. FILTER BAR */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => {
                                setActiveFilter(tag);
                                setActiveIndex(0);
                            }}
                            className="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border"
                            style={{
                                fontFamily: 'var(--mono)',
                                backgroundColor: activeFilter === tag ? 'var(--text)' : 'transparent',
                                color: activeFilter === tag ? 'var(--bg)' : 'var(--text)',
                                borderColor: activeFilter === tag ? 'var(--text)' : 'rgba(20, 16, 16, 0.1)',
                                transform: activeFilter === tag ? 'scale(1.05)' : 'scale(1)'
                            }}
                        >
                            {tag === "ALL" ? (lang === 'es' ? 'TODOS' : 'ALL') : tag}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                    >
                        {/* 1. SECTION: ACCORDION (Flagships) */}
                        {flagships.length > 0 && (
                            <div className="mb-4">
                                {/* Desktop: Horizontal Flex Accordion */}
                                <div className="hidden md:flex gap-4 w-full">
                                    {flagships.map((item, idx) => (
                                        <AccordionCard
                                            key={item.id}
                                            item={item}
                                            isActive={activeIndex === idx}
                                            onHover={() => setActiveIndex(idx)}
                                            onLeave={() => { }}
                                            onClick={() => handleOpenDrawer(item.slug)}
                                        />
                                    ))}
                                </div>

                                {/* Mobile: Vertical Stack */}
                                <div className="md:hidden flex flex-col gap-4">
                                    {flagships.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() => handleOpenDrawer(item.slug)}
                                            className="relative h-[450px] rounded-[20px] overflow-hidden cursor-pointer group border border-[#141010]/10"
                                        >
                                            {/* Background Layer */}
                                            <div className="absolute inset-0 bg-[#141010]">
                                                {item.videoUrl ? (
                                                    <video
                                                        src={item.videoUrl}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 
                                                            ${item.slug.includes('haddock') || item.slug.includes('oscar')
                                                                ? 'scale-[1.75]'
                                                                : 'scale-105'
                                                            } 
                                                            brightness-75`}
                                                    />
                                                ) : (
                                                    <Image
                                                        src={item.img}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                )}
                                            </div>

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />

                                            {/* Content Overlay */}
                                            <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                                                <div className="mb-2">
                                                    <span className="inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#d4380d] text-white rounded-sm mb-2" style={{ fontFamily: 'var(--mono)' }}>
                                                        {item.tagDisplay}
                                                    </span>
                                                </div>
                                                <h3 className="text-3xl font-black uppercase text-white leading-[0.9] mb-2 drop-shadow-lg" style={{ fontFamily: 'var(--display)' }}>
                                                    {item.title}
                                                </h3>
                                                <p className="text-white/80 text-xs uppercase tracking-widest font-light border-l-2 border-[#d4380d] pl-3" style={{ fontFamily: 'var(--display)' }}>
                                                    {item.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 2. SECTION: BENTO GRID (Secondary) */}
                        {secondaryList.length > 0 && (
                            <div className="mt-4">
                                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                                    {secondaryList.map((item, idx) => (
                                        <BentoCard
                                            key={item.id}
                                            item={item}
                                            isLarge={activeFilter === "ALL" ? idx < 2 : idx % 3 === 0}
                                            onClick={() => handleOpenDrawer(item.slug)}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {filteredCases.length === 0 && (
                            <div className="py-20 text-center">
                                <p className="font-display uppercase tracking-widest" style={{ color: 'var(--text)', opacity: 0.4 }}>No se encontraron casos para este filtro.</p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

            </div>

            {/* Case Study Drawer */}
            <CaseStudyDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                caseStudy={selectedCase}
            />
        </section>
    );
}
