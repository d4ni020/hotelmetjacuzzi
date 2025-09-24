'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'


// Room data interface
interface Room {
  id: number
  name: string
  hotelName: string
  city: string
  province: string
  image: string
  description: string | string[]
  priceFrom: string
  affiliateLink: string
  rating: number
}

// Mock room data - starting with Inntel Hotels Amsterdam Centre rooms
const jacuzziRooms: Room[] = [
  {
    id: 1,
    name: "Spa Kamer",
    hotelName: "Inntel Hotels Amsterdam Centre",
    city: "Amsterdam",
    province: "Noord-Holland",
    image: "/images/inntelhotels - Spa kamer.jpg",
    description: "De Wellness Kamer staat volledig in het teken van ontspanning en luxe. U beschikt over een ruime privésauna en een royaal bubbelbad om helemaal tot rust te komen. Het speciaal ontworpen Inntel LXRY bed zorgt voor een weldadige nachtrust. De inrichting van de kamer is een speelse knipoog naar de Nederlandse cultuur: de tulp staat centraal als symbool van Amsterdam. Een subtiele verwijzing naar het bekende lied \"Tulpen uit Amsterdam\" maakt deze kamer extra bijzonder en geeft uw verblijf een vrolijke, lokale touch.",
    priceFrom: "€195",
    affiliateLink: "https://booking.com/inntel-amsterdam-centre-spa",
    rating: 4.3
  },
  {
    id: 2,
    name: "Wellness Kamer",
    hotelName: "Inntel Hotels Amsterdam Centre",
    city: "Amsterdam",
    province: "Noord-Holland",
    image: "/images/inntelhotels - Wellness kamer.jpg",
    description: [
      "Ruime wellness kamer met privé sauna",
      "Privé jacuzzi en wellness amenities",
      "Extra ruim en premium beddengoed",
      "Modern design in hartje Amsterdam"
    ],
    priceFrom: "€249",
    affiliateLink: "https://booking.com/inntel-amsterdam-centre-wellness",
    rating: 4.3
  },
  {
    id: 3,
    name: "Suite",
    hotelName: "Inntel Hotels Amsterdam Centre",
    city: "Amsterdam",
    province: "Noord-Holland",
    image: "/images/inntelhotels - Suite.jpg",
    description: "De Amsterdam Suites combineren historie en modern comfort in een unieke setting. Met subtiele verwijzingen naar de rijke VOC-periode en de cultuur rond het Vondelpark, ademt de kamer de sfeer van de Gouden Eeuw. Terwijl u ontspant in de privésauna, het royale bubbelbad of op de comfortabele designbank, ervaart u de charme van vroeger met de luxe van vandaag. De inrichting met historische details en eigentijds design maakt dit de ideale suite voor wie houdt van zowel cultuur als ontspanning.",
    priceFrom: "€299",
    affiliateLink: "https://booking.com/inntel-amsterdam-centre-suite",
    rating: 4.3
  },
  {
    id: 4,
    name: "Monumentale Suite",
    hotelName: "Inntel Hotels Amsterdam Centre",
    city: "Amsterdam",
    province: "Noord-Holland",
    image: "/images/inntelhotels - Monumentale Suite.jpg",
    description: "De Monumentale Suite is een bijzondere hotelkamer die de charme van Amsterdam perfect weerspiegelt. In dit ruime penthouse komen historische details en moderne luxe samen. Geniet van een privésauna, een royaal bubbelbad en een prachtig uitzicht over de stad. De warme ambiance en de authentieke elementen zorgen voor een unieke overnachtingservaring.",
    priceFrom: "€349",
    affiliateLink: "https://booking.com/inntel-amsterdam-centre-monumentale-suite",
    rating: 4.3
  }
]

// SVG Pattern Component removed - using same styling as homepage

