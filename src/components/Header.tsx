import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 shadow-lg">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between h-20">
          {/* Logo with icon */}
          <div className="flex-shrink-0 flex items-center h-full" style={{ maxWidth: '180px' }}>
            <Link href="/" className="flex items-center gap-3 group h-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-md group-hover:blur-lg transition-all" />
                <div className="relative bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-black text-white tracking-tight leading-tight">
                  TriathlonEvents
                </span>
                <span className="text-xs text-white/80 font-medium tracking-wide leading-none">Eventos Desportivos</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            >
              Início
            </Link>
            <Link
              href="/eventos"
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            >
              Eventos
            </Link>
            <Link
              href="/sobre"
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            >
              Sobre
            </Link>
            <Link
              href="/contacto"
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            >
              Contacto
            </Link>

            <Button asChild variant="secondary" className="ml-2 shadow-lg hover:shadow-xl">
              <Link href="/cadastrar">
                Cadastrar Evento
              </Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2 transition-all backdrop-blur-sm"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600" />
    </header>
  )
}
