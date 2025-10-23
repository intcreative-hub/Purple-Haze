"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark-bg/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container-width section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald to-purple p-2">
              <span className="text-xl font-bold text-white">PH</span>
            </div>
            <span className="text-lg font-bold text-light-text">
              {SITE_CONFIG.name}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-light-text/80 transition-colors hover:text-emerald"
              >
                {link.label}
              </button>
            ))}
            <motion.a
              href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
              className="rounded-lg bg-emerald px-6 py-2 font-semibold text-dark-bg transition-all hover:bg-emerald-light hover:shadow-lg hover:shadow-emerald/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Us Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="absolute left-0 right-0 top-full mt-2 bg-dark-card/95 backdrop-blur-lg md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4 px-4 py-6">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-lg text-light-text/80 transition-colors hover:text-emerald"
                  >
                    {link.label}
                  </button>
                ))}
                <motion.a
                  href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
                  className="rounded-lg bg-emerald px-6 py-3 text-center font-semibold text-dark-bg"
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Us Now
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
