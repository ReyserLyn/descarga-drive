import { Play } from "lucide-react";
import WhatsAppButton from "./whatsapp-button";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Play className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-slate-900 dark:text-white">
            Descargar Video de Google Drive
          </span>
        </div>
        <WhatsAppButton />
      </nav>
    </header>
  );
}
