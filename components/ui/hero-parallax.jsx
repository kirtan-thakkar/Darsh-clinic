"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import TextReveal from "@/components/forgeui/text-reveal";
import { Highlighter } from "./Highlighter";
import { InteractiveHoverButton } from "./interactive-hover-button";
import Link from "next/link";



export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="min-h-screen flex items-center justify-center -mt-20">
      <div className="max-w-7xl relative mx-auto px-4 w-full text-center">
        {/* Applying 12 Design Principles */}
        {/* 1. Contrast - High contrast white text on background */}
        {/* 2. Hierarchy - Clear size hierarchy between heading and subtext */}
        {/* 5. Emphasis - "oral health" emphasized with blue color */}
        {/* 6. Proportion - Proper text size relationships */}
        {/* 11. Repetition - Consistent spacing and font weights */}
        {/* 12. Alignment - Center-aligned text block */}
        
        {/* Clinic Tagline */}
        <div className="mb-8">
          <p className="text-lg md:text-xl text-gray-700 font-semibold mb-2">
            15 Years of Perfecting Smiles,
          </p>
          <p className="text-lg md:text-xl text-gray-700 font-semibold mb-3">
            One Patient at a Time
          </p>
          <p className="text-base md:text-lg text-gray-500 italic">
            Where expertise meets compassionate care in Vadodara
          </p>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
          <TextReveal 
            text="Feel amazing about your" 
            className="inline"
            duration={1.2}
            staggerDelay={0.25}
          />
          {" "}
          <Highlighter 
            action="underline" 
            color="#3b82f6"
            strokeWidth={2}
            animationDuration={800}
            isView={true}
          >
            <TextReveal 
              text="oral health" 
              className="inline text-blue-600"
              duration={1.2}
              staggerDelay={0.25}
            />
          </Highlighter>
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl md:text-2xl mt-6 text-gray-600 leading-relaxed font-medium">
          Expert dental care by Dr. Dheeraj Naik with state-of-the-art technology 
          across 3 convenient locations.
        </p>
        
        {/* Call-to-Action with Interactive Hover Button */}
        <div className="mt-12 flex justify-center">
          <Link href="https://www.practo.com" target="_blank" rel="noopener noreferrer">
            <InteractiveHoverButton
              className="bg-black text-white border-black px-8 py-4 text-base md:text-lg hover:bg-black/90"
            >
              Book Your Consultation
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0 rounded-2xl overflow-hidden">
      {/* Applying Design Principles: */}
      {/* 3. Proximity - Related elements grouped together */}
      {/* 4. Balance - Asymmetrical balance with image and text */}
      {/* 7. Movement - Hover animations guide attention */}
      {/* 9. Unity - Consistent card styling */}
      
      <Link href={product.link} className="block group-hover/product:shadow-2xl transition-shadow duration-300">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-300 group-hover/product:scale-105"
          alt={product.title} />
      </Link>
      
      {/* Blue medical overlay instead of black */}
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-70 bg-gradient-to-t from-blue-900 via-blue-600/50 to-transparent pointer-events-none transition-opacity duration-300"></div>
      
      {/* Enhanced text with medical styling */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover/product:translate-y-0 transition-transform duration-300">
        <h2 className="text-white font-semibold text-xl mb-2 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
          {product.title}
        </h2>
        <div className="w-12 h-1 bg-blue-400 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
};
