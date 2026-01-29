
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
    coverImage: string; // Placeholder for now
}

export const CASE_STUDIES: CaseStudy[] = [
    // 1. Flagship: muak.shop
    {
        id: 'muak',
        slug: 'muak-shop',
        title: 'muak.shop',
        tag: 'ECOMMERCE / MODA',
        highlight: 'Ecommerce internacional de joyas personalizadas · Shopify + Next.js',
        subtitle: 'Una marca de joyas pensada para competir a nivel internacional',
        snapshot: [
            { label: 'Industria', value: 'Moda / Joyas' },
            { label: 'Tipo', value: 'Ecommerce intl' },
            { label: 'Stack', value: 'Next.js / Shopify' },
            { label: 'Alcance', value: 'Global' }
        ],
        challenge: 'Desarrollar una tienda online desde cero capaz de operar a nivel internacional, con una identidad sólida, una experiencia de compra premium y un sistema de personalización de joyas de alto nivel, evitando soluciones genéricas o de bajo estándar.',
        solution: 'Se diseñó y construyó un ecommerce internacional sobre Shopify, integrando una arquitectura moderna basada en Next.js y React, lo que permitió mayor control sobre la experiencia de usuario, el rendimiento y la escalabilidad del proyecto. El trabajo incluyó una estrategia visual cuidada, apoyada en producción propia e imágenes generadas y optimizadas con el uso de inteligencia artificial.',
        impact: 'muak.shop se lanzó como una tienda abierta al mundo, con un sistema preparado para escalar, comunicar valor de marca y ofrecer una experiencia de compra alineada con estándares internacionales del segmento de joyería personalizada.',
        ctaText: 'Hablemos de un proyecto similar',
        url: 'https://muak.shop',
        isFlagship: true,
        hasStandalone: true,
        coverImage: '/assets/placeholders/muak.jpg',
    },
    // 2. Flagship: Segue Yachts
    {
        id: 'segue',
        slug: 'segue-yachts',
        title: 'Segue Yachts',
        tag: 'LUXURY / INDUSTRIA',
        highlight: 'Landing de alto impacto para el lanzamiento digital de la nueva X & XS Series',
        subtitle: 'Una experiencia digital a la altura de una marca emblemática',
        snapshot: [
            { label: 'Industria', value: 'Náutica' },
            { label: 'Tipo', value: 'Landing estratégica' },
            { label: 'Stack', value: 'Next.js / React' },
            { label: 'Alcance', value: 'Internacional' }
        ],
        challenge: 'Traducir la majestuosidad, la escala y el diseño de Segue Yachts al lenguaje digital, construyendo un primer punto de contacto de alto nivel que acompañe el crecimiento de la marca y el lanzamiento de su nueva línea.',
        solution: 'Se diseñó una landing page concebida como una expresión viva de la marca: narrativa visual, ritmo editorial, foco en detalle y una experiencia premium coherente con el producto. La implementación se realizó con una arquitectura moderna basada en Next.js y React para lograr rendimiento, fluidez y control total de la experiencia.',
        impact: 'Segue incorporó un punto de entrada sólido al mundo digital: una pieza diseñada para captar interés internacional, sostener el relato de marca y transformar audiencia en oportunidades de contacto, en sinergia con su canal de Instagram.',
        ctaText: 'Construyamos una experiencia digital a la altura de tu marca',
        url: 'https://segue.com.ar',
        isFlagship: true,
        hasStandalone: true,
        coverImage: '/assets/placeholders/segue.jpg',
    },
    // 3. Flagship: Haddock Films
    {
        id: 'haddock',
        slug: 'haddock-films',
        title: 'Haddock Films',
        tag: 'CINE / CULTURA',
        highlight: 'Productora ganadora del Oscar · Producciones para Netflix',
        subtitle: 'Una experiencia digital para una productora de alcance internacional',
        snapshot: [
            { label: 'Industria', value: 'Cine / TV' },
            { label: 'Tipo', value: 'Web institucional' },
            { label: 'Premios', value: 'Oscar Winner' },
            { label: 'Alcance', value: 'Internacional' }
        ],
        challenge: 'Construir una web institucional capaz de representar el prestigio y la diversidad del trabajo de Haddock Films, organizando un amplio catálogo de películas y series sin perder identidad, claridad ni fuerza narrativa.',
        solution: 'Se diseñó una experiencia digital con enfoque editorial, donde cada producción cuenta con su propia ficha: sinopsis, equipo, material visual y trailers, permitiendo recorrer la trayectoria del estudio de forma clara y atractiva. La arquitectura prioriza la navegación fluida y una estética cinematográfica.',
        impact: 'Haddock Films cuenta hoy con una plataforma digital que acompaña su crecimiento internacional, facilita la presentación de su obra y funciona como una carta de presentación sólida frente a socios, plataformas y nuevos proyectos.',
        ctaText: 'Diseñemos una experiencia digital a la altura de tu contenido',
        url: 'https://haddockfilms.com',
        isFlagship: true,
        hasStandalone: true,
        coverImage: '/assets/placeholders/haddock.jpg',
    },
    // 4. Columba Store (Secondary)
    {
        id: 'columba',
        slug: 'columba-store',
        title: 'Columba Store',
        tag: 'ECOMMERCE / INTERNACIONAL',
        highlight: 'Sabores argentinos para el mundo',
        subtitle: 'Una tienda pensada para llevar los sabores de la infancia a cualquier parte del mundo',
        snapshot: [
            { label: 'Industria', value: 'Alimentos / Retail' },
            { label: 'Tipo', value: 'Ecommerce intl' },
            { label: 'Plataforma', value: 'Shopify' },
            { label: 'Alcance', value: 'Global' }
        ],
        challenge: 'Crear una tienda online capaz de conectar emocionalmente con argentinos viviendo en el exterior, transformando la nostalgia en una experiencia de compra simple, confiable y global.',
        solution: 'Se diseñó y desarrolló un ecommerce internacional sobre Shopify, combinando una identidad visual clara con una experiencia de compra directa y confiable. El sistema integra checkout optimizado, múltiples medios de pago, sincronización logística con FedEx y una estrategia de email marketing.',
        impact: 'Columba Store logró posicionarse como un punto de encuentro entre cultura, producto y logística, ofreciendo una experiencia de compra que conecta emocionalmente con su audiencia y funciona de manera eficiente a escala internacional.',
        ctaText: 'Conversemos sobre tu proyecto de ecommerce internacional',
        url: '#',
        isFlagship: false,
        hasStandalone: false,
        coverImage: '/assets/placeholders/columba.jpg',
    },
    // 5. NBS Bazar Profesional
    {
        id: 'nbs',
        slug: 'nbs-bazar',
        title: 'NBS Bazar',
        tag: 'CATÁLOGO / B2B',
        highlight: 'Organización de grandes volúmenes de producto para mercado profesional',
        subtitle: 'Un catálogo digital diseñado para ordenar la oferta y facilitar la venta',
        snapshot: [
            { label: 'Industria', value: 'Gastronomía' },
            { label: 'Tipo', value: 'Catálogo digital' },
            { label: 'Volumen', value: 'Alta densidad' },
            { label: 'Alcance', value: 'Nacional' }
        ],
        challenge: 'Transformar una oferta de miles de productos (bazar, gastronomía, equipamiento) en un catálogo digital navegable, claro y útil tanto para clientes minoristas como para compradores mayoristas.',
        solution: 'Se estructuró un catálogo digital con categorías claras, potentes herramientas de búsqueda y filtrado, y fichas de producto ricas en información. La interfaz prioriza la limpieza visual y la jerarquía para evitar la saturación cognitiva ante grandes volúmenes de stock.',
        impact: 'NBS cuenta con una herramienta de venta digital que centraliza su oferta, agiliza la consulta de precios y stock, y profesionaliza su imagen ante el mercado gastronómico y hotelero.',
        ctaText: 'Ordenemos tu catálogo de productos',
        url: '#',
        isFlagship: false,
        hasStandalone: false,
        coverImage: '/assets/placeholders/nbs.jpg',
    },
    // 6. Gate Priority
    {
        id: 'gate',
        slug: 'gate-priority',
        title: 'Gate Priority',
        tag: 'SERVICIOS / TRAVEL',
        highlight: 'Landing page de servicio VIP en aeropuertos',
        subtitle: 'Exclusividad y servicio desde el primer contacto digital',
        snapshot: [
            { label: 'Industria', value: 'Turismo / VIP' },
            { label: 'Tipo', value: 'Landing de servicio' },
            { label: 'Foco', value: 'Captación' },
            { label: 'Alcance', value: 'Latinoamérica' }
        ],
        challenge: 'Comunicar un servicio intangible y exclusivo (asistencia VIP en aeropuertos) transmitiendo confianza, seguridad y premiumness en una sola landing page destinada a la conversión.',
        solution: 'Se diseñó una landing page enfocada en la claridad de la propuesta de valor y la facilidad de contacto. El diseño utiliza códigos visuales del mundo premium/travel, con información estructurada para despejar dudas y botones de acción claros para reservar el servicio.',
        impact: 'Gate Priority dispone de un activo digital que valida su promesa de servicio, transmite profesionalismo inmediato y facilita la captación de clientes corporativos y viajeros frecuentes.',
        ctaText: 'Elevemos la percepción de tu servicio',
        url: '#',
        isFlagship: false,
        hasStandalone: false,
        coverImage: '/assets/placeholders/gate.jpg',
    },
    // 7. CAIC
    {
        id: 'caic',
        slug: 'caic-cine',
        title: 'CAIC',
        tag: 'INSTITUCIONAL / CINE',
        highlight: 'Plataforma institucional para la industria cinematográfica argentina',
        subtitle: 'La cámara que representa a la industria cinematográfica argentina',
        snapshot: [
            { label: 'Industria', value: 'Cine' },
            { label: 'Tipo', value: 'Web institucional' },
            { label: 'Rol', value: 'Cámara sectorial' },
            { label: 'Alcance', value: 'Internacional' }
        ],
        challenge: 'Representar digitalmente a una cámara que nuclea a las principales productoras cinematográficas del país, comunicando diversidad, prestigio y capacidad productiva sin diluir identidad ni claridad institucional.',
        solution: 'Se diseñó una plataforma institucional que funciona como vidriera de la industria, ordenando la información, destacando el rol de la cámara y facilitando el contacto entre productoras argentinas y el mercado internacional. La experiencia prioriza claridad y navegación simple.',
        impact: 'CAIC cuenta hoy con un canal digital que fortalece su rol institucional, mejora la visibilidad de la industria argentina y actúa como punto de entrada para vínculos y proyectos a escala internacional.',
        ctaText: 'Diseñemos una plataforma institucional clara y representativa',
        url: '#',
        isFlagship: false,
        hasStandalone: false,
        coverImage: '/assets/placeholders/caic.jpg',
    },
    // 8. Punto 360
    {
        id: 'punto360',
        slug: 'punto-360',
        title: 'Punto 360',
        tag: 'ESTUDIO / PERFORMANCE',
        highlight: 'Estudio de fotografía y video con foco en performance y posicionamiento',
        subtitle: 'Producción visual estratégica para marcas y empresas',
        snapshot: [
            { label: 'Industria', value: 'Foto / Video' },
            { label: 'Tipo', value: 'Estudio creativo' },
            { label: 'Trayectoria', value: '+20 años' },
            { label: 'Enfoque', value: 'Performance' }
        ],
        challenge: 'Mantener un estándar visual alto a lo largo del tiempo, adaptándose a nuevos formatos, plataformas y demandas de performance sin perder calidad ni identidad.',
        solution: 'Punto 360 se consolidó como un estudio integral que combina fotografía, video y estrategia digital, desarrollando piezas visuales pensadas tanto para construir marca como para funcionar en campañas de posicionamiento y performance. El trabajo se apoya en una integración directa con campañas activas.',
        impact: 'El estudio cuenta con una plataforma digital que refleja la calidad de su trabajo, facilita el contacto con clientes y acompaña campañas de posicionamiento como uno de los principales estudios de fotografía publicitaria de Argentina.',
        ctaText: 'Pensemos una estrategia visual orientada a resultados',
        url: '#',
        isFlagship: false,
        hasStandalone: false,
        coverImage: '/assets/placeholders/punto360.jpg',
    }
];
