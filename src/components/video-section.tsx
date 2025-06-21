import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Folder, Info, Play } from "lucide-react";
import Link from "next/link";
import WhatsAppButton from "./whatsapp-button";

export default function VideoSection() {
  return (
    <section className="container mx-auto ">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 items-center justify-center">
            <Button asChild className="mb-2">
              <Link
                href="https://drive.google.com/file/d/1gzTV6f9DZOV5lwO2pBOFq16Y8-XUBlT1/view"
                target="_blank"
              >
                <Play className="h-4 w-4" />
                <span>Ver Video en Google Drive</span>
              </Link>
            </Button>

            <Button asChild className="mb-2" variant="outline">
              <Link
                href="https://drive.google.com/drive/folders/1IOCBejFeQ43YZqKoo21Be5Qs3ZPQyive?usp=sharing"
                target="_blank"
              >
                <Folder className="h-4 w-4" />
                <span>Ver Carpeta en Google Drive</span>
              </Link>
            </Button>
          </div>
          <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm flex items-center gap-2">
            <Info className="h-4 w-4" />
            Si tienes problemas para ver el video, puedes verlo en Google Drive.
          </p>
        </div>

        <Card className="overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            <div className="aspect-video">
              <iframe
                src="https://drive.google.com/file/d/1gzTV6f9DZOV5lwO2pBOFq16Y8-XUBlT1/preview"
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Tu Video Personalizado"
              />
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            ¿Tienes alguna pregunta o comentario sobre el video?
          </p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
