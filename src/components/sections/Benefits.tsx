'use client'

import { useEffect, useRef } from 'react'
import { 
  CheckCircle, 
  Sparkles, 
  Wifi, 
  Users, 
  MapPin, 
  Clock, 
  Heart
} from 'lucide-react'

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      icon: Sparkles,
      title: 'Ambiente inspirador',
      description: 'Ambiente inspirador que estimula a criatividade e a produtividade',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Wifi,
      title: 'Infraestrutura completa',
      description: 'Wi-Fi potente, climatização, recepção e copa equipada',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Networking real',
      description: 'Conexão com outros profissionais e possibilidade de networking real',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Localização estratégica',
      description: 'Localização estratégica em Varginha, com fácil acesso e segurança',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      title: 'Flexibilidade total',
      description: 'Flexibilidade de horários e modelos de contratação sob medida',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Heart,
      title: 'Atendimento humanizado',
      description: 'Atendimento próximo, humano e comprometido com a sua experiência',
      color: 'from-rose-500 to-pink-500'
    }
  ]

  return (
    <section id="benefits" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="fade-in">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-full text-blue-600 font-medium text-xs sm:text-sm mb-4 sm:mb-6">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Benefícios de Trabalhar na Nave</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4 sm:mb-6">
              Benefícios exclusivos para nossos coworkers
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Mais do que um espaço de trabalho, oferecemos uma experiência completa 
              pensada para potencializar seus resultados e bem-estar profissional.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon with gradient background */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-blue-700 font-medium italic leading-relaxed mb-6">
                "Onde o trabalho se conecta com o futuro"
              </blockquote>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits