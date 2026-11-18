"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* The kolam: a new one every time                                     */
/* ------------------------------------------------------------------ */

/**
 * A sikku (single-line) pulli kolam, generated the way they are drawn:
 * one line weaving between a grid of dots, bouncing off the edges and off
 * a few "mirrors" placed between dots, until it closes on itself.
 *
 * Coordinates: dots sit at odd (x, y) inside a W x H box. The line runs
 * diagonally through the points where x + y is odd, so it never touches
 * a dot. A mirror at one of those points turns the line 90 degrees. Each
 * try picks a random grid and random mirrors, and is kept only if the
 * line covers every step of the grid, i.e. the kolam is one closed loop.
 */
type Pt = [number, number];
type Kolam = { w: number; h: number; dots: Pt[]; d: string };

// Smaller grids read best at this size, so they come up more often.
const GRIDS: Pt[] = [
  [3, 3], [3, 3], [3, 3], [4, 3], [3, 4], [4, 3], [5, 3], [3, 5], [5, 5],
];

function trace(w: number, h: number, mirrors: Map<string, "v" | "h">) {
  // Every diagonal step in the grid, so we can tell if one loop covers all.
  let total = 0;
  for (let x = 0; x <= w; x++)
    for (let y = 0; y <= h; y++)
      if ((x + y) % 2 === 1) {
        if (x < w && y < h) total++; // step to (x+1, y+1)
        if (x < w && y > 0) total++; // step to (x+1, y-1)
      }

  const seen = new Set<string>();
  const pts: Pt[] = [];
  let x = 0,
    y = 1,
    dx = 1,
    dy = 1;
  const start = `${x},${y},${dx},${dy}`;
  do {
    pts.push([x, y]);
    const nx = x + dx,
      ny = y + dy;
    // Name each step by its left end and the two heights, so both
    // directions of travel count as the same step.
    seen.add(nx > x ? `${x},${y},${ny}` : `${nx},${ny},${y}`);
    x = nx;
    y = ny;
    const m = mirrors.get(`${x},${y}`);
    if (x === 0 || x === w || m === "v") dx = -dx;
    if (y === 0 || y === h || m === "h") dy = -dy;
  } while (`${x},${y},${dx},${dy}` !== start && pts.length < 2000);

  return seen.size === total ? pts : null;
}

/** Rounds every turn with a near-circular arc between step midpoints. */
function smooth(pts: Pt[]) {
  const n = pts.length;
  const at = (i: number) => pts[((i % n) + n) % n];
  const mid = (a: Pt, b: Pt): Pt => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const ROUND = 0.75; // 0.55 is a true circle; a bit more bulges the loops
  const m0 = mid(at(-1), at(0));
  let d = `M${m0[0]} ${m0[1]}`;
  for (let i = 0; i < n; i++) {
    const p = at(i);
    const a = mid(at(i - 1), p);
    const b = mid(p, at(i + 1));
    const c1 = [a[0] + (p[0] - a[0]) * ROUND, a[1] + (p[1] - a[1]) * ROUND];
    const c2 = [b[0] + (p[0] - b[0]) * ROUND, b[1] + (p[1] - b[1]) * ROUND];
    d += ` C${c1[0]} ${c1[1]} ${c2[0]} ${c2[1]} ${b[0]} ${b[1]}`;
  }
  return d + "Z";
}

function dotsFor(cols: number, rows: number) {
  const dots: Pt[] = [];
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) dots.push([i * 2 + 1, j * 2 + 1]);
  return dots;
}

function makeKolam(): Kolam {
  for (let attempt = 0; attempt < 400; attempt++) {
    const [cols, rows] = GRIDS[Math.floor(Math.random() * GRIDS.length)];
    const w = cols * 2,
      h = rows * 2;
    // Mirrors go on interior points between two dots. Each one is copied
    // into all four quarters, so the kolam is symmetric left-right and
    // top-bottom, like a hand-drawn one.
    const mirrors = new Map<string, "v" | "h">();
    const density = 0.2 + Math.random() * 0.3;
    for (let x = 1; x <= w / 2; x++)
      for (let y = 1; y <= h / 2; y++)
        if ((x + y) % 2 === 1 && Math.random() < density) {
          const kind = Math.random() < 0.5 ? "v" : "h";
          for (const [mx, my] of [[x, y], [w - x, y], [x, h - y], [w - x, h - y]]) mirrors.set(`${mx},${my}`, kind);
        }
    const pts = trace(w, h, mirrors);
    if (pts) return { w, h, dots: dotsFor(cols, rows), d: smooth(pts) };
  }
  // Fallback: no mirrors on a 4 x 3 grid is always a single loop.
  return { w: 8, h: 6, dots: dotsFor(4, 3), d: smooth(trace(8, 6, new Map())!) };
}

