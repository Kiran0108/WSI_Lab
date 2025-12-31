import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Youtube, Mail, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import wsiLogo from "@assets/logo_1766052064317.png";
import sixgLogo from "@/assets/logos/6g_logo.png";
import srmLogo from "@/assets/logos/srm_logo.png";


export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/people", label: "People" },
    { href: "/projects", label: "Projects" },
    { href: "/publications", label: "Publications" },
    { href: "/patents", label: "Patents" },
    { href: "/equipment", label: "Equipment" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      
      {/* HEADER */}
      {/* The header container allows clicks to pass through the empty bottom area */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none">
        
        {/* Background Layer (Extended Height for Gradient) 
            - h-32: Taller than the actual nav content (h-24) to allow room for the fade.
            - mask-image: Keeps the top 40% solid, then fades to transparent at the bottom.
        */}
        <div 
          className={cn(
            "absolute top-0 left-0 right-0 h-40 w-full transition-all duration-700 ease-out",
            scrolled 
              ? "bg-background/60 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/40" 
              : "bg-background/20 backdrop-blur-md"
          )}
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)"
          }}
        />

        {/* Content Container (Pointer events re-enabled here) */}
        <div className="relative z-10 w-full h-24 px-6 lg:px-10 flex items-center justify-between pointer-events-auto">

          {/* Left: WSI + 6G (Far Left) */}
          <Link href="/" className="flex items-center gap-4 lg:gap-6 group shrink-0">
            <img 
              src={wsiLogo} 
              alt="WSI Lab" 
              className="h-10 lg:h-12 transition-transform group-hover:scale-105 duration-300 drop-shadow-md"
            />
            <img 
              src={sixgLogo} 
              alt="6G Research Lab" 
              className="h-8 lg:h-10 transition-transform group-hover:scale-105 duration-300 drop-shadow-md"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative whitespace-nowrap drop-shadow-sm",
                  location === item.href
                    ? "text-foreground font-bold"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.label}
                {location === item.href && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/80 blur-[1px]"
                    initial={false}
                  />
                )}
              </Link>
            ))}
            <a href="mailto:rupesh.k@srmap.edu.in">
              <Button size="sm" variant="default" className="ml-4 rounded-full whitespace-nowrap shadow-lg shadow-primary/20 opacity-90 hover:opacity-100">
                Contact Us
              </Button>
            </a>
          </nav>

          {/* Right: SRM (Far Right) */}
          <div className="hidden xl:flex items-center shrink-0">
            <a 
              href="https://srmap.edu.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img 
                src={srmLogo} 
                alt="SRM University" 
                className="h-10 lg:h-12 drop-shadow-md"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden relative w-10 h-10 flex items-center justify-center group ml-auto"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-center items-center">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                className="absolute w-6 h-0.5 bg-foreground transition-colors group-hover:bg-primary shadow-sm"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute w-6 h-0.5 bg-foreground transition-colors group-hover:bg-primary shadow-sm"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                className="absolute w-6 h-0.5 bg-foreground transition-colors group-hover:bg-primary shadow-sm"
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 xl:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-background/90 border-l backdrop-blur-2xl z-50 xl:hidden"
            >
              <div className="flex flex-col h-full pt-24">
                <nav className="flex flex-col p-6 space-y-2">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link 
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block px-4 py-3 rounded-lg font-medium transition-all duration-300",
                          location === item.href
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-white/10"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={cn(
        "flex-1 relative z-0",
        location !== "/" ? "pt-28" : "pt-0"
      )}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t py-12 mt-16 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-6 mb-6">
                <img src={wsiLogo} alt="WSI Lab" className="h-10 opacity-90" />
                <img src={sixgLogo} alt="6G Research Lab" className="h-8 opacity-90" />
                <a 
                  href="https://srmap.edu.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <img src={srmLogo} alt="SRM University" className="h-10 opacity-90" />
                </a>
              </div>

              <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
                Pioneering the future of material science and nanotechnology through innovative research and interdisciplinary collaboration.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.youtube.com/@WSILab-x9d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif font-semibold mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/projects"><a className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Projects</a></Link></li>
                <li><Link href="/publications"><a className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Publications</a></Link></li>
                <li><Link href="/people"><a className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Team</a></Link></li>
                <li><Link href="/gallery"><a className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Gallery</a></Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold mb-4 text-foreground">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  <span>S514/ JC 215, SRM University AP, Neerukonda, Andhra Pradesh</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span>rupesh.k@srmap.edu.in</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>+91 9618492734</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2025 WSI Lab. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}