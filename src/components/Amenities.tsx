import { Wifi, Car, Zap, Wind, Coffee, Lock, UserCheck, DoorOpen } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Free Parking" },
  { icon: Zap, label: "Power Backup" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Coffee, label: "In-room Kettle" },
  { icon: Lock, label: "Electronic Safe" },
  { icon: UserCheck, label: "Personal Caretaker" },
  { icon: DoorOpen, label: "Attached Balconies" },
];

const Amenities = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body">Amenities</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12">
          Everything for a <em className="italic">Carefree</em> Stay
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-6 rounded-sm bg-muted hover:bg-sand-light transition-colors"
            >
              <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              <span className="text-sm font-medium text-foreground font-body text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
