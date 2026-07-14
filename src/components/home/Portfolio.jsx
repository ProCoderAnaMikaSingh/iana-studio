import { motion } from "framer-motion";

function Portfolio() {
  const projects = [
    {
      title: "Restaurant Website",
      category: "Business Website",
    },
    {
      title: "Fashion Store",
      category: "E-Commerce",
    },
    {
      title: "Gym Landing Page",
      category: "Landing Page",
    },
    {
      title: "School Website",
      category: "Education",
    },
    {
      title: "Doctor Appointment",
      category: "Healthcare",
    },
    {
      title: "Real Estate",
      category: "Property",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Our Portfolio
        </h2>

        <p className="text-gray-400 text-center mt-5 max-w-2xl mx-auto">
          Explore some example projects that showcase the quality and style of
          websites we build.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition"
            >
              <div className="h-52 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-6xl">
                💻
              </div>

              <div className="p-6">

  <h3 className="text-white text-2xl font-bold">
    {project.title}
  </h3>

  <p className="text-blue-400 mt-2">
    {project.category}
  </p>

  <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl text-white font-semibold">
    View Project
  </button>

</div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Portfolio;