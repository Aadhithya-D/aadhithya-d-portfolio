"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { DATA } from "@/data/resume";
import { Crow } from "./crow";
import { Blossoms, Marina } from "./scenery";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const WHO = [
  "I like tech and building cool things that actually make an impact.",
  "Right now I'm working on Vakyam AI. Outside of that, I love cinema and books, and I even made a short film a long time back.",
];

// Hidden for now; flip to bring the moments list back.
const SHOW_MOMENTS = true;

// Moments I felt most alive. **bold** marks the bit that matters.
const MOMENTS = [
  "Took apart an RC car I got as a gift and turned its parts into a **motorboat** as a kid.",
  "Spent a whole summer flashing custom ROMs onto my old tablet just to get **Google Assistant** on it (voice AI obsession began here).",
  "Was the **first rank holder in Computer Science** in high school.",
  "Co-founded **Recruitr AI**, scaled it to customers across the **US, Canada and India**, and screened **500+ candidates**. Along the way, became an **Emergent Ventures fellow** and spent **four months at The Residency**.",
  "Got **Vakyam AI** incubated at the **IIT Madras Incubation Cell** with a **seed grant**, and launched **Raaga V1**, our own TTS model for Indian languages, in **July 2026**.",
];

/** Turns **this** into bold text. */
function withBold(text: string) {
  return text.split("**").map((part, i) => (i % 2 ? <b key={i}>{part}</b> : part));
}

const BEFORE = [
  {
    name: "Recruitr AI",
    role: "Co-founder & CEO",
    note: "An AI hiring platform built around an AI video interviewer, with customers across the US, Canada and India",
    logo: "/recruitrai.png",
    href: "https://recruitrai.com/",
    when: "2024–25",
    dates: "Jan 2024 – Jul 2025",
    details: [
      "Built an AI hiring platform from scratch with Steve Aldrin: an AI video interviewer, plus tools to find the right candidates.",
      "Our first paying customer, a US company, signed 2 days after launch. We got customers across the US, Canada and India.",
      "The AI interviewer screened 500+ candidates.",
      "Did whatever the company needed that week: engineering, sales, marketing, support. Backed by Emergent Ventures.",
    ],
  },
  {
    name: "FLSmidth",
    role: "R&D intern",
    note: "Built an iPhone app for 3D reconstruction of mining mills and automated wear-and-tear analysis report generation",
    logo: "/flsmidth.jpg",
    href: "https://www.flsmidth.com/",
    when: "2023",
    dates: "Aug – Nov 2023",
    details: [
      "FLSmidth builds equipment for the mining industry. Checking how worn a mill is used to mean slow, manual reports.",
      "Led an iPhone app (SwiftUI) that scans a mill in 3D with LiDAR and photogrammetry, and a desktop app (Flutter) that turns those scans into reports on its own.",
      "ML models measure the wear straight from the 3D scan, all running on Google Cloud.",
      "Report time dropped by 90%, and the work became an international patent filing.",
    ],
  },
  {
    name: "Ford",
    role: "Software intern",
    note: "Worked on the Android apps drivers use, and made Ford's broadcasts to drivers 7x faster",
    logo: "/ford_motor_company_logo.jpeg",
    href: "https://www.ford.com/",
    when: "2023",
    dates: "Aug – Oct 2023",
    details: [
      "Worked with the Android team on the apps drivers use.",
      "Rebuilt how broadcasts reach drivers with gRPC streaming, Google Pub/Sub and Spring Boot. They got about 7x faster.",
      "Also shipped UI work in Jetpack Compose and deep links from notifications.",
      "Helped pick the ML models that decide which drivers get which broadcast.",
    ],
  },
  {
    name: "Bhai AR",
    role: "SDE intern",
    note: "Built two Flutter news apps, and shipped AiBlocks, an AI image app used by 15 NFT projects",
    logo: "/bhai_logo.jpeg",
    href: "https://www.bhai.tech/",
    when: "2023",
    dates: "Feb – Mar 2023",
    details: [
      "Built two Flutter apps: a news aggregator for North America and an app for submitting news.",
      "Wrote a cache layer that made images and videos load 80% faster.",
      "Shipped AiBlocks, an AI image generator that could mint its images as NFTs. 15 NFT projects used it.",
    ],
  },
];

const BUILT = [
  {
    name: "Farm OS",
    note: "Runs a relative's farm, Raspberry Pi elephant alarm included",
    sticker: "/stickers/farm.webp",
  },
  {
    name: "FitPal",
    note: "A fitness coach you just chat with, meals and all",
    sticker: "/stickers/fitpal.webp",
  },
  { name: "RoboGPT", note: "A robot arm you can talk to", sticker: "/stickers/robot.webp" },
  { name: "FalconSight", note: "A drone that spots people in trouble", sticker: "/stickers/drone.webp" },
  { name: "FitNut", note: "Counts your reps through the camera", sticker: "/stickers/fitnut.webp" },
  { name: "Drippy AI", note: "An AI stylist for your wardrobe", sticker: "/stickers/drippy.webp" },
]

