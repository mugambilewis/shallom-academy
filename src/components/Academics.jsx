import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
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
    color: "bg-blue-500/20 text-blue-600",
    gradient: "from-blue-500 to-blue-600",
    features: ["Computer Programming", "Robotics Competitions", "Digital Literacy", "Web Development"]
  },
  {
    icon: FlaskConical,
    title: "Science & Technology",
    description: "Modern science labs fostering innovation and scientific thinking",
    color: "bg-green-500/20 text-green-600",
    gradient: "from-green-500 to-green-600",
    features: ["Science Fairs", "Laboratory Experiments", "Research Projects", "Innovation Challenges"]
  },
  {
    icon: Music,
    title: "Music & Drama",
    description: "Comprehensive performing arts program developing creative talents",
    color: "bg-purple-500/20 text-purple-600",
    gradient: "from-purple-500 to-purple-600",
    features: ["Music Festivals", "Drama Competitions", "Instrumental Training", "Choir Programs"]
  },
  {
    icon: Trophy,
    title: "Sports Excellence",
    description: "World-class sports facilities including swimming, football, and athletics",
    color: "bg-orange-500/20 text-orange-600",
    gradient: "from-orange-500 to-orange-600",
    features: ["Swimming Pool", "Football Pitches", "Athletics Track", "Team Sports"]
  },
  {
    icon: Palette,
    title: "Fashion & Design",
    description: "Creative arts program fostering design thinking and artistic expression",
    color: "bg-pink-500/20 text-pink-600",
    gradient: "from-pink-500 to-pink-600",
    features: ["Fashion Design", "Art & Craft", "Interior Design", "Creative Workshops"]
  },
  {
    icon: ChefHat,
    title: "Culinary Arts",
    description: "Practical cooking classes teaching life skills and nutrition",
    color: "bg-yellow-500/20 text-yellow-600",
    gradient: "from-yellow-500 to-yellow-600",
    features: ["Cooking Classes", "Nutrition Education", "Food Safety", "Culinary Skills"]
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description: "Hands-on farming experience with rabbit keeping and organic gardening",
    color: "bg-green-500/20 text-green-600",
    gradient: "from-green-500 to-green-600",
    features: ["Organic Gardening", "Rabbit Farming", "Crop Production", "Environmental Care"]
  },
  {
    icon: Code,
    title: "Coding & Programming",
    description: "Advanced programming courses preparing students for the digital future",
    color: "bg-indigo-500/20 text-indigo-600",
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
    <section id="academics" className="py-32 bg-gradient-to-b from-muted/10 via-muted/30 to-muted/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-[#0083de]/10 border border-gold/30 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-semibold text-gold">World-Class Education</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-extrabold mb-6 text-navy leading-tight">
            Academic <span className="text-[#0083de]">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive academic programs nurture well-rounded individuals equipped with knowledge, 
            skills, and values for success in the modern world
          </p>
        </div>

        {/* Curriculum Overview with Tabs */}
        <div className="mb-32">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {curriculum.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-[#0083de] text-navy shadow-lg shadow-gold/50 scale-105'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-navy border border-muted'
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
                <Card className="glass-card shadow-2xl overflow-hidden border-gold/20">
                  <CardContent className="p-12">
                    <div className="flex items-start gap-8">
                      <div className="w-20 h-20 rounded-2xl bg-[#0083de] flex items-center justify-center shadow-lg flex-shrink-0">
                        <BookOpen className="w-10 h-10 text-navy" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-display font-bold text-navy mb-4">{item.title}</h3>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{item.description}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3 text-navy bg-muted/30 rounded-lg p-3 backdrop-blur-sm">
                              <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="mb-32">
          <h3 className="text-5xl font-display font-extrabold text-center mb-4 text-navy">
            Programs & Activities
          </h3>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Discover our diverse range of programs designed to unlock every student's potential
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card
                key={index}
                onMouseEnter={() => setHoveredProgram(index)}
                onMouseLeave={() => setHoveredProgram(null)}
                className={`glass-card overflow-hidden group cursor-pointer transition-all duration-300 ${
                  hoveredProgram === index ? 'shadow-xl border-gold/30' : ''
                }`}
              >
                {/* Image Header with Overlay */}
                <div className="relative h-40 overflow-hidden">
                  {/* Placeholder gradient background with pattern */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-90`}></div>
                  
                  {/* Decorative pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                  
                  {/* Icon as image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`transition-all duration-300 ${
                      hoveredProgram === index ? 'scale-110' : 'scale-100'
                    }`}>
                      <program.icon className="w-16 h-16 text-white drop-shadow-lg" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredProgram === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  {/* Title overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/90 to-transparent">
                    <h4 className="text-lg font-bold text-white">{program.title}</h4>
                  </div>
                </div>

                <CardContent className={`p-4 text-center relative transition-all duration-300 ${
                  hoveredProgram === index ? 'bg-muted/20' : ''
                }`}>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{program.description}</p>
                  
                  <div className={`space-y-1.5 transition-all duration-300 ${
                    hoveredProgram === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
                  } overflow-hidden`}>
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0"></div>
                        <span className="text-left">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {hoveredProgram !== index && (
                    <Button variant="outline" size="sm" className="mt-3 w-full text-xs">
                      Learn More
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h3 className="text-4xl font-display font-extrabold text-navy mb-8 leading-tight">
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
                <div key={index} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-xl bg-[#0083de] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="glass-card shadow-2xl border-gold/20">
            <CardContent className="p-10">
              <h4 className="text-3xl font-display font-bold text-navy mb-10 text-center">Academic Stats</h4>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "100%", label: "KCPE Success Rate", color: "text-gold" },
                  { value: "95%", label: "Join Top Schools", color: "text-green" },
                  { value: "20+", label: "Extracurricular Programs", color: "text-navy" },
                  { value: "15:1", label: "Student-Teacher Ratio", color: "text-gold" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`text-5xl font-extrabold mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300 inline-block`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="glass-card max-w-4xl mx-auto shadow-2xl overflow-hidden relative border-gold/20">
            <div className="absolute inset-0 bg-bg-[#0083de] opacity-5 animate-pulse"></div>
            <CardContent className="p-12 relative z-10">
              <h3 className="text-4xl font-display font-extrabold text-navy mb-4">
                Ready to Join Our Academic Family?
              </h3>
              <p className="text-muted-foreground mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
                Experience world-class education that prepares students for success in academics, 
                character, and life. Admissions are now open for 2026.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="gradient" size="lg" className="group shadow-lg shadow-gold/50 hover:shadow-xl hover:shadow-gold/70 transition-all duration-300 hover:scale-105">
                  Apply for Admission
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline-gold" size="lg" className="transition-all duration-300 hover:scale-105">
                  Download Prospectus
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}