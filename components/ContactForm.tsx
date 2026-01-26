"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, PaperPlaneRight, Spinner } from "@phosphor-icons/react";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
    lang: "es" | "en";
}

export default function ContactForm({ isOpen, onClose, lang }: ContactFormProps) {
    const [state, handleSubmit] = useForm("mbdooeon");

    // Note: Since I can't pass the ID dynamically to the hook easily without re-init, I'll use the hook as is.
    // I will assume the user needs to fill this in. I'll add a comment.

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

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-carbon/90 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-y-0 right-0 z-[101] w-full md:w-[500px] bg-background-light shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-8 flex justify-between items-center border-b border-grid-line">
                            <h2 className="font-display font-black text-3xl uppercase text-carbon">
                                {lang === 'es' ? 'Hablemos' : "Let's Talk"}
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 bg-white rounded-full hover:rotate-90 transition-transform duration-300 shadow-sm border border-carbon/10"
                            >
                                <X size={24} className="text-carbon" />
                            </button>
                        </div>

                        {/* Form Body */}
                        <div className="flex-1 p-8 overflow-y-auto">
                            {state.succeeded ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                                    <div className="w-20 h-20 bg-acid-green rounded-full flex items-center justify-center animate-bounce">
                                        <PaperPlaneRight size={40} className="text-carbon" weight="fill" />
                                    </div>
                                    <h3 className="font-display font-bold text-2xl uppercase">
                                        {lang === 'es' ? 'Mensaje Enviado' : 'Message Sent'}
                                    </h3>
                                    <p className="font-sans text-carbon/70">
                                        {lang === 'es'
                                            ? 'Gracias por contactarnos. Te responderemos a la brevedad.'
                                            : 'Thanks for reaching out. We will get back to you shortly.'}
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="px-8 py-3 bg-carbon text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-carbon/80 transition-colors"
                                    >
                                        {lang === 'es' ? 'Cerrar' : 'Close'}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div>
                                        <label htmlFor="name" className="block font-meta text-xs font-bold uppercase tracking-widest text-carbon/50 mb-2">
                                            {lang === 'es' ? 'Nombre' : 'Name'}
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full bg-transparent border-b border-carbon/20 py-4 text-xl font-medium text-carbon focus:border-carbon focus:outline-none transition-colors"
                                            placeholder={lang === 'es' ? 'Tu nombre...' : 'Your name...'}
                                        />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block font-meta text-xs font-bold uppercase tracking-widest text-carbon/50 mb-2">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full bg-transparent border-b border-carbon/20 py-4 text-xl font-medium text-carbon focus:border-carbon focus:outline-none transition-colors"
                                            placeholder="name@example.com"
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block font-meta text-xs font-bold uppercase tracking-widest text-carbon/50 mb-2">
                                            {lang === 'es' ? 'Mensaje' : 'Message'}
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full bg-transparent border-b border-carbon/20 py-4 text-xl font-medium text-carbon focus:border-carbon focus:outline-none transition-colors resize-none"
                                            placeholder={lang === 'es' ? 'Cuéntanos sobre tu proyecto...' : 'Tell us about your project...'}
                                        />
                                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={state.submitting}
                                            className="w-full py-5 bg-carbon text-white font-display font-bold text-xl uppercase tracking-widest hover:bg-electric-blue hover:text-carbon transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                        >
                                            {state.submitting ? (
                                                <>
                                                    <Spinner className="animate-spin" size={24} />
                                                    {lang === 'es' ? 'Enviando...' : 'Sending...'}
                                                </>
                                            ) : (
                                                <>
                                                    {lang === 'es' ? 'Enviar Mensaje' : 'Send Message'}
                                                    <PaperPlaneRight size={24} weight="fill" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
