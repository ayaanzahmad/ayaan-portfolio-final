import { getProject, projects } from "@/app/data";
import { caseStudies } from "@/app/case-studies";
import { notFound } from "next/navigation";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { Header, Footer } from "@/components/Portfolio";
import { ArrowUpRight, ArrowLeft, ArrowDown } from "lucide-react";
export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const p = getProject((await params).id);
  return {
    title: p ? `${p.title} — Ayaan Ahmad` : "Project not found",
    description: p?.description,
  };
}
export default async function Detail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const p = getProject((await params).id);
  if (!p) notFound();
  const c = caseStudies[p.id];
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <>
      <Header />
      <main id="main" className="case-page">
        <div className="wrap">
          <Link className="text-link case-back" href="/#work">
            <ArrowLeft size={15} /> The project collection
          </Link>
          <header className="case-heading">
            <div>
              <span className="eyebrow">
                {p.number} / {p.subtitle}
              </span>
              <h1>{p.title}</h1>
              <p>{p.description}</p>
            </div>
            <div className="case-actions"><BrandMark id={p.id}/>
              {c.link && (
                <a
                  href={c.link}
                  className="button royal-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.linkLabel}
                  <ArrowUpRight size={20} />
                </a>
              )}
              <a href="#story" className="text-link">
                Explore the story <ArrowDown size={16} />
              </a>
            </div>
          </header>
          <figure className="case-hero-image">
            <img
              src={`/case-studies/${p.id}.svg`}
              width="1200"
              height="720"
              alt={c.caption}
            />
            <figcaption>
              <span>{c.caption}</span>
              <span>0{projects.indexOf(p) + 1} / 06</span>
            </figcaption>
          </figure>
          <div className="case-meta">
            <div>
              <span className="eyebrow">My role</span>
              <p>{c.role}</p>
            </div>
            <div>
              <span className="eyebrow">Timeline</span>
              <p>{c.period}</p>
            </div>
            <div>
              <span className="eyebrow">Focus</span>
              <p>{p.tech.join(" · ")}</p>
            </div>
          </div>
          <section id="story" className="case-story">
            <aside>
              <span className="eyebrow">Behind the work</span>
              <h2>{c.lead}</h2>
            </aside>
            <div>
              {c.sections.map((s, i) => (
                <article key={s.title}>
                  <span className="story-number">0{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="case-facts" aria-label="Project highlights">
            {c.facts.map((f) => (
              <div key={f.label}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </div>
            ))}
          </section>
          {c.link && (
            <div className="case-visit">
              <div>
                <span className="eyebrow">Continue exploring</span>
                <h2>
                  {p.id === "05"
                    ? "Take a look under the hood."
                    : "See the work in context."}
                </h2>
              </div>
              <a
                className="button royal-button"
                href={c.link}
                target="_blank"
                rel="noreferrer"
              >
                {c.linkLabel}
                <ArrowUpRight size={20} />
              </a>
            </div>
          )}
          <Link className="case-next" href={`/projects/${next.id}`}>
            <img
              src={`/case-studies/${next.id}.svg`}
              width="1200"
              height="720"
              alt=""
            />
            <div>
              <span className="eyebrow">Up next / {next.subtitle}</span>
              <h2>{next.title}</h2>
              <p>{next.description}</p>
            </div>
            <ArrowUpRight size={32} />
          </Link>
        </div>
      </main>
      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}
