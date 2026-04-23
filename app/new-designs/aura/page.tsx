"use client";

import { useEffect, useState, FormEvent, useRef } from "react";
import Link from "next/link";
import "./aura.css";

export default function AuraPage() {
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll handling
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);

    // Reveal animation
    const revs = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    revs.forEach((r) => obs.observe(r));

    // Cursor handling
    const cursor = cursorRef.current;
    const aura = auraRef.current;
    let mx = 0,
      my = 0,
      ax = 0,
      ay = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.left = mx + "px";
        cursor.style.top = my + "px";
      }
    };

    const animAura = () => {
      ax += (mx - ax) * 0.06;
      ay += (my - ay) * 0.06;
      if (aura) {
        aura.style.left = ax + "px";
        aura.style.top = ay + "px";
      }
      animationFrameId = requestAnimationFrame(animAura);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animAura();

    // Hover effects for links and buttons
    const interactiveElements = document.querySelectorAll("a, button");
    const handleMouseEnter = () => {
      if (cursor) {
        cursor.style.width = "14px";
        cursor.style.height = "14px";
      }
    };
    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.width = "6px";
        cursor.style.height = "6px";
      }
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      obs.disconnect();
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const submitFormC = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="aura-theme">
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;700&family=Space+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-aura" ref={auraRef}></div>
      
      <div id="mesh">
        <div className="mesh-blob blob1"></div>
        <div className="mesh-blob blob2"></div>
        <div className="mesh-blob blob3"></div>
      </div>
      
      <Link href="/new-designs" className="hub-link">
        ← Volver
      </Link>

      <nav id="nav" className={scrolled ? "scrolled" : ""}>
        <div className="nav-logo">
          Be StarLight <span className="star">✦</span>
        </div>
        <div className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#casos">Casos</a>
          <a href="#ideas">Ideas</a>
          <a href="#contacto" className="nav-cta">
            Diagnóstico gratuito
          </a>
        </div>
      </nav>

      <section id="hero">
        <div className="hero-ring ring1"></div>
        <div className="hero-ring ring2"></div>
        <div className="hero-ring ring3"></div>
        <div className="hero-inner">
          <span className="hero-tag">Marketing & Comunicación Tech ✦ Buenos Aires</span>
          <h1 className="hero-h1">
            <span className="l1">Antes de construir,</span>
            <span className="l2">entendemos.</span>
            <span className="l3">Estrategia · Sistemas · Resultado</span>
          </h1>
          <p className="hero-desc">
            Modernizamos organizaciones que ya funcionan. Diagnóstico real,
            ecosistemas digitales e inteligencia operativa para empresas que
            escalan sin perder el control.
          </p>
          <div className="hero-btns">
            <a href="#contacto" className="btn-aura-p">
              Iniciar diagnóstico →
            </a>
            <a href="#casos" className="btn-aura-s">
              Ver casos reales
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>SCROLL</span>
          <div className="scroll-dot"></div>
        </div>
      </section>

      <div className="stats-row">
        <div className="astat reveal">
          <div className="astat-num">+340%</div>
          <div className="astat-label">conversión promedio en clientes</div>
        </div>
        <div className="astat reveal reveal-d1">
          <div className="astat-num">−60%</div>
          <div className="astat-label">tiempo de cierre comercial</div>
        </div>
        <div className="astat reveal reveal-d2">
          <div className="astat-num">×2.8</div>
          <div className="astat-label">ticket promedio post-auditoría</div>
        </div>
        <div className="astat reveal reveal-d3">
          <div className="astat-num">IA</div>
          <div className="astat-label">integrada en cada proceso</div>
        </div>
      </div>

      <section id="servicios">
        <div className="sec-label reveal">Módulos de servicio</div>
        <div className="svc-cards">
          <div className="glass-card svc-glass reveal">
            <span className="svc-g-icon">◈</span>
            <span className="svc-g-num">01</span>
            <h3 className="svc-g-title">Auditoría Estratégica 1 a 1</h3>
            <p className="svc-g-sub">Antes de construir, entendemos.</p>
            <p className="svc-g-desc">
              Inmersión directa en la estructura comercial y operativa. Mapeamos
              ineficiencias, evaluamos viabilidad con IA y definimos el camino
              exacto. Sin supuestos, con datos.
            </p>
            <a href="#contacto" className="svc-g-link">
              Explorar módulo →
            </a>
          </div>
          <div className="glass-card svc-glass reveal reveal-d1">
            <span className="svc-g-icon">◎</span>
            <span className="svc-g-num">02</span>
            <h3 className="svc-g-title">Ecosistemas Web y Canales Digitales</h3>
            <p className="svc-g-sub">Presencia digital con estructura detrás.</p>
            <p className="svc-g-desc">
              Plataformas de alto rendimiento conectadas a los flujos de trabajo
              reales. Cada canal tiene un propósito medible dentro de la operación
              comercial.
            </p>
            <a href="#contacto" className="svc-g-link">
              Desplegar sistema →
            </a>
          </div>
          <div className="glass-card svc-glass reveal reveal-d2">
            <span className="svc-g-icon">◐</span>
            <span className="svc-g-num">03</span>
            <h3 className="svc-g-title">Gestión e Inteligencia Operativa</h3>
            <p className="svc-g-sub">De datos dispersos a visión de negocio.</p>
            <p className="svc-g-desc">
              Unificamos herramientas, procesos y fuentes de información en un
              sistema centralizado. Visibilidad total y capacidad de respuesta
              inmediata.
            </p>
            <a href="#contacto" className="svc-g-link">
              Ver sistema →
            </a>
          </div>
        </div>
      </section>

      <section id="casos">
        <div className="sec-label reveal">Casos de estudio</div>
        <div className="cases-masonry">
          <div className="glass-card case-glass reveal">
            <span className="cg-sector">Retail Tech</span>
            <h3 className="cg-title">Migración operativa y canal D2C</h3>
            <div className="cg-result">+340%</div>
            <div className="cg-tags">
              <span className="cg-tag">E-commerce</span>
              <span className="cg-tag">IA</span>
              <span className="cg-tag">CRM</span>
            </div>
            <p className="cg-meta">conversión online · 4 meses</p>
          </div>
          <div className="glass-card case-glass reveal reveal-d1">
            <span className="cg-sector">Agro</span>
            <h3 className="cg-title">Sistema de inteligencia comercial</h3>
            <div className="cg-result">−60%</div>
            <div className="cg-tags">
              <span className="cg-tag">Analytics</span>
              <span className="cg-tag">Auto.</span>
            </div>
            <p className="cg-meta">tiempo de cierre · 6 meses</p>
          </div>
          <div className="glass-card case-glass reveal reveal-d2">
            <span className="cg-sector">Salud</span>
            <h3 className="cg-title">Ecosistema digital clínico</h3>
            <div className="cg-result">5×</div>
            <div className="cg-tags">
              <span className="cg-tag">Web</span>
              <span className="cg-tag">SEO</span>
            </div>
            <p className="cg-meta">leads calificados · 3 meses</p>
          </div>
          <div className="glass-card case-glass reveal">
            <span className="cg-sector">Fintech</span>
            <h3 className="cg-title">Auditoría y reposicionamiento</h3>
            <div className="cg-result">×2.8</div>
            <div className="cg-tags">
              <span className="cg-tag">Estrategia</span>
              <span className="cg-tag">Branding</span>
            </div>
            <p className="cg-meta">ticket promedio · 2 meses</p>
          </div>
          <div className="glass-card case-glass reveal reveal-d1">
            <span className="cg-sector">Logística</span>
            <h3 className="cg-title">Integración omnicanal</h3>
            <div className="cg-result">−40%</div>
            <div className="cg-tags">
              <span className="cg-tag">BI</span>
              <span className="cg-tag">UX</span>
            </div>
            <p className="cg-meta">fricción operativa · 5 meses</p>
          </div>
          <div className="glass-card case-glass reveal reveal-d2">
            <span className="cg-sector">EdTech</span>
            <h3 className="cg-title">Plataforma adquisición y retención</h3>
            <div className="cg-result">+180%</div>
            <div className="cg-tags">
              <span className="cg-tag">Growth</span>
              <span className="cg-tag">Email</span>
            </div>
            <p className="cg-meta">retención 90 días · 4 meses</p>
          </div>
        </div>
      </section>

      <section id="ideas">
        <div className="sec-label reveal">Ideas vivas</div>
        <div className="ideas-trio">
          <div className="glass-card idea-glass reveal">
            <span className="ig-num">I</span>
            <span className="ig-tipo">Tesis</span>
            <h3 className="ig-title">
              IA como co-piloto comercial, no como reemplazo
            </h3>
            <p className="ig-text">
              Las organizaciones que ganan no son las que automatizan más, sino
              las que usan IA para ver lo que no podían ver antes. Una tesis
              sobre decisión asistida.
            </p>
          </div>
          <div className="glass-card idea-glass reveal reveal-d1">
            <span className="ig-num">II</span>
            <span className="ig-tipo">Marco</span>
            <h3 className="ig-title">El ecosistema como ventaja competitiva</h3>
            <p className="ig-text">
              Un sitio web no es un canal. Es el reflejo de si una empresa tiene
              estructura operativa real detrás. Por qué el cómo se conecta importa
              más.
            </p>
          </div>
          <div className="glass-card idea-glass reveal reveal-d2">
            <span className="ig-num">III</span>
            <span className="ig-tipo">Metodología</span>
            <h3 className="ig-title">Auditar antes de escalar</h3>
            <p className="ig-text">
              Escalar sin diagnóstico es multiplicar el caos. Metodología de
              diagnóstico comercial que usamos antes de recomendar cualquier
              acción.
            </p>
          </div>
        </div>
      </section>

      <section id="clientes">
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: "10px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--accent)",
            textAlign: "center",
            marginBottom: "32px",
            display: "block",
          }}
        >
          Organizaciones con las que trabajamos
        </p>
        <div className="clients-flex reveal">
          <span className="cl-item">Innovatech</span>
          <span className="cl-item">GrupoSur</span>
          <span className="cl-item">DataFarm</span>
          <span className="cl-item">NexoSalud</span>
          <span className="cl-item">UrbanLog</span>
          <span className="cl-item">Tectum</span>
          <span className="cl-item">KineticAI</span>
          <span className="cl-item">Mercat</span>
        </div>
      </section>

      <section id="contacto">
        <div className="contact-layout">
          <div className="ct-left reveal">
            <h2>
              Antes de invertir,
              <br />
              <em>diagnosticamos.</em>
            </h2>
            <p>
              Cada proceso comienza con una auditoría gratuita de 45 minutos. Sin
              compromiso — solo claridad sobre si podemos ayudarte y cómo.
            </p>
            <div className="ct-steps">
              <div className="ct-step">
                <span className="ct-step-num">01</span>
                <span className="ct-step-text">Completás el formulario</span>
              </div>
              <div className="ct-step">
                <span className="ct-step-num">02</span>
                <span className="ct-step-text">Te contactamos en 24hs</span>
              </div>
              <div className="ct-step">
                <span className="ct-step-num">03</span>
                <span className="ct-step-text">
                  Auditoría estratégica inicial gratuita
                </span>
              </div>
            </div>
          </div>
          <div className="reveal reveal-d2">
            {!formSubmitted ? (
              <div id="form-wrap-c">
                <form className="aura-form" onSubmit={submitFormC}>
                  <div className="af-row">
                    <div className="af-field">
                      <label>Nombre</label>
                      <input type="text" required placeholder="Tu nombre" />
                    </div>
                    <div className="af-field">
                      <label>Empresa</label>
                      <input type="text" placeholder="Tu organización" />
                    </div>
                  </div>
                  <div className="af-field">
                    <label>Email</label>
                    <input type="email" required placeholder="tu@empresa.com" />
                  </div>
                  <div className="af-field">
                    <label>¿Qué querés resolver?</label>
                    <select>
                      <option value="">Seleccioná un módulo</option>
                      <option>Auditoría Estratégica 1 a 1</option>
                      <option>Ecosistemas Web y Canales Digitales</option>
                      <option>Gestión e Inteligencia Operativa</option>
                      <option>No sé por dónde empezar</option>
                    </select>
                  </div>
                  <div className="af-field">
                    <label>Contexto (opcional)</label>
                    <textarea
                      rows={3}
                      placeholder="Contanos brevemente el desafío de tu organización..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-aura-submit">
                    Enviar y agendar diagnóstico →
                  </button>
                  <p className="af-note">
                    Sin spam. Sin compromiso. Tu información es confidencial.
                  </p>
                </form>
              </div>
            ) : (
              <div className="aura-success" style={{ display: "block" }}>
                <span className="star-big">✦</span>
                <h3>Mensaje recibido.</h3>
                <p>Te contactamos en las próximas 24 horas hábiles.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer>
        <div className="ft-logo">
          Be StarLight <span>✦</span>
        </div>
        <div className="ft-links">
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#contacto">Contacto</a>
        </div>
        <p className="ft-copy">
          Marketing & Comunicación Tech · Buenos Aires · 2025
        </p>
      </footer>
    </div>
  );
}
