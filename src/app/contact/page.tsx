"use client";

import { useState } from "react";
import { LeftRailNav } from "@/components/LeftRailNav";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleCopy() {
    navigator.clipboard?.writeText("dean@alpha.com");
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
      <main className="mx-auto max-w-[540px] px-6 pl-[152px] pt-14">
        <header className="mb-8">
          <h1 className="text-2xl font-normal text-white">Contact</h1>
          <p className="mt-2 text-xl text-[#707070]">Let&apos;s talk about working together</p>

          <p className="mt-5 flex items-center gap-2 text-[15px] text-[#a0a0a0]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for new opportunities
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <a
              href="https://cal.com/justinfarrugia/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[38px] items-center justify-center gap-2 rounded-lg bg-white px-4 text-[15px] font-medium text-[#161616] transition-colors hover:bg-zinc-200"
            >
              Book call
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            <span className="px-1 text-[15px] text-[#707070]">or</span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex h-[38px] items-center justify-center rounded-lg bg-[#282828] px-4 text-[15px] font-medium text-[#ededed] transition-colors hover:bg-[#323232]"
            >
              {copied ? "Copied!" : "Copy email"}
            </button>
          </div>
        </header>

        <section className="pt-4 border-t border-[#2e2e2e]">
          {submitted ? (
            <div className="rounded-xl bg-[#282828] p-6 text-center">
              <p className="text-lg text-white">Message sent!</p>
              <p className="mt-2 text-sm text-[#a0a0a0]">
                Thanks for reaching out. We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg bg-[#343434] p-4 text-[15px] text-[#ededed] placeholder-[#707070] outline-none transition focus:ring-1 focus:ring-zinc-400"
              />
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-lg bg-[#343434] p-4 text-[15px] text-[#ededed] placeholder-[#707070] outline-none transition focus:ring-1 focus:ring-zinc-400"
              />
              <textarea
                required
                rows={5}
                placeholder="Your message"
                className="w-full rounded-lg bg-[#343434] p-4 text-[15px] text-[#ededed] placeholder-[#707070] outline-none transition focus:ring-1 focus:ring-zinc-400 resize-y"
              />
              <button
                type="submit"
                className="h-[53px] w-full rounded-lg bg-white text-[15px] font-medium text-[#161616] transition hover:bg-zinc-200 cursor-pointer"
              >
                Send
              </button>
              <p className="mt-2 text-center text-xs text-[#707070]">
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
