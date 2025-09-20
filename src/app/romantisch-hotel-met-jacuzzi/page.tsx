import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// Romantic Rose Pattern Background Component
const RosePattern = () => (
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      opacity: 0.04,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='rose-pattern' patternUnits='userSpaceOnUse' width='100' height='100'%3E%3Cg fill='none' stroke='%23D97706' stroke-width='0.8'%3E%3C!-- Rose bloemen --%3E%3Ccircle cx='20' cy='20' r='8'/%3E%3Ccircle cx='20' cy='20' r='12' opacity='0.5'/%3E%3Ccircle cx='80' cy='20' r='6'/%3E%3Ccircle cx='80' cy='20' r='9' opacity='0.6'/%3E%3Ccircle cx='20' cy='80' r='7'/%3E%3Ccircle cx='20' cy='80' r='10' opacity='0.4'/%3E%3Ccircle cx='80' cy='80' r='9'/%3E%3Ccircle cx='80' cy='80' r='13' opacity='0.3'/%3E%3Ccircle cx='50' cy='50' r='5'/%3E%3Ccircle cx='50' cy='50' r='8' opacity='0.7'/%3E%3C!-- Romantische lijnen --%3E%3Cpath d='M15 15 Q25 10 35 15 Q45 20 55 15' opacity='0.6'/%3E%3Cpath d='M15 85 Q25 80 35 85 Q45 90 55 85' opacity='0.5'/%3E%3Cpath d='M75 15 Q85 10 95 15' opacity='0.4'/%3E%3Cpath d='M75 85 Q85 80 95 85' opacity='0.6'/%3E%3C!-- Hart vormen --%3E%3Cpath d='M40 35 C40 30, 45 30, 50 35 C55 30, 60 30, 60 35 C60 40, 50 50, 50 50 C50 50, 40 40, 40 35 Z' fill='%23D97706' opacity='0.2'/%3E%3Cpath d='M25 70 C25 67, 27 67, 28 70 C29 67, 31 67, 31 70 C31 72, 28 75, 28 75 C28 75, 25 72, 25 70 Z' fill='%23D97706' opacity='0.3'/%3E%3Cpath d='M72 45 C72 43, 74 43, 75 45 C76 43, 78 43, 78 45 C78 47, 75 49, 75 49 C75 49, 72 47, 72 45 Z' fill='%23D97706' opacity='0.4'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23rose-pattern)'/%3E%3C/svg%3E")`
    }}
  />
)

// Romantic Tips Card Component
interface RomanticTipCardProps {
  icon: string
  title: string
  description: string
}

const RomanticTipCard = ({ icon, title, description }: RomanticTipCardProps) => (
  <div className="bg-pure-white rounded-xl p-6 shadow-lg border border-brand-navy-200 text-center hover:shadow-xl transition-all duration-300 hover:border-brand-orange-600">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-brand-navy-900 mb-3">{title}</h3>
    <p className="text-brand-navy-700">{description}</p>
  </div>
)

