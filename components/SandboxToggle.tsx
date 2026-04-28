'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SandboxToggle() {
  const pathname = usePathname();

  // No mostrar en la propia página de sandbox
  if (pathname === '/sandbox') return null;

  return (
    <Link 
      href="/sandbox"
      className="fixed bottom-6 right-6 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a1a] text-white shadow-2xl transition-all hover:scale-110 hover:bg-[#ff3b00] group"
      title="Mobile Sandbox Mode"
    >
      <span className="material-symbols-outlined text-2xl group-hover:animate-pulse">
        devices
      </span>
      
      {/* Tooltip opcional */}
      <span className="absolute right-14 scale-0 rounded bg-gray-900 px-3 py-1 text-xs font-medium text-white transition-all group-hover:scale-100">
        Mobile Preview
      </span>
    </Link>
  );
}
