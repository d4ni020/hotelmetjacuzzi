import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Disclaimer | Hotelmetjacuzzi.net',
  description: 'Transparante informatie over onze affiliate partnerships en hoe Hotelmetjacuzzi.net werkt met boekingspartners.',
}

export default function AffiliateDisclaimerPage() {
  return (
    <div className="min-h-screen bg-light-gray py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pure-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy-900 mb-6">
            Affiliate Disclaimer
          </h1>
          
          <div className="prose prose-lg max-w-none text-brand-navy-700 space-y-6">
            <p className="text-lg text-brand-navy-600 mb-8">
              Transparantie over onze affiliate partnerships
            </p>

            <div className="bg-brand-orange-50 border-l-4 border-brand-orange-600 p-6 mb-8">
              <h2 className="text-xl font-bold text-brand-orange-800 mb-2">
                Belangrijke mededeling
              </h2>
              <p className="text-brand-orange-700">
                Hotelmetjacuzzi.net bevat affiliate links naar onze partners. Wanneer u via 
                onze links boekt, ontvangen wij een commissie zonder extra kosten voor u.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Wat zijn affiliate links?
            </h2>
            <p>
              Affiliate links zijn speciale links die ons in staat stellen om een kleine 
              commissie te ontvangen wanneer u via onze website een boeking maakt bij 
              onze partners. Deze commissie wordt betaald door de partner (zoals Booking.com 
              of Hotelspecials.nl) en heeft geen invloed op de prijs die u betaalt.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Onze affiliate partners
            </h2>
            <p>
              Hotelmetjacuzzi.net werkt samen met de volgende betrouwbare boekingspartners:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li><strong>Booking.com</strong> - Wereldwijde marktleider in online hotelboekingen</li>
              <li><strong>Hotelspecials.nl</strong> - Nederlandse specialist in wellness en luxe hotels</li>
              <li><strong>Andere geselecteerde partners</strong> - Alleen betrouwbare, gecertificeerde aanbieders</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Hoe werkt het?
            </h2>
            <div className="bg-brand-navy-50 p-6 rounded-lg">
              <ol className="list-decimal list-inside space-y-3">
                <li>U vindt een hotel op Hotelmetjacuzzi.net dat u interesseert</li>
                <li>U klikt op "Bekijk beschikbaarheid" of een vergelijkbare knop</li>
                <li>U wordt doorgestuurd naar onze partner (bijv. Booking.com)</li>
                <li>U maakt uw boeking tegen de normale prijs</li>
                <li>De partner betaalt ons een kleine commissie voor de doorverwijzing</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Uw voordelen
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Geen extra kosten:</strong> U betaalt nooit meer dan de normale prijs</li>
              <li><strong>Beste deals:</strong> Onze partners bieden vaak exclusieve kortingen</li>
              <li><strong>Betrouwbare service:</strong> Boekingen via gerenommeerde platforms</li>
              <li><strong>Gratis advies:</strong> Onze website blijft gratis toegankelijk</li>
              <li><strong>Kwaliteitsgarantie:</strong> Wij selecteren alleen de beste hotels</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Onze transparantie belofte
            </h2>
            <p>
              Wij geloven in volledige transparantie over onze affiliate partnerships:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Affiliate links zijn duidelijk gemarkeerd waar mogelijk</li>
              <li>Onze recensies en aanbevelingen zijn altijd eerlijk en onafhankelijk</li>
              <li>Wij promoten alleen hotels die wij daadwerkelijk zouden aanbevelen</li>
              <li>Commissies beïnvloeden nooit onze redactionele content</li>
              <li>Wij zijn open over onze verdienmodel</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Onafhankelijkheid
            </h2>
            <p>
              Hoewel wij commissies ontvangen van onze partners, blijven onze reviews en 
              aanbevelingen volledig onafhankelijk. Wij selecteren hotels op basis van:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Kwaliteit van faciliteiten en service</li>
              <li>Positieve gastreviewsnder</li>
              <li>Prijs-kwaliteitverhouding</li>
              <li>Locatie en bereikbaarheid</li>
              <li>Wellness en jacuzzi faciliteiten</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Cookie tracking
            </h2>
            <p>
              Voor het bijhouden van affiliate verwijzingen gebruiken wij cookies. Deze cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Zorgen ervoor dat wij commissie ontvangen voor uw boeking</li>
              <li>Bewaren geen persoonlijke identificeerbare informatie</li>
              <li>Verstoren uw browse-ervaring niet</li>
              <li>Kunnen door u worden uitgeschakeld in uw browserinstellingen</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Contact
            </h2>
            <p>
              Heeft u vragen over onze affiliate partnerships of dit beleid? 
              Neem gerust contact met ons op:
            </p>
            <div className="mt-4 p-4 bg-brand-navy-50 rounded-lg">
              <p><strong>E-mail:</strong> info@hotelmetjacuzzi.net</p>
              <p><strong>Onderwerp:</strong> Affiliate vraag</p>
            </div>

            <div className="mt-8 p-6 bg-brand-orange-50 rounded-xl border border-brand-orange-200">
              <h3 className="text-xl font-bold text-brand-orange-800 mb-3">
                Steun ons werk
              </h3>
              <p className="text-brand-orange-700">
                Door via onze links te boeken, steunt u ons werk en helpt u ons om deze 
                website gratis en up-to-date te houden. Dank je wel voor uw vertrouwen!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
