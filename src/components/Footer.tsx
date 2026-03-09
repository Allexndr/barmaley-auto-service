import Link from "next/link";
import { site } from "@/data/site";

const wa = site.contacts.whatsapp.replace(/\D/g, "");
const phone = site.contacts.phone;
const tg = site.contacts.telegram;
const ig = site.contacts.instagram;

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-semibold text-[var(--fg)]">Бармалей</p>
            <p className="mt-1 text-sm text-[var(--fg-muted)]">
              Ремонт электромобилей и гибридов в Алматы. Подбор и поставка авто из Китая в СНГ.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--fg)]">Разделы</p>
            <nav className="mt-3 flex flex-col gap-2">
              <Link href="/" className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)]">
                Сервис
              </Link>
              <Link href="/avto-iz-kitaya" className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)]">
                Авто из Китая
              </Link>
              <Link href="/remont-elektromobilej-almaty" className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)]">
                Ремонт электромобилей
              </Link>
              <Link href="/avto-iz-kitaya#form" className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)]">
                Заявка на подбор
              </Link>
            </nav>
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--fg)]">Контакты</p>
            <p className="mt-3 text-sm text-[var(--fg-muted)]">{site.contacts.mapPlace}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href={`tel:${phone.replace(/\D/g, "")}`} className="text-sm text-[var(--accent)] hover:underline">
                {phone}
              </a>
              <a href={`https://wa.me/7${wa}`} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--accent)] hover:underline">
                WhatsApp
              </a>
              <a href={`https://t.me/${tg}`} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--accent)] hover:underline">
                Telegram
              </a>
              <a href={`https://instagram.com/${ig}`} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--accent)] hover:underline">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--border)] pt-6 flex flex-col items-center gap-3 text-center text-sm text-[var(--fg-muted)]">
          <span>© {new Date().getFullYear()} Бармалей. Алматы.</span>
          <a
            href="https://murdasov-alexander.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--fg)] transition-colors"
          >
            Development and design: MurdaSoft
          </a>
        </div>
      </div>
    </footer>
  );
}
