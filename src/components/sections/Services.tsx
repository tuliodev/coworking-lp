'use client'

import { useEffect, useRef, useState } from 'react'
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
  ArrowRight,
  X,
  Phone,
  Clock
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
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  return (
    <div 
      ref={cardRef}
      className="fade-in bg-white rounded-2xl shadow-lg card-hover relative overflow-hidden border border-gray-100 group flex flex-col h-full"
    >
      <div className="absolute top-0 left-0 right-0 h-1 gradient-primary"></div>
      
      {/* Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
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
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-2 sm:mb-3 flex items-center gap-2">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>{title}</span>
        </h3>
        <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
          {description}
        </p>
        
        {/* Features */}
        <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-xs sm:text-sm text-gray-700">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* CTA */}
        <div className="mt-auto">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium text-center block hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <span>Consultar Disponibilidade</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
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
    </div>
  )
}

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
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

  const services = [
    {
      icon: Briefcase,
      title: 'Estações de trabalho compartilhadas',
      description: 'Ambientes organizados, confortáveis e com internet de alta velocidade para você focar.',
      features: [
        'Ideal para profissionais autônomos e freelancers',
        'Estudantes e pequenos negócios',
        'Espaço inteligente e funcional',
        'Bem localizado e equipado'
      ],
      image: '/images/IMG_0727.JPG'
    },
    {
      icon: Building2,
      title: 'Salas privativas para locação',
      description: 'Precisa de mais privacidade para reuniões, atendimentos ou uma rotina fixa de trabalho?',
      features: [
        'Salas mobiliadas',
        'Prontas para uso imediato',
        'Contratos flexíveis',
        'Estrutura profissional'
      ],
      image: '/images/IMG_0740 (1).JPG'
    },
    {
      icon: Users,
      title: 'Sala de reunião equipada',
      description: 'Espaço exclusivo para reuniões presenciais ou videoconferências, com TV, ambiente climatizado e uma atmosfera profissional.',
      features: [
        'Perfeita para atender clientes',
        'Conduzir entrevistas e apresentações',
        'Alinhamentos de equipe',
        'Total conforto e discrição'
      ],
      image: '/images/sala 0 -.jpeg'
    },
    {
      icon: Presentation,
      title: 'Ambiente para eventos, cursos e palestras',
      description: 'Se você promove encontros, treinamentos, lançamentos ou quer compartilhar conhecimento, temos um espaço versátil.',
      features: [
        'Pronto para se adaptar ao seu formato',
        'Estrutura para receber bem o seu público',
        'Experiência completa e personalizada',
        'Equipamentos modernos disponíveis'
      ],
      image: '/images/IMG_0690.JPG'
    },
    {
      icon: Calendar,
      title: 'Estações individuais',
      description: 'Espaços individuais dedicados para quem busca foco total e ambiente personalizado.',
      features: [
        'Privacidade para concentração',
        'Mesa e cadeira ergonômica',
        'Iluminação adequada',
        'Ambiente silencioso'
      ],
      image: '/images/IMG_0749.JPG'
    },
    {
      icon: MapPin,
      title: 'Copa equipada',
      description: '',
      features: [
        'Café gourmet',
        'Microondas',
        'Geladeira',
        'Água filtrada',
      ],
      image: '/images/COPA.jpeg'
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
            Aqui você encontra
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Um hub de trabalho, encontros e eventos que une estrutura, conforto e inovação para profissionais que querem ir além do básico.
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
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-gradient flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Consultor</span>
                </button>
                <a 
                  href="#gallery"
                  className="btn-cta flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                >
                  <Camera className="w-4 h-4" />
                  <span>Conhecer Instalações</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
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

export default Services
