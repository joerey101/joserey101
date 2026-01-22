"use client";

import { useState } from 'react';
import { content } from '@/app/content';

type BlueprintId = 1 | 2 | 3 | null;

interface BlueprintsProps {
    lang: "es" | "en";
}

export default function Blueprints({ lang }: BlueprintsProps) {
    const t = content[lang].blueprints;
    const [openId, setOpenId] = useState<BlueprintId>(null);

    const toggle = (id: BlueprintId) => {
        setOpenId(openId === id ? null : id);
    };

    const getItemClass = (id: number, activeClass: string) => {
        const isOpen = openId === id;
        if (!isOpen) return "bg-white hover:" + (id === 1 ? "bg-carbon" : id === 2 ? "bg-electric-blue" : "bg-neon-pink");
        return activeClass;
    };

    const getTextClass = (id: number, type: 'title' | 'subtitle' | 'number' | 'arrow' | 'desc') => {
        const isOpen = openId === id;
        if (!isOpen) {
            switch (type) {
                case 'title': return id === 1 ? "text-carbon group-hover:text-white" : "text-carbon";
                case 'subtitle': return id === 1 ? "text-carbon/60 group-hover:text-white/60" : "text-carbon/60 group-hover:text-carbon";
                case 'number': return id === 1 ? "text-carbon/30 group-hover:text-white/20" : "text-carbon/30 group-hover:text-carbon/20";
                case 'arrow': return id === 1 ? "text-carbon group-hover:text-white" : "text-carbon";
                case 'desc': return "text-carbon/80";
            }
        } else {
            if (id === 1) { // Carbon
                switch (type) {
                    case 'title': return "text-white";
                    case 'subtitle': return "text-white/60";
                    case 'number': return "text-white/20";
                    case 'arrow': return "text-white";
                    case 'desc': return "text-white/80";
                }
            } else { // Blue or Pink
                switch (type) {
                    case 'title': return "text-carbon";
                    case 'subtitle': return "text-carbon";
                    case 'number': return "text-carbon/20";
                    case 'arrow': return "text-carbon";
                    case 'desc': return "text-carbon";
                }
            }
        }
        return "";
    };

    return (
        <section id="blueprints" className="border-t border-grid-line bg-white relative z-20">
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

            <div className="flex flex-col">
                {t.items.map((item) => (
                    <div
                        key={item.id}
                        className={`blueprint-item border-b border-grid-line transition-all duration-300 group overflow-hidden cursor-pointer ${getItemClass(item.id, item.id === 1 ? "bg-carbon" : item.id === 2 ? "bg-electric-blue" : "bg-neon-pink")}`}
                        onClick={() => toggle(item.id as BlueprintId)}
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-10">
                            <div className="flex items-start gap-6 md:gap-12 w-full md:w-auto">
                                <span className={`font-meta text-xl font-black transition-colors duration-300 w-[2ch] ${getTextClass(item.id, 'number')}`}>
                                    0{item.id}
                                </span>
                                <div className="flex flex-col gap-1">
                                    <h3 className={`text-4xl md:text-6xl font-bold tracking-tighter uppercase transition-colors duration-300 ${getTextClass(item.id, 'title')}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`font-meta text-xs md:text-sm font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${getTextClass(item.id, 'subtitle')}`}>
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                            <div className={`mt-4 md:mt-0 transform transition-transform duration-300 ${openId === item.id ? "rotate-90" : ""}`}>
                                <span className={`material-symbols-outlined text-4xl transition-colors duration-300 ${getTextClass(item.id, 'arrow')}`}>arrow_forward</span>
                            </div>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openId === item.id ? "max-h-[500px]" : "max-h-0"}`}>
                            <div className="px-8 pb-12 pt-0 md:pl-[120px] max-w-4xl">
                                <p className={`font-meta text-lg md:text-xl leading-relaxed ${getTextClass(item.id, 'desc')}`}>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
