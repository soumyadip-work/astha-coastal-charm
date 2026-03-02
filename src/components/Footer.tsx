import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="section-padding bg-foreground text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Astha</h3>
            <div className="space-y-3 text-sm text-primary-foreground/70 font-body">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                Lal Kankra Beach, Mandarmani, West Bengal
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                hello@asthahomestay.com
              </p>
            </div>
          </div>

          {/* Center */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70 font-body">
              {["Home", "Rooms", "Dining", "Gallery", "Contact", "Book Now"].map((link) => (
                <a
                  key={link}
                  href={link === "Book Now" ? "#contact" : `#${link.toLowerCase()}`}
                  className="block hover:text-primary-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">Send an Inquiry</h4>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 font-body focus:outline-none focus:border-sand"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 font-body focus:outline-none focus:border-sand"
              />
              <textarea
                rows={3}
                placeholder="Your Message"
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 font-body focus:outline-none focus:border-sand resize-none"
              />
              <button
                type="submit"
                className="rounded-sm bg-sand px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-sand-light transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/50 font-body">
          © {new Date().getFullYear()} Craftosphia. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
