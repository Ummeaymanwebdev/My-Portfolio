import { FaDownload, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { site } from "@/data/site";

const tile =
  "flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-card2 text-accent hover:border-accent";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-6xl scroll-mt-20 flex-col-reverse items-center gap-14 px-6 pb-16 pt-10 md:flex-row md:gap-16 md:pb-24 md:pt-16"
    >
      <div className="flex flex-1 flex-col items-start gap-5">
        <span className="text-lg text-mute">Hello, I’m</span>
        <h1 className="bg-[linear-gradient(180deg,#e0f2fe,#7dd3fc)] bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl">
          {site.name}
        </h1>
        <p className="font-mono text-xl font-semibold md:text-2xl">
          A {site.role}
          <span className="animate-blink text-accent">|</span>
        </p>
        <p className="max-w-lg leading-relaxed text-mute">{site.tagline}</p>

        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card2 px-4 py-2 font-mono text-sm">
          <span className="h-2 w-2 rounded-full bg-accent" />
          open to work
        </span>

        <div className="flex flex-wrap items-center gap-3">
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={tile}>
            <FaLinkedinIn size={18} />
          </a>
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={tile}>
            <FaGithub size={18} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className={tile}>
            <FaEnvelope size={18} />
          </a>
          <a
            href={site.resume}
            download
            className="ml-1 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-[#06202e] hover:brightness-110"
          >
            <FaDownload size={14} /> Resume
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-5 py-3 font-semibold text-mute hover:border-accent hover:text-accent"
          >
            View
          </a>
        </div>
      </div>

      <div className="relative w-full max-w-[340px] shrink-0">
        <img
          src={site.photo}
          alt={site.name}
          className="aspect-[4/5] w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}
