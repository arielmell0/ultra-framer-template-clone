"use client";

import { useState } from "react";
import { LeftRailNav } from "@/components/LeftRailNav";
import { Footer } from "@/components/Footer";
import { CopyIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleCopy() {
    navigator.clipboard?.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#232323] text-[#ededed]">
      <LeftRailNav />
      <main className="w-full max-w-[540px] mx-auto px-4 md:px-0 py-10 flex flex-col gap-8">
        <header>
          <h1 className="text-2xl font-normal text-white">Contact</h1>
          <p className="mt-2 text-xl text-[#707070]">Let&apos;s talk about working together</p>

          <p className="mt-5 flex items-center gap-2 text-[15px] text-[#a0a0a0]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2bd67b]" />
            Available for new opportunities
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[38px] w-[193px] items-center justify-center gap-2 rounded-lg bg-[#282828] text-[15px] font-medium text-[#ededed] transition-colors hover:bg-[#323232]"
            >
              <span>LinkedIn</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
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
        </header>

        <section className="w-full">
          {submitted ? (
            <div className="rounded-xl bg-[#282828] p-8 text-center">
              <p className="text-lg text-white font-medium">Message sent!</p>
              <p className="mt-2 text-[15px] text-[#a0a0a0]">
                Thanks for reaching out. We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl bg-[#1f1f1f] p-4 text-[15px] text-[#ededed] placeholder-[#707070] outline-none border border-white/5 focus:border-white/10"
              />
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-xl bg-[#1f1f1f] p-4 text-[15px] text-[#ededed] placeholder-[#707070] outline-none border border-white/5 focus:border-white/10"
              />
              <textarea
                required
                rows={5}
                placeholder="Your message"
                className="w-full rounded-xl bg-[#1f1f1f] p-4 text-[15px] text-[#ededed] placeholder-[#707070] outline-none border border-white/5 focus:border-white/10 resize-y"
              />
              <button
                type="submit"
                className="h-[46px] w-full rounded-xl bg-white text-[15px] font-semibold text-[#161616] transition hover:bg-zinc-200 cursor-pointer mt-1"
              >
                Send
              </button>
              <p className="mt-2 text-center text-[14px] text-[#707070]">
                Around 3-5 hours to respond
              </p>
            </form>
          )}
        </section>

        <Footer />
      </main>
    </div>
  );
}
