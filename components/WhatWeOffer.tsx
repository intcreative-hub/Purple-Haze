"use client";

import { motion } from "framer-motion";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { ArrowRight, Zap, Waves, Leaf, Flame, LucideIcon } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function WhatWeOffer() {
  return (
    <section id="products" className="products-section section-padding bg-dark-bg">
      <div className="container-width">
        {/* Section Header - Asymmetrical, Left-Aligned */}
        <div className="section-header mb-12">
          <h2 className="font-headline section-title text-4xl md:text-5xl text-neutral-200">
            What We Offer
          </h2>
          <p className="section-description text-primary-emerald">
            Premium products, expertly curated
          </p>
        </div>

        {/* Products Grid */}
        <motion.div
          className="products-grid grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PRODUCT_CATEGORIES.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    brands: string[];
    description: string;
    icon: string;
    priceMin: number;
    priceMax: number;
    gradient: string;
  };
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Zap,
  Waves,
  Leaf,
  Flame,
};

function ProductCard({ product }: ProductCardProps) {
  // Get icon component from mapping
  const IconComponent = iconMap[product.icon] || Zap;

  return (
    <motion.div
      className="product-card group relative bg-card-bg border border-primary-emerald/20 rounded-lg overflow-hidden transition-all hover:border-primary-emerald hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-emerald/20"
      variants={cardVariants}
    >
      {/* Product Content */}
      <div className="product-content p-8 flex flex-col space-y-4 text-center">
        {/* Icon with gradient background */}
        <div className="product-icon-wrapper mx-auto mb-2">
          <div
            className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${product.gradient}/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-emerald/30`}
          >
            <IconComponent
              size={48}
              className={`text-primary-emerald transition-all duration-300 group-hover:text-white`}
              strokeWidth={1.5}
              aria-label={product.title}
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-headline product-title text-2xl font-bold text-neutral-200 group-hover:text-primary-emerald transition-colors">
          {product.title}
        </h3>

        {/* Real Product Brands */}
        <p className="product-brands text-xs text-primary-emerald font-semibold uppercase tracking-wider">
          {product.brands.slice(0, 2).join(" • ")}
        </p>

        {/* Description */}
        <p className="product-description text-sm text-neutral-600 leading-relaxed flex-grow min-h-[3rem]">
          {product.description}
        </p>

        {/* CTA Button (appears on hover) */}
        <button className="product-cta mt-4 inline-flex items-center justify-center gap-2 text-sm text-primary-emerald font-semibold py-2 px-4 rounded-md border border-primary-emerald/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary-emerald hover:text-white">
          Explore
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Decorative Border (Appears on Hover) */}
      <div className="product-border absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-emerald to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}
