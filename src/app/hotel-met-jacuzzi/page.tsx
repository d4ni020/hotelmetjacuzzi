import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, MapPin, Star, Users, Waves } from 'lucide-react'
import ScrollButton from '@/components/ScrollButton'

export const metadata: Metadata = {
  title: 'Hotel met Jacuzzi in Nederland | Beste Wellness Hotels & Deals',
  description: 'Ontdek de mooiste hotels met jacuzzi in Nederland. Van romantische wellness hotels tot luxe spa resorts met jacuzzi op kamer. Vergelijk prijzen en boek direct!',
  keywords: 'hotel met jacuzzi, wellness hotel met jacuzzi, romantisch hotel met jacuzzi, hotel met jacuzzi op kamer, spa hotel Nederland, wellness weekend',
  openGraph: {
    title: 'Hotel met Jacuzzi in Nederland | Beste Wellness Hotels & Deals',
    description: 'Ontdek de mooiste hotels met jacuzzi in Nederland. Van romantische wellness hotels tot luxe spa resorts met jacuzzi op kamer.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://jacuzzihotels.nl/hotel-met-jacuzzi',
  },
}

// Mock data for hotels
const mockHotels = [
  {
    id: 1,
    name: 'Van der Valk Hotel Amsterdam',
    slug: 'van-der-valk-amsterdam',
    city: 'Amsterdam',
    province: 'Noord-Holland',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=600&auto=format&fit=crop',
    description: 'Luxueus hotel in het hart van Amsterdam met elegante suites voorzien van private jacuzzi\'s.',
    priceRange: 'luxury',
    popular: true,
    rating: 4.5,
    features: ['Jacuzzi op kamer', 'Spa faciliteiten', 'Romantische setting']
  },
  {
    id: 2,
    name: 'Kasteel Bloemendal',
    slug: 'kasteel-bloemendal',
    city: 'Maastricht',
    province: 'Limburg',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop',
    description: 'Historisch kasteel met moderne wellness suites en luxe jacuzzi\'s.',
    priceRange: 'luxury',
    popular: false,
    rating: 4.7,
    features: ['Kasteel ambiance', 'Luxe jacuzzi\'s', 'Historische charme']
  },
  {
    id: 3,
    name: 'Olympic Hotel',
    slug: 'olympic-hotel',
    city: 'Amsterdam',
    province: 'Noord-Holland',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop',
    description: 'Stijlvol Olympic Hotel met luxe wellness faciliteiten en privé jacuzzi\'s.',
    priceRange: 'mid',
    popular: true,
    rating: 4.3,
    features: ['Centraal gelegen', 'Wellness center', 'Privé jacuzzi']
  },
  {
    id: 4,
    name: 'Fletcher Wellness Hotel',
    slug: 'fletcher-wellness-hotel',
    city: 'Arnhem',
    province: 'Gelderland',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop',
    description: 'Ontspanning pur sang in dit wellness hotel met jacuzzi kamers.',
    priceRange: 'mid',
    popular: false,
    rating: 4.2,
    features: ['Wellness focus', 'Natuur omgeving', 'Spa behandelingen']
  },
  {
    id: 5,
    name: 'Rotterdam Marina Hotel',
    slug: 'rotterdam-marina-hotel',
    city: 'Rotterdam',
    province: 'Zuid-Holland',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600&auto=format&fit=crop',
    description: 'Modern boutique hotel met uitzicht op de Maas en luxe suites met jacuzzi.',
    priceRange: 'luxury',
    popular: false,
    rating: 4.4,
    features: ['Waterzicht', 'Modern design', 'Jacuzzi suites']
  },
  {
    id: 6,
    name: 'Utrecht Central Wellness',
    slug: 'utrecht-central-wellness',
    city: 'Utrecht',
    province: 'Utrecht',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=600&auto=format&fit=crop',
    description: 'Stijlvol hotel in het centrum van Utrecht met privé jacuzzi\'s.',
    priceRange: 'mid',
    popular: false,
    rating: 4.1,
    features: ['Centraal Utrecht', 'Business friendly', 'Wellness kamers']
  },
]

