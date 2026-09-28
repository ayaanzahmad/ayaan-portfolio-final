import { getProject, projects } from "@/app/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header, Footer } from "@/components/Portfolio";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const p = getProject((await params).id);
  return { title: p ? `${p.title} — Ayaan Ahmad` : "Project not found" };
}
export default async function Detail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const p = getProject((await params).id);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <>
      <Header />
      <main id="main" className="wrap detail">
        <Link className="text-link" href="/#work">
          <ArrowLeft size={16} /> Back to selected work
        </Link>
        <div className="detail-heading">
          <span className="eyebrow">
            {p.number} / {p.subtitle}
          </span>
          <h1>{p.title}</h1>
          <p>{p.description}</p>
        </div>
        <div className="detail-body">
          <aside>
            <span className="eyebrow">Focus & tools</span>
            <div className="tags">
              {p.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {p.link && (
              <a
                className="text-link"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                {p.id === "05" ? "View source" : "Visit website"}{" "}
                <ArrowUpRight size={16} />
              </a>
            )}
          </aside>
          <article>
            <h2>The work</h2>
            {p.fullDescription.split("\n\n").map((t) => (
              <p key={t}>{t}</p>
            ))}
            {p.keyAchievement && (
              <div className="achievement">
                <span className="eyebrow">In numbers</span>
                <p>{p.keyAchievement}</p>
              </div>
            )}
          </article>
        </div>
        <Link className="next-project" href={`/projects/${next.id}`}>
          <div>
            <span className="eyebrow">Next project</span>
            <h2>{next.title}</h2>
          </div>
          <ArrowUpRight size={32} />
        </Link>
      </main>
      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}
