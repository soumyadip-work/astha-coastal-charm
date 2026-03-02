import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    text: "A perfect home-away-from-home. The hospitality and care was unparalleled. The food is simply the best in Mandarmani.",
    author: "Ananya M.",
  },
  {
    text: "The location on Lal Kankra Beach is ideal. Very clean rooms and the garden is a great place to relax. Highly recommended.",
    author: "Rajesh K.",
  },
  {
    text: "We loved the unique rain dance and how close it is to the red crabs. A wonderful experience for the family.",
    author: "Priya S.",
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section id="reviews" className="section-padding bg-primary">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-sand/80 mb-4 font-body">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-12">
          What Our Guests <em className="italic">Love</em>
        </h2>
        <div className="relative">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-sand text-sand" />
            ))}
          </div>
          <blockquote className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed italic font-display mb-6 min-h-[80px]">
            "{reviews[current].text}"
          </blockquote>
          <p className="text-sm text-sand font-body font-semibold">— {reviews[current].author}</p>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
