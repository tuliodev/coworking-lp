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
  CheckCircle 
} from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
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
              <Link href="#contact" className="btn-primary shadow-2xl flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                <Phone className="w-4 h-4" />
                <span>Entrar em Contato</span>
              </Link>
              <Link href="#services" className="btn-secondary flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                <FileText className="w-4 h-4" />
                <span>Conheça o Espaço</span>
              </Link>
            </div>

            {/* Informações de contato direto */}
            <div className={`flex flex-col gap-3 text-xs sm:text-sm transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                <a 
                  href="tel:+553599999999"
                  className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors min-w-0 flex-shrink-0"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate">(35) 9 9999-9999</span>
                </a>
                <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm min-w-0 flex-shrink-0">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate">Vila Pinto, Varginha-MG</span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Seg-Sex 7h às 18:30h</span>
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
  )
}

export default Hero
