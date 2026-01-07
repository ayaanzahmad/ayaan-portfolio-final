"use client";

import { useEffect, useState } from "react";

interface TrailPoint {
    x: number;
    y: number;
    id: number;
    timestamp: number;
}

export default function CursorTrail() {
    const [trail, setTrail] = useState<TrailPoint[]>([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let pointId = 0;
        let animationFrame: number;

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });

            setTrail(prev => {
                const newPoint = {
                    x: e.clientX,
                    y: e.clientY,
                    id: pointId++,
                    timestamp: Date.now()
                };
                return [...prev.slice(-30), newPoint];
            });
        };

        const animate = () => {
            setTrail(prev =>
                prev.filter(p => Date.now() - p.timestamp < 1500)
            );
            animationFrame = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        animationFrame = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
            {/* Flowing baroque trail */}
            {trail.map((point, index) => {
                if (index === 0) return null;

                const prevPoint = trail[index - 1];
                const age = Date.now() - point.timestamp;
                const opacity = Math.max(0, 1 - age / 1500);
                const scale = 0.5 + (1 - age / 1500) * 0.5;

                return (
                    <div key={point.id}>
                        {/* Flowing curve between points */}
                        <svg
                            className="absolute"
                            style={{
                                left: Math.min(prevPoint.x, point.x) - 50,
                                top: Math.min(prevPoint.y, point.y) - 50,
                                width: Math.abs(point.x - prevPoint.x) + 100,
                                height: Math.abs(point.y - prevPoint.y) + 100,
                                opacity: opacity * 0.6,
                            }}
                        >
                            <path
                                d={`M ${prevPoint.x - Math.min(prevPoint.x, point.x) + 50} ${prevPoint.y - Math.min(prevPoint.y, point.y) + 50} 
                    Q ${(prevPoint.x + point.x) / 2 - Math.min(prevPoint.x, point.x) + 50 + 20} ${(prevPoint.y + point.y) / 2 - Math.min(prevPoint.y, point.y) + 50 - 20} 
                    ${point.x - Math.min(prevPoint.x, point.x) + 50} ${point.y - Math.min(prevPoint.y, point.y) + 50}`}
                                stroke="#EAEAEA"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* Ornamental flourish at intervals */}
                        {index % 3 === 0 && (
                            <div
                                className="absolute transition-all duration-300"
                                style={{
                                    left: point.x,
                                    top: point.y,
                                    transform: `translate(-50%, -50%) scale(${scale}) rotate(${index * 45}deg)`,
                                    opacity: opacity,
                                }}
                            >
                                <svg width="40" height="40" viewBox="0 0 40 40">
                                    <path
                                        d="M20,10 Q30,10 30,20 Q30,30 20,30 Q15,30 15,25 Q15,22 18,22 Q20,22 20,24"
                                        stroke="#A78BFA"
                                        strokeWidth="1.5"
                                        fill="none"
                                    />
                                    <circle cx="20" cy="20" r="3" fill="#EAEAEA" opacity="0.6" />
                                    <circle cx="25" cy="15" r="1.5" fill="#A78BFA" />
                                    <circle cx="15" cy="25" r="1.5" fill="#A78BFA" />
                                </svg>
                            </div>
                        )}
                    </div>
                );
            })}

            {/* Main cursor ornament */}
            <div
                className="absolute transition-all duration-100"
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: "translate(-50%, -50%)",
                }}
            >
                <svg width="50" height="50" viewBox="0 0 50 50">
                    <path
                        d="M25,15 Q30,15 32,20 Q34,25 30,28 Q25,31 25,25 Q25,20 28,18"
                        stroke="#EAEAEA"
                        strokeWidth="2"
                        fill="none"
                    />
                    <path
                        d="M25,15 Q20,15 18,20 Q16,25 20,28 Q25,31 25,25 Q25,20 22,18"
                        stroke="#EAEAEA"
                        strokeWidth="2"
                        fill="none"
                    />
                    <circle cx="25" cy="25" r="4" fill="#A78BFA" opacity="0.8" />
                    <circle cx="25" cy="25" r="7" stroke="#EAEAEA" strokeWidth="1" fill="none" opacity="0.5" />

                    <circle cx="25" cy="15" r="1.5" fill="#EAEAEA" />
                    <circle cx="35" cy="25" r="1.5" fill="#EAEAEA" />
                    <circle cx="25" cy="35" r="1.5" fill="#EAEAEA" />
                    <circle cx="15" cy="25" r="1.5" fill="#EAEAEA" />
                </svg>
            </div>

            {/* Ambient glow */}
            <div
                className="absolute w-96 h-96 -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    background: "radial-gradient(circle, rgba(129, 140, 248, 0.15), transparent 70%)",
                }}
            />
        </div>
    );
}
