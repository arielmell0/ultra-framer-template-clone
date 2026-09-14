import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { articles } from "@/data/articles";

// Set to true to re-enable the writing section on the home page in the future
const SHOW_WRITING_SECTION = false;

export function WritingSection() {
  if (!SHOW_WRITING_SECTION) {
    return null;
  }
  return (
    <section className="relative w-full">
      <h2 className="text-[15px] font-normal text-[#a0a0a0] mb-4 md:mb-0 md:absolute md:right-[calc(100%+40px)] md:top-0 md:text-right whitespace-nowrap">
        Writing
      </h2>
      <div className="flex flex-col gap-3 w-full">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/writing/${article.slug}`}
            className="flex items-start justify-between rounded-xl bg-[#282828] p-3 transition hover:bg-[#2e2e2e]"
          >
            <div className="flex flex-col items-start pr-4">
              <h3 className="text-[15px] font-normal leading-[1.4] text-[#ededed]">
                {article.title}
              </h3>
              <span className="mt-2.5 rounded bg-[#333333] px-2 py-0.5 text-[11px] uppercase tracking-wider text-[#a0a0a0]">
                {article.tag}
              </span>
            </div>
            <span className="shrink-0 text-xs text-[#707070] pt-0.5">{article.date}</span>
          </Link>
        ))}
        <Link
          href="/writing/the-intersection-of-ai-and-design-creating-user-centric-solutions-in-the-digital-age-copy"
          className="inline-flex h-[38px] w-full items-center justify-center gap-2 rounded-lg bg-[#282828] text-[15px] text-[#ededed] transition hover:bg-[#2e2e2e]"
        >
          <span>View all</span>
          <ArrowRightIcon className="h-3 w-3 text-[#ededed]" />
        </Link>
      </div>
    </section>
  );
}
