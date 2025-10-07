import { useState, useEffect } from "react";
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
            {/* Strong dark overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl">
            {/* School Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4 text-[#0083de]" />
                  <span className="text-sm font-medium">Murang'a, Kenya</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                <div className="flex items-center gap-2 text-white">
                  <Award className="w-4 h-4 text-[#0083de]" />
                  <span className="text-sm font-medium">Est. 2000</span>
                </div>
              </div>
            </div>

            {/* Main Heading - Consistent sizing */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#0083de] mb-3">
                Shallom Academy
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {slides[currentSlide].title}
              </h2>
            </div>

            {/* Subtitle with better contrast */}
            <div className="mb-6">
              <p className="text-xl md:text-2xl font-semibold text-[#0083de] bg-white/10 backdrop-blur-sm inline-block px-4 py-2 rounded-lg border border-[#0083de]/30">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-3xl leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-[#0083de] hover:bg-[#006bb8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                Apply Now
                <Users className="w-5 h-5" />
              </button>
              
              <button className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Explore Gallery
              </button>
              
              <button className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#0083de] mb-1">25+</div>
                <div className="text-sm md:text-base text-white/90 font-medium">Years Excellence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#0083de] mb-1">1000+</div>
                <div className="text-sm md:text-base text-white/90 font-medium">Alumni</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#0083de] mb-1">20+</div>
                <div className="text-sm md:text-base text-white/90 font-medium">Programs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#0083de] mb-1">100%</div>
                <div className="text-sm md:text-base text-white/90 font-medium">Success Rate</div>
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
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-[#0083de] w-8" 
                : "bg-white/50 w-2 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}