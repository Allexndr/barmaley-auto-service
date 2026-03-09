import type { Metadata } from "next";
import { CarsPage } from "@/components/pages/CarsPage";

export const metadata: Metadata = {
  title: "Автомобили из Китая под заказ | Бармалей",
  description:
    "Подбор и поставка авто из Китая в Казахстан, Россию и страны СНГ. Электромобили, гибриды, премиум.",
};

export default function AvtoIzKitayaPage() {
  return <CarsPage />;
}
