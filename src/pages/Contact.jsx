import { useState } from "react";
import axios from "axios";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const [errors, setErrors] = useState({});

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

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (formData.message.trim().length < 15) {
      newErrors.message =
        "Project description must be at least 15 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess("");
      return;
    }

    setErrors({});
    setSuccess("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://iana-studio.onrender.com/api/contact",
        formData
      );

      setSuccess(res.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        message: "",
      });

    } catch (err) {
      console.error(err);
      setSuccess("");
      alert("Something went wrong.");
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

        {success && (
          <div className="mt-8 rounded-xl border border-green-500 bg-green-900/30 p-4 text-green-300 text-center">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">

          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-2">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-2">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="businessType"
              placeholder="Business Type"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <textarea
              rows="6"
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
            />

            {errors.message && (
              <p className="text-red-500 text-sm mt-2">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Project Request"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default Contact;