export type CaseStudy = {
  role: string;
  period: string;
  caption: string;
  lead: string;
  sections: { title: string; body: string }[];
  facts: { value: string; label: string }[];
  link?: string;
  linkLabel?: string;
};
export const caseStudies: Record<string, CaseStudy> = {
  "00": {
    role: "Operations & full-stack development",
    period: "May 2025 — Present",
    caption:
      "Platform illustration · From event discovery to organizer operations",
    lead: "The product is only one part of the event experience. The workflows behind it matter just as much.",
    sections: [
      {
        title: "Connecting product and operations",
        body: "My role at Cenvi spans software delivery and the processes that support a live event platform. I translate organizer, vendor, and payment requirements into documented workflows, connecting technical implementation with what a team needs to do each day.",
      },
      {
        title: "Making the handoffs clearer",
        body: "I work across onboarding, CRM workflows, payment processes, and client communication. Coordinating a 12-person team means keeping requirements understandable, identifying dependencies, and communicating implementation decisions to both technical and nontechnical stakeholders.",
      },
      {
        title: "Supporting a growing platform",
        body: "Cenvi has supported more than 20,000 ticket sales and $372,000 in transactions across Atlanta, New York, and Texas. Those are platform-wide figures; my contribution is the technical and operational work that helps the team deliver the experience.",
      },
    ],
    facts: [
      { value: "20,000+", label: "Platform ticket sales" },
      { value: "$372K+", label: "Platform transactions" },
      { value: "12", label: "People on the team" },
    ],
    link: "https://cenvi.events/",
    linkLabel: "Visit Cenvi",
  },
  "04": {
    role: "Builder & systems administrator",
    period: "March 2022 — Present",
    caption: "Infrastructure diagram · A conceptual view of my Cisco lab",
    lead: "A real environment for learning what happens below the application layer.",
    sections: [
      {
        title: "From hardware to hosted services",
        body: "I built and administer a Cisco server environment with 48 CPU cores, 380 GB of RAM, and 4 TB of storage. It gives me a place to work directly with hardware, hypervisors, operating systems, and network services instead of treating infrastructure as an abstraction.",
      },
      {
        title: "Administering the environment",
        body: "The lab brings together VMware ESXi and vCenter, Linux and Windows administration, Active Directory, DNS, and Cisco CIMC. I use it to practice configuration and troubleshooting across the layers that connect a server to the services running on it.",
      },
      {
        title: "A space for experimentation",
        body: "Alongside systems administration, I explore self-hosted services and local AI workloads. Working in an environment I maintain myself makes resource allocation, debugging, and the relationships between services part of the learning process.",
      },
    ],
    facts: [
      { value: "48", label: "CPU cores" },
      { value: "380 GB", label: "Memory" },
      { value: "4 TB", label: "Storage" },
    ],
  },
  dynamo: {
    role: "AI Trainer · Contract",
    period: "May — August 2026",
    caption:
      "Evaluation workflow illustration · Public overview of the task-design process",
    lead: "Good evaluation starts with a problem that is precise enough to test and substantial enough to matter.",
    sections: [
      {
        title: "Turning a problem into a specification",
        body: "For Project Dynamo at Handshake AI, I designed programming tasks with clear requirements and an objective way to evaluate the resulting solution. The work required careful attention to the boundary between an intended challenge and an ambiguous instruction.",
      },
      {
        title: "Building the verification",
        body: "I worked with reference solutions and automated checks using Python, C, Docker, and Linux. Task design drew on dependency analysis, workflow recovery, and performance testing, connecting the written specification to observable behavior.",
      },
      {
        title: "What this work developed",
        body: "The experience strengthened my ability to reason about failure cases, explain expected behavior, and create repeatable verification. This case study describes the process at a high level; internal task code and private evaluation materials remain confidential.",
      },
    ],
    facts: [
      { value: "Specify", label: "Clear requirements" },
      { value: "Implement", label: "Reference solutions" },
      { value: "Verify", label: "Automated checks" },
    ],
    link: "https://joinhandshake.com/ai/",
    linkLabel: "About Handshake AI",
  },
  meticulous: {
    role: "Chief Operating Officer",
    period: "May 2026 — Present",
    caption:
      "Process illustration · Organizing the work behind healthcare operations",
    lead: "Clear documentation should make a complex process easier to carry out, review, and repeat.",
    sections: [
      {
        title: "Translating requirements into daily work",
        body: "At Meticulous Health Solutions, I develop administrative and compliance workflows for referral intake, onboarding, record retention, workforce screening, governance, and audit evidence. The goal is to turn complex requirements into procedures people can actually follow.",
      },
      {
        title: "Building consistency",
        body: "The work spans more than 50 workflows supporting operations across four Georgia counties. I connect written procedures with the forms, records, and handoffs needed to make each process repeatable, with attention to confidentiality and external review.",
      },
      {
        title: "Improving onboarding",
        body: "I helped reduce onboarding and documentation cycles from approximately two months to 14 days. The improvement reflects a focus on organizing requirements, clarifying the sequence of work, and making the necessary documentation easier to complete.",
      },
    ],
    facts: [
      { value: "50+", label: "Operational workflows" },
      { value: "14 days", label: "Onboarding & documentation" },
      { value: "4", label: "Georgia counties" },
    ],
    link: "https://meticuloushs.com",
    linkLabel: "Visit Meticulous",
  },
  "03": {
    role: "Hardware & software builder",
    period: "2024 — Present",
    caption: "System illustration · Voice, software, and connected hardware",
    lead: "An exploration of what it takes to move from a spoken request to something happening in the physical world.",
    sections: [
      {
        title: "Bringing the pieces together",
        body: "Mini Jarvis combines a Raspberry Pi, Python-based voice and LLM workflows, and local automation. I use it to explore how a conversational interface can connect with hardware and services such as Home Assistant.",
      },
      {
        title: "Working across hardware and software",
        body: "The project includes assembly, soldering, and hardware integration as well as programming. Debugging means following the interaction across several layers: the input, the software workflow, the device connection, and the resulting behavior.",
      },
      {
        title: "Learning through iteration",
        body: "This is a self-directed project where I can test an idea, observe where it breaks, and improve the integration. It brings together my interests in embedded systems, practical automation, and interfaces that are useful beyond a screen.",
      },
    ],
    facts: [
      { value: "Voice", label: "Interaction" },
      { value: "Python", label: "Workflow logic" },
      { value: "Hardware", label: "Physical integration" },
    ],
  },
  "05": {
    role: "Designer & developer",
    period: "Personal portfolio",
    caption: "Design study · The visual language of this portfolio",
    lead: "One digital home for work that crosses software, systems, and operations.",
    sections: [
      {
        title: "A coherent visual identity",
        body: "The portfolio uses cream, deep green, and gold, with expressive serif typography and a laurel monogram. The design brings several kinds of work together while giving each project room for its own context and visual presentation.",
      },
      {
        title: "Movement with a purpose",
        body: "A staged opening, scroll reveals, and an interactive project collection guide attention through the page. The project library offers category filters and direct access to each case study; reduced-motion preferences simplify animation.",
      },
      {
        title: "Built to be explored",
        body: "Next.js, React, and TypeScript support the site, with responsive layouts and dedicated project pages. Prominent external links make it easy to move from a case study to a public website or source repository.",
      },
    ],
    facts: [
      { value: "Next.js", label: "Application framework" },
      { value: "React", label: "Interface" },
      { value: "TypeScript", label: "Implementation" },
    ],
    link: "https://github.com/ayaanzahmad/ayaan-portfolio-final",
    linkLabel: "Explore the source",
  },
};
