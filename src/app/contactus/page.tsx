"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactUs from "./ContactUs";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-black dark:from-gray-900 dark:to-black px-4">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my-4 py-8">
          <ContactUs />
        </div>
      </motion.div>
    </div>
  );
};

export default Page;

