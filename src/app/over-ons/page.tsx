import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Ons | JacuzziHotels',
  description: 'Ontdek wie wij zijn en waarom JacuzziHotels.nl jouw beste keuze is voor het vinden van de perfecte wellness overnachting met jacuzzi.',
}

export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-light-gray py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pure-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy-900 mb-6">
            Over JacuzziHotels.nl
          </h1>
          
          <div className="prose prose-lg max-w-none text-brand-navy-700 space-y-6">
            <p className="text-xl text-brand-navy-600 mb-8">
              Welkom bij JacuzziHotels.nl - jouw specialist in romantische en luxueuze wellness overnachtingen 
              in Nederland. Sinds onze oprichting zijn wij toegewijd aan het helpen van stellen en 
              wellness-liefhebbers bij het vinden van de perfecte accommodatie.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">Onze Missie</h2>
            <p>
              Wij geloven dat iedereen recht heeft op ontspanning en luxe. Daarom hebben wij het ons 
              tot doel gesteld om de beste hotels met jacuzzi, bubbelbad en wellness faciliteiten 
              in Nederland samen te brengen op één platform. Of je nu op zoek bent naar een romantisch 
              weekendje weg of gewoon even wilt ontsnappen aan de drukte van alledag.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">Wat Maakt Ons Bijzonder</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Handmatig geselecteerde hotels met hoogwaardige jacuzzi faciliteiten</li>
              <li>Actuele prijzen en beschikbaarheid via onze betrouwbare partners</li>
              <li>Uitgebreide reviews en gedetailleerde beschrijvingen</li>
              <li>Geen verborgen kosten - transparante doorverwijzing naar hotels</li>
              <li>Lokale expertise en persoonlijke aanbevelingen</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">Ons Team</h2>
            <p>
              Ons team bestaat uit ervaren wellness en hospitality professionals die Nederland 
              door en door kennen. Wij testen en bezoeken regelmatig de hotels in ons aanbod 
              om ervoor te zorgen dat alleen de beste accommodaties worden aanbevolen.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">Transparantie</h2>
            <p>
              JacuzziHotels.nl werkt samen met betrouwbare boekingspartners zoals Booking.com 
              en Hotelspecials.nl. Wanneer je via onze links boekt, ontvangen wij een kleine 
              commissie zonder extra kosten voor jou. Deze commissie stelt ons in staat om 
              onze service gratis aan te bieden en continu te verbeteren.
            </p>
          </div>

          <div className="mt-12 p-6 bg-brand-navy-50 rounded-xl border border-brand-navy-200">
            <h3 className="text-xl font-bold text-brand-navy-900 mb-4">
              Vragen of Suggesties?
            </h3>
            <p className="text-brand-navy-600 mb-4">
              Wij horen graag van je! Neem contact met ons op voor persoonlijke aanbevelingen 
              of als je een geweldig hotel kent dat in ons aanbod thuishoort.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Neem Contact Op
              <svg width="16" height="16" viewBox="0 0 16 16" className="ml-2">
                <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
