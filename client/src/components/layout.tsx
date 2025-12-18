import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Beaker, Menu, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
            <div className="bg-primary text-primary-foreground p-2 rounded-md transition-transform group-hover:scale-105">
              <Beaker className="h-5 w-5" />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-foreground">
              Advanced Research Lab
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === item.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" variant="default" className="ml-4">
              Contact Us
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      location === item.href
                        ? "text-primary font-semibold"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Beaker className="h-5 w-5 text-primary" />
                <span className="font-serif font-bold text-lg">Advanced Research Lab</span>
              </div>
              <p className="text-muted-foreground max-w-sm mb-6">
                Pioneering the future of material science and nanotechnology through innovative research and interdisciplinary collaboration.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                {/* Add more social icons as needed */}
              </div>
            </div>
            
            <div>
              <h3 className="font-serif font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">Projects</Link></li>
                <li><Link href="/publications" className="text-sm text-muted-foreground hover:text-primary">Publications</Link></li>
                <li><Link href="/people" className="text-sm text-muted-foreground hover:text-primary">Team</Link></li>
                <li><Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary">Gallery</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>123 Science Drive, Tech Block B<br />University Campus, CA 90210</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>contact@arl-lab.edu</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Advanced Research Lab. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
