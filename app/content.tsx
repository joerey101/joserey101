export const content = {
    es: {
        header: {
            work: "Trabajo",
            capabilities: "Capacidades",
            studio: "Estudio",
            hire: "Contrátanos"
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
            cta: "Iniciar Ahora"
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
                    title: "OSCAR ACADEMY AWARD",
                    subtitle: "Infraestructura Digital para Productoras de Élite",
                    slug: "oscar-academy-award",
                    tag: "CULTURA",
                    tagDisplay: "CULTURA",
                    img: "/assets/img/haddock.png",
                    color: "bg-neon-pink",
                    keyMetrics: [
                        { value: "40%", label: "Interacción" },
                        { value: "Oscar", label: "Legacy" },
                        { value: "4K", label: "Video" }
                    ],
                    techStack: ["React", "Motion", "Nex.js"],
                    details: {
                        challenge: "Modernizar la presencia digital de una productora ganadora del Oscar sin perder su legado histórico.",
                        solution: "Desarrollo de un sitio web inmersivo tipo 'archivo vivo', utilizando Next.js para una carga instantánea de portfolios de video de alta resolución.",
                        impact: "Aumento del 40% en consultas internacionales y una plataforma escalable para nuevos lanzamientos."
                    }
                },
                {
                    id: 2,
                    title: "LÍDER INDUSTRIAL LATAM",
                    subtitle: "Arquitectura de Negocios Corporativa",
                    slug: "lider-industrial-latam",
                    tag: "CORPORATIVO",
                    tagDisplay: "CORPORATIVO",
                    img: "/assets/img/mirgor.png",
                    color: "bg-electric-blue",
                    keyMetrics: [
                        { value: "60%", label: "Eficiencia" },
                        { value: "SAP", label: "Sync" },
                        { value: "Multi", label: "Tenant" }
                    ],
                    techStack: ["System Design", "CMS", "Data"],
                    details: {
                        challenge: "Unificar la comunicación de un conglomerado industrial con múltiples unidades de negocio bajo una sola identidad digital coherente.",
                        solution: "Implementación de un sistema de diseño atomizado y un CMS headless para gestionar contenido corporativo complejo.",
                        impact: "Reducción del 60% en tiempos de actualización de contenido y mejora en la percepción de marca ante inversionistas."
                    }
                },
                {
                    id: 3,
                    title: "+50.000 ALUMNOS CONECTADOS",
                    subtitle: "Ecosistema Educativo de Alto Tráfico",
                    slug: "ucasal-alumnos-conectados",
                    tag: "EDUCACIÓN",
                    tagDisplay: "EDUCACIÓN",
                    img: "/assets/img/ucasal.png",
                    color: "bg-acid-green",
                    keyMetrics: [
                        { value: "50k+", label: "Alumnos" },
                        { value: "0%", label: "Downtime" },
                        { value: "AWS", label: "Cloud" }
                    ],
                    techStack: ["Cloud", "Scaling", "Database"],
                    details: {
                        challenge: "Soportar picos de tráfico de 50k+ usuarios concurrentes durante inscripciones y exámenes.",
                        solution: "Arquitectura cloud-native en AWS con auto-scaling y optimización de base de datos para alta disponibilidad.",
                        impact: "0% de tiempo de inactividad durante los períodos críticos del año académico 2024."
                    }
                },
                {
                    id: 4,
                    title: "OPERACIÓN USA - LATAM",
                    subtitle: "Logística Cross-Border y LLCs",
                    slug: "operacion-usa-latam",
                    tag: "E-COMMERCE",
                    tagDisplay: "E-COMMERCE",
                    img: "/assets/img/columba.png",
                    color: "bg-vibrant-orange",
                    keyMetrics: [
                        { value: "80%", label: "Automatización" },
                        { value: "USA", label: "Market" },
                        { value: "Cross", label: "Border" }
                    ],
                    techStack: ["Logistics", "API", "LLC"],
                    details: {
                        challenge: "Simplificar la complejidad operativa y legal del comercio transfronterizo para usuarios finales.",
                        solution: "Plataforma de autogestión con integración de APIs de logística y seguimiento en tiempo real.",
                        impact: "Automatización del 80% de las consultas de seguimiento y expansión exitosa al mercado estadounidense."
                    }
                }
            ]
        },
        footer: {
            label: "CONEXIÓN // 2024 // LISTO PARA EL FUTURO",
            title: <>El Futuro es Ahora.<br /><span className="text-white">Evolucioná tu negocio.</span></>,
            desc: "Convertimos tu visión en un activo digital con ingeniería, medición y foco en los detalles.",
            cta: "Hablemos",
            links: ["LinkedIn", "Twitter / X", "Read.cv"],
            copyright: <>© 2024 JOSEREY STUDIO<br />DISEÑADO EN EL VACÍO<br />TODOS LOS DERECHOS RESERVADOS</>
        }
    },
    en: {
        header: {
            work: "Work",
            capabilities: "Capabilities",
            studio: "Studio",
            hire: "Hire Us"
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
            cta: "Start Now"
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
                    title: "OSCAR ACADEMY AWARD",
                    subtitle: "Digital Infrastructure for Elite Producers",
                    slug: "oscar-academy-award",
                    tag: "CULTURA",
                    tagDisplay: "CULTURE",
                    img: "/assets/img/haddock.png",
                    color: "bg-neon-pink",
                    keyMetrics: [
                        { value: "40%", label: "Engagement" },
                        { value: "Oscar", label: "Legacy" },
                        { value: "4K", label: "Video" }
                    ],
                    techStack: ["React", "Motion", "Next.js"],
                    details: {
                        challenge: "Modernize the digital presence of an Oscar-winning production company without losing its historical legacy.",
                        solution: "Development of an immersive 'living archive' website, using Next.js for instant loading of high-resolution video portfolios.",
                        impact: "40% increase in international inquiries and a scalable platform for new releases."
                    }
                },
                {
                    id: 2,
                    title: "LATAM INDUSTRIAL LEADER",
                    subtitle: "Corporate Business Architecture",
                    slug: "lider-industrial-latam",
                    tag: "CORPORATIVO",
                    tagDisplay: "CORPORATE",
                    img: "/assets/img/mirgor.png",
                    color: "bg-electric-blue",
                    keyMetrics: [
                        { value: "60%", label: "Efficiency" },
                        { value: "SAP", label: "Sync" },
                        { value: "Multi", label: "Tenant" }
                    ],
                    techStack: ["System Design", "CMS", "Data"],
                    details: {
                        challenge: "Unify the communication of an industrial conglomerate with multiple business units under a single coherent digital identity.",
                        solution: "Implementation of an atomic design system and a headless CMS to manage complex corporate content.",
                        impact: "60% reduction in content update times and improved brand perception for investors."
                    }
                },
                {
                    id: 3,
                    title: "+50.000 CONNECTED STUDENTS",
                    subtitle: "High Traffic Educational Ecosystem",
                    slug: "ucasal-alumnos-conectados",
                    tag: "EDUCACIÓN",
                    tagDisplay: "EDUCATION",
                    img: "/assets/img/ucasal.png",
                    color: "bg-acid-green",
                    keyMetrics: [
                        { value: "50k+", label: "Students" },
                        { value: "0%", label: "Downtime" },
                        { value: "AWS", label: "Cloud" }
                    ],
                    techStack: ["Cloud", "Scaling", "Database"],
                    details: {
                        challenge: "Support traffic peaks of 50k+ concurrent users during registrations and exams.",
                        solution: "Cloud-native architecture on AWS with auto-scaling and database optimization for high availability.",
                        impact: "0% downtime during critical academic periods of 2024."
                    }
                },
                {
                    id: 4,
                    title: "USA - LATAM OPERATION",
                    subtitle: "Cross-Border Logistics and LLCs",
                    slug: "operacion-usa-latam",
                    tag: "E-COMMERCE",
                    tagDisplay: "E-COMMERCE",
                    img: "/assets/img/columba.png",
                    color: "bg-vibrant-orange",
                    keyMetrics: [
                        { value: "80%", label: "Automation" },
                        { value: "USA", label: "Market" },
                        { value: "Cross", label: "Border" }
                    ],
                    techStack: ["Logistics", "API", "LLC"],
                    details: {
                        challenge: "Simplify the operational and legal complexity of cross-border trade for end users.",
                        solution: "Self-management platform with integration of logistics APIs and real-time tracking.",
                        impact: "80% automation of tracking inquiries and successful expansion into the US market."
                    }
                }
            ]
        },
        footer: {
            label: "CONNECTION // 2024 // READY FOR THE FUTURE",
            title: <>The Future is Now.<br /><span className="text-white">Evolve your business.</span></>,
            desc: "We convert your vision into a digital asset with engineering, measurement, and focus on details.",
            cta: "Let's Talk",
            links: ["LinkedIn", "Twitter / X", "Read.cv"],
            copyright: <>© 2024 JOSEREY STUDIO<br />DESIGNED IN THE VOID<br />ALL RIGHTS RESERVED</>
        }
    }
};

export function getCaseStudyBySlug(slug: string, lang: "es" | "en") {
    const items = content[lang].selectedWork.items;
    return items.find(item => item.slug === slug) || null;
}

export function getCaseStudyById(id: string, lang: "es" | "en") {
    const items = content[lang].selectedWork.items as any[];
    return items.find(item => item.id?.toString() === id || item.slug === id) || null;
}
