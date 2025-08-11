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
      src: '/images/IMG_0761.JPG',
      alt: 'Estações de trabalho compartilhadas'
    },
    {
      src: '/images/IMG_0740 (1).JPG',
      alt: 'Salas privativas para locação'
    },
    {
      src: '/images/sala 0 --.jpeg',
      alt: 'Sala de reunião equipada'
    },
    {
      src: '/images/IMG_0690.JPG',
      alt: 'Ambiente para eventos'
    },
    {
      src: '/images/IMG_0749.JPG',
      alt: 'Estações individuais'
    },
    {
      src: '/images/IMG_0693.JPG',
      alt: 'Copa equipada - atendimento humanizado'
    },
    {
      src: '/images/IMG_0721 (1).JPG',
      alt: 'Ambiente de trabalho colaborativo'
    },
    {
      src: '/images/IMG_0727.JPG',
      alt: 'Ambiente inspirador para trabalho'
    },
    {
      src: '/images/IMG_0733.JPG',
      alt: 'Área comum para networking'
    },
    {
      src: '/images/IMG_0746 (1).JPG',
      alt: 'Espaço para eventos e palestras'
    },
    {
      src: '/images/IMG_0757.JPG',
      alt: 'Sala de treinamento'
    },
    {
      src: '/images/sala 0 -.jpeg',
      alt: 'Vista geral dos ambientes'
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
              <a 
                href="https://wa.me/5535992657526?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Espaço%20Nave%20Coworking."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient flex items-center gap-2 justify-center"
              >
                <Calendar className="w-4 h-4" />
                Agendar Visita
              </a>
              <a 
                href="https://wa.me/5535992657526?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Espaço%20Nave%20Coworking." 
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
