"use client";

import { motion } from "framer-motion";
import { useGesture } from "@use-gesture/react";
import { useRef } from "react";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import Product3DIcon from "./Product3DIcon";

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

const iconTypeMap: Record<string, "vape" | "glass" | "cbd" | "tobacco"> = {
  vapes: "vape",
  glass: "glass",
  cbd: "cbd",
  tobacco: "tobacco",
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
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PRODUCT_CATEGORIES.map((category) => (
            <TiltCard key={category.id} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface TiltCardProps {
  category: {
    id: string;
    title: string;
    description: string;
    icon: string;
  };
}

function TiltCard({ category }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const bind = useGesture({
    onHover: ({ hovering }) => {
      if (!cardRef.current) return;
      if (!hovering) {
        cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
      }
    },
    onMove: ({ xy: [x, y], hovering }) => {
      if (!cardRef.current || !hovering) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = (y - centerY) / 15;
      const rotateY = -(x - centerX) / 15;
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    },
  });

  const iconType = iconTypeMap[category.id] || "vape";

  return (
    <motion.div
      ref={cardRef}
      {...bind()}
      className="card-3d group relative overflow-hidden rounded-xl border border-emerald/20 bg-dark-card p-8 transition-all hover:border-emerald/50 hover:shadow-xl hover:shadow-emerald-500/50"
      variants={cardVariants}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.2s ease-out, box-shadow 0.3s ease",
      }}
    >
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-emerald/5 blur-2xl transition-all group-hover:bg-emerald/10" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-center">
          <Product3DIcon type={iconType} />
        </div>

        <h3 className="mb-3 text-2xl font-bold text-light-text text-center">
          {category.title}
        </h3>

        <p className="text-light-text/70 text-center">{category.description}</p>
      </div>
    </motion.div>
  );
}
