import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Subtitle */}
        <p className="text-green-600 font-semibold tracking-wide mb-2">
          — Discover GreenCycle —
        </p>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Pioneering the Future of
          <br />
          <span className="text-green-700 dark:text-green-400">
            E-Waste Management & Sustainability
          </span>
        </h2>

        {/* Description */}
        <p className="mt-10 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
          India generates over{" "}
          <span className="font-semibold text-green-600">
            1.71 million metric tons of e-waste
          </span>{" "}
          annually — much of it improperly disposed.  
          Limited awareness and lack of trusted recycling facilities worsen the crisis.
          <br /><br />
          <span className="font-semibold text-green-700 dark:text-green-400">
            GreenCycle
          </span>{" "}
          bridges this critical gap by connecting citizens with verified
          e-waste facilities, simplifying responsible recycling and
          empowering communities to create a cleaner, greener future.
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
            Connect With Us
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
            Explore Recycling Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
