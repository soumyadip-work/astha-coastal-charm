import { ReactLenis } from "@studio-freight/react-lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Dining from "@/components/Dining";
import Explore from "@/components/Explore";
import GalleryCarousel from "@/components/GalleryCarousel";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5 }}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <OurStory />
        <Rooms />
        <Amenities />
        <Dining />
        <Explore />
        <GalleryCarousel />
        <Reviews />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Index;
