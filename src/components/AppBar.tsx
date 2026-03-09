"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const WrenchIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const CarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2-4H8L6 10l-2.5.1C2.7 10.3 2 11.1 2 12v3c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

export function AppBar() {
  const pathname = usePathname();
  const isService = pathname === "/" || pathname.startsWith("/remont") || pathname.startsWith("/obsluzhivanie");
  const isCars = pathname.startsWith("/avto") || pathname.startsWith("/elektromobili");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center border-b border-[var(--border)] bg-[var(--bg)] pt-5 pb-4 px-4">
      <nav
        className="inline-flex items-center rounded-full p-1 shadow-sm border border-[var(--border)] bg-[var(--toggle-bg)]"
        role="tablist"
        aria-label="Направление"
      >
        <Link
          href="/"
          role="tab"
          aria-selected={isService}
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
            isService
              ? "bg-[var(--toggle-active)] text-[var(--fg)] shadow-[var(--shadow)]"
              : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
          }`}
        >
          <WrenchIcon className="h-4 w-4 shrink-0" />
          <span>Сервис</span>
        </Link>
        <Link
          href="/avto-iz-kitaya"
          role="tab"
          aria-selected={isCars}
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
            isCars
              ? "bg-[var(--toggle-active)] text-[var(--fg)] shadow-[var(--shadow)]"
              : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
          }`}
        >
          <CarIcon className="h-4 w-4 shrink-0" />
          <span>Авто из Китая</span>
        </Link>
      </nav>
    </header>
  );
}
