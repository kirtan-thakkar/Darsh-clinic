"use client";

import BackgroundLines from "./ui/BackgroundLines";
import { Highlighter } from "@/components/ui/Highlighter";
import { Marquee } from "./ui/marquee";

const TrustSection = () => {
  const features = [
    {
      icon: "🏆",
      title: "Decades of Experience",
      description: "Over 25 years of providing exceptional dental care to families in our community with cutting-edge techniques.",
      color: "#FF6B35",
      bgColor: "from-orange-100 to-orange-50",
      shadowColor: "shadow-orange-500/20",
    },
    {
      icon: "🛡️", 
      title: "Stress-Free Care",
      description: "Gentle approach with anxiety management techniques and sedation options for completely comfortable treatments.",
      color: "#4ECDC4",
      bgColor: "from-teal-100 to-teal-50",
      shadowColor: "shadow-teal-500/20",
    },
    {
      icon: "😊",
      title: "Fully Personalized Treatment",
      description: "Customized treatment plans tailored to your unique needs, lifestyle, and long-term oral health goals.",
      color: "#FF6B35",
      bgColor: "from-orange-100 to-orange-50", 
      shadowColor: "shadow-orange-500/20",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <BackgroundLines
        className="absolute inset-0"
        lineColor="rgba(78, 205, 196, 0.06)"
        fadeColor="rgba(255, 255, 255, 0.98)"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white"></div>
      </BackgroundLines>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-px bg-gradient-to-r from-teal-500 to-teal-600"></div>
              <span className="px-4 py-2 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-700 text-sm font-semibold rounded-full border border-teal-200">
                Why Choose Us
              </span>
              <div className="w-8 h-px bg-gradient-to-r from-teal-500 to-teal-600"></div>
            </div>
          </div>
          
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            A legacy of{" "}
            <Highlighter action="underline" color="#4ECDC4" strokeWidth={3} animationDelay={300}>
              exceptional
            </Highlighter>{" "}
            care
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by thousands of families for comprehensive dental care that combines
            advanced technology with compassionate service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl ${feature.shadowColor} hover:shadow-2xl transition-all duration-500 border border-white/20 hover:-translate-y-2`}>
                
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.bgColor} rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    {feature.icon}
                  </div>
                  
                  {/* Floating decoration */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3
                    className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Background decoration */}
              <div className={`absolute -inset-2 bg-gradient-to-br ${feature.bgColor} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Patient Testimonials Marquee */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <span className="px-4 py-2 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-700 text-sm font-semibold rounded-full border border-teal-200">
              💬 What Our Patients Say
            </span>
          </div>
          
          <Marquee className="py-4 [--duration:40s]" pauseOnHover={true}>
            {[
              { name: "A. Patel", text: "Exceptional experience! Dr. Dhiraj explained everything clearly, and the treatment was completely painless.", rating: 5 },
              { name: "R. Shah", text: "Very professional staff and excellent hygiene standards. Highly recommended for quality dental care!", rating: 5 },
              { name: "S. Mehta", text: "Quick, accurate diagnosis and effective treatment. The entire team is incredibly polite and caring.", rating: 5 },
              { name: "N. Joshi", text: "Best dental experience I've ever had! The doctor truly cares about patients and their comfort.", rating: 5 },
              { name: "P. Parmar", text: "Spotlessly clean clinic with modern equipment and genuinely friendly staff behavior.", rating: 5 },
              { name: "K. Trivedi", text: "I was terrified of dental treatments, but the doctor made me feel completely comfortable and at ease.", rating: 5 },
              { name: "M. Rana", text: "Affordable yet high-quality treatment that exceeded my expectations. Completely satisfied!", rating: 5 },
              { name: "D. Solanki", text: "Outstanding service with punctual appointments and incredibly cooperative doctors throughout.", rating: 5 },
              { name: "H. Oza", text: "Perfect destination for dental care! The staff guided and supported me throughout the entire process.", rating: 5 },
              { name: "Y. Chauhan", text: "Professional, calm, and experienced doctor who delivers excellent results consistently.", rating: 5 },
              { name: "J. Vora", text: "Refreshingly honest! They provide genuine advice without pushing unnecessary treatments.", rating: 5 },
              { name: "T. Shah", text: "Incredibly smooth procedure with clear explanations at every step. Outstanding patient care!", rating: 5 },
              { name: "V. Desai", text: "I truly appreciate the exceptional care and patience the doctor showed during my visit.", rating: 5 },
              { name: "C. Gajjar", text: "The clinic maintains impeccable hygiene standards and uses the latest advanced equipment.", rating: 5 },
              { name: "L. Panchal", text: "Hands down the best dental hospital in the area! Friendly experts who really know their craft.", rating: 5 },
              { name: "S. Rathod", text: "Treatment was painless and remarkably effective. I recommend them to everyone without hesitation!", rating: 5 },
              { name: "R. Suthar", text: "Highly skilled doctors who provide quick, efficient service without compromising on quality.", rating: 5 },
              { name: "N. Pandya", text: "They handled my dental emergency immediately and with complete professionalism. Lifesavers!", rating: 5 },
              { name: "F. Sheikh", text: "Wonderful experience! The doctor listened carefully and provided treatment exactly as needed.", rating: 5 },
              { name: "P. Dave", text: "Exceptional hospitality, excellent treatment quality, and genuinely caring staff throughout.", rating: 5 }
            ].map((testimonial, i) => (
              <div key={i} className="flex-shrink-0 mx-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 w-80 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full flex items-center justify-center text-sm font-semibold text-teal-700 mr-3">
                      {testimonial.name.split(' ')[0][0]}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{testimonial.name}</p>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <span key={j} className="text-yellow-400 text-xs">⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/20">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-10 h-10 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full border-2 border-white flex items-center justify-center text-sm">
                  😊
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-slate-700">Join 2000+ happy patients</p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">⭐</span>
                ))}
                <span className="text-sm text-slate-500 ml-1">4.9/5 average rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;