"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/ELocate-s.png";

const Footer = () => {
  return (
    <footer className="
      bg-gradient-to-b from-[#0A140F] to-[#0F1A12]
      text-gray-300 pt-20 pb-10 mt-10 
      border-t border-green-900/40 
      shadow-2xl shadow-black/40
      relative overflow-hidden
    ">

      {/* ✨ Animated gradient glow behind footer */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-green-900/10 animate-pulse pointer-events-none"></div>

      {/* Floating Orbs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-700/10 rounded-full blur-3xl animate-floating"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-emerald-600/10 rounded-full blur-3xl animate-floating-delayed"></div>

      <div className="relative max-w-7xl mx-auto p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-14">

        {/* Brand Section */}
        <div className="transform hover:scale-[1.03] transition-all duration-300 text-left">
          <Image
            src={logo}
            alt="GreenCycle"
            width={130}
            className="mb-6 opacity-90 drop-shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:drop-shadow-[0_0_25px_rgba(16,185,129,0.7)] transition-all"
          />
          <p className="text-gray-400 leading-relaxed text-lg hover:text-gray-200 transition-colors">
            GreenCycle helps locate certified recycling facilities and promotes
            sustainable e-waste management using smart technology and awareness.
          </p>
        </div>

        {/* Recycling Solutions */}
        <div className="transform hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-semibold text-green-400 mb-5 underline decoration-green-700/40 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
            Recycling Solutions
          </h3>
          <ul className="space-y-3 text-lg">
            {[
              "/recycle/smartphone",
              "/recycle/laptop",
              "/recycle/accessories",
              "/recycle/tv",
              "/recycle/refrigerator",
              "/recycle/washing-machine",
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link}
                  className="hover:text-green-400 transition-colors hover:pl-2 duration-200 inline-block"
                >
                  {link.split("/")[2].replace("-", " ").replace(/^\w/, c => c.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform Info */}
        <div className="transform hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-semibold text-green-400 mb-5 underline decoration-green-700/40 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
            GreenCycle Platform
          </h3>
          <ul className="space-y-3 text-lg">
            {[
              "/aboutus",
              "/education",
              "/facilities",
              "/news",
              "/contactus",
              "/blogs",
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link}
                  className="hover:text-green-400 transition-colors hover:pl-2 duration-200 inline-block"
                >
                  {link.replace("/", "").replace(/^\w/, c => c.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-16 pt-6 border-t border-green-900/40 text-center">
        <p className="text-lg text-gray-400 hover:text-gray-200 transition-colors">
          &copy; 2024 GreenCycle • Built by{" "}
          <span className="text-green-400 font-semibold hover:text-green-300 transition-colors">
            Team Spam Byte
          </span>
        </p>

        <div className="mt-3 flex justify-center gap-6 text-lg text-gray-400">
          <Link href="/privacypolicy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
          <span className="text-gray-500">|</span>
          <Link href="/termsandservices" className="hover:text-green-400 transition-colors">Terms of Service</Link>
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-floating {
          animation: floating 6s ease-in-out infinite;
        }
        .animate-floating-delayed {
          animation: floating 7s ease-in-out infinite 1.5s;
        }
      `}</style>

    </footer>
  );
};

export default Footer;
