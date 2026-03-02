import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Explore", href: "#explore" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-xl font-bold text-primary-foreground tracking-wide">
          Astha
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-block rounded-sm bg-sand px-5 py-2 text-sm font-semibold text-foreground hover:bg-sand-light transition-colors"
        >
          Book Now
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-block rounded-sm bg-sand px-5 py-2 text-sm font-semibold text-foreground"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
