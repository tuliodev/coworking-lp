'use client'

import { useEffect, useRef } from 'react'
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
  ArrowRight
} from 'lucide-react'

const About = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)

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

  const stats = [
    { number: '500m²', label: 'Área Total' },
    { number: '50+', label: 'Posições de Trabalho' },
    { number: '6', label: 'Ambientes Distintos' },
    { number: '24/7', label: 'Acesso Disponível' }
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
                É sobre sair da zona de conforto e construir novos caminhos. Cada ambiente foi pensado como uma 
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
              <Link href="#contact" className="btn-gradient flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                <Phone className="w-4 h-4" />
                <span>Agendar Visita Técnica</span>
              </Link>
              <Link href="#gallery" className="btn-cta flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                <Camera className="w-4 h-4" />
                <span>Ver Instalações</span>
              </Link>
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
              Para quem acredita que trabalhar em um bom lugar faz toda a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="tel:+553599999999"
                className="btn-primary flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                <Phone className="w-4 h-4" />
                <span>Ligar Agora</span>
              </a>
              <a 
                href="https://wa.me/553599999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20técnica%20ao%20Espaço%20Nave%20Coworking."
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
    </section>
  )
}

export default About
