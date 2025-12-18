import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About the Lab</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8">
            The Advanced Research Laboratory (ARL) is a premier interdisciplinary research center dedicated to solving critical challenges in energy, healthcare, and sustainability through nanotechnology.
          </p>

          <div className="grid md:grid-cols-2 gap-12 my-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=800&q=80" 
                alt="Lab Meeting" 
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p>
                To advance the frontiers of material science while training the next generation of scientific leaders. We believe in open collaboration, rigorous inquiry, and the translation of fundamental discoveries into real-world impact.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800&q=80" 
                alt="Research Analysis" 
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p>
                A world where advanced materials enable clean energy for all, personalized medicine, and sustainable manufacturing processes.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">History</h2>
          <p>
            Founded in 2010 by Dr. Alexander Vance, ARL started as a small photonics group. Over the past decade, we have expanded to include over 25 researchers from diverse backgrounds including chemistry, physics, and engineering. Our lab has secured over $10M in federal funding and produced numerous patents and high-impact publications.
          </p>

          <div className="bg-muted p-8 rounded-xl mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Join Us</h3>
            <p className="mb-6">
              We are always looking for motivated students and postdocs to join our team. 
              If you are passionate about nanotechnology and material science, we want to hear from you.
            </p>
            <Button size="lg">Apply for a Position</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
