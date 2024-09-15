"use client"

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1) // Commence sur la vraie première image
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true) // Gestion de la transition
  const transitionRef = useRef<HTMLDivElement>(null)

  const transitionRefCurrent = transitionRef.current

  const totalSlides = images.length

  const nextImage = () => { // Fonction pour passer à l'image suivante
    if (currentIndex === totalSlides + 1) return // Eviter de dépasser le dernier clone
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  const prevImage = () => { // Fonction pour revenir à l'image précédente
    if (currentIndex === 0) return // Eviter de dépasser le premier clone
    setCurrentIndex((prevIndex) => prevIndex - 1)
  }

  useEffect(() => {
    // const transitionDuration = 500 // Durée de la transition en ms

    const handleTransitionEnd = () => {
      if (currentIndex === totalSlides + 1) { // Si nous sommes au clone de la première image, repositionner sur la vraie première image
        setIsTransitioning(false) // Désactiver la transition pour la réinitialisation rapide
        setCurrentIndex(1)
      } else if (currentIndex === 0) { // Si nous sommes au clone de la dernière image, repositionner sur la vraie dernière image
        setIsTransitioning(false) 
        setCurrentIndex(totalSlides)
      }
    }

    if (isTransitioning) { // Réactiver la transition
      transitionRefCurrent?.addEventListener('transitionend', handleTransitionEnd)
    }

    return () => {
      transitionRefCurrent?.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [currentIndex, isTransitioning, totalSlides])

  useEffect(() => {
    if (!isTransitioning) { // Réinitialiser la transition après le repositionnement
      setTimeout(() => {
        setIsTransitioning(true)
      }, 50)
    }
  }, [isTransitioning])

  useEffect(() => { // Auto défilement
    const autoScroll = setInterval(() => {
      nextImage()
    }, 3000) // Change d'image toutes les 3 secondes

    return () => clearInterval(autoScroll) // Cleanup l'intervalle à la fin
  }, [currentIndex])

  return (
    <div className={`relative overflow-hidden`}>
      <div
        className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
        ref={transitionRef}
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {/* Clone de la dernière image */}
        <div className="min-w-full h-full">
          <Image
            src={images[totalSlides - 1].src}
            alt="Last Clone"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Images réelles */}
        {images.map((image, index) => (
          <div key={index} className="relative min-w-full h-full">
            <Image
              src={image.src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className='absolute bottom-0 w-full h-28 p-4 text-white bg-slate-700/50'>
              <h2 className=' font-bold text-2xl'>{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
        {/* Clone de la première image */}
        <div className="min-w-full h-full">
          <Image
            src={images[0].src}
            alt="First Clone"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Boutons Précédent / Suivant */}
      <button
        className="absolute top-1/2 w-16 left-0 transform -translate-y-1/2 text-white p-2 rounded-full"
        onClick={prevImage}
      >
        <ChevronLeftIcon />
      </button>
      <button
        className="absolute top-1/2 w-16 right-0 transform -translate-y-1/2 text-white p-2 rounded-full"
        onClick={nextImage}
      >
        <ChevronRightIcon />
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${currentIndex === idx + 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(idx + 1)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
