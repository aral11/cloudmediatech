import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = `Hi Cloud Media Tech, I'm ${name}.\nContact: ${contact}\n\n${message}`;
    window.open(buildWhatsAppUrl(text), "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div className="space-y-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-details">Phone or email</Label>
        <Input
          id="contact-details"
          autoComplete="email"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">How can we help?</Label>
        <Textarea
          id="contact-message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-tech-500 hover:bg-tech-600 text-white font-semibold h-12 sm:h-14 text-sm sm:text-base active:scale-95"
      >
        <MessageSquare className="h-4 w-4 mr-2" />
        Send via WhatsApp
      </Button>
    </form>
  );
}
