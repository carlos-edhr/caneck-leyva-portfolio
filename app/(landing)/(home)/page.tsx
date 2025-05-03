import AboutSection from "./sections/about-section";
import { ArtistSection } from "./sections/artist-section";
import Footer from "./sections/footer";
import GallerySection from "./sections/gallery-section";
import HeroSection from "./sections/hero";
import Navbar from "./sections/navbar";
import EducationSection from "./sections/education-section";
import LogosCollaboration from "./sections/logos-collaboration";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <div className="">
      {/* <h1 className="bg-azulAstro underline">3d portfolio</h1> */}
      <Navbar />
      <HeroSection />

      <AboutSection />
      <LogosCollaboration />
      <GallerySection />
      <ArtistSection />
      {/* <CameraSection /> */}
      <EducationSection />
      <Contact />
      <Footer />
    </div>
  );
}
