'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Building2, 
  Wifi, 
  Snowflake, 
  Car, 
  Coffee, 
  Shield, 
  Phone, 
  Camera, 
  MessageSquare, 
  CheckCircle, 
  MapPin, 
  Star,
  ArrowRight,
  X,
  Clock
} from 'lucide-react'

const About = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (textRef.current) observer.observe(textRef.current)
    if (visualRef.current) observer.observe(visualRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const stats = [
    { number: '300m²', label: 'Área Total' },
    { number: '50+', label: 'Posições de Trabalho' },
    { number: '6', label: 'Ambientes Distintos' },
    { number: '07h00-18h30', label: 'Horário de Funcionamento' }
  ]

  const differentials = [
    { icon: Building2, text: 'Ambiente inspirador que estimula a criatividade e a produtividade' },
    { icon: Wifi, text: 'Infraestrutura completa: Wi-Fi potente, climatização, recepção e copa' },
    { icon: Snowflake, text: 'Conexão com outros profissionais e possibilidade de networking real' },
    { icon: Car, text: 'Localização estratégica em Varginha, com fácil acesso e segurança' },
    { icon: Coffee, text: 'Flexibilidade de horários e modelos de contratação sob medida' },
    { icon: Shield, text: 'Atendimento próximo, humano e comprometido com a sua experiência' }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* About Text */}
          <div ref={textRef} className="fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-full text-blue-600 font-medium text-xs sm:text-sm mb-4 sm:mb-6">
              <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Sobre o Espaço Nave</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-6 sm:mb-8">
              Por que Espaço Nave?
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed mb-6 sm:mb-8">
              <p className="text-base sm:text-lg">
                Porque mais do que um coworking, somos um <strong>lugar com propósito, conceito e identidade</strong>. 
                A escolha do nome Espaço Nave nasce da conexão direta com a cidade de Varginha — famosa nacionalmente pelo caso do ET.
              </p>
              
              <p className="text-base sm:text-lg">
                A palavra “nave” simboliza <strong>movimento, avanço, inovação</strong> e a coragem de explorar o desconhecido. 
                É sobre sair da zona de conforto e construir novos caminhos. Cada ambiente foi pensado como uma {" "}
                <strong>plataforma de decolagem</strong> para ideias ganharem forma.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Differentials */}
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-center text-gray-700 text-sm sm:text-base">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-gradient flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                <Phone className="w-4 h-4" />
                <span>Entrar em Contato</span>
              </button>
              <a 
                href="#gallery"
                className="btn-cta flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                <Camera className="w-4 h-4" />
                <span>Ver Instalações</span>
              </a>
            </div>
          </div>

          {/* About Visual - Real Image */}
          <div ref={visualRef} className="fade-in order-first lg:order-last">
            <div className="relative">
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/IMG_0690.JPG"
                  alt="Ambiente interno do Espaço Nave Coworking"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <h4 className="font-bold text-blue-600 mb-1 text-sm sm:text-base">Ambiente Principal</h4>
                    <p className="text-gray-700 text-xs sm:text-sm">
                      Espaço de coworking com estações individuais e área de convivência
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Additional info cards */}
              <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-green-500 text-white p-2 sm:p-3 rounded-xl shadow-lg">
                <div className="text-xs font-medium">DISPONÍVEL</div>
                <div className="text-sm sm:text-lg font-bold">AGORA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-3 sm:mb-4">
              Pronto para decolar?
            </h3>
            <p className="text-gray-700 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              O Espaço Nave é, acima de tudo, um convite. Um convite para quem quer crescer, criar, colaborar. 
              Para quem acredita que trabalhar em um ambiente agradável faz toda a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="tel:+5535992657526"
                className="btn-primary flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                <Phone className="w-4 h-4" />
                <span>Ligar Agora</span>
              </a>
              <a 
                href="https://wa.me/5535992657526?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Espaço%20Nave%20Coworking."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Contato */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl transform transition-all animate-fadeIn">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Entre em Contato</h3>
              <p className="text-gray-600">Escolha a melhor forma para falar conosco</p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="tel:+5535992657526"
                className="w-full bg-blue-600 text-white hover:bg-blue-700 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 justify-center"
                onClick={() => setIsModalOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <div className="text-left">
                  <span className="block">Ligar Agora</span>
                  <span className="text-sm opacity-90">(35) 9 9265-7526</span>
                </div>
              </a>
              
              <a 
                href="https://wa.me/5535992657526?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Espaço%20Nave%20Coworking."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white hover:bg-green-600 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 justify-center"
                onClick={() => setIsModalOpen(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <div className="text-left">
                  <span className="block">WhatsApp</span>
                  <span className="text-sm opacity-90">Resposta rápida</span>
                </div>
              </a>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                <span>Atendimento: Seg-Sex 07h00 às 18h30</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default About