export const metadata: Metadata = {
  title: 'Romantische Hotels met Jacuzzi op de Kamer in Nederland | Hotelmetjacuzzi.net',
  description: 'Ontdek de meest romantische hotels met jacuzzi in Nederland. Perfect voor een onvergetelijke romantische uitje met uw partner. Boek nu vanaf €149 per nacht!',
  keywords: 'romantisch hotel met jacuzzi, romantische hotels Nederland, jacuzzi suite romantisch, wellness romantisch weekend, romantisch verblijf jacuzzi',
  alternates: {
    canonical: '/romantisch-hotel-met-jacuzzi',
  },
  openGraph: {
    title: 'Romantische Hotels met Jacuzzi op de Kamer in Nederland',
    description: 'Creëer onvergetelijke herinneringen in de meest romantische hotels met jacuzzi. Perfect voor speciale momenten en romantische ontsnappingen.',
    url: '/romantisch-hotel-met-jacuzzi',
    type: 'website',
    images: [{
      url: '/images/Kasteel Bloemendal.jpg',
      width: 1600,
      height: 900,
      alt: 'Romantisch hotel met jacuzzi',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romantische Hotels met Jacuzzi op de Kamer in Nederland',
    description: 'Creëer onvergetelijke herinneringen in de meest romantische hotels met jacuzzi. Perfect voor speciale momenten en romantische ontsnappingen.',
    images: ['/images/Kasteel Bloemendal.jpg'],
  },
}

export default function RomantischHotelMetJacuzziPage() {
  // Selectie van romantische hotels met speciale badges
  const romanticBadges = [
    "Meest Romantisch",
    "Perfect voor Proposals", 
    "Honeymoon Special",
    "Kasteel Ervaring",
    "Privé & Intiem",
    "Spa Romance",
    "Adults Only",
    "Luxury Romance"
  ]

  // Top 8 romantische jacuzzi hotels (selectie van bestaande hotels)
  const romanticJacuzziHotels = [
    {
      id: 1,
      name: "Kasteel Bloemendal",
      city: "Maastricht",
      province: "Limburg", 
      price_range: "Vanaf €225",
      rating: 4.8,
      description: "Historisch kasteel uit de 18e eeuw met luxueuze suites en privé jacuzzi's. Een sprookjesachtige setting voor uw romantische uitje.",
      image_url: "/images/Kasteel Bloemendal.jpg",
      facilities: ["Privé jacuzzi", "Kasteel ambiance", "Fine dining", "Romantisch", "Historisch"]
    },
    {
      id: 5,
      name: "Inntel Hotels Amsterdam Centre",
      city: "Amsterdam", 
      province: "Noord-Holland",
      price_range: "Vanaf €195",
      rating: 4.3,
      description: "Modern design hotel in hartje Amsterdam met unieke wellness kamers en romantische jacuzzi suites.",
      image_url: "/images/Inntel Hotels Amsterdam Centre.jpg", 
      facilities: ["Design jacuzzi", "Centrum locatie", "Romantisch", "Modern design", "Wellness Center"]
    },
    {
      id: 2,
      name: "Olympic Hotel Amsterdam",
      city: "Amsterdam",
      province: "Noord-Holland", 
      price_range: "Vanaf €189",
      rating: 4.4,
      description: "Luxe Olympic Hotel met elegante spa suites en romantische jacuzzi faciliteiten in Amsterdam.",
      image_url: "/images/Olympic Hotel.jpg",
      facilities: ["Spa Suite", "Romantisch", "Olympisch Zwembad", "Luxe jacuzzi", "Restaurant"]
    },
    {
      id: 4,
      name: "Van der Valk Schiphol",
      city: "Schiphol",
      province: "Noord-Holland",
      price_range: "Vanaf €189", 
      rating: 4.6,
      description: "Modern airport hotel met romantische Deluxe Plus kamers en privé jacuzzi's voor een intieme ervaring.",
      image_url: "/images/van-der-valk-schiphol-exterior.jpg",
      facilities: ["Privé jacuzzi", "Deluxe kamers", "Modern", "Romantisch", "Business Center"]
    },
    {
      id: 6,
      name: "Wellness-Hotel Trivium",
      city: "Amersfoort",
      province: "Utrecht",
      price_range: "Vanaf €169",
      rating: 4.5,
      description: "Exclusief wellness hotel met romantische spa suites en uitgebreide jacuzzi faciliteiten.",
      image_url: "/images/Wellness-Hotel Trivium.jpg", 
      facilities: ["Wellness spa", "Romantisch", "Spa suites", "Jacuzzi", "Massages"]
    },
    {
      id: 8,
      name: "Van der Valk De Bilt - Utrecht", 
      city: "De Bilt",
      province: "Utrecht",
      price_range: "Vanaf €159",
      rating: 4.2,
      description: "Romantisch Van der Valk hotel nabij Utrecht met wellness kamers en privé jacuzzi faciliteiten.",
      image_url: "/images/Van der Valk De Bilt - Utrecht.jpg",
      facilities: ["Wellness kamers", "Romantisch", "Privé jacuzzi", "Restaurant", "Fitness"]
    },
    {
      id: 10,
      name: "Langoed hotel Renesse",
      city: "Renesse", 
      province: "Zeeland",
      price_range: "Vanaf €179",
      rating: 4.4,
      description: "Romantisch strandhotel in Zeeland met luxe jacuzzi suites en adembenemend zeezicht.",
      image_url: "/images/Langoed hotel Renesse.jpg",
      facilities: ["Zeezicht", "Romantisch", "Strandlocatie", "Jacuzzi suites", "Wellness"]
    },
    {
      id: 12,
      name: "Kloosterhotel Willibrordhaeghe",
      city: "Deurne",
      province: "Noord-Brabant", 
      price_range: "Vanaf €149",
      rating: 4.3,
      description: "Uniek kloosterhotel met authentieke charme en romantische wellness kamers met jacuzzi.",
      image_url: "/images/Kloosterhotel Willibrordhaeghe.jpg",
      facilities: ["Klooster charme", "Romantisch", "Authentiek", "Wellness", "Rust"]
    },
    {
      id: 13,
      name: "Hotel-Restaurant Carlton",
      city: "Den Haag",
      province: "Zuid-Holland",
      price_range: "Vanaf €169",
      rating: 4.4,
      description: "Elegant hotel in het hart van Den Haag met verfijnde jacuzzi kamers en uitstekend restaurant. Perfect gelegen voor zowel zakelijke als romantische verblijven.",
      image_url: "/images/Hotel-Restaurant Carlton.jpg",
      facilities: ["Privé jacuzzi", "Fine dining", "Centrum locatie", "Business center", "Romantisch"]
    },
    {
      id: 14,
      name: "Mainport Design Hotel Rotterdam",
      city: "Rotterdam",
      province: "Zuid-Holland",
      price_range: "Vanaf €199",
      rating: 4.6,
      description: "Iconisch design hotel aan de Maas met luxe jacuzzi suites en spectaculair uitzicht over Rotterdam. Perfecte combinatie van modern design en wellness.",
      image_url: "/images/Mainport Design Hotel Rotterdam .jpg",
      facilities: ["Designer jacuzzi", "Spa center", "Fine dining", "Maas uitzicht", "Design interieur"]
    },
    {
      id: 15,
      name: "Boutique Hotel Corona Den Haag",
      city: "Den Haag",
      province: "Zuid-Holland",
      price_range: "Vanaf €159",
      rating: 4.3,
      description: "Charmant boutique hotel in historisch pand met stijlvolle jacuzzi kamers en persoonlijke service. Een unieke ervaring in het hart van Den Haag.",
      image_url: "/images/Boutique Hotel Corona Den Haag.jpg",
      facilities: ["Boutique jacuzzi", "Persoonlijke service", "Historic charm", "Romantisch", "Concierge"]
    },
    {
      id: 16,
      name: "Van der Valk Leiden",
      city: "Leiden",
      province: "Zuid-Holland",
      price_range: "Vanaf €159",
      rating: 4.3,
      description: "Modern Van der Valk hotel in het hart van Leiden met luxe wellness faciliteiten en jacuzzi kamers. Perfect gelegen nabij de historische binnenstad.",
      image_url: "/images/Van der Valk Leiden.jpg",
      facilities: ["Wellness jacuzzi", "Historische locatie", "Restaurant", "Fitness", "Romantisch"]
    },
    {
      id: 17,
      name: "Van der Valk Den Haag - Wassenaar",
      city: "Wassenaar",
      province: "Zuid-Holland",
      price_range: "Vanaf €179",
      rating: 4.4,
      description: "Elegant Van der Valk hotel in Wassenaar met premium jacuzzi suites en spa faciliteiten. Rustige ligging nabij Den Haag en de kust.",
      image_url: "/images/Van der Valk Den Haag - Wassenaar.jpg",
      facilities: ["Premium jacuzzi", "Spa faciliteiten", "Kust nabij", "Restaurant", "Romantisch"]
    },
    {
      id: 18,
      name: "Van der Valk Dordrecht",
      city: "Dordrecht",
      province: "Zuid-Holland",
      price_range: "Vanaf €169",
      rating: 4.5,
      description: "Stijlvol Van der Valk hotel in historisch Dordrecht met luxe jacuzzi suites en wellness centrum. Perfecte combinatie van historie en modern comfort.",
      image_url: "/images/Van der Valk Dordrecht.jpg",
      facilities: ["Luxe jacuzzi suites", "Wellness centrum", "Historische stad", "Restaurant", "Romantisch"]
    }
  ]

  const romanticJacuzziHotelsWithBadges = romanticJacuzziHotels.map((hotel, index) => ({
    ...hotel,
    romanticBadge: romanticBadges[index]
  }))

  return (
    <main className="min-h-screen bg-light-gray">
      {/* Romantic Rose Pattern Background */}
      <RosePattern />

      {/* Hero Section */}
      <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm">
                  <li><Link href="/" className="text-brand-navy-200 hover:text-pure-white">Home</Link></li>
                  <li className="text-brand-navy-300">/</li>
                  <li className="text-pure-white font-semibold">Romantisch Hotel met Jacuzzi</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Romantische hotels met jacuzzi op de kamer in Nederland
              </h1>
              <p className="text-xl md:text-2xl text-brand-navy-200 mb-8 leading-relaxed">
                Creëer onvergetelijke herinneringen in de meest romantische hotels met jacuzzi. 
                Perfect voor speciale momenten en romantische ontsnappingen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#hotels"
                  className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Ontdek romantische hotels ♥
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/Kasteel Bloemendal.jpg"
                alt="Romantisch hotel met jacuzzi"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange-600 text-pure-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">Vanaf €149</div>
                <div className="text-sm">per romantische nacht</div>
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
              Romance & Wellness Perfect Verenigd
            </h2>
            <div className="bg-brand-navy-50 rounded-2xl p-8 shadow-lg border border-brand-navy-200">
              <div className="prose prose-lg max-w-none text-brand-navy-700">
                <p className="mb-6 leading-relaxed">
                  Een <strong>romantisch hotel met jacuzzi</strong> biedt de perfecte setting voor onvergetelijke momenten samen. 
                  Of het nu gaat om een speciaal jubileum, een huwelijksaanzoek, huwelijksreis of gewoon een romantisch weekend weg - 
                  een <strong>romantische jacuzzi suite</strong> creëert de intieme sfeer die u zoekt voor uw bijzondere gelegenheid.
                </p>
                
                <p className="mb-6 leading-relaxed">
                  De <strong>romantische hotels Nederland</strong> in onze selectie zijn zorgvuldig gekozen op basis van hun unieke charme, 
                  privacy en romantische voorzieningen. Van historische kastelen tot moderne design hotels - elk hotel biedt iets speciaals 
                  voor koppels die op zoek zijn naar een <strong>romantisch verblijf jacuzzi</strong> ervaring. 
                  Veel hotels bieden speciale arrangementen met champagne, rozen en romantische diners.
                </p>
                
                <p className="mb-6 leading-relaxed">
                  De combinatie van een privé jacuzzi op de kamer en romantische ambiance zorgt voor de ultieme intimiteit. 
                  Stel je voor: kaarslicht, champagne, en jullie eigen privé wellness oase. Deze <strong>wellness romantisch weekend</strong> 
                  ervaringen creëren herinneringen die een leven lang meegaan en versterken de band tussen partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 8 Romantic Hotels Section */}
      <section id="hotels" className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Top 8 romantische jacuzzi hotels
            </h2>
            <p className="text-lg text-brand-navy-600">
              Onze selectie van de meest romantische hotels met jacuzzi voor een onvergetelijk verblijf
            </p>
          </div>
          
          <div className="space-y-6">
            {romanticJacuzziHotelsWithBadges.map((hotel, index) => (
              <div key={hotel.id} className="bg-pure-white rounded-2xl shadow-lg border-2 border-brand-navy-200 overflow-hidden hover:shadow-xl hover:border-brand-orange-600 transition-all duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 h-48 lg:h-auto relative">
                    <Image
                      src={hotel.image_url}
                      alt={`${hotel.name} - Romantisch jacuzzi hotel`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="bg-brand-orange-600 text-pure-white rounded-lg px-2 py-1 shadow-lg">
                        <span className="text-xs font-bold uppercase">{romanticBadges[index]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3 p-6 flex flex-col lg:flex-row lg:items-center">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="bg-brand-orange-600 text-pure-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                          ♥
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-brand-navy-900 mb-1">{hotel.name}</h3>
                          <p className="text-brand-navy-500 text-sm mb-3">
                            {hotel.city}, {hotel.province}
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
                        Boek romantisch verblijf
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Romantic Tips Section */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Tips voor het perfecte romantische verblijf
            </h2>
            <p className="text-lg text-brand-navy-600">
              Maak van uw jacuzzi hotel ervaring een onvergetelijk romantisch moment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RomanticTipCard
              icon="🌹"
              title="Boek speciale arrangementen"
              description="Veel hotels bieden romantische pakketten met champagne, rozen en romantische diners voor een complete ervaring."
            />
            <RomanticTipCard
              icon="🕯️"
              title="Vraag om kaarsen"
              description="Vraag de receptie om kaarsen en romantische verlichting voor een intieme sfeer in uw jacuzzi suite."
            />
            <RomanticTipCard
              icon="🥂"
              title="Plan verrassingen"
              description="Regel vooraf speciale verrassingen zoals massage behandelingen of in-room dining voor extra romantiek."
            />
            <RomanticTipCard
              icon="💍"
              title="Perfect voor proposals"
              description="Een privé jacuzzi in romantische setting is de ideale plek voor huwelijksaanzoeken en bijzondere momenten."
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
                Alles wat je wilt weten over romantische jacuzzi hotels
              </p>
            </div>
            <div className="bg-pure-white rounded-2xl shadow-lg p-8 border border-brand-navy-200 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Wat maakt een hotel romantisch voor koppels?</h3>
                <p className="text-brand-navy-700 leading-relaxed">
                  Romantische hotels bieden intieme settings, privacy, speciale arrangementen voor koppels, en vaak unieke locaties zoals kastelen of afgelegen plekken. 
                  De combinatie van luxe voorzieningen, persoonlijke service en romantische ambiance creëert de perfecte sfeer.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Zijn romantische arrangementen duurder dan standaard verblijven?</h3>
                <p className="text-brand-navy-700 leading-relaxed">
                  Romantische arrangementen bevatten vaak extra's zoals champagne, bloemen, speciale decoratie en soms massage of diner. 
                  Het prijsverschil is meestal €50-150 per nacht, maar de toegevoegde waarde voor bijzondere gelegenheden is vaak het waard.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Welke periode is het beste voor een romantisch jacuzzi weekend?</h3>
                <p className="text-brand-navy-700 leading-relaxed">
                  Romantische weekends zijn populair rond Valentijnsdag, jubilea en in de wintermaanden. Voor meer privacy en betere prijzen kunt u doordeweeks boeken. 
                  Herfst en winter zijn ideaal voor jacuzzi romantiek door de gezellige, intime sfeer.
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
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Ontdek meer jacuzzi hotels
            </h2>
            <p className="text-lg text-brand-navy-600">
              Vind het perfecte hotel voor elke gelegenheid
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              href="/goedkoop-hotel-met-jacuzzi"
              className="group bg-brand-navy-50 rounded-2xl p-8 text-center border border-brand-navy-200 hover:border-brand-orange-600 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600">
                Goedkope jacuzzi hotels
              </h3>
              <p className="text-brand-navy-600">
                Luxe en ontspanning zonder dat het je een fortuin kost
              </p>
              <div className="flex items-center justify-center mt-4">
                <span className="group-hover:translate-x-1 transition-transform duration-300">Bekijk budget opties</span>
                <svg width="14" height="14" viewBox="0 0 14 14" className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <path d="M5 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </Link>

            <Link 
              href="/wellness-hotel-met-jacuzzi"
              className="group bg-brand-navy-50 rounded-2xl p-8 text-center border border-brand-navy-200 hover:border-brand-orange-600 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600">
                Wellness jacuzzi hotels
              </h3>
              <p className="text-brand-navy-600">
                Complete wellness ervaring met spa faciliteiten en treatments
              </p>
              <div className="flex items-center justify-center mt-4">
                <span className="group-hover:translate-x-1 transition-transform duration-300">Ontdek wellness hotels</span>
                <svg width="14" height="14" viewBox="0 0 14 14" className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <path d="M5 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </Link>

            <Link 
              href="/hotel-met-jacuzzi"
              className="group bg-brand-navy-50 rounded-2xl p-8 text-center border border-brand-navy-200 hover:border-brand-orange-600 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600">
                Alle jacuzzi hotels
              </h3>
              <p className="text-brand-navy-600">
                Complete overzicht van alle hotels met jacuzzi in Nederland
              </p>
              <div className="flex items-center justify-center mt-4">
                <span className="group-hover:translate-x-1 transition-transform duration-300">Bekijk alle hotels</span>
                <svg width="14" height="14" viewBox="0 0 14 14" className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <path d="M5 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question", 
                "name": "Wat maakt een hotel romantisch voor koppels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Romantische hotels bieden intieme settings, privacy, speciale arrangementen voor koppels, en vaak unieke locaties zoals kastelen of afgelegen plekken. De combinatie van luxe voorzieningen, persoonlijke service en romantische ambiance creëert de perfecte sfeer."
                }
              },
              {
                "@type": "Question",
                "name": "Zijn romantische arrangementen duurder dan standaard verblijven?", 
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Romantische arrangementen bevatten vaak extra's zoals champagne, bloemen, speciale decoratie en soms massage of diner. Het prijsverschil is meestal €50-150 per nacht, maar de toegevoegde waarde voor bijzondere gelegenheden is vaak het waard."
                }
              },
              {
                "@type": "Question",
                "name": "Welke periode is het beste voor een romantisch jacuzzi weekend?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Romantische weekends zijn populair rond Valentijnsdag, jubilea en in de wintermaanden. Voor meer privacy en betere prijzen kunt u doordeweeks boeken. Herfst en winter zijn ideaal voor jacuzzi romantiek door de gezellige, intime sfeer."
                }
              }
            ]
          })
        }}
      />
    </main>
  )
}
