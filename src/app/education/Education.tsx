"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Head from "next/head";

const Education: React.FC = () => {
  return (
    <>
      <Head>
        <title>GreenCycle - E-Waste Education & Resources</title>
        <meta
          name="description"
          content="Explore our educational resources on e-waste, environmental impact, and sustainable electronics practices."
        />
      </Head>

      {/* HERO SECTION */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            E-Waste Education Hub
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto opacity-90">
            Learn how responsible electronics usage and recycling can transform
            our planet for a cleaner, greener future.
          </p>
        </div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="section container mx-auto bg-gray-50 py-16 px-4 md:px-8">

        {/* EDUCATION CARDS (RESEARCH PAPERS) */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Research-Based Learning Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1581092334560-0285bba16b8b"
                  alt="E-waste impact"
                  width={500}
                  height={300}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Environmental Impact of E-Waste
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  A deep look into how toxic e-waste affects ecosystems,
                  wildlife, and long-term soil and water quality.
                </p>
                <a
                  href="https://microjournal.researchfloor.org/impact-of-e-waste-on-human-health-and-environment/"
                  target="_blank"
                  className="text-emerald-600 hover:text-emerald-800 font-semibold"
                >
                  Read Research Paper →
                </a>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1581092332087-7d69cdd40cf2"
                  alt="Recycling process"
                  width={500}
                  height={300}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Scientific Recycling Processes
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn the modern technologies used to safely extract valuable
                  metals from electronic waste.
                </p>
                <a
                  href="https://www.researchgate.net/publication/325280736_E-Waste_Recycling_Technology"
                  target="_blank"
                  className="text-emerald-600 hover:text-emerald-800 font-semibold"
                >
                  Read Research Paper →
                </a>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
                  alt="Human health impact"
                  width={500}
                  height={300}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Human Health Risks from E-Waste
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Explore how improper disposal of electronics leads to toxic
                  exposure affecting workers and nearby communities.
                </p>
                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4084819/"
                  target="_blank"
                  className="text-emerald-600 hover:text-emerald-800 font-semibold"
                >
                  Read Research Paper →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* E-WASTE FACTS */}
        <div className="mt-24 bg-emerald-50 rounded-lg p-8 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">
              E-Waste Facts You Should Know
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the impact of electronic waste is the first step
              toward making better choices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* fact cards remain unchanged */}
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-3">
                  Ready to Take Action?
                </h2>
                <p className="text-emerald-50 text-lg">
                  Find certified e-waste recycling facilities near you and
                  ensure your electronics are handled responsibly.
                </p>
              </div>

              <Link
                href="/e-facilities"
                className="inline-block bg-white text-emerald-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 shadow-md transition-all hover:-translate-y-1"
              >
                Find Recycling Centers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
