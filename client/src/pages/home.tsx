import { publications, patents } from "@/data/research";
import hero from "@/assets/people/WSI.jpg";
import { Users, FileText, BookOpen, Folder } from "lucide-react";

export default function Home() {
  // 1. Combine data
  const allItems = [...publications, ...patents];

  // 2. Sort by date/year (Newest first) and limit to top 8
  const latestHighlights = allItems
    .sort((a, b) => {
      // Handle different date formats (publications have 'year', patents have 'date')
      const dateA = "year" in a ? Number(a.year) : new Date(a.date).getFullYear();
      const dateB = "year" in b ? Number(b.year) : new Date(b.date).getFullYear();
      return dateB - dateA;
    })
    .slice(0, 8); // <--- CHANGE THIS NUMBER to show more or fewer items

  return (
    <main className="bg-[#fafafa] overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-[560px] overflow-hidden rounded-b-[3rem]">
        <img
          src={hero}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Lab"
        />
      </section>

      {/* RESEARCH HIGHLIGHTS */}
      <section className="relative -mt-28 px-6 pb-20">
        <div
          className="mx-auto max-w-7xl rounded-[2.5rem]
                      bg-white/60 backdrop-blur-2xl
                      border border-white/40 shadow-2xl
                      px-10 pt-10 pb-12
                      overflow-hidden"
        >
          <h2 className="text-2xl font-bold text-[#5B7F1B] mb-8">
            Latest Research Highlights
          </h2>

          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden py-4">
              {/* Added style={{ animationDuration: '50s' }} to slow down the scroll.
                  Increase the number (e.g., '80s') to make it slower.
              */}
              <div 
                className="flex gap-6 w-max animate-carousel carousel-mask
                           hover:[animation-play-state:paused]"
                style={{ animationDuration: "50s" }} 
              >
                {/* We map the limited list twice to create the infinite loop effect */}
                {[...latestHighlights, ...latestHighlights].map((item, i) => (
                  <div
                    key={i}
                    className="w-[280px] flex-shrink-0 rounded-2xl
                               bg-white/80 backdrop-blur-xl
                               p-6 shadow-lg"
                  >
                    <span className="text-xs font-semibold text-[#6DBA2D]">
                      {"year" in item ? "PUBLICATION" : "PATENT"}
                    </span>

                    <h3 className="mt-2 font-medium text-gray-900 leading-snug line-clamp-3">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-600">
                      {"year" in item ? item.year : item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        className="max-w-6xl mx-auto pt-12 pb-24 px-6
                    grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
      >
        <Stat icon={<Users />} number="15+" label="Lab Members" />
        <Stat icon={<FileText />} number="20+" label="Patents" />
        <Stat icon={<BookOpen />} number="10+" label="Publications" />
        <Stat icon={<Folder />} number="10+" label="Projects" />
      </section>
    </main>
  );
}

function Stat({ icon, number, label }: any) {
  return (
    <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-[#EAF6DF] text-[#6DBA2D] flex items-center justify-center">
        {icon}
      </div>
      <div className="text-3xl font-bold text-[#6DBA2D]">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}