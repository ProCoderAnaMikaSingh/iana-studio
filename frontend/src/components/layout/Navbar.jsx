import { useState } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
  <FaCode className="text-blue-500 text-2xl" />
  <h1 className="text-2xl font-bold text-white hover:text-blue-500 transition">
    IANA Studio
  </h1>
</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li><Link to="/" className="hover:text-blue-500 transition">
                  Home
                </Link>
            </li>

          <li>
               <Link to="/services" className="hover:text-blue-500 transition">
                  Services
              </Link>
          </li>

          <li>
                 <Link to="/portfolio" className="hover:text-blue-500 transition">
                    Portfolio
                   </Link>
          </li>

          <li>
                 <Link to="/about" className="hover:text-blue-500 transition">
                   About
                 </Link>
          </li>

          <li>
                <Link to="/contact" className="hover:text-blue-500 transition">
                  Contact
                </Link>
          </li>

        </ul>

        {/* Desktop Button */}
       <Link
  to="/contact"
  className="hidden md:block bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg text-white font-semibold"
>
  Get Quote
</Link>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6">
          <ul className="flex flex-col gap-5 text-gray-300 font-medium">

  <li>
    <Link to="/">Home</Link>
  </li>

  <li>
    <Link to="/services">Services</Link>
  </li>

  <li>
    <Link to="/portfolio">Portfolio</Link>
  </li>

  <li>
    <Link to="/about">About</Link>
  </li>

  <li>
    <Link to="/contact">Contact</Link>
  </li>

</ul>

          <Link
  to="/contact"
  className="block mt-6 w-full text-center bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white font-semibold"
>
  Get Quote
</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;