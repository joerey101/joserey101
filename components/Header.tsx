"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { content } from '@/app/content';
import AppleSidebarMenu from './AppleSidebarMenu';
import ContactForm from './ContactForm';

interface HeaderProps {
    lang: "es" | "en";
}

export default function Header({ lang }: HeaderProps) {
    const t = content[lang].header;
    const isEs = lang === "es";
    const [currentTime, setCurrentTime] = useState("");
    const [isFormOpen, setIsFormOpen] = useState(false);

    const [headerBgState, setHeaderBgState] = useState("rgba(249, 250, 250, 0.9)");
    const [scrolled, setScrolled] = useState(false);

    const headerHeight = "72px";
    const headerBorder = "rgba(229, 229, 229, 1)";
    const logoScale = 1;

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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
            const footer = document.getElementById('site-footer');
            if (footer) {
                const rect = footer.getBoundingClientRect();
                // If footer top is entering the viewport close to the header (e.g. within 72px + buffer)
                // Or actually, simply if the footer is visible at top.
                // rect.top < 72 means the footer is under the header.
                if (rect.top <= 80) { // 80px to be safe (72px header)
                    setHeaderBgState("rgba(255, 255, 255, 1)");
                } else {
                    setHeaderBgState("rgba(249, 250, 250, 0.9)");
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Check once on mount
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
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
                backgroundColor: headerBgState,
                borderBottomColor: headerBorder
            }}
            className="fixed top-0 w-full z-[999] border-b transition-colors duration-300 backdrop-blur-subtle"
        >
            <div className="h-full max-w-[1800px] mx-auto flex items-center justify-between px-3 md:px-6 lg:px-12">

                {/* LEFT: LOGO AREA - More presence */}
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center group h-16 md:h-20">
                        <img 
                            src="/Bestarlight-main-black.svg" 
                            alt="Bestarlight Logo" 
                            className="h-full w-auto transition-transform duration-500 group-hover:scale-105" 
                        />
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
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="hidden md:flex items-center gap-2 bg-carbon text-white px-6 py-3 rounded-none font-meta text-[11px] font-black uppercase tracking-widest hover:bg-electric-blue hover:text-carbon transition-all shadow-[4px_4px_0px_rgba(0,240,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                        >
                            {t.hire}
                        </button>

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

            <ContactForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                lang={lang}
            />

        </motion.header>
    );
}
