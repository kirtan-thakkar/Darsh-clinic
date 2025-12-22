"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Clock,
  Award,
  Users,
  MapPin,
  Star,
  Activity,
  TrendingUp,
  Shield,
  Zap,
  Sparkles,
  Target,
  Check
} from "lucide-react";

const unifiedBentoItems = [
  {
    id: "hero",
    title: "Advanced Dental Excellence",
    description: "State-of-the-art technology and precision-driven treatments for optimal oral health outcomes.",
    feature: "spotlight",
    spotlightItems: [
      "Digital X-Ray & 3D Imaging Systems",
      "Precision Laser Dentistry", 
      "Same-Day Crown Technology",
      "Hospital-Grade Sterilization"
    ],
    className: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: "services",
    title: "Core Services",
    description: "Comprehensive dental specialties under one roof.",
    feature: "services",
    services: [
      { name: "General Dentistry", icon: Shield, stats: "2,500+ procedures" },
      { name: "Cosmetic Dentistry", icon: Sparkles, stats: "1,200+ procedures" },
      { name: "Orthodontics", icon: Zap, stats: "600+ procedures" },
      { name: "Oral Surgery", icon: Target, stats: "400+ procedures" }
    ],
    className: "col-span-1 row-span-2"
  },
  {
    id: "stats",
    title: "Clinical Excellence",
    description: "Proven track record of successful treatments.",
    feature: "metrics",
    metrics: [
      { label: "Success Rate", value: 98.5, suffix: "%", color: "emerald" },
      { label: "Patient Retention", value: 94, suffix: "%", color: "blue" },
      { label: "Years Experience", value: 20, suffix: "+", color: "amber" }
    ],
    className: "col-span-1 row-span-1"
  },
  {
    id: "locations",
    title: "3 Convenient Locations",
    description: "Serving Vadodara with accessible dental care.",
    feature: "locations",
    locations: [
      { name: "Karelibaug", phone: "+91 99254 65919" },
      { name: "New VIP Road", phone: "+91 99780 83930" },
      { name: "Ajwa Road", phone: "+91 99746 13749" }
    ],
    hours: "Mon-Sat: 9:30 AM - 1:00 PM, 4:00 PM - 8:00 PM",
    className: "col-span-1 row-span-1"
  },
  {
    id: "features",
    title: "Patient Experience",
    description: "Comfort and care in every visit.",
    feature: "features",
    features: [
      "24/7 Emergency Care",
      "Digital Treatment Planning",
      "Flexible Payment Options",
      "Multi-language Support"
    ],
    className: "col-span-1 row-span-1"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Feature components
const SpotlightFeature = ({ items }) => {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item, index) => (
        <motion.li
          key={`spotlight-${item.toLowerCase().replace(/\s+/g, "-")}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 * index, duration: 0.2 }}
          className="flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></div>
          <span className="text-sm text-gray-600 font-medium">
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  );
};

const MetricsFeature = ({ metrics }) => {
  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    metrics.forEach((metric, index) => {
      setTimeout(() => {
        const duration = 1000;
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);
        let currentFrame = 0;

        const counter = setInterval(() => {
          currentFrame++;
          const progress = currentFrame / totalFrames;
          const easedProgress = 1 - (1 - progress) ** 3;
          const current = metric.value * easedProgress;

          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(current, metric.value);
            return newCounts;
          });

          if (currentFrame === totalFrames) {
            clearInterval(counter);
          }
        }, frameRate);
      }, index * 200);
    });
  }, [metrics]);

  return (
    <div className="mt-6 space-y-4">
      {metrics.map((metric, index) => (
        <div key={metric.label} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-600">{metric.label}</span>
            <span className="text-lg font-bold text-gray-900">
              {counts[index].toFixed(metric.suffix === "%" ? 1 : 0).replace(/\.0$/, "")}
              {metric.suffix}
            </span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gray-900 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(100, counts[index])}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const ServicesFeature = ({ services }) => {
  return (
    <div className="mt-6 space-y-3">
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <motion.div
            key={`service-${service.name.toLowerCase()}`}
            className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.2 }}
          >
            <IconComponent className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-sm font-medium text-gray-700 block">
                {service.name}
              </span>
              <span className="text-xs text-gray-500">
                {service.stats}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const LocationsFeature = ({ locations, hours }) => {
  return (
    <div className="mt-6 space-y-3">
      {locations.map((location, index) => (
        <motion.div
          key={`location-${index}`}
          className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-700">{location.name}</span>
          </div>
          <span className="text-xs text-gray-500">{location.phone}</span>
        </motion.div>
      ))}
      <div className="pt-3 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
          <span className="text-sm text-gray-600">{hours}</span>
        </div>
      </div>
    </div>
  );
};

const FeaturesFeature = ({ features }) => {
  return (
    <div className="mt-6 space-y-3">
      {features.map((feature, index) => (
        <motion.div
          key={`feature-${index}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 * index, duration: 0.2 }}
          className="flex items-center gap-3"
        >
          <Check className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <span className="text-sm text-gray-600 font-medium">
            {feature}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

const UnifiedBentoCard = ({ item }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="h-full"
    >
      <Card className={cn("h-full hover:shadow-lg transition-shadow duration-200", item.className)}>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-gray-900">
            {item.title}
          </CardTitle>
          <CardDescription className="text-gray-600 leading-relaxed">
            {item.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          {/* Feature specific content */}
          {item.feature === "spotlight" && item.spotlightItems && (
            <SpotlightFeature items={item.spotlightItems} />
          )}

          {item.feature === "metrics" && item.metrics && (
            <MetricsFeature metrics={item.metrics} />
          )}

          {item.feature === "services" && item.services && (
            <ServicesFeature services={item.services} />
          )}

          {item.feature === "locations" && item.locations && (
            <LocationsFeature locations={item.locations} hours={item.hours} />
          )}

          {item.feature === "features" && item.features && (
            <FeaturesFeature features={item.features} />
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function DentalServicesSection() {
  return (
    <section className="relative min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-6"
          >
            <Activity className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              COMPREHENSIVE DENTAL CARE
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Advanced Dental Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Precision technology, clinical excellence, and comprehensive care across 3 convenient locations
          </motion.p>
        </div>

        {/* Unified Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min"
        >
          {unifiedBentoItems.map((item, index) => (
            <UnifiedBentoCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link href="/contact">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm"
            >
              Schedule Consultation
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}