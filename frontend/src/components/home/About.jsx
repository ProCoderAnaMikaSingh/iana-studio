import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  const points = [
    "Modern & Premium UI Design",
    "100% Responsive on All Devices",
    "Fast Performance & SEO Friendly",
    "Clean, Scalable & Secure Code",
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="h-[420px] rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-8xl shadow-2xl">
            👩‍💻
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white">
            About <span className="text-blue-500">IANA Studio</span>
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Hi! I'm <span className="text-white font-semibold">Anamika Singh</span>,
            founder of <span className="text-blue-500">IANA Studio</span>.
            We help businesses build beautiful, fast and professional websites
            that create a strong online presence and generate more customers.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-500" />
                <span className="text-gray-300">{point}</span>
              </div>
            ))}
          </div>

          <button className="mt-10 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white font-semibold">
            Learn More
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default About;