const ALONG = [
  { name: "Emergent Ventures", note: "Fellow, 2025", href: "https://www.mercatus.org/emergent-ventures" },
  { name: "IIT Madras Incubation Cell", note: "Vakyam AI, seed grant" },
  { name: "The Residency", note: "Feb – May 2025", href: "https://www.livetheresidency.com/" },
  { name: "Buildspace", note: "s5", href: "https://buildspace.so" },
  { name: "VIT Chennai", note: "B.Tech CSE, 2021–25", href: "https://chennai.vit.ac.in/" },
];

const SHOW_READS = false;

// A film, a book, a talk and a pile of essays I keep going back to.
const READS = [
  {
    name: "Anbe Sivam",
    by: "Kamal Haasan",
    kind: "film",
    href: "https://en.wikipedia.org/wiki/Anbe_Sivam",
    note: "A road trip that turns into a film about kindness.",
  },
  {
    name: "Deep Work",
    by: "Cal Newport",
    kind: "book",
    href: "https://calnewport.com/deep-work-rules-for-focused-success-in-a-distracted-world/",
    note: "On the focused work that actually moves things forward.",
  },
  {
    name: "The power of believing that you can improve",
    by: "Carol Dweck",
    kind: "talk",
    href: "https://www.youtube.com/watch?v=_X0mgOOSpLU",
    note: "Why ability grows when you treat it as something you can build.",
  },
  {
    name: "Paul Graham's essays",
    kind: "essays",
    href: "https://paulgraham.com/articles.html",
    note: "On startups, and on how to think clearly about almost anything.",
  },
];

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

type Work = (typeof BEFORE)[number];

/** A job you can open up for the details. */
function WorkRow({ work: w }: { work: Work }) {
  const [open, setOpen] = useState(false);
  return (
    <li className={`-mx-3 rounded-xl transition-colors ${open ? "bg-muted/70" : "hover:bg-muted"}`}>
      {/* The whole row toggles; the company name is its own link. */}
      <div
        onClick={() => setOpen((o) => !o)}
        className="flex w-full cursor-pointer items-center gap-4 px-3 py-2.5 text-left"
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
          <div className={`text-sm text-muted-foreground ${open ? "" : "line-clamp-2"}`}>{w.note}</div>
        </div>
        <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">{w.when}</span>
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
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-4 pl-[3.75rem] pr-3">
              <ul className="space-y-2 text-sm leading-relaxed text-foreground/80">
                {w.details.map((d) => (
                  <li key={d} className="relative pl-4 before:absolute before:left-0 before:top-[0.65em] before:size-1 before:rounded-full before:bg-accent-ink/70">
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex gap-4 font-mono text-[11px] text-muted-foreground">
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
          </motion.div>
        )}
      </AnimatePresence>
    </li>
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
              className="mb-6 font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground"
            >
              Chennai, India
            </motion.p>
            <h1 className="font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-5xl">
              Hi, I&apos;m <span className="text-accent-ink">Aadhithya</span>.
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
: natural, expressive and affordable TTS for Indian
              languages.
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
              <Label>Moments I felt most alive</Label>
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
              </div>
              <div className="text-sm text-muted-foreground">
                Co-founder & CEO · Incubated at IIT Madras
              </div>
            </div>
            <span className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </motion.section>

        {/* Before */}
        <motion.section {...fadeUp} className="mt-8">
          <Label>Before</Label>
          <ul className="space-y-1">
            {BEFORE.map((w) => (
              <WorkRow key={w.name} work={w} />
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
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">{a.note}</span>
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
              <ul className="space-y-1">
                {READS.map((r) => (
                  <li key={r.name}>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group -mx-3 block rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
                    >
                      <div className="text-[15px]">
                        <span className="font-medium group-hover:text-accent-ink">{r.name}</span>
                        {r.by && <span className="text-muted-foreground"> · {r.by}</span>}
                        <span className="ml-2 font-mono text-[10px] tracking-wider uppercase text-muted-foreground/70">
                          {r.kind}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">{r.note}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.section>
            <Rule />
          </>
        )}

        {/* Say hi */}
        <motion.footer {...fadeUp} className="space-y-5">
          <p className="font-serif text-3xl leading-tight">
            Building something with voice?{" "}
            <a href={`mailto:${DATA.contact.email}`} className="squiggle italic text-accent-ink">
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
          <p className="pt-6 font-mono text-[11px] text-muted-foreground/70">
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
