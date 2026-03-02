import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Dining from "@/components/Dining";
import Explore from "@/components/Explore";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <OurStory />
      <Rooms />
      <Amenities />
      <Dining />
      <Explore />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
