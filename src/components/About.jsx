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
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#0083de] text-sm font-bold tracking-wider uppercase bg-blue-50 px-4 py-2 rounded-full">
              About Us
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            About <span className="bg-gradient-to-r from-[#0083de] to-[#00a8ff] bg-clip-text text-transparent">Shallom Academy</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0083de] to-[#00a8ff] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For 25 years, we have been committed to providing world-class education that nurtures 
            academic excellence, character development, and spiritual growth.
          </p>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0083de] to-[#00a8ff]"></div>
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#0083de] to-[#00a8ff] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a world-class institution that nurtures holistic development, 
                producing leaders who impact society positively through excellence, 
                integrity, and Christian values.
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0083de] to-[#00a8ff]"></div>
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#00a8ff] to-[#0083de] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide quality, affordable education that develops academic excellence, 
                character, and spiritual growth while preparing students for future challenges 
                and opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0083de] to-[#00a8ff]"></div>
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#0066b3] to-[#0083de] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Motto</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                "Possible With God" - Our guiding principle that reminds us that with faith, 
                determination, and divine guidance, every student can achieve their dreams.
              </p>
              <div className="inline-block bg-gradient-to-r from-[#0083de] to-[#00a8ff] bg-clip-text text-transparent font-bold text-xl">
                "Possible With God"
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0083de] to-[#00a8ff] mx-auto"></div>
          </div>
  
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </Card>
              ))}
            </div>

            {/* Right Side - Image with Overlay */}
            <div className="relative h-[550px] rounded-2xl overflow-hidden shadow-2xl group">
              {/* Background Image */}
              <img 
                src="/images/gate.jpg" 
                alt="Shallom Academy Campus"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
      
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      
              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-12">
                <div className="max-w-md">
                  <div className="inline-block mb-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-4 py-2 rounded-full tracking-wider uppercase shadow-lg">
                      Intakes Open Now
                    </span>
                  </div>
          
                  <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                    Apply for<br />Admission
                  </h2>
          
                  <div className="w-20 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 mb-6"></div>
          
                  <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-8">
                    We provide quality, affordable education that nurtures academic excellence, character, and spiritual growth while preparing students for future challenges.
                  </p>
          
                  <button className="group/btn bg-gradient-to-r from-[#0083de] to-[#00a8ff] text-white px-8 py-4 rounded-xl font-bold hover:from-[#0066b3] hover:to-[#0083de] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                    Apply Now
                    <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey of Excellence
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0083de] to-[#00a8ff] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              25 years of dedication to educational excellence and student success
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0083de] via-[#00a8ff] to-[#0083de] rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0083de] to-[#00a8ff] flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.year.slice(-2)}
                  </div>
                  <Card className="flex-1 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-[#0083de] to-[#00a8ff] bg-clip-text text-transparent">{item.year}</h4>
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-[#0083de]/30 to-transparent"></div>
                      </div>
                      <h5 className="text-lg font-bold text-gray-900 mb-2">{item.event}</h5>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Head Teacher Quote */}
        <Card className="relative overflow-hidden border-0 shadow-2xl max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0083de] to-[#00a8ff]"></div>
          <CardContent className="p-10 lg:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#0083de] to-[#00a8ff] flex items-center justify-center shadow-lg">
              <Quote className="w-10 h-10 text-white" />
            </div>
            <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 italic leading-relaxed">
              "At Shallom Academy, we believe that every child is uniquely gifted. Our role is to 
              nurture these gifts, instill strong values, and prepare our students to be responsible 
              citizens who will make a positive impact in their communities and beyond."
            </blockquote>
            <div className="flex items-center justify-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0083de] to-[#00a8ff] flex items-center justify-center shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-xl text-gray-900">Simon Kiugi</div>
                <div className="text-gray-600 font-medium">Head Teacher</div>
                <div className="text-sm bg-gradient-to-r from-[#0083de] to-[#00a8ff] bg-clip-text text-transparent font-semibold">Shallom Academy</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-[#0083de] to-[#00a8ff] text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-[#0066b3] hover:to-[#0083de] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Learn More About Us
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}