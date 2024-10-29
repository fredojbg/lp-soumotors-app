import Image from "next/image";

import { TEST_DRIVE_LINK } from "@/constant/test-drive-link";

import Link from "./Link";

import budgetSummaryImageAreaDesktop from "@/images/budget-summary-image-area-desktop.webp"
import budgetSummaryImageAreaMobile from "@/images/budget-summary-image-area-mobile.webp"

export default function SectionBuyNow() {
  return (
    <section className="bg-purple-heart-700">
      <div className="relative flex justify-end items-end max-w-[562px] lg:max-w-[1440px] w-full pt-24 sm:pt-[272px] lg:pt-20 mx-auto">
        <div className="absolute top-[60px] lg:top-1/2 left-5 xl:left-[8.5%] lg:-translate-y-1/2 max-w-[312px] sm:max-w-[360px] w-full">
          <span className="block text-sm leading-4 lg:text-base lg:leading-5 font-semibold text-white tracking-[1.4px] lg:tracking-[1.6px] uppercase mb-2">
            Adquira hoje
          </span>

          <h2 className="text-[28px]/[36.4px] lg:text-[32px]/[41.6px] text-white font-semibold mb-6 sm:mb-8">
            Maior controle e gestão do seu negocio
          </h2>

          <Link
            className="max-w-[260px]"
            href={TEST_DRIVE_LINK}
            styleVariants={{ color: "secondary" }}
          >
            Avaliação gratuita por 7 dias
          </Link>
        </div>

        <Image
          className="hidden sm:block max-w-full lg:max-w-[83.88%] aspect-[1208/550]"
          src={budgetSummaryImageAreaDesktop}
          alt="Imagem do resumo do orçamento desktop"
          width={1208}
          height={550}
        />

        <Image
          className="sm:hidden aspect-[562/664]"
          src={budgetSummaryImageAreaMobile}
          alt="Imagem do resumo do orçamento mobile"
          width={562}
          height={664}
        />
      </div>
    </section>
  )
}