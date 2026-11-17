export default function SectionTitle({ label, title }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm font-semibold text-accent">{label}</p>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
    </div>
  );
}
