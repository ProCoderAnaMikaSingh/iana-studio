import { FaUtensils } from "react-icons/fa";

function Navbar() {

  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-[#8b5e34] text-white flex items-center justify-center">
            <FaUtensils />
          </div>

          <div>

            <h1 className="text-2xl font-bold text-[#3b2b1f]">
              TasteHub
            </h1>

            <p className="text-[11px] tracking-[7px] text-[#8b5e34] uppercase font-medium">
  Luxury Restaurant
</p>

          </div>

        </div>

        {/* Menu */}

        <ul className="hidden md:flex items-center gap-10 text-[#3b2b1f] font-semibold">

          <li>
  <a href="#home">Home</a>
</li>

          <li>
  <a href="#about">About</a>
</li>

         <li>
  <a href="#menu">Menu</a>
</li>

         <li>
 <a href="#gallery">Gallery</a>
</li>

          <li>
  <a href="#contact">Contact</a>
</li>

        </ul>

        {/* Button */}

        <button className="hidden md:block bg-[#8b5e34] hover:bg-[#6f4724] text-white px-6 py-3 rounded-full duration-300 hover:scale-105">
  Reserve Table
</button>

      </div>

    </nav>
  );
}

export default Navbar;