"use client";

import { useEffect, useRef } from "react";

const BASE_WGHT = 320; // matches .t-display in globals.css
const PEAK_WGHT = 620;

/**
 * The name, one span per letter. Each letter gets heavier the closer the
 * cursor is, like a voice waveform. It also does one wave on load, so
 * touch screens see it too.
 */
export function KineticText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const letters = Array.from(el.querySelectorAll<HTMLSpanElement>("[data-l]"));

    const reset = (l: HTMLSpanElement) => (l.style.fontWeight = "");
    // t in 0..1: how strongly this letter reacts
    const pump = (l: HTMLSpanElement, t: number) =>
      (l.style.fontWeight = String(Math.round(BASE_WGHT + (PEAK_WGHT - BASE_WGHT) * t)));

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = el.getBoundingClientRect();
        const near =
          e.clientY > box.top - 80 && e.clientY < box.bottom + 80 && e.clientX > box.left - 120 && e.clientX < box.right + 120;
        if (!near) return letters.forEach(reset);
        letters.forEach((l) => {
          const r = l.getBoundingClientRect();
          const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
          const x = Math.max(0, 1 - d / 160);
          pump(l, x * x * (3 - 2 * x)); // smoothstep, so neighbours blend
        });
      });
    };

    // One wave across the name on load.
    const timers = letters.flatMap((l, i) => [
      window.setTimeout(() => pump(l, 1), 300 + i * 55),
      window.setTimeout(() => reset(l), 650 + i * 55),
    ]);

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <span ref={ref} aria-label={text} className={className}>
      {Array.from(text).map((ch, i) => (
        <span key={i} data-l aria-hidden className="kinetic-letter">
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}
