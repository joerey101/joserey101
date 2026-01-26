"use client";

import Image from "next/image";

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

interface CaseStudyContentProps {
    caseStudy: CaseStudy;
    lang: "es" | "en";
}

export default function CaseStudyContent({ caseStudy, lang }: CaseStudyContentProps) {
    return (
        <div className="relative bg-background-light min-h-screen">
            {/* Hero Image */}
            <div className="relative w-full h-[50vh] lg:h-[60vh]">
                <Image
                    src={caseStudy.img}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 to-transparent" />

                <div className="absolute bottom-8 left-6 md:left-12 text-white max-w-4xl">
                    <span className={`inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest text-carbon ${caseStudy.color}`}>
                        {caseStudy.tagDisplay}
                    </span>
                    <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.9] mb-4">
                        {caseStudy.title}
                    </h1>
                    <p className="font-meta text-sm md:text-base font-bold uppercase tracking-widest opacity-80">
                        {caseStudy.subtitle}
                    </p>
                </div>
            </div>

            {/* Details */}
            <div className="p-6 md:p-12 lg:p-20 text-carbon max-w-5xl mx-auto">
                <div className="grid grid-cols-1 gap-16">
                    {/* Challenge */}
                    <div>
                        <h2 className="font-display font-bold text-2xl uppercase mb-6 text-carbon/40 tracking-widest">
                            {lang === 'es' ? 'El Desafío' : 'The Challenge'}
                        </h2>
                        <p className="font-sans text-xl md:text-2xl leading-relaxed font-medium">
                            {caseStudy.details?.challenge || "Details coming soon..."}
                        </p>
                    </div>

                    {/* Solution */}
                    <div>
                        <h2 className="font-display font-bold text-2xl uppercase mb-6 text-carbon/40 tracking-widest">
                            {lang === 'es' ? 'La Solución' : 'The Solution'}
                        </h2>
                        <p className="font-sans text-xl md:text-2xl leading-relaxed font-medium">
                            {caseStudy.details?.solution || "Details coming soon..."}
                        </p>
                    </div>

                    {/* Impact */}
                    <div>
                        <h2 className="font-display font-bold text-2xl uppercase mb-6 text-carbon/40 tracking-widest">
                            {lang === 'es' ? 'El Impacto' : 'The Impact'}
                        </h2>
                        <div className={`p-8 md:p-12 ${caseStudy.color} bg-opacity-20 border-l-8 border-carbon`}>
                            <p className="font-display font-bold text-3xl md:text-4xl leading-[1.1] uppercase">
                                "{caseStudy.details?.impact || "Details coming soon..."}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
