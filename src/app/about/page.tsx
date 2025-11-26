"use client";
import React from "react";
import { motion } from "framer-motion";
import About from "./About";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-green-200 dark:from-gray-900 dark:via-gray-950 dark:to-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        {/* Page Header */}
        <div className="text-center mt-16 md:mt-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 dark:text-green-400 tracking-tight">
            Green Cycle
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 md:text-lg">
            Sustainable. Smart. Eco-friendly.
          </p>
        </div>

        {/* About Section */}
        <div className="mt-10 md:mt-16 pb-12">
          <About />
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
