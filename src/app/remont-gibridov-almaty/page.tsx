import type { Metadata } from "next";
import { ServicePage } from "@/components/pages/ServicePage";

export const metadata: Metadata = {
  title: "Ремонт гибридов в Алматы | Бармалей",
  description:
    "Ремонт гибридных систем и обслуживание гибридов в Алматы. Диагностика, замена масла, ремонт высоковольтной части.",
};

export default function Page() {
  return <ServicePage />;
}
