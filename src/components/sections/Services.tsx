'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Briefcase, 
  Building2, 
  Users, 
  Presentation, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  MessageSquare, 
  Camera, 
  Star, 
  Zap,
  ArrowRight
} from 'lucide-react'

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
  image: string
  delay?: number
}

const ServiceCard = ({ icon: Icon, title, description, features, image, delay = 0 }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible')
          }, delay)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div 
      ref={cardRef}
      className="fade-in bg-white rounded-2xl shadow-lg card-hover relative overflow-hidden border border-gray-100 group"
    >
      <div className="absolute top-0 left-0 right-0 h-1 gradient-primary"></div>
      
      {/* Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
      <Image
      src={image}
      alt={title}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-110"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      
      {/* Icon */}
      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
        </div>
      </div>
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-2 sm:mb-3 flex items-center gap-2">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>{title}</span>
        </h3>
        <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
          {description}
        </p>
        
        {/* Features */}
        <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-xs sm:text-sm text-gray-700">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* CTA */}
        <Link 
          href="#contact" 
          className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium text-center block hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <span>Consultar Disponibilidade</span>
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </Link>
      </div>
    </div>
  )
}

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Estações de Coworking',
      description: 'Posições de trabalho em ambiente compartilhado com infraestrutura completa.',
      features: [
        'Mesa individual com gavetas',
        'Cadeira ergonômica',
        'Internet fibra óptica',
        'Uso da copa e impressora'
      ],
      image: '/images/IMG_0690.JPG'
    },
    {
      icon: Building2,
      title: 'Salas Privativas',
      description: 'Ambientes exclusivos para equipes de 2 a 8 pessoas com total privacidade.',
      features: [
        'Sala mobiliada e climatizada',
        'Controle de acesso individual',
        'Mesa de reunião inclusa',
        'Armário com chave'
      ],
      image: '/images/IMG_0740 (1).JPG'
    },
    {
      icon: Users,
      title: 'Sala de Reunião',
      description: 'Espaço equipado para apresentações, reuniões e videoconferências.',
      features: [
        'TV 55" com conexão HDMI',
        'Mesa para 8 pessoas',
        'Flipchart e materiais',
        'Climatização independente'
      ],
      image: '/images/IMG_0721 (1).JPG'
    },
    {
      icon: Presentation,
      title: 'Auditório para Eventos',
      description: 'Espaço completo para cursos, palestras e eventos corporativos.',
      features: [
        'Capacidade para 40 pessoas',
        'Projetor e sistema de som',
        'Palco e equipamentos A/V',
        'Copa de apoio inclusa'
      ],
      image: '/images/IMG_0746 (1).JPG'
    },
    {
      icon: Calendar,
      title: 'Day Use',
      description: 'Acesso por período para quem precisa de um ambiente profissional pontualmente.',
      features: [
        'Acesso por 4 ou 8 horas',
        'Internet e impressão',
        'Uso da copa',
        'Ambiente climatizado'
      ],
      image: '/images/IMG_0757.JPG'
    },
    {
      icon: MapPin,
      title: 'Endereço Comercial',
      description: 'Use nosso endereço para correspondência e domicílio fiscal da sua empresa.',
      features: [
        'Recebimento de correspondências',
        'Atestado de localização',
        'Sala de reunião inclusa (2h/mês)',
        'Endereço em região nobre'
      ],
      image: '/images/IMG_0733.JPG'
    }
  ]

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-full text-blue-600 font-medium text-xs sm:text-sm mb-4 sm:mb-6">
            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Nossos Serviços</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4 sm:mb-6">
            Soluções completas para seu negócio
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Infraestrutura profissional, flexibilidade de planos e localização estratégica 
            para impulsionar seus resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-3 sm:mb-4">
                Precisa de uma solução personalizada?
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Nossa equipe comercial pode criar um plano específico para suas necessidades, 
                combinando diferentes serviços com condições especiais.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="#contact" className="btn-gradient flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Consultor</span>
                </Link>
                <Link href="#gallery" className="btn-cta flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                  <Camera className="w-4 h-4" />
                  <span>Conhecer Instalações</span>
                </Link>
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-green-700 text-sm sm:text-base">Sem Taxa de Adesão</div>
                  <div className="text-xs sm:text-sm text-green-600">Para contratos acima de 6 meses</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-yellow-700 text-sm sm:text-base">Setup Imediato</div>
                  <div className="text-xs sm:text-sm text-yellow-600">Comece a trabalhar hoje mesmo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
