import NavLink from 'next/link'
import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const linkStyles = tv({
  base: 'flex justify-center items-center max-w-full w-full rounded lg:hover:brightness-90 lg:transition-all lg:duration-300',
  variants: {
    color: {
      primary: 'bg-purple-heart-700 text-white',
      secondary: 'bg-white text-purple-heart-700',
    },
    size: {
      sm: 'text-sm py-2.5 px-4',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'sm',
  },
})

type PropsTypes = ComponentProps<typeof NavLink> & {
  styleVariants?: VariantProps<typeof linkStyles>
  externalLink?: boolean
}

export default function Link({
  styleVariants = {},
  className = '',
  externalLink = false,
  ...restProps
}: PropsTypes) {
  return (
    <NavLink
      className={linkStyles({ class: className, ...styleVariants })}
      {...restProps}
      {...(externalLink ? { rel: "noopener noreferrer" } : {})}
    />
  )
}
