"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCarousel from "@/components/ProjectCarousel";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#EAEAEA] selection:bg-[#EAEAEA]/20 overflow-x-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        {/* Navbar */}
        <header className="flex items-center justify-between py-8 md:py-12 border-b border-[#262626] sticky top-0 bg-[#080808]/95 backdrop-blur-sm z-40">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#EAEAEA]">
            Ayaan Ahmad
          </span>
          <nav className="hidden gap-8 text-xs font-medium tracking-[0.15em] uppercase text-[#A0A0A0] md:flex items-center">
            <Link href="/projects" className="hover:text-[#EAEAEA] transition-colors cursor-pointer">
              Projects
            </Link>
            <a href="#about" className="hover:text-[#EAEAEA] transition-colors cursor-pointer">
              About
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#EAEAEA] transition-colors cursor-pointer">
              Resume
            </a>
            <a href="#contact" className="hover:text-[#EAEAEA] transition-colors cursor-pointer">
              Contact
            </a>
            <span className="w-px h-4 bg-[#262626]"></span>
            <a href="https://github.com/ayaanzahmad" target="_blank" rel="noopener noreferrer" className="hover:text-[#EAEAEA] transition-colors" aria-label="GitHub">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ayaan-ahmad-071673321/" target="_blank" rel="noopener noreferrer" className="hover:text-[#EAEAEA] transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </nav>
        </header>

        {/* Hero */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mt-20 md:mt-32 mb-32"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl text-5xl font-medium tracking-tight leading-[1.1] md:text-7xl lg:text-8xl text-[#EAEAEA]"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              Engineering production systems
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#A0A0A0] inline-block"
            >
              from concept to deployment.
            </motion.span>
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex gap-4"
          >
            <span className="rounded-full border border-[#EAEAEA] px-4 py-1.5 text-xs text-[#EAEAEA] bg-[#EAEAEA]/5">
              Available for Summer 2025 Internships
            </span>
          </motion.div>
        </motion.section>

        {/* Selected Work (Carousel) */}
        <section id="work" className="border-t-2 border-[#EAEAEA] pt-24 scroll-mt-20">
          <div className="grid gap-4 md:grid-cols-[180px_1fr]">
            <div className="flex flex-col justify-start">
              <Link href="/projects" className="group">
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#EAEAEA] group-hover:text-[#EAEAEA] transition-colors">
                  Selected Work
                </h2>
                <span className="mt-4 inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#A0A0A0] group-hover:text-[#EAEAEA] transition-colors">
                  View All Projects →
                </span>
              </Link>
              <p className="mt-6 max-w-xs text-[#A0A0A0] text-sm leading-relaxed">
                Featured projects demonstrating full-stack development, data engineering, distributed systems, and enterprise infrastructure management.
              </p>
            </div>
            <div>
              <ProjectCarousel />
            </div>
          </div>
        </section>

        {/* About / Experience Compact */}
        <section id="about" className="mt-40 border-t-2 border-[#EAEAEA] pt-24 scroll-mt-20">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#A0A0A0]">
                Profile
              </h2>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-medium text-[#EAEAEA]">About</h3>
                <p className="mt-4 max-w-xl text-[#A0A0A0] leading-relaxed">
                  Systems engineer with focus on production infrastructure and commercial software development.
                  Core expertise in distributed systems, enterprise virtualization (VMware ESXi), and full-stack SaaS architecture.
                  Currently operating a 48-core Cisco UCS production environment for development and testing, while building
                  multi-platform social media automation SaaS serving commercial clients. Pursuing advanced education in
                  Electrical and Computer Engineering to formalize expertise in computer architecture and embedded systems. Co-founded
                  Rooh Review, an education platform, and mentor high school students in computer science fundamentals.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#EAEAEA]">Experience</h3>
                <ul className="mt-6 space-y-6">
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline border-b border-[#262626] pb-6">
                    <span className="font-medium text-[#EAEAEA]">
                      Opakwin · Intern
                    </span>
                    <span className="text-sm text-[#A0A0A0] mt-1 sm:mt-0">
                      2024
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline border-b border-[#262626] pb-6">
                    <span className="font-medium text-[#EAEAEA]">
                      Cenve · Intern
                    </span>
                    <span className="text-sm text-[#A0A0A0] mt-1 sm:mt-0">
                      2024
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline border-b border-[#262626] pb-6">
                    <span className="font-medium text-[#EAEAEA]">
                      Rooh Review · Co-Founder
                    </span>
                    <span className="text-sm text-[#A0A0A0] mt-1 sm:mt-0">
                      2022 — Present
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline border-b border-[#262626] pb-6">
                    <span className="font-medium text-[#EAEAEA]">
                      Gwinnett Islamic Circle · Teacher
                    </span>
                    <span className="text-sm text-[#A0A0A0] mt-1 sm:mt-0">
                      2023 — Present
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline pb-6">
                    <span className="font-medium text-[#EAEAEA]">
                      MIST Atlanta · Competitions Lead
                    </span>
                    <span className="text-sm text-[#A0A0A0] mt-1 sm:mt-0">
                      2024 — 2025
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="mt-40 border-t border-[#262626] pt-20 pb-12 scroll-mt-20">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-medium tracking-tight md:text-5xl text-[#EAEAEA]">
                Let&apos;s connect and collaborate.
              </h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#A0A0A0]">
                Contact
              </h3>
              <a
                href="mailto:ayaanzahmad@gmail.com"
                className="block text-lg text-[#EAEAEA] hover:text-[#EAEAEA] transition-colors"
              >
                ayaanzahmad@gmail.com
              </a>
              <p className="text-sm text-[#A0A0A0]">
                Atlanta, GA<br />
                Available for internships and full-time opportunities
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#A0A0A0]">
                Social
              </h3>
              <div className="flex flex-col gap-3">
                <a href="https://github.com/ayaanzahmad" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A0A0A0] hover:text-[#EAEAEA] transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/ayaan-ahmad-071673321/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A0A0A0] hover:text-[#EAEAEA] transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col md:flex-row justify-between items-end gap-6 text-xs text-[#A0A0A0] uppercase tracking-wider">
            <span>© 2025 Ayaan Ahmad</span>
            <div className="flex gap-6">
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>
        </footer>
      </div >
    </main >
  );
}
