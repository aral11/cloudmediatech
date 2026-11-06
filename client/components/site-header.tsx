import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LOGO_URL } from "@/lib/site";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services", end: false },
  { to: "/portfolio", label: "Portfolio", end: false },
  { to: "/about", label: "About", end: false },
  { to: "/contact", label: "Contact", end: false },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "transition-colors hover:text-tech-500",
    isActive && "text-tech-500 font-semibold",
  );

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center space-x-2 min-w-0">
            <img
              src={LOGO_URL}
              alt="Cloud Media Tech Solutions logo"
              className="h-7 sm:h-8 w-auto animate-floating"
            />
            <span className="font-poppins font-bold text-lg text-foreground hidden sm:inline truncate">
              Cloud Media Tech
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild className="bg-tech-500 hover:bg-tech-600 text-white font-semibold">
              <Link to="/contact">Get a Free Website Review</Link>
            </Button>
            <ThemeToggle />
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={linkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Button
                asChild
                className="bg-tech-500 hover:bg-tech-600 text-white font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/contact">Get a Free Website Review</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
