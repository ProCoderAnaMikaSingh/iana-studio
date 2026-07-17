import { motion } from "framer-motion";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      company: "Restaurant Owner",
      review:
        "IANA Studio delivered an amazing website for my restaurant. The design is modern and my customers love it.",
    },
    {
      name: "Priya Verma",
      company: "Boutique Owner",
      review:
        "Professional work, fast delivery and great communication. Highly recommended!",
    },
    {
      name: "Amit Patel",
      company: "Startup Founder",
      review:
        "They understood our vision perfectly and built a premium website that helped us attract new clients.",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          What Our Clients Say
        </h2>

        <p className="text-gray-400 text-center mt-4">
          Trusted by businesses and startups across India.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <div className="text-yellow-400 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300 leading-7">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="text-white font-bold">
                  {item.name}
                </h3>

                <p className="text-blue-400 text-sm">
                  {item.company}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;