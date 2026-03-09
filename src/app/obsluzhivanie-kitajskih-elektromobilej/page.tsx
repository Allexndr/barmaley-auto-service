import type { Metadata } from "next";
import { ServicePage } from "@/components/pages/ServicePage";

export const metadata: Metadata = {
  title: "Обслуживание китайских электромобилей в Алматы | Бармалей",
  description:
    "Сервис китайских электромобилей: BYD, Zeekr, Deepal, Voyah, Li Auto. Диагностика, ремонт батареи и инверторов в Алматы.",
};

export default function Page() {
  return <ServicePage />;
}
