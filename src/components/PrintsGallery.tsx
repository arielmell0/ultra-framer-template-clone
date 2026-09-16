"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { ProjectPrint } from "@/data/projects";

interface PrintsGalleryProps {
  prints: ProjectPrint[];
}

function isMobilePrint(src: string, caption: string): boolean {
  const lowerSrc = src.toLowerCase();
  const lowerCap = caption.toLowerCase();
  return (
    lowerSrc.includes("-mobile") ||
    lowerSrc.includes("mobile") ||
    lowerSrc.includes("app-loja") ||
    lowerCap.includes("mobile")
  );
}

export function PrintsGallery({ prints }: PrintsGalleryProps) {
  const [viewMode, setViewMode] = useState<"table" | "feed">("table");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === 0 ? prints.length - 1 : prev - 1
    );
  }, [prints.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === prints.length - 1 ? 0 : prev + 1
    );
  }, [prints.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  const selectedPrint = selectedIndex !== null ? prints[selectedIndex] : null;
  const isSelectedMobile = selectedPrint ? isMobilePrint(selectedPrint.src, selectedPrint.caption) : false;

  return (
    <section className="flex flex-col gap-5">
      {/* Header & View Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-3">
        <div className="flex items-center gap-2.5">
          <h2 className="text-[14px] font-medium text-[#a0a0a0] uppercase tracking-wider">
            Project Prints & Flow
          </h2>
          <span className="text-[12px] font-mono text-[#606060]">
            ({prints.length})
          </span>
        </div>

        {/* Segmented Table vs Feed Toggle */}
        <div className="inline-flex items-center rounded-lg bg-[#1e1e1e] p-1 border border-white/5 text-[12px]">
          <button
            type="button"
            onClick={() => setViewMode("table")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
              viewMode === "table"
                ? "bg-[#343434] text-white shadow-sm"
                : "text-[#808080] hover:text-[#ededed]"
            }`}
            aria-label="Table / Grid view"
          >
            {/* Grid 2x2 Icon */}
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
            <span>Table View</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("feed")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
              viewMode === "feed"
                ? "bg-[#343434] text-white shadow-sm"
                : "text-[#808080] hover:text-[#ededed]"
            }`}
            aria-label="Feed / Single column view"
          >
            {/* Single column / list icon */}
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="6" rx="1" />
              <rect x="3" y="14" width="18" height="6" rx="1" />
            </svg>
            <span>Feed View</span>
          </button>
        </div>
      </div>

      {/* TABLE / GRID VIEW (2-column responsive layout) */}
      {viewMode === "table" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prints.map((print, index) => {
            const isMobile = isMobilePrint(print.src, print.caption);
            return (
              <figure
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="group relative flex flex-col rounded-xl bg-[#282828] border border-white/5 hover:border-white/20 transition-all duration-200 overflow-hidden cursor-pointer shadow-sm"
              >
                {/* Image preview frame with fixed height to avoid huge scrolls */}
                <div className="h-[270px] w-full relative bg-[#181818] overflow-hidden flex items-start justify-center">
                  {/* Device pill badge */}
                  <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1 px-2 py-0.5 rounded bg-black/70 backdrop-blur text-[11px] font-mono text-[#a0a0a0] border border-white/10">
                    {isMobile ? (
                      <>
                        <svg className="w-3 h-3 text-[#2bd67b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="5" y="2" width="14" height="20" rx="3" />
                          <line x1="12" y1="18" x2="12" y2="18.01" />
                        </svg>
                        <span>Mobile</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-3 h-3 text-[#64b5f6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="3" width="20" height="14" rx="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                        <span>Desktop</span>
                      </>
                    )}
                  </div>

                  {/* Expand icon on hover */}
                  <div className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-md bg-black/70 backdrop-blur text-[#ededed] opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all border border-white/10">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1="21" y1="3" x2="14" y2="10" />
                      <line x1="3" y1="21" x2="10" y2="14" />
                    </svg>
                  </div>

                  {/* Image: top aligned so headers and cards show clearly */}
                  <Image
                    src={print.src}
                    alt={print.caption}
                    width={540}
                    height={340}
                    className="w-full h-auto object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />

                  {/* Bottom fade hint */}
                  <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#181818] to-transparent pointer-events-none opacity-85" />
                </div>

                {/* Caption section */}
                <div className="p-3 flex flex-col gap-1.5 bg-[#282828] flex-1 justify-between border-t border-white/5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#666]">
                    <span>Print {String(index + 1).padStart(2, "0")}</span>
                    <span>Click to expand</span>
                  </div>
                  <figcaption className="text-[13px] leading-[18px] text-[#a0a0a0] group-hover:text-[#e0e0e0] transition-colors line-clamp-3">
                    {print.caption}
                  </figcaption>
                </div>
              </figure>
            );
          })}
        </div>
      )}

      {/* FEED VIEW (Single-column layout with minor-sized mobile frames) */}
      {viewMode === "feed" && (
        <div className="flex flex-col gap-8">
          {prints.map((print, index) => {
            const isMobile = isMobilePrint(print.src, print.caption);
            return (
              <figure key={index} className="flex flex-col gap-2.5">
                {isMobile ? (
                  /* Mobile Print: Minor size (max 280px phone frame), NOT occupying the full page */
                  <div
                    onClick={() => setSelectedIndex(index)}
                    className="mx-auto w-full max-w-[280px] rounded-[22px] border-[5px] border-[#383838] bg-[#181818] overflow-hidden max-h-[520px] shadow-xl relative group cursor-pointer hover:border-white/30 transition-all"
                  >
                    <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1 px-2 py-0.5 rounded bg-black/80 backdrop-blur text-[11px] font-mono text-[#2bd67b] border border-white/10">
                      <span>Mobile View</span>
                    </div>
                    <div className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-md bg-black/80 backdrop-blur text-[#ededed] opacity-80 group-hover:opacity-100 transition-all border border-white/10">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </div>

                    <Image
                      src={print.src}
                      alt={print.caption}
                      width={540}
                      height={340}
                      className="w-full h-auto object-cover object-top"
                    />

                    {/* Bottom fade hint */}
                    <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#181818] to-transparent pointer-events-none opacity-90" />
                  </div>
                ) : (
                  /* Desktop Print: Controlled height with expand indicator */
                  <div
                    onClick={() => setSelectedIndex(index)}
                    className="overflow-hidden rounded-xl bg-[#282828] border border-white/5 max-h-[460px] relative group cursor-pointer hover:border-white/20 transition-all"
                  >
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded bg-black/75 backdrop-blur text-[11px] font-mono text-[#64b5f6] border border-white/10">
                      <span>Desktop View</span>
                    </div>
                    <div className="absolute top-3 right-3 z-10 p-2 rounded-md bg-black/75 backdrop-blur text-[#ededed] opacity-75 group-hover:opacity-100 transition-all border border-white/10">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </div>

                    <Image
                      src={print.src}
                      alt={print.caption}
                      width={540}
                      height={340}
                      className="w-full h-auto object-cover object-top"
                    />

                    {/* Bottom fade hint */}
                    <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#282828] to-transparent pointer-events-none opacity-85" />
                  </div>
                )}

                <figcaption className="text-[14px] leading-[21px] text-[#808080] px-1 text-center sm:text-left">
                  <span className="text-[#a0a0a0] font-mono mr-2">[{String(index + 1).padStart(2, "0")}]</span>
                  {print.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedIndex !== null && selectedPrint && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot lightbox modal"
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col justify-between p-4 md:p-6"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between w-full max-w-5xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-mono text-[#a0a0a0]">
                Print {selectedIndex + 1} of {prints.length}
              </span>
              <span
                className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                  isSelectedMobile
                    ? "bg-[#2bd67b]/20 text-[#2bd67b] border-[#2bd67b]/30"
                    : "bg-[#64b5f6]/20 text-[#64b5f6] border-[#64b5f6]/30"
                }`}
              >
                {isSelectedMobile ? "Mobile View" : "Desktop View"}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
              aria-label="Close lightbox"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Center Image Container with Prev/Next Controls */}
          <div
            className="relative flex items-center justify-center w-full max-w-5xl mx-auto my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute -left-2 md:-left-12 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all backdrop-blur"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Scrollable image viewport */}
            <div
              className={`max-h-[72vh] overflow-y-auto rounded-xl bg-[#141414] border border-white/10 p-2 shadow-2xl ${
                isSelectedMobile ? "w-full max-w-[380px]" : "w-full max-w-4xl"
              }`}
            >
              <Image
                src={selectedPrint.src}
                alt={selectedPrint.caption}
                width={1440}
                height={900}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute -right-2 md:-right-12 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all backdrop-blur"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Bottom Caption Pill */}
          <div
            className="w-full max-w-2xl mx-auto text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-[13px] md:text-[14px] leading-[20px] text-[#ededed] bg-[#232323]/90 backdrop-blur px-5 py-2.5 rounded-xl border border-white/10 shadow-lg inline-block">
              {selectedPrint.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
