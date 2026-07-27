import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Events() {

    const events = [
        {
            image: "/im1.jpeg",
            title: "Synapse 2026",
            date: "22 July 2026 - 23 July 2026",
        },
        {
            image: "/im2.jpeg",
            title: "The 23rd Edition of Laissez Faire",
            date: "17 July 2026",
        },
        {
            image: "/im3.jpeg",
            title: "Inter-School Tennis Zonal Tournament 2026",
            date: "13 July 2026 - 15 July 2026",
        },
        {
            image: "/im4.jpeg",
            title: "Delhi State Open Summer Athletcis Championships",
            date: "2 June 2026 - 5 June 2026",
        },
        {
            image: "/im5.jpeg",
            title: "33rd Junior Squash Championship 2026",
            date: "24 May 2026",
        },
        {
            image: "/im6.jpg",
            title: "CBSE Class XII 2026 - Result at a Glance",
            date: "13 May 2026",
        },
         {
            image: "/im6.jpg",
            title: "CBSE Class X Results - 2026",
            date: "15 April 2026",
        }
    ];

    const [startIndex, setStartIndex] = useState(0);

    const nextSlide = () => {
        if (startIndex < events.length - 3) {
            setStartIndex(startIndex + 1);
        } else {
            setStartIndex(0);
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        } else {
            setStartIndex(events.length - 3);
        }
    };


    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <p className="uppercase tracking-[6px] text-[#981315] font-semibold">
                        NEWS & EVENTS
                    </p>

                    <h2 className="text-5xl font-bold mt-4 text-gray-900">
                        A Timeline of
                        <span className="block text-[#981315]">
                            Recent Events
                        </span>
                    </h2>

                    <p className="mt-6 text-gray-500 max-w-3xl mx-auto leading-relaxed">
                        Student Achievements, competitions, academic excellence and
                        memorable moments that define life at Vasant Valley School.
                    </p>

                </div>


                <div className="flex justify-end gap-4 mb-8">

                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border hover:bg-[#981315] hover:text-white transition">
                        <ChevronLeft />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="w-12 h-12  rounded-full border hover:bg-[#981315] hover:text-white transition">
                        <ChevronRight />
                    </button>

                </div>


                <div className="grid grid-cols-3 gap-8">

                    {events.slice(startIndex, startIndex + 3).map((event, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                        >

                            <img
                                src={event.image}
                                className="w-full h-72 object-cover"
                            />

                            <div className="p-6">

                                <h3 className="font-bold text-xl">
                                    {event.title}
                                </h3>

                                <p className="text-gray-500 mt-2">
                                    {event.date}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>


                <div className="flex justify-center gap-2 mt-10">

                    {Array(events.length - 2)
                        .fill()
                        .map((_, index) => (

                            <div
                                key={index}
                                className={`h-2 rounded-full transition-all ${startIndex === index
                                        ? "w-8 bg-[#981315]"
                                        : "w-2 bg-gray-300"
                                    }`}
                            />

                        ))}

                </div>

            </div>

        </section>
    )
}
