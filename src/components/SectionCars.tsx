import Link from "next/link";
import { site } from "@/data/site";

export function SectionCars() {
  const { cars } = site;
  return (
    <section id="cars" className="scroll-mt-20 bg-zinc-50 py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-zinc-900">{cars.title}</h2>
        <p className="mt-2 text-lg text-zinc-600">{cars.subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {cars.brands.map((brand) => (
            <span
              key={brand}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm border border-zinc-200"
            >
              {brand}
            </span>
          ))}
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-zinc-900">Как мы работаем</h3>
          <ol className="mt-4 flex flex-wrap gap-2">
            {cars.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-2 text-zinc-700">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0ea5e9] text-sm font-medium text-white">
                  {i + 1}
                </span>
                {step}
                {i < cars.steps.length - 1 && (
                  <span className="text-zinc-400 hidden sm:inline">→</span>
                )}
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-10">
          <Link
            href="/avto-iz-kitaya#form"
            className="inline-flex rounded-lg bg-[#0ea5e9] px-6 py-3 text-white font-medium hover:bg-[#0284c7] transition-colors"
          >
            {cars.formCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
