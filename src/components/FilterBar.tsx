'use client'

import { FilterBarProps } from '@/types'

export default function FilterBar({ provinces, cities, filters, onFilterChange, priceOptions }: FilterBarProps) {
  const filteredCities = cities.filter(city => 
    filters.province === '' || city.province_id === parseInt(filters.province)
  )

  const handleProvinceChange = (provinceId: string) => {
    onFilterChange({
      ...filters,
      province: provinceId,
      city: '' // Reset city when province changes
    })
  }

  const handleCityChange = (cityId: string) => {
    onFilterChange({
      ...filters,
      city: cityId
    })
  }

  const handlePriceChange = (priceRange: string) => {
    onFilterChange({
      ...filters,
      priceRange
    })
  }

  return (
    <div className="relative">
      {/* Decorative background elements */}
      <div className="absolute -top-8 -left-8 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
      
      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 mb-12 border border-pink-200 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-white to-purple-50/50"></div>
        
        <div className="relative text-center mb-8">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-6 py-2 mb-4 shadow-lg">
            <span className="text-pink-600">🎯</span>
            <span className="text-sm font-bold text-gray-700">Smart Filter Systeem</span>
            <span className="text-purple-600">✨</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Vind jouw perfecte
            </span>
            <br />
            <span className="text-gray-800">romantische verblijf</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gebruik onze geavanceerde filters om het ideale hotel met jacuzzi te vinden dat precies bij jouw wensen past
          </p>
        </div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Provincie dropdown - Enhanced */}
          <div className="group">
            <label htmlFor="province" className="flex items-center gap-2 text-lg font-bold text-gray-700 mb-4">
              <span className="w-8 h-8 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">🏛️</span>
              <span>Provincie</span>
            </label>
            <div className="relative">
              <select
                id="province"
                value={filters.province}
                onChange={(e) => handleProvinceChange(e.target.value)}
                className="w-full px-6 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-pink-300/30 focus:border-pink-400 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:border-pink-300 hover:shadow-lg text-lg font-medium group-hover:shadow-xl"
              >
                <option value="">🗺️ Alle provincies</option>
                {provinces.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 text-sm">▼</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stad dropdown - Enhanced */}
          <div className="group">
            <label htmlFor="city" className="flex items-center gap-2 text-lg font-bold text-gray-700 mb-4">
              <span className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">🏙️</span>
              <span>Stad</span>
            </label>
            <div className="relative">
              <select
                id="city"
                value={filters.city}
                onChange={(e) => handleCityChange(e.target.value)}
                disabled={!filters.province}
                className="w-full px-6 py-4 border-2 border-blue-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300/30 focus:border-blue-400 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg text-lg font-medium disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60 group-hover:shadow-xl"
              >
                <option value="">🌟 Alle steden</option>
                {filteredCities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">▼</span>
                </div>
              </div>
            </div>
          </div>

          {/* Prijsklasse dropdown - Enhanced */}
          <div className="group">
            <label htmlFor="priceRange" className="flex items-center gap-2 text-lg font-bold text-gray-700 mb-4">
              <span className="w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">💰</span>
              <span>Prijsklasse</span>
            </label>
            <div className="relative">
              <select
                id="priceRange"
                value={filters.priceRange}
                onChange={(e) => handlePriceChange(e.target.value)}
                className="w-full px-6 py-4 border-2 border-green-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300/30 focus:border-green-400 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:border-green-300 hover:shadow-lg text-lg font-medium group-hover:shadow-xl"
              >
                <option value="">💎 Alle prijzen</option>
                {priceOptions.map((opt) => (
                  <option key={opt} value={opt.toLowerCase()}>{opt}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">▼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA section */}
        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <div className="inline-flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span>✨</span>
            <span>Real-time beschikbaarheid</span>
            <span>•</span>
            <span>Beste prijsgarantie</span>
            <span>•</span>
            <span>Direct boeken</span>
            <span>✨</span>
          </div>
        </div>
      </div>
    </div>
  )
}
