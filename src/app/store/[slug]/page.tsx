import Image from "next/image";
import { notFound } from "next/navigation";
import { LeftRailNav } from "@/components/LeftRailNav";
import { SubpageSidebar } from "@/components/SubpageSidebar";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const nextProducts = products.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-[#232323] text-[#ededed] flex">
      <LeftRailNav />
      {/* Spacer for 65px LeftRailNav on desktop */}
      <div className="w-[65px] shrink-0 hidden lg:block" />

      {/* Secondary master-detail sidebar */}
      <SubpageSidebar
        sectionTitle="Store"
        activeItem={{
          slug: product.slug,
          title: product.title,
          subtitle: product.description,
          price: product.price,
          image: product.image,
          href: `/store/${product.slug}`,
        }}
        nextItems={nextProducts.map((p) => ({
          slug: p.slug,
          title: p.title,
          subtitle: p.description,
          price: p.price,
          image: p.image,
          href: `/store/${p.slug}`,
        }))}
      />

      {/* Main detail reading area */}
      <main className="flex-1 min-w-0 py-10 px-4 md:px-0">
        <div className="w-full max-w-[540px] mx-auto flex flex-col gap-10">
          {/* Product Header */}
          <header className="flex flex-col gap-3">
            <h1 className="text-2xl font-normal text-[#ededed] leading-[28.8px]">
              {product.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              {product.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-[#282828] px-2.5 py-0.5 text-[12px] uppercase tracking-wider text-[#a0a0a0]"
                >
                  {b}
                </span>
              ))}
            </div>
          </header>

          {/* Metadata */}
          <section className="flex flex-col gap-2 text-[15px]">
            <div className="flex gap-x-6">
              <span className="w-24 shrink-0 text-[#707070]">Cost</span>
              <span className="text-[#ededed]">{product.cost}</span>
            </div>
            <div className="flex gap-x-6">
              <span className="w-24 shrink-0 text-[#707070]">Type</span>
              <span className="text-[#ededed]">{product.type}</span>
            </div>
            <div className="flex gap-x-6">
              <span className="w-24 shrink-0 text-[#707070]">Deliverable</span>
              <span className="text-[#ededed]">{product.deliverable}</span>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={product.buyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[42px] items-center justify-center rounded-lg bg-white px-6 text-[15px] font-medium text-[#161616] transition hover:bg-zinc-200"
            >
              Buy for {product.price}
            </a>
            <a
              href={product.previewUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[42px] items-center justify-center rounded-lg bg-[#282828] px-6 text-[15px] font-medium text-[#ededed] transition hover:bg-[#323232]"
            >
              See preview
            </a>
          </div>

          {/* Product Image */}
          <div className="overflow-hidden rounded-xl bg-[#282828]">
            <Image
              src={product.previewImage || product.image}
              alt={product.title}
              width={540}
              height={280}
              priority
              className="h-[280px] w-full object-cover"
            />
          </div>

          {/* Description Paragraphs */}
          <section className="flex flex-col gap-5 text-[15px] leading-[22.5px] text-[#ededed]">
            {product.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          {/* Features List */}
          {product.features && (
            <ul className="flex flex-col gap-2.5 text-[15px] leading-[22.5px] text-[#ededed] pl-5 list-disc">
              {product.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          )}

          <Footer />
        </div>
      </main>
    </div>
  );
}
