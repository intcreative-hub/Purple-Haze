"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

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

export default function SocialProof() {
  return (
    <section className="section-padding bg-dark-card">
      <div className="container-width">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-light-text md:text-5xl">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg text-light-text/70">
            Real reviews from real customers
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-xl border border-emerald/20 bg-dark-bg p-6 transition-all hover:border-emerald/50 hover:shadow-xl hover:shadow-emerald/10"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              {/* Quote icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                <Quote size={24} />
              </div>

              {/* Star rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-emerald text-emerald"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="mb-6 text-light-text/80 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Customer name */}
              <div className="border-t border-light-text/10 pt-4">
                <p className="font-semibold text-light-text">
                  {testimonial.name}
                </p>
                <p className="text-sm text-light-text/60">Verified Customer</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-light-text/60">
            <Star className="fill-emerald text-emerald" size={20} />
            <span className="text-lg font-semibold">4.9/5 Average Rating</span>
          </div>
          <div className="h-8 w-px bg-light-text/20" />
          <div className="text-lg font-semibold text-light-text/60">
            100+ Happy Customers
          </div>
          <div className="h-8 w-px bg-light-text/20" />
          <div className="text-lg font-semibold text-light-text/60">
            Locally Owned & Operated
          </div>
        </motion.div>
      </div>
    </section>
  );
}
