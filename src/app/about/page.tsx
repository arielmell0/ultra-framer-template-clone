import Image from "next/image";
import { LeftRailNav } from "@/components/LeftRailNav";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#232323] text-[#ededed]">
      <LeftRailNav />
      <main className="w-full max-w-[540px] mx-auto px-4 md:px-0 py-10 flex flex-col gap-10">
        <header>
          <h1 className="text-2xl font-normal text-white">About</h1>
          <p className="mt-2 text-xl text-[#707070]">{profile.aboutSubtitle}</p>
        </header>

        {/* Intro */}
        <section className="relative w-full">
          <h2 className="text-[15px] font-normal text-[#a0a0a0] mb-4 md:mb-0 md:absolute md:right-[calc(100%+40px)] md:top-0 md:text-right whitespace-nowrap">
            Intro
          </h2>
          <div className="overflow-hidden rounded-xl mb-6 bg-[#282828]">
            <Image
              src={profile.aboutPhoto}
              alt={profile.displayName}
              width={540}
              height={360}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-4 text-[15px] leading-[22.5px] text-[#ededed] w-full">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="relative w-full">
          <h2 className="text-[15px] font-normal text-[#a0a0a0] mb-4 md:mb-0 md:absolute md:right-[calc(100%+40px)] md:top-0 md:text-right whitespace-nowrap">
            Experience
          </h2>
          <div className="space-y-4 w-full">
            {profile.experience.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-[15px]">
                <span className="w-36 shrink-0 text-[#707070]">{item.period}</span>
                <div className="flex flex-col">
                  <span className="text-[#ededed] font-medium">
                    {item.title} at {item.company}
                  </span>
                  <span className="text-[13px] text-[#707070]">{item.summary}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="relative w-full">
          <h2 className="text-[15px] font-normal text-[#a0a0a0] mb-4 md:mb-0 md:absolute md:right-[calc(100%+40px)] md:top-0 md:text-right whitespace-nowrap">
            Education
          </h2>
          <div className="space-y-4 w-full">
            {profile.education.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-[15px]">
                <span className="w-36 shrink-0 text-[#707070]">{item.period}</span>
                <span className="text-[#ededed] leading-[22.5px]">
                  {item.degree} — {item.school}
                </span>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
