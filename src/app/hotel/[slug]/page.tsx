import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import MapboxMap from '@/components/MapboxMap'
import HotelCard from '@/components/HotelCard'
import RoomCard from '@/components/RoomCard'

// Mock hotel data met locatie coordinates
interface Room {
  id: number
  name: string
  image: string
  description: string
  features: string[]
  priceRange: string
  affiliateLink: string
}

interface Hotel {
  id: number
  name: string
  location: string
  city: string
  province: string
  priceRange: string
  jacuzziType: string
  facilities: string[]
  rating: number
  reviewCount: number
  heroImage: string
  description: string
  coordinates: [number, number]
  address: string
  affiliateLink: string
  popularThisMonth: boolean
  rooms?: Room[]
}
const mockHotels: Record<string, Hotel> = {
  'kasteel-bloemendal': {
    id: 1,
    name: 'Kasteel Bloemendal',
    location: 'Maastricht, Limburg',
    city: 'Maastricht',
    province: 'Limburg',
    priceRange: '€225 - €395',
    jacuzziType: 'Privé jacuzzi suite',
    facilities: ['Sauna', 'Wellness spa', 'Fine dining restaurant', 'Gratis parking', 'Room service'],
    rating: 4.8,
    reviewCount: 342,
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
    description: `Kasteel Bloemendal is een prachtig gerestaureerd kasteel uit de 18e eeuw, gelegen in het hart van Limburg. Dit romantische hotel met jacuzzi biedt luxueuze suites met privé jacuzzi faciliteiten en een adembenemend uitzicht op de kasteetuin.

    Elke suite is elegant ingericht met antieke meubels en moderne voorzieningen. De privé jacuzzi's zijn geplaatst op strategische locaties om optimaal te genieten van de rust en privacy. Perfect voor een romantische escapade of een wellness weekend.
    
    Het kasteel beschikt over een uitgebreide spa, een bekroond restaurant en prachtige wandelpaden door het landgoed. Voor een onvergetelijke ervaring in Zuid-Limburg.`,
    coordinates: [5.6913, 50.8514], // Maastricht coordinates
    address: 'Bloemendalstraat 150, 6291 CM Vaals',
    affiliateLink: 'https://booking.com/kasteel-bloemendal',
    popularThisMonth: true
  },
  'van-der-valk-amsterdam': {
    id: 2,
    name: 'Van der Valk Hotel Amsterdam',
    location: 'Amsterdam, Noord-Holland',
    city: 'Amsterdam',
    province: 'Noord-Holland',
    priceRange: '€189 - €329',
    jacuzziType: 'Wellness suite jacuzzi',
    facilities: ['Fitness center', 'Spa', 'Restaurant', 'Bar', 'Gratis wifi'],
    rating: 4.6,
    reviewCount: 578,
    heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop',
    description: `Van der Valk Hotel Amsterdam combineert moderne luxe met traditionele Nederlandse gastvrijheid. Dit stijlvolle hotel met jacuzzi ligt in het bruisende hart van Amsterdam, op loopafstand van de beroemde grachten en musea.

    De wellness suites zijn voorzien van ruime jacuzzi's en moderne voorzieningen. Geniet van het panoramische uitzicht over de stad terwijl u ontspant in uw privé jacuzzi. Het hotel beschikt over een modern spa complex en een bekroond restaurant.
    
    Perfect gelegen voor zowel zakelijke als romantische verblijven. Ontdek Amsterdam overdag en kom tot rust in uw luxueuze suite met jacuzzi.`,
    coordinates: [4.9041, 52.3676], // Amsterdam coordinates
    address: 'Weteringschans 136, 1017 XV Amsterdam',
    affiliateLink: 'https://booking.com/van-der-valk-amsterdam',
    popularThisMonth: false
  },
  'fletcher-wellness-hotel': {
    id: 3,
    name: 'Fletcher Wellness Hotel',
    location: 'Arnhem, Gelderland',
    city: 'Arnhem',
    province: 'Gelderland',
    priceRange: '€159 - €279',
    jacuzziType: 'Wellness jacuzzi',
    facilities: ['Uitgebreide spa', 'Zwembad', 'Sauna', 'Massages', 'Restaurant'],
    rating: 4.5,
    reviewCount: 423,
    heroImage: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop',
    description: `Fletcher Wellness Hotel in Arnhem is een oase van rust en ontspanning in de prachtige Veluweregio. Dit moderne wellness hotel met jacuzzi biedt de perfecte combinatie van luxe accommodatie en uitgebreide spa faciliteiten.

    De elegante kamers en suites zijn voorzien van privé jacuzzi's en bieden een serene omgeving voor ontspanning. Het hotel beschikt over een uitgebreid wellness center met verschillende sauna's, een zwembad en professionele massagebehandelingen.
    
    Gelegen nabij het Nationaal Park De Hoge Veluwe, is dit de ideale uitvalsbasis voor natuur- en cultuurliefhebbers die willen genieten van luxe wellness faciliteiten.`,
    coordinates: [5.8985, 51.9851], // Arnhem coordinates
    address: 'Velperweg 28, 6824 BZ Arnhem',
    affiliateLink: 'https://booking.com/fletcher-wellness-hotel',
    popularThisMonth: false
  },
  'van-der-valk-schiphol': {
    id: 4,
    name: 'Van der Valk Schiphol',
    location: 'Schiphol, Noord-Holland',
    city: 'Schiphol',
    province: 'Noord-Holland',
    priceRange: '€189 - €349',
    jacuzziType: 'Privé jacuzzi kamers',
    facilities: ['24/7 Room Service', 'Fitness Center', 'Business Center', 'Restaurant', 'Bar', 'Gratis Wifi', 'Shuttle Service'],
    rating: 4.6,
    reviewCount: 892,
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
    description: `Van der Valk Schiphol is het perfecte airport hotel met luxe kamers met jacuzzi, strategisch gelegen nabij Schiphol Airport. Dit moderne hotel combineert comfort met gemak voor zowel zakelijke als leisure reizigers.

    Onze Deluxe Plus kamers zijn uitgerust met privé jacuzzi's en bieden een serene ontsnapping na een lange vlucht. Met directe verbindingen naar de luchthaven en Amsterdam centrum, bent u altijd op de juiste plek.
    
    Perfect voor een romantische nacht voorafgaand aan uw vakantie of een luxueuze stopover. Geniet van onze uitstekende service, moderne faciliteiten en de unieke rust die een jacuzzi op de kamer biedt.`,
    coordinates: [4.7583, 52.3105], // Schiphol coordinates
    address: 'Boeing Avenue 201, 1119 PD Schiphol-Rijk',
    affiliateLink: 'https://booking.com/van-der-valk-schiphol',
    popularThisMonth: true,
    rooms: [
      {
        id: 1,
        name: 'Deluxe Plus Kamer',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
        description: 'Luxueuze kamer met king-size bed en privé jacuzzi. Perfect voor een romantische ervaring met uitzicht op de start- en landingsbanen.',
        features: ['Privé jacuzzi', 'King-size bed', 'Uitzicht op runway', 'Minibar', 'Flatscreen TV', 'Gratis wifi'],
        priceRange: '€189 - €249',
        affiliateLink: 'https://booking.com/van-der-valk-schiphol-deluxe-plus'
      },
      {
        id: 2,
        name: 'Deluxe Plus Suite',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop',
        description: 'Ruime suite met separate woonkamer en extra grote jacuzzi. Ideaal voor een luxe verblijf met alle comfort en privacy.',
        features: ['Extra grote jacuzzi', 'Separate woonkamer', 'Business desk', 'Koffiehoek', 'Premium beddengoed', 'Balkon'],
        priceRange: '€269 - €349',
        affiliateLink: 'https://booking.com/van-der-valk-schiphol-deluxe-suite'
      }
    ]
  },
  'inntel-hotels-amsterdam-centre': {
    id: 5,
    name: 'Inntel Hotels Amsterdam Centre',
    location: 'Amsterdam, Noord-Holland',
    city: 'Amsterdam',
    province: 'Noord-Holland',
    priceRange: '€195 - €349',
    jacuzziType: 'Wellness suite jacuzzi',
    facilities: ['Jacuzzi Suite', 'Wellness Center', 'Centrum locatie', 'Restaurant', 'Business Center', '24/7 Service'],
    rating: 4.3,
    reviewCount: 687,
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
    description: `Inntel Hotels Amsterdam Centre is een modern stadshotel met unieke design kamers en luxueuze wellness faciliteiten in het hart van Amsterdam. Dit elegante hotel met jacuzzi combineert hedendaagse architectuur met comfort.

    Onze specialty wellness kamers zijn uitgerust met privé jacuzzi's en bieden een serene ontsnapping in de bruisende hoofdstad. Met een centrale locatie nabij alle belangrijke attracties en het karakteristieke design van Inntel Hotels.
    
    Perfect voor een romantische citytrip met wellness ervaring. Geniet van de dynamiek van Amsterdam overdag en kom tot rust in uw privé wellness suite met jacuzzi.`,
    coordinates: [4.9041, 52.3676], // Amsterdam coordinates
    address: 'Nieuwezijds Voorburgwal 67, 1012 RE Amsterdam',
    affiliateLink: 'https://booking.com/inntel-hotels-amsterdam-centre',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Spa Kamer',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
        description: 'Moderne spa kamer met design jacuzzi en stadsbeeld. Ideaal voor ontspanning in het hart van Amsterdam.',
        features: ['Design jacuzzi', 'Stadsbeeld', 'Modern design', 'Minibar', 'Flatscreen TV', 'Gratis wifi'],
        priceRange: '€195 - €249',
        affiliateLink: 'https://booking.com/inntel-amsterdam-centre-spa'
      },
      {
        id: 2,
        name: 'Wellness Kamer',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop',
        description: 'Ruime wellness kamer met grote jacuzzi en wellness amenities. Complete ontspanningservaring in de stad.',
        features: ['Grote jacuzzi', 'Wellness amenities', 'Extra ruim', 'Koffiehoek', 'Premium beddengoed', 'Balkon'],
        priceRange: '€249 - €299',
        affiliateLink: 'https://booking.com/inntel-amsterdam-centre-wellness'
      },
      {
        id: 3,
        name: 'Suite',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop',
        description: 'Luxueuze suite met separate woonkamer en premium jacuzzi. Het ultieme in comfort en stijl.',
        features: ['Premium jacuzzi', 'Separate woonkamer', 'Design meubilair', 'Business desk', 'Room service', 'Panorama uitzicht'],
        priceRange: '€299 - €349',
        affiliateLink: 'https://booking.com/inntel-amsterdam-centre-suite'
      }
    ]
  },
  'olympic-hotel': {
    id: 2,
    name: 'Olympic Hotel',
    location: 'Amsterdam, Noord-Holland',
    city: 'Amsterdam',
    province: 'Noord-Holland',
    priceRange: '€189 - €289',
    jacuzziType: 'Luxe jacuzzi suite',
    facilities: ['Jacuzzi Suite', 'Olympisch Zwembad', 'Fitness Center', 'Spa & Wellness', 'Restaurant', 'Bar'],
    rating: 4.4,
    reviewCount: 892,
    heroImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop',
    description: `Olympic Hotel Amsterdam combineert sportieve excellentie met luxe wellness in het hart van Amsterdam. Dit unieke hotel met jacuzzi biedt een perfecte balans tussen actieve ontspanning en romantische momenten.

    Onze signature Deluxe Kamers zijn uitgerust met luxe jacuzzi's en bieden een serene ontsnapping na een dag vol Amsterdamse avonturen. Met olympische faciliteiten en wellness amenities voor een complete ervaring.
    
    Perfect voor sporters, wellness liefhebbers en koppels die op zoek zijn naar een unieke combinatie van activiteit en ontspanning in Amsterdam.`,
    coordinates: [4.8952, 52.3702], // Amsterdam coordinates
    address: 'PC Hooftstraat 138-140, 1071 CC Amsterdam',
    affiliateLink: 'https://booking.com/olympic-hotel-amsterdam',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Deluxe Kamer',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop',
        description: 'Luxueuze deluxe kamer met premium jacuzzi en olympische sfeer. Ideaal voor een sportieve wellness ervaring.',
        features: ['Premium jacuzzi', 'Olympische thema', 'Sportieve inrichting', 'Minibar', 'Smart TV', 'Fitness amenities'],
        priceRange: '€189 - €289',
        affiliateLink: 'https://booking.com/olympic-hotel-deluxe'
      }
    ]
  }
}

