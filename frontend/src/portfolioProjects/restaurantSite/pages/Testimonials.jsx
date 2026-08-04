import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "Best restaurant in the city. Food quality and ambience are outstanding.",
  },
  {
    name: "Priya Singh",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "Loved every dish. The service was quick and very professional.",
  },
  {
    name: "Aman Verma",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    review: "A perfect place for family dinner. Highly recommended.",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#faf6ef] py-28">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="luxury-font text-6xl text-center text-[#3b2b1f]">
          What Our Guests Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[35px] shadow-xl p-10 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >

              <img
                src={item.image}
                className="w-20 h-20 rounded-full object-cover border-4 border-[#d9b382]"
                alt=""
              />

              <h3 className="text-2xl font-bold mt-5 text-[#3b2b1f]">
                {item.name}
              </h3>

              <p className="text-yellow-500 mt-2">
                ★★★★★
              </p>

              <p className="text-gray-600 leading-8 mt-6 italic">
                {item.review}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;