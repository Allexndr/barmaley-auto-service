import { NextRequest, NextResponse } from "next/server";
import { verifyToken, getCookieName } from "@/lib/auth";
import { loadContent, saveContent, type SiteOverrides } from "@/lib/content";

async function requireAuth(request: NextRequest): Promise<NextResponse | null> {
  const token = request.cookies.get(getCookieName())?.value;
  if (!token) return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  const valid = await verifyToken(token);
  if (!valid) return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  return null;
}

export async function GET(request: NextRequest) {
  const err = await requireAuth(request);
  if (err) return err;
  const content = loadContent();
  return NextResponse.json(content);
}

export async function PATCH(request: NextRequest) {
  const err = await requireAuth(request);
  if (err) return err;

  let body: SiteOverrides;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Неверный JSON" }, { status: 400 });
  }

  try {
    saveContent(body);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Save content error:", e);
    return NextResponse.json({ error: "Ошибка сохранения" }, { status: 500 });
  }
}
