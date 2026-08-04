import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="bg-[#faf6ef] py-28">

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          <img loading="lazy"
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900"
            alt="Restaurant"
            className="rounded-[40px] shadow-2xl w-full h-[420px] md:h-[520px] lg:h-[650px] object-cover"
          />

          <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-2xl border border-[#eee] p-8">

            <h2 className="text-5xl font-bold text-[#8b5e34]">
              15+
            </h2>

            <p className="text-gray-500 mt-2">
              Years Experience
            </p>

          </div>

        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="uppercase tracking-[5px] text-[#8b5e34] font-semibold">
            Our Story
          </span>

          <h2 className="luxury-font text-7xl font-bold text-[#3b2b1f] mt-5 leading-tight">
            Crafted With
            <br />
            Passion &
            <br />
            Perfection
          </h2>

          <p className="text-gray-600 text-lg leading-9 mt-8">
            Every dish is prepared using fresh ingredients, authentic recipes
            and years of culinary expertise. We believe dining is not just
            about food — it's about creating unforgettable memories.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2">

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <h3 className="text-4xl font-bold text-[#8b5e34]">
                5000+
              </h3>

              <p className="text-gray-500 mt-3">
                Happy Guests
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <h3 className="text-4xl font-bold text-[#8b5e34]">
                120+
              </h3>

              <p className="text-gray-500 mt-3">
                Premium Dishes
              </p>

            </div>

          </div>

          <button className="mt-12 bg-[#8b5e34] hover:bg-[#6f4724] hover:scale-105 duration-300 text-white px-10 py-4 rounded-full font-semibold shadow-xl">
            Discover More
          </button>

        </motion.div>

      </div>

    </section>
  );
}

export default About;