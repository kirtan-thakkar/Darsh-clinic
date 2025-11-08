"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import { CardSpotlight } from "../../components/ui/card-spotlight";
import CountAnimation from "../../components/count-animation";
import TextReveal from "../../components/forgeui/text-reveal";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Calendar,
  CheckCircle,
  Award,
  Users,
  Shield,
  Heart,
  Star,
  Stethoscope,
  GraduationCap,
  Building,
  Activity,
  Target,
  TrendingUp,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
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
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-gentle-pulse {
        animation: gentlePulse 4s ease-in-out infinite;
      }
      
      .hover-lift {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .hover-lift:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      }
      
      .hover-glow:hover {
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
      }
      
      .card-hover {
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .card-hover:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 25px 50px rgba(0,0,0,0.15);
      }
      
      .button-bounce:hover {
        animation: bounce 0.6s ease-in-out;
      }
      
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: scale(1); }
        40% { transform: scale(1.05); }
        60% { transform: scale(1.02); }
      }
      
      .icon-spin:hover {
        animation: spin 0.8s ease-in-out;
      }
      
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      .shimmer-effect {
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        background-size: 1000px 100%;
        animation: shimmer 2s infinite;
      }
      
      @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const statsRef = useRef([]);
  const valuesRef = useRef([]);
  const teamRef = useRef(null);
  const achievementsRef = useRef([]);

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

      // Story section animation
      gsap.fromTo(
        storyRef.current,
        {
          x: -30,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Stats animation
      gsap.fromTo(
        statsRef.current,
        {
          y: 40,
          opacity: 0,
          scale: 0.95,
        },
        {
          scrollTrigger: {
            trigger: statsRef.current[0],
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
        }
      );

      // Values animation
      gsap.fromTo(
        valuesRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: valuesRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Team section animation
      gsap.fromTo(
        teamRef.current,
        {
          scale: 0.95,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: teamRef.current,
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

  // Team members data with unique IDs
  const teamMembers = [
    {
      id: "dr-dheeraj-naik-001",
      name: "Dr. Dheeraj Naik",
      role: "Founder & Chief Dental Officer",
      specialization: "General & Cosmetic Dentistry",
      experience: "15+ Years",
      qualifications: "BDS, MDS",
      avatar: "/jonathan-borba-W9YEY6G8LVM-unsplash.jpg",
      isFounder: true,
      expertise: ["General Dentistry", "Cosmetic Dentistry", "Root Canal", "Dental Implants"],
      description: "Visionary leader with 15+ years of excellence in dental care, transforming smiles across Vadodara.",
    },
    {
      id: "dr-priya-sharma-002",
      name: "Dr. Priya Sharma",
      role: "Senior Orthodontist",
      specialization: "Orthodontics & Aligners",
      experience: "12+ Years",
      qualifications: "BDS, MDS (Orthodontics)",
      avatar: "/atikah-akhtar-XJptUS8nbhs-unsplash.jpg",
      isFounder: false,
      expertise: ["Braces", "Invisalign", "Jaw Alignment", "Pediatric Orthodontics"],
      description: "Expert in creating perfect smiles through advanced orthodontic treatments and modern aligner technology.",
    },
    {
      id: "dr-rajesh-patel-003",
      name: "Dr. Rajesh Patel",
      role: "Oral & Maxillofacial Surgeon",
      specialization: "Oral Surgery & Implants",
      experience: "10+ Years",
      qualifications: "BDS, MDS (Oral Surgery)",
      avatar: "/ozkan-guner-GxctDhxhbxM-unsplash.jpg",
      isFounder: false,
      expertise: ["Dental Implants", "Wisdom Tooth Extraction", "Jaw Surgery", "Bone Grafting"],
      description: "Specialized in complex oral surgeries and advanced implant procedures with precision and care.",
    },
    {
      id: "dr-anjali-mehta-004",
      name: "Dr. Anjali Mehta",
      role: "Pediatric Dentist",
      specialization: "Children's Dental Care",
      experience: "8+ Years",
      qualifications: "BDS, MDS (Pedodontics)",
      avatar: "/amr-taha-uvnMQXF56kQ-unsplash.jpg",
      isFounder: false,
      expertise: ["Child Dentistry", "Preventive Care", "Sedation Dentistry", "Special Needs"],
      description: "Dedicated to creating positive dental experiences for children with gentle, compassionate care.",
    },
    {
      id: "dr-vikram-singh-005",
      name: "Dr. Vikram Singh",
      role: "Periodontist",
      specialization: "Gum Diseases & Treatment",
      experience: "9+ Years",
      qualifications: "BDS, MDS (Periodontics)",
      avatar: "/ozkan-guner-NUPZa4bbi_0-unsplash.jpg",
      isFounder: false,
      expertise: ["Gum Treatment", "Periodontal Surgery", "Laser Therapy", "Implant Maintenance"],
      description: "Expert in treating gum diseases and maintaining periodontal health using advanced techniques.",
    },
    {
      id: "dr-kavita-joshi-006",
      name: "Dr. Kavita Joshi",
      role: "Endodontist",
      specialization: "Root Canal Specialist",
      experience: "11+ Years",
      qualifications: "BDS, MDS (Endodontics)",
      avatar: "/dental-treatment-room.jpg",
      isFounder: false,
      expertise: ["Root Canal", "Endodontic Surgery", "Trauma Management", "Pain Management"],
      description: "Specialized in saving natural teeth through advanced endodontic treatments and pain-free procedures.",
    },
    {
      id: "dr-amit-gupta-007",
      name: "Dr. Amit Gupta",
      role: "Prosthodontist",
      specialization: "Restorative Dentistry",
      experience: "13+ Years",
      qualifications: "BDS, MDS (Prosthodontics)",
      avatar: "/dental-equipment.jpg",
      isFounder: false,
      expertise: ["Crowns & Bridges", "Dentures", "Veneers", "Full Mouth Reconstruction"],
      description: "Expert in restoring and replacing teeth with precision-crafted prosthetic solutions.",
    },
  ];

  const clinicStats = [
    {
      icon: Users,
      number: 10000,
      label: "Happy Patients",
      suffix: "+",
      color: "blue",
    },
    {
      icon: Award,
      number: 15,
      label: "Years of Excellence",
      suffix: "+",
      color: "purple",
    },
    {
      icon: Building,
      number: 3,
      label: "Modern Clinics",
      suffix: "",
      color: "green",
    },
    {
      icon: Star,
      number: 98,
      label: "Success Rate",
      suffix: "%",
      color: "yellow",
    },
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every treatment decision is made with the patient's comfort, health, and satisfaction as our top priority.",
    },
    {
      icon: Shield,
      title: "Clinical Excellence",
      description: "We maintain the highest standards of clinical practice, using evidence-based treatments and advanced technology.",
    },
    {
      icon: Users,
      title: "Compassionate Team",
      description: "Our experienced team treats every patient with empathy, respect, and personalized attention.",
    },
    {
      icon: Target,
      title: "Continuous Innovation",
      description: "We stay at the forefront of dental technology and techniques to provide the best possible outcomes.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Image and Story */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100/30 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute top-40 right-32 w-24 h-24 bg-purple-100/40 rounded-full blur-lg animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "3s" }}
          ></div>
          <div className="absolute top-28 left-1/4 text-blue-200/40 animate-float">
            <Stethoscope className="w-8 h-8" />
          </div>
          <div
            className="absolute bottom-60 left-1/3 text-green-200/40 animate-float"
            style={{ animationDelay: "4s" }}
          >
            <Heart className="w-7 h-7" />
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

        <div
          ref={heroRef}
          className="w-full max-w-7xl mx-auto relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/dental-clinic-interior.jpg"
                  alt="Dr. Dheeraj Naik at Darsh Dental Clinic"
                  width={600}
                  height={700}
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Floating Achievement Card */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">15+ Years</p>
                      <p className="text-xs text-gray-600">Excellence in Dental Care</p>
                    </div>
                  </div>
                </div>

                {/* Floating Patient Count */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">10,000+</p>
                    <p className="text-xs text-gray-600">Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Section */}
            <div ref={storyRef} className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6 shadow-lg">
                  <Heart className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                    OUR STORY
                  </span>
                </div>

                <TextReveal
                  text="The Journey of Excellence"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-gray-900 mb-6"
                  duration={0.8}
                  staggerDelay={0.1}
                />
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Founded in 2008</strong> by Dr. Dheeraj Naik, 
                  Darsh Dental Clinic began with a simple yet powerful vision: to provide world-class 
                  dental care with a personal touch to the community of Vadodara.
                </p>

                <p>
                  What started as a single clinic in Karelibaug has grown into a trusted network of 
                  <strong className="text-gray-900"> three state-of-the-art facilities</strong>, 
                  serving over 10,000 patients with unwavering commitment to excellence.
                </p>

                <p>
                  Our <strong className="text-gray-900">15+ years of dedicated service</strong> 
                  represents not just experience, but a legacy of transformed smiles, restored 
                  confidence, and countless families who trust us with their dental health.
                </p>

                <p>
                  Today, under Dr. Naik's leadership, our team of <strong className="text-gray-900">
                  7 specialized doctors</strong> continues to pioneer advanced dental treatments 
                  while maintaining the warmth and care that defines the Darsh Dental family.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">2008</p>
                  <p className="text-sm text-gray-600">Founded</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">3</p>
                  <p className="text-sm text-gray-600">Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-20 bg-gray-50">
        {/* Wave at top */}
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
            <TextReveal
              text="Excellence in Numbers"
              className="text-3xl md:text-4xl font-bold font-manrope text-gray-900 mb-4"
              duration={0.6}
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality care is reflected in these milestones achieved over our journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicStats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = {
                blue: "text-blue-500 bg-blue-50",
                purple: "text-purple-500 bg-purple-50",
                green: "text-green-500 bg-green-50",
                yellow: "text-yellow-500 bg-yellow-50",
              };

              return (
                <div
                  key={index}
                  ref={(el) => (statsRef.current[index] = el)}
                  className="text-center p-8 bg-white rounded-xl shadow-lg hover-lift hover-glow card-hover group"
                >
                  <div className={`w-16 h-16 ${colorClasses[stat.color]} rounded-full flex items-center justify-center mx-auto mb-6 icon-spin`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <CountAnimation number={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Wave at bottom */}
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

      {/* Core Values Section */}
      <section className="relative py-20 bg-white">
        {/* Wave at top */}
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
          <div className="text-center mb-16">
            <TextReveal
              text="Our Core Values"
              className="text-3xl md:text-4xl font-bold font-manrope text-gray-900 mb-4"
              duration={0.6}
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our practice and define our commitment to exceptional dental care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (valuesRef.current[index] = el)}
                  className="text-center p-6 bg-gray-50 rounded-lg hover-lift hover-glow card-hover group"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 icon-spin">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold font-manrope text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Wave at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-4 xs:h-6 sm:h-8 md:h-10 lg:h-12 overflow-hidden">
          <svg 
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            fill="#f9fafb"
            style={{ display: "block" }}
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"/>
          </svg>
        </div>
      </section>

      {/* Team Section - Premium Team Component */}
      <section className="relative py-20 bg-gray-50" ref={teamRef}>
        {/* Wave at top */}
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

        <div className="mx-auto max-w-7xl px-6 relative z-10 pt-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 mb-8 shadow-sm">
              <Users className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                OUR EXPERT TEAM
              </span>
            </div>
            
            <TextReveal
              text="Meet Our Dental Professionals"
              className="text-3xl md:text-5xl font-bold font-manrope text-gray-900 mb-6"
              duration={0.6}
            />
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of experienced dentists brings together decades of expertise, compassion, 
              and commitment to delivering exceptional dental care for every patient.
            </p>
          </div>

          {/* Founder Highlight */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Founder & Leader</h3>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <CardSpotlight className="p-8 bg-white">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity blur"></div>
                    <div className="relative">
                      <Image
                        src={teamMembers[0].avatar}
                        alt={teamMembers[0].name}
                        width={200}
                        height={200}
                        className="w-48 h-48 rounded-full object-cover object-top border-4 border-white shadow-xl"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-2">
                        <Award className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <h4 className="text-3xl font-bold text-gray-900 mb-2">
                      {teamMembers[0].name}
                    </h4>
                    <p className="text-xl text-blue-600 font-semibold mb-2">
                      {teamMembers[0].role}
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                      {teamMembers[0].specialization} • {teamMembers[0].experience}
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {teamMembers[0].description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                      {teamMembers[0].expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/about/${teamMembers[0].id}`}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 group font-semibold button-bounce hover:shadow-xl transform hover:scale-105"
                    >
                      Learn More About Dr. Naik
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </CardSpotlight>
            </div>
          </div>

          {/* Other Team Members */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Specialist Team</h3>
              <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.slice(1).map((member, index) => (
                <div key={member.id} className="group overflow-hidden">
                  <CardSpotlight className="h-full p-6 bg-white card-hover hover-glow">
                    <div className="relative mb-6">
                      <Image
                        className="w-full h-80 rounded-lg object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                        src={member.avatar}
                        alt={member.name}
                        width={300}
                        height={400}
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <span className="text-xs font-bold text-gray-700">
                          _{String(index + 2).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-semibold text-sm mb-1">
                          {member.role}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {member.specialization} • {member.experience}
                        </p>
                      </div>
                      
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {member.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.expertise.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            +{member.expertise.length - 2} more
                          </span>
                        )}
                      </div>
                      
                      <Link
                        href={`/about/${member.id}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-all duration-300 group text-sm font-semibold button-bounce"
                      >
                        View Profile
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Link>
                    </div>
                  </CardSpotlight>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;