'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function WorkHeroApple() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Detect scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Mappings
    const blurOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

    // Content entrance (the grid title)
    const gridTitleOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
    const gridTitleY = useTransform(scrollYProgress, [0.6, 0.9], [50, 0]);

    return (
        <section ref={containerRef} className="relative h-[250vh] bg-black">
            {/* STICKY BACKGROUND */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <motion.div
                    style={{ scale: imageScale }}
                    className="absolute inset-0 h-full w-full"
                >
                    <img
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                        className="h-full w-full object-cover brightness-50"
                        alt="Selected Work Background"
                    />
                </motion.div>

                {/* PROGRESSIVE BLUR LAYER */}
                <motion.div
                    style={{ opacity: blurOpacity }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-3xl"
                />

                {/* MAIN HERO TEXT (Centered and fades out) */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <motion.div
                        style={{ opacity: textOpacity, scale: textScale }}
                        className="text-center px-6"
                    >
                        <span className="block text-neon-pink font-bold uppercase tracking-[0.5em] mb-6 text-sm">Portfolio</span>
                        <h1 className="text-white text-7xl md:text-9xl font-display font-black uppercase tracking-tighter leading-[0.8]">
                            Selected <br /> Work
                        </h1>
                    </motion.div>
                </div>

                {/* BOTTOM CONTENT PREVIEW (Appears with blur) */}
                <div className="absolute bottom-20 left-0 w-full px-10 md:px-20 z-30">
                    <motion.div style={{ opacity: gridTitleOpacity, y: gridTitleY }}>
                        <p className="text-white/40 font-bold text-xs uppercase tracking-[0.4em] mb-4">Explorar Proyectos</p>
                        <div className="w-20 h-1 bg-white/20"></div>
                    </motion.div>
                </div>
            </div>

            {/* SPACE FOR SCROLLING */}
            <div className="h-[150vh]" />
        </section>
    );
}
