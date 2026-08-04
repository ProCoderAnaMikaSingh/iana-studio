import { FaAward, FaLeaf, FaClock, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaAward />,
    title: "Award Winning",
    desc: "Recognized for premium dining experience.",
  },
  {
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
    desc: "100% fresh vegetables and premium spices.",
  },
  {
    icon: <FaClock />,
    title: "Quick Service",
    desc: "Fresh food served without long waiting.",
  },
  {
    icon: <FaHeart />,
    title: "Made With Love",
    desc: "Every dish prepared with care and passion.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-[#faf6ef] py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="luxury-font text-6xl text-center text-[#3b2b1f]">
          Why People Love Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[35px] shadow-xl p-10 text-center hover:-translate-y-3 hover:shadow-2xl duration-500 border border-transparent hover:border-[#d8b17b]"
            >

              <div className="text-6xl text-[#8b5e34] flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold mt-6 text-[#3b2b1f]">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-5 leading-8">
                {item.desc}
              </p>

              <button className="mt-7 text-[#8b5e34] font-semibold hover:translate-x-2 duration-300">
  Learn More →
</button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;