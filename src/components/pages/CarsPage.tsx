import { site } from "@/data/site";
import { ContactMapWrapper } from "@/components/ContactMapWrapper";
import { FormCars } from "@/components/FormCars";
import { Footer } from "@/components/Footer";
import { ProcessStepsCars } from "@/components/ProcessSteps";
import { featuredCars, moreReviews } from "@/data/mock";

const carsWhy = [
  { title: "Опыт", text: "Подбор и поставка авто из Китая в страны СНГ" },
  { title: "Поставщики", text: "Проверенные партнёры и прямые контакты в Китае" },
  { title: "Прозрачность", text: "Честные условия, договор, фиксированные этапы" },
  { title: "Под ключ", text: "Доставка, растаможка, передача клиенту" },
];

const directions = [
  { name: "Электромобили", desc: "BYD, Zeekr, Li Auto и другие" },
  { name: "Гибриды", desc: "Toyota, премиум-гибриды" },
  { name: "Бензиновые авто", desc: "Широкий выбор марок" },
  { name: "Премиум", desc: "Audi, BMW, Mercedes-Benz" },
];

export function CarsPage() {
  const { cars, reviews } = site;
  const carsReviews = reviews.filter((r) => r.text.toLowerCase().includes("кита") || r.text.toLowerCase().includes("авто") || r.text.toLowerCase().includes("заказал"));

  return (
    <>
      <main className="pt-24 pb-0">
        {/* Hero */}
        <section className="hero-block px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-label">Подбор и поставка</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl md:text-[2.5rem]">
              Автомобили из Китая под заказ
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--fg-muted)]">
              {cars.subtitle}
            </p>
            <p className="mt-2 text-sm text-[var(--fg-muted)]">
              Подбор, проверка, доставка в Казахстан, Россию и страны СНГ
            </p>
            <a
              href="#form"
              className="btn-primary mt-12 inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[var(--accent-hover)] transition-all"
            >
              Оставить заявку на подбор
            </a>
          </div>
        </section>

        {/* Направления — карточки */}
        <section className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-16 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="section-label">Категории</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--fg)]">
              Направления
            </h2>
            <p className="mt-2 text-[var(--fg-muted)]">
              Электромобили, гибриды, бензин, премиум-сегмент
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {directions.map((d) => (
                <div
                  key={d.name}
                  className="card rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 shadow-[var(--shadow)]"
                >
                  <h3 className="font-medium text-[var(--fg)]">{d.name}</h3>
                  <p className="mt-1.5 text-sm text-[var(--fg-muted)]">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Примеры авто — мок карточки */}
        <section className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-16 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="section-label">Каталог</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--fg)]">
              Примеры авто под заказ
            </h2>
            <p className="mt-2 text-[var(--fg-muted)]">
              Популярные модели. Точная стоимость — по заявке.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCars.map((car) => (
                <div
                  key={car.id}
                  className="card flex flex-col rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5"
                >
                  <div className="h-24 rounded-lg bg-[var(--toggle-bg)] flex items-center justify-center text-[var(--fg-muted)] text-sm">
                    {car.brand} {car.name}
                  </div>
                  <h3 className="mt-3 font-medium text-[var(--fg)]">{car.name}</h3>
                  <p className="mt-0.5 text-sm text-[var(--fg-muted)]">{car.brand} · {car.year}</p>
                  <p className="mt-2 text-sm font-medium text-[var(--accent)]">{car.priceRange}</p>
                  <span className="mt-2 inline-block w-fit rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 py-0.5 text-xs text-[var(--fg-muted)]">
                    {car.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Бренды */}
        <section className="border-t border-[var(--border)] py-16 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="section-label">Марки</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--fg)]">
              Бренды
            </h2>
            <p className="mt-2 text-[var(--fg-muted)]">
              Работаем с европейскими и китайскими марками
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {cars.brands.map((brand) => (
                <span
                  key={brand}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-2.5 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[#cbd5e1] hover:bg-[var(--toggle-bg)]"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Почему мы — карточки */}
        <section className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-16 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="section-label">Доверие</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--fg)]">
              Почему нам доверяют
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {carsWhy.map((item) => (
                <div
                  key={item.title}
                  className="card rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5"
                >
                  <h3 className="font-medium text-[var(--fg)]">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--fg-muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Как мы работаем — интерактивный процесс */}
        <section className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-16 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="section-label">Процесс</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--fg)]">
              Как мы работаем
            </h2>
            <p className="mt-2 text-[var(--fg-muted)]">
              От подбора до передачи клиенту
            </p>
            <div className="mt-10">
              <ProcessStepsCars />
            </div>
          </div>
        </section>

        {/* Отзывы — карточки */}
        <section className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-16 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="section-label">Клиенты</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--fg)]">
              Отзывы
            </h2>
            <p className="mt-2 text-[var(--fg-muted)]">
              Отзывы клиентов по подбору и доставке авто
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {([...(carsReviews.length ? carsReviews : reviews), ...moreReviews]).slice(0, 4).map((r, i) => (
                <blockquote
                  key={i}
                  className="card rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5"
                >
                  <p className="text-[var(--fg)] leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                  <footer className="mt-3 text-sm text-[var(--fg-muted)]">
                    — {r.author}, {r.source}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Форма заявки */}
        <section id="form" className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-16 px-4 sm:px-6 scroll-mt-24">
          <div className="mx-auto max-w-4xl">
            <p className="section-label">Заявка</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--fg)]">
              Заявка на подбор
            </h2>
            <p className="mt-2 text-[var(--fg-muted)]">
              Заполните форму — свяжемся в WhatsApp и уточним детали
            </p>
            <FormCars />
          </div>
        </section>

        {/* Контакты */}
        <section id="contacts" className="border-t border-[var(--border)] py-16 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="section-label">Связь</p>
            <div className="mt-6 flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--fg)]">
                  Контакты
                </h2>
                <p className="mt-2 text-[var(--fg-muted)]">
                  {site.contacts.address}
                </p>
                <p className="mt-0.5 text-[var(--fg-muted)]">
                  {site.contacts.addressLine2}
                </p>
                <p className="mt-0.5 text-[var(--fg-muted)]">
                  {site.contacts.addressLine3}
                </p>
                <div className="mt-4 flex flex-col items-start gap-3">
                  <a
                    href={site.contacts.map2gisUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm font-medium text-[var(--fg)] hover:bg-[var(--toggle-bg)] transition-all hover:border-[#cbd5e1]"
                  >
                    Открыть на картах
                  </a>
                  <a
                    href={`tel:${site.contacts.phone.replace(/\D/g, "")}`}
                    className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-3 text-sm font-medium text-[var(--fg)] hover:bg-[var(--toggle-bg)] transition-all hover:border-[#cbd5e1]"
                  >
                    {site.contacts.phone}
                  </a>
                </div>
                <p className="mt-4 text-sm text-[var(--fg-muted)]">номер для записи</p>
                <a
                  href={`tel:${site.contacts.phoneBooking.replace(/\D/g, "")}`}
                  className="mt-1 inline-block rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-3 text-sm font-medium text-[var(--fg)] hover:bg-[var(--toggle-bg)] transition-all hover:border-[#cbd5e1]"
                >
                  {site.contacts.phoneBooking}
                </a>
              </div>
              <div className="flex w-full flex-col items-center gap-3 sm:flex-1 sm:min-w-0">
                <ContactMapWrapper
                  lat={site.contacts.mapLat}
                  lng={site.contacts.mapLng}
                  map2gisUrl={site.contacts.map2gisUrl}
                  compact
                />
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/7${site.contacts.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--accent-hover)] transition-all text-center sm:text-left"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://t.me/${site.contacts.telegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-3 text-sm font-medium text-[var(--fg)] hover:bg-[var(--toggle-bg)] transition-all hover:border-[#cbd5e1] text-center sm:text-left"
                >
                  Telegram
                </a>
                <a
                  href={`https://instagram.com/${site.contacts.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-3 text-sm font-medium text-[var(--fg)] hover:bg-[var(--toggle-bg)] transition-all hover:border-[#cbd5e1] text-center sm:text-left"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
