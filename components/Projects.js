import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <SectionTitle label="// projects" title="Projects" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.projects.map((p) => (
          <article
            key={p.slug}
            className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card"
          >
            <img src={p.image} alt={p.name} className="h-44 w-full object-cover object-top" />
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="font-mono text-xs text-mute">{p.stack.join(" · ")}</p>
              <p className="text-sm leading-relaxed text-mute">{p.summary}</p>
              <Link
                href={`/projects/${p.slug}`}
                className="mt-auto pt-3 font-semibold text-accent hover:underline"
              >
                View details →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
