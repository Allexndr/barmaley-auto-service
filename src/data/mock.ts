// Моковые данные для карточек и блоков (заменить на реальные через админку/API)

export const featuredCars = [
  { id: "1", name: "BYD Seal", brand: "BYD", year: "2024", priceRange: "от $35 000", category: "Электро" },
  { id: "2", name: "Zeekr 001", brand: "Zeekr", year: "2024", priceRange: "от $45 000", category: "Электро" },
  { id: "3", name: "BMW X5", brand: "BMW", year: "2024", priceRange: "под запрос", category: "Премиум" },
  { id: "4", name: "Toyota Camry", brand: "Toyota", year: "2024", priceRange: "от $28 000", category: "Гибрид" },
  { id: "5", name: "Li Auto L7", brand: "Li Auto", year: "2024", priceRange: "от $52 000", category: "Гибрид" },
  { id: "6", name: "Mercedes E-Class", brand: "Mercedes-Benz", year: "2024", priceRange: "под запрос", category: "Премиум" },
] as const;

export const serviceExamples = [
  { id: "1", title: "Диагностика высоковольтной батареи", desc: "Полная проверка состояния батареи и выдача отчёта", duration: "1–2 дня" },
  { id: "2", title: "Ремонт гибридной системы", desc: "Замена компонентов, калибровка", duration: "3–5 дней" },
  { id: "3", title: "Обслуживание BYD / Zeekr", desc: "ТО по регламенту производителя", duration: "1 день" },
] as const;

export const moreReviews = [
  { author: "Андрей", text: "Привёз Zeekr на диагностику — всё объяснили, сделали по смете. Буду обращаться.", source: "WhatsApp" },
  { author: "Мария", text: "Заказывали BMW из Китая. Довезли в срок, помогли с оформлением. Спасибо.", source: "Telegram" },
] as const;
