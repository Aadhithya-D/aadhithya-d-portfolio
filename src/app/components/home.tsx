"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { DATA } from "@/data/resume";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

// Name in a few of the languages Vakyam speaks.
const NAMES = [
  { text: "Aadhithya", lang: "English" },
  { text: "ஆதித்யா", lang: "Tamil" },
  { text: "आदित्य", lang: "Hindi" },
  { text: "ఆదిత్య", lang: "Telugu" },
  { text: "ಆದಿತ್ಯ", lang: "Kannada" },
  { text: "ആദിത്യ", lang: "Malayalam" },
];

const BEFORE = [
  {
    name: "Recruitr AI",
    role: "Co-founder",
    note: "AI interviewer that screened 500+ candidates",
    logo: "/recruitrai.png",
    href: "https://recruitrai.com/",
    when: "2024–2025",
  },
  {
    name: "FLSmidth",
    role: "R&D intern",
    note: "LiDAR scanning for mining mills",
    logo: "/flsmidth.jpg",
    href: "https://www.flsmidth.com/",
    when: "2023",
  },
  {
    name: "Ford",
    role: "Software intern",
    note: "Android, gRPC streaming, 7x faster broadcasts",
    logo: "/ford_motor_company_logo.jpeg",
    href: "https://www.ford.com/",
    when: "2023",
  },
];

const BUILT = [
  { id: "robogpt", name: "RoboGPT", note: "A robot arm you can talk to", sticker: "/stickers/robot.webp" },
  { id: "falconsight", name: "FalconSight", note: "A drone that spots people in trouble", sticker: "/stickers/drone.webp" },
  { id: "fitnut", name: "FitNut", note: "Counts your reps through the camera" },
  { id: "drippy-ai", name: "Drippy AI", note: "An AI stylist for your wardrobe" },
];

const ALONG = [
  { name: "Emergent Ventures", note: "Grantee, 2025", href: "https://www.mercatus.org/emergent-ventures" },
  { name: "IIT Madras Incubation Cell", note: "Vakyam AI" },
  { name: "The Residency", note: "Founder residency, 2024–25", href: "https://www.livetheresidency.com/" },
  { name: "Buildspace", note: "s5", href: "https://buildspace.so" },
  { name: "VIT Chennai", note: "B.Tech CSE, 2021–25", href: "https://chennai.vit.ac.in/" },
];

/* ------------------------------------------------------------------ */
/* Bits                                                                */
/* ------------------------------------------------------------------ */

