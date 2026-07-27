import { useState } from "react";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Class 12 CBSE Marksheet",
    desc: "CBSE Marksheet of the All India Senior School Certificate Examination for Class XII are available and can be collected from the Senior School Office on any working day between 10:00 a.m to 3:00 p.m from Wednesday, 3rd June, 2026 onwards.",
    image: "/img1.jpeg",
  },
  {
    title: "Vasant Valley Centre for Excellence in Education",
    desc: "We are pleased to introduce the Vasant Valley Centre for Excellence in Education. This initiative is rooted in our school's long-standing commitment to excellence in teaching and learning. Our work at the Centre draws on thirty-six years of experience in nurturing professional learning communities, mitoring eucators, and aligning academic practices with child-centred values that define Vasant Valley School.",
    image: "/img2.jpeg",
  },
  {
    title: "Announcing Vasant Valley School, Gurgaon",
    desc: "We are Very happy to announce that Vasant Valley School, founded and run by Education Today for over 36 years, is expanding. The first of the new Vasant Valley Schools will open in Gurgaon and will be led by a team of experienced educators. The ethos, standards, and commitment to holistic development that define the founding campus will remain at the heart fo every new campus.",
    image: "/img3.jpeg",
  },
];

export default function VisionSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[4px] text-[#981315] font-semibold">
              Our Vision
            </p>

            <h2 className="text-5xl font-bold mt-4 leading-tight">
              {slides[current].title}
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600 transition-all duration-500">
              {slides[current].desc}
            </p>

            <button className="mt-10 bg-[#981315] text-white px-8 py-4 rounded-xl">
              Announcements
            </button>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <img
              src={slides[current].image}
              className="rounded-[30px] h-[500px] w-full object-cover transition-all duration-500"
            />

            <button
              onClick={nextSlide}
              className="absolute bottom-5 right-5 bg-[#981315] hover:bg-red-700 text-white w-16 h-16 rounded-2xl flex justify-center items-center shadow-xl"
            >
              <ChevronRight size={30} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}