import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Special_Elite, Permanent_Marker, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
    default: "BeStarLight • Tecnología y Comunicación + IA en tus procesos",
    template: "%s | BeStarLight",
  },
  description: "Consultoría estratégica B2B con +25 años de experiencia. Reestructuración de comunicación, arquitecturas e-commerce y posicionamiento digital técnico en LATAM.",
  keywords: ["ingeniería de mercado", "consultoría B2B", "estrategia corporativa", "arquitectura e-commerce", "posicionamiento digital técnico", "marketing B2B Argentina", "Bestarlight"],
  authors: [{ name: "Bestarlight" }],
  creator: "Bestarlight",
  publisher: "Bestarlight",
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
    title: "Bestarlight | Ingeniería de Mercado y Estrategia B2B",
    description: "Consultoría estratégica B2B con +25 años de experiencia. Reestructuración de comunicación y arquitecturas e-commerce sólidas.",
    url: "https://bestarlight.com",
    siteName: "Bestarlight",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bestarlight | Ingeniería de Mercado B2B",
    description: "+25 años de experiencia en reestructuración de estrategia corporativa y e-commerce.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Bestarlight",
    "url": "https://bestarlight.com",
    "logo": "https://bestarlight.com/favicon.ico",
    "image": [
      "https://bestarlight.com/assets/img/Muak-shop.webp",
      "https://bestarlight.com/assets/img/haddock.png",
      "https://bestarlight.com/assets/img/Colmba_store_main.webp",
      "https://bestarlight.com/assets/img/NBS Bazar Profesional.webp"
    ],
    "description": "Consultoría estratégica B2B y Auditoría en Ingeniería de Mercado con +25 años de experiencia.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buenos Aires",
      "addressCountry": "AR"
    },
    "areaServed": [
      { "@type": "Country", "name": "Argentina" },
      { "@type": "Country", "name": "Uruguay" },
      { "@type": "Country", "name": "Chile" },
      { "@type": "Country", "name": "Paraguay" },
      { "@type": "Country", "name": "Peru" }
    ],
    "knowsAbout": [
      "Estrategia corporativa",
      "E-commerce",
      "Fotografía Publicitaria",
      "Ingeniería de Mercado",
      "Comunicación B2B"
    ]
  };

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {modal}
      </body>
    </html>
  );
}
