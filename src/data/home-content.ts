// Everything the homepage says, in one place. home.tsx renders it, and
// /llms.txt turns it into plain text for AI agents, so both stay in sync.
// **bold** marks the bit that matters; [text](url) is a link.

export const WHO = [
  "I like tech, and I like building things that actually make an impact.",
  "Right now I'm working on Vakyam AI. Before that, I co-founded Recruitr AI.",
  "Outside of work, I love cinema, and I made a short film once. I'm also getting back into reading.",
];

export const MOMENTS = [
  "At 13, I spent a whole summer flashing custom ROMs onto my old tablet, just to get **Google Assistant** on it. Pure curiosity.",
  "At 19, I built 3D reconstruction and wear analysis for mining mills at FLSmidth. It cut report time by **90%** and became an **international patent filing**. I did two more internships that same year.",
  "At 20, I co-founded [Recruitr AI](https://www.recruitrai.com/). Our first paying customer, a US company, signed **2 days after launch**. After that came customers across the US, Canada and India.",
  "Along the way, I became an [Emergent Ventures](https://www.mercatus.org/emergent-ventures) fellow ([announced by Tyler Cowen](https://marginalrevolution.com/marginalrevolution/2025/11/emergent-ventures-india-13th-cohort.html), [EV profile](https://app.evindia.live/member/582929c7-1be9-4540-ba80-9c1abfec42be)) and spent four months at [The Residency](https://www.livetheresidency.com/).",
  "At 21, I got **Vakyam AI** into the [IIT Madras Incubation Cell](https://incubation.iitm.ac.in/) with a **seed grant**.",
  "At 22, we launched [Raaga V1](https://x.com/AadhithyaD_/status/2072176392142504445), our own TTS model for Indian languages. The launch got **400k+ views**.",
];

export const NOW = {
  name: "Vakyam AI",
  role: "Co-founder & CEO",
  note: "Our own TTS models for 8 Indian languages. Under 150 ms latency, ₹0.75 per 1,000 characters",
  logo: "/vakyamai.jpeg",
  href: "https://vakyam.ai/",
  when: "2025–",
  dates: "Jul 2025 – now",
  details: [
    "We built Raaga V1, our own TTS model. The [launch](https://x.com/AadhithyaD_/status/2072176392142504445) got **400k+ views**.",
    "Latency is **under 150 ms**. That took a lot of inference engineering.",
    "It costs **₹0.75 per 1,000 characters**.",
    "The data comes from **Akshar**, a collection pipeline we built ourselves.",
    "Incubated at the IIT Madras Incubation Cell, with a seed grant.",
  ],
};

export const BEFORE = [
  {
    name: "Recruitr AI",
    role: "Co-founder & CEO",
    note: "An AI video interviewer for hiring. Our first paying customer signed 2 days after launch",
    logo: "/recruitrai.png",
    href: "https://recruitrai.com/",
    when: "2024–25",
    dates: "Jan 2024 – Jul 2025",
    details: [
      "Our first paying customer, a US company, signed **2 days after launch**. Then we got customers across the US, Canada and India.",
      "Built the whole thing from scratch with Steve Aldrin: an AI video interviewer, plus tools to find the right candidates.",
      "The AI interviewer screened 500+ candidates.",
      "Backed by **Emergent Ventures**.",
      "I did whatever the company needed that week: engineering, sales, marketing, support.",
    ],
  },
];

// Shown smaller: one line each, details on click.
export const INTERNSHIPS = [
  {
    name: "FLSmidth",
    role: "R&D intern",
    note: "3D reconstruction of mining mills, and an algorithm that compares scans over time to measure wear",
    logo: "/flsmidth.jpg",
    href: "https://www.flsmidth.com/",
    when: "2023",
    dates: "Aug – Nov 2023",
    details: [
      "FLSmidth builds equipment for the mining industry. Checking how worn a mill is used to mean slow, manual reports.",
      "The main work was an algorithm we developed that compares 3D models of the same mill taken at different points in time, and turns the difference into a **wear analysis report**.",
      "Built the 3D reconstruction side too: an iPhone app (SwiftUI) that scans a mill with LiDAR and photogrammetry.",
      "ML models measure the wear straight from the 3D data on Google Cloud, and a desktop app (Flutter) generates the report on its own.",
      "Report time dropped by **90%**, and the work became an **international patent filing**.",
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
    note: "Built two Flutter news apps and shipped AiBlocks, an AI image generator",
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

export const BUILT = [
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

export const ALONG = [
  { name: "Emergent Ventures", note: "Fellow, India 13th cohort (2025), grant for Recruitr AI", href: "https://marginalrevolution.com/marginalrevolution/2025/11/emergent-ventures-india-13th-cohort.html" },
  { name: "IIT Madras Incubation Cell", note: "Vakyam AI, seed grant" },
  { name: "The Residency", note: "Feb – May 2025", href: "https://www.livetheresidency.com/" },
  { name: "Buildspace", note: "s5", href: "https://buildspace.so" },
  { name: "VIT Chennai", note: "B.Tech CSE, 2021–25", href: "https://chennai.vit.ac.in/" },
];

// Films, a book, a talk and a pile of essays I keep going back to.
export const READS = [
  {
    name: "Anbe Sivam",
    by: "Kamal Haasan",
    kind: "film",
    href: "https://letterboxd.com/film/anbe-sivam/",
    img: "/reads/anbe-sivam.jpg",
    note: "A road trip that turns into a film about kindness.",
  },
  {
    name: "Ratatouille",
    by: "Brad Bird",
    kind: "film",
    href: "https://letterboxd.com/film/ratatouille/",
    img: "/reads/ratatouille.jpg",
    note: "Anyone can cook. Great work can come from anywhere.",
  },
  {
    name: "The Pursuit of Happyness",
    by: "Gabriele Muccino",
    kind: "film",
    href: "https://letterboxd.com/film/the-pursuit-of-happyness/",
    img: "/reads/pursuit-of-happyness.jpg",
    note: "Keeps getting knocked down, keeps showing up anyway.",
  },
  {
    name: "Deep Work",
    by: "Cal Newport",
    kind: "book",
    href: "https://calnewport.com/deep-work-rules-for-focused-success-in-a-distracted-world/",
    img: "/reads/deep-work.jpg",
    note: "On the focused work that actually moves things forward.",
  },
  {
    name: "The power of believing that you can improve",
    by: "Carol Dweck",
    kind: "talk",
    href: "https://www.youtube.com/watch?v=_X0mgOOSpLU",
    img: "/reads/dweck-talk.jpg",
    wide: true,
    note: "Why ability grows when you treat it as something you can build.",
  },
  {
    name: "Paul Graham's essays",
    by: undefined,
    img: undefined,
    kind: "essays",
    href: "https://paulgraham.com/articles.html",
    note: "On startups, and on how to think clearly about almost anything.",
  },
];
