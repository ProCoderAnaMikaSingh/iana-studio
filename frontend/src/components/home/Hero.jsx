import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-[90vh] flex items-center py-16">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>

      <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex flex-wrap items-center bg-blue-500/20 border border-blue-500 text-blue-400 px-4 py-2 rounded-full text-sm">
  🚀 Premium Web Development Agency
</span>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight">
            We Build
            <span className="text-blue-500"> Premium </span>
            Websites
            <br />
            That Grow Your Business
          </h1>

          <p className="text-gray-400 mt-8 text-lg leading-8 max-w-xl">
            IANA Studio creates modern, responsive and high-performance websites
            for startups, businesses and personal brands. We transform ideas
            into beautiful digital experiences.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
  href="#contact"
  className="bg-blue-600 hover:bg-blue-700 transition px-7 py-4 rounded-xl flex items-center gap-3 font-semibold"
>
  Get Free Quote
  <FaArrowRight />
</a>

            <Link
  to="/portfolio"
  className="border border-gray-700 hover:border-blue-500 hover:bg-gray-900 transition px-7 py-4 rounded-xl font-semibold"
>
  View Portfolio
</Link>

          </div>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>

            <div className="relative w-[420px] h-[420px] rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 shadow-2xl flex items-center justify-center border border-white/10">

              <div className="text-center">

                <div className="text-8xl mb-5">
                  💻
                </div>

                <h2 className="text-3xl font-bold">
                  IANA Studio
                </h2>

                <p className="text-gray-200 mt-3">
                  Modern Websites
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;