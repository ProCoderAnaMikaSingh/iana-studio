import { FaLaptopCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";


function Services() {
 const services = [
  {
    icon: <FaLaptopCode size={40} />,
    title: "Business Website",
    desc: "Professional websites for startups, local businesses and companies.",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "Responsive Website",
    desc: "Perfect experience across mobile, tablet and desktop devices.",
  },
  {
    icon: <FaRocket size={40} />,
    title: "Startup Website",
    desc: "Launch your startup with a modern premium website.",
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: "Portfolio Website",
    desc: "Beautiful personal portfolio websites for freelancers and creators.",
  },
  {
    icon: <FaRocket size={40} />,
    title: "Landing Page",
    desc: "High-converting landing pages for marketing campaigns.",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "Website Maintenance",
    desc: "Bug fixing, updates and long-term website support.",
  },
];

  return (
  <>
    <Navbar />

    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center">
          Our Services
        </h1>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          We help startups and businesses build premium websites that
          attract customers and grow online.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <div className="text-blue-500">
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold mt-6">
                {service.title}
              </h2>

              <p className="text-gray-400 mt-4">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

            </div>
    </div>

    <Footer />
  </>
);
}

export default Services;