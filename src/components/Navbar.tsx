'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navigationLinks = [
    { href: '/', label: 'Home', description: 'Startpagina' },
    { href: '/provincies', label: 'Provincies', description: 'Hotels per provincie' },
    { href: '/steden', label: 'Steden', description: 'Populaire steden' },
    { href: '/hotels', label: 'Hotels', description: 'Alle jacuzzi hotels' },
    { href: '/blog', label: 'Blog', description: 'Wellness tips & inspiratie' },
    { href: '/contact', label: 'Contact', description: 'Neem contact op' }
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Sticky Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-navy-900 shadow-xl border-b border-brand-navy-700' 
          : 'bg-brand-navy-900 shadow-lg border-b border-brand-navy-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="group flex items-center space-x-3"
                aria-label="Hotelmetjacuzzi.net - Terug naar startpagina"
              >
                <div className="relative">
                  {/* Jacuzzi Logo SVG */}
                  <svg width="32" height="32" viewBox="0 0 105 105" className="transition-transform duration-300 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
                    {/* Water/Jacuzzi Base */}
                    <path d="m34.3559418 52.7407799s1-9.2822456 8.25-7.1572456 9.625 2.875 12.375.375 15.9489288-2.875 17.0369644 1.125 14.1925583.0751228 18.7130356 1.3245392c1.6402435.4533463 5.25 4.3327065 5.25 4.3327065h-61.625z" fill="#F36F21" opacity="0.4"/>
                    
                    {/* Water Surface */}
                    <path d="m95.9858246 52.7388077h-3.1499023c-.7900391-.6401367-1.5600586-1.1801758-2.1098633-1.3300781-4.5200195-1.25-17.6201172 2.6796875-18.7099609-1.3203125-1.0900879-4-14.2900391-3.6298828-17.0302734-1.1298828-2.7597656 2.5-5.1298828 1.75-12.3798828-.3701172-4.4299316-1.2998047-6.5300293 1.6601563-7.4899902 4.1503906h-.7600098s1-9.2802734 8.25-7.1503906c7.25 2.1201172 9.6201172 2.8701172 12.3798828.3701172 2.7402344-2.5 15.9401855-2.8701172 17.0302734 1.1298828 1.0898438 4 14.1899414.0703125 18.7099609 1.3203125 1.6499023.449707 5.2597656 4.3300781 5.2597656 4.3300781z" fill="#1A2637" opacity="0.8"/>
                    
                    {/* Jacuzzi Basin */}
                    <path d="m96.587265 59.9835739v3.023819c0 18.2147293-14.7719116 32.9866409-32.9866447 32.9866409h-22.1680909c-18.214735 0-32.9764175-14.7619324-32.9764175-32.9761658v-3.0342941z" fill="#F36F21" opacity="0.6"/>
                    
                    {/* Water Gradient Effect */}
                    <path d="m95.8559418 69.9087296c-3.1699219 14.909668-16.4099121 26.0898438-32.2600098 26.0898438h-22.1599121c-12.8300781 0-23.9501953-7.3300781-29.4001465-18.0302734 8.5200186 1.3300781 18.1101074 2.0703125 28.2399902 2.0703125 23.75-.0000001 44.4902344-4.0703126 55.5800782-10.1298829z" fill="#1A2637" opacity="0.3"/>
                    
                    {/* Bubbles */}
                    <circle cx="45" cy="30" r="1.5" fill="#FFFFFF" opacity="0.9"/>
                    <circle cx="55" cy="28" r="1.2" fill="#FFFFFF" opacity="0.7"/>
                    <circle cx="60" cy="35" r="1" fill="#FFFFFF" opacity="0.8"/>
                    <circle cx="50" cy="38" r="0.8" fill="#FFFFFF" opacity="0.6"/>
                    <circle cx="40" cy="35" r="1.3" fill="#FFFFFF" opacity="0.8"/>
                    
                    {/* Romantic Star Detail */}
                    <path d="m61.3929749 12.3237085c-2.9717941.6121521-5.3094254 2.9570789-5.9215775 5.928998-.0367966.1769772-.2728348.1769772-.3096352 0-.3023148-1.4896202-1.0398064-2.8170013-2.0796089-3.8493862-1.0249672-1.0323858-2.3523483-1.7771959-3.8419685-2.0796118-.1769791-.0367994-.1769791-.2728357 0-.3096352 1.4896202-.3023157 2.8170013-1.0471258 3.8493881-2.0796118 1.032383-1.0322847 1.7698746-2.359767 2.0721893-3.8492861.0368004-.1769776.2728386-.1769776.3096352 0 .3024178 1.4895191 1.0398064 2.8170013 2.0721931 3.8492861 1.032383 1.032486 2.3597679 1.7772961 3.8493843 2.0796118.1769791.0367995.1769791.2728358.0000001.3096352z" fill="#F36F21" opacity="0.7"/>
                  </svg>
                </div>
                <div className="text-pure-white">
                  <span className="text-xl font-bold group-hover:text-brand-orange-600 transition-colors duration-300">
                    Hotelmetjacuzzi.net
                  </span>
                  <div className="text-xs text-brand-navy-300 font-medium">
                    Nederland
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive(link.href)
                        ? 'text-brand-orange-600 bg-brand-navy-800'
                        : 'text-pure-white hover:text-brand-orange-600 hover:bg-brand-navy-800'
                    }`}
                    aria-label={link.description}
                  >
                    <span className="relative z-10">{link.label}</span>
                    
                    {/* SVG Line Pattern Hover Effect */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full transition-all duration-300 ${
                      isActive(link.href) ? 'w-full' : ''
                    }`}>
                      <svg width="100%" height="2" className="text-brand-orange-600">
                        <defs>
                          <pattern id={`line-pattern-${link.href.replace('/', '')}`} 
                                   patternUnits="userSpaceOnUse" width="8" height="2">
                            <line x1="0" y1="1" x2="8" y2="1" 
                                  stroke="currentColor" strokeWidth="1" opacity="0.8"/>
                            <circle cx="2" cy="1" r="0.5" fill="currentColor" opacity="0.6"/>
                            <circle cx="6" cy="1" r="0.5" fill="currentColor" opacity="0.6"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="2" fill={`url(#line-pattern-${link.href.replace('/', '')})`}/>
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/hotels"
                className="group relative bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 overflow-hidden"
                aria-label="Bekijk alle hotels met jacuzzi - Direct naar hotel overzicht"
              >
                <div className="relative flex items-center space-x-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="text-pure-white">
                    <path d="M2 4h12v8H2V4zm0-1h12c.5 0 1 .5 1 1v8c0 .5-.5 1-1 1H2c-.5 0-1-.5-1-1V4c0-.5.5-1 1-1z" fill="currentColor"/>
                    <path d="M5 6h1v1H5V6zm3 0h1v1H8V6zm3 0h1v1h-1V6zM5 8h1v1H5V8zm3 0h1v1H8V8zm3 0h1v1h-1V8z" fill="currentColor" opacity="0.7"/>
                  </svg>
                  <span>Bekijk Hotels</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" className="group-hover:translate-x-1 transition-transform">
                    <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="cta-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
                        <circle cx="10" cy="10" r="1" fill="white" opacity="0.3"/>
                        <circle cx="5" cy="5" r="0.5" fill="white" opacity="0.2"/>
                        <circle cx="15" cy="15" r="0.5" fill="white" opacity="0.2"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#cta-pattern)"/>
                  </svg>
                </div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-pure-white hover:text-brand-orange-600 hover:bg-brand-navy-800 transition-all duration-300"
                aria-expanded={isOpen}
                aria-label="Hoofdmenu openen"
              >
                <svg
                  className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Slide-in Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
        }`}>
          <div className="bg-brand-navy-900 border-b border-brand-navy-700 shadow-2xl">
            <div className="px-4 py-6 space-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-brand-orange-600 bg-brand-navy-800'
                      : 'text-pure-white hover:text-brand-orange-600 hover:bg-brand-navy-800'
                  }`}
                  aria-label={link.description}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.label}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" className="group-hover:translate-x-1 transition-transform">
                      <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="text-xs text-brand-navy-300 mt-1">{link.description}</div>
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 mt-4 border-t border-brand-navy-700">
                <Link
                  href="/hotels"
                  className="block w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold text-center px-6 py-4 rounded-xl transition-all duration-300 shadow-lg"
                  aria-label="Bekijk alle hotels met jacuzzi"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-pure-white">
                      <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                      <circle cx="7" cy="9" r="1.5" fill="currentColor"/>
                      <circle cx="13" cy="9" r="1.5" fill="currentColor"/>
                      <circle cx="10" cy="13" r="0.8" fill="currentColor"/>
                    </svg>
                    <span>Bekijk Hotels</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
      
      {/* Mobile menu backdrop */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-brand-navy-900 bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default Navbar
