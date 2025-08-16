import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ThemeToggle } from '@/components/theme-toggle';
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
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Index() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const projects = [
    {
      title: "Cloud Media Tech Website",
      description: "Modern IT services website with dark/light themes and animations",
      image: "/placeholder.svg",
      status: "Live"
    },
    {
      title: "CoastalConnect",
      description: "Netlify hosted application currently under development",
      image: "/placeholder.svg",
      status: "Under Development"
    },
    {
      title: "Decoremporiums",
      description: "Live e-commerce project with modern design",
      image: "/placeholder.svg",
      status: "Live"
    }
  ];

  const services = [
    {
      icon: Code,
      title: "Web Applications",
      description: "Modern, responsive websites built with cutting-edge technologies"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps (iOS & Android)",
      description: "Native and cross-platform mobile applications for all devices"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert and engage"
    },
    {
      icon: Cloud,
      title: "API & Cloud Integration",
      description: "Scalable backend solutions and cloud infrastructure"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    const timer = setInterval(nextProject, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Ff852809020e04a21be00df828dab13d1%2F8e15f4d2abf54c0787f0c99de6a0d9ac?format=webp&width=800" 
                alt="Cloud Media Tech" 
                className="h-8 w-auto animate-floating"
              />
              <span className="font-poppins font-bold text-xl text-foreground">Cloud Media Tech</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-tech-500 transition-colors">Home</a>
              <a href="#about" className="hover:text-tech-500 transition-colors">About</a>
              <a href="#projects" className="hover:text-tech-500 transition-colors">Projects</a>
              <a href="#services" className="hover:text-tech-500 transition-colors">Services</a>
              <a href="#contact" className="hover:text-tech-500 transition-colors">Contact</a>
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
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#home" className="hover:text-tech-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#about" className="hover:text-tech-500 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#projects" className="hover:text-tech-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#services" className="hover:text-tech-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#contact" className="hover:text-tech-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-50 via-cloud-50 to-background animate-gradient-x bg-[length:400%_400%]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
                <span className="text-foreground">Innovative Web &</span>
                <br />
                <span className="text-tech-500">Mobile Solutions</span>
                <br />
                <span className="text-foreground">for Every Business</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Transform your digital presence with cutting-edge technology and creative design solutions.
              </p>
              <Button 
                size="lg" 
                className="bg-tech-500 hover:bg-tech-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Button>
            </div>
            <div className="flex justify-center animate-slide-in-right">
              <div className="relative">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff852809020e04a21be00df828dab13d1%2F8e15f4d2abf54c0787f0c99de6a0d9ac?format=webp&width=800" 
                  alt="Cloud Media Tech Logo" 
                  className="h-64 w-auto animate-floating drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-tech-500/20 rounded-full blur-3xl animate-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">About Us</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We specialize in creating smart, scalable, and user-friendly applications — from modern websites 
              to powerful mobile apps on iOS and Android. Our team combines creativity with technology to deliver 
              results that impress.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Web Development", description: "Modern frameworks and technologies" },
              { icon: Smartphone, title: "Mobile Apps", description: "iOS and Android applications" },
              { icon: Cloud, title: "Custom Solutions", description: "Tailored to your business needs" }
            ].map((item, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-tech-100 dark:bg-tech-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-10 w-10 text-tech-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Our Projects</h2>
            <p className="text-lg text-muted-foreground">Showcasing our latest work and achievements</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <Card className="overflow-hidden animate-fade-in">
              <div className="relative">
                <img 
                  src={projects[currentProject].image} 
                  alt={projects[currentProject].title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    projects[currentProject].status === 'Live' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                  }`}>
                    {projects[currentProject].status}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{projects[currentProject].title}</CardTitle>
                <CardDescription className="text-lg">{projects[currentProject].description}</CardDescription>
              </CardHeader>
            </Card>
            
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-accent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-accent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentProject ? 'bg-tech-500' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Our Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive solutions for your digital needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-border" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="bg-tech-100 dark:bg-tech-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-tech-500 group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">Ready to start your next project? Let's talk!</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-slide-in-left">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-tech-100 dark:bg-tech-800 rounded-full p-3">
                      <Mail className="h-6 w-6 text-tech-500" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:cloudmediatech@gmail.com" className="text-tech-500 hover:underline">
                        cloudmediatech@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-tech-100 dark:bg-tech-800 rounded-full p-3">
                      <MessageSquare className="h-6 w-6 text-tech-500" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a href="https://wa.me/918105003858" className="text-tech-500 hover:underline">
                        +91 8105003858
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-tech-100 dark:bg-tech-800 rounded-full p-3">
                      <Instagram className="h-6 w-6 text-tech-500" />
                    </div>
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <a href="https://instagram.com/cloudmediatech" className="text-tech-500 hover:underline">
                        @cloudmediatech
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <Button 
                      className="bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => window.open('https://wa.me/918105003858', '_blank')}
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.open('https://instagram.com/cloudmediatech', '_blank')}
                    >
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-slide-in-right">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>We'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="peer pt-6 pb-2 px-3 border-border focus:border-tech-500 transition-colors"
                      />
                      <label className="absolute left-3 top-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-tech-500">
                        Name
                      </label>
                    </div>
                    
                    <div className="relative">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="peer pt-6 pb-2 px-3 border-border focus:border-tech-500 transition-colors"
                      />
                      <label className="absolute left-3 top-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-tech-500">
                        Email
                      </label>
                    </div>
                    
                    <div className="relative">
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="peer pt-6 pb-2 px-3 border-border focus:border-tech-500 transition-colors resize-none"
                      />
                      <label className="absolute left-3 top-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-tech-500">
                        Message
                      </label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-tech-500 hover:bg-tech-600 text-white py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tech-900 dark:bg-tech-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff852809020e04a21be00df828dab13d1%2F8e15f4d2abf54c0787f0c99de6a0d9ac?format=webp&width=800" 
                  alt="Cloud Media Tech" 
                  className="h-8 w-auto"
                />
                <span className="font-poppins font-bold text-xl">Cloud Media Tech</span>
              </div>
              <p className="text-gray-300">
                Innovative Web & Mobile Solutions for Every Business
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Services</a>
                <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <div className="space-y-2">
                <p className="text-gray-300">Web Development</p>
                <p className="text-gray-300">Mobile Apps</p>
                <p className="text-gray-300">UI/UX Design</p>
                <p className="text-gray-300">Cloud Integration</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="mailto:cloudmediatech@gmail.com" className="block text-gray-300 hover:text-white transition-colors">
                  cloudmediatech@gmail.com
                </a>
                <a href="https://wa.me/918105003858" className="block text-gray-300 hover:text-white transition-colors">
                  WhatsApp: +91 8105003858
                </a>
                <a href="https://instagram.com/cloudmediatech" className="block text-gray-300 hover:text-white transition-colors">
                  @cloudmediatech
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 Cloud Media Tech. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
