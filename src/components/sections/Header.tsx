'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-lg' 
          : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center h-12 sm:h-auto">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform duration-300">
            <div className="relative w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12">
              <Image
                src="/images/LOGOTIPO ESPAÇO NAVE-04.png"
                alt="Logo Espaço Nave"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm sm:text-lg md:text-xl font-bold text-blue-600">
                ESPAÇO<span className="text-green-500">NAVE</span>
              </div>
              <div className="text-xs text-green-500 uppercase tracking-widest font-medium">
                COWORKING
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <ul className="hidden lg:flex space-x-6 xl:space-x-8">
            {[
              { href: '#home', label: 'Início' },
              { href: '#services', label: 'Serviços' },
              { href: '#about', label: 'Sobre' },
              { href: '#gallery', label: 'Galeria' },
              { href: '#location', label: 'Localização' },
              { href: '#contact', label: 'Contato' }
            ].map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="text-blue-600 hover:text-green-500 font-medium transition-colors duration-300 hover:underline decoration-2 underline-offset-4 text-sm xl:text-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link href="#contact" className="btn-header flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Agende uma</span>
            <span className="sm:hidden">Visita</span>
            <span className="hidden sm:inline">Visita</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
