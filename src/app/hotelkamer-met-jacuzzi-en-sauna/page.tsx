'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

// Room interface
interface Room {
  id: number
  name: string
  hotelName: string
  city: string
  province: string
  image: string
  description: string | string[]
  facilities?: Array<{ icon: string; name: string }>
  priceFrom: string
  affiliateLink: string
  rating: number
}

// Mock room data - Inntel Hotels Amsterdam Centre rooms with jacuzzi and sauna
const jacuzziSaunaRooms: Room[] = [
  {
    id: 1,
    name: "Wellness Kamer",
    hotelName: "Inntel Hotels Amsterdam Centre",
    city: "Amsterdam",
    province: "Noord-Holland",
    image: "/images/inntelhotels - Wellness kamer.jpg",
    description: "De Wellness Kamer staat volledig in het teken van ontspanning en luxe. U beschikt over een ruime privésauna en een royaal bubbelbad om helemaal tot rust te komen. Het speciaal ontworpen Inntel LXRY bed zorgt voor een weldadige nachtrust. De inrichting van de kamer is een speelse knipoog naar de Nederlandse cultuur: de tulp staat centraal als symbool van Amsterdam. Een subtiele verwijzing naar het bekende lied \"Tulpen uit Amsterdam\" maakt deze kamer extra bijzonder en geeft uw verblijf een vrolijke, lokale touch.",
    facilities: [
      { icon: "🛁", name: "Bubbelbad" },
      { icon: "🧖", name: "Privé sauna" },
      { icon: "👘", name: "Badjas" },
      { icon: "🧴", name: "Toiletartikelen" },
      { icon: "🚿", name: "Regendouche" },
      { icon: "👔", name: "Strijkfaciliteiten" }
    ],
    priceFrom: "€249",
    affiliateLink: "https://booking.com/inntel-amsterdam-centre-wellness",
    rating: 4.3
  },
  {
    id: 2,
    name: "Suite",
    hotelName: "Inntel Hotels Amsterdam Centre",
    city: "Amsterdam",
    province: "Noord-Holland",
    image: "/images/inntelhotels - Suite.jpg",
    description: "De Amsterdam Suites combineren historie en modern comfort in een unieke setting. Met subtiele verwijzingen naar de rijke VOC-periode en de cultuur rond het Vondelpark, ademt de kamer de sfeer van de Gouden Eeuw. Terwijl u ontspant in de privésauna, het royale bubbelbad of op de comfortabele designbank, ervaart u de charme van vroeger met de luxe van vandaag. De inrichting met historische details en eigentijds design maakt dit de ideale suite voor wie houdt van zowel cultuur als ontspanning.",
    facilities: [
      { icon: "🛁", name: "Jacuzzi" },
      { icon: "🧖", name: "Privé sauna" },
      { icon: "👘", name: "Badjas" },
      { icon: "🧴", name: "Toiletartikelen" },
      { icon: "🚿", name: "Regendouche" },
      { icon: "👔", name: "Strijkfaciliteiten" }
    ],
    priceFrom: "€299",
    affiliateLink: "https://booking.com/inntel-amsterdam-centre-suite",
    rating: 4.3
  },
  {
    id: 3,
    name: "Monumentale Suite",
    hotelName: "Inntel Hotels Amsterdam Centre",
    city: "Amsterdam",
    province: "Noord-Holland",
    image: "/images/inntelhotels - Monumentale Suite.jpg",
    description: "De Monumentale Suite is een bijzondere hotelkamer die de charme van Amsterdam perfect weerspiegelt. In dit ruime penthouse komen historische details en moderne luxe samen. Geniet van een privésauna, een royaal bubbelbad en een prachtig uitzicht over de stad. De warme ambiance en de authentieke elementen zorgen voor een unieke overnachtingservaring.",
    facilities: [
      { icon: "🛁", name: "Bubbelbad" },
      { icon: "🧖", name: "Privé sauna" },
      { icon: "👘", name: "Badjas" },
      { icon: "🧴", name: "Toiletartikelen" },
      { icon: "🚿", name: "Regendouche" },
      { icon: "👔", name: "Strijkfaciliteiten" },
      { icon: "🪜", name: "Alleen bereikbaar via een trap" }
    ],
    priceFrom: "€349",
    affiliateLink: "https://booking.com/inntel-amsterdam-centre-monumentale-suite",
    rating: 4.3
  }
]

