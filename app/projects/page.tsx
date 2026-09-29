import { Header, Footer, ProjectGrid } from "@/components/Portfolio";
export default function Projects() {
  return (
    <>
      <Header />
      <main id="main" className="wrap section archive">
        <span className="eyebrow">The project collection</span>
        <h1>
          Ideas, put <em>into practice.</em>
        </h1>
        <ProjectGrid />
      </main>
      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}
