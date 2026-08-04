import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";

function Reservation() {
  return (
    <section
  id="reservation"
  className="bg-[#f8f4ee] py-28"
>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[40px] bg-white shadow-2xl"
        >

          {/* Left */}

          <div className="relative">

            <img loading="lazy"
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200"
              alt=""
              className="w-full h-full object-cover hover:scale-105 duration-700"
            />

            <div className="absolute inset-0 bg-black/40 flex items-end">

              <div className="p-10 text-white">

               <h2 className="luxury-font text-6xl font-bold leading-tight">
                  Reserve Your
                  <br />
                  Dining Experience
                </h2>

                <p className="mt-5 text-lg">
                  Luxury ambience • Premium food • Memorable moments
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="p-10 lg:p-14">

            <h2 className="text-4xl font-bold text-[#3b2b1f]">
              Book A Table
            </h2>

            <p className="text-gray-600 mt-4 leading-8">
              Fill the form and we'll reserve your seat instantly.
            </p>

            <form
  onSubmit={(e) => {
    e.preventDefault();
    alert("🎉 Your Table Has Been Reserved!");
  }}
  className="space-y-5 mt-10"
>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-[#ddd] rounded-2xl p-5 outline-none focus:ring-2 focus:ring-[#8b5e34] duration-300"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-[#ddd] rounded-2xl p-5 outline-none focus:ring-2 focus:ring-[#8b5e34] duration-300"
              />

              <div className="grid md:grid-cols-3 gap-4">

                <div className="relative">

                  <FaCalendarAlt className="absolute left-4 top-5 text-gray-400" />

                  <input
                    type="date"
                    className="w-full border border-[#ddd] rounded-2xl p-5 pl-11 outline-none focus:ring-2 focus:ring-[#8b5e34] duration-300"
                  />

                </div>

                <div className="relative">

                  <FaClock className="absolute left-4 top-5 text-gray-400" />

                  <input
                    type="time"
                    className="w-full border rounded-xl p-4 pl-11 outline-none"
                  />

                </div>

                <div className="relative">

                  <FaUsers className="absolute left-4 top-5 text-gray-400" />

                  <input
                    type="number"
                    placeholder="Guests"
                    className="w-full border rounded-xl p-4 pl-11 outline-none"
                  />

                </div>

              </div>

              <textarea
                rows="4"
                placeholder="Special Request"
                className="w-full border border-[#ddd] rounded-2xl p-5 outline-none resize-none focus:ring-2 focus:ring-[#8b5e34] duration-300"
              />

              <button
                className="w-full bg-[#8b5e34] hover:bg-[#6f4724] hover:scale-[1.02] text-white py-5 rounded-2xl text-lg font-semibold duration-300 shadow-xl"
              >
                Reserve Now
              </button>

            </form>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Reservation;