import { site } from "@/data/site";

export function SectionHow() {
  const { how } = site;
  return (
    <section id="how" className="scroll-mt-20 bg-zinc-50 py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-zinc-900">Как мы работаем</h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-zinc-900">В сервисе</h3>
            <ol className="mt-4 space-y-2">
              {how.service.map((step, i) => (
                <li key={step} className="flex items-center gap-3 text-zinc-700">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0ea5e9] text-sm font-medium text-white">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900">Авто из Китая</h3>
            <ol className="mt-4 space-y-2">
              {how.cars.map((step, i) => (
                <li key={step} className="flex items-center gap-3 text-zinc-700">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0ea5e9] text-sm font-medium text-white">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
