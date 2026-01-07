"use client";

import { motion } from "framer-motion";
import { projects } from "@/app/data";
import Link from "next/link";
import { useState } from "react";
import { useSpotlight } from "@/contexts/SpotlightContext";


export default function ProjectCarousel() {
    const [isSlowed, setIsSlowed] = useState(false);
    const { setIsHidden } = useSpotlight();
    const marqueeProjects = [...projects, ...projects];

    const handleCardHover = (hovering: boolean) => {
        setIsSlowed(hovering);
        setIsHidden(hovering);
    };

    return (
        <div
            className="w-full overflow-hidden py-12"
            style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)"
            }}
        >
            <motion.div
                className="flex gap-6"
                animate={{
                    x: ["-50%", "0%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: isSlowed ? 300 : 30,
                        ease: "linear",
                    },
                    duration: 2,
                }}
            >
                {marqueeProjects.map((project, idx) => (
                    <Link
                        key={`${project.id}-${idx}`}
                        href={`/projects/${project.id}`}
                        className="shrink-0 w-[280px] md:w-[360px] group relative aspect-[3/4] overflow-visible rounded-lg"
                        onMouseEnter={() => handleCardHover(true)}
                        onMouseLeave={() => handleCardHover(false)}
                    >
                        <div className="relative w-full h-full transition-all duration-300 group-hover:scale-105 rounded-lg overflow-hidden bg-[#0F0F0F] border-2 border-[#262626] group-hover:border-white">

                            {/* Background / Image Placeholder */}
                            <div className="absolute inset-0 bg-[#080808] group-hover:bg-[#0F0F0F] transition-colors duration-500" />

                            {/* Background / Image Placeholder - Top Half Only */}
                            <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#080808] group-hover:bg-[#0F0F0F] transition-colors duration-500 overflow-hidden">
                                {project.image && (project.image.includes('/') || project.image.includes('.')) ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110 rounded-xl"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-[#262626] font-bold text-6xl opacity-30 select-none">
                                        {project.image}
                                    </div>
                                )}
                            </div>



                            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-[#080808]/95 via-[#080808]/60 to-transparent">
                                {project.featured && (
                                    <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase text-[#080808] bg-[#EAEAEA] px-2 py-1 rounded-sm shadow-[0_0_10px_rgba(234,234,234,0.3)] z-20">
                                        Featured
                                    </span>
                                )}
                                <span className="text-xs font-mono text-white mb-2">
                                    {project.id}
                                </span>
                                <h3 className="text-xl font-medium text-[#EAEAEA] mb-2 group-hover:text-white transition-colors h-14 flex items-end line-clamp-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-[#A0A0A0] line-clamp-3 mb-4 group-hover:text-[#EAEAEA] transition-colors">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.slice(0, 3).map((t) => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider text-neutral-300 border border-neutral-700 px-2 py-1 rounded-full bg-neutral-900/80">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-neutral-300 text-black text-sm font-medium rounded-md transition-colors shadow-lg">
                                        View Project
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </motion.div>
        </div>
    );
}
