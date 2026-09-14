import Link from "next/link";
import {
  NavHomeIcon,
  NavWorkIcon,
  NavWritingIcon,
  NavStoreIcon,
  NavStackIcon,
  NavAboutIcon,
  NavContactIcon,
  SearchIcon,
} from "@/components/icons";

const items = [
  { label: "Home", href: "/", Icon: NavHomeIcon },
  { label: "Work", href: "/work", Icon: NavWorkIcon },
  { label: "Writing", href: "/writing", Icon: NavWritingIcon },
  { label: "Store", href: "/store", Icon: NavStoreIcon },
  { label: "Stack", href: "/stack", Icon: NavStackIcon },
  { label: "About", href: "/about", Icon: NavAboutIcon },
  { label: "Contact", href: "/contact", Icon: NavContactIcon },
];

export function LeftRailNav() {
  return (
    <nav className="fixed left-0 top-0 flex h-full w-[140px] flex-col justify-center gap-[20px] pl-[21px] text-[#ededed]">
      {items.map((item, i) => (
        <Link
          key={item.label}
          href={item.href}
          className="group flex items-center gap-[14px]"
        >
          <item.Icon className="h-6 w-6 text-[#a0a0a0] transition-colors group-hover:text-white" />
          <span className="flex items-baseline gap-[6px] text-xs">
            <span>{item.label}</span>
            <span className="text-[10px] text-[#a0a0a0]">{i + 1}</span>
          </span>
        </Link>
      ))}
      <button
        type="button"
        className="group mt-2 flex items-center gap-[14px]"
      >
        <SearchIcon className="h-6 w-6 text-[#a0a0a0] transition-colors group-hover:text-white" />
        <span className="flex items-baseline gap-[6px] text-xs">
          <span>Search</span>
          <span className="text-[10px] text-[#a0a0a0]">/</span>
        </span>
      </button>
    </nav>
  );
}
