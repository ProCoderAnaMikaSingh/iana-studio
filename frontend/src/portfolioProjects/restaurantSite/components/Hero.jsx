import { motion } from "framer-motion";

function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen bg-[#faf6ef] overflow-hidden pt-32"
>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>

      <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="uppercase tracking-[6px] text-[#9b6b32] font-semibold">
            Fine Dining Restaurant
          </span>

          <h1 className="luxury-font text-5xl md:text-6xl lg:text-8xl text-[#3b2b1f] leading-none">
            Luxury Dining
            <br />
            Experience
            
          </h1>

          <p className="text-gray-600 text-lg leading-8 mt-8 max-w-xl">
            Discover handcrafted dishes prepared with premium ingredients,
            unforgettable flavours and a luxurious dining experience.
          </p>

          <div className="flex gap-5 mt-10">

            <a
  href="#reservation"
  className="bg-[#8b5e34] hover:bg-[#6f4724] text-white px-8 py-4 rounded-full font-semibold duration-300 inline-block"
>
  Reserve Table
</a>

           <a
  href="#menu"
  className="border-2 border-[#8b5e34] text-[#8b5e34] hover:bg-[#8b5e34] hover:text-white px-8 py-4 rounded-full font-semibold duration-300 inline-block"
>
  Explore Menu
</a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#d9b382] blur-3xl opacity-20"></div>

          <div className="relative w-full max-w-[600px] h-[420px] md:h-[520px] lg:h-[650px] rounded-[45px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.25)]">

            <img loading="lazy"
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900"
              alt="Restaurant"
              className="w-full h-full object-cover hover:scale-110 hover:brightness-110 duration-700"
              
            />

          </div>

          <div className="absolute -bottom-8 -left-8 bg-white shadow-2xl rounded-3xl px-8 py-6 border border-[#eee]">

            <h3 className="text-3xl font-bold text-[#8b5e34]">
              15+
            </h3>

            <p className="text-gray-500 text-sm uppercase tracking-[3px]">
  Years of Excellence
</p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;