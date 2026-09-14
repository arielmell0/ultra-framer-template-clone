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
    desc: "Continued education in design and technology, including attending various conferences and workshops to stay up-to-date on industry trends and best practices.",
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
      <main className="w-full max-w-[540px] mx-auto px-4 md:px-0 py-10 flex flex-col gap-10">
        <header>
          <h1 className="text-2xl font-normal text-white">About</h1>
          <p className="mt-2 text-xl text-[#707070]">A few things you should know</p>
        </header>

        <section className="relative w-full">
          <h2 className="text-[15px] font-normal text-[#a0a0a0] mb-4 md:mb-0 md:absolute md:right-[calc(100%+40px)] md:top-0 md:text-right whitespace-nowrap">
            Intro
          </h2>
          <div className="overflow-hidden rounded-xl mb-6">
            <Image
              src="/images/about-photo.png"
              alt="Dean Smith"
              width={540}
              height={360}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-4 text-[15px] leading-[22.5px] text-[#ededed] w-full">
            {introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="relative w-full">
          <h2 className="text-[15px] font-normal text-[#a0a0a0] mb-4 md:mb-0 md:absolute md:right-[calc(100%+40px)] md:top-0 md:text-right whitespace-nowrap">
            Experience
          </h2>
          <div className="space-y-4 w-full">
            {experience.map((item, i) => (
              <div key={i} className="flex items-baseline gap-4 text-[15px]">
                <span className="w-28 shrink-0 text-[#707070]">{item.period}</span>
                <span className="text-[#ededed]">{item.role}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="relative w-full">
          <h2 className="text-[15px] font-normal text-[#a0a0a0] mb-4 md:mb-0 md:absolute md:right-[calc(100%+40px)] md:top-0 md:text-right whitespace-nowrap">
            Education
          </h2>
          <div className="space-y-4 w-full">
            {education.map((item, i) => (
              <div key={i} className="flex items-baseline gap-4 text-[15px]">
                <span className="w-28 shrink-0 text-[#707070]">{item.period}</span>
                <span className="text-[#ededed] leading-[22.5px]">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
