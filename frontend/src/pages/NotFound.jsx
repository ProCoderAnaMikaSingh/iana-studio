import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function NotFound() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

        <h1 className="text-8xl font-bold text-blue-500">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-6">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-4 text-center max-w-lg">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
        >
          Back To Home
        </Link>

      </div>

      <Footer />
    </>
  );
}

export default NotFound;