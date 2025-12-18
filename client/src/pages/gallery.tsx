export default function Gallery() {
  // Using placeholders for gallery for now
  const images = [
    { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80", caption: "Chemical Analysis Lab" },
    { src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80", caption: "Microscopy Suite" },
    { src: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80", caption: "Clean Room Facility" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", caption: "Student Workshop" },
    { src: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80", caption: "Annual Science Fair" },
    { src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80", caption: "Reaction Chambers" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
        <p className="text-xl text-muted-foreground">
          A glimpse into our daily life and research activities.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-md">
            <img 
              src={img.src} 
              alt={img.caption}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white font-medium text-lg">{img.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
