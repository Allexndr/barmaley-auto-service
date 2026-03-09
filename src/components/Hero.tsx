"use client";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 pt-24 pb-16 flex flex-col justify-center">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Бармалей
        </h1>
        <p className="mt-4 text-lg text-blue-100 sm:text-xl max-w-2xl mx-auto">
          Ремонт электромобилей и гибридов в Алматы. Подбор и поставка авто из Китая в страны СНГ.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <a
            href="#service"
            className="inline-flex items-center justify-center rounded-lg bg-[#0ea5e9] px-8 py-4 text-base font-medium text-white shadow hover:bg-[#0284c7] transition-colors"
          >
            Записаться в сервис
          </a>
          <a
            href="#cars"
            className="inline-flex items-center justify-center rounded-lg border-2 border-blue-300 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur hover:bg-white/20 transition-colors"
          >
            Подобрать авто из Китая
          </a>
        </div>
      </div>
    </section>
  );
}
