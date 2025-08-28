'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { 
  Phone, 
  MapPin, 
  Clock, 
  Wifi, 
  Car, 
  Snowflake, 
  Building2, 
  Calendar, 
  FileText, 
  Star, 
  Zap, 
  CheckCircle,
  X 
} from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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

  return (
    <div>
      <section 
        id="home" 
        className="gradient-primary flex items-center relative overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-32 lg:pb-16"
      >
        {/* Stars Background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 animate-stars"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='20' cy='20' r='2' fill='white' opacity='0.3'/%3E%3Ccircle cx='80' cy='10' r='1' fill='white' opacity='0.5'/%3E%3Ccircle cx='60' cy='30' r='1.5' fill='white' opacity='0.4'/%3E%3Ccircle cx='30' cy='60' r='1' fill='white' opacity='0.6'/%3E%3Ccircle cx='70' cy='70' r='2' fill='white' opacity='0.3'/%3E%3Ccircle cx='10' cy='80' r='1' fill='white' opacity='0.5'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Text */}
            <div className={`text-white transition-all duration-1000 order-2 lg:order-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Coworking Profissional em Varginha</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                ESPAÇO NAVE
                <span className="block text-green-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mt-1 sm:mt-2">
                  Coworking
                </span>
              </h1>
              
              <h2 className={`text-lg sm:text-xl lg:text-2xl text-white/95 mb-4 sm:mb-6 font-medium transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                Muito mais que um coworking. Um ponto de partida para o seu próximo salto.
              </h2>
              
              <div className={`mb-6 sm:mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <p className="text-base sm:text-lg text-white/90 mb-3 sm:mb-4">
                  Imagine um lugar onde o ambiente trabalha junto com você. Onde cada espaço foi pensado para dar suporte às suas ideias, estimular conexões reais e criar experiências transformadoras.
                </p>
                
                {/* Benefícios principais */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-300 flex-shrink-0" />
                    <span>Ambiente inspirador que estimula a criatividade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-300 flex-shrink-0" />
                    <span>Infraestrutura completa e moderna</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-300 flex-shrink-0" />
                    <span>Conexão com outros profissionais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-300 flex-shrink-0" />
                    <span>Localização estratégica em Varginha</span>
                  </div>
                </div>
              </div>
              
              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary shadow-2xl flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>Entrar em Contato</span>
                </button>
                <a 
                  href="#gallery"
                  className="btn-secondary flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                >
                  <FileText className="w-4 h-4" />
                  <span>Conheça o Espaço</span>
                </a>
              </div>

              {/* Informações adicionais */}
              <div className={`flex flex-col gap-3 text-xs sm:text-sm transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm min-w-0 flex-shrink-0">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">Vila Pinto, Varginha-MG</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>Seg-Sex 07h00 às 18h30</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className={`flex justify-center items-center transition-all duration-1000 delay-300 order-1 lg:order-2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Main circle */}
                <div className="w-80 h-80 sm:w-96 sm:h-96 bg-white/20 rounded-full flex items-center justify-center animate-float backdrop-blur-sm border-2 border-white/40 shadow-2xl relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Image
                      src="/images/LOGOTIPO ESPAÇO NAVE-04.png"
                      alt="Logo Espaço Nave"
                      width={120}
                      height={120}
                      className="object-contain"
                      sizes="(max-width: 640px) 96px, (max-width: 768px) 120px, 120px"
                    />
                  </div>
                </div>
                
                {/* Orbital rings */}
                <div className="absolute inset-0 border-2 border-white/50 rounded-full animate-spin shadow-lg" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full shadow-lg animate-pulse"></div>
                </div>
                <div className="absolute inset-6 sm:inset-8 border-2 border-white/40 rounded-full animate-spin shadow-md" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-green-300 rounded-full shadow-lg animate-pulse"></div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Hero