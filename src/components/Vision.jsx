import React from "react";
import { ArrowRight } from "lucide-react";

export default function Vision() {
  return (
    <section className="bg-[#faf7f2] py-24">

      <div className="max-w-7xl mx-auto px-8">


        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#981315] font-semibold">
            Our Vision
          </p>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Excellence in
            <span className="text-[#981315]"> Deed</span>
          </h2>

          <div className="w-28 h-1 bg-[#981315] rounded-full mx-auto mt-6"></div>
        </div>


        <div className="grid lg:grid-cols-2 gap-16 items-center bg-white rounded-[40px] shadow-xl overflow-hidden">


          <div className="p-12">

            <h3 className="text-4xl font-bold mb-8 text-[#981315] leading-tight">
              Excellence in Deed
            </h3>

            <p className="text-gray-600 leading-9 text-lg">
              The School's motto sets the standard for Vasant Valley School.
              Individualized attention for each student, a process-focused
              learning framework, equity of all stakeholders and commitment to
              society are the pillars of the School's philosophy.
            </p>

            <p className="text-gray-600 leading-9 text-lg mt-6">
              We believe education should be enjoyable, inspiring and
              interactive, helping every learner discover their true potential
              while developing compassion, confidence and responsibility.
            </p>

            <button className="mt-10 flex items-center gap-3 bg-[#981315] text-white px-7 py-4 rounded-full hover:bg-red-800 duration-300">
              Explore Vision
              <ArrowRight size={20} />
            </button>

          </div>


          <div className="relative h-full">

            <img
              src="/vision.png"
              alt=""
              className="w-full h-[620px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          </div>

        </div>

      </div>

    </section>
  );
}