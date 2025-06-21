import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-8 text-center">
      <div className="max-w-4xl mx-auto">
        <Badge variant="secondary" className="mb-4">
          Entrega Lista
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          Tu Video Está
          <span className="text-blue-600 block">Listo y Completo</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          Se explica como descargar videos de google drive sin permisos de
          descarga usando un método de descarga de video y audio separados y
          unirlos con ffmpeg.
        </p>
      </div>
    </section>
  );
}
