"use client";

import { useState } from 'react';
import Image from 'next/image';

const casesData = [
    {
        id: 1,
        title: "OSCAR ACADEMY AWARD",
        subtitle: "Infraestructura Digital para Productoras de Élite",
        tag: "CULTURA",
        img: "/assets/img/haddock.png",
        color: "bg-neon-pink"
    },
    {
        id: 2,
        title: "LÍDER INDUSTRIAL LATAM",
        subtitle: "Arquitectura de Negocios Corporativa",
        tag: "CORPORATIVO",
        img: "/assets/img/mirgor.png",
        color: "bg-electric-blue"
    },
    {
        id: 3,
        title: "+50.000 ALUMNOS CONECTADOS",
        subtitle: "Ecosistema Educativo de Alto Tráfico",
        tag: "EDUCACIÓN",
        img: "/assets/img/ucasal.png",
        color: "bg-acid-green"
    },
    {
        id: 4,
        title: "OPERACIÓN USA - LATAM",
        subtitle: "Logística Cross-Border y LLCs",
        tag: "E-COMMERCE",
        img: "/assets/img/columba.png",
        color: "bg-vibrant-orange"
    }
];

export default function SelectedWork() {
    const [filter, setFilter] = useState("TODOS");

    const filteredCases = filter === "TODOS"
        ? casesData
        : casesData.filter(c => {
            if (filter === "CULTURA") return c.tag === "CULTURA" || c.tag === "EDUCACIÓN";
            return c.tag === filter;
        });

    return (
        <section id="work" className="relative z-10">
            <div className="px-6 lg:px-12 py-20 border-b border-grid-line bg-background-light">
                <div className="flex flex-col md:flex-row gap-8 items-end justify-between max-w-[1400px] mx-auto">
                    <h2 className="font-display font-black text-[12vw] md:text-[8rem] leading-[0.85] tracking-[-0.05em] uppercase text-carbon">
                        Casos de<br />Estudio
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <button onClick={() => setFilter('TODOS')} className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all cursor-pointer hover:scale-105 active:scale-95 ${filter === 'TODOS' ? 'bg-carbon text-white' : 'border border-carbon text-carbon hover:bg-carbon hover:text-white'}`}>Todos</button>
                        <button onClick={() => setFilter('CORPORATIVO')} className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all cursor-pointer hover:scale-105 active:scale-95 border border-carbon ${filter === 'CORPORATIVO' ? 'bg-acid-green border-acid-green text-carbon' : 'hover:bg-acid-green hover:border-acid-green'}`}>Corporativo</button>
                        <button onClick={() => setFilter('E-COMMERCE')} className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all cursor-pointer hover:scale-105 active:scale-95 border border-carbon ${filter === 'E-COMMERCE' ? 'bg-electric-blue border-electric-blue text-carbon' : 'hover:bg-electric-blue hover:border-electric-blue'}`}>E-Commerce</button>
                        <button onClick={() => setFilter('CULTURA')} className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all cursor-pointer hover:scale-105 active:scale-95 border border-carbon ${filter === 'CULTURA' ? 'bg-neon-pink border-neon-pink text-carbon' : 'hover:bg-neon-pink hover:border-neon-pink'}`}>Cultura & Educación</button>
                    </div>
                </div>
            </div>

            <div id="case-gallery" className="w-full bg-background-light border-b border-grid-line p-4 md:p-8 min-h-[800px] grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCases.map(item => (
                    <div key={item.id} className="relative group w-full aspect-[4/3] overflow-hidden border border-carbon bg-carbon">
                        <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                                <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-carbon ${item.color}`}>
                                    {item.tag}
                                </span>
                                <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-4 group-hover:translate-y-0 text-4xl">
                                    arrow_outward
                                </span>
                            </div>
                            <div>
                                <h3 className="text-3xl md:text-5xl font-display font-black uppercase text-white leading-[0.9] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </h3>
                                <p className="font-meta text-xs md:text-sm font-bold uppercase tracking-widest text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
