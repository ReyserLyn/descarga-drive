import { Play } from "lucide-react";
import WhatsAppButton from "./whatsapp-button";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex items-center justify-center space-x-2">
          <Play className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
          <span className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight ">
            Descargar Video de Google Drive
          </span>
        </div>
        <div className="flex justify-center sm:justify-end">
          <WhatsAppButton />
        </div>
      </nav>
    </header>
  );
}
