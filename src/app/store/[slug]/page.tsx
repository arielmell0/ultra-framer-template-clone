import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeftRailNav } from "@/components/LeftRailNav";
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
    <div className="min-h-screen bg-[#232323] text-[#ededed]">
      <LeftRailNav />
      <main className="mx-auto max-w-[540px] px-6 pl-[152px] pt-14">
        {/* Now viewing & Up next widget */}
        <section className="mb-10 rounded-xl bg-[#282828] p-4 text-xs">
          <p className="text-[11px] uppercase tracking-wider text-[#707070]">Store</p>
          <div className="mt-3 flex items-center justify-between border-b border-[#343434] pb-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 rounded-lg bg-[#343434] p-1 overflow-hidden flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-[#ededed] font-medium">{product.title}</p>
                <p className="text-[#707070] text-[11px]">{product.description}</p>
              </div>
            </div>
            <span className="text-[#ededed] font-medium">{product.price}</span>
          </div>

          <div className="mt-3">
            <p className="text-[11px] uppercase tracking-wider text-[#707070] mb-2">Up next</p>
            <div className="flex flex-col gap-2.5">
              {nextProducts.map((next) => (
                <Link
                  key={next.slug}
                  href={`/store/${next.slug}`}
                  className="flex items-center justify-between text-[#ededed] transition hover:text-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 shrink-0 rounded-lg bg-[#343434] p-1 overflow-hidden flex items-center justify-center">
                      <Image
                        src={next.image}
                        alt={next.title}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <span className="truncate pr-2">{next.title}</span>
                  </div>
                  <span className="shrink-0 text-[#707070]">{next.price}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Product Hero */}
        <article>
          <div className="overflow-hidden rounded-xl bg-[#282828]">
            <Image
              src={product.previewImage || product.image}
              alt={product.title}
              width={540}
              height={320}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <header className="mt-8 mb-6">
            <h1 className="text-2xl font-normal text-white">{product.title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {product.badges.map((b) => (
                <span
                  key={b}
                  className="rounded bg-[#333333] px-2.5 py-1 text-[11px] uppercase tracking-wider text-[#a0a0a0]"
                >
                  {b}
                </span>
              ))}
            </div>
          </header>

          <section className="space-y-3 border-t border-[#2e2e2e] py-6 text-[15px]">
            <div className="grid grid-cols-[auto_1fr] gap-x-10">
              <span className="w-24 shrink-0 text-[#a0a0a0]">Cost</span>
              <span className="text-[#ededed]">{product.cost}</span>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-x-10">
              <span className="w-24 shrink-0 text-[#a0a0a0]">Type</span>
              <span className="text-[#ededed]">{product.type}</span>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-x-10">
              <span className="w-24 shrink-0 text-[#a0a0a0]">Deliverable</span>
              <span className="text-[#ededed]">{product.deliverable}</span>
            </div>
          </section>

          <div className="flex flex-wrap items-center gap-3 border-t border-[#2e2e2e] py-6">
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

          <div className="space-y-4 border-t border-[#2e2e2e] py-8 text-[15px] leading-[1.6] text-[#ededed]">
            {product.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {product.features && (
            <ul className="space-y-2.5 border-t border-[#2e2e2e] py-6 text-[15px] text-[#ededed]">
              {product.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#707070]" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </article>

        <Footer />
      </main>
    </div>
  );
}
