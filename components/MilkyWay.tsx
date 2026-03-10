'use client';

import { useEffect, useRef } from 'react';

export default function MilkyWay() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = window.innerWidth;
        let h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;

        // --- Estructuras ---
        const stars: any[] = [];
        const shootingStars: any[] = [];

        // Configurar Nebulosas (manchas suaves espaciales)
        const nebulas: any[] = [];
        const numNebulas = w < 768 ? 3 : 6;
        for (let i = 0; i < numNebulas; i++) {
            nebulas.push({
                x: Math.random() * w,
                y: Math.random() * h,
                radius: Math.random() * (w * 0.4) + (w * 0.2), // radios muy grandes para dar suavidad
                hue: Math.random() > 0.5 ? 230 : 280, // Azul marino o púrpura profundo
                opacity: Math.random() * 0.05 + 0.02 // Muy sutil
            });
        }

        // Rellenamos estrellas normales
        const numStars = w < 768 ? 600 : 1200; // Volvemos a menos estrellas
        for (let i = 0; i < numStars; i++) {
            let x = Math.random() * w;
            let y = Math.random() * h;

            // Distribución ligeramente ponderada al centro para dar profundidad sin hacer líneas marcadas
            if (Math.random() > 0.7) {
                x = (Math.random() + Math.random() + Math.random()) / 3 * w;
                y = (Math.random() + Math.random() + Math.random()) / 3 * h;
            }

            const size = Math.random() * 2.1; // Estrellas ligeramente más grandes
            const opacity = Math.random() * 1.1 + 0.3; // Mucho más brillantes (base)

            stars.push({
                x,
                y,
                size,
                baseOpacity: opacity,
                twinkleSpeed: Math.random() * 0.03 + 0.01,
                twinklePhase: Math.random() * Math.PI * 2,
                hue: Math.random() * 80 + 180 // Azules y morados más intensos
            });
        }

        // --- Funciones de dibujo ---
        function drawShootingStar(ss: any) {
            if (!ctx) return;
            ctx.save();
            ctx.translate(ss.x, ss.y);
            ctx.rotate(ss.angle);

            const gradient = ctx.createLinearGradient(0, 0, -ss.length, 0);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(-ss.length, ss.thickness);
            ctx.lineTo(-ss.length, -ss.thickness);
            ctx.closePath();
            ctx.fill();

            ctx.restore();
        }

        function createShootingStar() {
            return {
                x: Math.random() * w,
                y: 0,
                length: Math.random() * 150 + 50,
                thickness: Math.random() * 1.5 + 0.5,
                speed: Math.random() * 15 + 10,
                opacity: 1,
                angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 grados
                active: true
            };
        }

        let animationFrame: number;
        let time = 0;

        function render() {
            if (!ctx) return;
            time++;

            // Limpiar fondo con un azul/negro muy oscuro
            ctx.fillStyle = '#02050B';
            ctx.fillRect(0, 0, w, h);

            // Dibujar nebulosa/polvo estelar de la vía láctea (orgánico y suave)
            for (let i = 0; i < nebulas.length; i++) {
                const n = nebulas[i];
                ctx.save();
                const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius);
                grad.addColorStop(0, `hsla(${n.hue}, 40%, 30%, ${n.opacity})`);
                grad.addColorStop(1, `hsla(${n.hue}, 40%, 30%, 0)`);
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }


            // Dibujar estrellas
            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];
                const twinkle = Math.sin(time * s.twinkleSpeed + s.twinklePhase) * 0.5 + 0.5; // 0 to 1
                const currentOpacity = s.baseOpacity * twinkle;

                ctx.fillStyle = `hsla(${s.hue}, 80%, 80%, ${currentOpacity})`;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fill();

                // Halo sutil y más nítido para estrellas muy brillantes
                if (s.size > 1.2 && currentOpacity > 0.6) {
                    const haloGrad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 2.5); // Halo más compacto/nítido
                    haloGrad.addColorStop(0, `hsla(${s.hue}, 80%, 90%, ${currentOpacity * 0.9})`);
                    haloGrad.addColorStop(1, 'hsla(0, 0%, 0%, 0)');
                    ctx.fillStyle = haloGrad;
                    ctx.beginPath();
                    ctx.arc(s.x, s.y, s.size * 2.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // --- DIBUJAR ESTRELLA LUCERO (ZONA SUPERIOR DERECHA) ---
            // Se dibuja en una posición fija pero desplazada +100px a la derecha y -100px arriba
            const luceroX = (w * 0.82) + 100;
            const luceroY = (h * 0.22) - 100;
            const luceroSize = 5.0; // 40% más grande
            // Efecto de titilar mucho más pausado (ritmo de "corcheas" lentas en 4 tiempos)
            const luceroPulse = (Math.sin(time * 0.015) + Math.sin(time * 0.035)) * 0.5;
            const luceroOpacity = 0.6 + luceroPulse * 0.4; // Oscilación suave y elegante

            // Destello base
            ctx.fillStyle = `rgba(255, 255, 255, ${luceroOpacity})`;
            ctx.beginPath();
            ctx.arc(luceroX, luceroY, luceroSize, 0, Math.PI * 2);
            ctx.fill();

            // Halo Exterior muy suave
            const luceroHalo = ctx.createRadialGradient(luceroX, luceroY, 0, luceroX, luceroY, luceroSize * 15);
            luceroHalo.addColorStop(0, `rgba(180, 220, 255, ${luceroOpacity * 0.4})`);
            luceroHalo.addColorStop(0.5, `rgba(180, 220, 255, ${luceroOpacity * 0.1})`);
            luceroHalo.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = luceroHalo;
            ctx.beginPath();
            ctx.arc(luceroX, luceroY, luceroSize * 15, 0, Math.PI * 2);
            ctx.fill();

            // Picos de estrella (destello en cruz clásica) - Sin rotaciones irreales
            ctx.save();
            ctx.translate(luceroX, luceroY);

            const spikeGrad = ctx.createLinearGradient(-luceroSize * 8, 0, luceroSize * 8, 0);
            spikeGrad.addColorStop(0, 'rgba(255,255,255,0)');
            spikeGrad.addColorStop(0.5, `rgba(255,255,255,${luceroOpacity * 0.8})`);
            spikeGrad.addColorStop(1, 'rgba(255,255,255,0)');

            ctx.fillStyle = spikeGrad;

            // Horizontal
            ctx.beginPath();
            ctx.ellipse(0, 0, luceroSize * 12, luceroSize * 0.4, 0, 0, Math.PI * 2);
            ctx.fill();

            // Vertical
            ctx.beginPath();
            ctx.ellipse(0, 0, luceroSize * 0.4, luceroSize * 12, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
            // --------------------------------------------------------

            // Probabilidad de nueva estrella fugaz
            if (Math.random() < 0.02) {
                shootingStars.push(createShootingStar());
            }

            // Actualizar y dibujar estrellas fugaces
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const ss = shootingStars[i];
                if (!ss.active) {
                    shootingStars.splice(i, 1);
                    continue;
                }

                ss.x += Math.cos(ss.angle) * ss.speed;
                ss.y += Math.sin(ss.angle) * ss.speed;
                ss.opacity -= 0.015;

                if (ss.opacity <= 0 || ss.x > w || ss.y > h) {
                    ss.active = false;
                } else {
                    drawShootingStar(ss);
                }
            }

            animationFrame = requestAnimationFrame(render);
        }

        render();

        const handleResize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
            // Optional: Re-generate stars on resize for better distribution
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />
    );
}
