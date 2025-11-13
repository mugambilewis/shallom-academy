// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Quote, Heart, Target, Star, Users, BookOpen } from "lucide-react";


const values = [
  {
    icon: Heart,
    title: "Excellence",
    description: "Pursuing the highest standards in academic and character development",
    color: "from-[#0083de] to-[#00a8ff]"
  },
  {
    icon: Target,
    title: "Integrity",
    description: "Building honest, trustworthy leaders of tomorrow",
    color: "from-[#0083de] to-[#0066b3]"
  },
  {
    icon: Star,
    title: "Growth",
    description: "Nurturing continuous learning and personal development",
    color: "from-[#00a8ff] to-[#0083de]"
  },
  {
    icon: Users,
    title: "Community",
    description: "Fostering unity, respect and collaborative spirit",
    color: "from-[#0066b3] to-[#0083de]"
  }
];

const timeline = [
  { year: "2000", event: "Shallom Academy Founded", description: "Started with a vision of excellence in education" },
  { year: "2002", event: "KCPE Registration", description: "Officially registered for national examinations" },
  { year: "2005", event: "Campus Expansion", description: "Added modern classrooms and sports facilities" },
  { year: "2015", event: "ICT & Extracurricular", description: "Introduced computer labs and diverse programs" },
  { year: "2017", event: "CBC Transition", description: "Successfully adopted Competency-Based Curriculum" },
  { year: "2020", event: "Online Learning", description: "Seamlessly adapted to digital education" },
  { year: "2023", event: "Rev. Arthur Junior School", description: "Launched dedicated junior school section" },
  { year: "2025", event: "25th Anniversary", description: "Celebrating 25 years of educational excellence" }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-[#0083de] text-sm font-bold tracking-wider uppercase bg-blue-50 px-4 py-2 rounded-full">
              About Us
            </span>
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            About <span className="bg-gradient-to-r from-[#0083de] to-[#00a8ff] bg-clip-text text-transparent">Shallom Academy</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-[#0083de] to-[#00a8ff] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            For 25 years, we have been committed to providing world-class education that nurtures 
            academic excellence, character development, and spiritual growth.
          </motion.p>
        </motion.div>

        {/* Vision, Mission, Values */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8 mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              icon: Target,
              title: "Our Vision",
              description: "To be a world-class institution that nurtures holistic development, producing leaders who impact society positively through excellence, integrity, and Christian values.",
              gradient: "from-[#0083de] to-[#00a8ff]"
            },
            {
              icon: BookOpen,
              title: "Our Mission",
              description: "To provide quality, affordable education that develops academic excellence, character, and spiritual growth while preparing students for future challenges and opportunities.",
              gradient: "from-[#00a8ff] to-[#0083de]"
            },
            {
              icon: Star,
              title: "Our Motto",
              description: "\"Possible With God\" - Our guiding principle that reminds us that with faith, determination, and divine guidance, every student can achieve their dreams.",
              gradient: "from-[#0066b3] to-[#0083de]",
              extra: "Possible With God"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0083de] to-[#00a8ff]"></div>
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <motion.div 
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {item.description}
                  </p>
                  {item.extra && (
                    <motion.div 
                      className="inline-block bg-gradient-to-r from-[#0083de] to-[#00a8ff] bg-clip-text text-transparent font-bold text-xl mt-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      "{item.extra}"
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-[#0083de] to-[#00a8ff] mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            ></motion.div>
          </motion.div>
  
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Core Values Cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.6 }}
                >
                  <Card 
                    className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full"
                  >
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <motion.div 
                        className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <value.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed flex-1">
                        {value.description}
                      </p>
                    </CardContent>
                    <motion.div 
                      className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                    ></motion.div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side - Image with Overlay */}
            <motion.div 
              className="relative h-[550px] rounded-2xl overflow-hidden shadow-2xl group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {/* Background Image */}
              <motion.img 
                src="/images/gate.jpg" 
                alt="Shallom Academy Campus"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              />
      
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      
              {/* Text Content Overlay */}
              <motion.div 
                className="absolute inset-0 flex flex-col justify-center px-8 lg:px-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="max-w-md">
                  <motion.div 
                    className="inline-block mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-4 py-2 rounded-full tracking-wider uppercase shadow-lg">
                      Intakes Open Now
                    </span>
                  </motion.div>
          
                  <motion.h2 
                    className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  >
                    Apply for<br />Admission
                  </motion.h2>
          
                  <motion.div 
                    className="w-20 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 mb-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                  ></motion.div>
          
                  <motion.p 
                    className="text-white/90 text-base lg:text-lg leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                  >
                    We provide quality, affordable education that nurtures academic excellence, character, and spiritual growth while preparing students for future challenges.
                  </motion.p>
          
                  <motion.button 
                    className="group/btn bg-gradient-to-r from-[#0083de] to-[#00a8ff] text-white px-8 py-4 rounded-xl font-bold hover:from-[#0066b3] hover:to-[#0083de] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2, duration: 0.6 }}
                  >
                    Apply Now
                    <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey of Excellence
            </h3>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-[#0083de] to-[#00a8ff] mx-auto mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            ></motion.div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              25 years of dedication to educational excellence and student success
            </p>
          </motion.div>
          <motion.div 
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0083de] via-[#00a8ff] to-[#0083de] rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1.5 }}
            ></motion.div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="relative flex items-start gap-8 group"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + (index * 0.1), duration: 0.6 }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0083de] to-[#00a8ff] flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.year.slice(-2)}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + (index * 0.1), duration: 0.6 }}
                  >
                    <Card className="flex-1 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <h4 className="text-2xl font-bold bg-gradient-to-r from-[#0083de] to-[#00a8ff] bg-clip-text text-transparent">{item.year}</h4>
                          <motion.div 
                            className="h-0.5 flex-1 bg-gradient-to-r from-[#0083de]/30 to-transparent"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.4 + (index * 0.1), duration: 0.8 }}
                          ></motion.div>
                        </div>
                        <h5 className="text-lg font-bold text-gray-900 mb-2">{item.event}</h5>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Head Teacher Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Card className="relative overflow-hidden border-0 shadow-2xl max-w-4xl mx-auto">
            <motion.div 
              className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0083de] to-[#00a8ff]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
            ></motion.div>
            <CardContent className="p-10 lg:p-12 text-center">
              <motion.div 
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#0083de] to-[#00a8ff] flex items-center justify-center shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 200 }}
              >
                <Quote className="w-10 h-10 text-white" />
              </motion.div>
              <motion.blockquote 
                className="text-xl lg:text-2xl text-gray-700 mb-8 italic leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                "At Shallom Academy, we believe that every child is uniquely gifted. Our role is to 
                nurture these gifts, instill strong values, and prepare our students to be responsible 
                citizens who will make a positive impact in their communities and beyond."
              </motion.blockquote>
              <motion.div 
                className="flex items-center justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.div 
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0083de] to-[#00a8ff] flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="w-10 h-10 text-white" />
                </motion.div>
                <div className="text-left">
                  <div className="font-bold text-xl text-gray-900">Simon Kiugi</div>
                  <div className="text-gray-600 font-medium">Head Teacher</div>
                  <div className="text-sm bg-gradient-to-r from-[#0083de] to-[#00a8ff] bg-clip-text text-transparent font-semibold">Shallom Academy</div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.button 
            className="group bg-gradient-to-r from-[#0083de] to-[#00a8ff] text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-[#0066b3] hover:to-[#0083de] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Us
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}