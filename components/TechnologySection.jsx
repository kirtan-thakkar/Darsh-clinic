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
                src="/dental-equipment.jpg"
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

        {/* Advanced Features Grid - Enhanced Design */}
        <div className="relative">
          {/* Background with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-2 mb-6 shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Why Choose Our Technology?
                </span>
              </div>
              
              <TextReveal
                text="Experience the Future of Dental Care"
                className="text-3xl md:text-4xl font-bold font-manrope text-gray-900 mb-6"
                duration={0.8}
                staggerDelay={0.08}
              />
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our state-of-the-art technology ensures precise, comfortable, and efficient dental treatments for every patient.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedFeatures.map((feature, index) => {
                const Icon = feature.icon;
                const colors = [
                  "from-blue-500 to-cyan-500",
                  "from-purple-500 to-pink-500", 
                  "from-green-500 to-emerald-500",
                  "from-orange-500 to-red-500",
                  "from-indigo-500 to-blue-500",
                  "from-pink-500 to-rose-500"
                ];
                const bgColors = [
                  "bg-blue-50 border-blue-200",
                  "bg-purple-50 border-purple-200",
                  "bg-green-50 border-green-200", 
                  "bg-orange-50 border-orange-200",
                  "bg-indigo-50 border-indigo-200",
                  "bg-pink-50 border-pink-200"
                ];
                
                return (
                  <div
                    key={index}
                    ref={(el) => (featuresRef.current[index] = el)}
                    className={`group relative p-8 rounded-2xl ${bgColors[index % bgColors.length]} border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer`}
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon with Gradient Background */}
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${colors[index % colors.length]} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                      
                      {/* Floating particles effect */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/70 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                    
                    <div className="relative text-center">
                      <h4 className="text-xl font-bold font-manrope text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                        {feature.feature}
                      </h4>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {feature.benefit}
                      </p>
                    </div>
                    
                    {/* Animated bottom border */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-3/4 transition-all duration-500"></div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                <h4 className="text-2xl font-bold font-manrope mb-4">Ready to Experience Advanced Dental Care?</h4>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Book your appointment today and discover how our cutting-edge technology can transform your dental experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold group shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Sparkles className="w-5 h-5" />
                    Book Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex items-center gap-2 text-blue-100">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Free Initial Consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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