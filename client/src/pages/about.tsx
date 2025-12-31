import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About WSI & 6G Research Lab</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8 text-justify">
            The Wireless Sensing and Imaging (WSI) Laboratory and the 6G Research Lab at SRM University AP operate under the same research leadership and team. Together, they focus on developing advanced wireless technologies spanning RF systems, antenna design, wireless sensing and radar, electromagnetic imaging, and intelligent signal processing using machine learning.
          </p>

          <div className="grid md:grid-cols-2 gap-12 my-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=800&q=80" 
                alt="Lab Meeting" 
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-justify">
                To conduct impactful research in wireless sensing, RF systems, and electromagnetic technologies while training skilled engineers and researchers to solve real-world challenges.
              </p>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800&q=80" 
                alt="Research Analysis" 
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-justify">
                To build a globally recognized research ecosystem in wireless sensing, imaging, and next-generation communication technologies.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">History</h2>
          <p className="text-justify">
            Since its inception, the WSI Lab and the 6G Research Lab have jointly contributed to research in wireless communication, sensing, and imaging through innovative system designs, high-fidelity simulations, experimental validation, and high-impact publications.
          </p>
        </div>
      </div>
    </div>
  );
}