"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavHomeIcon,
  NavWorkIcon,
  NavWritingIcon,
  NavStoreIcon,
  NavStackIcon,
  NavAboutIcon,
  NavContactIcon,
} from "@/components/icons";

interface NavItem {
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  hidden?: boolean;
}

const items: NavItem[] = [
  { label: "Home", href: "/", Icon: NavHomeIcon },
  { label: "Work", href: "/work/admin-crm", Icon: NavWorkIcon },
  // Preserved for future use:
  {
    label: "Writing",
    href: "/writing/blockchain-and-design-opportunities-and-challenges-for-designers-in-the-crypto-industry",
    Icon: NavWritingIcon,
    hidden: true,
  },
  {
    label: "Store",
    href: "/store/ultra-framer-template",
    Icon: NavStoreIcon,
    hidden: true,
  },
  { label: "Stack", href: "/stack", Icon: NavStackIcon },
  { label: "About", href: "/about", Icon: NavAboutIcon },
  { label: "Contact", href: "/contact", Icon: NavContactIcon, hidden: true },
];

export function LeftRailNav() {
  const pathname = usePathname() || "";
  const visibleItems = items.filter((item) => !item.hidden);

  return (
    <nav className="fixed left-[21px] top-1/2 -translate-y-1/2 z-50 flex flex-col gap-[20px]">
      {visibleItems.map((item, i) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href) ||
              (item.label === "Work" && pathname.startsWith("/work")) ||
              (item.label === "Writing" && pathname.startsWith("/writing")) ||
              (item.label === "Store" && pathname.startsWith("/store")) ||
              (item.label === "Stack" && pathname.toLowerCase().startsWith("/stack")) ||
              (item.label === "About" && pathname.toLowerCase().startsWith("/about")) ||
              (item.label === "Contact" && pathname.toLowerCase().startsWith("/contact"));

        return (
          <Link
            key={item.label}
            href={item.href}
            className="group relative flex items-center"
          >
            <item.Icon
              className={`h-6 w-6 transition-colors ${
                isActive
                  ? "text-white"
                  : "text-[#707070] group-hover:text-white"
              }`}
            />
            {/* Tooltip on hover */}
            <div className="absolute left-[calc(100%+24px)] top-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 flex items-center gap-1 rounded-[6px] bg-[#343434] px-[6px] py-[4px] text-[12px] text-[#ededed] shadow-lg whitespace-nowrap z-50">
              <span>{item.label}</span>
              <span className="rounded-[3px] bg-[#505050] px-1 text-[10px] text-[#ededed] font-sans">
                {i + 1}
              </span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
