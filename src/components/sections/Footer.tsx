import Image from 'next/image'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  MessageSquare, 
  Clock 
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-800 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo e Descrição */}
          <div className="sm:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="relative w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12">
                <Image
                  src="/images/LOGOTIPO ESPAÇO NAVE-04.png"
                  alt="Logo Espaço Nave"
                  fill
                  className="object-contain filter brightness-0 invert"
                  sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
                />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold">
                  ESPAÇO<span className="text-green-400">NAVE</span>
                </div>
                <div className="text-xs text-green-400 uppercase tracking-widest">
                  COWORKING
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md text-sm sm:text-base mx-auto sm:mx-0 mb-4">
              Muito mais que um coworking. Um ponto de partida para o seu próximo salto.
            </p>
            <p className="text-green-400 font-medium italic text-sm sm:text-base">
              "Espaço Nave. Onde o trabalho se conecta com o futuro."
            </p>
          </div>

          {/* Contato */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold mb-3 sm:mb-4 text-green-400 text-sm sm:text-base">Contato</h4>
            <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm">
              <a href="tel:+553599999999" className="flex items-center justify-center sm:justify-start gap-2 hover:text-green-400 transition-colors">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>(35) 9 9999-9999</span>
              </a>
              <a href="mailto:adm@espaconave.com" className="flex items-center justify-center sm:justify-start gap-2 hover:text-green-400 transition-colors">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>adm@espaconave.com</span>
              </a>
              <div className="flex items-start justify-center sm:justify-start gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <span className="text-center sm:text-left">R. José Gonçalves Pereira, 129<br />Vila Pinto - Varginha/MG</span>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold mb-3 sm:mb-4 text-green-400 flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Funcionamento</span>
            </h4>
            <div className="space-y-1 sm:space-y-2 text-gray-300 text-sm">
              <div className="flex justify-between items-center">
                <span>Segunda a Sexta</span>
                <span className="font-medium">8h - 18h</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sábado</span>
                <span className="font-medium">8h - 12h</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Domingo</span>
                <span className="text-gray-500">Fechado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Links Rápidos */}
        <div className="border-t border-slate-700 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-sm">
            <a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">Serviços</a>
            <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">Sobre</a>
            <a href="#gallery" className="text-gray-300 hover:text-green-400 transition-colors">Galeria</a>
            <a href="#location" className="text-gray-300 hover:text-green-400 transition-colors">Localização</a>
            <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contato</a>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
          <a 
            href="https://instagram.com/espaconavecoworking" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors group"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://wa.me/553599999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors group"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="mailto:adm@espaconave.com"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors group"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-4 sm:pt-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; {currentYear} Espaço Nave Coworking. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-1 sm:mt-2">
            CNPJ: 00.000.000/0001-00 | Varginha - MG
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
