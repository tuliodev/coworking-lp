'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  Phone, 
  Mail, 
  Instagram, 
  MessageSquare, 
  Clock, 
  Building2, 
  Calendar, 
  Star, 
  Zap,
  ArrowRight
} from 'lucide-react'

interface ContactCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  info: string
  description: string
  href?: string
  primary?: boolean
}

const ContactCard = ({ icon: Icon, title, info, description, href, primary }: ContactCardProps) => {
  const content = (
    <div className={`p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
      primary 
        ? 'bg-white/20 border-white/30 shadow-lg' 
        : 'bg-white/10 border-white/20'
    }`}>
      <div className="mb-3">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h4 className="text-xl font-bold mb-2 text-white">{title}</h4>
      <p className="text-white font-medium mb-1">{info}</p>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  )

  return href ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    content
  )
}

const Contact = () => {
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

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 gradient-secondary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-5 sm:left-10 w-8 h-8 sm:w-16 sm:h-16 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={sectionRef} className="fade-in">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Entre em Contato</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Agende sua visita hoje mesmo
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Nossa equipe está pronta para apresentar a infraestrutura completa 
              e encontrar a solução ideal para suas necessidades profissionais.
            </p>
          </div>

          {/* Main CTA */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto mb-12 sm:mb-16 border border-white/20">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Atendimento Imediato</h3>
              <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                Ligue agora e agende sua visita para esta semana. 
                Atendimento comercial de segunda a sexta, das 8h às 18h.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="tel:+553599999999" 
                className="btn-primary shadow-2xl flex items-center justify-center gap-2 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <div className="text-left">
                  <div className="font-bold">(35) 9 9999-9999</div>
                  <div className="text-xs opacity-90">Ligar Agora</div>
                </div>
              </a>
              
              <a 
                href="https://wa.me/553599999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20Espaço%20Nave%20Coworking%20para%20conhecer%20os%20ambientes%20e%20valores."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta shadow-2xl flex items-center justify-center gap-2 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                <div className="text-left">
                  <div className="font-bold">WhatsApp</div>
                  <div className="text-xs opacity-90">Resposta rápida</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <ContactCard
              icon={Phone}
              title="Telefone Comercial"
              info="(35) 9 9999-9999"
              description="Atendimento comercial e agendamento de visitas"
              href="tel:+553599999999"
              primary
            />
            <ContactCard
              icon={Mail}
              title="E-mail Corporativo"
              info="adm@espaconave.com"
              description="Propostas comerciais e parcerias"
              href="mailto:adm@espaconave.com?subject=Interesse%20comercial%20-%20Espaço%20Nave"
            />
            <ContactCard
              icon={Instagram}
              title="Redes Sociais"
              info="@espaconavecoworking"
              description="Novidades e conteúdo exclusivo"
              href="https://instagram.com/espaconavecoworking"
            />
          </div>

          {/* Business Hours */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto border border-white/20">
            <div className="flex justify-center mb-4 sm:mb-6">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Horário de Funcionamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="bg-white/10 rounded-xl p-4 sm:p-6">
                  <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto mb-2 sm:mb-3" />
                  <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Segunda a Sexta</h4>
                  <p className="text-xl sm:text-2xl font-bold text-green-300">8h às 18h</p>
                  <p className="text-white/80 text-xs sm:text-sm mt-1 sm:mt-2">Atendimento comercial e acesso</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-xl p-4 sm:p-6">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto mb-2 sm:mb-3" />
                  <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Sábado</h4>
                  <p className="text-xl sm:text-2xl font-bold text-green-300">8h às 12h</p>
                  <p className="text-white/80 text-xs sm:text-sm mt-1 sm:mt-2">Somente com agendamento</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 sm:mt-6 p-3 sm:p-4 bg-white/10 rounded-xl">
              <p className="text-white/90 text-sm sm:text-base">
                <span className="font-bold">Horário comercial flexibilizado</span> para melhor atendimento
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Pronto para impulsionar seu negócio?
              </h3>
              <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                Mais de <strong>200 profissionais</strong> já escolheram o Espaço Nave. 
                Faça parte desta comunidade de sucesso.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="tel:+553599999999"
                  className="btn-primary shadow-2xl flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>Ligar e Agendar Agora</span>
                </a>
                <a 
                  href="#gallery"
                  className="btn-secondary shadow-2xl flex items-center gap-2 justify-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Ver Antes de Decidir</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
