import { FaLaptopCode, FaMobileAlt, FaRocket } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode size={40} />,
      title: "Website Development",
      desc: "Modern, responsive and fast websites for your business.",
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "Responsive Design",
      desc: "Perfect experience on mobile, tablet and desktop.",
    },
    {
      icon: <FaRocket size={40} />,
      title: "Startup Launch",
      desc: "Complete website setup to launch your startup online.",
    },
  ];

  return (
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
  );
}

export default Services;