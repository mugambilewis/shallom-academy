import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  Heart,
  Star
} from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Admissions", href: "#admissions" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const programs = [
  { name: "ICT & Robotics", href: "#academics" },
  { name: "Sports Excellence", href: "#academics" },
  { name: "Music & Drama", href: "#academics" },
  { name: "Science & Technology", href: "#academics" },
  { name: "Agriculture", href: "#academics" },
];

const socialLinks = [
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Youtube, href: "#", name: "YouTube" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Twitter, href: "#", name: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gold/20"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-green/20"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-gold/10"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* School Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold">Shallom Academy</h3>
                  <p className="text-gold text-sm">Rev. Arthur Junior School</p>
                </div>
              </div>
              <p className="text-white/80 mb-6 text-sm leading-relaxed">
                25 years of excellence in education, providing world-class learning 
                experiences that nurture academic achievement, character development, 
                and spiritual growth.
              </p>
              <div className="flex items-center gap-2 text-gold">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">"Possible With God"</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-gold transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.name}>
                    <a 
                      href={program.href}
                      className="text-white/70 hover:text-gold transition-colors text-sm"
                    >
                      {program.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-white/80">
                    <p>Shallom Academy</p>
                    <p>Murang'a, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <span className="text-sm text-white/80">+254 700 000 000</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <span className="text-sm text-white/80">info@shallomaacademy.co.ke</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-white/80">
                    <p>Mon - Fri: 7:00 AM - 5:00 PM</p>
                    <p>Sat: 8:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
                <p className="text-white/70 mb-4 text-sm">
                  Get the latest updates about school events, achievements, and admissions.
                </p>
                <div className="flex gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  <Button variant="hero" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>

              <div className="text-center md:text-right">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-3 justify-center md:justify-end">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold/20 transition-colors flex items-center justify-center group"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5 text-white/70 group-hover:text-gold transition-colors" />
                    </a>
                  ))}
                </div>
                
                {/* Call to Action */}
                <div className="mt-6">
                  <Button variant="outline-gold" size="lg" className="w-full md:w-auto">
                    Apply for 2026 Admission
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-navy-dark">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-white/60">
                © 2025 Shallom Academy & Rev. Arthur Junior School. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6 text-sm text-white/60">
                <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
                <div className="flex items-center gap-2">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>in Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}