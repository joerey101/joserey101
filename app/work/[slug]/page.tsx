"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/app/content";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";

export default function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
    // Unwrapping params for Next.js 15+ compatibility
    const { slug } = use(params);
    const lang = "es";

    // Fetch Data
    const caseStudy = getCaseStudyBySlug(slug, lang);

    if (!caseStudy) {
        notFound();
    }

    return (
        <main className="relative w-full bg-white selection:bg-acid-green selection:text-black">

            {/* 1. FIXED HERO (Dark & Cinematic) - Remains "behind" content */}
            <div className="fixed inset-0 z-0 h-[85vh] w-full bg-black">
                <div className="absolute inset-0 bg-black/40 z-10" />

                {caseStudy.videoUrl ? (
                    <video
                        src={caseStudy.videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-70"
                    />
                ) : (
                    <Image
                        src={caseStudy.img}
                        alt={caseStudy.title}
                        fill
                        className="object-cover opacity-70"
                        priority
                    />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />

                {/* Hero Content - Centered */}
                <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-4 pb-20">
                    <span className={`inline-block px-4 py-1.5 mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-black bg-white/90 backdrop-blur-md rounded-full ${caseStudy.color.replace('bg-', 'text-').replace('text-white', '')}`}>
                        {caseStudy.tagDisplay}
                    </span>
                    <h1 className="font-display font-black text-5xl md:text-8xl uppercase leading-[0.85] tracking-tighter text-white mb-6 drop-shadow-2xl">
                        {caseStudy.title}
                    </h1>
                    <p className="font-meta text-lg md:text-xl font-light text-white/90 uppercase tracking-[0.25em] drop-shadow-md">
                        {caseStudy.subtitle}
                    </p>
                </div>
            </div>

            {/* 2. SCROLLABLE CONTENT PANEL (White Paper) - Slides OVER the hero */}
            <div className="relative z-40 mt-[80vh] bg-white rounded-t-[3rem] shadow-[0_-25px_50px_rgba(0,0,0,0.5)] min-h-screen">

                {/* Metrics Bar */}
                <div className="container mx-auto px-6 md:px-20 py-24">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-gray-200 pb-16 mb-24 animate-fade-in-up">
                        {caseStudy.keyMetrics?.map((m, i) => (
                            <div key={i} className="text-center md:text-left">
                                <div className="text-3xl md:text-5xl font-display font-black text-black mb-2">{m.value}</div>
                                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{m.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Editorial Content - Black Text on White */}
                    <div className="max-w-4xl mx-auto space-y-32 text-black">

                        {/* 01. Challenge */}
                        <section className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 md:gap-16">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-300 pt-3">01.</span>
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">El Desafío</h3>
                                <div className="text-[22px] md:text-[28px] font-sans font-normal leading-[1.6] text-zinc-800 max-w-3xl">
                                    {caseStudy.details?.challenge}
                                </div>
                            </div>
                        </section>

                        {/* 02. Solution */}
                        <section className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 md:gap-16">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-300 pt-3">02.</span>
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">La Solución</h3>
                                <div className="space-y-10">
                                    <div className="text-[22px] md:text-[28px] font-sans font-normal leading-[1.6] text-zinc-800 max-w-3xl">
                                        {caseStudy.details?.solution}
                                    </div>
                                    {/* Tech Stack - Light Theme */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {caseStudy.techStack?.map(tech => (
                                            <span key={tech} className="px-4 py-2 border border-gray-200 rounded-full text-[11px] uppercase font-bold text-gray-500 hover:bg-gray-50 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 03. Impact */}
                        <section className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 md:gap-16">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-300 pt-3">03.</span>
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">El Impacto</h3>
                                <div className="text-[22px] md:text-[28px] font-sans font-normal leading-[1.6] text-zinc-800 max-w-3xl">
                                    {caseStudy.details?.impact}
                                </div>
                            </div>
                        </section>

                        {/* Extended Content (Deep Dive) */}
                        {caseStudy.extended ? (
                            <section className="mt-32 border-t border-gray-100 pt-32">
                                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 md:gap-16">
                                    <span className="text-xs font-bold uppercase tracking-widest text-acid-green pt-3">DEEP DIVE</span>
                                    <div className="space-y-16 animate-fade-in-up">
                                        <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight text-black">
                                            {caseStudy.extended.intro}
                                        </h3>
                                        <div className="prose prose-lg prose-gray max-w-none text-gray-600 font-light leading-relaxed">
                                            <p>{caseStudy.extended.body}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ) : (
                            /* Placeholder for future content */
                            <div className="mt-32 p-16 bg-gray-50 border border-gray-100 rounded-3xl text-center opacity-50">
                                <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-6">Contenido Extendido</p>
                                <p className="text-gray-500 italic">Próximamente disponible con detalles exclusivos</p>
                            </div>
                        )}

                        {/* CUSTOM CTA (External Link) */}
                        {caseStudy.cta && (
                            <div className="flex justify-center pt-20">
                                <a
                                    href={caseStudy.cta.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center gap-6 px-12 py-6 bg-black text-white rounded-full overflow-hidden transition-transform hover:scale-105"
                                >
                                    <span className="relative z-10 text-xl font-bold uppercase tracking-[0.2em] group-hover:text-acid-green transition-colors">
                                        {caseStudy.cta.text}
                                    </span>
                                    <ArrowUpRight size={24} className="relative z-10 group-hover:text-acid-green group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />

                                    {/* Hover Effect bg */}
                                    <div className="absolute inset-0 bg-zinc-800 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                </a>
                            </div>
                        )}

                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="py-24 bg-white text-center border-t border-gray-100">
                    <Link href="/#work" className="inline-flex items-center gap-3 text-black font-bold uppercase tracking-[0.2em] text-sm hover:text-acid-green transition-colors group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Volver al Índice
                    </Link>
                </div>
            </div>

            {/* Floating Back Button */}
            <Link href="/#work" className="fixed top-8 left-8 z-50 p-4 bg-white/10 backdrop-blur-md rounded-full text-white mix-blend-difference hover:scale-110 transition-transform">
                <ArrowLeft size={24} />
            </Link>

        </main>
    );
}
