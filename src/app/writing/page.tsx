import Link from "next/link";
import { LeftRailNav } from "@/components/LeftRailNav";
import { Footer } from "@/components/Footer";
import { articles } from "@/data/articles";

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-[#232323] text-[#ededed]">
      <LeftRailNav />
      <main className="mx-auto max-w-[540px] px-6 pl-[152px] pt-14">
        <header className="mb-10">
          <h1 className="text-2xl font-normal text-white">Writing</h1>
          <p className="mt-2 text-xl text-[#707070]">Thoughts on design, tech, and process</p>
        </header>

        <section className="flex flex-col gap-3 border-t border-[#2e2e2e] pt-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/writing/${article.slug}`}
              className="block rounded-xl bg-[#282828] p-4 transition hover:bg-[#2e2e2e]"
            >
              <h2 className="text-[15px] font-normal leading-[1.4] text-[#ededed]">
                {article.title}
              </h2>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="rounded bg-[#333333] px-2 py-0.5 text-[11px] uppercase tracking-wider text-[#a0a0a0]">
                  {article.tag}
                </span>
                <span className="text-[#707070]">{article.date}</span>
              </div>
            </Link>
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
}
