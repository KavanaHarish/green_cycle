"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const SendMsg = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_jqn5flv",
        "template_cnom5kj",
        templateParams,
        "ddYcz13MvW01UFF5u"
      )
      .then(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        toast.success("Message Received! Our team will respond shortly.");
      })
      .catch(() => {
        toast.error("We encountered an issue. Please try again.");
      });
  };

  return (
    <>
      <Head>
        <title>GreenCycle - Connect With Our Sustainability Experts</title>
        <meta
          name="description"
          content="Have questions about e-waste management or our platform? Get in touch with GreenCycle's dedicated team for personalized assistance and information."
        />
      </Head>

      <div className="px-4 w-full py-16 lg:py-24 md:pb-32 md:container contactus-container">
        <ToastContainer
          className="text-2xl"
          position="top-right"
          autoClose={3000}
          theme="dark"
        />

        {/* Heading */}
        <div className="flex flex-col items-center justify-center px-10">
          <div className="text-white text-center font-bold text-2xl md:text-4xl 2xl:text-6xl uppercase tracking-widest">
            —Connect With Us—
          </div>

          <div className="text-white text-center text-xl md:text-3xl mt-4">
            Partner with us in building a sustainable future for electronics
          </div>

          <p className="text-gray-400 text-center max-w-3xl mt-4 text-lg">
            Whether you have questions about our services, want to suggest a
            recycling facility, or need assistance with e-waste management, our
            dedicated team is here to help you make environmentally responsible
            choices.
          </p>
        </div>

        {/* Content Grid */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 mt-10">

            {/* FORM SECTION */}
            <div className="p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="md:text-4xl text-2xl text-white text-center font-semibold py-4 mb-4">
                Reach Out to Our Team
              </h3>

              <form className="mb-0 mx-auto" onSubmit={SendMsg}>
                <div className="mb-4">
                  <label className="block text-gray-300 font-semibold mb-2 text-xl">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="email-field"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-300 font-semibold mb-2 text-xl">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="email-field"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-300 font-semibold mb-2 text-xl">
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    placeholder="Your contact number"
                    className="email-field"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-300 font-semibold mb-2 text-xl">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="border rounded-md py-3 text-xl px-4 w-full resize-none focus:outline-none focus:ring focus:border-green-400"
                    placeholder="How can we assist with your e-waste management needs?"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  Send Your Message
                </button>
              </form>
            </div>

            {/* TEAM CARDS SECTION */}
            <div className="p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-3xl text-white text-center font-semibold py-4 mb-6">
                Our Team Members
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Member 1 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-green-300/40 transition-transform hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    AM
                  </div>
                  <h4 className="text-xl text-white font-semibold text-center">Adarsh M</h4>
                  <p className="text-gray-300 dark:text-gray-300 text-center text-sm mt-1">
                    Team Member
                  </p>
                  <p className="text-center font-semibold text-green-700 dark:text-green-400 mt-2">
                    +91 8971989194
                  </p>
                </div>

                {/* Member 2 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-green-300/40 transition-transform hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    KH
                  </div>
                  <h4 className="text-xl text-white font-semibold text-center">Kavana H</h4>
                  <p className="text-gray-300 dark:text-gray-300 text-center text-sm mt-1">
                    Team Member
                  </p>
                  <p className="text-center font-semibold text-green-700 dark:text-green-400 mt-2">
                    +91 6364329887
                  </p>
                </div>

                {/* Member 3 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-green-300/40 transition-transform hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    DS
                  </div>
                  <h4 className="text-xl text-white font-semibold text-center">Dinesh Sapkota</h4>
                  <p className="text-gray-300 dark:text-gray-300 text-center text-sm mt-1">
                    Team Member
                  </p>
                  <p className="text-center font-semibold text-green-700 dark:text-green-400 mt-2">
                    +91 8660961789 
                  </p>
                </div>

                {/* Member 4 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-green-300/40 transition-transform hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    DP
                  </div>
                  <h4 className="text-xl text-white font-semibold text-center">Dhanalakshmi P</h4>
                  <p className="text-gray-300 dark:text-gray-300 text-center text-sm mt-1">
                    Team Member
                  </p>
                  <p className="text-center font-semibold text-green-700 dark:text-green-400 mt-2">
                    +91 9901818603
                                      </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
