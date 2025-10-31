import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Partners from "@/components/Partners";
import Problems from "@/components/Problems";
import Benefits from "@/components/Benefits";
import Demo from "@/components/Demo";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import WhyFlowzy from "@/components/WhyFlowzy";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SocialProof />
      <Partners />
      <Problems />
      <Benefits />
      <Demo />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <WhyFlowzy />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
