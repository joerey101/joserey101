"use client";

import HeroBase from '../HeroBase';

function DeepGridBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-white overflow-hidden pointer-events-none">
            {/* Layer 1: Base Grid */}
            <div className="absolute inset-x-[-10%] inset-y-[-10%] w-[120%] h-[120%] grid-bg opacity-10 animate-subtle-drift"></div>

            {/* Layer 2: Perspective Wireframe */}
            <div className="absolute inset-0 perspective-container">
                <div className="wireframe-plane top-plane"></div>
                <div className="wireframe-plane bottom-plane"></div>
            </div>

            {/* Layer 3: Scanning Data Lines */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="h-[2px] w-full bg-carbon absolute top-1/4 animate-scan-y"></div>
                <div className="h-[2px] w-full bg-carbon absolute top-3/4 animate-scan-y-delayed"></div>
            </div>

            <style jsx>{`
                .perspective-container {
                    perspective: 1200px;
                    width: 100%;
                    height: 100%;
                }
                .wireframe-plane {
                    position: absolute;
                    width: 200%;
                    height: 100%;
                    left: -50%;
                    background-image: 
                        linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
                    background-size: 80px 80px;
                }
                .top-plane {
                    top: -10%;
                    transform: rotateX(-80deg);
                    transform-origin: top;
                    opacity: 0.15;
                    animation: grid-flow 60s linear infinite;
                }
                .bottom-plane {
                    bottom: -10%;
                    transform: rotateX(80deg);
                    transform-origin: bottom;
                    opacity: 0.15;
                    animation: grid-flow-reverse 60s linear infinite;
                }

                @keyframes grid-flow {
                    from { transform: rotateX(-80deg) translateY(0); }
                    to { transform: rotateX(-80deg) translateY(80px); }
                }
                @keyframes grid-flow-reverse {
                    from { transform: rotateX(80deg) translateY(0); }
                    to { transform: rotateX(80deg) translateY(-80px); }
                }
                @keyframes subtle-drift {
                    0%, 100% { transform: translate(0,0); }
                    50% { transform: translate(20px, 10px); }
                }
                @keyframes scan-y {
                    0% { transform: translateY(-100vh); }
                    100% { transform: translateY(100vh); }
                }
                .animate-subtle-drift { animation: subtle-drift 30s ease-in-out infinite; }
                .animate-scan-y { animation: scan-y 15s linear infinite; }
                .animate-scan-y-delayed { animation: scan-y 15s linear infinite 7.5s; }
            `}</style>
        </div>
    );
}

export default function HeroVariant2({ lang }: { lang: "es" | "en" }) {
    return <HeroBase lang={lang} background={<DeepGridBackground />} />;
}
