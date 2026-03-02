import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-resort.jpg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <motion.img
        src={heroImg}
        alt="Astha Homestay and Beach Resort surrounded by lush gardens"
        className="absolute inset-0 w-full h-[120%] object-cover origin-top"
        style={{ y: backgroundY }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/60 z-0" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center justify-center mt-12"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span className="inline-block py-1 px-4 rounded-full border border-sand/30 bg-background/10 backdrop-blur-md text-sand text-xs tracking-[0.2em] uppercase font-semibold mb-8 shadow-2xl">
            A Premium Coastal Escape
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-primary-foreground leading-[1.1] mb-6 tracking-tight drop-shadow-2xl font-display"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          Astha Homestay<br /><span className="italic font-light text-sand">&amp; Beach Resort</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-primary-foreground/90 font-body mb-12 font-light max-w-2xl drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        >
          Your Serene Coastal Retreat on Mandarmani's Lal Kankra Beach
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
          className="flex flex-col md:flex-row items-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919800740900?text=Hello%20Astha%20Homestay%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20stay."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-sand px-12 py-5 text-lg font-medium text-foreground hover:bg-white transition-all duration-300 shadow-xl overflow-hidden relative group cursor-pointer"
          >
            <span className="relative z-10 w-full flex justify-center">Book Your Escape</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 font-semibold font-body">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-sand/80 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
