import clsx from "clsx"
import Link from "./Link"

export type PlanCardPropsTypes = {
  isHighlighted?: boolean
  name: string
  price: string
  shortDescription: string
  link: string
  actions: Array<{
    label: string
    isInclude: boolean
  }>
}

export default function PlanCard({ 
  isHighlighted = false,
  name,
  price,
  shortDescription,
  link,
  actions = []
}: PlanCardPropsTypes) {
  if (!actions.length) return null

  return (
    <li className={clsx([
      "relative rounded-md p-[34px]",
      isHighlighted
        ? "bg-purple-heart-700 text-white"
        : "bg-white text-lynch-500 border border-zumthor-100"
    ])}>
      {isHighlighted && (
        <span className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[10px]/[12px] text-purple-heart-700 font-semibold bg-white py-2.5 px-4 rounded-[999px] shadow-[0_3.367px_20.2px_0_rgba(102,102,102,0.08)]">
          Mais popular 🔥
        </span>
      )}

      <h3 className={clsx([
        "block text-sm leading-4 lg:text-base lg:leading-5 font-semibold uppercase mb-2",
        !isHighlighted && "text-purple-heart-700"
      ])}>
        {name}
      </h3>

      <strong className={clsx([
        "block text-[24px]/[31.2px] lg:text-[28px]/[36.4px] font-semibold mb-4",
        !isHighlighted && "text-mirage-950"
      ])}>
        {price}
      </strong>

      <p className={clsx([
        "text-base mb-6",
        !isHighlighted && "text-lynch-500"
      ])}>
        {shortDescription}
      </p>

      <Link
        className="mb-11 lg:mb-[54px]"
        href={link}
        {...(isHighlighted ? {
          styleVariants: { color: "secondary" }
        } : {})}
      >
        Escolher este plano
      </Link>

      <span className={clsx([
        "block text-base leading-5 font-semibold mb-6 lg:mb-[26px]",
        !isHighlighted && "text-mirage-950"
      ])}>
        Ações disponíveis:
      </span>

      <ul className="flex flex-col gap-6">
        {actions.map(({ label, isInclude }) => (
          <li key={label} className={clsx([
            "flex items-center gap-2",
            !isInclude && "opacity-60"
          ])}>
            {isInclude && (
              <svg className="min-w-[28px] h-[28px]" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="28" rx="14" fill="#DDE2FC"/>
                <path
                  d="M8.40002 14.8L11.6 18L19.6 10"
                  stroke="#5234C0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}

            {!isInclude && (
              <svg className="min-w-[28px] h-[28px]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="15" fill="#FCDDDD"/>
                <path
                  d="M10 20L20 10M10 10L20 20"
                  stroke="#EF4444"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}

            <span className={clsx([
                "text-base",
              !isHighlighted && "text-lynch-500",
                !isInclude && "line-through"
              ])}
            >
              {label}
            </span>
          </li>
        ))}
      </ul>
    </li>
  )
}