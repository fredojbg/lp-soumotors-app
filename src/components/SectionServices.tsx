import Image from "next/image";

import serviceImageArea from "@/images/service-image-area-desktop.webp"
import checkIcon from "@/images/icons/check.svg"
import statusIcon from "@/images/icons/status.svg"
import editIcon from "@/images/icons/edit.svg"

export default function SectionServices() {
  return (
    <section id="advantages">
      <div className="max-w-[1248px] w-full flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start gap-11 sm:gap-8 py-20 sm:pt-[100px] sm:pb-[132px] px-5 mx-auto">
        <Image
          className="aspect-[639/448] w-full lg:w-[revert-layer]"
          src={serviceImageArea}
          alt="Imagem da parte de serviços"
          width={639}
          height={448}
        />

        <div className="max-w-[500px] w-full">
          <Image
            className="h-[52px] mb-8"
            src={checkIcon}
            alt="Icone Check"
            width={56}
            height={52}
          />

          <span className="block text-sm leading-4 lg:text-base lg:leading-5 text-purple-heart-700 font-semibold uppercase mb-2">
            Organização
          </span>

          <h2 className="max-w-[275px] lg:max-w-[360px] w-full text-2xl lg:text-[28px]/[36.4px] font-semibold text-mirage-950 mb-4">
            Tenha todos os seus serviços organizados
          </h2>

          <p className="max-w-[314px] lg:max-w-full text-base text-lynch-500 mb-11 sm:mb-[54px]">
            Uma lista completa de todos os serviços prestados por seu negócio oferece uma noção maior de seu trabalho.
          </p>

          <span className="block text-base leading-5 text-mirage-950 font-semibold mb-[26px]">
            Ações disponíveis:
          </span>

          <div className="flex gap-6 sm:max-w-[362px] w-full">
            <div className="flex-1 flex justify-center items-center h-20 border rounded-md border-zumthor-100">
              <Image
                src={statusIcon}
                alt="Imagem com ação de status"
                width={73}
                height={26}
              />
            </div>

            <div className="flex-1 flex justify-center items-center h-20 border rounded-md border-zumthor-100">
              <Image
                src={editIcon}
                alt="Imagem com ação de edição"
                width={88}
                height={22}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}