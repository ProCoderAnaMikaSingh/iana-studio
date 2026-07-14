function Contact() {
  return (
    <section id="contact" className="bg-black py-24">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Get Your Free Quote
        </h2>

        <p className="text-gray-400 text-center mt-4">
          Tell us about your project and we'll get back to you.
        </p>

        <form className="grid md:grid-cols-2 gap-6 mt-14">

          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-white outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-white outline-none"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-white outline-none"
          />

          <input
            type="text"
            placeholder="Business Type"
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-white outline-none"
          />

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
            className="md:col-span-2 bg-gray-900 border border-gray-700 rounded-xl p-4 text-white outline-none"
          ></textarea>

          <button
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