import Image from "next/image";

import schedulingImageArea from "@/images/scheduling-image-area-desktop.webp"
import weekImageArea from "@/images/week-image-area-desktop.webp"
import summaryDayImageArea from "@/images/summary-day-image-area-desktop.webp"
import newCustomerImageArea from "@/images/new-customer-image-area-desktop.webp"
import schedulingIcon from "@/images/icons/scheduling.svg"

const actions = [
  "Formulário de agendamento",
  "Configuração de lotes, visibilidade dos serviços agendados",
  "Painéis de serviços (concluídos e cancelados)",
  "Cálculo de ganhos previstos"
]

export default function SectionScheduling() {
  return (
    <section>
      <div className="flex flex-col items-center gap-6 lg:grid grid-cols-[repeat(2,_auto)] grid-rows-[repeat(2,_auto)] lg:items-start lg:gap-[100px_32px] max-w-[1248px] w-full px-5 pb-20 sm:pb-[110px] mx-auto">
      {/* <div className="max-w-[1248px] w-full px-5 pb-[110px] mx-auto"> */}
        <Image
          className="col-start-1 col-end-3 max-w-[592px] lg:max-w-full w-full aspect-[1208/725]"
          src={schedulingImageArea}
          alt="Imagem da seção de agendametos"
          width={1208}
          height={725}
        />

        <div className="flex flex-col gap-[34px]">
          <Image
            className="aspect-[592/308]"
            src={weekImageArea}
            alt="Image da vista da agenda da semana"
            width={592}
            height={308}
          />

          <Image
            className="aspect-[592/620]"
            src={summaryDayImageArea}
            alt="Image do resumo do dia"
            width={592}
            height={620}
          />

          <Image
            className="aspect-[592/308]"
            src={newCustomerImageArea}
            alt="Image da vista da criação de novo cliente"
            width={592}
            height={308}
          />
        </div>

        <div className="-order-1 lg:order-1 max-w-[500px] w-full mb-6 lg:ml-auto lg:mb-0">
          <Image
            className="h-[52px] mb-8"
            src={schedulingIcon}
            alt="Icone de Agenda"
            width={56}
            height={52}
          />

          <span className="block text-sm leading-4 lg:text-base lg:leading-5 text-purple-heart-700 font-semibold uppercase mb-2">
            Agendamentos
          </span>

          <h2 className="max-w-[315px] sm:max-w-[340px] w-full text-2xl lg:text-[28px]/[36.4px] font-semibold text-mirage-950 mb-4">
            Qual a demanda do dia? Tem vaga disponível?
          </h2>

          <p className="max-w-[268px] sm:max-w-[410px] text-base text-lynch-500 mb-11 sm:mb-[54px]">
            Saber se há espaço em seu estabelecimento é fundamental para uma boa gestão.
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
    </section>
  )
}