"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* Presets                                                             */
/* ------------------------------------------------------------------ */

type Settings = {
  display: "serif" | "allo";
  displayWght: number;
  displayRond: number;
  displayScale: number;
  displayTrack: number; // em
  body: "inter" | "allo";
  bodyRond: number;
  labels: "mono" | "allo";
  singleA: boolean; // ss01, single-story a
  openFigs: boolean; // ss03, open 4 6 9
  kinetic: boolean;
};

const PRESETS: { id: string; name: string; note: string; s: Settings }[] = [
  {
    id: "classic",
    name: "Classic",
    note: "What's live now: Instrument Serif, Inter, mono labels",
    s: { display: "serif", displayWght: 400, displayRond: 50, displayScale: 1, displayTrack: -0.025, body: "inter", bodyRond: 50, labels: "mono", singleA: false, openFigs: false, kinetic: false },
  },
  {
    id: "swap",
    name: "Body swap",
    note: "Keep the serif name, Allo does the reading",
    s: { display: "serif", displayWght: 400, displayRond: 50, displayScale: 1, displayTrack: -0.025, body: "allo", bodyRond: 50, labels: "mono", singleA: false, openFigs: false, kinetic: false },
  },
  {
    id: "allo",
    name: "All Allo",
    note: "One family everywhere, bold friendly name",
    s: { display: "allo", displayWght: 700, displayRond: 50, displayScale: 1, displayTrack: -0.015, body: "allo", bodyRond: 50, labels: "allo", singleA: false, openFigs: false, kinetic: false },
  },
  {
    id: "waveform",
    name: "Waveform",
    note: "Light round name that swells like a voice waveform when you get close. Allo labels, open figures",
    s: { display: "allo", displayWght: 320, displayRond: 100, displayScale: 0.95, displayTrack: -0.025, body: "allo", bodyRond: 70, labels: "allo", singleA: false, openFigs: true, kinetic: true },
  },
  {
    id: "marshmallow",
    name: "Marshmallow",
    note: "Max roundness, chunky name, single-story a, name reacts to the cursor",
    s: { display: "allo", displayWght: 800, displayRond: 100, displayScale: 1.05, displayTrack: -0.015, body: "allo", bodyRond: 100, labels: "allo", singleA: true, openFigs: true, kinetic: true },
  },
  {
    id: "airy",
    name: "Airy",
    note: "Hairline round name that swells when you get close, mono labels kept",
    s: { display: "allo", displayWght: 200, displayRond: 100, displayScale: 1.2, displayTrack: -0.02, body: "allo", bodyRond: 70, labels: "mono", singleA: false, openFigs: false, kinetic: true },
  },
  {
    id: "crisp",
    name: "Crisp",
    note: "Roundness at 0: same bones, more grown-up",
    s: { display: "allo", displayWght: 600, displayRond: 0, displayScale: 1, displayTrack: -0.02, body: "allo", bodyRond: 0, labels: "allo", singleA: false, openFigs: false, kinetic: false },
  },
];

const STORE_KEY = "type-lab-v2"; // bumped when presets change, drops old saved tweaks

/** Writes a settings object onto <html> as the CSS variables globals.css reads. */
function apply(s: Settings) {
  const root = document.documentElement;
  const set = (k: string, v: string | number) => root.style.setProperty(k, String(v));
  const feats = [s.singleA && '"ss01"', s.openFigs && '"ss03"'].filter(Boolean).join(", ") || "normal";

  set("--display-family", s.display === "allo" ? "var(--allo)" : "var(--serif)");
  set("--display-wght", s.display === "allo" ? s.displayWght : 400);
  set("--display-rond", s.displayRond);
  set("--display-scale", s.displayScale);
  set("--display-track", `${s.displayTrack}em`);
  set("--display-feat", feats);
  // Sign-off: never heavier than 600, and upright once the name is rounder
  // than the obliques (those are fixed at roundness 50).
  set("--sign-wght", s.display === "allo" ? Math.min(s.displayWght, 600) : 400);
  set("--sign-size", s.display === "allo" ? "1.625rem" : "1.875rem");
  set("--sign-style", s.display === "allo" && s.displayRond > 60 ? "normal" : "italic");
  root.dataset.alloBody = s.body === "allo" ? "on" : "off";
  set("--body-family", s.body === "allo" ? "var(--allo)" : "var(--inter)");
  set("--body-rond", s.bodyRond);
  set("--body-feat", feats);
  set("--label-family", s.labels === "allo" ? "var(--allo)" : "var(--mono)");
  set("--label-wght", s.labels === "allo" ? 600 : 400);
  set("--label-size", s.labels === "allo" ? "11.5px" : "11px");
  set("--label-track", s.labels === "allo" ? "0.07em" : "0.14em");
  set("--meta-family", s.labels === "allo" ? "var(--allo)" : "var(--mono)");
  root.dataset.kinetic = s.kinetic && s.display === "allo" ? "on" : "off";
}

