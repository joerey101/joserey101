import AppleHealthSection from "@/components/AppleHealthSection";

export const metadata = {
    title: "Apple Watch Style - Health Section",
    description: "Replicating the Apple Watch Series 11 scroll transition.",
};

export default function AppleModePage() {
    return (
        <main className="bg-black min-h-screen">
            {/* Intro simple para dar contexto del scroll */}
            <div className="h-[50vh] flex flex-col justify-center items-center text-center">
                <h1 className="text-white/40 text-sm uppercase tracking-[0.2em] mb-4">Design Analysis</h1>
                <p className="text-white text-2xl font-light">Scroll down to see the "Esfumado" effect</p>
            </div>

            {/* El componente de Apple */}
            <AppleHealthSection />

            {/* Footer para terminar el scroll */}
            <div className="h-[50vh] flex items-center justify-center bg-zinc-900">
                <p className="text-white/20">End of demo</p>
            </div>
        </main>
    );
}
