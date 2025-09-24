'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HotelCardProps } from '@/types'
import OptimizedImage from './OptimizedImage'

// Mock data voor provincies en steden (voor lokale lookup)
const mockProvinces = [
  { id: 1, name: "Limburg" },
  { id: 2, name: "Noord-Holland" },
  { id: 3, name: "Gelderland" },
  { id: 4, name: "Zuid-Holland" },
  { id: 5, name: "Utrecht" },
  { id: 6, name: "Noord-Brabant" },
  { id: 7, name: "Groningen" },
  { id: 8, name: "Flevoland" },
  { id: 9, name: "Drenthe" },
  { id: 10, name: "Overijssel" },
  { id: 11, name: "Zeeland" },
  { id: 12, name: "Friesland" }
]

const mockCities = [
  { id: 1, name: "Maastricht", province_id: 1 },
  { id: 2, name: "Amsterdam", province_id: 2 },
  { id: 3, name: "Arnhem", province_id: 3 },
  { id: 4, name: "Rotterdam", province_id: 4 },
  { id: 5, name: "Utrecht", province_id: 5 },
  { id: 6, name: "Eindhoven", province_id: 6 },
  { id: 7, name: "Groningen", province_id: 7 },
  { id: 8, name: "Assen", province_id: 9 },
  { id: 9, name: "Nijmegen", province_id: 3 },
  { id: 60, name: "Oisterwijk", province_id: 6 }, // Added Oisterwijk
  { id: 10, name: "Enschede", province_id: 10 },
  { id: 11, name: "Middelburg", province_id: 11 },
  { id: 12, name: "Haarlem", province_id: 2 },
  { id: 13, name: "Den Haag", province_id: 4 },
  { id: 14, name: "Tilburg", province_id: 6 },
  { id: 15, name: "Den Haag", province_id: 4 },
  { id: 16, name: "Nijmegen", province_id: 3 },
  { id: 17, name: "Renesse", province_id: 11 },
  { id: 18, name: "Middelburg", province_id: 11 },
  { id: 19, name: "Goes", province_id: 11 },
  { id: 20, name: "Akersloot", province_id: 2 },
  { id: 21, name: "Wieringermeer", province_id: 2 },
  { id: 22, name: "Spaarnwoude", province_id: 2 },
  { id: 23, name: "Heiloo", province_id: 2 },
  { id: 24, name: "Schiphol", province_id: 2 },
  { id: 25, name: "Groningen", province_id: 7 },
  { id: 26, name: "Hilversum", province_id: 5 },
  { id: 27, name: "De Koog", province_id: 2 },
  { id: 28, name: "Vianen", province_id: 5 },
  { id: 29, name: "Schoorl", province_id: 2 },
  { id: 30, name: "Tilburg", province_id: 6 },
  { id: 31, name: "Vught", province_id: 6 },
  { id: 32, name: "Gilze", province_id: 6 },
  { id: 33, name: "Deurne", province_id: 6 },
  { id: 34, name: "Houten", province_id: 5 },
  { id: 35, name: "Breukelen", province_id: 5 },
  { id: 36, name: "Houten", province_id: 5 },
  { id: 37, name: "Utrecht", province_id: 5 },
  { id: 38, name: "De Bilt", province_id: 5 },
  { id: 39, name: "Amersfoort", province_id: 5 },
  { id: 40, name: "Veluwe", province_id: 3 },
  { id: 41, name: "Oosterbeek", province_id: 3 },
  { id: 42, name: "Sassenheim", province_id: 4 },
  { id: 43, name: "Leiden", province_id: 4 },
  { id: 44, name: "Wassenaar", province_id: 4 },
  { id: 45, name: "Nootdorp", province_id: 4 },
  { id: 46, name: "Ridderkerk", province_id: 4 },
  { id: 47, name: "Dordrecht", province_id: 4 },
  { id: 48, name: "Leeuwarden", province_id: 12 },
  { id: 49, name: "Sneek", province_id: 12 },
  { id: 50, name: "Heerenveen", province_id: 12 },
  { id: 51, name: "Drachten", province_id: 12 },
  { id: 52, name: "Wolvega", province_id: 12 },
  { id: 53, name: "Emmeloord", province_id: 8 },
  { id: 54, name: "Almere", province_id: 8 },
  { id: 55, name: "Emmen", province_id: 9 },
  { id: 56, name: "Assen", province_id: 9 },
  { id: 57, name: "Dwingeloo", province_id: 9 },
  { id: 58, name: "Hoogersmilde", province_id: 9 },
  { id: 59, name: "Almelo", province_id: 10 },
  { id: 60, name: "Hellendoorn", province_id: 10 }
]

