"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  XIcon,
  ThreadsIcon,
  GitHubIcon,
  FigmaIcon,
  DribbbleIcon,
  InstagramIcon,
  MailIcon,
} from "@/components/icons";

function formatClock(date: Date) {
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

const socials = [
  { label: "X.com", href: "https://x.com/justinmfarrugia", Icon: XIcon },
  { label: "Threads", href: "https://threads.net/zuck", Icon: ThreadsIcon },
  { label: "GitHub", href: "https://github.com", Icon: GitHubIcon },
  { label: "Figma", href: "https://figma.com", Icon: FigmaIcon },
  { label: "Dribbble", href: "https://dribbble.com", Icon: DribbbleIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
];

export function Hero() {
  const [clock, setClock] = useState(() => formatClock(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => setClock(formatClock(new Date())), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className="flex flex-col items-center pt-10 pb-14 text-center">
      <time className="mb-[24px] font-mono text-[13px] tracking-[0.6px] text-[#707070]">
        {clock}
      </time>

      <Image
        src="/images/avatar.png"
        alt="Dean Smith"
        width={72}
        height={72}
        className="mb-4 h-[72px] w-[72px] rounded-full object-cover"
      />

      <h1 className="text-2xl font-normal text-white">Dean Smith</h1>
      <p className="mt-2 text-xl text-[#a0a0a0]">Head of design at Alpha</p>
      <p className="mt-5 flex items-center gap-2 text-[15px] text-[#a0a0a0]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Available for new opportunities
      </p>

      <div className="mt-7 flex items-center gap-5">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="flex h-6 w-6 items-center justify-center text-[#a0a0a0] transition hover:text-white"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
        <button
          type="button"
          className="inline-flex h-[38px] items-center justify-center gap-2 rounded-lg bg-white px-4 text-[15px] font-medium text-[#161616] transition-colors hover:bg-zinc-200"
        >
          Contact me
          <MailIcon className="h-4 w-4" />
        </button>
        <span className="px-1 text-[15px] text-[#707070]">or</span>
        <button
          type="button"
          className="inline-flex h-[38px] items-center justify-center gap-2 rounded-lg bg-[#282828] px-4 text-[15px] font-medium text-[#ededed] transition-colors hover:bg-[#323232]"
        >
          Copy email
        </button>
      </div>

      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-[#707070]">
        NYC, USA · 40.6892° N, 74.0445° W
      </p>
    </header>
  );
}
