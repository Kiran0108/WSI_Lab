import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { useLocation } from "wouter";

export default function Projects() {

  const [, setLocation] = useLocation();

  const projects = [
    {
      title: "A Software Package for Conformal Array Analysis",
      status: "Ongoing",
      funding: "ISRO Respond Project (RES-ISTRAC-2022-006)",
      description: "Developing ML models to predict Antenna Performance",
      tags: ["Antenna", "Machine Learning"],
      link: "/projects/conformal-array"
    },
    {
      title: "Design of RF Energy Harvesting System",
      status: "Ongoing",
      funding: "",
      description: "Developing a system to harvest energy from RF signals",
      tags: ["RF Design", "Energy Harvesting"],
      link: "/projects/rf-energy-harvesting"
    },
    {
      title: "UV Lithography for Antenna Fabrication",
      status: "completed",
      funding: "",
      description: "Fabricated a 2x2 Array Antenna using UV Lithography",
      tags: ["RF Design", "Antenna Fabrication"],
      link: "https://www.youtube.com/shorts/gi3Ay7hOBXM"
    },
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
          <Card
            key={i}
            onClick={() => {
              if (project.link.startsWith("http")) {
                window.open(project.link, "_blank");
              } else {
                setLocation(project.link);
              }
            }}
            className="group hover:shadow-md transition-all cursor-pointer"
          >
            <CardContent className="p-8 flex flex-col md:flex-row gap-6 justify-between items-start">
              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground font-mono">
                    {project.funding}
                  </span>
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