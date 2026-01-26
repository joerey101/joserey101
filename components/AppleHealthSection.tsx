'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AppleHealthSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Detectamos el progreso del scroll en este contenedor específico
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Mapeamos el scroll a valores de diseño:
  // 1. La opacidad del desenfoque (de 0 a 1 entre el 0% y el 40% del scroll)
  const blurOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  
  // 2. Un ligero zoom a la imagen para darle vida (parallax sutil)
  const imageScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.05]);
  
  // 3. El movimiento del texto (subida suave)
  const textY = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      {/* CAPA STICKY: La imagen de fondo que se queda fija */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Usamos una imagen de placeholder profesional compatible con Apple Style */}
        <motion.div
            style={{ scale: imageScale }}
            className="absolute inset-0 h-full w-full"
        >
            <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" 
                className="h-full w-full object-cover brightness-75"
                alt="Apple Watch Health Context"
            />
        </motion.div>
        
        {/* CAPA DE "ESFUMADO": El blur que se activa con el scroll */}
        <motion.div 
          style={{ opacity: blurOpacity }}
          className="absolute inset-0 bg-black/40 backdrop-blur-2xl transition-colors duration-300"
        />
      </div>

      {/* CONTENIDO QUE FLOTA: Lo que realmente scrollea encima */}
      <div className="relative z-10 -mt-[100vh]">
        {/* PRIMER BLOQUE: Título Principal */}
        <div className="h-screen flex items-end pb-32 px-10 md:px-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <p className="text-orange-500 font-semibold mb-2 text-xl">Health</p>
             <h2 className="text-white text-5xl md:text-8xl font-bold tracking-tight">
               Know your body <br /> by heart.
             </h2>
          </motion.div>
        </div>

        {/* SEGUNDO BLOQUE: Información Detallada (Aparece con el Blur) */}
        <div className="h-screen flex flex-col justify-center px-10 md:px-20 max-w-5xl">
          <motion.div style={{ y: textY, opacity: textOpacity }}>
            <h3 className="text-white text-3xl md:text-5xl font-medium leading-[1.15] mb-8">
              The more insights you have, the more empowered you are to take action. 
              From the ECG app to the Vitals app and more, Apple Watch Series 11 
              provides a bigger picture of your health.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/60 text-lg">
                <p>
                    And now Series 11 takes the next big step in heart health with 
                    a pioneering feature — hypertension notifications. It monitors your 
                    heart rate and rhythms to keep you informed.
                </p>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <p className="text-white font-medium mb-2">New Vitals App</p>
                    <p className="text-sm">Quickly see your overnight health metrics and get notified if they wander outside your typical range.</p>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Bloque final para salida suave */}
        <div className="h-screen" />
      </div>
    </section>
  );
}
