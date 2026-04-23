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
    alt?: string;
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
            label: "Ingeniería de mercado aplicada.",
            logic: "LÓGICA",
            weCreate: "CONSTRUIMOS LA",
            strategy: "INFRAESTRUCTURA",
            systems: "que convierte su operación en una",
            digitalMind: "ventaja competitiva",
            desc: (
                <>
                    <span className="text-white/70 block">Integramos tecnología, estrategia e inteligencia artificial en una arquitectura que funciona.</span>
                </>
            ),
            descMobile: "Integramos tecnología, estrategia e inteligencia artificial en una arquitectura que funciona.",
            cta: "Explorar solución"
        },
        blueprints: {
            title: "INGENIERÍA DE MERCADO",
            subtitle: "Competencias Clave / 001-003",
            items: [
                {
                    id: 1,
                    title: "AUDITORÍA ESTRATÉGICA 1 A 1",
                    subtitle: "Antes de construir, entendemos.",
                    desc: "Inmersión directa en la estructura comercial y operativa de la empresa. Mapeamos ineficiencias, evaluamos viabilidad económica con soporte de IA y definimos el camino exacto hacia la modernización. Sin supuestos, con datos.",
                    cta: "Explorar módulo"
                },
                {
                    id: 2,
                    title: "ECOSISTEMAS WEB Y CANALES DIGITALES",
                    subtitle: "Presencia digital con estructura detrás.",
                    desc: "Desarrollamos plataformas de alto rendimiento conectadas a los flujos de trabajo reales de la organización. Cada canal tiene un propósito medible dentro de la operación comercial.",
                    cta: "Desplegar sistema"
                },
                {
                    id: 3,
                    title: "GESTIÓN E INTELIGENCIA OPERATIVA",
                    subtitle: "De datos dispersos a visión de negocio.",
                    desc: "Unificamos herramientas, procesos y fuentes de información en un sistema de control centralizado. El resultado: visibilidad total sobre la operación y capacidad de respuesta inmediata ante cualquier variable del mercado.",
                    cta: "Ver métricas"
                }
            ]
        },
        deepDive: {
            titleMain: "LA TECNOLOGÍA NO ",
            titleHighlight: "TRANSFORMA ",
            titleSub: "NEGOCIOS. LA ",
            titleSubHighlight: "EJECUCIÓN SÍ.",
            desc: "Convertimos su visión en un sistema que opera, mide y escala.",
            cta: "Agendar diagnóstico"
        },
        laboratorioIA: {
            title: "LABORATORIO IA",
            subtitle: "Donde la producción escala sin que la operación colapse.",
            desc: "Desarrollamos sistemas generativos para la producción automatizada de activos visuales: ambientación de producto, contenido de campaña y personajes virtuales para e-commerce. Reducción real de costos de producción a escala."
        },
        filtroEntrada: {
            title: "No trabajamos con todos. Trabajamos con los que están listos.",
            desc: "Antes de cualquier propuesta, realizamos un diagnóstico inicial para evaluar si existe alineación real entre los objetivos de la empresa y nuestra forma de operar. Si hay match estructural, avanzamos. Si no, lo decimos."
        },
        ctaPrincipal: {
            title: "Primera reunión de diagnóstico — 45 minutos.",
            desc: "Sin presentaciones de venta. Sin promesas. Una conversación estructurada para entender dónde está la empresa hoy y qué necesita para llegar a donde quiere estar. Si hay trabajo para hacer juntos, lo vamos a saber en esa reunión.",
            buttonText: "Agendar diagnóstico →"
        },
        selectedWork: {
            title: <>Casos de<br />Estudio</>,
            filters: {
                all: "Todos",
                corp: "Corporativo",
                ecom: "E-Commerce",
                culture: "Cultura & Educación",
                av: "Producción Audiovisual"
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
                    alt: "E-commerce internacional de joyas Muak Shop - Diseño minimalista suizo",
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
                    alt: "Segue Yachts - Experiencia digital premium para yates de lujo",
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
                    alt: "Haddock Films - Web institucional para productora cinematográfica ganadora del Oscar",
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
                    alt: "Columba Store - E-commerce de productos argentinos con logística internacional",
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
                    alt: "NBS Bazar Profesional - Digitalización comercial y estrategia B2B",
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
                },
                {
                    id: 9,
                    title: "LOGÍSTICA 360",
                    subtitle: "Producción Aérea con Drones",
                    slug: "drones-logistica",
                    tag: "PRODUCCIÓN AV",
                    tagDisplay: "PRODUCCIÓN AV",
                    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2600&auto=format&fit=crop",
                    color: "bg-sky-500",
                    borderColor: "border-sky-500",
                    keyMetrics: [
                        { value: "4K", label: "Resolución" },
                        { value: "Drone", label: "Tech" },
                        { value: "Pyme", label: "Target" }
                    ],
                    techStack: ["Producción AV", "Drones", "Industrial"],
                    alt: "Producción audiovisual con drones para inspección de logística industrial 4K",
                    details: {
                        challenge: "Capturar la escala y complejidad operativa de una planta logística de 50.000 m2 para materiales de marketing institucional.",
                        solution: "Operación de drones de alta precisión en entornos controlados, capturando dinámicas de flujo, almacenamiento y despacho en alta resolución.",
                        impact: "Activo visual de alto impacto para presentaciones comerciales y landing pages, logrando comunicar solidez operativa en segundos."
                    }
                },
                {
                    id: 10,
                    title: "PORTFOLIO B2B",
                    subtitle: "Fotografía Industrial Premium",
                    slug: "fotografia-industrial",
                    tag: "PRODUCCIÓN AV",
                    tagDisplay: "PRODUCCIÓN AV",
                    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2600&auto=format&fit=crop",
                    color: "bg-zinc-800",
                    borderColor: "border-zinc-800",
                    keyMetrics: [
                        { value: "Premium", label: "Calidad" },
                        { value: "FullFrame", label: "Sensor" },
                        { value: "B2B", label: "Focus" }
                    ],
                    techStack: ["Fotografía", "Publicidad", "B2B"],
                    alt: "Fotografía publicitaria de maquinaria industrial y procesos corporativos B2B",
                    details: {
                        challenge: "Humanizar y jerarquizar procesos técnicos e industriales complejos a través de una estética visual cinematográfica.",
                        solution: "Dirección de arte enfocada en el detalle, iluminación controlada en planta y post-producción técnica para catálogos digitales de alta gama.",
                        impact: "Mejora del 40% en la percepción de calidad percibida en canales digitales, alineando la imagen de marca con el rigor de la ingeniería."
                    }
                }
            ]
        },
        footer: {
            label: "CONEXIÓN // 2026 // LISTO PARA EL FUTURO",
            title: <>La tecnología no transforma negocios.<br /><span className="text-white">La ejecución sí.</span></>,
            desc: <>Convertimos su visión en un sistema que opera, mide y escala.</>,
            cta: "Explorar diagnóstico",
            links: ["LinkedIn"],
            copyright: <>© 2001 - 2026 BESTARLIGHT<br />TODOS LOS DERECHOS RESERVADOS</>
        },
        bestarlight: {
            hero: {
                line1: "Ingeniería de",
                line2: "Mercado y",
                line3: "Estrategia B2B.",
                yearTag: "MKTING & COMUNICACIÓN TECH / 2026",
                desc: <>Modernizamos organizaciones que ya funcionan.<br />Diagnóstico real, ecosistemas digitales e inteligencia operativa.</>,
                ctaPrimary: "Agendar diagnóstico",
                ctaSecondary: "Ver casos reales"
            },
            stats: [
                { num: "+340%", label: "conversión promedio" },
                { num: "-60%", label: "tiempo de cierre" },
                { num: "×2.8", label: "ticket promedio" },
                { num: "IA", label: "en cada proceso" }
            ],
            services: {
                label: "Módulos de servicio / 03",
                items: [
                    { id: "01", title: "Consultoría y Estrategia B2B", sub: "Ingeniería de Mercado.", desc: "Inmersión directa en la estructura comercial. Mapeamos ineficiencias, evaluamos viabilidad y definimos el camino real hacia la modernización corporativa." },
                    { id: "02", title: "E-commerce y Ecosistemas Web", sub: "Arquitecturas sólidas y escalables.", desc: "Desarrollamos plataformas de alto rendimiento conectadas a los flujos de trabajo reales de la organización. Especialistas en Shopify, VTEX y desarrollos a medida." },
                    { id: "03", title: "Producción Visual y Drones", sub: "Contenido de alto nivel para marcas B2B.", desc: "Fotografía publicitaria e industrial, cobertura con drones y post-producción profesional. Documentamos la excelencia operativa de su empresa." }
                ]
            },
            casesLabel: "TRABAJOS SELECCIONADOS",
            casesTitle: "Implementaciones reales en entornos complejos.",
            ideas: {
                label: "Ideas que funcionan / 04",
                title: "Estrategia con estructura real detrás.",
                items: [
                    { title: "Estructura", desc: "No hacemos diseño decorativo. Construimos la base técnica para que tu marca pueda escalar sin fricción." },
                    { title: "Velocidad", desc: "Reducimos tiempos de ejecución integrando IA en los flujos de trabajo internos de tu equipo." },
                    { title: "Resultados", desc: "Cada línea de código está orientada a mover la aguja del negocio. Si no es medible, no es prioridad." }
                ]
            },
            contact: {
                title: <>Hablemos de tu<br />próximo paso</>,
                desc: "Estamos listos para auditar tu estructura actual.",
                form: {
                    name: "NOMBRE",
                    company: "EMPRESA",
                    email: "EMAIL",
                    problem: "¿QUÉ QUERÉS RESOLVER?",
                    context: "CONTEXTO (OPCIONAL)",
                    placeholderName: "Tu nombre",
                    placeholderCompany: "Tu organización",
                    placeholderEmail: "tu@empresa.com",
                    placeholderContext: "Contanos brevemente el desafío de tu organización...",
                    selectModule: "Seleccioná un módulo",
                    cta: "Enviar y agendar diagnóstico →",
                    footer: "Sin spam. Sin compromiso. Tu información es confidencial."
                }
            }
        }
    },
    en: {
        header: {
            work: "Work",
            capabilities: "Capabilities",
            studio: "Studio",
            hire: "LET'S TALK"
        },
        blueprints: {
            title: "MARKET ENGINEERING",
            subtitle: "Key Competencies / 001-003",
            items: [
                {
                    id: 1,
                    title: "B2B Consulting & Strategy",
                    subtitle: "MARKET ENGINEERING",
                    desc: "Deep immersion in commercial structures. We map inefficiencies, evaluate feasibility, and define the real path to corporate modernization.",
                    cta: "Explore module"
                },
                {
                    id: 2,
                    title: "E-commerce & Web Ecosystems",
                    subtitle: "ROBUST ARCHITECTURES",
                    desc: "We develop high-performance platforms connected to real organizational workflows. Experts in Shopify, VTEX, and custom developments.",
                    cta: "Deploy system"
                },
                {
                    id: 3,
                    title: "Visual Production & Drones",
                    subtitle: "B2B VISUAL AUTHORITY",
                    desc: "High-level industrial and advertising photography, drone coverage, and professional post-production. Documenting your operational excellence.",
                    cta: "View metrics"
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
        laboratorioIA: {
            title: "AI LAB",
            subtitle: "Scaling production without operational collapse.",
            desc: "We develop generative systems for automated visual asset production: product staging, campaign content, and virtual characters for e-commerce. Real cost reduction at scale."
        },
        filtroEntrada: {
            title: "We don't work with everyone. Only with those ready to scale.",
            desc: "Before any proposal, we perform an initial diagnostic to evaluate alignment between company goals and our operations. If there's a match, we move forward. If not, we'll tell you."
        },
        ctaPrincipal: {
            title: "First Diagnostic Meeting — 45 Minutes.",
            desc: "No sales pitches. No promises. A structured conversation to understand where your company is today and what it needs to reach its goals. If there's work to be done together, we'll find out in this meeting.",
            buttonText: "Schedule Diagnostic →"
        },
        selectedWork: {
            title: <>Case<br />Studies</>,
            filters: {
                all: "All",
                corp: "Corporate",
                ecom: "E-Commerce",
                culture: "Culture & Education",
                av: "AV Production"
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
                    alt: "International jewelry e-commerce Muak Shop - Minimalist Swiss design",
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
                    alt: "Segue Yachts - Premium digital experience for luxury yachts",
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
                    alt: "Haddock Films - Institutional website for Oscar-winning film production company",
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
                    alt: "Columba Store - E-commerce for Argentine products with international logistics",
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
                    alt: "NBS Professional Bazar - Commercial digitalization and B2B strategy",
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
                },
                {
                    id: 9,
                    title: "LOGISTICS 360",
                    subtitle: "Aerial Drone Production",
                    slug: "drones-logistica",
                    tag: "AV PRODUCTION",
                    tagDisplay: "AV PRODUCTION",
                    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2600&auto=format&fit=crop",
                    color: "bg-sky-500",
                    borderColor: "border-sky-500",
                    keyMetrics: [
                        { value: "4K", label: "Resolution" },
                        { value: "Drone", label: "Tech" },
                        { value: "SME", label: "Target" }
                    ],
                    techStack: ["AV Production", "Drones", "Industrial"],
                    alt: "Audiovisual production with drones for 4K industrial logistics inspection",
                    details: {
                        challenge: "Capture the operational scale and complexity of a 50,000 m2 logistics plant for institutional marketing materials.",
                        solution: "High-precision drone operation in controlled environments, capturing flow, storage, and dispatch dynamics in high resolution.",
                        impact: "High-impact visual asset for commercial presentations and landing pages, communicating operational strength in seconds."
                    }
                },
                {
                    id: 10,
                    title: "B2B PORTFOLIO",
                    subtitle: "Premium Industrial Photography",
                    slug: "fotografia-industrial",
                    tag: "AV PRODUCTION",
                    tagDisplay: "AV PRODUCTION",
                    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2600&auto=format&fit=crop",
                    color: "bg-zinc-800",
                    borderColor: "border-zinc-800",
                    keyMetrics: [
                        { value: "Premium", label: "Quality" },
                        { value: "FullFrame", label: "Sensor" },
                        { value: "B2B", label: "Focus" }
                    ],
                    techStack: ["Photography", "Advertising", "B2B"],
                    alt: "Advertising photography of industrial machinery and B2B corporate processes",
                    details: {
                        challenge: "Humanize and elevate complex technical and industrial processes through a cinematic visual aesthetic.",
                        solution: "Art direction focused on detail, controlled lighting in the plant, and technical post-production for high-end digital catalogs.",
                        impact: "40% improvement in perceived quality across digital channels, aligning the brand image with engineering rigor."
                    }
                }
            ]
        },
        footer: {
            label: "CONNECTION // 2026 // READY FOR THE FUTURE",
            title: <>The Future is Now.<br /><span className="text-white">Evolve your business.</span></>,
            desc: <>We convert your vision into a digital asset <br /> with engineering, measurement, and focus on details.</>,
            cta: "Let's Talk",
            links: ["LinkedIn"],
            copyright: <>© 2001 - 2026 BESTARLIGHT<br />ALL RIGHTS RESERVED</>
        },
        hero: {
            typingWords: ["Conventional", "Rigid", "Bureaucratic"],
            label: "B2B STRATEGY",
            title: "Market Engineering",
            desc: "Strategic consulting for the corporate sector.",
            logic: "LOGIC",
            weCreate: "WE CREATE THE",
            strategy: "INFRASTRUCTURE",
            systems: "that turns your operation into a",
            digitalMind: "competitive advantage",
            descMobile: "Strategic consulting for the corporate sector.",
            cta: "Explore solution"
        },
        bestarlight: {
            hero: {
                line1: "Market",
                line2: "Engineering &",
                line3: "B2B Strategy.",
                yearTag: "MKTING & COMMUNICATION TECH / 2026",
                desc: (
                    <>
                        <strong className="text-carbon block mb-2">30 years of experience in corporate restructuring.</strong>
                        We design communication strategy and robust e-commerce architectures for the B2B sector.
                    </>
                ),
                descMobile: "We unify Marketing, Engineering, and Culture. We transform visions into scalable systems.",
                ctaPrimary: "Schedule diagnosis",
                ctaSecondary: "See real cases"
            },
            stats: [
                { num: "+340%", label: "average conversion" },
                { num: "-60%", label: "closing time" },
                { num: "×2.8", label: "average ticket" },
                { num: "AI", label: "in every process" }
            ],
            services: {
                label: "Service Modules / 03",
                items: [
                    { id: "01", title: "B2B Consulting & Strategy", sub: "Market Engineering.", desc: "Deep immersion in commercial structures. We map inefficiencies, evaluate feasibility, and define the real path to corporate modernization." },
                    { id: "02", title: "E-commerce & Web Ecosystems", sub: "Robust and scalable architectures.", desc: "We develop high-performance platforms connected to the organization's real workflows. Specialists in Shopify, VTEX, and custom developments." },
                    { id: "03", title: "Visual Production & Drones", sub: "High-level content for B2B brands.", desc: "Advertising and industrial photography, drone coverage, and professional post-production. Documenting your operational excellence." }
                ]
            },
            casesLabel: "SELECTED WORKS",
            casesTitle: "Real implementations in complex environments.",
            ideas: {
                label: "Ideas that work / 04",
                title: "Strategy with real structure behind.",
                items: [
                    { title: "Structure", desc: "We don't do decorative design. We build the technical foundation so your brand can scale without friction." },
                    { title: "Speed", desc: "We reduce execution times by integrating AI into your team's internal workflows." },
                    { title: "Results", desc: "Every line of code is oriented to move the business needle. If it's not measurable, it's not a priority." }
                ]
            },
            contact: {
                title: <>Let's talk about<br />your next step</>,
                desc: "We are ready to audit your current structure.",
                form: {
                    name: "NAME",
                    company: "COMPANY",
                    email: "EMAIL",
                    problem: "WHAT DO YOU WANT TO SOLVE?",
                    context: "CONTEXT (OPTIONAL)",
                    placeholderName: "Your name",
                    placeholderCompany: "Your organization",
                    placeholderEmail: "you@company.com",
                    placeholderContext: "Briefly tell us about your organization's challenge...",
                    selectModule: "Select a module",
                    cta: "Send and schedule diagnosis →",
                    footer: "No spam. No commitment. Your information is confidential."
                }
            }
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
