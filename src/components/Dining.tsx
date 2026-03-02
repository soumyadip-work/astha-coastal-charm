import diningBg from "@/assets/dining-bg.jpg";

const Dining = () => {
  return (
    <section
      id="dining"
      className="relative min-h-[500px] flex items-center overflow-hidden"
    >
      <img
        src={diningBg}
        alt="Bengali seafood feast"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 dining-overlay" />
      <div className="relative z-10 section-padding w-full">
        <div className="container mx-auto max-w-xl">
          <p className="text-sm uppercase tracking-[0.2em] text-sand/80 mb-4 font-body">Dining</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            Authentic Coastal <em className="italic">Flavors</em>
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed font-body mb-8">
            Savor the freshest catch of the day, prepared just the way you like by our in-house cook.
            Indulge in our signature Bengali specialties: Crab Masala, Prawn Malai Curry, and Bhetki
            Fish Fry. A truly home-cooked, gourmet experience.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-sm bg-sand px-6 py-3 text-sm font-semibold text-foreground hover:bg-sand-light transition-colors"
          >
            Explore Our Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Dining;
