"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { content } from '@/app/content';
import AppleSidebarMenu from './AppleSidebarMenu';

interface HeaderProps {
    lang: "es" | "en";
}

export default function Header({ lang }: HeaderProps) {
    const t = content[lang].header;
    const isEs = lang === "es";
    const [currentTime, setCurrentTime] = useState("");

    // Hook para el scroll dinámico
    const { scrollY } = useScroll();

    // Transformaciones basadas en el scroll
    const headerHeight = useTransform(scrollY, [0, 100], ["100px", "72px"]);
    const headerBg = useTransform(scrollY, [0, 100], ["rgba(249, 250, 250, 0)", "rgba(249, 250, 250, 0.9)"]);
    const headerBorder = useTransform(scrollY, [0, 100], ["rgba(229, 229, 229, 0)", "rgba(229, 229, 229, 1)"]);
    const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'America/Argentina/Buenos_Aires'
            });
            setCurrentTime(`${timeStr} ART`);
        };
        updateClock();
        const interval = setInterval(updateClock, 1000 * 60);
        return () => clearInterval(interval);
    }, []);

    const menuItems = [
        { label: t.work, href: "#work" },
        { label: t.capabilities, href: "#blueprints" },
        { label: t.studio, href: "#lab" },
    ];

    return (
        <motion.header
            style={{
                height: headerHeight,
                backgroundColor: headerBg,
                borderBottomColor: headerBorder
            }}
            className="fixed top-0 w-full z-50 border-b transition-colors duration-500 backdrop-blur-subtle"
        >
            <div className="h-full max-w-[1800px] mx-auto flex items-center justify-between px-3 md:px-6 lg:px-12">

                {/* LEFT: LOGO AREA - More presence */}
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-3 group">
                        <motion.div
                            style={{ scale: logoScale }}
                            className="size-10 bg-carbon flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-[225deg] transition-transform duration-700 ease-in-out"
                        >
                            <span className="material-symbols-outlined text-electric-blue text-2xl -rotate-45 group-hover:rotate-[135deg] transition-transform duration-700">bolt</span>
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="font-display font-black text-xl tracking-tighter uppercase italic leading-none">
                                JOSEREY101
                            </span>
                            <span className="font-meta text-[8px] uppercase tracking-[0.3em] text-carbon/40 font-bold">
                                Digital Architect
                            </span>
                        </div>
                    </Link>

                    {/* DESKTOP STATUS (Fills the 'empty' space) */}
                    <div className="hidden xl:flex items-center gap-4 pl-8 border-l border-carbon/10 h-8">
                        <div className="flex flex-col">
                            <span className="font-meta text-[9px] uppercase tracking-widest text-carbon/40 font-bold">Location</span>
                            <span className="font-meta text-[10px] font-black">{currentTime}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-meta text-[9px] uppercase tracking-widest text-carbon/40 font-bold">Status</span>
                            <div className="flex items-center gap-1.5">
                                <span className="size-1.5 bg-acid-green rounded-full animate-pulse" />
                                <span className="font-meta text-[10px] font-black uppercase">Available</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CENTER: NAVIGATION (Rich Typography) */}
                <nav className="hidden lg:flex items-center gap-10">
                    {menuItems.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className="relative group py-2"
                        >
                            <span className="font-meta text-[12px] font-black uppercase tracking-[0.2em] text-carbon/60 group-hover:text-carbon transition-colors">
                                {item.label}
                            </span>
                            <motion.span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-blue group-hover:w-full transition-all duration-300"
                            />
                        </Link>
                    ))}
                </nav>

                {/* RIGHT: ACTIONS */}
                <div className="flex items-center gap-4 lg:gap-8">
                    {/* Language Switcher - More integrated */}
                    <div className="hidden sm:flex items-center bg-carbon/5 p-1 rounded-full">
                        <Link
                            href={isEs ? "#" : "/"}
                            className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${isEs ? 'bg-white text-carbon shadow-sm' : 'text-carbon/40 hover:text-carbon'}`}
                        >
                            ES
                        </Link>
                        <Link
                            href={!isEs ? "#" : "/en"}
                            className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${!isEs ? 'bg-white text-carbon shadow-sm' : 'text-carbon/40 hover:text-carbon'}`}
                        >
                            EN
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="mailto:hello@joserey101.com"
                            className="hidden md:flex items-center gap-2 bg-carbon text-white px-6 py-3 rounded-none font-meta text-[11px] font-black uppercase tracking-widest hover:bg-electric-blue hover:text-carbon transition-all shadow-[4px_4px_0px_rgba(0,240,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                        >
                            {t.hire}
                        </a>

                        {/* Custom Menu Trigger for Mobile Presence */}
                        <div className="lg:hidden">
                            <AppleSidebarMenu lang={lang} items={menuItems} />
                        </div>

                        {/* Menu Label for Desktop/Tablet */}
                        <div className="hidden lg:block relative">
                            <AppleSidebarMenu lang={lang} items={menuItems} />
                            {/* Puedes agregar un label "MENU" flotante si quieres mas peso visual */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Progress Line (Subtle) */}
            <motion.div
                className="absolute bottom-0 left-0 h-[1px] bg-electric-blue/30"
                style={{ scaleX: useTransform(scrollY, [0, 4000], [0, 1]) }}
            />
        </motion.header>
    );
}
