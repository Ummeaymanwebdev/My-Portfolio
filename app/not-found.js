import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="font-mono text-accent">404</p>
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="text-mute">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="mt-2 rounded-full bg-accent px-6 py-3 font-bold text-[#06202e] hover:brightness-110"
        >
          Back to home
        </Link>
      </main>
    </>
  );
}
