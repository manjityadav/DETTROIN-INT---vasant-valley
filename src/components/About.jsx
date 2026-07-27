import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[#faf8f5] py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[4px] text-[#981315] font-semibold">
          About Us
        </p>

        <div className="w-24 h-1 bg-[#981315] mx-auto rounded-full mt-6"></div>

        <p className="mt-10 text-lg text-gray-600 leading-9">
          Vasant Valley School was established in 1990 by
          Mr. Aroon Purie and Mrs. Rekha Purie as an initiative
          of the Education Today Trust.
        </p>

        <p className="mt-6 text-lg text-gray-600 leading-9">
          The school began its journey with around 200 students
          and 16 teachers in July 1990. It is a self-financing
          inclusive day school spread over eight acres of land
          in Vasant Kunj, New Delhi, India.
        </p>

        {/* Button */}
        <button className="mt-10 inline-flex items-center gap-2 text-[#981315] font-semibold hover:gap-4 transition-all">
          Learn More
          <ArrowRight size={18} />
        </button>

      </div>
    </section>
  );
}