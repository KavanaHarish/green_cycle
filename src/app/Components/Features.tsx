import React from "react";
import AboutUs from "../about/About";

const elocateFeatures = [
  {
    number: "01",
    title: "State-of-the-Art E-Waste Collection Network",
    description:
      "Access our extensive network of verified and certified e-waste collection facilities, ensuring safe, responsible, and environmentally-conscious disposal for all electronic devices.",
  },
  {
    number: "02",
    title: "Comprehensive Educational Resources",
    description:
      "Empower yourself with our knowledge hub containing expert insights, best practices, and the latest research on e-waste management and environmental sustainability.",
  },
  {
    number: "03",
    title: "Intuitive User Experience",
    description:
      "Navigate our sophisticated yet user-friendly platform designed for individuals, businesses, and organizations seeking efficient and effective e-waste solutions.",
  },
  {
    number: "04",
    title: "AI-Powered Smart Assistant",
    description:
      "Get instant answers to your questions with our intelligent virtual assistant, providing 24/7 access to educational resources and personalized guidance on responsible e-waste management.",
  },
  {
    number: "05",
    title: "Reward-Based Booking System",
    description:
      "Benefit from our innovative credit mechanism that incentivizes responsible disposal practices, making sustainability rewarding for both individuals and businesses.",
  },
  {
    number: "06",
    title: "Advanced Facility Management Dashboard",
    description:
      "For facility owners: gain access to our comprehensive management suite with real-time analytics, booking oversight, and integrated credit tracking—all in one streamlined interface.",
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-green-50 dark:from-black dark:to-gray-900"
    >
      <div className="container mx-auto px-6 text-center">
        
        {/* Reuse About Section Header */}
        <AboutUs />

        {/* Feature Cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {elocateFeatures.map((feature, index) => (
            <li key={index}>
              <div className="
                group 
                relative 
                rounded-2xl 
                p-8 
                backdrop-blur-xl 
                bg-white/40 
                dark:bg-white/10 
                border 
                border-green-200 
                dark:border-green-800 
                shadow-xl 
                transition 
                duration-500 
                hover:shadow-green-300/50 
                hover:-translate-y-3
                hover:scale-[1.03]
              ">
                {/* Number Badge */}
                <div className="
                  absolute 
                  -top-4 
                  -left-4 
                  bg-green-600 
                  text-white 
                  w-12 
                  h-12 
                  rounded-xl 
                  flex 
                  items-center 
                  justify-center 
                  text-xl 
                  font-bold 
                  shadow-lg
                ">
                  {feature.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-4 group-hover:text-green-700 transition">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Glow Effect */}
                <div className="
                  absolute 
                  inset-0 
                  rounded-2xl 
                  opacity-0 
                  group-hover:opacity-20 
                  transition 
                  duration-500 
                  bg-green-400 
                  blur-xl
                "></div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Features;
