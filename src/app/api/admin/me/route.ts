import { NextRequest, NextResponse } from "next/server";
import { verifyToken, getCookieName } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(getCookieName())?.value;
  if (!token) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const valid = await verifyToken(token);
  if (!valid) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  return NextResponse.json({ ok: true });
}
