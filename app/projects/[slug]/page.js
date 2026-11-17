import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export function generateStaticParams() {
  return site.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = site.projects.find((p) => p.slug === slug);
  return { title: project ? `${project.name} | ${site.name}` : site.name };
}

function Block({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="font-mono text-lg font-semibold text-accent">// {title}</h2>
      {children}
    </section>
  );
}

function List({ items }) {
  return (
    <ul className="list-disc space-y-2 pl-5 leading-relaxed text-mute">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = site.projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl space-y-10 px-6 py-12">
        <Link href="/#projects" className="font-mono text-sm text-mute hover:text-accent">
          ← back to projects
        </Link>

        <h1 className="text-4xl font-bold md:text-5xl">{project.name}</h1>

        <img
          src={project.image}
          alt={project.name}
          className="w-full rounded-2xl border border-line object-cover"
        />

        <Block title="tech stack">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-md border border-line bg-card px-3 py-1 font-mono text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </Block>

        <Block title="description">
          <p className="leading-relaxed text-mute">{project.description}</p>
          <List items={project.features} />
        </Block>

        <Block title="links">
          <div className="flex flex-wrap gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-6 py-3 font-bold text-[#06202e] hover:brightness-110"
            >
              Live project
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-6 py-3 font-semibold hover:border-accent hover:text-accent"
            >
              GitHub (client)
            </a>
          </div>
        </Block>

        <Block title="challenges faced">
          <List items={project.challenges} />
        </Block>

        <Block title="future plans">
          <List items={project.future} />
        </Block>
      </main>
      <Footer />
    </>
  );
}
