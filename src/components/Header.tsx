'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { TEST_DRIVE_LINK } from '@/constant/test-drive-link'

import { Logo } from './Logo'
import Link from './Link'

import menuIcon from '@/images/icons/menu.svg'

const navigation = [
  { name: 'Vantagens', href: '#advantages' },
  { name: 'Preços', href: '#pricing' },
]

export default function Header() {
  const [drawerActive, setDrawerActive] = useState(false)
  
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!drawerActive) return

    drawerRef.current?.focus()
  }, [drawerActive])

  return (
    <header className="absolute top-0 inset-x-0 flex items-center max-w-[1248px] w-full pt-10 pb-6 px-5 bg-white z-50 lg:static lg:block lg:py-6 lg:mx-auto">
      <div className="flex flex-1 lg:hidden">
        <Logo />
      </div>

      <div className="flex lg:hidden">
        <button
          type="button"
          className="flex"
          aria-expanded={drawerActive} 
          aria-controls="drawer"
          aria-haspopup="dialog"
          onClick={() => setDrawerActive(true)}
        >
          <Image
            src={menuIcon}
            alt='Icone abrir menu'
            width={20}
            height={36}
          />
        </button>
      </div>

      <div
        ref={drawerRef}
        {...(!drawerActive ? {} : {
          role: "dialog",
          tabIndex: -1,
        })}
      >
        <nav
          className={clsx([
            "fixed inset-y-0 right-0 translate-x-full data-[drawer-active=true]:translate-x-0 transition-transform duration-300 z-10 flex flex-col gap-4 max-w-[280px] w-full bg-white py-10 px-5",
            "lg:static lg:translate-x-0 lg:flex-row lg:justify-between lg:items-center lg:gap-0 lg:max-w-full lg:p-0"
          ])}
          data-drawer-active={drawerActive}
        >
          <div className="flex lg:flex-1">
            <Logo />
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:gap-x-16">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-mirage-950"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex lg:flex-1 lg:justify-end">
            <Link
              className='lg:max-w-[260px]'
              href={TEST_DRIVE_LINK}
              externalLink
            >
              Avaliação gratuita por 7 dias
            </Link>
          </div>
        </nav>
      </div>

      <div
        className='fixed inset-0 bg-black opacity-0 pointer-events-none data-[drawer-active=true]:opacity-40 data-[drawer-active=true]:pointer-events-auto transition-all	duration-300 lg:hidden'
        data-drawer-active={drawerActive}
        aria-hidden="true"
        onClick={() => setDrawerActive(false)}
      />
    </header>
  )
}
