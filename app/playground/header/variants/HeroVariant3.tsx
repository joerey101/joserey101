"use client";

import HeroBase from '../HeroBase';

function AuroraBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-white overflow-hidden pointer-events-none">
            {/* The Breath - Large, soft, shifting radial gradients */}
            <div className="absolute inset-0 aura animate-pulse-slow"></div>
            <div className="absolute inset-0 aura-secondary animate-drift-slow"></div>

            {/* Noise grain for texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>

            <style jsx>{`
                .aura {
                    background: radial-gradient(circle at 30% 30%, rgba(0, 0, 0, 0.04) 0%, transparent 60%);
                }
                .aura-secondary {
                    background: radial-gradient(circle at 80% 70%, rgba(0, 0, 0, 0.03) 0%, transparent 50%);
                }

                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.2); opacity: 0.8; }
                }

                @keyframes drift-slow {
                    0% { transform: translate(0, 0); }
                    33% { transform: translate(10%, 10%); }
                    66% { transform: translate(-5%, 5%); }
                    100% { transform: translate(0, 0); }
                }

                .animate-pulse-slow {
                    animation: pulse-slow 20s ease-in-out infinite;
                }
                .animate-drift-slow {
                    animation: drift-slow 35s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}

export default function HeroVariant3({ lang }: { lang: "es" | "en" }) {
    return <HeroBase lang={lang} background={<AuroraBackground />} />;
}
