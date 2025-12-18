import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

export default function Publications() {
  const publications = [
    {
      year: 2024,
      title: "Enhanced Stability in Perovskite Solar Cells via Interface Engineering",
      authors: "S. Chen, A. Vance, et al.",
      journal: "Nature Energy",
      volume: "9",
      pages: "112-120",
      link: "#"
    },
    {
      year: 2024,
      title: "Graphene-based FETs for Real-time Glucose Monitoring",
      authors: "E. White, D. Kim, A. Vance",
      journal: "ACS Nano",
      volume: "18",
      pages: "4500-4512",
      link: "#"
    },
    {
      year: 2023,
      title: "Solid-state Electrolytes: A Review",
      authors: "M. Thorne, A. Vance",
      journal: "Chemical Reviews",
      volume: "123",
      pages: "800-850",
      link: "#"
    },
    {
      year: 2023,
      title: "Quantum Dot Synthesis Automation",
      authors: "L. Wong, A. Vance",
      journal: "Journal of Materials Chemistry C",
      volume: "11",
      pages: "300-310",
      link: "#"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
        <p className="text-xl text-muted-foreground">
          Disseminating our findings to the global scientific community.
        </p>
      </div>

      <div className="space-y-8">
        {publications.map((pub, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 py-6 border-b last:border-0 hover:bg-muted/20 px-4 -mx-4 rounded-lg transition-colors">
            <div className="md:w-24 shrink-0">
              <span className="text-2xl font-bold text-muted-foreground/50">{pub.year}</span>
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-bold leading-tight">
                {pub.title}
              </h3>
              <p className="text-muted-foreground">
                {pub.authors}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-sm text-primary font-medium italic">
                <span>{pub.journal}</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                <span>Vol. {pub.volume}</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                <span>pp. {pub.pages}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Button size="sm" variant="outline" className="gap-2">
                <Download className="h-4 w-4" /> PDF
              </Button>
              <Button size="sm" variant="ghost" className="gap-2">
                <ExternalLink className="h-4 w-4" /> DOI
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
