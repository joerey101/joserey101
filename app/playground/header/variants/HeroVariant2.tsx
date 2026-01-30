"use client";

import HeroBase from '../HeroBase';

function FluidBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-white">
            {/* Soft, moving gradient blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-electric-blue/10 blur-[120px] rounded-full animate-slow-float shadow-inner"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-neon-pink/5 blur-[100px] rounded-full animate-slow-float-delayed"></div>
            <div className="absolute top-[30%] right-[20%] w-[30%] h-[40%] bg-vibrant-orange/5 blur-[120px] rounded-full animate-pulse-slow"></div>

            {/* Subtle Texture Grid Overlay */}
            <div className="absolute inset-0 grid-bg opacity-20"></div>

            <style jsx>{`
                @keyframes slow-float {
                    0% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(50px, 30px) scale(1.1); }
                    66% { transform: translate(-20px, 60px) scale(0.9); }
                    100% { transform: translate(0, 0) scale(1); }
                }
                @keyframes slow-float-delayed {
                    0% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(-40px, -20px) scale(0.9); }
                    66% { transform: translate(30px, -50px) scale(1.1); }
                    100% { transform: translate(0, 0) scale(1); }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.05); }
                }
                .animate-slow-float {
                    animation: slow-float 25s infinite ease-in-out;
                }
                .animate-slow-float-delayed {
                    animation: slow-float-delayed 30s infinite ease-in-out;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 15s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
}

export default function HeroVariant2({ lang }: { lang: "es" | "en" }) {
    return (
        <HeroBase
            lang={lang}
            background={<FluidBackground />}
        />
    );
}
