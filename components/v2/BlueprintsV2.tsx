"use client";

import { content } from '@/app/content';

interface BlueprintsProps {
    lang: "es" | "en";
}

export default function Blueprints({ lang }: BlueprintsProps) {
    const isEs = lang === "es";

    return (
        <section id="blueprints" className="bg-surface-container-low py-40 px-8 relative overflow-hidden tech-dot-bg">
            {/* Structural Engineering Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute left-1/4 top-0 bottom-0 w-px bg-outline-variant"></div>
                <div className="absolute left-3/4 top-0 bottom-0 w-px bg-outline-variant"></div>
                <div className="absolute top-1/3 left-0 right-0 h-px bg-outline-variant"></div>
            </div>
            
            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="font-label text-tech-blue font-bold tracking-[0.4em] text-xs block mb-6">/ EST. OPERATIVA_v2.0</span>
                        <h2 className="text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-on-surface">Capacidades</h2>
                    </div>
                    <div className="text-[10px] font-mono text-outline uppercase tracking-widest hidden md:block">
                        [ SYS_ID: 0x445BA0 ] <br/>
                        COORDINATES: 34.6037° S, 58.3816° W
                    </div>
                </div>

                <div className="space-y-40">
                    {/* Module 01: Asymmetric Flow */}
                    <div className="flex flex-col md:flex-row items-center gap-12 group">
                        <div className="w-full md:w-1/2 relative">
                            <span className="absolute -top-24 -left-8 text-[12rem] md:text-[18rem] font-black text-outline opacity-10 leading-none group-hover:text-tech-blue group-hover:opacity-20 transition-all duration-700">01</span>
                            <div className="relative pl-12 border-l-4 border-tech-blue/30 py-4">
                                <span className="material-symbols-outlined text-tech-blue text-6xl mb-8 glow-tech">settings_suggest</span>
                                <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 max-w-md leading-none text-on-surface">Modernización Digital y Desarrollo Web</h3>
                                <div className="scan-line top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-[2000ms] ease-linear"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mt-8 md:mt-24">
                            <p className="italic font-bold text-tech-blue text-lg mb-6 leading-tight">Ingeniería de software de alta disponibilidad.</p>
                            <p className="text-on-surface-variant text-lg leading-relaxed border-t border-outline-variant/30 pt-6">Arquitecturas robustas diseñadas para escalar operaciones globales con precisión técnica absoluta.</p>
                        </div>
                    </div>

                    {/* Module 02: Reversed Flow */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
                        <div className="w-full md:w-1/2 relative flex justify-end">
                            <span className="absolute -top-24 -right-8 text-[12rem] md:text-[18rem] font-black text-outline opacity-10 leading-none group-hover:text-tech-blue group-hover:opacity-20 transition-all duration-700">02</span>
                            <div className="relative pr-12 border-r-4 border-tech-blue/30 py-4 text-right">
                                <span className="material-symbols-outlined text-tech-blue text-6xl mb-8 glow-tech inline-block">flight_takeoff</span>
                                <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 max-w-md leading-none ml-auto text-on-surface">Estrategia y Comunicación</h3>
                                <div className="scan-line top-0 right-0 opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-[2000ms] ease-linear"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mt-8 md:mt-24 text-left">
                            <p className="italic font-bold text-tech-blue text-lg mb-6 leading-tight">Narrativas basadas en datos y performance.</p>
                            <p className="text-on-surface-variant text-lg leading-relaxed border-t border-outline-variant/30 pt-6">Desplegamos sistemas de comunicación que transforman la percepción de marca en activos medibles.</p>
                        </div>
                    </div>

                    {/* Module 03: Overlay Layout */}
                    <div className="flex flex-col md:flex-row items-center gap-12 group">
                        <div className="w-full md:w-1/2 relative">
                            <span className="absolute -top-24 -left-8 text-[12rem] md:text-[18rem] font-black text-outline opacity-10 leading-none group-hover:text-tech-blue group-hover:opacity-20 transition-all duration-700">03</span>
                            <div className="relative pl-12 border-l-4 border-tech-blue/30 py-4">
                                <span className="material-symbols-outlined text-tech-blue text-6xl mb-8 glow-tech block">photo_camera</span>
                                <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 max-w-md leading-none text-on-surface">Activos Audiovisuales</h3>
                                <div className="scan-line top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-[2000ms] ease-linear"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mt-8 md:mt-24 text-left">
                            <p className="italic font-bold text-tech-blue text-lg mb-6 leading-tight">Producción de alto impacto cinematográfico.</p>
                            <p className="text-on-surface-variant text-lg leading-relaxed border-t border-outline-variant/30 pt-6">Capturamos la esencia técnica y humana de su organización con estándares de calidad premium.</p>
                        </div>
                    </div>

                    {/* Module 04: Industrial Finish */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
                        <div className="w-full md:w-1/2 relative flex justify-end">
                            <span className="absolute -top-24 -right-8 text-[12rem] md:text-[18rem] font-black text-outline opacity-10 leading-none group-hover:text-tech-blue group-hover:opacity-20 transition-all duration-700">04</span>
                            <div className="relative pr-12 border-r-4 border-tech-blue/30 py-4 text-right">
                                <span className="material-symbols-outlined text-tech-blue text-6xl mb-8 glow-tech inline-block">shopping_cart</span>
                                <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 max-w-md leading-none ml-auto text-on-surface">E-commerce de Rendimiento</h3>
                                <div className="scan-line top-0 right-0 opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-[2000ms] ease-linear"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mt-8 md:mt-24 text-left">
                            <p className="italic font-bold text-tech-blue text-lg mb-6 leading-tight">Conversión optimizada por diseño.</p>
                            <p className="text-on-surface-variant text-lg leading-relaxed border-t border-outline-variant/30 pt-6">Ecosistemas transaccionales diseñados para maximizar el ROI mediante ingeniería de UX.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Flow Connection */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
                <div className="h-20 w-px bg-tech-blue"></div>
                <div className="w-2 h-2 rounded-full bg-tech-blue mt-2"></div>
            </div>
        </section>
    );
}
