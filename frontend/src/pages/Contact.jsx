import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submit button clicked");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        business: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-black text-white py-20 px-6"
    >
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold text-center">
          Contact Us
        </h1>

        <p className="text-gray-400 text-center mt-4">
          Tell us about your project and we'll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            name="business"
            placeholder="Business / Company"
            value={formData.business}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-xl font-bold"
          >
            Send Project Request
          </button>

        </form>

      </div>
    </div>
  );
}

export default Contact;