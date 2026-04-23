"use client";

import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import VortexCaseStudySystem from "@/components/VortexCaseStudySystem";
import { content } from "@/app/content";
import "./vortex.css";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es"); // Default to Spanish
  
  const [state, handleSubmit] = useForm("mbdooeon");
  
  const CONTENT = content[lang];
  const VORTEX = CONTENT.vortex;
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
    <div className="vortex-theme">
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:wght@300;400;500;700&family=Space+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />


      <nav id="nav" className={scrolled ? "scrolled" : ""}>
        <div className="vortex-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="nav-logo">
            Be <em>StarLight</em>
          </div>
          <div className="nav-links">
            <a href="#servicios">{CONTENT.header.capabilities}</a>
            <a href="#casos">{CONTENT.header.work}</a>
            <a href="#ideas">{lang === "es" ? "Ideas" : "Ideas"}</a>
            <div className="lang-switcher">
              <button 
                onClick={() => setLang('es')} 
                className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
              >
                ES
              </button>
              <span className="lang-sep">/</span>
              <button 
                onClick={() => setLang('en')} 
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              >
                EN
              </button>
            </div>
            <a href="#contacto" className="nav-cta">
              {VORTEX.hero.ctaPrimary}
            </a>
          </div>
        </div>
      </nav>

      <section id="hero">
        <div className="bg-marquee">
          ESTRATEGIA · SISTEMAS · RESULTADO · ESTRATEGIA · SISTEMAS · RESULTADO
          · ESTRATEGIA · SISTEMAS · RESULTADO ·{"\u00A0"}
        </div>
        <div className="vortex-container">
          <div className="hero-content">
            <div className="hero-tag">{CONTENT.hero.label}</div>
            <div className="hero-h1">
              <span className="line1">
                <span className="word">
                  <span className="word-inner">{VORTEX.hero.line1}</span>
                </span>
              </span>
              <span className="line2">
                <span className="word">
                  <span className="word-inner">{VORTEX.hero.line2}</span>
                </span>
              </span>
              <span className="line3">
                <span className="word">
                  <span className="word-inner">{VORTEX.hero.line3}</span>
                </span>
              </span>
            </div>
            <div className="hero-bottom">
              <p className="hero-desc">
                {VORTEX.hero.desc}
              </p>
              <div className="hero-actions">
                <a href="#contacto" className="btn-hero-p">
                  {VORTEX.hero.ctaPrimary} →
                </a>
                <a href="#casos" className="btn-hero-s">
                  {VORTEX.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-strip">
        <div className="vortex-container" style={{ display: 'flex' }}>
          {VORTEX.stats.map((stat, i) => (
            <div className="sstat" key={i}>
              <p className="sstat-num">{stat.num}</p>
              <p className="sstat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <section id="servicios">
        <div className="vortex-container">
          <p className="s-label reveal">{VORTEX.services.label}</p>
          <div className="svc-list reveal">
            {VORTEX.services.items.map((svc, i) => (
              <div className="svc-item" key={i}>
                <p className="svc-i-num">{svc.id}</p>
                <h3 className="svc-i-title">{svc.title}</h3>
                <p className="svc-i-sub">{svc.sub}</p>
                <p className="svc-i-desc">{svc.desc}</p>
                <a href="#contacto" className="svc-i-cta">
                  {lang === "es" ? "Explorar módulo" : "Explore module"} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VortexCaseStudySystem 
        initialCases={cases} 
        lang={lang} 
        label={VORTEX.casesLabel}
        title={VORTEX.casesTitle}
      />

      <section id="ideas">
        <div className="vortex-container">
          <div className="ideas-layout">
            <div className="ideas-intro reveal">
              <h2>
                {lang === "es" ? <>Ideas que <em>trabajan.</em></> : <>Ideas that <em>work.</em></>}
              </h2>
              <p>{VORTEX.ideas.title}</p>
            </div>
            <div className="ideas-list">
              {VORTEX.ideas.items.map((idea, i) => (
                <div className={`idea-row reveal reveal-delay-${i}`} key={i}>
                  <span className="ir-num">— {i === 0 ? "I" : i === 1 ? "II" : "III"}</span>
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
        <div className="vortex-container">
          <p className="s-label">
            {VORTEX.casesLabel}
          </p>
        </div>
        <div className="clients-marquee-wrap">
          <div className="clients-marquee">
            {[
              { src: "/assets/logos/Columba Store Logo.svg", h: 135 },
              { src: "/assets/logos/GATEPRIORITY.svg", h: 45 },
              { src: "/assets/logos/LOGO-CAIC.svg", h: 54 },
              { src: "/assets/logos/LOGO-HADDOCK-white-1.svg", h: 27, black: true },
              { src: "/assets/logos/Muak_Shop.svg", h: 45 },
              { src: "/assets/logos/NBS_LOGO.svg", h: 135 },
              { src: "/assets/logos/Segue.svg", h: 90, black: true },
            ].map((logo, i) => (
              <img 
                key={i} 
                src={logo.src} 
                alt="Client Logo" 
                className="cl-logo" 
                style={{ 
                  height: `${logo.h}px`, 
                  filter: logo.black ? 'brightness(0)' : 'grayscale(0.2)' 
                }} 
              />
            ))}
            {/* Duplicamos para el loop infinito */}
            {[
              { src: "/assets/logos/Columba Store Logo.svg", h: 135 },
              { src: "/assets/logos/GATEPRIORITY.svg", h: 45 },
              { src: "/assets/logos/LOGO-CAIC.svg", h: 54 },
              { src: "/assets/logos/LOGO-HADDOCK-white-1.svg", h: 27, black: true },
              { src: "/assets/logos/Muak_Shop.svg", h: 45 },
              { src: "/assets/logos/NBS_LOGO.svg", h: 135 },
              { src: "/assets/logos/Segue.svg", h: 90, black: true },
            ].map((logo, i) => (
              <img 
                key={i + 10} 
                src={logo.src} 
                alt="Client Logo" 
                className="cl-logo" 
                style={{ 
                  height: `${logo.h}px`, 
                  filter: logo.black ? 'brightness(0)' : 'grayscale(0.2)' 
                }} 
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contacto">
        <div className="vortex-container">
          <div className="contact-grid">
            <div className="cl-left reveal">
              <h2>{VORTEX.contact.title}</h2>
              <p>{VORTEX.contact.desc}</p>
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
                    {lang === "es" ? "Auditoría estratégica inicial gratuita" : "Free initial strategic audit"}
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
                        <label htmlFor="name">{VORTEX.contact.form.name}</label>
                        <input id="name" name="name" type="text" required placeholder={VORTEX.contact.form.placeholderName} />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                      </div>
                      <div>
                        <label htmlFor="company">{VORTEX.contact.form.company}</label>
                        <input id="company" name="company" type="text" placeholder={VORTEX.contact.form.placeholderCompany} />
                        <ValidationError prefix="Company" field="company" errors={state.errors} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email">{VORTEX.contact.form.email}</label>
                      <input id="email" name="email" type="email" required placeholder={VORTEX.contact.form.placeholderEmail} />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div>
                      <label htmlFor="problem">{VORTEX.contact.form.problem}</label>
                      <select id="problem" name="problem">
                        <option value="">{VORTEX.contact.form.selectModule}</option>
                        {VORTEX.services.items.map((svc, i) => (
                          <option key={i} value={svc.title}>{svc.title}</option>
                        ))}
                        <option value="other">{lang === "es" ? "No sé por dónde empezar" : "I don't know where to start"}</option>
                      </select>
                      <ValidationError prefix="Problem" field="problem" errors={state.errors} />
                    </div>
                    <div>
                      <label htmlFor="context">{VORTEX.contact.form.context}</label>
                      <textarea
                        id="context"
                        name="context"
                        rows={3}
                        placeholder={VORTEX.contact.form.placeholderContext}
                      ></textarea>
                      <ValidationError prefix="Context" field="context" errors={state.errors} />
                    </div>
                    <button type="submit" className="btn-submit-dark" disabled={state.submitting}>
                      {state.submitting ? (lang === "es" ? "ENVIANDO..." : "SENDING...") : VORTEX.contact.form.cta}
                    </button>
                    <p className="form-note-dark">
                      {VORTEX.contact.form.footer}
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

      <footer>
        <div className="vortex-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
