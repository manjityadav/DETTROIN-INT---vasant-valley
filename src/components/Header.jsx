import React from 'react'
import { LogIn, ChevronDown } from "lucide-react"

function Header() {

  const navLinks = [
    {
      name: "Home",
      active: true,
    },
    {
      name: "About Us",
      dropdown: true,
    },
    {
      name: "Academics",
      dropdown: true,
    },
    {
      name: "Experience",
      dropdown: true,
    },
    {
      name: "Admissions",
    },
    {
      name: "News & Events",
    },
    {
      name: "Contact Us",
    },
  ];

  return (
    <header  className="fixed top-5 left-0 w-full z-50 px-8">
      <div className="max-w-9xl mx-auto bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-100">
    <div className='flex justify-between items-center gap-5 px-10 py-2'>
      <div className='flex gap-4'>
        <img className='h-12' src="/logo.png" alt="" />
        <h3 className='font-bold'>VASANT VALLEY <br /> <span className='text-[#981315]'>SCHOOL</span> </h3>
      </div>


      <nav className="hidden lg:flex items-center gap-9">

        {navLinks.map((item) => (
          <div
            key={item.name}
            className={`relative flex items-center gap-1 cursor-pointer font-medium transition-all duration-300 hover:text-[#981315]
                ${item.active
                ? "text-[#981315]"
                : "text-gray-700"
              }`}
          >
            {item.name}

            {item.dropdown && (
              <ChevronDown
                size={16}
                className="mt-[2px]"
              />
            )}

            {item.active && (
              <span className="absolute -bottom-2 left-0 w-full h-[3px] rounded-full bg-[#981315]"></span>
            )}
          </div>
        ))}

      </nav>

       <button
            className="
            flex
            items-center
            gap-2
            bg-[#981315]
            text-white
            px-6
            py-3
            rounded-full
            shadow-lg
            transition-all
            duration-300
            hover:bg-red-700
            hover:scale-105
            active:scale-95
            "
          >
            <LogIn size={18} />

            LOG IN
          </button>
    </div>
    </div>
    </header>
  )
}

export default Header
