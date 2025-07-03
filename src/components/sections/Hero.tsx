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
      className="min-h-screen gradient-primary flex items-center relative overflow-hidden pt-16 sm:pt-20 lg:pt-0"
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-100px)] sm:min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-80px)]">
          {/* Hero Text */}
          <div className={`text-white transition-all duration-1000 order-2 lg:order-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Coworking Profissional em Varginha</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              ESPAÇO NAVE
              <span className="block text-green-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mt-1 sm:mt-2">
                Coworking Profissional
              </span>
            </h1>
            
            <h2 className={`text-lg sm:text-xl lg:text-2xl text-white/95 mb-4 sm:mb-6 font-medium transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Infraestrutura completa para seu negócio crescer
            </h2>
            
            <div className={`mb-6 sm:mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <p className="text-base sm:text-lg text-white/90 mb-3 sm:mb-4">
                Salas privativas, estações compartilhadas, auditório e salas de reunião 
                em ambiente profissional no centro de Varginha.
              </p>
              
              {/* Benefícios principais */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-300 flex-shrink-0" />
                  <span>Internet de alta velocidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-300 flex-shrink-0" />
                  <span>Localização central</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-300 flex-shrink-0" />
                  <span>Ambiente climatizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-300 flex-shrink-0" />
                  <span>Estacionamento próprio</span>
                </div>
              </div>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Link href="#contact" className="btn-primary shadow-2xl flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                <Phone className="w-4 h-4" />
                <span>Agendar Visita</span>
              </Link>
              <Link href="#services" className="btn-secondary flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                <FileText className="w-4 h-4" />
                <span>Ver Serviços</span>
              </Link>
            </div>

            {/* Informações de contato direto */}
            <div className={`flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <a 
                href="tel:+553599999999"
                className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>(35) 9 9999-9999</span>
              </a>
              <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Vila Pinto, Varginha-MG</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Seg-Sex 8h às 18h</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className={`flex justify-center items-center transition-all duration-1000 delay-300 order-1 lg:order-2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main circle */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-full flex items-center justify-center animate-float backdrop-blur-sm border border-white/20 relative">
              <Image
                              src="/images/LOGOTIPO ESPAÇO NAVE-04.png"
                              alt="Logo Espaço Nave"
                              width={102}
                              height={102}
                              className="object-contain"
                              sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
                            />
              </div>
              
              {/* Orbital rings */}
              <div className="absolute inset-0 border border-white/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-white/70 rounded-full"></div>
              </div>
              <div className="absolute inset-4 sm:inset-8 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
