"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { CardSpotlight } from "./ui/card-spotlight";
import TextReveal from "./forgeui/text-reveal";
import {
  Zap,
  Eye,
  Microscope,
  Scan,
  Shield,
  Clock,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Activity,
  Heart,
  Stethoscope,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TechnologySection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const techCardsRef = useRef([]);
  const imageRef = useRef(null);
  const featuresRef = useRef([]);

  // Custom CSS animations
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-10px) rotate(1deg); }
        66% { transform: translateY(-5px) rotate(-1deg); }
      }
      
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
        50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.5); }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .tech-hover {
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .tech-hover:hover {
        transform: translateY(-8px) scale(1.05);
        box-shadow: 0 25px 50px rgba(0,0,0,0.15);
      }
      
      .glow-effect:hover {
        animation: pulse-glow 2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Tech cards animation
      gsap.fromTo(
        techCardsRef.current,
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
        },
        {
          scrollTrigger: {
            trigger: techCardsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        {
          x: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Features animation
      gsap.fromTo(
        featuresRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: featuresRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const technologies = [
    {
      name: "Digital X-Rays",
      icon: Zap,
      desc: "90% less radiation exposure",
      color: "blue",
      benefit: "Safer & clearer imaging"
    },
    {
      name: "3D Imaging",
      icon: Scan,
      desc: "Precise 3D diagnostics",
      color: "purple",
      benefit: "Better treatment planning"
    },
    {
      name: "Laser Dentistry",
      icon: Target,
      desc: "Minimally invasive procedures",
      color: "green",
      benefit: "Faster healing times"
    },
    {
      name: "Digital Impressions",
      icon: Microscope,
      desc: "Comfortable & accurate",
      color: "orange",
      benefit: "No messy traditional molds"
    }
  ];

  const advancedFeatures = [
    { icon: Eye, feature: "Intraoral Cameras", benefit: "See what we see in real-time" },
    { icon: Shield, feature: "Sterilization Systems", benefit: "Maximum safety protocols" },
    { icon: Clock, feature: "Same-Day Crowns", benefit: "CAD/CAM technology" },
    { icon: Sparkles, feature: "Digital Smile Design", benefit: "Preview your new smile" },
    { icon: Activity, feature: "Digital Records", benefit: "Instant access to your history" },
    { icon: Heart, feature: "Pain-Free Technology", benefit: "Comfortable treatment experience" }
  ];

  const colorClasses = {
    blue: "from-blue-500 to-cyan-500 text-blue-600 bg-blue-50",
    purple: "from-purple-500 to-pink-500 text-purple-600 bg-purple-50",
    green: "from-green-500 to-emerald-500 text-green-600 bg-green-50",
    orange: "from-orange-500 to-red-500 text-orange-600 bg-orange-50",
  };

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Main Background with Fade-out Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-transparent"></div>
      
      {/* Fade-out overlay towards bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/50 pointer-events-none"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-100/40 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 text-blue-200/40 animate-float">
          <Stethoscope className="w-12 h-12" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-green-200/40 animate-float" style={{ animationDelay: "2s" }}>
          <Activity className="w-10 h-10" />
        </div>
      </div>

      {/* Wave Divider at Top */}
      <div className="absolute top-0 left-0 w-full h-4 xs:h-6 sm:h-8 md:h-10 lg:h-12 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          fill="#f9fafb"
          style={{ display: "block", transform: "scaleY(-1)" }}
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        {/* Header Section */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 mb-8 shadow-sm border border-gray-200">
            <Zap className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
              ADVANCED TECHNOLOGY
            </span>
          </div>
          
          <TextReveal
            text="State-of-the-Art Dental Care"
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-gray-900 mb-6"
            duration={0.8}
            staggerDelay={0.1}
          />
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of dentistry with our cutting-edge technology and innovative treatment methods, 
            designed to provide you with the most comfortable and effective dental care possible.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Technology Cards */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    ref={(el) => (techCardsRef.current[index] = el)}
                    className="tech-hover glow-effect"
                  >
                    <CardSpotlight className="p-6 h-full bg-white">
                      <div className={`w-16 h-16 rounded-xl ${colorClasses[tech.color]} flex items-center justify-center mb-4`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold font-manrope text-gray-900 mb-2">{tech.name}</h3>
                      <p className="text-gray-600 mb-3">{tech.desc}</p>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>{tech.benefit}</span>
                      </div>
                    </CardSpotlight>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold group shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Technology Image */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dhgifwjqs/image/upload/v1763200752/dental-equipment_f5wmlm.jpg"
                alt="Advanced Dental Technology at Darsh Dental Clinic"
                width={600}
                height={700}
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Floating Tech Badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Latest Tech</p>
                    <p className="text-xs text-gray-600">2025 Equipment</p>
                  </div>
                </div>
              </div>

              {/* Floating Safety Badge */}
              <div className="absolute bottom-6 left-6 bg-green-500/90 backdrop-blur-sm rounded-lg p-4 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6" />
                  <div>
                    <p className="text-sm font-semibold">100% Safe</p>
                    <p className="text-xs">Sterilized Equipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keep only the main technology showcase - removed the 'Why Choose' section */}
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-4 xs:h-6 sm:h-8 md:h-10 lg:h-12 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          fill="white"
          style={{ display: "block" }}
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"/>
        </svg>
      </div>
    </section>
  );
};

export default TechnologySection;