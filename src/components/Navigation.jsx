import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Phone } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Gallery", href: "#gallery" },
  { name: "Achievements", href: "#achievements" },
  { name: "Voices", href: "#voices" },
  { name: "Admissions", href: "#admissions" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 text-black right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-white"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/android-chrome-192x192.png" 
              alt="Shallom Academy Logo" 
              className="w-14 h-14 object-contain transition-transform hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold text-black">
                Shallom Academy
              </h1>
              <p className="text-xs text-gold">25 Years of Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black hover:text-gold transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline-gold" size="sm">
              <Phone className="w-4 h-4" />
              Contact
            </Button>
            <Button variant="hero" size="sm">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden glass-card p-2 text-[#0083de]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-card border-t border-white/10">
            <div className="py-6 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-2 text-white/90 hover:text-gold transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-6 pt-4 space-y-3">
                <Button variant="outline-gold" size="sm" className="w-full">
                  <Phone className="w-4 h-4" />
                  Contact
                </Button>
                <Button variant="hero" size="sm" className="w-full">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}