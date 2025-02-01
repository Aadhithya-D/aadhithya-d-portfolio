import { Icons } from "@/components/icons";

export const DATA = {
  name: "Aadhithya D",
  initials: "AD",
  url: "https://aadhithya-d.vercel.app/",
  location: "Chennai, IN",
  locationLink: "https://www.google.com/maps/place/chennai",
  description:
    "Student Entrepreneur. I love building things and helping people.",
  summary:
  "In 2024, I decided to commit full time to Recruitr AI, an AI-powered platform streamlining hiring for companies at sacle. As a final-year computer science student at VIT Chennai with hands-on experience in diverse areas gained through internships at Ford, FLSmidth, and Bhai AR, I focus on building impactful solutions to real-world problems. Beyond my startup, I like actively sharing knowledge through workshops on AI and various other technologies. I have participated in hackathons (with multiple wins). I am driven by a belief that great engineering combines simplicity, impact, and a constant pursuit of learning, whether through startups, robotics, or education.",
  avatarUrl: "/me2.jpg",
  skills: {
    categories: {
      Mobile: ["Flutter", "Android", "iOS", "Jetpack Compose", "SwiftUI"],
      Web: ["Next.js", "React"],
      Backend: ["FastAPI", "Django", "Flask", "Spring"],
      AI: ["LLMs", "GenAI", "Machine Learning", "TensorFlow Lite", "Diffusors", "LangChain", "RAG"],
      Heardware: ["Raspberry Pi", "Arduino", "ESP32", "ESP8266"],
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
        }
      ],
      "image": "/drone1.png",
      "video": ""
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
      image: "/device.png",
      video: "",
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
      image: "/device.png",
      video:
        "",
    },
  ],
} as const;
