"use client";

import { useSearchParams } from 'next/navigation';
import Header from "@/components/Header";
import Header_OLD from "@/components/Header_OLD";
import HeroVariant2 from "../variants/HeroVariant2";
import HeroVariant3 from "../variants/HeroVariant3";
import HeroVariant5 from "../variants/HeroVariant5";
import { Suspense } from 'react';

function FrameContent() {
    const searchParams = useSearchParams();
    const headerVersion = searchParams?.get('v') || 'v1';
    const heroVariant = searchParams?.get('hero') || '2';
    const lang = "es";

    const isDark = heroVariant === '3' || heroVariant === '5';

    return (
        <div className={`relative min-h-[1400px] transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
            {/* Header Injection */}
            {headerVersion === 'v1' ? (
                <div style={{ position: 'absolute', width: '100%', zIndex: 50 }}>
                    <Header_OLD lang={lang} />
                </div>
            ) : (
                <div style={{ position: 'absolute', width: '100%', zIndex: 50 }}>
                    <Header lang={lang} />
                </div>
            )}

            {/* Hero Injection */}
            <div className={`pt-0 transition-all duration-500`}>
                {heroVariant === '3' ? (
                    <HeroVariant3 lang={lang} />
                ) : heroVariant === '5' ? (
                    <HeroVariant5 />
                ) : (
                    <div className="pt-24 px-3 md:px-12">
                        <HeroVariant2 lang={lang} />
                    </div>
                )}

                {/* Dummy Content for Scroll */}
                <div className="px-3 md:px-12 mt-12 grid grid-cols-2 gap-4 pb-20 opacity-20 pointer-events-none">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className={`aspect-video rounded-xl ${isDark ? 'bg-cyan-500/10 border border-cyan-500/20' : 'bg-carbon/10'}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function FramePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FrameContent />
        </Suspense>
    );
}
