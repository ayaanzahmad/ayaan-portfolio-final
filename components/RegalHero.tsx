"use client";

import Crest from "./Crest";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

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
            <em>Ahmad</em>
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
          Software, infrastructure, and the people behind them. <br />
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
