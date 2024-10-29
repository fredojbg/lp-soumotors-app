import PlanCard, { PlanCardPropsTypes } from "./PlanCard"

const planStarter: PlanCardPropsTypes = {
  name: "Starter",
  price: "R$ 55,90 / mês",
  shortDescription: "Plano básico para pequenas empresas.",
  link: "#",
  actions: [
    { label: "Agendamentos ilimitados.", isInclude: true },
    { label: "Contatos ilimitados.", isInclude: true },
    { label: "Envio de até 15 orçamentos por mês.", isInclude: true },
    { label: "Envio de até 20 lembretes de agendamento/ pós-venda por mês.", isInclude: true },
    { label: "1 usuário incluído.", isInclude: true },
    { label: "Emita até 5 notas fiscais eletrônicas por mês.", isInclude: true },
    { label: "Relatórios de vendas com Inteligência Artificial.", isInclude: false },
    { label: "Vendas ilimitadas.", isInclude: false },
    { label: "Conciliação bancária.", isInclude: false },
    { label: "Vitrine de produtos/serviços com auto agendamento.", isInclude: false },
    { label: "Multi Organizações/Empresas (até 3, consulte se precisar de mais).", isInclude: false },
    { label: "Chat ao vivo integrado ao WhatsApp.", isInclude: false },
  ]
}

const planGrowth: PlanCardPropsTypes = {
  isHighlighted: true,
  name: "Growth",
  price: "R$ 145,90 / mês",
  shortDescription: "Ideal para empresas em crescimento.",
  link: "#",
  actions: [
    { label: "Agendamentos ilimitados.", isInclude: true },
    { label: "Contatos ilimitados.", isInclude: true },
    { label: "Envio de até 30 orçamentos por mês.", isInclude: true },
    { label: "Envio de até 30 lembretes de agendamento/ pós-venda por mês.", isInclude: true },
    { label: "2 usuário incluído.", isInclude: true },
    { label: "Emita até 15 notas fiscais eletrônicas por mês.", isInclude: true },
    { label: "Relatórios de vendas com Inteligência Artificial.", isInclude: true },
    { label: "Vendas ilimitadas.", isInclude: false },
    { label: "Conciliação bancária.", isInclude: false },
    { label: "Vitrine de produtos/serviços com auto agendamento.", isInclude: false },
    { label: "Multi Organizações/Empresas (até 3, consulte se precisar de mais).", isInclude: false },
    { label: "Chat ao vivo integrado ao WhatsApp.", isInclude: false },
  ]
}

const planBusiness: PlanCardPropsTypes = {
  name: "Business",
  price: "R$ 250,90 / mês",
  shortDescription: "Ideal para grandes empresas.",
  link: "#",
  actions: [
    { label: "Agendamentos ilimitados.", isInclude: true },
    { label: "Contatos ilimitados.", isInclude: true },
    { label: "Envio ilimitado de orçamentos.", isInclude: true },
    { label: "Envio ilimitado de lembretes de agendamento/pós-venda.", isInclude: true },
    { label: "5 usuário incluído.", isInclude: true },
    { label: "Emita até 100 notas fiscais eletrônicas por mês.", isInclude: true },
    { label: "Relatórios de vendas com Inteligência Artificial.", isInclude: true },
    { label: "Vendas ilimitadas.", isInclude: true },
    { label: "Conciliação bancária.", isInclude: true },
    { label: "Vitrine de produtos/serviços com auto agendamento.", isInclude: true },
    { label: "Multi Organizações/Empresas (até 3, consulte se precisar de mais).", isInclude: true },
    { label: "Chat ao vivo integrado ao WhatsApp.", isInclude: true },
  ]
}

const plans: PlanCardPropsTypes[] = [
  planStarter,
  planGrowth,
  planBusiness
]

export default function SectionPlans() {
  return (
    <section className="bg-black-haze-50" id="pricing">
      <div className="max-w-[1248px] w-full pt-[60px] pb-10 lg:py-[100px] px-5 mx-auto">
        <div className="flex justify-center items-end lg:justify-between gap-8 mb-11 lg:mb-[100px]">
          <div className="flex flex-col items-center lg:block">
            <span className="block text-sm leading-4 lg:text-base lg:leading-5 text-purple-heart-700 font-semibold uppercase mb-2">
              Planos
            </span>

            <h2 className="max-w-[240px] sm:max-w-full text-[28px]/[36.4px] lg:text-[32px]/[41.6px] font-semibold text-mirage-950 text-center">
              Qual o tamanho do seu negócio?
            </h2>
          </div>

          <div className="hidden lg:flex items-center gap-16">
            <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928932C17.9526 0.538408 17.3195 0.538408 16.9289 0.928932C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM0 9H24V7H0V9Z"
                fill="#5234C0"
              />
            </svg>

            <span className="block max-w-[264px] w-full text-base text-lynch-500">
              *Escolha o plano que melhor atende às suas necessidades.
            </span>
          </div>
        </div>

        <ul className="max-w-[562px] lg:max-w-full w-full flex flex-col lg:flex-row gap-6 lg:gap-8 mx-auto">
          {plans.map((planProps) => (
            <PlanCard
              key={planProps.name}
              {...planProps}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}