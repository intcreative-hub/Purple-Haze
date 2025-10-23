"use client";

import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import CSSCube from "./CSSCube";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-dark-bg via-dark-bg to-dark-card pt-20"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-emerald/10 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-96 w-96 rounded-full bg-purple/10 blur-3xl" />
      </div>

      <div className="container-width section-padding relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* 3D Scene Column */}
        <motion.div
          className="relative aspect-square w-full max-w-lg mx-auto lg:mx-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <CSSCube />
        </motion.div>

        {/* Text Content Column */}
        <motion.div
          className="flex flex-col space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-light-text md:text-6xl lg:text-7xl">
              <span className="gradient-text">PURPLE HAZE</span>
              <br />
              <span className="text-light-text/90">SMOKE SHOP</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl text-light-text/70 md:text-2xl"
            variants={itemVariants}
          >
            {SITE_CONFIG.tagline}
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => scrollToSection("#hours")}
              className="group relative overflow-hidden rounded-lg bg-emerald px-8 py-4 text-lg font-semibold text-dark-bg transition-all hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <MapPin size={20} />
                Visit Us Now
              </span>
              <div className="absolute inset-0 bg-emerald-light opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>

            <motion.a
              href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
              className="group relative overflow-hidden rounded-lg border-2 border-purple bg-transparent px-8 py-4 text-lg font-semibold text-light-text transition-all hover:bg-purple hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Phone size={20} />
                Call Now
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col space-y-2 pt-4 text-light-text/60"
            variants={itemVariants}
          >
            <p className="flex items-center gap-2">
              <MapPin size={18} className="text-emerald" />
              {SITE_CONFIG.address}
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} className="text-emerald" />
              {SITE_CONFIG.phone}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-light-text/40">
          <span className="text-sm">Scroll to explore</span>
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
