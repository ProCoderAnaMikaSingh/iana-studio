import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#2c1d14] text-white mt-0">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-4 gap-12">

        {/* Logo */}

        <div>

          <h2 className="luxury-font text-5xl font-bold text-[#d9b382]">
            TasteHub
          </h2>

          <p className="mt-5 text-gray-300 leading-9 text-lg">
            Experience luxury dining with handcrafted dishes,
            elegant ambience and unforgettable flavours.
          </p>

          <div className="flex gap-4 mt-8">

            <div className="w-12 h-12 rounded-full bg-[#8b5e34] flex items-center justify-center hover:scale-110 hover:rotate-12 hover:bg-[#d9b382] hover:text-[#2c1d14] transition-all duration-500 cursor-pointer shadow-lg">
              <FaFacebookF />
            </div>

            <div className="w-12 h-12 rounded-full bg-[#8b5e34] flex items-center justify-center hover:scale-110 hover:rotate-12 hover:bg-[#d9b382] hover:text-[#2c1d14] transition-all duration-500 cursor-pointer shadow-lg">
              <FaInstagram />
            </div>

            <div className="w-12 h-12 rounded-full bg-[#8b5e34] flex items-center justify-center hover:scale-110 hover:rotate-12 hover:bg-[#d9b382] hover:text-[#2c1d14] transition-all duration-500 cursor-pointer shadow-lg">
              <FaYoutube />
            </div>

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-3xl font-bold mb-6 text-[#d9b382]">
            Quick Links
          </h3>

          <ul className="space-y-5 text-gray-300">

            <li className="hover:text-[#d9b382] hover:translate-x-2 duration-300 cursor-pointer">Home</li>

            <li className="hover:text-[#d9b382] hover:translate-x-2 duration-300 cursor-pointer">About</li>

            <li className="hover:text-[#d9b382] hover:translate-x-2 duration-300 cursor-pointer">Menu</li>

            <li className="hover:text-[#d9b382] hover:translate-x-2 duration-300 cursor-pointer">Gallery</li>

            <li className="hover:text-[#d9b382] hover:translate-x-2 duration-300 cursor-pointer">Reservation</li>

          </ul>

        </div>

        {/* Opening Hours */}

        <div>

          <h3 className="text-3xl font-bold mb-6 text-[#d9b382]">
            Opening Hours
          </h3>

          <p className="text-gray-300">
            Monday - Friday
          </p>

          <p className="mb-5">
            10:00 AM - 10:30 PM
          </p>

          <p className="text-gray-300">
            Saturday - Sunday
          </p>

          <p>
            09:00 AM - 11:30 PM
          </p>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-3xl font-bold mb-6 text-[#d9b382]">
            Contact
          </h3>

          <div className="space-y-5">

            <div className="flex gap-4 items-center hover:text-[#d9b382] duration-300 cursor-pointer">

              <FaPhoneAlt className="text-[#d9b382]" />

              <span>+91 9876543210</span>

            </div>

            <div className="flex gap-4 items-center hover:text-[#d9b382] duration-300 cursor-pointer">

              <FaEnvelope className="text-[#d9b382]" />

              <span>tastehub@gmail.com</span>

            </div>

            <div className="flex gap-4 items-start hover:text-[#d9b382] duration-300 cursor-pointer">

              <FaMapMarkerAlt className="text-[#d9b382] mt-1" />

              <span>
                Civil Lines,
                <br />
                Prayagraj, Uttar Pradesh
              </span>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-[#4a3425] py-8 text-center text-gray-500 text-sm tracking-[3px]">

        © 2026 TasteHub Restaurant • Crafted with ❤️ in India

      </div>

    </footer>
  );
}

export default Footer;