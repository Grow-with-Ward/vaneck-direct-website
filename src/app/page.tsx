import Image from "next/image";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
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
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}
