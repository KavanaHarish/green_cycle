"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IonIcon } from "@ionic/react";
import { location, call, mail, paperPlane } from "ionicons/icons";
import logo from "../../assets/ELocate-s.png";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });

  const handleInputChange = (e: any) => {
    setFormData({ email: e.target.value });
  };

  const SendMsg = (e: any) => {
    e.preventDefault();
    emailjs
      .send(
        "service_jqn5flv",
        "template_ppph1w9",
        { email: formData.email },
        "ddYcz13MvW01UFF5u"
      )
      .then(() => {
        toast.success("Subscribed successfully!");
        setFormData({ email: "" });
      })
      .catch(() => toast.error("Subscription failed!"));
  };

  return (
    <footer className="bg-[#0f1a12] text-gray-300 pt-20 pb-10 mt-20 border-t border-green-900/40">
      <ToastContainer position="top-right" theme="dark" />

      <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div>
          <Image src={logo} alt="GreenCycle" width={120} className="mb-6" />
          <p className="text-gray-400 leading-relaxed">
            GreenCycle helps users locate certified recycling facilities and promotes
            sustainable e-waste management through technology and awareness.
          </p>

          {/* Newsletter */}
          <form
            onSubmit={SendMsg}
            className="mt-6 flex bg-[#1a2b20] border border-green-800/40 rounded-xl overflow-hidden"
          >
            <input
              type="email"
              name="email"
              placeholder="Subscribe to newsletter"
              className="flex-grow px-4 py-3 bg-transparent text-gray-200 placeholder-gray-500 outline-none"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <button className="px-5 bg-green-600 hover:bg-green-700 transition-colors flex items-center">
              <IonIcon icon={paperPlane} className="w-6 h-6 text-white" />
            </button>
          </form>
        </div>

        {/* Recycling Solutions */}
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-4">
            Recycling Solutions
          </h3>
          <ul className="space-y-3">
            <li><Link href="/recycle/smartphone" className="hover:text-green-400">Smartphones</Link></li>
            <li><Link href="/recycle/laptop" className="hover:text-green-400">Laptops & Computers</Link></li>
            <li><Link href="/recycle/accessories" className="hover:text-green-400">Accessories & Gadgets</Link></li>
            <li><Link href="/recycle/tv" className="hover:text-green-400">Televisions & Displays</Link></li>
            <li><Link href="/recycle/refrigerator" className="hover:text-green-400">Cooling Appliances</Link></li>
            <li><Link href="/recycle/washing-machine" className="hover:text-green-400">Household Appliances</Link></li>
          </ul>
        </div>

        {/* Platform Info */}
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-4">
            GreenCycle Platform
          </h3>
          <ul className="space-y-3">
            <li><Link href="/aboutus" className="hover:text-green-400">About Us</Link></li>
            <li><Link href="/education" className="hover:text-green-400">Education Hub</Link></li>
            <li><Link href="/facilities" className="hover:text-green-400">Recycling Facilities</Link></li>
            <li><Link href="/news" className="hover:text-green-400">News & Updates</Link></li>
            <li><Link href="/contactus" className="hover:text-green-400">Contact</Link></li>
            <li><Link href="/blogs" className="hover:text-green-400">Insights & Articles</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-4">
            Contact Us
          </h3>

          <ul className="space-y-4">

            <li className="flex gap-3 items-start">
              <IonIcon icon={location} className="text-green-400 w-6 h-6" />
              <span>Chh. Sambhajinagar, Maharashtra, India</span>
            </li>

            <li className="flex gap-3 items-center">
              <IonIcon icon={call} className="text-green-400 w-6 h-6" />
              <Link href="tel:+911234567890" className="hover:text-green-400">
                +91 123 456 7890
              </Link>
            </li>

            <li className="flex gap-3 items-center">
              <IonIcon icon={mail} className="text-green-400 w-6 h-6" />
              <Link href="mailto:contact@greencycle.com" className="hover:text-green-400">
                contact@greencycle.com
              </Link>
            </li>

          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-14 pt-6 border-t border-green-900/50 text-center">
        <p className="text-2xl text-gray-500">
          &copy; 2024 GreenCycle • Built by <span className="text-green-400">Team Spam Byte</span>
        </p>

        <div className="mt-3 flex justify-center gap-4 text-xl text-gray-400">
          <Link href="/privacypolicy" className="hover:text-green-400">
            Privacy Policy
          </Link>|
          <Link href="/termsandservices" className="hover:text-green-400">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
