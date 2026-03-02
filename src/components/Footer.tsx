import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground relative overflow-hidden pt-24 pb-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-sand/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <Reveal delay={0.1} className="lg:col-span-1">
            <h3 className="font-display text-4xl font-semibold mb-6 tracking-tight">Astha</h3>
            <p className="text-primary-foreground/60 font-body mb-8 leading-relaxed max-w-sm">
              Experience the charm of a personalized homestay with the comfort of a beach resort at Mandarmani.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, color: "#D4AF37" }}
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-sand transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </Reveal>

          {/* Contact Details */}
          <Reveal delay={0.2}>
            <h4 className="font-body font-semibold text-sm uppercase tracking-[0.2em] mb-8 text-sand">Contact Us</h4>
            <div className="space-y-6 text-primary-foreground/70 font-body">
              <motion.a href="#" whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                <div className="p-2 rounded-full bg-primary-foreground/5 group-hover:bg-sand/20 group-hover:text-sand transition-colors">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <span className="mt-1">Lal Kankra Beach, Mandarmani, West Bengal</span>
              </motion.a>
              <motion.a href="tel:+919876543210" whileHover={{ x: 5 }} className="flex items-center gap-4 group">
                <div className="p-2 rounded-full bg-primary-foreground/5 group-hover:bg-sand/20 group-hover:text-sand transition-colors">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <span>+91 98765 43210</span>
              </motion.a>
              <motion.a href="mailto:hello@asthahomestay.com" whileHover={{ x: 5 }} className="flex items-center gap-4 group">
                <div className="p-2 rounded-full bg-primary-foreground/5 group-hover:bg-sand/20 group-hover:text-sand transition-colors">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <span>hello@asthahomestay.com</span>
              </motion.a>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={0.3}>
            <h4 className="font-body font-semibold text-sm uppercase tracking-[0.2em] mb-8 text-sand">Explore</h4>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-primary-foreground/70 font-body">
              {["Home", "Rooms", "Dining", "Gallery", "Our Story", "Book Now"].map((link) => (
                <motion.a
                  key={link}
                  whileHover={{ x: 5, color: "white" }}
                  href={link === "Book Now" ? "https://wa.me/919800740900?text=Hello%20Astha%20Homestay%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20stay." : `#${link.toLowerCase().replace(' ', '-')}`}
                  target={link === "Book Now" ? "_blank" : undefined}
                  rel={link === "Book Now" ? "noopener noreferrer" : undefined}
                  className="block hover:text-white transition-colors py-1"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </Reveal>

          {/* Inquiry Form */}
          <Reveal delay={0.4}>
            <h4 className="font-body font-semibold text-sm uppercase tracking-[0.2em] mb-8 text-sand">Send an Inquiry</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 font-body hover:border-primary-foreground/30 focus:outline-none focus:border-sand focus:bg-primary-foreground/10 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 font-body hover:border-primary-foreground/30 focus:outline-none focus:border-sand focus:bg-primary-foreground/10 transition-all"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-sand px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40 font-body">
          <p>© {new Date().getFullYear()} Astha Homestay. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
