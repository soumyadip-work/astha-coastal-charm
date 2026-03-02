import beachDrive from "@/assets/beach-drive.jpg";
import redCrabs from "@/assets/red-crabs.jpg";
import waterSports from "@/assets/water-sports.jpg";
import sunset from "@/assets/sunset.jpg";

const places = [
  {
    image: beachDrive,
    title: "Drive India's Longest Beach",
    desc: "Experience the thrill of a 13km-long drivable beach road, unique to Mandarmani.",
  },
  {
    image: redCrabs,
    title: "Red Crab Watching",
    desc: "Our resort is located right beside the famous Red Crab Beach. Witness thousands of red crabs carpet the sand.",
  },
  {
    image: waterSports,
    title: "Thrilling Water Sports",
    desc: "Try jet skiing, parasailing, and banana boat rides, all available near the resort.",
  },
  {
    image: sunset,
    title: "Magical Sunrises & Sunsets",
    desc: "The perfect spot to watch the sun dip into the Bay of Bengal.",
  },
];

const Explore = () => {
  return (
    <section id="explore" className="section-padding bg-muted">
      <div className="container mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body">Nearby</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12">
          Discover the Wonders <em className="italic">Around Us</em>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {places.map((place) => (
            <div key={place.title} className="rounded-sm overflow-hidden group relative h-72">
              <img
                src={place.image}
                alt={place.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-primary-foreground mb-1">{place.title}</h3>
                <p className="text-sm text-primary-foreground/80 font-body">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
