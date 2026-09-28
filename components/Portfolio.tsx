"use client";
import { useState, useEffect, useRef } from "react";
import RegalHero from "./RegalHero";
import Crest from "./Crest";
import ProjectShowcase from "./ProjectShowcase";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Server,
  Scale,
  Menu,
  X,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";
import { projects, experience } from "@/app/data";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link href="/#main" className="wordmark" aria-label="Ayaan Ahmad home">
        <Crest />
      </Link>
      <nav
        aria-label="Main navigation"
        className={open ? "navigation open" : "navigation"}
      >
        {[
          ["Profile", "/#profile"],
          ["Experience", "/#experience"],
          ["Selected work", "/#work"],
        ].map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <a className="nav-contact" href="mailto:ayaanzahmad@gmail.com">
          Let’s connect <ArrowUpRight size={15} />
        </a>
      </nav>
      <button
        className="menu-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <Link href="/#main" className="wordmark" aria-label="Ayaan Ahmad home">
        <Crest />
      </Link>
      <span>Thoughtfully built in Atlanta.</span>
      <div>
        <a href="https://github.com/ayaanzahmad">
          GitHub <ArrowUpRight size={13} />
        </a>
        <a href="https://linkedin.com/in/ayaan-ahmad-071673321">
          LinkedIn <ArrowUpRight size={13} />
        </a>
        <a href="#main">Back to top ↑</a>
      </div>
    </footer>
  );
}
export function ProjectGrid() {
  return <ProjectShowcase />;
}
export default function Portfolio() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = mainRef.current?.querySelectorAll(
      ".profile > div, .expertise article, .section-heading, .project-card, .experience-row, .contact-inner",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    items?.forEach((item, i) => {
      if (item.getBoundingClientRect().top > window.innerHeight) {
        item.classList.add("scroll-reveal");
        (item as HTMLElement).style.setProperty(
          "--reveal-delay",
          `${(i % 2) * 80}ms`,
        );
        observer.observe(item);
      }
    });
    return () => {
      observer.disconnect();
      items?.forEach((item) =>
        item.classList.remove("scroll-reveal", "is-revealed"),
      );
    };
  }, []);
  return (
    <>
      <Header />
      <main id="main" ref={mainRef}>
        <RegalHero />
        <div className="intro-signature" aria-hidden="true">
          <span />
          Thoughtful by design. Practical by nature.
          <span />
        </div>
        <section id="profile" className="section wrap profile">
          <div>
            <span className="eyebrow section-kicker">
              01 / The person behind the work
            </span>
            <h2>
              Curiosity across disciplines.
              <br />
              <em>Care in the details.</em>
            </h2>
          </div>
          <div className="profile-copy">
            <p className="large-copy">
              I like understanding how things work—and making them work better.
            </p>
            <p>
              That takes me from writing software and administering a Cisco
              server to organizing business workflows and documenting complex
              requirements. I bring the same practical, detail-oriented approach
              to each.
            </p>
            <p>
              I’m pursuing a B.S. in Computer Science with a minor in Economics
              at Georgia State University, graduating in May 2028. I’m also
              studying USPTO registration exam materials and exploring
              opportunities at the intersection of technology and intellectual
              property.
            </p>
            <div className="education">
              <span
                className="education-mark gsu-brand"
                role="img"
                aria-label="Georgia State University logo"
              />
              <div>
                <strong>Georgia State University</strong>
                <span>B.S. Computer Science · Minor in Economics</span>
                <small>3.76 GPA · Dean’s List, Spring & Fall 2025</small>
              </div>
            </div>
          </div>
        </section>
        <section className="expertise wrap">
          <article>
            <Code2 />
            <span className="eyebrow">01 / Build</span>
            <h3>Software & AI</h3>
            <p>
              From a clear specification to a working product, with careful
              testing along the way.
            </p>
            <div className="expertise-list">
              Python · TypeScript · Go · Java
              <br />
              React · Next.js · REST APIs · SQL
            </div>
          </article>
          <article>
            <Server />
            <span className="eyebrow">02 / Operate</span>
            <h3>Systems & infrastructure</h3>
            <p>
              Hands-on administration and troubleshooting in my own server
              environment.
            </p>
            <div className="expertise-list">
              Linux · Windows · Active Directory
              <br />
              DNS · VMware ESXi / vCenter · Docker
            </div>
          </article>
          <article>
            <Scale />
            <span className="eyebrow">03 / Connect</span>
            <h3>Operations & detail</h3>
            <p>
              Bringing structure to teams, documentation, and processes with
              real-world consequences.
            </p>
            <div className="expertise-list">
              Compliance workflows · Documentation
              <br />
              Team coordination · Technology & IP interests
            </div>
          </article>
        </section>
        <section id="work" className="section work-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow section-kicker">
                  02 / Selected work
                </span>
                <h2>
                  Built with intention.
                  <br />
                  <em>Grounded in practice.</em>
                </h2>
              </div>
              <p>
                A selection of professional work and personal projects, from
                event platforms to the server in my lab.
              </p>
            </div>
            <ProjectGrid />
          </div>
        </section>
        <section id="experience" className="section wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow section-kicker">03 / Experience</span>
              <h2>
                Different roles.
                <br />
                <em>A consistent approach.</em>
              </h2>
            </div>
            <p>
              Building, coordinating, and learning across technology, healthcare
              operations, and community leadership.
            </p>
          </div>
          <div className="experience-list">
            {experience.map((e, i) => (
              <article
                key={e.company}
                className={
                  expanded === i ? "experience-row expanded" : "experience-row"
                }
              >
                <button
                  aria-expanded={expanded === i}
                  aria-controls={`experience-${i}`}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <span className="experience-date">{e.date}</span>
                  <span className="experience-title">
                    <strong>{e.company}</strong>
                    <span>{e.role}</span>
                  </span>
                  <span className="experience-tag">{e.tag}</span>
                  <span className="expand-icon">
                    {expanded === i ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <div
                  id={`experience-${i}`}
                  hidden={expanded !== i}
                  className="experience-description"
                >
                  <p>{e.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="community-note">
            <span className="eyebrow">Beyond the technical</span>
            <p>
              Teaching at GIC and tutoring through Rooh Review have shaped how I
              explain ideas, work with people, and stay patient with difficult
              problems.
            </p>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="wrap contact-inner">
            <span className="eyebrow section-kicker">04 / What comes next</span>
            <div className="contact-heading">
              <h2>
                Good work starts
                <br />
                with a <em>conversation.</em>
              </h2>
              <a
                href="mailto:ayaanzahmad@gmail.com"
                className="contact-arrow"
                aria-label="Email Ayaan"
              >
                <ArrowUpRight size={42} />
              </a>
            </div>
            <div className="contact-bottom">
              <p>
                Exploring opportunities in software, systems administration,
                <br className="desktop-break" /> and technology-focused legal
                and operations work.
              </p>
              <a href="mailto:ayaanzahmad@gmail.com">
                ayaanzahmad@gmail.com <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}
