"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { ReactLenis } from "lenis/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import TimelineSection from "../../components/TimelineSection";
import TechnologySection from "../../components/TechnologySection";
import { CardSpotlight } from "../../components/ui/card-spotlight";
import CountAnimation from "../../components/count-animation";
import TextReveal from "../../components/forgeui/text-reveal";
import { dentalServices } from "../constants/index.js";
import Image from "next/image";
import { 
  Activity, 
  Award, 
  Shield, 
  Zap, 
  Heart, 
  Users,
  MapPin,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";

// SEO metadata for services page
 const metadata = {
  title: "Dental Services in Vadodara - Dr. Dhiraj Nayak | Darsh Dental Clinic",
  description: "Comprehensive dental services by Dr. Dhiraj Nayak at Darsh Dental Clinic. Dental implants, root canal, scaling, orthodontics, oral surgery & more. Expert care across 3 locations in Vadodara.",
  keywords: "dental services vadodara, dr dhiraj nayak, root canal treatment, dental implants, scaling polishing, tooth extraction, orthodontics, oral surgery, cosmetic dentistry",
  canonicalUrl: "https://darshdentalclinic.com/services",
  robots: "index, follow",
  openGraph: {
    title: "Complete Dental Services - Dr. Dhiraj Nayak | Darsh Dental Clinic",
    description: "Expert dental treatments including implants, root canal, scaling, orthodontics by Dr. Dhiraj Nayak. Advanced care at 3 convenient locations in Vadodara.",
    url: "https://darshdentalclinic.com/services",
    type: "website",
    siteName: "Darsh Dental Clinic",
    images: [
      {
        url: '/og-services-darsh-clinic.jpg',
        width: 1200,
        height: 630,
        alt: 'Dental Services at Darsh Dental Clinic',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Services - Dr. Dhiraj Nayak",
    description: "Complete dental care including implants, root canals, orthodontics by Dr. Dhiraj Nayak",
    images: ['/og-services-darsh-clinic.jpg'],
  },
};

const serviceIcons = {
  "restorative-dentistry": Shield,
  "oral-surgery": Zap,
  "preventive-dentistry": Activity,
  "specialized-care": Heart,
  "general-dentistry": Award
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Services() {
  const [showAllServices, setShowAllServices] = useState(false);
  
  // Add custom CSS animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-10px) rotate(1deg); }
        66% { transform: translateY(-5px) rotate(-1deg); }
      }
      
      @keyframes gentlePulse {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.05); }
      }
      
      @keyframes slideInBounce {
        0% { transform: translateX(-100px) rotate(-10deg); opacity: 0; }
        60% { transform: translateX(10px) rotate(2deg); opacity: 0.8; }
        100% { transform: translateX(0) rotate(0deg); opacity: 1; }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-gentle-pulse {
        animation: gentlePulse 4s ease-in-out infinite;
      }
      
      .animate-slide-bounce {
        animation: slideInBounce 1s ease-out forwards;
      }
      
      .hover-lift {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .hover-lift:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      }
      
      .gradient-border {
        background: linear-gradient(45deg, #f3f4f6, #ffffff);
        border: 2px solid transparent;
        background-clip: padding-box;
        position: relative;
      }
      
      .gradient-border::before {
        content: '';
        position: absolute;
        inset: -2px;
        background: linear-gradient(45deg, #3b82f6, #8b5cf6, #10b981, #f59e0b);
        border-radius: inherit;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s;
      }
      
      .gradient-border:hover::before {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  const allServices = [
    "Bleeding Gums Treatment",
    "Broken Teeth Repair", 
    "Carious Teeth Filling",
    "Dental Cavities Treatment",
    "Dental Care during Pregnancy",
    "Dental Filling",
    "Dental Implant Fixing",
    "Dentofacial Orthopedics",
    "Fixed & Removable Denture",
    "Fractured Teeth Treatment",
    "Grinding of Teeth Treatment",
    "Impacted Tooth Extraction",
    "Impaction / Impacted Tooth Extraction",
    "Individual Consultation",
    "Oral Thrush Treatment",
    "Painful Teething Management",
    "Periodontal Flap Surgery",
    "Periodontal Flap",
    "Pre Marriage Dental Counselling",
    "Restricted Mouth Opening Treatment",
    "Root Canal Treatment",
    "Scaling / Polishing",
    "Scaling and Polishing",
    "Sensitive Teeth Care",
    "Stained Teeth Treatment",
    "Surgical Tooth Extraction",
    "Surgery for Impacted Teeth",
    "Teeth Cleaning and Polishing",
    "Tooth Decay Treatment",
    "Tooth Extraction",
    "Tooth Polishing",
    "Toothache Relief"
  ].sort();

  const displayedServices = showAllServices ? allServices : allServices.slice(0, 12);

  return (
    <ReactLenis root>
      <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Mobile First */}
      <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 py-16 sm:py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-green-100/40 rounded-full blur-lg animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 bg-purple-100/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-pink-100/30 rounded-full blur-xl animate-bounce" style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
          
          {/* Medical Geometric Shapes */}
          <div className="absolute top-60 left-10 w-4 h-4 bg-blue-400/20 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-32 right-40 w-6 h-6 bg-green-400/20 rotate-12 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
          <div className="absolute bottom-40 right-60 w-8 h-8 bg-purple-400/20 rotate-45 animate-spin" style={{ animationDuration: '10s' }}></div>
          
          {/* Dental Care Icons */}
          <div className="absolute top-28 left-1/4 text-blue-200/40 animate-float">
            <Shield className="w-8 h-8" />
          </div>
          <div className="absolute top-80 right-1/4 text-green-200/30 animate-float" style={{ animationDelay: '2s' }}>
            <Heart className="w-6 h-6" />
          </div>
          <div className="absolute bottom-60 left-1/3 text-purple-200/40 animate-float" style={{ animationDelay: '4s' }}>
            <Award className="w-7 h-7" />
          </div>
        </div>

        {/* Interactive Floating Cards */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 left-8 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float hover:scale-105 transition-transform pointer-events-auto cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-700">Expert Care</span>
            </div>
          </div>
          
          <div className="absolute top-60 right-12 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float hover:scale-105 transition-transform pointer-events-auto cursor-pointer" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-medium text-gray-700">Advanced Technology</span>
            </div>
          </div>
          
          <div className="absolute bottom-40 left-16 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float hover:scale-105 transition-transform pointer-events-auto cursor-pointer" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-500" />
              <span className="text-xs font-medium text-gray-700">98.5% Success</span>
            </div>
          </div>
          
          <div className="absolute bottom-32 right-8 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float hover:scale-105 transition-transform pointer-events-auto cursor-pointer" style={{ animationDelay: '3s' }}>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-green-500" />
              <span className="text-xs font-medium text-gray-700">2000+ Patients</span>
            </div>
          </div>
        </div>

        {/* Shape Divider using SVG Image */}
        <div className="absolute bottom-0 left-0 w-full h-auto">
          <Image
            src="/wavesNegative.svg"
            alt="Wave divider"
            width={1200}
            height={60}
            className="w-full h-auto"
            style={{ display: 'block' }}
            priority
          />
        </div>

        <div className="w-full max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="relative">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 uppercase tracking-wider transition-colors duration-300">
                COMPREHENSIVE DENTAL CARE
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-1"></div>
            </div>
          </motion.div>

          <TextReveal
            text="Expert Dental Services by Dr. Dhiraj Nayak"
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 px-2"
            duration={0.8}
            staggerDelay={0.1}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
          >
            Advanced dental treatments with 20+ years of expertise across 3 convenient locations in Vadodara. 
            From preventive care to complex surgical procedures, we provide comprehensive oral healthcare solutions.
          </motion.p>

          {/* Enhanced Interactive Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8 max-w-5xl mx-auto px-4"
          >
            <motion.div variants={fadeInUp} className="group text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                <CountAnimation number={15} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors font-medium">Years Experience</p>
              <div className="w-full h-1 bg-gray-200 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="group text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-green-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-green-600 transition-colors">
                <CountAnimation number={1000} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors font-medium">Patients Treated</p>
              <div className="w-full h-1 bg-gray-200 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-green-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}></div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="group text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-purple-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors">
                <CountAnimation number={98.5} suffix="%" />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors font-medium">Success Rate</p>
              <div className="w-full h-1 bg-gray-200 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out" style={{ transitionDelay: '400ms' }}></div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="group text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-orange-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-orange-600 transition-colors">
                <CountAnimation number={3} />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors font-medium">Clinic Locations</p>
              <div className="w-full h-1 bg-gray-200 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out" style={{ transitionDelay: '600ms' }}></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Grid Section - Fully responsive */}
      <section className="relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="absolute bottom-0 left-0 w-full h-auto">
          <Image
            src="/wavesNegative.svg"
            alt="Wave divider"
            width={1200}
            height={60}
            className="w-full h-auto"
            style={{ display: 'block' }}
            priority
          />
        </div>

        <div className="container-fluid max-w-7xl relative z-10 hardware-acceleration">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 xs:gap-3 
                       bg-white/90 backdrop-blur-sm border border-gray-200/50 
                       rounded-full px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 
                       mb-4 xs:mb-6 sm:mb-8 shadow-lg hover:shadow-xl 
                       hover:scale-105 transition-all duration-300 group cursor-pointer
                       hardware-acceleration will-change-transform"
            >
              <div className="relative">
                <Users className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 
                               text-gray-600 group-hover:text-purple-600 
                               transition-colors duration-300" />
                <div className="absolute -top-0.5 -right-0.5 xs:-top-1 xs:-right-1 
                               w-2 h-2 xs:w-3 xs:h-3 bg-purple-500 rounded-full 
                               animate-gentle-pulse opacity-75"></div>
                <div className="absolute -top-0.5 -right-0.5 xs:-top-1 xs:-right-1 
                               w-2 h-2 xs:w-3 xs:h-3 bg-purple-500 rounded-full"></div>
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 
                             group-hover:text-gray-900 uppercase tracking-wider 
                             transition-colors duration-300">
                Specialized Treatments
              </span>
              <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-purple-500 rounded-full 
                           animate-gentle-pulse ml-1"></div>
            </motion.div>
            
            <TextReveal
              text="Complete Range of Dental Services"
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                       font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6 px-2 xs:px-4"
              duration={0.6}
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm xs:text-base sm:text-lg md:text-xl 
                       text-gray-600 max-w-3xl mx-auto px-2 xs:px-4 leading-relaxed"
            >
              Dr. Dhiraj Nayak offers comprehensive dental care with state-of-the-art technology 
              and personalized treatment plans for every patient.
            </motion.p>
          </div>

          {/* Enhanced Services Cards - Responsive grid with performance optimization */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid gap-3 xs:gap-4 sm:gap-6 
                     grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                     hardware-acceleration"
          >
            {dentalServices.map((service, index) => {
              const IconComponent = serviceIcons[service.id] || Activity;
              return (
                <motion.div 
                  key={service.id} 
                  variants={fadeInUp}
                  className="hardware-acceleration will-change-transform"
                >
                  <CardSpotlight className="h-full p-3 xs:p-4 sm:p-5 md:p-6 bg-white 
                                         hover:shadow-2xl transition-all duration-300
                                         hardware-acceleration">
                    {/* Enhanced header section - fully responsive */}
                    <div className="flex items-start gap-2 xs:gap-3 sm:gap-4 mb-3 xs:mb-4 sm:mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-1.5 xs:p-2 sm:p-3 bg-gray-100 rounded-lg xs:rounded-xl 
                                 flex-shrink-0 hardware-acceleration will-change-transform
                                 touch-scale"
                      >
                        <IconComponent className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 
                                                text-gray-700" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl 
                                     font-semibold text-gray-900 mb-1 leading-tight">
                          {service.title}
                        </h3>
                        <div className="flex flex-wrap gap-1 xs:gap-2 sm:gap-4 
                                      text-xs sm:text-sm text-gray-500 mt-1">
                          <span className="whitespace-nowrap">{service.procedures} completed</span>
                          <span className="hidden xs:inline">•</span>
                          <span className="whitespace-nowrap">{service.successRate} success</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced description - responsive typography */}
                    <p className="text-xs xs:text-sm sm:text-base text-gray-600 
                                 mb-3 xs:mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Enhanced treatments section - responsive layout */}
                    <div className="space-y-2 xs:space-y-3">
                      <h4 className="text-xs xs:text-sm sm:text-base font-semibold 
                                   text-gray-900 mb-2 xs:mb-3">
                        Treatments Offered:
                      </h4>
                      <div className="space-y-1.5 xs:space-y-2">
                        {service.treatments.slice(0, 6).map((treatment, treatmentIndex) => (
                          <motion.div
                            key={treatmentIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: treatmentIndex * 0.05, duration: 0.3 }}
                            className="flex items-start gap-1.5 xs:gap-2 sm:gap-3
                                     hardware-acceleration"
                          >
                            <CheckCircle className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 
                                                  text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-gray-700 font-medium 
                                           leading-tight">
                              {treatment}
                            </span>
                          </motion.div>
                        ))}
                        {service.treatments.length > 6 && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-xs sm:text-sm text-gray-500 mt-1.5 xs:mt-2 
                                     italic"
                          >
                            +{service.treatments.length - 6} more treatments...
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </CardSpotlight>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Technology Transformation Section */}
      <TechnologySection />

      {/* Enhanced Complete Services List - Fully responsive */}
      <section className="relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 
                         bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Wave at top (inverted) */}
        <div className="absolute top-0 left-0 w-full h-auto transform -scale-y-100">
          <Image
            src="/wavesNegative.svg"
            alt="Wave divider top"
            width={1200}
            height={60}
            className="w-full h-auto"
            style={{ display: 'block' }}
          />
        </div>

        {/* Wave at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-auto">
          <Image
            src="/wavesNegative.svg"
            alt="Wave divider bottom"
            width={1200}
            height={60}
            className="w-full h-auto"
            style={{ display: 'block' }}
          />
        </div>

        <div className="container-fluid max-w-7xl relative z-10 hardware-acceleration">
          <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 xs:gap-2 
                       bg-white/90 backdrop-blur-sm border border-blue-200/50 
                       text-blue-700 rounded-full 
                       px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 
                       mb-3 xs:mb-4 sm:mb-6 shadow-lg hover:shadow-xl 
                       hover:scale-105 transition-all duration-300 group cursor-pointer
                       hardware-acceleration will-change-transform"
            >
              <div className="relative">
                <Award className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 
                               group-hover:text-blue-800 transition-colors duration-300" />
                <div className="absolute -top-0.5 -right-0.5 xs:-top-1 xs:-right-1 
                               w-2 h-2 xs:w-3 xs:h-3 bg-green-500 rounded-full 
                               animate-gentle-pulse opacity-75"></div>
                <div className="absolute -top-0.5 -right-0.5 xs:-top-1 xs:-right-1 
                               w-2 h-2 xs:w-3 xs:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide 
                             group-hover:text-blue-800 transition-colors duration-300">
                Complete Service Menu
              </span>
              <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-green-500 rounded-full 
                           animate-gentle-pulse ml-0.5 xs:ml-1"></div>
            </motion.div>

            <TextReveal
              text="Comprehensive Dental Solutions"
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                       font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4 px-2 xs:px-4"
              duration={0.6}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm xs:text-base sm:text-lg md:text-xl 
                       text-gray-600 max-w-4xl mx-auto px-2 xs:px-4 leading-relaxed"
            >
              From routine checkups to advanced surgical procedures - Dr. Dhiraj Nayak provides 
              complete oral healthcare under one roof
            </motion.p>
          </div>

          {/* Enhanced Services in Card Format - Fully responsive grid */}
          <div className="relative hardware-acceleration">
            <div className="grid gap-2 xs:gap-2.5 sm:gap-3 md:gap-4
                          grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 
                          md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
                          2xl:grid-cols-6">
              {displayedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.01 }}
                  whileHover={{ 
                    y: -2, 
                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-white rounded-lg xs:rounded-xl sm:rounded-2xl 
                           p-2 xs:p-3 sm:p-4 border border-gray-200 
                           hover:border-blue-300 transition-all duration-300 cursor-pointer
                           hardware-acceleration will-change-transform touch-scale"
                >
                  <div className="flex items-start gap-1.5 xs:gap-2 sm:gap-3">
                    <div className="flex-shrink-0 mt-0.5 xs:mt-1">
                      <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 
                                    rounded-full bg-blue-500 group-hover:bg-blue-600 
                                    transition-colors hardware-acceleration"></div>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base font-medium 
                                   text-gray-700 group-hover:text-gray-900 
                                   transition-colors leading-snug">
                      {service}
                    </span>
                  </div>
                  
                  {/* Optimized gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br 
                                from-blue-50/0 to-blue-100/0 
                                group-hover:from-blue-50/30 group-hover:to-blue-100/20 
                                rounded-lg xs:rounded-xl sm:rounded-2xl 
                                transition-all duration-300 -z-10
                                hardware-acceleration"></div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Expand/Collapse Button - Fully responsive */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex justify-center mt-4 xs:mt-5 sm:mt-6 md:mt-8 lg:mt-10"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllServices(!showAllServices)}
                className="group relative bg-white border-2 border-gray-300 
                         hover:border-blue-500 text-gray-700 hover:text-blue-600 
                         px-4 xs:px-5 sm:px-6 md:px-8 
                         py-2 xs:py-2.5 sm:py-3 md:py-4 
                         rounded-full font-semibold transition-all duration-300 
                         flex items-center gap-1.5 xs:gap-2 sm:gap-3 
                         shadow-md hover:shadow-xl 
                         text-xs xs:text-sm sm:text-base
                         hardware-acceleration will-change-transform touch-scale"
              >
                <span>
                  {showAllServices ? (
                    <>
                      <span className="hidden xs:inline">Show Less</span>
                      <span className="xs:hidden">Less</span>
                    </>
                  ) : (
                    <>
                      <span className="hidden xs:inline">View All {allServices.length}</span>
                      <span className="xs:hidden">All ({allServices.length})</span>
                    </>
                  )}
                </span>
                {showAllServices ? (
                  <ChevronUp className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 
                                     group-hover:transform group-hover:-translate-y-0.5 
                                     transition-transform hardware-acceleration" />
                ) : (
                  <ChevronDown className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 
                                       group-hover:transform group-hover:translate-y-0.5 
                                       transition-transform hardware-acceleration" />
                )}
                
                {/* Optimized animated background */}
                <div className="absolute inset-0 bg-gradient-to-r 
                              from-blue-500/0 via-blue-500/5 to-blue-500/0 
                              group-hover:from-blue-500/10 group-hover:via-blue-500/20 
                              group-hover:to-blue-500/10 rounded-full 
                              transition-all duration-300 -z-10
                              hardware-acceleration"></div>
              </motion.button>
            </motion.div>

            {/* Enhanced Service count badge - Fully responsive */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-3 xs:mt-4 sm:mt-6"
            >
              <span className="text-xs sm:text-sm text-gray-500">
                Showing {displayedServices.length} of {allServices.length} services
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Timeline Section */}
      <TimelineSection />

      <Footer />
      <WhatsAppButton />
      </div>
    </ReactLenis>
  );
}


