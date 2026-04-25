'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface Header {
  title: string;
  sub: string;
}

interface HeroRotatorProps {
  headers: Header[];
  interval?: number;
}

export default function HeroRotator({ headers, interval = 7000 }: HeroRotatorProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextHeader = useCallback(() => {
    setIndex((prev) => (prev + 1) % headers.length);
  }, [headers.length]);

  const goToHeader = (idx: number) => {
    setIndex(idx);
    // Reset timer when manually clicked
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(nextHeader, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextHeader, interval, prefersReducedMotion, isPaused]);

  return (
    <div 
      className="hero-rotator-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="hero-text-wrapper" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="hero-content-slide"
          >
            <div className="hero-title-container">
              <h1 
                className="hero-title-dynamic"
                dangerouslySetInnerHTML={{ __html: headers[index].title }}
              />
            </div>
            <div className="hero-desc-container">
              <p className="hero-desc-dynamic">
                {headers[index].sub}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Position Indicators */}
      <div className="hero-indicators" role="tablist">
        {headers.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={index === i}
            aria-label={`Ver mensaje ${i + 1} de ${headers.length}`}
            onClick={() => goToHeader(i)}
            className={`hero-dot ${index === i ? 'active' : ''}`}
          />
        ))}
      </div>
      
      <style jsx>{`
        .hero-rotator-container {
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2;
        }

        .hero-text-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        /* H1 Container with fixed height and bottom alignment */
        .hero-title-container {
          width: 100%;
          min-height: 220px; /* Reference height for ~3 lines in desktop */
          display: flex;
          flex-direction: column;
          justify-content: flex-end; /* Align H1 to bottom */
          margin-bottom: 48px;
        }

        /* Subtitle Container with fixed height */
        .hero-desc-container {
          width: 100%;
          min-height: 80px; /* Reference height for ~2 lines in desktop */
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin-bottom: 32px;
        }

        .hero-title-dynamic {
          font-family: var(--serif);
          font-size: clamp(48px, 7vw, 110px);
          line-height: 0.95;
          font-weight: 900;
          color: #f0ebe0;
          margin: 0;
          max-width: 1100px;
          letter-spacing: -0.02em;
          text-wrap: balance; /* Distribute lines evenly */
        }

        .hero-desc-dynamic {
          font-family: var(--sans);
          font-size: 19px;
          line-height: 1.5;
          color: rgba(240, 235, 224, 0.55);
          max-width: 800px;
          margin: 0;
          text-wrap: pretty; /* Avoid orphans */
        }

        .desktop-br {
          display: inline;
        }

        /* Responsive Adjustments */
        @media (max-width: 1024px) {
          .desktop-br { display: none; }
          .hero-title-container { min-height: 240px; }
        }

        @media (max-width: 768px) {
          .hero-title-container { 
            min-height: 220px; 
            margin-bottom: 32px;
            justify-content: flex-start; /* Normal alignment in mobile */
          }
          .hero-desc-container { 
            min-height: 120px; 
            margin-bottom: 24px;
          }
          .hero-title-dynamic {
            font-size: clamp(34px, 12vw, 56px);
            text-wrap: balance;
          }
          .hero-desc-dynamic {
            font-size: 17px;
          }
        }

        @media (max-width: 480px) {
          .hero-title-container { min-height: 260px; }
          .hero-desc-container { min-height: 160px; }
        }

        .hero-indicators {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          margin-bottom: 2rem;
        }

        .hero-dot {
          width: 32px;
          height: 2px;
          background: rgba(240, 235, 224, 0.15);
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 12px 0; /* 44px tap area */
          background-clip: content-box;
          box-sizing: content-box;
        }

        .hero-dot.active {
          background-color: var(--accent);
          width: 64px;
        }

        .hero-dot:hover:not(.active) {
          background-color: rgba(240, 235, 224, 0.4);
        }

        @media (max-width: 768px) {
          .hero-indicators {
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  );
}