// Room Card Component
const RoomCard = ({ room }: { room: Room }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
  <article className="group relative bg-pure-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-brand-navy-200 hover:border-brand-orange-600 hover:-translate-y-1 flex flex-col h-full">
    <div className="relative h-56 overflow-hidden rounded-t-2xl">
      <Image
        src={room.image}
        alt={`Hotelkamer met jacuzzi in ${room.city} - ${room.hotelName}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-brand-navy-900" style={{opacity: 0.2}}></div>
      <div className="absolute inset-0 bg-brand-navy-900 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
    </div>
    
    <div className="relative p-6 flex flex-col flex-1">
      <div className="mb-3">
        <h3 className="text-xl font-bold text-brand-navy-900 mb-2 leading-tight">
          {room.name}
        </h3>
        <p className="text-sm mb-2" style={{ color: '#4A6A8A' }}>
          {room.hotelName}
        </p>
        <p className="text-sm mb-2" style={{ color: '#4A6A8A' }}>
          {room.city}, {room.province}
        </p>
      </div>

      <div className="mb-6 flex-1">
        <p className={`text-brand-navy-600 text-base leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
          {room.description}
        </p>
        {room.description.length > 150 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-brand-orange-600 hover:text-brand-orange-700 font-semibold text-sm mt-2 transition-colors duration-200"
          >
            {isExpanded ? 'Lees minder' : 'Lees meer'}
          </button>
        )}
      </div>

      <div className="mb-6 p-4 bg-brand-navy-50 rounded-xl border border-brand-navy-200">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-brand-navy-600 block">Vanaf</span>
            <span className="text-2xl font-bold text-brand-navy-900">
              {room.priceFrom.replace('€', '€')}
            </span>
          </div>
          <div className="text-right">
            <span className="text-sm text-brand-orange-600 font-semibold">✓ Beste prijs</span>
            <br />
            <span className="text-xs text-brand-navy-500">Gegarandeerd</span>
          </div>
        </div>
      </div>
      
      <Link
        href={`/api/out/${room.id}`}
        className="w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl text-center block"
      >
        Bekijk Beschikbaarheid & Prijzen
      </Link>
    </div>
  </article>
  )
}

