import { useState } from "react";
import axios from "axios";

function Contact() {


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

console.log("Submit button clicked");

  try {
    const res = await axios.post(
      "https://iana-studio.onrender.com/api/contact",
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
    alert("Something went wrong!");
    console.log(err);
  }
};
  return (
    <section id="contact" className="bg-black py-24">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Get Your Free Quote
        </h2>

        <p className="text-gray-400 text-center mt-4">
          Tell us about your project and we'll get back to you.
        </p>

        <form
  onSubmit={handleSubmit}
  className="grid md:grid-cols-2 gap-6 mt-14"
>

          <input
  type="text"
  name="name"
  placeholder="Your Name"
  value={formData.name}
  onChange={handleChange}
  className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-white outline-none"
/>

          <input
  type="email"
  name="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={handleChange}
  className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-white outline-none"
/>

          <input
  type="text"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
  className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-white outline-none"
/>

          <input
  type="text"
  name="businessType"
  placeholder="Business Type"
  value={formData.businessType}
  onChange={handleChange}
  className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-white outline-none"
/>

          <textarea
  rows="6"
  name="message"
  placeholder="Tell us about your project..."
  value={formData.message}
  onChange={handleChange}
  className="md:col-span-2 bg-gray-900 border border-gray-700 rounded-xl p-4 text-white outline-none"
/>

          <button
  type="submit"
  className="md:col-span-2 bg-blue-600 hover:bg-blue-700 rounded-xl py-4 text-white font-semibold"
>
  Send Request
</button>

        </form>

      </div>
    </section>
  );
}

export default Contact;