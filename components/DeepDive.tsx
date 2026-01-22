import Image from 'next/image';
import { content } from '@/app/content';

interface DeepDiveProps {
    lang: "es" | "en";
}

export default function DeepDive({ lang }: DeepDiveProps) {
    const t = content[lang].deepDive;

    return (
        <section className="relative py-32 px-6 md:px-12 overflow-hidden border-b border-grid-line">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/img/concrete_noise.png"
                    alt="Concrete Texture"
                    fill
                    className="object-cover opacity-100 mix-blend-multiply"
                    priority
                />
                <div className="absolute inset-0 bg-carbon/90 mix-blend-multiply"></div>
            </div>

            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                <div className="flex-1">
                    <h2 className="font-display font-black text-6xl md:text-8xl uppercase leading-[0.9] tracking-tighter mb-6 text-white relative">
                        {t.titleMain} <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-white">{t.titleHighlight}</span>
                        <br />{t.titleSub} <span className="italic font-serif font-light text-white/50">{t.titleSubHighlight}</span>
                    </h2>
                    <p className="font-meta text-white/60 text-lg max-w-xl">
                        {t.desc}
                    </p>
                </div>

                <div className="flex-shrink-0">
                    <a href="mailto:hello@joserey101.com" className="group relative inline-flex items-center justify-center px-12 py-6 bg-white overflow-hidden rounded-none transition-all hover:scale-105 shadow-2xl">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-electric-blue rounded-full group-hover:w-96 group-hover:h-96 opacity-10"></span>
                        <span className="relative font-bold font-display uppercase tracking-widest text-carbon text-xl group-hover:tracking-[0.3em] transition-all">{t.cta}</span>
                        <span className="material-symbols-outlined ml-4 text-carbon relative group-hover:translate-x-2 transition-transform">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
