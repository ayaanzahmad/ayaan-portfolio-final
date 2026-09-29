export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  tech: string[];
  detailedTech: { label: string; items: string }[];
  keyAchievement?: string;
  link?: string;
  image?: string;
  featured?: boolean;
  category: string;
  number: string;
}
export const projects: Project[] = [
  {
    id: "00",
    number: "01",
    title: "Cenvi",
    subtitle: "Platform & operations",
    category: "Software",
    description:
      "Connecting the software behind live events with the people and processes that make them happen.",
    fullDescription:
      "At Cenvi, I work across full-stack development and operations: translating organizer requirements into workflows, supporting payment processes, coordinating a 12-person team, and improving onboarding and client communication.\n\nThe platform has supported more than 20,000 ticket sales and $372,000 in transactions across Atlanta, New York, and Texas. My work connects technical delivery with the day-to-day needs of organizers and customers.",
    tech: ["Full-stack development", "Payments", "CRM workflows"],
    detailedTech: [],
    keyAchievement: "20,000+ ticket sales · $372K+ in transactions",
    link: "https://cenvi.events/",
    featured: true,
  },
  {
    id: "04",
    number: "02",
    title: "The Cisco lab",
    subtitle: "Self-directed infrastructure",
    category: "Systems",
    description:
      "A hands-on environment for virtualization, Windows and Linux administration, and network services.",
    fullDescription:
      "I built and administer a personal Cisco server environment with 48 CPU cores, 380 GB of RAM, and 4 TB of storage. The lab is my space to deploy services, investigate problems, and understand how infrastructure works in practice.\n\nMy work includes VMware ESXi and vCenter virtualization, Windows and Linux administration, Active Directory, DNS, and Cisco CIMC management. I also use the environment to explore local AI workloads.",
    tech: ["VMware", "Linux / Windows", "Active Directory", "DNS"],
    detailedTech: [],
    keyAchievement: "48 cores · 380 GB RAM · 4 TB storage",
    featured: true,
  },
  {
    id: "dynamo",
    number: "03",
    title: "AI evaluation tasks",
    subtitle: "Handshake AI · Project Dynamo",
    category: "Software",
    description:
      "Building clear specifications and verifiable programming tasks to evaluate AI-generated solutions.",
    fullDescription:
      "As an AI Trainer at Handshake AI, I contributed to Project Dynamo by designing programming tasks with clear requirements, reference solutions, and automated verification.\n\nThe work drew on Python, C, Docker, and Linux, with attention to dependency analysis, workflow recovery, and performance testing. It strengthened how I translate an ambiguous problem into a specification that can be implemented and tested. Internal task code and evaluation materials are not included in this portfolio.",
    tech: ["Python / C", "Docker", "Linux", "Automated testing"],
    detailedTech: [],
    featured: true,
  },
  {
    id: "meticulous",
    number: "04",
    title: "Better care operations",
    subtitle: "Meticulous Health Solutions",
    category: "Operations",
    description:
      "Turning administrative and compliance requirements into usable workflows and clear documentation.",
    fullDescription:
      "At Meticulous Health Solutions, I develop administrative and compliance workflows covering referral intake, record retention, workforce screening, onboarding, and audit evidence.\n\nThe work spans more than 50 workflows and supports operations across four Georgia counties. I helped shorten onboarding and documentation cycles from approximately two months to 14 days, bringing structure to processes that affect staff and the people they serve.",
    tech: ["Process design", "Documentation", "Compliance", "Onboarding"],
    detailedTech: [],
    keyAchievement: "50+ workflows · onboarding reduced to 14 days",
    featured: true,
  },
  {
    id: "03",
    number: "05",
    title: "Mini Jarvis",
    subtitle: "Personal hardware project",
    category: "Systems",
    description:
      "Exploring the connection between voice interfaces, software, and the physical world.",
    fullDescription:
      "A Raspberry Pi project combining Python-based voice and LLM workflows with electronics and hardware integration. I use it to explore voice interaction, Home Assistant, and the practical challenges of connecting software to devices.\n\nThe project includes hands-on assembly, soldering, and iterative debugging across hardware and software.",
    tech: ["Raspberry Pi", "Python", "Voice interfaces", "Home Assistant"],
    detailedTech: [],
  },
  {
    id: "05",
    number: "06",
    title: "A personal digital home",
    subtitle: "Design & development",
    category: "Software",
    description:
      "An editorial portfolio bringing software, infrastructure, and operations into one coherent story.",
    fullDescription:
      "This portfolio is built with Next.js, React, and TypeScript. Its cream-and-gold visual language combines expressive serif typography with structured layouts and restrained motion.\n\nThe design prioritizes readable content, responsive navigation, keyboard access, and support for reduced motion. Project pages provide context without hiding the work behind decorative interactions.",
    tech: ["Next.js", "React", "TypeScript", "CSS"],
    detailedTech: [],
    link: "https://github.com/ayaanzahmad/ayaan-portfolio-final",
  },
];
export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}
export const experience = [
  {
    company: "Meticulous Health Solutions",
    role: "Chief Operating Officer",
    date: "May 2026 — Present",
    tag: "Operations & compliance",
    body: "Building 50+ administrative and compliance workflows across four Georgia counties. Helped reduce onboarding and documentation cycles from roughly two months to 14 days.",
  },
  {
    company: "Cenvi",
    role: "Director of Operations · Full-stack development",
    date: "May 2025 — Present",
    tag: "Software & operations",
    body: "Coordinating a 12-person team and connecting product delivery, organizer onboarding, payment workflows, and client support. The platform has supported 20,000+ ticket sales and $372K+ in transactions.",
  },
  {
    company: "Handshake AI",
    role: "AI Trainer · Contract",
    date: "May 2026 — Aug 2026",
    tag: "AI evaluation",
    body: "Designed programming tasks for Project Dynamo, including specifications, reference solutions, and automated verification using Python, C, Docker, and Linux.",
  },
  {
    company: "Oakwin",
    role: "Software Engineering Intern",
    date: "Aug 2025 — Jan 2026",
    tag: "Software engineering",
    body: "Developed Python automations and backend integrations for SaaS workflows, working with REST APIs, LLM-based content workflows, and multitenant systems.",
  },
  {
    company: "MIST",
    role: "Competitions Lead · Board member",
    date: "Aug 2024 — Jul 2025",
    tag: "Community leadership",
    body: "Coordinated competition logistics for 800+ participants with approximately 50 volunteers and organizers, covering schedules, room allocation, judges, check-in, and scoring.",
  },
  {
    company: "CabbageSoup",
    role: "Software Development Intern",
    date: "Aug 2023 — May 2024",
    tag: "Software engineering",
    body: "Worked on Python automation, AI and LLM pipeline experiments, and debugging across development workflows.",
  },
];