// SVG Pattern Component
const DiamondPattern = () => (
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      opacity: 0.03,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='diamond-pattern' patternUnits='userSpaceOnUse' width='80' height='80'%3E%3Cg fill='none' stroke='%23F36F21' stroke-width='0.5'%3E%3C!-- Diamant vormen --%3E%3Cpath d='M40 10 L60 40 L40 70 L20 40 Z'/%3E%3Cpath d='M10 25 L25 40 L10 55 L-5 40 Z'/%3E%3Cpath d='M70 25 L85 40 L70 55 L55 40 Z'/%3E%3Cpath d='M25 -5 L40 10 L25 25 L10 10 Z'/%3E%3Cpath d='M55 -5 L70 10 L55 25 L40 10 Z'/%3E%3Cpath d='M25 55 L40 70 L25 85 L10 70 Z'/%3E%3Cpath d='M55 55 L70 70 L55 85 L40 70 Z'/%3E%3C!-- Accent lijnen --%3E%3Cline x1='0' y1='40' x2='80' y2='40'/%3E%3Cline x1='40' y1='0' x2='40' y2='80'/%3E%3C!-- Kleine diamanten --%3E%3Ccircle cx='20' cy='20' r='2' fill='%23F36F21' opacity='0.6'/%3E%3Ccircle cx='60' cy='20' r='2' fill='%23F36F21' opacity='0.6'/%3E%3Ccircle cx='20' cy='60' r='2' fill='%23F36F21' opacity='0.6'/%3E%3Ccircle cx='60' cy='60' r='2' fill='%23F36F21' opacity='0.6'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23diamond-pattern)'/%3E%3C/svg%3E")`
    }}
  />
)