// Related hotels data
const relatedHotels = [
  {
    id: 4,
    name: "Château St. Gerlach",
    slug: "chateau-st-gerlach",
    description: "Luxe kasteel met spa en jacuzzi in historische setting.",
    province_id: 1,
    city_id: 1,
    price_range: "Vanaf €295",
    facilities: ["Privé Jacuzzi", "Spa", "Restaurant", "Wellness"],
    affiliate_link: "https://booking.com/chateau-st-gerlach",
    image_url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop",
    rating: 4.9,
    created_at: "2024-01-01"
  },
  {
    id: 5,
    name: "Thermae 2000 Hotel",
    slug: "thermae-2000-hotel",
    description: "Wellness resort met thermale baden en jacuzzi faciliteiten.",
    province_id: 1,
    city_id: 1,
    price_range: "Vanaf €199",
    facilities: ["Thermale baden", "Jacuzzi", "Spa", "Restaurant"],
    affiliate_link: "https://booking.com/thermae-2000",
    image_url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
    rating: 4.7,
    created_at: "2024-01-01"
  },
  {
    id: 6,
    name: "Hotel Château Neercanne",
    slug: "hotel-chateau-neercanne",
    description: "Romantisch kasteel hotel met luxe jacuzzi suites.",
    province_id: 1,
    city_id: 1,
    price_range: "Vanaf €249",
    facilities: ["Jacuzzi suites", "Fine dining", "Wijngaard", "Terrassen"],
    affiliate_link: "https://booking.com/chateau-neercanne",
    image_url: "https://images.unsplash.com/photo-1587385789092-ee287051bc73?q=80&w=1600&auto=format&fit=crop",
    rating: 4.8,
    created_at: "2024-01-01"
  }
]

