"use client";

import { content } from '@/app/content';

interface BlueprintsGridProps {
    lang: "es" | "en";
}

const cardConfig = [
    { numColor: "text-electric-blue", ctaColor: "text-electric-blue", icon: "auto_awesome" },
    { numColor: "text-neon-pink",     ctaColor: "text-neon-pink",     icon: "hub"          },
    { numColor: "text-carbon",        ctaColor: "text-carbon",        icon: "monitoring"   },
];

export default function BlueprintsGrid({ lang }: BlueprintsGridProps) {
    const t = content[lang].blueprints;

    return (
        <section id="blueprints" className="border-t border-grid-line bg-white relative">

            {/* Section header — identical to current site */}
            <div className="flex flex-col md:flex-row items-baseline justify-between px-8 py-10 border-b border-grid-line bg-[#E5E5E5]">
                <div className="flex items-center w-full md:w-auto">
                    <h2 className="text-[50px] md:text-[80px] font-bold tracking-tighter uppercase italic text-carbon md:ml-[80px] leading-none">
                        {t.title}
                    </h2>
                </div>
                <span className="font-meta text-xs font-bold uppercase tracking-[0.2em] opacity-40 mt-4 md:mt-0">
                    {t.subtitle}
                </span>
            </div>

            {/* Cards grid — 1px gap using bg-grid-line as separator */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-grid-line">
                {t.items.map((item, i) => {
                    const cfg = cardConfig[i];
                    return (
                        <div
                            key={item.id}
                            className="bg-white px-8 py-10 flex flex-col gap-8 min-h-[440px]"
                        >
                            {/* Number + icon */}
                            <div className="flex items-start justify-between">
                                <span className={`font-meta text-2xl font-black italic ${cfg.numColor}`}>
                                    0{item.id}
                                </span>
                                <span className={`material-symbols-outlined text-xl opacity-40 ${cfg.numColor}`}>
                                    {cfg.icon}
                                </span>
                            </div>

                            {/* Title + subtitle */}
                            <div className="flex flex-col gap-2 flex-1">
                                <h3 className="text-[26px] md:text-[30px] font-bold tracking-tighter uppercase italic text-carbon leading-tight">
                                    {item.title}
                                </h3>
                                <p className="font-meta text-[10px] font-bold uppercase tracking-[0.15em] text-carbon/50 mt-1">
                                    {item.subtitle}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="font-meta text-sm leading-relaxed text-carbon/60">
                                {item.desc}
                            </p>

                            {/* CTA */}
                            <div className={`flex items-center gap-2 font-meta text-[10px] font-bold uppercase tracking-[0.2em] ${cfg.ctaColor}`}>
                                <span>{item.cta}</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
