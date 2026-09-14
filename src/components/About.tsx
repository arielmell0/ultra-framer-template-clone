import { profile } from "@/data/profile";

export function About() {
  return (
    <section className="relative w-full">
      <h2 className="text-[15px] font-normal text-[#a0a0a0] mb-4 md:mb-0 md:absolute md:right-[calc(100%+40px)] md:top-0 md:text-right whitespace-nowrap">
        About
      </h2>
      <div className="space-y-4 text-[15px] leading-[22.5px] text-[#ededed]">
        {profile.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
