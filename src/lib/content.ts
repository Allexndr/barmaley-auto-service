import path from "path";
import fs from "fs";
import { site } from "@/data/site";

const OVERRIDES_PATH = path.join(process.cwd(), ".data", "site-overrides.json");

export type SiteOverrides = Partial<{
  hero: Partial<typeof site.hero>;
  service: Partial<typeof site.service>;
  cars: Partial<typeof site.cars>;
  why: typeof site.why;
  how: Partial<typeof site.how>;
  reviews: typeof site.reviews;
  contacts: Partial<typeof site.contacts>;
}>;

function deepMerge<T extends object>(target: T, source: Partial<T>): T {
  const out = { ...target };
  for (const key of Object.keys(source) as (keyof T)[]) {
    const s = source[key];
    if (s !== undefined && s !== null && typeof s === "object" && !Array.isArray(s)) {
      (out as Record<string, unknown>)[key as string] = deepMerge(
        (target[key] as object) || {},
        s as object
      );
    } else if (s !== undefined) {
      (out as Record<string, unknown>)[key as string] = s;
    }
  }
  return out;
}

export function loadContent(): typeof site {
  try {
    const raw = fs.readFileSync(OVERRIDES_PATH, "utf-8");
    const overrides = JSON.parse(raw) as SiteOverrides;
    return deepMerge(JSON.parse(JSON.stringify(site)), overrides) as typeof site;
  } catch {
    return site;
  }
}

export function saveContent(overrides: SiteOverrides): void {
  const dir = path.dirname(OVERRIDES_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(OVERRIDES_PATH, JSON.stringify(overrides, null, 2), "utf-8");
}
