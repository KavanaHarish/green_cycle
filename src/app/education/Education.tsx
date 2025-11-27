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
      <div className="relative h-99 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black " />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            E-Waste Education Hub
          </h1>
          <p className="text-xl text-white max-w-4xl mx-auto opacity-90">
            Learn how responsible electronics usage and recycling can transform
            our planet for a cleaner, greener future.
          </p>
        </div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="section w-full mx-auto bg-gradient-to-b from-black to-gray-900">

        {/* EDUCATION CARDS (RESEARCH PAPERS) */}
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Research-Based Learning Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-48 w-full">
                <Image
                  src="https://media.istockphoto.com/id/2178674053/photo/ghana-accra-18-24-agbogbloshie-people-live-in-slum-largest-landfill-illegal-dump-in-africa.webp?a=1&b=1&s=612x612&w=0&k=20&c=j_HWPLVnH-H9AFztnPHXPBDzJH4-yCd7W9bMompzkhE="
                  alt="The global E-waste Monitor"
                  width={500}
                  height={300}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-6 w-full">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Environmental Impact of E-Waste
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  A deep look into how toxic e-waste affects ecosystems,
                  wildlife, and long-term soil and water quality.
                </p>
                <a
                  href="https://ewastemonitor.info/the-global-e-waste-monitor-2024/"
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
                  src="https://plus.unsplash.com/premium_photo-1744148531931-51d1a1c45590?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGV3YXN0ZSUyMHJlY3ljbGV8ZW58MHx8MHx8fDA%3D"
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
                  src="data:image/jpeg;base64,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"
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
          <div className="bg-gradient-to-r from-black to-emerald-900 rounded-xl p-8 md:p-12 shadow-lg">
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
