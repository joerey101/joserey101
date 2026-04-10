"use client";

import { useState } from 'react';
import Link from 'next/link';
import { content } from '@/app/content';
import AppleSidebarMenu from '../AppleSidebarMenu';
import ContactForm from '../ContactForm';

interface HeaderProps {
    lang: "es" | "en";
}

export default function Header({ lang }: HeaderProps) {
    const t = content[lang].header;
    const isEs = lang === "es";
    const [isFormOpen, setIsFormOpen] = useState(false);

    const menuItems = [
        { label: t.work || "Trabajo", href: "#work" },
        { label: t.capabilities || "Capacidades", href: "#blueprints" },
        { label: t.studio || "Estudio", href: "#lab" },
        { label: lang === 'es' ? "Clientes" : "Clients", href: "#work" },
    ];

    return (
        <>
            <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
                <div className="flex justify-between items-center px-8 py-6 max-w-[1440px] mx-auto w-full">
                    <Link href="/" className="text-2xl font-black tracking-tighter text-on-surface">BS</Link>
                    
                    <div className="hidden md:flex gap-12">
                        {menuItems.map((item, idx) => (
                            <Link 
                                key={idx} 
                                href={item.href} 
                                className={`font-headline font-bold tracking-tight uppercase text-sm transition-opacity duration-200 ${idx === 0 ? 'text-secondary border-b-2 border-secondary pb-1 hover:opacity-100' : 'text-on-surface opacity-70 hover:opacity-100'}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="font-headline font-bold tracking-tight uppercase text-sm text-on-surface opacity-70 hidden sm:flex gap-1">
                            <Link href={isEs ? "#" : "/"} className={isEs ? "text-on-surface" : "opacity-50 hover:opacity-100"}>ES</Link>
                            <span>/</span>
                            <Link href={!isEs ? "#" : "/en"} className={!isEs ? "text-on-surface" : "opacity-50 hover:opacity-100"}>EN</Link>
                        </div>
                        <button 
                            onClick={() => setIsFormOpen(true)}
                            className="hidden sm:block bg-secondary text-white px-6 py-2 font-headline font-bold tracking-tight uppercase text-sm transition-transform active:scale-95 duration-150"
                        >
                            {t.hire || "Hablemos"}
                        </button>
                        
                        <div className="md:hidden flex items-center">
                            <AppleSidebarMenu lang={lang} items={menuItems} />
                        </div>
                    </div>
                </div>
            </nav>

            <ContactForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                lang={lang}
            />
        </>
    );
}
