import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";

export default function Experience() {
  const exp = site.experience;
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <SectionTitle label="// experience" title="Where I have worked" />

      <div className="rounded-2xl border border-line bg-card p-6 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xl font-bold">
            {exp.role} <span className="text-accent">at {exp.company}</span>
          </h3>
          <span className="font-mono text-sm text-mute">{exp.period}</span>
        </div>
        <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-mute">
          {exp.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-8 rounded-2xl border border-line bg-card2 p-6 md:flex-row md:items-center md:p-10">
        <div className="flex flex-1 flex-col gap-3">
          <span className="font-mono text-sm font-semibold text-accent">WORDPRESS</span>
          <h3 className="text-3xl font-bold leading-tight">I built the Nexus Television website.</h3>
          <p className="leading-relaxed text-mute">
            As Digital Executive, I designed and launched the channel’s official website on
            WordPress, then kept it running with daily content, updates and fixes.
          </p>
        </div>
        <div className="flex flex-1 flex-wrap gap-2">
          {exp.wordpressTags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
