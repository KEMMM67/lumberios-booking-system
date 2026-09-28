import { useState } from "react";
import heroBeach from "@/assets/hero-beach.jpg";
import poolBeachview from "@/assets/pool-beachview.jpg";
import sunset from "@/assets/sunset.jpg";
import poolSign from "@/assets/pool-signage.jpg";
import infinityPool from "@/assets/infinity-pool.jpg";
import poolRelax from "@/assets/pool-relax.jpg";
import stairsOcean from "@/assets/stairs-ocean.jpg";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const images = [
  { src: heroBeach, alt: "Beach shoreline", span: "row-span-2" },
  { src: poolSign, alt: "Resort pool with signage", span: "" },
  { src: sunset, alt: "Sunset over the sea", span: "row-span-2" },
  { src: infinityPool, alt: "Infinity pool", span: "" },
  { src: poolBeachview, alt: "Pool with beach view", span: "" },
  { src: poolRelax, alt: "Guest relaxing by pool", span: "row-span-2" },
  { src: stairsOcean, alt: "Stairs to the beach", span: "" },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">Gallery</div>
          <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
            Moments by the <span className="italic">sea.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">A glimpse into the everyday magic of Lumberio's.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`reveal group relative overflow-hidden rounded-2xl ${img.span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-smooth flex items-end p-4">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-smooth">
                  {img.alt}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={activeIndex !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-transparent border-0 shadow-none [&>button]:text-white [&>button]:opacity-80 [&>button]:hover:opacity-100">
          <DialogTitle className="sr-only">Resort photo gallery</DialogTitle>
          <Carousel opts={{ startIndex: activeIndex ?? 0 }} className="w-full">
            <CarouselContent>
              {images.map((img, i) => (
                <CarouselItem key={i}>
                  <img src={img.src} alt={img.alt} className="w-full max-h-[85vh] object-contain rounded-xl" />
                  <p className="mt-3 text-center text-white/80 text-sm">{img.alt}</p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="right-2 md:-right-12 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
