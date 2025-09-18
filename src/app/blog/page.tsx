import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wellness Blog | Tips voor Jacuzzi Hotels | JacuzziHotels',
  description: 'Ontdek tips, inspiratie en gidsen voor de perfecte wellness overnachting. Alles over jacuzzi hotels, spa behandelingen en romantische uitjes.',
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Romantische Hotels met Jacuzzi in Nederland",
      excerpt: "Ontdek de meest romantische hotels met privé jacuzzi voor een onvergetelijk weekend weg met jouw partner.",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
      category: "Romantiek",
      date: "17 September 2025",
      slug: "top-5-romantische-hotels-jacuzzi-nederland"
    },
    {
      id: 2,
      title: "De 10 Beste Jacuzzi Hotels van Nederland in 2024",
      excerpt: "Een complete gids met de meest luxueuze wellness hotels waar je kunt genieten van privé jacuzzi faciliteiten en uitstekende service.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
      category: "Hotel Reviews",
      date: "15 September 2025",
      slug: "beste-jacuzzi-hotels-2024"
    },
    {
      id: 3,
      title: "Wellness Trends 2024: Wat is Hot in Spa Hotels?",
      excerpt: "Van infrared sauna's tot zoutwater jacuzzi's - ontdek de nieuwste wellness trends die je vindt in de beste spa hotels van Nederland.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
      category: "Wellness Trends",
      date: "8 December 2024",
      slug: "wellness-trends-2024-spa-hotels"
    },
    {
      id: 4,
      title: "Budget Wellness: Luxe Jacuzzi Hotels onder €150",
      excerpt: "Bewijs dat luxe niet altijd duur hoeft te zijn. Deze jacuzzi hotels bieden topkwaliteit voor een betaalbare prijs.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
      category: "Budget Tips",
      date: "5 December 2024",
      slug: "budget-jacuzzi-hotels-onder-150"
    },
    {
      id: 5,
      title: "Seizoensgebonden Wellness: Winter Jacuzzi Ervaringen",
      excerpt: "Waarom de winter het perfecte seizoen is voor een jacuzzi hotel en welke hotels de beste winter wellness arrangementen aanbieden.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=800&auto=format&fit=crop",
      category: "Seizoen Tips",
      date: "1 December 2024",
      slug: "winter-jacuzzi-wellness-ervaringen"
    },
    {
      id: 6,
      title: "Jacuzzi Etiquette: Do's en Don'ts voor de Perfecte Spa Ervaring",
      excerpt: "Alles wat je moet weten over het gedrag in een jacuzzi en spa omgeving om van je wellness ervaring optimaal te genieten.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
      category: "Spa Guide",
      date: "28 November 2024",
      slug: "jacuzzi-etiquette-spa-gedragsregels"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop"
            alt="Wellness Blog - Tips en inspiratie voor jacuzzi hotels"
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
                <li><span className="text-pure-white font-semibold">Blog</span></li>
              </ol>
            </nav>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-brand-orange-600">Wellness</span> Blog
            </h1>
            <p className="text-xl text-pure-white mb-8 max-w-2xl">
              Ontdek tips, inspiratie en gidsen voor de perfecte wellness overnachting. 
              Van hotel reviews tot romantische tips - alles voor jouw perfecte jacuzzi ervaring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#featured-post" className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Laatste Artikelen
              </a>
              <a href="#newsletter" className="bg-pure-white text-brand-navy-900 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Nieuwsbrief
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Featured Post */}
        <div id="featured-post" className="mb-16">
          <Link href={`/blog/${blogPosts[0].slug}`} className="group block">
            <div className="bg-pure-white rounded-2xl shadow-xl overflow-hidden border-2 border-brand-navy-200 hover:border-brand-orange-600 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-orange-600 text-pure-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-brand-orange-600 font-semibold text-sm uppercase tracking-wide">
                      {blogPosts[0].category}
                    </span>
                    <p className="text-brand-navy-500 text-sm mt-1">{blogPosts[0].date}</p>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy-900 mb-4 group-hover:text-brand-orange-600 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-brand-navy-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-brand-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Lees meer</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" className="ml-2">
                      <path d="M8 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <article className="bg-pure-white rounded-2xl shadow-lg hover:shadow-xl border-2 border-brand-navy-200 hover:border-brand-orange-600 transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-navy-900 text-pure-white px-2 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <p className="text-brand-navy-500 text-sm">{post.date}</p>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-brand-navy-600 mb-4 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-brand-orange-600 font-semibold group-hover:translate-x-1 transition-transform mt-auto">
                    <span>Lees artikel</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" className="ml-2">
                      <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div id="newsletter" className="mt-16 bg-brand-navy-900 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-pure-white mb-4">
            Blijf op de hoogte van de nieuwste wellness tips
          </h2>
          <p className="text-brand-navy-200 mb-8 max-w-2xl mx-auto">
            Ontvang wekelijks de beste hotel deals, nieuwe jacuzzi ervaringen en exclusieve wellness tips direct in je inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Je e-mailadres"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-brand-navy-700 focus:outline-none focus:border-brand-orange-600"
            />
            <button className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold px-6 py-3 rounded-lg transition-colors duration-300">
              Aanmelden
            </button>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}
