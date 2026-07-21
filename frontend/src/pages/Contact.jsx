import { useState } from "react";
import axios from "axios";

function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
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

    if (formData.name.trim().length < 3) {
      alert("Name must be at least 3 characters.");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    if (formData.phone.trim().length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (formData.message.trim().length < 15) {
      alert("Message must be at least 15 characters.");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        message: "",
      });

    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
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
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 text-white"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 text-white"
          />

          <input
            type="text"
            name="businessType"
            placeholder="Business Type"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 text-white"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-bold disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Project Request"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default Contact;