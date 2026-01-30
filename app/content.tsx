// --- INTERFACES ---

export interface KeyMetric {
    value: string;
    label: string;
}

export interface CaseStudyDetails {
    challenge: string;
    solution: string;
    impact: string;
}

export interface CaseStudy {
    id: number | string;
    title: string;
    subtitle: string;
    slug: string;
    tagDisplay: string;
    tag: string;
    img: string;
    color: string;
    borderColor?: string;
    videoUrl?: string;
    keyMetrics?: KeyMetric[];
    techStack?: string[];
    cta?: {
        text: string;
        url: string;
    };
    details?: CaseStudyDetails;
    extended?: {
        intro: string;
        body: string;
    };
}

export const content = {
    es: {
        header: {
            work: "Trabajo",
            capabilities: "Capacidades",
            studio: "Estudio",
            hire: "HABLEMOS"
        },
        hero: {
            typingWords: ["Convencional", "Rígida", "Burocrática"],
            label: "Redefiniendo la Autoridad Digital",
            logic: "LÓGICA",
            weCreate: "Creamos",
            strategy: "ESTRATEGIA",
            systems: "SISTEMAS",
            digitalMind: "MENTE DIGITAL",
            desc: (
                <>
                    <strong className="text-carbon block mb-2">Trabajamos sobre los fundamentos esenciales: Personas, Procesos y Datos.</strong>
                    Unificamos Marketing Estratégico, Ingeniería, Operaciones y Cultura bajo una misma arquitectura.
                </>
            ),
            descMobile: "Unificamos Marketing, Ingeniería y Cultura. Transformamos visiones en sistemas escalables.",
            cta: "Descúbranos"
        },
        blueprints: {
            title: "INGENIERÍA DE MERCADO",
            subtitle: "Competencias Clave / 001-003",
            items: [
                {
                    id: 1,
                    title: "ARQUITECTURA DE NEGOCIO",
                    subtitle: "PENSAMIENTO SISTÉMICO Y POSICIONAMIENTO 101",
                    desc: "No hacemos 'branding' decorativo. Diseñamos la estructura comercial y la narrativa de marca necesarias para penetrar mercados saturados. Definimos el norte estratégico y la viabilidad económica antes de escribir una sola línea de código."
                },
                {
                    id: 2,
                    title: "INGENIERÍA DE SISTEMAS",
                    subtitle: "FLUJOS GENERATIVOS Y AUTOMATIZACIÓN (AGENTS)",
                    desc: "Desarrollo de software a medida potenciado por Inteligencia Artificial. Creamos ecosistemas digitales que trabajan 24/7, eliminando tareas repetitivas y reduciendo la fricción operativa a cero. Tecnología invisible, resultados tangibles."
                },
                {
                    id: 3,
                    title: "OPERACIONES & DATA",
                    subtitle: "ENFOQUE DATA-DRIVEN Y ESCALABILIDAD",
                    desc: "Lo que no se mide, no existe. Transformamos la intuición en certeza mediante tableros de control y métricas en tiempo real. Diseñamos la infraestructura operativa necesaria para soportar un crecimiento masivo sin generar caos interno."
                }
            ]
        },
        deepDive: {
            titleMain: "¿Lo ",
            titleHighlight: "viste?",
            titleSub: "Ahora ",
            titleSubHighlight: "hazlo.",
            desc: "La estrategia es solo ruido sin ejecución. Convierte la visión en sistema hoy mismo.",
            cta: "Hablemos de tu empresa"
        },
        selectedWork: {
            title: <>Casos de<br />Estudio</>,
            filters: {
                all: "Todos",
                corp: "Corporativo",
                ecom: "E-Commerce",
                culture: "Cultura & Educación"
            },
            items: [
                {
                    id: 1,
                    title: "MUAK.SHOP",
                    subtitle: "Ecommerce Internacional de Joyas",
                    slug: "muak-shop",
                    videoUrl: "/assets/img/muak.mp4",
                    tag: "E-COMMERCE",
                    tagDisplay: "E-COMMERCE",
                    img: "/assets/img/Muak-shop.webp",
                    color: "bg-lime-400",
                    borderColor: "border-lime-400",
                    keyMetrics: [
                        { value: "SUIZA", label: "Base" },
                        { value: "Shopify", label: "Core" },
                        { value: "Global", label: "Alcance" }
                    ],
                    techStack: ["Web", "Diseño", "Branding"],
                    cta: {
                        text: "Ver caso completo",
                        url: "https://muak.shop"
                    },
                    details: {
                        challenge: "Desarrollar una marca digital que no parezca un 'template'. Crear una experiencia de compra internacional con lógica de personalización compleja y estándares estéticos suizos.",
                        solution: "Arquitectura Headless híbrida: Shopify para el checkout seguro + Next.js para la experiencia de marca inmersiva. Un sistema visual que comunica lujo accesible.",
                        impact: "Lanzamiento global inmediato. La marca se percibe como una entidad establecida, no como un experimento, ganando tracción en mercado europeo."
                    }
                },
                {
                    id: 2,
                    title: "SEGUE YACHTS",
                    subtitle: "Experiencia Digital Premium",
                    slug: "segue-yachts",
                    tag: "BRANDING / DISEÑO",
                    tagDisplay: "BRANDING / DISEÑO",
                    img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2600&auto=format&fit=crop",
                    color: "bg-fuchsia-600",
                    borderColor: "border-fuchsia-600",
                    videoUrl: "/assets/img/Segue-X6.mp4",
                    keyMetrics: [
                        { value: "50+", label: "Años" },
                        { value: "X - XS", label: "Series" },
                        { value: "Global", label: "Brand" }
                    ],
                    techStack: ["Web", "Diseño", "Branding"],
                    cta: {
                        text: "Ver caso completo",
                        url: "https://discover.segueyachts.com/"
                    },
                    details: {
                        challenge: "Traducir la majestuosidad, la escala y el diseño de Segue Yachts al lenguaje digital, construyendo un primer punto de contacto de alto nivel.",
                        solution: "Landing page concebida como expresión viva de la marca: narrativa visual, ritmo editorial y foco en el detalle. Arquitectura moderna para lograr fluidez absoluta.",
                        impact: "Punto de entrada sólido al mundo digital. Diseñada para captar interés internacional y transformar audiencia en oportunidades de contacto real."
                    }
                },
                {
                    id: 3,
                    title: "HADDOCK FILMS",
                    subtitle: "Productora Ganadora del Oscar",
                    slug: "haddock-films",
                    videoUrl: "/assets/img/Haddock-Home.mp4",
                    tag: "WEB / PLATAFORMA",
                    tagDisplay: "WEB / PLATAFORMA",
                    img: "/assets/img/haddock.png",
                    color: "bg-blue-600",
                    borderColor: "border-blue-600",
                    keyMetrics: [
                        { value: "OSCAR", label: "Winner" },
                        { value: "Netflix", label: "Partner" },
                        { value: "Global", label: "Reach" }
                    ],
                    techStack: ["Web", "Diseño"],
                    cta: {
                        text: "Ver caso completo",
                        url: "https://haddockfilms.com"
                    },
                    details: {
                        challenge: "Construir una web institucional capaz de representar el prestigio y la diversidad del trabajo de Haddock Films, organizando un amplio catálogo sin perder fuerza narrativa.",
                        solution: "Experiencia digital con enfoque editorial. Cada producción cuenta con su propia ficha inmersiva, permitiendo recorrer la trayectoria del estudio de forma cinematográfica.",
                        impact: "Plataforma digital que acompaña su crecimiento internacional y funciona como carta de presentación sólida frente a socios globales."
                    }
                },
                {
                    id: 4,
                    title: "COLUMBA STORE",
                    subtitle: "Sabores Argentinos al Mundo",
                    slug: "columba-store",
                    tag: "E-COMMERCE",
                    tagDisplay: "E-COMMERCE",
                    img: "/assets/img/Colmba_store_main.webp",
                    color: "bg-lime-400",
                    borderColor: "border-lime-400",
                    keyMetrics: [
                        { value: "USA", label: "Market" },
                        { value: "FedEx", label: "Logistics" },
                        { value: "Shopify", label: "Core" }
                    ],
                    techStack: ["Estrategia", "Web", "Diseño", "Branding"],
                    cta: {
                        text: "Ver caso completo",
                        url: "https://columbastore.com/"
                    },
                    details: {
                        challenge: "Crear una tienda online capaz de conectar emocionalmente con argentinos viviendo en el exterior, transformando la nostalgia en una experiencia de compra confiable.",
                        solution: "Ecommerce internacional sobre Shopify con identidad visual clara e integración de checkout optimizado y sincronización logística real con FedEx.",
                        impact: "Posicionamiento inmediato como punto de encuentro entre cultura y producto. Experiencia de compra que conecta emocionalmente y funciona eficientemente."
                    }
                },
                {
                    id: 5,
                    title: "NBS BAZAR PROFESIONAL",
                    subtitle: "Digitalización Comercial B2B",
                    slug: "nbs-bazar-profesional",
                    tag: "ESTRATEGIA / SISTEMA",
                    tagDisplay: "ESTRATEGIA / SISTEMA",
                    img: "/assets/img/NBS Bazar Profesional.webp",
                    color: "bg-amber-400",
                    borderColor: "border-amber-400",
                    keyMetrics: [
                        { value: "20+", label: "Años" },
                        { value: "B2B", label: "Focus" },
                        { value: "Leads", label: "Core" }
                    ],
                    techStack: ["B2B", "Web", "Diseño", "Branding"],
                    cta: {
                        text: "Ver caso completo",
                        url: "https://www.nbsbazar.com/"
                    },
                    details: {
                        challenge: "Acompañar la transformación digital de una empresa con más de dos décadas de trayectoria, unificando miles de SKUs en una plataforma coherente.",
                        solution: "Arquitectura digital robusta integrando Tienda Nube con una estrategia SEO y CRM personalizada para captación B2B.",
                        impact: "Activo digital que organiza su oferta comercial, facilita la autogestión de clientes y mejora el posicionamiento orgánico en el sector."
                    }
                },
                {
                    id: 6,
                    title: "GATE PRIORITY",
                    subtitle: "Logística Corporativa",
                    slug: "gate-priority",
                    tag: "WEB / PLATAFORMA",
                    tagDisplay: "WEB / PLATAFORMA",
                    img: "/assets/img/ucasal.png",
                    color: "bg-blue-600",
                    borderColor: "border-blue-600",
                    videoUrl: "/assets/img/Gate-Priority.mp4",
                    keyMetrics: [
                        { value: "SaaS", label: "Model" },
                        { value: "Logistics", label: "Sector" },
                        { value: "Corp", label: "Target" }
                    ],
                    techStack: ["B2B", "Web", "Diseño"],
                    cta: {
                        text: "Ver caso completo",
                        url: "https://gatepriority.com/"
                    },
                    details: {
                        challenge: "Comunicar un servicio intangible y exclusivo transmitiendo confianza, seguridad y premiumness en una sola landing page destinada a la conversión.",
                        solution: "Arquitectura de información clara sobre WordPress, con foco en la propuesta de valor y facilidad de contacto mediante formularios orientados a la captación.",
                        impact: "Canal digital profesional que valida su promesa de servicio y facilita la captación de clientes corporativos."
                    }
                },
                {
                    id: 7,
                    title: "CAIC",
                    subtitle: "Cámara Industria Cinematográfica",
                    slug: "caic-cine",
                    tag: "WEB / PLATAFORMA",
                    tagDisplay: "WEB / PLATAFORMA",
                    img: "/assets/img/haddock.png",
                    color: "bg-blue-600",
                    borderColor: "border-blue-600",
                    videoUrl: "/assets/img/CAIC-2026.mp4",
                    keyMetrics: [
                        { value: "Cine", label: "Industry" },
                        { value: "Global", label: "Reach" },
                        { value: "Oscar", label: "Rep" }
                    ],
                    techStack: ["Web", "Diseño"],
                    cta: {
                        text: "Ver caso completo",
                        url: "https://caic-cine.org.ar/"
                    },
                    details: {
                        challenge: "Representar digitalmente a una cámara que nuclea a las principales productoras del país, comunicando prestigio y capacidad productiva.",
                        solution: "Plataforma institucional que funciona como vidriera de la industria, organizando la información y facilitando el contacto internacional.",
                        impact: "Canal digital que fortalece su rol institucional y actúa como punto de entrada para vínculos y proyectos globales."
                    }
                },
                {
                    id: 8,
                    title: "PUNTO 360",
                    subtitle: "Estudio de Producción Visual",
                    slug: "punto-360",
                    tag: "BRANDING / DISEÑO",
                    tagDisplay: "BRANDING / DISEÑO",
                    img: "/assets/img/Punto360-Desarrollo.webp",
                    color: "bg-fuchsia-600",
                    borderColor: "border-fuchsia-600",
                    keyMetrics: [
                        { value: "20+", label: "Años" },
                        { value: "Visual", label: "Core" },
                        { value: "Ads", label: "Integr" }
                    ],
                    techStack: ["B2B", "Estrategia", "Web", "Diseño"],
                    cta: {
                        text: "Ver caso completo",
                        url: "https://punto360.com.ar/"
                    },
                    details: {
                        challenge: "Mantener un estándar visual alto a lo largo del tiempo, adaptándose a nuevos formatos de performance sin perder calidad ni identidad.",
                        solution: "Plataforma digital que refleja la calidad de su trabajo visual y facilita el contacto con clientes mediante una navegación fluida.",
                        impact: "Posicionamiento como uno de los principales estudios del sector, reflejando solidez y capacidad de adaptación."
                    }
                }
            ]
        },
        footer: {
            label: "CONEXIÓN // 2024 // LISTO PARA EL FUTURO",
            title: <>El Futuro es Ahora.<br /><span className="text-white">Evolucioná tu negocio.</span></>,
            desc: "Convertimos tu visión en un activo digital con ingeniería, medición y foco en los detalles.",
            cta: "Hablemos",
            links: ["LinkedIn"],
            copyright: <>© 2024 JOSEREY STUDIO<br />DISEÑADO EN EL VACÍO<br />TODOS LOS DERECHOS RESERVADOS</>
        }
    },
    en: {
        header: {
            work: "Work",
            capabilities: "Capabilities",
            studio: "Studio",
            hire: "LET'S TALK"
        },
        hero: {
            typingWords: ["Conventional", "Rigid", "Bureaucratic"],
            label: "Redefining Digital Authority",
            logic: "LOGIC",
            weCreate: "We Create",
            strategy: "STRATEGY",
            systems: "SYSTEMS",
            digitalMind: "DIGITAL MIND",
            desc: (
                <>
                    <strong className="text-carbon block mb-2">We work on the essential foundations: People, Processes, and Data.</strong>
                    We unify Strategic Marketing, Engineering, Operations, and Culture under a single architecture.
                </>
            ),
            descMobile: "We unify Marketing, Engineering, and Culture. We transform visions into scalable systems.",
            cta: "Discover Us"
        },
        blueprints: {
            title: "MARKET ENGINEERING",
            subtitle: "Key Competencies / 001-003",
            items: [
                {
                    id: 1,
                    title: "BUSINESS ARCHITECTURE",
                    subtitle: "SYSTEMIC THINKING AND POSITIONING 101",
                    desc: "We don't do decorative 'branding'. We design the commercial structure and brand narrative needed to penetrate saturated markets. We define the strategic north and economic viability before writing a single line of code."
                },
                {
                    id: 2,
                    title: "SYSTEMS ENGINEERING",
                    subtitle: "GENERATIVE FLOWS AND AUTOMATION (AGENTS)",
                    desc: "Custom software development powered by Artificial Intelligence. We create digital ecosystems that work 24/7, eliminating repetitive tasks and reducing operational friction to zero. Invisible technology, tangible results."
                },
                {
                    id: 3,
                    title: "OPERATIONS & DATA",
                    subtitle: "DATA-DRIVEN APPROACH AND SCALABILITY",
                    desc: "What isn't measured doesn't exist. We transform intuition into certainty through control dashboards and real-time metrics. We design the operational infrastructure needed to support massive growth without generating internal chaos."
                }
            ]
        },
        deepDive: {
            titleMain: "Seen ",
            titleHighlight: "it?",
            titleSub: "Now ",
            titleSubHighlight: "do it.",
            desc: "Strategy is just noise without execution. Turn vision into system today.",
            cta: "Let's talk about your business"
        },
        selectedWork: {
            title: <>Case<br />Studies</>,
            filters: {
                all: "All",
                corp: "Corporate",
                ecom: "E-Commerce",
                culture: "Culture & Education"
            },
            items: [
                {
                    id: 1,
                    title: "MUAK.SHOP",
                    subtitle: "International Jewelry Ecommerce",
                    slug: "muak-shop",
                    videoUrl: "/assets/img/muak.mp4",
                    tag: "E-COMMERCE",
                    tagDisplay: "E-COMMERCE",
                    img: "/assets/img/Muak-shop.webp",
                    color: "bg-lime-400",
                    borderColor: "border-lime-400",
                    keyMetrics: [
                        { value: "SWITZ.", label: "Base" },
                        { value: "Shopify", label: "Core" },
                        { value: "Global", label: "Reach" }
                    ],
                    techStack: ["Web", "Design", "Branding"],
                    cta: {
                        text: "View full case",
                        url: "https://muak.shop"
                    },
                    details: {
                        challenge: "Develop a digital brand that doesn't look like a 'template'. Create an international shopping experience with complex customization logic and Swiss aesthetic standards.",
                        solution: "Hybrid Headless Architecture: Shopify for secure checkout + Next.js for immersive brand experience. A visual system that communicates accessible luxury.",
                        impact: "Immediate global launch. The brand is perceived as an established entity, not an experiment, gaining traction in the European market."
                    }
                },
                {
                    id: 2,
                    title: "SEGUE YACHTS",
                    subtitle: "Premium Digital Experience",
                    slug: "segue-yachts",
                    tag: "BRANDING / DESIGN",
                    tagDisplay: "BRANDING / DESIGN",
                    img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2600&auto=format&fit=crop",
                    color: "bg-fuchsia-600",
                    borderColor: "border-fuchsia-600",
                    videoUrl: "/assets/img/Segue-X6.mp4",
                    keyMetrics: [
                        { value: "50+", label: "Years" },
                        { value: "X - XS", label: "Series" },
                        { value: "Global", label: "Brand" }
                    ],
                    techStack: ["Web", "Design", "Branding"],
                    cta: {
                        text: "View full case",
                        url: "https://discover.segueyachts.com/"
                    },
                    details: {
                        challenge: "Translate the majesty, scale, and design of Segue Yachts into digital language, building a high-level first point of contact.",
                        solution: "A landing page conceived as a living expression of the brand: visual narrative, editorial rhythm, and focus on detail. Modern architecture for absolute fluidity.",
                        impact: "Solid entry point to the digital world. Designed to capture international interest and transform audience into real contact opportunities."
                    }
                },
                {
                    id: 3,
                    title: "HADDOCK FILMS",
                    subtitle: "Oscar-Winning Production Company",
                    slug: "haddock-films",
                    videoUrl: "/assets/img/Haddock-Home.mp4",
                    tag: "WEB / PLATFORM",
                    tagDisplay: "WEB / PLATFORM",
                    img: "/assets/img/haddock.png",
                    color: "bg-blue-600",
                    borderColor: "border-blue-600",
                    keyMetrics: [
                        { value: "OSCAR", label: "Winner" },
                        { value: "Netflix", label: "Partner" },
                        { value: "Global", label: "Reach" }
                    ],
                    techStack: ["Web", "Design"],
                    cta: {
                        text: "View full case",
                        url: "https://haddockfilms.com"
                    },
                    details: {
                        challenge: "Build an institutional website capable of representing the prestige and diversity of Haddock Films' work, organizing a vast catalog without losing narrative force.",
                        solution: "Digital experience with an editorial focus. Each production has its own immersive sheet, allowing visitors to explore the studio's history cinematically.",
                        impact: "Digital platform that accompanies its international growth and works as a solid introduction to global partners."
                    }
                },
                {
                    id: 4,
                    title: "COLUMBA STORE",
                    subtitle: "Argentine Flavors to the World",
                    slug: "columba-store",
                    tag: "E-COMMERCE",
                    tagDisplay: "E-COMMERCE",
                    img: "/assets/img/Colmba_store_main.webp",
                    color: "bg-lime-400",
                    borderColor: "border-lime-400",
                    keyMetrics: [
                        { value: "USA", label: "Market" },
                        { value: "FedEx", label: "Logistics" },
                        { value: "Shopify", label: "Core" }
                    ],
                    techStack: ["Strategy", "Web", "Design", "Branding"],
                    cta: {
                        text: "View full case",
                        url: "https://columbastore.com/"
                    },
                    details: {
                        challenge: "Create an online store capable of emotionally connecting with Argentines living abroad, transforming nostalgia into a reliable shopping experience.",
                        solution: "International ecommerce on Shopify with a clear visual identity, optimized checkout integration, and real-time logistics sync with FedEx.",
                        impact: "Immediate positioning as a meeting point between culture and product. A shopping experience that connects emotionally and works efficiently."
                    }
                },
                {
                    id: 5,
                    title: "NBS PROFESSIONAL BAZAR",
                    subtitle: "B2B Commercial Digitalization",
                    slug: "nbs-bazar-profesional",
                    tag: "STRATEGY / SYSTEM",
                    tagDisplay: "STRATEGY / SYSTEM",
                    img: "/assets/img/NBS Bazar Profesional.webp",
                    color: "bg-amber-400",
                    borderColor: "border-amber-400",
                    keyMetrics: [
                        { value: "20+", label: "Years" },
                        { value: "B2B", label: "Focus" },
                        { value: "Leads", label: "Core" }
                    ],
                    techStack: ["B2B", "Web", "Design", "Branding"],
                    cta: {
                        text: "View full case",
                        url: "https://www.nbsbazar.com/"
                    },
                    details: {
                        challenge: "Accompany the digital transformation of a company with over two decades of experience, unifying thousands of SKUs in a coherent platform.",
                        solution: "Robust digital architecture integrating Tienda Nube with a custom SEO and CRM strategy for B2B lead generation.",
                        impact: "Digital asset that organizes its commercial offer, facilitates client self-management, and improves organic positioning in the sector."
                    }
                },
                {
                    id: 6,
                    title: "GATE PRIORITY",
                    subtitle: "Corporate Logistics",
                    slug: "gate-priority",
                    tag: "WEB / PLATFORM",
                    tagDisplay: "WEB / PLATFORM",
                    img: "/assets/img/ucasal.png",
                    color: "bg-blue-600",
                    borderColor: "border-blue-600",
                    videoUrl: "/assets/img/Gate-Priority.mp4",
                    keyMetrics: [
                        { value: "SaaS", label: "Model" },
                        { value: "Logistics", label: "Sector" },
                        { value: "Corp", label: "Target" }
                    ],
                    techStack: ["B2B", "Web", "Design"],
                    cta: {
                        text: "View full case",
                        url: "https://gatepriority.com/"
                    },
                    details: {
                        challenge: "Communicate an intangible and exclusive service by transmitting trust, security, and premiumness in a single landing page designed for conversion.",
                        solution: "Clear information architecture on WordPress, focusing on the value proposition and ease of contact through lead-oriented forms.",
                        impact: "Professional digital platform that validates its service promise and facilitates corporate client acquisition."
                    }
                },
                {
                    id: 7,
                    title: "CAIC",
                    subtitle: "Film Industry Chamber",
                    slug: "caic-cine",
                    tag: "WEB / PLATFORM",
                    tagDisplay: "WEB / PLATFORM",
                    img: "/assets/img/haddock.png",
                    color: "bg-blue-600",
                    borderColor: "border-blue-600",
                    videoUrl: "/assets/img/CAIC-2026.mp4",
                    keyMetrics: [
                        { value: "Cinema", label: "Industry" },
                        { value: "Global", label: "Reach" },
                        { value: "Oscar", label: "Rep" }
                    ],
                    techStack: ["Web", "Design"],
                    cta: {
                        text: "View full case",
                        url: "https://caic-cine.org.ar/"
                    },
                    details: {
                        challenge: "Digitally represent a chamber that brings together the country's main production companies, communicating prestige and productive capacity.",
                        solution: "Institutional platform that serves as an industry showcase, organizing information and facilitating international contact.",
                        impact: "Digital channel that strengthens its institutional role and acts as an entry point for global links and projects."
                    }
                },
                {
                    id: 8,
                    title: "PUNTO 360",
                    subtitle: "Visual Production Studio",
                    slug: "punto-360",
                    tag: "BRANDING / DESIGN",
                    tagDisplay: "BRANDING / DESIGN",
                    img: "/assets/img/Punto360-Desarrollo.webp",
                    color: "bg-fuchsia-600",
                    borderColor: "border-fuchsia-600",
                    keyMetrics: [
                        { value: "20+", label: "Years" },
                        { value: "Visual", label: "Core" },
                        { value: "Ads", label: "Integr" }
                    ],
                    techStack: ["B2B", "Strategy", "Web", "Design"],
                    cta: {
                        text: "View full case",
                        url: "https://punto360.com.ar/"
                    },
                    details: {
                        challenge: "Maintain a high visual standard over time, adapting to new performance formats without losing quality or identity.",
                        solution: "Digital platform that reflects the quality of its visual work and facilitates client contact through fluid navigation.",
                        impact: "Positioning as one of the sector's main studios, reflecting solidity and adaptability."
                    }
                }
            ]
        },
        footer: {
            label: "CONNECTION // 2024 // READY FOR THE FUTURE",
            title: <>The Future is Now.<br /><span className="text-white">Evolve your business.</span></>,
            desc: "We convert your vision into a digital asset with engineering, measurement, and focus on details.",
            cta: "Let's Talk",
            links: ["LinkedIn"],
            copyright: <>© 2024 JOSEREY STUDIO<br />DESIGNED IN THE VOID<br />ALL RIGHTS RESERVED</>
        }
    }
};

export function getCaseStudyBySlug(slug: string, lang: "es" | "en"): CaseStudy | null {
    const items = content[lang].selectedWork.items as CaseStudy[];
    return items.find(item => item.slug === slug) || null;
}

export function getCaseStudyById(id: string, lang: "es" | "en"): CaseStudy | null {
    const items = content[lang].selectedWork.items as CaseStudy[];
    return items.find(item => item.id?.toString() === id || item.slug === id) || null;
}
