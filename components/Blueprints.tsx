"use client";

import { useState } from 'react';

type BlueprintId = 1 | 2 | 3 | null;

export default function Blueprints() {
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
                        INGENIERÍA DE MERCADO
                    </h2>
                </div>
                <span className="font-meta text-xs font-bold uppercase tracking-[0.2em] opacity-40 mt-4 md:mt-0">
                    Competencias Clave / 001-003
                </span>
            </div>

            <div className="flex flex-col">
                {/* 01 */}
                <div
                    className={`blueprint-item border-b border-grid-line transition-all duration-300 group overflow-hidden cursor-pointer ${getItemClass(1, "bg-carbon")}`}
                    onClick={() => toggle(1)}
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-10">
                        <div className="flex items-start gap-6 md:gap-12 w-full md:w-auto">
                            <span className={`font-meta text-xl font-black transition-colors duration-300 w-[2ch] ${getTextClass(1, 'number')}`}>01</span>
                            <div className="flex flex-col gap-1">
                                <h3 className={`text-4xl md:text-6xl font-bold tracking-tighter uppercase transition-colors duration-300 ${getTextClass(1, 'title')}`}>
                                    ARQUITECTURA DE NEGOCIO
                                </h3>
                                <p className={`font-meta text-xs md:text-sm font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${getTextClass(1, 'subtitle')}`}>
                                    PENSAMIENTO SISTÉMICO Y POSICIONAMIENTO 101
                                </p>
                            </div>
                        </div>
                        <div className={`mt-4 md:mt-0 transform transition-transform duration-300 ${openId === 1 ? "rotate-90" : ""}`}>
                            <span className={`material-symbols-outlined text-4xl transition-colors duration-300 ${getTextClass(1, 'arrow')}`}>arrow_forward</span>
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openId === 1 ? "max-h-[500px]" : "max-h-0"}`}>
                        <div className="px-8 pb-12 pt-0 md:pl-[120px] max-w-4xl">
                            <p className={`font-meta text-lg md:text-xl leading-relaxed ${getTextClass(1, 'desc')}`}>
                                No hacemos 'branding' decorativo. Diseñamos la estructura comercial y la narrativa de marca necesarias para penetrar mercados saturados. Definimos el norte estratégico y la viabilidad económica antes de escribir una sola línea de código.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 02 */}
                <div
                    className={`blueprint-item border-b border-grid-line transition-all duration-300 group overflow-hidden cursor-pointer ${getItemClass(2, "bg-electric-blue")}`}
                    onClick={() => toggle(2)}
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-10">
                        <div className="flex items-start gap-6 md:gap-12 w-full md:w-auto">
                            <span className={`font-meta text-xl font-black transition-colors duration-300 w-[2ch] ${getTextClass(2, 'number')}`}>02</span>
                            <div className="flex flex-col gap-1">
                                <h3 className={`text-4xl md:text-6xl font-bold tracking-tighter uppercase transition-colors duration-300 ${getTextClass(2, 'title')}`}>
                                    INGENIERÍA DE SISTEMAS
                                </h3>
                                <p className={`font-meta text-xs md:text-sm font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${getTextClass(2, 'subtitle')}`}>
                                    FLUJOS GENERATIVOS Y AUTOMATIZACIÓN (AGENTS)
                                </p>
                            </div>
                        </div>
                        <div className={`mt-4 md:mt-0 transform transition-transform duration-300 ${openId === 2 ? "rotate-90" : ""}`}>
                            <span className={`material-symbols-outlined text-4xl transition-colors duration-300 ${getTextClass(2, 'arrow')}`}>arrow_forward</span>
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openId === 2 ? "max-h-[500px]" : "max-h-0"}`}>
                        <div className="px-8 pb-12 pt-0 md:pl-[120px] max-w-4xl">
                            <p className={`font-meta text-lg md:text-xl leading-relaxed ${getTextClass(2, 'desc')}`}>
                                Desarrollo de software a medida potenciado por Inteligencia Artificial. Creamos ecosistemas digitales que trabajan 24/7, eliminando tareas repetitivas y reduciendo la fricción operativa a cero. Tecnología invisible, resultados tangibles.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 03 */}
                <div
                    className={`blueprint-item border-b border-grid-line transition-all duration-300 group overflow-hidden cursor-pointer ${getItemClass(3, "bg-neon-pink")}`}
                    onClick={() => toggle(3)}
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-10">
                        <div className="flex items-start gap-6 md:gap-12 w-full md:w-auto">
                            <span className={`font-meta text-xl font-black transition-colors duration-300 w-[2ch] ${getTextClass(3, 'number')}`}>03</span>
                            <div className="flex flex-col gap-1">
                                <h3 className={`text-4xl md:text-6xl font-bold tracking-tighter uppercase transition-colors duration-300 ${getTextClass(3, 'title')}`}>
                                    OPERACIONES & DATA
                                </h3>
                                <p className={`font-meta text-xs md:text-sm font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${getTextClass(3, 'subtitle')}`}>
                                    ENFOQUE DATA-DRIVEN Y ESCALABILIDAD
                                </p>
                            </div>
                        </div>
                        <div className={`mt-4 md:mt-0 transform transition-transform duration-300 ${openId === 3 ? "rotate-90" : ""}`}>
                            <span className={`material-symbols-outlined text-4xl transition-colors duration-300 ${getTextClass(3, 'arrow')}`}>arrow_forward</span>
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openId === 3 ? "max-h-[500px]" : "max-h-0"}`}>
                        <div className="px-8 pb-12 pt-0 md:pl-[120px] max-w-4xl">
                            <p className={`font-meta text-lg md:text-xl leading-relaxed ${getTextClass(3, 'desc')}`}>
                                Lo que no se mide, no existe. Transformamos la intuición en certeza mediante tableros de control y métricas en tiempo real. Diseñamos la infraestructura operativa necesaria para soportar un crecimiento masivo sin generar caos interno.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
