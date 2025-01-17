import { Icons } from "@/components/icons";

export const DATA = {
  name: "Aadhithya D",
  initials: "AD",
  url: "https://dillion.io",
  location: "Chennai, IN",
  locationLink: "https://www.google.com/maps/place/chennai",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me2.jpg",
  skills: [
    "Flutter",
    "Android",
    "iOS",
    "Next.js",
    "Postgres",
    "Docker",
    "Typescript",
    "Python",
    "Kotlin",
    "Swift",
    "Java",
    "C++",
  ],
  contact: {
    email: "aadhithya.d2003@gmail.com",
    tel: "+91 8056603178",
    social: {
      GitHub: {
        url: "https://github.com/Aadhithya-D",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/aadhithya-d/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://twitter.com/Aadhithya_D2003",
        icon: Icons.x,
      },
      Youtube: {
        url: "https://www.youtube.com/@aadhithyad",
        icon: Icons.youtube,
      },
    },
  },

  work: [
    {
      company: "Recruitr AI",
      href: "https://recruitrai.azurewebsites.net/",
      badges: [],
      location: "Chennai, Tamil Nadu, India",
      title: "CEO & Co-Founder",
      logoUrl: "/recruitrai.jpeg",
      start: "January 2024",
      end: "Present",
      description:
        "Recruitr AI stands as a transformative force in tech hiring, offering a tailored SaaS platform. Our unique value proposition lies in the integration of AI-driven features and customizable pipelines, ensuring a holistic evaluation process that aligns with the dynamic needs of innovative companies. Focused on scalability and high-performance team building, we differentiate ourselves by providing an adaptable solution that addresses the distinct challenges of our target market, setting the stage for a new era in recruitment efficiency and talent acquisition.",
    },
    {
      company: "FLSmidth",
      badges: [],
      href: "https://www.flsmidth.com/",
      location: "Chennai, Tamil Nadu, India",
      title: "Research And Development Intern",
      logoUrl: "/flsmidth.jpg",
      start: "August 2023",
      end: "November 2023",
      description: `• Automated wear and tear analysis report generation for mining mills, reducing the processing time by 90%.\n
        • Led the development of an iOS mobile app with SwiftUI for 3D scanning of mining mills, utilizing LiDAR data and Photogrammetry, and integrating ObjectCapture for precision, seamlessly connected to the cloud.
        • Engineered a desktop app with Flutter for streamlined cloud storage management and automated report generation.
        • Initiated the integration of machine learning models to automate report generation, streamlining data analysis processes.
        • Developed algorithms to achieve precise 3D object segmentation and thickness analysis, significantly enhancing the depth and accuracy of generated reports.
        • Managed cloud deployments using Google Cloud Platform (GCP) tools, such as Cloud Storage and Compute Engine VM Instance.`,
    },
    {
      company: "Ford Motor Company",
      href: "https://www.ford.com/",
      badges: [],
      location: "Chennai, Tamil Nadu, India",
      title: "Software Engineer Intern",
      logoUrl: "/ford_motor_company_logo.jpeg",
      start: "August 2023",
      end: "October 2023",
      description: `• Collaborated effectively with the Android team, ensuring a smooth workflow.
        • Elevated user experience and visual appeal through UI enhancements with Jetpack Compose in Kotlin.
        • Applied deep linking within notifications to streamline user navigation.
        • Implemented gRPC bidirectional streaming, seamlessly integrated with Google Pub/Sub and a Spring Boot BFF (Backend for Frontend), achieving a remarkable 7x boost in broadcasting speed while ensuring robust stability.
        • Streamlined data engineering with multiple algorithms and facilitated ML model selection for driver-selective broadcasting.`,
    },
    {
      company: "Bhai AR",
      href: "https://www.bhai.tech/",
      badges: [],
      location: "Bengaluru, Karnataka, India",
      title: "SDE Intern",
      logoUrl: "/bhai_logo.jpeg",
      start: "February 2023",
      end: "March 2023",
      description: `• Developed two Flutter and Firebase apps: a news aggregator for the North American market and a news submission app.\n
        • Implemented a custom cache management system that improved media loading performance by 80%.
        • Enhanced app functionality with deep linking, push notifications, and other features.
        • Created AiBlocks, a mobile app that uses generative AI models to create images from user prompts.
        • Images can be minted as NFTs, and the app is being used by 15 different NFT projects.`,
    },
  ],
  education: [
    
    {
      school: "Vellore Institute of Technology, Chennai",
      href: "https://chennai.vit.ac.in/",
      degree: "Bachelor of Technology, Computer Science and Engineering with Specialization in Cyber Physical Systems",
      logoUrl: "/vit-logo.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "SKNS PMC Vivekananda Vidyalaya",
      href: "https://www.sknspmcvv.org/",
      degree: "High School (PCM with Computer Science)",
      logoUrl: "/vvjc-logo.png",
      start: "2007",
      end: "2021",
    },
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    }
  ],
} as const;
