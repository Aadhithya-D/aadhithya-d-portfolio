"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { DATA } from "@/data/resume";
import { ALONG, BEFORE, BUILT, INTERNSHIPS, MOMENTS, NOW, READS, WHO } from "@/data/home-content";
import { Crow } from "./crow";
import { KineticText } from "./kinetic-text";
import { KolamIntro } from "./kolam-intro";
import { Blossoms, Marina } from "./scenery";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

// Hidden for now; flip to bring the moments list back.
const SHOW_MOMENTS = true;

/** Turns **this** into bold text and [this](url) into an underlined link. */
function withBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    if (part.startsWith("**")) return <b key={i}>{part.slice(2, -2)}</b>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link)
      return (
        <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer" className="squiggle font-medium text-foreground">
          {link[1]}
        </a>
      );
    return part;
  });
}

const SHOW_READS = true;

/* ------------------------------------------------------------------ */
/* Bits                                                                */
/* ------------------------------------------------------------------ */

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

type Read = (typeof READS)[number];

/** A small card. On hover, the poster (and the note) pops up like a sticker. */
function ReadCard({ read: r, i }: { read: Read; i: number }) {
  const tilt = i % 2 ? 5 : -5;
  return (
    <li className="group relative">
      <a
        href={r.href}
        target="_blank"
        rel="noopener noreferrer"
        title={r.note}
        className="flex h-full flex-col rounded-xl border border-border/80 px-3 py-2.5 transition-colors hover:border-accent-ink/40 hover:bg-muted"
      >
        <span className="text-[15px] font-medium leading-snug group-hover:text-accent-ink">{r.name}</span>
        <span className="mt-0.5 text-xs text-muted-foreground">
          {r.by ? `${r.by} · ` : ""}
          {r.kind}
        </span>
        {/* No hover on touch screens, so the note just shows there */}
        <span className="mt-1.5 text-xs leading-snug text-muted-foreground sm:hidden">{r.note}</span>
      </a>
      {/* Hover pop: poster + note, desktop only */}
      <div
        aria-hidden
        style={{ "--tilt": `${tilt}deg` } as React.CSSProperties}
        className="pointer-events-none absolute bottom-[calc(100%-0.5rem)] left-1/2 z-20 hidden w-40 origin-bottom -translate-x-1/2 translate-y-2 scale-90 rotate-0 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-[var(--tilt)] group-hover:opacity-100 sm:block"
      >
        <div className="rounded-xl border bg-popover p-1.5 shadow-[0_14px_30px_-12px_rgba(40,30,10,0.35)]">
          {r.img && (
            <Image
              src={r.img}
              alt=""
              width={r.wide ? 320 : 240}
              height={r.wide ? 180 : 360}
              className={`w-full rounded-lg object-cover ${r.wide ? "aspect-video" : "aspect-[2/3]"}`}
            />
          )}
          <p className="px-1.5 pb-1 pt-2 text-xs leading-snug text-foreground/80">{r.note}</p>
        </div>
      </div>
    </li>
  );
}

type Work = (typeof BEFORE)[number];

