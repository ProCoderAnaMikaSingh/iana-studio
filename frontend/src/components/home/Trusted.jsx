import { motion } from "framer-motion";

function Trusted() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "OpenAI",
    "Netflix",
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-center text-gray-400 mb-10 text-lg">
          Trusted by innovative teams worldwide
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {companies.map((company, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="border border-gray-800 rounded-xl py-6 text-center text-white text-xl font-semibold"
            >
              {company}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Trusted;