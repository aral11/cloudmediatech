import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { LaunchOfferModal } from "@/components/launch-offer-modal";
import {
  Code,
  Smartphone,
  Palette,
  Cloud,
  Mail,
  MessageSquare,
  Instagram,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Decoremporiums",
      description:
        "Interior design website with elegant layouts and modern aesthetics. Client: Pavan Kumar, Owner",
      image: "/placeholder.svg",
      status: "Live",
      url: "https://www.decoremporiums.com",
      isRealClient: true,
    },
    {
      title: "CMT Photo Studio Demo",
      description:
        "Perfect for photographers and studios. Portfolio showcase with galleries and booking system",
      image: "/placeholder.svg",
      status: "Demo",
      url: "https://cmt-platform.com/",
      isRealClient: false,
      pricing: "Starts at ₹4,999",
    },
    {
      title: "CMT Hotel Demo",
      description:
        "Ideal for hotels and homestays. Room showcase with amenities and booking integration",
      image: "/placeholder.svg",
      status: "Demo",
      url: "https://cmt-platform.com/",
      isRealClient: false,
      pricing: "Starts at ₹4,999",
    },
    {
      title: "CMT Ecommerce Demo",
      description:
        "Complete online store template. Product catalog with shopping cart and payment integration",
      image: "/placeholder.svg",
      status: "Demo",
      url: "https://cmt-platform.com/",
      isRealClient: false,
      pricing: "Starts at ₹4,999",
    },
    {
      title: "CMT Business Website Demo",
      description:
        "Professional business website template. Perfect for service businesses and consultancies",
      image: "/placeholder.svg",
      status: "Demo",
      url: "https://cmt-platform.com/",
      isRealClient: false,
      pricing: "Starts at ₹4,999",
    },
  ];

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern frameworks and scalable web technologies",
    },
    {
      icon: Smartphone,
      title: "Ecommerce Websites",
      description: "Secure, fast, and conversion-focused online stores",
    },
    {
      icon: Cloud,
      title: "Custom Web Solutions",
      description:
        "Tailored websites and web applications for your business needs",
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextProject, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Launch Offer Modal */}
      <LaunchOfferModal />

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F010d7df9751a411d85bb96dd347f726b%2F1c866cd6ca314033a207be72d9b9a58d?format=webp&width=800"
                alt="Cloud Media Tech"
                className="h-7 sm:h-8 w-auto animate-floating"
              />
              <span className="font-poppins font-bold text-lg sm:text-xl text-foreground hidden sm:inline">
                Cloud Media Tech
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-tech-500 transition-colors">
                Home
              </a>
              <a
                href="#about"
                className="hover:text-tech-500 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:text-tech-500 transition-colors"
              >
                Projects
              </a>
              <a
                href="#services"
                className="hover:text-tech-500 transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="hover:text-tech-500 transition-colors"
              >
                Contact
              </a>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#home"
                  className="hover:text-tech-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:text-tech-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="hover:text-tech-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#services"
                  className="hover:text-tech-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="hover:text-tech-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-tech-50 via-cloud-50 to-background animate-gradient-x bg-[length:400%_400%]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
                <span className="text-foreground">Professional Web</span>
                <br />
                <span className="text-tech-500">Solutions & Design</span>
                <br />
                <span className="text-foreground">for Every Business</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Transform your digital presence with cutting-edge technology and
                creative design solutions.
              </p>
              <Button
                size="lg"
                className="bg-tech-500 hover:bg-tech-600 text-white px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 h-12 sm:h-14"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </Button>
            </div>
            <div className="flex justify-center animate-slide-in-right">
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F010d7df9751a411d85bb96dd347f726b%2F1c866cd6ca314033a207be72d9b9a58d?format=webp&width=800"
                  alt="Cloud Media Tech Logo"
                  className="h-64 w-auto animate-floating drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-tech-500/20 rounded-full blur-3xl animate-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Offer Banner */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-tech-500/30 py-8 sm:py-12 px-4 overflow-hidden animate-fade-in">
        {/* Subtle background accent */}
        <div className="absolute inset-0 bg-tech-500/5 backdrop-blur-3xl"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-tech-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs sm:text-sm font-semibold text-tech-400 mb-3 uppercase tracking-wider">
              ✨ Special Launch Offer
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-poppins font-bold text-white mb-4 leading-tight">
              Professional business websites starting from ₹4,999
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed">
              Choose a plan that fits your business — Starter{" "}
              <span className="font-bold text-tech-400">₹4,999</span> | Business{" "}
              <span className="font-bold text-tech-400">₹9,999</span> |
              Ecommerce <span className="font-bold text-tech-400">₹19,999</span>
            </p>
            <Button
              size="lg"
              className="bg-tech-500 hover:bg-tech-600 text-white font-semibold px-6 sm:px-8 py-6 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 h-12 sm:h-14"
              onClick={() =>
                window.open(
                  "https://wa.me/918105784258?text=Hi%20Cloud%20Media%20Tech%2C%20I%27m%20interested%20in%20your%20website%20plans.%20Can%20you%20tell%20me%20more%20about%20the%20%E2%82%B94999%2C%20%E2%82%B99999%2C%20or%20%E2%82%B919999%20plans%3F",
                  "_blank",
                )
              }
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Launch Offer
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold mb-4 sm:mb-6">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Cloud Media Tech Solutions specializes in building modern,
              scalable, and user-friendly websites and web applications. We
              focus on creating professional business websites, ecommerce
              platforms, and custom web solutions that help businesses build a
              strong digital presence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Modern frameworks and scalable web technologies",
              },
              {
                icon: Smartphone,
                title: "Ecommerce Websites",
                description:
                  "Secure, fast, and conversion-focused online stores",
              },
              {
                icon: Cloud,
                title: "Custom Web Solutions",
                description:
                  "Tailored websites and web applications for your business needs",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-tech-100 dark:bg-tech-800 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 sm:h-10 w-8 sm:w-10 text-tech-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold mb-4 sm:mb-6">
              Our Work
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We've recently launched and are building our portfolio. Below is
              our first client project and a few demo templates showcasing our
              work quality.
            </p>
          </div>

          {/* Real Client Projects */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-6 sm:mb-8 text-foreground">
              Client Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects
                .filter((p) => p.isRealClient)
                .map((project, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        {project.url !== "#" && (
                          <Button
                            variant="secondary"
                            onClick={() => window.open(project.url, "_blank")}
                            className="bg-white/90 text-black hover:bg-white"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Site
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {project.url !== "#" ? (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() => window.open(project.url, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Project
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          disabled
                        >
                          Portfolio Website
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Demo Templates */}
          <div>
            <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-6 sm:mb-8 text-foreground">
              Demo Templates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {projects
                .filter((p) => !p.isRealClient)
                .map((project, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden border border-tech-200 dark:border-tech-800"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden bg-gradient-to-br from-tech-50 to-tech-100 dark:from-tech-900 dark:to-tech-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white">
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardHeader className="pb-3 pt-4">
                      <CardTitle className="text-base line-clamp-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-xs line-clamp-2 mt-1">
                        {project.description}
                      </CardDescription>
                      {project.pricing && (
                        <p className="text-sm font-semibold text-tech-500 mt-2">
                          {project.pricing}
                        </p>
                      )}
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <Button
                          className="w-full bg-tech-500 hover:bg-tech-600 text-white font-semibold text-sm"
                          onClick={() => window.open(project.url, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-xs"
                          onClick={() =>
                            window.open(
                              "https://wa.me/918105784258?text=Hi%20Cloud%20Media%20Tech%2C%20I%27m%20interested%20in%20" +
                                project.title +
                                "%20website.",
                              "_blank",
                            )
                          }
                        >
                          Get This Website
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Projects CTA */}
          <div className="mt-12 sm:mt-20 text-center animate-fade-in space-y-4 sm:space-y-6">
            <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-md mx-auto sm:max-w-none sm:flex-row">
              <Button
                size="lg"
                variant="outline"
                className="px-6 sm:px-8 py-6 text-sm sm:text-base font-semibold h-12 sm:h-14 flex-1 sm:flex-none"
                onClick={() =>
                  window.open("https://cmt-platform.com/", "_blank")
                }
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View Demo
              </Button>
              <Button
                size="lg"
                className="bg-tech-500 hover:bg-tech-600 text-white px-6 sm:px-8 py-6 text-sm sm:text-base font-semibold h-12 sm:h-14 flex-1 sm:flex-none active:scale-95"
                onClick={() =>
                  window.open(
                    "https://wa.me/918105784258?text=Hi%20Cloud%20Media%20Tech%2C%20I%20have%20a%20project%20I%27d%20like%20to%20discuss.",
                    "_blank",
                  )
                }
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Start Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold mb-4 sm:mb-6">
              Our Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Comprehensive solutions for your digital needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="bg-tech-100 dark:bg-tech-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-tech-500 group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold mb-4 sm:mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional websites at affordable prices. Choose the perfect
              plan for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Starter Website",
                price: "₹4,999",
                description: "Perfect for portfolios & small businesses",
                features: [
                  "1–3 pages",
                  "Mobile responsive",
                  "Contact form",
                  "WhatsApp integration",
                  "Basic SEO",
                  "1 month support",
                ],
                highlighted: false,
              },
              {
                title: "Business Website",
                price: "₹9,999",
                description: "For studios, hotels & service businesses",
                features: [
                  "5–7 pages",
                  "Image gallery",
                  "Services showcase",
                  "Custom design",
                  "Google Maps embed",
                  "SEO optimization",
                  "3 months support",
                ],
                highlighted: true,
              },
              {
                title: "Ecommerce Website",
                price: "₹19,999",
                description: "Complete online stores",
                features: [
                  "Product catalog",
                  "Shopping cart",
                  "Payment gateway integration",
                  "Admin panel",
                  "Inventory tracking",
                  "Mobile responsive",
                  "6 months support",
                ],
                highlighted: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`animate-fade-in overflow-hidden transition-all duration-300 ${
                  plan.highlighted
                    ? "ring-2 ring-tech-500 transform scale-105 shadow-2xl"
                    : "hover:shadow-lg"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.highlighted && (
                  <div className="bg-tech-500 text-white py-2 text-center font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className={plan.highlighted ? "pt-4" : ""}>
                  <CardTitle className="text-lg sm:text-2xl">{plan.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base mt-2">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-tech-500">
                      {plan.price}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      One-time payment
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-tech-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="text-xs text-tech-600 font-bold">
                            ✓
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full font-semibold h-12 sm:h-14 text-sm sm:text-base transition-all active:scale-95 ${
                      plan.highlighted
                        ? "bg-tech-500 hover:bg-tech-600 text-white"
                        : "bg-tech-100 text-tech-700 hover:bg-tech-200 dark:bg-tech-900 dark:text-tech-100 dark:hover:bg-tech-800"
                    }`}
                    onClick={() =>
                      window.open(
                        "https://wa.me/918105784258?text=Hi%20Cloud%20Media%20Tech%2C%20I%27m%20interested%20in%20the%20" +
                          plan.title +
                          "%20package.",
                        "_blank",
                      )
                    }
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold mb-4 sm:mb-6">
              Get In Touch
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Ready to start your next project? Let's talk!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="animate-fade-in">
              <CardHeader className="text-center">
                <CardTitle className="text-xl sm:text-2xl">Contact Information</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center group">
                    <div className="bg-tech-100 dark:bg-tech-800 rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-tech-500 group-hover:text-white transition-colors duration-300">
                      <Mail className="h-6 sm:h-8 w-6 sm:w-8" />
                    </div>
                    <p className="font-semibold text-sm sm:text-base mb-2">Email</p>
                    <a
                      href="mailto:contact@cloudmediatechsolutions.com"
                      className="text-tech-500 hover:underline text-xs sm:text-sm break-all px-2"
                    >
                      contact@cloudmediatechsolutions.com
                    </a>
                  </div>

                  <div className="text-center group">
                    <div className="bg-tech-100 dark:bg-tech-800 rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                      <MessageSquare className="h-6 sm:h-8 w-6 sm:w-8" />
                    </div>
                    <p className="font-semibold text-sm sm:text-base mb-2">WhatsApp</p>
                    <a
                      href="https://wa.me/918105784258"
                      className="text-tech-500 hover:underline text-xs sm:text-sm"
                    >
                      +91 8105784258
                    </a>
                  </div>

                  <div className="text-center group">
                    <div className="bg-tech-100 dark:bg-tech-800 rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                      <Instagram className="h-6 sm:h-8 w-6 sm:w-8" />
                    </div>
                    <p className="font-semibold text-sm sm:text-base mb-2">Instagram</p>
                    <a
                      href="https://instagram.com/cloudmediatech"
                      className="text-tech-500 hover:underline text-xs sm:text-sm"
                    >
                      @cloudmediatech
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border">
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white w-full h-12 sm:h-14 text-sm sm:text-base font-semibold active:scale-95"
                    onClick={() =>
                      window.open("https://wa.me/918105784258", "_blank")
                    }
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 sm:h-14 text-sm sm:text-base font-semibold w-full active:scale-95"
                    onClick={() =>
                      window.open(
                        "https://instagram.com/cloudmediatech",
                        "_blank",
                      )
                    }
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 sm:h-14 text-sm sm:text-base font-semibold w-full active:scale-95"
                    onClick={() =>
                      window.open(
                        "mailto:contact@cloudmediatechsolutions.com",
                        "_blank",
                      )
                    }
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 sm:py-12 mt-12 sm:mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F010d7df9751a411d85bb96dd347f726b%2F1c866cd6ca314033a207be72d9b9a58d?format=webp&width=800"
                  alt="Cloud Media Tech"
                  className="h-7 sm:h-8 w-auto"
                />
                <span className="font-poppins font-bold text-lg sm:text-xl text-white">
                  Cloud Media Tech
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Professional Web Solutions for Businesses
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
                Quick Links
              </h4>
              <div className="space-y-2 text-xs sm:text-sm">
                <a
                  href="#about"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
                Services
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <p>Web Development</p>
                <p>Ecommerce Websites</p>
                <p>Custom Web Solutions</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">Connect</h4>
              <div className="space-y-2 text-xs sm:text-sm">
                <a
                  href="mailto:contact@cloudmediatechsolutions.com"
                  className="block text-slate-300 hover:text-white transition-colors break-all"
                >
                  contact@cloudmediatechsolutions.com
                </a>
                <a
                  href="https://wa.me/918105784258"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  WhatsApp: +91 8105784258
                </a>
                <a
                  href="https://instagram.com/cloudmediatech"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  @cloudmediatech
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-slate-300">
              Powered by Cloud Media Tech Solutions – Professional Web Solutions for Businesses
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
