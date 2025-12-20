"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Package, Shield, Award, Users } from "lucide-react";

const TimelineSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const timelineItems = [
    {
      year: "15+ Years",
      title: "Experience & Expertise",
      description:
        "Over 15 years of perfecting smiles with state-of-the-art technology and compassionate care across Vadodara.",
      icon: Award,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      year: "3 Locations",
      title: "Accessible Care",
      description:
        "Conveniently located at Karelibaug, Manjalpur, and Gotri for your comfort and accessibility.",
      icon: Package,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      year: "10,000+",
      title: "Happy Smiles",
      description:
        "Trusted by thousands of patients for exceptional dental care and life-changing smile transformations.",
      icon: Users,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      year: "Advanced",
      title: "Technology & Safety",
      description:
        "Latest dental technology with stringent safety protocols ensuring painless and precise treatments.",
      icon: Shield,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  if (!isMounted) return null;

  // Animation variants optimized for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.5 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      className="relative py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 
                       bg-gradient-to-br from-gray-50 via-white to-blue-50/30"
    >
      <div className="container-fluid max-w-7xl hardware-acceleration">
        {/* enhanced responsive container */}
        {/* Enhanced Section Header - Fully responsive */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs xs:text-sm sm:text-base text-blue-600 font-semibold 
                     mb-2 xs:mb-3 sm:mb-4 uppercase tracking-wider"
          >
            Our Journey
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                     font-bold font-manrope text-gray-900 mb-3 xs:mb-4 sm:mb-6 leading-tight"
          >
            Why We{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stand Out
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 
                     text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Building trust through excellence, innovation, and patient-centered
            care
          </motion.p>
        </motion.div>

        {/* Enhanced Timeline - Performance optimized */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Optimized Vertical Line - Hidden on mobile, visible on md+ */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 
                         w-0.5 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200
                         hardware-acceleration"
          ></div>

          {/* Timeline Items - Enhanced spacing */}
          <div className="space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
                isMobile={isMobile}
                variants={itemVariants}
              />
            ))}
          </div>
        </motion.div> 
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center 
                   mt-8 xs:mt-10 sm:mt-12 md:mt-16 lg:mt-20"
        >
          <motion.a
            href="https://www.practo.com/vadodara/clinic/darsh-orthodontic-clinic-karelibaug"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center 
                     px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 
                     text-sm xs:text-base sm:text-lg font-semibold text-white 
                     bg-gradient-to-r from-blue-600 to-purple-600 
                     rounded-xl overflow-hidden transition-all duration-300 
                     shadow-lg hover:shadow-xl
                     hardware-acceleration will-change-transform touch-scale
                     min-h-[44px] min-w-[120px]"
          >
            <span
              className="relative z-20 flex items-center justify-center font-semibold tracking-wide"
            >
                <span className="xs:inline">📞 Book Appointment</span>
              <span className="xs:hidden">📞 Book Now</span>
            </span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            ></div>
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center  px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base sm:text-lg font-semibold  text-gray-900 bg-white border-2 border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 hardware-acceleration will-change touch-scalemin-h-[44px] min-w-[120px]"
          >
            <span className="flex items-center justify-center font-semibold tracking-wide">
              <span className="">Explore Services</span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index, isLeft, isMobile, variants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: isMobile ? "-50px" : "-100px",
    threshold: isMobile ? 0.1 : 0.3,
  });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative hardware-acceleration"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 
                     gap-6 xs:gap-8 md:gap-10 lg:gap-12 
                     items-center"
      >
        {/* Content Side - Enhanced responsive */}
        <div
          className={`${isLeft ? "md:order-1" : "md:order-2"} 
                        ${isLeft ? "md:text-right" : "md:text-left"}`}
        >
          <motion.div
            whileHover={isMobile ? {} : { scale: 1.02, y: -5 }}
            className={`${item.bgColor} rounded-xl xs:rounded-2xl 
                       p-4 xs:p-5 sm:p-6 md:p-8 
                       shadow-lg hover:shadow-2xl transition-all duration-300 
                       border border-gray-100
                       hardware-acceleration will-change-transform`}
          >
            {/* Mobile Icon Row - Enhanced responsive */}
            <div className="flex items-center gap-3 xs:gap-4 mb-3 xs:mb-4 md:hidden">
              <motion.div
                whileHover={isMobile ? {} : { rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 
                           ${item.iconBg} rounded-lg xs:rounded-xl 
                           flex items-center justify-center flex-shrink-0
                           hardware-acceleration will-change-transform`}
              >
                <Icon
                  className={`w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 ${item.iconColor}`}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: index * 0.1 + 0.2 }}
                className={`inline-block px-3 xs:px-4 py-1.5 xs:py-2 
                           bg-gradient-to-r ${item.color} text-white 
                           text-xs xs:text-sm sm:text-base font-bold rounded-full
                           hardware-acceleration`}
              >
                {item.year}
              </motion.div>
            </div>

            {/* Desktop Year Badge - Enhanced responsive */}
            <motion.div
              initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: isLeft ? 20 : -20 }
              }
              transition={{ delay: index * 0.1 + 0.2 }}
              className="hidden md:block mb-3 md:mb-4"
            >
              <div
                className={`inline-block px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 
                             bg-gradient-to-r ${item.color} text-white 
                             text-sm sm:text-base md:text-lg font-bold rounded-full shadow-md
                             hardware-acceleration`}
              >
                {item.year}
              </div>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                       font-bold font-manrope text-gray-900 mb-2 xs:mb-3 sm:mb-4 leading-tight"
            >
              {item.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className="text-sm xs:text-base sm:text-lg md:text-xl 
                       text-gray-600 leading-relaxed"
            >
              {item.description}
            </motion.p>
          </motion.div>
        </div>

        {/* Center Icon (Desktop Only) - Performance optimized */}
        <div
          className={`hidden md:flex ${isLeft ? "md:order-2" : "md:order-1"} 
                        justify-center items-center`}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={
              isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
            }
            transition={{
              delay: index * 0.1 + 0.1,
              type: "spring",
              stiffness: 150,
              damping: 12,
            }}
            whileHover={{ scale: 1.15, rotate: 180 }}
            className="relative hardware-acceleration will-change-transform"
          >
            {/* Optimized Outer Ring - Reduced animation complexity on mobile */}
            <motion.div
              animate={isMobile ? {} : { rotate: 360 }}
              transition={
                isMobile
                  ? {}
                  : {
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
              className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                       rounded-full border-2 md:border-4 border-dashed border-gray-300
                       hardware-acceleration"
            />

            {/* Icon Container - Enhanced responsive */}
            <div
              className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                           ${item.iconBg} rounded-full flex items-center justify-center 
                           shadow-lg md:shadow-xl hardware-acceleration`}
            >
              <Icon
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${item.iconColor}`}
              />
            </div>

            {/* Optimized Pulse Effect - Reduced on mobile */}
            {!isMobile && (
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                           ${item.iconBg} rounded-full hardware-acceleration`}
              />
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineSection;
