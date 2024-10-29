import Image from "next/image";

import customerIcon from "@/images/icons/customer.svg"
import customerImageArea from "@/images/customer-image-area-desktop.webp"

const actions = [
  "Informações pessoais do cliente",
  "Veículos do cliente"
]

export default function SectionCustomers() {
  return (
    <section>
      <div className="max-w-[1248px] w-full px-5 pb-20 sm:pb-[100px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-11 sm:gap-8">
          <div className="max-w-[400px] w-full">
            <Image
              className="h-[52px] mb-8"
              src={customerIcon}
              alt="Icone de cliente"
              width={56}
              height={52}
            />

            <span className="block text-sm leading-4 lg:text-base lg:leading-5 text-purple-heart-700 font-semibold uppercase mb-2">
              Visão mais ampla
            </span>

            <h2 className="max-w-[214px] sm:max-w-[240px] w-full text-2xl lg:text-[28px]/[36.4px] font-semibold text-mirage-950 mb-4">
              Saiba quais são os seus clientes
            </h2>

            <p className="max-w-[312px] text-base text-lynch-500 mb-11 sm:mb-[54px]">
              Tenha seus clientes registrados com todas as informações necessárias.
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

          <Image
            className="aspect-[711/448]"
            src={customerImageArea}
            alt="Image da vista de clientes"
            width={711}
            height={448}
          />
        </div>
      </div>
    </section>
  )
}