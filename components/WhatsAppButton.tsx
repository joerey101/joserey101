'use client';

import Image from 'next/image';
import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = "5491133590001";
  const message = encodeURIComponent("Hola! Vi la web de BeStarLight y me gustaría realizar una consulta.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float-btn"
        aria-label="Contactar por WhatsApp"
      >
        <Image 
          src="/WhatsApp.webp" 
          alt="WhatsApp" 
          width={32} 
          height={32} 
          className="wa-icon-img"
        />
        <span className="wa-tooltip">WhatsApp</span>
      </a>

      <style jsx>{`
        .wa-float-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background-color: #141010;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          z-index: 9999;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0;
          overflow: visible;
        }

        :global(.wa-icon-img) {
          transition: transform 0.3s ease;
          display: block;
        }

        .wa-float-btn:hover {
          transform: translateY(-5px);
          background-color: #d4380d;
          box-shadow: 0 15px 30px rgba(212, 56, 13, 0.4);
          border-color: #d4380d;
        }

        .wa-float-btn:hover :global(.wa-icon-img) {
          transform: scale(1.1);
        }

        .wa-tooltip {
          position: absolute;
          right: 75px;
          background: #141010;
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 12px;
          font-family: var(--sans);
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateX(10px);
          white-space: nowrap;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .wa-float-btn:hover .wa-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 768px) {
          .wa-float-btn {
            bottom: 25px;
            right: 25px;
            width: 56px;
            height: 56px;
          }
          .wa-tooltip {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
