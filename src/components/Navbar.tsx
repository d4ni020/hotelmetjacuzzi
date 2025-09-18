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
                aria-label="JacuzziHotels - Terug naar startpagina"
              >
                <div className="relative">
                  {/* Professional Logo SVG Icon */}
                  <svg width="32" height="32" viewBox="0 0 32 32" className="transition-transform duration-300 group-hover:scale-105">
                    {/* Background */}
                    <circle cx="16" cy="16" r="15" fill="#1A2637"/>
                    
                    {/* Hotel shape */}
                    <path d="M8 21 L12 17 L20 17 L24 21 L24 26 L8 26 Z" fill="#F36F21"/>
                    
                    {/* Roof */}
                    <path d="M10 17 L16 12 L22 17 Z" fill="#F36F21"/>
                    
                    {/* Jacuzzi */}
                    <ellipse cx="16" cy="19.5" rx="6.5" ry="3" fill="#FFFFFF" opacity="0.9"/>
                    <ellipse cx="16" cy="19.5" rx="5" ry="2" fill="#F36F21" opacity="0.4"/>
                    
                    {/* Bubbles */}
                    <circle cx="13" cy="18" r="0.8" fill="#FFFFFF" opacity="0.8"/>
                    <circle cx="19" cy="18" r="0.6" fill="#FFFFFF" opacity="0.7"/>
                    <circle cx="16" cy="16.5" r="0.5" fill="#FFFFFF" opacity="0.9"/>
                    
                    {/* Heart accent */}
                    <path d="M20 14 C20 13, 21 12, 22 13 C23 12, 24 13, 24 14 C24 15, 22 17, 22 17 C22 17, 20 15, 20 14 Z" fill="#F36F21" opacity="0.8"/>
                  </svg>
                </div>
                <div className="text-pure-white">
                  <span className="text-xl font-bold group-hover:text-brand-orange-600 transition-colors duration-300">
                    JacuzziHotels
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
