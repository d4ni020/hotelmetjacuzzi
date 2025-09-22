import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hotels met Jacuzzi per Provincie | Hotelmetjacuzzi.net',
  description: 'Ontdek alle provincies van Nederland met de beste hotels met jacuzzi. Van Limburg tot Friesland, vind jouw perfecte wellness overnachting.',
}

export default function ProvinciesPage() {
  const provinces = [
    { name: 'Limburg', slug: 'limburg', description: 'Heuvelachtig landschap met luxe wellness hotels' },
    { name: 'Noord-Holland', slug: 'noord-holland', description: 'Kustprovincie met moderne jacuzzi hotels' },
    { name: 'Gelderland', slug: 'gelderland', description: 'Natuurrijke provincie met romantische verblijven' },
    { name: 'Zuid-Holland', slug: 'zuid-holland', description: 'Randstad met stedelijke wellness hotels' },
    { name: 'Utrecht', slug: 'utrecht', description: 'Centraal gelegen met boutique hotels' },
    { name: 'Noord-Brabant', slug: 'noord-brabant', description: 'Gezellige provincie met sfeervolle accommodaties' },
    { name: 'Zeeland', slug: 'zeeland', description: 'Kustprovincie met strandhotels en wellness aan zee' },
    { name: 'Groningen', slug: 'groningen', description: 'Noordelijke provincie met landgoedhotels en rustgevende wellness' },
    { name: 'Drenthe', slug: 'drenthe', description: 'Groene provincie met authentieke gastvrijheid en wellness in natuurlijke rust' },
    { name: 'Overijssel', slug: 'overijssel', description: 'Historische provincie met landgoedhotels en culturele wellness accommodaties' },
    { name: 'Flevoland', slug: 'flevoland', description: 'Jongste provincie van Nederland met moderne hotels en unieke poldernatuur' },
    { name: 'Friesland', slug: 'friesland', description: 'Authentieke provincie met Friese meren, cultuur en gastvrije wellness hotels' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559599238-0e285972db5b?q=80&w=1600&auto=format&fit=crop"
            alt="Nederlandse provincies met wellness hotels"
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
                <li><span className="text-pure-white font-semibold">Provincies</span></li>
              </ol>
            </nav>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Hotels met <span className="text-brand-orange-600">Jacuzzi</span> per Provincie
            </h1>
            <p className="text-xl text-pure-white mb-8 max-w-2xl">
              Ontdek de beste wellness accommodaties in elke provincie van Nederland. 
              Van romantische kastelen in Limburg tot moderne spa hotels aan de kust - 
              vind jouw perfecte jacuzzi hotel dichtbij huis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#provinces-grid" className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Bekijk Provincies
              </a>
              <Link href="/hotels" className="bg-pure-white text-brand-navy-900 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Alle Hotels
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Provinces Grid Section */}
      <section id="provinces-grid" className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Kies jouw provincie
            </h2>
            <p className="text-lg text-brand-navy-600 max-w-2xl mx-auto">
              Elke provincie heeft zijn eigen charme en unieke wellness hotels. 
              Ontdek wat jouw favoriete regio te bieden heeft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {provinces.map((province) => (
              <Link
                key={province.slug}
                href={`/provincie/${province.slug}`}
                className="group bg-pure-white rounded-2xl shadow-lg hover:shadow-xl border-2 border-brand-navy-200 hover:border-brand-orange-600 p-8 transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-brand-navy-900 mb-4 group-hover:text-brand-orange-600 transition-colors">
                  {province.name}
                </h3>
                <p className="text-brand-navy-600 mb-6">
                  {province.description}
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
      </section>
    </div>
  )
}
