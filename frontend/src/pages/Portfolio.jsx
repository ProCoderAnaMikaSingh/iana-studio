import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Portfolio() {
  
  const [projects, setProjects] = useState([]);

useEffect(() => {
  fetchProjects();
}, []);

const fetchProjects = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/projects");

    console.log(res.data);
    
    setProjects(res.data.projects);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
  <Navbar />

  <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold">
          Our Portfolio
        </h1>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          We build beautiful, fast and responsive websites that help businesses
          grow online.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition"
          >
            {/* Placeholder Image */}
            <div className="h-52 overflow-hidden">
  <img
  src="/restaurant-preview.jpg"
  alt={project.title}
  className="w-full h-full object-cover hover:scale-105 duration-500"
/>
</div>

            <div className="p-6">

              <h2 className="text-2xl font-bold">
                {project.title}
              </h2>

              <p className="text-gray-400 mt-3">
                {project.description || "No description available"}
              </p>

              <p className="text-blue-400 mt-4 text-sm">
                {project.category}
              </p>

              <div className="flex gap-4 mt-6">

    {project.title === "Restaurant Website" ? (
  <Link
    to="/restaurant"
    className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg flex items-center gap-2"
  >
    Live Demo
    <FaArrowRight />
  </Link>
) : (
  <a
    href={project.live_link}
    target="_blank"
    rel="noreferrer"
    className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg flex items-center gap-2"
  >
    Live Demo
    <FaArrowRight />
  </a>
)}        

 
                <a
  href={project.github_link}
  target="_blank"
  rel="noreferrer"
  className="border border-gray-700 hover:border-blue-500 px-5 py-3 rounded-lg flex items-center gap-2"
>
  <FaGithub />
  GitHub
</a>

              </div>

            </div>
          </div>
        ))}

      </section>

      {/* CTA */}
      <section className="text-center pb-20">
        <h2 className="text-4xl font-bold">
          Need a Website Like This?
        </h2>

        <p className="text-gray-400 mt-4">
          Let's build your next project together.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
        >
          Contact Us
        </Link>
            </section>

    </div>

    <Footer />
  </>
);
}

export default Portfolio;