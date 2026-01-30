"use client";

import HeroBase from '../HeroBase';

function DeepGridBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-white overflow-hidden pointer-events-none">
            {/* Background Texture */}
            <div className="absolute inset-0 grid-bg opacity-10"></div>

            {/* Perspective Layers */}
            <div className="absolute inset-0 perspective-container">
                {/* Far Grid */}
                <div className="wireframe-plane far-plane"></div>
                {/* Main Mid Grid */}
                <div className="wireframe-plane mid-plane"></div>
                {/* Close Bottom Grid */}
                <div className="wireframe-plane low-plane"></div>
            </div>

            {/* Fog of Depth - White gradient masking the edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none z-10"></div>

            {/* Active Data scanning pulses */}
            <div className="absolute inset-0 z-20 overflow-hidden">
                <div className="h-[1px] w-full bg-carbon/5 absolute top-0 animate-pulse-down"></div>
                <div className="h-[1px] w-full bg-carbon/5 absolute bottom-0 animate-pulse-up"></div>
            </div>

            <style jsx>{`
                .perspective-container {
                    perspective: 1500px;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .wireframe-plane {
                    position: absolute;
                    width: 300%;
                    height: 200%;
                    left: -100%;
                    background-image: 
                        linear-gradient(to right, rgba(0,0,0,0.1) 1.5px, transparent 1.5px),
                        linear-gradient(to bottom, rgba(0,0,0,0.1) 1.5px, transparent 1.5px);
                    background-size: 100px 100px;
                }
                .far-plane {
                    top: -60%;
                    transform: rotateX(85deg) translateZ(-400px);
                    opacity: 0.2;
                    animation: drift-forward 80s linear infinite;
                }
                .mid-plane {
                    bottom: -30%;
                    transform: rotateX(75deg) translateZ(0);
                    opacity: 0.15;
                    animation: drift-forward 40s linear infinite;
                }
                .low-plane {
                    bottom: -80%;
                    transform: rotateX(60deg) translateZ(400px);
                    opacity: 0.05;
                    animation: drift-forward 20s linear infinite;
                }

                @keyframes drift-forward {
                    from { transform: rotateX(inherit) translateY(0); }
                    to { transform: rotateX(inherit) translateY(100px); }
                }
                @keyframes pulse-down {
                    0% { top: -10%; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 110%; opacity: 0; }
                }
                @keyframes pulse-up {
                    0% { bottom: -10%; opacity: 0; }
                    50% { opacity: 1; }
                    100% { bottom: 110%; opacity: 0; }
                }
                .animate-pulse-down { animation: pulse-down 12s linear infinite; }
                .animate-pulse-up { animation: pulse-up 15s linear infinite 4s; }
            `}</style>
        </div>
    );
}

export default function HeroVariant2({ lang }: { lang: "es" | "en" }) {
    return <HeroBase lang={lang} background={<DeepGridBackground />} />;
}
