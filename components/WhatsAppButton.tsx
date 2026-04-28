'use client';

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
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        <span className="wa-tooltip">WhatsApp</span>
      </a>

      <style jsx>{`
        .wa-float-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 56px;
          height: 56px;
          background-color: #141010;
          color: #f0ebe0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          z-index: 9999;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .wa-float-btn:hover {
          transform: translateY(-5px);
          background-color: #d4380d;
          color: white;
          box-shadow: 0 15px 30px rgba(212, 56, 13, 0.3);
          border-color: #d4380d;
        }

        .wa-tooltip {
          position: absolute;
          right: 70px;
          background: #141010;
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-family: var(--sans);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          transform: translateX(10px);
          white-space: nowrap;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .wa-float-btn:hover .wa-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 768px) {
          .wa-float-btn {
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
          }
          .wa-tooltip {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
