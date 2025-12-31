import WSIImg from "@/assets/people/WSI.jpg";
import WSI1Img from "@/assets/people/EPIC.jpg";
export default function Gallery() {

  const images = [
    { type: "image", src: WSIImg, caption: "WSI Lab Team" },
    {type: "image", src:WSI1Img, caption: "WSI&6G Research"},
    { 
      type: "video", 
      src: "https://www.youtube.com/embed/tqyITIsy7CU", 
      caption: "WSI Lab Overview" 
    }
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
        {images.map((item, i) => (
          <div
            key={i}
            className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-md bg-black"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="relative w-full aspect-video">
                <iframe
                  src={item.src}
                  title={item.caption}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
              <span className="text-white font-medium text-lg">
                {item.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}