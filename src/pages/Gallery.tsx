import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import heroResort from "@/assets/hero-resort.jpg";
import garden from "@/assets/garden.jpg";
import rainDance from "@/assets/rain-dance.jpg";
import seafood from "@/assets/seafood.jpg";
import roomClassic from "@/assets/room-classic.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomFamily from "@/assets/room-family.jpg";
import diningBg from "@/assets/dining-bg.jpg";
import beachDrive from "@/assets/beach-drive.jpg";
import redCrabs from "@/assets/red-crabs.jpg";
import waterSports from "@/assets/water-sports.jpg";
import sunset from "@/assets/sunset.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";

const categories = ["All", "Resort", "Rooms", "Food", "Attractions"] as const;
type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
}

const images: GalleryImage[] = [
  { src: heroResort, alt: "Astha Homestay & Beach Resort exterior", category: "Resort" },
  { src: garden, alt: "Lush tropical resort garden", category: "Resort" },
  { src: rainDance, alt: "Rain dance area", category: "Resort" },
  { src: roomClassic, alt: "Classic Garden View Room", category: "Rooms" },
  { src: roomDeluxe, alt: "Deluxe Courtyard View Room", category: "Rooms" },
  { src: roomFamily, alt: "Family Suite", category: "Rooms" },
  { src: seafood, alt: "Bengali seafood platter", category: "Food" },
  { src: diningBg, alt: "Bengali feast with crab and fish", category: "Food" },
  { src: beachDrive, alt: "Drivable beach road in Mandarmani", category: "Attractions" },
  { src: redCrabs, alt: "Red crab colony on the beach", category: "Attractions" },
  { src: waterSports, alt: "Jet ski and water sports", category: "Attractions" },
  { src: sunset, alt: "Sunset over Bay of Bengal", category: "Attractions" },
];

const Gallery = () => {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const headerReveal = useScrollReveal(0.1);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);

  const goNext = useCallback(() => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx + 1) % filtered.length);
  }, [lightboxIdx, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx - 1 + filtered.length) % filtered.length);
  }, [lightboxIdx, filtered.length]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [lightboxIdx, goNext, goPrev]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-bold text-primary-foreground tracking-wide">
            Astha
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors uppercase tracking-wide"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero banner */}
      <section className="pt-28 pb-12 px-6 md:px-12 lg:px-20">
        <div
          ref={headerReveal.ref}
          className={headerReveal.isVisible ? "reveal-visible" : "reveal-hidden"}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body">Gallery</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Moments of <em className="italic">Serenity</em>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-body max-w-xl">
            Explore every corner of Astha Homestay — from our lush gardens to the vibrant coast of Mandarmani.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="px-6 md:px-12 lg:px-20 mb-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-body transition-all duration-300 ${active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-sand-light"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((img, idx) => (
            <GalleryItem key={img.src + active} image={img} index={idx} onClick={() => openLightbox(idx)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center animate-lightbox-overlay"
          style={{ backgroundColor: "hsla(210, 25%, 8%, 0.92)" }}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="max-w-5xl max-h-[85vh] mx-4 animate-lightbox-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={lightboxIdx}
              src={filtered[lightboxIdx].src}
              alt={filtered[lightboxIdx].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-sm animate-lightbox-in"
            />
            <p className="text-center text-sm text-primary-foreground/70 font-body mt-4">
              {filtered[lightboxIdx].alt} &nbsp;·&nbsp; {lightboxIdx + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

function GalleryItem({ image, index, onClick }: { image: GalleryImage; index: number; onClick: () => void }) {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-sm cursor-pointer group ${isVisible ? "reveal-scale-visible" : "reveal-scale-hidden"
        }`}
      style={{ animationDelay: `${index * 60}ms` }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-xs text-primary-foreground font-body font-medium bg-foreground/50 backdrop-blur-sm rounded-sm px-2 py-1 inline-block">
            {image.alt}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
