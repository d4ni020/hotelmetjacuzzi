import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hotelkamers met Jacuzzi in Nederland | Hotelmetjacuzzi.net',
  description: 'Ontdek de mooiste hotelkamers met jacuzzi in Nederland. Luxe suites en wellness kamers met privé jacuzzi voor de ultieme ontspanning. Boek nu vanaf €149 per nacht!',
  keywords: 'hotelkamer met jacuzzi, jacuzzi op kamer, luxe suite met jacuzzi, romantische jacuzzi kamer, wellness kamer',
  alternates: {
    canonical: '/hotelkamer-met-jacuzzi',
  },
  openGraph: {
    title: 'Hotelkamers met Jacuzzi in Nederland',
    description: 'Geniet van luxe en ontspanning in de mooiste hotelkamers met privé jacuzzi. Perfect voor een romantisch verblijf of wellness weekend.',
    url: '/hotelkamer-met-jacuzzi',
    type: 'website',
    images: [{
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop',
      width: 1600,
      height: 900,
      alt: 'Hotelkamer met jacuzzi in Nederland',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotelkamers met Jacuzzi in Nederland',
    description: 'Geniet van luxe en ontspanning in de mooiste hotelkamers met privé jacuzzi. Perfect voor een romantisch verblijf of wellness weekend.',
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop'],
  },
}

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

// SVG Pattern Component
const SVGPattern = () => (
  <div className="absolute inset-0 opacity-5">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="jacuzzi-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="2" fill="#1e3a8a" />
          <circle cx="15" cy="15" r="1" fill="#1e3a8a" />
          <circle cx="45" cy="45" r="1" fill="#1e3a8a" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#jacuzzi-pattern)" />
    </svg>
  </div>
)

// Room Card Component
const RoomCard = ({ room }: { room: Room }) => (
  <div className="bg-pure-white rounded-xl shadow-lg border border-brand-navy-200 overflow-hidden hover:shadow-xl hover:border-brand-orange-600 transition-all duration-300 h-full flex flex-col">
    {/* Room Image */}
    <div className="relative h-48 sm:h-56">
      <Image
        src={room.image}
        alt={`Hotelkamer met jacuzzi in ${room.city} - ${room.hotelName}`}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Price Badge */}
      <div className="absolute top-4 right-4 bg-brand-orange-600 text-pure-white px-3 py-1 rounded-full text-sm font-semibold">
        {room.priceFrom}
      </div>
    </div>
    
    {/* Room Content */}
    <div className="p-4 sm:p-6 flex-1 flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-brand-navy-900 mb-2 line-clamp-2">
          {room.name}
        </h3>
        <p className="text-brand-navy-600 font-medium mb-1">
          {room.hotelName}
        </p>
        <p className="text-brand-navy-500 text-sm">
          {room.city}, {room.province}
        </p>
      </div>

      {/* Room Highlights */}
      <div className="mb-6 flex-1">
        {Array.isArray(room.description) ? (
          <ul className="space-y-2">
            {room.description.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-brand-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-brand-navy-700 text-sm">{highlight}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-brand-navy-700 text-sm leading-relaxed">{room.description}</p>
        )}
      </div>

      {/* Rating and CTA */}
      <div className="mt-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="flex text-brand-orange-600 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < Math.floor(room.rating) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-brand-navy-600">{room.rating}</span>
          </div>
        </div>
        
        <Link 
          href={`/out/${room.id}`}
          className="w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg text-center block"
        >
          Bekijk beschikbaarheid →
        </Link>
      </div>
    </div>
  </div>
)

export default function HotelkamerMetJacuzziPage() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Section */}
      <section className="relative bg-brand-navy-900 text-pure-white py-20">
        <SVGPattern />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hotelkamers met <span className="text-brand-orange-600">Jacuzzi</span> in Nederland
            </h1>
            <p className="text-xl text-brand-navy-200 max-w-3xl mx-auto leading-relaxed">
              Ontdek de mooiste hotelkamers met privé jacuzzi voor de ultieme ontspanning. 
              Van romantische suites tot luxe wellness kamers - vind jouw perfecte jacuzzi ervaring.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Overview Section */}
      <section className="py-16 bg-light-gray">
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

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {jacuzziRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          {/* Related Links Section */}
          <div className="mt-16 bg-pure-white rounded-2xl p-8 shadow-lg border border-brand-navy-200">
            <h3 className="text-2xl font-bold text-brand-navy-900 mb-6 text-center">
              Meer Hotelkamers met Jacuzzi
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link 
                href="/goedkoop-hotel-met-jacuzzi"
                className="group bg-brand-navy-50 hover:bg-brand-navy-100 border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-xl font-bold text-brand-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors">
                  Goedkope hotelkamer met jacuzzi
                </h4>
                <p className="text-brand-navy-600 mb-4">
                  Budgetvriendelijke jacuzzi kamers zonder concessies aan kwaliteit
                </p>
                <div className="text-brand-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Bekijk budget opties →
                </div>
              </Link>
              
              <Link 
                href="/romantisch-hotel-met-jacuzzi"
                className="group bg-brand-navy-50 hover:bg-brand-navy-100 border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                <div className="text-4xl mb-4">💕</div>
                <h4 className="text-xl font-bold text-brand-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors">
                  Luxe hotelkamer met jacuzzi
                </h4>
                <p className="text-brand-navy-600 mb-4">
                  Romantische suites en luxe wellness kamers voor speciale momenten
                </p>
                <div className="text-brand-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Bekijk luxe suites →
                </div>
              </Link>
              
              <Link 
                href="/hotelkamer-met-jacuzzi-en-sauna"
                className="group bg-brand-navy-50 hover:bg-brand-navy-100 border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                <div className="text-4xl mb-4">🏖️</div>
                <h4 className="text-xl font-bold text-brand-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors">
                  Hotelkamer met jacuzzi aan zee
                </h4>
                <p className="text-brand-navy-600 mb-4">
                  Wellness kamers met jacuzzi en sauna voor complete ontspanning
                </p>
                <div className="text-brand-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Bekijk wellness suites →
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy-900 mb-8 text-center">
            Veelgestelde Vragen over Hotelkamers met Jacuzzi
          </h2>
          
          <div className="space-y-6">
            <div className="bg-light-gray rounded-xl p-6">
              <h3 className="text-xl font-semibold text-brand-navy-900 mb-3">
                Wat kost een hotelkamer met jacuzzi gemiddeld?
              </h3>
              <p className="text-brand-navy-700">
                Hotelkamers met jacuzzi variëren in prijs van €149 tot €400+ per nacht, afhankelijk van locatie, faciliteiten en seizoen. 
                Centrum locaties en luxe suites zijn doorgaans duurder dan hotels buiten de stad.
              </p>
            </div>
            
            <div className="bg-light-gray rounded-xl p-6">
              <h3 className="text-xl font-semibold text-brand-navy-900 mb-3">
                Zijn alle jacuzzi's op de kamer privé?
              </h3>
              <p className="text-brand-navy-700">
                Ja, alle hotelkamers met jacuzzi op onze website hebben een privé jacuzzi op de kamer zelf. 
                Dit garandeert privacy en comfort tijdens uw verblijf.
              </p>
            </div>
            
            <div className="bg-light-gray rounded-xl p-6">
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