/* ------------------------------------------------------------------ */
/* Timing                                                              */
/* ------------------------------------------------------------------ */

const DOTS_MS = 450; // dots appear
const DRAW_MS = 1600; // the line draws itself
const HOLD_MS = 350; // a beat to look at it
const LIFT_MS = 800; // the screen slides up
const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";
const INTRO_KEY = "kolam-intro-seen";

const GATE = `<script>try{var q=new URLSearchParams(location.search).has("intro");var r=matchMedia("(prefers-reduced-motion: reduce)").matches;document.documentElement.dataset.intro=!r&&(q||!localStorage.getItem("${INTRO_KEY}"))?"show":"seen"}catch(e){document.documentElement.dataset.intro="seen"}</script>`;

/**
 * First-visit intro: a freshly generated kolam draws itself on a cream
 * screen, then the screen slides up to show the page. Plays once per
 * browser (add ?intro to the URL to see it again, a different kolam each
 * time). Click to skip. Skipped entirely for reduced motion.
 *
 * A tiny inline script (GATE) runs while the HTML is parsed, before first
 * paint, and sets html[data-intro]. CSS hides the overlay unless it says
 * "show", so returning visitors never see it flash. It's injected as HTML,
 * so it runs from the server-rendered page and React never re-runs it.
 */
export function KolamIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const [gone, setGone] = useState(false);
  // Random, so it's made on the client only (the server can't match it).
  const [kolam, setKolam] = useState<Kolam | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const done = () => {
      root.dataset.intro = "seen";
      setGone(true);
      window.dispatchEvent(new Event("intro-done"));
    };
    if (root.dataset.intro !== "show") return done();

    try {
      localStorage.setItem(INTRO_KEY, "1");
    } catch {}
    setKolam(makeKolam());

    const el = ref.current!;
    let t = 0;
    const lift = () => {
      clearTimeout(t);
      const a = el.animate([{ transform: "translateY(0)" }, { transform: "translateY(-100%)" }], {
        duration: LIFT_MS,
        easing: EASE,
        fill: "forwards",
      });
      a.onfinish = done;
    };
    t = window.setTimeout(lift, DOTS_MS + DRAW_MS + HOLD_MS);
    el.addEventListener("click", lift, { once: true });
    return () => clearTimeout(t);
  }, []);

  // Dash the line by its real length, so it draws whole and closes cleanly.
  useEffect(() => {
    const line = lineRef.current;
    if (line) line.style.setProperty("--len", String(Math.ceil(line.getTotalLength()) + 1));
  }, [kolam]);

  if (gone) return null;

  return (
    <>
      <div hidden suppressHydrationWarning dangerouslySetInnerHTML={{ __html: GATE }} />
      <div
        ref={ref}
        data-intro-overlay
        aria-hidden
        className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-background"
      >
        {kolam && (
          <svg
            viewBox={`-1.4 -1.4 ${kolam.w + 2.8} ${kolam.h + 2.8}`}
            className="h-52 w-52 overflow-visible sm:h-60 sm:w-60"
          >
            {kolam.dots.map(([cx, cy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={0.13}
                className="kolam-dot fill-foreground/70"
                style={{ animationDelay: `${(i * DOTS_MS) / kolam.dots.length}ms` }}
              />
            ))}
            <path
              ref={lineRef}
              d={kolam.d}
              className="kolam-line fill-none stroke-[hsl(var(--accent-ink))]"
              style={{ animationDelay: `${DOTS_MS}ms`, animationDuration: `${DRAW_MS}ms` }}
              strokeWidth={0.13}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </>
  );
}
