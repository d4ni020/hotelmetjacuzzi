import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Structured Content Sections Component
function StructuredContentSections() {
  return (
    <div className="space-y-16">
      {/* Section: De mooiste romantische jacuzzi hotels */}
      <section className="bg-pure-white rounded-2xl p-8 shadow-lg border border-brand-navy-200">
        <h2 className="text-3xl font-bold text-brand-navy-900 mb-6">
          De mooiste <span className="text-brand-orange-600">romantische jacuzzi hotels</span> in Nederland
        </h2>
        
        <div className="space-y-6">
          <p className="text-lg text-brand-navy-700 leading-relaxed">
            Bij het selecteren van het perfecte <strong>romantische hotel met jacuzzi</strong> hebben we gekeken naar verschillende belangrijke aspecten die een verblijf echt speciaal maken.
          </p>
          
          <p className="text-brand-navy-700 leading-relaxed">
            Niet alleen de aanwezigheid van een jacuzzi is belangrijk, maar ook de algehele sfeer, service en faciliteiten die bijdragen aan een romantische ervaring.
          </p>
        </div>

        <div className="mt-8 bg-light-gray rounded-xl p-6">
          <h3 className="text-xl font-semibold text-brand-navy-900 mb-4">
            Wat maakt een jacuzzi hotel romantisch?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-brand-navy-900 mb-3">💫 Sfeer & Ambiance</h4>
              <ul className="space-y-2 text-brand-navy-700">
                <li>• Dimbare verlichting en kaarsen</li>
                <li>• Luxe badproducten en zachte handdoeken</li>
                <li>• Intieme positionering van de jacuzzi</li>
                <li>• Privacy en rust zonder overlast</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-brand-navy-900 mb-3">🍾 Service & Faciliteiten</h4>
              <ul className="space-y-2 text-brand-navy-700">
                <li>• Romantisch restaurant of room service</li>
                <li>• Champagne service op de kamer</li>
                <li>• Spa behandelingen voor koppels</li>
                <li>• Persoonlijke aandacht van personeel</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/romantisch-hotel-met-jacuzzi"
            className="inline-block bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Bekijk romantische hotels →
          </Link>
        </div>
      </section>

      {/* Section: Tips voor perfecte ervaring */}
      <section className="bg-pure-white rounded-2xl p-8 shadow-lg border border-brand-navy-200">
        <h2 className="text-3xl font-bold text-brand-navy-900 mb-6">
          Tips voor de perfecte <span className="text-brand-orange-600">romantische jacuzzi ervaring</span>
        </h2>
        
        <p className="text-lg text-brand-navy-700 mb-8 leading-relaxed">
          Om optimaal te genieten van jullie <a href="/romantisch-hotel-met-jacuzzi" className="text-brand-orange-600 hover:underline font-semibold">romantisch hotel met jacuzzi</a> verblijf, zijn er een aantal dingen die je van tevoren kunt regelen:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Voorbereiding */}
          <div className="bg-light-gray rounded-xl p-6">
            <h3 className="text-xl font-semibold text-brand-navy-900 mb-4 flex items-center">
              <span className="bg-brand-orange-600 text-pure-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
              Voorbereiding van jullie weekend
            </h3>
            
            <ul className="space-y-3 text-brand-navy-700">
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <div>
                  <strong>Boek een romantisch arrangement:</strong> Veel hotels bieden speciale pakketten met champagne, bloemen en chocolade
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <div>
                  <strong>Vraag naar late check-out:</strong> Zo kunnen jullie langer genieten van de jacuzzi
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <div>
                  <strong>Reserveer spa behandelingen:</strong> Koppelsmassages zijn perfect voor extra ontspanning
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <div>
                  <strong>Plan activiteiten:</strong> Romantische wandelingen, wijntjes of cultuur
                </div>
              </li>
            </ul>
          </div>

          {/* Tijdens verblijf */}
          <div className="bg-light-gray rounded-xl p-6">
            <h3 className="text-xl font-semibold text-brand-navy-900 mb-4 flex items-center">
              <span className="bg-brand-orange-600 text-pure-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
              Tijdens jullie verblijf
            </h3>
            
            <ul className="space-y-3 text-brand-navy-700">
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <div>
                  <strong>Neem alle tijd:</strong> Haast je niet, het gaat om quality time samen
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <div>
                  <strong>Geniet van lange jacuzzi sessies:</strong> Met dimbaar licht en kaarsen
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <div>
                  <strong>Probeer lokale specialiteiten:</strong> In het restaurant of via room service
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <div>
                  <strong>Verwen elkaar:</strong> Met kleine attenties en complimenten
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Beste tijden - Seizoenen Grid */}
      <section className="bg-pure-white rounded-2xl p-8 shadow-lg border border-brand-navy-200">
        <h2 className="text-3xl font-bold text-brand-navy-900 mb-6">
          De beste tijden voor een <span className="text-brand-orange-600">romantisch hotel met jacuzzi</span>
        </h2>
        
        <p className="text-lg text-brand-navy-700 mb-8 leading-relaxed">
          Het timing van jullie <strong>romantische hotel met jacuzzi</strong> weekend kan een groot verschil maken, zowel voor de sfeer als voor jullie portemonnee:
        </p>

        {/* Seizoenen Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-6 text-center border-2 border-blue-200">
            <div className="text-3xl mb-3">❄️</div>
            <h3 className="font-bold text-brand-navy-900 mb-2">Winter</h3>
            <p className="text-sm text-brand-navy-700 mb-2">Dec - Feb</p>
            <p className="text-xs text-brand-navy-600">Perfect voor knusse momenten met open haarden</p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 text-center border-2 border-green-200">
            <div className="text-3xl mb-3">🌸</div>
            <h3 className="font-bold text-brand-navy-900 mb-2">Lente</h3>
            <p className="text-sm text-brand-navy-700 mb-2">Maa - Mei</p>
            <p className="text-xs text-brand-navy-600">Bloeiende tuinen en romantische wandelingen</p>
          </div>
          
          <div className="bg-yellow-50 rounded-xl p-6 text-center border-2 border-yellow-200">
            <div className="text-3xl mb-3">☀️</div>
            <h3 className="font-bold text-brand-navy-900 mb-2">Zomer</h3>
            <p className="text-sm text-brand-navy-700 mb-2">Jun - Aug</p>
            <p className="text-xs text-brand-navy-600">Langere dagen en terrassen, wel drukker</p>
          </div>
          
          <div className="bg-orange-50 rounded-xl p-6 text-center border-2 border-orange-200">
            <div className="text-3xl mb-3">🍂</div>
            <h3 className="font-bold text-brand-navy-900 mb-2">Herfst</h3>
            <p className="text-sm text-brand-navy-700 mb-2">Sep - Nov</p>
            <p className="text-xs text-brand-navy-600">Gouden licht en betere prijzen</p>
          </div>
        </div>

        {/* Pricing Tips */}
        <div className="bg-brand-orange-50 rounded-xl p-6 border-2 border-brand-orange-200">
          <h3 className="text-xl font-semibold text-brand-navy-900 mb-4">💰 Beste deals en timing:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <span className="bg-brand-orange-600 text-pure-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">1</span>
              <div>
                <strong>Doordeweeks:</strong> 30-50% goedkoper dan weekends
              </div>
            </div>
            <div className="flex items-center">
              <span className="bg-brand-orange-600 text-pure-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">2</span>
              <div>
                <strong>Last-minute:</strong> 1-2 weken van tevoren
              </div>
            </div>
            <div className="flex items-center">
              <span className="bg-brand-orange-600 text-pure-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">3</span>
              <div>
                <strong>Laagseizoenen:</strong> November-maart (excl. feestdagen)
              </div>
            </div>
            <div className="flex items-center">
              <span className="bg-brand-orange-600 text-pure-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">4</span>
              <div>
                <strong>Speciale arrangementen:</strong> Rond Valentijnsdag
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Budget Tips */}
      <section className="bg-pure-white rounded-2xl p-8 shadow-lg border border-brand-navy-200">
        <h2 className="text-3xl font-bold text-brand-navy-900 mb-6">
          <span className="text-brand-orange-600">Budgetvriendelijke</span> romantische jacuzzi hotels
        </h2>
        
        <p className="text-lg text-brand-navy-700 mb-8 leading-relaxed">
          Romantiek hoeft niet duur te zijn. Er zijn verschillende manieren om van een prachtig <a href="/wellness-hotel-met-jacuzzi" className="text-brand-orange-600 hover:underline font-semibold">wellness hotel met jacuzzi</a> te genieten zonder je budget te overschrijden:
        </p>

        <div className="bg-light-gray rounded-xl p-6">
          <h3 className="text-xl font-semibold text-brand-navy-900 mb-6">
            💡 Geld besparen zonder in te boeten op romantiek
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-pure-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl mb-3">📅</div>
              <h4 className="font-semibold text-brand-navy-900 mb-2">Midweek arrangementen</h4>
              <p className="text-sm text-brand-navy-700">40% goedkoper dan weekends en meestal rustiger</p>
            </div>
            
            <div className="bg-pure-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl mb-3">📦</div>
              <h4 className="font-semibold text-brand-navy-900 mb-2">Package deals</h4>
              <p className="text-sm text-brand-navy-700">All-inclusive arrangementen bieden betere waarde</p>
            </div>
            
            <div className="bg-pure-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl mb-3">🗓️</div>
              <h4 className="font-semibold text-brand-navy-900 mb-2">Off-season</h4>
              <p className="text-sm text-brand-navy-700">November-maart uitstekende deals</p>
            </div>
            
            <div className="bg-pure-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl mb-3">⏰</div>
              <h4 className="font-semibold text-brand-navy-900 mb-2">Vroegboekkorting</h4>
              <p className="text-sm text-brand-navy-700">2-3 maanden van tevoren voor beste prijzen</p>
            </div>
            
            <div className="bg-pure-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl mb-3">⭐</div>
              <h4 className="font-semibold text-brand-navy-900 mb-2">Korte verblijven</h4>
              <p className="text-sm text-brand-navy-700">1-2 nachten kunnen net zo romantisch zijn</p>
            </div>
            
            <div className="bg-pure-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl mb-3">🔍</div>
              <h4 className="font-semibold text-brand-navy-900 mb-2">Vergelijken</h4>
              <p className="text-sm text-brand-navy-700">Check verschillende boekingssites</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/goedkoop-hotel-met-jacuzzi"
            className="inline-block bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Bekijk budget jacuzzi hotels →
          </Link>
        </div>
      </section>

      {/* Section: Wat te verwachten */}
      <section className="bg-pure-white rounded-2xl p-8 shadow-lg border border-brand-navy-200">
        <h2 className="text-3xl font-bold text-brand-navy-900 mb-6">
          Wat te verwachten van een <span className="text-brand-orange-600">romantisch hotel met jacuzzi</span>
        </h2>
        
        <p className="text-lg text-brand-navy-700 mb-8 leading-relaxed">
          Wanneer je boekt bij een echt <strong>romantisch hotel met jacuzzi in Nederland</strong>, kun je bepaalde standaarden verwachten die bijdragen aan een perfecte ervaring:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-light-gray rounded-xl p-6">
            <h3 className="text-xl font-semibold text-brand-navy-900 mb-4 flex items-center">
              🛁 Jacuzzi faciliteiten
            </h3>
            
            <ul className="space-y-3 text-brand-navy-700">
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <span>Privé jacuzzi in de kamer of suite (geen gedeelde faciliteiten)</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <span>Schoon, warm water met goede waterbehandeling</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <span>Dimbare verlichting en romantische ambiance</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <span>Luxe badproducten en zachte handdoeken</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <span>Privacy en rust, zonder geluidsoverlast</span>
              </li>
            </ul>
          </div>

          <div className="bg-light-gray rounded-xl p-6">
            <h3 className="text-xl font-semibold text-brand-navy-900 mb-4 flex items-center">
              💝 Romantische extra's
            </h3>
            
            <ul className="space-y-3 text-brand-navy-700">
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <span>Champagne service of welkomstdrankje</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <span>Bloemen en chocolade op de kamer</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <span>Room service voor intieme diners</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <span>Koppelsmassages en spa behandelingen</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <span>Flexibele check-in en check-out tijden</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange-600 mr-2">✓</span>
                <span>Persoonlijke aandacht van het hotelpersoneel</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Romantische activiteiten */}
      <section className="bg-pure-white rounded-2xl p-8 shadow-lg border border-brand-navy-200">
        <h2 className="text-3xl font-bold text-brand-navy-900 mb-6">
          Romantische activiteiten rondom <span className="text-brand-orange-600">jullie hotel</span>
        </h2>
        
        <p className="text-lg text-brand-navy-700 mb-8 leading-relaxed">
          Een <a href="/hotel-met-jacuzzi-op-kamer" className="text-brand-orange-600 hover:underline font-semibold">hotel met jacuzzi op kamer</a> is de perfecte uitvalsbasis voor romantische activiteiten in de omgeving. Afhankelijk van de locatie van jullie hotel zijn er verschillende mogelijkheden:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-light-gray rounded-xl p-6">
            <h3 className="text-xl font-semibold text-brand-navy-900 mb-4 flex items-center">
              🏛️ Culturele en stedelijke activiteiten
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center bg-pure-white rounded-lg p-3">
                <span className="text-xl mr-3">🚶</span>
                <span className="text-brand-navy-700">Romantische rondleidingen door historische stadscentra</span>
              </div>
              <div className="flex items-center bg-pure-white rounded-lg p-3">
                <span className="text-xl mr-3">🎨</span>
                <span className="text-brand-navy-700">Museumbezoeken en galerieën</span>
              </div>
              <div className="flex items-center bg-pure-white rounded-lg p-3">
                <span className="text-xl mr-3">🍷</span>
                <span className="text-brand-navy-700">Culinaire proeverijen en wijnbar hopping</span>
              </div>
              <div className="flex items-center bg-pure-white rounded-lg p-3">
                <span className="text-xl mr-3">🎭</span>
                <span className="text-brand-navy-700">Theater- en concertbezoeken</span>
              </div>
              <div className="flex items-center bg-pure-white rounded-lg p-3">
                <span className="text-xl mr-3">⛵</span>
                <span className="text-brand-navy-700">Boottochtjes door grachten of meren</span>
              </div>
            </div>
          </div>

          <div className="bg-light-gray rounded-xl p-6">
            <h3 className="text-xl font-semibold text-brand-navy-900 mb-4 flex items-center">
              🌲 Natuur en buitenactiviteiten
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center bg-pure-white rounded-lg p-3">
                <span className="text-xl mr-3">🚶‍♀️</span>
                <span className="text-brand-navy-700">Romantische wandelingen door bossen en duinen</span>
              </div>
              <div className="flex items-center bg-pure-white rounded-lg p-3">
                <span className="text-xl mr-3">🚴</span>
                <span className="text-brand-navy-700">Fietstochtjes langs mooie routes</span>
              </div>
              <div className="flex items-center bg-pure-white rounded-lg p-3">
                <span className="text-xl mr-3">🧺</span>
                <span className="text-brand-navy-700">Picknicks in parken of aan het strand</span>
              </div>
              <div className="flex items-center bg-pure-white rounded-lg p-3">
                <span className="text-xl mr-3">📸</span>
                <span className="text-brand-navy-700">Fotografiesessies op mooie locaties</span>
              </div>
              <div className="flex items-center bg-pure-white rounded-lg p-3">
                <span className="text-xl mr-3">🌅</span>
                <span className="text-brand-navy-700">Zonsondergang kijken vanaf bijzondere plekken</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/hotel-met-jacuzzi"
            className="inline-block bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Bekijk alle hotels met jacuzzi →
          </Link>
        </div>
      </section>
    </div>
  )
}

