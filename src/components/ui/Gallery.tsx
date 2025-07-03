'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface GalleryProps {
  images: Array<{
    src: string
    alt: string
    title: string
  }>
}

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (galleryRef.current) {
      observer.observe(galleryRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const openModal = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') closeModal()
        if (e.key === 'ArrowRight') nextImage()
        if (e.key === 'ArrowLeft') prevImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <>
      <div ref={galleryRef} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-2xl mb-2">🔍</div>
                  <p className="text-sm font-medium text-center px-2">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
            >
              ✕
            </button>
            
            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              ›
            </button>
            
            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-medium">{images[selectedImage].title}</p>
              <p className="text-sm text-gray-300">
                {selectedImage + 1} de {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery
