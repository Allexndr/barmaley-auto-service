"use client";

import { usePathname } from "next/navigation";
import { AppBar } from "./AppBar";

export function AppBarWrapper() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return <AppBar />;
}
