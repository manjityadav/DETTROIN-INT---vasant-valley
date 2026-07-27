import React from "react";

export default function LearningExperience() {
  const pillars = [
    "Ethical",
    "Social",
    "Physical",
    "Spiritual",
    "Emotional",
    "Environmental",
    "Creative",
    "Cerebral",
  ];

  return (
    <section className="bg-[#F6F1EA] py-24">
  <div className="max-w-7xl mx-auto px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}
      <div>
        <h2 className="text-6xl font-extralight text-[#981315] leading-tight">
          Learning with
          <br />
          <span className="font-light">Understanding</span>
        </h2>

        <p className="mt-8 text-gray-600 text-xl leading-10">
          While high academic achievement is a priority, the school
          aims to create a community of well-rounded individuals,
          who are compassionate and confident. This fosters a spirit
          of cooperation and mutual respect among the students and
          teachers.
        </p>

        <button className="mt-10 flex items-center gap-3 uppercase tracking-widest font-semibold text-sm hover:text-[#981315] transition">
          →
          <span>Learning Experience</span>
        </button>
      </div>

      {/* Right */}
      <div className="flex justify-center">
        <img
          src="/learning.png"
          alt="Learning Experience"
          className="w-[500px] object-contain hover:scale-105 transition duration-500"
        />
      </div>

    </div>

  </div>
</section>
  );
}