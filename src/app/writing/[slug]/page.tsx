import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeftRailNav } from "@/components/LeftRailNav";
import { Footer } from "@/components/Footer";
import { articles } from "@/data/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const nextArticles = articles.filter((a) => a.slug !== slug);

  return (
    <div className="min-h-screen bg-[#232323] text-[#ededed]">
      <LeftRailNav />
      <main className="mx-auto max-w-[540px] px-6 pl-[152px] pt-14">
        {/* Now viewing & Up next widget */}
        <section className="mb-10 rounded-xl bg-[#282828] p-4 text-xs">
          <p className="text-[11px] uppercase tracking-wider text-[#707070]">Writing</p>
          <div className="mt-2 border-b border-[#343434] pb-3">
            <span className="text-[#a0a0a0]">Now viewing: </span>
            <span className="text-[#ededed] font-medium">{article.title}</span>
          </div>
          <div className="mt-3">
            <p className="text-[11px] uppercase tracking-wider text-[#707070] mb-2">Up next</p>
            <div className="flex flex-col gap-2">
              {nextArticles.map((next) => (
                <Link
                  key={next.slug}
                  href={`/writing/${next.slug}`}
                  className="flex items-center justify-between text-[#ededed] transition hover:text-white"
                >
                  <span className="truncate pr-4">{next.title}</span>
                  <span className="shrink-0 text-[#707070]">{next.date}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Article header */}
        <article>
          <div className="overflow-hidden rounded-xl">
            <Image
              src={article.cover}
              alt={article.title}
              width={540}
              height={320}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <header className="mt-6 mb-8">
            <time className="text-sm text-[#707070]">{article.date}</time>
            <h1 className="mt-2 text-2xl font-normal leading-[1.3] text-white">
              {article.title}
            </h1>
            <div className="mt-4">
              <span className="rounded bg-[#333333] px-2 py-0.5 text-[11px] uppercase tracking-wider text-[#a0a0a0]">
                {article.tag}
              </span>
            </div>
          </header>

          <div className="space-y-4 border-t border-[#2e2e2e] pt-8 text-[15px] leading-[1.6] text-[#ededed]">
            {article.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>

        <Footer />
      </main>
    </div>
  );
}
