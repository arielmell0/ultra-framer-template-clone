import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { products } from "@/data/products";

// Set to true to re-enable the store section on the home page in the future
const SHOW_STORE_SECTION = false;

export function StoreSection() {
  if (!SHOW_STORE_SECTION) {
    return null;
  }
  return (
    <section className="relative w-full">
      <h2 className="text-[15px] font-normal text-[#a0a0a0] mb-4 md:mb-0 md:absolute md:right-[calc(100%+40px)] md:top-0 md:text-right whitespace-nowrap">
        Store
      </h2>
      <div className="flex flex-col gap-3 w-full">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/store/${product.slug}`}
            className="flex items-center justify-between rounded-xl bg-[#282828] p-3 transition hover:bg-[#2e2e2e]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#343434] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={36}
                  height={36}
                  className="h-full w-full object-contain p-1"
                />
              </div>
              <div>
                <h3 className="text-[15px] font-normal text-[#ededed]">
                  {product.title}
                </h3>
                <p className="text-xs text-[#707070]">
                  {product.description}
                </p>
              </div>
            </div>
            <span className="shrink-0 text-[15px] text-[#a0a0a0] pl-4">
              {product.price}
            </span>
          </Link>
        ))}
        <Link
          href="/store/ultra-framer-template"
          className="inline-flex h-[38px] w-full items-center justify-center gap-2 rounded-lg bg-[#282828] text-[15px] text-[#ededed] transition hover:bg-[#2e2e2e]"
        >
          <span>View all</span>
          <ArrowRightIcon className="h-3 w-3 text-[#ededed]" />
        </Link>
      </div>
    </section>
  );
}
