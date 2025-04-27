import { Camera } from "lucide-react";
import AboutSection from "./sections/about-section";
import { ArtistSection } from "./sections/artist-section";
import Footer from "./sections/footer";
import GallerySection from "./sections/gallery-section";
import HeroSection from "./sections/hero";
import Navbar from "./sections/navbar";
import CameraSection from "./sections/camera-section";
import EducationSection from "./sections/projects-section";
import LogosCollaboration from "./sections/logos-collaboration";

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
      <Footer />
    </div>
  );
}