interface Props {
  params: Promise<{ slug: string }>
}

// Interface definitions
interface TopHotel {
  id: number
  name: string
  location: string
  description: string
  image: string
  features: string[]
  ctaLink: string
}

interface BlogArticle {
  title: string
  subtitle: string
  publishDate: string
  readTime: string
  category: string
  image: string
  content: string
  topHotels?: TopHotel[]
  additionalContent?: string
  faq: Array<{ question: string; answer: string }>
  relatedArticles: Array<{ title: string; slug: string; excerpt: string }>
}

// Mock blog articles data
const mockArticles: Record<string, BlogArticle> = {
  'beste-jacuzzi-hotels-2024': {
    title: 'De 10 Beste Jacuzzi Hotels van Nederland in 2024',
    subtitle: 'Een complete gids met de meest luxueuze wellness hotels waar je kunt genieten van privé jacuzzi faciliteiten en uitstekende service.',
    publishDate: 'September 2025',
    readTime: '8 min',
    category: 'Hotel Reviews',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
    content: `
    <p class="lead">Nederland beschikt over een indrukwekkend aanbod van luxe hotels met jacuzzi faciliteiten. Na uitgebreid onderzoek en persoonlijke bezoeken hebben we de 10 beste jacuzzi hotels van 2024 geselecteerd op basis van kwaliteit, service, locatie en prijs-kwaliteitverhouding.</p>

    <h2>Onze Selectiecriteria voor de Beste Jacuzzi Hotels</h2>
    <p>Voor deze ranking hebben we hotels beoordeeld op verschillende aspecten:</p>
    <ul>
      <li><strong>Jacuzzi kwaliteit:</strong> Grootte, hygiëne en privacy</li>
      <li><strong>Hotelservice:</strong> Persoonlijke aandacht en professionaliteit</li>
      <li><strong>Locatie:</strong> Omgeving en bereikbaarheid</li>
      <li><strong>Faciliteiten:</strong> Aanvullende wellness en dining opties</li>
      <li><strong>Gastbeoordelingen:</strong> Ervaringen van eerdere gasten</li>
    </ul>

    <h2>Top 10 Jacuzzi Hotels Nederland 2024</h2>
    
    <h3>1. Kasteel Bloemendal - Vaals, Limburg</h3>
    <p>Dit prachtige kasteel topte onze lijst vanwege de unieke combinatie van geschiedenis en moderne luxe. De kasteelsuites beschikken over ruime jacuzzi's met uitzicht op de historische tuinen.</p>
    
    <div class="cta-inline">
      <a href="/api/out/3" class="btn-cta">Bekijk Kasteel Bloemendal →</a>
    </div>

    <h3>2. Van der Valk Hotel Amsterdam - Noord-Holland</h3>
    <p>Perfect gelegen in de hoofdstad, biedt dit hotel moderne jacuzzi suites met alle comfort. Ideaal voor <a href="/stad/amsterdam">een luxe citybreak in Amsterdam</a>.</p>

    <h3>3. Fletcher Hotel-Restaurant Jan Van Scorel - Schoorl</h3>
    <p>Gelegen in de prachtige Schoorlse Duinen, combineert dit hotel natuur met wellness. De jacuzzi kamers kijken uit over het natuurgebied.</p>

    <h3>4. Van der Valk Middelburg - Zeeland</h3>
    <p>Voor liefhebbers van kust en cultuur is dit <a href="/provincie/zeeland">Zeeuwse hotel</a> een perfecte keuze met moderne wellness faciliteiten.</p>

    <h3>5. Hotel-Restaurant Spaarnwoude - Velsen-Zuid</h3>
    <p>Dit boetiekhotel combineert persoonlijke service met luxe jacuzzi kamers nabij Amsterdam.</p>

    <h2>Wat Maakt Deze Hotels Bijzonder?</h2>
    <p>Elk hotel in onze top 10 onderscheidt zich door unieke kenmerken:</p>

    <h3>Kasteel Bloemendal</h3>
    <ul>
      <li>Historische setting in 13e-eeuws kasteel</li>
      <li>Jacuzzi's met kasteeltuinuitzicht</li>
      <li>Michelin-ster restaurant</li>
      <li>Privé spa behandelingen</li>
    </ul>

    <h3>Van der Valk Amsterdam</h3>
    <ul>
      <li>Centrale locatie in Amsterdam</li>
      <li>Moderne wellness faciliteiten</li>
      <li>24/7 room service</li>
      <li>Parkeergarage beschikbaar</li>
    </ul>

    <h2>Prijsklassen en Best Value Hotels</h2>
    <p>Voor verschillende budgetten hebben we de beste opties geselecteerd:</p>

    <h3>Luxe segment (€300+ per nacht)</h3>
    <ul>
      <li>Kasteel Bloemendal - Ultimate luxury experience</li>
      <li>Van der Valk Amsterdam - Premium city location</li>
    </ul>

    <h3>Midden segment (€150-€300 per nacht)</h3>
    <ul>
      <li>Fletcher Hotel Jan Van Scorel - Beste natuur locatie</li>
      <li>Van der Valk Middelburg - Culturele omgeving</li>
    </ul>

    <h3>Budget vriendelijk (€100-€150 per nacht)</h3>
    <p>Ook voor kleinere budgetten zijn er uitstekende <a href="/goedkoop-hotel-met-jacuzzi">goedkope hotels met jacuzzi</a> beschikbaar.</p>

    <div class="cta-inline">
      <a href="/hotel-met-jacuzzi" class="btn-cta">Bekijk alle hotels met jacuzzi →</a>
    </div>

    <h2>Seizoensgebonden Aanbevelingen</h2>
    <p>Afhankelijk van het seizoen zijn bepaalde hotels extra aantrekkelijk:</p>

    <h3>Winter (December - Februari)</h3>
    <p>Perfecte tijd voor indoor wellness. Kasteel Bloemendal en Hotel Spaarnwoude bieden extra knusse arrangementen.</p>

    <h3>Lente (Maart - Mei)</h3>
    <p>Ideaal voor combinatie van binnen- en buitenactiviteiten. Fletcher Hotel Jan Van Scorel ligt perfect voor wandelingen in bloeiende natuur.</p>

    <h3>Zomer (Juni - Augustus)</h3>
    <p>Van der Valk Middelburg combineert jacuzzi wellness met strandbezoeken.</p>

    <h3>Herfst (September - November)</h3>
    <p>Romantische tijd voor alle hotels, met bijzondere arrangementen en zachte prijzen.</p>

    <h2>Boekingstips voor de Beste Deals</h2>
    <p>Om optimaal te profiteren van deze top hotels:</p>

    <ul>
      <li><strong>Boek doordeweeks:</strong> 30-40% goedkoper dan weekends</li>
      <li><strong>Advance booking:</strong> 6-8 weken vooruit voor beste tarieven</li>
      <li><strong>Package deals:</strong> Vaak betere waarde dan losse boekingen</li>
      <li><strong>Last minute:</strong> Soms aantrekkelijke deals 1-2 weken vooraf</li>
    </ul>
    `,
    faq: [
      {
        question: "Wat zijn de beste jacuzzi hotels van Nederland in 2024?",
        answer: "Onze top 5 bestaat uit: Kasteel Bloemendal (Vaals), Van der Valk Amsterdam, Fletcher Hotel Jan Van Scorel (Schoorl), Van der Valk Middelburg en Hotel Spaarnwoude. Elk hotel is geselecteerd op basis van kwaliteit, service en prijs-kwaliteit verhouding."
      },
      {
        question: "Wat kost een nacht in een top jacuzzi hotel?",
        answer: "Prijzen variëren van €100-€400+ per nacht. Budget opties starten rond €100, mid-range hotels €150-€300, en luxury hotels €300+. Doordeweeks zijn tarieven meestal 30-40% lager."
      },
      {
        question: "Welk jacuzzi hotel is het beste voor een romantisch weekend?",
        answer: "Kasteel Bloemendal scoort het hoogst voor romantiek vanwege de historische setting en privacy. Voor een stedelijke romantische ervaring is Van der Valk Amsterdam excellent."
      }
    ],
    relatedArticles: [
      {
        title: "Top 5 Romantische Hotels met Jacuzzi in Nederland",
        slug: "top-5-romantische-hotels-jacuzzi-nederland",
        excerpt: "Ontdek de meest romantische hotels met privé jacuzzi."
      },
      {
        title: "Budget Wellness: Luxe Jacuzzi Hotels onder €150",
        slug: "budget-jacuzzi-hotels-onder-150",
        excerpt: "Bewijs dat luxe niet altijd duur hoeft te zijn."
      },
      {
        title: "Wellness Trends 2024: Wat is Hot in Spa Hotels?",
        slug: "wellness-trends-2024-spa-hotels",
        excerpt: "De nieuwste trends in wellness en spa hotels."
      }
    ]
  },
  'top-5-romantische-hotels-jacuzzi-nederland': {
    title: 'Top 5 Romantische Hotels met Jacuzzi in Nederland',
    subtitle: 'Ontdek de meest romantische hotels met privé jacuzzi voor een onvergetelijk weekend weg met jouw partner.',
    publishDate: 'September 2025',
    readTime: '8 min',
    category: 'Romantiek',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop',
    content: `
    <p class="lead">Nederland biedt talloze romantische hotels met jacuzzi waar je samen kunt ontspannen en genieten van elkaars gezelschap. Of je nu een weekend weg plant voor jullie verjaardag, jubileum of gewoon omdat jullie toe zijn aan quality time, deze 5 hotels bieden de perfecte mix van luxe, romantiek en wellness.</p>

    <p>Een <strong>romantisch hotel met jacuzzi</strong> is meer dan alleen een overnachting - het is een ervaring die jullie relatie versterkt en zorgt voor onvergetelijke herinneringen. In Nederland vind je verschillende prachtige accommodaties die speciaal zijn ingericht voor koppels die op zoek zijn naar romantiek en ontspanning.</p>

    <h2>Onze selectie: de 5 meest romantische jacuzzi hotels</h2>
    <p>Na uitgebreid onderzoek en persoonlijke bezoeken hebben we de vijf beste <strong>romantische hotels met jacuzzi in Nederland</strong> geselecteerd. Deze hotels onderscheiden zich door hun romantische sfeer, uitstekende service en natuurlijk de luxueuze jacuzzi faciliteiten.</p>
    `,
    topHotels: [
      {
        id: 1,
        name: 'Kasteel Bloemendal',
        location: 'Vaals, Limburg',
        description: 'Dit historische kasteel biedt de ultieme romantische ervaring met luxe suites, privé jacuzzi\'s en een kasteeltuin voor romantische wandelingen.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
        features: ['Privé jacuzzi in alle suites', 'Fine dining restaurant', 'Historische kasteeltuin', 'Spa behandelingen'],
        ctaLink: '/api/out/3'
      },
      {
        id: 2,
        name: 'Van der Valk Hotel Amsterdam',
        location: 'Amsterdam, Noord-Holland',
        description: 'Stijlvol hotel in het hart van Amsterdam met moderne jacuzzi kamers, perfect voor een romantisch city break met cultuur en wellness.',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
        features: ['Centrale locatie', 'Moderne wellness suites', 'Room service', 'Champagne arrangements'],
        ctaLink: '/api/out/1'
      },
      {
        id: 3,
        name: 'Fletcher Hotel Jan Van Scorel',
        location: 'Schoorl, Noord-Holland',
        description: 'Unieke combinatie van natuur en luxe met jacuzzi suites die uitkijken op de prachtige Schoorlse Duinen voor een natuurlijke romantische ervaring.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
        features: ['Uitzicht op duinen', 'Natuur wandelingen', 'Wellness centrum', 'Romantische arrangementen'],
        ctaLink: '/hotel/fletcher-jan-van-scorel'
      },
      {
        id: 4,
        name: 'Van der Valk Middelburg',
        location: 'Middelburg, Zeeland',
        description: 'Perfect voor liefhebbers van kust en cultuur, dit Zeeuwse hotel combineert romantiek met de charme van het historische Middelburg.',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop',
        features: ['Nabij historisch centrum', 'Kustligging', 'Regionale keuken', 'Fietsarrangementen'],
        ctaLink: '/hotel/van-der-valk-middelburg'
      },
      {
        id: 5,
        name: 'Hotel-Restaurant Spaarnwoude',
        location: 'Velsen-Zuid, Noord-Holland',
        description: 'Boetiekhotel met persoonlijke service en stijlvolle jacuzzi kamers, ideaal voor een intiem romantisch verblijf nabij Amsterdam.',
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop',
        features: ['Persoonlijke service', 'Stijlvolle inrichting', 'Intieme sfeer', 'Nabij Amsterdam'],
        ctaLink: '/hotel/spaarnwoude'
      }
    ],
    additionalContent: `
    <h2>De mooiste romantische jacuzzi hotels in Nederland</h2>
    <p>Bij het selecteren van het perfecte <strong>romantische hotel met jacuzzi</strong> hebben we gekeken naar verschillende belangrijke aspecten die een verblijf echt speciaal maken. Niet alleen de aanwezigheid van een jacuzzi is belangrijk, maar ook de algehele sfeer, service en faciliteiten die bijdragen aan een romantische ervaring.</p>

    <h3>Wat maakt een jacuzzi hotel romantisch?</h3>
    <p>Een echt <strong>romantisch hotel met jacuzzi in Nederland</strong> onderscheidt zich door aandacht voor detail. Denk aan dimbare verlichting, luxe badproducten, zachte handdoeken en een intieme sfeer. De jacuzzi moet niet alleen functioneel zijn, maar ook gepositioneerd en ingericht op een manier die intimiteit en ontspanning bevordert.</p>

    <p>Daarnaast spelen de omgeving en aanvullende faciliteiten een cruciale rol. Een romantisch restaurant, de mogelijkheid voor in-room dining, champagne service, en spa behandelingen voor koppels maken het verschil tussen een gewoon hotel en een echt romantische bestemming.</p>

    <h2>Tips voor de perfecte romantische jacuzzi ervaring</h2>
    <p>Om optimaal te genieten van jullie <a href="/romantisch-hotel-met-jacuzzi">romantisch hotel met jacuzzi</a> verblijf, zijn er een aantal dingen die je van tevoren kunt regelen:</p>

    <h3>Voorbereiding van jullie romantische weekend:</h3>
    <ul>
      <li><strong>Boek een romantisch arrangement:</strong> Veel hotels bieden speciale pakketten met champagne, bloemen en chocolade</li>
      <li><strong>Vraag naar late check-out:</strong> Zo kunnen jullie langer genieten van de jacuzzi en hoeven jullie niet te haasten</li>
      <li><strong>Reserveer spa behandelingen:</strong> Koppelsmassages zijn perfect voor extra ontspanning</li>
      <li><strong>Plan activiteiten in de omgeving:</strong> Romantische wandelingen, wijntjes of cultuur</li>
      <li><strong>Verras je partner:</strong> Regeljevan tevoren een verrassing zoals een privé diner of bloemen op de kamer</li>
    </ul>

    <h3>Tijdens jullie verblijf:</h3>
    <ul>
      <li>Neem alle tijd en haast je niet - het gaat om quality time samen</li>
      <li>Geniet van lange, ontspannende jacuzzi sessies met dimbaar licht en kaarsen</li>
      <li>Probeer lokale specialiteiten in het hotel restaurant of via room service</li>
      <li>Maak foto's van de mooie momenten (maar leg de telefoon ook regelmatig weg!)</li>
      <li>Verwen elkaar met kleine attenties en complimenten</li>
    </ul>

    <h2>De beste tijden voor een romantisch hotel met jacuzzi</h2>
    <p>Het timing van jullie <strong>romantische hotel met jacuzzi</strong> weekend kan een groot verschil maken, zowel voor de sfeer als voor jullie portemonnee:</p>

    <h3>Seizoenen en romantiek:</h3>
    <ul>
      <li><strong>Winter (december-februari):</strong> Perfect voor knusse momenten, vaak met open haarden en warme dranken</li>
      <li><strong>Lente (maart-mei):</strong> Bloeiende tuinen en milde temperaturen maken het ideaal voor wandelingen</li>
      <li><strong>Zomer (juni-augustus):</strong> Langere dagen en terrassen, maar wel drukker en duurder</li>
      <li><strong>Herfst (september-november):</strong> Gouden herfstlicht en betere prijzen, zeer romantisch</li>
    </ul>

    <h3>Beste deals en timing:</h3>
    <ul>
      <li><strong>Doordeweeks:</strong> Zondag t/m donderdag zijn vaak 30-50% goedkoper dan weekends</li>
      <li><strong>Last-minute:</strong> 1-2 weken van tevoren kunnen er aantrekkelijke deals zijn</li>
      <li><strong>Laagseizoenen:</strong> November-maart (behalve feestdagen) bieden vaak betere tarieven</li>
      <li><strong>Speciale momenten:</strong> Rond Valentijnsdag en verjaardagen zijn er vaak speciale arrangementen</li>
    </ul>

    <h2>Budgetvriendelijke romantische jacuzzi hotels</h2>
    <p>Romantiek hoeft niet duur te zijn. Er zijn verschillende manieren om van een prachtig <a href="/wellness-hotel-met-jacuzzi">wellness hotel met jacuzzi</a> te genieten zonder je budget te overschrijden:</p>

    <h3>Geld besparen zonder in te boeten op romantiek:</h3>
    <ul>
      <li><strong>Midweek arrangementen:</strong> Vaak 40% goedkoper dan weekends en meestal rustiger</li>
      <li><strong>Package deals:</strong> All-inclusive arrangementen bieden vaak betere waarde dan losse boekingen</li>
      <li><strong>Off-season:</strong> November-maart bieden uitstekende deals (behalve rond feestdagen)</li>
      <li><strong>Vroegboekkorting:</strong> Boek 2-3 maanden van tevoren voor de beste prijzen</li>
      <li><strong>Korte verblijven:</strong> Soms zijn 1-2 nachten net zo romantisch als een lang weekend</li>
    </ul>

    <h2>Wat te verwachten van een romantisch hotel met jacuzzi</h2>
    <p>Wanneer je boekt bij een echt <strong>romantisch hotel met jacuzzi in Nederland</strong>, kun je bepaalde standaarden verwachten die bijdragen aan een perfecte ervaring:</p>

    <h3>Jacuzzi faciliteiten:</h3>
    <ul>
      <li>Privé jacuzzi in de kamer of suite (geen gedeelde faciliteiten)</li>
      <li>Schoon, warm water met goede waterbehandeling</li>
      <li>Dimbare verlichting en romantische ambiance</li>
      <li>Luxe badproducten en zachte handdoeken</li>
      <li>Privacy en rust, zonder geluidsoverlast</li>
    </ul>

    <h3>Romantische extra's:</h3>
    <ul>
      <li>Champagne service of welkomstdrankje</li>
      <li>Bloemen en chocolade op de kamer</li>
      <li>Room service voor intieme diners</li>
      <li>Koppelsmassages en spa behandelingen</li>
      <li>Flexibele check-in en check-out tijden</li>
      <li>Persoonlijke aandacht van het hotelpersoneel</li>
    </ul>

    <h2>Romantische activiteiten rondom jullie hotel</h2>
    <p>Een <a href="/hotel-met-jacuzzi-op-kamer">hotel met jacuzzi op kamer</a> is de perfecte uitvalsbasis voor romantische activiteiten in de omgeving. Afhankelijk van de locatie van jullie hotel zijn er verschillende mogelijkheden:</p>

    <h3>Culturele en stedelijke activiteiten:</h3>
    <ul>
      <li>Romantische rondleidingen door historische stadscentra</li>
      <li>Museumbezoeken en galerieën</li>
      <li>Culinaire proeverijen en wijnbar hopping</li>
      <li>Theater- en concertbezoeken</li>
      <li>Boottochtjes door grachten of meren</li>
    </ul>

    <h3>Natuur en buitenactiviteiten:</h3>
    <ul>
      <li>Romantische wandelingen door bossen en duinen</li>
      <li>Fietstochtjes langs mooie routes</li>
      <li>Picknicks in parken of aan het strand</li>
      <li>Fotografiesessies op mooie locaties</li>
      <li>Zonsondergang kijken vanaf bijzondere plekken</li>
    </ul>
    `,
    faq: [
      {
        question: "Wat is de gemiddelde prijs voor een romantisch hotel met jacuzzi in Nederland?",
        answer: "Prijzen variëren van €120-€400 per nacht, afhankelijk van locatie, seizoen en faciliteiten. Doordeweeks en in het laagseizoen zijn de tarieven meestal 30-50% lager."
      },
      {
        question: "Welke faciliteiten horen bij een goed romantisch hotel met jacuzzi?",
        answer: "Een romantisch hotel moet beschikken over een privé jacuzzi, dimbare verlichting, luxe badproducten, room service, champagne arrangements en een romantische sfeer. Spa behandelingen voor koppels zijn een grote plus."
      },
      {
        question: "Wanneer is de beste tijd om een romantisch hotel met jacuzzi te boeken?",
        answer: "Voor de beste prijzen: doordeweeks en in het laagseizoen (november-maart). Voor de meeste romantische sfeer: herfst en winter bieden knusse momenten bij de jacuzzi."
      },
      {
        question: "Zijn romantische hotels met jacuzzi geschikt voor speciale gelegenheden?",
        answer: "Absoluut! Deze hotels zijn perfect voor verjaardagen, jubilea, huwelijksaanzoeken, huwelijksreizen of gewoon een romantisch weekendje weg. Veel hotels bieden speciale arrangementen voor bijzondere momenten."
      }
    ],
    relatedArticles: [
      {
        title: "De 10 Beste Jacuzzi Hotels van Nederland in 2024",
        slug: "beste-jacuzzi-hotels-2024",
        excerpt: "Een complete gids met de meest luxueuze wellness hotels waar je kunt genieten van privé jacuzzi faciliteiten."
      },
      {
        title: "Budget Wellness: Luxe Jacuzzi Hotels onder €150",
        slug: "budget-jacuzzi-hotels-onder-150",
        excerpt: "Ontdek hoe je van luxe wellness kunt genieten zonder je budget te overschrijden."
      },
      {
        title: "Wellness Trends 2024: Wat is Hot in Spa Hotels?",
        slug: "wellness-trends-2024-spa-hotels",
        excerpt: "Van infrared sauna's tot zoutwater jacuzzi's - de nieuwste wellness trends in Nederlandse hotels."
      }
    ]
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awaited = await params
  const article = mockArticles[awaited.slug as keyof typeof mockArticles]
  
  if (!article) {
    return {
      title: 'Artikel niet gevonden | Hotelmetjacuzzi.net Blog',
      description: 'Het opgevraagde blogartikel kon niet worden gevonden.'
    }
  }

  return {
    title: `${article.title} | Hotelmetjacuzzi.net Blog`,
    description: article.subtitle,
    openGraph: {
      title: article.title,
      description: article.subtitle,
      images: [article.image],
      type: 'article'
    }
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const awaited = await params
  const article = mockArticles[awaited.slug as keyof typeof mockArticles]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-brand-navy-900" style={{opacity: 0.7}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            {/* Breadcrumbs */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm">
                <li><Link href="/" className="text-pure-white hover:text-brand-orange-600">Home</Link></li>
                <li><span className="text-pure-white">/</span></li>
                <li><Link href="/blog" className="text-pure-white hover:text-brand-orange-600">Blog</Link></li>
                <li><span className="text-pure-white">/</span></li>
                <li><span className="text-pure-white font-semibold">{article.category}</span></li>
              </ol>
            </nav>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="bg-brand-orange-600 text-pure-white px-4 py-2 rounded-full text-sm font-semibold">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-pure-white mb-8 max-w-2xl leading-relaxed">
              {article.subtitle}
            </p>

            {/* Meta Info & CTA Buttons */}
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-pure-white">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Leestijd: {article.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>Laatst geüpdatet: {article.publishDate}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#article-content" className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Lees Artikel
                </a>
                <Link href="/blog" className="bg-pure-white text-brand-navy-900 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Meer Artikelen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="article-content" className="py-12 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Article Content */}
            <article className="lg:col-span-3">
              {/* Featured Image */}
              <div className="mb-12">
                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    priority
                  />
                </div>
              </div>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-brand-navy-900 prose-headings:font-bold prose-p:text-brand-navy-700 prose-p:leading-relaxed prose-a:text-brand-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-brand-navy-900 prose-ul:text-brand-navy-700 prose-li:marker:text-brand-orange-600"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Top Hotels Cards Section */}
              {article.topHotels && (
                <section className="my-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {article.topHotels.map((hotel, index) => (
                      <div key={hotel.id} className="bg-pure-white rounded-2xl shadow-xl overflow-hidden border-2 border-brand-navy-200 hover:border-brand-orange-600 transition-all duration-300 relative">
                        {/* Hotel Number Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-brand-orange-600 text-pure-white font-bold text-lg px-3 py-2 rounded-full shadow-lg">
                            #{index + 1}
                          </span>
                        </div>
                        
                        {/* Hotel Image */}
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={hotel.image}
                            alt={`${hotel.name} - Romantisch hotel met jacuzzi`}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        
                        {/* Hotel Content */}
                        <div className="p-6">
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold text-brand-navy-900 mb-2">
                              {hotel.name}
                            </h3>
                            <p className="text-brand-navy-500 font-medium">
                              {hotel.location}
                            </p>
                          </div>
                          
                          <p className="text-brand-navy-700 mb-6 leading-relaxed">
                            {hotel.description}
                          </p>
                          
                          {/* Features */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-brand-navy-900 mb-3">Highlights:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {hotel.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-sm text-brand-navy-600">
                                  <span className="w-2 h-2 bg-brand-orange-600 rounded-full mr-2"></span>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* CTA Button */}
                          <Link
                            href={hotel.ctaLink}
                            className="block w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            Bekijk hotel →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Additional Content - Structured Sections */}
              {article.additionalContent && (
                <StructuredContentSections />
              )}

              {/* Final CTA */}
              <div className="mt-16 bg-brand-navy-900 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-pure-white mb-4">
                  Klaar voor jouw romantische weekend?
                </h3>
                <p className="text-brand-navy-200 mb-6">
                  Ontdek alle beschikbare hotels met jacuzzi en boek direct jouw perfecte romantische uitje.
                </p>
                <Link 
                  href="/hotel-met-jacuzzi"
                  className="inline-block bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Bekijk alle hotels met jacuzzi →
                </Link>
              </div>

              {/* FAQ Section */}
              <section className="mt-16">
                <h2 className="text-3xl font-bold text-brand-navy-900 mb-8">Veelgestelde Vragen</h2>
                <div className="space-y-6">
                  {article.faq.map((item, index) => (
                    <div key={index} className="bg-pure-white rounded-xl p-6 shadow-lg border-2 border-brand-navy-200">
                      <h3 className="text-xl font-bold text-brand-navy-900 mb-3">
                        {item.question}
                      </h3>
                      <p className="text-brand-navy-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Articles */}
              <section className="mt-16">
                <h2 className="text-3xl font-bold text-brand-navy-900 mb-8">Gerelateerde Artikelen</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {article.relatedArticles.map((relatedArticle, index) => (
                    <Link key={index} href={`/blog/${relatedArticle.slug}`} className="group">
                      <article className="bg-pure-white rounded-xl shadow-lg hover:shadow-xl border-2 border-brand-navy-200 hover:border-brand-orange-600 transition-all duration-300 overflow-hidden h-full">
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-brand-navy-900 group-hover:text-brand-orange-600 transition-colors mb-3 leading-tight">
                            {relatedArticle.title}
                          </h3>
                          <p className="text-brand-navy-600 text-sm leading-relaxed">
                            {relatedArticle.excerpt}
                          </p>
                          <div className="mt-4 flex items-center text-brand-orange-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                            <span>Lees meer</span>
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                
                {/* Popular Hotels CTA */}
                <div className="bg-brand-orange-600 rounded-2xl p-6 text-center">
                  <h3 className="text-xl font-bold text-pure-white mb-3">
                    Populaire Hotels met Jacuzzi
                  </h3>
                  <p className="text-pure-white mb-4 text-sm">
                    Ontdek de meest geboekte hotels van deze maand
                  </p>
                  <Link 
                    href="/hotel-met-jacuzzi"
                    className="inline-block bg-pure-white text-brand-orange-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Bekijk hotels
                  </Link>
                </div>

                {/* Quick Links */}
                <div className="bg-pure-white rounded-2xl p-6 shadow-lg border-2 border-brand-navy-200">
                  <h3 className="text-lg font-bold text-brand-navy-900 mb-4">
                    Populaire Categorieën
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/romantisch-hotel-met-jacuzzi" className="text-brand-navy-600 hover:text-brand-orange-600 transition-colors">
                        → Romantische hotels
                      </Link>
                    </li>
                    <li>
                      <Link href="/goedkoop-hotel-met-jacuzzi" className="text-brand-navy-600 hover:text-brand-orange-600 transition-colors">
                        → Budget vriendelijk
                      </Link>
                    </li>
                    <li>
                      <Link href="/wellness-hotel-met-jacuzzi" className="text-brand-navy-600 hover:text-brand-orange-600 transition-colors">
                        → Wellness hotels
                      </Link>
                    </li>
                    <li>
                      <Link href="/provincie/limburg" className="text-brand-navy-600 hover:text-brand-orange-600 transition-colors">
                        → Hotels in Limburg
                      </Link>
                    </li>
                    <li>
                      <Link href="/stad/amsterdam" className="text-brand-navy-600 hover:text-brand-orange-600 transition-colors">
                        → Hotels in Amsterdam
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-brand-navy-900 rounded-2xl p-6 text-center">
                  <h3 className="text-lg font-bold text-pure-white mb-3">
                    Wellness Tips & Deals
                  </h3>
                  <p className="text-brand-navy-200 mb-4 text-sm">
                    Ontvang wekelijks de beste hotel deals en wellness tips
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Je e-mailadres"
                      className="w-full px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange-600"
                    />
                    <button className="w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                      Aanmelden
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": article.faq.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />

      {/* Structured Data for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": article.title,
            "description": article.subtitle,
            "image": article.image,
            "author": {
              "@type": "Organization",
              "name": "Hotelmetjacuzzi.net"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Hotelmetjacuzzi.net",
              "logo": {
                "@type": "ImageObject",
                "url": "https://jacuzzihotels.nl/logo.png"
              }
            },
            "datePublished": "2025-09-01",
            "dateModified": "2025-09-17",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://jacuzzihotels.nl/blog/${awaited.slug}`
            }
          })
        }}
      />
    </div>
  )
}

