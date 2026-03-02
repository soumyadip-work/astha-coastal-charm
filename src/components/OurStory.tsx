import { Reveal, RevealText, ImageReveal } from "@/components/Reveal";
import gardenImg from "@/assets/garden.jpg";
import rainDanceImg from "@/assets/rain-dance.jpg";
import seafoodImg from "@/assets/seafood.jpg";

const OurStory = () => {
  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-10 lg:mb-16">
          <Reveal delay={0.1}>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-sand mb-3 font-body font-semibold">Our Story</p>
          </Reveal>
          <RevealText
            text="We design experiences, not just stays."
            className="text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1] font-semibold text-foreground max-w-2xl font-display"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <Reveal delay={0.3} direction="right">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body font-light">
              Experience the charm of a personalized homestay with the comfort of a beach resort.
              Our unique location on Lal Kankra Beach puts you steps away from the Bay of Bengal
              and the fascinating Red Crab Colony. Unwind in our lush private garden, find your beat
              in our exclusive rain dance area, and feel at home with our dedicated caretaker.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 lg:gap-4 relative">
            <div className="col-span-2 h-44 md:h-56">
              <ImageReveal
                src={gardenImg}
                alt="Lush resort garden with tropical plants"
                className="rounded-2xl"
                delay={0.2}
              />
            </div>
            <div className="h-32 md:h-44">
              <ImageReveal
                src={rainDanceImg}
                alt="Fun rain dance area at the resort"
                className="rounded-2xl"
                delay={0.4}
              />
            </div>
            <div className="h-32 md:h-44">
              <ImageReveal
                src={seafoodImg}
                alt="Fresh Bengali seafood platter"
                className="rounded-2xl"
                delay={0.6}
              />
            </div>

            <div className="absolute -z-10 -top-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 bg-ocean-light/20 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
