export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    tag: string;
    highlight: string;
    subtitle: string;
    snapshot: Array<{ label: string; value: string; }>;
    challenge: string;
    solution: string;
    impact: string;
    ctaText: string;
    url: string;
    isFlagship: boolean;
    hasStandalone: boolean;
    coverImage: string;
    videoUrl?: string;
    color: string;
    borderColor?: string; // Tailwind border color class, e.g., 'border-lime-400'
    techStack?: string[]; // Secondary tags in neutral gray
}

export const CASE_STUDIES: CaseStudy[] = [
    // 1. MUAK
    {
        id: 'muak',
        slug: 'muak-shop',
        title: 'muak.shop',
        tag: 'E-COMMERCE',
        highlight: 'Ecommerce internacional de joyas personalizadas',
        subtitle: 'Una marca de joyas pensada para competir a nivel internacional',
        snapshot: [
            { label: 'Industria', value: 'Moda / Joyas' },
            { label: 'Tipo', value: 'Ecommerce intl' },
            { label: 'Stack', value: 'Next.js / Shopify' },
            { label: 'Alcance', value: 'Global' }
        ],
        challenge: 'Desarrollar una marca digital que no parezca un "template". Crear una experiencia de compra internacional con lógica de personalización compleja y estándares estéticos suizos.',
        solution: 'Arquitectura Headless híbrida: Shopify para el checkout seguro + Next.js para la experiencia de marca inmersiva. Un sistema visual que comunica lujo accesible.',
        impact: 'Lanzamiento global inmediato. La marca se percibe como una entidad establecida, no como un experimento, ganando tracción en mercado europeo.',
        ctaText: 'Ver caso completo',
        url: 'https://muak.shop',
        isFlagship: true,
        hasStandalone: true,
        coverImage: '/assets/img/Muak-shop.webp',
        videoUrl: '/assets/img/muak.mp4',
        color: 'bg-lime-400 text-black',
        borderColor: 'border-lime-400',
        techStack: ['Web', 'Diseño', 'Branding']
    },
    // 2. SEGUE YACHTS
    {
        id: 'segue',
        slug: 'segue-yachts',
        title: 'Segue Yachts',
        tag: 'BRANDING / DISEÑO',
        highlight: 'Landing de lanzamiento X & XS Series',
        subtitle: 'Una experiencia digital a la altura de una marca emblemática',
        snapshot: [
            { label: 'Industria', value: 'Náutica' },
            { label: 'Tipo', value: 'Landing estratégica' },
            { label: 'Stack', value: 'Next.js / React' },
            { label: 'Alcance', value: 'Internacional' }
        ],
        challenge: 'Traducir la majestuosidad, la escala y el diseño de Segue Yachts al lenguaje digital, construyendo un primer punto de contacto de alto nivel.',
        solution: 'Landing page concebida como expresión viva de la marca: narrativa visual, ritmo editorial y foco en el detalle. Arquitectura moderna para lograr fluidez absoluta.',
        impact: 'Punto de entrada sólido al mundo digital. Diseñada para captar interés internacional y transformar audiencia en oportunidades de contacto real.',
        ctaText: 'Ver caso completo',
        url: 'https://discover.segueyachts.com/',
        isFlagship: true,
        hasStandalone: true,
        coverImage: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2600&auto=format&fit=crop',
        videoUrl: '/assets/img/Segue-X6.mp4',
        color: 'bg-fuchsia-600 text-white',
        borderColor: 'border-fuchsia-600',
        techStack: ['Web', 'Diseño', 'Branding']
    },
    // 3. HADDOCK FILMS
    {
        id: 'haddock',
        slug: 'haddock-films',
        title: 'Haddock Films',
        tag: 'WEB / PLATAFORMA',
        highlight: 'Haddock Films: Productora ganadora del Oscar',
        subtitle: 'Una experiencia digital para una productora de alcance internacional',
        snapshot: [
            { label: 'Industria', value: 'Cine / TV' },
            { label: 'Tipo', value: 'Web institucional' },
            { label: 'Premios', value: 'Oscar Winner' },
            { label: 'Alcance', value: 'Internacional' }
        ],
        challenge: 'Construir una web institucional capaz de representar el prestigio y la diversidad del trabajo de Haddock Films, organizando un amplio catálogo sin perder fuerza narrativa.',
        solution: 'Experiencia digital con enfoque editorial. Cada producción cuenta con su propia ficha inmersiva, permitiendo recorrer la trayectoria del estudio de forma cinematográfica.',
        impact: 'Plataforma digital que acompaña su crecimiento internacional y funciona como carta de presentación sólida frente a socios globales.',
        ctaText: 'Ver caso completo',
        url: 'https://haddockfilms.com',
        isFlagship: true,
        hasStandalone: true,
        coverImage: '/assets/img/haddock.png',
        videoUrl: '/assets/img/Haddock-Home.mp4',
        color: 'bg-blue-600 text-white',
        borderColor: 'border-blue-600',
        techStack: ['Web', 'Diseño']
    },
    // 4. COLUMBA STORE
    {
        id: 'columba',
        slug: 'columba-store',
        title: 'Columba Store',
        tag: 'E-COMMERCE',
        highlight: 'Columba Store: Sabores argentinos para el mundo',
        subtitle: 'Una tienda pensada para llevar los sabores de la infancia a cualquier parte del mundo',
        snapshot: [
            { label: 'Industria', value: 'Alimentos / Retail' },
            { label: 'Tipo', value: 'Ecommerce intl' },
            { label: 'Plataforma', value: 'Shopify' },
            { label: 'Alcance', value: 'Global' }
        ],
        challenge: 'Crear una tienda online capaz de conectar emocionalmente con argentinos viviendo en el exterior, transformando la nostalgia en una experiencia de compra confiable.',
        solution: 'Ecommerce internacional sobre Shopify con identidad visual clara e integración de checkout optimizado y sincronización logística real con FedEx.',
        impact: 'Posicionamiento inmediato como punto de encuentro entre cultura y producto. Experiencia de compra que conecta emocionalmente y funciona eficientemente.',
        ctaText: 'Ver caso completo',
        url: 'https://columbastore.com/',
        isFlagship: false,
        hasStandalone: false,
        coverImage: '/assets/img/Colmba_store_main.webp',
        color: 'bg-lime-400 text-black',
        borderColor: 'border-lime-400',
        techStack: ['Estrategia', 'Web', 'Diseño', 'Branding']
    },
    // 5. NBS BAZAR
    {
        id: 'nbs',
        slug: 'nbs-bazar-profesional',
        title: 'NBS Bazar Profesional',
        tag: 'ESTRATEGIA / SISTEMA',
        highlight: 'Digitalización comercial B2B',
        subtitle: 'De la estantería física al catálogo digital omnicanal',
        snapshot: [
            { label: 'Industria', value: 'Bazar / Gastro' },
            { label: 'Tipo', value: 'B2B / Ecommerce' },
            { label: 'Trayectoria', value: '20+ años' },
            { label: 'Enfoque', value: 'Conversión' }
        ],
        challenge: 'Acompañar la transformación digital de una empresa con más de dos décadas de trayectoria, unificando miles de SKUs en una plataforma coherente.',
        solution: 'Arquitectura digital robusta integrando Tienda Nube con una estrategia SEO y CRM personalizada para captación B2B.',
        impact: 'Activo digital que organiza su oferta comercial, facilita la autogestión de clientes y mejora el posicionamiento orgánico en el sector.',
        ctaText: 'Ver caso completo',
        url: 'https://www.nbsbazar.com/',
        isFlagship: false,
        hasStandalone: false,
        coverImage: '/assets/img/NBS Bazar Profesional.webp',
        color: 'bg-amber-400 text-black',
        borderColor: 'border-amber-400',
        techStack: ['B2B', 'Web', 'Diseño', 'Branding']
    },
    // 6. GATE PRIORITY
    {
        id: 'gate',
        slug: 'gate-priority',
        title: 'Gate Priority',
        tag: 'WEB / PLATAFORMA',
        highlight: 'Landing page de servicio VIP en aeropuertos',
        subtitle: 'Exclusividad y servicio desde el primer contacto digital',
        snapshot: [
            { label: 'Industria', value: 'Turismo / VIP' },
            { label: 'Tipo', value: 'Landing de servicio' },
            { label: 'Foco', value: 'Captación' },
            { label: 'Alcance', value: 'Latinoamérica' }
        ],
        challenge: 'Comunicar un servicio intangible y exclusivo transmitiendo confianza, seguridad y premiumness en una sola landing page destinada a la conversión.',
        solution: 'Arquitectura de información clara sobre WordPress, con foco en la propuesta de valor y facilidad de contacto mediante formularios orientados a la captación.',
        impact: 'Canal digital profesional que valida su promesa de servicio y facilita la captación de clientes corporativos.',
        ctaText: 'Ver caso completo',
        url: 'https://gatepriority.com/',
        isFlagship: false,
        hasStandalone: false,
        coverImage: '/assets/img/ucasal.png',
        videoUrl: '/assets/img/Gate-Priority.mp4',
        color: 'bg-blue-600 text-white',
        borderColor: 'border-blue-600',
        techStack: ['B2B', 'Web', 'Diseño']
    },
    // 7. CAIC
    {
        id: 'caic',
        slug: 'caic-cine',
        title: 'CAIC',
        tag: 'WEB / PLATAFORMA',
        highlight: 'Cámara Industria Cinematográfica',
        subtitle: 'Representación global de la industria del cine argentino',
        snapshot: [
            { label: 'Industria', value: 'Cine' },
            { label: 'Tipo', value: 'Institucional' },
            { label: 'Alcance', value: 'Global' },
            { label: 'Partner', value: 'Productoras' }
        ],
        challenge: 'Representar digitalmente a una cámara que nuclea a las principales productoras del país, comunicando prestigio y capacidad productiva.',
        solution: 'Plataforma institucional que funciona como vidriera de la industria, organizando la información y facilitando el contacto internacional.',
        impact: 'Canal digital que fortalece su rol institucional y actúa como punto de entrada para vínculos y proyectos globales.',
        ctaText: 'Ver caso completo',
        url: 'https://caic-cine.org.ar/',
        isFlagship: false,
        hasStandalone: false,
        coverImage: '/assets/img/haddock.png',
        videoUrl: '/assets/img/CAIC-2026.mp4',
        color: 'bg-blue-600 text-white',
        borderColor: 'border-blue-600',
        techStack: ['Web', 'Diseño']
    },
    // 8. PUNTO 360
    {
        id: 'punto360',
        slug: 'punto-360',
        title: 'Punto 360',
        tag: 'BRANDING / DISEÑO',
        highlight: 'Estudio de fotografía y video performance',
        subtitle: 'Producción visual estratégica para marcas',
        snapshot: [
            { label: 'Industria', value: 'Foto / Video' },
            { label: 'Tipo', value: 'Estudio creativo' },
            { label: 'Trayectoria', value: '+20 años' },
            { label: 'Enfoque', value: 'Performance' }
        ],
        challenge: 'Mantener un estándar visual alto a lo largo del tiempo, adaptándose a nuevos formatos de performance sin perder calidad ni identidad.',
        solution: 'Plataforma digital que refleja la calidad de su trabajo visual y facilita el contacto con clientes mediante una navegación fluida.',
        impact: 'Posicionamiento como uno de los principales estudios del sector, reflejando solidez y capacidad de adaptación.',
        ctaText: 'Ver caso completo',
        url: 'https://punto360.com.ar/',
        isFlagship: false,
        hasStandalone: false,
        coverImage: '/assets/img/Punto360-Desarrollo.webp',
        color: 'bg-fuchsia-600 text-white',
        borderColor: 'border-fuchsia-600',
        techStack: ['B2B', 'Estrategia', 'Web', 'Diseño']
    }
];
