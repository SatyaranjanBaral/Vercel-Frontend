import React from "react";
import { motion } from "framer-motion";
import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
  return (
    <section className="relative py-24 px-5 md:px-10 lg:px-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Our <span className="text-blue-600">Medical Services</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We provide top-quality healthcare services with modern medical
            facilities and compassionate specialists dedicated to your
            well-being.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
       {/* Services Grid */}
<motion.div
  className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
  initial="hidden"
  whileInView="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }}
>
  {services.map((item, index) => (
    <motion.div
      key={index}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-sm bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 transform relative overflow-hidden group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <ServiceCard item={item} index={index} />

      {/* Animated underline */}
      <div className="h-[3px] w-0 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full transition-all duration-500 group-hover:w-24"></div>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
};

export default Services;
