import { site } from "@/data/site";

export function SectionService() {
  const { service } = site;
  return (
    <section id="service" className="scroll-mt-20 bg-white py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-zinc-900">{service.title}</h2>
        <p className="mt-2 text-lg text-zinc-600">{service.subtitle}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {service.services.map((item) => (
            <li key={item} className="flex items-start gap-2 text-zinc-700">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0ea5e9]" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-zinc-600">
          <strong>Адрес:</strong> {service.address}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`https://wa.me/7${site.contacts.whatsapp.replace(/\D/g, "")}?text=Здравствуйте,%20хочу%20записаться%20на%20диагностику`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#0ea5e9] px-6 py-3 text-white font-medium hover:bg-[#0284c7] transition-colors"
          >
            {service.ctaDiagnostic}
          </a>
          <a
            href={`https://wa.me/7${site.contacts.whatsapp.replace(/\D/g, "")}?text=Здравствуйте,%20нужна%20консультация`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-300 px-6 py-3 font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
          >
            {service.ctaConsult}
          </a>
        </div>
      </div>
    </section>
  );
}
