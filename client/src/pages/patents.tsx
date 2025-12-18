import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileCheck } from "lucide-react";

export default function Patents() {
  const patents = [
    {
      title: "Method for Synthesizing Large-Area Perovskite Films",
      number: "US 11,234,567 B2",
      date: "Issued Jan 2024",
      inventors: "Alexander Vance, Sarah Chen",
      abstract: "A scalable method for depositing uniform perovskite thin films using slot-die coating with a novel solvent mixture...",
      status: "Granted"
    },
    {
      title: "Wearable Biosensor Device with Integrated Wireless Transmission",
      number: "US 2023/0123456 A1",
      date: "Filed Mar 2023",
      inventors: "Alexander Vance, Emily White",
      abstract: "A flexible patch sensor capable of continuous glucose monitoring and Bluetooth transmission to mobile devices...",
      status: "Pending"
    },
    {
      title: "High-Capacity Cathode Material for Sodium-Ion Batteries",
      number: "US 10,987,654 B2",
      date: "Issued Nov 2022",
      inventors: "Alexander Vance, Marcus Thorne",
      abstract: "A layered oxide cathode material exhibiting superior cycle life and capacity for next-gen sodium batteries...",
      status: "Granted"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Patents</h1>
        <p className="text-xl text-muted-foreground">
          Intellectual property generated from our innovative research.
        </p>
      </div>

      <div className="grid gap-8">
        {patents.map((patent, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="h-2 bg-primary w-full" />
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant={patent.status === "Granted" ? "default" : "secondary"} className="bg-green-600 hover:bg-green-700">
                      {patent.status}
                    </Badge>
                    <span className="text-sm font-mono text-muted-foreground">{patent.number}</span>
                    <span className="text-sm text-muted-foreground">• {patent.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{patent.title}</h3>
                </div>
                <div className="p-3 bg-muted rounded-full">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-[1fr,2fr] gap-8">
                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">Inventors</h4>
                  <p className="font-medium">{patent.inventors}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">Abstract</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {patent.abstract}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
