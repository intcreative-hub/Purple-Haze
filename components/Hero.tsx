"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Star } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import SmokeVortex from "./SmokeVortex";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="hero-premium relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Background: Clean gradient */}
      <div className="hero-background absolute inset-0 bg-gradient-to-br from-dark-bg via-card-bg to-darker-bg" />

      {/* Smoke Vortex - Full Screen Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-45">
        <div className="relative w-screen h-screen">
          <SmokeVortex />
        </div>
      </div>

      {/* Centered Content */}
      <div className="container-width section-padding relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          className="hero-content flex flex-col space-y-6 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Title - Centered */}
          <motion.div variants={itemVariants}>
            <h1 className="font-brand hero-title text-6xl md:text-7xl lg:text-8xl leading-[1.1]">
              <span className="text-primary-emerald">Purple</span>
              <span className="text-cream"> Haze</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="hero-tagline font-tagline text-primary-emerald text-lg md:text-xl"
            variants={itemVariants}
          >
            Premium Selection | Local Expertise
          </motion.p>

          {/* Description */}
          <motion.p
            className="hero-description text-xl md:text-2xl text-neutral-200 leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Premium tobacco, vapes, CBD & accessories in Brunswick, Ohio
          </motion.p>

          {/* Real Customer Testimonial Quote */}
          <motion.blockquote
            className="hero-testimonial border-l-3 border-primary-emerald pl-6 py-4 my-6 max-w-2xl mx-auto text-left"
            variants={itemVariants}
          >
            <div className="flex gap-1 mb-2 justify-center md:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-primary-emerald text-primary-emerald" />
              ))}
            </div>
            <p className="text-neutral-200 italic text-lg leading-relaxed mb-2">
              "Came in looking for premium vape, left with exactly what I needed. Staff really knows their stuff."
            </p>
            <footer className="text-primary-emerald text-sm font-medium">
              — Jordan K., Oct 2024
            </footer>
          </motion.blockquote>

          {/* CTA Buttons */}
          <motion.div
            className="hero-ctas flex flex-wrap justify-center gap-4 pt-4"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => scrollToSection("#hours")}
              className="btn-primary bg-primary-emerald text-white px-8 py-4 rounded-lg font-semibold border-2 border-primary-emerald transition-all hover:bg-transparent hover:text-primary-emerald shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin size={20} />
              Visit Us Now
            </motion.button>

            <motion.a
              href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
              className="btn-secondary bg-transparent text-primary-emerald px-8 py-4 rounded-lg font-semibold border-2 border-primary-emerald transition-all hover:bg-primary-emerald hover:text-white flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
              {SITE_CONFIG.phone}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-neutral-600">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
