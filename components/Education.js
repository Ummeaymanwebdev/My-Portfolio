import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";

export default function Education() {
  const edu = site.education;
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <SectionTitle label="// education" title="Education" />
      <div className="rounded-2xl border border-line bg-card p-6 md:p-8">
        <h3 className="text-xl font-bold">{edu.degree}</h3>
        <p className="mt-1 font-semibold text-accent">{edu.institute}</p>
        <p className="mt-3 font-mono text-sm text-mute">
          {edu.period} · CGPA {edu.cgpa}
        </p>
      </div>
    </section>
  );
}
