import Link from "next/link";

export default function NewDesignsPage() {
  return (
    <div className="min-h-screen bg-[#0a0808] text-[#f0ebe0] flex flex-col items-center justify-center font-sans p-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-center">
        New Designs Showcase
      </h1>
      <p className="text-[#7a7060] mb-12 text-center max-w-md">
        Selecciona uno de los nuevos modelos para visualizar la propuesta de diseño y experiencia.
      </p>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center">
        <Link
          href="/new-designs/vortex"
          className="group relative overflow-hidden bg-[#141010] border border-[#d8d4ca]/10 p-8 rounded-2xl flex-1 transition-all hover:border-[#d4380d] hover:shadow-[0_0_40px_rgba(212,56,13,0.1)] flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 bg-[#f7f4ee] rounded-full mb-6 flex items-center justify-center text-[#d4380d] font-serif italic text-2xl font-bold group-hover:scale-110 transition-transform">
            V
          </div>
          <h2 className="text-2xl font-serif font-bold mb-2">Vortex</h2>
          <p className="text-sm text-[#7a7060]">
            Estilo claro, elegante y dinámico. Colores cálidos y tipografía serif tradicional combinada con un layout moderno.
          </p>
        </Link>

        <Link
          href="/new-designs/aura"
          className="group relative overflow-hidden bg-[#13111a] border border-[#b8965c]/10 p-8 rounded-2xl flex-1 transition-all hover:border-[#b8965c] hover:shadow-[0_0_40px_rgba(184,150,92,0.1)] flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 bg-[#0e0c10] border border-[#b8965c]/30 rounded-full mb-6 flex items-center justify-center text-[#b8965c] font-serif italic text-2xl font-bold group-hover:scale-110 transition-transform">
            A
          </div>
          <h2 className="text-2xl font-serif font-bold mb-2">Aura</h2>
          <p className="text-sm text-[#6a6060]">
            Estilo oscuro, inmersivo y tecnológico. Colores profundos, destellos dorados y una experiencia fluida con interacciones de cursor.
          </p>
        </Link>
      </div>

      <Link
        href="/"
        className="mt-16 text-sm text-[#7a7060] hover:text-[#f0ebe0] uppercase tracking-widest border border-transparent hover:border-[#7a7060]/30 py-2 px-4 rounded-full transition-all"
      >
        ← Volver al Home
      </Link>
    </div>
  );
}