// Noord-Holland related hotels (for Schiphol page)
const noordHollandHotels = [
  {
    id: 7,
    name: "Van der Valk Akersloot",
    slug: "van-der-valk-akersloot",
    description: "Rustig gelegen hotel met moderne wellness faciliteiten en jacuzzi kamers nabij Amsterdam.",
    province_id: 2,
    city_id: 20,
    price_range: "Vanaf €169",
    facilities: ["Jacuzzi Kamers", "Wellness", "Restaurant", "Bar"],
    affiliate_link: "https://booking.com/van-der-valk-akersloot",
    image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
    rating: 4.5,
    created_at: "2024-01-01"
  },
  {
    id: 8,
    name: "Olympic Hotel Amsterdam",
    slug: "olympic-hotel",
    description: "Stijlvol Olympic Hotel in Amsterdam met luxe wellness faciliteiten en privé jacuzzi's.",
    province_id: 2,
    city_id: 2,
    price_range: "Vanaf €199",
    facilities: ["Privé Jacuzzi", "Wellness", "Restaurant", "Centrum"],
    affiliate_link: "https://booking.com/olympic-hotel",
    image_url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop",
    rating: 4.7,
    created_at: "2024-01-01"
  },
  {
    id: 9,
    name: "Inntel Hotels Amsterdam Centre",
    slug: "inntel-hotels-amsterdam-centre",
    description: "Modern hotel in Amsterdam centrum met unieke design kamers en jacuzzi faciliteiten.",
    province_id: 2,
    city_id: 2,
    price_range: "Vanaf €219",
    facilities: ["Jacuzzi Kamers", "Design", "Restaurant", "Centrum"],
    affiliate_link: "https://booking.com/inntel-hotels-amsterdam-centre",
    image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
    rating: 4.8,
    created_at: "2024-01-01"
  },
  {
    id: 10,
    name: "Fletcher Hotel-Restaurant Jan Van Scorel",
    slug: "fletcher-hotel-restaurant-jan-van-scorel",
    description: "Uniek hotel met uitzicht op de Schoorlse Duinen en luxe jacuzzi suites.",
    province_id: 2,
    city_id: 2,
    price_range: "Vanaf €199",
    facilities: ["Jacuzzi Suites", "Duinzicht", "Wellness", "Natuur"],
    affiliate_link: "https://booking.com/fletcher-hotel-restaurant-jan-van-scorel",
    image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
    rating: 4.7,
    created_at: "2024-01-01"
  }
]

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awaited = await params
  const hotel = mockHotels[awaited.slug as keyof typeof mockHotels]
  
  if (!hotel) {
    return {
      title: 'Hotel niet gevonden | Hotelmetjacuzzi.net',
      description: 'Het opgevraagde hotel kon niet worden gevonden.'
    }
  }

  return {
    title: `${hotel.name} – romantische suite met jacuzzi in ${hotel.province} | Hotelmetjacuzzi.net`,
    description: `Ontdek ${hotel.name}, een prachtig hotel met jacuzzi in ${hotel.city}, ${hotel.province}. Boek uw romantische verblijf met privé jacuzzi vanaf ${hotel.priceRange.split(' - ')[0]}.`,
    keywords: `${hotel.name}, hotel met jacuzzi ${hotel.city}, romantisch hotel ${hotel.province}, wellness hotel, jacuzzi op kamer, ${hotel.city} hotel`,
    openGraph: {
      title: `${hotel.name} | Romantisch Hotel met Jacuzzi`,
      description: `Romantisch hotel met jacuzzi in ${hotel.city}, ${hotel.province}. ${hotel.description.substring(0, 100)}...`,
      images: [hotel.heroImage],
      type: 'website'
    }
  }
}

