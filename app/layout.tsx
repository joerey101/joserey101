import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Special_Elite, Permanent_Marker, Inter } from "next/font/google";
import "./globals.css";

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
    default: "Bestarlight | Inteligencia Estratégica",
    template: "%s | Bestarlight",
  },
  description: "Redefiniendo la Autoridad Digital. Unificamos Marketing Estratégico, Ingeniería, Operaciones y Cultura bajo una misma arquitectura.",
  keywords: ["inteligencia estratégica", "arquitectura digital", "marketing estratégico", "operaciones data-driven", "escalabilidad tecnológica", "Bestarlight"],
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
      es: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "Bestarlight | Inteligencia Estratégica",
    description: "Redefiniendo la Autoridad Digital con Arquitectura Estratégica y flujos impulsados por IA.",
    url: "https://bestarlight.com",
    siteName: "Bestarlight",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bestarlight | Inteligencia Estratégica",
    description: "Unificamos Marketing, Ingeniería y Operaciones bajo una misma arquitectura.",
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
    "@type": "Organization",
    name: "Bestarlight",
    url: "https://bestarlight.com",
    logo: "https://bestarlight.com/favicon.ico",
    description: "Unificamos Marketing Estratégico, Ingeniería, Operaciones y Cultura bajo una misma arquitectura.",
  };

  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} ${specialElite.variable} ${permanentMarker.variable} ${inter.variable} antialiased`}
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
