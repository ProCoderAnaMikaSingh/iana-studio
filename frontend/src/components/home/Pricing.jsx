import { motion } from "framer-motion";

function Pricing() {
  const steps = [
    {
      number: "01",
      title: "Share Your Requirement",
      desc: "Tell us about your business and the website you need.",
    },
    {
      number: "02",
      title: "Design & Planning",
      desc: "We create a modern design and project roadmap for approval.",
    },
    {
      number: "03",
      title: "Development",
      desc: "Our team develops a fast, responsive and SEO-friendly website.",
    },
    {
      number: "04",
      title: "Launch & Support",
      desc: "After testing, we launch your website and provide ongoing support.",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          How We Work
        </h2>

        <p className="text-center text-gray-400 mt-5">
          A simple and transparent process to build your dream website.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{
  y: -8,
  scale: 1.03,
}}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl font-bold text-blue-500">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold text-white mt-6">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {step.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;