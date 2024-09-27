import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function CheckIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className,
      )}
      {...props}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  href,
  features,
  featuresFuture = [],
  featured = false,
}: {
  name: string
  price: string
  description: string
  href: string
  features: Array<string>
  featuresFuture?: Array<string>
  featured?: boolean
}) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8',
        featured ? 'order-first bg-blue-600 py-8 lg:order-none' : 'lg:py-8',
      )}
    >
      <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? 'text-white' : 'text-slate-400',
        )}
      >
        {description}
      </p>
      <p className="order-first font-display text-4xl font-light tracking-tight text-white">
        {price}
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-white' : 'text-slate-200',
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? 'text-white' : 'text-slate-400'} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
        {featuresFuture.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? 'text-white' : 'text-slate-400'} />
            <span className="ml-4">
              {feature} <span className="text-green-500">(Em breve)</span>
            </span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant={featured ? 'solid' : 'outline'}
        color="white"
        className="mt-8"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        Iniciar
      </Button>
    </section>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              {/* <SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400" /> */}
              <span className="relative">Preços simples,</span>
            </span>{' '}
            para todos.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Não importa o tamanho do seu negócio, nosso software se adapta
            perfeitamente às suas necessidades.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            featured
            name="Starter"
            price="R$ 55,90/mês"
            description="Plano básico para pequenas empresas."
            href="https://app.soumotors.com/sign-up"
            features={[
              'Agendamentos ilimitados.',
              'Contatos ilimitados.',
              'Envio de até 15 orçamentos por mês.',
              'Envio de até 20 lembretes de agendamento/ pós-venda por mês.',
              '1 usuário incluído.',
              'Emita até 5 notas fiscais eletrônicas por mês.',
            ]}
          />
          <Plan
            featured
            name="Growth"
            price="R$ 145,90/mês"
            description="Plano ideal para empresas em crescimento."
            href="https://app.soumotors.com/sign-up"
            features={[
              'Agendamentos ilimitados.',
              'Contatos ilimitados.',
              'Envio de até 30 orçamentos por mês.',
              'Envio de até 30 lembretes de agendamento/ pós-venda por mês.',
              'Relatórios de vendas com Inteligência Artificial.',
              '2 usuários incluídos.',
              'Emita até 15 notas fiscais eletrônicas por mês.',
            ]}
          />
          <Plan
            featured
            name="Business"
            price="R$ 250,90/mês"
            description="Plano completo com todos os recursos avançados."
            href="https://app.soumotors.com/sign-up"
            features={[
              'Agendamentos ilimitados.',
              'Contatos ilimitados.',
              'Vendas ilimitadas.',
              'Conciliação bancária.',
              'Chat ao vivo integrado ao WhatsApp.',
              'Vitrine de produtos/serviços com auto agendamento.',
              'Envio ilimitado de orçamentos.',
              'Envio ilimitado de lembretes de agendamento/pós-venda.',
              'Relatórios de vendas com Inteligência Artificial.',
              '5 usuários incluídos.',
              'Emita até 100 notas fiscais eletrônicas por mês.',
              'Multi Organizações/Empresas (até 3, consulte se precisar de mais).',
            ]}
          />
        </div>
      </Container>
    </section>
  )
}
