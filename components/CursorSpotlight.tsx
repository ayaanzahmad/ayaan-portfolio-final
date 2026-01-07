"use client";

import { useEffect, useState } from "react";
import { useSpotlight } from "@/contexts/SpotlightContext";

export default function CursorSpotlight() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const { isHidden } = useSpotlight();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setOpacity(1);
        };

        const handleMouseLeave = () => {
            setOpacity(0);
        };

        const handleMouseEnter = () => {
            setOpacity(1);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                opacity: isHidden ? 0 : opacity,
                background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(212, 175, 55, 0.08), transparent 50%)`,
            }}
        />
    );
}
