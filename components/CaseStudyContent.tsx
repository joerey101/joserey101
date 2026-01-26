"use client";

import Image from "next/image";

interface CaseStudyDetails {
    challenge: string;
    solution: string;
    impact: string;
}

interface CaseStudy {
    id: number | string;
    title: string;
    subtitle: string;
    tag: string;
    tagDisplay: string;
    img: string;
    color: string;
    details?: CaseStudyDetails;
    stats?: {
        year: string;
        role: string;
        client: string;
        link: string;
    };
    gallery?: string[];
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

                {/* Stats Grid */}
                {caseStudy.stats && (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-b border-grid-line">
                        <div>
                            <h4 className="font-meta text-xs font-bold uppercase tracking-widest text-carbon/50 mb-2">Year</h4>
                            <p className="font-display font-medium text-lg">{caseStudy.stats.year}</p>
                        </div>
                        <div>
                            <h4 className="font-meta text-xs font-bold uppercase tracking-widest text-carbon/50 mb-2">Role</h4>
                            <p className="font-display font-medium text-lg">{caseStudy.stats.role}</p>
                        </div>
                        <div>
                            <h4 className="font-meta text-xs font-bold uppercase tracking-widest text-carbon/50 mb-2">Client</h4>
                            <p className="font-display font-medium text-lg">{caseStudy.stats.client}</p>
                        </div>
                        <div>
                            <h4 className="font-meta text-xs font-bold uppercase tracking-widest text-carbon/50 mb-2">Link</h4>
                            {caseStudy.stats.link ? (
                                <a href={caseStudy.stats.link} target="_blank" rel="noopener noreferrer" className="font-display font-medium text-lg underline decoration-electric-blue underline-offset-4 hover:bg-electric-blue hover:text-white transition-colors">
                                    Visit Live
                                </a>
                            ) : (
                                <p className="font-display font-medium text-lg text-carbon/50">-</p>
                            )}
                        </div>
                    </div>
                )}

                {/* Image Gallery */}
                {caseStudy.gallery && caseStudy.gallery.length > 0 && (
                    <div className="space-y-8">
                        <h2 className="font-display font-bold text-2xl uppercase text-carbon/40 tracking-widest">
                            {lang === 'es' ? 'Galería' : 'Gallery'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {caseStudy.gallery.map((img, i) => (
                                <div key={i} className="relative w-full aspect-video bg-carbon/5">
                                    <Image
                                        src={img}
                                        alt={`Gallery image ${i + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
