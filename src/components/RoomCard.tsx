'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Room {
  id: number
  name: string
  image: string
  description: string
  features: string[]
  priceRange: string
  affiliateLink: string
  thumbnails?: string[]
}

interface RoomCardProps {
  room: Room
}

export default function RoomCard({ room }: RoomCardProps) {
  const [currentImage, setCurrentImage] = useState(room.image)
  
  const handleBooking = () => {
    // Track affiliate click
    window.open(room.affiliateLink, '_blank')
  }
  
  const handleThumbnailClick = (thumbnailImage: string) => {
    setCurrentImage(thumbnailImage)
  }

  return (
    <article className="group relative bg-pure-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-brand-navy-200 hover:border-brand-orange-600 hover:-translate-y-1 flex flex-col h-full">
      
      {/* Room Image */}
      <div className="relative h-56 overflow-hidden rounded-t-2xl">
        <Image
          src={currentImage}
          alt={`${room.name} met jacuzzi`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-brand-navy-900" style={{opacity: 0.2}}></div>
        <div className="absolute inset-0 bg-brand-navy-900 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-brand-orange-600 text-pure-white rounded-lg px-2 py-1 shadow-lg">
            <span className="text-xs font-bold uppercase">{room.priceRange}</span>
          </div>
        </div>

        {/* Room Type Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-pure-white text-brand-navy-800 rounded-lg px-3 py-1 shadow-lg" style={{opacity: 0.95}}>
            <span className="text-sm font-semibold">Jacuzzi kamer</span>
          </div>
        </div>
      </div>
      
      {/* Thumbnails Gallery */}
      {room.thumbnails && room.thumbnails.length > 0 && (
        <div className="px-6 py-4 bg-gradient-to-r from-brand-navy-50 to-light-gray border-b border-brand-navy-200">
          <div className="text-center mb-3">
            <span className="text-sm font-semibold text-brand-navy-700">Extra foto's</span>
          </div>
          <div className="flex gap-3 justify-center overflow-x-auto pb-2">
            {/* Main image thumbnail */}
            <button
              onClick={() => handleThumbnailClick(room.image)}
              className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                currentImage === room.image 
                  ? 'border-brand-orange-600 shadow-lg ring-2 ring-brand-orange-600 ring-opacity-50' 
                  : 'border-brand-navy-200 hover:border-brand-orange-600'
              }`}
            >
              <Image
                src={room.image}
                alt={`${room.name} hoofdfoto`}
                width={80}
                height={80}
                className="object-cover w-full h-full transition-transform duration-300"
                sizes="80px"
              />
            </button>
            
            {/* Additional thumbnails */}
            {room.thumbnails.map((thumbnail, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(thumbnail)}
                className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  currentImage === thumbnail 
                    ? 'border-brand-orange-600 shadow-lg ring-2 ring-brand-orange-600 ring-opacity-50' 
                    : 'border-brand-navy-200 hover:border-brand-orange-600'
                }`}
              >
                <Image
                  src={thumbnail}
                  alt={`${room.name} extra foto ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full transition-transform duration-300"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Room Content */}
      <div className="relative p-6 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-brand-navy-900 mb-2 leading-tight">
            {room.name}
          </h3>
        </div>
        
        <p className="text-brand-navy-600 text-base mb-6 leading-relaxed line-clamp-3 flex-1">
          {room.description}
        </p>
        
        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-brand-navy-700 mb-3">Faciliteiten</h4>
          <div className="flex flex-wrap gap-2">
            {room.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-brand-navy-50 text-brand-navy-700 text-sm rounded-lg font-medium border border-brand-navy-200"
              >
                {feature}
              </span>
            ))}
            {room.features.length > 3 && (
              <span className="px-3 py-1 bg-light-gray text-brand-navy-600 text-sm rounded-lg font-medium">
                +{room.features.length - 3} meer
              </span>
            )}
          </div>
        </div>
        
        {/* Price Info Box */}
        <div className="mb-6 p-4 bg-brand-navy-50 rounded-xl border border-brand-navy-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-brand-navy-600 block">Vanaf</span>
              <span className="text-2xl font-bold text-brand-navy-900">
                {room.priceRange.replace('€', '€')}
              </span>
            </div>
            <div className="text-right">
              <span className="text-sm text-brand-orange-600 font-semibold">✓ Beste prijs</span>
              <br />
              <span className="text-xs text-brand-navy-500">Gegarandeerd</span>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <button
          onClick={handleBooking}
          className="w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Bekijk Beschikbaarheid & Prijzen
        </button>
      </div>
    </article>
  )
}
