import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hotels met Jacuzzi per Stad | JacuzziHotels',
  description: 'Ontdek de populairste steden van Nederland met de beste hotels met jacuzzi. Van Amsterdam tot Maastricht, vind jouw perfecte city break.',
}

export default function StedenPage() {
  const cities = [
    { name: 'Amsterdam', slug: 'amsterdam', province: 'Noord-Holland', provinceSlug: 'noord-holland', description: 'Grachten, cultuur en luxe wellness hotels' },
    { name: 'Maastricht', slug: 'maastricht', province: 'Limburg', provinceSlug: 'limburg', description: 'Historische stad met romantische accommodaties' },
    { name: 'Rotterdam', slug: 'rotterdam', province: 'Zuid-Holland', provinceSlug: 'zuid-holland', description: 'Moderne skyline en designhotels' },
    { name: 'Utrecht', slug: 'utrecht-stad', province: 'Utrecht', provinceSlug: 'utrecht', description: 'Centraal gelegen met sfeervolle hotels' },
    { name: 'Hilversum', slug: 'hilversum', province: 'Utrecht', provinceSlug: 'utrecht', description: 'Groene omgeving met luxe wellness hotels' },
    { name: 'Vianen', slug: 'vianen', province: 'Utrecht', provinceSlug: 'utrecht', description: 'Strategisch gelegen tussen Amsterdam en Utrecht' },
    { name: 'Houten', slug: 'houten', province: 'Utrecht', provinceSlug: 'utrecht', description: 'Moderne stad met rustgevende accommodaties' },
    { name: 'Breukelen', slug: 'breukelen', province: 'Utrecht', provinceSlug: 'utrecht', description: 'Historische stad aan de Vecht met romantische hotels' },
    { name: 'De Bilt', slug: 'de-bilt', province: 'Utrecht', provinceSlug: 'utrecht', description: 'Rustige gemeente nabij Utrecht centrum' },
    { name: 'Amersfoort', slug: 'amersfoort', province: 'Utrecht', provinceSlug: 'utrecht', description: 'Historische stad met moderne wellness faciliteiten' },
    { name: 'Groningen', slug: 'groningen-stad', province: 'Groningen', provinceSlug: 'groningen', description: 'Bruisende noordelijke stad met unieke landgoed hotels' },
    { name: 'Arnhem', slug: 'arnhem', province: 'Gelderland', provinceSlug: 'gelderland', description: 'Natuur en cultuur in de Veluwe' },
    { name: 'Eindhoven', slug: 'eindhoven', province: 'Noord-Brabant', provinceSlug: 'noord-brabant', description: 'Design en technologie stad' },
    { name: 'Tilburg', slug: 'tilburg', province: 'Noord-Brabant', provinceSlug: 'noord-brabant', description: 'Bruisende Brabantse stad met moderne wellness hotels' },
    { name: 'Vught', slug: 'vught', province: 'Noord-Brabant', provinceSlug: 'noord-brabant', description: 'Groene gemeente met luxe accommodaties' },
    { name: 'Gilze', slug: 'gilze', province: 'Noord-Brabant', provinceSlug: 'noord-brabant', description: 'Rustige plaats nabij Tilburg met wellness hotels' },
    { name: 'Deurne', slug: 'deurne', province: 'Noord-Brabant', provinceSlug: 'noord-brabant', description: 'Kloosterstad met historische charme en moderne comfort' },
    { name: 'Akersloot', slug: 'akersloot', province: 'Noord-Holland', provinceSlug: 'noord-holland', description: 'Rustige poldergemeente met wellness hotels' },
    { name: 'Wieringermeer', slug: 'wieringermeer', province: 'Noord-Holland', provinceSlug: 'noord-holland', description: 'Unieke poldernatuur en luxe accommodaties' },
    { name: 'Spaarnwoude', slug: 'spaarnwoude', province: 'Noord-Holland', provinceSlug: 'noord-holland', description: 'Natuurgebied met boetiekhotels' },
    { name: 'Heiloo', slug: 'heiloo', province: 'Noord-Holland', provinceSlug: 'noord-holland', description: 'Gezellige Noord-Hollandse plaats met gastvrije hotels' },
    { name: 'Schiphol', slug: 'schiphol', province: 'Noord-Holland', provinceSlug: 'noord-holland', description: 'Airport hotels met luxe wellness faciliteiten' },
    { name: 'Renesse', slug: 'renesse', province: 'Zeeland', provinceSlug: 'zeeland', description: 'Strand, duinen en luxe strandhotels met jacuzzi' },
    { name: 'Middelburg', slug: 'middelburg', province: 'Zeeland', provinceSlug: 'zeeland', description: 'Historische hoofdstad van Zeeland met wellness hotels' },
    { name: 'Goes', slug: 'goes', province: 'Zeeland', provinceSlug: 'zeeland', description: 'Gezellige Zeeuwse stad met comfortabele hotels' }
  ]

  // Group cities by province
  const citiesByProvince = cities.reduce((acc, city) => {
    if (!acc[city.province]) {
      acc[city.province] = {
        name: city.province,
        slug: city.provinceSlug,
        cities: []
      }
    }
    acc[city.province].cities.push(city)
    return acc
  }, {} as Record<string, { name: string; slug: string; cities: typeof cities }>)

  // Province descriptions for SEO
  const provinceDescriptions = {
    'Noord-Holland': 'Ontdek de hoofdstad Amsterdam en omgeving met hun iconische grachten, wereldklasse musea en luxe wellness hotels.',
    'Limburg': 'De zuidelijkste provincie met een rijke geschiedenis, heuvels en gezellige accommodaties met jacuzzi.',
    'Zuid-Holland': 'Van Rotterdam tot Den Haag - moderne architectuur en designhotels in het hart van de Randstad.',
    'Utrecht': 'Centraal gelegen provincie met historische steden en uitstekende verbindingen.',
    'Gelderland': 'Natuur en cultuur in de Veluwe met prachtige landschappen en wellness resorts.',
    'Noord-Brabant': 'Gezellige Brabantse gastvrijheid in moderne steden als Eindhoven.',
    'Zeeland': 'Kustprovincie met prachtige stranden, duinen en luxe strandhotels aan zee.'
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555980292-2671d412fbb1?q=80&w=1600&auto=format&fit=crop"
            alt="Nederlandse steden met jacuzzi hotels - City breaks"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-brand-navy-900" style={{opacity: 0.7}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm">
                <li><Link href="/" className="text-pure-white hover:text-brand-orange-600">Home</Link></li>
                <li><span className="text-pure-white">/</span></li>
                <li><span className="text-pure-white font-semibold">Steden</span></li>
              </ol>
            </nav>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Hotels met <span className="text-brand-orange-600">Jacuzzi</span> per Stad
            </h1>
            <p className="text-xl text-pure-white mb-8 max-w-2xl">
              Ontdek de beste wellness hotels in de populairste steden van Nederland. 
              Ideaal voor een romantisch city break of zakenreis met extra luxe en comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cities-grid" className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Bekijk Steden
              </a>
              <Link href="/provincies" className="bg-pure-white text-brand-navy-900 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Per Provincie
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cities by Province Section */}
      <section id="cities-grid" className="py-16 bg-light-gray relative overflow-hidden">
        {/* Subtle SVG Background Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.02,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='city-pattern' patternUnits='userSpaceOnUse' width='60' height='60'%3E%3Cg fill='none' stroke='%231A2637' stroke-width='0.5'%3E%3C!-- Grid lijnen --%3E%3Cline x1='0' y1='30' x2='60' y2='30'/%3E%3Cline x1='30' y1='0' x2='30' y2='60'/%3E%3C!-- Kleine vierkanten --%3E%3Crect x='10' y='10' width='10' height='10'/%3E%3Crect x='40' y='40' width='10' height='10'/%3E%3Crect x='10' y='40' width='10' height='10'/%3E%3Crect x='40' y='10' width='10' height='10'/%3E%3C!-- Accent cirkels --%3E%3Ccircle cx='15' cy='15' r='2' fill='%23F36F21' opacity='0.4'/%3E%3Ccircle cx='45' cy='45' r='2' fill='%23F36F21' opacity='0.4'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23city-pattern)'/%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Wellness steden per provincie
            </h2>
            <p className="text-lg text-brand-navy-600 max-w-2xl mx-auto">
              Van bruisende metropolen tot charmante historische steden - 
              ontdek waar jouw perfecte city break met jacuzzi je naartoe brengt.
            </p>
          </div>

          {/* Loop through provinces */}
          {Object.values(citiesByProvince).map((province) => (
            <div key={province.slug} className="mb-16 last:mb-0">
              {/* Province Header */}
              <div className="mb-8">
                <Link 
                  href={`/provincie/${province.slug}`}
                  className="group"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-navy-900 group-hover:text-brand-orange-600 transition-colors mb-3">
                    Hotels met jacuzzi in {province.name}
                  </h2>
                </Link>
                <p className="text-brand-navy-600 max-w-3xl">
                  {provinceDescriptions[province.name as keyof typeof provinceDescriptions]}
                </p>
              </div>

              {/* Cities Grid for this Province */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {province.cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/stad/${city.slug}`}
                    className="group bg-pure-white rounded-2xl shadow-lg hover:shadow-xl border-2 border-brand-navy-200 hover:border-brand-orange-600 p-8 transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-brand-navy-900 group-hover:text-brand-orange-600 transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-sm text-brand-navy-500 font-medium">{city.province}</p>
                    </div>
                    <p className="text-brand-navy-600 mb-6">
                      {city.description}
                    </p>
                    <div className="flex items-center text-brand-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                      <span>Bekijk hotels</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" className="ml-2">
                        <path d="M8 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
