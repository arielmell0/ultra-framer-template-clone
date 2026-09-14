const paragraphs = [
  "I'm Dean Smith, a multidisciplinary designer based in New York City.",
  "With over 15 years of experience in the field, I take pride in delivering visually stunning and user-friendly designs that exceed client expectations.",
  "Whether it's collaborating with cross-functional teams or leading design projects, my attention to detail and dedication to excellence has earned me a reputation for delivering exceptional results.",
];

export function About() {
  return (
    <section className="relative w-full">
      <h2 className="text-[15px] font-normal text-[#a0a0a0] mb-4 md:mb-0 md:absolute md:right-[calc(100%+40px)] md:top-0 md:text-right whitespace-nowrap">
        About
      </h2>
      <div className="space-y-4 text-[15px] leading-[22.5px] text-[#ededed]">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
