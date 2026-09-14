import Image from "next/image";
import Link from "next/link";
import { LeftRailNav } from "@/components/LeftRailNav";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";

export default function StorePage() {
  return (
    <div className="min-h-screen bg-[#232323] text-[#ededed]">
      <LeftRailNav />
      <main className="mx-auto max-w-[540px] px-6 pl-[152px] pt-14">
        <header className="mb-10">
          <h1 className="text-2xl font-normal text-white">Store</h1>
          <p className="mt-2 text-xl text-[#707070]">Digital products, templates, and courses</p>
        </header>

        <section className="flex flex-col gap-3 border-t border-[#2e2e2e] pt-8">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/store/${product.slug}`}
              className="flex items-center justify-between rounded-xl bg-[#282828] p-4 transition hover:bg-[#2e2e2e]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#343434] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain p-1"
                  />
                </div>
                <div>
                  <h2 className="text-[15px] font-normal text-[#ededed]">
                    {product.title}
                  </h2>
                  <p className="mt-1 text-xs text-[#707070]">
                    {product.description}
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-[15px] font-normal text-[#ededed] pl-4">
                {product.price}
              </span>
            </Link>
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
}
