"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./petals.module.css";

/* Painted backdrop: a corner ornament up top, petals drifting down, and a
   Chennai scene fading into the bottom of the page. Art lives in /public/scenery. */

const CORNERS = {
  kolam: { src: "/scenery/corner-kolam.webp", width: 887, height: 857 },
  garland: { src: "/scenery/corner-garland.webp", width: 800, height: 1020 },
};

const SCENES = {
  marina: { src: "/scenery/bottom-marina.webp", alt: "Marina Beach at dusk" },
  terrace: { src: "/scenery/bottom-terrace.webp", alt: "A Chennai rooftop at golden hour" },
};

export type Corner = keyof typeof CORNERS;
export type Scene = keyof typeof SCENES;

function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r2 = (n: number) => Math.round(n * 100) / 100;

const PETALS = 20;
const HERO_PETALS = 6; // short, steep falls across the first screen
const REACH = 70; // px around the cursor that pushes petals
const PUSH = 0.55;
const MAX_PUSH = 16; // px a petal can be pushed off its path

function Petals() {
  // Fixed seed so server and client agree on every petal.
  const rand = rng(21);
  const wraps = useRef<(HTMLSpanElement | null)[]>([]); // nudged by the cursor
  const falls = useRef<(HTMLImageElement | null)[]>([]); // where each petal actually is

  // Petals drift out of the cursor's way, then settle back into their fall.
  useEffect(() => {
    const mouse = { x: -9999, y: -9999 };
    const state = Array.from({ length: PETALS }, () => ({ x: 0, y: 0, vx: 0, vy: 0 }));
    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };
    let raf = 0;
    const tick = () => {
      wraps.current.forEach((el, i) => {
        const fall = falls.current[i];
        if (!el || !fall) return;
        const p = state[i];
        const r = fall.getBoundingClientRect();
        const dx = r.left + r.width / 2 - mouse.x;
        const dy = r.top + r.height / 2 - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < REACH && d > 0.01) {
          const f = (1 - d / REACH) * PUSH;
          p.vx += (dx / d) * f;
          p.vy += (dy / d) * f;
        }
        p.vx = (p.vx - p.x * 0.008) * 0.93; // spring home, with drag
        p.vy = (p.vy - p.y * 0.008) * 0.93;
        p.x += p.vx;
        p.y += p.vy;
        const far = Math.hypot(p.x, p.y);
        if (far > MAX_PUSH) {
          p.x *= MAX_PUSH / far; // a nudge, not a shove
          p.y *= MAX_PUSH / far;
        }
        el.style.transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0) rotate(${(p.x * 0.6).toFixed(1)}deg)`;
      });
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden" aria-hidden>
      {Array.from({ length: PETALS }, (_, i) => {
        const size = 12 + rand() * 10;
        // One duration and offset per petal, shared by the drop and the sway.
        // The first few blow across the top of the page and fade out within the first
        // screen, so there are petals by the intro on load. The rest fall the whole page.
        const hero = i < HERO_PETALS;
        const timing = hero
          ? { animationDuration: `${r2(13 + rand() * 6)}s`, animationDelay: `-${r2(rand() * 19)}s` }
          : { animationDuration: `${r2(24 + rand() * 14)}s`, animationDelay: `-${r2(rand() * 38)}s` };
        // Most drift from the top right towards the bottom left; a few fall straighter.
        const dx = hero ? -50 - rand() * 25 : rand() < 0.2 ? -10 - rand() * 10 : -45 - rand() * 40;
        return (
          <span
            key={i}
            ref={(el) => {
              wraps.current[i] = el;
            }}
            className={`${styles.drop} absolute will-change-transform`}
            style={
              {
                // Start somewhere inside the garland, top-right.
                right: `${Math.round(20 + rand() * 260)}px`,
                "--y0": `${Math.round(40 + rand() * 300)}px`,
                ...(hero ? { "--y1": `${Math.round(700 + rand() * 250)}px` } : {}),
                width: size,
                ...timing,
              } as React.CSSProperties
            }
          >
            {/* Outer layer drops down the page and gets nudged by the cursor; inner layer sways and spins. */}
            <Image
              ref={(el) => {
                falls.current[i] = el;
              }}
              src={`/scenery/petal-${i % 6}.webp`}
              alt=""
              width={64}
              height={64}
              className={`${styles.petal} block h-auto w-full`}
              style={
                {
                  ...timing,
                  "--dx": `${r2(dx)}vw`,
                  "--spin": `${Math.round(180 + rand() * 540)}deg`,
                } as React.CSSProperties
              }
            />
          </span>
        );
      })}
    </div>
  );
}

/** Corner ornament in the top-right of the first screen, with petals falling the length of the page. */
export function Blossoms({ corner = "kolam" }: { corner?: Corner }) {
  const c = CORNERS[corner];
  return (
    <div className="hidden lg:block" aria-hidden>
      {/* The ornament scrolls away with the first screen... */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-screen overflow-hidden">
        <div className="absolute right-0 top-0 w-[300px] 2xl:w-[360px]">
          <Image
            src={c.src}
            alt=""
            width={c.width}
            height={c.height}
            priority
            className={`h-auto w-full ${corner === "kolam" ? "kolam-draw" : ""}`}
          />
        </div>
      </div>
      {/* ...while the petals fall the whole length of the page. */}
      <Petals />
    </div>
  );
}

/** A painted Chennai scene, faded into the bottom of the page. */
export function Marina({ scene = "marina", className = "" }: { scene?: Scene; className?: string }) {
  const s = SCENES[scene];
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden>
      <Image
        src={s.src}
        alt=""
        width={2400}
        height={900}
        sizes="100vw"
        className="mx-auto h-auto min-h-[220px] w-full max-w-[2000px] object-cover object-bottom"
      />
    </div>
  );
}
