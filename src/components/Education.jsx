import React from "react";
import { ArrowRight } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="bg-[#f8f6f2] py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-[40px] shadow-xl">
            <img
              src="/education.png"
              alt="Education"
              className="w-full h-[520px] object-cover hover:scale-105 duration-500"
            />
          </div>

          {/* Content */}
          <div>

            <h2 className="text-5xl font-light leading-tight text-[#981315]">
              Education is
              <br />
              <span className="font-semibold">
                Preparation for Life
              </span>
            </h2>

            <div className="w-20 h-1 bg-[#981315] rounded-full my-8"></div>

            <p className="text-gray-600 leading-9 text-lg">
              The school day comprises academic and
              non-academic learning experiences and is
              planned with special focus on the developmental
              needs of our students.
            </p>

            <p className="text-gray-600 leading-9 text-lg mt-6">
              The entire campus serves as a living classroom,
              encouraging curiosity, creativity, collaboration
              and continuous learning throughout every day.
            </p>

            <button className="mt-10 flex items-center gap-3 font-semibold text-[#981315] hover:gap-5 duration-300">
              A DAY IN SCHOOL
              <ArrowRight size={20}/>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}