export async function generateStaticParams() {
  return Object.keys(mockHotels).map((slug) => ({
    slug
  }))
}

// SVG Pattern Component
const WavePattern = () => (
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      opacity: 0.03,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wave-pattern' patternUnits='userSpaceOnUse' width='60' height='60'%3E%3Cg fill='none' stroke='%23F36F21' stroke-width='0.5'%3E%3C!-- Wave lijnen --%3E%3Cpath d='M0 30 Q15 20 30 30 T60 30'/%3E%3Cpath d='M0 40 Q15 30 30 40 T60 40'/%3E%3Cpath d='M0 20 Q15 10 30 20 T60 20'/%3E%3Cpath d='M0 50 Q15 40 30 50 T60 50'/%3E%3C!-- Verticale lijnen --%3E%3Cline x1='15' y1='0' x2='15' y2='60'/%3E%3Cline x1='45' y1='0' x2='45' y2='60'/%3E%3C!-- Accent cirkels --%3E%3Ccircle cx='15' cy='30' r='2' fill='%23F36F21' opacity='0.4'/%3E%3Ccircle cx='45' cy='30' r='2' fill='%23F36F21' opacity='0.4'/%3E%3Ccircle cx='30' cy='15' r='1' fill='%23F36F21' opacity='0.6'/%3E%3Ccircle cx='30' cy='45' r='1' fill='%23F36F21' opacity='0.6'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23wave-pattern)'/%3E%3C/svg%3E")`
    }}
  />
)

