'use client';

/**
 * StarlightIntro — Animación de intro Supernova
 * ─────────────────────────────────────────────
 * INTEGRACIÓN en Next.js:
 *
 *  1. Copiá StarlightIntro.jsx y StarlightIntro.module.css a tu carpeta /components
 *
 *  2. En tu app/layout.tsx (o page.tsx), agregá:
 *       import StarlightIntro from '@/components/StarlightIntro'
 *       ...
 *       <body>
 *         <StarlightIntro />    ← antes que cualquier otra cosa
 *         {children}
 *       </body>
 *
 *  3. En tu globals.css agregá:
 *       body { background: #000; }
 *     (evita flash blanco antes de que arranque el canvas)
 *
 *  PROPS opcionales:
 *    onComplete  — callback que se llama cuando termina la animación
 *    showReplay  — muestra botón ↺ al final (default: false)
 */

import { useEffect, useRef, useState } from 'react';
import styles from './StarlightIntro.module.css';

export default function StarlightIntro({ onComplete, showReplay = false }) {
  const canvasRef  = useRef(null);
  const bloomRef   = useRef(null);
  const logoRef    = useRef(null);
  const frameRef   = useRef(null);

  const [hidden,     setHidden]     = useState(false);
  const [replayVisible, setReplayVisible] = useState(false);

  useEffect(() => {
    const canvas  = canvasRef.current;
    const bloom   = bloomRef.current;
    const logoCon = logoRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // ---- TIMING (ms) ----
    const T = {
      STARS_FADE_IN :  900,
      STARS_LIVE    : 2500,
      STAR_GROW_END : 3500,
      BLOOM_PEAK    : 3820,
      BLOOM_END     : 4250,
      REVEAL_END    : 5400,
    };

    // ---- HELPERS ----
    const clamp        = (v, a, b) => Math.max(a, Math.min(b, v));
    const lerp         = (a, b, t) => a + (b - a) * t;
    const norm         = (v, mn, mx) => clamp((v - mn) / (mx - mn), 0, 1);
    const easeInExpo   = t => t === 0 ? 0 : Math.pow(2, 10 * t - 10);
    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

    let W, H;
    let stars = [], brightStars = [], nodes = [];
    let startTime = null;

    // ---- RESIZE ----
    function resize() {
      canvas.width  = W = window.innerWidth;
      canvas.height = H = window.innerHeight;
    }

    // ---- GENERADORES ----
    function generateStars(count = 380) {
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x            : Math.random() * W,
          y            : Math.random() * H,
          r            : Math.random() * 1.4 + 0.3,
          baseOpacity  : Math.random() * 0.65 + 0.15,
          twinkleSpeed : Math.random() * 0.015 + 0.004,
          twinklePhase : Math.random() * Math.PI * 2,
          depth        : Math.random() * 0.8 + 0.2,
        });
      }

      brightStars = [];
      for (let i = 0; i < 28; i++) {
        let x, y;
        do {
          x = Math.random() * W;
          y = Math.random() * H;
        } while (Math.hypot(x - W / 2, y - H / 2) < Math.min(W, H) * 0.18);

        brightStars.push({
          x, y,
          r            : Math.random() * 1.8 + 0.8,
          minOp        : Math.random() < 0.4 ? 0.02 : 0.2,
          maxOp        : Math.random() * 0.5 + 0.5,
          twinkleSpeed : Math.random() * 0.008 + 0.003,
          twinklePhase : Math.random() * Math.PI * 2,
          delayNorm    : Math.random() * 0.6,
          hasSpike     : Math.random() < 0.35,
          spikeLen     : Math.random() * 8 + 4,
          spikeRot     : Math.random() * Math.PI,
        });
      }
    }

    function generateNodes(count = 12) {
      nodes = [];
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        nodes.push({
          baseAngle  : angle,
          baseDist   : 18 + Math.random() * 14,
          orbitSpeed : (Math.random() - 0.5) * 0.008,
          phase      : Math.random() * Math.PI * 2,
          r          : 1.2 + Math.random() * 1.2,
        });
      }
    }

    // ---- DRAW LOOP ----
    function draw(timestamp) {
      if (!startTime) startTime = timestamp;
      const e  = timestamp - startTime;
      const cx = W / 2;
      const cy = H / 2;

      const pStars   = easeOutCubic(norm(e, 0, T.STARS_FADE_IN));
      const pGrow    = easeInExpo(norm(e, T.STARS_LIVE, T.STAR_GROW_END));
      const pBloomUp = norm(e, T.STAR_GROW_END, T.BLOOM_PEAK);
      const pBloomDn = easeOutCubic(norm(e, T.BLOOM_PEAK, T.BLOOM_END));

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#000008';
      ctx.fillRect(0, 0, W, H);

      const starFade = 1 - pGrow * 0.85;

      // ---- ESTRELLAS DE FONDO ----
      stars.forEach(s => {
        const tw = Math.sin(e * s.twinkleSpeed + s.twinklePhase) * 0.25 + 0.75;
        const op = s.baseOpacity * tw * pStars * starFade;
        if (op <= 0) return;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * s.depth, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${op})`;
        ctx.fill();
      });

      // ---- ESTRELLAS BRILLANTES ----
      brightStars.forEach(s => {
        const pEntry = easeOutCubic(norm(pStars, s.delayNorm, s.delayNorm + 0.4));
        if (pEntry <= 0) return;
        const twRaw = (Math.sin(e * s.twinkleSpeed + s.twinklePhase) + 1) / 2;
        const op = lerp(s.minOp, s.maxOp, twRaw) * pEntry * starFade;
        if (op < 0.01) return;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${op})`;
        ctx.fill();

        const halo = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3.5);
        halo.addColorStop(0, `rgba(200,230,255,${op * 0.4})`);
        halo.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();

        if (s.hasSpike && twRaw > 0.5) {
          const spikeOp  = (twRaw - 0.5) * 2 * op * 0.8;
          const spikeLen = s.spikeLen * twRaw;
          [0, Math.PI / 2].forEach(angle => {
            ctx.save();
            ctx.translate(s.x, s.y);
            ctx.rotate(s.spikeRot + angle);
            const sg = ctx.createLinearGradient(-spikeLen, 0, spikeLen, 0);
            sg.addColorStop(0,   'rgba(255,255,255,0)');
            sg.addColorStop(0.5, `rgba(255,255,255,${spikeOp})`);
            sg.addColorStop(1,   'rgba(255,255,255,0)');
            ctx.beginPath();
            ctx.moveTo(-spikeLen, 0);
            ctx.lineTo(spikeLen, 0);
            ctx.strokeStyle = sg;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.restore();
          });
        }
      });

      // ---- ESTRELLA CENTRAL ----
      if (e < T.BLOOM_PEAK) {
        const starR  = lerp(3.5, Math.min(W, H) * 0.55, pGrow);
        const glowR  = starR * 2.2;
        const coreOp = 1 - pBloomUp * 0.3;

        const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
        grd.addColorStop(0,    `rgba(255, 245, 200, ${0.55 * coreOp})`);
        grd.addColorStop(0.25, `rgba(160, 200, 255, ${0.3  * coreOp})`);
        grd.addColorStop(0.6,  `rgba(80,  120, 255, ${0.12 * coreOp})`);
        grd.addColorStop(1,    'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, starR);
        core.addColorStop(0,   `rgba(255,255,255,${coreOp})`);
        core.addColorStop(0.4, `rgba(255, 230, 140, ${0.85 * coreOp})`);
        core.addColorStop(1,   'rgba(255,180,80,0)');
        ctx.beginPath();
        ctx.arc(cx, cy, starR, 0, Math.PI * 2);
        ctx.fillStyle = core;
        ctx.fill();

        if (pGrow > 0.25) {
          const rayOp     = norm(pGrow, 0.25, 0.6) * coreOp;
          const rotation  = e * 0.00015;
          const rayAngles = [0, 0.5, 1, 1.5, 0.25, 0.75, 1.25, 1.75].map(v => v * Math.PI);

          rayAngles.forEach((angle, i) => {
            const isPrimary = i < 4;
            const len = starR * (isPrimary ? 2.0 : 1.1);
            const w   = isPrimary ? 2.5 : 1.0;
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(angle + rotation);
            const rayGrd = ctx.createLinearGradient(0, 0, len, 0);
            rayGrd.addColorStop(0,   `rgba(255,255,255,${0.85 * rayOp})`);
            rayGrd.addColorStop(0.5, `rgba(200,230,255,${0.3  * rayOp})`);
            rayGrd.addColorStop(1,   'rgba(255,255,255,0)');
            ctx.beginPath();
            ctx.moveTo(0, -w / 2);
            ctx.lineTo(len, 0);
            ctx.lineTo(0,  w / 2);
            ctx.fillStyle = rayGrd;
            ctx.fill();
            ctx.restore();
          });
        }

        const nodesOp = Math.sin(norm(pGrow, 0.05, 0.9) * Math.PI) * coreOp;
        if (nodesOp > 0.01) {
          nodes.forEach((n, i) => {
            const angle = n.baseAngle + n.orbitSpeed * e + Math.sin(e * 0.001 + n.phase) * 0.4;
            const dist  = n.baseDist + starR * 0.45 + Math.sin(e * 0.002 + n.phase) * 6;
            const nx = cx + Math.cos(angle) * dist;
            const ny = cy + Math.sin(angle) * dist;

            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(nx, ny);
            ctx.strokeStyle = `rgba(160, 210, 255, ${0.45 * nodesOp})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();

            const next = nodes[(i + 1) % nodes.length];
            const na   = next.baseAngle + next.orbitSpeed * e;
            const nd   = next.baseDist + starR * 0.45;
            ctx.beginPath();
            ctx.moveTo(nx, ny);
            ctx.lineTo(cx + Math.cos(na) * nd, cy + Math.sin(na) * nd);
            ctx.strokeStyle = `rgba(160, 210, 255, ${0.15 * nodesOp})`;
            ctx.lineWidth = 0.3;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(nx, ny, n.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(210, 235, 255, ${nodesOp})`;
            ctx.fill();
          });
        }
      }

      // ---- BLOOM SUPERNOVA ----
      const bloomPeak = clamp(pBloomUp, 0, 1);
      const bloomFade = e < T.BLOOM_END ? clamp(bloomPeak - pBloomDn * bloomPeak, 0, 1) : 0;
      if (bloom) bloom.style.opacity = String(bloomFade);

      // ---- CANVAS FADE (evita negro entre bloom y site) ----
      if (e >= T.BLOOM_PEAK) {
        canvas.style.opacity = String(
          Math.max(0, 1 - easeOutCubic(norm(e, T.BLOOM_PEAK, T.BLOOM_END)))
        );
      }

      // ---- LOGO REVEAL ----
      if (e >= T.BLOOM_PEAK && logoCon) {
        const pLogo = easeOutCubic(norm(e, T.BLOOM_END, T.REVEAL_END));
        logoCon.style.opacity   = String(pLogo);
        logoCon.style.transform = `translateX(-50%) translateY(${lerp(-10, 0, pLogo)}px)`;
      }

      // ---- LOOP o FIN ----
      if (e < T.REVEAL_END + 600) {
        frameRef.current = requestAnimationFrame(draw);
      } else {
        // Animación terminada
        canvas.style.display = 'none';
        if (showReplay) setReplayVisible(true);
        onComplete?.();
        // Desmonta el overlay después de que el site ya es visible
        setTimeout(() => setHidden(true), 800);
      }
    }

    function handleResize() {
      resize();
      generateStars(380);
    }

    // ---- INIT ----
    canvas.style.display  = 'block';
    canvas.style.opacity  = '1';
    if (bloom)   bloom.style.opacity   = '0';
    if (logoCon) {
      logoCon.style.opacity   = '0';
      logoCon.style.transform = 'translateX(-50%) translateY(-10px)';
    }

    resize();
    generateStars(380);
    generateNodes(12);

    window.addEventListener('resize', handleResize);
    startTime = null;
    frameRef.current = requestAnimationFrame(draw);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (hidden) return null;

  return (
    <div className={styles.wrapper}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div    ref={bloomRef}  className={styles.bloom}  />
      <div    ref={logoRef}   className={styles.logoContainer}>
        <span className={styles.starIcon}>✦</span>
        <span className={styles.logoText}>STARLIGHT</span>
      </div>
      {replayVisible && (
        <button
          className={styles.replay}
          onClick={() => window.location.reload()}
        >
          ↺ Repetir intro
        </button>
      )}
    </div>
  );
}
