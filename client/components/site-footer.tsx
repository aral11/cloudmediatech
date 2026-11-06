import { Link } from "react-router-dom";
import { Instagram, Mail, MessageSquare } from "lucide-react";
import { CONTACT_EMAIL, LOGO_URL, buildWhatsAppUrl } from "@/lib/site";
import { services } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 sm:py-12 mt-12 sm:mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={LOGO_URL}
                alt="Cloud Media Tech"
                className="h-7 sm:h-8 w-auto"
                loading="lazy"
              />
              <span className="font-poppins font-bold text-lg sm:text-xl text-white">
                Cloud Media Tech
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Affordable website development for businesses
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
              Quick Links
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <Link to="/" className="block text-slate-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-slate-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/portfolio" className="block text-slate-300 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link to="/contact" className="block text-slate-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
              Services
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              {services.slice(0, 4).map((service) => (
                <p key={service.title}>{service.title}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
              Connect
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors break-all"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={buildWhatsAppUrl()}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <MessageSquare className="h-4 w-4 flex-shrink-0" />
                WhatsApp: +91 8105784258
              </a>
              <a
                href="https://instagram.com/cloudmediatech"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4 flex-shrink-0" />
                @cloudmediatech
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-slate-300">
            © Cloud Media Tech Solutions. Professional Web Solutions for Businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
