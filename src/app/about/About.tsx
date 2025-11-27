import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Subtitle */}
        <p className="text-green-600 font-semibold tracking-wide mb-2">
          — About GreenCycle —
        </p>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Transforming India’s Approach to
          <br />
          <span className="text-green-700 dark:text-green-400">
            Electronic Waste & Sustainability
          </span>
        </h2>

        {/* Description */}
        <p className="mt-10 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
          India discards more than{" "}
          <span className="font-semibold text-green-600">
            1.7 million tonnes of e-waste
          </span>{" "}
          each year — and a large portion still ends up in landfills or informal recycling zones.
          The gap between growing digital use and safe disposal is wider than ever.
          <br /><br />
          <span className="font-semibold text-green-700 dark:text-green-400">
            GreenCycle
          </span>{" "}
          is built to close that gap by helping users discover verified recycling partners,
          learn responsible disposal practices, and contribute to a cleaner environment with ease.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          
          <Link
            href="/contactus"
            className="
              px-8 py-3 bg-green-600 text-white rounded-xl 
              font-semibold shadow-lg hover:shadow-green-300/40 
              hover:bg-green-700 transition duration-300
            "
          >
            Get in Touch
          </Link>

          <Link
            href="/recycle"
            className="
              px-8 py-3 rounded-xl border border-green-600 
              text-green-700 dark:text-green-400 font-semibold 
              bg-transparent hover:bg-green-50 dark:hover:bg-green-900/20 
              transition duration-300
            "
          >
            View Recycling Options
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
