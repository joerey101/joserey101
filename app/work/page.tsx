
import MasonryCaseGrid from '@/components/MasonryCaseGrid';
import WorkHeroApple from '@/components/WorkHeroApple';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Selected Work | José Rey',
    description: 'Casos de estudio y proyectos destacados.',
};

export default function CaseStudiesIndex() {
    const lang = "es";
    return (
        <main className="min-h-screen bg-black">
            <Header lang={lang} />
            {/* Intro Apple Style Section */}
            <WorkHeroApple />

            {/* Content Section (Revealed after blur) */}
            <div className="relative z-40 bg-black -mt-[50vh] pb-32">
                <div className="px-4 container mx-auto mb-16">
                    <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-white">
                        Proyectos Destacados
                    </h2>
                    <p className="mt-4 text-xl text-white/40 max-w-2xl font-light">
                        Una colección curada de transformaciones digitales, ingeniería de marca y sistemas de alto rendimiento.
                    </p>
                </div>

                <MasonryCaseGrid />
            </div>

            <Footer lang={lang} />
        </main>
    );
}
