import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
