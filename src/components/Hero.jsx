import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Play, Users, Award, MapPin } from "lucide-react";

const slides = [
  {
    image: "/images/school-hero.jpg",
    title: "25 Years of Excellence in Education",
    subtitle: "Possible With God",
    description: "World-class facilities and holistic education in the heart of Murang'a"
  },
  {
    image: "/images/school-hero7.jpg",
    title: "Modern ICT & Robotics Programs",
    subtitle: "Technology-Enhanced Learning",
    description: "Preparing students for the digital future with cutting-edge technology"
  },
  {
    image: "/images/school-hero2.jpg",
    title: "World-Class Sports Facilities",
    subtitle: "Excellence in Athletics",
    description: "Swimming, football, athletics and more in our modern sports complex"
  },
  {
    image: "/images/school-hero4.jpg",
    title: "Safe & Reliable Transport",
    subtitle: "Convenient School Routes",
    description: "Modern fleet ensuring safe transportation for all our students"
  },
  {
    image: "/images/school-hero5.jpg",
    title: "Holistic Development",
    subtitle: "Academic & Sports Excellence",
    description: "Nurturing champions in academics, sports, and character"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/30" />
            <div className="absolute inset-0 bg-[#0083de]-to-r from-black/70 via-white/50 to-white/30" />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 glass-card p-3 hover:bg-white/20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 glass-card p-3 hover:bg-white/20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            {/* School Badge */}
            <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
              <div className="glass-card px-4 py-2 rounded-full">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4 text-[#0083de]" />
                  <span className="text-sm font-medium">Murang'a, Kenya</span>
                </div>
              </div>
              <div className="glass-card px-4 py-2 rounded-full">
                <div className="flex items-center gap-2 text-white">
                  <Award className="w-4 h-4 text-[#0083de]" />
                  <span className="text-sm font-medium">Est. 2000</span>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-hero font-display font-bold text-white mb-4 animate-slide-up">
              <span className="text-[#0083de] text-4xl md:text-6xl">Shallom Academy</span>
              <br />
              <span className="text-4xl md:text-6xl">
                {slides[currentSlide].title}
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl font-display font-semibold text-[#0083de] mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {slides[currentSlide].subtitle}
            </h2>

            {/* Description */}
            <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Button variant="hero"  size="xl" className="group text-[#0083de]">
                Apply Now
                <Users className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="glass" size="xl" className="group text-[#0083de]">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Explore Gallery
              </Button>
              
              <Button variant="outline-[#0083de]" size="xl">
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="glass-card p-4 text-center hover-lift">
                <div className="text-2xl font-bold text-[#0083de]">25+</div>
                <div className="text-sm text-white/80">Years Excellence</div>
              </div>
              <div className="glass-card p-4 text-center hover-lift">
                <div className="text-2xl font-bold text-[#0083de]">1000+</div>
                <div className="text-sm text-white/80">Alumni</div>
              </div>
              <div className="glass-card p-4 text-center hover-lift">
                <div className="text-2xl font-bold text-[#0083de]">20+</div>
                <div className="text-sm text-white/80">Programs</div>
              </div>
              <div className="glass-card p-4 text-center hover-lift">
                <div className="text-2xl font-bold text-[#0083de]">100%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-[#0083de] scale-125" 
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 right-20 animate-float">
        <div className="w-20 h-20 rounded-full bg-[#0083de]/20 backdrop-blur-sm" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{animationDelay: '2s'}}>
        <div className="w-16 h-16 rounded-full bg-green/20 backdrop-blur-sm" />
      </div>
    </section>
  );
}