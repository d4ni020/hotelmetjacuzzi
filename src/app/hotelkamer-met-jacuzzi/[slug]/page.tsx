import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Province, City, Hotel } from '@/lib/supabase'

// Mock data
const mockProvinces: Province[] = [
  { id: 1, name: "Limburg", slug: "limburg", seo_text: "Ontdek de perfecte hotels met jacuzzi in Limburg", created_at: "2024-01-01" },
  { id: 2, name: "Noord-Holland", slug: "noord-holland", seo_text: "Ontdek de perfecte hotels met jacuzzi in Noord-Holland", created_at: "2024-01-01" },
  { id: 3, name: "Gelderland", slug: "gelderland", seo_text: "Ontdek de perfecte hotels met jacuzzi in Gelderland", created_at: "2024-01-01" },
  { id: 4, name: "Zuid-Holland", slug: "zuid-holland", seo_text: "Ontdek de perfecte hotels met jacuzzi in Zuid-Holland", created_at: "2024-01-01" },
  { id: 5, name: "Utrecht", slug: "utrecht", seo_text: "Ontdek de perfecte hotels met jacuzzi in Utrecht", created_at: "2024-01-01" },
  { id: 6, name: "Noord-Brabant", slug: "noord-brabant", seo_text: "Ontdek de perfecte hotels met jacuzzi in Noord-Brabant", created_at: "2024-01-01" },
  { id: 7, name: "Groningen", slug: "groningen", seo_text: "Ontdek de perfecte hotels met jacuzzi in Groningen, waar de rust van het noorden samenvalt met luxe wellness faciliteiten. Van landgoederen tot stadshotels, vind uw ideale romantische uitje.", created_at: "2024-01-01" },
  { id: 8, name: "Flevoland", slug: "flevoland", seo_text: "Ontdek de perfecte hotels met jacuzzi in Flevoland, de jongste provincie van Nederland met moderne steden en unieke poldernatuur. Van Almere tot Emmeloord, geniet van innovatieve wellness accommodaties.", created_at: "2024-01-01" },
  { id: 9, name: "Drenthe", slug: "drenthe", seo_text: "Ontdek de perfecte hotels met jacuzzi in Drenthe, waar de rust van de natuur samenvalt met authentieke gastvrijheid. Van Emmen tot Assen, geniet van wellness in het groene hart van het noorden.", created_at: "2024-01-01" },
  { id: 10, name: "Overijssel", slug: "overijssel", seo_text: "Ontdek de perfecte hotels met jacuzzi in Overijssel, waar historische steden en natuurlijke schoonheid samenkomen met gastvrije wellness accommodaties. Van Almelo tot Deventer, geniet van unieke verblijven in het hart van Nederland.", created_at: "2024-01-01" },
  { id: 11, name: "Zeeland", slug: "zeeland", seo_text: "Ontdek de perfecte hotels met jacuzzi in Zeeland, waar de rust van de kust samenvloeit met luxe wellness faciliteiten. Van Renesse tot Middelburg, vind uw ideale romantische uitje aan zee.", created_at: "2024-01-01" },
  { id: 12, name: "Friesland", slug: "friesland", seo_text: "Ontdek de perfecte hotels met jacuzzi in Friesland, waar de natuurlijke schoonheid van meren en weilanden samenkomt met authentieke Friese gastvrijheid. Van Leeuwarden tot Sneek, geniet van unieke wellness ervaringen.", created_at: "2024-01-01" }
]

