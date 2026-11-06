import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site";

const needOptions = [
  "New website",
  "Redesign",
  "Online store",
  "Landing page",
  "Not sure",
];

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export function ContactForm() {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [need, setNeed] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = [
      `Hi Cloud Media Tech, I'm ${name}.`,
      `Business: ${businessName}`,
      `Type of business: ${businessType}`,
      `Phone or WhatsApp: ${phone}`,
      `Email: ${email}`,
      `What I need: ${need}`,
      "",
      message,
    ].join("\n");
    window.open(buildWhatsAppUrl(text), "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
          <Label htmlFor="contact-business">Business name</Label>
          <Input
            id="contact-business"
            autoComplete="organization"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone or WhatsApp</Label>
          <Input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-business-type">Type of business</Label>
          <Input
            id="contact-business-type"
            placeholder="e.g. restaurant, clinic, studio"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-need">What do you need?</Label>
          <select
            id="contact-need"
            required
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            className={selectClass}
          >
            <option value="" disabled>
              Choose an option
            </option>
            {needOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-tech-500 hover:bg-tech-600 text-white font-semibold h-12 sm:h-14 text-sm sm:text-base active:scale-95"
      >
        <MessageSquare className="h-4 w-4 mr-2" />
        Send my request
      </Button>
    </form>
  );
}