// Room Card Component
const RoomCard = ({ room }: { room: Room }) => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  
  return (
  <article className="group relative bg-pure-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-brand-navy-200 hover:border-brand-orange-600 hover:-translate-y-1 flex flex-col h-full">
    <div className="relative h-56 overflow-hidden rounded-t-2xl">
      <Image
        src={room.image}
        alt={`Hotelkamer met jacuzzi en sauna in ${room.city} - ${room.hotelName}`}
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
        <p className={`text-brand-navy-600 text-base leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
          {room.description}
        </p>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-brand-orange-600 text-sm font-semibold mt-2 hover:text-brand-orange-700 transition-colors"
        >
          {isExpanded ? 'Inklappen ↑' : 'Lees verder ↓'}
        </button>
      </div>

      {/* Facilities */}
      {room.facilities && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-brand-navy-700 mb-3">Faciliteiten</h4>
          <div className="flex flex-wrap gap-2">
            {room.facilities.slice(0, 3).map((facility, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-brand-navy-50 text-brand-navy-700 text-sm rounded-lg font-medium border border-brand-navy-200"
              >
                {facility.name}
              </span>
            ))}
            {room.facilities.length > 3 && (
              <span className="px-3 py-1 bg-light-gray text-brand-navy-600 text-sm rounded-lg font-medium">
                +{room.facilities.length - 3} meer
              </span>
            )}
          </div>
        </div>
      )}

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
      
      <button
        onClick={() => window.location.href = `/api/out/${room.id}`}
        className="w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
      >
        Bekijk Beschikbaarheid & Prijzen
      </button>
    </div>
  </article>
  )
}

// Tips Card Component
interface TipCardProps {
  icon: string
  title: string
  description: string
}

const TipCard = ({ icon, title, description }: TipCardProps) => (
  <div className="bg-pure-white rounded-xl p-6 shadow-lg border border-brand-navy-200 text-center">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-brand-navy-900 mb-3">{title}</h3>
    <p className="text-brand-navy-700">{description}</p>
  </div>
)

// Metadata is now handled inline in the component since this is a client component

export default function HotelkamerMetJacuzziEnSaunaPage() {
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(jacuzziSaunaRooms)
  const [filters, setFilters] = useState({
    province: '',
    city: '',
    priceRange: ''
  })

  // Mock data voor provincies en steden
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

  // Filter logic when filters change
  useEffect(() => {
    let filtered = jacuzziSaunaRooms

    if (filters.province) {
      const province = mockProvinces.find(p => p.id === parseInt(filters.province))
      if (province) {
        filtered = filtered.filter(room => room.province === province.name)
      }
    }

    if (filters.city) {
      const city = mockCities.find(c => c.id === parseInt(filters.city))
      if (city) {
        filtered = filtered.filter(room => room.city === city.name)
      }
    }

    if (filters.priceRange) {
      filtered = filtered.filter(room => {
        const price = parseInt(room.priceFrom.replace(/[^\d]/g, ''))
        switch (filters.priceRange) {
          case 'budget':
            return price >= 200 && price <= 250
          case 'mid':
            return price >= 250 && price <= 300
          case 'luxury':
            return price >= 300
          default:
            return true
        }
      })
    }

    setFilteredRooms(filtered)
  }, [filters])

  return (
    <>
      <head>
        <title>Hotels met Jacuzzi en Sauna op de Kamer in Nederland | Hotelmetjacuzzi.net</title>
        <meta name="description" content="Ontdek de beste hotels met zowel jacuzzi als sauna op de kamer in Nederland. Complete wellness ervaring in één kamer. Boek nu vanaf €169 per nacht!" />
        <meta name="keywords" content="hotel met jacuzzi en sauna, jacuzzi sauna kamer, wellness kamer met jacuzzi en sauna, hotel kamer met jacuzzi en sauna" />
        <link rel="canonical" href="/hotelkamer-met-jacuzzi-en-sauna" />
        <meta property="og:title" content="Hotels met Jacuzzi en Sauna op de Kamer in Nederland" />
        <meta property="og:description" content="Geniet van de ultieme wellness ervaring met zowel jacuzzi als sauna op je kamer. Complete ontspanning in één ruimte." />
        <meta property="og:url" content="/hotelkamer-met-jacuzzi-en-sauna" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hotels met Jacuzzi en Sauna op de Kamer in Nederland" />
        <meta name="twitter:description" content="Geniet van de ultieme wellness ervaring met zowel jacuzzi als sauna op je kamer. Complete ontspanning in één ruimte." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop" />
      </head>
      <main className="min-h-screen bg-light-gray">
      {/* Professional Diamond Pattern Background */}
      <DiamondPattern />

      {/* Hero Section */}
      <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm">
                  <li><Link href="/" className="text-brand-navy-200 hover:text-pure-white">Home</Link></li>
                  <li className="text-brand-navy-300">/</li>
                  <li className="text-pure-white font-semibold">Hotelkamer met Jacuzzi en Sauna</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Hotels met jacuzzi en sauna op de kamer
              </h1>
              <p className="text-xl md:text-2xl text-brand-navy-200 mb-8 leading-relaxed">
                Geniet van de ultieme wellness ervaring met zowel jacuzzi als sauna op je kamer. 
                Complete ontspanning in één ruimte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('filters')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Vind jouw kamer →
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop"
                alt="Hotel kamer met jacuzzi en sauna"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange-600 text-pure-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">Vanaf €169</div>
                <div className="text-sm">per nacht</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Introduction Section */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 text-center mb-8">
              De ultieme wellness ervaring op je kamer
            </h2>
            <div className="bg-brand-navy-50 rounded-2xl p-8 shadow-lg border border-brand-navy-200">
              <div className="prose prose-lg max-w-none text-brand-navy-700">
                <p className="mb-6 leading-relaxed">
                  Een <strong>hotel met jacuzzi en sauna op de kamer</strong> biedt de ultieme privacy en ontspanning. 
                  Je hoeft je kamer niet te verlaten om te genieten van een complete wellness ervaring. 
                  Deze premium faciliteiten zorgen voor een onvergetelijke overnachting waarbij je volledig kunt ontspannen 
                  in je eigen ruimte.
                </p>
                
                <p className="mb-6 leading-relaxed">
                  Het voordeel van een <strong>jacuzzi sauna kamer</strong> is dat je niet hoeft te reserveren of te wachten 
                  op andere gasten. Je hebt 24/7 toegang tot je eigen wellness faciliteiten en kunt genieten wanneer het jou uitkomt. 
                  Perfect voor koppels die willen genieten van een romantische avond of voor gasten die gewoon willen ontspannen 
                  na een drukke dag.
                </p>
                
                <p className="mb-6 leading-relaxed">
                  Onze selectie van hotels met <strong>wellness kamers met jacuzzi en sauna</strong> zijn zorgvuldig gekozen 
                  op basis van kwaliteit, service en natuurlijk de uitstekende faciliteiten. Van moderne Van der Valk hotels 
                  tot gespecialiseerde wellness hotels - elk hotel biedt een unieke ervaring met de beste voorzieningen 
                  voor een complete ontspanning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid Section */}
      <section id="rooms" className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Hotelkamers met Jacuzzi en Sauna in Nederland
            </h2>
            <p className="text-lg text-brand-navy-600 max-w-3xl mx-auto">
              Geniet van luxe en privacy in deze selectie van de mooiste hotelkamers met zowel jacuzzi als sauna. 
              Elke kamer biedt een unieke wellness ervaring met moderne faciliteiten en romantische sfeer.
            </p>
          </div>

          {/* Filter Section */}
          <div id="filters" className="bg-pure-white rounded-2xl shadow-lg p-6 mb-8 border border-brand-navy-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Province filter */}
              <div>
                <label htmlFor="province-filter-sauna" className="block text-sm font-semibold text-primary mb-2">
                  Provincie
                </label>
                <select
                  id="province-filter-sauna"
                  value={filters.province}
                  onChange={(e) => setFilters({ ...filters, province: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600"
                >
                  <option value="">Alle provincies</option>
                  {mockProvinces.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* City filter */}
              <div>
                <label htmlFor="city-filter-sauna" className="block text-sm font-semibold text-primary mb-2">
                  Stad
                </label>
                <select
                  id="city-filter-sauna"
                  value={filters.city}
                  onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600"
                >
                  <option value="">Alle steden</option>
                  {mockCities.filter(city => 
                    filters.province === '' || city.province_id === parseInt(filters.province)
                  ).map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price filter */}
              <div>
                <label htmlFor="price-filter-sauna" className="block text-sm font-semibold text-primary mb-2">
                  Prijsklasse
                </label>
                <select
                  id="price-filter-sauna"
                  value={filters.priceRange}
                  onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600"
                >
                  <option value="">Alle prijzen</option>
                  <option value="budget">€200-€250</option>
                  <option value="mid">€250-€300</option>
                  <option value="luxury">€300+</option>
                </select>
              </div>

              {/* Filter button */}
              <div className="flex items-end">
                <button
                  onClick={() => setFilters({ province: '', city: '', priceRange: '' })}
                  className="w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                  aria-label="Reset alle filters"
                >
                  Reset filters
                </button>
              </div>
            </div>
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
              <button 
                onClick={() => setFilters({ province: '', city: '', priceRange: '' })}
                className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Tips & Tricks Section */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Tips voor het boeken van een jacuzzi + sauna kamer
            </h2>
            <p className="text-lg text-brand-navy-600">
              Praktische tips voor de beste wellness ervaring
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TipCard
              icon="🛁"
              title="Controleer de faciliteiten"
              description="Zorg ervoor dat zowel jacuzzi als sauna daadwerkelijk op de kamer zijn en niet in een gedeeld wellness center."
            />
            <TipCard
              icon="⏰"
              title="Boek ruim van tevoren"
              description="Deze premium kamers zijn populair en beperkt beschikbaar. Boek minimaal 2-3 weken van tevoren."
            />
            <TipCard
              icon="💧"
              title="Vraag naar onderhoud"
              description="Informeer naar het onderhoudsschema van de faciliteiten om teleurstellingen te voorkomen."
            />
            <TipCard
              icon="🎁"
              title="Kijk naar pakketten"
              description="Veel hotels bieden wellness pakketten met extra's zoals champagne of chocolade voor een romantische touch."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Veelgestelde Vragen
              </h2>
              <p className="text-lg text-brand-navy-600">
                Alles wat je wilt weten over hotels met jacuzzi en sauna op de kamer
              </p>
            </div>
            <div className="bg-pure-white rounded-2xl shadow-lg p-8 border border-brand-navy-200 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Wat is het verschil tussen jacuzzi en sauna?</h3>
                <p className="text-brand-navy-700 leading-relaxed">
                  Een jacuzzi is een bubbelbad met warm water en massage jets voor ontspanning van spieren. 
                  Een sauna is een warme ruimte met droge hitte (80-100°C) die helpt bij detoxen en ontspanning. 
                  Beide hebben verschillende gezondheidsvoordelen en kunnen elkaar perfect aanvullen.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Hoeveel kost een hotelkamer met jacuzzi en sauna gemiddeld?</h3>
                <p className="text-brand-navy-700 leading-relaxed">
                  Onze selectie van hotels met jacuzzi en sauna op de kamer varieert van €169 tot €219 per nacht. 
                  Dit is premium pricing omdat je toegang hebt tot beide faciliteiten in je eigen ruimte, 
                  wat meer privacy en comfort biedt dan gedeelde wellness faciliteiten.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Zijn er veiligheidsmaatregelen voor jacuzzi en sauna gebruik?</h3>
                <p className="text-brand-navy-700 leading-relaxed">
                  Ja, alle hotels hebben strikte veiligheidsprotocollen. Jacuzzi's worden dagelijks gecontroleerd op waterkwaliteit 
                  en temperatuur. Sauna's hebben automatische temperatuurregeling en noodstop functies. 
                  Gebruik altijd de instructies van het hotel en beperk je tijd in beide faciliteiten.
                </p>
              </div>
            </div>
          </div>
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

            {/* Hotelkamer met jacuzzi */}
            <Link href="/hotelkamer-met-jacuzzi" className="group">
              <div className="bg-pure-white border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop"
                    alt="Hotelkamer met jacuzzi - Luxe kamers met privé jacuzzi"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-navy-900 text-pure-white px-3 py-1 rounded-full text-xs font-semibold">
                      Luxe Kamers
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors duration-300">
                    Hotelkamer met jacuzzi
                  </h3>
                  <p className="text-brand-navy-600 mb-6 line-clamp-2 flex-1">
                    Ontdek de mooiste hotelkamers met privé jacuzzi in Nederland. Van romantische suites tot 
                    luxe wellness kamers - vind jouw perfecte jacuzzi ervaring.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 w-full justify-center group-hover:shadow-lg">
                      Bekijk kamers
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

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hotelmetjacuzzi.net/' },
              { '@type': 'ListItem', position: 2, name: 'Hotelkamer met Jacuzzi en Sauna', item: 'https://hotelmetjacuzzi.net/hotelkamer-met-jacuzzi-en-sauna' }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Hotelkamers met Jacuzzi en Sauna in Nederland',
            numberOfItems: jacuzziSaunaRooms.length,
            itemListElement: jacuzziSaunaRooms.map((room, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Hotel',
                name: `${room.name} - ${room.hotelName}`,
                url: `https://hotelmetjacuzzi.net/hotel/inntel-hotels-amsterdam-centre`,
                image: room.image,
                priceRange: room.priceFrom,
                starRating: {
                  '@type': 'Rating',
                  ratingValue: room.rating,
                  bestRating: 5
                }
              }
            }))
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
                name: 'Wat is het verschil tussen jacuzzi en sauna?',
                acceptedAnswer: { 
                  '@type': 'Answer', 
                  text: 'Een jacuzzi is een bubbelbad met warm water en massage jets voor ontspanning van spieren. Een sauna is een warme ruimte met droge hitte (80-100°C) die helpt bij detoxen en ontspanning. Beide hebben verschillende gezondheidsvoordelen en kunnen elkaar perfect aanvullen.' 
                }
              },
              {
                '@type': 'Question',
                name: 'Hoeveel kost een hotelkamer met jacuzzi en sauna gemiddeld?',
                acceptedAnswer: { 
                  '@type': 'Answer', 
                  text: 'Onze selectie van hotels met jacuzzi en sauna op de kamer varieert van €169 tot €219 per nacht. Dit is premium pricing omdat je toegang hebt tot beide faciliteiten in je eigen ruimte, wat meer privacy en comfort biedt dan gedeelde wellness faciliteiten.' 
                }
              },
              {
                '@type': 'Question',
                name: 'Zijn er veiligheidsmaatregelen voor jacuzzi en sauna gebruik?',
                acceptedAnswer: { 
                  '@type': 'Answer', 
                  text: 'Ja, alle hotels hebben strikte veiligheidsprotocollen. Jacuzzi\'s worden dagelijks gecontroleerd op waterkwaliteit en temperatuur. Sauna\'s hebben automatische temperatuurregeling en noodstop functies. Gebruik altijd de instructies van het hotel en beperk je tijd in beide faciliteiten.' 
                }
              }
            ]
          })
        }}
      />
      </main>
    </>
  )
}
