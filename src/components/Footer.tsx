import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { href: '/', label: 'Home', description: 'Terug naar de homepage' },
    { href: '/provincies', label: 'Provincies', description: 'Hotels per provincie bekijken' },
    { href: '/steden', label: 'Steden', description: 'Populaire steden met jacuzzi hotels' },
    { href: '/hotels', label: 'Hotels', description: 'Alle hotels met jacuzzi overzicht' },
    { href: '/blog', label: 'Blog', description: 'Wellness tips en hotel reviews' },
    { href: '/contact', label: 'Contact', description: 'Contact opnemen voor hulp' }
  ]

  const popularProvinces = [
    { href: '/provincie/gelderland', label: 'Hotels in Gelderland', description: 'Jacuzzi hotels in Gelderland' },
    { href: '/provincie/noord-holland', label: 'Hotels in Noord-Holland', description: 'Wellness hotels Noord-Holland' },
    { href: '/provincie/limburg', label: 'Hotels in Limburg', description: 'Romantische hotels Limburg' },
    { href: '/provincie/zeeland', label: 'Hotels in Zeeland', description: 'Kust hotels met jacuzzi Zeeland' },
    { href: '/provincie/utrecht', label: 'Hotels in Utrecht', description: 'Boutique hotels Utrecht' },
    { href: '/provincie/noord-brabant', label: 'Hotels in Noord-Brabant', description: 'Wellness hotels Brabant' }
  ]

  const informationLinks = [
    { href: '/over-ons', label: 'Over ons', description: 'Meer over Hotelmetjacuzzi.net' },
    { href: '/privacy', label: 'Privacybeleid', description: 'Hoe wij omgaan met je gegevens' },
    { href: '/disclaimer', label: 'Disclaimer', description: 'Algemene voorwaarden' },
    { href: '/affiliate-disclaimer', label: 'Affiliate Disclaimer', description: 'Transparantie over affiliate links' }
  ]

  return (
    <footer className="relative bg-brand-navy-900 text-pure-white">
      {/* Subtiele SVG Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='footer-grid' patternUnits='userSpaceOnUse' width='80' height='80'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='0.5'%3E%3C!-- Hoofdraster --%3E%3Cline x1='0' y1='40' x2='80' y2='40'/%3E%3Cline x1='40' y1='0' x2='40' y2='80'/%3E%3C!-- Diagonale lijnen --%3E%3Cline x1='20' y1='0' x2='20' y2='20'/%3E%3Cline x1='60' y1='0' x2='60' y2='20'/%3E%3Cline x1='0' y1='20' x2='20' y2='20'/%3E%3Cline x1='60' y1='20' x2='80' y2='20'/%3E%3Cline x1='20' y1='60' x2='20' y2='80'/%3E%3Cline x1='60' y1='60' x2='60' y2='80'/%3E%3Cline x1='0' y1='60' x2='20' y2='60'/%3E%3Cline x1='60' y1='60' x2='80' y2='60'/%3E%3C!-- Accent stippen --%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23FFFFFF'/%3E%3Ccircle cx='60' cy='20' r='1.5' fill='%23FFFFFF'/%3E%3Ccircle cx='20' cy='60' r='1.5' fill='%23FFFFFF'/%3E%3Ccircle cx='60' cy='60' r='1.5' fill='%23FFFFFF'/%3E%3Ccircle cx='40' cy='40' r='2' fill='%23FFFFFF'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23footer-grid)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Navigatie */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-pure-white mb-6 flex items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" className="mr-2 text-brand-orange-600">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" fill="currentColor"/>
              </svg>
              Navigatie
            </h3>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group block text-brand-navy-200 hover:text-brand-orange-600 transition-colors duration-300"
                  aria-label={link.description}
                >
                  <div className="flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 14 14" className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <path d="M5 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 2: Populaire Provincies */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-pure-white mb-6 flex items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" className="mr-2 text-brand-orange-600">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" fill="currentColor"/>
              </svg>
              Populaire Provincies
            </h3>
            <nav className="space-y-3">
              {popularProvinces.map((province) => (
                <Link
                  key={province.href}
                  href={province.href}
                  className="group block text-brand-navy-200 hover:text-brand-orange-600 transition-colors duration-300"
                  aria-label={province.description}
                >
                  <div className="flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {province.label}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 14 14" className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <path d="M5 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Informatie */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-pure-white mb-6 flex items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" className="mr-2 text-brand-orange-600">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" fill="currentColor"/>
              </svg>
              Informatie
            </h3>
            <nav className="space-y-3">
              {informationLinks.map((info) => (
                <Link
                  key={info.href}
                  href={info.href}
                  className="group block text-brand-navy-200 hover:text-brand-orange-600 transition-colors duration-300"
                  aria-label={info.description}
                >
                  <div className="flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {info.label}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 14 14" className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <path d="M5 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-pure-white mb-6 flex items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" className="mr-2 text-brand-orange-600">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" fill="currentColor"/>
              </svg>
              Contact
            </h3>
            <div className="space-y-4">
              
              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="bg-brand-orange-600 p-2 rounded-lg mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="text-pure-white">
                    <path d="M2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zM0 4l8 5 8-5v8H0V4z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-brand-navy-300 mb-1">Email ons</p>
                  <a
                    href="mailto:info@hotelmetjacuzzi.net"
                    className="text-pure-white hover:text-brand-orange-600 transition-colors duration-300 font-medium"
                  >
                    info@hotelmetjacuzzi.net
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-sm text-brand-navy-300 mb-3">Volg ons</p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/jacuzzihotelsnl"
                    className="bg-brand-orange-600 hover:bg-brand-orange-700 p-3 rounded-lg transition-colors duration-300 group"
                    aria-label="Volg ons op Facebook"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-pure-white group-hover:scale-110 transition-transform">
                      <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/jacuzzihotelsnl"
                    className="bg-brand-orange-600 hover:bg-brand-orange-700 p-3 rounded-lg transition-colors duration-300 group"
                    aria-label="Volg ons op Instagram"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-pure-white group-hover:scale-110 transition-transform">
                      <path d="M10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.167 3.635 2.182 5.65 5.817 5.817C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c3.629-.167 5.652-2.182 5.817-5.817C19.988 13.056 20 12.716 20 10s-.012-3.056-.06-4.123C19.773 2.246 17.758.227 14.123.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/jacuzzihotelsnl"
                    className="bg-brand-orange-600 hover:bg-brand-orange-700 p-3 rounded-lg transition-colors duration-300 group"
                    aria-label="Volg ons op Twitter"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-pure-white group-hover:scale-110 transition-transform">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="mt-12 pt-8 border-t border-brand-navy-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-pure-white mb-4">
              Mis geen enkele wellness deal!
            </h3>
            <p className="text-brand-navy-200 mb-6">
              Ontvang exclusieve aanbiedingen en de nieuwste jacuzzi hotel tips direct in je inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="je@email.nl"
                className="flex-1 px-4 py-3 rounded-lg bg-brand-navy-800 border border-brand-navy-600 text-pure-white placeholder-brand-navy-300 focus:outline-none focus:border-brand-orange-600 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold px-6 py-3 rounded-lg transition-colors duration-300 whitespace-nowrap"
              >
                Aanmelden
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-brand-navy-700 bg-brand-navy-900" style={{backgroundColor: 'rgba(26, 38, 55, 0.8)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-brand-navy-300">
            <div className="mb-2 md:mb-0">
              © {currentYear} Hotelmetjacuzzi.net - Alle rechten voorbehouden
            </div>
            <div className="flex items-center space-x-4">
              <span>Powered by</span>
              <div className="flex items-center space-x-2">
                  <svg width="16" height="16" viewBox="0 0 105 105" className="text-brand-orange-600">
                    {/* Mini Jacuzzi Icon */}
                    <ellipse cx="52.5" cy="70" rx="35" ry="15" fill="currentColor" opacity="0.6"/>
                    <ellipse cx="52.5" cy="65" rx="30" ry="12" fill="#FFFFFF" opacity="0.9"/>
                    <circle cx="45" cy="62" r="2" fill="currentColor" opacity="0.8"/>
                    <circle cx="55" cy="60" r="1.5" fill="currentColor" opacity="0.7"/>
                    <circle cx="60" cy="65" r="1.2" fill="currentColor" opacity="0.9"/>
                    <circle cx="50" cy="68" r="1" fill="currentColor" opacity="0.6"/>
                  </svg>
                <span className="font-medium">Hotelmetjacuzzi.net</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
