import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./About";
import Menu from "./Menu";
import WhyChoose from "./WhyChoose";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Reservation from "./Reservation";
import Footer from "./Footer";
import BackToTop from "../components/BackToTop";

function Home() {
  return (
    <>
     <Navbar />
<Hero />
<About />
<WhyChoose />
<Menu />
<Gallery />
<Testimonials />
<Reservation />

<div className="h-24 bg-[#f8f4ee]"></div>

<Footer />
<BackToTop />

    </>
  );
}

export default Home;