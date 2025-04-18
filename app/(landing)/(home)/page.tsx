import AboutSection from "./sections/about-section";
import Footer from "./sections/footer";
import HeroSection from "./sections/hero";
import Navbar from "./sections/navbar";

export default function Home() {
  return (
    <div className="">
      {/* <h1 className="bg-azulAstro underline">3d portfolio</h1> */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
