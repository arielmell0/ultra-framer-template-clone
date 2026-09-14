const paragraphs = [
  "I'm Dean Smith, a multidisciplinary designer based in New York City.",
  "With over 15 years of experience in the field, I take pride in delivering visually stunning and user-friendly designs that exceed client expectations.",
  "Whether it's collaborating with cross-functional teams or leading design projects, my attention to detail and dedication to excellence has earned me a reputation for delivering exceptional results.",
];

export function About() {
  return (
    <section className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-4 py-10">
      <h2 className="pt-1 text-[15px] text-[#a0a0a0]">About</h2>
      <div className="space-y-4 text-[15px] leading-[1.5] text-[#ededed]">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
