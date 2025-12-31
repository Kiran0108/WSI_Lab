import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowUpDown } from "lucide-react";
import { publications } from "@/data/research";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SortKey = "year" | "title" | "journal";

export default function Publications() {
  const [sortKey, setSortKey] = useState<SortKey>("year");
  const [ascending, setAscending] = useState(false); // Default to newest first
  const [query, setQuery] = useState("");

  const processedPublications = useMemo(() => {
    let list = [...publications];

    // 1. Filter
    if (query) {
      const lowerQuery = query.toLowerCase();
      list = list.filter((p) =>
        `${p.title} ${p.authors} ${p.journal}`.toLowerCase().includes(lowerQuery)
      );
    }

    // 2. Sort
    list.sort((a, b) => {
      let A: any = a[sortKey];
      let B: any = b[sortKey];

      // Handle numeric year vs string title/journal
      if (sortKey === "year") {
        A = Number(A);
        B = Number(B);
      } else {
        A = A.toString().toLowerCase();
        B = B.toString().toLowerCase();
      }

      if (A < B) return ascending ? -1 : 1;
      if (A > B) return ascending ? 1 : -1;
      return 0;
    });

    return list;
  }, [sortKey, ascending, query]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
          <p className="text-xl text-muted-foreground">
            Disseminating our findings to the global scientific community.
          </p>
        </div>

        {/* SORT & FILTER CONTROLS */}
        <div className="flex gap-3 flex-wrap">
          <input
            placeholder="Search publications..."
            className="px-4 py-2 rounded-full border bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary h-10 w-full md:w-auto"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Select value={sortKey} onValueChange={(val) => setSortKey(val as SortKey)}>
            <SelectTrigger className="w-[160px] rounded-full h-10 border-slate-200 focus:ring-1 focus:ring-primary">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            
            <SelectContent 
              align="center" 
              position="popper" 
              sideOffset={4}
              className="rounded-3xl p-2 shadow-lg border-slate-200"
            >
              <SelectItem
                value="year"
                className="rounded-full cursor-pointer pl-4 my-1 focus:bg-accent focus:text-accent-foreground"
              >
                Year
              </SelectItem>
              <SelectItem
                value="title"
                className="rounded-full cursor-pointer pl-4 my-1 focus:bg-accent focus:text-accent-foreground"
              >
                Title
              </SelectItem>
              <SelectItem
                value="journal"
                className="rounded-full cursor-pointer pl-4 my-1 focus:bg-accent focus:text-accent-foreground"
              >
                Journal
              </SelectItem>
            </SelectContent>
          </Select>

          <button
            onClick={() => setAscending(!ascending)}
            className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm hover:bg-accent transition-colors h-10"
          >
            <ArrowUpDown className="h-4 w-4" />
            {ascending ? "Oldest First" : "Newest First"}
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {processedPublications.map((pub, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-6 md:gap-12 py-6 border-b last:border-0 hover:bg-muted/20 px-4 -mx-4 rounded-lg transition-colors"
          >
            <div className="md:w-24 shrink-0">
              <span className="text-2xl font-bold text-muted-foreground/50">
                {pub.year}
              </span>
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

                {pub.volume && (
                  <>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span>Vol. {pub.volume}</span>
                  </>
                )}

                {pub.pages && (
                  <>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span>pp. {pub.pages}</span>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* UPDATED LINK BUTTON: Removed PDF, uses pub.link now */}
              <Button asChild size="sm" variant="outline" className="gap-2 rounded-full">
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" /> View Paper
                </a>
              </Button>
            </div>
          </div>
        ))}

        {processedPublications.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No publications found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}