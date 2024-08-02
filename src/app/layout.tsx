import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Sou Motors',
    default: 'Sou Motors - Controle Especializado no Ramo Automotivo',
  },

  description:
    'Descubra soluções inovadoras para crescimento e gestão no setor de estética automotiva com a Sou Motors.',
  keywords: [
    'Sou Motors',
    'Sistema de Gestão Automotiva',
    'Sistema para oficinas mecânicas',
    'Estética Automotiva',
    'Controle de Estoque',
    'Controle Financeiro',
    'Controle de Vendas',
    'Controle de Serviços',
    'Controle de Clientes',
    'Controle de Funcionários',
    'Controle de Fornecedores',
    'Controle de Produtos',
    'Controle de Compras',
    'Controle de Orçamentos',
    'Controle de Agendamentos',
    'Controle de Relatórios',
    'Controle de Comissões',
    'Controle de Despesas',
  ],
  openGraph: {
    title: 'Sou Motors - Sistema de Gestão Automotiva',
    description:
      'Descubra soluções inovadoras para crescimento e gestão no setor de estética automotiva com a Sou Motors.',
    url: 'https://soumotors.com',
    siteName: 'Sou Motors',
    images: [
      {
        url: 'https://www.soumotors.com/_next/image?url=/_next/static/media/dashboard.5b61f4c3.png&w=2048&q=75',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
