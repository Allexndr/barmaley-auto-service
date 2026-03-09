import { site } from "@/data/site";

export function SectionReviews() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-white py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-zinc-900">Отзывы</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {site.reviews.map((r, i) => (
            <blockquote
              key={i}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-6"
            >
              <p className="text-zinc-700">&ldquo;{r.text}&rdquo;</p>
              <footer className="mt-3 text-sm text-zinc-500">
                — {r.author}, {r.source}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
