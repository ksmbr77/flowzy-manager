import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import ExclusiveBenefits from "@/components/ExclusiveBenefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <Benefits />
      <HowItWorks />
      <Features />
      <Results />
      <Pricing />
      <ExclusiveBenefits />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
