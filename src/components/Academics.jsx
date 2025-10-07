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

const programs = [
  {
    icon: Computer,
    title: "ICT & Robotics",
    description: "State-of-the-art computer labs with coding, robotics, and digital literacy programs",
    gradient: "from-blue-500 to-blue-600",
    features: ["Computer Programming", "Robotics Competitions", "Digital Literacy", "Web Development"]
  },
  {
    icon: FlaskConical,
    title: "Science & Technology",
    description: "Modern science labs fostering innovation and scientific thinking",
    gradient: "from-emerald-500 to-emerald-600",
    features: ["Science Fairs", "Laboratory Experiments", "Research Projects", "Innovation Challenges"]
  },
  {
    icon: Music,
    title: "Music & Drama",
    description: "Comprehensive performing arts program developing creative talents",
    gradient: "from-purple-500 to-purple-600",
    features: ["Music Festivals", "Drama Competitions", "Instrumental Training", "Choir Programs"]
  },
  {
    icon: Trophy,
    title: "Sports Excellence",
    description: "World-class sports facilities including swimming, football, and athletics",
    gradient: "from-orange-500 to-orange-600",
    features: ["Swimming Pool", "Football Pitches", "Athletics Track", "Team Sports"]
  },
  {
    icon: Palette,
    title: "Fashion & Design",
    description: "Creative arts program fostering design thinking and artistic expression",
    gradient: "from-pink-500 to-pink-600",
    features: ["Fashion Design", "Art & Craft", "Interior Design", "Creative Workshops"]
  },
  {
    icon: ChefHat,
    title: "Culinary Arts",
    description: "Practical cooking classes teaching life skills and nutrition",
    gradient: "from-amber-500 to-amber-600",
    features: ["Cooking Classes", "Nutrition Education", "Food Safety", "Culinary Skills"]
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description: "Hands-on farming experience with rabbit keeping and organic gardening",
    gradient: "from-green-500 to-green-600",
    features: ["Organic Gardening", "Rabbit Farming", "Crop Production", "Environmental Care"]
  },
  {
    icon: Code,
    title: "Coding & Programming",
    description: "Advanced programming courses preparing students for the digital future",
    gradient: "from-indigo-500 to-indigo-600",
    features: ["Python Programming", "Web Development", "App Development", "Game Design"]
  }
];

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
  const [hoveredProgram, setHoveredProgram] = useState(null);
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
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0083de]/10 border border-[#0083de]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#0083de]" />
            <span className="text-sm font-semibold text-[#0083de]">World-Class Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Academic <span className="text-[#0083de]">Excellence</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive academic programs nurture well-rounded individuals equipped with knowledge, 
            skills, and values for success in the modern world
          </p>
        </div>

        {/* Curriculum Overview with Tabs */}
        <div className="mb-20 md:mb-32">
          <div className="flex justify-center gap-3 md:gap-4 mb-12 flex-wrap">
            {curriculum.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeTab === index
                    ? 'bg-[#0083de] text-white shadow-lg shadow-[#0083de]/30 scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {item.title.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  activeTab === index ? 'opacity-100 block' : 'opacity-0 hidden'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#0083de] flex items-center justify-center shadow-lg flex-shrink-0">
                        <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                        <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">{item.description}</p>
                        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3 text-gray-800 bg-gray-50 rounded-lg p-3">
                              <CheckCircle2 className="w-5 h-5 text-[#0083de] flex-shrink-0" />
                              <span className="font-medium text-sm md:text-base">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="mb-20 md:mb-32">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">
            Programs & Activities
          </h3>
          <p className="text-center text-gray-600 text-base md:text-lg mb-12 md:mb-16 max-w-2xl mx-auto">
            Discover our diverse range of programs designed to unlock every student's potential
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredProgram(index)}
                onMouseLeave={() => setHoveredProgram(null)}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 border-2 h-[380px] flex flex-col ${
                  hoveredProgram === index ? 'shadow-2xl border-[#0083de] -translate-y-2' : 'border-gray-200 hover:shadow-xl hover:border-gray-300'
                }`}
              >
                {/* Image Header with Gradient */}
                <div className="relative h-40 overflow-hidden flex-shrink-0">
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient}`}></div>
                  
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                  
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`transition-all duration-300 ${
                      hoveredProgram === index ? 'scale-110' : 'scale-100'
                    }`}>
                      <program.icon className="w-16 h-16 text-white drop-shadow-lg" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-lg font-bold text-white">{program.title}</h4>
                  </div>
                </div>

                <div className={`p-4 flex-1 flex flex-col relative transition-all duration-300 ${
                  hoveredProgram === index ? 'bg-gray-50' : ''
                }`}>
                  <p className="text-sm text-gray-600 mb-4">{program.description}</p>
                  
                  {/* Features - always visible */}
                  <div className="space-y-2 mb-4 flex-1">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0083de] flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Button */}
                  <div className="mt-auto">
                    <button className="w-full px-4 py-2 text-xs font-semibold text-[#0083de] border border-[#0083de] rounded-lg hover:bg-[#0083de] hover:text-white transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-32">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Our <span className="text-[#0083de]">Academic Programs?</span>
            </h3>
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
                <div key={index} className="flex items-start gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#0083de] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg">{item.title}</h4>
                    <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-10">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">Academic Stats</h4>
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {[
                { value: "100%", label: "KCPE Success Rate" },
                { value: "95%", label: "Join Top Schools" },
                { value: "20+", label: "Extracurricular Programs" },
                { value: "15:1", label: "Student-Teacher Ratio" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 text-[#0083de] group-hover:scale-110 transition-transform duration-300 inline-block">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl max-w-4xl mx-auto shadow-2xl overflow-hidden border border-gray-200 p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Join Our Academic Family?
            </h3>
            <p className="text-gray-600 mb-8 md:mb-10 text-base md:text-lg max-w-2xl mx-auto">
              Experience world-class education that prepares students for success in academics, 
              character, and life. Admissions are now open for 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <button className="bg-[#0083de] hover:bg-[#006bb8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                Apply for Admission
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-[#0083de] text-[#0083de] hover:bg-[#0083de] hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}