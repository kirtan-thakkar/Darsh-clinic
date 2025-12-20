"use client";
import React, { useEffect, useRef, useState } from "react";
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
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Calendar,
  Send,
  MessageCircle,
  Building,
  AlertCircle,
  Navigation as NavigationIcon,
  Star,
  ArrowRight,
} from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);

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
  const contactCardsRef = useRef([]);
  const formRef = useRef(null);
  const locationsRef = useRef([]);
  const testimonialsRef = useRef([]);
  const emergencyRef = useRef(null);

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

      // Contact cards stagger animation
      gsap.fromTo(
        contactCardsRef.current,
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
        },
        {
          scrollTrigger: {
            trigger: contactCardsRef.current[0],
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

      // Form animation
      gsap.fromTo(
        formRef.current,
        {
          x: 30,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Locations animation
      gsap.fromTo(
        locationsRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: locationsRef.current[0],
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

      // Emergency section animation
      gsap.fromTo(
        emergencyRef.current,
        {
          scale: 0.95,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: emergencyRef.current,
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

  // Handle form submission (convert to WhatsApp message)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message with form details
    const formatWhatsAppMessage = () => {
      let message = "🦷 *New Appointment Request - Darsh Dental Clinic*\n\n";
      
      // Personal Details
      message += "👤 *Patient Details:*\n";
      message += `Name: ${formData.name}\n`;
      message += `Phone: ${formData.phone}\n`;
      message += `Email: ${formData.email}\n\n`;
      
      // Service & Location
      if (formData.service) {
        message += `🩺 *Service Needed:* ${formData.service}\n`;
      }
      if (formData.location) {
        message += `📍 *Preferred Location:* ${formData.location}\n`;
      }
      
      // Appointment Preferences
      if (formData.appointmentDate || formData.appointmentTime) {
        message += "\n📅 *Appointment Preferences:*\n";
        if (formData.appointmentDate) {
          const date = new Date(formData.appointmentDate);
          message += `Date: ${date.toLocaleDateString('en-IN', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}\n`;
        }
        if (formData.appointmentTime) {
          message += `Time: ${formData.appointmentTime}\n`;
        }
      }
      
      // Message
      if (formData.message) {
        message += `\n💬 *Additional Message:*\n${formData.message}\n`;
      }
      
      message += "\n✅ Please confirm appointment availability.";
      message += "\n\n_Sent via Darsh Dental Clinic Website_";
      
      return encodeURIComponent(message);
    };

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in all required fields (Name, Phone, Email)');
      return;
    }

    // Create WhatsApp URL with the clinic's number
    const whatsappNumber = "919428305428"; // Main clinic WhatsApp number
    const whatsappMessage = formatWhatsAppMessage();
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Show success message briefly
    setFormSubmitted(true);
    
    // Open WhatsApp after 1 second
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      
      // Reset form after WhatsApp opens
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          location: "",
          message: "",
          appointmentDate: "",
          appointmentTime: "",
        });
      }, 2000);
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const locations = [
    {
      id: 1,
      name: "Karelibaug (Main Clinic)",
      address: "302, Chitra Complex, Above Prime Bank, Muktanand Tran Rasta, Karelibaug",
      city: "VADODARA, Gujarat, INDIA",
      phone: "+91 99254 56519",
      email: "darshorthoclinic@gmail.com",
      timings: "9:30 AM - 1:00 PM, 4:00 PM - 8:00 PM",
      isMain: true,
      landmark: "Near Prime Bank, Muktanand Circle",
    },
    {
      id: 2,
      name: "New VIP Road",
      address: "S.F.-1, Earth Icon, Near Khodiyar Nagar Char Rasta, New V.I.P. Road",
      city: "VADODARA, Gujarat, INDIA", 
      phone: "+91 99780 88390",
      email: "darshorthoclinic@gmail.com",
      timings: "9:30 AM - 1:00 PM, 4:00 PM - 8:00 PM",
      isMain: false,
      landmark: "Near Khodiyar Nagar Char Rasta",
    },
    {
      id: 3,
      name: "Ajwa Road",
      address: "First Floor, Saujanya Trilake, Opp. Kamlanagar Lake, Ajwa Road",
      city: "VADODARA, Gujarat, INDIA",
      phone: "+91 99746 13749",
      email: "darshorthoclinic@gmail.com",
      emergencyPhone: "+91 90992 46833",
      timings: "9:30 AM - 1:00 PM, 4:00 PM - 8:00 PM",
      isMain: false,
      landmark: "Opposite Kamlanagar Lake",
    },
  ];

  const services = [
    "General Dentistry",
    "Cosmetic Dentistry", 
    "Orthodontics",
    "Root Canal Treatment",
    "Dental Implants",
    "Teeth Whitening",
    "Oral Surgery",
    "Pediatric Dentistry",
    "Emergency Care"
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Directly",
      description: "Speak with our friendly staff",
      contact: "+91 99254 56519",
      action: "tel:+919925456519",
      color: "blue",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Instant responses & appointment booking",
      contact: "Chat Now",
      action: "https://wa.me/919428305428",
      color: "green",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed inquiries",
      contact: "Email Us", 
      action: "mailto:darshorthoclinic@gmail.com",
      color: "purple",
    },
    {
      icon: Calendar,
      title: "Online Booking",
      description: "Schedule your appointment",
      contact: "Book Now",
      action: "https://www.practo.com/",
      color: "orange",
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

          {/* Medical Icons */}
          <div className="absolute top-28 left-1/4 text-blue-200/40 animate-float">
            <Phone className="w-8 h-8" />
          </div>
          <div
            className="absolute top-80 right-1/4 text-purple-200/30 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <Mail className="w-6 h-6" />
          </div>
          <div
            className="absolute bottom-60 left-1/3 text-green-200/40 animate-float"
            style={{ animationDelay: "4s" }}
          >
            <MessageCircle className="w-7 h-7" />
          </div>
        </div>

        {/* Interactive Cards */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 left-8 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float hover:scale-105 transition-transform pointer-events-auto cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-700">
                Available Now
              </span>
            </div>
          </div>

          <div
            className="absolute top-60 right-12 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float hover:scale-105 transition-transform pointer-events-auto cursor-pointer"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-xs font-medium text-gray-700">
                5-Star Rated
              </span>
            </div>
          </div>

          <div
            className="absolute bottom-40 left-16 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float hover:scale-105 transition-transform pointer-events-auto cursor-pointer"
            style={{ animationDelay: "2s" }}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-medium text-gray-700">
                Same Day Appointments
              </span>
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

        <div
          ref={heroRef}
          className="w-full max-w-6xl mx-auto text-center relative z-10"
        >
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 mb-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
            <div className="relative">
              <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 uppercase tracking-wider transition-colors duration-300">
              READY TO HELP YOU
            </span>
          </div>

          <TextReveal
            text="Get In Touch With Us"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            duration={0.8}
            staggerDelay={0.1}
          />

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to transform your smile? Dr. Dhiraj Nayak and our expert team are here to provide personalized dental care. 
            Contact us today to schedule your consultation.
          </p>

          {/* Interactive Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <Phone className="w-8 h-8 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                <CountAnimation number={3} />
              </div>
              <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                Locations
              </p>
            </div>

            <div className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <Clock className="w-8 h-8 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                <CountAnimation number={24} suffix="/7" />
              </div>
              <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                Emergency
              </p>
            </div>

            <div className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <MessageCircle className="w-8 h-8 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                <CountAnimation number={15} suffix="min" />
              </div>
              <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                Response Time
              </p>
            </div>

            <div className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                <CountAnimation number={5} suffix="★" />
              </div>
              <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
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
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 mb-8 shadow-sm">
              <Send className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                MULTIPLE WAYS TO REACH US
              </span>
            </div>

            <TextReveal
              text="Choose Your Preferred Contact Method"
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
              duration={0.6}
            />

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help! Choose the most convenient way to connect with our dental team 
              and get the care you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const colorClasses = {
                blue: "text-blue-500 bg-blue-50 border-blue-200 hover:bg-blue-100",
                green: "text-green-500 bg-green-50 border-green-200 hover:bg-green-100", 
                purple: "text-purple-500 bg-purple-50 border-purple-200 hover:bg-purple-100",
                orange: "text-orange-500 bg-orange-50 border-orange-200 hover:bg-orange-100",
              };

              return (
                <div
                  key={index}
                  ref={(el) => (contactCardsRef.current[index] = el)}
                  className="group"
                >
                  <CardSpotlight className="h-full p-6 bg-white text-center hover-lift">
                    <div className={`w-16 h-16 ${colorClasses[method.color]} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 border-2`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {method.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {method.description}
                    </p>
                    
                    <a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : '_self'}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors group-hover:scale-105 font-medium"
                    >
                      {method.contact}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </CardSpotlight>
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

      {/* Contact Form & Locations Section */}
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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div ref={formRef}>
              <div className="mb-8">
                <TextReveal
                  text="Send Us a Message"
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  duration={0.6}
                />
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  For urgent matters, please call us directly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <MessageCircle className="w-16 h-16 text-green-500" />
                    <ArrowRight className="w-8 h-8 text-green-500 animate-bounce" />
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💬</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">
                    Redirecting to WhatsApp...
                  </h3>
                  <p className="text-green-700">
                    Your appointment request is being prepared. You'll be redirected to WhatsApp to send your details directly to our clinic.
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Location
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a location</option>
                        {locations.map((location) => (
                          <option key={location.id} value={location.name}>
                            {location.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <select
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select time</option>
                        <option value="9:30 AM">9:30 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="10:30 AM">10:30 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="12:30 PM">12:30 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="4:30 PM">4:30 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="5:30 PM">5:30 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="6:30 PM">6:30 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="7:30 PM">7:30 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your dental concerns or questions..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-semibold group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>

            {/* Locations Info */}
            <div>
              <div className="mb-8">
                <TextReveal
                  text="Visit Our Clinics"
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  duration={0.6}
                />
                <p className="text-lg text-gray-600">
                  Choose the most convenient location for your dental care. 
                  All our clinics offer the same high-quality services.
                </p>
              </div>

              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div
                    key={location.id}
                    ref={(el) => (locationsRef.current[index] = el)}
                    className={`border-2 rounded-lg p-6 transition-all duration-300 cursor-pointer ${
                      activeLocation === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveLocation(index)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                          {location.name}
                          {location.isMain && (
                            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                              Main
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-gray-500">{location.landmark}</p>
                      </div>
                      <Building className={`w-6 h-6 ${
                        activeLocation === index ? 'text-blue-500' : 'text-gray-400'
                      }`} />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-gray-700">{location.address}</p>
                          <p className="text-sm text-gray-500">{location.city}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-700">{location.phone}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-700">{location.timings}</span>
                      </div>

                      {location.emergencyPhone && (
                        <div className="flex items-center gap-3">
                          <AlertCircle className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-gray-700">
                            Emergency: {location.emergencyPhone}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <a
                        href={`tel:${location.phone}`}
                        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:border-gray-400 transition-colors text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Phone className="w-4 h-4" />
                        Call
                      </a>
                      <a
                        href={`mailto:${location.email}`}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

      {/* Why We Stand Out Timeline Section */}
      <TimelineSection />

      {/* Premium Emergency Contact Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
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
          <div ref={emergencyRef} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-red-200/50 rounded-full px-6 py-3 mb-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="relative">
                <AlertCircle className="w-5 h-5 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 uppercase tracking-wider transition-colors duration-300">
                EMERGENCY DENTAL CARE
              </span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse ml-1"></div>
            </div>

            <TextReveal
              text="24/7 Emergency Dental Services"
              className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-gray-900 mb-6"
              duration={0.8}
              staggerDelay={0.1}
            />

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Dental emergencies can't wait. Our expert team is ready to provide immediate care 
              when you need it most, with advanced pain management and urgent treatment protocols.
            </p>
          </div>

          {/* Premium Emergency Contact Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main Emergency Card */}
            <div className="lg:col-span-2">
              <CardSpotlight className="h-full p-8 bg-white hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Primary Emergency Line</h3>
                    <p className="text-gray-600 mb-6">Available 24/7 for all dental emergencies across Vadodara. Direct line to our emergency response team.</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="tel:+919925456519"
                        className="flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold group shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        +91 99254 65919
                        <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                      </a>
                      
                      <a
                        href="https://wa.me/919925456519?text=🚨 Emergency: Need immediate dental care"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold group shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        WhatsApp Emergency
                      </a>
                    </div>
                  </div>
                </div>
              </CardSpotlight>
            </div>

            {/* Ajwa Road Emergency */}
            <div className="lg:col-span-1">
              <CardSpotlight className="h-full p-8 bg-white hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Building className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ajwa Road Clinic</h3>
                  <p className="text-gray-600 mb-6 text-sm">Dedicated emergency line for Ajwa Road location</p>
                  
                  <a
                    href="tel:+919099246833"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold group shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    +91 90992 46833
                  </a>
                </div>
              </CardSpotlight>
            </div>
          </div>

          {/* Emergency Conditions Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">When to Call Emergency Dental Care</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🦷", title: "Severe Tooth Pain", desc: "Unbearable pain that disrupts daily activities" },
                { icon: "💥", title: "Dental Trauma", desc: "Knocked-out, loose, or severely damaged teeth" },
                { icon: "🩸", title: "Oral Bleeding", desc: "Persistent bleeding from gums or soft tissues" },
                { icon: "😷", title: "Facial Swelling", desc: "Significant swelling affecting face or neck" },
                { icon: "🔥", title: "Dental Abscess", desc: "Infected tooth with pus and severe pain" },
                { icon: "💊", title: "Lost Restoration", desc: "Emergency replacement of crowns or fillings" }
              ].map((condition, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{condition.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{condition.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{condition.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Instructions */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Emergency Protocol</h3>
              <p className="text-gray-600">Follow these steps for optimal emergency care</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                <h4 className="font-bold text-gray-900 mb-2">Call Immediately</h4>
                <p className="text-gray-600 text-sm">Contact our emergency line for immediate assessment and guidance</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                <h4 className="font-bold text-gray-900 mb-2">Follow First Aid</h4>
                <p className="text-gray-600 text-sm">Apply cold compress, save any broken pieces, avoid aspirin</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                <h4 className="font-bold text-gray-900 mb-2">Visit Our Clinic</h4>
                <p className="text-gray-600 text-sm">Come to the nearest location for immediate professional treatment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      </div>
    </ReactLenis>
  );
};

export default ContactPage;