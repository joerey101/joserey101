"use client";

import { content } from '@/app/content';

interface HeroProps {
    lang: "es" | "en";
}

export default function Hero({ lang }: HeroProps) {
    const t = content[lang].hero;

    return (
        <section className="h-[100svh] relative overflow-hidden bg-[#02050B] border-b border-grid-line w-full">

            {/* Fondo de video */}
            <video
                autoPlay muted loop playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src="/assets/img/HOME-VIDEO-STARLIGHT.mp4"
            />
            <div className="absolute inset-0 bg-carbon/65 pointer-events-none" />
            {/* Glow ambiental — esquina derecha */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-l from-primary/20 to-neon-pink/10 blur-[100px] rounded-full pointer-events-none" />

            {/* ══════════════════════════════════════════
                DESKTOP  lg: (1024px+)
                Grid de 2 columnas: headline | desc+cta
            ══════════════════════════════════════════ */}
            <div className="hidden lg:grid lg:grid-cols-[58%_42%] h-full relative z-10 px-16">

                {/* — Col izquierda: bloque tipográfico — */}
                <div className="flex flex-col justify-center gap-6">

                    <span className="font-meta text-[10px] font-bold uppercase tracking-[0.4em] text-electric-blue">
                        {t.label}
                    </span>

                    {/* h1 desktop — cada línea es un bloque controlado */}
                    <h1 className="font-display font-black tracking-tighter uppercase italic text-white leading-[0.88]">
                        <span className="block text-[5vw]">{t.weCreate}</span>
                        <span className="block text-[5vw] text-electric-blue">{t.strategy}</span>
                        <span className="block text-[2.2vw] text-white/65 mt-4">
                            {t.systems}{" "}
                            <span className="text-neon-pink">{t.digitalMind}</span>.
                        </span>
                    </h1>
                </div>

                {/* — Col derecha: descripción + CTAs — */}
                <div className="flex flex-col justify-end pb-20 pl-16 border-l border-white/10">
                    <p className="font-meta text-sm text-white/55 leading-relaxed mb-10 max-w-[360px]">
                        {t.descMobile}
                    </p>
                    <div className="flex flex-col items-start gap-3">
                        <a href="#blueprints"
                            className="bg-white text-carbon px-8 py-4 rounded-full font-meta text-[11px] font-black uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all">
                            {t.cta}
                        </a>
                        <a href="#work"
                            className="border border-white/30 text-white/70 px-8 py-4 rounded-full font-meta text-[11px] font-black uppercase tracking-widest hover:border-white hover:text-white transition-all">
                            {lang === "es" ? "Ver trabajo" : "Our work"}
                        </a>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════════
                MOBILE  < lg (hasta 1023px)
                Stack vertical con jerarquía controlada
            ══════════════════════════════════════════ */}
            <div className="flex lg:hidden flex-col justify-center h-full relative z-10 px-6 gap-5">

                <span className="font-meta text-[9px] font-bold uppercase tracking-[0.4em] text-electric-blue">
                    {t.label}
                </span>

                {/* h1 mobile — tamaños independientes del desktop */}
                <h1 className="font-display font-black tracking-tighter uppercase italic text-white leading-[0.88]">
                    <span className="block text-[9vw]">{t.weCreate}</span>
                    <span className="block text-[9vw] text-electric-blue">{t.strategy}</span>
                    <span className="block text-[5vw] text-white/65 mt-3">
                        {t.systems}{" "}
                        <span className="text-neon-pink">{t.digitalMind}</span>.
                    </span>
                </h1>

                <p className="font-meta text-sm text-white/55 leading-relaxed max-w-[300px]">
                    {t.descMobile}
                </p>

                <div className="flex gap-3">
                    <a href="#blueprints"
                        className="bg-white text-carbon px-6 py-3 rounded-full font-meta text-[10px] font-black uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all">
                        {t.cta}
                    </a>
                    <a href="#work"
                        className="border border-white/30 text-white/70 px-6 py-3 rounded-full font-meta text-[10px] font-black uppercase tracking-widest hover:border-white hover:text-white transition-all">
                        {lang === "es" ? "Ver trabajo" : "Our work"}
                    </a>
                </div>
            </div>

        </section>
    );
}
