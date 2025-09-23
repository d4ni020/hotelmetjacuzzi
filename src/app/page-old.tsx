'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { supabase, Province, City, Hotel } from '@/lib/supabase'
import { FilterState } from '@/types'
import FilterBar from '@/components/FilterBar'
import HotelCard from '@/components/HotelCard'

export default function HomePage() {
  const [provinces, setProvinces] = useState<Province[]>([])
  const [cities, setCities] = useState<City[]>([])
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([])
  const [priceOptions, setPriceOptions] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<FilterState>({
    province: '',
    city: '',
    priceRange: ''
  })

  // Load initial data
  useEffect(() => {
    loadData()
  }, [])

  // Filter hotels when filters change
  useEffect(() => {
    let filtered = [...hotels]

    if (filters.province) {
      filtered = filtered.filter(hotel => hotel.province_id === parseInt(filters.province))
    }

    if (filters.city) {
      filtered = filtered.filter(hotel => hotel.city_id === parseInt(filters.city))
    }

    if (filters.priceRange) {
      filtered = filtered.filter(hotel => hotel.price_range === filters.priceRange)
    }

    setFilteredHotels(filtered)
  }, [filters, hotels])

  const loadData = async () => {
    try {
      setLoading(true)
      
      // Mock data for demo purposes
      const mockProvinces = [
        { id: 1, name: 'Noord-Holland', slug: 'noord-holland', seo_text: '', created_at: '2024-01-01' },
        { id: 2, name: 'Zuid-Holland', slug: 'zuid-holland', seo_text: '', created_at: '2024-01-01' },
        { id: 3, name: 'Utrecht', slug: 'utrecht', seo_text: '', created_at: '2024-01-01' },
        { id: 4, name: 'Gelderland', slug: 'gelderland', seo_text: '', created_at: '2024-01-01' },
        { id: 5, name: 'Limburg', slug: 'limburg', seo_text: '', created_at: '2024-01-01' },
        { id: 6, name: 'Noord-Brabant', slug: 'noord-brabant', seo_text: '', created_at: '2024-01-01' },
        { id: 7, name: 'Overijssel', slug: 'overijssel', seo_text: '', created_at: '2024-01-01' },
        { id: 8, name: 'Groningen', slug: 'groningen', seo_text: '', created_at: '2024-01-01' },
        { id: 9, name: 'Friesland', slug: 'friesland', seo_text: '', created_at: '2024-01-01' },
        { id: 10, name: 'Drenthe', slug: 'drenthe', seo_text: '', created_at: '2024-01-01' },
        { id: 11, name: 'Flevoland', slug: 'flevoland', seo_text: '', created_at: '2024-01-01' },
        { id: 12, name: 'Zeeland', slug: 'zeeland', seo_text: '', created_at: '2024-01-01' }
      ]

      const mockCities = [
        { id: 1, name: 'Amsterdam', slug: 'amsterdam', province_id: 1, seo_text: 'Hotels met jacuzzi in Amsterdam', lat: 52.3676, lng: 4.9041, created_at: '2024-01-01' },
        { id: 2, name: 'Haarlem', slug: 'haarlem', province_id: 1, seo_text: 'Charmante hotels met jacuzzi in Haarlem', lat: 52.3874, lng: 4.6462, created_at: '2024-01-01' },
        { id: 3, name: 'Rotterdam', slug: 'rotterdam', province_id: 2, seo_text: 'Moderne hotels met jacuzzi in Rotterdam', lat: 51.9225, lng: 4.4792, created_at: '2024-01-01' },
        { id: 4, name: 'Utrecht', slug: 'utrecht', province_id: 3, seo_text: 'Historische hotels met jacuzzi in Utrecht', lat: 52.0907, lng: 5.1214, created_at: '2024-01-01' },
        { id: 5, name: 'Maastricht', slug: 'maastricht', province_id: 5, seo_text: 'Romantische hotels met jacuzzi in Maastricht', lat: 50.8514, lng: 5.6910, created_at: '2024-01-01' },
        { id: 6, name: 'Apeldoorn', slug: 'apeldoorn', province_id: 4, seo_text: 'Hotels met jacuzzi in Apeldoorn', lat: 52.2110, lng: 5.9699, created_at: '2024-01-01' },
        { id: 7, name: 'Schiphol', slug: 'schiphol', province_id: 1, seo_text: 'Hotels met jacuzzi bij Schiphol', lat: 52.3086, lng: 4.7639, created_at: '2024-01-01' },
        { id: 8, name: 'Wolvega', slug: 'wolvega', province_id: 9, seo_text: 'Hotels met jacuzzi in Wolvega', lat: 52.8656, lng: 5.9343, created_at: '2024-01-01' },
        { id: 9, name: 'Groningen', slug: 'groningen-stad', province_id: 8, seo_text: 'Hotels met jacuzzi in Groningen stad', lat: 53.2194, lng: 6.5665, created_at: '2024-01-01' },
        { id: 10, name: 'Schoorl', slug: 'schoorl', province_id: 1, seo_text: 'Natuurlijke rust en jacuzzi hotels in Schoorl', lat: 52.6954, lng: 4.6881, created_at: '2024-01-01' },
        { id: 11, name: 'Drachten', slug: 'drachten', province_id: 9, seo_text: 'Hotels met jacuzzi in Drachten', lat: 52.9325, lng: 6.0998, created_at: '2024-01-01' },
        { id: 12, name: 'Oudeschoot', slug: 'oudeschoot', province_id: 9, seo_text: 'Landelijke hotels met jacuzzi in Oudeschoot', lat: 52.9744, lng: 5.8689, created_at: '2024-01-01' },
        { id: 13, name: 'Berg en Dal', slug: 'berg-en-dal', province_id: 4, seo_text: 'Hotels met jacuzzi in Berg en Dal', lat: 51.8174, lng: 5.9139, created_at: '2024-01-01' },
        { id: 14, name: 'Assen', slug: 'assen', province_id: 10, seo_text: 'Hotels met jacuzzi in Assen', lat: 52.9925, lng: 6.5649, created_at: '2024-01-01' }
      ]

      const mockHotels = [
        {
          id: 1,
          name: 'Canal View Suite',
          slug: 'canal-view-suite',
          description: 'Luxe suite met privé jacuzzi en uitzicht op de grachten. Perfect voor een romantisch weekend in Amsterdam.',
          province_id: 1,
          city_id: 1,
          price_range: 'Vanaf €199 / nacht',
          facilities: ['Privé jacuzzi', 'Grachtenzicht', 'Minibar', 'Room service'],
          affiliate_link: 'https://booking.com/canal-view-suite',
          image_url: 'https://images.unsplash.com/photo-1559599238-0e285972db5b?q=80&w=1200&auto=format&fit=crop',
          rating: 4.6,
          created_at: '2024-01-01'
        },
        {
          id: 2,
          name: 'Boutique Spa Hotel',
          slug: 'boutique-spa-hotel',
          description: 'Intiem boutique hotel met uitgebreide spa faciliteiten en jacuzzi. Gelegen in het hart van Amsterdam.',
          province_id: 1,
          city_id: 1,
          price_range: 'Vanaf €179 / nacht',
          facilities: ['Spa & sauna', 'Jacuzzi', 'Massage', 'Wellness'],
          affiliate_link: 'https://booking.com/boutique-spa',
          image_url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
          rating: 4.5,
          created_at: '2024-01-01'
        },
        {
          id: 3,
          name: 'Design Loft Spa',
          slug: 'design-loft-spa',
          description: 'Moderne design loft met privé jacuzzi en panoramisch uitzicht over de stad. Unieke accommodatie in Amsterdam.',
          province_id: 1,
          city_id: 1,
          price_range: 'Vanaf €289 / nacht',
          facilities: ['Privé jacuzzi', 'Stadszicht', 'Design interieur', 'Terras'],
          affiliate_link: 'https://booking.com/design-loft',
          image_url: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop',
          rating: 4.8,
          created_at: '2024-01-01'
        },
        {
          id: 4,
          name: 'Van der Valk Apeldoorn - de Cantharel',
          slug: 'van-der-valk-apeldoorn-de-cantharel',
          description: 'Luxe Van der Valk hotel in Apeldoorn met uitgebreide wellness faciliteiten en jacuzzi. Gelegen nabij De Hoge Veluwe en Paleis Het Loo.',
          province_id: 4,
          city_id: 6,
          price_range: 'Vanaf €159 / nacht',
          facilities: ['Wellness & Spa', 'Jacuzzi', 'Restaurant', 'Fitness', 'Gratis WiFi', 'Parkeren'],
          affiliate_link: 'https://booking.com/vandervalk-apeldoorn',
          image_url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
          rating: 4.3,
          created_at: '2024-01-01'
        },
        {
          id: 5,
          name: 'Van der Valk Schiphol',
          slug: 'van-der-valk-schiphol',
          description: 'Modern Van der Valk hotel bij Schiphol met luxe spa en jacuzzi faciliteiten. Perfect voor zakenreizigers en vakantiegangers.',
          province_id: 1,
          city_id: 7,
          price_range: 'Vanaf €189 / nacht',
          facilities: ['Airport shuttle', 'Spa & Wellness', 'Jacuzzi', '24/7 service', 'Restaurant', 'Fitness'],
          affiliate_link: 'https://booking.com/vandervalk-schiphol',
          image_url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop',
          rating: 4.4,
          created_at: '2024-01-01'
        },
        {
          id: 6,
          name: 'Van der Valk Wolvega - Heerenveen',
          slug: 'van-der-valk-wolvega-heerenveen',
          description: 'Gastvrij Van der Valk hotel tussen Wolvega en Heerenveen met wellness centrum en jacuzzi. Friese gastvrijheid op z\'n best.',
          province_id: 9,
          city_id: 8,
          price_range: 'Vanaf €139 / nacht',
          facilities: ['Wellness centrum', 'Jacuzzi', 'Sauna', 'Restaurant', 'Gratis WiFi', 'Fietsroutes'],
          affiliate_link: 'https://booking.com/vandervalk-wolvega',
          image_url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop',
          rating: 4.2,
          created_at: '2024-01-01'
        },
        {
          id: 7,
          name: 'Van der Valk Hoogkerk',
          slug: 'van-der-valk-hoogkerk',
          description: 'Stijlvol Van der Valk hotel in Hoogkerk nabij Groningen met moderne spa faciliteiten en jacuzzi. Perfecte uitvalsbasis voor Noord-Nederland.',
          province_id: 8,
          city_id: 9,
          price_range: 'Vanaf €149 / nacht',
          facilities: ['Spa faciliteiten', 'Jacuzzi', 'Restaurant', 'Bar', 'Vergaderzalen', 'Gratis parkeren'],
          affiliate_link: 'https://booking.com/vandervalk-hoogkerk',
          image_url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop',
          rating: 4.3,
          created_at: '2024-01-01'
        },
        {
          id: 8,
          name: 'Van der Valk Assen',
          slug: 'van-der-valk-assen',
          description: 'Comfortabel Van der Valk hotel in Assen met wellness faciliteiten en jacuzzi. Ideaal gelegen in de hoofdstad van Drenthe.',
          province_id: 10,
          city_id: 14,
          price_range: 'Vanaf €135 / nacht',
          facilities: ['Wellness', 'Jacuzzi', 'Sauna', 'Restaurant', 'Fitness', 'Gratis WiFi'],
          affiliate_link: 'https://booking.com/vandervalk-assen',
          image_url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop',
          rating: 4.2,
          created_at: '2024-01-01'
        },
        {
          id: 9,
          name: 'Fletcher Hotel-Restaurant Jan Van Scorel',
          slug: 'fletcher-jan-van-scorel',
          description: 'Karakteristiek Fletcher hotel in Schoorl met wellness faciliteiten en jacuzzi. Gelegen nabij de duinen en het strand.',
          province_id: 1,
          city_id: 10,
          price_range: 'Vanaf €125 / nacht',
          facilities: ['Wellness', 'Jacuzzi', 'Restaurant', 'Nabij strand', 'Fietsroutes', 'Gratis WiFi'],
          affiliate_link: 'https://booking.com/fletcher-janvanschorel',
          image_url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop',
          rating: 4.1,
          created_at: '2024-01-01'
        },
        {
          id: 10,
          name: 'Fletcher Hotel-Restaurant De Zeegser Duinen',
          slug: 'fletcher-de-zeegser-duinen',
          description: 'Rustig Fletcher hotel in Drachten met spa faciliteiten en jacuzzi. Perfecte uitvalsbasis voor het ontdekken van Friesland.',
          province_id: 9,
          city_id: 11,
          price_range: 'Vanaf €119 / nacht',
          facilities: ['Spa', 'Jacuzzi', 'Restaurant', 'Natuur', 'Fietsverhuur', 'Gratis parkeren'],
          affiliate_link: 'https://booking.com/fletcher-zeegserduinen',
          image_url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop',
          rating: 4.0,
          created_at: '2024-01-01'
        },
        {
          id: 11,
          name: 'Fletcher Hotel-Restaurant Koogerend',
          slug: 'fletcher-koogerend',
          description: 'Landelijk Fletcher hotel in Oudeschoot met wellness centrum en jacuzzi. Rust en ontspanning in de Friese natuur.',
          province_id: 9,
          city_id: 12,
          price_range: 'Vanaf €115 / nacht',
          facilities: ['Wellness centrum', 'Jacuzzi', 'Restaurant', 'Landelijke ligging', 'Wandelroutes', 'Gratis WiFi'],
          affiliate_link: 'https://booking.com/fletcher-koogerend',
          image_url: 'https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1200&auto=format&fit=crop',
          rating: 4.1,
          created_at: '2024-01-01'
        },
        {
          id: 12,
          name: 'Fletcher Parkhotel Val Monte',
          slug: 'fletcher-parkhotel-val-monte',
          description: 'Luxe Fletcher parkhotel in Berg en Dal met uitgebreide spa en jacuzzi. Gelegen in het heuvelachtige landschap van Gelderland.',
          province_id: 4,
          city_id: 13,
          price_range: 'Vanaf €165 / nacht',
          facilities: ['Parkhotel', 'Spa & Wellness', 'Jacuzzi', 'Restaurant', 'Heuvelachtig', 'Golf nabij'],
          affiliate_link: 'https://booking.com/fletcher-valmonte',
          image_url: 'https://images.unsplash.com/photo-1554188248-986adbb73be2?q=80&w=1200&auto=format&fit=crop',
          rating: 4.4,
          created_at: '2024-01-01'
        },
        {
          id: 13,
          name: 'Kasteel Bloemendal',
          slug: 'kasteel-bloemendal',
          description: 'Historisch kasteel hotel met luxe spa faciliteiten en jacuzzi. Romantische omgeving in een authentiek kasteel met moderne wellness.',
          province_id: 5,
          city_id: 5,
          price_range: 'Vanaf €225 / nacht',
          facilities: ['Kasteel', 'Spa & Wellness', 'Jacuzzi', 'Fine dining', 'Historisch', 'Luxe kamers'],
          affiliate_link: 'https://booking.com/kasteel-bloemendal',
          image_url: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop',
          rating: 4.6,
          created_at: '2024-01-01'
        }
      ]

      setProvinces(mockProvinces)
      setCities(mockCities)
      setHotels(mockHotels)

      // Build price options from hotel price_range values
      const uniquePrices = Array.from(new Set(mockHotels.map(h => h.price_range)))
      setPriceOptions(uniquePrices)
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }


  // No longer passing handlers down; HotelCard triggers redirect itself

  if (loading) {
    return (
      <div className="min-h-screen bg-light-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Laden...</p>
        </div>
      </div>
    )
  }

  console.log('Rendering homepage with hotels:', hotels.length)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* Hero Section - Much more dramatic and beautiful */}
      <section className="relative overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-purple-600/10 to-blue-600/20 animate-pulse"></div>
        
        {/* Floating elements for visual appeal */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center mb-12">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-pink-200 mb-8">
              <span className="text-pink-600">✨</span>
              <span className="text-sm font-medium text-gray-700">Premium Jacuzzi Hotels Nederland</span>
              <span className="text-pink-600">💎</span>
            </div>
            
            {/* Main heading with gradient text */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Romantische
              </span>
              <br />
              <span className="text-gray-800">
                Hotels met Jacuzzi
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Ontdek de meest luxueuze hotels met privé jacuzzi's, wellness suites en romantische arrangementen door heel Nederland
            </p>
            
            {/* CTA buttons with improved design */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#filters" 
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-lg">🔍</span>
                <span>Vind jouw perfecte hotel</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              <a 
                href="#populaire-hotels" 
                className="inline-flex items-center gap-3 bg-white/90 hover:bg-white backdrop-blur-sm text-gray-700 hover:text-pink-600 font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-pink-300 transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-lg">💖</span>
                <span>Bekijk populaire keuzes</span>
              </a>
            </div>
          </div>
          
          {/* Hero image with enhanced styling */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <Image
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop"
                alt="Luxe hotelkamer met jacuzzi - Romantisch verblijf"
                width={1600}
                height={900}
                className="w-full h-64 md:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              />
              
              {/* Floating stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                  <div className="text-2xl font-bold text-pink-600">250+</div>
                  <div className="text-sm text-gray-600">Hotels</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">4.8★</div>
                  <div className="text-sm text-gray-600">Gemiddelde</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">98%</div>
                  <div className="text-sm text-gray-600">Tevreden</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter bar */}
        <div id="filters">
        <FilterBar
          provinces={provinces}
          cities={cities}
          filters={filters}
          onFilterChange={setFilters}
            priceOptions={priceOptions}
          />
        </div>

        {/* Alle resultaten header - Enhanced */}
        <div id="populaire-hotels" className="mb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-6 py-2 mb-4">
              <span className="text-pink-600">🏨</span>
              <span className="text-sm font-medium text-gray-700">Premium Selectie</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Luxe Hotels met Jacuzzi
          </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Ontdek onze zorgvuldig geselecteerde collectie van de mooiste hotels met privé jacuzzi faciliteiten
            </p>
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-2xl font-bold text-pink-600">{filteredHotels.length}</span>
              <span className="text-gray-600">
                {filteredHotels.length === 1 ? 'exclusief hotel gevonden' : 'exclusieve hotels gevonden'}
              </span>
              {filteredHotels.length > 0 && (
                <>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-green-600 font-medium">✓ Direct beschikbaar</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Hotel grid */}
        {filteredHotels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredHotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              {/* Beautiful empty state */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl blur-lg opacity-20"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-pink-200">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl">🔍</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Geen perfecte match gevonden</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Probeer andere filters om jouw ideale romantische hotel te vinden
                  </p>
                  <button 
                    onClick={() => setFilters({ province: '', city: '', priceRange: '' })}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <span>🔄</span>
                    <span>Reset filters</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Ontdek per provincie - Dramatically improved */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-2 mb-4">
              <span className="text-green-600">🗺️</span>
              <span className="text-sm font-medium text-gray-700">Ontdek Nederland</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kies jouw regio</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Van de prachtige kust tot de groene heuvels - vind romantische hotels in elke provincie
            </p>
          </div>

          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-50/50 via-white to-blue-50/50 rounded-3xl"></div>
            
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-2xl p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {provinces.map((prov) => (
                  <Link
                    key={prov.id}
                    href={`/provincie/${prov.slug}`}
                    className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl border border-gray-200 hover:border-pink-300 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                  >
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-purple-400/5 to-blue-400/10 group-hover:from-pink-400/20 group-hover:via-purple-400/15 group-hover:to-blue-400/20 transition-all duration-300"></div>
                    
                    {/* Icon section */}
                    <div className="relative h-16 flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 group-hover:from-pink-100 group-hover:to-purple-100 transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
                        🏞️
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-4">
                      <h4 className="font-bold text-gray-800 group-hover:text-pink-700 transition-colors duration-300 text-center text-sm">
                        {prov.name}
                      </h4>
                      <div className="flex items-center justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs text-pink-600 font-medium">Ontdek hotels</span>
                        <span className="ml-1 text-pink-600 transform group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Populaire steden - Stunning redesign */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full px-6 py-2 mb-4">
              <span className="text-blue-600">🏙️</span>
              <span className="text-sm font-medium text-gray-700">Populaire Bestemmingen</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Topsteden voor romantiek</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ontdek de meest geliefde steden met prachtige jacuzzi hotels
            </p>
          </div>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full opacity-10 -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-200 rounded-full opacity-10 translate-x-12 translate-y-12"></div>
            
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-2xl p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {cities
                  .filter(c => hotels.some(h => h.city_id === c.id))
                  .map((city) => {
                    const cityHotels = hotels.filter(h => h.city_id === city.id);
                    return (
                      <Link
                        key={city.id}
                        href={`/stad/${city.slug}`}
                        className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:-translate-y-3 hover:rotate-1"
                      >
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-cyan-400/5 to-teal-400/10 group-hover:from-blue-400/20 group-hover:via-cyan-400/15 group-hover:to-teal-400/20 transition-all duration-500"></div>
                        
                        {/* Hero section */}
                        <div className="relative h-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 group-hover:from-blue-100 group-hover:via-cyan-100 group-hover:to-teal-100 transition-all duration-500 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-500">
                            🏙️
                          </div>
                          
                          {/* Floating indicator */}
                          <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 shadow-sm">
                            <span className="text-xs font-medium text-blue-600">{cityHotels.length}</span>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="relative p-4">
                          <h4 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 text-center text-sm mb-2">
                            {city.name}
                          </h4>
                          <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <span className="text-xs text-blue-600 font-medium">
                              {cityHotels.length} hotel{cityHotels.length !== 1 ? 's' : ''}
                            </span>
                            <div className="flex items-center justify-center mt-1">
                              <span className="text-xs text-blue-600">Bekijk opties</span>
                              <span className="ml-1 text-blue-600 transform group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>

        {/* 🔥 NEW: Trust Signals & Social Proof */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-6 py-2 mb-4">
              <span className="text-emerald-600">🛡️</span>
              <span className="text-sm font-bold text-gray-700">Vertrouwd door 50.000+ reizigers</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Waarom kiezen voor ons?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Als specialist in romantische verblijven bieden wij gegarandeerd de beste deals en service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-200 text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Beste Prijs Garantie</h4>
              <p className="text-gray-600 mb-4">Vind je het goedkoper? We matchen de prijs + 5% extra korting</p>
              <div className="text-sm text-emerald-600 font-semibold">Bespaar tot €150 per boeking</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-200 text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Direct Bevestiging</h4>
              <p className="text-gray-600 mb-4">Onmiddellijke bevestiging binnen 5 minuten na boeking</p>
              <div className="text-sm text-blue-600 font-semibold">99.8% succesrate</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-200 text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Persoonlijk Advies</h4>
              <p className="text-gray-600 mb-4">Onze reisexperts helpen je het perfecte hotel te vinden</p>
              <div className="text-sm text-purple-600 font-semibold">24/7 Nederlandse support</div>
            </div>
          </div>

          {/* Customer Reviews Slider */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-200">
            <h4 className="text-2xl font-bold text-center text-gray-800 mb-8">Wat onze klanten zeggen</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-lg">★★★★★</div>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"Perfecte jacuzzi suite in Amsterdam! Precies wat we zochten voor ons jubileum. Booking verliep vlekkeloos."</p>
                <div className="text-sm font-semibold text-gray-800">- Maria & Jan, Amsterdam</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-lg">★★★★★</div>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"Geweldige service en de beste prijs gevonden. Het hotel was nog mooier dan op de foto's!"</p>
                <div className="text-sm font-semibold text-gray-800">- Sophie, Rotterdam</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-lg">★★★★★</div>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"Fantastische wellness ervaring! De jacuzzi was perfect en het personeel super vriendelijk."</p>
                <div className="text-sm font-semibold text-gray-800">- Thomas & Lisa, Utrecht</div>
              </div>
            </div>
          </div>
        </section>

        {/* 🔥 NEW: Seasonal Content & Trending */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-6 py-2 mb-4">
              <span className="text-orange-600">🔥</span>
              <span className="text-sm font-bold text-gray-700">Trending Nu</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Seizoen Highlights</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ontdek de populairste jacuzzi hotels voor dit seizoen met exclusieve deals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Winter Wellness */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white shadow-2xl group hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-sm font-bold">❄️ Winter Special</span>
              </div>
              <h4 className="text-2xl font-bold mb-4">Winter Wellness Escape</h4>
              <p className="text-blue-100 mb-6">Warm jezelf op in een luxe jacuzzi terwijl het buiten koud is. Perfect voor de wintermaanden!</p>
              <ul className="text-sm text-blue-100 mb-6 space-y-2">
                <li>✓ Tot 40% korting op geselecteerde hotels</li>
                <li>✓ Gratis upgrade naar wellness suite</li>
                <li>✓ Complimentair warme chocolademelk</li>
              </ul>
              <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-2xl hover:bg-blue-50 transition-colors">
                Bekijk Winter Deals
              </button>
            </div>

            {/* Romantic Packages */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-600 to-red-600 p-8 text-white shadow-2xl group hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-sm font-bold">💕 Romantiek</span>
              </div>
              <h4 className="text-2xl font-bold mb-4">Romantische Pakketten</h4>
              <p className="text-pink-100 mb-6">Speciale arrangementen voor koppels met champagne, rozen en privé wellness ervaringen.</p>
              <ul className="text-sm text-pink-100 mb-6 space-y-2">
                <li>✓ Champagne bij aankomst</li>
                <li>✓ Rozen op de kamer</li>
                <li>✓ Couples massage mogelijk</li>
              </ul>
              <button className="bg-white text-pink-600 font-bold py-3 px-6 rounded-2xl hover:bg-pink-50 transition-colors">
                Ontdek Romantiek
              </button>
            </div>
          </div>
        </section>

        {/* 🔥 NEW: Hotel Comparison Tool */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full px-6 py-2 mb-4">
              <span className="text-indigo-600">⚖️</span>
              <span className="text-sm font-bold text-gray-700">Smart Vergelijken</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vergelijk Top Hotels</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zie direct de verschillen tussen onze best beoordeelde jacuzzi hotels
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 border-b border-gray-200">
              <h4 className="text-xl font-bold text-gray-800 text-center">Top 3 Meest Populaire Hotels</h4>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-6 font-bold text-gray-800">Hotel</th>
                    <th className="text-center p-6 font-bold text-gray-800">Rating</th>
                    <th className="text-center p-6 font-bold text-gray-800">Prijs</th>
                    <th className="text-center p-6 font-bold text-gray-800">Jacuzzi Type</th>
                    <th className="text-center p-6 font-bold text-gray-800">Locatie</th>
                    <th className="text-center p-6 font-bold text-gray-800">Boek Nu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                          <span className="text-pink-600 font-bold">1</span>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">Canal View Suite</div>
                          <div className="text-sm text-gray-600">Amsterdam Premium</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center p-6">
                      <div className="text-yellow-400">★★★★★</div>
                      <div className="text-sm text-gray-600">4.8</div>
                    </td>
                    <td className="text-center p-6">
                      <div className="font-bold text-pink-600">€199</div>
                      <div className="text-sm text-gray-600">per nacht</div>
                    </td>
                    <td className="text-center p-6">
                      <div className="text-sm text-gray-800">Privé Jacuzzi</div>
                      <div className="text-xs text-gray-600">Op kamer</div>
                    </td>
                    <td className="text-center p-6 text-gray-800">Amsterdam</td>
                    <td className="text-center p-6">
                      <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-2 px-4 rounded-xl hover:shadow-lg transition-all">
                        Boek Nu
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 font-bold">2</span>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">Design Loft Spa</div>
                          <div className="text-sm text-gray-600">Boutique Luxe</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center p-6">
                      <div className="text-yellow-400">★★★★★</div>
                      <div className="text-sm text-gray-600">4.6</div>
                    </td>
                    <td className="text-center p-6">
                      <div className="font-bold text-blue-600">€289</div>
                      <div className="text-sm text-gray-600">per nacht</div>
                    </td>
                    <td className="text-center p-6">
                      <div className="text-sm text-gray-800">Wellness Suite</div>
                      <div className="text-xs text-gray-600">+ Sauna</div>
                    </td>
                    <td className="text-center p-6 text-gray-800">Amsterdam</td>
                    <td className="text-center p-6">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 px-4 rounded-xl hover:shadow-lg transition-all">
                        Boek Nu
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-600 font-bold">3</span>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">Van der Valk Apeldoorn</div>
                          <div className="text-sm text-gray-600">Familie Favoriet</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center p-6">
                      <div className="text-yellow-400">★★★★☆</div>
                      <div className="text-sm text-gray-600">4.3</div>
                    </td>
                    <td className="text-center p-6">
                      <div className="font-bold text-green-600">€159</div>
                      <div className="text-sm text-gray-600">per nacht</div>
                    </td>
                    <td className="text-center p-6">
                      <div className="text-sm text-gray-800">Wellness Center</div>
                      <div className="text-xs text-gray-600">Gedeeld</div>
                    </td>
                    <td className="text-center p-6 text-gray-800">Apeldoorn</td>
                    <td className="text-center p-6">
                      <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold py-2 px-4 rounded-xl hover:shadow-lg transition-all">
                        Boek Nu
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 🔥 NEW: FAQ Section for SEO */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-6 py-2 mb-4">
              <span className="text-yellow-600">❓</span>
              <span className="text-sm font-bold text-gray-700">Veelgestelde Vragen</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alles wat je wilt weten</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              De meest gestelde vragen over hotels met jacuzzi op een rijtje
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  q: "Wat kost een hotel met jacuzzi gemiddeld per nacht?",
                  a: "Hotels met jacuzzi variëren van €119 tot €350 per nacht, afhankelijk van locatie, luxeniveau en seizoen. Budget opties starten rond €119, mid-range hotels kosten €150-250, en luxe suites gaan tot €350+."
                },
                {
                  q: "Zijn jacuzzi's in hotels hygiënisch en veilig?",
                  a: "Ja, alle hotels op ons platform hanteren strikte hygiëne protocollen. Jacuzzi's worden dagelijks gereinigd en ontsmet volgens HACCP richtlijnen. Privé jacuzzi's op kamers worden na elke gast volledig vervangen van water."
                },
                {
                  q: "Kan ik een hotel met jacuzzi boeken voor dezelfde dag?",
                  a: "Ja, last-minute boekingen zijn mogelijk! Veel hotels hebben beschikbaarheid voor dezelfde dag. We raden aan om voor 14:00 te boeken voor optimale keuze en vaak krijg je last-minute deals tot 30% korting."
                },
                {
                  q: "Welke Nederlandse steden hebben de meeste jacuzzi hotels?",
                  a: "Amsterdam, Rotterdam en Utrecht hebben het grootste aanbod (50+ hotels elk). Ook populair zijn Maastricht, Den Haag en kleinere wellness steden zoals Valkenburg en Bergen aan Zee."
                },
                {
                  q: "Krijg ik mijn geld terug bij annulering?",
                  a: "Dit hangt af van het hotel en tarief. Veel hotels bieden gratis annulering tot 24-48 uur voor aankomst. Flexibele tarieven kosten iets meer maar bieden volledige terugbetaling. Check altijd de annuleringsvoorwaarden bij boeking."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-800 text-lg pr-4">{faq.q}</h4>
                      <span className="text-2xl text-gray-400 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🔥 NEW: Blog Preview Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full px-6 py-2 mb-4">
              <span className="text-teal-600">📝</span>
              <span className="text-sm font-bold text-gray-700">Reistips & Inspiration</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ontdek Meer</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handige tips, romantische ideeën en insider informatie voor jouw perfecte jacuzzi hotel ervaring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="h-48 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                <span className="text-4xl">💕</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">10 Romantische Ideeën voor je Jacuzzi Hotel</h4>
                <p className="text-gray-600 mb-4">Van surprise arrangementen tot perfecte timing - maak je verblijf onvergetelijk.</p>
                <a href="#" className="text-pink-600 font-semibold hover:text-pink-700 transition-colors">Lees meer →</a>
              </div>
            </article>

            <article className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="h-48 bg-gradient-to-br from-blue-200 to-cyan-200 flex items-center justify-center">
                <span className="text-4xl">🏨</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">Wat te verwachten van een 5-sterren Jacuzzi Suite</h4>
                <p className="text-gray-600 mb-4">Alles over luxe faciliteiten, service en exclusieve voordelen van premium hotels.</p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">Lees meer →</a>
              </div>
            </article>

            <article className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="h-48 bg-gradient-to-br from-green-200 to-emerald-200 flex items-center justify-center">
                <span className="text-4xl">💰</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">Geld Besparen op Jacuzzi Hotels: 7 Geheime Tips</h4>
                <p className="text-gray-600 mb-4">Insider tricks om tot 50% korting te krijgen op de mooiste wellness hotels.</p>
                <a href="#" className="text-green-600 font-semibold hover:text-green-700 transition-colors">Lees meer →</a>
              </div>
            </article>
          </div>
        </section>

        {/* 🔥 NEW: Live Booking Activity & Social Proof */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-pink-100 rounded-full px-6 py-2 mb-4">
              <span className="text-red-600 animate-pulse">🔴</span>
              <span className="text-sm font-bold text-gray-700">Live Boekingen</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent geboekt door anderen</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zie wat andere reizigers op dit moment boeken - mis geen populaire deals!
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200 p-8">
            <div className="space-y-4">
              {[
                { name: "Sarah K.", location: "Amsterdam", hotel: "Canal View Suite", time: "2 minuten geleden", price: "€199" },
                { name: "Mike & Lisa", location: "Rotterdam", hotel: "Design Loft Spa", time: "5 minuten geleden", price: "€289" },
                { name: "Tom H.", location: "Utrecht", hotel: "Boutique Spa Hotel", time: "8 minuten geleden", price: "€179" },
                { name: "Anna & Peter", location: "Maastricht", hotel: "Kasteel Bloemendal", time: "12 minuten geleden", price: "€225" }
              ].map((booking, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 animate-pulse">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">{booking.name} boekte net</div>
                      <div className="text-sm text-gray-600">{booking.hotel} in {booking.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">{booking.price}</div>
                    <div className="text-xs text-gray-500">{booking.time}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-4 py-2">
                <span className="text-orange-600 animate-bounce">⚡</span>
                <span className="text-sm font-bold text-gray-700">47 mensen bekijken nu deze pagina</span>
              </div>
            </div>
          </div>
        </section>

        {/* 🔥 NEW: Limited Time Offers & Countdown */}
        <section className="mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 p-8 text-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
                <span className="text-yellow-300 animate-pulse">⚡</span>
                <span className="text-sm font-bold">Beperkte Tijd Aanbieding</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Flash Sale: 48 Uur Korting!</h3>
              <p className="text-xl text-white/90 mb-6">Tot 60% korting op geselecteerde jacuzzi hotels</p>
              
              {/* Countdown Timer */}
              <div className="flex justify-center gap-4 mb-8">
                {['23', '14', '37', '42'].map((time, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 min-w-[80px]">
                    <div className="text-3xl font-bold">{time}</div>
                    <div className="text-sm text-white/80">{['UUR', 'MIN', 'SEC', 'MS'][index]}</div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-2xl font-bold">60%</div>
                  <div className="text-sm">Max korting</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-2xl font-bold">127</div>
                  <div className="text-sm">Hotels in actie</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-2xl font-bold">∞</div>
                  <div className="text-sm">Gratis annulering</div>
                </div>
              </div>
              
              <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
                🔥 Bekijk Flash Deals Nu
              </button>
            </div>
          </div>
        </section>

        {/* 🔥 NEW: Interactive Price Comparison Tool */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full px-6 py-2 mb-4">
              <span className="text-purple-600">🎯</span>
              <span className="text-sm font-bold text-gray-700">Smart Price Tracker</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Wij vinden altijd de beste prijs</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Onze AI vergelijkt real-time alle aanbieders om jou gegarandeerd de laagste prijs te bieden
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">AI Zoekt Voor Jou</h4>
                <p className="text-gray-600">Onze slimme algoritmes scannen 24/7 alle grote booking sites</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Beste Prijs Garantie</h4>
                <p className="text-gray-600">Vind je het ergens goedkoper? We matchen + geven 5% extra korting</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Instant Bevestiging</h4>
                <p className="text-gray-600">Direct geboekt, geen wachten, no-hassle ervaring gegarandeerd</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-orange-200">
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl">🏆</span>
                <div className="text-center">
                  <div className="font-bold text-gray-800">Gemiddeld €87 bespaard per boeking</div>
                  <div className="text-sm text-gray-600">Gebaseerd op 10.000+ vergelijkingen deze maand</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🔥 NEW: Instagram Feed & Social Proof */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-6 py-2 mb-4">
              <span className="text-pink-600">📸</span>
              <span className="text-sm font-bold text-gray-700">Instagram Inspiratie</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">#Hotelmetjacuzzi.net Moments</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zie hoe onze gasten genieten van hun romantische verblijven - tag ons voor een kans op gratis verblijf!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map((item) => (
              <div key={item} className="relative aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all flex items-center justify-center">
                  <span className="text-4xl">💕</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-white text-sm font-semibold">@couple_goals_nl</div>
                  <div className="text-white/80 text-xs">Amsterdam Suite</div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <span className="text-pink-600">❤️</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 px-6 rounded-2xl hover:shadow-lg transition-all">
              📱 Volg ons op Instagram
            </button>
          </div>
        </section>

        {/* 🔥 NEW: Loyalty Program Teaser */}
        <section className="mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-white">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
                <span className="text-yellow-300">👑</span>
                <span className="text-sm font-bold">VIP Loyalty Program</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">JacuzziClub Premium</h3>
              <p className="text-xl text-white/90 mb-8">Verdien punten bij elke boeking en unlock exclusieve voordelen</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl mb-2">💎</div>
                  <div className="font-bold text-lg">VIP Toegang</div>
                  <div className="text-sm text-white/80">Exclusieve hotels</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl mb-2">🎁</div>
                  <div className="font-bold text-lg">Gratis Upgrades</div>
                  <div className="text-sm text-white/80">Automatische suite upgrades</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="font-bold text-lg">Extra Korting</div>
                  <div className="text-sm text-white/80">Tot 25% member discount</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl mb-2">🍾</div>
                  <div className="font-bold text-lg">Welkomstcadeau</div>
                  <div className="text-sm text-white/80">Champagne & chocolade</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  👑 Word Premium Lid (Gratis)
                </button>
                <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/30 transition-all duration-300">
                  📋 Meer Info
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 🔥 NEW: Final CTA Section */}
        <section className="mt-20 mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 p-12 text-white text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12"></div>
            
            <div className="relative">
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                Klaar voor jouw perfecte
                <br />
                romantische getaway?
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Ontdek nu onze exclusieve collectie van de mooiste jacuzzi hotels in Nederland. Gegarandeerd de beste prijs en service!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
                  🔍 Vind Jouw Hotel
                </button>
                <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/30 transition-all duration-300 text-lg">
                  📞 Persoonlijk Advies
                </button>
              </div>
              
              <div className="mt-8 text-white/80">
                <div className="flex justify-center items-center gap-6 text-sm">
                  <span>✓ Gratis annulering</span>
                  <span>✓ Beste prijs garantie</span>
                  <span>✓ Direct bevestiging</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-pink-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">
            © 2024 Hotelmetjacuzzi.net. Sommige links zijn affiliate links; wij kunnen commissie ontvangen zonder extra kosten voor jou.
          </p>
            <p className="text-xs text-gray-400">
              💕 Gemaakt met liefde voor romantische getaways
            </p>
          </div>
        </div>
      </footer>

      {/* 🔥 Advanced Schema.org Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TravelAgency',
            name: 'Hotelmetjacuzzi.net Nederland',
            description: 'Specialist in romantische hotels met jacuzzi. Vind de perfecte wellness accommodatie voor een onvergetelijk verblijf.',
            url: 'https://jacuzzihotels.nl',
            telephone: '+31-20-123-4567',
            email: 'info@hotelmetjacuzzi.net',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'NL',
              addressLocality: 'Amsterdam'
            },
            sameAs: [
              'https://facebook.com/jacuzzihotels',
              'https://instagram.com/jacuzzihotels',
              'https://twitter.com/jacuzzihotels'
            ],
            priceRange: '€119-€350',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '2847',
              bestRating: '5',
              worstRating: '1'
            },
            offers: {
              '@type': 'Offer',
              description: 'Beste prijsgarantie op jacuzzi hotels in Nederland',
              priceValidUntil: '2024-12-31',
              availability: 'https://schema.org/InStock'
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Wat kost een hotel met jacuzzi gemiddeld per nacht?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Hotels met jacuzzi variëren van €119 tot €350 per nacht, afhankelijk van locatie, luxeniveau en seizoen. Budget opties starten rond €119, mid-range hotels kosten €150-250, en luxe suites gaan tot €350+.'
                }
              },
              {
                '@type': 'Question',
                name: 'Zijn jacuzzi\'s in hotels hygiënisch en veilig?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja, alle hotels op ons platform hanteren strikte hygiëne protocollen. Jacuzzi\'s worden dagelijks gereinigd en ontsmet volgens HACCP richtlijnen. Privé jacuzzi\'s op kamers worden na elke gast volledig vervangen van water.'
                }
              },
              {
                '@type': 'Question',
                name: 'Kan ik een hotel met jacuzzi boeken voor dezelfde dag?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja, last-minute boekingen zijn mogelijk! Veel hotels hebben beschikbaarheid voor dezelfde dag. We raden aan om voor 14:00 te boeken voor optimale keuze en vaak krijg je last-minute deals tot 30% korting.'
                }
              }
            ]
          })
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Hotelmetjacuzzi.net Nederland',
            url: 'https://jacuzzihotels.nl',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://jacuzzihotels.nl/search?q={search_term_string}'
              },
              'query-input': 'required name=search_term_string'
            }
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://jacuzzihotels.nl'
              }
            ]
          })
        }}
      />
    </div>
  )
}