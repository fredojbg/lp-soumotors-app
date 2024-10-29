import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center gap-6 h-full bg-black-haze-50'>
      <h1 className='text-2xl lg:text-[28px]/[36.4px] font-semibold text-mirage-950 text-center'>
        Oops!<br />
        A pagina não foi encontrada
      </h1>

      <Link href="/" className='max-w-[180px]'>
        Voltar para a Home
      </Link>
    </div>
  )
}
