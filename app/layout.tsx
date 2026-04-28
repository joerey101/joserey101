import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Special_Elite, Permanent_Marker, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import SandboxToggle from "@/components/SandboxToggle";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["700", "900"],
  display: "swap",
});

// Force load Material Symbols using standard link in head via Next.js metadata is tricky with simple link, so we use a simple import in globals or layout.
// Since globals @import might effectively be delayed, let's try standard link injection in the body or Head if we were using Pages router.
// For App router, we can put it in the returned JSX.

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  weight: "400",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bestarlight.com"),
  title: {
    default: "BeStarLight — Marketing, Comunicación y Tecnología",
    template: "%s | BeStarLight",
  },
  description: "Marketing, comunicación y tecnología con 27 años de trayectoria. Estrategia, e-commerce, IA aplicada y producción visual. Buenos Aires · Miami.",
  keywords: ["agencia marketing y tecnología", "agencia comunicación digital", "consultoría e-commerce", "implementación IA empresas", "desarrollo Shopify", "Tienda Nube", "automatización procesos", "producción visual", "drone FPV", "marketing B2B Latam", "agencia Buenos Aires Miami", "BeStarLight"],
  authors: [{ name: "BeStarLight" }],
  creator: "BeStarLight",
  publisher: "BeStarLight",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/Bestarlight-icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
      "es-UY": "/",
      "es-CL": "/",
      "es-PY": "/",
      "es-PE": "/",
      "en": "/en",
    },
  },
  openGraph: {
    title: "BeStarLight — Marketing, Comunicación y Tecnología",
    description: "27 años de trayectoria acompañando marcas con estrategia, desarrollo digital, IA aplicada y producción visual. Buenos Aires · Miami.",
    url: "https://bestarlight.com",
    siteName: "BeStarLight",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "BeStarLight — Marketing, Comunicación y Tecnología",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeStarLight — Marketing, Comunicación y Tecnología",
    description: "27 años de trayectoria acompañando marcas con estrategia, desarrollo digital, IA aplicada y producción visual.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BeStarLight",
    "description": "Agencia de marketing, comunicación y tecnología con 27 años de trayectoria. Estrategia, desarrollo digital, IA aplicada y producción visual.",
    "url": "https://bestarlight.com",
    "logo": "https://bestarlight.com/og-image.png",
    "founder": {
      "@type": "Person",
      "name": "José Rey"
    },
    "foundingDate": "1999",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Buenos Aires",
        "addressCountry": "AR"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Miami",
        "addressCountry": "US"
      }
    ],
    "areaServed": [
      "Argentina", "Uruguay", "Chile", "Paraguay", "Perú", "Colombia", "Estados Unidos"
    ],
    "knowsAbout": [
      "Marketing digital",
      "Comunicación corporativa",
      "Implementación con IA",
      "E-commerce y desarrollo digital",
      "Shopify",
      "Tienda Nube",
      "WooCommerce",
      "Salesforce CRM",
      "Producción audiovisual",
      "Filmación con drone FPV"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/bestarlight"
    ]
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "José Rey",
    "jobTitle": "Founder & Director",
    "worksFor": {
      "@type": "Organization",
      "name": "BeStarLight"
    },
    "alumniOf": "Universidad del Salvador",
    "knowsAbout": [
      "Marketing digital",
      "Comunicación",
      "Implementación con IA",
      "E-commerce",
      "Salesforce CRM"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/joserey"
    ]
  };

  /*
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué hace BeStarLight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BeStarLight es una agencia de marketing, comunicación y tecnología con 27 años de trayectoria. Combinamos estrategia, desarrollo digital, IA aplicada y producción visual en un solo equipo."
        }
      },
      {
        "@type": "Question",
        "name": "¿En qué países trabajan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabajamos con marcas en Argentina, Uruguay, Chile, Paraguay, Perú, Colombia y Estados Unidos. Tenemos sedes en Buenos Aires y Miami."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué plataformas de e-commerce manejan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabajamos con Shopify, Tienda Nube, WooCommerce y desarrollos a medida con IA aplicada."
        }
      }
    ]
  };
  */

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4B9M19GWBR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4B9M19GWBR');
          `}
        </Script>
      </head>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} ${specialElite.variable} ${permanentMarker.variable} ${inter.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SandboxToggle />
        {children}
        {modal}
      </body>
    </html>
  );
}
