import { Zap, ShoppingCart, Stethoscope } from "lucide-react";
import { Terminal, Cpu, BarChart3, Settings, Languages } from "lucide-react";

/* ============================================================
   SINGLE SOURCE OF TRUTH FOR PORTFOLIO CONTENT
   Edit this file to update site text — components read from
   here and never need to change for a content-only update.
============================================================ */

export const PROFILE = {
  name: "Aswini Sathyan C",
  location: "Thrissur, Kerala, India",
  email: "sreeaswini3@gmail.com",
  phone: "+91 8590464943",
  github: "https://github.com/Aswinisathyan",
  linkedin: "https://linkedin.com/in/aswini-sathyan-c-ab6902337",
  // One entry per animated paragraph on the About section.
  summary: [
    "Software Developer with hands-on experience in Python, Machine Learning, Computer Vision, Generative AI concepts, and software development.",
    "Skilled in data preprocessing, ML workflows, data analysis, debugging, and version control with Git/GitHub.",
    "Experienced in building intelligent applications using Scikit-learn, PyTorch, OpenCV, and YOLOv8.",
  ],
};

// Filename only — must live in /public so Vite serves it as a static asset.
export const RESUME_FILE = "CURRENT_RESUME.pdf";

export const EXPERIENCE = [
  // {
  //   role: "Software Development Intern",
  //   company: "Company Name",
  //   period: "Month Year – Present",
  //   points: [
  //     "What you build/use day to day.",
  //     "A concrete task or technology.",
  //   ],
  // },
];

export const EDUCATION = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "Government Engineering College, Thrissur",
    location: "Thrissur, India",
    period: "2024 – Present",
    cgpa: "8.49",
    current: true,
  },
  {
    degree: "BSc Physics",
    institution: "Sreekrishna College, Guruvayur",
    location: "Guruvayur, India",
    period: "2021 – 2024",
    cgpa: "7.21",
  },
  {
    degree: "Higher Secondary (10+2)",
    institution: "Govt Model Girls Higher Secondary School",
    location: "Kunnamkulam, India",
    period: "2019 – 2021",
  },
  {
    degree: "Secondary (10th)",
    institution: "Bethany Convent Girls High School",
    location: "Kunnamkulam, India",
    period: "2019",
  },
];

export const PROJECTS = [
  {
    title: "Lightning Hotspot Identification",
    description:
      "Analyzed satellite-based lightning data to identify global lightning hotspots, with a focus on the Congo region. Explored the relationship between lightning activity and atmospheric parameters like CAPE and K-Index.",
    tech: ["Python", "NASA Data", "ERA5", "Data Analysis"],
    icon: Zap,
    gradient: "from-yellow-400 to-orange-500",
    link: null,
  },
  {
    title: "Green VEICART",
    description:
      "AI-based smart checkout system using YOLOv8 and IoT (ESP32 + HX711) for automated product detection, weight-based billing, and QR-code digital payments.",
    tech: ["YOLOv8", "ESP32", "IoT", "Python", "AI"],
    icon: ShoppingCart,
    gradient: "from-green-400 to-emerald-500",
    link: "https://github.com/Aswinisathyan/veicart",
  },
  {
    title: "AI Medical Lab Booking Assistant",
    description:
      "An AI-driven medical lab booking and notification system integrated with WhatsApp Cloud API, using machine learning for intent detection, rule-based booking automation, and an NLP engine.",
    tech: ["Python", "WhatsApp Cloud API", "NLP", "Machine Learning"],
    icon: Stethoscope,
    gradient: "from-sky-400 to-blue-500",
    link: "https://github.com/Aswinisathyan/ai-medical-booking-assistant",
  },
];

export const SKILLS = [
  {
    title: "Programming",
    icon: Terminal,
    skills: ["Python", "HTML", "CSS"],
  },
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    skills: [
      "CNN",
      "YOLOv8",
      "TensorFlow / Keras",
      "Model Training",
      "Image Processing",
    ],
  },
  {
    title: "Data Science",
    icon: BarChart3,
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "OpenCV"],
  },
  {
    title: "Database & Tools",
    icon: Settings,
    skills: ["MySQL", "Git", "GitHub", "LaTeX / Overleaf", "MS Word"],
  },
  {
    title: "Languages",
    icon: Languages,
    skills: ["English", "Malayalam"],
  },
];
