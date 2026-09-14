import { LeftRailNav } from "@/components/LeftRailNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { StoreSection } from "@/components/StoreSection";
import { WritingSection } from "@/components/WritingSection";
import { SubscribeSection } from "@/components/SubscribeSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#232323]">
      <LeftRailNav />
      <main className="w-full max-w-[540px] mx-auto px-4 md:px-0 py-10 flex flex-col gap-10">
        <Hero />
        <About />
        <Work />
        <StoreSection />
        <WritingSection />
        <SubscribeSection />
        <Footer />
      </main>
    </div>
  );
}
