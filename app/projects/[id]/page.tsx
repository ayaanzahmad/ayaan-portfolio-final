"use client";

import { projects } from "@/app/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { use } from "react";

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#080808] text-[#EAEAEA] selection:bg-[#EAEAEA]/20">
            <div className="mx-auto max-w-4xl px-6 py-20 md:px-12">
                <Link
                    href="/"
                    className="group inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-[#A0A0A0] hover:text-[#EAEAEA] transition-colors"
                >
                    <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-12"
                >
                    {/* Main Visual */}
                    <div className="mb-12 aspect-video w-full rounded-lg bg-[#0F0F0F] border border-[#262626] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#080808]/30 z-10" />
                        {project.image && (project.image.includes('/') || project.image.includes('.')) ? (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-contain rounded-xl"
                            />
                        ) : (
                            <span className="text-[#262626] font-bold text-9xl select-none opacity-50 relative z-0">
                                {project.image || project.id}
                            </span>
                        )}
                    </div>

                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex flex-wrap gap-2 text-[#EAEAEA] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                            {project.subtitle || "Project"}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#EAEAEA] mb-6">
                            {project.title}
                        </h1>
                        <p className="text-base md:text-lg leading-relaxed text-[#A0A0A0]">
                            {project.description}
                        </p>
                        {project.link && (
                            <div className="mt-8">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#EAEAEA] text-[#080808] text-sm font-bold tracking-widest uppercase rounded-full hover:bg-white transition-colors shadow-[0_0_20px_rgba(234,234,234,0.3)]"
                                >
                                    Visit Website
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>

                    {/* The Pitch */}


                    {/* Full Description */}
                    {project.fullDescription && (
                        <section className="mb-12 border-t border-[#262626] pt-12">
                            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#A0A0A0] mb-4">
                                Description
                            </h2>
                            <p className="text-base leading-relaxed text-[#EAEAEA] whitespace-pre-line">
                                {project.fullDescription}
                            </p>
                        </section>
                    )}

                    {/* Wow Factor */}
                    {/* Key Achievement */}
                    {project.keyAchievement && (
                        <section className="mb-12 border-t border-[#262626] pt-12">
                            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#A0A0A0] mb-4">
                                Key Achievement
                            </h2>
                            <p className="text-base leading-relaxed text-[#EAEAEA]">
                                {project.keyAchievement}
                            </p>
                        </section>
                    )}

                    {/* Tech Stack */}
                    <section className="mb-12 border-t border-[#262626] pt-12">
                        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#A0A0A0] mb-6">
                            Technology
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-3 py-1.5 border border-[#EAEAEA] text-xs uppercase tracking-wider text-[#EAEAEA] rounded-full bg-[#EAEAEA]/5 hover:bg-[#EAEAEA]/10 transition-colors"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}
