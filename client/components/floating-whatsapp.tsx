import { MessageSquare } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl("Hi Cloud Media Tech, I'd like to chat about a website.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Cloud Media Tech on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-600 active:scale-95"
    >
      <MessageSquare className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