function CyclingName() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % NAMES.length), 2200);
    return () => clearInterval(t);
  }, [reduce]);

  const n = NAMES[i];
  return (
    <span className="relative inline-flex items-baseline">
      {/* Screen readers get the name once, not every tick */}
      <span className="sr-only">Aadhithya</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={n.text}
          aria-hidden
          initial={{ y: "0.35em", opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-0.35em", opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-accent-ink"
        >
          {n.text}
        </motion.span>
      </AnimatePresence>
      <span aria-hidden>.</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={n.lang}
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute left-full top-1 ml-1.5 whitespace-nowrap font-mono text-[10px] tracking-wider uppercase text-muted-foreground"
        >
          {n.lang}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/** A die-cut sticker you can pick up and drop anywhere. */
function Sticker({
  src,
  alt,
  size,
  rotate = 0,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  size: number;
  rotate?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      whileHover={{ rotate: rotate + (rotate >= 0 ? 6 : -6), scale: 1.06 }}
      whileDrag={{ scale: 1.12, rotate: 0, zIndex: 50, cursor: "grabbing" }}
      initial={{ rotate, scale: 0.6, opacity: 0 }}
      animate={{ rotate, scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`cursor-grab touch-none select-none drop-shadow-[0_6px_10px_rgba(40,30,10,0.14)] ${className}`}
      style={{ width: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size * 2}
        height={size * 2}
        draggable={false}
        priority={priority}
        className="pointer-events-none h-auto w-full"
      />
    </motion.div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
      {children}
    </h2>
  );
}

function Rule() {
  return <hr className="my-12 border-t border-dashed border-border" />;
}

const fadeUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const socials = DATA.contact.social;

  return (
    <div ref={pageRef} className="relative min-h-screen overflow-x-clip">
      {/* Margin stickers — desktop only, keep the column clean */}
      <div className="pointer-events-none absolute inset-0 mx-auto hidden max-w-5xl xl:block">
        <div className="pointer-events-auto absolute left-0 top-40">
          <Sticker src="/stickers/mic.webp" alt="Retro microphone sticker" size={96} rotate={-10} />
        </div>
        <div className="pointer-events-auto absolute right-0 top-[34rem]">
          <Sticker src="/stickers/cassette.webp" alt="Cassette tape sticker" size={120} rotate={8} />
        </div>
        <div className="pointer-events-auto absolute left-4 top-[62rem]">
          <Sticker src="/stickers/coffee.webp" alt="Coffee mug with a rocket sticker" size={88} rotate={-6} />
        </div>
      </div>

      <main className="relative mx-auto w-full max-w-[36rem] px-6 pb-16 pt-16 sm:pt-24">
        {/* Hero */}
        <section className="flex items-start justify-between gap-6">
          <div className="min-w-0 flex-1">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground"
            >
              Chennai, India
            </motion.p>
            <h1 className="font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-5xl">
              Hi, I&apos;m <CyclingName />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="mt-5 max-w-sm text-[17px] leading-relaxed text-foreground/80"
            >
              I&apos;m teaching computers to speak Indian languages the way we
              actually do, at{" "}
              <a
                href="https://vakyam.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="squiggle whitespace-nowrap font-medium text-foreground"
              >
                Vakyam AI
              </a>
              .
            </motion.p>
          </div>
          <Sticker
            src="/stickers/me.webp"
            alt="Sticker portrait of Aadhithya wearing headphones"
            size={132}
            rotate={4}
            priority
            className="mt-2 shrink-0 max-sm:!w-[92px]"
          />
        </section>

        <Rule />

        {/* Now */}
        <motion.section {...fadeUp}>
          <Label>Now</Label>
          <a
            href="https://vakyam.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group -mx-3 flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-muted"
          >
            <Image
              src="/vakyamai.jpeg"
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-full border object-cover"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 font-medium">
                Vakyam AI
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-ink opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent-ink" />
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Co-founder & CEO · Natural, affordable TTS for Indian languages
              </div>
            </div>
            <span className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </motion.section>

        {/* Before */}
        <motion.section {...fadeUp} className="mt-10">
          <Label>Before</Label>
          <ul className="space-y-1">
            {BEFORE.map((w) => (
              <li key={w.name}>
                <a
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 flex items-center gap-4 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
                >
                  <Image
                    src={w.logo}
                    alt=""
                    width={32}
                    height={32}
                    className="size-8 rounded-full border bg-white object-contain"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-[15px] font-medium">
                      {w.name}{" "}
                      <span className="font-normal text-muted-foreground">· {w.role}</span>
                    </div>
                    <div className="truncate text-sm text-muted-foreground">{w.note}</div>
                  </div>
                  <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                    {w.when}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.section>

        <Rule />

        {/* Built */}
        <motion.section {...fadeUp}>
          <Label>Things I built for fun</Label>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
            {BUILT.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/projects/${p.id}`}
                  className="group -mx-3 flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-[15px] font-medium group-hover:text-accent-ink">
                      {p.name}
                    </div>
                    <div className="text-sm text-muted-foreground">{p.note}</div>
                  </div>
                  {p.sticker && (
                    <Image
                      src={p.sticker}
                      alt=""
                      width={80}
                      height={80}
                      className="h-9 w-auto -rotate-6 opacity-0 transition-all duration-300 group-hover:rotate-0 group-hover:opacity-100 max-sm:opacity-100"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </motion.section>

        <Rule />

        {/* Along the way */}
        <motion.section {...fadeUp}>
          <Label>Along the way</Label>
          <ul className="flex flex-wrap gap-2">
            {ALONG.map((a) => {
              const inner = (
                <>
                  <span className="font-medium">{a.name}</span>
                  <span className="text-muted-foreground">{a.note}</span>
                </>
              );
              const cls =
                "inline-flex items-baseline gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors";
              return (
                <li key={a.name}>
                  {a.href ? (
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cls} hover:border-foreground/30 hover:bg-muted`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <span className={cls}>{inner}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </motion.section>

        <Rule />

        {/* Say hi */}
        <motion.footer {...fadeUp} className="space-y-5">
          <p className="font-serif text-3xl leading-tight">
            Building something with voice?{" "}
            <a href={`mailto:${DATA.contact.email}`} className="squiggle italic text-accent-ink">
              Say vanakkam.
            </a>
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {Object.entries(socials).map(([name, { url }]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {name}
              </a>
            ))}
          </div>
          <p className="pt-6 font-mono text-[11px] text-muted-foreground/70">
            © {new Date().getFullYear()} {DATA.name}
            <span className="hidden xl:inline"> · psst, the stickers move</span>
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
