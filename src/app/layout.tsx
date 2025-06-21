import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Tutorial: Descargar Videos de Google Drive con FFMPEG | Método Completo 2025",
  description:
    "Aprende cómo descargar videos de Google Drive sin permisos usando FFMPEG. Tutorial paso a paso con herramientas de desarrollo, URLs y comandos completos.",
  keywords:
    "descargar videos google drive, ffmpeg tutorial, google drive sin permisos, herramientas desarrollador, descarga videos restringidos",
  authors: [{ name: "ReyserLyn" }],
  creator: "ReyserLyn",
  publisher: "ReyserLyn",
  robots: "index, follow",
  openGraph: {
    title: "Tutorial: Descargar Videos de Google Drive con FFMPEG",
    description:
      "Guía completa para descargar videos de Google Drive sin permisos usando FFMPEG y herramientas de desarrollo.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tutorial: Descargar Videos de Google Drive con FFMPEG",
    description:
      "Aprende a descargar videos de Google Drive sin permisos usando FFMPEG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
