"use client";

import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import dynamic from "next/dynamic";
const BeStarLightCaseStudySystem = dynamic(() => import("@/components/BeStarLightCaseStudySystem"), { ssr: false });
import { content } from "@/app/content";
import "./bestarlight.css";
import HeroRotator from '@/components/HeroRotator';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es"); // Default to Spanish
  
  const [state, handleSubmit] = useForm("mbdooeon");
  
  const CONTENT = content[lang];
  const BESTARLIGHT = CONTENT.bestarlight;
  const cases = CONTENT.selectedWork.items;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);

    const reveals = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) x.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((r) => io.observe(r));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      io.disconnect();
    };
  }, []);


  return (
    <div className="bsl-theme">
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>

      <nav id="nav" className={scrolled ? "scrolled" : ""} aria-label="Navegación principal">
        <div className="container-wide bsl-px" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a 
            href="#" 
            className="nav-logo" 
            aria-label="Bestarlight Logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Be <em>StarLight</em>
          </a>
          <div className="nav-links">
            <a href="#servicios">{CONTENT.header.capabilities}</a>
            <a href="#casos">{CONTENT.header.work}</a>
            <a href="#ideas">{lang === "es" ? "Ideas" : "Ideas"}</a>
            <div className="lang-switcher">
              <button 
                onClick={() => setLang('es')} 
                className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
                aria-label="Cambiar idioma a español"
              >
                ES
              </button>
              <span className="lang-sep">/</span>
              <button 
                onClick={() => setLang('en')} 
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                aria-label="Switch language to English"
              >
                EN
              </button>
            </div>
            <a href="#contacto" className="nav-cta">
              {BESTARLIGHT.hero.ctaPrimary}
            </a>
          </div>
        </div>
      </nav>

      <main id="main-content">
        <section id="hero">
        <div className="bg-marquee">
          ESTRATEGIA · SISTEMAS · RESULTADO · ESTRATEGIA · SISTEMAS · RESULTADO
          · ESTRATEGIA · SISTEMAS · RESULTADO ·{"\u00A0"}
        </div>
        <div className="container-wide bsl-px">
          <div className="hero-content">
            <div className="hero-tag">{BESTARLIGHT.hero.yearTag}</div>
            
            <HeroRotator headers={BESTARLIGHT.hero.headers} />

            <div className="hero-actions">
              <a href="#contacto" className="btn-hero-p">
                {BESTARLIGHT.hero.ctaPrimary} →
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-strip" aria-hidden="true">
        <div className="container-wide bsl-px">
          {/* Visual separator gap */}
        </div>
      </div>

      <section id="servicios">
        <div className="container-narrow bsl-px">
          <p className="s-label reveal">{BESTARLIGHT.services.label}</p>
          <div className="svc-list reveal">
            {BESTARLIGHT.services.items.map((svc, i) => (
              <div className="svc-item" key={i}>
                <h2 className="svc-i-title">{svc.title}</h2>
                <p className="svc-i-sub">{svc.sub}</p>
                <p className="svc-i-desc">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeStarLightCaseStudySystem 
        initialCases={cases} 
        lang={lang} 
        title={BESTARLIGHT.casesTitle}
      />

      <section id="ideas">
        <div className="container-narrow bsl-px">
          <div className="ideas-layout">
            <div className="ideas-intro reveal">
              <h2>
                {lang === "es" ? <>Ideas que <em>trabajan.</em></> : <>Ideas that <em>work.</em></>}
              </h2>
              <p>{BESTARLIGHT.ideas.title}</p>
              
              <div className="ideas-badge">
                <span className="badge-num"><span className="plus-sign">+</span>27</span>
                <span className="badge-txt">AÑOS GENERANDO RESULTADOS JUNTO A EMPRESAS</span>
              </div>
            </div>
            <div className="ideas-list">
              {BESTARLIGHT.ideas.items.map((idea, i) => (
                <div className={`idea-row reveal reveal-delay-${i}`} key={i}>
                  <span className="ir-num">{i === 0 ? "I" : i === 1 ? "II" : "III"}</span>
                  <div>
                    <h3 className="ir-title">{idea.title}</h3>
                    <p className="ir-text">{idea.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="clientes">
        <div className="container-wide bsl-px">
          <p className="s-label" style={{ fontSize: 'calc(var(--font-mono) * 1.4)', fontWeight: 900 }}>
            {lang === 'es' ? 'ALGUNOS DE NUESTROS CLIENTES' : 'SOME OF OUR CLIENTS'}
          </p>
        </div>
        <div className="clients-marquee-wrap">
          <div className="clients-marquee">
            {[
              { src: "/assets/logos/Columba Store Logo.svg", h: 135, name: "Columba Store" },
              { src: "/assets/logos/GATEPRIORITY.svg", h: 45, name: "Gate Priority" },
              { src: "/assets/logos/LOGO-CAIC.svg", h: 54, name: "CAIC" },
              { src: "/assets/logos/LOGO-HADDOCK-white-1.svg", h: 27, black: true, name: "Haddock Films" },
              { src: "/assets/logos/Muak_Shop.svg", h: 45, name: "Muak Shop" },
              { src: "/assets/logos/NBS_LOGO.svg", h: 135, name: "NBS Professional" },
              { src: "/assets/logos/Segue.svg", h: 90, black: true, name: "Segue Yachts" },
            ].map((logo, i) => (
              <img 
                key={i} 
                src={logo.src} 
                alt={lang === "es" ? `Logo de cliente corporativo: ${logo.name}` : `Corporate client logo: ${logo.name}`} 
                className="cl-logo" 
                width="200"
                height={logo.h}
                loading="lazy"
                style={{ 
                  height: `${logo.h}px`, 
                  width: 'auto',
                  filter: logo.black ? 'brightness(0)' : 'grayscale(0.2)' 
                }} 
              />
            ))}
            {/* Duplicamos para el loop infinito */}
            {[
              { src: "/assets/logos/Columba Store Logo.svg", h: 135, name: "Columba Store" },
              { src: "/assets/logos/GATEPRIORITY.svg", h: 45, name: "Gate Priority" },
              { src: "/assets/logos/LOGO-CAIC.svg", h: 54, name: "CAIC" },
              { src: "/assets/logos/LOGO-HADDOCK-white-1.svg", h: 27, black: true, name: "Haddock Films" },
              { src: "/assets/logos/Muak_Shop.svg", h: 45, name: "Muak Shop" },
              { src: "/assets/logos/NBS_LOGO.svg", h: 135, name: "NBS Professional" },
              { src: "/assets/logos/Segue.svg", h: 90, black: true, name: "Segue Yachts" },
            ].map((logo, i) => (
              <img 
                key={i + 10} 
                src={logo.src} 
                alt={lang === "es" ? `Logo de cliente: ${logo.name}` : `Client logo: ${logo.name}`} 
                className="cl-logo" 
                width="200"
                height={logo.h}
                loading="lazy"
                style={{ 
                  height: `${logo.h}px`, 
                  width: 'auto',
                  filter: logo.black ? 'brightness(0)' : 'grayscale(0.2)' 
                }} 
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contacto">
        <div className="container-narrow bsl-px">
          <div className="contact-grid">
            <div className="cl-left reveal">
              <h2>{BESTARLIGHT.contact.title}</h2>
              <p>{BESTARLIGHT.contact.desc}</p>
              <div className="cl-steps">
                <div className="cl-step">
                  <span className="cl-step-num">01</span>
                  <span className="cl-step-text">{lang === "es" ? "Completás el formulario" : "Complete the form"}</span>
                </div>
                <div className="cl-step">
                  <span className="cl-step-num">02</span>
                  <span className="cl-step-text">{lang === "es" ? "Te contactamos en 24hs" : "We contact you in 24h"}</span>
                </div>
                <div className="cl-step">
                  <span className="cl-step-num">03</span>
                  <span className="cl-step-text">
                    {lang === "es" ? "Reunión de diagnóstico, sin costo" : "Diagnostic meeting, no cost"}
                  </span>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              {!state.succeeded ? (
                <div id="form-wrap-b">
                  <form className="form-dark" onSubmit={handleSubmit}>
                    <div className="form-dark-row">
                      <div>
                        <label htmlFor="name">{BESTARLIGHT.contact.form.name}</label>
                        <input 
                          id="name" 
                          name="name" 
                          type="text" 
                          required 
                          placeholder={BESTARLIGHT.contact.form.placeholderName} 
                          autoComplete="name"
                          minLength={3}
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                      </div>
                      <div>
                        <label htmlFor="company">{BESTARLIGHT.contact.form.company}</label>
                        <input 
                          id="company" 
                          name="company" 
                          type="text" 
                          placeholder={BESTARLIGHT.contact.form.placeholderCompany} 
                          autoComplete="organization"
                        />
                        <ValidationError prefix="Company" field="company" errors={state.errors} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email">{BESTARLIGHT.contact.form.email}</label>
                      <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder={BESTARLIGHT.contact.form.placeholderEmail} 
                        autoComplete="email"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    {/* Honeypot field for spam prevention */}
                    <input type="text" name="_gotcha" style={{ display: "none" }} />
                    <div>
                      <label htmlFor="problem">{BESTARLIGHT.contact.form.problem}</label>
                      <select id="problem" name="problem" required>
                        <option value="">{BESTARLIGHT.contact.form.selectModule}</option>
                        {BESTARLIGHT.services.items.map((svc: any, i: number) => (
                          <option key={i} value={svc.plainTitle}>{svc.plainTitle}</option>
                        ))}
                        <option value="other">{lang === "es" ? "No sé por dónde empezar" : "I don't know where to start"}</option>
                      </select>
                      <ValidationError prefix="Problem" field="problem" errors={state.errors} />
                    </div>
                    <div>
                      <label htmlFor="context">{BESTARLIGHT.contact.form.context}</label>
                      <textarea
                        id="context"
                        name="context"
                        rows={3}
                        placeholder={BESTARLIGHT.contact.form.placeholderContext}
                        minLength={10}
                      ></textarea>
                      <ValidationError prefix="Context" field="context" errors={state.errors} />
                    </div>
                    <button type="submit" className="btn-submit-dark" disabled={state.submitting}>
                      {state.submitting ? (lang === "es" ? "ENVIANDO..." : "SENDING...") : BESTARLIGHT.contact.form.cta}
                    </button>
                    <p className="form-note-dark">
                      {BESTARLIGHT.contact.form.footer}
                    </p>
                  </form>
                </div>
              ) : (
                <div className="form-success-dark" style={{ display: "block" }}>
                  <span>✦</span>
                  <h3>{lang === "es" ? "Mensaje recibido." : "Message received."}</h3>
                  <p>{lang === "es" ? "Te contactamos en las próximas 24 horas hábiles." : "We will contact you within the next 24 business hours."}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      </main>
      <footer>
        <div className="container-wide bsl-px" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="ft-logo">
            Be <em>StarLight</em>
          </div>
          <p className="ft-copy" style={{ margin: 0, opacity: 1, color: '#f0ebe0' }}>
            Marketing & Comunicación Tech • Buenos Aires • 2001 - 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
