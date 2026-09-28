"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import BrandMark from "./BrandMark";
import { projects } from "@/app/data";
import { caseStudies } from "@/app/case-studies";
export default function ProjectShowcase() {
  const [filter, setFilter] = useState("All work");
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const list = projects.filter(
    (p) => filter === "All work" || p.category === filter,
  );
  const p = list[index] || list[0];
  const detail = caseStudies[p.id];
  function move(step: number) {
    setIndex((i) => (i + step + list.length) % list.length);
  }
  return (
    <section
      className="showcase"
      aria-label="Project collection"
      aria-roledescription="carousel"
    >
      <div className="showcase-toolbar">
        <div className="filters" aria-label="Filter projects">
          {["All work", "Software", "Systems", "Operations"].map((f) => (
            <button
              key={f}
              aria-pressed={filter === f}
              className={filter === f ? "active" : ""}
              onClick={() => {
                setFilter(f);
                setIndex(0);
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="carousel-controls">
          <button
            aria-label="Previous project"
            onClick={() => move(-1)}
            disabled={list.length < 2}
          >
            <ArrowLeft size={18} />
          </button>
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(list.length).padStart(2, "0")}
          </span>
          <button
            aria-label="Next project"
            onClick={() => move(1)}
            disabled={list.length < 2}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <div
        className="showcase-stage"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            move(1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            move(-1);
          }
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={p.id}
            className="showcase-slide"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${list.length}: ${p.title}`}
          >
            <Link
              href={`/projects/${p.id}`}
              className="showcase-image"
              aria-label={`Explore ${p.title}`}
            >
              <img
                src={`/case-studies/${p.id}.svg`}
                alt={detail.caption}
                width="1200"
                height="720"
              />
              <span className="image-explore">
                Explore case study <ArrowUpRight size={17} />
              </span>
            </Link>
            <div className="showcase-copy"><BrandMark id={p.id}/>
              <span className="eyebrow">
                {p.number} / {p.subtitle}
              </span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <span className="showcase-role">{detail.role}</span>
              <div className="tags">
                {p.tech.slice(0, 3).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="showcase-links">
                <Link
                  href={`/projects/${p.id}`}
                  className="button showcase-primary"
                >
                  Read the story <ArrowRight size={17} />
                </Link>
                {detail.link && (
                  <a
                    className="text-link"
                    href={detail.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {detail.linkLabel}
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
      <div className="project-pagination" aria-label="Choose a project">
        {list.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setIndex(i)}
            aria-label={`Show ${item.title}`}
            aria-pressed={index === i}
            className={index === i ? "selected" : ""}
          >
            <span>{item.number}</span>
            {item.title}
          </button>
        ))}
      </div>
      <span className="sr-only" aria-live="polite">
        {p.title}, project {index + 1} of {list.length}
      </span>
    </section>
  );
}
