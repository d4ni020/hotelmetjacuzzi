import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacybeleid | JacuzziHotels',
  description: 'Lees ons privacybeleid en ontdek hoe JacuzziHotels.nl omgaat met jouw persoonlijke gegevens en privacy.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-light-gray py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pure-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy-900 mb-6">
            Privacybeleid
          </h1>
          
          <div className="prose prose-lg max-w-none text-brand-navy-700 space-y-6">
            <p className="text-lg text-brand-navy-600 mb-8">
              Laatst bijgewerkt: December 2024
            </p>

            <p>
              JacuzziHotels.nl ("wij", "ons", "onze") respecteert uw privacy en is toegewijd aan 
              het beschermen van uw persoonlijke gegevens. Dit privacybeleid legt uit hoe wij 
              informatie verzamelen, gebruiken en beschermen wanneer u onze website bezoekt.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Welke gegevens verzamelen wij?
            </h2>
            
            <h3 className="text-xl font-semibold text-brand-navy-800 mb-3">
              Automatisch verzamelde gegevens
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP-adres en locatiegegevens</li>
              <li>Browsertype en versie</li>
              <li>Bezochte pagina's en klikgedrag</li>
              <li>Tijdstip en duur van bezoek</li>
              <li>Verwijzende website</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-navy-800 mb-3 mt-6">
              Vrijwillig verstrekte gegevens
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contactgegevens via contactformulieren</li>
              <li>E-mailadres voor nieuwsbriefinschrijving</li>
              <li>Feedback en recensies</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Hoe gebruiken wij uw gegevens?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Website functionaliteit verbeteren</li>
              <li>Persoonlijke aanbevelingen doen</li>
              <li>Nieuwsbriefs versturen (alleen met toestemming)</li>
              <li>Klantenservice verlenen</li>
              <li>Website statistieken analyseren</li>
              <li>Affiliate partners informeren over doorverwijzingen</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Cookies en tracking
            </h2>
            <p>
              Wij gebruiken cookies en vergelijkbare technologieën om uw ervaring te verbeteren:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li><strong>Essentiële cookies:</strong> Voor basisfunctionaliteit</li>
              <li><strong>Analytische cookies:</strong> Voor websitestatistieken (Google Analytics)</li>
              <li><strong>Marketing cookies:</strong> Voor gepersonaliseerde advertenties</li>
              <li><strong>Affiliate tracking:</strong> Voor het bijhouden van doorverwijzingen</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Delen van gegevens
            </h2>
            <p>
              Wij delen uw gegevens alleen in de volgende gevallen:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Met boekingspartners (Booking.com, Hotelspecials.nl) bij doorverwijzing</li>
              <li>Met analytics providers (Google Analytics) voor websitestatistieken</li>
              <li>Wanneer wettelijk verplicht</li>
              <li>Met uw expliciete toestemming</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Uw rechten
            </h2>
            <p>
              Onder de AVG heeft u de volgende rechten:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Inzage in uw persoonlijke gegevens</li>
              <li>Correctie van onjuiste gegevens</li>
              <li>Verwijdering van uw gegevens</li>
              <li>Beperking van gegevensverwerking</li>
              <li>Dataportabiliteit</li>
              <li>Bezwaar tegen gegevensverwerking</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Beveiliging
            </h2>
            <p>
              Wij nemen passende technische en organisatorische maatregelen om uw gegevens 
              te beschermen tegen ongeautoriseerde toegang, verlies of misbruik. Onze website 
              gebruikt SSL-encryptie en we bewaren gegevens alleen zolang noodzakelijk.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Bewaartermijn
            </h2>
            <p>
              Wij bewaren uw gegevens niet langer dan nodig voor de doeleinden waarvoor ze 
              zijn verzameld:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Websitelogboeken: 2 jaar</li>
              <li>Nieuwsbriefgegevens: tot afmelding</li>
              <li>Contactformulieren: 3 jaar</li>
              <li>Analytics data: 26 maanden (Google Analytics)</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Contact
            </h2>
            <p>
              Voor vragen over dit privacybeleid of het uitoefenen van uw rechten kunt u 
              contact opnemen via:
            </p>
            <div className="mt-4 p-4 bg-brand-navy-50 rounded-lg">
              <p><strong>E-mail:</strong> privacy@jacuzzihotels.nl</p>
              <p><strong>Adres:</strong> JacuzziHotels.nl, Nederland</p>
            </div>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Wijzigingen
            </h2>
            <p>
              Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. Belangrijke wijzigingen 
              communiceren wij via onze website. De laatste versie is altijd beschikbaar op deze pagina.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
