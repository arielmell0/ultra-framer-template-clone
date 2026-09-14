import Image from "next/image";
import Link from "next/link";

export interface SidebarItem {
  slug: string;
  title: string;
  subtitle?: string;
  price?: string;
  image?: string;
  href: string;
}

interface SubpageSidebarProps {
  sectionTitle: "Work" | "Writing" | "Store";
  activeItem: SidebarItem;
  nextItems: SidebarItem[];
}

export function SubpageSidebar({
  sectionTitle,
  activeItem,
  nextItems,
}: SubpageSidebarProps) {
  const isStore = sectionTitle === "Store";

  return (
    <aside className="hidden lg:flex w-[340px] shrink-0 sticky top-0 h-screen overflow-y-auto border-r border-[#343434] px-3 py-10 flex-col gap-6 select-none">
      {/* Section Header */}
      <div className="px-3">
        <p className="text-[15px] font-normal text-[#ededed]">{sectionTitle}</p>
      </div>

      {/* Now viewing */}
      <div className="flex flex-col gap-2">
        <p className="px-3 text-[15px] font-normal text-[#707070]">Now viewing</p>
        <div className="rounded-xl bg-[#2e2e2e] p-3">
          {isStore ? (
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                {activeItem.image && (
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-[#343434] flex items-center justify-center p-1 overflow-hidden">
                    <Image
                      src={activeItem.image}
                      alt={activeItem.title}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <p className="truncate text-[15px] font-normal text-[#ededed] leading-[22.5px]">
                    {activeItem.title}
                  </p>
                  <p className="truncate text-[15px] font-normal text-[#707070] leading-[22.5px]">
                    {activeItem.subtitle}
                  </p>
                </div>
              </div>
              {activeItem.price && (
                <span className="shrink-0 text-[15px] font-normal text-[#ededed]">
                  {activeItem.price}
                </span>
              )}
            </div>
          ) : (
            <div className="flex flex-col">
              <p className="text-[15px] font-normal text-[#ededed] leading-[22.5px]">
                {activeItem.title}
              </p>
              {activeItem.subtitle && (
                <p className="text-[15px] font-normal text-[#707070] leading-[22.5px]">
                  {activeItem.subtitle}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Up next */}
      <div className="flex flex-col gap-2">
        <p className="px-3 text-[15px] font-normal text-[#707070]">Up next</p>
        <div className="flex flex-col gap-1">
          {nextItems.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className="rounded-xl p-3 transition hover:bg-[#2e2e2e]"
            >
              {isStore ? (
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    {item.image && (
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-[#343434] flex items-center justify-center p-1 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="truncate text-[15px] font-normal text-[#ededed] leading-[22.5px]">
                        {item.title}
                      </p>
                      <p className="truncate text-[15px] font-normal text-[#707070] leading-[22.5px]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  {item.price && (
                    <span className="shrink-0 text-[15px] font-normal text-[#ededed]">
                      {item.price}
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex flex-col">
                  <p className="text-[15px] font-normal text-[#ededed] leading-[22.5px]">
                    {item.title}
                  </p>
                  {item.subtitle && (
                    <p className="text-[15px] font-normal text-[#707070] leading-[22.5px]">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
