import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Microscope, Users, FileText, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/modern_academic_research_laboratory_interior.png";
import wsiLogo from "@assets/logo_1766052064317.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Lab Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-transparent md:via-background/60" />
          <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl animate-in slide-in-from-left-8 duration-700 fade-in">
            <img 
              src={wsiLogo} 
              alt="WSI Lab" 
              className="h-16 mb-6 drop-shadow-lg"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Advanced Research in Wireless Sensing
            </h1>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="px-8">
                <Link href="/projects">
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 bg-background/40 backdrop-blur-sm hover:bg-background/70">
                <Link href="/about">
                  About
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Active Projects", value: "12+", icon: Microscope },
            { label: "Lab Members", value: "25+", icon: Users },
            { label: "Publications", value: "150+", icon: FileText },
            { label: "Patents", value: "8", icon: Lightbulb },
          ].map((stat, i) => (
            <Card key={i} className="border-none bg-muted/50 hover:bg-muted transition-colors">
              <CardContent className="p-4 md:p-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Explore Our Work</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Research Projects", href: "/projects", desc: "View our current initiatives" },
              { title: "Team", href: "/people", desc: "Meet faculty and students" },
              { title: "Publications", href: "/publications", desc: "Browse publications and patents" },
            ].map((item, i) => (
              <Link key={i} href={item.href}>
                <div className="p-6 rounded-lg border hover:border-primary hover:bg-background/50 transition-all cursor-pointer group">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
