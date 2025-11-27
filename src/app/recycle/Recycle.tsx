import React from "react";
import { FiSmartphone, FiHeadphones, FiTv } from "react-icons/fi";
import { GiWashingMachine } from "react-icons/gi";
import { RiFridgeFill } from "react-icons/ri";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineDevicesOther } from "react-icons/md";
import Link from "next/link";
import Head from "next/head";

interface RecycleCardProps {
  itemName: string;
  description: string;
  recyclingProcess: string;
  specialInstructions: string;
  icon: React.ReactNode;
  benefits: string;
}

const Recycle: React.FC = () => {
  const recycleItems: RecycleCardProps[] = [
    {
      itemName: "Smartphone",
      description:
        "Responsibly recycle your outdated or non-functional smartphones and recover valuable materials while protecting the environment.",
      recyclingProcess:
        "Our certified process includes data wiping, component dismantling, precious metal recovery, and safe disposal of hazardous materials.",
      specialInstructions:
        "Back up and factory reset your device to remove personal data. Remove SIM cards and memory cards before recycling.",
      benefits:
        "Recycling one smartphone can recover enough precious metals to prevent mining 80 kg of earth.",
      icon: <FiSmartphone size={48} className="text-emerald-500" />,
    },
    {
      itemName: "Laptop",
      description:
        "Give your old laptops and computers a sustainable afterlife through our specialized electronics recycling program.",
      recyclingProcess:
        "We implement secure data destruction, component disassembly, circuit board processing, and proper management of LCD screens and batteries.",
      specialInstructions:
        "Back up important files and remove any external batteries before recycling.",
      benefits:
        "Recycling laptops can recover 95% of materials including valuable metals.",
      icon: <FaLaptop size={48} className="text-emerald-500" />,
    },
    {
      itemName: "Accessories",
      description:
        "Properly dispose of cables, chargers, headphones, keyboards, and other electronic accessories.",
      recyclingProcess:
        "We sort accessories by material type, separate metal components, and safely process plastics.",
      specialInstructions:
        "Bundle similar accessories together for easier processing.",
      benefits:
        "Recycling accessories prevents toxins from entering the soil and water.",
      icon: <FiHeadphones size={48} className="text-emerald-500" />,
    },
    {
      itemName: "Television",
      description:
        "Recycle TVs, monitors, and display devices in an environmentally responsible manner.",
      recyclingProcess:
        "Screen separation, circuit recovery, and safe disposal of hazardous materials.",
      specialInstructions:
        "Transport with screen facing down to avoid cracks.",
      benefits:
        "Prevents lead and mercury from contaminating the environment.",
      icon: <FiTv size={48} className="text-emerald-500" />,
    },
    {
      itemName: "Refrigerator",
      description:
        "Dispose of refrigerators through safe refrigerant extraction and recycling.",
      recyclingProcess:
        "We extract refrigerants, recover insulation, and recycle metal components.",
      specialInstructions: "Clean and defrost before recycling.",
      benefits:
        "Prevents greenhouse gases from entering the atmosphere.",
      icon: <RiFridgeFill size={48} className="text-emerald-500" />,
    },
    {
      itemName: "Other",
      description:
        "Recycle any electronic device not covered by other categories.",
      recyclingProcess:
        "Disassembly, component sorting, recovery, and safe disposal.",
      specialInstructions:
        "Include original packaging when possible.",
      benefits:
        "Ensures even unusual devices are handled responsibly.",
      icon: <MdOutlineDevicesOther size={48} className="text-emerald-500" />,
    },
  ];

  return (
    <>
      <Head>
        <title>GreenCycle - Electronics Recycling Solutions</title>
        <meta
          name="description"
          content="Recycle your electronic devices responsibly with GreenCycle."
        />
      </Head>

      {/* 🔥 FULL PAGE BACKGROUND FIXED HERE */}
      <div className="relative min-h-screen pt-32 pb-20 overflow-hidden 
      bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-black">

        {/* Floating Icons */}
        <div className="absolute animate-floating-1 text-emerald-400 opacity-30 text-6xl top-10 left-10">
          ♻️
        </div>
        <div className="absolute animate-floating-2 text-emerald-300 opacity-20 text-7xl bottom-20 right-20">
          🌿
        </div>
        <div className="absolute animate-floating-3 text-emerald-500 opacity-20 text-5xl top-40 right-10">
          🌎
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 recycle-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-emerald-700 dark:text-emerald-400 font-bold mb-4 drop-shadow-lg">
              Sustainable Electronics Recycling Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the right recycling option and contribute to a greener future.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {recycleItems.map((item, index) => (
              <RecycleCard key={index} {...item} />
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-20 bg-emerald-50 dark:bg-gray-800 rounded-lg p-10 shadow-lg">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">
                Why Recycle Electronics With GreenCycle?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Certified Process", icon: "✅" },
                { title: "Data Security", icon: "🔒" },
                { title: "Resource Recovery", icon: "💎" },
                { title: "Effortless Process", icon: "⚡" },
              ].map((feat, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
                >
                  <div className="text-4xl mb-3">{feat.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {feat.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        @keyframes float1 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float2 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(25px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float3 {
          0% { transform: translateX(0px); }
          50% { transform: translateX(25px); }
          100% { transform: translateX(0px); }
        }
        .animate-floating-1 { animation: float1 6s infinite ease-in-out; }
        .animate-floating-2 { animation: float2 7s infinite ease-in-out; }
        .animate-floating-3 { animation: float3 5s infinite ease-in-out; }
      `}</style>
    </>
  );
};

const RecycleCard: React.FC<RecycleCardProps> = ({
  itemName,
  description,
  recyclingProcess,
  specialInstructions,
  benefits,
  icon,
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden 
    hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 border border-emerald-100 dark:border-gray-700">

      <div className="bg-emerald-50 dark:bg-gray-800 p-6 rounded-xl flex justify-center mb-4">
        <div className="bg-white dark:bg-gray-900 rounded-full p-4 shadow-md">
          {icon}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
        {itemName}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{description}</p>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        <span className="font-semibold text-emerald-600 dark:text-emerald-400">Process:</span>{" "}
        {recyclingProcess}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        <span className="font-semibold text-emerald-600 dark:text-emerald-400">Instructions:</span>{" "}
        {specialInstructions}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold text-emerald-600 dark:text-emerald-400">Benefits:</span>{" "}
        {benefits}
      </p>

      <Link
        href={`/recycle/${itemName.toLowerCase()}`}
        className="mt-4 block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-3 rounded-lg font-medium shadow-md transition-all"
      >
        Recycle {itemName} Now
      </Link>
    </div>
  );
};

export default Recycle;
