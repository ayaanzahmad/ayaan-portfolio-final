"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Code, Layout, Server, Sparkles } from "lucide-react";
import { projects } from "@/app/data";
import Link from "next/link";

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Hero Parallax & Blur
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.15], ["blur(0px)", "blur(20px)"]);

  return (
    <main ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] overflow-x-hidden selection:bg-[#C5A059]/20 selection:text-white">

      {/* Navigation */}
      <header className="fixed top-0 w-full px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between z-50 frosted-glass-nav border-b border-[#E5E0D8]/50">
        <span className="text-sm font-bold tracking-[0.4em] uppercase text-[#1A1A1A]" style={{ fontFamily: 'var(--font-cinzel)' }}>
          Ayaan Ahmad
        </span>
        <nav className="hidden md:flex gap-10 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6A655C]">
          <a href="#about" className="hover:text-[#C5A059] transition-all duration-300">Profile</a>
          <a href="#experience" className="hover:text-[#C5A059] transition-all duration-300">Experience</a>
          <a href="#projects" className="hover:text-[#C5A059] transition-all duration-300">Showcase</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-all duration-300 border-l border-[#E5E0D8] pl-10">
            Resume
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col justify-center items-center px-6 relative sunlit-gradient sticky top-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        <motion.div
          className="max-w-5xl mx-auto text-center will-change-transform"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY, filter: heroBlur }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <span className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#C5A059]/30 text-[11px] uppercase tracking-widest text-[#C5A059] font-medium frosted-glass bg-white/70 shadow-sm">
              <Code className="w-3 h-3" /> Software Engineer
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-[11rem] leading-[0.85] text-[#1A1A1A] mb-10 tracking-tight"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            <span className="font-light italic text-[#C5A059] pr-4">Ayaan</span> <br />
            Ahmad.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-xl mx-auto text-lg text-[#4A4742] leading-relaxed font-light font-sans"
          >
            Architecting high-concurrency platforms, predictive data pipelines, and scalable enterprise infrastructures.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 flex flex-col items-center gap-4 animate-bounce text-[#C5A059]"
        >
          <span className="text-[10px] tracking-widest uppercase font-bold">Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#C5A059] to-transparent"></div>
        </motion.div>
      </section>

      {/* Content wrapper with shadow overlay */}
      <div className="relative z-10 bg-[#FAF9F6] shadow-[0_-30px_50px_rgba(250,249,246,1)] rounded-t-3xl border-t border-[#E5E0D8]">

        {/* About Section */}
        <section id="about" className="py-32 md:py-48 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto scroll-mt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-20 items-center"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-[12px] font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-4 block">01 // Profile</span>
              <h2 className="text-4xl md:text-6xl text-[#1A1A1A] mb-8 leading-tight drop-shadow-sm" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Engineering <br /><span className="italic text-[#C5A059]">Solutions</span>.
              </h2>
              <p className="text-[#4A4742] text-lg leading-relaxed font-light mb-8 font-sans">
                I specialize in designing and building high-performance software systems. With deep expertise in event-driven architecture, distributed data pipelines, and enterprise virtualization, I write clean, type-safe code to deliver solutions that prioritize scalability, resilience, and operational efficiency.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="p-8 rounded-2xl border border-[#E5E0D8] bg-white shadow-xl glowing-hover">
                <Layout className="w-8 h-8 text-[#C5A059] mb-6 drop-shadow-sm" />
                <h3 className="text-xl text-[#1A1A1A] mb-3" style={{ fontFamily: 'var(--font-cinzel)' }}>Frontend Architecture</h3>
                <p className="text-sm text-[#6A655C] leading-relaxed font-sans">High-performance React & Next.js ecosystems.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="p-8 rounded-2xl border border-[#E5E0D8] bg-white shadow-xl glowing-hover md:translate-y-12 mt-6 md:mt-0">
                <Server className="w-8 h-8 text-[#C5A059] mb-6 drop-shadow-sm" />
                <h3 className="text-xl text-[#1A1A1A] mb-3" style={{ fontFamily: 'var(--font-cinzel)' }}>Backend Engineering</h3>
                <p className="text-sm text-[#6A655C] leading-relaxed font-sans">Fault-tolerant microservices and data pipelines.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 md:py-48 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto border-t border-[#E5E0D8]/80 scroll-mt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20 text-center"
          >
            <motion.span variants={fadeInUp} className="text-[12px] font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-4 block">02 // Background</motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl text-[#1A1A1A] drop-shadow-sm" style={{ fontFamily: 'var(--font-cinzel)' }}>Professional Journey</motion.h2>
            <motion.div variants={fadeInUp} className="w-px h-16 bg-gradient-to-b from-[#C5A059]/40 to-transparent mx-auto mt-10"></motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-6"
          >
            {[
              {
                role: "Full Stack Engineer",
                company: "Oakwin",
                date: "Sep 2025 — Present",
                desc: "Building resilient enterprise software systems.",
                details: "Designed and implemented robust backend architectures and scalable frontend interfaces. Focused on system reliability, type-safe data pipelines, and high-concurrency event processing, ensuring mission-critical enterprise resilience.",
              },
              {
                role: "Full Stack Developer",
                company: "Cenvi",
                date: "May 2025 — Present",
                desc: "Architecting high-concurrency event logistics.",
                details: "Developed a mission-critical event management system capable of handling high-concurrency ticket sales and complex vendor logistics serving large-scale 10k+ attendee festivals. Built with Vue.js, Go, TypeScript, and PostgreSQL.",
              },
              {
                role: "Co-Founder",
                company: "Rooh Review",
                date: "2022 — Present",
                desc: "Launching highly specialized digital ventures.",
                details: "Spearheaded the technical direction and product vision for highly specialized vertical SaaS platforms, maintaining full-stack oversight from infrastructure bootstrapping to frontend conversion rate optimization.",
              },
              {
                role: "Teacher",
                company: "Gwinnett Islamic Circle",
                date: "2023 — Present",
                desc: "Educating and mentoring future generations.",
                details: "Led curriculum development and provided technical mentorship, translating complex logic and foundational concepts into accessible frameworks for students, building strong communication and leadership proficiency.",
              },
              {
                role: "Competitions Lead",
                company: "MIST Atlanta",
                date: "2024 — 2025",
                desc: "Organizing robust operational frameworks.",
                details: "Managed digital and physical logistics for large-scale region-wide competitions, defining operational constraints, scheduling algorithms, and streamlining the evaluation pipelines for hundreds of concurrent participants.",
              },
            ].map((job, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group flex flex-col p-8 md:p-10 rounded-2xl border border-[#E5E0D8]/80 bg-white shadow-md hover:shadow-2xl glowing-hover cursor-pointer transition-all duration-500 overflow-hidden"
                onClick={() => setExpandedJob(expandedJob === idx ? null : idx)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
                  <div>
                    <h3 className="text-2xl text-[#1A1A1A] mb-2 font-bold" style={{ fontFamily: 'var(--font-cinzel)' }}>{job.role}</h3>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm uppercase tracking-widest text-[#C5A059] font-bold">{job.company}</span>
                      <span className="text-sm text-[#6A655C] font-sans italic">{job.desc}</span>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 flex items-center justify-between lg:justify-end gap-6 w-full md:w-auto">
                    <span className="text-sm tracking-widest text-[#1A1A1A] font-semibold bg-[#FAF9F6] px-4 py-2 border border-[#E5E0D8] rounded-full">{job.date}</span>
                    <div className="w-10 h-10 rounded-full border border-[#E5E0D8] flex items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-colors duration-300">
                      <ArrowRight className={`w-4 h-4 text-[#C5A059] group-hover:text-white transition-all duration-300 ${expandedJob === idx ? "rotate-90" : "rotate-0 md:-rotate-45"}`} />
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedJob === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="pt-6 border-t border-[#E5E0D8]/50">
                        <p className="text-[#4A4742] text-lg leading-relaxed font-sans">
                          {job.details}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects Showcase Section */}
        <section id="projects" className="py-32 md:py-48 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto border-t border-[#E5E0D8]/80 bg-[#FAF9F6] scroll-mt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20 text-center"
          >
            <motion.span variants={fadeInUp} className="text-[12px] font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-4 block">03 // Showcase</motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl text-[#1A1A1A] drop-shadow-sm" style={{ fontFamily: 'var(--font-cinzel)' }}>Selected Works</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-10"
          >
            {projects.map((project, idx) => (
              <Link href={`/projects/${project.id}`} key={idx} className="block group">
                <motion.div variants={fadeInUp} className="relative p-12 md:p-16 rounded-3xl border border-[#E5E0D8] bg-white shadow-xl overflow-hidden glowing-hover cursor-pointer min-h-[450px] flex flex-col justify-end transition-all duration-700">
                  <div className="absolute inset-0 bg-[#FAF9F6]">
                    {project.image && (project.image.includes('/') || project.image.includes('.')) ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain opacity-10 p-8 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center opacity-10 group-hover:opacity-100 transition-all duration-700">
                        <Code className="w-32 h-32 text-[#C5A059]" />
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

                  <div className="relative z-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <Code className="w-10 h-10 text-[#C5A059] mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100 drop-shadow-md" />
                    <h3 className="text-3xl md:text-2xl lg:text-3xl text-[#1A1A1A] mb-4 font-bold" style={{ fontFamily: 'var(--font-cinzel)' }}>{project.title}</h3>
                    <p className="text-[#4A4742] text-sm lg:text-base font-sans leading-relaxed max-w-sm line-clamp-3">{project.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-24 px-6 md:px-12 lg:px-20 border-t border-[#E5E0D8]/80 bg-white shadow-[inset_0_20px_40px_rgba(250,249,246,0.5)]">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#1A1A1A] mb-6 drop-shadow-sm" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Let&apos;s build something <span className="italic text-[#C5A059]">scalable.</span>
              </h2>
              <a href="mailto:ayaanzahmad@gmail.com" className="inline-block text-xl text-[#4A4742] font-semibold border-b border-[#C5A059]/30 hover:border-[#C5A059] hover:text-[#C5A059] pb-1 transition-all duration-300">
                ayaanzahmad@gmail.com
              </a>
            </div>

            <div className="flex gap-8">
              <a href="https://github.com/ayaanzahmad" target="_blank" rel="noopener noreferrer" className="text-sm font-bold tracking-widest uppercase text-[#6A655C] hover:text-[#C5A059] transition-colors">Github</a>
              <a href="https://linkedin.com/in/ayaan-ahmad-071673321" target="_blank" rel="noopener noreferrer" className="text-sm font-bold tracking-widest uppercase text-[#6A655C] hover:text-[#C5A059] transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-[#E5E0D8]/50 flex justify-between items-center">
            <span className="text-[10px] tracking-widest uppercase text-[#6A655C] font-bold">© {new Date().getFullYear()} Ayaan Ahmad</span>
            <span className="text-[10px] tracking-widest uppercase text-[#C5A059] font-bold">Crafted with Precision</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
