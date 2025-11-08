'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Sparkles } from 'lucide-react';
import { 
  ProgressSlider, 
  SliderContent, 
  SliderWrapper, 
  SliderBtnGroup, 
  SliderBtn 
} from './progressive-carousel';
import TextReveal from "@/components/forgeui/text-reveal";
import { Highlighter } from './ui/Highlighter';

const testimonials = [
  {
    id: 1,
    name: "Patient 1",
    beforeImage: "/testimonial/before1.png",
    afterImage: "/testimonial/after1.png"
  },
  {
    id: 2,
    name: "Patient 2", 
    beforeImage: "/testimonial/before2.png",
    afterImage: "/testimonial/after2.png"
  },
  {
    id: 3,
    name: "Patient 3",
    beforeImage: "/testimonial/before3.png",
    afterImage: "/testimonial/after3.png"
  }
];

export default function BeforeAfterTestimonial() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextReveal
            text="Amazing Before & After Transformations"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            duration={0.8}
            staggerDelay={0.1}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Witness the incredible transformations achieved by Dr. Dheeraj Naik's expert dental care.
          </p>
        </div>

        {/* Progressive Carousel */}
        <ProgressSlider
          duration={5000}
          activeSlider={testimonials[0].id}
          className="w-full max-w-4xl mx-auto"
        >
          <SliderContent>
            {testimonials.map((testimonial) => (
              <SliderWrapper
                key={testimonial.id}
                value={testimonial.id}
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Before Image */}
                  <div className="relative group">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
                      <Image
                        src={testimonial.beforeImage}
                        alt={`Before treatment - ${testimonial.name}`}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      BEFORE
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative group">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
                      <Image
                        src={testimonial.afterImage}
                        alt={`After treatment - ${testimonial.name}`}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      AFTER
                    </div>
                    <div className="absolute top-4 right-4">
                      <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </SliderWrapper>
            ))}
          </SliderContent>

          {/* Navigation Buttons */}
          <SliderBtnGroup className="flex justify-center gap-2 mt-8">
            {testimonials.map((testimonial) => (
              <SliderBtn
                key={testimonial.id}
                value={testimonial.id}
                className="px-6 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
                progressBarClass="bg-gradient-to-r from-blue-500 to-purple-500 top-0 left-0 h-full rounded-lg opacity-30"
              >
                {testimonial.name}
              </SliderBtn>
            ))}
          </SliderBtnGroup>
        </ProgressSlider>

        {/* Attention Seeking Lines */}
        <div className="text-center mt-16 space-y-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Transform Your Smile with Dr. Dheeraj Naik's Expertise
            </h3>
            <p className="text-lg text-gray-600 mb-2">
              ✨ 15+ Years of Excellence in Dental Care
            </p>
            <p className="text-lg text-gray-600 mb-2">
              🏆 500+ Successful Transformations
            </p>
            <p className="text-lg text-gray-600 mb-8">
              😊 Your Perfect Smile is Just One Appointment Away
            </p>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl mx-auto"
          >
            <Calendar className="w-5 h-5" />
            Book Your Appointment Now
          </motion.button>
        </div>
      </div>
    </section>
  );
}
