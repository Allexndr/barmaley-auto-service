"use client";

import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPath = useRef(pathname);
  const [playEnter, setPlayEnter] = useState(false);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      setPlayEnter(true);
      prevPath.current = pathname;
      const t = setTimeout(() => setPlayEnter(false), 220);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  return (
    <div
      key={pathname}
      className={playEnter ? "page-enter page-enter-active" : ""}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </div>
  );
}
