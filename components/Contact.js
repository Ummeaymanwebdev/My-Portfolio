import { FaEnvelope } from "react-icons/fa6";
import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <SectionTitle label="// contact" title="Let’s work together" />
      <a
        href={`mailto:${site.email}`}
        className="flex max-w-md items-center gap-4 rounded-2xl border border-line bg-card p-6 hover:border-accent"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-line bg-card2 text-accent">
          <FaEnvelope size={20} />
        </span>
        <span className="min-w-0">
          <span className="block font-mono text-xs text-mute">Email</span>
          <span className="block break-words font-semibold">{site.email}</span>
        </span>
      </a>
      <p className="mt-6 text-mute">Based in {site.location}</p>
    </section>
  );
}