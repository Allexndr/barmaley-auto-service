"use client";

export function ProcessStepsService() {
  const steps = ["Заявка", "Диагностика", "Смета", "Ремонт", "Выдача"];
  return <ProcessSteps steps={steps} />;
}

export function ProcessStepsCars() {
  const steps = [
    "Подбор модели",
    "Проверка авто",
    "Договор",
    "Оплата",
    "Доставка в СНГ",
    "Растаможка",
    "Передача клиенту",
  ];
  return <ProcessSteps steps={steps} />;
}

function StepItem({ label, index }: { label: string; index: number }) {
  return (
    <div
      className="process-step flex flex-col items-center gap-2"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <span className="text-center text-sm font-medium text-[var(--fg)]">
        {label}
      </span>
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--bg-elevated)] text-sm font-semibold text-[var(--accent)] transition-all duration-200 hover:bg-[var(--accent)] hover:text-white"
        aria-hidden
      >
        {index + 1}
      </span>
    </div>
  );
}

function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <div className="relative">
      {/* Одна линия через кружки — как в Сервисе; на десктопе все в ряд с равными промежутками */}
      <div
        className="absolute left-1/2 top-[2.75rem] hidden h-0.5 w-[calc(100%-3rem)] -translate-x-1/2 bg-[var(--border)] sm:block"
        aria-hidden
      />
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 sm:flex-nowrap sm:gap-x-0 sm:gap-y-0 sm:px-4">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-col items-center sm:flex-1 sm:min-w-0">
            <StepItem label={label} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