export default function HotelkamerMetJacuzziPage() {
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(jacuzziRooms)
  const [filters, setFilters] = useState({
    province: '',
    city: '',
    priceRange: ''
  })

  // Filter logic when filters change
  useEffect(() => {
    let filtered = jacuzziRooms

    if (filters.province) {
      const province = mockProvinces.find(p => p.slug === filters.province)
      if (province) {
        filtered = filtered.filter(room => room.province === province.name)
      }
    }

    if (filters.city) {
      const city = mockCities.find(c => c.slug === filters.city)
      if (city) {
        filtered = filtered.filter(room => room.city === city.name)
      }
    }

    if (filters.priceRange) {
      filtered = filtered.filter(room => {
        const price = parseInt(room.priceFrom.replace(/[^\d]/g, ''))
        switch (filters.priceRange) {
          case 'budget':
            return price >= 100 && price <= 150
          case 'mid':
            return price >= 150 && price <= 250
          case 'luxury':
            return price >= 250
          default:
            return true
        }
      })
    }

    setFilteredRooms(filtered)
  }, [filters])

  // Mock data voor provincies en steden
  const mockProvinces = [
    { id: 1, name: "Limburg", slug: "limburg" },
    { id: 2, name: "Noord-Holland", slug: "noord-holland" },
    { id: 3, name: "Gelderland", slug: "gelderland" },
    { id: 4, name: "Zuid-Holland", slug: "zuid-holland" },
    { id: 5, name: "Utrecht", slug: "utrecht" },
    { id: 6, name: "Noord-Brabant", slug: "noord-brabant" },
    { id: 7, name: "Groningen", slug: "groningen" },
    { id: 8, name: "Flevoland", slug: "flevoland" },
    { id: 9, name: "Drenthe", slug: "drenthe" },
    { id: 10, name: "Overijssel", slug: "overijssel" },
    { id: 11, name: "Zeeland", slug: "zeeland" },
    { id: 12, name: "Friesland", slug: "friesland" }
  ]

  const mockCities = [
    { id: 1, name: "Maastricht", slug: "maastricht", province_id: 1 },
    { id: 2, name: "Amsterdam", slug: "amsterdam", province_id: 2 },
    { id: 3, name: "Arnhem", slug: "arnhem", province_id: 3 },
    { id: 4, name: "Rotterdam", slug: "rotterdam", province_id: 4 },
    { id: 5, name: "Utrecht", slug: "utrecht", province_id: 5 },
    { id: 6, name: "Eindhoven", slug: "eindhoven", province_id: 6 },
    { id: 7, name: "Groningen", slug: "groningen", province_id: 7 },
    { id: 8, name: "Assen", slug: "assen", province_id: 9 },
    { id: 9, name: "Nijmegen", slug: "nijmegen", province_id: 3 },
    { id: 10, name: "Enschede", slug: "enschede", province_id: 10 },
    { id: 11, name: "Middelburg", slug: "middelburg", province_id: 11 },
    { id: 12, name: "Haarlem", slug: "haarlem", province_id: 2 },
    { id: 13, name: "Den Haag", slug: "den-haag", province_id: 4 },
    { id: 14, name: "Tilburg", slug: "tilburg", province_id: 6 },
    { id: 15, name: "Den Haag", slug: "den-haag", province_id: 4 },
    { id: 16, name: "Nijmegen", slug: "nijmegen", province_id: 3 },
    { id: 17, name: "Renesse", slug: "renesse", province_id: 11 },
    { id: 18, name: "Middelburg", slug: "middelburg", province_id: 11 },
    { id: 19, name: "Goes", slug: "goes", province_id: 11 },
    { id: 20, name: "Akersloot", slug: "akersloot", province_id: 2 },
    { id: 21, name: "Wieringermeer", slug: "wieringermeer", province_id: 2 },
    { id: 22, name: "Spaarnwoude", slug: "spaarnwoude", province_id: 2 },
    { id: 23, name: "Heiloo", slug: "heiloo", province_id: 2 },
    { id: 24, name: "Schiphol", slug: "schiphol", province_id: 2 },
    { id: 25, name: "Groningen", slug: "groningen", province_id: 7 },
    { id: 26, name: "Hilversum", slug: "hilversum", province_id: 5 },
    { id: 27, name: "De Koog", slug: "de-koog", province_id: 2 },
    { id: 28, name: "Vianen", slug: "vianen", province_id: 5 },
    { id: 29, name: "Schoorl", slug: "schoorl", province_id: 2 },
    { id: 30, name: "Tilburg", slug: "tilburg", province_id: 6 },
    { id: 31, name: "Vught", slug: "vught", province_id: 6 },
    { id: 32, name: "Gilze", slug: "gilze", province_id: 6 },
    { id: 33, name: "Deurne", slug: "deurne", province_id: 6 },
    { id: 34, name: "Houten", slug: "houten", province_id: 5 },
    { id: 35, name: "Breukelen", slug: "breukelen", province_id: 5 },
    { id: 36, name: "Houten", slug: "houten", province_id: 5 },
    { id: 37, name: "Utrecht", slug: "utrecht", province_id: 5 },
    { id: 38, name: "De Bilt", slug: "de-bilt", province_id: 5 },
    { id: 39, name: "Amersfoort", slug: "amersfoort", province_id: 5 },
    { id: 40, name: "Veluwe", slug: "veluwe", province_id: 3 },
    { id: 41, name: "Oosterbeek", slug: "oosterbeek", province_id: 3 },
    { id: 42, name: "Sassenheim", slug: "sassenheim", province_id: 4 },
    { id: 43, name: "Leiden", slug: "leiden", province_id: 4 },
    { id: 44, name: "Wassenaar", slug: "wassenaar", province_id: 4 },
    { id: 45, name: "Nootdorp", slug: "nootdorp", province_id: 4 },
    { id: 46, name: "Ridderkerk", slug: "ridderkerk", province_id: 4 },
    { id: 47, name: "Dordrecht", slug: "dordrecht", province_id: 4 },
    { id: 48, name: "Leeuwarden", slug: "leeuwarden", province_id: 12 },
    { id: 49, name: "Sneek", slug: "sneek", province_id: 12 },
    { id: 50, name: "Heerenveen", slug: "heerenveen", province_id: 12 },
    { id: 51, name: "Drachten", slug: "drachten", province_id: 12 },
    { id: 52, name: "Wolvega", slug: "wolvega", province_id: 12 },
    { id: 53, name: "Emmeloord", slug: "emmeloord", province_id: 8 },
    { id: 54, name: "Almere", slug: "almere", province_id: 8 },
    { id: 55, name: "Emmen", slug: "emmen", province_id: 9 },
    { id: 56, name: "Assen", slug: "assen", province_id: 9 },
    { id: 57, name: "Dwingeloo", slug: "dwingeloo", province_id: 9 },
    { id: 58, name: "Hoogersmilde", slug: "hoogersmilde", province_id: 9 },
    { id: 59, name: "Almelo", slug: "almelo", province_id: 10 },
    { id: 60, name: "Hellendoorn", slug: "hellendoorn", province_id: 10 }
  ]

  // Static filtering logic (no useEffect needed)

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Section */}
      <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Hotelkamers met Jacuzzi in Nederland
              </h1>
              <p className="text-xl md:text-2xl text-brand-navy-200 mb-8 leading-relaxed">
                Ontdek de mooiste hotelkamers met privé jacuzzi voor de ultieme ontspanning. 
                Van romantische suites tot luxe wellness kamers - vind jouw perfecte jacuzzi ervaring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#filters"
                  className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Vind jouw kamer →
                </Link>
                <a 
                  href="#provincies" 
                  className="border-2 border-brand-orange-600 text-brand-orange-600 hover:bg-brand-orange-600 hover:text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Ontdek per regio
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop"
                alt="Luxe hotelkamer met jacuzzi - Romantisch verblijf Nederland"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange-600 text-pure-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">Vanaf €149</div>
                <div className="text-sm">per nacht</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Overview Section */}
      <section id="rooms" className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Hotelkamers met Jacuzzi in Nederland
            </h2>
            <p className="text-lg text-brand-navy-600 max-w-3xl mx-auto">
              Geniet van luxe en privacy in deze selectie van de mooiste hotelkamers met jacuzzi. 
              Elke kamer biedt een unieke wellness ervaring met moderne faciliteiten en romantische sfeer.
            </p>
          </div>


          {/* Current Date Widget - Left aligned */}
          <div className="flex items-center mb-8">
            <div className="bg-pure-white border border-brand-navy-200 rounded-lg px-4 py-2 shadow-sm">
              <div className="flex items-center space-x-2 text-brand-navy-600">
                <svg width="16" height="16" viewBox="0 0 16 16" className="text-brand-orange-600">
                  <path 
                    fill="currentColor" 
                    d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5 0zM2 2a1 1 0 00-1 1v1h14V3a1 1 0 00-1-1H2zM1 5v9a1 1 0 001 1h12a1 1 0 001-1V5H1z"
                  />
                  <path 
                    fill="currentColor" 
                    d="M4.5 7a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5zm3 0a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5zm3 0a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5z"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Filter Section */}
          <div id="filters" className="bg-pure-white rounded-2xl shadow-lg p-6 mb-8 border border-brand-navy-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Province filter */}
              <select
                value={filters.province}
                onChange={(e) => setFilters({ ...filters, province: e.target.value })}
                className="px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600"
              >
                <option value="">Alle provincies</option>
                {mockProvinces.map((province) => (
                  <option key={province.id} value={province.slug}>
                    {province.name}
                  </option>
                ))}
              </select>

              {/* City filter */}
              <select
                value={filters.city}
                onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                className="px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600"
              >
                <option value="">Alle steden</option>
                {mockCities.map((city) => (
                  <option key={city.id} value={city.slug}>
                    {city.name}
                  </option>
                ))}
              </select>

              {/* Price filter */}
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600"
              >
                <option value="">Alle prijzen</option>
                <option value="budget">€100 - €150</option>
                <option value="mid">€150 - €250</option>
                <option value="luxury">€250+</option>
              </select>

              {/* Filter button */}
              <button
                onClick={() => setFilters({ province: '', city: '', priceRange: '' })}
                className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Reset filters
              </button>
            </div>
          </div>

          {/* Rooms Grid */}
          {filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-brand-navy-900 mb-4">
                Geen kamers gevonden
              </h3>
              <p className="text-brand-navy-600 text-lg mb-8">
                Probeer andere filters om meer resultaten te vinden.
              </p>
              <Link 
                href="/hotelkamer-met-jacuzzi"
                className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Bekijk alle kamers
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* Related Links Section */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Ontdek hotels met jacuzzi voor elk moment
            </h2>
            <p className="text-lg text-brand-navy-600 max-w-3xl mx-auto">
              Of je nu zoekt naar een <strong>goedkoop hotel met jacuzzi</strong>, een <strong>wellness hotel met jacuzzi in Nederland</strong>, 
              of een <strong>romantisch hotel met jacuzzi</strong> - wij hebben de perfecte accommodatie voor jouw droomvakantie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Goedkoop hotel met jacuzzi */}
            <Link href="/goedkoop-hotel-met-jacuzzi" className="group">
              <div className="bg-pure-white border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop"
                    alt="Goedkoop hotel met jacuzzi - Budget vriendelijke wellness"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-navy-900 text-pure-white px-3 py-1 rounded-full text-xs font-semibold">
                      Budget Vriendelijk
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors duration-300">
                    Goedkoop hotel met jacuzzi
                  </h3>
                  <p className="text-brand-navy-600 mb-6 line-clamp-2 flex-1">
                    Geniet van luxe wellness zonder de hoge kosten. Ontdek betaalbare hotels met jacuzzi 
                    faciliteiten vanaf €100 per nacht voor een perfecte prijs-kwaliteit verhouding.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 w-full justify-center group-hover:shadow-lg">
                      Bekijk aanbiedingen
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Wellness hotel met jacuzzi in Nederland */}
            <Link href="/wellness-hotel-met-jacuzzi" className="group">
              <div className="bg-pure-white border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop"
                    alt="Wellness hotel met jacuzzi in Nederland - Complete spa ervaring"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-orange-600 text-pure-white px-3 py-1 rounded-full text-xs font-semibold">
                      Complete Wellness
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors duration-300">
                    Wellness hotel met jacuzzi in Nederland
                  </h3>
                  <p className="text-brand-navy-600 mb-6 line-clamp-2 flex-1">
                    Ervaar totale ontspanning in Nederlandse wellness resorts met uitgebreide spa faciliteiten, 
                    jacuzzi's, sauna's en professionele behandelingen voor lichaam en geest.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 w-full justify-center group-hover:shadow-lg">
                      Ontdek wellness
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Romantisch hotel met jacuzzi */}
            <Link href="/romantisch-hotel-met-jacuzzi" className="group">
              <div className="bg-pure-white border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=600&auto=format&fit=crop"
                    alt="Romantisch hotel met jacuzzi - Intieme wellness ervaring"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-pink-500 text-pure-white px-3 py-1 rounded-full text-xs font-semibold">
                      Romantisch
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors duration-300">
                    Romantisch hotel met jacuzzi
                  </h3>
                  <p className="text-brand-navy-600 mb-6 line-clamp-2 flex-1">
                    Creëer onvergetelijke momenten samen in intieme hotels met privé jacuzzi's. 
                    Perfect voor verjaardagen, jubilea of gewoon een romantisch weekendje weg.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 w-full justify-center group-hover:shadow-lg">
                      Plan romantiek
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Hotelkamer met jacuzzi en sauna */}
            <Link href="/hotelkamer-met-jacuzzi-en-sauna" className="group">
              <div className="bg-pure-white border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop"
                    alt="Hotelkamer met jacuzzi en sauna - Complete wellness ervaring"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-orange-600 text-pure-white px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Wellness
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors duration-300">
                    Hotelkamer met jacuzzi en sauna
                  </h3>
                  <p className="text-brand-navy-600 mb-6 line-clamp-2 flex-1">
                    De ultieme wellness ervaring met zowel jacuzzi als sauna op de kamer. Complete ontspanning 
                    in één ruimte voor de perfecte wellness getaway.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 w-full justify-center group-hover:shadow-lg">
                      Bekijk wellness kamers
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Province Navigation */}
      <section id="provincies" className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Ontdek per Provincie
            </h2>
            <p className="text-lg text-brand-navy-600">
              Verken de beste hotels met jacuzzi in elke provincie van Nederland
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {mockProvinces.map((province) => (
              <Link 
                key={province.id}
                href={`/hotelkamer-met-jacuzzi/${province.slug}`}
                className="group bg-brand-navy-50 hover:bg-brand-navy-100 border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 text-center"
              >
                <div className="text-2xl font-bold text-brand-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors">
                  {province.name}
                </div>
                <div className="text-brand-navy-600 text-sm">
                  Ontdek kamers →
                </div>
              </Link>
            ))}
            
            {/* CTA Card to view all provinces */}
            <Link 
              href="/provincies"
              className="group bg-pure-white hover:bg-brand-orange-50 border-2 border-brand-orange-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 text-center flex flex-col justify-center min-h-[120px]"
            >
              <div className="flex items-center justify-center space-x-2 text-brand-orange-600 group-hover:text-brand-orange-700 transition-colors">
                <span className="text-lg font-semibold">Bekijk alle provincies</span>
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path 
                    d="M8 4l6 6-6 6" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="text-brand-navy-500 text-sm mt-2">
                Ontdek alle {mockProvinces.length} provincies
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Cities Navigation */}
      <section id="steden" className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Populaire Steden
            </h2>
            <p className="text-lg text-brand-navy-600">
              Ontdek jacuzzi hotels in de meest gewilde steden van Nederland
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockCities.slice(0, 8).map((city) => (
              <Link 
                key={city.id}
                href={`/stad/${city.slug}`}
                className="group bg-pure-white hover:bg-brand-navy-50 border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 text-center shadow-md hover:shadow-lg"
              >
                <div className="text-xl font-bold text-brand-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors">
                  {city.name}
                </div>
                <div className="text-brand-navy-600 text-sm">
                  Bekijk hotels →
                </div>
              </Link>
            ))}
            
            {/* CTA Card to view all cities */}
            <Link 
              href="/steden"
              className="group bg-pure-white hover:bg-brand-orange-50 border-2 border-brand-orange-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 text-center flex flex-col justify-center min-h-[120px] shadow-md hover:shadow-lg"
            >
              <div className="flex items-center justify-center space-x-2 text-brand-orange-600 group-hover:text-brand-orange-700 transition-colors">
                <span className="text-lg font-semibold">Bekijk alle steden</span>
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path 
                    d="M8 4l6 6-6 6" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="text-brand-navy-500 text-sm mt-2">
                Ontdek alle {mockCities.length} steden
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy-900 mb-8 text-center">
            Veelgestelde Vragen over Hotelkamers met Jacuzzi
          </h2>
          
          <div className="space-y-6">
            <div className="bg-pure-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-brand-navy-900 mb-3">
                Wat kost een hotelkamer met jacuzzi gemiddeld?
              </h3>
              <p className="text-brand-navy-700">
                Hotelkamers met jacuzzi variëren in prijs van €149 tot €400+ per nacht, afhankelijk van locatie, faciliteiten en seizoen. 
                Centrum locaties en luxe suites zijn doorgaans duurder dan hotels buiten de stad.
              </p>
            </div>
            
            <div className="bg-pure-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-brand-navy-900 mb-3">
                Zijn alle jacuzzi's op de kamer privé?
              </h3>
              <p className="text-brand-navy-700">
                Ja, alle hotelkamers met jacuzzi op onze website hebben een privé jacuzzi op de kamer zelf. 
                Dit garandeert privacy en comfort tijdens uw verblijf.
              </p>
            </div>
            
            <div className="bg-pure-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-brand-navy-900 mb-3">
                Welke faciliteiten zijn standaard inbegrepen?
              </h3>
              <p className="text-brand-navy-700">
                Standaard faciliteiten zijn meestal: WiFi, minibar, room service, badjassen, slippers en toiletartikelen. 
                Sommige hotels bieden ook toegang tot wellness centers of spa faciliteiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hotelmetjacuzzi.net/' },
              { '@type': 'ListItem', position: 2, name: 'Hotelkamers met Jacuzzi', item: 'https://hotelmetjacuzzi.net/hotelkamer-met-jacuzzi' }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Wat kost een hotelkamer met jacuzzi gemiddeld?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Hotelkamers met jacuzzi variëren in prijs van €149 tot €400+ per nacht, afhankelijk van locatie, faciliteiten en seizoen. Centrum locaties en luxe suites zijn doorgaans duurder dan hotels buiten de stad.'
                }
              },
              {
                '@type': 'Question',
                name: 'Zijn alle jacuzzi\'s op de kamer privé?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja, alle hotelkamers met jacuzzi op onze website hebben een privé jacuzzi op de kamer zelf. Dit garandeert privacy en comfort tijdens uw verblijf.'
                }
              },
              {
                '@type': 'Question',
                name: 'Welke faciliteiten zijn standaard inbegrepen?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Standaard faciliteiten zijn meestal: WiFi, minibar, room service, badjassen, slippers en toiletartikelen. Sommige hotels bieden ook toegang tot wellness centers of spa faciliteiten.'
                }
              }
            ]
          })
        }}
      />
    </div>
  )
}