export default async function HotelDetailPage({ params }: Props) {
  const awaited = await params
  const hotel = mockHotels[awaited.slug as keyof typeof mockHotels]

  if (!hotel) {
    notFound()
  }

  // Special template for Van der Valk Schiphol
  if (awaited.slug === 'van-der-valk-schiphol') {
    return (
      <div className="min-h-screen bg-light-gray">
        {/* SVG Pattern Background */}
        <WavePattern />
        
        {/* Hero Section - Homepage Layout */}
        <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Breadcrumbs */}
                <nav className="text-sm text-brand-navy-200 mb-6">
                  <Link href="/" className="hover:text-brand-orange-600 transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <Link href="/provincie/noord-holland" className="hover:text-brand-orange-600 transition-colors">
                    Noord-Holland
                  </Link>
                  <span className="mx-2">/</span>
                  <span className="text-pure-white font-medium">{hotel.name}</span>
                </nav>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Van der Valk Schiphol – hotelkamers met jacuzzi
                </h1>
                <p className="text-xl md:text-2xl text-brand-navy-200 mb-8 leading-relaxed">
                  Ontdek onze luxueuze kamers met jacuzzi bij Schiphol Airport. Perfect voor een romantische stopover of een 
                  ontspannen verblijf voorafgaand aan uw vakantie.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#rooms" 
                    className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                  >
                    Bekijk kamers
                  </a>
                  <Link 
                    href="/provincie/noord-holland" 
                    className="border-2 border-brand-orange-600 text-brand-orange-600 hover:bg-brand-orange-600 hover:text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                  >
                    Meer hotels
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/van-der-valk-schiphol-exterior.jpg"
                  alt="Van der Valk Hotel Schiphol - Modern hotel exterior"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {hotel.popularThisMonth && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-brand-orange-600 text-pure-white rounded-lg px-3 py-1 shadow-lg">
                      <span className="text-xs font-bold uppercase">Meest geboekt deze maand</span>
                    </div>
                  </div>
                )}
                <div className="absolute -bottom-6 -right-6 bg-brand-orange-600 text-pure-white p-6 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">{hotel.rooms?.length || 2}+</div>
                  <div className="text-sm">Jacuzzi kamers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Room Overview Section */}
        <section id="rooms" className="py-16 bg-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Onze Kamers met Jacuzzi
              </h2>
              <p className="text-lg text-brand-navy-600 max-w-2xl mx-auto">
                Kies uit onze luxueuze kamers en suites, alle uitgerust met privé jacuzzi voor een onvergetelijke ervaring.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {hotel.rooms?.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Locatie van Van der Valk Schiphol
              </h2>
              <p className="text-lg text-brand-navy-600 max-w-3xl mx-auto">
                Strategisch gelegen nabij Schiphol Airport met directe verbindingen naar Amsterdam centrum. 
                Perfect bereikbaar voor zowel zakelijke als leisure reizigers.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <MapboxMap
                longitude={hotel.coordinates[0]}
                latitude={hotel.coordinates[1]}
                hotelName={hotel.name}
                address={hotel.address}
              />
            </div>
          </div>
        </section>

        {/* Extra Info Block */}
        <section className="py-16 bg-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Facilities */}
              <div>
                <h3 className="text-2xl font-bold text-brand-navy-900 mb-6">
                  Hotel Faciliteiten
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {hotel.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center p-4 bg-brand-navy-50 rounded-lg">
                      <svg width="20" height="20" viewBox="0 0 20 20" className="mr-3 text-brand-orange-600 flex-shrink-0">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                      </svg>
                      <span className="text-brand-navy-700 font-medium">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-brand-navy-900 mb-6">
                  Veelgestelde Vragen
                </h3>
                <div className="space-y-6">
                  <div className="bg-brand-navy-50 rounded-lg p-6">
                    <h4 className="font-bold text-brand-navy-900 mb-2">
                      Zijn alle kamers uitgerust met een jacuzzi?
                    </h4>
                    <p className="text-brand-navy-700">
                      Onze Deluxe Plus kamers en suites zijn uitgerust met privé jacuzzi's. Standaard kamers hebben deze faciliteit niet.
                    </p>
                  </div>
                  
                  <div className="bg-brand-navy-50 rounded-lg p-6">
                    <h4 className="font-bold text-brand-navy-900 mb-2">
                      Hoe ver is het hotel van Schiphol Airport?
                    </h4>
                    <p className="text-brand-navy-700">
                      Het hotel ligt op slechts 5 minuten rijden van Schiphol Airport. Wij bieden een gratis shuttle service naar de luchthaven.
                    </p>
                  </div>
                  
                  <div className="bg-brand-navy-50 rounded-lg p-6">
                    <h4 className="font-bold text-brand-navy-900 mb-2">
                      Is het hotel geschikt voor een romantisch verblijf?
                    </h4>
                    <p className="text-brand-navy-700">
                      Absoluut! Onze kamers met jacuzzi zijn perfect voor romantische momenten. Wij kunnen ook arrangementen verzorgen op verzoek.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Internal Links */}
            <div className="mt-12 pt-8 border-t border-brand-navy-200 text-center">
              <p className="text-brand-navy-600 mb-6">
                Bekijk ook onze andere <Link href="/hotel-met-jacuzzi-op-kamer" className="text-brand-orange-600 hover:text-brand-orange-700 font-medium">hotels met jacuzzi op de kamer</Link> of 
                ontdek meer <Link href="/provincie/noord-holland" className="text-brand-orange-600 hover:text-brand-orange-700 font-medium">hotels in Noord-Holland</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Related Hotels */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Andere hotels met jacuzzi in Noord-Holland
              </h2>
              <p className="text-lg text-brand-navy-600">
                Ontdek meer prachtige hotels met jacuzzi in de provincie Noord-Holland
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {noordHollandHotels.slice(0, 3).map((relatedHotel) => (
                <HotelCard key={relatedHotel.id} hotel={relatedHotel} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/provincie/noord-holland"
                className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Bekijk alle hotels in Noord-Holland
                <svg width="20" height="20" viewBox="0 0 20 20" className="ml-2">
                  <path d="M7 3l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": hotel.name,
              "description": `${hotel.name} - Luxueuze airport hotel met kamers met jacuzzi bij Schiphol. Perfect voor romantische verblijven en zakelijke trips.`,
              "image": hotel.heroImage,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": hotel.address.split(',')[0],
                "addressLocality": hotel.city,
                "addressRegion": hotel.province,
                "addressCountry": "NL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": hotel.coordinates[1],
                "longitude": hotel.coordinates[0]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": hotel.rating,
                "reviewCount": hotel.reviewCount,
                "bestRating": 5
              },
              "priceRange": hotel.priceRange,
              "amenityFeature": hotel.facilities.map(facility => ({
                "@type": "LocationFeatureSpecification",
                "name": facility
              })),
              "url": `https://jacuzzihotels.nl/hotel/${awaited.slug}`
            })
          }}
        />
      </div>
    )
  }

  // Special template for Inntel Hotels Amsterdam Centre
  if (awaited.slug === 'inntel-hotels-amsterdam-centre') {
    return (
      <div className="min-h-screen bg-light-gray">
        {/* SVG Pattern Background */}
        <WavePattern />
        
        {/* Hero Section - Homepage Layout */}
        <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Breadcrumbs */}
                <nav className="text-sm text-brand-navy-200 mb-6">
                  <Link href="/" className="hover:text-brand-orange-600 transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <Link href="/provincie/noord-holland" className="hover:text-brand-orange-600 transition-colors">
                    Noord-Holland
                  </Link>
                  <span className="mx-2">/</span>
                  <span className="text-pure-white font-medium">{hotel.name}</span>
                </nav>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Inntel Hotels Amsterdam Centre – design kamers met jacuzzi
                </h1>
                <p className="text-xl md:text-2xl text-brand-navy-200 mb-8 leading-relaxed">
                  Ontdek onze unieke design kamers met wellness faciliteiten in het hart van Amsterdam. 
                  Perfect voor een romantische citytrip met luxe comfort.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#rooms" 
                    className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                  >
                    Bekijk kamers
                  </a>
                  <Link 
                    href="/provincie/noord-holland" 
                    className="border-2 border-brand-orange-600 text-brand-orange-600 hover:bg-brand-orange-600 hover:text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                  >
                    Meer hotels
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/Inntel Hotels Amsterdam Centre.jpg"
                  alt="Inntel Hotels Amsterdam Centre - Modern design hotel exterior"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {hotel.popularThisMonth && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-brand-orange-600 text-pure-white rounded-lg px-3 py-1 shadow-lg">
                      <span className="text-xs font-bold uppercase">Meest geboekt deze maand</span>
                    </div>
                  </div>
                )}
                <div className="absolute -bottom-6 -right-6 bg-brand-orange-600 text-pure-white p-6 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">{hotel.rooms?.length || 3}+</div>
                  <div className="text-sm">Design kamers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Room Overview Section */}
        <section id="rooms" className="py-16 bg-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Onze Design Kamers met Wellness
              </h2>
              <p className="text-lg text-brand-navy-600 max-w-2xl mx-auto">
                Kies uit onze unieke kamers en suites, alle uitgerust met design jacuzzi voor een bijzondere ervaring.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {hotel.rooms?.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Locatie van Inntel Hotels Amsterdam Centre
              </h2>
              <p className="text-lg text-brand-navy-600 max-w-3xl mx-auto">
                Perfect gelegen in het historische centrum van Amsterdam, op loopafstand van alle belangrijke 
                attracties, musea en het bruisende nachtleven.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <MapboxMap
                longitude={hotel.coordinates[0]}
                latitude={hotel.coordinates[1]}
                hotelName={hotel.name}
                address={hotel.address}
              />
            </div>
          </div>
        </section>

        {/* Extra Info Block */}
        <section className="py-16 bg-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Facilities */}
              <div>
                <h3 className="text-2xl font-bold text-brand-navy-900 mb-6">
                  Hotel Faciliteiten
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {hotel.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center p-4 bg-brand-navy-50 rounded-lg">
                      <svg width="20" height="20" viewBox="0 0 20 20" className="mr-3 text-brand-orange-600 flex-shrink-0">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                      </svg>
                      <span className="text-brand-navy-700 font-medium">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-brand-navy-900 mb-6">
                  Veelgestelde Vragen
                </h3>
                <div className="space-y-6">
                  <div className="bg-brand-navy-50 rounded-lg p-6">
                    <h4 className="font-bold text-brand-navy-900 mb-2">
                      Welke kamers hebben een jacuzzi?
                    </h4>
                    <p className="text-brand-navy-700">
                      Onze Spa Kamers, Wellness Kamers en Suites zijn alle uitgerust met design jacuzzi's. Standaard kamers hebben deze faciliteit niet.
                    </p>
                  </div>
                  
                  <div className="bg-brand-navy-50 rounded-lg p-6">
                    <h4 className="font-bold text-brand-navy-900 mb-2">
                      Hoe ver is het hotel van de belangrijkste attracties?
                    </h4>
                    <p className="text-brand-navy-700">
                      Het hotel ligt in het centrum van Amsterdam, op loopafstand van de Jordaan, Anne Frank Huis en de Negen Straatjes.
                    </p>
                  </div>
                  
                  <div className="bg-brand-navy-50 rounded-lg p-6">
                    <h4 className="font-bold text-brand-navy-900 mb-2">
                      Wat maakt dit hotel bijzonder?
                    </h4>
                    <p className="text-brand-navy-700">
                      Ons unieke design en de combinatie van moderne wellness faciliteiten in een historisch pand maken dit hotel perfect voor een citytrip.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Internal Links */}
            <div className="mt-12 pt-8 border-t border-brand-navy-200 text-center">
              <p className="text-brand-navy-600 mb-6">
                Bekijk ook onze andere <Link href="/hotel-met-jacuzzi-op-kamer" className="text-brand-orange-600 hover:text-brand-orange-700 font-medium">hotels met jacuzzi op de kamer</Link> of 
                ontdek meer <Link href="/provincie/noord-holland" className="text-brand-orange-600 hover:text-brand-orange-700 font-medium">hotels in Noord-Holland</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Related Hotels */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Andere hotels met jacuzzi in Noord-Holland
              </h2>
              <p className="text-lg text-brand-navy-600">
                Ontdek meer prachtige hotels met jacuzzi in de provincie Noord-Holland
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {noordHollandHotels.slice(0, 3).map((relatedHotel) => (
                <HotelCard key={relatedHotel.id} hotel={relatedHotel} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/provincie/noord-holland"
                className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Bekijk alle hotels in Noord-Holland
                <svg width="20" height="20" viewBox="0 0 20 20" className="ml-2">
                  <path d="M7 3l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": hotel.name,
              "description": `${hotel.name} - Modern design hotel met jacuzzi kamers in Amsterdam centrum. Perfect voor romantische citytrips en zakelijke verblijven.`,
              "image": hotel.heroImage,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": hotel.address.split(',')[0],
                "addressLocality": hotel.city,
                "addressRegion": hotel.province,
                "addressCountry": "NL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": hotel.coordinates[1],
                "longitude": hotel.coordinates[0]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": hotel.rating,
                "reviewCount": hotel.reviewCount,
                "bestRating": 5
              },
              "priceRange": hotel.priceRange,
              "amenityFeature": hotel.facilities.map(facility => ({
                "@type": "LocationFeatureSpecification",
                "name": facility
              })),
              "url": `https://jacuzzihotels.nl/hotel/${awaited.slug}`
            })
          }}
        />
      </div>
    )
  }

  // Special template for Olympic Hotel
  if (awaited.slug === 'olympic-hotel') {
    return (
      <div className="min-h-screen bg-light-gray">
        {/* SVG Pattern Background */}
        <WavePattern />
        
        {/* Hero Section - Olympic Theme */}
        <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Breadcrumbs */}
                <nav className="text-sm text-brand-navy-200 mb-6">
                  <Link href="/" className="hover:text-brand-orange-600 transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <Link href="/provincie/noord-holland" className="hover:text-brand-orange-600 transition-colors">
                    Noord-Holland
                  </Link>
                  <span className="mx-2">/</span>
                  <span className="text-pure-white font-medium">{hotel.name}</span>
                </nav>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Olympic Hotel Amsterdam – sportieve luxe met jacuzzi
                </h1>
                <p className="text-xl md:text-2xl text-brand-navy-200 mb-8 leading-relaxed">
                  Ervaar de perfecte combinatie van olympische excellentie en wellness luxe. 
                  Onze Deluxe Kamers bieden een unieke jacuzzi-ervaring voor sporters en wellness liefhebbers.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#rooms" 
                    className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                  >
                    Bekijk Deluxe Kamer
                  </a>
                  <Link 
                    href="/provincie/noord-holland" 
                    className="border-2 border-brand-orange-600 text-brand-orange-600 hover:bg-brand-orange-600 hover:text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                  >
                    Meer hotels
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/Olympic Hotel.jpg"
                  alt="Olympic Hotel Amsterdam - Sportieve luxe hotel exterior"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Top 10 Ranking Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-brand-orange-600 hover:bg-[#D95E1B] text-pure-white rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300">
                    <span className="text-lg font-bold">#2</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-brand-orange-600 text-pure-white p-6 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">1</div>
                  <div className="text-sm">Deluxe Kamer</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Room Overview Section */}
        <section id="rooms" className="py-16 bg-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Onze Deluxe Kamer met Jacuzzi
              </h2>
              <p className="text-lg text-brand-navy-600 max-w-2xl mx-auto">
                Ervaar olympische luxe in onze signature Deluxe Kamer, uitgerust met premium jacuzzi en sportieve elegantie.
              </p>
              
              {/* Top 10 Ranking Text */}
              <p className="text-xs mt-4 italic" style={{ color: '#6B7280' }}>
                Dit hotel staat op positie #2 in de top 10 jacuzzi hotels van Nederland
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
              {hotel.rooms?.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        </section>

        {/* Olympic Features Section */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Olympische Faciliteiten & Wellness
              </h2>
              <p className="text-lg text-brand-navy-600 max-w-3xl mx-auto">
                Ontdek onze unieke combinatie van sportieve excellentie en wellness luxe in het hart van Amsterdam.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-pure-white rounded-2xl p-8 shadow-lg">
                <div className="text-brand-orange-600 mb-4">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 4h-10c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h10c1.11 0 2-.89 2-2v-12c0-1.11-.89-2-2-2zm-5 14.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Olympisch Zwembad</h3>
                <p className="text-brand-navy-600">Professioneel zwembad voor training en ontspanning met olympische afmetingen.</p>
              </div>

              <div className="bg-pure-white rounded-2xl p-8 shadow-lg">
                <div className="text-brand-orange-600 mb-4">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Fitness Center</h3>
                <p className="text-brand-navy-600">State-of-the-art fitnessruimte met professionele apparatuur voor optimale training.</p>
              </div>

              <div className="bg-pure-white rounded-2xl p-8 shadow-lg">
                <div className="text-brand-orange-600 mb-4">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Spa & Wellness</h3>
                <p className="text-brand-navy-600">Luxe wellness faciliteiten inclusief sauna, stoomcabine en professionele spa behandelingen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Locatie van Olympic Hotel Amsterdam
              </h2>
              <p className="text-lg text-brand-navy-600 max-w-3xl mx-auto">
                Gelegen in de prestigieuze PC Hooftstraat, nabij Vondelpark en de belangrijkste shopping districts van Amsterdam.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <MapboxMap
                longitude={hotel.coordinates[0]}
                latitude={hotel.coordinates[1]}
                hotelName={hotel.name}
                address={hotel.address}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Facilities */}
              <div>
                <h3 className="text-2xl font-bold text-brand-navy-900 mb-6">
                  Olympic Hotel Faciliteiten
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {hotel.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center p-4 bg-pure-white rounded-lg shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 20 20" className="mr-3 text-brand-orange-600 flex-shrink-0">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                      </svg>
                      <span className="text-brand-navy-700 font-medium">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-brand-navy-900 mb-6">
                  Veelgestelde Vragen
                </h3>
                <div className="space-y-6">
                  <div className="bg-pure-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-brand-navy-900 mb-2">
                      Wat maakt Olympic Hotel uniek?
                    </h4>
                    <p className="text-brand-navy-700">
                      Onze unieke combinatie van olympische sportfaciliteiten en luxe wellness, inclusief jacuzzi kamers en professioneel zwembad.
                    </p>
                  </div>
                  
                  <div className="bg-pure-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-brand-navy-900 mb-2">
                      Welke sportfaciliteiten zijn er beschikbaar?
                    </h4>
                    <p className="text-brand-navy-700">
                      Olympisch zwembad, moderne fitness center, spa & wellness faciliteiten en professionele trainingsruimtes.
                    </p>
                  </div>
                  
                  <div className="bg-pure-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-brand-navy-900 mb-2">
                      Is het hotel geschikt voor sporters?
                    </h4>
                    <p className="text-brand-navy-700">
                      Absoluut! Ons hotel is speciaal ontworpen voor sporters met professionele faciliteiten en herstel amenities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Internal Links */}
            <div className="mt-12 pt-8 border-t border-brand-navy-200 text-center">
              <p className="text-brand-navy-600 mb-6">
                Bekijk ook onze andere <Link href="/hotel-met-jacuzzi-op-kamer" className="text-brand-orange-600 hover:text-brand-orange-700 font-medium">hotels met jacuzzi op de kamer</Link> of 
                ontdek meer <Link href="/provincie/noord-holland" className="text-brand-orange-600 hover:text-brand-orange-700 font-medium">sportieve hotels in Noord-Holland</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Related Hotels */}
        <section className="py-16 bg-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Andere top hotels met jacuzzi in Noord-Holland
              </h2>
              <p className="text-lg text-brand-navy-600">
                Ontdek meer prachtige hotels met jacuzzi in de provincie Noord-Holland
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {noordHollandHotels.slice(0, 3).map((relatedHotel) => (
                <HotelCard key={relatedHotel.id} hotel={relatedHotel} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/provincie/noord-holland"
                className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Bekijk alle hotels in Noord-Holland
                <svg width="20" height="20" viewBox="0 0 20 20" className="ml-2">
                  <path d="M7 3l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": hotel.name,
              "description": `${hotel.name} - Sportieve luxe hotel met jacuzzi kamers en olympische faciliteiten in Amsterdam. Perfect voor sporters en wellness liefhebbers.`,
              "image": hotel.heroImage,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": hotel.address.split(',')[0],
                "addressLocality": hotel.city,
                "addressRegion": hotel.province,
                "addressCountry": "NL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": hotel.coordinates[1],
                "longitude": hotel.coordinates[0]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": hotel.rating,
                "reviewCount": hotel.reviewCount,
                "bestRating": 5
              },
              "priceRange": hotel.priceRange,
              "amenityFeature": hotel.facilities.map(facility => ({
                "@type": "LocationFeatureSpecification",
                "name": facility
              })),
              "url": `https://jacuzzihotels.nl/hotel/${awaited.slug}`
            })
          }}
        />
      </div>
    )
  }

  // Default template for other hotels
  return (
    <div className="min-h-screen bg-light-gray">
      {/* SVG Pattern Background */}
      <WavePattern />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="text-sm text-brand-navy-600 mb-6">
            <Link href="/" className="hover:text-brand-orange-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/provincie/${hotel.province.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-orange-600 transition-colors">
              {hotel.province}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-navy-900 font-medium">{hotel.name}</span>
          </nav>

          {/* Hotel Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy-900 mb-4">
              {hotel.name} – romantische suite met jacuzzi in {hotel.province}
            </h1>
            <p className="text-xl text-brand-navy-600">
              {hotel.city}, {hotel.province}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative mb-16">
            <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={hotel.heroImage}
                alt={`${hotel.name} - romantische suite met jacuzzi`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>
            {hotel.popularThisMonth && (
              <div className="absolute top-6 left-6">
                <div className="bg-brand-orange-600 text-pure-white rounded-lg px-4 py-2 shadow-lg">
                  <span className="text-sm font-bold uppercase">Meest geboekt deze maand</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hotel Info Block */}
      <section className="py-16 bg-light-gray relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Description */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-navy-900 mb-6">
                Over {hotel.name}
              </h2>
              <div className="prose prose-lg prose-brand-navy max-w-none">
                {hotel.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-brand-navy-700 leading-relaxed mb-6">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
              
              {/* Internal Links */}
              <div className="mt-8 pt-6 border-t border-brand-navy-200">
                <p className="text-brand-navy-600 mb-4">
                  Bekijk ook andere <Link href={`/provincie/${hotel.province.toLowerCase().replace(' ', '-')}`} className="text-brand-orange-600 hover:text-brand-orange-700 font-medium">hotels met jacuzzi in {hotel.province}</Link> of ontdek onze <Link href="/hotel-met-jacuzzi" className="text-brand-orange-600 hover:text-brand-orange-700 font-medium">complete collectie romantische hotels</Link>.
                </p>
              </div>
            </div>

            {/* Right: Info Card */}
            <div className="lg:col-span-1">
              <div className="bg-pure-white rounded-2xl shadow-lg p-8 border border-brand-navy-200 sticky top-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-brand-navy-900 mb-2">
                    {hotel.priceRange}
                  </div>
                  <div className="text-brand-navy-600">per nacht</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between py-3 border-b border-brand-navy-100">
                    <span className="text-brand-navy-600">Type jacuzzi:</span>
                    <span className="font-medium text-brand-navy-900">{hotel.jacuzziType}</span>
                  </div>
                  
                  <div className="py-3 border-b border-brand-navy-100">
                    <span className="text-brand-navy-600 block mb-2">Faciliteiten:</span>
                    <div className="space-y-1">
                      {hotel.facilities.map((facility, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 text-brand-orange-600 flex-shrink-0">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" fill="currentColor"/>
                          </svg>
                          <span className="text-brand-navy-700">{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <span className="text-brand-navy-600">Beoordeling:</span>
                    <div className="flex items-center">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 16 16" className={`${i < Math.floor(hotel.rating) ? 'text-brand-orange-600' : 'text-brand-navy-300'}`}>
                            <path d="M8 12l-4.7 2.472.898-5.236L.392 5.564l5.258-.764L8 0l2.35 4.8 5.258.764-3.806 3.672.898 5.236z" fill="currentColor"/>
                          </svg>
                        ))}
                      </div>
                      <span className="font-medium text-brand-navy-900">{hotel.rating}</span>
                      <span className="text-sm text-brand-navy-600 ml-1">({hotel.reviewCount})</span>
                    </div>
                  </div>
                </div>

                <BookingButton className="w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Bekijk deal →
                </BookingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Locatie van {hotel.name}
            </h2>
            <p className="text-lg text-brand-navy-600 max-w-2xl mx-auto">
              Ontdek de prachtige ligging van dit romantische hotel met jacuzzi in {hotel.city}, {hotel.province}.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <MapboxMap
              longitude={hotel.coordinates[0]}
              latitude={hotel.coordinates[1]}
              hotelName={hotel.name}
              address={hotel.address}
            />
          </div>
        </div>
      </section>

      {/* Related Hotels */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Andere hotels met jacuzzi in {hotel.province}
            </h2>
            <p className="text-lg text-brand-navy-600">
              Ontdek meer romantische hotels met jacuzzi in de regio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedHotels.slice(0, 3).map((relatedHotel) => (
              <HotelCard key={relatedHotel.id} hotel={relatedHotel} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href={`/provincie/${hotel.province.toLowerCase().replace(' ', '-')}`}
              className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Bekijk alle hotels in {hotel.province}
              <svg width="20" height="20" viewBox="0 0 20 20" className="ml-2">
                <path d="M7 3l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": hotel.name,
            "description": hotel.description.split('\n\n')[0],
            "image": hotel.heroImage,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": hotel.address.split(',')[0],
              "addressLocality": hotel.city,
              "addressRegion": hotel.province,
              "addressCountry": "NL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": hotel.coordinates[1],
              "longitude": hotel.coordinates[0]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": hotel.rating,
              "reviewCount": hotel.reviewCount,
              "bestRating": 5
            },
            "priceRange": hotel.priceRange,
            "amenityFeature": hotel.facilities.map(facility => ({
              "@type": "LocationFeatureSpecification",
              "name": facility
            })),
            "url": `https://jacuzzihotels.nl/hotel/${awaited.slug}`
          })
        }}
      />
    </div>
  )
}