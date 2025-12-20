"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ReactLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import TimelineSection from "../../components/TimelineSection";
import { CardSpotlight } from "../../components/ui/card-spotlight";
import CountAnimation from "../../components/count-animation";
import TextReveal from "../../components/forgeui/text-reveal";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Navigation as NavigationIcon,
  Car,
  Train,
  Zap,
  Shield,
  Award,
  Users,
  Mail,
  Calendar,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const LocationsPage = () => {
  // Custom CSS animations
  useEffect(() => {
    const style = document.createElement("style");
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
  const heroRef = useRef(null);
  const locationsRef = useRef([]);
  const facilitiesRef = useRef([]);
  const mapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(
        heroRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Location cards stagger animation
      gsap.fromTo(
        locationsRef.current,
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
        },
        {
          scrollTrigger: {
            trigger: locationsRef.current[0],
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      // Facilities animation
      gsap.fromTo(
        facilitiesRef.current,
        {
          x: -30,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: facilitiesRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        }
      );

      // Map container animation
      gsap.fromTo(
        mapRef.current,
        {
          scale: 0.95,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const locations = [
    {
      id: 1,
      name: "Karelibaug, Muktanand",
      address:
        "302, Chitra Complex, Above Prime Bank, Muktanand Tran Rasta, Karelibaug",
      city: "VADODARA, Gujarat, INDIA",
      phone: "+91 992 5465919",
      timings: "9:30 AM - 1:00 PM, 4:00 PM - 8:00 PM",
      mapUrl: "https://www.google.com/maps/dir//Chitra+Complex,+302,+Muktanand+Cir,+Kalyan+Nagar,+Karelibagh,+Vadodara,+Gujarat+390018/@22.3125031,73.1943257,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395fcf9c4902db2d:0xe62136ad439f11e!2m2!1d73.1973248!2d22.3211636?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
      isMain: true,
      features: [
        "Main Clinic",
        "X-Ray Facility",
        "Surgical Suite",
        "Emergency Care",
      ],
      landmark: "Near Prime Bank",
      parking: "Available",
    },
    {
      id: 2,
      name: "New VIP Road, Khodiyar Nagar",
      address:
        "S.F.-1, Earth Icon, Near Khodiyar Nagar Char Rasta, New V.I.P. Road, New Karelibaug",
      city: "VADODARA, Gujarat, INDIA",
      phone: "+91 997 8083930",
      timings: "9:30 AM - 1:00 PM, 4:00 PM - 8:00 PM",
      mapUrl: "https://www.google.com/maps/dir//Earth+Icon,+Khodiyar+Nagar,+New+VIP+Road,+Vadodara,+Gujarat/@22.2734,73.1953,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395fcf5c0c0e0e0e:0x123456789abcdef0!2m2!1d73.1953!2d22.2734?entry=ttu",
      isMain: false,
      features: [
        "Modern Equipment",
        "Digital X-Ray",
        "Consultation Rooms",
        "Patient Lounge",
      ],
      landmark: "Near Khodiyar Nagar Char Rasta",
      parking: "Available",
    },
    {
      id: 3,
      name: "Ajwa Road, Kamla Nagar",
      address: "First Floor, Saujanya Trilake, Opp. Kamlanagar Lake, Ajwa Road",
      city: "VADODARA, Gujarat, INDIA",
      phone: "+91 997 4613749",
      emergencyPhone: "9099246833",
      timings: "9:30 AM - 1:00 PM, 4:00 PM - 8:00 PM",
      mapUrl: "https://www.google.com/maps/dir//Saujanya+Trilake,+Ajwa+Road,+Kamlanagar,+Vadodara,+Gujarat/@22.3168,73.1650,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395fcf5c0c0e0e0e:0x987654321fedcba0!2m2!1d73.1650!2d22.3168?entry=ttu",
      isMain: false,
      features: [
        "Lake View",
        "Spacious Clinic",
        "Easy Access",
        "Emergency Services",
      ],
      landmark: "Opposite Kamlanagar Lake",
      parking: "Available",
    },
  ];

  const facilities = [
    {
      name: "Digital X-Ray",
      icon: Zap,
      description: "Latest digital radiography equipment",
    },
    {
      name: "Sterilization",
      icon: Shield,
      description: "Advanced autoclave sterilization",
    },
    {
      name: "Modern Equipment",
      icon: Award,
      description: "State-of-the-art dental technology",
    },
    {
      name: "Patient Comfort",
      icon: Users,
      description: "Comfortable waiting areas",
    },
  ];

  return (
    <ReactLenis root>
      <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100/30 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute top-40 right-32 w-24 h-24 bg-purple-100/40 rounded-full blur-lg animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-32 left-40 w-40 h-40 bg-green-100/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-28 h-28 bg-yellow-100/30 rounded-full blur-xl animate-bounce"
            style={{ animationDelay: "3s", animationDuration: "4s" }}
          ></div>

          {/* Geometric Shapes */}
          <div
            className="absolute top-60 left-10 w-4 h-4 bg-blue-400/20 rotate-45 animate-spin"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute top-32 right-40 w-6 h-6 bg-purple-400/20 rotate-12 animate-spin"
            style={{ animationDuration: "6s", animationDirection: "reverse" }}
          ></div>
          <div
            className="absolute bottom-40 right-60 w-8 h-8 bg-green-400/20 rotate-45 animate-spin"
            style={{ animationDuration: "10s" }}
          ></div>

          {/* Medical Cross Icons */}
          <div className="absolute top-28 left-1/4 text-blue-200/40 animate-float">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 8h-2V6c0-.552-.448-1-1-1h-3V3c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v2H4c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h2v3H4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h2v2c0 .552.448 1 1 1h3v2c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-2h3c.552 0 1-.448 1-1v-2h2c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1h-2V9c0-.552-.448-1-1-1z" />
            </svg>
          </div>
          <div
            className="absolute top-80 right-1/4 text-purple-200/30 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <div
            className="absolute bottom-60 left-1/3 text-green-200/40 animate-float"
            style={{ animationDelay: "4s" }}
          >
            <MapPin className="w-7 h-7" />
          </div>
        </div>

        {/* Interactive Cards Floating Around */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 left-8 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float hover:scale-105 transition-transform pointer-events-auto cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-700">
                Karelibaug Open
              </span>
            </div>
          </div>

          <div
            className="absolute top-60 right-12 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float hover:scale-105 transition-transform pointer-events-auto cursor-pointer"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-medium text-gray-700">
                24/7 Emergency
              </span>
            </div>
          </div>

          <div
            className="absolute bottom-40 left-16 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float hover:scale-105 transition-transform pointer-events-auto cursor-pointer"
            style={{ animationDelay: "2s" }}
          >
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-500" />
              <span className="text-xs font-medium text-gray-700">
                15+ Years
              </span>
            </div>
          </div>

          <div
            className="absolute bottom-32 right-8 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float hover:scale-105 transition-transform pointer-events-auto cursor-pointer"
            style={{ animationDelay: "3s" }}
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-green-500" />
              <span className="text-xs font-medium text-gray-700">
                1000+ patients
              </span>
            </div>
          </div>
        </div>

        {/* Wave Divider at Bottom - Mobile Optimized */}
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

        <div
          ref={heroRef}
          className="w-full max-w-6xl mx-auto text-center relative z-10"
        >
          {/* Enhanced Badge with Micro-interactions */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 mb-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
            <div className="relative">
              <MapPin className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 uppercase tracking-wider transition-colors duration-300">
              3 CONVENIENT LOCATIONS
            </span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-1"></div>
          </div>

          <TextReveal
            text="Find Us Across Vadodara"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            duration={0.8}
            staggerDelay={0.1}
          />

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert dental care at your convenience. Dr. Dhiraj Nayak's clinics
            are strategically located across Vadodara to serve you better with
            the same quality care.
          </p>

          {/* Enhanced Interactive Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <MapPin className="w-8 h-8 text-blue-500 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                <CountAnimation number={3} />
              </div>
              <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                Locations
              </p>
              <div className="w-full h-1 bg-gray-200 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
              </div>
            </div>

            <div className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-purple-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <Award className="w-8 h-8 text-purple-500 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                <CountAnimation number={15} suffix="+" />
              </div>
              <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                Years Serving
              </p>
              <div className="w-full h-1 bg-gray-200 rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-purple-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"
                  style={{ transitionDelay: "200ms" }}
                ></div>
              </div>
            </div>

            <div className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-green-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <Users className="w-8 h-8 text-green-500 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                <CountAnimation number={1000} suffix="+" />
              </div>
              <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                Patients
              </p>
              <div className="w-full h-1 bg-gray-200 rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"
                  style={{ transitionDelay: "400ms" }}
                ></div>
              </div>
            </div>

            <div className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-red-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <Zap className="w-8 h-8 text-red-500 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                <CountAnimation number={24} suffix="/7" />
              </div>
              <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                Emergency
              </p>
              <div className="w-full h-1 bg-gray-200 rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-red-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"
                  style={{ transitionDelay: "600ms" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="relative py-20 bg-gray-50">
        {/* Wave at top - Mobile Optimized */}
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 mb-8 shadow-sm">
              <NavigationIcon className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                OUR CLINIC LOCATIONS
              </span>
            </div>

            <TextReveal
              text="Choose Your Nearest Location"
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
              duration={0.6}
            />

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each location offers the same high-quality dental care with modern
              facilities and experienced staff to ensure your comfort and
              treatment success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {locations.map((location, index) => (
              <div
                key={location.id}
                ref={(el) => (locationsRef.current[index] = el)}
                className="group cursor-pointer"
                onClick={() => window.open(location.mapUrl, '_blank')}
              >
                <CardSpotlight className="h-full p-6 bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {location.name}
                        </h3>
                        {location.isMain && (
                          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                            Main Clinic
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mb-1">
                        {location.landmark}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <NavigationIcon className="w-4 h-4" />
                      <span className="text-xs font-medium">View on Map</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {location.address}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {location.city}
                      </p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-700">
                        {location.phone}
                      </span>
                    </div>
                    {location.emergencyPhone && (
                      <div className="flex items-center gap-3">
                        <Zap className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-gray-700">
                          Emergency: {location.emergencyPhone}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-700">
                        {location.timings}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Car className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-700">
                        Parking {location.parking}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Facilities Available
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {location.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="text-xs text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-800 rounded hover:border-gray-700 text-gray-800 hover:text-gray-900 transition-colors group text-sm font-medium"
                    >
                      <NavigationIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Directions
                    </a>
                    <a
                      href={`tel:${location.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors group text-sm font-medium"
                    >
                      <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Call Now
                    </a>
                  </div>
                </CardSpotlight>
              </div>
            ))}
          </div>

          {/* Facilities Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Standard Facilities at All Locations
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Every Darsh Dental Clinic location is equipped with modern
              facilities and follows the same high standards of care and
              hygiene.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (facilitiesRef.current[index] = el)}
                  className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {facility.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Wave at bottom - Mobile Optimized */}
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

      {/* Interactive Map Section */}
      <section className="relative py-20 bg-white">
        {/* Wave at top - Mobile Optimized */}
        <div className="absolute top-0 left-0 w-full h-4 xs:h-6 sm:h-8 md:h-10 lg:h-12 overflow-hidden">
          <svg 
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            fill="white"
            style={{ display: "block", transform: "scaleY(-1)" }}
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <div className="text-center mb-12">
            <TextReveal
              text="Locate Us on Map"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              duration={0.6}
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the most convenient location for your dental care needs. All
              our clinics are easily accessible with ample parking facilities.
            </p>
          </div>

          <div ref={mapRef} className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Map Container */}
            <div className="h-[500px] rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d73.19729!3d22.32108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE5JzE2LjAiTiA3M8KwMTEnNTAuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Darsh Dental Clinic Locations"
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-6">
                  Ready to schedule your appointment? Contact us at any of our
                  locations or use our central booking system for convenience.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:darshorthoclinic@gmail.com"
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors group"
                >
                  <Mail className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <p className="font-semibold text-gray-900">
                      darshorthoclinic@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919925456519"
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors group"
                >
                  <Phone className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  <div>
                    <p className="text-sm text-gray-500">Central Booking</p>
                    <p className="font-semibold text-gray-900">
                      +91 99254 56519
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                  <Clock className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Working Hours</p>
                    <p className="font-semibold text-gray-900">
                      9:30 AM - 8:00 PM
                    </p>
                    <p className="text-sm text-gray-500">Monday - Saturday</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link href="https://www.practo.com/vadodara/clinic/darsh-orthodontic-clinic-karelibaug" target="_blank" rel="noopener noreferrer" className="target">
                  <button className="w-full bg-gray-900 text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Book Appointment Online
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Stand Out Timeline Section */}
      <TimelineSection />

      <Footer />
      <WhatsAppButton />
      </div>
    </ReactLenis>
  );
};

export default LocationsPage;
