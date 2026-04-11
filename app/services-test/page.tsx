import Link from 'next/link';
import BlueprintsGrid from "@/components/v2/BlueprintsGrid";

const lang = "es" as const;

export default function ServicesTest() {
    return (
        <main className="bg-white min-h-screen">

            {/* ── HEADER (hero + nav flotante, estilo wdesigna) ── */}
            <div className="relative w-full min-h-[85vh] bg-carbon flex flex-col overflow-hidden">

                {/* Video de fondo */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/assets/img/HOME-VIDEO-STARLIGHT.mp4"
                />
                {/* Overlay oscuro sobre el video */}
                <div className="absolute inset-0 bg-carbon/60 pointer-events-none" />

                {/* Nav flotante */}
                <nav className="relative z-10 flex items-center justify-between px-8 lg:px-16 py-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="size-9 bg-white/10 border border-white/20 flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-[225deg] transition-transform duration-700">
                            <span className="material-symbols-outlined text-electric-blue text-xl -rotate-45 group-hover:rotate-[135deg] transition-transform duration-700">bolt</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-black text-lg tracking-tighter uppercase italic leading-none text-white">
                                BESTARLIGHT
                            </span>
                            <span className="font-meta text-[8px] uppercase tracking-[0.3em] text-white/40 font-bold">
                                Digital Architect
                            </span>
                        </div>
                    </Link>

                    {/* Links */}
                    <div className="hidden md:flex items-center gap-10">
                        {["Trabajo", "Capacidades", "Estudio"].map((item) => (
                            <Link key={item} href="#" className="font-meta text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* CTA pill */}
                    <Link
                        href="/"
                        className="bg-white text-carbon px-7 py-3 rounded-full font-meta text-[11px] font-black uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all"
                    >
                        Hablemos
                    </Link>
                </nav>

                {/* Hero content */}
                <div className="relative z-10 flex flex-col justify-center flex-1 px-8 lg:px-16 pb-20 pt-8 w-full">
                    <span className="font-meta text-[10px] font-bold uppercase tracking-[0.4em] text-electric-blue mb-6">
                        Redefiniendo la Autoridad Digital
                    </span>
                    <h1 className="font-display font-black tracking-tighter uppercase italic text-white leading-[0.95] mb-6">
                        <span className="block text-[5vw] whitespace-nowrap">Creamos <span className="text-electric-blue">Estrategia,</span></span>
                        <span className="block text-[5vw] whitespace-nowrap">Sistemas y <span className="text-neon-pink">Pensamiento</span> Digital.</span>
                    </h1>
                    <p className="font-meta text-base text-white/60 whitespace-nowrap mb-10">
                        Unificamos Marketing Estratégico, Ingeniería, Operaciones y Cultura bajo una misma arquitectura.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="bg-white text-carbon px-8 py-4 rounded-full font-meta text-[11px] font-black uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all"
                        >
                            Descúbranos
                        </Link>
                        <Link
                            href="/"
                            className="border border-white/30 text-white px-8 py-4 rounded-full font-meta text-[11px] font-black uppercase tracking-widest hover:border-white transition-all"
                        >
                            Ver trabajo
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── SERVICIOS ── */}
            <BlueprintsGrid lang={lang} />

        </main>
    );
}
