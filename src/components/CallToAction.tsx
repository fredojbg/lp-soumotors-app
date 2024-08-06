import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-16"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Comece hoje mesmo
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Assuma o controle da sua oficina. Experimente nosso software e veja
            como ele pode transformar a gestão do seu negócio automotivo.
          </p>
          <Button
            href="https://app.soumotors.com/sign-up"
            color="white"
            className="mt-10"
          >
            Faça uma Demo para descobrir todos os benefícios.
          </Button>
        </div>
      </Container>
    </section>
  )
}
