import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const LeadSchema = z.object({
  model: z.string().max(200).optional(),
  year: z.string().max(20).optional(),
  budget: z.string().max(100).optional(),
  country: z.string().max(100).optional(),
  name: z.string().min(1, "Имя обязательно").max(200),
  contact: z.string().min(1, "Контакт обязателен").max(100),
  comment: z.string().max(2000).optional(),
  source: z.enum(["cars", "service"]).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = LeadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Неверные данные", details: parsed.error.flatten() },
        { status: 400 }
      );
    }
    const data = parsed.data;
    // Опционально: отправить в Telegram, если задан TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (botToken && chatId) {
      const text = [
        "Новая заявка",
        `Имя: ${data.name}`,
        `Контакт: ${data.contact}`,
        data.model && `Модель: ${data.model}`,
        data.year && `Год: ${data.year}`,
        data.budget && `Бюджет: ${data.budget}`,
        data.country && `Страна: ${data.country}`,
        data.comment && `Комментарий: ${data.comment}`,
        data.source && `Источник: ${data.source}`,
      ]
        .filter(Boolean)
        .join("\n");
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
