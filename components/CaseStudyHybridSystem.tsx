"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

// --- TYPES & INTERFACES ---

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
}

interface CaseStudyHybridSystemProps {
    initialCases: any[]; // We'll map raw data to CaseStudy
    lang: "es" | "en";
}

// --- CONFIGURATION ---

const FLAGSHIP_COUNT = 3; // Number of items in the top accordion

// --- COMPONENTS ---

// 1. Accordion Card (Desktop Flagship)
const AccordionCard = ({
    item,
    isActive,
    onHover,
    onLeave
}: {
    item: CaseStudy,
    isActive: boolean,
    onHover: () => void,
    onLeave: () => void
}) => {
    return (
        <Link
            href={`/work/${item.slug}`}
            className="relative h-[600px] overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 ease-in-out border border-transparent hover:border-white/10"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            style={{
                flex: isActive ? 3 : 1, // The magic flex expansion
            }}
        >
            {/* Background Image or Video */}
            <div className="absolute inset-0 z-0">
                {item.videoUrl ? (
                    item.videoUrl.startsWith('/') || item.videoUrl.endsWith('.mp4') ? (
                        /* Local/Native Video */
                        <video
                            src={item.videoUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${item.slug.includes('haddock') || item.slug.includes('oscar')
                                ? 'scale-[1.75]' // Aggressive Cine-Zoom for Haddock
                                : isActive ? 'scale-105 brightness-90' : 'scale-110 brightness-50 grayscale'
                                }`}
                        />
                    ) : (
                        /* Vimeo Iframe (using the aggressive scaling fix) */
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
                        alt={item.title}
                        fill
                        className={`object-cover transition-all duration-700 ${isActive ? 'scale-105 brightness-75' : 'scale-110 brightness-50 grayscale'}`}
                    />
                )}
            </div>

            {/* Content Overlay */}
            <div className={`absolute inset-0 z-10 flex flex-col justify-end p-8 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`inline-block w-fit px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-carbon ${item.color} rounded-sm`}>
                        {item.tagDisplay}
                    </span>
                    {isActive && item.techStack && (
                        <div className="flex flex-wrap gap-2">
                            {item.techStack
                                .filter(tag => ["ESTRATEGIA", "STRATEGY", "B2B", "INDUSTRIA", "INDUSTRY"].includes(tag.toUpperCase()))
                                .map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/30 text-white border border-white/10 rounded-sm">
                                        {tag}
                                    </span>
                                ))}
                        </div>
                    )}
                </div>

                {/* Title Main */}
                <h3 className={`font-display font-black uppercase text-white leading-[0.9] transition-all duration-300 ${isActive ? 'text-6xl mb-2' : 'text-3xl mb-0'}`}>
                    {item.title}
                </h3>

                {/* Subtitle (Only visible when active) */}
                <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/80 font-light text-lg mt-2 font-display uppercase tracking-widest">
                        {item.subtitle}
                    </p>
                </div>
            </div>

            {/* Vertical Label (When inactive) */}
            <div className={`absolute top-8 right-8 z-20 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                <span className="text-white/40 font-bold text-xs uppercase tracking-widest writing-vertical-rl">
                    0{item.id}
                </span>
            </div>
        </Link>
    );
};


// 2. Bento Card (Secondary Grid Items)
const BentoCard = ({ item, isLarge }: { item: CaseStudy, isLarge?: boolean }) => {
    return (
        <Link
            href={`/work/${item.slug}`}
            className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-300 ${isLarge ? 'md:col-span-3' : 'md:col-span-2'}`}
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
                                className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-all duration-700 grayscale group-hover:grayscale-0"
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
                            alt={item.title}
                            fill
                            className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                        />
                    )}
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent z-10">
                    <div className="flex flex-wrap gap-2 mb-4 group-hover:translate-x-2 transition-transform">
                        <span className={`text-[10px] font-bold uppercase tracking-widest text-carbon ${item.color} px-2 py-0.5 rounded-sm`}>
                            {item.tagDisplay}
                        </span>
                        {item.techStack && item.techStack
                            .filter(tag => ["ESTRATEGIA", "STRATEGY", "B2B", "INDUSTRIA", "INDUSTRY"].includes(tag.toUpperCase()))
                            .map((tag, idx) => (
                                <span key={idx} className="text-[10px] font-bold uppercase tracking-widest text-white border border-white/10 px-2 py-0.5 rounded-sm bg-white/30">
                                    {tag}
                                </span>
                            ))}
                    </div>
                    <div>
                        <h4 className="font-display font-bold text-xl md:text-2xl text-white uppercase leading-none mb-2 group-hover:translate-x-2 transition-transform">
                            {item.title}
                        </h4>
                        <p className="text-white/50 text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform delay-75">
                            {item.subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}


// --- MAIN ORCHESTRATOR ---

export default function CaseStudyHybridSystem({ initialCases, lang }: CaseStudyHybridSystemProps) {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeFilter, setActiveFilter] = useState<string>("ALL");

    // 1. EXTRACT UNIQUE TAGS
    const allTags = Array.from(new Set([
        "ALL",
        ...initialCases.flatMap(c => [c.tagDisplay, ...(c.techStack || [])])
    ])).map(t => t.toUpperCase());

    // 2. FILTER CASES
    const filteredCases = initialCases.filter(c => {
        if (activeFilter === "ALL") return true;
        return c.tagDisplay.toUpperCase() === activeFilter ||
            (c.techStack && c.techStack.some((t: string) => t.toUpperCase() === activeFilter));
    });

    // 3. SPLIT DATA (Adapt based on filter)
    // If we have a filter, we might want a slightly different layout, but let's keep the split logic
    const flagships = filteredCases.slice(0, activeFilter === "ALL" ? FLAGSHIP_COUNT : 4);
    const secondaryList = filteredCases.slice(activeFilter === "ALL" ? FLAGSHIP_COUNT : 4);

    return (
        <section id="work" className="py-20 md:py-32 bg-background-light overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-4 md:px-12">

                {/* Header */}
                <div className="mb-12 flex items-end justify-between border-b border-carbon/10 pb-8">
                    <div>
                        <h2 className="text-5xl md:text-8xl lg:text-[100px] font-display font-black uppercase text-carbon leading-[0.8] tracking-tighter">
                            {lang === 'es' ? 'Trabajos' : 'Selected'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-vibrant-orange">{lang === 'es' ? 'Seleccionados' : 'Work'}</span>
                        </h2>
                        <p className="mt-8 text-carbon/60 text-sm md:text-[32px] font-light max-w-4xl leading-relaxed">
                            {lang === 'es' ? 'Implementaciones reales en entornos complejos.' : 'Real-world implementations in complex environments.'}
                        </p>
                    </div>
                </div>

                {/* 0. FILTER BAR */}
                <div className="flex flex-wrap gap-2 mb-16 md:mb-24">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => {
                                setActiveFilter(tag);
                                setActiveIndex(0);
                            }}
                            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${activeFilter === tag
                                ? 'bg-carbon text-white border-carbon scale-110'
                                : 'bg-white/50 text-carbon/40 border-carbon/10 hover:border-carbon/30 hover:text-carbon'
                                }`}
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
                                        />
                                    ))}
                                </div>

                                {/* Mobile: Vertical Stack */}
                                <div className="md:hidden flex flex-col gap-4">
                                    {flagships.map((item) => (
                                        <Link key={item.id} href={`/work/${item.slug}`} className="relative h-[400px] rounded-2xl overflow-hidden">
                                            <Image src={item.img} alt={item.title} fill className="object-cover brightness-75" />
                                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                                <h3 className="text-4xl font-display font-black uppercase text-white">{item.title}</h3>
                                                <p className="text-white/80 text-sm uppercase tracking-widest">{item.subtitle}</p>
                                            </div>
                                        </Link>
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
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {filteredCases.length === 0 && (
                            <div className="py-20 text-center">
                                <p className="text-carbon/40 font-display uppercase tracking-widest">No se encontraron casos para este filtro.</p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}
