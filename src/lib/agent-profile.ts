import { ALONG, BEFORE, BUILT, INTERNSHIPS, MOMENTS, NOW, READS, WHO } from "@/data/home-content";
import { DATA } from "@/data/resume";

/**
 * The homepage as plain Markdown, for AI agents and anything else that
 * would rather read text than HTML. Served at /llms.txt (see the
 * llms.txt convention) and built from the same data as the page, so the
 * two never drift apart.
 */

const SITE = DATA.url;

/** **bold** → bold, [text](url) → text (url): keep links, drop markup. */
const plain = (s: string) => s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)");

type Role = { name: string; role: string; note: string; href: string; dates: string; details: string[] };
const role = (w: Role) =>
  [`### ${w.name}: ${w.role} (${w.dates})`, w.href, "", `${plain(w.note)}.`, "", ...w.details.map((d) => `- ${plain(d)}`)].join("\n");

export function agentProfile() {
  const socials = Object.entries(DATA.contact.social).map(([name, { url }]) => `- ${name}: ${url}`);

  return [
    `# ${DATA.name}`,
    "",
    `> Founder from Chennai, India. Co-founder & CEO of Vakyam AI (${NOW.href}), building natural, expressive and affordable text-to-speech (TTS) models for Indian languages. Previously co-founded Recruitr AI, an AI hiring platform. Emergent Ventures fellow.`,
    "",
    `Website: ${SITE}`,
    `Location: Chennai, Tamil Nadu, India`,
    "",
    "## Who I am",
    "",
    ...WHO.map(plain),
    "",
    "## How I got here",
    "",
    ...MOMENTS.map((m) => `- ${plain(m)}`),
    "",
    "## Now",
    "",
    role(NOW),
    "",
    "## Before",
    "",
    ...[...BEFORE, ...INTERNSHIPS].flatMap((w) => [role(w), ""]),
    "## Things I built for fun",
    "",
    ...BUILT.map((b) => `- ${b.name}: ${b.note}`),
    "",
    "## Along the way",
    "",
    ...ALONG.map((a) => `- ${a.name}: ${a.note}${a.href ? ` (${a.href})` : ""}`),
    "",
    "## Stuff that stuck with me",
    "",
    ...READS.map((r) => `- ${r.name}${r.by ? ` by ${r.by}` : ""} (${r.kind}): ${r.note} ${r.href}`),
    "",
    "More films: https://letterboxd.com/aadhithyad/",
    "",
    "## Links",
    "",
    ...socials,
    "",
  ].join("\n");
}

/** schema.org Person, embedded in every page as JSON-LD. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: SITE,
    image: `${SITE}/me2.jpg`,
    email: `mailto:${DATA.contact.email}`,
    description: DATA.description,
    jobTitle: "Co-founder & CEO",
    worksFor: { "@type": "Organization", name: "Vakyam AI", url: NOW.href },
    homeLocation: { "@type": "Place", name: "Chennai, Tamil Nadu, India" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "VIT Chennai" },
    award: ["Emergent Ventures India grantee, 13th cohort (2025)"],
    // Third-party confirmation that agents and search engines can follow.
    subjectOf: {
      "@type": "Article",
      name: "Emergent Ventures India, 13th cohort",
      url: "https://marginalrevolution.com/marginalrevolution/2025/11/emergent-ventures-india-13th-cohort.html",
      author: { "@type": "Person", name: "Tyler Cowen" },
      datePublished: "2025-11-26",
    },
    knowsAbout: ["Text-to-speech", "Speech AI", "Indian languages", "Machine learning", "Startups", "3D reconstruction"],
    sameAs: [...Object.values(DATA.contact.social).map((s) => s.url), "https://letterboxd.com/aadhithyad/"],
  };
}
