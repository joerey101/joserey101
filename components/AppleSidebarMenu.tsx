"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, List, ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

interface AppleSidebarMenuProps {
    lang: "es" | "en";
    items: { label: string; href: string }[];
}

/**
 * Módulo de Menú Lateral "Apple Style"
 * Implementa el efecto de esfumado (blur dinámico) y transiciones de muelle (spring).
 */
export default function AppleSidebarMenu({ lang, items }: AppleSidebarMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Bloqueo de scroll cuando el menú está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Botón Trigger (Normalmente ubicado en el Header) */}
            <button
                onClick={toggleMenu}
                className="flex items-center justify-center p-3 bg-carbon/5 hover:bg-carbon/10 rounded-full transition-all group"
                aria-label="Abrir Menú"
            >
                <List size={24} weight="bold" className="text-carbon group-hover:scale-110 transition-transform" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[99999] pointer-events-none">
                        {/* 1. BACKDROP (El Esfumado Progresivo) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="absolute inset-0 bg-black/40 backdrop-blur-md pointer-events-auto"
                        />

                        {/* 2. PANEL LATERAL (The Apple Drawer) */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="absolute top-0 right-0 h-full w-[85vw] md:w-[400px] bg-white shadow-2xl pointer-events-auto flex flex-col"
                        >
                            {/* Header del Menú */}
                            <div className="p-8 flex justify-between items-center border-b border-carbon/5">
                                <span className="font-meta text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                                    {lang === "es" ? "Navegación" : "Navigation"}
                                </span>
                                <button
                                    onClick={toggleMenu}
                                    className="size-10 flex items-center justify-center bg-carbon text-white rounded-full hover:rotate-90 transition-all duration-300"
                                >
                                    <X size={20} weight="bold" />
                                </button>
                            </div>

                            {/* Links de Navegación con Efecto de Cascada */}
                            <nav className="flex-1 px-8 py-12 flex flex-col gap-6">
                                {items.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={toggleMenu}
                                            className="group flex items-center justify-between py-4 border-b border-carbon/5"
                                        >
                                            <span className="font-display font-black text-4xl uppercase tracking-tighter text-carbon group-hover:text-electric-blue transition-colors">
                                                {item.label}
                                            </span>
                                            <ArrowRight
                                                size={24}
                                                className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-electric-blue"
                                            />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Footer del Menú (Social / Contact) */}
                            <div className="p-8 bg-carbon text-white">
                                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-4">
                                    {lang === "es" ? "Hablemos" : "Let's Talk"}
                                </p>
                                <a
                                    href="mailto:hello@joserey101.com"
                                    className="text-lg font-display font-bold hover:text-neon-pink transition-colors"
                                >
                                    hello@joserey101.com
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
