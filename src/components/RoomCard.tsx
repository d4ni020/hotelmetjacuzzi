'use client'

import Image from 'next/image'

interface Room {
  id: number
  name: string
  image: string
  description: string
  features: string[]
  priceRange: string
  affiliateLink: string
}

interface RoomCardProps {
  room: Room
}

export default function RoomCard({ room }: RoomCardProps) {
  const handleBooking = () => {
    // Track affiliate click
    window.open(room.affiliateLink, '_blank')
  }

  return (
    <div className="bg-pure-white rounded-2xl shadow-lg overflow-hidden border border-brand-navy-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Room Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.image}
          alt={`${room.name} met jacuzzi`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-brand-orange-600 text-pure-white rounded-lg px-3 py-1 shadow-lg">
            <span className="text-sm font-bold">{room.priceRange}</span>
          </div>
        </div>
      </div>

      {/* Room Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-brand-navy-900 mb-3">
          {room.name}
        </h3>
        
        <p className="text-brand-navy-600 mb-4 leading-relaxed">
          {room.description}
        </p>

        {/* Features List */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-brand-navy-700 mb-3 uppercase tracking-wide">
            Kamer Faciliteiten
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {room.features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm">
                <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 text-brand-orange-600 flex-shrink-0">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" fill="currentColor"/>
                </svg>
                <span className="text-brand-navy-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleBooking}
          className="w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
        >
          <span className="flex items-center justify-center">
            Bekijk deze kamer →
            <svg width="20" height="20" viewBox="0 0 20 20" className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
              <path d="M7 3l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}
