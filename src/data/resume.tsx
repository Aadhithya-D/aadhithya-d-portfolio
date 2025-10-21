import { Icons } from "@/components/icons";

export const DATA = {
  name: "Aadhithya D",
  initials: "AD",
  url: "https://aadhithya-d.vercel.app/",
  location: "Chennai, IN",
  locationLink: "https://www.google.com/maps/place/chennai",
  description:
    "Entrepreneur and Engineer. I love building things.",
  summary:
  "Building [Vakyam AI](https://vakyam.ai), a voice AI platform enabling human-like, multilingual conversations for the Indian market. Previously, I built [Recruitr AI](https://recruitrai.com), where we secured international funding and onboarded paying customers globally. Computer Science graduate from VIT Chennai. Backed by internship experience at Ford and FLSmidth, multiple hackathon wins, and a focus on solving real-world problems, I chose to startup straight out of college to build products that push the boundaries of what's possible with AI.",
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
      company: "Vakyam AI",
      href: "https://vakyam.ai/",
      badges: [],
      location: "Chennai, Tamil Nadu, India",
      title: "CEO & Co-Founder",
      logoUrl: "/vakyamai.jpeg",
      start: "July 2025",
      end: "Present",
      description:
        "Vakyam AI is a multilingual voice AI platform that enables human-like conversations in Indian languages. We help businesses automate calls for customer support, lead generation, and training with natural, expressive regional voices. Unlike traditional IVRs or TTS systems, Vakyam understands context, speaks in local dialects, and integrates with real-time data — making it ideal for scale in diverse markets like India."
    },
    {
      company: "Recruitr AI",
      href: "https://recruitrai.com/",
      badges: [],
      location: "Chennai, Tamil Nadu, India",
      title: "CEO & Co-Founder",
      logoUrl: "/recruitrai.png",
      start: "January 2024",
      end: "Present",
      description:
        "Recruitr AI is an AI-powered hiring platform that streamlines candidate screening and interviews at scale. Built to improve how companies evaluate talent, it uses conversational AI to assess candidates efficiently and fairly. We worked with global customers and secured international funding, with a focus on making tech hiring faster, smarter, and more accessible."
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
    }
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
