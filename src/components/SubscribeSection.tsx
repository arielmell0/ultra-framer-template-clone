"use client";

import { useState } from "react";
import { EnvelopeLargeIcon } from "@/components/icons";

// Set to true to re-enable the newsletter subscription section in the future
const SHOW_NEWSLETTER = false;

export function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  if (!SHOW_NEWSLETTER) {
    return null;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setJoined(true);
    }
  }

  return (
    <section className="w-full flex flex-col items-center text-center py-4">
      <EnvelopeLargeIcon className="h-8 w-8 text-[#ededed] mb-3" />
      <h2 className="text-[18px] font-normal text-white mb-2">
        Subscribe to my newsletter
      </h2>
      <p className="mx-auto max-w-[432px] text-[15px] leading-[1.5] text-[#a0a0a0]">
        I send out a biweekly newsletter where I share updates on my latest case
        studies, essays and products.
      </p>

      {joined ? (
        <p className="mt-6 text-[15px] text-emerald-400">
          Thank you for subscribing!
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-[540px] h-[42px] mt-6"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@email.com"
            className="w-full h-full rounded-xl bg-[#1f1f1f] pl-3 pr-[165px] text-[15px] text-[#ededed] placeholder-[#707070] outline-none border border-white/5 focus:border-white/10"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1.5 bottom-1.5 px-3 flex items-center justify-center text-[14px] text-[#707070] hover:text-[#ededed] transition cursor-pointer"
          >
            ↵ Enter to subscribe
          </button>
        </form>
      )}

      <p className="mt-3 text-[14px] text-[#707070]">
        Join 1400+ subscribers
      </p>
    </section>
  );
}
