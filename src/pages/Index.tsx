import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import WhyFlowzy from "@/components/WhyFlowzy";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Benefits />
      <HowItWorks />
      <WhyFlowzy />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
