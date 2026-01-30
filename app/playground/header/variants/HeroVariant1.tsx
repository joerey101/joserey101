"use client";

import { useEffect, useRef } from 'react';
import HeroBase from '../HeroBase';

function FlowFieldBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let w: number, h: number;
        let particles: Particle[] = [];
        const numParticles = 80;

        class Particle {
            x: number;
            y: number;
            history: { x: number; y: number }[];
            maxLength: number;
            angle: number;
            speed: number;

            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.history = [];
                this.maxLength = Math.floor(Math.random() * 50 + 20);
                this.angle = 0;
                this.speed = Math.random() * 0.4 + 0.1;
            }

            update() {
                // Simplistic flow field based on x,y coordinates
                this.angle = (Math.sin(this.x * 0.002) + Math.cos(this.y * 0.002)) * Math.PI;
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;

                if (this.x < 0) this.x = w;
                if (this.x > w) this.x = 0;
                if (this.y < 0) this.y = h;
                if (this.y > h) this.y = 0;

                this.history.push({ x: this.x, y: this.y });
                if (this.history.length > this.maxLength) {
                    this.history.shift();
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.moveTo(this.history[0].x, this.history[0].y);
                for (let i = 1; i < this.history.length; i++) {
                    ctx.lineTo(this.history[i].x, this.history[i].y);
                }
                ctx.strokeStyle = `rgba(0, 0, 0, ${0.03})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        const init = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle());
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.update();
                p.draw(ctx);
            });
            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('resize', init);
        init();
        render();

        return () => {
            window.removeEventListener('resize', init);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />;
}

export default function HeroVariant1({ lang }: { lang: "es" | "en" }) {
    return <HeroBase lang={lang} background={<FlowFieldBackground />} />;
}
