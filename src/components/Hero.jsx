import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Users, Award, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="relative pt-6 sm:pt-4 min-h-screen sm:h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "linear" }}
            />
            {/* Strong dark overlay for better contrast */}
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
        aria-label="Previous slide"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </motion.button>
      
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
        aria-label="Next slide"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </motion.button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl">
            {/* School Badge */}
            <motion.div 
              className="flex flex-wrap items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4 text-[#0083de]" />
                  <span className="text-sm font-medium">Murang'a, Kenya</span>
                </div>
              </motion.div>
              <motion.div 
                className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 text-white">
                  <Award className="w-4 h-4 text-[#0083de]" />
                  <span className="text-sm font-medium">Est. 2000</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Main Heading - Consistent sizing */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#0083de] mb-3"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Shallom Academy
              </motion.h1>
              <AnimatePresence mode="wait">
                <motion.h2 
                  key={currentSlide}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {slides[currentSlide].title}
                </motion.h2>
              </AnimatePresence>
            </motion.div>

            {/* Subtitle with better contrast */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.p 
                  key={`subtitle-${currentSlide}`}
                  className="text-xl md:text-2xl font-semibold text-[#0083de] bg-white/10 backdrop-blur-sm inline-block px-4 py-2 rounded-lg border border-[#0083de]/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-white/95 mb-10 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={`description-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {slides[currentSlide].description}
                </motion.span>
              </AnimatePresence>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.button 
                className="bg-[#0083de] hover:bg-[#006bb8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                Apply Now
                <Users className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <Play className="w-5 h-5" />
                Explore Gallery
              </motion.button>
              
              <motion.button 
                className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              {[
                { value: "25+", label: "Years Excellence" },
                { value: "1000+", label: "Alumni" },
                { value: "20+", label: "Programs" },
                { value: "100%", label: "Success Rate" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl text-center hover:bg-white/15 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + (index * 0.1), duration: 0.6 }}
                >
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-[#0083de] mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.4 + (index * 0.1), duration: 0.5, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm md:text-base text-white/90 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-[#0083de] w-8" 
                : "bg-white/50 w-2 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.7 + (index * 0.1), duration: 0.4 }}
          />
        ))}
      </motion.div>
    </section>
  );
}