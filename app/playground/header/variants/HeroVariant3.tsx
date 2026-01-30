"use client";

import HeroBase from '../HeroBase';

function GridBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-white">
            {/* The Perspective Grid */}
            <div className="absolute inset-0 perspective-grid"></div>

            {/* Subtle scanning light effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-carbon/[0.02] to-transparent h-[200%] animate-scan"></div>

            <style jsx>{`
                .perspective-grid {
                    background-image: 
                        linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
                    background-size: 50px 50px;
                    transform: perspective(1000px) rotateX(60deg) translateY(-100px);
                    transform-origin: top;
                    height: 200%;
                    width: 200%;
                    left: -50%;
                    animation: grid-move 40s linear infinite;
                }

                @keyframes grid-move {
                    0% { transform: perspective(1000px) rotateX(60deg) translateY(-100px); }
                    100% { transform: perspective(1000px) rotateX(60deg) translateY(0); }
                }

                @keyframes scan {
                    0% { transform: translateY(-50%); }
                    100% { transform: translateY(0); }
                }

                .animate-scan {
                    animation: scan 10s linear infinite;
                }
            `}</style>
        </div>
    );
}

export default function HeroVariant3({ lang }: { lang: "es" | "en" }) {
    return (
        <HeroBase
            lang={lang}
            background={<GridBackground />}
        />
    );
}
