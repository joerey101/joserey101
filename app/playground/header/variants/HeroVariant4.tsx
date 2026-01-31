"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroVariant4({ lang }: { lang: "es" | "en" }) {
    // Mouse interaction for subtle parallax
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-white flex flex-col items-center justify-center -mt-24">

            {/* --- 1. THE LIGHT DATA TUNNEL --- */}
            <div className="absolute inset-0 z-0 perspective-[1000px] overflow-hidden">
                {/* Floor Grid - Light Gray & Subtle Cyan */}
                <div className="absolute bottom-0 left-[-50%] w-[200%] h-[100%] origin-bottom transform-gpu animate-grid-flow"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
                         `,
                        backgroundSize: '40px 40px',
                        transform: 'rotateX(60deg) translateY(0)',
                        maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
                    }}
                />

                {/* Ceiling Grid - Mirrored */}
                <div className="absolute top-0 left-[-50%] w-[200%] h-[100%] origin-top transform-gpu animate-grid-flow-reverse"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(0, 240, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 240, 255, 0.03) 1px, transparent 1px)
                         `,
                        backgroundSize: '40px 40px',
                        transform: 'rotateX(-60deg) translateY(0)',
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
                    }}
                />

                {/* Vertical Data Beams - Clean Technical Look */}
                <div className="absolute inset-0 flex justify-between px-20 opacity-30">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className={`w-[1px] h-full animate-pulse ${i % 2 === 0 ? 'bg-gradient-to-b from-transparent via-cyan-500 to-transparent' : 'bg-gradient-to-b from-transparent via-pink-500 to-transparent'}`}
                            style={{ animationDelay: `${i * 0.7}s`, animationDuration: '4s' }}
                        />
                    ))}
                </div>

                {/* Central Glow - Clinical White/Blue */}
                <div className="absolute inset-0 bg-radial-gradient from-white via-white/80 to-transparent opacity-90" />
            </div>


            {/* --- 2. HERO CONTENT --- */}
            <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6">

                {/* Floating "CREAMOS" Label - Dark text for contrast */}
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-carbon/60 mb-4"
                >
                    {lang === 'es' ? 'CREAMOS' : 'WE BUILD'}
                </motion.span>

                {/* Main Typography Stack */}
                <h1 className="flex flex-col items-center font-display font-black leading-[0.85] tracking-tighter uppercase select-none text-carbon">

                    {/* LINE 1: ESTRATEGIA (Solid Carbon) */}
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                        className="text-6xl md:text-8xl lg:text-[120px] drop-shadow-lg"
                    >
                        {lang === 'es' ? 'ESTRATEGIA' : 'STRATEGY'}
                    </motion.span>

                    {/* PLUS SIGN */}
                    <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="text-4xl text-carbon/30 my-2"
                    >
                        +
                    </motion.span>

                    {/* LINE 2: SISTEMAS (Gradient Tech) */}
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, type: "spring" }}
                        className="text-6xl md:text-8xl lg:text-[120px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 drop-shadow-sm"
                    >
                        {lang === 'es' ? 'SISTEMAS' : 'SYSTEMS'}
                    </motion.span>

                    {/* PLUS SIGN */}
                    <motion.span
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="text-4xl text-carbon/30 my-2"
                    >
                        +
                    </motion.span>

                    {/* LINE 3: MENTE DIGITAL (Vibrant Gradient) */}
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                        className="text-6xl md:text-8xl lg:text-[120px] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 drop-shadow-sm"
                    >
                        {lang === 'es' ? 'MENTE DIGITAL' : 'DIGITAL MIND'}
                    </motion.span>
                </h1>

                {/* Subtitle - Crisp Dark Gray */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="max-w-xl text-center text-sm md:text-lg text-carbon/60 mt-8 leading-relaxed font-medium"
                >
                    {lang === 'es'
                        ? 'No solo hacemos marketing. Construimos la infraestructura digital que escala tu negocio. Ingeniería aplicada al crecimiento.'
                        : 'We don\'t just do marketing. We build the digital infrastructure that scales your business. Engineering applied to growth.'}
                </motion.p>

                {/* TECH BUTTON (Dark) */}
                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-12 group relative px-8 py-4 rounded-full bg-carbon text-white overflow-hidden shadow-xl"
                >
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-cyan-500/20 transition-colors" />
                    <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] group-hover:text-cyan-200 transition-colors">
                        {lang === 'es' ? 'DESCÚBRANOS' : 'DISCOVER US'}
                    </span>

                    {/* Animated arrow - Cyan */}
                    <span className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-cyan-400 animate-bounce">
                        ↓
                    </span>
                </motion.button>
            </div>

            {/* Light Scanlines Overlay - Very subtle */}
            <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(0,0,0,0.03),rgba(0,0,0,0.01),rgba(0,0,0,0.03))]" style={{ backgroundSize: "100% 2px, 3px 100%" }} />
        </section>
    );
}
