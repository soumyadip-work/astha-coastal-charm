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
    <section id="rooms" className="section-padding bg-muted">
      <div className="container mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body">Our Rooms</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12">
          Find Your Perfect <em className="italic">Sanctuary</em>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room.name} className="bg-background rounded-sm overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{room.name}</h3>
                <ul className="space-y-2 mb-6">
                  {room.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground font-body flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-block text-sm font-semibold text-primary hover:text-ocean-light transition-colors uppercase tracking-wider font-body"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
