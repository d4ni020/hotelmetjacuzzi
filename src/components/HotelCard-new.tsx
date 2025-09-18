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
          <span key={i} className="text-brand-orange-600">★</span>
        ))}
        {hasHalfStar && <span className="text-brand-orange-600">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="text-brand-navy-300">☆</span>
        ))}
        <span className="ml-1 text-sm text-brand-navy-600">({rating})</span>
      </div>
    )
  }

  return (
    <article className="group relative bg-pure-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-brand-navy-200 hover:border-brand-orange-600 hover:-translate-y-1 flex flex-col h-full">
      
      <div className="relative h-56 overflow-hidden rounded-t-2xl">
        <Image
          src={hotel.image_url}
          alt={hotel.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-brand-navy-900/20 group-hover:bg-brand-navy-900/10 transition-all duration-300"></div>
        
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <div className="bg-brand-orange-600 text-pure-white rounded-lg px-3 py-1 shadow-lg">
            <span className="text-sm font-bold">Premium</span>
          </div>
          <div className="bg-pure-white/95 backdrop-blur-sm text-brand-navy-800 rounded-lg px-3 py-1 shadow-lg">
            <span className="text-sm font-semibold">Direct boekbaar</span>
          </div>
        </div>
      </div>
      
      <div className="relative p-6 flex flex-col flex-1">
        <Link 
          href={`/hotel/${hotel.slug}`}
          className="group/link mb-3"
        >
          <h3 className="text-xl font-bold text-brand-navy-900 mb-2 leading-tight group-hover/link:text-brand-orange-600 transition-colors duration-300 cursor-pointer">
            {hotel.name}
          </h3>
        </Link>
        
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {renderStars(hotel.rating)}
          </div>
          <div className="bg-brand-navy-100 rounded-full px-3 py-1">
            <span className="text-sm font-semibold text-brand-navy-700">Top keuze</span>
          </div>
        </div>
        
        <p className="text-brand-navy-600 text-base mb-6 leading-relaxed line-clamp-3 flex-1">
          {hotel.description}
        </p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-brand-navy-700 mb-3">Faciliteiten</h4>
          <div className="flex flex-wrap gap-2">
            {hotel.facilities.slice(0, 3).map((facility, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-brand-navy-50 text-brand-navy-700 text-sm rounded-lg font-medium border border-brand-navy-200"
              >
                {facility}
              </span>
            ))}
            {hotel.facilities.length > 3 && (
              <span className="px-3 py-1 bg-light-gray text-brand-navy-600 text-sm rounded-lg font-medium">
                +{hotel.facilities.length - 3} meer
              </span>
            )}
          </div>
        </div>
        
        <div className="mb-6 p-4 bg-brand-navy-50 rounded-xl border border-brand-navy-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-brand-navy-600 block">Vanaf</span>
              <span className="text-2xl font-bold text-brand-navy-900">
                {hotel.price_range.replace('Vanaf ', '')}
              </span>
            </div>
            <div className="text-right">
              <span className="text-sm text-brand-orange-600 font-semibold">✓ Beste prijs</span>
              <br />
              <span className="text-xs text-brand-navy-500">Gegarandeerd</span>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleAffiliateClick}
          className="w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Bekijk Beschikbaarheid & Prijzen
        </button>
      </div>
    </article>
  )
}
