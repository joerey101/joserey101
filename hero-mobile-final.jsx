import React, { useState, useEffect } from 'react';

export default function HeroMobileFinal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [showNew, setShowNew] = useState(false);
  
  const transformations = [
    { old: 'BUROCRACIA', new: 'ESTRATEGIA', color: 'cyan' },
    { old: 'LO RÍGIDO', new: 'SISTEMAS', color: 'magenta' },
    { old: 'LO OBSOLETO', new: 'MENTE DIGITAL', color: 'cyan' }
  ];
  
  const current = transformations[currentIndex];
  
  useEffect(() => {
    if (!showNew && !isErasing) {
      // Typing old word
      if (displayText.length < current.old.length) {
        const timeout = setTimeout(() => {
          setDisplayText(current.old.slice(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        // Hold old word
        const timeout = setTimeout(() => {
          setIsErasing(true);
        }, 1200);
        return () => clearTimeout(timeout);
      }
    } else if (isErasing && !showNew) {
      // Erasing old word
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setShowNew(true);
        setIsErasing(false);
      }
    } else if (showNew) {
      // Typing new word
      if (displayText.length < current.new.length) {
        const timeout = setTimeout(() => {
          setDisplayText(current.new.slice(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        // Hold new word then cycle
        const timeout = setTimeout(() => {
          setDisplayText('');
          setShowNew(false);
          setCurrentIndex((currentIndex + 1) % transformations.length);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isErasing, showNew, currentIndex]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00D9FF08_1px,transparent_1px),linear-gradient(to_bottom,#00D9FF08_1px,transparent_1px)] bg-[size:2rem_2rem] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF008008_1px,transparent_1px),linear-gradient(to_bottom,#FF008008_1px,transparent_1px)] bg-[size:2rem_2rem] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-cyan-400' : 'bg-pink-500'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Gradient blobs */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>

      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Main content */}
      <div className="relative z-10 px-6 w-full max-w-md text-center">
        
        {/* Top badge */}
        <div className="mb-12 inline-block">
          <div className="relative">
            <div className="flex items-center gap-2 border border-gray-800 px-4 py-2 bg-black/50 backdrop-blur-sm">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              </div>
              <span className="text-gray-500 text-[10px] tracking-[0.3em] uppercase font-bold">
                JOSEREY101
              </span>
            </div>
          </div>
        </div>

        {/* Main headline */}
        <div className="mb-8">
          <h2 className="text-gray-400 text-sm tracking-[0.3em] uppercase mb-3 font-bold">
            Redefinimos
          </h2>
          
          {/* Transforming word */}
          <div className="min-h-[180px] flex items-center justify-center mb-6">
            <h1 className="text-5xl font-black tracking-tight leading-tight">
              <span className={`block transition-all duration-300 ${
                !showNew 
                  ? 'text-red-500 line-through opacity-70' 
                  : current.color === 'cyan'
                    ? 'text-cyan-400'
                    : 'text-pink-500'
              }`}>
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </div>

          {/* Static words */}
          <div className="space-y-3 mb-8">
            <div className={`text-2xl font-black tracking-tight transition-opacity duration-500 ${
              currentIndex === 0 && showNew ? 'text-cyan-400' : 'text-white'
            }`}>
              + ESTRATEGIA
            </div>
            <div className={`text-2xl font-black tracking-tight transition-opacity duration-500 ${
              currentIndex === 1 && showNew ? 'text-pink-500' : 'text-white'
            }`}>
              + SISTEMAS
            </div>
            <div className={`text-2xl font-black tracking-tight transition-opacity duration-500 ${
              currentIndex === 2 && showNew ? 'text-cyan-400' : 'text-white'
            }`}>
              + MENTE DIGITAL
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-12">
          <p className="text-gray-400 text-xs leading-relaxed">
            Trabajamos sobre los fundamentos esenciales:<br />
            <span className="text-white font-bold">Personas, Procesos y Datos.</span>
          </p>
          
          <p className="text-gray-500 text-[11px] leading-relaxed">
            Unificamos Marketing Estratégico, Ingeniería,<br />
            Operaciones y Cultura bajo una misma arquitectura.
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-6 mb-12 text-[10px] tracking-widest uppercase">
          <div className="text-center">
            <div className="text-cyan-400 text-xl font-black mb-1">50+</div>
            <div className="text-gray-600">Proyectos</div>
          </div>
          <div className="w-px h-12 bg-gray-800"></div>
          <div className="text-center">
            <div className="text-pink-500 text-xl font-black mb-1">100%</div>
            <div className="text-gray-600">Satisfacción</div>
          </div>
          <div className="w-px h-12 bg-gray-800"></div>
          <div className="text-center">
            <div className="text-cyan-400 text-xl font-black mb-1">5+</div>
            <div className="text-gray-600">Años</div>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-3 mb-16">
          <button className="w-full group relative bg-white text-black py-4 font-black uppercase text-sm tracking-widest overflow-hidden transition-all hover:scale-[1.02]">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Descúbranos
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <button className="w-full border border-gray-800 text-gray-400 py-4 font-black uppercase text-sm tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition-all">
            Ver Trabajo
          </button>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap justify-center gap-2">
          {['AI', 'NEXT.JS', 'CLOUD', 'B2B'].map((tech) => (
            <div 
              key={tech}
              className="border border-gray-800 px-3 py-1 text-[9px] text-gray-600 tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition-all"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="text-gray-700 text-[9px] tracking-[0.3em] uppercase">
          Scroll
        </div>
        <div className="w-6 h-10 border border-gray-800 rounded-full flex justify-center pt-2">
          <div className="w-0.5 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Bottom corner text */}
      <div className="absolute bottom-4 right-4 text-[9px] text-gray-800 tracking-[0.3em] uppercase">
        EST. 2024
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
      `}</style>
    </div>
  );
}
