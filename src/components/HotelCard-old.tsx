'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HotelCardProps } from '@/types'

export default function HotelCard({ hotel }: HotelCardProps) {
  const handleAffiliateClick = () => {
    // Open affiliate link via tracking endpoint
    window.location.href = `/api/out/${hotel.id}`
  }

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-400">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="text-gray-300">☆</span>
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    )
  }

  return (
    <article className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-pink-300 hover:-translate-y-2 hover:rotate-1 flex flex-col h-full">
      {/* Magical gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 via-purple-400/5 to-blue-400/5 group-hover:from-pink-400/10 group-hover:via-purple-400/10 group-hover:to-blue-400/10 transition-all duration-500"></div>
      
      <div className="relative h-56 overflow-hidden rounded-t-3xl">
        <Image
          src={hotel.image_url}
          alt={hotel.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Enhanced overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500"></div>
        
        {/* Multiple badges for premium feel */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-white/20">
            <span className="text-sm font-bold text-pink-600">✨ Premium</span>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl px-3 py-1 shadow-lg">
            <span className="text-xs font-bold">Direct beschikbaar</span>
          </div>
        </div>
        
        {/* Floating heart icon */}
        <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <span className="text-xl">💕</span>
        </div>
      </div>
      
      <div className="relative p-8 flex flex-col flex-1">
        {/* Hotel name with stunning design */}
        <Link 
          href={`/hotel/${hotel.slug}`}
          className="group/link mb-4"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight group-hover/link:text-transparent group-hover/link:bg-gradient-to-r group-hover/link:from-pink-600 group-hover/link:to-purple-600 group-hover/link:bg-clip-text transition-all duration-300 cursor-pointer">
            {hotel.name}
          </h3>
        </Link>
        
        {/* Enhanced rating display */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {renderStars(hotel.rating)}
          </div>
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-3 py-1">
            <span className="text-sm font-bold text-orange-600">Top beoordeeld</span>
          </div>
        </div>
        
        {/* Description with better typography */}
        <p className="text-gray-600 text-base mb-6 leading-relaxed line-clamp-3">
          {hotel.description}
        </p>
        
        {/* Facilities with premium styling */}
        <div className="mb-8 flex-1">
          <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Faciliteiten</h4>
          <div className="flex flex-wrap gap-2">
            {hotel.facilities.slice(0, 3).map((facility, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm rounded-full font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {facility}
              </span>
            ))}
            {hotel.facilities.length > 3 && (
              <span className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 text-sm rounded-full font-medium shadow-sm">
                +{hotel.facilities.length - 3} meer
              </span>
            )}
          </div>
        </div>
        
        {/* Price section with gradient border */}
        <div className="mb-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-600 block">Vanaf</span>
              <span className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {hotel.price_range.replace('Vanaf ', '')}
              </span>
            </div>
            <div className="text-right">
              <span className="text-sm text-green-600 font-medium">✓ Beste prijs</span>
              <br />
              <span className="text-xs text-gray-500">Via partners</span>
            </div>
          </div>
        </div>
        
        {/* Spectacular CTA button */}
        <button
          onClick={handleAffiliateClick}
          className="relative w-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-pink-700 hover:via-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group/btn overflow-hidden"
        >
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
          
          <div className="relative flex items-center justify-center gap-3">
            <span className="text-lg group-hover/btn:scale-110 transition-transform">💖</span>
            <span className="text-lg">Bekijk Beschikbaarheid</span>
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </div>
        </button>
      </div>
    </article>
  )
}
