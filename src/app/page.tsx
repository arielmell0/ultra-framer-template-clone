import { LeftRailNav } from "@/components/LeftRailNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#232323]">
      <LeftRailNav />
      <main className="mx-auto max-w-[540px] px-6 pl-[152px]">
        <Hero />
        <About />
        <Work />
      </main>
    </div>
  );
}
