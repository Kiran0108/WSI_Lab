import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Linkedin, GraduationCap } from "lucide-react";

const peopleData = {
  professors: [
    {
      name: "Dr. Alexander Vance",
      role: "Principal Investigator",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      email: "alex.vance@uni.edu",
      interests: ["Nanotechnology", "Quantum Materials", "Photonics"],
      bio: "Dr. Vance leads the ARL with over 20 years of experience in material science."
    }
  ],
  postdocs: [
    {
      name: "Dr. Sarah Chen",
      role: "Postdoctoral Fellow",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      email: "sarah.c@uni.edu",
      interests: ["Solar Cells", "Perovskites"],
    },
    {
      name: "Dr. Marcus Thorne",
      role: "Postdoctoral Fellow",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      email: "m.thorne@uni.edu",
      interests: ["Battery Tech", "Electrochemistry"],
    }
  ],
  phd: [
    {
      name: "Emily White",
      role: "PhD Candidate",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      email: "emily.w@uni.edu",
      interests: ["Biosensors"],
    },
    {
      name: "David Kim",
      role: "PhD Candidate",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      email: "d.kim@uni.edu",
      interests: ["2D Materials"],
    },
    {
      name: "Priya Patel",
      role: "PhD Candidate",
      image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?w=400&h=400&fit=crop",
      email: "p.patel@uni.edu",
      interests: ["Microfluidics"],
    }
  ],
  btech: [
    {
      name: "James Wilson",
      role: "Undergraduate Researcher",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
      email: "j.wilson@uni.edu",
      interests: ["Data Analysis"],
    },
    {
      name: "Lisa Wong",
      role: "Undergraduate Researcher",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      email: "l.wong@uni.edu",
      interests: ["Lab Automation"],
    }
  ]
};

function PersonCard({ person }: { person: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-none bg-muted/30">
      <CardHeader className="p-0">
        <div className="aspect-square w-full overflow-hidden">
          <img 
            src={person.image} 
            alt={person.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="font-serif font-bold text-xl mb-1">{person.name}</h3>
        <p className="text-primary font-medium text-sm mb-4">{person.role}</p>
        
        {person.bio && <p className="text-muted-foreground text-sm mb-4">{person.bio}</p>}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {person.interests.map((interest: string) => (
            <Badge key={interest} variant="secondary" className="text-xs font-normal">
              {interest}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 mt-auto pt-4 border-t">
          <a href={`mailto:${person.email}`} className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <GraduationCap className="h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default function People() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
        <p className="text-xl text-muted-foreground">
          Meet the researchers, students, and staff driving innovation at ARL.
        </p>
      </div>

      <Tabs defaultValue="professors" className="w-full">
        <TabsList className="mb-8 w-full justify-start h-auto flex-wrap gap-2 bg-transparent p-0">
          <TabsTrigger value="professors" className="data-[state=active]:bg-primary data-[state=active]:text-white border px-6 py-2 rounded-full">Professors</TabsTrigger>
          <TabsTrigger value="postdocs" className="data-[state=active]:bg-primary data-[state=active]:text-white border px-6 py-2 rounded-full">Post Docs</TabsTrigger>
          <TabsTrigger value="phd" className="data-[state=active]:bg-primary data-[state=active]:text-white border px-6 py-2 rounded-full">PhD Students</TabsTrigger>
          <TabsTrigger value="btech" className="data-[state=active]:bg-primary data-[state=active]:text-white border px-6 py-2 rounded-full">B.Tech Students</TabsTrigger>
        </TabsList>

        <TabsContent value="professors" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {peopleData.professors.map((p, i) => <PersonCard key={i} person={p} />)}
          </div>
        </TabsContent>
        <TabsContent value="postdocs" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {peopleData.postdocs.map((p, i) => <PersonCard key={i} person={p} />)}
          </div>
        </TabsContent>
        <TabsContent value="phd" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {peopleData.phd.map((p, i) => <PersonCard key={i} person={p} />)}
          </div>
        </TabsContent>
        <TabsContent value="btech" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {peopleData.btech.map((p, i) => <PersonCard key={i} person={p} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
