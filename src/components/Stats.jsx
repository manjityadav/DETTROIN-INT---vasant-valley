import { GraduationCap, Users, Trophy, BookOpen } from "lucide-react";

const stats = [
  {
    icon: <GraduationCap size={34} />,
    number: "36+",
    text: "Years of Excellence",
  },
  {
    icon: <Users size={34} />,
    number: "2500+",
    text: "Happy Students",
  },
  {
    icon: <BookOpen size={34} />,
    number: "200+",
    text: "Dedicated Faculty",
  },
  {
    icon: <Trophy size={34} />,
    number: "100+",
    text: "Awards Won",
  },
];

export default function Stats() {
  return (
    <section className="relative">
      <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-[90%] max-w-6xl z-30">
        <div className="bg-white rounded-[35px] shadow-2xl p-8">
          <div className="grid grid-cols-4 gap-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 px-5 py-6 rounded-2xl hover:bg-gray-50 transition duration-300 border-r last:border-r-0 border-gray-200"
              >

                <div className="w-16 h-16 rounded-2xl bg-[#981315]/10 flex items-center justify-center text-[#981315] flex-shrink-0">
                  {item.icon}
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-[#981315] leading-none">
                    {item.number}
                  </h2>

                  <p className="text-gray-600 mt-2 leading-6">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      <div className="bg-[#981315] mt-36 py-8">
      </div>
    </section>
  );
}