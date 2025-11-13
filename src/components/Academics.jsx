import { useState } from "react";
import { 
  Computer, 
  FlaskConical, 
  Music, 
  Palette, 
  Trophy, 
  Utensils, 
  Sprout,
  BookOpen,
  Code,
  Users,
  Award,
  ChefHat,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";



const curriculum = [
  {
    title: "Competency-Based Curriculum (CBC)",
    description: "Modern curriculum focusing on developing competencies for the 21st century",
    features: ["Critical Thinking", "Problem Solving", "Communication", "Collaboration"]
  },
  {
    title: "Holistic Learning Approach",
    description: "Balanced education addressing academic, social, emotional, and spiritual development",
    features: ["Academic Excellence", "Character Building", "Spiritual Growth", "Social Skills"]
  },
  {
    title: "Digital Integration",
    description: "Technology-enhanced learning preparing students for the digital age",
    features: ["E-Learning Platforms", "Digital Resources", "Online Assessments", "Virtual Classrooms"]
  }
];

export default function Academics() {
 
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="academics" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0083de]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0083de]/10 border border-[#0083de]/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
            <Sparkles className="w-4 h-4 text-[#0083de]" />
            </motion.div>
            <span className="text-sm font-semibold text-[#0083de]">World-Class Education</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Academic <span className="text-[#0083de]">Excellence</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Our comprehensive academic programs nurture well-rounded individuals equipped with knowledge, 
            skills, and values for success in the modern world
          </motion.p>
        </motion.div>

        {/* Curriculum Overview with Tabs */}
        <motion.div 
          className="mb-20 md:mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex justify-center gap-3 md:gap-4 mb-12 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {curriculum.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeTab === index
                    ? 'bg-[#0083de] text-white shadow-lg shadow-[#0083de]/30 scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
              >
                {item.title.split(' ')[0]}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {curriculum.map((item, index) => (
              <motion.div
                key={index}
                className={`transition-all duration-500 ${
                  activeTab === index ? 'opacity-100 block' : 'opacity-0 hidden'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: activeTab === index ? 1 : 0, y: activeTab === index ? 0 : 20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                      <motion.div 
                        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#0083de] flex items-center justify-center shadow-lg flex-shrink-0"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                        <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">{item.description}</p>
                        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                          {item.features.map((feature, featureIndex) => (
                            <motion.div 
                              key={featureIndex} 
                              className="flex items-center gap-3 text-gray-800 bg-gray-50 rounded-lg p-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.8 + (featureIndex * 0.1), duration: 0.5 }}
                              whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 131, 222, 0.05)" }}
                            >
                              <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1 + (featureIndex * 0.1), duration: 0.3, type: "spring", stiffness: 200 }}
                              >
                              <CheckCircle2 className="w-5 h-5 text-[#0083de] flex-shrink-0" />
                              </motion.div>
                              <span className="font-medium text-sm md:text-base">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Programs Grid */}
        

        {/* Features Section */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Why Choose Our <span className="text-[#0083de]">Academic Programs?</span>
            </motion.h3>
            <div className="space-y-6">
              {[
                {
                  icon: Award,
                  title: "Experienced Faculty",
                  description: "Qualified and dedicated teachers committed to student success"
                },
                {
                  icon: Users,
                  title: "Small Class Sizes",
                  description: "Personalized attention ensuring every student reaches their potential"
                },
                {
                  icon: Computer,
                  title: "Modern Facilities",
                  description: "State-of-the-art classrooms, labs, and learning resources"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 md:gap-6 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (index * 0.2), duration: 0.6 }}
                >
                  <motion.div 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#0083de] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg">{item.title}</h4>
                    <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <motion.h4 
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Academic Stats
            </motion.h4>
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {[
                { value: "100%", label: "KCPE Success Rate" },
                { value: "95%", label: "Join Top Schools" },
                { value: "20+", label: "Extracurricular Programs" },
                { value: "15:1", label: "Student-Teacher Ratio" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                >
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 text-[#0083de] group-hover:scale-110 transition-transform duration-300 inline-block"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="bg-white rounded-2xl max-w-4xl mx-auto shadow-2xl overflow-hidden border border-gray-200 p-8 md:p-12"
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ready to Join Our Academic Family?
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-8 md:mb-10 text-base md:text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Experience world-class education that prepares students for success in academics, 
              character, and life. Admissions are now open for 2026.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button 
                className="bg-[#0083de] hover:bg-[#006bb8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply for Admission
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                className="border-2 border-[#0083de] text-[#0083de] hover:bg-[#0083de] hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Prospectus
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}