"use client";

import Link from 'next/link';
import Image from 'next/image';

// Types covering our Hybrid Schema
interface KeyMetric {
    value: string;
    label: string;
    icon?: string;
}

interface CaseStudy {
    id: string;
    title: string;
    subtitle: string;
    slug: { current: string };
    tier: number;
    tagDisplay: string;
    filterTag?: string; // Mapped from 'tag'
    color: string;
    mainImage: string;
    duration?: string;
    keyMetrics?: KeyMetric[];
    techStack?: string[];
    challenge?: string;
    solution?: string;
    impact?: string;
    gallery?: string[];
}

interface CaseStudySystemProps {
    initialCases: any[]; // We'll map raw sanity data to CaseStudy
    lang: "es" | "en";
}

export default function CaseStudySystemV2({ initialCases, lang }: CaseStudySystemProps) {
    return (
        <section className="px-4 py-20 bg-background-light">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1400px] mx-auto">
                {initialCases.map((item) => (
                    <Link
                        key={item.slug}
                        href={`/work/${item.slug}`}
                        className="group relative aspect-[4/3] bg-carbon cursor-pointer overflow-hidden border border-carbon/10"
                    >
                        <Image
                            src={item.img || "/assets/img/haddock.png"}
                            alt={item.title}
                            fill
                            className="object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <span className={`inline-block w-fit px-2 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest text-carbon ${item.color}`}>
                                {item.tagDisplay}
                            </span>
                            <h3 className="text-4xl md:text-5xl font-display font-black uppercase text-white leading-[0.9]">
                                {item.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
