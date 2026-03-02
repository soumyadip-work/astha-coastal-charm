import { Reveal, RevealText } from "@/components/Reveal";
import { motion } from "framer-motion";
import roomClassic from "@/assets/room-classic.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomFamily from "@/assets/room-family.jpg";

const rooms = [
  {
    name: "Classic Garden View Room",
    image: roomClassic,
    features: ["AC", "Private Balcony", "King Bed", "Free Wi-Fi", "Garden Access"],
  },
  {
    name: "Deluxe Courtyard View Room",
    image: roomDeluxe,
    features: ["AC", "Attached Balcony", "Queen Bed", "In-room Kettle", "Caretaker Service"],
  },
  {
    name: "Family Suite",
    image: roomFamily,
    features: ["Two Connected Rooms", "King + Queen Bed", "Large Balcony", "Electronic Safe", "Power Backup"],
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="section-padding bg-muted relative">
      <div className="container mx-auto">
        <div className="mb-20">
          <Reveal delay={0.1}>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-body font-semibold">Our Rooms</p>
          </Reveal>
          <RevealText
            text="Find Your Perfect Sanctuary"
            className="text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground font-display"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <Reveal key={room.name} delay={i * 0.2}>
              <motion.div
                whileHover={{ y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-background rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] flex flex-col h-full border border-border/40"
              >
                <div className="overflow-hidden h-72 w-full relative">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-semibold text-foreground mb-6 font-display tracking-wide">{room.name}</h3>
                  <ul className="space-y-4 mb-10 flex-1">
                    {room.features.map((f) => (
                      <li key={f} className="text-base text-muted-foreground font-body flex items-center gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-80" />
                        <span className="font-light">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/70 transition-colors uppercase tracking-[0.2em] font-body group"
                  >
                    View Details
                    <motion.span
                      className="ml-2 inline-block"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >→</motion.span>
                  </a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
