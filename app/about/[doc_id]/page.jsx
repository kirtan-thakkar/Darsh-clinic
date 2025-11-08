"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import WhatsAppButton from "../../../components/WhatsAppButton";
import { CardSpotlight } from "../../../components/ui/card-spotlight";
import CountAnimation from "../../../components/count-animation";
import TextReveal from "../../../components/forgeui/text-reveal";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  ArrowLeft,
  BookOpen,
  Trophy,
  Briefcase,
  Clock3,
  MapPinIcon,
  PhoneCall,
  MessageCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DoctorPage = ({ params }) => {
  const resolvedParams = React.use(params);
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  const heroRef = useRef(null);
  const profileRef = useRef(null);
  const expertiseRef = useRef([]);
  const achievementsRef = useRef([]);
  const appointmentRef = useRef(null);

  // Custom micro-interaction CSS
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
      
      @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
      }
      
      @keyframes slideUp {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-gentle-pulse {
        animation: gentlePulse 4s ease-in-out infinite;
      }
      
      .animate-slide-up {
        animation: slideUp 0.6s ease-out forwards;
      }
      
      .hover-lift {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .hover-lift:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      }
      
      .hover-glow:hover {
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        transform: translateY(-2px);
      }
      
      .shimmer-effect {
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        background-size: 1000px 100%;
        animation: shimmer 2s infinite;
      }
      
      .card-hover {
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .card-hover:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 25px 50px rgba(0,0,0,0.1);
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
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Team members data (same as in About page)
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
      fullBio: "Dr. Dheeraj Naik is the visionary founder of Darsh Dental Clinic, established in 2008 with a mission to provide world-class dental care with a personal touch. With over 15 years of dedicated service to the Vadodara community, Dr. Naik has built a reputation for clinical excellence, innovative treatments, and compassionate patient care. His approach combines cutting-edge dental technology with traditional values of trust, integrity, and personalized attention. Under his leadership, Darsh Dental has grown from a single clinic to a network of three state-of-the-art facilities, serving over 10,000 satisfied patients. Dr. Naik specializes in general and cosmetic dentistry, with particular expertise in smile makeovers, dental implants, and complex restorative procedures.",
      education: [
        { degree: "Bachelor of Dental Surgery (BDS)", institution: "Gujarat University", year: "2008" },
        { degree: "Master of Dental Surgery (MDS)", institution: "Rajiv Gandhi University", year: "2011" },
        { degree: "Advanced Implantology Certification", institution: "Nobel Biocare Institute", year: "2015" },
        { degree: "Cosmetic Dentistry Fellowship", institution: "American Academy of Cosmetic Dentistry", year: "2017" }
      ],
      achievements: [
        { title: "Excellence in Dental Care Award", organization: "Vadodara Dental Association", year: "2020" },
        { title: "Community Service Recognition", organization: "Rotary Club Vadodara", year: "2019" },
        { title: "Best Dental Clinic Award", organization: "Times Health Survey", year: "2021" },
        { title: "Patient Choice Award", organization: "Healthcare Excellence Survey", year: "2022" }
      ],
      publications: [
        { title: "Modern Approaches to Dental Implantology", journal: "Indian Journal of Dental Sciences", year: "2020" },
        { title: "Patient-Centered Care in Cosmetic Dentistry", journal: "Journal of Aesthetic Dentistry", year: "2021" }
      ],
      specialProcedures: [
        "Full Mouth Rehabilitation",
        "Digital Smile Design",
        "All-on-4 Implants",
        "Laser Dentistry",
        "Sedation Dentistry",
        "Porcelain Veneers"
      ],
      personalInterests: ["Photography", "Reading Medical Literature", "Community Service", "Technology Innovation"],
      consultationHours: [
        { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
        { day: "Saturday", time: "9:00 AM - 2:00 PM" },
        { day: "Sunday", time: "Emergency Only" }
      ],
      languages: ["English", "Hindi", "Gujarati"],
      membershipAffiliations: [
        "Indian Dental Association",
        "Vadodara Dental Society",
        "International Association of Oral and Maxillofacial Surgeons",
        "American Academy of Cosmetic Dentistry"
      ]
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
      fullBio: "Dr. Priya Sharma brings over 12 years of specialized expertise in orthodontics to Darsh Dental Clinic. She is passionate about transforming smiles and improving oral health through precise tooth movement and jaw alignment. Dr. Sharma is certified in the latest orthodontic technologies, including Invisalign clear aligners, traditional braces, and advanced digital treatment planning. Her gentle approach and attention to detail have made her a favorite among both adult and pediatric patients. She believes in creating beautiful, functional smiles while ensuring patient comfort throughout the treatment journey.",
      education: [
        { degree: "Bachelor of Dental Surgery (BDS)", institution: "MS University Vadodara", year: "2011" },
        { degree: "Master of Dental Surgery (MDS) - Orthodontics", institution: "Government Dental College Mumbai", year: "2014" },
        { degree: "Invisalign Certification", institution: "Align Technology", year: "2016" },
        { degree: "Digital Orthodontics Fellowship", institution: "3Shape Academy", year: "2019" }
      ],
      achievements: [
        { title: "Best Orthodontist Award", organization: "Gujarat Orthodontic Society", year: "2020" },
        { title: "Invisalign Provider of the Year", organization: "Align Technology India", year: "2021" },
        { title: "Excellence in Patient Care", organization: "Indian Orthodontic Society", year: "2022" }
      ],
      publications: [
        { title: "Clear Aligner Therapy in Adult Patients", journal: "Journal of Indian Orthodontic Society", year: "2021" },
        { title: "Digital Treatment Planning in Modern Orthodontics", journal: "Orthodontic Review", year: "2022" }
      ],
      specialProcedures: [
        "Invisalign Treatment",
        "Traditional Metal & Ceramic Braces", 
        "Lingual Braces",
        "Early Interceptive Treatment",
        "Surgical Orthodontics",
        "Retention Therapy"
      ],
      personalInterests: ["Yoga", "Classical Music", "Reading", "Digital Photography"],
      consultationHours: [
        { day: "Monday, Wednesday, Friday", time: "10:00 AM - 6:00 PM" },
        { day: "Tuesday, Thursday", time: "2:00 PM - 8:00 PM" },
        { day: "Saturday", time: "9:00 AM - 1:00 PM" }
      ],
      languages: ["English", "Hindi", "Gujarati", "Marathi"],
      membershipAffiliations: [
        "Indian Orthodontic Society",
        "Gujarat Orthodontic Society", 
        "World Federation of Orthodontists",
        "Invisalign Provider Network"
      ]
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
      fullBio: "Dr. Rajesh Patel is a highly skilled oral and maxillofacial surgeon with over 10 years of experience in complex dental procedures. He specializes in dental implant placement, surgical extractions, bone grafting, and corrective jaw surgery. Dr. Patel's expertise lies in utilizing advanced surgical techniques and cutting-edge technology to achieve optimal patient outcomes. His meticulous approach to treatment planning and gentle surgical technique has earned him recognition among both patients and peers. He is committed to staying current with the latest advances in oral surgery and implantology.",
      education: [
        { degree: "Bachelor of Dental Surgery (BDS)", institution: "Dharamsinh Desai University", year: "2013" },
        { degree: "Master of Dental Surgery (MDS) - Oral Surgery", institution: "Government Dental College Ahmedabad", year: "2016" },
        { degree: "Advanced Implantology Course", institution: "Straumann Institute", year: "2018" },
        { degree: "Bone Grafting Techniques", institution: "ITI International", year: "2020" }
      ],
      achievements: [
        { title: "Young Surgeon Award", organization: "Association of Oral Surgeons of India", year: "2019" },
        { title: "Excellence in Implantology", organization: "Indian Society of Oral Implantologists", year: "2021" },
        { title: "Best Paper Presentation", organization: "Gujarat Dental Conference", year: "2020" }
      ],
      publications: [
        { title: "Immediate Implant Placement: A Clinical Study", journal: "Journal of Oral Implantology", year: "2020" },
        { title: "Bone Augmentation Techniques in Implant Dentistry", journal: "Indian Journal of Oral Surgery", year: "2021" }
      ],
      specialProcedures: [
        "Single & Multiple Implant Placement",
        "All-on-4 & All-on-6 Procedures",
        "Sinus Lift Surgery",
        "Bone Grafting & Ridge Augmentation",
        "Surgical Tooth Extractions",
        "TMJ Disorder Treatment"
      ],
      personalInterests: ["Cricket", "Traveling", "Cooking", "Medical Research"],
      consultationHours: [
        { day: "Monday, Wednesday, Friday", time: "9:00 AM - 5:00 PM" },
        { day: "Tuesday, Thursday", time: "2:00 PM - 7:00 PM" },
        { day: "Saturday", time: "10:00 AM - 2:00 PM" }
      ],
      languages: ["English", "Hindi", "Gujarati"],
      membershipAffiliations: [
        "Association of Oral and Maxillofacial Surgeons of India",
        "Indian Society of Oral Implantologists",
        "International Team for Implantology (ITI)",
        "Gujarat State Dental Council"
      ]
    },
    // Adding remaining team members with basic info for now
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
      fullBio: "Dr. Anjali Mehta is a compassionate pediatric dentist with 8+ years of experience in providing specialized dental care for infants, children, and adolescents.",
      education: [
        { degree: "Bachelor of Dental Surgery (BDS)", institution: "Government Dental College Vadodara", year: "2015" },
        { degree: "Master of Dental Surgery (MDS) - Pedodontics", institution: "Nair Hospital Dental College Mumbai", year: "2018" }
      ],
      achievements: [
        { title: "Best Pediatric Dentist", organization: "Vadodara Pediatric Society", year: "2021" }
      ],
      specialProcedures: ["Preventive Dentistry for Children", "Pulp Therapy", "Space Maintainers"],
      consultationHours: [
        { day: "Monday to Friday", time: "10:00 AM - 6:00 PM" },
        { day: "Saturday", time: "9:00 AM - 2:00 PM" }
      ],
      languages: ["English", "Hindi", "Gujarati"]
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
      fullBio: "Dr. Vikram Singh is a dedicated periodontist with 9+ years of expertise in diagnosing and treating gum diseases.",
      education: [
        { degree: "Bachelor of Dental Surgery (BDS)", institution: "King George Medical University", year: "2014" },
        { degree: "Master of Dental Surgery (MDS) - Periodontics", institution: "Maulana Azad Institute Delhi", year: "2017" }
      ],
      achievements: [
        { title: "Young Periodontist Award", organization: "Indian Society of Periodontology", year: "2020" }
      ],
      specialProcedures: ["Scaling & Root Planing", "Periodontal Surgery", "Laser Therapy"],
      consultationHours: [
        { day: "Tuesday, Thursday, Saturday", time: "9:00 AM - 5:00 PM" }
      ],
      languages: ["English", "Hindi", "Punjabi"]
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
      fullBio: "Dr. Kavita Joshi is a highly skilled endodontist with 11+ years of experience in saving natural teeth through advanced root canal treatments.",
      education: [
        { degree: "Bachelor of Dental Surgery (BDS)", institution: "Government Dental College Nagpur", year: "2012" },
        { degree: "Master of Dental Surgery (MDS) - Endodontics", institution: "Manipal College of Dental Sciences", year: "2015" }
      ],
      achievements: [
        { title: "Excellence in Endodontics Award", organization: "Indian Association of Conservative Dentistry", year: "2020" }
      ],
      specialProcedures: ["Single Visit Root Canal", "Complex Retreatment", "Endodontic Surgery"],
      consultationHours: [
        { day: "Monday, Wednesday, Friday", time: "9:00 AM - 6:00 PM" }
      ],
      languages: ["English", "Hindi", "Gujarati", "Marathi"]
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
      fullBio: "Dr. Amit Gupta is an accomplished prosthodontist with 13+ years of experience in restorative and prosthetic dentistry.",
      education: [
        { degree: "Bachelor of Dental Surgery (BDS)", institution: "Rajiv Gandhi University", year: "2010" },
        { degree: "Master of Dental Surgery (MDS) - Prosthodontics", institution: "Government Dental College Bangalore", year: "2013" }
      ],
      achievements: [
        { title: "Excellence in Prosthodontics", organization: "Indian Prosthodontic Society", year: "2019" }
      ],
      specialProcedures: ["All-Ceramic Crowns", "Porcelain Veneers", "Complete Dentures"],
      consultationHours: [
        { day: "Monday to Friday", time: "9:00 AM - 6:00 PM" }
      ],
      languages: ["English", "Hindi", "Gujarati", "Kannada"]
    }
  ];

  useEffect(() => {
    // Find doctor by ID
    const foundDoctor = teamMembers.find(member => member.id === resolvedParams.doc_id);
    if (foundDoctor) {
      setDoctor(foundDoctor);
    }
    setLoading(false);
  }, [resolvedParams.doc_id]);

  useEffect(() => {
    if (!doctor) return;

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

      // Profile section animation
      gsap.fromTo(
        profileRef.current,
        {
          x: -30,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: profileRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    });

    return () => ctx.revert();
  }, [doctor]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading doctor profile...</p>
        </div>
      </div>
    );
  }

  if (!doctor) {
    notFound();
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Back Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Our Team
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100/30 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute top-40 right-32 w-24 h-24 bg-purple-100/40 rounded-full blur-lg animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "3s" }}
          ></div>
          <div className="absolute top-28 left-1/4 text-blue-200/40 animate-pulse">
            <Stethoscope className="w-8 h-8" />
          </div>
          <div
            className="absolute bottom-40 right-1/3 text-purple-200/40 animate-pulse"
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

        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Doctor Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={doctor.avatar}
                  alt={doctor.name}
                  width={600}
                  height={700}
                  className="w-full h-[500px] lg:h-[600px] object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-semibold text-gray-900">{doctor.experience}</span>
                  </div>
                </div>

                {/* Founder Badge (if applicable) */}
                {doctor.isFounder && (
                  <div className="absolute bottom-6 left-6 bg-blue-600/90 backdrop-blur-sm rounded-lg p-3 text-white shadow-lg">
                    <div className="flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      <span className="text-sm font-semibold">Founder</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Doctor Information */}
            <div className="space-y-8">
              <div>
                <TextReveal
                  text={doctor.name}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                  duration={0.8}
                  staggerDelay={0.1}
                />
                <p className="text-2xl text-blue-600 font-semibold mb-2">{doctor.role}</p>
                <p className="text-xl text-gray-600 mb-4">{doctor.specialization}</p>
                <p className="text-lg text-gray-700 leading-relaxed">{doctor.description}</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                  <Clock3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">{doctor.experience}</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                  <GraduationCap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">{doctor.qualifications}</p>
                  <p className="text-sm text-gray-600">Qualifications</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
                <a
                  href="tel:+919428305428"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile Details */}
      <section className="relative py-20 bg-white" ref={profileRef}>
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
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Profile */}
            <div className="lg:col-span-2 space-y-12">
              {/* About Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About {doctor.name}</h2>
                <div className="prose prose-lg text-gray-700">
                  <p className="leading-relaxed">{doctor.fullBio}</p>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  Education & Certifications
                </h3>
                <div className="space-y-4">
                  {doctor.education?.map((edu, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6 py-2">
                      <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-sm text-blue-600 font-medium">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                  Awards & Achievements
                </h3>
                <div className="grid gap-6">
                  {doctor.achievements?.map((achievement, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Award className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                          <p className="text-gray-600 text-sm">{achievement.organization}</p>
                          <p className="text-yellow-600 font-medium text-sm">{achievement.year}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Expertise */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 card-hover hover-glow group">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-blue-600 icon-spin" />
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Special Procedures */}
              {doctor.specialProcedures && (
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 card-hover hover-glow group">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-purple-600 icon-spin" />
                    Special Procedures
                  </h3>
                  <ul className="space-y-2">
                    {doctor.specialProcedures.map((procedure, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{procedure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Consultation Hours */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 card-hover hover-glow group">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600 icon-spin" />
                  Consultation Hours
                </h3>
                <div className="space-y-3">
                  {doctor.consultationHours?.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-sm font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-sm text-gray-600">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 card-hover hover-glow group">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-600 icon-spin" />
                  Languages Spoken
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages?.map((lang, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Actions */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 space-y-4 card-hover hover-glow group">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-600 icon-spin" />
                  Book Your Appointment
                </h3>
                <Link
                  href="/contact"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-center block transform hover:scale-105 shadow-lg hover:shadow-xl button-bounce"
                >
                  📅 Book Appointment
                </Link>
                <a
                  href="tel:+919428305428"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold text-center block transform hover:scale-105 shadow-lg hover:shadow-xl button-bounce"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://wa.me/919428305428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-semibold text-center flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-xl button-bounce"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DoctorPage;