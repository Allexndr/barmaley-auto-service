"use client";

import Link from "next/link";

const nav = [
  { label: "Сервис", href: "#service" },
  { label: "Авто из Китая", href: "#cars" },
  { label: "Почему мы", href: "#why" },
  { label: "Как работаем", href: "#how" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-xl font-semibold text-zinc-900">
          Бармалей
        </Link>
        <nav className="hidden gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="#contacts"
          className="rounded-lg bg-[#0ea5e9] px-4 py-2 text-sm font-medium text-white hover:bg-[#0284c7]"
        >
          Связаться
        </a>
      </div>
    </header>
  );
}
