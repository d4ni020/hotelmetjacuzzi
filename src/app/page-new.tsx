'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HotelCard from '@/components/HotelCard'
import { Hotel, Province, City } from '@/lib/supabase'

export default function HomePage() {
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([])
  const [filters, setFilters] = useState({
    province: '',
    city: '',
    priceRange: '',
    jacuzziType: ''
  })

  // Mock data voor development (later vervangen door Supabase calls)
  const mockHotels: Hotel[] = [
    {
      id: 1,
      name: "Kasteel Bloemendal",
      slug: "kasteel-bloemendal",
      description: "Luxe kasteel met wellness faciliteiten en romantische jacuzzi suites in een historische setting.",
      province_id: 1,
      city_id: 1,
      price_range: "Vanaf €225",
      facilities: ["Privé Jacuzzi", "Spa", "Restaurant", "Wellness"],
      affiliate_link: "https://booking.com/kasteel-bloemendal",
      image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
      rating: 4.8,
      created_at: "2024-01-01"
    },
    {
      id: 2,
      name: "Van der Valk Hotel Amsterdam",
      slug: "van-der-valk-amsterdam",
      description: "Modern hotel in het hart van Amsterdam met luxe suites uitgerust met bubbelbaden en wellness faciliteiten.",
      province_id: 2,
      city_id: 2,
      price_range: "Vanaf €189",
      facilities: ["Bubbelbad", "Sauna", "Fitness", "Restaurant"],
      affiliate_link: "https://booking.com/van-der-valk-amsterdam",
      image_url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop",
      rating: 4.6,
      created_at: "2024-01-01"
    },
    {
      id: 3,
      name: "Fletcher Wellness Hotel",
      slug: "fletcher-wellness-hotel",
      description: "Ontspanning pur sang in dit wellness hotel met jacuzzi kamers en uitgebreide spa faciliteiten.",
      province_id: 3,
      city_id: 3,
      price_range: "Vanaf €159",
      facilities: ["Wellness Suite", "Jacuzzi", "Massages", "Zwembad"],
      affiliate_link: "https://booking.com/fletcher-wellness",
      image_url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop",
      rating: 4.5,
      created_at: "2024-01-01"
    }
  ]

  const mockProvinces: Province[] = [
    { id: 1, name: "Limburg", slug: "limburg", seo_text: "", created_at: "2024-01-01" },
    { id: 2, name: "Noord-Holland", slug: "noord-holland", seo_text: "", created_at: "2024-01-01" },
    { id: 3, name: "Gelderland", slug: "gelderland", seo_text: "", created_at: "2024-01-01" },
    { id: 4, name: "Zuid-Holland", slug: "zuid-holland", seo_text: "", created_at: "2024-01-01" },
    { id: 5, name: "Utrecht", slug: "utrecht", seo_text: "", created_at: "2024-01-01" },
    { id: 6, name: "Noord-Brabant", slug: "noord-brabant", seo_text: "", created_at: "2024-01-01" }
  ]

  const mockCities: City[] = [
    { id: 1, name: "Maastricht", slug: "maastricht", province_id: 1, seo_text: "", created_at: "2024-01-01" },
    { id: 2, name: "Amsterdam", slug: "amsterdam", province_id: 2, seo_text: "", created_at: "2024-01-01" },
    { id: 3, name: "Arnhem", slug: "arnhem", province_id: 3, seo_text: "", created_at: "2024-01-01" },
    { id: 4, name: "Rotterdam", slug: "rotterdam", province_id: 4, seo_text: "", created_at: "2024-01-01" },
    { id: 5, name: "Utrecht", slug: "utrecht-stad", province_id: 5, seo_text: "", created_at: "2024-01-01" },
    { id: 6, name: "Eindhoven", slug: "eindhoven", province_id: 6, seo_text: "", created_at: "2024-01-01" }
  ]

  useEffect(() => {
    setFilteredHotels(mockHotels)
  }, [])

  return (
    <main className="min-h-screen bg-light-gray">
      {/* Subtiele SVG Pattern Background */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A2637' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Hotels met Jacuzzi in Nederland
              </h1>
              <p className="text-xl md:text-2xl text-brand-navy-200 mb-8 leading-relaxed">
                Ontdek de meest romantische wellness overnachtingen. Van luxe hotels tot intieme bed & breakfasts - 
                vind het perfecte hotel met jacuzzi voor een onvergetelijke ervaring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#filters" 
                  className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Vind jouw hotel
                </a>
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
                <div className="text-2xl font-bold">250+</div>
                <div className="text-sm">Hotels beschikbaar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section id="filters" className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Vind jouw perfecte wellness overnachting
            </h2>
            <p className="text-lg text-brand-navy-600 max-w-2xl mx-auto">
              Gebruik onze slimme filters om het ideale romantische hotel met jacuzzi te vinden
            </p>
          </div>

          <div className="bg-light-gray rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label htmlFor="province" className="block text-sm font-semibold text-brand-navy-800 mb-2">
                  Provincie
                </label>
                <select
                  id="province"
                  value={filters.province}
                  onChange={(e) => setFilters({...filters, province: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600 bg-pure-white"
                >
                  <option value="">Alle provincies</option>
                  {mockProvinces.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-brand-navy-800 mb-2">
                  Stad
                </label>
                <select
                  id="city"
                  value={filters.city}
                  onChange={(e) => setFilters({...filters, city: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600 bg-pure-white"
                >
                  <option value="">Alle steden</option>
                  {mockCities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="priceRange" className="block text-sm font-semibold text-brand-navy-800 mb-2">
                  Prijsklasse
                </label>
                <select
                  id="priceRange"
                  value={filters.priceRange}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600 bg-pure-white"
                >
                  <option value="">Alle prijzen</option>
                  <option value="budget">€100 - €150</option>
                  <option value="middensegment">€150 - €250</option>
                  <option value="luxe">€250+</option>
                </select>
              </div>

              <div>
                <label htmlFor="jacuzziType" className="block text-sm font-semibold text-brand-navy-800 mb-2">
                  Type Jacuzzi
                </label>
                <select
                  id="jacuzziType"
                  value={filters.jacuzziType}
                  onChange={(e) => setFilters({...filters, jacuzziType: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600 bg-pure-white"
                >
                  <option value="">Alle types</option>
                  <option value="prive">Privé jacuzzi op kamer</option>
                  <option value="bubbelbad">Bubbelbad in badkamer</option>
                  <option value="suite">Wellness suite</option>
                  <option value="outdoor">Outdoor jacuzzi</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Uitgelichte Hotels met Jacuzzi
            </h2>
            <p className="text-lg text-brand-navy-600">
              Onze top selectie van romantische hotels voor een perfecte wellness overnachting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* Province Navigation */}
      <section id="provincies" className="py-16 bg-pure-white">
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
                href={`/provincie/${province.slug}`}
                className="group bg-brand-navy-50 hover:bg-brand-navy-100 border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 text-center"
              >
                <div className="text-2xl font-bold text-brand-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors">
                  {province.name}
                </div>
                <div className="text-brand-navy-600 text-sm">
                  Ontdek hotels →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-brand-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-brand-navy mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 text-center mb-8">
              De Ultimate Gids voor Hotels met Jacuzzi in Nederland
            </h2>
            
            <div className="text-brand-navy-700 leading-relaxed space-y-6">
              <p>
                Een <strong>hotel met jacuzzi</strong> boeken in Nederland is de perfecte manier om te ontspannen en 
                te genieten van een luxueuze wellness overnachting. Of je nu zoekt naar een romantisch weekend weg 
                of gewoon wilt ontsnappen aan de dagelijkse stress, Nederland biedt een uitgebreide selectie van 
                hotels met privé jacuzzi's, bubbelbaden en wellness faciliteiten.
              </p>

              <p>
                Van historische kastelen in Limburg tot moderne design hotels in Amsterdam - er is voor elke 
                smaak en budget wel een geschikt <strong>romantisch hotel</strong> te vinden. Veel hotels combineren 
                hun jacuzzi faciliteiten met uitgebreide spa's, sauna's en massagebehandelingen voor een complete 
                wellness ervaring.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
                Waarom Kiezen voor een Wellness Overnachting?
              </h3>
              
              <p>
                Een <strong>wellness overnachting</strong> in een hotel met jacuzzi biedt veel meer dan alleen een 
                comfortabele slaapplaats. Het is een investering in je welzijn en relatie. De warme, bruisende 
                bubbels van een jacuzzi helpen bij het verlichten van spierspanning, verbeteren de doorbloeding 
                en zorgen voor diepe ontspanning.
              </p>

              <p>
                Moderne hotels begrijpen dat gasten op zoek zijn naar unieke ervaringen. Daarom vind je steeds 
                meer kamers met luxe badkamers uitgerust met twee-persoons jacuzzi's, regendouches en zelfs 
                sauna's. Sommige suites beschikken over een apart wellness gedeelte met panoramische uitzichten.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
                Populaire Bestemmingen voor Jacuzzi Hotels
              </h3>
              
              <p>
                <strong>Amsterdam</strong> staat bekend om zijn boutique hotels met designbadkamers en luxe 
                wellness faciliteiten. Voor een meer landelijke setting bieden provincies zoals 
                <strong>Gelderland</strong> en <strong>Limburg</strong> prachtige kasteel hotels en wellness 
                resorts omgeven door natuur.
              </p>

              <p>
                De <strong>Veluwe</strong> herbergt enkele van Nederland's meest luxueuze spa hotels, terwijl 
                de kustprovincies zoals <strong>Zeeland</strong> en <strong>Noord-Holland</strong> hotels bieden 
                met zeezicht en thalassotherapie. Zuid-Holland combineert stedelijke sophistication met 
                ontspanningsmogelijkheden in historische steden als Delft en Leiden.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
                Tips voor het Boeken van jouw Perfecte Hotel met Jacuzzi
              </h3>
              
              <p>
                Controleer altijd of de jacuzzi privé is op je kamer of gedeeld met andere gasten. Veel hotels 
                bieden verschillende opties: van intieme twee-persoons bubbelbaden tot luxe suites met complete 
                wellness ruimtes. Lees reviews van andere gasten om een goed beeld te krijgen van de kwaliteit 
                en netheid van de faciliteiten.
              </p>

              <p>
                Boek ruim van tevoren, vooral voor weekenden en feestdagen. De meest gewilde kamers met jacuzzi 
                zijn vaak als eerste uitverkocht. Overweeg een midweek verblijf voor betere beschikbaarheid en 
                vaak aantrekkelijkere tarieven. Veel hotels bieden arrangementen inclusief diner, wellness 
                behandelingen of champagne voor extra romantiek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-navy-900 text-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor jouw Perfecte Wellness Overnachting?
          </h2>
          <p className="text-xl text-brand-navy-200 mb-8 max-w-2xl mx-auto">
            Ontdek vandaag nog de meest romantische hotels met jacuzzi in Nederland. 
            Van luxe kastelen tot moderne wellness resorts - jouw droomverblijf wacht op je.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#filters" 
              className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
            >
              Zoek jouw hotel nu
            </a>
            <a 
              href="/contact" 
              className="border-2 border-brand-orange-600 text-brand-orange-600 hover:bg-brand-orange-600 hover:text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
            >
              Persoonlijk advies
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-brand-navy-800 rounded-xl p-6">
              <div className="text-2xl font-bold text-brand-orange-600 mb-2">250+</div>
              <div className="text-brand-navy-200">Beschikbare Hotels</div>
            </div>
            <div className="bg-brand-navy-800 rounded-xl p-6">
              <div className="text-2xl font-bold text-brand-orange-600 mb-2">4.8★</div>
              <div className="text-brand-navy-200">Gemiddelde Beoordeling</div>
            </div>
            <div className="bg-brand-navy-800 rounded-xl p-6">
              <div className="text-2xl font-bold text-brand-orange-600 mb-2">24/7</div>
              <div className="text-brand-navy-200">Klantenservice</div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TravelAgency',
            name: 'Hotels met Jacuzzi Nederland',
            description: 'Specialist in romantische hotels met jacuzzi en wellness overnachtingen in Nederland. Vind het perfecte hotel voor een onvergetelijke ervaring.',
            url: 'https://jacuzzihotels.nl',
            sameAs: [
              'https://facebook.com/jacuzzihotelsnl',
              'https://instagram.com/jacuzzihotelsnl'
            ],
            priceRange: '€100-€350',
            areaServed: {
              '@type': 'Country',
              name: 'Nederland'
            }
          })
        }}
      />
    </main>
  )
}
