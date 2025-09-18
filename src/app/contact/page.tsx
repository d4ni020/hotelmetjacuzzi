import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact | JacuzziHotels',
  description: 'Neem contact op met JacuzziHotels voor vragen over hotels, boekingen of partnerships. We helpen je graag bij het vinden van jouw perfecte wellness overnachting.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1600&auto=format&fit=crop"
            alt="Contact JacuzziHotels - Wellness customer service"
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
                <li><span className="text-pure-white font-semibold">Contact</span></li>
              </ol>
            </nav>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-brand-orange-600">Contact</span> & Klantenservice
            </h1>
            <p className="text-xl text-pure-white mb-8 max-w-2xl">
              Heb je vragen over hotels, boekingen of wil je samenwerken? 
              We helpen je graag bij het vinden van jouw perfecte wellness overnachting met persoonlijke service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact-form" className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Stuur Bericht
              </a>
              <a href="#contact-info" className="bg-pure-white text-brand-navy-900 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Contactgegevens
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 bg-light-gray relative overflow-hidden">
        {/* Extra Subtle Background Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.015,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='bg-pattern' patternUnits='userSpaceOnUse' width='120' height='120'%3E%3Cg fill='none' stroke='%231A2637' stroke-width='0.3'%3E%3Cpath d='M30 30h60v60H30z'/%3E%3Cpath d='M60 30v60'/%3E%3Cpath d='M30 60h60'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bg-pattern)'/%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div id="contact-form" className="bg-pure-white rounded-2xl shadow-lg p-8 border border-brand-navy-200">
            <h2 className="text-2xl font-bold text-brand-navy-900 mb-6">
              Stuur ons een bericht
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-brand-navy-800 mb-2">
                    Voornaam *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600 transition-colors"
                    placeholder="Je voornaam"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-brand-navy-800 mb-2">
                    Achternaam *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600 transition-colors"
                    placeholder="Je achternaam"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-brand-navy-800 mb-2">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600 transition-colors"
                  placeholder="je@email.nl"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-brand-navy-800 mb-2">
                  Onderwerp *
                </label>
                <select
                  id="subject"
                  required
                  className="w-full px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600 transition-colors"
                >
                  <option value="">Kies een onderwerp</option>
                  <option value="hotel-vraag">Vraag over een hotel</option>
                  <option value="boeking-hulp">Hulp bij boeken</option>
                  <option value="partnership">Partnership/Samenwerking</option>
                  <option value="technisch">Technische vraag</option>
                  <option value="feedback">Feedback</option>
                  <option value="anders">Anders</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-brand-navy-800 mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600 transition-colors resize-vertical"
                  placeholder="Beschrijf je vraag of opmerking..."
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="mt-1 h-4 w-4 text-brand-orange-600 border-brand-navy-200 rounded focus:ring-brand-orange-600"
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-brand-navy-600">
                  Ik ga akkoord met het <a href="/privacy" className="text-brand-orange-600 hover:underline">privacybeleid</a> en de verwerking van mijn gegevens. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Verstuur bericht
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div id="contact-info" className="space-y-8">
            {/* Contact Details */}
            <div className="bg-pure-white rounded-2xl shadow-lg p-8 border border-brand-navy-200">
              <h2 className="text-2xl font-bold text-brand-navy-900 mb-6">
                Contactgegevens
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-orange-600 p-3 rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-pure-white">
                      <path d="M2.5 3A1.5 1.5 0 001 4.5v.793l9 4.5 9-4.5V4.5A1.5 1.5 0 0017.5 3h-15z" fill="currentColor"/>
                      <path d="M19 8.207l-7.5 3.75L4 8.207V15.5A1.5 1.5 0 005.5 17h9a1.5 1.5 0 001.5-1.5V8.207z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy-900">E-mail</h3>
                    <p className="text-brand-navy-600">info@jacuzzihotels.nl</p>
                    <p className="text-sm text-brand-navy-500">We reageren binnen 24 uur</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-orange-600 p-3 rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-pure-white">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy-900">Social Media</h3>
                    <p className="text-brand-navy-600">@JacuzziHotelsNL</p>
                    <p className="text-sm text-brand-navy-500">Volg ons voor daily inspiration</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-orange-600 p-3 rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-pure-white">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy-900">Klantenservice</h3>
                    <p className="text-brand-navy-600">Ma-Vr 9:00 - 18:00</p>
                    <p className="text-sm text-brand-navy-500">Zaterdag 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-pure-white rounded-2xl shadow-lg p-8 border border-brand-navy-200">
              <h2 className="text-2xl font-bold text-brand-navy-900 mb-6">
                Veelgestelde vragen
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-brand-navy-900 mb-2">
                    Hoe kan ik een hotel boeken?
                  </h3>
                  <p className="text-sm text-brand-navy-600">
                    Klik op "Bekijk beschikbaarheid" bij je gewenste hotel om door te gaan naar onze partners zoals Booking.com.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy-900 mb-2">
                    Zijn jullie prijzen actueel?
                  </h3>
                  <p className="text-sm text-brand-navy-600">
                    We tonen richtprijzen. Voor actuele prijzen en beschikbaarheid klik je door naar onze boekingspartners.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy-900 mb-2">
                    Kan ik mijn boeking via jullie wijzigen?
                  </h3>
                  <p className="text-sm text-brand-navy-600">
                    Voor wijzigingen neem je contact op met het hotel of de boekingspartner waar je geboekt hebt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}
