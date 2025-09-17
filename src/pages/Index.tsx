import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ForTrainersSection } from "@/components/ForTrainersSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { PricingSection } from "@/components/PricingSection";
import { ScreenshotsSection } from "@/components/ScreenshotsSection";
import { FAQSection } from "@/components/FAQSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ForTrainersSection />
      <SocialProofSection />
      <PricingSection />
      <ScreenshotsSection />
      <FAQSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
};

export default Index;
