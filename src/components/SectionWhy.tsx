import { site } from "@/data/site";

const icons = [
  "⚡",
  "🔗",
  "🌏",
  "🔧",
  "✓",
];

export function SectionWhy() {
  return (
    <section id="why" className="scroll-mt-20 bg-white py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-zinc-900">Почему нам доверяют</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {site.why.map((item, i) => (
            <div key={item.title} className="rounded-xl border border-zinc-200 p-6">
              <span className="text-2xl" aria-hidden>{icons[i] ?? "•"}</span>
              <h3 className="mt-2 font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-1 text-zinc-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
