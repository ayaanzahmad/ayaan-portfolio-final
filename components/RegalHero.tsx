"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function Crest() {
  return (
    <svg
      viewBox="0 0 180 125"
      fill="none"
      aria-hidden="true"
      className="royal-crest"
    >
      <path
        d="M55 98C24 85 24 42 46 25M125 98c31-13 31-56 9-73"
        stroke="currentColor"
        strokeWidth=".8"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(0 ${i * 12})`}>
          <path
            d="M35 29q-15-10-12-19 14 4 12 19Zm-1 7q12-11 16-7-2 12-16 7Z"
            fill="currentColor"
            opacity={0.5 + i * 0.08}
          />
          <path
            d="M145 29q15-10 12-19-14 4-12 19Zm1 7q-12-11-16-7 2 12 16 7Z"
            fill="currentColor"
            opacity={0.5 + i * 0.08}
          />
        </g>
      ))}
      <path
        d="M64 34 60 18 75 25 90 9 105 25 120 18 116 34ZM66 40h48M70 101q20 13 40 0"
        stroke="currentColor"
        strokeWidth="1"
      />
      <text
        x="90"
        y="91"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontFamily="var(--font-serif),serif"
        fontSize="54"
        letterSpacing="-7"
      >
        AA
      </text>
    </svg>
  );
}

export default function RegalHero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.94]);
  return (
    <section ref={ref} className="regal-hero" aria-label="Introduction">
      <div className="hero-curtain curtain-left" aria-hidden="true" />
      <div className="hero-curtain curtain-right" aria-hidden="true" />
      <div className="palace-frame" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="royal-arch" aria-hidden="true" />
      <div className="regal-topline">
        <span>Software · Systems · Operations</span>
        <span>Atlanta, Georgia</span>
      </div>
      <motion.div
        className="regal-content"
        style={reduced ? {} : { y, opacity, scale }}
      >
        <div className="crest-reveal">
          <Crest />
        </div>
        <p className="regal-overline">The portfolio of</p>
        <h1 className="regal-name" aria-label="Ayaan Ahmad">
          <span className="name-mask">
            <span>Ayaan</span>
          </span>
          <span className="name-mask">
            <em>Ahmad.</em>
          </span>
        </h1>
        <div className="royal-divider" aria-hidden="true">
          <span />◆<span />
        </div>
        <p className="regal-intro">
          An engineer’s curiosity.
          <br className="mobile-only" /> A considered approach.
        </p>
        <p className="regal-description">
          Software, infrastructure, and the people behind them.{" "}
          <br />
          Computer science at Georgia State, with an interest in technology & IP
          law.
        </p>
        <div className="regal-actions">
          <a className="button royal-button" href="#work">
            Discover the work <ArrowUpRight size={16} />
          </a>
          <a
            className="text-link"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View résumé <ArrowUpRight size={15} />
          </a>
        </div>
      </motion.div>
      <div className="regal-bottom">
        <span className="regal-availability">
          <i /> Open to opportunities
        </span>
        <a href="#profile" className="scroll-invitation">
          <span>Scroll to discover</span>
          <ArrowDown size={16} />
        </a>
        <span className="regal-edition">Purpose in every detail.</span>
      </div>
    </section>
  );
}
