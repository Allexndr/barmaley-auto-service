"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/admin/me")
      .then((r) => r.json())
      .then((data) => setAuthenticated(data.ok === true))
      .catch(() => setAuthenticated(false));
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Ошибка входа");
        if (res.status === 429) setError("Слишком много попыток. Попробуйте позже.");
        return;
      }
      setAuthenticated(true);
    } finally {
      setLoading(false);
    }
  }

  if (authenticated === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-100">
        <p className="text-zinc-500">Проверка...</p>
      </div>
    );
  }

  if (authenticated === true) {
    return (
      <div className="min-h-screen bg-zinc-100 py-8 px-4">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-2xl font-bold text-zinc-900">Админка Бармалей</h1>
          <p className="mt-2 text-zinc-600">
            Редактирование контента сохраняется в файл .data/site-overrides.json. Обновите страницу сайта или перезапустите сервер, чтобы увидеть изменения.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Полный редактор блоков (тексты, контакты, фото) можно добавить следующим этапом. Сейчас доступны API: GET/PATCH /api/admin/content.
          </p>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="mt-6 rounded-lg bg-zinc-200 px-4 py-2 text-zinc-800 hover:bg-zinc-300"
          >
            На главную
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 px-4">
      <form onSubmit={handleLogin} className="w-full max-w-sm rounded-xl bg-white p-8 shadow">
        <h1 className="text-xl font-bold text-zinc-900">Вход в админку</h1>
        <p className="mt-1 text-sm text-zinc-500">Бармалей</p>
        <div className="mt-6">
          <label htmlFor="password" className="block text-sm font-medium text-zinc-700">
            Пароль
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900"
            required
            autoComplete="current-password"
          />
        </div>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-lg bg-[#0ea5e9] py-2 font-medium text-white hover:bg-[#0284c7] disabled:opacity-50"
        >
          {loading ? "Вход..." : "Войти"}
        </button>
      </form>
    </div>
  );
}
