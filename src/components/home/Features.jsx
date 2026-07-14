import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaMobileAlt,
  FaSearch,
  FaTools,
  FaServer,
} from "react-icons/fa";

function Features() {
  const services = [
    {
      icon: <FaLaptopCode size={35} />,
      title: "Business Website",
      desc: "Professional websites for startups, companies and local businesses.",
    },
    {
      icon: <FaShoppingCart size={35} />,
      title: "E-Commerce Store",
      desc: "Online stores with secure payments and product management.",
    },
    {
      icon: <FaMobileAlt size={35} />,
      title: "Responsive Design",
      desc: "Your website will look perfect on mobile, tablet and desktop.",
    },
    {
      icon: <FaSearch size={35} />,
      title: "SEO Optimization",
      desc: "Optimized websites that help your business rank on Google.",
    },
    {
      icon: <FaTools size={35} />,
      title: "Website Maintenance",
      desc: "Regular updates, bug fixes and long-term support.",
    },
    {
      icon: <FaServer size={35} />,
      title: "Custom Web App",
      desc: "Admin panels, dashboards and custom business solutions.",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Our Services
        </h2>

        <p className="text-gray-400 text-center mt-5 max-w-2xl mx-auto">
          We create modern, fast and scalable websites that help businesses
          grow online.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <div className="text-blue-500 mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;