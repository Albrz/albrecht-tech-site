import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transforme seu Negócio com Soluções Inteligentes
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Automatize processos, tome decisões baseadas em dados e aumente sua eficiência com nossas soluções em IA e automação.
              </p>
              <div className="flex gap-4">
                <Button href="/contato">Comece Agora</Button>
                <Button href="/servicos" variant="outline">
                  Conheça Nossos Serviços
                </Button>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/hero-image.svg"
                alt="Automação e IA"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em automação e inteligência artificial para impulsionar seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automação de Processos */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automação de Processos
              </h3>
              <p className="text-gray-600 mb-4">
                Otimize suas operações com automação inteligente de processos, reduzindo custos e aumentando a eficiência.
              </p>
              <Button href="/servicos/automacao" variant="secondary">
                Saiba Mais
              </Button>
            </div>

            {/* Inteligência Artificial */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Inteligência Artificial
              </h3>
              <p className="text-gray-600 mb-4">
                Implemente soluções de IA personalizadas para análise de dados, previsões e tomada de decisões inteligentes.
              </p>
              <Button href="/servicos/ia" variant="secondary">
                Saiba Mais
              </Button>
            </div>

            {/* Consultoria */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Consultoria
              </h3>
              <p className="text-gray-600 mb-4">
                Receba orientação especializada para transformar seu negócio com as melhores práticas em tecnologia.
              </p>
              <Button href="/servicos/consultoria" variant="secondary">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
