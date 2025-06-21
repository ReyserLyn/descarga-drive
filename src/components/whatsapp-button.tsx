import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function WhatsAppButton() {
  return (
    <Button asChild className="bg-green-600 hover:bg-green-700">
      <Link
        href="https://api.whatsapp.com/send?phone=51987471074&text=%5BTutorial%20descarga%20drive%5D%20Duda%3A%20"
        target="_blank"
      >
        <MessageCircle className="h-4 w-4" />
        <span>WhatsApp</span>
      </Link>
    </Button>
  );
}
