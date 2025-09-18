'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { City, Province } from '@/lib/supabase'

interface NetherlandsMapProps {
  cities: City[]
  provinces: Province[]
  className?: string
}

export default function NetherlandsMap({ cities, provinces, className = '' }: NetherlandsMapProps) {
  const [hoveredCity, setHoveredCity] = useState<City | null>(null)
  const [hoveredProvince, setHoveredProvince] = useState<Province | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  // Filter cities with coordinates
  const citiesWithCoords = cities.filter(city => city.latitude && city.longitude)

  useEffect(() => {
    // Load the SVG map
    fetch('/data/netherlands-map.svg')
      .then(response => response.text())
      .then(svgContent => {
        setMapLoaded(true)
      })
      .catch(error => {
        console.error('Failed to load Netherlands map:', error)
        setMapLoaded(false)
      })
  }, [])

  // Convert lat/lng to SVG coordinates (approximation for Netherlands)
  const latLngToSVG = (lat: number, lng: number) => {
    // Netherlands bounds approximately:
    // North: 53.5°N, South: 50.75°N
    // West: 3.3°E, East: 7.1°E
    
    const mapWidth = 500
    const mapHeight = 600
    
    // Map coordinates to SVG viewbox
    const x = ((lng - 3.3) / (7.1 - 3.3)) * mapWidth
    const y = ((53.5 - lat) / (53.5 - 50.75)) * mapHeight
    
    return { x, y }
  }

  // Province regions (approximate clickable areas based on geographic centers)
  const provinceRegions = {
    'noord-holland': { centerLat: 52.5, centerLng: 4.8, radius: 80 },
    'zuid-holland': { centerLat: 52.0, centerLng: 4.4, radius: 70 },
    'utrecht': { centerLat: 52.1, centerLng: 5.2, radius: 40 },
    'gelderland': { centerLat: 52.0, centerLng: 5.9, radius: 90 },
    'limburg': { centerLat: 51.2, centerLng: 5.9, radius: 80 },
    'zeeland': { centerLat: 51.5, centerLng: 3.8, radius: 60 },
    'noord-brabant': { centerLat: 51.6, centerLng: 5.3, radius: 85 },
    'overijssel': { centerLat: 52.4, centerLng: 6.4, radius: 70 },
    'flevoland': { centerLat: 52.5, centerLng: 5.6, radius: 50 },
    'drenthe': { centerLat: 52.9, centerLng: 6.6, radius: 60 },
    'friesland': { centerLat: 53.2, centerLng: 5.8, radius: 80 },
    'groningen': { centerLat: 53.3, centerLng: 6.8, radius: 70 }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Modern card with gradient background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-romantic-pink-50 opacity-30"></div>
        
        <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* Elegant header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-romantic-pink-100 rounded-2xl mb-4">
              <span className="text-2xl">🗺️</span>
            </div>
            <h3 className="text-2xl font-bold text-light-gray-900 mb-2">
              Ontdek Nederland
            </h3>
            <p className="text-light-gray-600 max-w-md mx-auto">
              Klik op een provincie voor een overzicht, of kies direct een stad voor hotels met jacuzzi
            </p>
          </div>
        
          {/* Desktop/Tablet Map */}
          <div className="hidden sm:block">
            {mapLoaded ? (
              <div className="relative">
                {/* Map container with elegant styling */}
                <div className="relative mx-auto max-w-lg">
                  <div 
                    className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-white/50 backdrop-blur-sm border border-white/30"
                    style={{
                      backgroundImage: 'url(/data/netherlands-map.svg)',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      aspectRatio: '500/600',
                    }}
                  >
                    {/* Subtle overlay for better contrast */}
                    <div className="absolute inset-0 bg-white/10"></div>
                    
                    {/* Province clickable areas */}
                    {provinces.map((province) => {
                      const region = provinceRegions[province.slug as keyof typeof provinceRegions]
                      if (!region) return null
                      
                      const { x, y } = latLngToSVG(region.centerLat, region.centerLng)
                      
                      return (
                        <Link
                          key={province.id}
                          href={`/provincie/${province.slug}`}
                          className="absolute group transition-all duration-300"
                          style={{ 
                            left: `${(x / 500) * 100}%`, 
                            top: `${(y / 600) * 100}%`,
                            transform: 'translate(-50%, -50%)'
                          }}
                          onMouseEnter={() => setHoveredProvince(province)}
                          onMouseLeave={() => setHoveredProvince(null)}
                        >
                          {/* Elegant clickable area */}
                          <div 
                            className="rounded-full bg-pastel-blue-200/0 hover:bg-pastel-blue-200/20 border-2 border-transparent hover:border-pastel-blue-300/40 backdrop-blur-sm transition-all duration-300 flex items-center justify-center cursor-pointer group-hover:scale-110"
                            style={{ 
                              width: `${region.radius}px`, 
                              height: `${region.radius}px`
                            }}
                          >
                            {/* Province label with elegant styling */}
                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform group-hover:scale-105">
                              <div className="bg-white/95 backdrop-blur-lg px-4 py-2 rounded-xl shadow-2xl border border-white/40 text-sm font-semibold text-light-gray-800 whitespace-nowrap">
                                <div className="flex items-center space-x-2">
                                  <span className="text-pastel-blue-500">🏛️</span>
                                  <span>{province.name}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      )
                    })}

                    {/* City markers with premium styling */}
                    {citiesWithCoords.map((city) => {
                      if (!city.latitude || !city.longitude) return null
                      
                      const { x, y } = latLngToSVG(city.latitude, city.longitude)
                      
                      return (
                        <Link
                          key={city.id}
                          href={`/stad/${city.slug}`}
                          className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20 transition-all duration-300"
                          style={{ 
                            left: `${(x / 500) * 100}%`, 
                            top: `${(y / 600) * 100}%` 
                          }}
                          onMouseEnter={() => setHoveredCity(city)}
                          onMouseLeave={() => setHoveredCity(null)}
                        >
                          <div className="relative">
                            {/* Premium city marker */}
                            <div className="relative">
                              <div className="w-8 h-8 bg-white rounded-full shadow-2xl border-2 border-romantic-pink-200 group-hover:border-romantic-pink-400 transition-all duration-300 group-hover:scale-125 flex items-center justify-center">
                                <div className="w-4 h-4 bg-romantic-pink-500 rounded-full group-hover:bg-romantic-pink-600 transition-colors duration-300 shadow-lg">
                                  <div className="w-2 h-2 bg-white rounded-full mt-1 ml-1"></div>
                                </div>
                              </div>
                              
                              {/* Pulse animation */}
                              <div className="absolute inset-0 w-8 h-8 bg-romantic-pink-400 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
                            </div>
                            
                            {/* Elegant city label */}
                            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 group-hover:-translate-y-1">
                              <div className="bg-white/95 backdrop-blur-lg px-3 py-2 rounded-xl shadow-2xl border border-white/40 text-sm font-semibold text-light-gray-800 whitespace-nowrap">
                                <div className="flex items-center space-x-2">
                                  <span className="text-romantic-pink-500">📍</span>
                                  <span>{city.name}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
                
                {/* Premium info panel */}
                {(hoveredCity || hoveredProvince) && (
                  <div className="mt-6 transition-all duration-300">
                    {hoveredCity && (
                      <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-romantic-pink-200/50 p-6 shadow-2xl">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-romantic-pink-100 rounded-xl mb-3">
                            <span className="text-xl">📍</span>
                          </div>
                          <h4 className="text-lg font-bold text-light-gray-900 mb-1">{hoveredCity.name}</h4>
                          <p className="text-sm text-light-gray-600 mb-4">
                            Ontdek hotels met jacuzzi in deze stad
                          </p>
                          <div className="inline-flex items-center text-xs text-romantic-pink-600 font-medium">
                            <span>Klik om hotels te bekijken</span>
                            <span className="ml-2">→</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {hoveredProvince && !hoveredCity && (
                      <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-pastel-blue-200/50 p-6 shadow-2xl">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-pastel-blue-100 rounded-xl mb-3">
                            <span className="text-xl">🏛️</span>
                          </div>
                          <h4 className="text-lg font-bold text-light-gray-900 mb-1">{hoveredProvince.name}</h4>
                          <p className="text-sm text-light-gray-600 mb-4">
                            Verken alle steden en hotels in deze provincie
                          </p>
                          <div className="inline-flex items-center text-xs text-pastel-blue-600 font-medium">
                            <span>Klik om provincie te verkennen</span>
                            <span className="ml-2">→</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-romantic-pink-100 rounded-2xl mb-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-romantic-pink-500"></div>
                </div>
                <p className="text-light-gray-600 font-medium">Kaart wordt geladen...</p>
              </div>
            )}
          </div>

          {/* Premium Mobile List */}
          <div className="sm:hidden space-y-8">
            {/* Cities */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-romantic-pink-100 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-lg">📍</span>
                </div>
                <h4 className="text-lg font-bold text-light-gray-900">Steden</h4>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {citiesWithCoords.map((city) => (
                  <Link
                    key={city.id}
                    href={`/stad/${city.slug}`}
                    className="group"
                  >
                    <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-white/80 group-hover:border-romantic-pink-200/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-romantic-pink-500 rounded-full mr-4 group-hover:bg-romantic-pink-600 transition-colors duration-300"></div>
                          <span className="font-semibold text-light-gray-800 group-hover:text-romantic-pink-700 transition-colors duration-300">{city.name}</span>
                        </div>
                        <span className="text-light-gray-400 group-hover:text-romantic-pink-400 transition-colors duration-300 transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Provinces */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-pastel-blue-100 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-lg">🏛️</span>
                </div>
                <h4 className="text-lg font-bold text-light-gray-900">Provincies</h4>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {provinces.map((province) => (
                  <Link
                    key={province.id}
                    href={`/provincie/${province.slug}`}
                    className="group"
                  >
                    <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-white/80 group-hover:border-pastel-blue-200/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-pastel-blue-500 rounded-full mr-4 group-hover:bg-pastel-blue-600 transition-colors duration-300"></div>
                          <span className="font-semibold text-light-gray-800 group-hover:text-pastel-blue-700 transition-colors duration-300">{province.name}</span>
                        </div>
                        <span className="text-light-gray-400 group-hover:text-pastel-blue-400 transition-colors duration-300 transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Elegant footer note */}
          <div className="text-center mt-8 pt-6 border-t border-light-gray-200/50">
            <p className="text-xs text-light-gray-500 font-medium">
              Hover over locaties voor meer informatie • Klik om te navigeren
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}