import Image from "next/image";

import logoSrc from "@/images/logo.png"

export function Logo() {
  return (
    <Image
      className="max-w-[140px] lg:max-w-[150px]"
      src={logoSrc}
      alt="Logo da soumotors"
      width={150}
      height={40}
    />
  )
}
