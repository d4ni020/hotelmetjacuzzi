import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HotelCard from '@/components/HotelCard'

// Hotel interface
interface Hotel {
  id: number
  name: string
  slug: string
  city?: string
  province?: string
  price_range: string
  rating: number
  description: string
  image_url: string
  facilities: string[]
  city_id?: number
  province_id?: number
  affiliate_link: string
  created_at: string
}

// Mock data voor goedkope jacuzzi hotels
const budgetJacuzziHotels: Hotel[] = [
  {
    id: 101,
    name: "Hotel-Restaurant Amersfoort",
    slug: "hotel-restaurant-amersfoort",
    description: "Gezellig hotel met persoonlijke service en comfortabele jacuzzi kamers in het hart van Amersfoort. Uitstekende prijs-kwaliteitverhouding.",
    province_id: 5,
    city_id: 39,
    price_range: "Vanaf €89",
    facilities: ["Jacuzzi kamers", "Restaurant", "Gratis WiFi", "Parkeren"],
    affiliate_link: "https://booking.com/hotel-restaurant-amersfoort",
    image_url: "/images/Hotel-Restaurant Amersfoort.jpg",
    rating: 4.2,
    created_at: "2024-01-01"
  },
  {
    id: 102,
    name: "Van der Valk Goes",
    slug: "van-der-valk-goes",
    description: "Betaalbaar Van der Valk hotel in Zeeland met moderne jacuzzi faciliteiten. Perfect voor een budgetvriendelijk wellness weekend.",
    province_id: 11,
    city_id: 19,
    price_range: "Vanaf €95",
    facilities: ["Jacuzzi kamers", "Restaurant", "Bar", "Fitness"],
    affiliate_link: "https://booking.com/van-der-valk-goes",
    image_url: "/images/Van der Valk - Goes.jpg",
    rating: 4.3,
    created_at: "2024-01-01"
  },
  {
    id: 103,
    name: "Hotel de Tabaksplant",
    slug: "hotel-de-tabaksplant",
    description: "Karakteristiek boetiekhotel met unieke historie en betaalbare jacuzzi kamers. Authentieke sfeer tegen een vriendelijke prijs.",
    province_id: 5,
    city_id: 39,
    price_range: "Vanaf €99",
    facilities: ["Jacuzzi kamers", "Historisch", "Restaurant", "Unieke sfeer"],
    affiliate_link: "https://booking.com/hotel-de-tabaksplant",
    image_url: "/images/Hotel de Tabaksplant .jpg",
    rating: 4.1,
    created_at: "2024-01-01"
  },
  {
    id: 104,
    name: "Hotel-Restaurant Heiloo",
    slug: "hotel-restaurant-heiloo",
    description: "Gastvrij hotel in Noord-Holland met moderne jacuzzi faciliteiten en uitstekende keuken. Geweldige prijs-kwaliteitverhouding.",
    province_id: 2,
    city_id: 23,
    price_range: "Vanaf €105",
    facilities: ["Jacuzzi kamers", "Restaurant", "Gastvrijheid", "Natuur"],
    affiliate_link: "https://booking.com/hotel-restaurant-heiloo",
    image_url: "/images/Hotel-Restaurant Heiloo.jpg",
    rating: 4.4,
    created_at: "2024-01-01"
  },
  {
    id: 105,
    name: "Van der Valk De Bilt - Utrecht",
    slug: "van-der-valk-de-bilt-utrecht",
    description: "Modern Van der Valk hotel nabij Utrecht met comfortabele jacuzzi kamers tegen een scherpe prijs. Ideaal voor citytrips.",
    province_id: 5,
    city_id: 38,
    price_range: "Vanaf €109",
    facilities: ["Jacuzzi kamers", "Utrecht nabij", "Restaurant", "Business"],
    affiliate_link: "https://booking.com/van-der-valk-de-bilt-utrecht",
    image_url: "/images/Van der Valk De Bilt - Utrecht.jpg",
    rating: 4.3,
    created_at: "2024-01-01"
  },
  {
    id: 106,
    name: "Kloosterhotel Willibrordhaeghe",
    slug: "kloosterhotel-willibrordhaeghe",
    description: "Uniek kloosterhotel met historische charme en betaalbare jacuzzi kamers. Rust en sereniteit in een authentieke setting.",
    province_id: 6,
    city_id: 33,
    price_range: "Vanaf €115",
    facilities: ["Historisch klooster", "Jacuzzi kamers", "Wellness", "Rustig"],
    affiliate_link: "https://booking.com/kloosterhotel-willibrordhaeghe",
    image_url: "/images/Kloosterhotel Willibrordhaeghe.jpg",
    rating: 4.5,
    created_at: "2024-01-01"
  },
  {
    id: 107,
    name: "Van der Valk Tilburg",
    slug: "van-der-valk-tilburg",
    description: "Centraal gelegen hotel in Tilburg met moderne jacuzzi kamers en uitstekende voorzieningen. Perfecte prijs-kwaliteitverhouding.",
    province_id: 6,
    city_id: 30,
    price_range: "Vanaf €119",
    facilities: ["Jacuzzi kamers", "Centrum", "Restaurant", "Parking"],
    affiliate_link: "https://booking.com/van-der-valk-tilburg",
    image_url: "/images/Van der Valk Tilburg.jpg",
    rating: 4.2,
    created_at: "2024-01-01"
  },
  {
    id: 108,
    name: "Van der Valk Akersloot",
    slug: "van-der-valk-akersloot",
    description: "Rustig gelegen hotel nabij Amsterdam met moderne wellness faciliteiten en jacuzzi kamers tegen een goede prijs.",
    province_id: 2,
    city_id: 20,
    price_range: "Vanaf €125",
    facilities: ["Jacuzzi kamers", "Wellness", "Amsterdam nabij", "Rustig"],
    affiliate_link: "https://booking.com/van-der-valk-akersloot",
    image_url: "/images/Van der Valk Akersloot.jpg",
    rating: 4.4,
    created_at: "2024-01-01"
  },
  {
    id: 109,
    name: "Van der Valk Middelburg",
    slug: "van-der-valk-middelburg",
    description: "Modern hotel in historisch Middelburg met wellness faciliteiten en jacuzzi kamers. Ideaal voor cultuur en ontspanning.",
    province_id: 11,
    city_id: 18,
    price_range: "Vanaf €129",
    facilities: ["Jacuzzi kamers", "Historisch centrum", "Wellness", "Cultuur"],
    affiliate_link: "https://booking.com/van-der-valk-middelburg",
    image_url: "/images/Van der Valk - Goes.jpg",
    rating: 4.3,
    created_at: "2024-01-01"
  },
  {
    id: 110,
    name: "Van der Valk Nijmegen",
    slug: "van-der-valk-nijmegen",
    description: "Comfortabel hotel in Nijmegen met intieme jacuzzi kamers en uitstekende faciliteiten. Perfecte uitvalsbasis voor Gelderland.",
    province_id: 3,
    city_id: 9,
    price_range: "Vanaf €135",
    facilities: ["Jacuzzi kamers", "Restaurant", "Bar", "Gelderland"],
    affiliate_link: "https://booking.com/van-der-valk-nijmegen",
    image_url: "/images/Van der Valk Amersfoort.jpeg",
    rating: 4.2,
    created_at: "2024-01-01"
  },
  {
    id: 108,
    name: "Stadshotel Den Haag",
    slug: "stadshotel-den-haag",
    description: "Modern stadshotel in Den Haag met comfortabele wellness kamers en jacuzzi faciliteiten. Uitstekende uitvalsbasis voor het verkennen van de hofstad.",
    province_id: 4,
    city_id: 15,
    price_range: "Vanaf €139",
    facilities: ["Wellness jacuzzi", "Fitness center", "Restaurant", "Centrum"],
    affiliate_link: "https://booking.com/stadshotel-den-haag",
    image_url: "/images/Stadshotel Den Haag.jpg",
    rating: 4.2,
    created_at: "2024-01-01"
  },
  {
    id: 109,
    name: "Van der Valk Sassenheim-Leiden",
    slug: "van-der-valk-sassenheim-leiden",
    description: "Comfortabel Van der Valk hotel nabij Leiden met moderne wellness faciliteiten en jacuzzi kamers. Ideaal voor zowel zakelijke als leisure gasten.",
    province_id: 4,
    city_id: 40,
    price_range: "Vanaf €149",
    facilities: ["Wellness jacuzzi", "Fitness", "Restaurant", "Bowling"],
    affiliate_link: "https://booking.com/van-der-valk-sassenheim",
    image_url: "/images/Van der Valk Hotel Sassenheim - Leiden 2020.jpg",
    rating: 4.1,
    created_at: "2024-01-01"
  },
  {
    id: 110,
    name: "Van der Valk Ridderkerk",
    slug: "van-der-valk-ridderkerk",
    description: "Centraal gelegen Van der Valk hotel in Ridderkerk met jacuzzi kamers en uitstekende faciliteiten. Perfect voor zowel business als leisure.",
    province_id: 4,
    city_id: 44,
    price_range: "Vanaf €139",
    facilities: ["Jacuzzi kamers", "Centraal gelegen", "Restaurant", "Business"],
    affiliate_link: "https://booking.com/van-der-valk-ridderkerk",
    image_url: "/images/Van der Valk Ridderkerk.jpg",
    rating: 4.1,
    created_at: "2024-01-01"
  },
  {
    id: 111,
    name: "Van der Valk Den Haag - Nootdorp",
    slug: "van-der-valk-den-haag-nootdorp",
    description: "Comfortabel Van der Valk hotel in Nootdorp met moderne wellness kamers en jacuzzi faciliteiten. Ideale uitvalsbasis voor Den Haag en omgeving.",
    province_id: 4,
    city_id: 43,
    price_range: "Vanaf €149",
    facilities: ["Wellness jacuzzi", "Modern design", "Restaurant", "Bar"],
    affiliate_link: "https://booking.com/van-der-valk-nootdorp",
    image_url: "/images/Van der Valk Den Haag - Nootdorp.jpg",
    rating: 4.2,
    created_at: "2024-01-01"
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

export const metadata: Metadata = {
  title: 'Goedkope Hotels met Jacuzzi op de Kamer in Nederland | Hotelmetjacuzzi.net',
  description: 'Ontdek de beste goedkope hotels met jacuzzi in Nederland. Luxe en ontspanning zonder dat het je een fortuin kost. Boek nu vanaf €89 per nacht!',
  keywords: 'goedkoop hotel met jacuzzi, budgetvriendelijk jacuzzi hotel, jacuzzi op de kamer goedkoop, budget wellness hotel',
  alternates: {
    canonical: '/goedkoop-hotel-met-jacuzzi',
  },
  openGraph: {
    title: 'Goedkope Hotels met Jacuzzi op de Kamer in Nederland',
    description: 'Geniet van luxe en ontspanning zonder dat het je een fortuin kost. Hier vind je de beste budgetvriendelijke jacuzzi hotels.',
    url: '/goedkoop-hotel-met-jacuzzi',
    type: 'website',
    images: [{
      url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop',
      width: 1600,
      height: 900,
      alt: 'Goedkoop hotel met jacuzzi',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goedkope Hotels met Jacuzzi op de Kamer in Nederland',
    description: 'Geniet van luxe en ontspanning zonder dat het je een fortuin kost. Hier vind je de beste budgetvriendelijke jacuzzi hotels.',
    images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop'],
  },
}

export default function GoedkoopHotelMetJacuzziPage() {
  const badges = [
    "Budgettip",
    "Beste prijs/kwaliteit", 
    "Onder €120 p/nacht",
    "Budgettip",
    "Beste prijs/kwaliteit",
    "Onder €120 p/nacht",
    "Budgettip",
    "Beste prijs/kwaliteit",
    "Onder €120 p/nacht",
    "Budgettip"
  ]

  // Voeg budget badge toe aan hotels
  const budgetJacuzziHotelsWithBadges = budgetJacuzziHotels.map((hotel, index) => ({
    ...hotel,
    budgetBadge: badges[index]
  }))

  return (
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
                  <li className="text-pure-white font-semibold">Goedkoop Hotel met Jacuzzi</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Goedkope hotels met jacuzzi op de kamer in Nederland
              </h1>
              <p className="text-xl md:text-2xl text-brand-navy-200 mb-8 leading-relaxed">
                Geniet van luxe en ontspanning zonder dat het je een fortuin kost. 
                Hier vind je de beste budgetvriendelijke jacuzzi hotels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#hotels"
                  className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Bekijk deals →
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop"
                alt="Goedkoop hotel met jacuzzi"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange-600 text-pure-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">Vanaf €89</div>
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
              Luxe hoeft niet duur te zijn
            </h2>
            <div className="bg-brand-navy-50 rounded-2xl p-8 shadow-lg border border-brand-navy-200">
              <div className="prose prose-lg max-w-none text-brand-navy-700">
                <p className="mb-6 leading-relaxed">
                  Een <strong>goedkoop hotel met jacuzzi</strong> vinden in Nederland is makkelijker dan je denkt. 
                  Veel mensen denken dat wellness en luxe automatisch duur zijn, maar dat hoeft helemaal niet het geval te zijn. 
                  Met de juiste tips en een beetje planning kun je genieten van een <strong>budgetvriendelijk jacuzzi hotel</strong> 
                  zonder in te leveren op comfort en ontspanning.
                </p>
                
                <p className="mb-6 leading-relaxed">
                  De voordelen van slim boeken zijn enorm. Door <strong>midweek te boeken</strong> in plaats van in het weekend, 
                  kun je vaak 30-40% besparen op je verblijf. Ook het kiezen voor periodes buiten het hoogseizoen 
                  of last-minute boekingen kunnen je flink wat geld schelen. Een <strong>jacuzzi op de kamer goedkoop</strong> 
                  krijgen is dus zeker mogelijk met de juiste strategie.
                </p>
                
                <p className="mb-6 leading-relaxed">
                  Onze selectie van budgetvriendelijke jacuzzi hotels bewijst dat je niet veel hoeft uit te geven voor een 
                  luxe ervaring. Van karakteristieke boetiekhotels tot moderne Van der Valk locaties - er is voor elke 
                  smaak en elk budget wel iets te vinden. Alle hotels in onze lijst bieden uitstekende prijs-kwaliteitverhouding 
                  en zijn getest op comfort, service en natuurlijk de kwaliteit van hun wellness faciliteiten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 10 Budget Hotels Section */}
      <section id="hotels" className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Top 10 goedkope jacuzzi hotels
            </h2>
            <p className="text-lg text-brand-navy-600">
              Onze selectie van de beste budgetvriendelijke hotels met jacuzzi op de kamer
            </p>
          </div>
          
          <div className="space-y-6">
            {budgetJacuzziHotelsWithBadges.map((hotel, index) => (
              <div key={hotel.id} className="bg-pure-white rounded-2xl shadow-lg border-2 border-brand-navy-200 overflow-hidden hover:shadow-xl hover:border-brand-orange-600 transition-all duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 h-48 lg:h-auto relative">
                    <Image
                      src={hotel.image_url}
                      alt={`${hotel.name} - Goedkoop jacuzzi hotel`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="bg-brand-orange-600 text-pure-white rounded-lg px-2 py-1 shadow-lg">
                        <span className="text-xs font-bold uppercase">{badges[index]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3 p-6 flex flex-col lg:flex-row lg:items-center">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="bg-brand-navy-900 text-pure-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                          #{index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-brand-navy-900 mb-1">{hotel.name}</h3>
                          <p className="text-brand-navy-500 text-sm mb-3">
                            {hotel.facilities.includes("Amsterdam nabij") ? "Amsterdam nabij" : 
                             hotel.facilities.includes("Utrecht nabij") ? "Utrecht nabij" :
                             hotel.facilities.includes("Historisch centrum") ? "Historisch centrum" :
                             hotel.facilities.includes("Centrum") ? "Centrum locatie" : "Nederland"}
                          </p>
                          <p className="text-brand-navy-600 leading-relaxed line-clamp-2">
                            {hotel.description}
                          </p>
                          <div className="flex items-center mt-3 space-x-4">
                            <span className="text-lg font-bold text-brand-navy-900">{hotel.price_range}</span>
                            <span className="text-sm text-brand-orange-600 font-semibold">★ {hotel.rating}/5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-4 w-full lg:w-auto">
                      <Link 
                        href={`/api/out/${hotel.id}`}
                        className="block text-center lg:inline-block bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full lg:w-auto"
                      >
                        Bekijk prijs bij Booking.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & Tricks Section */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Zo vind je een goedkoop hotel met jacuzzi
            </h2>
            <p className="text-lg text-brand-navy-600">
              Praktische tips om te besparen op je wellness verblijf
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TipCard
              icon="📅"
              title="Boek doordeweeks"
              description="Ga van zondag tot donderdag en bespaar vaak 30% of meer op je verblijf. Weekenden zijn altijd duurder."
            />
            <TipCard
              icon="🏞️"
              title="Kies net buiten de stad"
              description="Hotels net buiten grote steden bieden meer ruimte en lagere prijzen, vaak met gratis parkeren."
            />
            <TipCard
              icon="⚡"
              title="Ga voor last-minute"
              description="Boek 1-2 weken van tevoren voor de beste last-minute deals en pakkende aanbiedingen."
            />
            <TipCard
              icon="🎁"
              title="Vergelijk arrangementen"
              description="Kijk naar complete pakketten met diner of massage - vaak betere prijs-kwaliteitverhouding."
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
                Alles wat je wilt weten over goedkope jacuzzi hotels
              </p>
            </div>
            <div className="bg-pure-white rounded-2xl shadow-lg p-8 border border-brand-navy-200 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Zijn goedkope hotels met jacuzzi wel goed onderhouden?</h3>
                <p className="text-brand-navy-700 leading-relaxed">
                  Absoluut! Alle hotels in onze selectie worden regelmatig gecontroleerd op kwaliteit en hygiëne. 
                  Goedkoop betekent niet slecht - het gaat om slimme keuzes en efficiënte bedrijfsvoering.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Wat kost een goedkoop jacuzzi hotel gemiddeld per nacht?</h3>
                <p className="text-brand-navy-700 leading-relaxed">
                  Onze budgetvriendelijke selectie start vanaf €89 per nacht en gaat tot ongeveer €135. 
                  Dit is significant goedkoper dan luxe wellness resorts die vaak €200+ per nacht kosten.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Wat is het verschil tussen budget en luxe jacuzzi hotels?</h3>
                <p className="text-brand-navy-700 leading-relaxed">
                  Budget hotels focussen op de essentials: een comfortabele kamer met jacuzzi en goede service. 
                  Luxe hotels bieden extra's zoals spa treatments, fine dining en premium amenities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy-900 mb-4">
              Ontdek meer jacuzzi hotels
            </h2>
            <p className="text-lg text-brand-navy-600">
              Bekijk ook onze andere selecties voor de perfecte wellness ervaring
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/romantisch-hotel-met-jacuzzi"
              className="group bg-brand-navy-50 hover:bg-brand-navy-100 border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              <div className="text-4xl mb-4">💕</div>
              <h3 className="text-xl font-bold text-brand-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors">
                Romantische jacuzzi hotels
              </h3>
              <p className="text-brand-navy-600 mb-4">
                Perfect voor koppels die willen genieten van een romantisch verblijf
              </p>
              <div className="text-brand-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                Bekijk romantische hotels →
              </div>
            </Link>
            
            <Link 
              href="/wellness-hotel-met-jacuzzi"
              className="group bg-brand-navy-50 hover:bg-brand-navy-100 border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-bold text-brand-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors">
                Wellness jacuzzi hotels
              </h3>
              <p className="text-brand-navy-600 mb-4">
                Complete wellness ervaring met spa, sauna en uitgebreide faciliteiten
              </p>
              <div className="text-brand-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                Ontdek wellness hotels →
              </div>
            </Link>
            
            <Link 
              href="/hotel-met-jacuzzi"
              className="group bg-brand-navy-50 hover:bg-brand-navy-100 border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-bold text-brand-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors">
                Alle hotels met jacuzzi
              </h3>
              <p className="text-brand-navy-600 mb-4">
                Bekijk onze complete collectie van hotels met jacuzzi in Nederland
              </p>
              <div className="text-brand-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                Bekijk alle hotels →
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
              { '@type': 'ListItem', position: 2, name: 'Goedkoop Hotel met Jacuzzi', item: 'https://hotelmetjacuzzi.net/goedkoop-hotel-met-jacuzzi' }
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
            name: 'Goedkope Hotels met Jacuzzi in Nederland',
            numberOfItems: budgetJacuzziHotels.length,
            itemListElement: budgetJacuzziHotels.map((hotel, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Hotel',
                name: hotel.name,
                url: `https://hotelmetjacuzzi.net/hotel/${hotel.slug}`,
                image: hotel.image_url,
                priceRange: hotel.price_range,
                starRating: {
                  '@type': 'Rating',
                  ratingValue: hotel.rating,
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
                name: 'Zijn goedkope hotels met jacuzzi wel goed onderhouden?',
                acceptedAnswer: { 
                  '@type': 'Answer', 
                  text: 'Absoluut! Alle hotels in onze selectie worden regelmatig gecontroleerd op kwaliteit en hygiëne. Goedkoop betekent niet slecht - het gaat om slimme keuzes en efficiënte bedrijfsvoering.' 
                }
              },
              {
                '@type': 'Question',
                name: 'Wat kost een goedkoop jacuzzi hotel gemiddeld per nacht?',
                acceptedAnswer: { 
                  '@type': 'Answer', 
                  text: 'Onze budgetvriendelijke selectie start vanaf €89 per nacht en gaat tot ongeveer €135. Dit is significant goedkoper dan luxe wellness resorts die vaak €200+ per nacht kosten.' 
                }
              },
              {
                '@type': 'Question',
                name: 'Wat is het verschil tussen budget en luxe jacuzzi hotels?',
                acceptedAnswer: { 
                  '@type': 'Answer', 
                  text: 'Budget hotels focussen op de essentials: een comfortabele kamer met jacuzzi en goede service. Luxe hotels bieden extra\'s zoals spa treatments, fine dining en premium amenities.' 
                }
              }
            ]
          })
        }}
      />
    </main>
  )
}
