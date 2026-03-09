import type { Metadata } from "next";
import { CarsPage } from "@/components/pages/CarsPage";

export const metadata: Metadata = {
  title: "Авто из Китая в Казахстан | Подбор и доставка | Бармалей",
  description:
    "Подбор и поставка автомобилей из Китая в Казахстан. Электромобили, гибриды, премиум. Оформление, растаможка.",
};

export default function Page() {
  return <CarsPage />;
}
