import Image from "next/image";
import { notFound } from "next/navigation";
import { LeftRailNav } from "@/components/LeftRailNav";
import { SubpageSidebar } from "@/components/SubpageSidebar";
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

  // Split paragraphs by sections if it has Opportunities/Challenges
  const isBlockchain = slug.includes("blockchain");

  return (
    <div className="min-h-screen bg-[#232323] text-[#ededed] flex">
      <LeftRailNav />
      {/* Spacer for 65px LeftRailNav on desktop */}
      <div className="w-[65px] shrink-0 hidden lg:block" />

      {/* Secondary master-detail sidebar */}
      <SubpageSidebar
        sectionTitle="Writing"
        activeItem={{
          slug: article.slug,
          title: article.title,
          subtitle: article.date,
          href: `/writing/${article.slug}`,
        }}
        nextItems={nextArticles.map((a) => ({
          slug: a.slug,
          title: a.title,
          subtitle: a.date,
          href: `/writing/${a.slug}`,
        }))}
      />

      {/* Main detail reading area */}
      <main className="flex-1 min-w-0 py-10 px-4 md:px-0">
        <div className="w-full max-w-[540px] mx-auto flex flex-col gap-10">
          {/* Cover image (280px height) */}
          <div className="overflow-hidden rounded-xl bg-[#282828]">
            <Image
              src={article.cover}
              alt={article.title}
              width={540}
              height={280}
              priority
              className="h-[280px] w-full object-cover"
            />
          </div>

          {/* Article Header */}
          <header className="flex flex-col gap-3">
            <time className="text-[15px] text-[#707070]">{article.date}</time>
            <h1 className="text-2xl font-normal text-[#ededed] leading-[28.8px]">
              {article.title}
            </h1>
            <div>
              <span className="inline-block rounded-full bg-[#282828] px-2.5 py-0.5 text-[12px] uppercase tracking-wider text-[#a0a0a0]">
                {article.tag}
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="flex flex-col gap-6 text-[15px] leading-[22.5px] text-[#ededed]">
            {isBlockchain ? (
              <>
                <p>{article.paragraphs[0]}</p>
                <h3 className="text-[18px] text-[#a0a0a0] leading-[36px] font-normal mt-2">
                  Opportunities
                </h3>
                <div className="flex flex-col gap-4 pl-[22px]">
                  <p>{article.paragraphs[1]}</p>
                  <p>{article.paragraphs[2]}</p>
                  <p>{article.paragraphs[3]}</p>
                </div>
                <h3 className="text-[18px] text-[#a0a0a0] leading-[36px] font-normal mt-2">
                  Challenges
                </h3>
                <div className="flex flex-col gap-4 pl-[22px]">
                  <p>{article.paragraphs[4]}</p>
                  <p>{article.paragraphs[5]}</p>
                  <p>{article.paragraphs[6] || ""}</p>
                </div>
                {article.paragraphs[7] && <p>{article.paragraphs[7]}</p>}
              </>
            ) : (
              article.paragraphs.map((p, i) => <p key={i}>{p}</p>)
            )}
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}
