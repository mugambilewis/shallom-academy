import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Quote, Heart, Target, Star, Users, BookOpen } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Excellence",
    description: "Pursuing the highest standards in academic and character development",
    color: "text-gradient"
  },
  {
    icon: Target,
    title: "Integrity",
    description: "Building honest, trustworthy leaders of tomorrow",
    color: "text-green"
  },
  {
    icon: Star,
    title: "Growth",
    description: "Nurturing continuous learning and personal development",
    color: "text-gradient"
  },
  {
    icon: Users,
    title: "Community",
    description: "Fostering unity, respect and collaborative spirit",
    color: "text-green"
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-title font-display font-bold text-navy mb-4">
            About <span className="text-gradient">Shallom Academy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For 25 years, we have been committed to providing world-class education that nurtures 
            academic excellence, character development, and spiritual growth.
          </p>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <Card className="glass-card hover-lift">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-accent flex items-center justify-center">
                <Target className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a world-class institution that nurtures holistic development, 
                producing leaders who impact society positively through excellence, 
                integrity, and Christian values.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green/20 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide quality, affordable education that develops academic excellence, 
                character, and spiritual growth while preparing students for future challenges 
                and opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-navy/20 flex items-center justify-center">
                <Star className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Motto</h3>
              <p className="text-muted-foreground mb-4">
                "Possible With God" - Our guiding principle that reminds us that with faith, 
                determination, and divine guidance, every student can achieve their dreams.
              </p>
              <div className="text-gradient font-semibold text-lg">"Possible With God"</div>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
  <h3 className="text-3xl font-display font-bold text-center text-navy mb-12">
    Our Core Values
  </h3>
  
  <div className="grid lg:grid-cols-2 gap-8 items-center">
    {/* Left Side - Core Values Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {values.map((value, index) => (
        <Card 
          key={index} 
          className="glass-card hover-lift text-center"
        >
          <CardContent className="p-6">
            <value.icon className={`w-12 h-12 mx-auto mb-4 ${value.color}`} />
            <h4 className="text-xl font-bold text-navy mb-2">
              {value.title}
            </h4>
            <p className="text-sm text-muted-foreground">
              {value.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Right Side - Image with Overlay */}
    <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
      {/* Background Image */}
      <img 
        src="/images/gate.jpg" 
        alt="MUT Campus Building"
        className="w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      
      {/* Text Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-12">
        <div className="max-w-md">
          <p className="text-yellow-400 text-sm font-semibold mb-3 tracking-wide">
            Intakes are now open
          </p>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Apply for Admission
          </h2>
          
          <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
          
          <p className="text-white text-base lg:text-lg leading-relaxed mb-8">
            We provide quality, affordable education that nurtures academic excellence, character, and spiritual growth while preparing students for future challenges and opportunities.
          </p>
          
          <button className="bg-gradient-to-r from-red-400 to-pink-400 text-white px-8 py-3 rounded-md font-semibold hover:from-red-500 hover:to-pink-500 transition-all duration-300 shadow-lg">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-display font-bold text-center text-navy mb-12">
            Our Journey of Excellence
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gradient to-green"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center text-navy font-bold text-lg z-10">
                    {item.year.slice(-2)}
                  </div>
                  <Card className="flex-1 glass-card hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-2">
                        <h4 className="text-xl font-bold text-navy">{item.year}</h4>
                        <div className="h-0.5 flex-1 bg-gradient/30"></div>
                      </div>
                      <h5 className="text-lg font-semibold text-navy mb-2">{item.event}</h5>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Head Teacher Quote */}
        <Card className="glass-card max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <Quote className="w-12 h-12 text-gradient mx-auto mb-6" />
            <blockquote className="text-xl text-navy mb-6 italic">
              "At Shallom Academy, we believe that every child is uniquely gifted. Our role is to 
              nurture these gifts, instill strong values, and prepare our students to be responsible 
              citizens who will make a positive impact in their communities and beyond."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-navy/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-navy" />
              </div>
              <div className="text-left">
                <div className="font-bold text-navy">Simon Kiugi</div>
                <div className="text-muted-foreground">Head Teacher</div>
                <div className="text-sm text-gradient">Shallom Academy</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gradient" size="xl">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}