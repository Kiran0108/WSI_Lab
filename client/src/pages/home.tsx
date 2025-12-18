import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Microscope, Users, FileText, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/modern_academic_research_laboratory_interior.png";
import wsiLogo from "@assets/logo_1766052064317.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Lab Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent md:via-background/50" />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl animate-in slide-in-from-left-8 duration-700 fade-in">
            <img 
              src={wsiLogo} 
              alt="WSI Lab" 
              className="h-24 mb-8 drop-shadow-lg"
            />
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary/80 backdrop-blur-sm border border-secondary text-secondary-foreground text-sm font-medium">
              Leading Innovation in Wireless Sensing & Imaging
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Advanced <br />
              <span className="text-primary">Research</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              We explore the frontiers of nanotechnology and advanced materials to solve tomorrow's energy challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-background/50 backdrop-blur-sm hover:bg-background/80">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Quick Info */}
      <section className="container mx-auto px-4 -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "Active Projects", value: "12+", icon: Microscope },
            { label: "Lab Members", value: "25+", icon: Users },
            { label: "Publications", value: "150+", icon: FileText },
            { label: "Patents Filed", value: "8", icon: Lightbulb },
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card/95 backdrop-blur">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Video Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Latest from the Lab</h2>
            <p className="text-lg text-muted-foreground">
              Watch our latest seminar on "Next-Generation Photovoltaics" presented by Dr. Sarah Chen. 
              Our team discusses the breakthrough efficiency records achieved this quarter.
            </p>
            <Button asChild variant="link" className="p-0 text-primary h-auto font-semibold text-lg">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                Visit our YouTube Channel <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-black relative group">
              {/* Placeholder for YouTube Embed */}
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=ad20sdb" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Preview */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Focus Areas</h2>
            <p className="text-muted-foreground">
              Our multidisciplinary approach bridges the gap between fundamental physics and real-world applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Nanomaterials", desc: "Synthesis and characterization of novel 2D materials." },
              { title: "Energy Storage", desc: "Developing high-capacity batteries and supercapacitors." },
              { title: "Bio-sensing", desc: "Wearable sensors for real-time health monitoring." },
            ].map((area, i) => (
              <div key={i} className="group p-8 rounded-xl bg-background border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Microscope className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
