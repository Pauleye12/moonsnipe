import BotFeatures from "../components/BotFeatures";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import PartOfFuture from "../components/PartOfFuture";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className=" bg-[#101010] w-full flex flex-col items-center justify-center gap-20 scrollBehaviour">
      <HeroSection />
      <BotFeatures />
      <HowItWorks />
      <PartOfFuture />
      <Footer />
    </div>
  );
};

export default Home;
