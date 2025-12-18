import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Perovskite Solar Cells Stability",
      status: "Ongoing",
      funding: "NSF Grant #123456",
      description: "Investigating the long-term stability of organic-inorganic halide perovskites under ambient conditions.",
      tags: ["Energy", "Materials", "Sustainability"]
    },
    {
      title: "Graphene-based Biosensors",
      status: "Completed",
      funding: "NIH Grant #987654",
      description: "Development of ultra-sensitive graphene field-effect transistors for early detection of biomarkers.",
      tags: ["Biotech", "Nanotech", "Health"]
    },
    {
      title: "Solid State Battery Electrolytes",
      status: "Ongoing",
      funding: "DOE Grant #555555",
      description: "Synthesizing novel ceramic electrolytes for safer, higher energy density lithium-ion batteries.",
      tags: ["Energy Storage", "Ceramics"]
    },
    {
      title: "Quantum Dot Displays",
      status: "New",
      funding: "Industry Partner",
      description: "Optimizing quantum efficiency of cadmium-free quantum dots for next-gen display technology.",
      tags: ["Photonics", "Industry"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Research Projects</h1>
        <p className="text-xl text-muted-foreground">
          Current and past investigations pushing the boundaries of science.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, i) => (
          <Card key={i} className="group hover:shadow-md transition-all">
            <CardContent className="p-8 flex flex-col md:flex-row gap-6 justify-between items-start">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground font-mono">{project.funding}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground max-w-2xl text-lg">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
