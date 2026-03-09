"use client";

import { useState } from "react";
import { site } from "@/data/site";

const waNumber = site.contacts.whatsapp.replace(/\D/g, "");

function buildWhatsAppMessage(form: {
  model: string;
  year: string;
  budget: string;
  country: string;
  name: string;
  contact: string;
  comment?: string;
}) {
  const lines = [
    "Заявка на подбор авто из Китая",
    `Модель: ${form.model || "—"}`,
    `Год: ${form.year || "—"}`,
    `Бюджет: ${form.budget || "—"}`,
    `Страна доставки: ${form.country || "—"}`,
    `Имя: ${form.name || "—"}`,
    `Контакт: ${form.contact || "—"}`,
  ];
  if (form.comment?.trim()) lines.push(`Комментарий: ${form.comment.trim()}`);
  return lines.join("\n");
}

export function FormCars() {
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [budget, setBudget] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      buildWhatsAppMessage({ model, year, budget, country, name, contact, comment })
    );
    window.open(`https://wa.me/7${waNumber}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "mt-1 block w-full rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-2.5 text-[var(--fg)] text-sm focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]";

  return (
    <form id="form" onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-md">
      <div>
        <label htmlFor="model" className="block text-sm font-medium text-[var(--fg)]">
          Модель
        </label>
        <input
          id="model"
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className={inputClass}
          placeholder="Например: BMW X5"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-[var(--fg)]">
            Год
          </label>
          <input id="year" type="text" value={year} onChange={(e) => setYear(e.target.value)} className={inputClass} placeholder="2024" />
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-[var(--fg)]">
            Бюджет
          </label>
          <input id="budget" type="text" value={budget} onChange={(e) => setBudget(e.target.value)} className={inputClass} placeholder="USD" />
        </div>
      </div>
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-[var(--fg)]">
          Страна доставки
        </label>
        <input id="country" type="text" value={country} onChange={(e) => setCountry(e.target.value)} className={inputClass} placeholder="Казахстан, Россия..." />
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--fg)]">
          Ваше имя
        </label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className={inputClass} placeholder="Имя" />
      </div>
      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-[var(--fg)]">
          Телефон или Telegram
        </label>
        <input id="contact" type="text" value={contact} onChange={(e) => setContact(e.target.value)} required className={inputClass} placeholder="+7 ..." />
      </div>
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-[var(--fg)]">
          Комментарий
        </label>
        <textarea id="comment" rows={2} value={comment} onChange={(e) => setComment(e.target.value)} className={inputClass} placeholder="Пожелания по комплектации" />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--accent-hover)] transition-colors"
      >
        Отправить заявку в WhatsApp
      </button>
    </form>
  );
}
