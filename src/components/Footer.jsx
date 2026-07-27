import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#981315] text-white mt-20">

      <div className="max-w-7xl mx-auto px-10 py-16">

        <div className="grid md:grid-cols-5 gap-10">

          <div>
            <h2 className="text-2xl font-bold mb-5">
              Vasant Valley School
            </h2>

            <p className="text-gray-200 leading-7">
              Empowering young minds through excellence in education,
              innovation and values since 1990.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-200">

              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Academics</li>
              <li className="hover:text-white cursor-pointer">Admissions</li>
              <li className="hover:text-white cursor-pointer">Contact</li>

            </ul>
          </div>

          <div>

            <h3 className="font-semibold text-lg mb-5">
              Campus
            </h3>

            <ul className="space-y-3 text-gray-200">

              <li>Vision & Philosophy</li>
              <li>Learning Experience</li>
              <li>Infrastructure</li>
              <li>News & Events</li>
              <li>Student Life</li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold text-lg mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>info@vasantvalley.edu</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>New Delhi, India</span>
              </div>

            </div>

          </div>

        
          <div>

            <h3 className="font-semibold text-lg mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

  <div className="w-11 h-11 rounded-full bg-white/10 transition flex items-center justify-center cursor-pointer group">
    <img
      src="/Face.svg"
      alt="Facebook"
      className="w-5 h-5 group-hover:scale-110 transition"
    />
  </div>

  <div className="w-11 h-11 rounded-full bg-white/10  transition flex items-center justify-center cursor-pointer group">
    <img
      src="/insta-icon.svg"
      alt="Instagram"
      className="w-5 h-5 group-hover:scale-110 transition"
    />
  </div>

  <div className="w-11 h-11 rounded-full bg-white/10  transition flex items-center justify-center cursor-pointer group">
    <img
      src="/in-icon.svg"
      alt="LinkedIn"
      className="w-5 h-5 group-hover:scale-110 transition"
    />
  </div>

  <div className="w-11 h-11 rounded-full bg-white/10  transition flex items-center justify-center cursor-pointer group">
    <img
      src="/youtube-icon.svg"
      alt="YouTube"
      className="w-5 h-5 group-hover:scale-110 transition"
    />
  </div>

</div>

          </div>

        </div>


        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-200">
            © 2026 Vasant Valley School. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <p className="hover:text-white cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-white cursor-pointer">
              Terms of Service
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}