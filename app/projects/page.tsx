"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/app/data";


const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-[#080808] text-[#EAEAEA] selection:bg-[#EAEAEA]/20">
            <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-20">
                <header className="flex items-center justify-between mb-20">
                    <Link
                        href="/"
                        className="text-xs font-bold tracking-[0.2em] uppercase text-[#A0A0A0] hover:text-[#EAEAEA] transition-colors"
                    >
                        ← Back to Home
                    </Link>
                    <div className="flex items-center gap-8">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-[0.2em] uppercase text-[#A0A0A0] hover:text-[#EAEAEA] transition-colors">
                            Resume
                        </a>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#EAEAEA]">
                            Projects
                        </span>
                    </div>
                </header>

                <div className="mb-12">
                    <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-[#EAEAEA]">
                        All Projects
                    </h1>
                </div>

                <div className="grid gap-x-8 gap-y-20 md:grid-cols-2">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="group cursor-pointer"
                        >
                            <Link href={`/projects/${project.id}`} className="block">
                                <div className="mb-6 aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#0F0F0F] border-2 border-[#262626] transition-all group-hover:border-[#EAEAEA] relative">
                                    <div className="h-full w-full flex items-center justify-center text-[#262626] text-xs tracking-widest uppercase bg-[#080808]">
                                        {project.image && (project.image.includes('/') || project.image.includes('.')) ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105 rounded-xl"
                                            />
                                        ) : (
                                            `Image ${project.image || project.id}`
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-start justify-between border-t-2 border-[#262626] pt-4">
                                    <div>
                                        <span className="text-xs font-mono text-[#EAEAEA] mb-2 block">
                                            {project.id}
                                        </span>
                                        <h3 className="text-xl font-medium text-[#EAEAEA] group-hover:text-[#EAEAEA] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="mt-2 max-w-sm text-sm text-[#A0A0A0] leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                    {project.subtitle && (
                                        <span className="hidden md:block text-xs tracking-widest uppercase text-[#A0A0A0]">
                                            {project.subtitle}
                                        </span>
                                    )}
                                </div>
                                <div className="mt-4 flex gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[10px] uppercase tracking-wider text-[#A0A0A0]"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
