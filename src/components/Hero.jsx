import { GraduationCap, Target } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-[720px] overflow-hidden">
      <img
        src="/images.jpeg"
        className="absolute inset-0 w-full h-full object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r
      from-[#7f1012]/90
      via-[#981315]/5
        to-transparent" />
      <div className="relative z-20 max-w-7xl mx-auto
          h-full flex justify-between items-center">

        <div className="text-white">
          <p className="bg-[#981315] inline-flex px-4 py-2 rounded-full gap-2 mb-3"><GraduationCap />ESTD.1990</p>
          <h2 className="font-bold text-4xl mb-3">Vasant Valley School</h2>
          <p className="w-[500px] text-white text-2xl leading-relaxed">encourages students to push the boundaries of current understanding and set benchmarks in the field of education.</p>

        </div>

        <div className="w-[300px] bg-white/70 mt-80 ml-10 rounded-[32px] shadow-2xl p-8 border border-gray-100">


          <h2 className="text-3xl font-bold text-[#981315] mb-5">
            Our Objective
          </h2>

          <p className="text-gray-600 leading-6 text-lg">
            Our objective is to inculcate in our students ethical values, nurture
            original thinking and develop a sense of national identity as well as
            global citizenship.
          </p>

          <button className="mt-8 border border-[#981315] text-[#981315] px-6 py-3 rounded-full hover:bg-[#981315] hover:text-white transition duration-300">
            Learn More →
          </button>

        </div>
      </div>
    </section>
  );
}