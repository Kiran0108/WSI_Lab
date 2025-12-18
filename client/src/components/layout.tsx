import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Youtube, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import wsiLogo from "@assets/logo_1766052064317.png";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

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
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src={wsiLogo} 
              alt="WSI Lab" 
              className="h-12 transition-transform group-hover:scale-105 duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative",
                  location === item.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {location === item.href && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                  />
                )}
              </Link>
            ))}
            <Button size="sm" variant="default" className="ml-8 rounded-full">
              Contact Us
            </Button>
          </nav>

          {/* Modern Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden relative w-10 h-10 flex items-center justify-center group"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-center items-center">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                className="absolute w-6 h-0.5 bg-foreground transition-colors group-hover:bg-primary"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute w-6 h-0.5 bg-foreground transition-colors group-hover:bg-primary"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                className="absolute w-6 h-0.5 bg-foreground transition-colors group-hover:bg-primary"
              />
            </div>
          </button>
        </div>
      </header>

      {/* Modern Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 xl:hidden"
            />
            
            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-16 right-0 bottom-0 w-full sm:w-80 bg-background border-l backdrop-blur-xl z-40 xl:hidden"
            >
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
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src={wsiLogo} 
                  alt="WSI Lab" 
                  className="h-8"
                />
              </div>
              <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
                Pioneering the future of material science and nanotechnology through innovative research and interdisciplinary collaboration.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
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
                  <span>123 Science Drive, Tech Block B<br />University Campus, CA 90210</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span>contact@arl-lab.edu</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2024 WSI Lab. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
