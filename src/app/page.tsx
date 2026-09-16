import { LeftRailNav } from "@/components/LeftRailNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#232323] flex">
      <LeftRailNav />
      {/* Spacer for 65px LeftRailNav on desktop */}
      <div className="w-[65px] shrink-0 hidden lg:block" />
      <div className="flex-1 min-w-0 flex justify-center">
        <main className="w-full max-w-[540px] px-4 md:px-0 py-10 flex flex-col gap-10">
          <Hero />
          <About />
          <Work />
          {/* Hidden sections (preserved for future use): */}
          {/* <StoreSection /> */}
          {/* <WritingSection /> */}
          {/* <SubscribeSection /> */}
          <Footer />

        </main>
      </div>
    </div>
  );
}