export default function HotelMetJacuzziPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy-900 text-pure-white py-20 relative overflow-hidden">
        {/* Subtle SVG Background Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wave-pattern' patternUnits='userSpaceOnUse' width='80' height='80'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='1'%3E%3Cpath d='M0 40c20-20 40-20 60 0s40 20 60 0v40H0z'/%3E%3Cpath d='M20 20c20-20 40-20 60 0s40 20 60 0v40H20z'/%3E%3Ccircle cx='40' cy='40' r='15' fill='%23FFFFFF' opacity='0.1'/%3E%3Ccircle cx='40' cy='40' r='8' fill='%23FFFFFF' opacity='0.2'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23wave-pattern)'/%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hotel met jacuzzi in Nederland
            </h1>
            <p className="text-xl md:text-2xl text-brand-navy-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Welkom bij de ultieme collectie van <strong>hotels met jacuzzi</strong> in Nederland. 
              Ontdek romantische wellness hotels, luxe spa resorts en intieme verblijven met privé jacuzzi faciliteiten voor de perfecte ontspanningservaring.
            </p>
            <ScrollButton 
              targetId="hotel-lijst"
              className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Waves className="mr-3 w-6 h-6" />
              <span>Bekijk direct hotels met jacuzzi</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </ScrollButton>
          </div>
        </div>
      </section>

      {/* SEO Introduction */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-lg text-brand-navy-700 leading-relaxed mb-6">
              Een <strong>hotel met jacuzzi</strong> biedt de perfecte combinatie van luxe, ontspanning en romantiek. 
              Of je nu op zoek bent naar een romantisch weekendje weg, een wellness retreat of gewoon wilt genieten van 
              ultieme privacy en comfort, een <strong>wellness hotel met jacuzzi</strong> zorgt voor een onvergetelijke ervaring.
            </p>
            <p className="text-lg text-brand-navy-700 leading-relaxed mb-6">
              In Nederland vind je een prachtige selectie van <strong>romantische hotels met jacuzzi</strong>, 
              van historische kastelen en moderne stadshotels tot idyllische wellness resorts in de natuur. 
              Elk hotel biedt unieke faciliteiten, of het nu gaat om een jacuzzi op de kamer, spa behandelingen, 
              of uitgebreide wellness centra met sauna's en dampbaden.
            </p>
            <p className="text-lg text-brand-navy-700 leading-relaxed mb-8">
              <strong>Ontdek hieronder onze handpicked selectie van de beste hotels met jacuzzi in Nederland</strong> en 
              vind jouw perfecte wellness bestemming voor een onvergetelijk verblijf vol ontspanning en luxe.
            </p>
          </div>
        </div>
      </section>

      {/* Hotel Overview Section */}
      <section id="hotel-lijst" className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Populaire hotels met jacuzzi
            </h2>
            <p className="text-lg text-brand-navy-600 max-w-2xl mx-auto">
              Ontdek onze meest geliefde hotels met jacuzzi faciliteiten, geselecteerd op basis van gastenbeoordelingen en unieke wellness ervaringen.
            </p>
          </div>

          {/* Filter Section */}
          <div className="bg-pure-white rounded-2xl shadow-lg p-6 mb-12 border border-brand-navy-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select className="px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600">
                <option value="">Alle provincies</option>
                <option value="noord-holland">Noord-Holland</option>
                <option value="zuid-holland">Zuid-Holland</option>
                <option value="gelderland">Gelderland</option>
                <option value="limburg">Limburg</option>
                <option value="utrecht">Utrecht</option>
              </select>
              
              <select className="px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600">
                <option value="">Alle prijsklassen</option>
                <option value="budget">€100 - €150</option>
                <option value="mid">€150 - €250</option>
                <option value="luxury">€250+</option>
              </select>
              
              <select className="px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600">
                <option value="">Alle faciliteiten</option>
                <option value="jacuzzi-op-kamer">Jacuzzi op kamer</option>
                <option value="spa-center">Spa center</option>
                <option value="sauna">Sauna</option>
              </select>
            </div>
          </div>

          {/* Hotel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockHotels.map((hotel) => (
              <Link key={hotel.id} href={`/hotel/${hotel.slug}`} className="group">
                <article className="bg-pure-white rounded-2xl shadow-lg hover:shadow-xl border-2 border-brand-navy-200 hover:border-brand-orange-600 transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={hotel.image}
                      alt={`${hotel.name} - Jacuzzi hotel`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {hotel.popular && (
                      <div className="absolute top-3 left-3">
                        <div className="bg-brand-orange-600 text-pure-white rounded-lg px-2 py-1 shadow-lg">
                          <span className="text-xs font-bold uppercase">Meest geboekt deze maand</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <div className="bg-brand-navy-900 text-pure-white rounded-lg px-2 py-1 shadow-lg flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        <span className="text-xs font-semibold">{hotel.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-brand-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors duration-300">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center text-brand-navy-500 text-sm mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{hotel.city}, {hotel.province}</span>
                    </div>
                    <p className="text-brand-navy-600 mb-4 line-clamp-2 flex-1">
                      {hotel.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="bg-brand-navy-100 text-brand-navy-700 px-2 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      <span className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 w-full justify-center">
                        Bekijk hotel
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-brand-navy-900 hover:bg-brand-navy-800 text-pure-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
              Meer hotels laden
            </button>
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Ontdek meer hotels met jacuzzi
            </h2>
            <p className="text-lg text-brand-navy-600 max-w-2xl mx-auto">
              Verfijn je zoektocht naar de perfecte wellness ervaring met onze gespecialiseerde categorieën.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category 1 */}
            <Link href="/hotel-met-jacuzzi-op-kamer" className="group">
              <div className="bg-pure-white border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-brand-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-orange-600 transition-colors duration-300">
                  <Waves className="w-6 h-6 text-brand-orange-600 group-hover:text-pure-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors">
                  Hotels met jacuzzi op kamer
                </h3>
                <p className="text-brand-navy-600 mb-4">
                  Geniet van ultieme privacy met een jacuzzi direct op je hotelkamer. Perfect voor romantische momenten.
                </p>
                <span className="text-brand-orange-600 font-semibold group-hover:text-brand-orange-700">
                  Bekijk alle hotels →
                </span>
              </div>
            </Link>

            {/* Category 2 */}
            <Link href="/hotel-met-sauna-en-jacuzzi-op-kamer" className="group">
              <div className="bg-pure-white border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-brand-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-orange-600 transition-colors duration-300">
                  <Users className="w-6 h-6 text-brand-orange-600 group-hover:text-pure-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors">
                  Hotels met sauna en jacuzzi
                </h3>
                <p className="text-brand-navy-600 mb-4">
                  Complete wellness ervaring met zowel sauna als jacuzzi faciliteiten op je kamer of suite.
                </p>
                <span className="text-brand-orange-600 font-semibold group-hover:text-brand-orange-700">
                  Bekijk alle hotels →
                </span>
              </div>
            </Link>

            {/* Category 3 */}
            <Link href="/provincies" className="group">
              <div className="bg-pure-white border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-brand-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-orange-600 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-brand-orange-600 group-hover:text-pure-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors">
                  Hotels per provincie
                </h3>
                <p className="text-brand-navy-600 mb-4">
                  Ontdek jacuzzi hotels in jouw favoriete provincie, van Noord-Holland tot Limburg.
                </p>
                <span className="text-brand-orange-600 font-semibold group-hover:text-brand-orange-700">
                  Bekijk alle provincies →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Blocks */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Romantisch hotel met jacuzzi */}
            <div className="bg-pure-white rounded-2xl p-8 shadow-lg border border-brand-navy-200">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy-900 mb-6">
                Romantisch hotel met jacuzzi
              </h2>
              <p className="text-lg text-brand-navy-700 leading-relaxed mb-4">
                Een <strong>romantisch hotel met jacuzzi</strong> zorgt voor de perfecte setting voor een intiem weekendje weg met je partner. 
                Of je nu kiest voor een historisch kasteel, een boutique hotel in het centrum, of een wellness resort in de natuur - 
                de combinatie van luxe accommodatie en privé jacuzzi faciliteiten creëert een onvergetelijke romantische ervaring.
              </p>
              <p className="text-lg text-brand-navy-700 leading-relaxed mb-6">
                Nederlandse romantische hotels met jacuzzi bieden vaak extra services zoals champagne bij aankomst, 
                romantische dinerpakketten, couples massage treatments en prachtig ingerichte suites met kaarsen en rozenblaadjes. 
                Deze hotels begrijpen dat details het verschil maken tussen een gewoon verblijf en een droomweekend.
              </p>
              <Link href="/romantisch-hotel-met-jacuzzi" className="text-brand-orange-600 hover:text-brand-orange-700 font-semibold">
                Ontdek romantische hotels met jacuzzi →
              </Link>
            </div>

            {/* Wellness hotel met jacuzzi in Nederland */}
            <div className="bg-pure-white rounded-2xl p-8 shadow-lg border border-brand-navy-200">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy-900 mb-6">
                Wellness hotel met jacuzzi in Nederland
              </h2>
              <p className="text-lg text-brand-navy-700 leading-relaxed mb-4">
                Nederland telt talloze <strong>wellness hotels met jacuzzi</strong> die zich specialiseren in ontspanning en gezondheid. 
                Deze hotels combineren moderne jacuzzi faciliteiten met uitgebreide spa centra, sauna's, stoombaden en professionele behandelingen. 
                Van de Veluwe tot de Limburgse heuvels, overal vind je wellness resorts die focussen op totale ontspanning.
              </p>
              <p className="text-lg text-brand-navy-700 leading-relaxed mb-6">
                Een goed <strong>wellness hotel met jacuzzi in Nederland</strong> biedt niet alleen luxe faciliteiten, maar ook gezonde cuisine, 
                yoga en meditatie sessies, en vaak prachtige natuurlijke omgevingen die bijdragen aan je wellness ervaring. 
                Deze hotels zijn perfect voor detox weekends, stress-relief retreats of gewoon om je batterij weer op te laden.
              </p>
              <Link href="/wellness-hotel-met-jacuzzi" className="text-brand-orange-600 hover:text-brand-orange-700 font-semibold">
                Bekijk wellness hotels →
              </Link>
            </div>

            {/* Goedkoop hotel met jacuzzi */}
            <div className="bg-pure-white rounded-2xl p-8 shadow-lg border border-brand-navy-200">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy-900 mb-6">
                Goedkoop hotel met jacuzzi
              </h2>
              <p className="text-lg text-brand-navy-700 leading-relaxed mb-4">
                Ook met een kleinere budget kun je genieten van een <strong>goedkoop hotel met jacuzzi</strong>. 
                Veel Nederlandse hotels bieden betaalbare kamers met jacuzzi faciliteiten, vooral buiten het hoogseizoen of in mindere bekende bestemmingen. 
                Van budget vriendelijke Fletcher hotels tot lokale family-run accommodaties - luxe hoeft niet altijd duur te zijn.
              </p>
              <p className="text-lg text-brand-navy-700 leading-relaxed mb-6">
                Tips voor het vinden van een <strong>goedkoop hotel met jacuzzi</strong>: boek vroeg of last-minute, kijk naar weekdag aanbiedingen, 
                kies voor hotels buiten de grote steden, en vergelijk altijd verschillende boekingsplatforms. 
                Veel hotels bieden ook packages die wellness, diner en activiteiten combineren voor een betere prijs-kwaliteit verhouding.
              </p>
              <Link href="/goedkoop-hotel-met-jacuzzi" className="text-brand-orange-600 hover:text-brand-orange-700 font-semibold">
                Vind budget vriendelijke opties →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 text-center mb-12">
            Veelgestelde vragen over hotels met jacuzzi
          </h2>
          
          <div className="space-y-8">
            <div className="bg-light-gray rounded-2xl p-6 border border-brand-navy-200">
              <h3 className="text-xl font-bold text-brand-navy-900 mb-4">
                Wat kost een hotel met jacuzzi in Nederland?
              </h3>
              <p className="text-brand-navy-700 leading-relaxed">
                De prijs voor een hotel met jacuzzi varieert sterk, van ongeveer €100-150 per nacht voor budget opties 
                tot €300+ voor luxe spa resorts. Gemiddeld betaal je €150-250 per nacht voor een goed hotel met jacuzzi faciliteiten. 
                Prijzen zijn afhankelijk van locatie, seizoen, faciliteiten en het type jacuzzi (op kamer vs. gedeeld spa area).
              </p>
            </div>

            <div className="bg-light-gray rounded-2xl p-6 border border-brand-navy-200">
              <h3 className="text-xl font-bold text-brand-navy-900 mb-4">
                Zijn er goedkope hotels met jacuzzi?
              </h3>
              <p className="text-brand-navy-700 leading-relaxed">
                Ja, er zijn zeker betaalbare opties! Kijk naar Fletcher hotels, lokale wellness accommodaties, 
                en hotels buiten de grote steden. Ook kun je besparen door weekdag boekingen, vroegboekkorting, 
                of last-minute deals. Sommige hotels bieden jacuzzi toegang in hun spa center in plaats van op de kamer, 
                wat vaak goedkoper is.
              </p>
            </div>

            <div className="bg-light-gray rounded-2xl p-6 border border-brand-navy-200">
              <h3 className="text-xl font-bold text-brand-navy-900 mb-4">
                Zijn hotels met jacuzzi geschikt voor een romantisch weekendje weg?
              </h3>
              <p className="text-brand-navy-700 leading-relaxed">
                Absoluut! Hotels met jacuzzi zijn perfect voor romantische weekendjes. De intimiteit van een privé jacuzzi, 
                gecombineerd met luxe hotelkamers en vaak romantische extras zoals champagne, chocolade, en couples massages, 
                maken het ideaal voor koppels. Veel hotels bieden speciale romantische packages aan.
              </p>
            </div>

            <div className="bg-light-gray rounded-2xl p-6 border border-brand-navy-200">
              <h3 className="text-xl font-bold text-brand-navy-900 mb-4">
                Wat is het verschil tussen een jacuzzi op de kamer en in het spa center?
              </h3>
              <p className="text-brand-navy-700 leading-relaxed">
                Een jacuzzi op de kamer biedt complete privacy en kun je gebruiken wanneer je wilt. 
                Een jacuzzi in het spa center is vaak groter en luxer, maar moet gedeeld worden met andere gasten 
                en heeft vaste openingstijden. Voor romantiek kies je een jacuzzi op de kamer, 
                voor de ultieme wellness ervaring kan een spa center jacuzzi beter zijn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Afsluiter */}
      <section className="py-16 bg-brand-navy-900 text-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor jouw perfecte jacuzzi hotel ervaring?
          </h2>
          <p className="text-xl text-brand-navy-100 mb-8 leading-relaxed">
            Klaar om te genieten van een jacuzzi in je hotel? Ontdek nu het volledige aanbod van Nederland's beste 
            wellness accommodaties en boek jouw ideale verblijf vol luxe, ontspanning en romantiek.
          </p>
          <Link 
            href="/hotels"
            className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <Waves className="mr-3 w-6 h-6" />
            <span>Bekijk alle hotels met jacuzzi</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Wat kost een hotel met jacuzzi in Nederland?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "De prijs voor een hotel met jacuzzi varieert van ongeveer €100-150 per nacht voor budget opties tot €300+ voor luxe spa resorts. Gemiddeld betaal je €150-250 per nacht."
                }
              },
              {
                "@type": "Question", 
                "name": "Zijn er goedkope hotels met jacuzzi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja, er zijn betaalbare opties beschikbaar. Kijk naar Fletcher hotels, lokale wellness accommodaties, en hotels buiten grote steden. Ook weekdag boekingen en vroegboekkorting kunnen helpen besparen."
                }
              },
              {
                "@type": "Question",
                "name": "Zijn hotels met jacuzzi geschikt voor een romantisch weekendje weg?", 
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absoluut! Hotels met jacuzzi zijn perfect voor romantische weekendjes door de intimiteit van privé jacuzzi's, luxe kamers en vaak romantische extras zoals champagne en couples massages."
                }
              },
              {
                "@type": "Question",
                "name": "Wat is het verschil tussen een jacuzzi op de kamer en in het spa center?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Een jacuzzi op de kamer biedt complete privacy en 24/7 toegang. Een spa center jacuzzi is vaak groter en luxer, maar gedeeld met andere gasten met vaste openingstijden."
                }
              }
            ]
          })
        }}
      />

      {/* Additional Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Hotel met Jacuzzi in Nederland",
            "description": "Ontdek de mooiste hotels met jacuzzi in Nederland. Van romantische wellness hotels tot luxe spa resorts met jacuzzi op kamer.",
            "url": "https://jacuzzihotels.nl/hotel-met-jacuzzi",
            "hasPart": mockHotels.map(hotel => ({
              "@type": "Hotel",
              "name": hotel.name,
              "description": hotel.description,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": hotel.city,
                "addressRegion": hotel.province,
                "addressCountry": "NL"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": hotel.rating,
                "bestRating": "5"
              }
            }))
          })
        }}
      />
    </div>
  )
}
