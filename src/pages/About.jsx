import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <div className="h-[450px] rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-8xl shadow-2xl">
            🚀
          </div>
        </div>

        {/* Right Side */}
        <div>

          <span className="text-blue-500 font-semibold uppercase">
            About IANA Studio
          </span>

          <h1 className="text-5xl font-bold mt-5">
            We Build Websites That Help Businesses Grow
          </h1>

          <p className="text-gray-400 mt-6 leading-8">
            IANA Studio is a modern web development agency focused on creating
            beautiful, fast and responsive websites for startups, businesses
            and personal brands. Our goal is to help clients build a strong
            online presence with premium design and clean code.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-500" />
              <span>Modern UI/UX Design</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-500" />
              <span>Responsive Development</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-500" />
              <span>SEO Friendly Websites</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-500" />
              <span>Fast Performance</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default About;