"use client";
import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const FAQ = () => {
  const faqData = [
    {
      question: "How does GreenCycle help me find e-waste recycling facilities?",
      answer:
        "GreenCycle's intelligent facility locator uses geolocation technology to instantly identify certified e-waste recycling centers nearest to you.",
    },
    {
      question: "How does GreenCycle verify facilities listed on the platform?",
      answer:
        "We implement a rigorous multi-step verification process including certification checks, operational audits and performance validation.",
    },
    {
      question: "Can I schedule e-waste pickup through GreenCycle?",
      answer:
        "Yes! You can schedule pickup easily by selecting a preferred certified facility and time slot.",
    },
    {
      question: "What educational resources does GreenCycle offer?",
      answer:
        "We provide articles, videos, tutorials, guides and research-based updates on sustainable e-waste practices.",
    },
    {
      question: "How do I stay updated on e-waste regulations?",
      answer:
        "Our regulatory center provides simplified compliance updates and region-specific alerts.",
    },
    {
      question: "What benefits do newsletter subscribers get?",
      answer:
        "Exclusive insights, early updates, green incentives, event invites and more.",
    },
  ];

  const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-black">
black
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
          Everything you need to know about GreenCycle
        </p>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              onClick={() => toggle(index)}
              className={`
                group cursor-pointer rounded-xl p-6 border transition-all duration-300 
                hover:-translate-y-1 hover:shadow-green-200
                ${active === index
                  ? "bg-green dark:bg-green-800 border-green-600 shadow-lg text-white"
                  : "bg-transparent border-gray-300 dark:border-gray-700"
                }
              `}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xl md:text-2xl font-semibold  text-green-200">
                  {item.question}
                </h4>
                <span className="text-4xl text-green-600 dark:text-green-400">
                  {active === index ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                </span>
              </div>

              <div
                className={`
                  overflow-hidden transition-all duration-500 
                  ${active === index ? "max-h-[500px] mt-4" : "max-h-0"}
                `}
              >
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