/** A job you can open up for the details. */
function WorkRow({ work: w, compact = false }: { work: Work; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <li className={`-mx-3 rounded-xl transition-colors ${open ? "bg-muted/70" : "hover:bg-muted"}`}>
      {/* The whole row toggles; the company name is its own link. */}
      <div
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full cursor-pointer items-center px-3 text-left ${compact ? "gap-3 py-1.5" : "gap-4 py-2.5"}`}
      >
        <Image
          src={w.logo}
          alt=""
          width={32}
          height={32}
          className={`rounded-full border bg-white object-contain ${compact ? "size-6" : "size-8"}`}
        />
        <div className="min-w-0 flex-1">
          <div className="text-[15px] font-medium">
            <a
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="underline decoration-foreground/20 underline-offset-4 transition-colors hover:text-accent-ink hover:decoration-accent-ink"
            >
              {w.name}
            </a>{" "}
            <span className="font-normal text-muted-foreground">· {w.role}</span>
          </div>
          <div className={`text-sm text-muted-foreground ${open ? "" : compact ? "sr-only" : "line-clamp-2"}`}>{w.note}</div>
        </div>
        <span className="t-meta shrink-0 text-xs text-muted-foreground">{w.when}</span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((o) => !o);
          }}
          aria-expanded={open}
          aria-label={`${open ? "Hide" : "Show"} details for ${w.name}`}
          className="-m-1 shrink-0 p-1 text-lg leading-none text-muted-foreground"
        >
          <motion.span animate={{ rotate: open ? 45 : 0 }} className="block">
            +
          </motion.span>
        </button>
      </div>
      {/* Always in the HTML (so search engines and AI agents can read it),
          collapsed with a 0fr grid row until opened. inert keeps the links
          out of the tab order while it's shut. */}
      <div
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className={`pb-4 pr-3 ${compact ? "pl-[3rem]" : "pl-[3.75rem]"}`}>
            <ul className="space-y-2 text-sm leading-relaxed text-foreground/80">
              {w.details.map((d) => (
                <li key={d} className="relative pl-4 before:absolute before:left-0 before:top-[0.65em] before:size-1 before:rounded-full before:bg-accent-ink/70 [&_b]:font-medium [&_b]:text-foreground">
                  {withBold(d)}
                </li>
              ))}
            </ul>
            <div className="t-meta mt-3 flex gap-4 text-[11px] text-muted-foreground">
              <span>{w.dates}</span>
              <a
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {new URL(w.href).hostname.replace("www.", "")} ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="t-label mb-4 text-muted-foreground">
      {children}
    </h2>
  );
}

function Rule() {
  return <hr className="my-9 border-t border-dashed border-border" />;
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
      <KolamIntro />
      <Blossoms corner="garland" />
      <Crow />
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

      <main className="relative mx-auto w-full max-w-[36rem] px-6 pb-48 pt-12 sm:pb-96 sm:pt-16">
        {/* Hero */}
        <section className="flex items-start justify-between gap-6">
          <div className="min-w-0 flex-1">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="t-label mb-6 text-muted-foreground"
            >
              Chennai, India
            </motion.p>
            <h1 className="t-display t-display-size leading-[1.05] sm:whitespace-nowrap">
              Hi, I&apos;m{" "}
              <span className="whitespace-nowrap">
                <KineticText text="Aadhithya D" className="text-accent-ink" />.
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="mt-5 max-w-sm text-[17px] leading-relaxed text-foreground/80"
            >
              Building{" "}
              <a
                href="https://vakyam.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="squiggle whitespace-nowrap font-medium text-foreground"
              >
                Vakyam AI
              </a>
              : natural, expressive and affordable TTS for Indian languages.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...fadeUp.transition, delay: 0.25 }}
              className="mt-5 flex items-center gap-4"
            >
              {Object.entries(socials).map(([name, { url, icon: Icon }]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="text-muted-foreground transition-colors hover:text-accent-ink"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </motion.div>
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

        {/* Who I am */}
        <motion.section {...fadeUp}>
          <Label>Who I am</Label>
          <div className="space-y-3 text-[15px] leading-relaxed text-foreground/80">
            {WHO.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </motion.section>

        {SHOW_MOMENTS && (
          <>
            {/* Moments */}
            <motion.section {...fadeUp} className="mt-8">
              <Label>How I got here</Label>
              <ul className="space-y-3">
                {MOMENTS.map((line) => (
                  <li
                    key={line}
                    className="relative pl-5 text-[15px] leading-relaxed text-foreground/80 before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-accent-ink/70 [&_b]:font-medium [&_b]:text-foreground"
                  >
                    {withBold(line)}
                  </li>
                ))}
              </ul>
            </motion.section>
          </>
        )}

        <Rule />

        {/* Now */}
        <motion.section {...fadeUp}>
          <Label>Now</Label>
          <ul>
            <WorkRow work={NOW} />
          </ul>
        </motion.section>

        {/* Before */}
        <motion.section {...fadeUp} className="mt-8">
          <Label>Before</Label>
          <ul className="space-y-1">
            {BEFORE.map((w) => (
              <WorkRow key={w.name} work={w} />
            ))}
          </ul>
          <ul className="mt-2">
            {INTERNSHIPS.map((w) => (
              <WorkRow key={w.name} work={w} compact />
            ))}
          </ul>
        </motion.section>

        <Rule />

        {/* Built */}
        <motion.section {...fadeUp}>
          <Label>Things I built for fun</Label>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
            {BUILT.map((p) => (
              <li
                key={p.name}
                className="group -mx-3 flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
              >
                  <div className="min-w-0 flex-1">
                    <div className="text-[15px] font-medium">{p.name}</div>
                    <div className="text-sm text-muted-foreground">{p.note}</div>
                  </div>
                  {p.sticker && (
                    <Image
                      src={p.sticker}
                      alt=""
                      width={120}
                      height={120}
                      className="h-12 w-12 shrink-0 -rotate-6 object-contain opacity-0 transition-all duration-300 group-hover:rotate-0 group-hover:opacity-100 max-sm:opacity-100"
                    />
                  )}
              </li>
            ))}
          </ul>
        </motion.section>

        <Rule />

        {/* Along the way */}
        <motion.section {...fadeUp}>
          <Label>Along the way</Label>
          <ul className="text-[15px]">
            {ALONG.map((a) => {
              const row = (
                <>
                  <span className={a.href ? "font-medium group-hover:text-accent-ink" : "font-medium"}>
                    {a.name}
                  </span>
                  <span className="mx-3 mb-[0.3em] flex-1 border-b border-dotted border-foreground/25" />
                  <span className="t-meta shrink-0 text-xs text-muted-foreground">{a.note}</span>
                </>
              );
              const cls = "group flex items-end py-1.5";
              return (
                <li key={a.name}>
                  {a.href ? (
                    <a href={a.href} target="_blank" rel="noopener noreferrer" className={cls}>
                      {row}
                    </a>
                  ) : (
                    <div className={cls}>{row}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </motion.section>

        <Rule />

        {/* Reads: hidden for now, flip SHOW_READS to bring it back */}
        {SHOW_READS && (
          <>
            {/* Reads */}
            <motion.section {...fadeUp}>
              <Label>Stuff that stuck with me</Label>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {READS.map((r, i) => (
                  <ReadCard key={r.name} read={r} i={i} />
                ))}
              </ul>
              <a
                href="https://letterboxd.com/aadhithyad/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-muted-foreground transition-colors hover:text-accent-ink"
              >
                More films on Letterboxd ↗
              </a>
            </motion.section>
            <Rule />
          </>
        )}

        {/* Say hi */}
        <motion.footer {...fadeUp} className="space-y-5">
          <p className="t-display t-sign leading-tight sm:whitespace-nowrap">
            Building something with voice?{" "}
            <a href={`mailto:${DATA.contact.email}`} className="squiggle text-accent-ink">
              Say vanakkam.
            </a>
          </p>
          <p className="text-[15px] text-foreground/80">
            Or skip the small talk and write to{" "}
            <a
              href={`mailto:${DATA.contact.email}`}
              className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent-ink"
            >
              {DATA.contact.email}
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
          <p className="t-meta pt-6 text-[11px] text-muted-foreground/70">
            © {new Date().getFullYear()} {DATA.name}
            <span className="hidden xl:inline"> · psst, the stickers move</span>
            <span className="hidden lg:inline">
              {" "}
              · crow call by{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:House_crow_call_recorded_in_October_2022_at_Haripur,_Sangli.wav"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-2 hover:text-foreground"
              >
                Sharadapte
              </a>{" "}
              (CC BY-SA 4.0)
            </span>
          </p>
        </motion.footer>
      </main>
      <Marina scene="terrace" className="absolute inset-x-0 bottom-0" />
    </div>
  );
}
