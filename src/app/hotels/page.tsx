import { Metadata } from 'next'
import HotelCard from '@/components/HotelCard'

export const metadata: Metadata = {
  title: 'Alle Hotels met Jacuzzi | Hotelmetjacuzzi.net',
  description: 'Ontdek alle hotels met jacuzzi in Nederland. Vergelijk prijzen, faciliteiten en boek direct via onze partners voor de beste deals.',
}

export default function HotelsPage() {
  // Mock data - in productie uit Supabase
  const hotels = [
    {
      id: 1,
      name: "Kasteel Bloemendal",
      slug: "kasteel-bloemendal",
      description: "Luxe kasteel met wellness faciliteiten en romantische jacuzzi suites in een historische setting.",
      province_id: 1,
      city_id: 1,
      price_range: "Vanaf €225",
      facilities: ["Privé Jacuzzi", "Spa", "Restaurant", "Wellness"],
      affiliate_link: "https://booking.com/kasteel-bloemendal",
      image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
      rating: 4.8,
      created_at: "2024-01-01"
    },
    {
      id: 2,
      name: "Van der Valk Hotel Amsterdam",
      slug: "van-der-valk-amsterdam",
      description: "Modern hotel in het hart van Amsterdam met luxe suites uitgerust met bubbelbaden en wellness faciliteiten.",
      province_id: 2,
      city_id: 2,
      price_range: "Vanaf €189",
      facilities: ["Bubbelbad", "Sauna", "Fitness", "Restaurant"],
      affiliate_link: "https://booking.com/van-der-valk-amsterdam",
      image_url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop",
      rating: 4.6,
      created_at: "2024-01-01"
    },
    {
      id: 3,
      name: "Fletcher Wellness Hotel",
      slug: "fletcher-wellness-hotel",
      description: "Ontspanning pur sang in dit wellness hotel met jacuzzi kamers en uitgebreide spa faciliteiten.",
      province_id: 3,
      city_id: 3,
      price_range: "Vanaf €159",
      facilities: ["Wellness Suite", "Jacuzzi", "Massages", "Zwembad"],
      affiliate_link: "https://booking.com/fletcher-wellness",
      image_url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop",
      rating: 4.5,
      created_at: "2024-01-01"
    },
    {
      id: 6,
      name: "Eindhoven Design Hotel",
      slug: "eindhoven-design-hotel",
      description: "Innovatief design hotel met futuristische wellness suites en state-of-the-art jacuzzi faciliteiten.",
      province_id: 6,
      city_id: 6,
      price_range: "Vanaf €275",
      facilities: ["Wellness Suite", "Design Jacuzzi", "Spa", "Outdoor Terras"],
      affiliate_link: "https://booking.com/eindhoven-design",
      image_url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
      rating: 4.7,
      created_at: "2024-01-01"
    }
  ]

  return (
    <div className="min-h-screen bg-light-gray py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy-900 mb-4">
            Alle Hotels met Jacuzzi
          </h1>
          <p className="text-xl text-brand-navy-600 max-w-3xl mx-auto">
            Ontdek ons complete aanbod van hotels met jacuzzi, bubbelbad en wellness faciliteiten. 
            Vergelijk prijzen en boek direct via onze partners voor de beste deals.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-pure-white rounded-2xl shadow-lg p-6 mb-12 border border-brand-navy-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600">
              <option>Alle provincies</option>
              <option>Limburg</option>
              <option>Noord-Holland</option>
              <option>Gelderland</option>
            </select>
            <select className="px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600">
              <option>Alle steden</option>
              <option>Amsterdam</option>
              <option>Maastricht</option>
              <option>Rotterdam</option>
            </select>
            <select className="px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600">
              <option>Alle prijzen</option>
              <option>€100 - €150</option>
              <option>€150 - €250</option>
              <option>€250+</option>
            </select>
            <button className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Filter hotels
            </button>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-brand-navy-900 hover:bg-brand-navy-800 text-pure-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg">
            Meer hotels laden
          </button>
        </div>
      </div>
    </div>
  )
}
