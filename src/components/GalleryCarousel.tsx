import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import heroResort from "@/assets/hero-resort.jpg";
import garden from "@/assets/garden.jpg";
import rainDance from "@/assets/rain-dance.jpg";
import seafood from "@/assets/seafood.jpg";
import roomClassic from "@/assets/room-classic.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomFamily from "@/assets/room-family.jpg";
import diningBg from "@/assets/dining-bg.jpg";
import beachDrive from "@/assets/beach-drive.jpg";

export const GalleryCarousel = () => {
    const reveal = useScrollReveal();

    const images = [
        heroResort,
        garden,
        rainDance,
        seafood,
        roomClassic,
        roomDeluxe,
        roomFamily,
        diningBg,
        beachDrive,
    ];

    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto">
                <div ref={reveal.ref} className={reveal.isVisible ? "reveal-visible" : "reveal-hidden"}>
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body">Gallery</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12">
                        Glimpses of <em className="italic">Astha</em>
                    </h2>
                </div>

                <div
                    className={reveal.isVisible ? "reveal-scale-visible" : "reveal-scale-hidden"}
                    style={{ animationDelay: "200ms" }}
                >
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full relative px-12 md:px-0"
                    >
                        <CarouselContent>
                            {images.map((img, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                                    <div className="overflow-hidden rounded-sm h-64 md:h-80 group">
                                        <img
                                            src={img}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            alt={`Gallery view ${index + 1}`}
                                            loading="lazy"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-0 md:-left-12 xl:-left-16" />
                        <CarouselNext className="right-0 md:-right-12 xl:-right-16" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default GalleryCarousel;
