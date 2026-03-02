import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Explore", href: "#explore" },
  { label: "Gallery", href: "/gallery", isRoute: true },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-primary/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex-1">
          <a
            href={isHomePage ? "#home" : "/"}
            className="font-display text-2xl font-bold tracking-tight text-white inline-block hover:opacity-80 transition-opacity"
          >
            Astha
          </a>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/10 shadow-inner">
          {navLinks.map((link) => {
            const content = (
              <span className="relative z-10">{link.label}</span>
            );

            const className = "relative px-5 py-2 rounded-full text-[13px] font-semibold tracking-widest text-white/80 hover:text-white transition-colors uppercase font-body group overflow-hidden";

            if (link.isRoute) {
              return (
                <Link key={link.href} to={link.href} className={className}>
                  {content}
                  <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0 rounded-full" />
                </Link>
              );
            }

            return (
              <a key={link.href} href={isHomePage ? link.href : `/${link.href}`} className={className}>
                {content}
                <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0 rounded-full" />
              </a>
            );
          })}
        </div>

        <div className="flex-1 flex justify-end items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919800740900?text=Hello%20Astha%20Homestay%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20stay."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-sand px-7 py-2.5 text-sm font-semibold text-foreground hover:bg-white transition-colors shadow-lg shadow-black/20"
          >
            Book Now
          </motion.a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 top-[72px] bg-primary/95 backdrop-blur-2xl px-6 pt-8 pb-12 flex flex-col justify-between border-t border-white/10 h-[calc(100vh-72px)] overflow-y-auto"
          >
            <div className="space-y-2">
              {navLinks.map((link, i) => {
                const itemVariants = {
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: i * 0.05 + 0.2, duration: 0.4 }
                  }
                };

                const linkClass = "block text-2xl font-display font-light text-white/70 hover:text-white uppercase tracking-wider py-3 border-b border-white/5";

                return (
                  <motion.div key={link.href} variants={itemVariants} initial="hidden" animate="visible">
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        onClick={() => setOpen(false)}
                        className={linkClass}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={isHomePage ? link.href : `/${link.href}`}
                        onClick={() => setOpen(false)}
                        className={linkClass}
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
              className="mt-12"
            >
              <a
                href="https://wa.me/919800740900?text=Hello%20Astha%20Homestay%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20stay."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="w-full inline-flex justify-center items-center rounded-full bg-sand px-6 py-4 text-base font-semibold text-foreground hover:bg-white transition-colors"
              >
                Book Your Stay
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
