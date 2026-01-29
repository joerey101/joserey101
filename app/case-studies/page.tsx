
import MasonryCaseGrid from '@/components/MasonryCaseGrid';

export const metadata = {
    title: 'Selected Work | José Rey',
    description: 'Casos de estudio y proyectos destacados.',
};

export default function CaseStudiesIndex() {
    return (
        <main className="min-h-screen bg-background">
            <div className="pt-32 pb-12 px-4 container mx-auto text-center md:text-left">
                <h1 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter">
                    Selected Work
                </h1>
                <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
                    Una colección de transformaciones digitales, branding y plataformas de alto rendimiento.
                </p>
            </div>

            <MasonryCaseGrid />
        </main>
    );
}
