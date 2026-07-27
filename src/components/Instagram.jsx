import { useEffect, useState } from "react";

const posts = [
  "/insta1.jpg",
  "/insta2.jpg",
  "/insta3.jpg",
  "/insta4.jpg",
  "/insta5.jpg",
  "/insta6.jpg",
  "/insta7.jpg",
  "/insta8.jpg",
  "/insta9.jpg",
  "/insta10.jpg",
];

export default function InstagramSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % posts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const visiblePosts = [
    posts[index],
    posts[(index + 1) % posts.length],
    posts[(index + 2) % posts.length],
    posts[(index + 3) % posts.length],
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-14">

          <p className="text-red-700 uppercase tracking-[4px] font-semibold">
            Social Media
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Follow Us On Instagram
          </h2>

          <p className="text-gray-500 mt-4">
            Discover student life, events, achievements and memorable moments.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {visiblePosts.map((img, i) => (

            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl shadow-xl h-[380px]"
            >

              <img
                src={img}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="absolute bottom-5 left-5 text-white opacity-0 group-hover:opacity-100 transition">


                <p className="mt-3 font-semibold">
                  @vasantvalleyschool
                </p>

              </div>

            </div>

          ))}

        </div>

        <div className="flex justify-center mt-10 gap-2">

          {posts.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-8 bg-red-700"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}

        </div>

        <div className="text-center mt-12">

          <button className="bg-[#981315] hover:bg-red-800 text-white px-8 py-4 rounded-full flex items-center gap-3 mx-auto transition">


            Follow on Instagram

          </button>

        </div>

      </div>

    </section>
  );
}