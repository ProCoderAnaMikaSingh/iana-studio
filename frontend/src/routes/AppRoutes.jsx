
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "../pages/NotFound";

import ScrollToTop from "../ScrollToTop";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AdminDashboard from "../pages/AdminDashboard";
import RestaurantApp from "../portfolioProjects/restaurantSite/pages/App";



function AppRoutes() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        {/* Website */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Optional */}
        <Route path="/signup" element={<Signup />} />

        <Route path="/restaurant" element={<RestaurantApp />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;