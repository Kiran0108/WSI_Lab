import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, GraduationCap } from "lucide-react";
import { Linkedin } from "lucide-react";

// === Local Images ===
import rupeshImg from "@/assets/people/rupesh.jpg";
import ramaraoImg from "@/assets/people/ramarao.png";
import abzalImg from "@/assets/people/abzal.png";
import praveenImg from "@/assets/people/praveen.png";
import suryaImg from "@/assets/people/surya.png";
import chandraImg from "@/assets/people/chandra.png";
import gayatriImg from "@/assets/people/gayatri.png";
import sravaniImg from "@/assets/people/sravani.png";
import ammanuelImg from "@/assets/people/ammanuel.jpg";
import murthyImg from "@/assets/people/murthy.png";
import prasannaImg from "@/assets/people/prasanna.png";
import kiranImg from "@/assets/people/kiran.png";
import navyaImg from "@/assets/people/navya.png";
import varshithaImg from "@/assets/people/varshitha.png";

// === PNG Detector ===
function isPng(src: string) {
  return src.toLowerCase().endsWith(".png");
}

const peopleData = {
  professors: [
    { name: "Prof. Rupesh Kumar", image: rupeshImg, email: "rupesh.k@srmap.edu.in", interests: ["Antennas, Radar, IoT, Smart Agriculture"] },
    { name: "Prof. T. Rama Rao", image: ramaraoImg, email: "ramarao.t@srmap.edu.in", interests: ["Antennas, Radar"] }
  ],

  postdocs: [
    { name: "Dr. S. Md. Abzal", role: "Postdoctoral Fellow", image: abzalImg, email: "mohammedabzal.s@srmap.edu.in", interests: ["Synthesis and Fabrication of 2D materials for THz Applications"] }
  ],

  phd: [
    { name: "Mr. Praveen", role: "PhD Scholar", image: praveenImg, email: "praveenkitti_burri@srmap.edu.in", interests: ["RIS, Antenna Fabrication, UV Lithography"] },
    { name: "Mr. Surya Prakash", role: "PhD Scholar", image: suryaImg, email: "suryaprakash_gummadi@srmap.edu.in", interests: ["Non Contact Physiological Signs Detection"] },
    { name: "Mr. Chandra Wadde", role: "PhD Scholar", image: chandraImg, email: "chandra_vadde@srmap.edu.in", interests: ["FMCW Radar Imaging"] },
    { name: "Ms. Gayatri Routhu", role: "JRF/PhD Scholar", image: gayatriImg, email: "gayatri.r@srmap.edu.in", interests: ["ML for RF Design Workflows"] },
    { name: "Ms. Sravani", role: "PhD Scholar", image: sravaniImg, email: "sravani_nagireddy@srmap.edu.in", interests: ["DMA for 6G Applications"] },
    { name: "Mr. Amanuel", role: "PhD Scholar", image: ammanuelImg, email: "amanuel_terefetegegn@srmap.edu.in", interests: ["RF Energy Harvesting System"] }
  ],

  btech: [
    { name: "Pondala Venkata Ramana Murthy", role: "Undergraduate Researcher", image: murthyImg, email: "venkataramanamurthy_pondala@srmap.edu.in", interests: ["Radar Imaging using SPARSE Techniques, IoT"] },
    { name: "Prasanna Kumar Seelam", role: "Undergraduate Researcher", image: prasannaImg, email: "prasannakumar_seelam@srmap.edu.in", interests: ["RF Frontend Design, Antenna Fabrication, IoT"] },
    { name: "Damarla Venkata Naga Sai Kiran", role: "Undergraduate Researcher", image: kiranImg, email: "venkatanagasaikiran_damarla@srmap.edu.in", interests: ["SDR, Radar Imaging, IoT"] },
    { name: "Navya Sree Gottumukkala", role: "Undergraduate Researcher", image: navyaImg, email: "navyasree_gottumukkala@srmap.edu.in", interests: ["IoT"] },
    { name: "Varshitha Pillarsetty", role: "Undergraduate Researcher", image: varshithaImg, email: "varshitha_pillarisetty@srmap.edu.in", interests: ["RF Energy Harvesting System"] }
  ]
};

function PersonCard({ person }: { person: any }) {
  return (
    <Card className="flex flex-col bg-muted/30 border-none hover:shadow-xl transition">
      <CardHeader className="p-0">
        <div className="aspect-square w-full overflow-hidden relative">
          {isPng(person.image) && (
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-muted to-background" />
          )}
          <img
            src={person.image}
            alt={person.name}
            loading="lazy"
            decoding="async"
            className={`relative z-10 w-full h-full transition duration-500 ease-out hover:scale-[1.03]
              ${isPng(person.image) ? "object-contain p-6" : "object-cover"}
              [filter:contrast(1.04)_saturate(1.05)_brightness(1.02)]
              will-change-transform`}
          />
          <div className="absolute inset-0 ring-1 ring-black/5 pointer-events-none" />
        </div>
      </CardHeader>

      <CardContent className="p-6 flex flex-col items-start h-full">
        <h3 className="font-serif font-bold text-xl">{person.name}</h3>
        <p className="text-primary text-sm mb-4">{person.role}</p>

        <div className="flex flex-wrap gap-2 max-w-full mb-4">
          {person.interests.map((interest: string) => (
            <span key={interest} className="inline-flex max-w-full break-words rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-xs font-medium leading-snug">
              {interest}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto pt-4 border-t w-full">
          <a href={`mailto:${person.email}`} className="hover:text-primary text-muted-foreground"><Mail className="h-4 w-4" /></a>
          <a href="#" className="hover:text-primary text-muted-foreground"><Linkedin className="h-4 w-4" /></a>
          <a href="#" className="hover:text-primary text-muted-foreground"><GraduationCap className="h-4 w-4" /></a>
        </div>
      </CardContent>
    </Card>
  );
}

export default function People() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>

      <Tabs defaultValue="professors">
        <TabsList className="mb-8 flex flex-wrap gap-2 bg-transparent p-0">
          {["professors", "postdocs", "phd", "btech"].map((t) => (
            <TabsTrigger key={t} value={t} className="px-6 py-2 rounded-full border data-[state=active]:bg-primary data-[state=active]:text-white">
              {t.toUpperCase()}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(peopleData).map(([key, list]: any) => (
          <TabsContent key={key} value={key}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {list.map((p: any, i: number) => <PersonCard key={i} person={p} />)}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
