import Hero from "@/components/Hero";
import PutMoneyToWork from "@/components/PutMoneyToWork";
import InvestMonthly from "@/components/InvestMonthly";
import InvestingNotScary from "@/components/InvestingNotScary";
import TrustedName from "@/components/TrustedName";
import CostsSection from "@/components/CostsSection";
import AlwaysControl from "@/components/AlwaysControl";
import WalkThrough from "@/components/WalkThrough";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PutMoneyToWork />
      <InvestMonthly />
      <InvestingNotScary />
      <TrustedName />
      <CostsSection />
      <AlwaysControl />
      <WalkThrough />
      <CTASection />
      <AppScreenshots />
      <VideoSection />
    </>
  );
}
