import { site } from "@/data/site";
import { ContactMapWrapper } from "@/components/ContactMapWrapper";
import { Footer } from "@/components/Footer";
import { ProcessStepsService } from "@/components/ProcessSteps";
import { serviceExamples, moreReviews } from "@/data/mock";

const wa = site.contacts.whatsapp.replace(/\D/g, "");
const phone = site.contacts.phone;
const tg = site.contacts.telegram;
const ig = site.contacts.instagram;

const serviceWhy = [
  { title: "Специалисты по гибридам", text: "Опыт работы с электромобилями и гибридными системами" },
  { title: "Китайские и европейские авто", text: "Deepal, Voyah, Zeekr, BYD, а также премиум-сегмент" },
  { title: "Современная диагностика", text: "Оборудование для точной диагностики высоковольтных систем" },
  { title: "Центр города", text: "Рыскулова / Розыбакиева, удобная локация в Алматы" },
];

export function ServicePage() {
  const { service, reviews } = site;
  const serviceReviews = reviews.filter((r) => r.text.toLowerCase().includes("ремонт") || r.text.toLowerCase().includes("гибрид") || r.source === "WhatsApp");

  return (
    <>
      <main className="pt-24 pb-0">
        {/* Hero */}
        <section className="hero-block px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-label">Автосервис · Алматы</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl md:text-[2.5rem]">
              Ремонт электромобилей и гибридов
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--fg-muted)]">
              {service.subtitle}
            </p>
            <p className="mt-2 text-sm text-[var(--fg-muted)]">
              {service.address}
            </p>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={`https://wa.me/7${wa}?text=Здравствуйте,%20хочу%20записаться%20на%20диагностику`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[var(--accent-hover)] transition-all"
              >
                Записаться на диагностику
              </a>
              <a
                href={`https://wa.me/7${wa}?text=Здравствуйте,%20нужна%20консультация`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-6 py-3.5 text-sm font-medium text-[var(--fg)] hover:bg-[var(--toggle-bg)] transition-all hover:border-[#cbd5e1]"
              >
                Получить консультацию
              </a>
            </div>
          </div>
        </section>

        {/* Услуги — карточки */}
        <section id="services" className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-16 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="section-label">Что делаем</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--fg)]">
              Услуги
            </h2>
            <p className="mt-2 text-[var(--fg-muted)]">
              Диагностика, ремонт и обслуживание электромобилей и гибридов
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {service.services.map((item) => (
                <div
                  key={item}
                  className="card rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 shadow-[var(--shadow)]"
                >
                  <p className="font-medium text-[var(--fg)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Почему нам доверяют — карточки */}
        <section id="why" className="border-t border-[var(--border)] py-16 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="section-label">Доверие</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--fg)]">
              Почему нам доверяют
            </h2>
            <p className="mt-2 text-[var(--fg-muted)]">
              Специализация на электромобилях и гибридах в Алматы
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {serviceWhy.map((item) => (
                <div
                  key={item.title}
                  className="card rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5"
                >
                  <h3 className="font-medium text-[var(--fg)]">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--fg-muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Примеры работ — мок */}
        <section className="border-t border-[var(--border)] py-16 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="section-label">Услуги</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--fg)]">
              Примеры работ
            </h2>
            <p className="mt-2 text-[var(--fg-muted)]">
              Типовые задачи, с которыми обращаются в сервис
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {serviceExamples.map((ex) => (
                <div
                  key={ex.id}
                  className="card rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5"
                >
                  <h3 className="font-medium text-[var(--fg)]">{ex.title}</h3>
                  <p className="mt-1.5 text-sm text-[var(--fg-muted)]">{ex.desc}</p>
                  <p className="mt-2 text-xs text-[var(--fg-muted)]">Срок: {ex.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Как мы работаем — интерактивный процесс */}
        <section id="how" className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-16 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="section-label">Процесс</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--fg)]">
              Как мы работаем
            </h2>
            <div className="mt-10">
              <ProcessStepsService />
            </div>
          </div>
        </section>

        {/* Отзывы — карточки */}
        <section id="reviews" className="border-t border-[var(--border)] py-16 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="section-label">Клиенты</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--fg)]">
              Отзывы
            </h2>
            <p className="mt-2 text-[var(--fg-muted)]">
              Отзывы клиентов сервиса
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {([...(serviceReviews.length ? serviceReviews : reviews), ...moreReviews.filter((r) => r.text.toLowerCase().includes("ремонт") || r.text.toLowerCase().includes("гибрид") || r.text.toLowerCase().includes("диагност"))]).slice(0, 4).map((r, i) => (
                <blockquote
                  key={i}
                  className="card rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5"
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

        {/* Контакты — блок с кнопками и картой по центру */}
        <section id="contacts" className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-16 px-4 sm:px-6 scroll-mt-24">
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
                    className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-sm font-medium text-[var(--fg)] hover:bg-[var(--toggle-bg)] transition-all hover:border-[#cbd5e1]"
                  >
                    Открыть на картах
                  </a>
                  <a
                    href={`tel:${phone.replace(/\D/g, "")}`}
                    className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-5 py-3 text-sm font-medium text-[var(--fg)] hover:bg-[var(--toggle-bg)] transition-all hover:border-[#cbd5e1]"
                  >
                    {phone}
                  </a>
                </div>
                <p className="mt-4 text-sm text-[var(--fg-muted)]">номер для записи</p>
                <a
                  href={`tel:${site.contacts.phoneBooking.replace(/\D/g, "")}`}
                  className="mt-1 inline-block rounded-xl border border-[var(--border)] bg-[var(--bg)] px-5 py-3 text-sm font-medium text-[var(--fg)] hover:bg-[var(--toggle-bg)] transition-all hover:border-[#cbd5e1]"
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
                  href={`https://wa.me/7${wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--accent-hover)] transition-all text-center sm:text-left"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://t.me/${tg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-5 py-3 text-sm font-medium text-[var(--fg)] hover:bg-[var(--toggle-bg)] transition-all hover:border-[#cbd5e1] text-center sm:text-left"
                >
                  Telegram
                </a>
                <a
                  href={`https://instagram.com/${ig}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-5 py-3 text-sm font-medium text-[var(--fg)] hover:bg-[var(--toggle-bg)] transition-all hover:border-[#cbd5e1] text-center sm:text-left"
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
