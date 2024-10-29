import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between items-center gap-6 max-w-[1248px] w-full pt-20 pb-6 lg:pt-[108px] lg:pb-12 px-5 mx-auto">
        <Logo />

        <span className="text-xs leading-[18px] sm:text-base text-lynch-500">
          Copyright &copy; {new Date().getFullYear()} SouMotors. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}
