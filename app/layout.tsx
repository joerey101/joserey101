import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Special_Elite, Permanent_Marker } from "next/font/google";
import "./globals.css";

// Force load Material Symbols using standard link in head via Next.js metadata is tricky with simple link, so we use a simple import in globals or layout.
// Since globals @import might effectively be delayed, let's try standard link injection in the body or Head if we were using Pages router.
// For App router, we can put it in the returned JSX.

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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
  title: "joserey101 | Inteligencia Estratégica",
  description: "Redefiniendo la Autoridad Digital",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} ${specialElite.variable} ${permanentMarker.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        {modal}
      </body>
    </html>
  );
}
