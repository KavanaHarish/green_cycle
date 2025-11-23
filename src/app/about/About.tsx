import Image from "next/image";
import Link from "next/link";
import React from "react";
import feature from "../../assets/features/banner.svg";

const About = () => {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-green-50/60 to-white dark:from-gray-900 dark:to-black"
    >
      <div className="container mx-auto px-6">
        {/* Subtitle */}
        <p className="text-center text-green-600 font-semibold tracking-wide">
          — Discover GreenCycle —
        </p>

        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 leading-tight">
          Pioneering the Future of E-Waste Management & Sustainability
        </h2>

        {/* Main grid */}
        <div className="mt-14 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Text */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              India faces a critical environmental challenge with{" "}
              <span className="font-semibold text-green-600">
                1.71 million metric tons of e-waste
              </span>{" "}
              generated annually, much of it improperly disposed. The scarcity 
              of accessible, trustworthy e-waste collection facilities intensifies 
              this growing crisis.
              <br /><br />
              <span className="font-semibold text-green-700 dark:text-green-400">
                GreenCycle
              </span>{" "}
              was born from this urgent need. Our award-winning platform bridges 
              the gap between consumers and certified e-waste facilities through 
              an intuitive, powerful interface. We're not just locating recycling 
              centers—we're igniting a movement toward responsible electronics 
              lifecycle management and environmental stewardship.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contactus"
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium shadow-md hover:bg-green-700 transition"
              >
                Connect With Us
              </Link>

              <Link
                href="/recycle"
                className="px-6 py-3 bg-white border border-green-600 text-green-700 rounded-lg font-medium shadow-sm hover:bg-green-50 transition"
              >
                Explore Recycling Solutions
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={feature}
              alt="Sustainable E-Waste Management"
              width={450}
              height={450}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