const mockCities: City[] = [
  { id: 1, name: "Maastricht", slug: "maastricht", province_id: 1, seo_text: "", created_at: "2024-01-01" },
  { id: 2, name: "Amsterdam", slug: "amsterdam", province_id: 2, seo_text: "", created_at: "2024-01-01" },
  { id: 3, name: "Arnhem", slug: "arnhem", province_id: 3, seo_text: "", created_at: "2024-01-01" },
  { id: 4, name: "Rotterdam", slug: "rotterdam", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 15, name: "Den Haag", slug: "den-haag", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 40, name: "Sassenheim", slug: "sassenheim", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 41, name: "Leiden", slug: "leiden", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 42, name: "Wassenaar", slug: "wassenaar", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 43, name: "Nootdorp", slug: "nootdorp", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 44, name: "Ridderkerk", slug: "ridderkerk", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 45, name: "Dordrecht", slug: "dordrecht", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 5, name: "Utrecht", slug: "utrecht-stad", province_id: 5, seo_text: "", created_at: "2024-01-01" },
  { id: 34, name: "Hilversum", slug: "hilversum", province_id: 5, seo_text: "", created_at: "2024-01-01" },
  { id: 28, name: "Vianen", slug: "vianen", province_id: 5, seo_text: "", created_at: "2024-01-01" },
  { id: 36, name: "Houten", slug: "houten", province_id: 5, seo_text: "", created_at: "2024-01-01" },
  { id: 37, name: "Breukelen", slug: "breukelen", province_id: 5, seo_text: "", created_at: "2024-01-01" },
  { id: 38, name: "De Bilt", slug: "de-bilt", province_id: 5, seo_text: "", created_at: "2024-01-01" },
  { id: 39, name: "Amersfoort", slug: "amersfoort", province_id: 5, seo_text: "", created_at: "2024-01-01" },
  { id: 6, name: "Eindhoven", slug: "eindhoven", province_id: 6, seo_text: "", created_at: "2024-01-01" },
  { id: 30, name: "Tilburg", slug: "tilburg", province_id: 6, seo_text: "", created_at: "2024-01-01" },
  { id: 31, name: "Vught", slug: "vught", province_id: 6, seo_text: "", created_at: "2024-01-01" },
  { id: 32, name: "Gilze", slug: "gilze", province_id: 6, seo_text: "", created_at: "2024-01-01" },
  { id: 33, name: "Deurne", slug: "deurne", province_id: 6, seo_text: "", created_at: "2024-01-01" },
  { id: 60, name: "Oisterwijk", slug: "oisterwijk", province_id: 6, seo_text: "", created_at: "2024-01-01" },
  { id: 20, name: "Akersloot", slug: "akersloot", province_id: 2, seo_text: "", created_at: "2024-01-01" },
  { id: 21, name: "Wieringermeer", slug: "wieringermeer", province_id: 2, seo_text: "", created_at: "2024-01-01" },
  { id: 22, name: "Spaarnwoude", slug: "spaarnwoude", province_id: 2, seo_text: "", created_at: "2024-01-01" },
  { id: 23, name: "Heiloo", slug: "heiloo", province_id: 2, seo_text: "", created_at: "2024-01-01" },
  { id: 24, name: "Schiphol", slug: "schiphol", province_id: 2, seo_text: "", created_at: "2024-01-01" },
  { id: 26, name: "Huizen", slug: "huizen", province_id: 2, seo_text: "", created_at: "2024-01-01" },
  { id: 27, name: "De Koog", slug: "de-koog", province_id: 2, seo_text: "", created_at: "2024-01-01" },
  { id: 29, name: "Schoorl", slug: "schoorl", province_id: 2, seo_text: "", created_at: "2024-01-01" },
  { id: 17, name: "Renesse", slug: "renesse", province_id: 11, seo_text: "", created_at: "2024-01-01" },
  { id: 18, name: "Middelburg", slug: "middelburg", province_id: 11, seo_text: "", created_at: "2024-01-01" },
  { id: 19, name: "Goes", slug: "goes", province_id: 11, seo_text: "", created_at: "2024-01-01" },
  { id: 7, name: "Veluwe", slug: "veluwe", province_id: 3, seo_text: "", created_at: "2024-01-01" },
  { id: 8, name: "Oosterbeek", slug: "oosterbeek", province_id: 3, seo_text: "", created_at: "2024-01-01" },
  { id: 9, name: "Nijmegen", slug: "nijmegen", province_id: 3, seo_text: "", created_at: "2024-01-01" },
  { id: 25, name: "Groningen", slug: "groningen", province_id: 7, seo_text: "", created_at: "2024-01-01" },
  { id: 46, name: "Leeuwarden", slug: "leeuwarden", province_id: 12, seo_text: "", created_at: "2024-01-01" },
  { id: 47, name: "Sneek", slug: "sneek", province_id: 12, seo_text: "", created_at: "2024-01-01" },
  { id: 48, name: "Heerenveen", slug: "heerenveen", province_id: 12, seo_text: "", created_at: "2024-01-01" },
  { id: 49, name: "Drachten", slug: "drachten", province_id: 12, seo_text: "", created_at: "2024-01-01" },
  { id: 50, name: "Wolvega", slug: "wolvega", province_id: 12, seo_text: "", created_at: "2024-01-01" },
  { id: 51, name: "Emmeloord", slug: "emmeloord", province_id: 8, seo_text: "", created_at: "2024-01-01" },
  { id: 52, name: "Almere", slug: "almere", province_id: 8, seo_text: "", created_at: "2024-01-01" },
  { id: 53, name: "Emmen", slug: "emmen", province_id: 9, seo_text: "", created_at: "2024-01-01" },
  { id: 54, name: "Assen", slug: "assen", province_id: 9, seo_text: "", created_at: "2024-01-01" },
  { id: 55, name: "Dwingeloo", slug: "dwingeloo", province_id: 9, seo_text: "", created_at: "2024-01-01" },
  { id: 56, name: "Hoogersmilde", slug: "hoogersmilde", province_id: 9, seo_text: "", created_at: "2024-01-01" },
  { id: 57, name: "Almelo", slug: "almelo", province_id: 10, seo_text: "", created_at: "2024-01-01" },
  { id: 59, name: "Hellendoorn", slug: "hellendoorn", province_id: 10, seo_text: "", created_at: "2024-01-01" }
]

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

