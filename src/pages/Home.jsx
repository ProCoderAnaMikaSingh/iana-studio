import Contact from "../components/home/Contact";
import About from "../components/home/About";
import Portfolio from "../components/home/Portfolio";
import Trusted from "../components/home/Trusted";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Pricing from "../components/home/Pricing";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <Portfolio />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;