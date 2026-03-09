import { NextResponse } from "next/server";
import { loadContent } from "@/lib/content";

// Public API: returns merged site content (default + overrides from admin).
export async function GET() {
  try {
    const content = loadContent();
    return NextResponse.json(content);
  } catch {
    return NextResponse.json({ error: "Ошибка загрузки" }, { status: 500 });
  }
}