/* ------------------------------------------------------------------ */
/* Kinetic name                                                        */
/* ------------------------------------------------------------------ */

/**
 * The name, one span per letter. When the lab turns kinetic on, each letter
 * gets heavier (and rounder) the closer the cursor is, and the name does
 * one wave on load so touch screens see it too.
 */
export function KineticText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = document.documentElement;
    const letters = Array.from(el.querySelectorAll<HTMLSpanElement>("[data-l]"));
    const on = () => root.dataset.kinetic === "on";
    const cssNum = (k: string, fallback: number) => {
      const n = parseFloat(getComputedStyle(root).getPropertyValue(k));
      return Number.isFinite(n) ? n : fallback;
    };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reset = () => letters.forEach((l) => (l.style.fontWeight = l.style.fontVariationSettings = ""));
    const pump = (l: HTMLSpanElement, t: number) => {
      // t in 0..1: how strongly this letter reacts
      const b = cssNum("--display-wght", 400);
      const r = cssNum("--display-rond", 50);
      const peak = Math.min(900, b + 300);
      l.style.fontWeight = String(Math.round(b + (peak - b) * t));
      l.style.fontVariationSettings = `"ROND" ${Math.round(r + (100 - r) * t)}`;
    };

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (!on() || reduce) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = el.getBoundingClientRect();
        const near = e.clientY > box.top - 80 && e.clientY < box.bottom + 80 && e.clientX > box.left - 120 && e.clientX < box.right + 120;
        if (!near) return reset();
        letters.forEach((l) => {
          const r = l.getBoundingClientRect();
          const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
          const x = Math.max(0, 1 - d / 160);
          pump(l, x * x * (3 - 2 * x)); // smoothstep, so neighbours blend
        });
      });
    };

    // One wave across the name, also re-run whenever kinetic turns on.
    let timers: number[] = [];
    const wave = () => {
      if (!on() || reduce) return;
      timers.forEach(clearTimeout);
      timers = letters.flatMap((l, i) => [
        window.setTimeout(() => pump(l, 1), 300 + i * 55),
        window.setTimeout(() => (l.style.fontWeight = l.style.fontVariationSettings = ""), 650 + i * 55),
      ]);
    };

    const obs = new MutationObserver(() => (on() ? wave() : reset()));
    obs.observe(root, { attributes: true, attributeFilter: ["data-kinetic"] });
    window.addEventListener("pointermove", onMove);
    wave();
    return () => {
      obs.disconnect();
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

/* ------------------------------------------------------------------ */
/* Lab panel                                                           */
/* ------------------------------------------------------------------ */

function Slider({ label, value, min, max, step = 1, onChange }: { label: string; value: number; min: number; max: number; step?: number; onChange: (v: number) => void }) {
  return (
    <label className="grid grid-cols-[5.5rem_1fr_2.5rem] items-center gap-2 text-[12px]">
      <span className="text-muted-foreground">{label}</span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="accent-[hsl(var(--accent-ink))]" />
      <span className="text-right tabular-nums">{value}</span>
    </label>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      aria-pressed={value}
      className={`rounded-full border px-2.5 py-1 text-[12px] transition-colors ${value ? "border-foreground bg-foreground text-background" : "hover:bg-muted"}`}
    >
      {label}
    </button>
  );
}

/**
 * A floating panel for trying Allo on the real page. Shows in dev, or
 * anywhere with ?lab in the URL. ?type=<preset> picks a preset.
 */
export function TypeLab() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(true);
  const [preset, setPreset] = useState("waveform");
  const [s, setS] = useState<Settings>(PRESETS.find((p) => p.id === "waveform")!.s);

  // Load: URL preset > saved tweaks > classic.
  useEffect(() => {
    const q = new URLSearchParams(location.search);
    setVisible(process.env.NODE_ENV === "development" || q.has("lab") || q.has("type"));
    if (window.innerWidth < 640) setOpen(false);
    const fromUrl = PRESETS.find((p) => p.id === q.get("type"));
    let saved: { preset: string; s: Settings } | null = null;
    try {
      saved = JSON.parse(localStorage.getItem(STORE_KEY) ?? "null");
    } catch {}
    if (fromUrl) {
      setPreset(fromUrl.id);
      setS(fromUrl.s);
    } else if (saved) {
      setPreset(saved.preset);
      setS(saved.s);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    apply(s);
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ preset, s }));
    } catch {}
  }, [s, preset, visible]);

  const pick = (id: string) => {
    const p = PRESETS.find((x) => x.id === id)!;
    setPreset(id);
    setS(p.s);
    const url = new URL(location.href);
    url.searchParams.set("type", id);
    history.replaceState(null, "", url);
  };
  const tweak = (patch: Partial<Settings>) => {
    setS((cur) => ({ ...cur, ...patch }));
    setPreset("custom");
  };

  if (!visible) return null;
  const note = PRESETS.find((p) => p.id === preset)?.note ?? "Your own mix";

  return (
    <div className="fixed bottom-4 right-4 z-[60] w-[19rem] max-w-[calc(100vw-2rem)] font-[family-name:var(--allo)]">
      <div className="overflow-hidden rounded-2xl border bg-popover/95 shadow-[0_12px_40px_-12px_rgba(40,30,10,0.35)] backdrop-blur">
        <button type="button" onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between px-4 py-3 text-left">
          <span className="text-[13px] font-semibold" style={{ fontVariationSettings: '"ROND" 100' }}>
            Type lab <span className="font-normal text-muted-foreground">· Allo</span>
          </span>
          <motion.span animate={{ rotate: open ? 0 : 180 }} className="text-muted-foreground">
            ⌄
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
              <div className="space-y-4 px-4 pb-4">
                <div className="flex flex-wrap gap-1.5">
                  {PRESETS.map((p) => (
                    <Toggle key={p.id} label={p.name} value={preset === p.id} onChange={() => pick(p.id)} />
                  ))}
                </div>
                <p className="text-[12px] leading-snug text-muted-foreground">{note}</p>

                <div className="space-y-2 border-t border-dashed pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    <Toggle label="Allo name" value={s.display === "allo"} onChange={(v) => tweak({ display: v ? "allo" : "serif" })} />
                    <Toggle label="Allo body" value={s.body === "allo"} onChange={(v) => tweak({ body: v ? "allo" : "inter" })} />
                    <Toggle label="Allo labels" value={s.labels === "allo"} onChange={(v) => tweak({ labels: v ? "allo" : "mono" })} />
                  </div>
                  {s.display === "allo" && (
                    <>
                      <Slider label="Name weight" value={s.displayWght} min={100} max={900} step={10} onChange={(v) => tweak({ displayWght: v })} />
                      <Slider label="Name round" value={s.displayRond} min={0} max={100} onChange={(v) => tweak({ displayRond: v })} />
                    </>
                  )}
                  <Slider label="Name size" value={s.displayScale} min={0.8} max={1.5} step={0.05} onChange={(v) => tweak({ displayScale: v })} />
                  {s.body === "allo" && <Slider label="Body round" value={s.bodyRond} min={0} max={100} onChange={(v) => tweak({ bodyRond: v })} />}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <Toggle label="Single-story a" value={s.singleA} onChange={(v) => tweak({ singleA: v })} />
                    <Toggle label="Open 4 6 9" value={s.openFigs} onChange={(v) => tweak({ openFigs: v })} />
                    <Toggle label="Kinetic name" value={s.kinetic} onChange={(v) => tweak({ kinetic: v })} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
