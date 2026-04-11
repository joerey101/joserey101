"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { content } from '@/app/content';

interface HeaderTestProps {
    lang: "es" | "en";
}

export default function HeaderTest({ lang }: HeaderTestProps) {
    const t = content[lang].header;
    const isEs = lang === "es";
    const [currentTime, setCurrentTime] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'America/Argentina/Buenos_Aires'
            }) + " ART");
        };
        updateClock();
        const interval = setInterval(updateClock, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const menuItems = [
        { label: t.work,         href: "#work"       },
        { label: t.capabilities, href: "#blueprints"  },
        { label: t.studio,       href: "#lab"         },
    ];

    return (
        <header className={`fixed top-0 w-full z-[999] transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-white/80" : "bg-transparent"}`}>
            <div className="max-w-[1800px] mx-auto flex items-center justify-between px-6 lg:px-12 h-[72px]">

                {/* LEFT — Logo + status */}
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="size-9 bg-carbon flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-[225deg] transition-transform duration-700 ease-in-out">
                            <span className="material-symbols-outlined text-electric-blue text-xl -rotate-45 group-hover:rotate-[135deg] transition-transform duration-700">bolt</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-black text-lg tracking-tighter uppercase italic leading-none text-carbon">
                                BESTARLIGHT
                            </span>
                            <span className="font-meta text-[8px] uppercase tracking-[0.3em] text-carbon/40 font-bold">
                                Digital Architect
                            </span>
                        </div>
                    </Link>

                    {/* Status strip */}
                    <div className="hidden xl:flex items-center gap-5 pl-6 border-l border-carbon/10 h-7">
                        <div className="flex flex-col">
                            <span className="font-meta text-[8px] uppercase tracking-widest text-carbon/40 font-bold">Location</span>
                            <span className="font-meta text-[10px] font-black text-carbon">{currentTime}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-meta text-[8px] uppercase tracking-widest text-carbon/40 font-bold">Status</span>
                            <div className="flex items-center gap-1.5">
                                <span className="size-1.5 bg-acid-green rounded-full animate-pulse" />
                                <span className="font-meta text-[10px] font-black uppercase text-carbon">Available</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CENTER — Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    {menuItems.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className="font-meta text-[11px] font-black uppercase tracking-[0.2em] text-carbon/50 hover:text-carbon transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* RIGHT — Lang + CTA pill */}
                <div className="flex items-center gap-4">
                    {/* Language switcher */}
                    <div className="hidden sm:flex items-center bg-carbon/5 p-1 rounded-full">
                        <Link
                            href={isEs ? "#" : "/services-test"}
                            className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${isEs ? 'bg-white text-carbon shadow-sm' : 'text-carbon/40 hover:text-carbon'}`}
                        >
                            ES
                        </Link>
                        <Link
                            href={!isEs ? "#" : "/en/services-test"}
                            className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${!isEs ? 'bg-white text-carbon shadow-sm' : 'text-carbon/40 hover:text-carbon'}`}
                        >
                            EN
                        </Link>
                    </div>

                    {/* CTA — pill style (wdesigna reference) */}
                    <Link
                        href="/"
                        className="hidden md:flex items-center gap-2 bg-carbon text-white px-6 py-2.5 rounded-full font-meta text-[11px] font-black uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all"
                    >
                        {t.hire}
                    </Link>
                </div>
            </div>
        </header>
    );
}
