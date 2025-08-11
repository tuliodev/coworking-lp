'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { MapPin, ExternalLink, Phone, Car, Bus, Store, Navigation } from 'lucide-react'

const Location = () => {
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
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="fade-in text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-medium text-sm mb-6">
            <MapPin className="w-4 h-4" />
            Nossa Localização
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6">
            Localização Estratégica
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Estrategicamente localizado no centro de Varginha - MG, 
            com fácil acesso e infraestrutura completa ao seu redor.
          </p>

          {/* Address Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto mb-8 card-hover border border-gray-100">
            <div className="flex justify-center mb-4">
              <MapPin className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Endereço</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              R. José Gonçalves Pereira, 129<br />
              Vila Pinto - Varginha - MG<br />
              CEP: 37010-500
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="https://maps.google.com/?q=R.+José+Gonçalves+Pereira+129+Vila+Pinto+Varginha+MG" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient flex items-center gap-2 justify-center"
            >
              <Navigation className="w-4 h-4" />
              Ver no Google Maps
            </Link>
            <a 
              href="https://wa.me/5535992657526?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Espaço%20Nave%20Coworking."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta flex items-center gap-2 justify-center"
            >
              <Phone className="w-4 h-4" />
              Como Chegar
            </a>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=R.+Jos%C3%A9+Gon%C3%A7alves+Pereira,+129+-+Vila+Pinto,+Varginha+-+MG,+37010-500&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Espaço Nave Coworking"
              className="w-full"
            ></iframe>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <Car className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-blue-600 mb-2">Estacionamento</h4>
              <p className="text-gray-600 text-sm">Vagas disponíveis para clientes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <Bus className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-blue-600 mb-2">Transporte</h4>
              <p className="text-gray-600 text-sm">Próximo ao transporte público</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <Store className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-blue-600 mb-2">Comércio</h4>
              <p className="text-gray-600 text-sm">Rodeado por estabelecimentos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
