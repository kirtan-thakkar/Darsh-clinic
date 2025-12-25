"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Youtube,
  Facebook,
  Award,
  Shield,
  Users,
  HeartHandshake,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const headingRef = useRef(null);
  const clinicInfoRef = useRef(null);
  const contactCardsRef = useRef([]);
  const servicesRef = useRef([]);
  const mapRef = useRef(null);
  const locationsRef = useRef([]);
  const socialRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced fade-up animation for heading with letter animation
      if (headingRef.current) {
        const heading = headingRef.current;
        const text = heading.textContent;
        heading.innerHTML = text
          .split("")
          .map(
            (char) =>
              `<span class="inline-block">${
                char === " " ? "&nbsp;" : char
              }</span>`
          )
          .join("");

        gsap.fromTo(
          heading.children,
          {
            y: 60,
            opacity: 0,
            rotationX: -90,
            transformOrigin: "bottom center",
          },
          {
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            y: 0,
            opacity: 1,
            rotationX: 0,
            stagger: 0.03,
            duration: 0.8,
            ease: "back.out(1.5)",
          }
        );
      }

      // Clinic info fade-up animation
      gsap.fromTo(
        clinicInfoRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: clinicInfoRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      // Contact cards enhanced stagger fade-up
      gsap.fromTo(
        contactCardsRef.current,
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
        },
        {
          scrollTrigger: {
            trigger: contactCardsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      // Services section fade-up
      gsap.fromTo(
        servicesRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: servicesRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        }
      );

      // Map container enhanced animation
      gsap.fromTo(
        mapRef.current,
        {
          scale: 0.95,
          opacity: 0,
          y: 30,
        },
        {
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Location cards slide-up animation
      gsap.fromTo(
        locationsRef.current,
        {
          x: -40,
          opacity: 0,
          y: 20,
        },
        {
          scrollTrigger: {
            trigger: locationsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          x: 0,
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
        }
      );

      // Social icons bounce animation
      gsap.fromTo(
        socialRef.current?.children || [],
        {
          scale: 0,
          opacity: 0,
          rotation: -180,
        },
        {
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          scale: 1,
          opacity: 1,
          rotation: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(2)",
        }
      );

      // Bottom section fade-up
      gsap.fromTo(
        bottomRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const locations = [
    {
      name: "Karelibaug, Muktanand",
      address:
        "302, Chitra Complex, Above Prime Bank, Muktanand Tran Rasta, Karelibaug, VADODARA, Gujarat, INDIA",
      phone: "+91 992 5465919",
      timings: "9:30am to 1:00pm - 4:00pm to 8:00pm",
      mapUrl:
        "https://maps.google.com/maps?q=Darsh+Dental+Clinic+Karelibaug+Vadodara",
    },
    {
      name: "New VIP Road, Khodiyar Nagar",
      address:
        "S.F.-1, Earth Icon, Near Khodiyar Nagar Char Rasta, New V.I.P. Road, New Karelibaug, VADODARA, Gujarat, INDIA",
      phone: "+91 997 8083930",
      timings: "9:30am to 1:00pm - 4:00pm to 8:00pm",
      mapUrl: "https://maps.google.com/maps?q=Earth+Icon+New+VIP+Road+Vadodara",
    },
    {
      name: "Ajwa Road, Kamla Nagar",
      address:
        "First Floor, Saujanya Trilake, Opp. Kamlanagar Lake, Ajwa Road, VADODARA",
      phone: "+91 997 4613749",
      emergencyPhone: "9099246835",
      timings: "9:30am to 1:00pm - 4:00pm to 8:00pm",
      mapUrl:
        "https://maps.google.com/maps?q=Saujanya+Trilake+Ajwa+Road+Vadodara",
    },
  ];

  const services = [
    { name: "Root Canal Treatment", icon: Shield },
    { name: "Dental Implants", icon: Award },
    { name: "Scaling & Polishing", icon: Users },
    { name: "Orthodontic Care", icon: HeartHandshake },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white hardware-acceleration"
    >
      <div
        className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl 
                     pt-16 xs:pt-18 sm:pt-20 md:pt-24 
                     pb-12 xs:pb-14 sm:pb-16"
      >
        {/* Enhanced Main Content - Responsive Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 
                       gap-6 xs:gap-8 lg:gap-12 
                       mb-12 xs:mb-14 sm:mb-16"
        >
          {/* Enhanced Left Section - Responsive columns */}
          <div className="lg:col-span-5 space-y-6 xs:space-y-8">
            {/* Enhanced Animated Heading - Fully responsive */}
            <div>
              <h3
                ref={headingRef}
                className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl font-bold font-manrope mb-4 xs:mb-5 sm:mb-6 text-white leading-tight"
              >
                Darsh Orthodontic Clinic
              </h3>
              <p
                ref={clinicInfoRef}
                className="text-sm xs:text-base sm:text-lg md:text-xl 
                         text-gray-300 leading-relaxed"
              >
                Expert dental care by Dr. Dhiraj Nayak with 20+ years of
                experience. State-of-the-art technology and compassionate
                service across 3 convenient locations in Vadodara.
              </p>
            </div>

            {/* Enhanced Quick Services - Responsive grid */}
            <div>
              <h4
                className="text-lg xs:text-xl sm:text-2xl font-semibold font-manrope
                           mb-4 xs:mb-5 sm:mb-6 text-white"
              >
                Popular Services
              </h4>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      ref={(el) => (servicesRef.current[index] = el)}
                      className="flex items-center gap-2 xs:gap-3 
                               p-3 xs:p-4 border border-gray-800 
                               rounded xs:rounded-lg hover:border-gray-700 
                               transition-colors group
                               hardware-acceleration touch-scale"
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {service.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Quick Contact - Fully responsive */}
            <div className="space-y-4 xs:space-y-5 sm:space-y-6">
              <a
                ref={(el) => (contactCardsRef.current[0] = el)}
                href="tel:+919925465919"
                className="block p-4 xs:p-5 sm:p-6 border border-gray-800 
                         rounded xs:rounded-lg hover:border-gray-700 
                         transition-all duration-300 group
                         hardware-acceleration touch-scale hover:scale-105"
              >
                <div className="flex items-center gap-3 xs:gap-4">
                  <Phone
                    className="w-5 h-5 xs:w-6 xs:h-6 text-gray-400 
                                  group-hover:text-white transition-colors
                                  hardware-acceleration"
                  />
                  <div>
                    <p className="text-xs xs:text-sm text-gray-400 mb-1">
                      Call Us
                    </p>
                    <p className="text-base xs:text-lg font-semibold text-white">
                      +91 99254 65919
                    </p>
                  </div>
                </div>
              </a>

              <a
                ref={(el) => (contactCardsRef.current[1] = el)}
                href="mailto:darshorthoclinic@gmail.com"
                className="block p-4 xs:p-5 sm:p-6 border border-gray-800 
                         rounded xs:rounded-lg hover:border-gray-700 
                         transition-all duration-300 group
                         hardware-acceleration touch-scale hover:scale-105"
              >
                <div className="flex items-center gap-3 xs:gap-4">
                  <Mail
                    className="w-5 h-5 xs:w-6 xs:h-6 text-gray-400 
                                 group-hover:text-white transition-colors
                                 hardware-acceleration"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs xs:text-sm text-gray-400 mb-1">
                      Email Us
                    </p>
                    <p
                      className="text-sm xs:text-base font-semibold text-white 
                                 break-words"
                    >
                      darshorthoclinic@gmail.com
                    </p>
                    <p
                      className="text-xs xs:text-sm text-gray-400 mt-1 
                                 break-words"
                    >
                      drdhirajnayakortho@yahoo.com
                    </p>
                  </div>
                </div>
              </a>

              <div
                ref={(el) => (contactCardsRef.current[2] = el)}
                className="p-4 xs:p-5 sm:p-6 border border-gray-800 
                         rounded xs:rounded-lg hardware-acceleration"
              >
                <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
                  <Clock className="w-5 h-5 xs:w-6 xs:h-6 text-gray-400" />
                  <h4 className="text-base xs:text-lg font-semibold font-manrope text-white">
                    Working Hours
                  </h4>
                </div>
                <div className="space-y-1.5 xs:space-y-2 text-sm xs:text-base text-gray-300">
                  <div className="flex justify-between gap-2">
                    <span>Monday - Saturday</span>
                    <span className="text-white font-medium">
                      9:30 AM - 8:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span>Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4
                className="text-lg xs:text-xl sm:text-2xl font-semibold font-manrope
                           mb-4 xs:mb-5 sm:mb-6 text-white"
              >
                Follow Us
              </h4>
              <div ref={socialRef} className="flex gap-3 xs:gap-4">
                <a
                  href="https://www.instagram.com/darsh_dental_hospital?igsh=MTB4MTU1bnZoaXZ5Mg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 
                           border border-gray-800 hover:border-gray-700 
                           rounded xs:rounded-lg 
                           flex items-center justify-center 
                           transition-all duration-300 group
                           hardware-acceleration touch-scale
                           hover:scale-110 hover:bg-pink-600/20
                           active:scale-95"
                >
                  <Instagram
                    className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 
                                      text-gray-400 group-hover:text-pink-400 
                                      transition-colors duration-300"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@DhirajNayak-nd3fb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 
                           border border-gray-800 hover:border-gray-700 
                           rounded xs:rounded-lg 
                           flex items-center justify-center 
                           transition-all duration-300 group
                           hardware-acceleration touch-scale
                           hover:scale-110 hover:bg-red-600/20
                           active:scale-95"
                >
                  <Youtube
                    className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 
                                    text-gray-400 group-hover:text-red-400 
                                    transition-colors duration-300"
                  />
                </a>
                <a
                  href="https://www.facebook.com/share/1GKBDx9fVj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 
                           border border-gray-800 hover:border-gray-700 
                           rounded xs:rounded-lg 
                           flex items-center justify-center 
                           transition-all duration-300 group
                           hardware-acceleration touch-scale
                           hover:scale-110 hover:bg-blue-600/20
                           active:scale-95"
                >
                  <Facebook
                    className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 
                                     text-gray-400 group-hover:text-blue-400 
                                     transition-colors duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div ref={mapRef} className="h-full">
              <div
                className="h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[45vh] xl:h-[50vh] 
                            w-full rounded xs:rounded-lg overflow-hidden 
                            mb-6 xs:mb-7 sm:mb-8 border border-gray-800
                            hardware-acceleration"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d73.19729!3d22.32108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE5JzE2LjAiTiA3M8KwMTEnNTAuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Darsh Dental Clinic Location"
                ></iframe>
              </div>
              <div className="space-y-3 xs:space-y-4 mb-6 xs:mb-7 sm:mb-8">
                <h4
                  className="text-lg xs:text-xl sm:text-2xl font-semibold font-manrope text-white 
                             mb-4 xs:mb-5 sm:mb-6"
                >
                  Our Locations
                </h4>
                {locations.map((location, index) => (
                  <a
                    key={index}
                    ref={(el) => (locationsRef.current[index] = el)}
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 xs:p-4 sm:p-5 
                             border border-gray-800 rounded xs:rounded-lg 
                             hover:border-gray-700 hover:bg-white/5
                             transition-all duration-300 group
                             hardware-acceleration touch-scale
                             hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="flex items-start gap-2 xs:gap-3">
                      <MapPin
                        className="w-4 h-4 xs:w-5 xs:h-5 
                                       text-gray-400 group-hover:text-rose-400 
                                       transition-colors flex-shrink-0 mt-0.5
                                       hardware-acceleration"
                      />
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-semibold mb-1.5 xs:mb-2 text-white 
                                     text-sm xs:text-base"
                        >
                          {location.name}
                        </p>
                        <p
                          className="text-xs xs:text-sm text-gray-400 leading-relaxed 
                                     mb-2 xs:mb-3"
                        >
                          {location.address}
                        </p>
                        <div className="space-y-0.5 xs:space-y-1">
                          <p className="text-xs text-gray-500 flex items-center gap-1.5">
                            <Phone className="w-3 h-3" />
                            {location.phone}
                          </p>
                          {location.emergencyPhone && (
                            <p className="text-xs text-red-400 flex items-center gap-1.5">
                              <AlertCircle className="w-3 h-3" />
                              Emergency: {location.emergencyPhone}
                            </p>
                          )}
                          <p className="text-xs text-gray-500 flex items-center gap-1.5">
                            <Clock className="w-3 h-3" />
                            {location.timings}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <a
                href="https://maps.google.com/maps?q=Darsh+Dental+Clinic+Karelibaug+Vadodara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center 
                         gap-2 xs:gap-3 
                         px-4 xs:px-5 sm:px-6 
                         py-3 xs:py-4 
                         border-2 border-gray-800 hover:border-rose-500
                         rounded xs:rounded-lg 
                         text-white font-medium 
                         transition-all duration-300 group
                         hardware-acceleration
                         hover:bg-gradient-to-r hover:from-rose-500/10 hover:to-purple-500/10
                         touch-scale hover:scale-105 active:scale-95"
              >
                <MapPin
                  className="w-4 h-4 xs:w-5 xs:h-5 
                                 text-gray-400 group-hover:text-rose-400 
                                 transition-colors duration-300
                                 hardware-acceleration"
                />
                <span className="text-sm xs:text-base">
                  <span className="hidden xs:inline">
                    Get Directions to Main Clinic
                  </span>
                  <span className="xs:hidden">Get Directions</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div
          ref={bottomRef}
          className="border-t border-gray-800 
                                      pt-6 xs:pt-7 sm:pt-8"
        >
          <div
            className="flex flex-col sm:flex-row justify-between items-center 
                         gap-3 xs:gap-4"
          >
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-xs xs:text-sm">
                © 2025 Darsh Dental Clinic. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-0.5 xs:mt-1">
                Reg. No. A-2629 | Gujarat Dental Council
              </p>
            </div>
            <div
              className="flex flex-wrap justify-center sm:justify-end 
                         gap-4 xs:gap-5 sm:gap-6 
                         text-gray-400 text-xs xs:text-sm"
            >
              <a
                href="#"
                className="hover:text-white transition-colors 
                                   touch-scale hardware-acceleration"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors 
                                   touch-scale hardware-acceleration"
              >
                Terms & Conditions
              </a>
              <a
                href="#services"
                className="hover:text-white transition-colors 
                                           touch-scale hardware-acceleration"
              >
                Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
