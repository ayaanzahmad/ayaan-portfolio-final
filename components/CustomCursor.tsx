"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const updateHoverState = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer");

            setIsHovering(!!isClickable);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("mouseover", updateHoverState);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mouseover", updateHoverState);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isVisible]);

    if (typeof window === "undefined") return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C5A059] shadow-[0_0_10px_rgba(197,160,89,0.8)] pointer-events-none z-[100] hidden md:block"
                animate={{
                    x: position.x - 4,
                    y: position.y - 4,
                    scale: isHovering ? 0 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 800,
                    damping: 35,
                    mass: 0.1,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#C5A059]/60 bg-[#C5A059]/10 backdrop-blur-sm pointer-events-none z-[99] hidden md:block"
                animate={{
                    x: position.x - 16,
                    y: position.y - 16,
                    scale: isHovering ? 1.8 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.5,
                }}
            />
        </>
    );
}
