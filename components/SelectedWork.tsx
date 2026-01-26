"use client";

import { useState, useEffect } from 'react';
import { client } from '@/sanity/client';
import CaseStudySystem from './CaseStudySystem';

interface SelectedWorkProps {
    lang: "es" | "en";
}

export default function SelectedWork({ lang }: SelectedWorkProps) {
    const [cases, setCases] = useState<any[]>([]);

    useEffect(() => {
        // Fetch logic similar to before but including new fields
        const query = `*[_type == "caseStudy" && language == "${lang}"] | order(tier desc, _createdAt desc) {
            _id,
            title,
            subtitle,
            "slug": slug.current,
            tier,
            tagDisplay,
            tag,
            color,
            "imgUrl": mainImage.asset->url,
            keyMetrics,
            techStack,
            challenge,
            solution,
            impact,
            "gallery": gallery[].asset->url
        }`;

        client.fetch(query).then(data => setCases(data));
    }, [lang]);

    if (cases.length === 0) return null; // Or skeleton

    return (
        <section id="work" className="relative z-10">
            <div className="px-6 lg:px-12 py-20 border-b border-grid-line bg-background-light">
                <div className="flex flex-col md:flex-row gap-8 items-end justify-between max-w-[1400px] mx-auto">
                    <h2 className="font-display font-black text-[12vw] md:text-[8rem] leading-[0.85] tracking-[-0.05em] uppercase text-carbon">
                        Selected<br /><span className="text-stroke-carbon text-transparent">Work</span>
                    </h2>
                </div>
            </div>

            <div className="-mt-12">
                {/* Negative margin to pull grid closer if needed, adjusting visual hierarchy */}
                <CaseStudySystem initialCases={cases} lang={lang} />
            </div>
        </section>
    );
}
