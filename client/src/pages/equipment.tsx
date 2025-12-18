import { Card, CardContent } from "@/components/ui/card";
import { Microscope, Database, Server, Zap, Activity, Layers } from "lucide-react";

export default function Equipment() {
  const equipment = [
    {
      name: "Scanning Electron Microscope",
      model: "Zeiss Sigma 300",
      category: "Imaging",
      description: "High-resolution imaging of surface topography and composition.",
      icon: Microscope
    },
    {
      name: "X-Ray Diffractometer",
      model: "Bruker D8 Advance",
      category: "Analysis",
      description: "Crystal structure analysis of powder and thin film samples.",
      icon: Layers
    },
    {
      name: "Atomic Force Microscope",
      model: "Asylum Research MFP-3D",
      category: "Imaging",
      description: "3D topographical imaging at the atomic scale.",
      icon: Activity
    },
    {
      name: "Sputtering System",
      model: "AJA International ATC 2200",
      category: "Fabrication",
      description: "Thin film deposition of metals and dielectrics.",
      icon: Zap
    },
    {
      name: "High Performance Computing Cluster",
      model: "NVIDIA DGX Station",
      category: "Computing",
      description: "AI-driven material simulation and data analysis.",
      icon: Server
    },
    {
      name: "Raman Spectrometer",
      model: "Horiba LabRAM HR",
      category: "Analysis",
      description: "Vibrational spectroscopy for molecular identification.",
      icon: Database
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Laboratory Equipment</h1>
        <p className="text-xl text-muted-foreground">
          State-of-the-art facilities enabling breakthrough discoveries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item, i) => (
          <Card key={i} className="group hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="h-14 w-14 bg-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <item.icon className="h-7 w-7" />
              </div>
              <div className="text-sm font-medium text-primary mb-2">{item.category}</div>
              <h3 className="text-xl font-bold mb-1">{item.name}</h3>
              <div className="text-sm text-muted-foreground font-mono mb-4">{item.model}</div>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