// Mock room data for Noord-Holland
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
          <p className="text-brand-navy-600 text-base leading-relaxed line-clamp-3">
            {room.description}
          </p>
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

// Add generateStaticParams
export async function generateStaticParams() {
  return mockProvinces.map(({ slug }) => ({ 'provincie-slug': slug }))
}

// Add revalidate for ISR
export const revalidate = 86400 // 24 hours

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params
  const province = mockProvinces.find(p => p.slug === awaitedParams.slug)

  if (!province) return {}

  const title = `Hotelkamers met jacuzzi in ${province.name} - Luxe wellness suites | Hotelmetjacuzzi.net`
  const description = `Ontdek de mooiste hotelkamers met privé jacuzzi in ${province.name}. Luxe wellness suites met bubbelbad, sauna en romantische faciliteiten. Boek nu vanaf €149!`

  return {
    title,
    description,
    alternates: {
      canonical: `/hotelkamer-met-jacuzzi/${province.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/hotelkamer-met-jacuzzi/${province.slug}`,
      type: 'website',
      images: [{
        url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop',
        width: 1600,
        height: 900,
        alt: `Jacuzzi hotelkamer in ${province.name}`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop'],
    },
  }
}

function generateProvinceRoomSeoText(provinceName: string, cities: City[] = []): string {
  const cityNames = cities.slice(0, 3).map(city => city.name).join(', ') || 'diverse steden'
  
  return (
    `${provinceName} biedt een uitstekende selectie van hotelkamers met jacuzzi voor de ultieme wellness ervaring. Of je nu een romantisch weekend plant of gewoon wilt ontspannen, een jacuzzi op de kamer biedt privacy en luxe. In steden als ${cityNames} vind je diverse opties, van wellness suites tot complete spa kamers.\n\n` +
    
    `## Hotelkamers met jacuzzi in ${provinceName}: wat kun je verwachten?\n\n` +
    `Hotelkamers met jacuzzi in ${provinceName} bieden verschillende opties: privé jacuzzi's op de kamer, wellness suites met extra faciliteiten, of kamers met bubbelbad en sauna. De prijzen variëren van €149 tot €400 per nacht, afhankelijk van de luxe en het seizoen. Veel hotels bieden ook arrangementen met diner, massage of andere extra's.\n\n` +
    
    `## Populaire locaties voor jacuzzi kamers in ${provinceName}\n\n` +
    `De beste hotelkamers met jacuzzi vind je verspreid door de provincie. In stedelijke gebieden zoals ${cityNames} zijn er moderne opties met stadszicht, terwijl de landelijke gebieden meer rust en natuur bieden. Zoek je naar termen als "jacuzzi op kamer ${provinceName}", "wellness kamer ${provinceName}" of "romantische jacuzzi kamer ${provinceName}"? Dan vind je zeker wat je zoekt.\n\n` +
    
    `## Activiteiten combineren met je verblijf\n\n` +
    `Een verblijf in een jacuzzi kamer in ${provinceName} is perfect te combineren met lokale activiteiten. Verken historische stadscentra, maak wandelingen door natuurgebieden, bezoek musea of geniet van lokale gastronomie. Na een dag vol indrukken is het heerlijk ontspannen in je eigen bubbelbad.\n\n` +
    
    `## Tips voor je boeking\n\n` +
    `Boek ruim van tevoren voor de beste kamers met jacuzzi, vooral in weekenden en vakantieperiodes. Vergelijk prijzen via verschillende aanbieders en let op speciale arrangementen. Check altijd de recensies over de wellness faciliteiten en vraag zo nodig naar de exacte voorzieningen op de kamer.\n\n` +
    
    `Ontdek de beste jacuzzi kamers in ${provinceName} en geniet van een onvergetelijk verblijf met extra comfort en luxe. De combinatie van ontspanning en de unieke omgeving maakt je verblijf compleet.`
  )
}

export default async function ProvinceRoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params
  const province = mockProvinces.find(p => p.slug === awaitedParams.slug)

  if (!province) {
    notFound()
  }

  const allCities = mockCities.filter(c => c.province_id === province.id)
  const rooms = jacuzziRooms.filter(r => r.province === province.name)

  const provinceName = province.name
  const seoText = province.seo_text || generateProvinceRoomSeoText(provinceName, allCities)

  // Province-specific hero images
  const getProvinceHeroImage = (provinceName: string) => {
    const images = {
      'Gelderland': '/images/Veluwe - hero.jpg',
      'Noord-Holland': 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1600&auto=format&fit=crop',
      'Limburg': 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop',
      'Zeeland': '/images/Zeeland-Hero.jpg',
      'Zuid-Holland': '/images/Zuid-Hollad-Erasmus.jpg',
      'Utrecht': '/images/Domtoren-Utrecht-Hero.jpg',
      'Groningen': '/images/Groningen-Hero.jpg',
      'Friesland': '/images/Leeuwarden - Hero.jpg',
      'Noord-Brabant': 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop',
      'Overijssel': '/images/Overijssel - Hero.jpg'
    }
    return images[provinceName as keyof typeof images] || images['Noord-Brabant']
  }

  return (
    <main className="min-h-screen bg-light-gray">
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
                  <li><Link href="/hotelkamer-met-jacuzzi" className="text-brand-navy-200 hover:text-pure-white">Hotelkamers met Jacuzzi</Link></li>
                  <li className="text-brand-navy-300">/</li>
                  <li className="text-pure-white font-semibold">{provinceName}</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Hotelkamers met Jacuzzi in {provinceName}
              </h1>
              <p className="text-xl md:text-2xl text-brand-navy-200 mb-8 leading-relaxed">
                Ontdek de mooiste <strong>hotelkamers met jacuzzi</strong> in {provinceName}. 
                Van romantische wellness suites tot luxe spa kamers - vind jouw perfecte ontspanningsbestemming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#rooms"
                  className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Bekijk alle kamers
                </Link>
                <Link 
                  href="/hotelkamer-met-jacuzzi" 
                  className="border-2 border-brand-orange-600 text-brand-orange-600 hover:bg-brand-orange-600 hover:text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Alle provincies
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src={getProvinceHeroImage(provinceName)}
                alt={`${provinceName} - Hotelkamers met jacuzzi en wellness`}
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange-600 text-pure-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">{rooms?.length || 0}+</div>
                <div className="text-sm">Kamers beschikbaar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section id="seo-content" className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 text-center mb-8">
              Alles over Hotelkamers met Jacuzzi in {provinceName}
            </h2>
            <div className="bg-brand-navy-50 rounded-2xl p-8 shadow-lg border border-brand-navy-200">
              <div className="prose prose-lg max-w-none text-brand-navy-700">
                {seoText.split('\n\n').map((paragraph: string, i: number) => {
                  if (paragraph.startsWith('## ')) {
                    return <h3 key={i} className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">{paragraph.replace('## ', '')}</h3>
                  }
                  return <p key={i} className="mb-6 leading-relaxed">{paragraph}</p>
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Top Jacuzzi Kamers in {provinceName}
            </h2>
            <p className="text-lg text-brand-navy-600">
              Onze selectie van de beste hotelkamers met privé jacuzzi's en wellness faciliteiten
            </p>
          </div>
          {rooms && rooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-brand-navy-600 mb-4">Nog geen kamers beschikbaar in {provinceName}</p>
              <p className="text-brand-navy-500">We voegen binnenkort nieuwe jacuzzi kamers toe!</p>
            </div>
          )}
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
                Alles wat je wilt weten over hotelkamers met jacuzzi in {provinceName}
              </p>
            </div>
            <div className="bg-pure-white rounded-2xl shadow-lg p-8 border border-brand-navy-200 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Welke hotelkamers in {provinceName} hebben een privé jacuzzi?</h3>
                <p className="text-brand-navy-700 leading-relaxed">Veel hotels bieden kamers met privé jacuzzi. Kijk naar opties in {allCities?.[0]?.name || 'hoofdsteden'} voor de beste keuzes. Deze kamers combineren vaak luxe accommodatie met wellness faciliteiten.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Wat kost een nacht in een jacuzzi kamer in {provinceName}?</h3>
                <p className="text-brand-navy-700 leading-relaxed">Prijzen starten vanaf €149 per nacht, afhankelijk van seizoen, locatie en luxeniveau. Premium kamers met uitgebreide wellness faciliteiten kunnen tot €400 per nacht kosten.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Zijn er romantische jacuzzi kamers in {provinceName}?</h3>
                <p className="text-brand-navy-700 leading-relaxed">Absoluut! Veel hotels richten zich specifiek op koppels met romantische arrangementen, privé wellness en bijzondere ervaringen zoals champagne en chocolade.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Kan ik een jacuzzi kamer boeken met uitzicht in {provinceName}?</h3>
                <p className="text-brand-navy-700 leading-relaxed">Ja, verschillende hotels bieden kamers met prachtig uitzicht op natuur, water of historische stadscentra, gecombineerd met luxe jacuzzi faciliteiten.</p>
              </div>
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://jacuzzihotels.nl/' },
              { '@type': 'ListItem', position: 2, name: 'Hotelkamers met Jacuzzi', item: 'https://jacuzzihotels.nl/hotelkamer-met-jacuzzi' },
              { '@type': 'ListItem', position: 3, name: provinceName, item: `https://jacuzzihotels.nl/hotelkamer-met-jacuzzi/${province.slug}` }
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
            name: `Hotelkamers met jacuzzi in ${provinceName}`,
            numberOfItems: (rooms || []).length,
            itemListElement: (rooms || []).map((r: Room, i: number) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Hotel',
                name: `${r.name} - ${r.hotelName}`,
                url: `https://jacuzzihotels.nl/hotel/${r.hotelName.toLowerCase().replace(/\s+/g, '-')}`,
                image: r.image,
                priceRange: r.priceFrom,
                starRating: {
                  '@type': 'Rating',
                  ratingValue: r.rating,
                  bestRating: 5
                },
                address: {
                  '@type': 'PostalAddress',
                  addressRegion: provinceName,
                  addressLocality: r.city
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
                name: `Welke hotelkamers in ${provinceName} hebben een privé jacuzzi?`,
                acceptedAnswer: { 
                  '@type': 'Answer', 
                  text: `Veel hotels bieden kamers met privé jacuzzi. Kijk naar opties in ${allCities?.[0]?.name || 'hoofdsteden'} voor de beste keuzes.` 
                }
              },
              {
                '@type': 'Question',
                name: `Wat kost een nacht in een jacuzzi kamer in ${provinceName}?`,
                acceptedAnswer: { 
                  '@type': 'Answer', 
                  text: `Prijzen starten vanaf €149, afhankelijk van seizoen en locatie. Check actuele tarieven via de links.` 
                }
              },
              {
                '@type': 'Question',
                name: `Zijn er romantische jacuzzi kamers in ${provinceName}?`,
                acceptedAnswer: { 
                  '@type': 'Answer', 
                  text: `Ja, diverse hotels richten zich op koppels met privé wellness en arrangementen.` 
                }
              },
              {
                '@type': 'Question',
                name: `Kan ik een jacuzzi kamer boeken met uitzicht in ${provinceName}?`,
                acceptedAnswer: { 
                  '@type': 'Answer', 
                  text: `Sommige hotels bieden kamers met uitzicht op natuur of stad, gecombineerd met jacuzzi faciliteiten.` 
                }
              }
            ]
          })
        }}
      />
    </main>
  )
}