export default function HotelCard({ hotel }: HotelCardProps) {
  const handleAffiliateClick = () => {
    // Open affiliate link via tracking endpoint
    window.location.href = `/api/out/${hotel.id}`
  }

  // Top 10 hotels ranking (gebaseerd op de Top 10 sectie van de homepage)
  const top10HotelsRanking: { [key: string]: number } = {
    "Van der Valk Hotel Amsterdam": 1,
    "Olympic Hotel": 2,
    "Kasteel Bloemendal": 3,
    "Fletcher Wellness Hotel": 4,
    "Inntel Hotels Amsterdam Centre": 5,
    "Rotterdam Marina Hotel": 6,
    "Van der Valk Akersloot": 7,
    "Eindhoven Design Hotel": 9,
    "Van der Valk Schiphol": 10
  }

  // Check of dit hotel in de Top 10 staat en krijg de ranking positie
  const hotelRanking = top10HotelsRanking[hotel.name]
  const isTop10Hotel = hotelRanking !== undefined

  // Functie om de locatie op te halen
  const getLocation = () => {
    if (!hotel.city_id || !hotel.province_id) return null
    
    const city = mockCities.find(c => c.id === hotel.city_id)
    const province = mockProvinces.find(p => p.id === hotel.province_id)
    
    if (!city || !province) return null
    
    return `${city.name}, ${province.name}`
  }


  return (
    <article className="group relative bg-pure-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-brand-navy-200 hover:border-[#FF6600] hover:-translate-y-1 flex flex-col h-full">
      
      {/* Ranking Badge - Rechtsboven op de card */}
      {isTop10Hotel && hotelRanking && (
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-[#1a2637] text-[#FF6600] rounded-full px-2 py-0.5 flex items-center justify-center transition-colors duration-300 shadow-sm">
            <span className="text-sm font-bold">#{hotelRanking}</span>
          </div>
        </div>
      )}

      <div className="relative h-56 overflow-hidden rounded-t-2xl">
        <OptimizedImage
          src={hotel.image_url}
          alt={hotel.name}
          width={400}
          height={224}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={isTop10Hotel && hotelRanking <= 3}
        />
        <div className="absolute inset-0 bg-brand-navy-900" style={{opacity: 0.2}}></div>
        <div className="absolute inset-0 bg-brand-navy-900 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
        
        <div className={`absolute top-4 left-4 ${isTop10Hotel ? 'right-20' : 'right-4'} flex justify-between items-start`}>
          {hotel.popular && (
            <div className="bg-[#1a2637] text-pure-white rounded-xl px-2 py-0.5 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wide">Meest geboekt deze maand</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="relative p-6 flex flex-col flex-1 space-y-3">
        <Link 
          href={`/hotel/${hotel.slug}`}
          className="group/link"
        >
          <h3 className="text-xl font-bold text-primary leading-tight group-hover/link:text-[#FF6600] transition-colors duration-300 cursor-pointer">
            {hotel.name}
          </h3>
          
          {/* Ranking subtiele tekst */}
          {isTop10Hotel && hotelRanking && (
            <p className="text-xs italic text-gray-500 mt-1">
              Dit hotel staat op positie #{hotelRanking} in de top 10 jacuzzi hotels van Nederland
            </p>
          )}
          <p className="text-sm text-gray-600">
            {hotel.city_id && hotel.province_id ? (
              <>
                <span 
                  className="hover:text-[#FF6600] transition-colors duration-200 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = `/stad/${mockCities.find(c => c.id === hotel.city_id)?.name.toLowerCase().replace(/ /g, '-') || 'unknown-city'}`;
                  }}
                >
                  {mockCities.find(c => c.id === hotel.city_id)?.name || 'Unknown City'}
                </span>
                {', '}
                <span 
                  className="hover:text-[#FF6600] transition-colors duration-200 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = `/provincie/${mockProvinces.find(p => p.id === hotel.province_id)?.name.toLowerCase().replace(/ /g, '-') || 'unknown-province'}`;
                  }}
                >
                  {mockProvinces.find(p => p.id === hotel.province_id)?.name || 'Unknown Province'}
                </span>
              </>
            ) : (
              'Location not available'
            )}
          </p>
        </Link>
        
        <p className="text-gray-700 text-base leading-relaxed line-clamp-3 flex-1">
          {hotel.description}
        </p>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Faciliteiten</h4>
          <div className="flex flex-wrap gap-1 text-sm">
            {hotel.facilities.slice(0, 3).map((facility, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-lg font-medium border border-gray-200"
              >
                {facility}
              </span>
            ))}
            {hotel.facilities.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-lg font-medium">
                +{hotel.facilities.length - 3} meer
              </span>
            )}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-500 block">vanaf</span>
              <span className="text-2xl font-bold text-gray-900">
                {hotel.price_range.replace('Vanaf ', '')}
              </span>
              <span className="text-xs text-gray-500 block">per nacht</span>
            </div>
            <div className="text-right">
              <span className="text-sm text-[#FF6600] font-semibold">✓ Beste prijs</span>
              <br />
              <span className="text-xs text-gray-600">Gegarandeerd</span>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleAffiliateClick}
          className="w-full bg-[#FF6600] hover:bg-[#E55A00] text-pure-white h-11 text-base font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] hover:brightness-110"
        >
          Bekijk Beschikbaarheid & Prijzen
        </button>
      </div>
    </article>
  )
}
