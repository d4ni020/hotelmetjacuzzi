import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

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
const RoomCard = ({ room }: { room: Room }) => (
  <div className="bg-pure-white rounded-xl shadow-lg border border-brand-navy-200 overflow-hidden hover:shadow-xl hover:border-brand-orange-600 transition-all duration-300 h-full flex flex-col">
    {/* Room Image */}
    <div className="relative h-48 sm:h-56">
      <Image
        src={room.image}
        alt={`Hotelkamer met jacuzzi en sauna in ${room.city} - ${room.hotelName}`}
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
      <div className="mb-4 flex-1">
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

      {/* Facilities with Icons */}
      {room.facilities && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-brand-navy-900 mb-3">Faciliteiten:</h4>
          <div className="grid grid-cols-2 gap-2">
            {room.facilities.map((facility, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-lg">{facility.icon}</span>
                <span className="text-xs text-brand-navy-700">{facility.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

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
  title: 'Hotels met Jacuzzi en Sauna op de Kamer in Nederland | Hotelmetjacuzzi.net',
  description: 'Ontdek de beste hotels met zowel jacuzzi als sauna op de kamer in Nederland. Complete wellness ervaring in één kamer. Boek nu vanaf €169 per nacht!',
  keywords: 'hotel met jacuzzi en sauna, jacuzzi sauna kamer, wellness kamer met jacuzzi en sauna, hotel kamer met jacuzzi en sauna',
  alternates: {
    canonical: '/hotelkamer-met-jacuzzi-en-sauna',
  },
  openGraph: {
    title: 'Hotels met Jacuzzi en Sauna op de Kamer in Nederland',
    description: 'Geniet van de ultieme wellness ervaring met zowel jacuzzi als sauna op je kamer. Complete ontspanning in één ruimte.',
    url: '/hotelkamer-met-jacuzzi-en-sauna',
    type: 'website',
    images: [{
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop',
      width: 1600,
      height: 900,
      alt: 'Hotel kamer met jacuzzi en sauna',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotels met Jacuzzi en Sauna op de Kamer in Nederland',
    description: 'Geniet van de ultieme wellness ervaring met zowel jacuzzi als sauna op je kamer. Complete ontspanning in één ruimte.',
    images: ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop'],
  },
}

export default function HotelkamerMetJacuzziEnSaunaPage() {

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
                <Link 
                  href="#rooms"
                  className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Bekijk kamers →
                </Link>
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
          
          {/* Rooms Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {jacuzziSaunaRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
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

      {/* Internal Links Section */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy-900 mb-4">
              Ontdek meer wellness hotels
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
              href="/goedkoop-hotel-met-jacuzzi"
              className="group bg-brand-navy-50 hover:bg-brand-navy-100 border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-brand-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors">
                Goedkope jacuzzi hotels
              </h3>
              <p className="text-brand-navy-600 mb-4">
                Budgetvriendelijke opties voor een betaalbare wellness ervaring
              </p>
              <div className="text-brand-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                Bekijk budget hotels →
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
  )
}
