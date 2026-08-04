import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-blue-500">
            IANA Studio
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
            We build premium websites for businesses, startups and personal
            brands with modern design and high performance.
          </p>

           <div className="mt-6 space-y-2 text-gray-400">
    <p>📧 ianastudio@gmail.com</p>
    <p>📱 +91 9876543210</p>
    <p>📍 India</p>
  </div>

        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

  <li>
    <Link to="/" className="hover:text-blue-500 transition">
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
    <Link to="/contact" className="hover:text-blue-500 transition">
      Contact
    </Link>
  </li>

</ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-5 text-2xl">

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noreferrer"
  >
    <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noreferrer"
  >
    <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin className="hover:text-blue-400 cursor-pointer transition" />
  </a>

  <a
    href="https://github.com"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub className="hover:text-white cursor-pointer transition" />
  </a>

</div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
  © 2025 IANA Studio • Crafted with ❤️ using React & Tailwind CSS
</div>
    </footer>
  );
}

export default Footer;