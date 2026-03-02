import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Reveal, RevealText } from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    text: "A perfect home-away-from-home. The hospitality and care was unparalleled. The food is simply the best in Mandarmani.",
    author: "Ananya M.",
    location: "Kolkata"
  },
  {
    text: "The location on Lal Kankra Beach is ideal. Very clean rooms and the garden is a great place to relax. Highly recommended.",
    author: "Rajesh K.",
    location: "New Delhi"
  },
  {
    text: "We loved the unique rain dance and how close it is to the red crabs. A wonderful experience for the family.",
    author: "Priya S.",
    location: "Mumbai"
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section id="reviews" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ocean-light/10 to-transparent blur-3xl rounded-none pointer-events-none" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <Reveal delay={0.1} width="100%">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-sand mb-4 font-body font-semibold">Testimonials</p>
        </Reveal>

        <RevealText
          text="What Our Guests Love"
          className="text-4xl md:text-5xl lg:text-7xl font-semibold text-primary-foreground mb-16 font-display flex justify-center"
        />

        <div className="relative mt-8">
          <Reveal delay={0.2} width="100%">
            <div className="flex justify-center gap-1.5 mb-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, rotate: -30 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, type: "spring" }}
                >
                  <Star className="w-5 h-5 md:w-6 md:h-6 fill-sand text-sand drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                </motion.div>
              ))}
            </div>
          </Reveal>

          <div className="min-h-[220px] md:min-h-[180px] relative px-4 md:px-12 flex items-center justify-center">
            <Quote className="absolute top-0 left-4 text-white/5 w-24 h-24 -z-10 -rotate-12" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-full px-4"
              >
                <blockquote className="text-xl md:text-3xl lg:text-4xl text-primary-foreground/95 leading-relaxed font-display mb-8 font-light tracking-wide">
                  "{reviews[current].text}"
                </blockquote>
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="text-base md:text-lg text-sand font-body font-semibold tracking-wider uppercase">— {reviews[current].author}</p>
                  <p className="text-sm text-primary-foreground/50 tracking-widest">{reviews[current].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <Reveal delay={0.4} width="100%">
            <div className="flex justify-center gap-6 mt-16 relative z-20">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-14 h-14 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
                aria-label="Previous review"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-14 h-14 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
                aria-label="Next review"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
