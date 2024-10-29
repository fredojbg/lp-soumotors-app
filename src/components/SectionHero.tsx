import Image from "next/image";
import Link from "./Link";

import { TEST_DRIVE_LINK } from "@/constant/test-drive-link";

import mouseIcon from "@/images/icons/mouse.svg"
import heroDesk from "@/images/hero-image-area-desktop-2.webp"
import heroMob from "@/images/hero-image-area-mobile.webp"

export default function SectionHero() {
  return (
    <section className="bg-black-haze-50">
      <div className="relative max-w-[1440px] w-full min-h-screen mx-auto lg:min-h-[calc(100vh-90px)]">
        <div className="relative max-w-[1240px] w-full py-40 px-4 mx-auto z-10 lg:py-20">
          <span className="block text-sm leading-4 lg:text-base lg:leading-5 text-purple-heart-700 font-semibold uppercase mb-2">
            Somos a soumotors
          </span>

          <h1 className="max-w-[332px] sm:max-w-[714px] text-[34px]/[44px] sm:text-[44px]/[57px] font-semibold mb-4">
            Oferecemos uma gestão{" "}
            <span className="text-purple-heart-700">simples</span>
            {" "}e eficaz para o seu negocio
          </h1>

          <p className="max-w-[332px] sm:max-w-[450px] w-full text-base text-lynch-500 mb-8">
            Simplifique sua gestão, otimize processos e melhore a produtividade com uma visão clara do seu negócio.
          </p>

          <Link
            className="max-w-[260px]"
            href={TEST_DRIVE_LINK}
          >
            Avaliação gratuita por 7 dias
          </Link>

          <div className="hidden lg:flex items-center gap-4 mt-[100px]">
            <div className="flex bg-white py-[18px] px-6 rounded-md	border-zumthor-100">
              <Image
                src={mouseIcon}
                alt="Icone de mouse"
                width={16}
                height={24}
              />
            </div>

            <span className="text-base leading-5 font-semibold text-lynch-500 tracking-[1.6px]">
              Continue rolando
            </span>
          </div>
        </div>

        <Image
          className="absolute right-0 bottom-0 hidden max-w-[calc(100%-60px)] w-full lg:block"
          src={heroDesk}
          alt="Imagem desktop da plataforma"
        />

        <Image
          className="hidden absolute right-0 bottom-0 xm:block max-w-[calc(100%-20px)] w-full lg:hidden sm:max-w-2xl"
          src={heroMob}
          alt="Imagem desktop da plataforma"
        />
      </div>
    </section>
  )
}