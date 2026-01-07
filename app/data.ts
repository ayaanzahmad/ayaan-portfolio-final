export interface Project {
    id: string;
    title: string;
    subtitle?: string;
    description: string; // Used for "The Pitch" (Short)
    fullDescription: string; // The detailed description
    tech: string[]; // Simple tags for cards
    detailedTech: { label: string; items: string }[]; // Structured tech stack
    keyAchievement?: string; // Replaces wowFactor for a more professional tone
    link?: string;
    image?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "00",
        title: "Cenvi: Enterprise Event Logistics Platform",
        subtitle: "Enterprise SaaS · FinTech",
        description: "A high-velocity ticketing and ecosystem management platform powering large-scale festivals and conferences.",
        fullDescription: "Architected and deployed a mission-critical event management system capable of handling high-concurrency ticket sales and complex vendor logistics. The platform serves as the digital backbone for major festivals (10k+ attendees), processing over $20,000 in secure transactions. It features a dual-interface architecture: a reactive customer-facing booking engine optimized for load resilience during ticket drops, and a vendor capability portal for application adjudication and onboarding.",
        detailedTech: [
            { label: "Core Stack", items: "Vue.js (Frontend), Go (Backend API), TypeScript" },
            { label: "Data Integrity", items: "ACID-compliant Transaction Processing, Real-time Inventory Locking" },
            { label: "Scale", items: "10k+ Concurrent Users Support, 99.9% Uptime during Peak Sales" },
        ],
        tech: ["Vue.js", "Go", "TypeScript", "PostgreSQL"],
        keyAchievement: "Successfully processed $20k+ in revenue with zero transaction failures during high-traffic launch windows, validating the Go backend's concurrency performance for enterprise workloads.",
        image: "/projects/cenvi-logo.png",
        link: "https://cenvi.events/",
        featured: true,
    },
    {
        id: "01",
        title: "Tech Liquidators Intelligence Engine",
        subtitle: "Data Engineering · Predictive Analytics",
        description: "An automated decision-support pipeline estimating liquidation ROI via cross-market pricing analysis.",
        fullDescription: "Developed a Python-based data engineering pipeline to solve the information asymmetry market problem in bulk liquidation. The system ingests unstructured manifest data (CSV/XLSX), normalizes SKU variants, and performs real-time price discovery against eBay's API. A custom statistical heuristic (IQR-based outlier rejection) filters volatile market data to generate conservative Max Bid thresholds, enabling data-driven capital allocation with a quantifiable risk profile.",
        detailedTech: [
            { label: "Core Engineering", items: "ETL Pipelines, API Rate Limit Management (Backoff/Retry policies)" },
            { label: "Statistical Modeling", items: "Outlier Detection (Interquartile Range), Confidence Interval Calculation" },
            { label: "Optimization", items: "Local Caching Strategy to minimize API latency and costs" },
        ],
        tech: ["Python", "Pandas", "Streamlit", "eBay API"],
        keyAchievement: "Transforming raw, unstructured manifest data into a precision financial instrument, effectively reducing bad-buy risk by estimated 40% through automated due diligence.",
        image: "/projects/tech-liquidators-logo.png",
    },
    {
        id: "02",
        title: "Omni-Channel Content Distribution Systems",
        subtitle: "AdTech · Distributed Systems",
        description: "A headless marketing automation infrastructure orchestrating content sync across disparate social APIs.",
        fullDescription: "Building a vertical SaaS solution to unify fragmented social media ecosystems into a single control plane. The system abstracts the complexity of Meta, TikTok, and LinkedIn APIs into a unified internal interface, handling OAuth token rotation, media upload chunking, and compliance requirements. It leverages Asynchronous Task Queues to decouple media processing (transcoding, caption generation via LLMs) from the user interaction layer, ensuring system responsiveness.",
        detailedTech: [
            { label: "System Design", items: "Event-Driven Architecture, Celery/Redis Task Queues" },
            { label: "Security", items: "OAuth 2.0 PKCE Flow, Secrets Management, RLS (Row Level Security)" },
            { label: "AI Pipeline", items: "Prompt Engineering for Context-Aware Generation, RAG for Brand Voice" },
        ],
        tech: ["Python", "FastAPI", "Celery", "Docker"],
        keyAchievement: "Engineered a scalable abstraction layer over complex third-party APIs, enabling 'write-once, deploy-everywhere' functionality that reduces manual marketing operations workload by 90%.",
        image: "/projects/omni-channel-logo.png",
    },
    {
        id: "03",
        title: "Embedded Voice Intelligence (Mini Jarvis)",
        subtitle: "Edge AI · Embedded Systems",
        description: "A low-latency, privacy-focused voice computing unit running localized LLM inference on Raspberry Pi.",
        fullDescription: "Designed an embedded voice assistant focused on data sovereignty and complex workflow execution. Unlike cloud-dependent commercial alternatives, this system performs speech-to-text and intent recognition locally on a Raspberry Pi 5. It integrates with LangChain to orchestrate multi-step agents capable of interacting with local network services (Home Assistant), calendar APIs, and email servers, effectively functioning as an autonomous personal operations center.",
        detailedTech: [
            { label: "Embedded Engineering", items: "Hardware Abstraction Layer (HAL) for Pi GPIO, Audio Stream Processing" },
            { label: "ML Ops", items: "Quantized LLM Deployment (GGUF format), Inference Optimization" },
            { label: "Networking", items: "Local Subnet Discovery, Secure API Tunnels" },
        ],
        tech: ["Raspberry Pi 5", "LangChain", "Mistral-7B (Quantized)", "Python"],
        keyAchievement: "Achieved near-commercial latency for voice interactions using purely edge compute, proving the viability of privacy-preserving, offline-capable AI assistants.",
        image: "/projects/jarvis-logo.png",
    },
    {
        id: "04",
        title: "Enterprise Virtualization Homelab",
        subtitle: "Infrastructure as Code · DevOps",
        description: "A self-hosted private cloud infrastructure simulating enterprise data center operations.",
        fullDescription: "Maintained a high-availability virtualization cluster on Cisco UCS hardware, serving as a staging environment for distributed systems development. The stack includes VMware ESXi for bare-metal virtualization, segmented VLANs for network isolation, and a reverse proxy layer for secure external access.This infrastructure enables the simulation of complex deployment scenarios, including Kubernetes cluster bootstrapping and failure recovery testing.",
        detailedTech: [
            { label: "Infrastructure", items: "Type-1 Hypervisors (ESXi), RAID 10 Storage Arrays, 10GbE Networking" },
            { label: "DevOps", items: "CI/CD Pipeline Runners, Docker Swarm, Ansible Automation" },
            { label: "Network Security", items: "Firewall Rulesets (PfSense), VPN Tunneling (WireGuard)" },
        ],
        tech: ["VMware ESXi", "Cisco UCS", "Kubernetes", "Ansible"],
        keyAchievement: "Demonstrates production-grade systems administration usage, managing the full stack from physical hardware assembly to Layer 7 application routing.",
        image: "/projects/homelab-logo.png",
    },
    {
        id: "05",
        title: "Personal Portfolio System",
        subtitle: "Frontend Architecture · UX Design",
        description: "A production-grade digital platform engineered with Next.js 14, synthesizing high-performance architecture with immersive interaction design.",
        fullDescription: "Designed and developed this live portfolio as a comprehensive demonstration of modern frontend engineering. Architected on the Next.js 14 App Router, the system leverages React Server Components (RSC) to minimize client-side javascript execution while delivering rich, 60fps animations via Framer Motion. Key features include a custom-built infinite-scroll project carousel, dynamic filesystem-based routing, and a semantic component structure. The entire codebase is strictly typed (TypeScript) and linted to enforce enterprise-level code quality standards, serving as both a brand identity and a production environment for testing advanced React patterns.",
        detailedTech: [
            { label: "Core Architecture", items: "Next.js 14 (App Router), React Server Components, Hybrid Static/Dynamic Rendering" },
            { label: "Interaction Design", items: "Framer Motion (Layout Animations), Tailwind CSS (Utility-first styling), Responsive layouts" },
            { label: "Engineering Rigor", items: "Strict TypeScript, ESLint configuration, Automated Image Optimization" },
        ],
        tech: ["Next.js 14", "TypeScript", "Framer Motion", "Tailwind CSS"],
        keyAchievement: "Achieved a perfect 100/100 Lighthouse performance score through aggressive bundle splitting and asset optimization, proving that high-end aesthetics do not require compromising web vitals.",
        image: "/projects/portfolio-logo.png",
    },
];

export function getProject(id: string) {
    return projects.find((p) => p.id === id);
}
