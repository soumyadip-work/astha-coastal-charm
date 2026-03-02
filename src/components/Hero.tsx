import heroImg from "@/assets/hero-resort.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Astha Homestay and Beach Resort surrounded by lush gardens"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-4">
          Astha Homestay<br />&amp; Beach Resort
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 font-body mb-8">
          Your Serene Coastal Retreat on Mandarmani's Lal Kankra Beach
        </p>
        <a
          href="#contact"
          className="inline-block rounded-sm bg-sand px-8 py-3.5 text-base font-semibold text-foreground hover:bg-sand-light transition-colors mb-4"
        >
          Book Your Escape
        </a>
        <p className="text-sm text-primary-foreground/70 font-body">
          Just a 4-minute walk to the beach &nbsp;•&nbsp; Home-cooked Bengali Seafood
        </p>
      </div>
    </section>
  );
};

export default Hero;
