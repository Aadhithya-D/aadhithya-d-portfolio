"use client";

import { AnimatePresence, motion, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* A Chennai house crow on a power line. Its head follows your cursor, it blinks
   now and then, and it caws if you poke it. Art lives in /public/crow/v2. */

// Layout of the art, in body-image pixels (see public/crow/v2).
const ART = {
  bodyW: 1312,
  bodyH: 1199,
  headSize: 945, // square head canvas, drawn at this size
  headX: 765, // head centre on the body image
  headY: 405,
  feetY: 1050, // where the toes grip the wire
  feetX: 845, // middle of the feet
};

const HEADS = {
  open: "/crow/v2/crow-head.webp",
  blink: "/crow/v2/crow-head-blink.webp",
  caw: "/crow/v2/crow-head-caw.webp",
};

const WIDTH = 100; // rendered body width in px
const MAX_TILT = 32;

// The wire: dips in from the left edge and climbs off the top of the page.
const WIRE = "M -20 76 Q 230 148 560 -40";
const PERCH = { x: 210, y: 90 }; // a point on the wire where the crow sits

export function Crow() {
  const reduce = useReducedMotion();
  const headRef = useRef<HTMLDivElement>(null);
  const [facingLeft, setFacingLeft] = useState(false);
  const [face, setFace] = useState<"open" | "blink" | "caw">("open");
  const [hop, setHop] = useState(0);
  const tilt = useSpring(0, { stiffness: 140, damping: 16 });

  const scale = WIDTH / ART.bodyW;

  // Follow the cursor.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = headRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const left = dx < -12;
      setFacingLeft(left);
      // Angle relative to the direction the crow is facing.
      const deg = (Math.atan2(dy, Math.abs(dx)) * 180) / Math.PI;
      tilt.set(Math.max(-MAX_TILT, Math.min(MAX_TILT, deg)));
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [tilt]);

  // Blink every few seconds.
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const loop = () => {
      t = setTimeout(() => {
        setFace((f) => (f === "open" ? "blink" : f));
        setTimeout(() => setFace((f) => (f === "blink" ? "open" : f)), 140);
        loop();
      }, 2200 + Math.random() * 3200);
    };
    loop();
    return () => clearTimeout(t);
  }, []);

  const caw = () => {
    const a = kaa.current;
    if (a) {
      a.currentTime = 0;
      a.playbackRate = 0.92 + Math.random() * 0.16; // no two caws quite alike
      a.play().catch(() => {});
    }
    setFace("caw");
    setHop((h) => h + 1);
    setTimeout(() => setFace("open"), 650);
  };

  // A real house crow, recorded by Sharadapte in Sangli (CC BY-SA 4.0, Wikimedia Commons).
  const kaa = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    kaa.current = new Audio("/crow/kaa.mp3");
    kaa.current.preload = "auto";
    kaa.current.volume = 0.55;
  }, []);

  // Warm the cache so blinks and caws don't flicker on first use.
  useEffect(() => {
    Object.values(HEADS).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="pointer-events-none absolute left-0 top-0 hidden h-48 w-[560px] lg:block" aria-hidden>
      <svg viewBox="0 0 560 192" className="absolute inset-0 h-full w-full overflow-visible">
        <path d={WIRE} stroke="#3B342F" strokeWidth="1.6" fill="none" opacity="0.55" />
      </svg>

      <motion.button
        type="button"
        tabIndex={-1}
        onClick={caw}
        className="pointer-events-auto absolute cursor-pointer"
        style={{
          left: PERCH.x - ART.feetX * scale,
          top: PERCH.y - ART.feetY * scale,
          width: ART.bodyW * scale,
          height: ART.bodyH * scale,
          scaleX: facingLeft ? -1 : 1,
          transformOrigin: `${(ART.feetX / ART.bodyW) * 100}% 100%`,
        }}
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        key={hop}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/crow/v2/crow-body.webp" alt="" draggable={false} className="absolute inset-0 h-full w-full select-none" />
        <motion.div
          ref={headRef}
          className="absolute"
          style={{
            left: (ART.headX - ART.headSize / 2) * scale,
            top: (ART.headY - ART.headSize / 2) * scale,
            width: ART.headSize * scale,
            height: ART.headSize * scale,
            rotate: tilt,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HEADS[face]} alt="" draggable={false} className="h-full w-full select-none" />
        </motion.div>

        <AnimatePresence>
          {face === "caw" && (
            <motion.span
              initial={{ opacity: 0, y: 4, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute -top-2 left-[85%] whitespace-nowrap rounded-full border border-foreground/15 bg-background px-2 py-0.5 font-mono text-xs"
              style={{ scaleX: facingLeft ? -1 : 1 }}
            >
              kaa!
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
