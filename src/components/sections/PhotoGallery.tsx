'use client'

import { useEffect, useRef } from 'react'
import Gallery from '../ui/Gallery'
import Link from 'next/link'
import { Camera, Eye, ArrowRight, Calendar, MessageSquare } from 'lucide-react'

const PhotoGallery = () => {
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

  const images = [
    {
      src: '/images/IMG_0690.JPG',
      alt: 'Ambiente de trabalho colaborativo',
      title: 'Área de Coworking'
    },
    {
      src: '/images/IMG_0693.JPG',
      alt: 'Estações de trabalho modernas',
      title: 'Estações Individuais'
    },
    {
      src: '/images/IMG_0721 (1).JPG',
      alt: 'Sala de reuniões equipada',
      title: 'Sala de Reuniões'
    },
    {
      src: '/images/IMG_0727.JPG',
      alt: 'Ambiente inspirador para trabalho',
      title: 'Espaço Criativo'
    },
    {
      src: '/images/IMG_0733.JPG',
      alt: 'Área comum para networking',
      title: 'Área de Convivência'
    },
    {
      src: '/images/IMG_0740 (1).JPG',
      alt: 'Sala privativa para equipes',
      title: 'Sala Privativa'
    },
    {
      src: '/images/IMG_0746 (1).JPG',
      alt: 'Auditório para eventos',
      title: 'Auditório'
    },
    {
      src: '/images/IMG_0749.JPG',
      alt: 'Ambiente moderno e aconchegante',
      title: 'Área de Trabalho'
    },
    {
      src: '/images/IMG_0757.JPG',
      alt: 'Espaço para palestras e cursos',
      title: 'Sala de Treinamento'
    },
    {
      src: '/images/IMG_0761.JPG',
      alt: 'Infraestrutura completa',
      title: 'Tecnologia Avançada'
    },
    {
      src: '/images/sala 0 --.jpeg',
      alt: 'Sala principal do coworking',
      title: 'Sala Principal'
    },
    {
      src: '/images/sala 0 -.jpeg',
      alt: 'Vista geral dos ambientes',
      title: 'Vista Geral'
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="fade-in text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-medium text-sm mb-6">
            <Camera className="w-4 h-4" />
            Galeria de Fotos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6">
            Conheça Nossos Ambientes
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore os espaços modernos e inspiradores do Espaço Nave Coworking. 
            Cada ambiente foi pensado para proporcionar o máximo de produtividade e conforto.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              <span>{images.length} fotos</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>Clique para ampliar</span>
            </div>
          </div>
        </div>

        <Gallery images={images} />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Quer conhecer pessoalmente?
            </h3>
            <p className="text-gray-600 mb-6">
              Agende uma visita e veja de perto todos os nossos ambientes e facilidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="btn-gradient flex items-center gap-2 justify-center">
                <Calendar className="w-4 h-4" />
                Agendar Visita
              </Link>
              <a 
                href="https://wa.me/553599999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20Espaço%20Nave%20Coworking." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta flex items-center gap-2 justify-center"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhotoGallery
