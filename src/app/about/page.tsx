import Image from "next/image";
import { LeftRailNav } from "@/components/LeftRailNav";
import { Footer } from "@/components/Footer";

const introParagraphs = [
  "Hello, I'm Dean Smith, a product designer based in New York City, and I currently serve as the Head of Design at Alpha. I'm passionate about using design to solve real-world problems and create meaningful experiences that enhance people's lives.",
  "With a bachelor's degree in design from Parsons School of Design, I've honed my skills through years of experience as a senior designer at various tech companies. I firmly believe that design should be user-centric, and I always keep the end-user in mind when creating products. My focus at Alpha is on developing products that are both functional and aesthetically pleasing.",
  "When I'm not working, I love to travel and immerse myself in new cultures and cuisines. I also stay up-to-date with the latest advancements in technology and design by attending conferences and workshops.",
  "I'm proud to be part of the talented team at Alpha and excited about the work we've accomplished together. I'm committed to continuing to push the boundaries of product design and create products that make a real difference in people's lives.",
];

const experience = [
  { period: "2018 — Now", role: "Head of Design at Alpha" },
  { period: "2015 — 2018", role: "Lead Designer at Delta" },
  { period: "2012 — 2015", role: "Senior Designer at Gamma" },
  { period: "2008 — 2012", role: "Junior Designer at Beta" },
];

const education = [
  {
    period: "2008 — Now",
    desc: "Continued education in design and technology, including attending various conferences, workshops, and courses.",
  },
  {
    period: "2004 — 2008",
    desc: "Bachelor's Degree in Design from Parsons School of Design",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#232323] text-[#ededed]">
      <LeftRailNav />
      <main className="mx-auto max-w-[540px] px-6 pl-[152px] pt-14">
        <header className="mb-10">
          <h1 className="text-2xl font-normal text-white">About</h1>
          <p className="mt-2 text-xl text-[#707070]">A few things you should know</p>
          <div className="mt-8 overflow-hidden rounded-xl">
            <Image
              src="/images/about-photo.png"
              alt="Dean Smith"
              width={540}
              height={360}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </header>

        <section className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-4 py-8 border-t border-[#2e2e2e]">
          <h2 className="pt-1 text-[15px] text-[#a0a0a0] w-24 shrink-0">Intro</h2>
          <div className="space-y-4 text-[15px] leading-[1.5] text-[#ededed]">
            {introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-4 py-8 border-t border-[#2e2e2e]">
          <h2 className="pt-1 text-[15px] text-[#a0a0a0] w-24 shrink-0">Experience</h2>
          <div className="space-y-4">
            {experience.map((item, i) => (
              <div key={i} className="flex items-baseline gap-4 text-[15px]">
                <span className="w-28 shrink-0 text-[#707070]">{item.period}</span>
                <span className="text-[#ededed]">{item.role}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-4 py-8 border-t border-[#2e2e2e]">
          <h2 className="pt-1 text-[15px] text-[#a0a0a0] w-24 shrink-0">Education</h2>
          <div className="space-y-4">
            {education.map((item, i) => (
              <div key={i} className="flex items-baseline gap-4 text-[15px]">
                <span className="w-28 shrink-0 text-[#707070]">{item.period}</span>
                <span className="text-[#ededed] leading-[1.5]">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
