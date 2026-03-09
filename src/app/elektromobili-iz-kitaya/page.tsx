import type { Metadata } from "next";
import { CarsPage } from "@/components/pages/CarsPage";

export const metadata: Metadata = {
  title: "Электромобили из Китая под заказ | Бармалей",
  description:
    "Подбор и поставка электромобилей из Китая в СНГ. BYD, Zeekr, Li Auto, Deepal, Voyah.",
};

export default function Page() {
  return <CarsPage />;
}
