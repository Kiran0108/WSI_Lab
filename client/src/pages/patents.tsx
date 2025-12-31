import { useState, useMemo } from "react";
import { patents } from "@/data/research";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileCheck, ArrowUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SortKey = "publicationDate" | "title" | "inventors";

function parseDate(d: string) {
  const [day, month, year] = d.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export default function Patents() {
  const [sortKey, setSortKey] = useState<SortKey>("publicationDate");
  const [ascending, setAscending] = useState(false);
  const [query, setQuery] = useState("");

  const processedPatents = useMemo(() => {
    let list = [...patents];

    if (query) {
      list = list.filter((p) =>
        `${p.title} ${p.inventors}`.toLowerCase().includes(query.toLowerCase())
      );
    }

    list.sort((a, b) => {
      let A: any,
        B: any;

      if (sortKey === "publicationDate") {
        A = parseDate(a.publicationDate).getTime();
        B = parseDate(b.publicationDate).getTime();
      } else {
        A = a[sortKey].toLowerCase();
        B = b[sortKey].toLowerCase();
      }

      return ascending ? (A > B ? 1 : -1) : (A < B ? 1 : -1);
    });

    return list;
  }, [sortKey, ascending, query]);

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Patents</h1>

        <div className="flex gap-3 flex-wrap">
          {/* Search Input */}
          <input
            placeholder="Search title or author..."
            className="px-4 py-2 rounded-full border bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary h-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* CUSTOM STYLED SELECT COMPONENT */}
          <Select value={sortKey} onValueChange={(val) => setSortKey(val as SortKey)}>
            <SelectTrigger className="w-[180px] rounded-full h-10 border-slate-200 focus:ring-1 focus:ring-primary">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            
            {/* - align="center": Centers the menu under the button.
                - position="popper": Floats the menu below instead of overlapping.
                - rounded-3xl: Matches the heavy curve of the inner pills.
            */}
            <SelectContent 
              align="center" 
              position="popper" 
              sideOffset={4}
              className="rounded-3xl p-2 shadow-lg border-slate-200"
            >
              <SelectItem
                value="publicationDate"
                className="rounded-full cursor-pointer pl-4 my-1 focus:bg-accent focus:text-accent-foreground"
              >
                Publication Date
              </SelectItem>
              <SelectItem
                value="title"
                className="rounded-full cursor-pointer pl-4 my-1 focus:bg-accent focus:text-accent-foreground"
              >
                Title
              </SelectItem>
              <SelectItem
                value="inventors"
                className="rounded-full cursor-pointer pl-4 my-1 focus:bg-accent focus:text-accent-foreground"
              >
                Authors
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Sort Button */}
          <button
            onClick={() => setAscending(!ascending)}
            className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm hover:bg-accent transition-colors h-10"
          >
            <ArrowUpDown className="h-4 w-4" />
            {ascending ? "Ascending" : "Descending"}
          </button>
        </div>
      </div>

      <div className="grid gap-8">
        {processedPatents.map((patent, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="h-2 bg-primary" />
            <CardContent className="p-8 space-y-4">
              <div className="flex justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{patent.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {patent.inventors}
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-11 h-11 flex items-center justify-center bg-muted rounded-full shrink-0">
                    <FileCheck className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <Badge>{patent.status}</Badge>
                <span>
                  <strong>Filed:</strong> {patent.date}
                </span>
                <span>
                  <strong>Published:</strong> {patent.publicationDate}
                </span>
                <span className="font-mono">
                  <strong>App No:</strong> {patent.applicationNo}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}