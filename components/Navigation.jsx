"use client";
import React, { useEffect, useRef, useState } from "react";
import { businessInfo } from "../app/constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Logo path reference: /logo.svg

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);
  const router = useRouter();

  // Navigation sections for Darsh Dental Clinic
  const navSections = ["HOME", "SERVICES", "ABOUT", "LOCATIONS", "CONTACT"];

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);

      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section) => {
    // Close menu first
    if (isOpen) {
      toggleMenu();
    }
    const sectionLower = section.toLowerCase();
    switch (sectionLower) {
      case "home":
        router.push("/");
        break;
      
      case "services":
        router.push("/services");
        break;
      
      case "locations":
        router.push("/locations");
        break;
      
      case "contact":
        router.push("/contact");
        break;
      
      case "about":
        router.push("/about");
        break;
      
      default:
        // Fallback to home
        router.push("/");
        break;
    }
  };

  return (
    <>
      {/* Logo positioned outside the sliding navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Image 
          src="/logo.svg" 
          alt="Darsh Dental Clinic Logo" 
          width={50} 
          height={50}
          className="w-12 h-12 sm:w-16 sm:h-16 transition-all duration-300 hover:scale-110"
          priority
        />
      </div>
      
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
          {navSections.map((section, index) => (
            <div key={index} ref={(el) => (linksRef.current[index] = el)}>
              <button
                className="transition-all duration-300 cursor-pointer hover:text-white text-left"
                onClick={() => handleNavClick(section)}
              >
                {section}
              </button>
            </div>
          ))}
        </div>
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50">E-mail</p>
            <p className="text-xl tracking-widest lowercase text-pretty">
              darshorthoclinic@gmail.com
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Phone</p>
            <p className="text-xl tracking-wider">
              +91 99254 56519
            </p>
          </div>
        </div>
      </nav>
      
      <div
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10"
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={topLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default Navbar;