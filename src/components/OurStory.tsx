import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import gardenImg from "@/assets/garden.jpg";
import rainDanceImg from "@/assets/rain-dance.jpg";
import seafoodImg from "@/assets/seafood.jpg";

const OurStory = () => {
  const reveal = useScrollReveal();

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto">
        <div ref={reveal.ref} className={reveal.isVisible ? "reveal-visible" : "reveal-hidden"}>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body">Our Story</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12 max-w-2xl leading-tight">
            We design <em className="italic">experiences,</em> not just stays.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className={reveal.isVisible ? "reveal-visible" : "reveal-hidden"} style={{ animationDelay: "150ms" }}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body">
              Experience the charm of a personalized homestay with the comfort of a beach resort.
              Our unique location on Lal Kankra Beach puts you steps away from the Bay of Bengal
              and the fascinating Red Crab Colony. Unwind in our lush private garden, find your beat
              in our exclusive rain dance area, and feel at home with our dedicated caretaker.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={gardenImg} alt="Lush resort garden with tropical plants"
              className={`rounded-sm w-full h-48 object-cover col-span-2 hover-scale ${reveal.isVisible ? "reveal-scale-visible" : "reveal-scale-hidden"}`}
              style={{ animationDelay: "200ms" }}
            />
            <img src={rainDanceImg} alt="Fun rain dance area at the resort"
              className={`rounded-sm w-full h-40 object-cover hover-scale ${reveal.isVisible ? "reveal-scale-visible" : "reveal-scale-hidden"}`}
              style={{ animationDelay: "300ms" }}
            />
            <img src={seafoodImg} alt="Fresh Bengali seafood platter"
              className={`rounded-sm w-full h-40 object-cover hover-scale ${reveal.isVisible ? "reveal-scale-visible" : "reveal-scale-hidden"}`}
              style={{ animationDelay: "400ms" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
