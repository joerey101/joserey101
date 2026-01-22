import Link from 'next/link';
import { content } from '@/app/content';

interface HeaderProps {
    lang: "es" | "en";
}

export default function Header({ lang }: HeaderProps) {
    const t = content[lang].header;
    const isEs = lang === "es";

    return (
        <header className="fixed top-0 w-full z-50 bg-background-light/90 backdrop-blur-md border-b border-grid-line transition-all duration-300">
            <div className="flex items-center justify-between px-6 py-4 lg:px-12">
                <div className="flex items-center gap-3">
                    <div className="size-8 bg-carbon flex items-center justify-center rounded-none rotate-45">
                        <span className="material-symbols-outlined text-primary text-xl -rotate-45">bolt</span>
                    </div>
                    <h1 className="font-display font-bold text-xl tracking-tighter uppercase italic">joserey101</h1>
                </div>
                <nav className="hidden md:flex items-center gap-12 font-meta text-[11px] font-bold uppercase tracking-widest text-carbon/80">
                    <Link className="hover:text-electric-blue transition-colors hover:underline underline-offset-8 decoration-2" href="#work">{t.work}</Link>
                    <Link className="hover:text-electric-blue transition-colors hover:underline underline-offset-8 decoration-2" href="#blueprints">{t.capabilities}</Link>
                    <Link className="hover:text-electric-blue transition-colors hover:underline underline-offset-8 decoration-2" href="#lab">{t.studio}</Link>
                    <div className="flex items-center gap-2 border-l border-carbon/20 pl-8 ml-4">
                        {isEs ? (
                            <>
                                <span className="text-carbon cursor-default">ES</span>
                                <span className="text-carbon/30">/</span>
                                <Link href="/en" className="text-carbon/40 hover:text-carbon transition-colors">EN</Link>
                            </>
                        ) : (
                            <>
                                <Link href="/" className="text-carbon/40 hover:text-carbon transition-colors">ES</Link>
                                <span className="text-carbon/30">/</span>
                                <span className="text-carbon cursor-default">EN</span>
                            </>
                        )}

                    </div>
                </nav>
                <a href="mailto:hello@joserey101.com" className="bg-carbon text-white px-6 py-2 rounded-full font-meta text-xs font-bold uppercase tracking-wider hover:bg-neon-pink hover:scale-105 transition-all shadow-lg">
                    {t.hire}
                </a>
            </div>
        </header>
    );
}
