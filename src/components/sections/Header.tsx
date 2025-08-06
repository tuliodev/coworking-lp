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
      <nav className="container mx-auto px-4 py-1 sm:py-2">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform duration-300">
            <div className="relative h-44 logo-container flex items-center">
              <Image
                src="/images/LOGOTIPO ESPAÇO NAVE-09.png"
                alt="Logo Espaço Nave Coworking"
                width={700}
                height={175}
                className="object-contain h-full w-auto max-w-none"
                sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 500px, (max-width: 1280px) 600px, 700px"
                priority
                quality={100}
                unoptimized={false}
              />
            </div>
          </Link>

          {/* Navigation */}
          <ul className="hidden lg:flex space-x-6 xl:space-x-8">
            {[
              { href: '#home', label: 'Início' },
              { href: '#services', label: 'Serviços' },
              { href: '#benefits', label: 'Benefícios' },
              { href: '#about', label: 'Sobre' },
              { href: '#gallery', label: 'Galeria' },
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
          <a 
            href="https://wa.me/5535992657526?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20Espaço%20Nave%20Coworking."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-header flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3"
          >
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Agende uma</span>
            <span className="sm:hidden">Visita</span>
            <span className="hidden sm:inline">Visita</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
