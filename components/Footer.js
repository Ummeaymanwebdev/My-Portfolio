import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-mute sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="font-mono">Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
