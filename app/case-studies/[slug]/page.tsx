
import { notFound } from 'next/navigation';
import { CASE_STUDIES } from '@/data/case-studies';
import Image from 'next/image';
import Link from 'next/link';

export function generateStaticParams() {
    return CASE_STUDIES.map((c) => ({
        slug: c.slug,
    }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    const caseStudy = CASE_STUDIES.find((c) => c.slug === params.slug);

    if (!caseStudy) {
        notFound();
    }

    // Standalone Page Layout (Expanded)
    return (
        <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-500">

            {/* Editorial Hero */}
            <section className="relative h-[85vh] w-full">
                <Image
                    src={caseStudy.coverImage}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-0 left-0 p-8 md:p-20 max-w-7xl w-full">
                    <Link href="/case-studies" className="text-white/60 hover:text-white uppercase tracking-widest text-sm mb-8 block">
                        ← Volver al índice
                    </Link>
                    <span className="inline-block px-4 py-2 mb-6 text-sm font-bold uppercase tracking-widest bg-white text-black">
                        {caseStudy.tag}
                    </span>
                    <h1 className="text-6xl md:text-9xl font-display font-black uppercase leading-[0.85] text-white">
                        {caseStudy.title}
                    </h1>
                    <p className="mt-8 text-2xl md:text-3xl font-light text-white/90 max-w-3xl">
                        {caseStudy.subtitle}
                    </p>
                </div>
            </section>

            {/* Snapshot Bar */}
            <section className="bg-neutral-900 text-white py-16 border-b border-white/10">
                <div className="container mx-auto px-4 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {caseStudy.snapshot.map((item, idx) => (
                        <div key={idx} className="flex flex-col">
                            <span className="text-xs uppercase tracking-widest opacity-50 mb-2">{item.label}</span>
                            <span className="text-xl md:text-2xl font-bold font-display">{item.value}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Narrative Section */}
            <section className="py-24 px-4 md:px-20 container mx-auto max-w-6xl">

                {/* Challenge */}
                <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12 mb-24">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-neutral-400">El Desafío</h3>
                    <p className="text-2xl md:text-4xl font-light leading-relaxed">
                        {caseStudy.challenge}
                    </p>
                </div>

                {/* Solution */}
                <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12 mb-24">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-neutral-400">La Solución</h3>
                    <div className="space-y-8">
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-600 dark:text-neutral-300">
                            {caseStudy.solution}
                        </p>
                        {/* Tech & approach details could go here */}
                    </div>
                </div>

                {/* Impact */}
                <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-neutral-400">El Impacto</h3>
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-600 dark:text-neutral-300">
                        {caseStudy.impact}
                    </p>
                </div>

            </section>

            {/* Gallery Placeholder */}
            <section className="py-20 bg-neutral-100 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-neutral-500 uppercase tracking-widest">[ Galería de Imágenes Extendida ]</p>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-32 flex flex-col items-center justify-center text-center px-4 bg-background">
                <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-12">
                    ¿Listo para escalar?
                </h2>
                <a
                    href={caseStudy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-12 py-6 bg-foreground text-background text-xl font-bold uppercase tracking-wide hover:opacity-90 transition-opacity"
                >
                    {caseStudy.ctaText}
                </a>
            </section>

        </main>
    );
}
