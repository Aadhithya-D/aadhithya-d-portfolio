import { Icons } from "@/components/icons";

export const DATA = {
  name: "Aadhithya D",
  initials: "AD",
  url: "https://aadhithya-d.vercel.app/",
  location: "Chennai, IN",
  locationLink: "https://www.google.com/maps/place/chennai",
  description:
    "Building natural, affordable TTS for Indian languages at Vakyam AI | IIT Madras Incubation Cell | Emergent Ventures Fellow",
  summary:
    "Building natural, affordable TTS for Indian languages at [Vakyam AI](https://vakyam.ai) | IIT Madras Incubation Cell | Emergent Ventures Fellow",
  avatarUrl: "/me2.jpg",
  skills: {
    categories: {
      Mobile: ["Flutter", "Android", "iOS", "Jetpack Compose", "SwiftUI"],
      Web: ["Next.js", "React"],
      Backend: ["FastAPI", "Django", "Flask", "Spring"],
      AI: ["LLMs", "GenAI", "Machine Learning", "TensorFlow Lite", "Diffusors", "LangChain", "RAG"],
      Hardware: ["Raspberry Pi", "Arduino", "ESP32", "ESP8266"],
      Database: ["Postgres", "MongoDB", "SQL", "Supabase", "Firebase"],
      DevOps: ["Docker", "CI/CD (GitHub Actions)", "Cloud Computing (GCP, Azure)", "Git"],
      Languages: ["TypeScript", "Python", "Java", "C++", "Dart", "R", "SQL", "Kotlin", "Swift"]
    }
  },
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
        url: "https://x.com/AadhithyaD_",
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
      company: "Vakyam AI",
      href: "https://vakyam.ai/",
      badges: [],
      location: "Chennai, Tamil Nadu, India",
      title: "CEO & Co-Founder",
      logoUrl: "/vakyamai.jpeg",
      start: "July 2025",
      end: "Present",
      description:
        "Building foundation speech models for Indian languages. Incubated at IIT Madras.",
    },
    {
      company: "Recruitr AI",
      href: "https://recruitrai.com/",
      badges: [],
      location: "Chennai, Tamil Nadu, India",
      title: "CEO & Co-Founder",
      logoUrl: "/recruitrai.png",
      start: "January 2024",
      end: "July 2025",
      description:
        "Built Recruitr AI, an AI-based hiring platform, and onboarded 5 companies from the USA, Canada, and India. Did engineering, sales, marketing, and customer support. Built the platform entirely from scratch, including an AI video interviewer that screened over 500 candidates, as well as AI candidate sourcing tools.",
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
      description:
        "Built tools for mining mill inspection and analysis, cutting wear-and-tear report generation time by 90%. Led an iOS app in SwiftUI for 3D scanning with LiDAR, photogrammetry, and ObjectCapture, paired with a Flutter desktop app for cloud storage and automated reporting. Integrated ML models and algorithms for 3D segmentation and thickness analysis, and managed deployments on GCP (Cloud Storage, Compute Engine).",
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
      description:
        "Worked with the Android team on product UI and systems for driver-facing experiences. Shipped UI improvements in Jetpack Compose (Kotlin), added deep linking in notifications, and implemented gRPC bidirectional streaming with Google Pub/Sub and a Spring Boot BFF, improving broadcast speed by about 7x. Also supported data pipelines and ML model selection for driver-selective broadcasting.",
    },
    // {
    //   company: "Bhai AR",
    //   href: "https://www.bhai.tech/",
    //   badges: [],
    //   location: "Bengaluru, Karnataka, India",
    //   title: "SDE Intern",
    //   logoUrl: "/bhai_logo.jpeg",
    //   start: "February 2023",
    //   end: "March 2023",
    //   description:
    //     "Built two Flutter and Firebase apps (a news aggregator for the North American market and a news submission app), including a custom cache layer that improved media load performance by 80%, plus deep linking and push notifications. Also shipped AiBlocks, a generative AI image app used by 15 NFT projects, with support for minting images as NFTs.",
    // },
  ],
  education: [
    {
      school: "The Residency",
      href: "https://www.livetheresidency.com/",
      degree: "Entrepreneurship",
      logoUrl: "/live_the_residency_logo.jpeg",
      start: "2024",
      end: "2025",
    },
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
      degree: "High School (PCM with Computer Science) - 94.2%",
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
    }
  ],
  awards: [
    {
      title: "Mercatus EV Grantee",
      org: "Mercatus Center",
      year: "2025",
      href: "https://www.mercatus.org/emergent-ventures",
      description:
        "Emergent Ventures grantee from Mercatus Center.",
    },
    {
      title: "Cyber Spectrum",
      org: "VIT",
      year: "2023",
      description:
        "Runner-up at CyberSpectrum project expo for developing an Intelligent Bike Locking System.",
    },
    {
      title: "Flipkart Grid 5.0 - Robotics & Software Tracks",
      org: "Flipkart",
      year: "2023",
      description:
        "Certificate of Merit in both the Robotics and Software Engineering tracks. Qualified to Round 2; one of the top 10 teams in college.",
    },
    {
      title: "App Frenzy 2.0",
      org: "Sai Ram College",
      year: "2022",
      description:
        "3rd place in the annual app development competition for developing FITNUT, a fitness app.",
    },
    {
      title: "HackHub 2022",
      org: "IEEE Computer Society - VITC",
      year: "2022",
      description:
        "Top 10 teams at HackHub 2022, IEEE Computer Society, VIT Chennai.",
    },
    {
      title: "First Rank Holder in Computer Science",
      org: "VVJC",
      year: "2020",
      description:
        "First rank holder in Computer Science at SKNS PMC Vivekananda Vidyalaya (VVJC) with 94.2%.",
    },
  ],
  projects: [
    {
      title: "RoboGPT",
    href: "https://your-project-link.com",
    dates: "Oct 2024 - Nov 2024",
    active: true,
    timeline: "4 Weeks",
    description: "RoboGPT is an AI-powered voice-activated robotic arm that integrates natural language processing with computer vision to execute real-world tasks. By leveraging YOLO-based object detection and LLM-powered task planning, RoboGPT enables seamless interaction between humans and robotics, making it ideal for industrial automation and assistive robotics.",
    technologies: [
        "Python",
        "YOLO",
        "OpenCV",
        "Natural Language Processing",
        "Robotics",
        "LLM",
        "Agents",
        "Flutter",
        "Firebase"
    ],
    "links": [
        {
          "type": "LinkedIn",
          "href": "https://www.linkedin.com/posts/aadhithya-d_continuing-the-series-of-projects-today-activity-7282262352501055489-2Zst",
          "icon": <Icons.linkedin className='size-3' />
        }
      ],
    "image": "/robo_1.webp",
    "video": ""
    },
    {
      "title": "FalconSight",
      "href": "https://www.linkedin.com/posts/aadhithya-d_continuing-the-series-of-projects-today-activity-7282262352501055489-2Zst",
      "dates": "Oct 2024 - Nov 2024",
      "active": true,
      "description":
        "FalconSight is an AI-powered drone-based emergency detection system that leverages deep learning, computer vision, and real-time video processing to identify critical situations such as human distress, SOS gestures, and emergency text signs. Designed for rapid response in inaccessible areas, FalconSight combines mini-drone technology with secure communication protocols for efficient surveillance and disaster management.",
      "technologies": [
        "Deep Learning",
        "Computer Vision",
        "OCR",
        "Mini-Drone Technology",
        "Real-time Video Processing",
        "WiFi Modules",
        "Gesture Recognition"
      ],
      "links": [
        {
          "type": "GitHub",
          "href": "https://github.com/Aadhithya-D/Drone-Cam-Analysis",
          "icon": <Icons.github className='size-3' />
        },
        {
          "type": "LinkedIn",
          "href": "https://www.linkedin.com/posts/aadhithya-d_hello-everyone-just-got-around-12k-impressions-activity-7281967189681680385-CP_o?utm_source=share&utm_medium=member_desktop",
          "icon": <Icons.linkedin className='size-3' />
        }
      ],
      "image": "/drone1.png",
      "video": ""
    },
    {
      title: "FitNut",
      href: "https://your-project-link.com",
      dates: "January 2023 - February 2023",
      active: true,
      description: "FitNut is a Flutter-based fitness application that uses MLKit for real-time pose detection, accurately counting reps, scoring workouts, and updating a leaderboard to enhance motivation.",
      technologies: [
          "Flutter",
          "MLKit",
          "Firebase",
          "Dart",
          "Google Cloud Platform"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Aadhithya-D/FitNut",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/posts/aadhithya-d_hey-connections-it-is-my-immense-pleasure-activity-7027231878566875136-YCoQ",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/fitnut1.png",
      video: "",
    },
    {
      title: "Drippy AI",
      href: "https://drippy.ai",
      dates: "August 2023",
      active: true,
      description:
        "Drippy AI is a cutting-edge fashion companion that provides personalized outfit recommendations, fashion trend analysis, and sample image generation through an interactive app and website.",
      technologies: [
        "Flutter",
        "Firebase",
        "Dart",
        "TypeScript",
        "Next.JS",
        "LLM",
        "Stable Diffusion",
        "ControlNet",
        "Flipkart API"
      ],
      links: [
        {
          type: "Presentation",
          href: "https://www.canva.com/design/DAFtCTJMJrQ/la0iVwZ4Ruv98SkuEJOsIg/edit?utm_content=DAFtCTJMJrQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Aadhithya-D/Drippy.AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/DrippyAI.gif",
      video: "",
    }
  ],
} as const;
