import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | Hotelmetjacuzzi.net',
  description: 'Lees onze algemene voorwaarden en disclaimer voor het gebruik van Hotelmetjacuzzi.net.',
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-light-gray py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pure-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy-900 mb-6">
            Disclaimer
          </h1>
          
          <div className="prose prose-lg max-w-none text-brand-navy-700 space-y-6">
            <p className="text-lg text-brand-navy-600 mb-8">
              Laatst bijgewerkt: December 2024
            </p>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Algemene voorwaarden
            </h2>
            <p>
              Door gebruik te maken van Hotelmetjacuzzi.net ("de website") gaat u akkoord met 
              deze disclaimer en algemene voorwaarden. Lees deze zorgvuldig door voordat u 
              onze diensten gebruikt.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Aard van de dienst
            </h2>
            <p>
              Hotelmetjacuzzi.net is een informatieve website die fungiert als tussenpersoon 
              tussen bezoekers en hotels. Wij zijn geen reisbureau en verzorgen geen directe 
              boekingen. Alle reserveringen worden gemaakt via onze partners zoals Booking.com 
              en Hotelspecials.nl.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Informatie en prijzen
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Alle informatie op de website is naar beste weten samengesteld</li>
              <li>Prijzen zijn indicatief en kunnen zonder voorafgaande kennisgeving wijzigen</li>
              <li>Beschikbaarheid is afhankelijk van de boekingspartners</li>
              <li>Wij zijn niet verantwoordelijk voor onjuiste of verouderde informatie</li>
              <li>Controleer altijd actuele prijzen en voorwaarden bij de boekingspartner</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Aansprakelijkheid
            </h2>
            <p>
              Hotelmetjacuzzi.net sluit, voor zover wettelijk toegestaan, elke aansprakelijkheid uit voor:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Directe of indirecte schade door gebruik van de website</li>
              <li>Schade door onjuiste of incomplete informatie</li>
              <li>Technische storingen of onbeschikbaarheid van de website</li>
              <li>Handelingen van derde partijen (hotels, boekingspartners)</li>
              <li>Verlies van gegevens of winstderving</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Boekingen en annuleringen
            </h2>
            <p>
              Voor alle boekingen, wijzigingen en annuleringen gelden de voorwaarden van 
              de betreffende boekingspartner of het hotel. Hotelmetjacuzzi.net heeft geen 
              invloed op en neemt geen verantwoordelijkheid voor:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Boekings- en annuleringsvoorwaarden</li>
              <li>Betaling en restitutie procedures</li>
              <li>Kwaliteit van accommodaties en diensten</li>
              <li>Geschillen tussen klant en hotel/boekingspartner</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Intellectueel eigendom
            </h2>
            <p>
              Alle content op Hotelmetjacuzzi.net, inclusief teksten, afbeeldingen, logo's en 
              ontwerp, is eigendom van Hotelmetjacuzzi.net of wordt gebruikt onder licentie. 
              Ongeautoriseerd gebruik is niet toegestaan.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Links naar externe websites
            </h2>
            <p>
              Onze website bevat links naar externe websites van partners en derden. 
              Wij hebben geen controle over de inhoud of het privacybeleid van deze websites 
              en aanvaarden geen verantwoordelijkheid voor hun diensten.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Gebruik van de website
            </h2>
            <p>
              Het is niet toegestaan om:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>De website te gebruiken voor illegale doeleinden</li>
              <li>Ongewenste berichten (spam) te versturen</li>
              <li>Malware of virussen te verspreiden</li>
              <li>Auteursrechten te schenden</li>
              <li>De website te misbruiken of te beschadigen</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Toepasselijk recht
            </h2>
            <p>
              Op deze disclaimer en het gebruik van Hotelmetjacuzzi.net is Nederlands recht 
              van toepassing. Geschillen worden voorgelegd aan de bevoegde Nederlandse rechter.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Wijzigingen
            </h2>
            <p>
              Hotelmetjacuzzi.net behoudt zich het recht voor om deze disclaimer en algemene 
              voorwaarden te wijzigen zonder voorafgaande kennisgeving. De meest actuele 
              versie is altijd beschikbaar op deze pagina.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
              Contact
            </h2>
            <p>
              Voor vragen over deze disclaimer kunt u contact opnemen via:
            </p>
            <div className="mt-4 p-4 bg-brand-navy-50 rounded-lg">
              <p><strong>E-mail:</strong> info@hotelmetjacuzzi.net</p>
              <p><strong>Website:</strong> www.jacuzzihotels.nl</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
