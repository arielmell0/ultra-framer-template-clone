"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  MailIcon,
  CopyIcon,
} from "@/components/icons";
import { profile } from "@/data/profile";

function formatClock(date: Date) {
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

const socials = [
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", href: profile.github, Icon: GitHubIcon },
  { label: "Instagram", href: profile.instagram, Icon: InstagramIcon },
];

export function Hero() {
  const [clock, setClock] = useState(() => formatClock(new Date()));
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => setClock(formatClock(new Date())), 1000);
    return () => window.clearInterval(id);
  }, []);

  function handleCopy() {
    navigator.clipboard?.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <header className="flex flex-col items-center pt-0 pb-0 text-center">
      <time className="mb-6 font-mono text-[13px] tracking-[0.6px] text-[#707070]">
        {clock}
      </time>

      <Image
        src={profile.avatar}
        alt={profile.displayName}
        width={72}
        height={72}
        priority
        className="mb-4 h-[72px] w-[72px] rounded-full object-cover"
      />

      <h1 className="text-2xl font-normal text-white">{profile.displayName}</h1>
      <p className="mt-2 text-xl text-[#a0a0a0] max-w-[480px]">{profile.headline}</p>
      <p className="mt-5 flex items-center gap-2 text-[15px] text-[#a0a0a0]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2bd67b]" />
        {profile.availability}
      </p>

      <div className="mt-7 flex items-center gap-7">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="group relative flex h-6 w-6 items-center justify-center text-[#a0a0a0] transition hover:text-white"
          >
            <Icon className="h-5 w-5" />
            <div className="absolute top-full mt-2 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 rounded-[6px] bg-[#343434] px-2 py-1 text-[12px] text-[#ededed] shadow-lg whitespace-nowrap z-30">
              {label}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-7 flex items-center justify-center gap-3">
        <Link
          href="/contact"
          className="inline-flex h-[38px] w-[193px] items-center justify-center gap-2 rounded-lg bg-white text-[15px] font-medium text-[#161616] transition-colors hover:bg-zinc-200"
        >
          <span>Contact me</span>
          <MailIcon className="h-4 w-4" />
        </Link>
        <span className="px-1 text-[15px] text-[#707070]">or</span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex h-[38px] w-[193px] items-center justify-center gap-2 rounded-lg bg-[#282828] text-[15px] font-medium text-[#ededed] transition-colors hover:bg-[#323232] cursor-pointer"
        >
          <span>{copied ? "Copied!" : "Copy email"}</span>
          <CopyIcon className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-6 font-mono text-[13px] tracking-[0.6px] text-[#707070]">
        RS, BRASIL · 29.6842° S, 53.8069° W
      </p>
    </header>
  );
}
