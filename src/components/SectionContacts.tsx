import { site } from "@/data/site";

const phone = site.contacts.phone;
const wa = site.contacts.whatsapp.replace(/\D/g, "");
const tg = site.contacts.telegram;
const ig = site.contacts.instagram;

export function SectionContacts() {
  return (
    <section id="contacts" className="scroll-mt-20 bg-zinc-50 py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-zinc-900">Контакты</h2>
        <p className="mt-2 text-zinc-600">{site.contacts.mapPlace}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`tel:${phone.replace(/\D/g, "")}`}
            className="rounded-lg border border-zinc-300 bg-white px-6 py-3 font-medium text-zinc-700 hover:bg-zinc-50"
          >
            {phone}
          </a>
          <a
            href={`https://wa.me/7${wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#25D366] px-6 py-3 font-medium text-white hover:bg-[#20bd5a]"
          >
            WhatsApp
          </a>
          <a
            href={`https://t.me/${tg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#0088cc] px-6 py-3 font-medium text-white hover:bg-[#006699]"
          >
            Telegram
          </a>
          <a
            href={`https://instagram.com/${ig}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-300 bg-white px-6 py-3 font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Instagram
          </a>
        </div>
        <div className="mt-10 rounded-xl border border-zinc-200 bg-white p-4 text-center text-zinc-500">
          Карта: {site.contacts.mapPlace}. (Интеграция карты — при необходимости.)
        </div>
      </div>
    </section>
  );
}
