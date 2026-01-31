"use client";

import { useState } from 'react';
import DevicePreview from "@/components/DevicePreview";

export default function HeaderPlayground() {
    const [headerType, setHeaderType] = useState<'v1' | 'v2'>('v2');
    const [heroType, setHeroType] = useState<'2' | '3' | '5'>('2');
    const [viewMode, setViewMode] = useState<"both" | "mobile" | "desktop">("desktop");

    // Construir la URL dinámica para que el iframe actualice
    const frameUrl = `/playground/header/frame?v=${headerType}&hero=${heroType}`;

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#F3F4F6]">

            {/* --- SIDEBAR DE CONTROL --- */}
            <aside className="w-80 h-full bg-white border-r border-[#E5E7EB] flex flex-col shadow-xl z-20">
                <div className="p-6 border-b border-[#E5E7EB]">
                    <h1 className="font-display font-black text-xl italic tracking-tighter uppercase text-carbon">
                        Laboratory
                    </h1>
                    <p className="text-[10px] font-mono text-carbon/40 mt-1">DEVICE SIMULATOR V1.5</p>
                </div>

                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">

                    {/* Control: Header Version */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-carbon/40">
                            Header Component
                        </label>
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => setHeaderType('v1')}
                                className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-200 text-left group ${headerType === 'v1' ? 'bg-carbon text-white border-carbon ring-2 ring-carbon/20' : 'bg-white text-carbon border-[#E5E7EB] hover:border-carbon/30'}`}
                            >
                                <span className="font-bold text-xs">V1 (Legacy)</span>
                            </button>

                            <button
                                onClick={() => setHeaderType('v2')}
                                className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-200 text-left group ${headerType === 'v2' ? 'bg-electric-blue text-carbon border-electric-blue shadow-[4px_4px_0px_#111]' : 'bg-white text-carbon border-[#E5E7EB] hover:border-carbon/30'}`}
                            >
                                <span className="font-bold text-xs">V2 (Production)</span>
                                <span className="size-2 bg-green-500 rounded-full animate-pulse" />
                            </button>
                        </div>
                    </div>

                    <div className="h-px w-full bg-[#E5E7EB]" />

                    {/* Control: Hero Variant (The New Toy) */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-carbon/40">
                            Hero Atmosphere
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={() => setHeroType('2')}
                                className={`py-4 rounded-lg border transition-all flex flex-col items-center gap-2 ${heroType === '2' ? 'bg-white border-carbon ring-1 ring-carbon text-carbon' : 'bg-gray-50 text-carbon/40 border-transparent hover:bg-white hover:shadow-sm'}`}
                            >
                                <div className="size-6 rounded-full bg-white border border-gray-200 shadow-sm" />
                                <span className="text-[10px] font-bold uppercase">Apple Clean</span>
                            </button>

                            <button
                                onClick={() => setHeroType('3')}
                                className={`py-4 rounded-lg border transition-all flex flex-col items-center gap-2 overflow-hidden relative ${heroType === '3' ? 'bg-black border-cyan-500 text-white shadow-[0_0_15px_rgba(0,255,255,0.3)]' : 'bg-gray-900 text-white/40 border-transparent hover:text-white'}`}
                            >
                                {/* Mini grid effect included in button */}
                                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.2)_1px,transparent_1px)] bg-[size:10px_10px]" />
                                <div className="size-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg relative z-10" />
                                <span className="text-[10px] font-bold uppercase relative z-10">Cyber Core</span>
                            </button>

                            <button
                                onClick={() => setHeroType('5')}
                                className={`col-span-2 py-4 rounded-lg border transition-all flex flex-col items-center gap-2 overflow-hidden relative ${heroType === '5' ? 'bg-black border-pink-500 text-white shadow-[0_0_15px_rgba(255,0,128,0.3)]' : 'bg-gray-900 text-white/40 border-transparent hover:text-white'}`}
                            >
                                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,0,128,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,128,0.2)_1px,transparent_1px)] bg-[size:10px_10px]" />
                                <div className="flex gap-1 relative z-10">
                                    <div className="size-2 bg-cyan-400 rounded-full animate-pulse" />
                                    <div className="size-2 bg-pink-500 rounded-full animate-pulse delay-75" />
                                </div>
                                <span className="text-[10px] font-bold uppercase relative z-10">Mobile Final (User Code)</span>
                            </button>
                        </div>
                    </div>

                    <div className="h-px w-full bg-[#E5E7EB]" />

                    {/* Control: View Mode */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-carbon/40">
                            Viewport Mode
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            <button
                                onClick={() => setViewMode('mobile')}
                                className={`flex flex-col items-center justify-center gap-2 py-3 rounded-lg border transition-all ${viewMode === 'mobile' ? 'bg-carbon text-white border-carbon' : 'bg-white text-carbon/40 border-[#E5E7EB] hover:border-carbon/30 hover:text-carbon'}`}
                            >
                                <span className="material-symbols-outlined text-xl">smartphone</span>
                                <span className="text-[9px] font-bold">Mobile</span>
                            </button>
                            <button
                                onClick={() => setViewMode('desktop')}
                                className={`flex flex-col items-center justify-center gap-2 py-3 rounded-lg border transition-all ${viewMode === 'desktop' ? 'bg-carbon text-white border-carbon' : 'bg-white text-carbon/40 border-[#E5E7EB] hover:border-carbon/30 hover:text-carbon'}`}
                            >
                                <span className="material-symbols-outlined text-xl">laptop_mac</span>
                                <span className="text-[9px] font-bold">Desktop</span>
                            </button>
                            <button
                                onClick={() => setViewMode('both')}
                                className={`flex flex-col items-center justify-center gap-2 py-3 rounded-lg border transition-all ${viewMode === 'both' ? 'bg-carbon text-white border-carbon' : 'bg-white text-carbon/40 border-[#E5E7EB] hover:border-carbon/30 hover:text-carbon'}`}
                            >
                                <span className="material-symbols-outlined text-xl">splitscreen</span>
                                <span className="text-[9px] font-bold">Both</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-[#E5E7EB] bg-gray-50">
                    <div className="flex items-center gap-2 opacity-50">
                        <div className="size-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono text-carbon uppercase">System Operational</span>
                    </div>
                </div>
            </aside>

            {/* --- CANVAS PRINCIPAL --- */}
            <main className="flex-1 h-full overflow-y-auto overflow-x-hidden relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 -z-10" />

                <div className="min-h-full w-full flex items-center justify-center p-12">
                    <div className={`flex flex-wrap justify-center items-start gap-16 transition-all duration-700 ${viewMode === 'both' ? 'max-w-[1800px]' : ''}`}>

                        {/* Mobile Device */}
                        {(viewMode === 'both' || viewMode === 'mobile') && (
                            <div className="shrink-0 transition-all duration-500 hover:scale-[1.02]">
                                <DevicePreview
                                    key={`mobile-${headerType}-${heroType}`}
                                    url={frameUrl}
                                    mode="mobile"
                                />
                            </div>
                        )}

                        {/* Desktop Device */}
                        {(viewMode === 'both' || viewMode === 'desktop') && (
                            <div className={`transition-all duration-500 hover:scale-[1.01] ${viewMode === 'both' ? 'flex-1 min-w-[600px] max-w-[1000px]' : 'w-[1200px]'}`}>
                                <DevicePreview
                                    key={`desktop-${headerType}-${heroType}`}
                                    url={frameUrl}
                                    mode="desktop"
                                />
                            </div>
                        )}

                    </div>
                </div>
            </main>
        </div>
    );
}
