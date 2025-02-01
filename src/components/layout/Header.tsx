import Link from 'next/link'
import { Button } from '../ui/Button'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">Albrecht Tech</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/sobre" className="text-gray-600 hover:text-gray-900">
              Sobre
            </Link>
            <Link href="/servicos" className="text-gray-600 hover:text-gray-900">
              Serviços
            </Link>
            <Link href="/projetos" className="text-gray-600 hover:text-gray-900">
              Projetos
            </Link>
            <Link href="/contato" className="text-gray-600 hover:text-gray-900">
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button href="/contato">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
