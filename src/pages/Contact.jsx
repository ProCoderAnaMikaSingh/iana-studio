function Contact() {
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

        <form className="mt-12 space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Business / Company"
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
          />

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
          ></textarea>

          <button
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