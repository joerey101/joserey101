"use client";

import HeroBase from '../HeroBase';

function AuroraBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-white overflow-hidden pointer-events-none">
            {/* Base Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/[0.03] via-transparent to-neon-pink/[0.03]"></div>

            {/* Pulsing Auroras */}
            <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] aura aura-primary animate-breath"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[120%] aura aura-secondary animate-breath-delayed"></div>

            {/* Tactile Texture - Stronger Grain */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                        <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>

            <style jsx>{`
                .aura {
                    border-radius: 50%;
                    filter: blur(150px);
                    opacity: 0.4;
                }
                .aura-primary {
                    background: radial-gradient(circle at 40% 40%, rgba(0, 243, 255, 0.1) 0%, transparent 60%);
                }
                .aura-secondary {
                    background: radial-gradient(circle at 60% 60%, rgba(255, 0, 255, 0.08) 0%, transparent 60%);
                }

                @keyframes breath {
                    0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.3; }
                    50% { transform: scale(1.15) translate(20px, 10px); opacity: 0.6; }
                }
                @keyframes breath-delayed {
                    0%, 100% { transform: scale(1.1) translate(10px, 20px); opacity: 0.5; }
                    50% { transform: scale(1) translate(0, 0); opacity: 0.2; }
                }

                .animate-breath {
                    animation: breath 15s ease-in-out infinite;
                }
                .animate-breath-delayed {
                    animation: breath-delayed 20s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}

export default function HeroVariant3({ lang }: { lang: "es" | "en" }) {
    return <HeroBase lang={lang} background={<AuroraBackground />} />;
}
