import Image from "next/image";

import budgetsImageArea from "@/images/budgets-image-area-desktop.webp"
import flagIcon from "@/images/icons/flag.svg"

const actions = [
  "Preenchimento de formulário completo para orçamento",
  "Visibilidade dos serviços prestados e valor total",
  "Extrato detalhado",
  "Painéis de orçamentos (concluídos,cancelados, e pendentes)"
]

export default function SectionBudgets() {
  return (
    <section>
      <div className="max-w-[1248px] w-full px-5 pb-20 sm:pb-[100px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start gap-11 sm:gap-8">
          <Image
            className="aspect-[711/448]"
            src={budgetsImageArea}
            alt="Image da vista de clientes"
            width={711}
            height={448}
          />

          <div className="max-w-[500px] w-full">
            <Image
              className="h-[52px] mb-8"
              src={flagIcon}
              alt="Icone de bandeira"
              width={56}
              height={52}
            />

            <span className="block text-sm leading-4 lg:text-base lg:leading-5 text-purple-heart-700 font-semibold uppercase mb-2">
              Profissionalismo
            </span>

            <h2 className="max-w-[320px] sm:max-w-[362px] w-full text-2xl lg:text-[28px]/[36.4px] font-semibold text-mirage-950 mb-4">
              Controle seus orçamentos
            </h2>

            <p className="max-w-[312px] text-base text-lynch-500 mb-11 sm:mb-[54px]">
              Um pacote de recursos útil para administração do seu negócio.
            </p>

            <span className="block text-base leading-5 text-mirage-950 font-semibold mb-[26px]">
              Ações disponíveis:
            </span>

            <ul className="flex flex-col gap-6">
              {actions.map((action) => (
                <li key={action} className="flex items-center gap-2">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="28" height="28" rx="14" fill="#DDE2FC"/>
                    <path
                      d="M8.40002 14.8L11.6 18L19.6 10"
                      stroke="#5234C0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="text-base text-lynch-500">
                    {action}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}