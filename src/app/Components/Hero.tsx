"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  "Recycling Solutions",
  "Sustainable Disposal",
  "Smart Facility Finder",
];

const solutionVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const HeroSection: React.FC = () => {
  const [currentSolution, setCurrentSolution] = useState(solutions[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = solutions.indexOf(currentSolution);
      const nextIndex = (currentIndex + 1) % solutions.length;
      setCurrentSolution(solutions[nextIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSolution]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-black">

      {/* ===== BIG RANDOM FLOATING STICKERS ===== */}

      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-10 top-40 text-6xl opacity-40 select-none"
      >
        🗑️
      </motion.div>

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-12 top-60 text-7xl opacity-40 select-none"
      >
        🍃
      </motion.div>

      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute left-1/2 top-24 text-6xl opacity-30 select-none"
      >
        🌍
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute right-20 bottom-36 text-5xl opacity-40 select-none"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{ x: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-24 bottom-32 text-6xl opacity-40 select-none"
      >
        🔋
      </motion.div>

      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 5.5, repeat: Infinity }}
        className="absolute right-1/2 bottom-20 text-7xl opacity-40 select-none"
      >
        ♻️
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-1/4 top-88 text-6xl opacity-40 select-none"
      >
        💻
      </motion.div>

       <motion.div
        animate={{ y: [0, -34, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-1/4 top-34 text-6xl opacity-40 select-none"
      >
        🧩
      </motion.div>

      {/* === MAIN CONTENT === */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-10">

          {/* BIG WELCOME TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-green-700 dark:text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]"
          >
            Welcome to GreenCycle
          </motion.h2>

          {/* MAIN TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
              Your Trusted Team Delivering <br />
              High-Impact Magic On Demand <br />
              <motion.span
                key={currentSolution}
                variants={solutionVariants}
                initial="initial"
                animate="animate"
                className="text-green-700 dark:text-green-400"
              >
                {currentSolution}
              </motion.span>
            </h1>

            <p className="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
              GreenCycle makes e-waste disposal smarter and sustainable. Discover nearby recycling
              facilities instantly, track responsible disposal options, and explore eco-friendly
              insights — guiding you to recycle right and protect the planet, one device at a time.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/e-facilities"
                className="px-7 py-4 bg-green-600 text-white rounded-2xl font-semibold shadow-lg 
                transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:bg-green-700"
              >
                Find Nearest Facility
              </Link>

              <Link
                href="/recycle"
                className="px-7 py-4 bg-white dark:bg-gray-800 border border-green-600 
                text-green-600 dark:text-green-400 rounded-2xl font-semibold shadow 
                transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:bg-green-50"
              >
                Start Recycling Today
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;