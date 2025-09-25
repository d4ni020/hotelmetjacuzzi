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
                className="group flex items-center space-x-4"
                aria-label="Hotelmetjacuzzi.net - Terug naar startpagina"
              >
                <div className="relative">
                  {/* Jacuzzi Logo SVG */}
                  <svg width="32" height="32" viewBox="0 0 105 105" className="transition-transform duration-300 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
                    {/* Water/Jacuzzi Base */}
                    <path d="m34.3559418 52.7407799s1-9.2822456 8.25-7.1572456 9.625 2.875 12.375.375 15.9489288-2.875 17.0369644 1.125 14.1925583.0751228 18.7130356 1.3245392c1.6402435.4533463 5.25 4.3327065 5.25 4.3327065h-61.625z" fill="#FFFFFF" opacity="0.8"/>
                    
                    {/* Water Surface */}
                    <path d="m95.9858246 52.7388077h-3.1499023c-.7900391-.6401367-1.5600586-1.1801758-2.1098633-1.3300781-4.5200195-1.25-17.6201172 2.6796875-18.7099609-1.3203125-1.0900879-4-14.2900391-3.6298828-17.0302734-1.1298828-2.7597656 2.5-5.1298828 1.75-12.3798828-.3701172-4.4299316-1.2998047-6.5300293 1.6601563-7.4899902 4.1503906h-.7600098s1-9.2802734 8.25-7.1503906c7.25 2.1201172 9.6201172 2.8701172 12.3798828.3701172 2.7402344-2.5 15.9401855-2.8701172 17.0302734 1.1298828 1.0898438 4 14.1899414.0703125 18.7099609 1.3203125 1.6499023.449707 5.2597656 4.3300781 5.2597656 4.3300781z" fill="#F36F21"/>
                    
                    {/* Outline */}
                    <path d="m95.980957 53.4908447h-61.625c-.2128906 0-.4155273-.0905762-.5581055-.2487793-.1420898-.1584473-.2104492-.369873-.1875-.581543.0219727-.2062988.5805664-5.0773926 3.7436523-7.1916504 1.5224609-1.0175781 3.3603516-1.2211914 5.4628906-.6049805l.3432617.1005859c7.2167969 2.1162109 9.0092773 2.536377 11.3164063.439209 2.1962891-1.9968262 9.9589844-2.7402344 14.5712891-1.3955078 2.0976563.6115723 3.3408203 1.5800781 3.6938477 2.878418.4960938 1.824707 5.7148438 1.3112793 9.90625.8996582 3.2807617-.3225098 6.3798828-.6276855 8.2827148-.1010742 1.7558594.4853516 4.972168 3.8710938 5.5991211 4.5446777.2036133.2185059.2578125.5368652.1386719.8103027-.1191406.2736818-.3891601.4506837-.6875.4506837zm-60.7368164-1.5h58.9521484c-1.3120117-1.279541-2.8916016-2.6459961-3.6650391-2.8598633-1.6333008-.4519043-4.7363281-.1467285-7.7363281.1481934-5.487793.5393066-10.6713867 1.0488281-11.5004883-1.9987793-.2011719-.7387695-1.1479492-1.3894043-2.6665039-1.8320313-4.3754883-1.276123-11.4575195-.4665527-13.1425781 1.0651855-3.0170898 2.7438965-5.6669922 1.9665527-12.7470703-.1096191l-.3432617-.1005859c-1.6538086-.4846191-3.0683594-.3464355-4.2036133.4099121-1.887207 1.258545-2.6640624 3.9213868-2.9472656 5.2775879z" fill="#FFFFFF" opacity="0.9"/>
                    
                    {/* Handle/Grip */}
                    <path d="m24.6459808 7.05863c-1.4101563-.840332-3.0600586-1.3300781-4.8200684-1.3300781-5.1999502 0-9.4299307 4.2202148-9.4299307 9.4199219v37.8100586h-1.3798827v-38.8100587c0-5.199707 4.2299805-9.4199219 9.4299307-9.4199219 2.3798828.0000001 4.5500488.8798829 6.1999511 2.3300782z" fill="#F5F5F5"/>
                    
                    {/* Handle Outline */}
                    <path d="m12.1450195 53.7086182h-3.1245117c-.4140625 0-.75-.3356934-.75-.75v-38.809082c0-5.6105957 4.5644531-10.175293 10.175293-10.175293s10.175293 4.5646973 10.175293 10.175293c0 1.2751465-1.0375977 2.3125-2.3125 2.3125s-2.3125-1.0373535-2.3125-2.3125c0-3.060791-2.4897461-5.5507813-5.550293-5.5507813s-5.5507813 2.4899902-5.5507813 5.5507813v38.809082c0 .4143066-.3359375.75-.75.75zm-2.3745117-1.5h1.6245117v-38.059082c0-3.8876953 3.1630859-7.0507813 7.0507813-7.0507813s7.050293 3.1630859 7.050293 7.0507813c0 .447998.3642578.8125.8125.8125s.8125-.364502.8125-.8125c0-4.7836914-3.8916016-8.675293-8.675293-8.675293s-8.675293 3.8916016-8.675293 8.675293z" fill="#FFFFFF"/>
                    
                    {/* Steam/Bubbles Large */}
                    <path d="m30.5109825 13.4545107.5917492 1.9177599c.3917198 1.2694931-.3175926 2.6129303-1.5870876 3.0046501l-2.5933933.8002243c-1.2559738.3875484-2.5992851-.322525-2.9910049-1.59202l-.5917492-1.9177589c-.3917198-1.2694941.3179226-2.6130323 1.5738983-3.0005798l2.5933933-.8002262c1.2694931-.391719 2.6124744.3184565 3.0041942 1.5879506z" fill="#F36F21"/>
                    <path d="m30.509964 13.4512129.6084366 1.971837c-.4100838-1.2342138-1.7315331-1.9214201-2.9875069-1.5338726l-2.5933952.8002253c-1.2424545.3833761-1.9469204 1.6957045-1.5905838 2.9465036l-.6084347-1.971838c-.3917198-1.2694941.3179226-2.6130323 1.5738964-3.0005798l2.5933952-.8002253c1.2694931-.3917188 2.6124745.3184557 3.0041924 1.5879498z" fill="#F36F21" opacity="0.7"/>
                    
                    {/* Leaf/Nature Detail */}
                    <path d="m38.8820152 24.0918903-16.558485 5.1093369c-1.3911667.4292641-2.8530865-.569231-2.8427238-2.0220184.009697-4.8104 3.1143417-9.2742634 7.9628181-10.7703228 4.8488064-1.4961634 9.9289341.4421806 12.6474972 4.4107418.813652 1.1985263.1685409 2.8471717-1.2091065 3.2722625z" fill="#F36F21"/>
                    <path d="m38.8820152 24.0918903-16.558485 5.1093369c-1.3911667.4292641-2.8530865-.569231-2.8427238-2.0220184.0084572-.9791145.1282349-1.9333515.3903141-2.8571072 2.4463253-.0304108 5.5427456-.5416584 8.8246346-1.554327 3.8358498-1.1836014 7.09552-2.7961197 9.1206436-4.3823357.8650322.6944199 1.6337547 1.5073967 2.2747231 2.4341888.8136519 1.1985264.1685408 2.8471718-1.2091066 3.2722626z" fill="#F36F21" opacity="0.8"/>
                    
                    {/* Jacuzzi Basin/Tub */}
                    <path d="m96.587265 59.9835739v3.023819c0 18.2147293-14.7719116 32.9866409-32.9866447 32.9866409h-22.1680909c-18.214735 0-32.9764175-14.7619324-32.9764175-32.9761658v-3.0342941z" fill="#F36F21"/>
                    
                    {/* Water Gradient Effect */}
                    <path d="m95.8559418 69.9087296c-3.1699219 14.909668-16.4099121 26.0898438-32.2600098 26.0898438h-22.1599121c-12.8300781 0-23.9501953-7.3300781-29.4001465-18.0302734 8.5200186 1.3300781 18.1101074 2.0703125 28.2399902 2.0703125 23.75-.0000001 44.4902344-4.0703126 55.5800782-10.1298829z" fill="#F36F21" opacity="0.6"/>
                    
                    {/* Rim/Edge */}
                    <path d="m100.4999695 56.3671646c0 .9911461-.3985519 1.900486-1.0522537 2.553936-.6536942.6539459-1.5630341 1.0624733-2.5641556 1.0624733h-88.4479008c-2.002244 0-3.6164098-1.6241417-3.6164098-3.6164093 0-1.0011215.3985534-1.9104614 1.0522504-2.5639076.6539469-.6539459 1.5630374-1.0624771 2.5641594-1.0624771h88.4478989c2.0022449 0 3.6164112 1.6241417 3.6164112 3.6263847z" fill="#F36F21"/>
                    <path d="m100.476059 56.7285538c-.0800781.8500977-.4501953 1.6201172-1.0300293 2.1899414-.6501465.6601563-1.5600586 1.0703125-2.5600586 1.0703125h-88.4499502c-2 0-3.6201172-1.6303711-3.6201172-3.6201172 0-1 .3999023-1.9101563 1.0600586-2.5703125.3398438-.3398438.75-.6098633 1.2099609-.7900391-.0100098.1201172-.0200195.2402344-.0200195.3603516 0 1.9897461 1.6201172 3.6201172 3.6201172 3.6201172h88.4499512c.4699697 0 .9299306-.0903321 1.3400869-.2602539z" fill="#F36F21" opacity="0.8"/>
                    
                    {/* Bubbles */}
                    <circle cx="45" cy="30" r="1.5" fill="#FFFFFF"/>
                    <circle cx="55" cy="28" r="1.2" fill="#FFFFFF"/>
                    <circle cx="60" cy="35" r="1" fill="#FFFFFF"/>
                    <circle cx="50" cy="38" r="0.8" fill="#FFFFFF"/>
                    <circle cx="40" cy="35" r="1.3" fill="#FFFFFF"/>
                    <circle cx="48" cy="25" r="0.9" fill="#FFFFFF" opacity="0.8"/>
                    <circle cx="65" cy="32" r="0.7" fill="#FFFFFF" opacity="0.7"/>
                    
                    {/* Small Steam Lines */}
                    <path d="m39.5678711 31.4320068c-.2919922 0-.5693359-.1713867-.6904297-.4567871l-.7827148-1.840332c-.1621094-.3811035.0151367-.8215332.3964844-.9836426.3823242-.1628418.8217773.0161133.9833984.3967285l.7827148 1.840332c.1621094.3811035-.0151367.8215332-.3964844.9836426-.0957031.0407715-.1953125.0600586-.2929687.0600586z" fill="#FFFFFF"/>
                    <path d="m41.3574219 35.6383057c-.2919922 0-.5693359-.1713867-.6904297-.4567871l-.8945313-2.1032715c-.1621094-.3811035.0151367-.8215332.3964844-.9836426.3818359-.1630859.8217773.0161133.9833984.3967285l.8945313 2.1032715c.1621094.3811035-.0151367.8215332-.3964844.9836426-.0957031.0407715-.1953125.0600586-.2929687.0600586z" fill="#FFFFFF"/>
                    <path d="m43.0351563 39.5819092c-.2919922 0-.5693359-.1711426-.6904297-.456543l-.7832031-1.840332c-.1625977-.3811035.0151367-.8215332.3964844-.9838867.3823242-.1623535.8217773.015625.9833984.3964844l.7832031 1.840332c.1625977.3811035-.0151367.8215332-.3964844.9838867-.0957031.0407715-.1953125.0600586-.2929687.0600586z" fill="#FFFFFF"/>
                    
                    {/* Star Detail */}
                    <path d="m61.3929749 12.3237085c-2.9717941.6121521-5.3094254 2.9570789-5.9215775 5.928998-.0367966.1769772-.2728348.1769772-.3096352 0-.3023148-1.4896202-1.0398064-2.8170013-2.0796089-3.8493862-1.0249672-1.0323858-2.3523483-1.7771959-3.8419685-2.0796118-.1769791-.0367994-.1769791-.2728357 0-.3096352 1.4896202-.3023157 2.8170013-1.0471258 3.8493881-2.0796118 1.032383-1.0322847 1.7698746-2.359767 2.0721893-3.8492861.0368004-.1769776.2728386-.1769776.3096352 0 .3024178 1.4895191 1.0398064 2.8170013 2.0721931 3.8492861 1.032383 1.032486 2.3597679 1.7772961 3.8493843 2.0796118.1769791.0367995.1769791.2728358.0000001.3096352z" fill="#F36F21"/>
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
                  <span>Bekijk Hotels</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" className="group-hover:translate-x-1 transition-transform">
                    <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-20">
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
                  className="block w-full text-pure-white font-bold text-center px-6 py-4 transition-all duration-300 hover:text-brand-orange-600"
                  aria-label="Bekijk alle hotels met jacuzzi"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>Bekijk Hotels</span>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
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
