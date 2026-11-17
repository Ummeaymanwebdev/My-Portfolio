import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <SectionTitle label="// skills" title="What I work with" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {site.skills.map((group) => (
          <div key={group.title} className="rounded-2xl border border-line bg-card p-6">
            <h3 className="font-mono text-sm font-semibold text-accent">{group.title}</h3>
            <ul className="mt-5 space-y-4">
              {group.items.map((s) => (
                <li key={s.name}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="font-semibold">{s.name}</span>
                    <span className="text-mute">{s.level}%</span>
                  </div>
                  <div
                    role="progressbar"
                    aria-label={s.name}
                    aria-valuenow={s.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-2 rounded-full bg-card2"
                  >
                    <div
                      className="h-2 rounded-full bg-[linear-gradient(90deg,#7dd3fc,#38bdf8)]"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
