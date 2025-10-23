"use client";

import { motion } from "framer-motion";
import { Flame, Zap, Package } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

const iconMap = {
  Flame: Flame,
  Zap: Zap,
  Package: Package,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function WhatWeOffer() {
  return (
    <section id="products" className="section-padding bg-dark-bg">
      <div className="container-width">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-light-text md:text-5xl">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-lg text-light-text/70">
            Premium products for every preference
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PRODUCT_CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={category.id}
                className="group relative overflow-hidden rounded-xl border border-emerald/20 bg-dark-card p-8 transition-all hover:border-emerald/50 hover:shadow-xl hover:shadow-emerald/10"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-emerald/5 blur-2xl transition-all group-hover:bg-emerald/10" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-emerald/10 text-emerald transition-all group-hover:bg-emerald group-hover:text-dark-bg">
                    <Icon size={32} />
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-light-text">
                    {category.title}
                  </h3>

                  <p className="text-light-text/70">{category.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
