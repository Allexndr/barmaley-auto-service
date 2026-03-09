import type { Metadata } from "next";
import { ServicePage } from "@/components/pages/ServicePage";

export const metadata: Metadata = {
  title: "Ремонт электромобилей в Алматы | Бармалей",
  description:
    "Диагностика и ремонт электромобилей и гибридов в Алматы. BYD, Zeekr, Deepal, Voyah. Высоковольтная батарея, инвертор.",
};

export default function Page() {
  return <ServicePage />;
}
