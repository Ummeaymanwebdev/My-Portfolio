import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <SectionTitle label="// about" title="About me" />
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 leading-relaxed text-mute">
          {site.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="h-fit rounded-2xl border border-line bg-card p-6">
          <h3 className="font-mono text-sm font-semibold text-accent">Outside coding</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {site.hobbies.map((h) => (
              <span
                key={h}
                className="rounded-full border border-line bg-card2 px-4 py-2 text-sm font-semibold"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
