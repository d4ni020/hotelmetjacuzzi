import { notFound } from 'next/navigation'
import { City, Hotel, Province } from '@/lib/supabase'
import HotelCard from '@/components/HotelCard'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

interface CityPageProps {
  params: Promise<{
    slug: string
  }>
}

// SVG Pattern Component
const WavePattern = () => (
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      opacity: 0.03,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wave-pattern' patternUnits='userSpaceOnUse' width='60' height='60'%3E%3Cg fill='none' stroke='%23F36F21' stroke-width='0.5'%3E%3C!-- Wave lijnen --%3E%3Cpath d='M0 30 Q15 20 30 30 T60 30'/%3E%3Cpath d='M0 40 Q15 30 30 40 T60 40'/%3E%3Cpath d='M0 20 Q15 10 30 20 T60 20'/%3E%3Cpath d='M0 50 Q15 40 30 50 T60 50'/%3E%3C!-- Verticale lijnen --%3E%3Cline x1='15' y1='0' x2='15' y2='60'/%3E%3Cline x1='45' y1='0' x2='45' y2='60'/%3E%3C!-- Accent cirkels --%3E%3Ccircle cx='15' cy='30' r='2' fill='%23F36F21' opacity='0.4'/%3E%3Ccircle cx='45' cy='30' r='2' fill='%23F36F21' opacity='0.4'/%3E%3Ccircle cx='30' cy='15' r='1' fill='%23F36F21' opacity='0.6'/%3E%3Ccircle cx='30' cy='45' r='1' fill='%23F36F21' opacity='0.6'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23wave-pattern)'/%3E%3C/svg%3E")`
    }}
  />
)

// Mock data (same as in page.tsx)
const mockCities: (City & { provinces?: Province })[] = [
  { id: 1, name: "Maastricht", slug: "maastricht", province_id: 1, seo_text: "", created_at: "2024-01-01", provinces: { id: 1, name: "Limburg", slug: "limburg", seo_text: "", created_at: "2024-01-01" } },
  { id: 2, name: "Amsterdam", slug: "amsterdam", province_id: 2, seo_text: "", created_at: "2024-01-01", provinces: { id: 2, name: "Noord-Holland", slug: "noord-holland", seo_text: "", created_at: "2024-01-01" } },
  { id: 3, name: "Arnhem", slug: "arnhem", province_id: 3, seo_text: "", created_at: "2024-01-01", provinces: { id: 3, name: "Gelderland", slug: "gelderland", seo_text: "", created_at: "2024-01-01" } },
  { id: 4, name: "Rotterdam", slug: "rotterdam", province_id: 4, seo_text: "", created_at: "2024-01-01", provinces: { id: 4, name: "Zuid-Holland", slug: "zuid-holland", seo_text: "", created_at: "2024-01-01" } },
  { id: 15, name: "Den Haag", slug: "den-haag", province_id: 4, seo_text: "", created_at: "2024-01-01", provinces: { id: 4, name: "Zuid-Holland", slug: "zuid-holland", seo_text: "", created_at: "2024-01-01" } },
  { id: 41, name: "Leiden", slug: "leiden", province_id: 4, seo_text: "", created_at: "2024-01-01", provinces: { id: 4, name: "Zuid-Holland", slug: "zuid-holland", seo_text: "", created_at: "2024-01-01" } },
  { id: 42, name: "Wassenaar", slug: "wassenaar", province_id: 4, seo_text: "", created_at: "2024-01-01", provinces: { id: 4, name: "Zuid-Holland", slug: "zuid-holland", seo_text: "", created_at: "2024-01-01" } },
  { id: 43, name: "Nootdorp", slug: "nootdorp", province_id: 4, seo_text: "", created_at: "2024-01-01", provinces: { id: 4, name: "Zuid-Holland", slug: "zuid-holland", seo_text: "", created_at: "2024-01-01" } },
  { id: 44, name: "Ridderkerk", slug: "ridderkerk", province_id: 4, seo_text: "", created_at: "2024-01-01", provinces: { id: 4, name: "Zuid-Holland", slug: "zuid-holland", seo_text: "", created_at: "2024-01-01" } },
  { id: 40, name: "Sassenheim", slug: "sassenheim", province_id: 4, seo_text: "", created_at: "2024-01-01", provinces: { id: 4, name: "Zuid-Holland", slug: "zuid-holland", seo_text: "", created_at: "2024-01-01" } },
  { id: 45, name: "Dordrecht", slug: "dordrecht", province_id: 4, seo_text: "", created_at: "2024-01-01", provinces: { id: 4, name: "Zuid-Holland", slug: "zuid-holland", seo_text: "", created_at: "2024-01-01" } },
  { id: 5, name: "Utrecht", slug: "utrecht-stad", province_id: 5, seo_text: "", created_at: "2024-01-01", provinces: { id: 5, name: "Utrecht", slug: "utrecht", seo_text: "", created_at: "2024-01-01" } },
  { id: 34, name: "Hilversum", slug: "hilversum", province_id: 5, seo_text: "", created_at: "2024-01-01", provinces: { id: 5, name: "Utrecht", slug: "utrecht", seo_text: "", created_at: "2024-01-01" } },
  { id: 35, name: "Vianen", slug: "vianen", province_id: 5, seo_text: "", created_at: "2024-01-01", provinces: { id: 5, name: "Utrecht", slug: "utrecht", seo_text: "", created_at: "2024-01-01" } },
  { id: 36, name: "Houten", slug: "houten", province_id: 5, seo_text: "", created_at: "2024-01-01", provinces: { id: 5, name: "Utrecht", slug: "utrecht", seo_text: "", created_at: "2024-01-01" } },
  { id: 37, name: "Breukelen", slug: "breukelen", province_id: 5, seo_text: "", created_at: "2024-01-01", provinces: { id: 5, name: "Utrecht", slug: "utrecht", seo_text: "", created_at: "2024-01-01" } },
  { id: 38, name: "De Bilt", slug: "de-bilt", province_id: 5, seo_text: "", created_at: "2024-01-01", provinces: { id: 5, name: "Utrecht", slug: "utrecht", seo_text: "", created_at: "2024-01-01" } },
  { id: 39, name: "Amersfoort", slug: "amersfoort", province_id: 5, seo_text: "", created_at: "2024-01-01", provinces: { id: 5, name: "Utrecht", slug: "utrecht", seo_text: "", created_at: "2024-01-01" } },
  { id: 6, name: "Eindhoven", slug: "eindhoven", province_id: 6, seo_text: "", created_at: "2024-01-01", provinces: { id: 6, name: "Noord-Brabant", slug: "noord-brabant", seo_text: "", created_at: "2024-01-01" } },
  { id: 30, name: "Tilburg", slug: "tilburg", province_id: 6, seo_text: "", created_at: "2024-01-01", provinces: { id: 6, name: "Noord-Brabant", slug: "noord-brabant", seo_text: "", created_at: "2024-01-01" } },
  { id: 31, name: "Vught", slug: "vught", province_id: 6, seo_text: "", created_at: "2024-01-01", provinces: { id: 6, name: "Noord-Brabant", slug: "noord-brabant", seo_text: "", created_at: "2024-01-01" } },
  { id: 32, name: "Gilze", slug: "gilze", province_id: 6, seo_text: "", created_at: "2024-01-01", provinces: { id: 6, name: "Noord-Brabant", slug: "noord-brabant", seo_text: "", created_at: "2024-01-01" } },
  { id: 33, name: "Deurne", slug: "deurne", province_id: 6, seo_text: "", created_at: "2024-01-01", provinces: { id: 6, name: "Noord-Brabant", slug: "noord-brabant", seo_text: "", created_at: "2024-01-01" } },
  { id: 20, name: "Akersloot", slug: "akersloot", province_id: 2, seo_text: "", created_at: "2024-01-01", provinces: { id: 2, name: "Noord-Holland", slug: "noord-holland", seo_text: "", created_at: "2024-01-01" } },
  { id: 21, name: "Wieringermeer", slug: "wieringermeer", province_id: 2, seo_text: "", created_at: "2024-01-01", provinces: { id: 2, name: "Noord-Holland", slug: "noord-holland", seo_text: "", created_at: "2024-01-01" } },
  { id: 22, name: "Spaarnwoude", slug: "spaarnwoude", province_id: 2, seo_text: "", created_at: "2024-01-01", provinces: { id: 2, name: "Noord-Holland", slug: "noord-holland", seo_text: "", created_at: "2024-01-01" } },
  { id: 23, name: "Heiloo", slug: "heiloo", province_id: 2, seo_text: "", created_at: "2024-01-01", provinces: { id: 2, name: "Noord-Holland", slug: "noord-holland", seo_text: "", created_at: "2024-01-01" } },
  { id: 24, name: "Schiphol", slug: "schiphol", province_id: 2, seo_text: "", created_at: "2024-01-01", provinces: { id: 2, name: "Noord-Holland", slug: "noord-holland", seo_text: "", created_at: "2024-01-01" } },
  { id: 17, name: "Renesse", slug: "renesse", province_id: 11, seo_text: "", created_at: "2024-01-01", provinces: { id: 11, name: "Zeeland", slug: "zeeland", seo_text: "", created_at: "2024-01-01" } },
  { id: 18, name: "Middelburg", slug: "middelburg", province_id: 11, seo_text: "", created_at: "2024-01-01", provinces: { id: 11, name: "Zeeland", slug: "zeeland", seo_text: "", created_at: "2024-01-01" } },
  { id: 19, name: "Goes", slug: "goes", province_id: 11, seo_text: "", created_at: "2024-01-01", provinces: { id: 11, name: "Zeeland", slug: "zeeland", seo_text: "", created_at: "2024-01-01" } },
  { id: 25, name: "Groningen", slug: "groningen", province_id: 7, seo_text: "", created_at: "2024-01-01", provinces: { id: 7, name: "Groningen", slug: "groningen", seo_text: "", created_at: "2024-01-01" } },
  { id: 46, name: "Leeuwarden", slug: "leeuwarden", province_id: 12, seo_text: "", created_at: "2024-01-01", provinces: { id: 12, name: "Friesland", slug: "friesland", seo_text: "", created_at: "2024-01-01" } },
  { id: 47, name: "Sneek", slug: "sneek", province_id: 12, seo_text: "", created_at: "2024-01-01", provinces: { id: 12, name: "Friesland", slug: "friesland", seo_text: "", created_at: "2024-01-01" } },
  { id: 48, name: "Heerenveen", slug: "heerenveen", province_id: 12, seo_text: "", created_at: "2024-01-01", provinces: { id: 12, name: "Friesland", slug: "friesland", seo_text: "", created_at: "2024-01-01" } },
  { id: 49, name: "Drachten", slug: "drachten", province_id: 12, seo_text: "", created_at: "2024-01-01", provinces: { id: 12, name: "Friesland", slug: "friesland", seo_text: "", created_at: "2024-01-01" } },
  { id: 50, name: "Wolvega", slug: "wolvega", province_id: 12, seo_text: "", created_at: "2024-01-01", provinces: { id: 12, name: "Friesland", slug: "friesland", seo_text: "", created_at: "2024-01-01" } }
]

const mockHotels: Hotel[] = [
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
    image_url: "/images/Kasteel Bloemendal.jpg",
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
    image_url: "/images/Van der Valk Akersloot.jpg",
    rating: 4.6,
    popular: true,
    created_at: "2024-01-01"
  },
  {
    id: 27,
    name: "Olympic Hotel",
    slug: "olympic-hotel",
    description: "Stijlvol Olympic Hotel in Amsterdam met luxe wellness faciliteiten en privé jacuzzi's. Een oase van rust in het hart van de stad.",
    province_id: 2,
    city_id: 2,
    price_range: "Vanaf €199",
    facilities: ["Privé Jacuzzi", "Wellness", "Restaurant", "Bar", "Stad"],
    affiliate_link: "https://booking.com/olympic-hotel",
    image_url: "/images/Olympic Hotel.jpg",
    rating: 4.7,
    created_at: "2024-01-01"
  },
  {
    id: 28,
    name: "Inntel Hotels Amsterdam Centre",
    slug: "inntel-hotels-amsterdam-centre",
    description: "Modern hotel in Amsterdam centrum met unieke design kamers en jacuzzi faciliteiten. Perfect voor een stadsbezoek met wellness.",
    province_id: 2,
    city_id: 2,
    price_range: "Vanaf €219",
    facilities: ["Jacuzzi Kamers", "Design", "Restaurant", "Bar", "Centrum"],
    affiliate_link: "https://booking.com/inntel-hotels-amsterdam-centre",
    image_url: "/images/Inntel Hotels Amsterdam Centre.jpg",
    rating: 4.8,
    created_at: "2024-01-01"
  },
  {
    id: 30,
    name: "Hotel-Restaurant Nautisch Kwartier",
    slug: "hotel-restaurant-nautisch-kwartier",
    description: "Maritiem getint hotel met nautische charme en jacuzzi faciliteiten. Unieke sfeer in een prachtige Noord-Hollandse setting.",
    province_id: 2,
    city_id: 2,
    price_range: "Vanaf €189",
    facilities: ["Jacuzzi Kamers", "Nautisch Thema", "Restaurant", "Bar"],
    affiliate_link: "https://booking.com/hotel-restaurant-nautisch-kwartier",
    image_url: "/images/Hotel-Restaurant Nautisch Kwartier.jpg",
    rating: 4.5,
    created_at: "2024-01-01"
  },
  {
    id: 31,
    name: "Hotel-Restaurant De Cooghen",
    slug: "hotel-restaurant-de-cooghen",
    description: "Karakteristiek hotel met traditionele charme en moderne jacuzzi faciliteiten. Perfecte mix van historie en comfort.",
    province_id: 2,
    city_id: 2,
    price_range: "Vanaf €169",
    facilities: ["Jacuzzi Kamers", "Historisch", "Restaurant", "Charme"],
    affiliate_link: "https://booking.com/hotel-restaurant-de-cooghen",
    image_url: "/images/Hotel-Restaurant De Cooghen.jpg",
    rating: 4.4,
    created_at: "2024-01-01"
  },
  {
    id: 33,
    name: "Fletcher Hotel-Restaurant Jan Van Scorel",
    slug: "fletcher-hotel-restaurant-jan-van-scorel",
    description: "Uniek hotel met uitzicht op de Schoorlse Duinen en luxe jacuzzi suites. Perfecte combinatie van natuur en wellness.",
    province_id: 2,
    city_id: 2,
    price_range: "Vanaf €199",
    facilities: ["Jacuzzi Suites", "Duinzicht", "Wellness", "Restaurant", "Natuur"],
    affiliate_link: "https://booking.com/fletcher-hotel-restaurant-jan-van-scorel",
    image_url: "/images/Fletcher Hotel-Restaurant Jan Van Scorel.jpg",
    rating: 4.7,
    created_at: "2024-01-01"
  },
  // Hotels for new Noord-Holland cities
  {
    id: 25,
    name: "Van der Valk Akersloot",
    slug: "van-der-valk-akersloot",
    description: "Rustig gelegen hotel in Akersloot met moderne wellness faciliteiten en jacuzzi kamers. Perfect voor een ontspannen verblijf nabij Amsterdam.",
    province_id: 2,
    city_id: 20,
    price_range: "Vanaf €169",
    facilities: ["Jacuzzi Kamers", "Wellness", "Restaurant", "Bar", "Fitness"],
    affiliate_link: "https://booking.com/van-der-valk-akersloot",
    image_url: "/images/Van der Valk Akersloot.jpg",
    rating: 4.5,
    created_at: "2024-01-01"
  },
  {
    id: 26,
    name: "Van der Valk Wieringermeer",
    slug: "van-der-valk-wieringermeer",
    description: "Prachtig hotel in de Wieringermeer met luxe suites en jacuzzi faciliteiten. Omgeven door de typisch Nederlandse poldernatuur.",
    province_id: 2,
    city_id: 21,
    price_range: "Vanaf €185",
    facilities: ["Jacuzzi Suites", "Wellness", "Restaurant", "Bar", "Natuur"],
    affiliate_link: "https://booking.com/van-der-valk-wieringermeer",
    image_url: "/images/Van der Valk Wieringermeer.jpg",
    rating: 4.6,
    created_at: "2024-01-01"
  },
  {
    id: 29,
    name: "Hotel-Restaurant Spaarnwoude",
    slug: "hotel-restaurant-spaarnwoude",
    description: "Boetiekhotel in Spaarnwoude met persoonlijke service en stijlvolle jacuzzi kamers. Ideaal voor een intiem romantisch verblijf.",
    province_id: 2,
    city_id: 22,
    price_range: "Vanaf €179",
    facilities: ["Jacuzzi Kamers", "Restaurant", "Persoonlijke Service", "Romantisch"],
    affiliate_link: "https://booking.com/hotel-restaurant-spaarnwoude",
    image_url: "/images/Van der Valk Wieringermeer.jpg",
    rating: 4.6,
    created_at: "2024-01-01"
  },
  {
    id: 32,
    name: "Hotel-Restaurant Heiloo",
    slug: "hotel-restaurant-heiloo",
    description: "Gastvrij hotel in Heiloo met moderne jacuzzi faciliteiten en uitstekende keuken. Perfect voor een relaxt verblijf in Noord-Holland.",
    province_id: 2,
    city_id: 23,
    price_range: "Vanaf €159",
    facilities: ["Jacuzzi Kamers", "Restaurant", "Keuken", "Gastvrijheid"],
    affiliate_link: "https://booking.com/hotel-restaurant-heiloo",
    image_url: "/images/Van der Valk Wieringermeer.jpg",
    rating: 4.5,
    created_at: "2024-01-01"
  },
  {
    id: 34,
    name: "Van der Valk Schiphol",
    slug: "van-der-valk-schiphol",
    description: "Stijlvol airport hotel bij Schiphol met luxe jacuzzi kamers en wellness faciliteiten. Perfect voor zakelijke of leisure trips.",
    province_id: 2,
    city_id: 24,
    price_range: "Vanaf €189",
    facilities: ["Jacuzzi Kamers", "Airport Hotel", "Wellness", "Restaurant", "Business"],
    affiliate_link: "https://booking.com/van-der-valk-schiphol",
    image_url: "/images/Van der Valk - Goes.jpg",
    rating: 4.6,
    created_at: "2024-01-01"
  },
  {
    id: 17,
    name: "Landgoed Hotel Renesse",
    slug: "landgoed-hotel-renesse",
    description: "Luxe landgoedhotel in Renesse met uitgebreide spa faciliteiten en jacuzzi. Perfect voor een ontspannen strandvakantie met wellness.",
    province_id: 11,
    city_id: 17,
    price_range: "Vanaf €189",
    facilities: ["Privé Jacuzzi", "Spa", "Restaurant", "Fitness", "Strand"],
    affiliate_link: "https://booking.com/landgoed-hotel-renesse",
    image_url: "/images/Langoed hotel Renesse.jpg",
    rating: 4.6,
    created_at: "2024-01-01"
  },
  {
    id: 18,
    name: "Zuiderduin Beachhotel",
    slug: "zuiderduin-beachhotel",
    description: "Iconisch beachhotel met spectaculaire zeezicht en luxe wellness suites met jacuzzi. Direct aan het strand van Westkapelle.",
    province_id: 11,
    city_id: 17,
    price_range: "Vanaf €215",
    facilities: ["Jacuzzi Suites", "Zeezicht", "Strand", "Spa", "Wellness"],
    affiliate_link: "https://booking.com/zuiderduin-beachhotel",
    image_url: "/images/Van der Valk Wieringermeer.jpg",
    rating: 4.7,
    created_at: "2024-01-01"
  },
  {
    id: 19,
    name: "Van der Valk Middelburg",
    slug: "van-der-valk-middelburg",
    description: "Modern hotel in het hart van historisch Middelburg met wellness faciliteiten en jacuzzi kamers. Ideaal voor cultuur en ontspanning.",
    province_id: 11,
    city_id: 18,
    price_range: "Vanaf €159",
    facilities: ["Jacuzzi Kamers", "Wellness", "Restaurant", "Bar", "Fitness"],
    affiliate_link: "https://booking.com/van-der-valk-middelburg",
    image_url: "/images/Van der Valk - Goes.jpg",
    rating: 4.5,
    created_at: "2024-01-01"
  },
  {
    id: 20,
    name: "Van der Valk Goes",
    slug: "van-der-valk-goes",
    description: "Comfortabel hotel in het centrum van Goes met moderne jacuzzi faciliteiten. Perfect uitvalspunt voor het ontdekken van Zeeland.",
    province_id: 11,
    city_id: 19,
    price_range: "Vanaf €149",
    facilities: ["Jacuzzi Kamers", "Restaurant", "Bar", "Fitness", "Gratis WiFi"],
    affiliate_link: "https://booking.com/van-der-valk-goes",
    image_url: "/images/Van der Valk - Goes.jpg",
    rating: 4.4,
    created_at: "2024-01-01"
  },
  // Noord-Brabant hotels
  {
    id: 35,
    name: "Kloosterhotel Willibrordhaeghe",
    slug: "kloosterhotel-willibrordhaeghe",
    description: "Uniek kloosterhotel met historische charme en moderne wellness faciliteiten. Rust en sereniteit in een authentieke setting met luxe jacuzzi kamers.",
    province_id: 6,
    city_id: 33,
    price_range: "Vanaf €165",
    facilities: ["Historisch klooster", "Privé Jacuzzi", "Wellness", "Restaurant", "Kapel", "Rustige ligging"],
    affiliate_link: "https://booking.com/kloosterhotel-willibrordhaeghe",
    image_url: "/images/Kloosterhotel Willibrordhaeghe.jpg",
    rating: 4.6,
    created_at: "2024-01-01"
  },
  {
    id: 36,
    name: "Wellness-Hotel Trivium",
    slug: "wellness-hotel-trivium",
    description: "Geavanceerd wellness hotel met uitgebreide spa faciliteiten en kamers met moderne jacuzzi's. De perfecte combinatie van luxe en welzijn.",
    province_id: 6,
    city_id: 30,
    price_range: "Vanaf €195",
    facilities: ["Uitgebreide spa", "Privé Jacuzzi", "Zwembad", "Sauna", "Massages", "Fitness"],
    affiliate_link: "https://booking.com/wellness-hotel-trivium",
    image_url: "/images/Wellness-Hotel Trivium.jpg",
    rating: 4.7,
    created_at: "2024-01-01"
  },
  {
    id: 37,
    name: "Van der Valk Gilze - Tilburg",
    slug: "van-der-valk-gilze-tilburg",
    description: "Modern Van der Valk hotel bij Tilburg met comfortabele jacuzzi suites en uitstekende faciliteiten. Ideaal voor zowel zakenreizigers als vakantiegangers.",
    province_id: 6,
    city_id: 32,
    price_range: "Vanaf €175",
    facilities: ["Van der Valk kwaliteit", "Jacuzzi suites", "Restaurant", "Fitness", "Vergaderzalen", "Terras"],
    affiliate_link: "https://booking.com/vandervalk-gilze-tilburg",
    image_url: "/images/Van der Valk Akersloot.jpg",
    rating: 4.5,
    created_at: "2024-01-01"
  },
  {
    id: 38,
    name: "Van der Valk Vught",
    slug: "van-der-valk-vught",
    description: "Elegant Van der Valk hotel in het groene Vught met moderne wellness kamers uitgerust met bubbelbaden. Rustige ligging nabij natuurgebieden.",
    province_id: 6,
    city_id: 31,
    price_range: "Vanaf €185",
    facilities: ["Natuurlijke omgeving", "Jacuzzi", "Wellness", "Restaurant", "Terras", "Business center"],
    affiliate_link: "https://booking.com/vandervalk-vught",
    image_url: "/images/Van der Valk Vught.jpg",
    rating: 4.6,
    created_at: "2024-01-01"
  },
  {
    id: 39,
    name: "Van der Valk Tilburg",
    slug: "van-der-valk-tilburg",
    description: "Centraal gelegen Van der Valk hotel in Tilburg met moderne kamers met jacuzzi en uitstekende voorzieningen. Perfect voor stadsbezoek en wellness.",
    province_id: 6,
    city_id: 30,
    price_range: "Vanaf €169",
    facilities: ["Stadscentrum", "Jacuzzi kamers", "Restaurant", "Bar", "Fitness", "Parking"],
    affiliate_link: "https://booking.com/vandervalk-tilburg",
    image_url: "/images/Van der Valk Tilburg.jpg",
    rating: 4.4,
    created_at: "2024-01-01"
  },
  {
    id: 40,
    name: "Eindhoven Design Hotel",
    slug: "eindhoven-design-hotel",
    description: "Innovatief design hotel met futuristische wellness suites en state-of-the-art jacuzzi faciliteiten.",
    province_id: 6,
    city_id: 6,
    price_range: "Vanaf €275",
    facilities: ["Wellness Suite", "Design Jacuzzi", "Spa", "Outdoor Terras"],
    affiliate_link: "https://booking.com/eindhoven-design",
    image_url: "/images/Van der Valk Tilburg.jpg",
    rating: 4.7,
    created_at: "2024-01-01"
  },
  // Utrecht hotels
  {
    id: 41,
    name: "Van der Valk Hilversum - De Witte Bergen",
    slug: "van-der-valk-hilversum-de-witte-bergen",
    description: "Luxe Van der Valk hotel in de groene omgeving van De Witte Bergen met moderne wellness faciliteiten en jacuzzi kamers. Perfect voor natuurliefhebbers.",
    province_id: 5,
    city_id: 34,
    price_range: "Vanaf €185",
    facilities: ["Natuurlijke omgeving", "Jacuzzi kamers", "Wellness", "Restaurant", "Golf", "Wandelroutes"],
    affiliate_link: "https://booking.com/vandervalk-hilversum-de-witte-bergen",
    image_url: "/images/Van der Valk Hilversum - De Witte Bergen.jpg",
    rating: 4.6,
    created_at: "2024-01-01"
  },
  {
    id: 42,
    name: "Van der Valk Vianen",
    slug: "van-der-valk-vianen",
    description: "Modern Van der Valk hotel in Vianen met comfortabele jacuzzi suites en uitstekende faciliteiten. Strategisch gelegen tussen Amsterdam en Utrecht.",
    province_id: 5,
    city_id: 35,
    price_range: "Vanaf €175",
    facilities: ["Jacuzzi suites", "Restaurant", "Bar", "Fitness", "Vergaderzalen", "Parking"],
    affiliate_link: "https://booking.com/vandervalk-vianen",
    image_url: "/images/Van der Valk Vianen.jpg",
    rating: 4.5,
    created_at: "2024-01-01"
  },
  {
    id: 43,
    name: "Van der Valk Houten",
    slug: "van-der-valk-houten",
    description: "Stijlvol Van der Valk hotel in het groene Houten met moderne jacuzzi faciliteiten en wellness. Ideaal voor een ontspannen verblijf nabij Utrecht.",
    province_id: 5,
    city_id: 36,
    price_range: "Vanaf €179",
    facilities: ["Jacuzzi kamers", "Wellness", "Restaurant", "Terras", "Natuur", "Fietsroutes"],
    affiliate_link: "https://booking.com/vandervalk-houten",
    image_url: "/images/Van der Valk Houten.jpg",
    rating: 4.6,
    created_at: "2024-01-01"
  },
  {
    id: 44,
    name: "Van der Valk Breukelen",
    slug: "van-der-valk-breukelen",
    description: "Charmant Van der Valk hotel in historisch Breukelen met luxe jacuzzi kamers en prachtig uitzicht op de Vecht. Romantische setting aan het water.",
    province_id: 5,
    city_id: 37,
    price_range: "Vanaf €189",
    facilities: ["Jacuzzi kamers", "Uitzicht op Vecht", "Restaurant", "Terras", "Watersport", "Historisch"],
    affiliate_link: "https://booking.com/vandervalk-breukelen",
    image_url: "/images/Van der Valk Breukelen.jpg",
    rating: 4.7,
    created_at: "2024-01-01"
  },
  {
    id: 45,
    name: "Van der Valk De Bilt - Utrecht",
    slug: "van-der-valk-de-bilt-utrecht",
    description: "Elegant Van der Valk hotel in De Bilt met moderne wellness kamers en jacuzzi faciliteiten. Perfecte uitvalsbasis voor Utrecht en omgeving.",
    province_id: 5,
    city_id: 38,
    price_range: "Vanaf €169",
    facilities: ["Jacuzzi kamers", "Wellness", "Restaurant", "Bar", "Utrecht nabij", "Business center"],
    affiliate_link: "https://booking.com/vandervalk-de-bilt-utrecht",
    image_url: "/images/Van der Valk De Bilt - Utrecht.jpg",
    rating: 4.5,
    created_at: "2024-01-01"
  },
  {
    id: 46,
    name: "Van der Valk Amersfoort",
    slug: "van-der-valk-amersfoort",
    description: "Modern Van der Valk hotel in Amersfoort met luxe jacuzzi suites en uitgebreide wellness faciliteiten. Ideaal voor zowel zakelijk als leisure verblijf.",
    province_id: 5,
    city_id: 39,
    price_range: "Vanaf €185",
    facilities: ["Jacuzzi suites", "Wellness", "Restaurant", "Bar", "Fitness", "Zwembad"],
    affiliate_link: "https://booking.com/vandervalk-amersfoort",
    image_url: "/images/Van der Valk Amersfoort.jpeg",
    rating: 4.6,
    created_at: "2024-01-01"
  },
  {
    id: 47,
    name: "Mitland Hotel Utrecht",
    slug: "mitland-hotel-utrecht",
    description: "Uniek hotel gelegen in het groen van Utrecht met moderne jacuzzi faciliteiten en spa. Perfecte combinatie van natuur en stadsleven.",
    province_id: 5,
    city_id: 5,
    price_range: "Vanaf €195",
    facilities: ["Jacuzzi kamers", "Spa", "Natuur", "Restaurant", "Wellness", "Rustige ligging"],
    affiliate_link: "https://booking.com/mitland-hotel-utrecht",
    image_url: "/images/Mitland Hotel Utrecht.jpg",
    rating: 4.7,
    created_at: "2024-01-01"
  },
  {
    id: 48,
    name: "Inntel Hotels Utrecht Centre",
    slug: "inntel-hotels-utrecht-centre",
    description: "Centraal gelegen design hotel in Utrecht centrum met stijlvolle jacuzzi kamers en moderne faciliteiten. Perfect voor een citytrip met wellness.",
    province_id: 5,
    city_id: 5,
    price_range: "Vanaf €205",
    facilities: ["Jacuzzi kamers", "Centrum locatie", "Design", "Restaurant", "Bar", "Moderne stijl"],
    affiliate_link: "https://booking.com/inntel-hotels-utrecht-centre",
    image_url: "/images/Inntel Hotels Utrecht Centre.jpg",
    rating: 4.6,
    created_at: "2024-01-01"
  },
  {
    id: 49,
    name: "Hotel de Tabaksplant",
    slug: "hotel-de-tabaksplant",
    description: "Karakteristiek boetiekhotel met unieke historie en moderne jacuzzi faciliteiten. Bijzondere sfeer in een authentieke setting.",
    province_id: 5,
    city_id: 39,
    price_range: "Vanaf €155",
    facilities: ["Jacuzzi kamers", "Historisch karakter", "Boetiek", "Restaurant", "Unieke sfeer", "Authentiek"],
    affiliate_link: "https://booking.com/hotel-de-tabaksplant",
    image_url: "/images/Hotel de Tabaksplant .jpg",
    rating: 4.4,
    created_at: "2024-01-01"
  },
  {
    id: 50,
    name: "Hotel-Restaurant Amersfoort",
    slug: "hotel-restaurant-amersfoort",
    description: "Gastvrij hotel-restaurant in Amersfoort met persoonlijke service en comfortabele jacuzzi kamers. Uitstekende keuken en romantische ambiance.",
    province_id: 5,
    city_id: 39,
    price_range: "Vanaf €149",
    facilities: ["Jacuzzi kamers", "Restaurant", "Persoonlijke service", "Romantisch", "Gastronomie", "Gezellig"],
    affiliate_link: "https://booking.com/hotel-restaurant-amersfoort",
    image_url: "/images/Hotel-Restaurant Amersfoort.jpg",
    rating: 4.5,
    created_at: "2024-01-01"
  },
  {
    id: 51,
    name: "Hotel Resort Landgoed Westerlee",
    slug: "hotel-resort-landgoed-westerlee",
    description: "Luxe resort hotel gelegen op het prachtige Landgoed Westerlee in Groningen met uitgebreide wellness faciliteiten en privé jacuzzi's. Een oase van rust in de natuur.",
    province_id: 7,
    city_id: 25,
    price_range: "Vanaf €195",
    facilities: ["Privé Jacuzzi", "Wellness resort", "Landgoed", "Spa", "Restaurant", "Natuur"],
    affiliate_link: "https://booking.com/hotel-resort-landgoed-westerlee",
    image_url: "/images/Hotel Resort Landgoed Westerlee.jpeg",
    rating: 4.7,
    created_at: "2024-01-01"
  },
  // New Zuid-Holland hotels
  {
    id: 106,
    name: "Hotel-Restaurant Carlton",
    slug: "hotel-restaurant-carlton",
    description: "Elegant hotel in het hart van Den Haag met verfijnde jacuzzi kamers en uitstekend restaurant. Perfect gelegen voor zowel zakelijke als romantische verblijven nabij het regeringscentrum.",
    province_id: 4,
    city_id: 15,
    price_range: "Vanaf €169",
    facilities: ["Privé jacuzzi", "Fine dining restaurant", "Centrum locatie", "Business center", "Gratis WiFi", "Room service"],
    affiliate_link: "https://booking.com/hotel-restaurant-carlton",
    image_url: "/images/Hotel-Restaurant Carlton.jpg",
    rating: 4.4,
    created_at: "2024-01-01"
  },
  {
    id: 107,
    name: "Stadshotel Den Haag",
    slug: "stadshotel-den-haag",
    description: "Modern stadshotel in Den Haag met comfortabele wellness kamers en jacuzzi faciliteiten. Uitstekende uitvalsbasis voor het verkennen van de hofstad.",
    province_id: 4,
    city_id: 15,
    price_range: "Vanaf €139",
    facilities: ["Wellness jacuzzi", "Fitness center", "Restaurant", "Centrum"],
    affiliate_link: "https://booking.com/stadshotel-den-haag",
    image_url: "/images/Stadshotel Den Haag.jpg",
    rating: 4.2,
    created_at: "2024-01-01"
  },
  {
    id: 108,
    name: "Boutique Hotel Corona Den Haag",
    slug: "boutique-hotel-corona-den-haag",
    description: "Charmant boutique hotel in historisch pand met stijlvolle jacuzzi kamers en persoonlijke service. Een unieke ervaring in het hart van Den Haag.",
    province_id: 4,
    city_id: 15,
    price_range: "Vanaf €159",
    facilities: ["Boutique jacuzzi", "Persoonlijke service", "Historic charm", "Restaurant", "Centrum"],
    affiliate_link: "https://booking.com/boutique-hotel-corona",
    image_url: "/images/Boutique Hotel Corona Den Haag.jpg",
    rating: 4.3,
    created_at: "2024-01-01"
  },
  {
    id: 109,
    name: "Mainport Design Hotel Rotterdam",
    slug: "mainport-design-hotel-rotterdam",
    description: "Luxe design hotel aan de Rotterdamse Maas met spektakulaire jacuzzi suites en modern spa centrum. Perfecte combinatie van design en wellness.",
    province_id: 4,
    city_id: 4,
    price_range: "Vanaf €199",
    facilities: ["Design jacuzzi", "Spa centrum", "Fine dining", "Skybar", "Modern design", "Havenzicht"],
    affiliate_link: "https://booking.com/mainport-design-hotel",
    image_url: "/images/Mainport Design Hotel Rotterdam .jpg",
    rating: 4.6,
    created_at: "2024-01-01"
  },
  {
    id: 110,
    name: "Van der Valk Leiden",
    slug: "van-der-valk-leiden",
    description: "Modern Van der Valk hotel in het hart van Leiden met luxe wellness faciliteiten en jacuzzi kamers. Perfect gelegen nabij de historische binnenstad.",
    province_id: 4,
    city_id: 41,
    price_range: "Vanaf €159",
    facilities: ["Wellness jacuzzi", "Historische locatie", "Restaurant", "Fitness", "Gratis WiFi"],
    affiliate_link: "https://booking.com/van-der-valk-leiden",
    image_url: "/images/Van der Valk Leiden.jpg",
    rating: 4.3,
    created_at: "2024-01-01"
  },
  {
    id: 111,
    name: "Van der Valk Den Haag - Wassenaar",
    slug: "van-der-valk-den-haag-wassenaar",
    description: "Luxe Van der Valk hotel in Wassenaar met premium jacuzzi suites en spa faciliteiten. Gelegen nabij de kust met uitstekende wellness voorzieningen.",
    province_id: 4,
    city_id: 42,
    price_range: "Vanaf €179",
    facilities: ["Premium jacuzzi", "Spa faciliteiten", "Kustlocatie", "Restaurant", "Wellness"],
    affiliate_link: "https://booking.com/van-der-valk-wassenaar",
    image_url: "/images/Van der Valk Den Haag - Wassenaar.jpg",
    rating: 4.4,
    created_at: "2024-01-01"
  },
  {
    id: 112,
    name: "Van der Valk Den Haag - Nootdorp",
    slug: "van-der-valk-den-haag-nootdorp",
    description: "Modern Van der Valk hotel in Nootdorp met eigentijdse jacuzzi kamers en business faciliteiten. Uitstekende locatie tussen Den Haag en Delft.",
    province_id: 4,
    city_id: 43,
    price_range: "Vanaf €149",
    facilities: ["Modern design", "Jacuzzi kamers", "Business center", "Restaurant", "Gratis WiFi"],
    affiliate_link: "https://booking.com/van-der-valk-nootdorp",
    image_url: "/images/Van der Valk Den Haag - Nootdorp.jpg",
    rating: 4.2,
    created_at: "2024-01-01"
  },
  {
    id: 113,
    name: "Van der Valk Ridderkerk",
    slug: "van-der-valk-ridderkerk",
    description: "Centraal gelegen Van der Valk hotel in Ridderkerk met jacuzzi kamers en uitstekende faciliteiten. Perfect voor zowel business als leisure.",
    province_id: 4,
    city_id: 44,
    price_range: "Vanaf €139",
    facilities: ["Jacuzzi kamers", "Centraal gelegen", "Restaurant", "Business"],
    affiliate_link: "https://booking.com/van-der-valk-ridderkerk",
    image_url: "/images/Van der Valk Ridderkerk.jpg",
    rating: 4.1,
    created_at: "2024-01-01"
  },
  {
    id: 114,
    name: "Van der Valk Sassenheim-Leiden",
    slug: "van-der-valk-sassenheim-leiden",
    description: "Comfortabel Van der Valk hotel nabij Leiden met moderne wellness faciliteiten en jacuzzi kamers. Ideaal voor zowel zakelijke als leisure gasten.",
    province_id: 4,
    city_id: 40,
    price_range: "Vanaf €149",
    facilities: ["Wellness jacuzzi", "Fitness center", "Restaurant", "Bowling"],
    affiliate_link: "https://booking.com/van-der-valk-sassenheim",
    image_url: "/images/Van der Valk Hotel Sassenheim - Leiden 2020.jpg",
    rating: 4.1,
    created_at: "2024-01-01"
  },
  {
    id: 115,
    name: "Van der Valk Dordrecht",
    slug: "van-der-valk-dordrecht",
    description: "Luxe Van der Valk hotel in historisch Dordrecht met premium wellness centrum en spa jacuzzi suites. Perfecte combinatie van historie en moderne luxe.",
    province_id: 4,
    city_id: 45,
    price_range: "Vanaf €169",
    facilities: ["Spa jacuzzi", "Wellness centrum", "Historische stad", "Fine dining", "Luxury"],
    affiliate_link: "https://booking.com/van-der-valk-dordrecht",
    image_url: "/images/Van der Valk Dordrecht.jpg",
    rating: 4.5,
    popular: true,
    created_at: "2024-01-01"
  },
  {
    id: 118,
    name: "Van der Valk Wolvega - Heerenveen",
    slug: "van-der-valk-wolvega-heerenveen",
    description: "Comfortabel Van der Valk hotel tussen Wolvega en Heerenveen met moderne jacuzzi kamers en rustige ligging in het Friese landschap.",
    province_id: 12,
    city_id: 50,
    price_range: "Vanaf €149",
    facilities: ["Jacuzzi kamers", "Restaurant", "Wellness faciliteiten", "Gratis WiFi", "Parkeren", "Bar"],
    affiliate_link: "https://booking.com/van-der-valk-wolvega-heerenveen",
    image_url: "/images/van-der-valk-hotel-wolvega.jpg",
    rating: 4.3,
    created_at: "2024-01-01"
  },
  {
    id: 119,
    name: "Van der Valk Drachten",
    slug: "van-der-valk-drachten",
    description: "Modern Van der Valk hotel in Drachten met stijlvolle jacuzzi suites en uitstekende wellness voorzieningen.",
    province_id: 12,
    city_id: 49,
    price_range: "Vanaf €159",
    facilities: ["Jacuzzi suites", "Wellness centrum", "Restaurant", "Fitness", "Gratis WiFi", "Vergaderzalen"],
    affiliate_link: "https://booking.com/van-der-valk-drachten",
    image_url: "/images/Van der Valk Drachten.jpg",
    rating: 4.4,
    created_at: "2024-01-01"
  },
  {
    id: 120,
    name: "Hotel-Paleis Stadhouderlijk Hof",
    slug: "hotel-paleis-stadhouderlijk-hof",
    description: "Historisch paleis hotel in het hart van Leeuwarden met luxe jacuzzi kamers en koninklijke ambiance.",
    province_id: 12,
    city_id: 46,
    price_range: "Vanaf €189",
    facilities: ["Luxe jacuzzi kamers", "Historisch paleis", "Fine dining", "Spa behandelingen", "Gratis WiFi", "Cultureel centrum"],
    affiliate_link: "https://booking.com/hotel-paleis-stadhouderlijk-hof",
    image_url: "/images/Hotel-Paleis Stadhouderlijk Hof.jpg",
    rating: 4.6,
    popular: true,
    created_at: "2024-01-01"
  },
  {
    id: 121,
    name: "Van der Valk Sneek",
    slug: "van-der-valk-sneek",
    description: "Elegant Van der Valk hotel aan de Friese meren met panoramische jacuzzi suites en watersport faciliteiten.",
    province_id: 12,
    city_id: 47,
    price_range: "Vanaf €169",
    facilities: ["Panoramische jacuzzi suites", "Watersport faciliteiten", "Restaurant", "Wellness", "Gratis WiFi", "Fietsverhuur"],
    affiliate_link: "https://booking.com/van-der-valk-sneek",
    image_url: "/images/Van der Valk Sneek.jpg",
    rating: 4.5,
    created_at: "2024-01-01"
  },
  {
    id: 122,
    name: "Van der Valk Leeuwarden",
    slug: "van-der-valk-leeuwarden",
    description: "Stadshotel Van der Valk in culturele hoofdstad Leeuwarden met moderne jacuzzi kamers en centrale ligging.",
    province_id: 12,
    city_id: 46,
    price_range: "Vanaf €179",
    facilities: ["Moderne jacuzzi kamers", "Stadscentrum", "Restaurant", "Wellness centrum", "Gratis WiFi", "Culturele attracties"],
    affiliate_link: "https://booking.com/van-der-valk-leeuwarden",
    image_url: "/images/Van der Valk Leeuwarden.jpg",
    rating: 4.4,
    created_at: "2024-01-01"
  }
]

// Generate metadata for SEO
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const awaited = await params
  const city = mockCities.find(c => c.slug === awaited.slug)

  if (!city) {
    return {
      title: 'Stad niet gevonden',
      description: 'De opgevraagde stad kon niet worden gevonden.'
    }
  }

  const cityName = city.name
  const provinceName = city.provinces?.name || ''

  return {
    title: `Hotels met Jacuzzi in ${cityName} | Romantische Hotels ${provinceName}`,
    description: `Ontdek de beste hotels met jacuzzi in ${cityName}, ${provinceName}. Van luxe wellness hotels tot romantische accommodaties met privé jacuzzi - vind jouw perfecte verblijf.`,
    keywords: `hotels met jacuzzi ${cityName}, wellness hotels ${cityName}, romantische hotels ${cityName}, spa hotels ${provinceName}, jacuzzi op kamer ${cityName}`,
    openGraph: {
      title: `Hotels met Jacuzzi in ${cityName} | Romantische Hotels`,
      description: `Ontdek de beste hotels met jacuzzi in ${cityName}, ${provinceName}. Van luxe wellness hotels tot romantische accommodaties.`,
      type: 'website',
      locale: 'nl_NL',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Hotels met Jacuzzi in ${cityName}`,
      description: `Ontdek de beste hotels met jacuzzi in ${cityName}, ${provinceName}.`,
    },
  }
}

// Generate static params for all cities
export async function generateStaticParams() {
  return mockCities.map((city) => ({
    slug: city.slug,
  }))
}

// Generate SEO content based on city
function generateCityContent(city: City & { provinces?: Province }) {
  const cityName = city.name
  const provinceName = city.provinces?.name || ''
  
  // Base content templates that can be customized per city
  const contentTemplates = {
    amsterdam: {
      intro: `Amsterdam, de bruisende hoofdstad van Nederland, biedt een unieke mix van historische charme en moderne luxe. Voor een romantisch verblijf met jacuzzi op de kamer is deze stad een droombestemming. De grachtenpanden, wereldberoemde musea en levendige buurten vormen het perfecte decor voor een ontspannende citytrip. Hotels met jacuzzi in Amsterdam combineren de authentieke sfeer van de grachtengordel met ultramoderne wellness faciliteiten. Of je nu kiest voor een suite met uitzicht op de Prinsengracht of een moderne loft in de Jordaan, de jacuzzi ervaring in Amsterdam is onvergetelijk. De stad biedt talloze mogelijkheden voor romantische wandelingen langs de grachten, culinaire ontdekkingen in trendy restaurants en culturele uitstapjes naar het Rijksmuseum of Van Gogh Museum.`,
      highlights: [
        "Grachtenpanden met jacuzzi en grachtenzicht",
        "Moderne design hotels in trendy buurten", 
        "Uitgebreide wellness faciliteiten in het centrum",
        "Romantische wandelingen langs de Prinsengracht",
        "Culinaire hoogstandjes in de Jordaan"
      ],
      romanticSpots: [
        { name: "Ciel Bleu Restaurant", description: "Michelin-ster restaurant met panoramisch uitzicht over de stad" },
        { name: "Grachtenrondvaart bij zonsondergang", description: "Romantische boottocht door de Amsterdamse grachten" },
        { name: "Vondelpark", description: "Wandelen hand in hand door Amsterdam's mooiste park" },
        { name: "Restaurant De Kas", description: "Dineren tussen de planten in een authentieke broeikas" }
      ]
    },
    maastricht: {
      intro: `Maastricht, de meest zuidelijke stad van Nederland, ademt een unieke Bourgondische sfeer die perfect past bij een luxe verblijf met jacuzzi. Deze historische stad, gelegen aan de Maas, combineert middeleeuwse charme met moderne comfort. Hotels met jacuzzi in Maastricht bieden een intieme en romantische setting, vaak gehuisvest in gerestaureerde historische panden of moderne wellness resorts. De stad staat bekend om zijn gastronomische traditie, prachtige architectuur en ontspannen levensstijl. Een jacuzzi op de kamer in Maastricht betekent genieten van de Bourgondische levensstijl terwijl je uitkijkt over de oude binnenstad of de groene heuvels van Zuid-Limburg.`,
      highlights: [
        "Historische panden met moderne jacuzzi faciliteiten",
        "Bourgondische sfeer en gastronomische traditie",
        "Wellness resorts in de groene omgeving",
        "Romantische wandelingen door de oude binnenstad",
        "Culinaire hoogstandjes in Michelin restaurants"
      ],
      romanticSpots: [
        { name: "Château Neercanne", description: "Kasteel restaurant met terras en grotten" },
        { name: "Basiliek van Sint Servaas", description: "Historische kerk in het hart van de stad" },
        { name: "Vrijthof", description: "Levendig plein omringd door cafés en restaurants" },
        { name: "Jekerkwartier", description: "Pittoreske wijk met kunst en cultuur" }
      ]
    }
  }

  // Default template for other cities
  const defaultTemplate = {
    intro: `${cityName}, gelegen in de prachtige provincie ${provinceName}, biedt een unieke mix van historische charme en moderne luxe. Voor een romantisch verblijf met jacuzzi op de kamer is deze stad een uitstekende keuze. Hotels met jacuzzi in ${cityName} combineren de authentieke sfeer van de regio met ultramoderne wellness faciliteiten. Of je nu kiest voor een suite in het centrum of een boutique hotel in een rustige wijk, de jacuzzi ervaring in ${cityName} is onvergetelijk. De stad biedt talloze mogelijkheden voor romantische wandelingen, culinaire ontdekkingen en culturele uitstapjes. Na een dag vol activiteiten is er niets heerlijker dan terug te keren naar je hotelkamer met privé jacuzzi.`,
    highlights: [
      `Luxe accommodaties met jacuzzi in het centrum van ${cityName}`,
      `Romantische sfeer en historische charme`,
      `Uitgebreide wellness faciliteiten`,
      `Culinaire hoogstandjes en lokale specialiteiten`,
      `Perfecte uitvalsbasis voor ontdekkingen`
    ],
    romanticSpots: [
      { name: "Historisch centrum", description: `Wandelen door het charmante centrum van ${cityName}` },
      { name: "Lokale restaurants", description: "Proeven van regionale specialiteiten" },
      { name: "Parken en natuur", description: "Ontspannen in groene omgevingen" },
      { name: "Cultuur en musea", description: "Ontdekken van lokale geschiedenis en kunst" }
    ]
  }

  return contentTemplates[city.slug as keyof typeof contentTemplates] || defaultTemplate
}

// City-specific hero images
const getCityHeroImage = (citySlug: string) => {
  const images = {
    'groningen': '/images/Groningen-Hero.jpg', // Local Groningen city hero image
    'amsterdam': '/images/Amsterdam - Hero.jpg', // Local Amsterdam city hero image
    'leeuwarden': '/images/Leeuwarden - Hero.jpg', // Local Leeuwarden city hero image
  }
  return images[citySlug as keyof typeof images] || null
}

export default async function CityPage({ params }: CityPageProps) {
  const awaited = await params
  
  // Find city in mock data
  const city = mockCities.find(c => c.slug === awaited.slug)

  if (!city) {
    notFound()
  }

  // Find hotels for this city
  const hotels = mockHotels.filter(h => h.city_id === city.id)

  const cityContent = generateCityContent(city)
  const cityName = city.name
  const provinceName = city.provinces?.name || ''
  const heroImage = getCityHeroImage(city.slug)

  return (
    <div className="min-h-screen bg-light-gray">
      {/* SVG Pattern Background */}
      <WavePattern />

      {/* Hero Section */}
      <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm">
                  <li><Link href="/" className="text-brand-navy-200 hover:text-pure-white">Home</Link></li>
                  <li className="text-brand-navy-300">/</li>
                  <li><Link href={`/provincie/${city.provinces?.name?.toLowerCase().replace(' ', '-')}`} className="text-brand-navy-200 hover:text-pure-white">{provinceName}</Link></li>
                  <li className="text-brand-navy-300">/</li>
                  <li className="text-pure-white font-semibold">{cityName}</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Hotels met jacuzzi in {cityName}
              </h1>
              <p className="text-xl md:text-2xl text-brand-navy-200 mb-8 leading-relaxed">
                Ontdek de mooiste <strong>accommodaties met jacuzzi</strong> in {cityName}, {provinceName}. 
                Van luxe wellness hotels tot romantische boutique accommodaties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#hotels"
                  className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Bekijk alle hotels
                </a>
                <Link 
                  href="/" 
                  className="border-2 border-brand-orange-600 text-brand-orange-600 hover:bg-brand-orange-600 hover:text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Alle steden
                </Link>
              </div>
            </div>
            {heroImage && (
              <div className="relative">
                <Image
                  src={heroImage}
                  alt={`${cityName} - Hotels met jacuzzi en wellness`}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-pure-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="prose prose-lg max-w-none text-brand-navy-700 leading-relaxed space-y-6">
            <p>{cityContent.intro}</p>
            
            <h2 className="text-3xl font-bold text-brand-navy-900 mt-12 mb-6">
              Waarom kiezen voor {cityName}?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              {cityContent.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-orange-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" className="text-pure-white">
                      <path d="M10 3L4.5 8.5L2 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-brand-navy-800 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>

        {/* Hotels Section */}
      <section className="py-16 bg-light-gray relative">
        <WavePattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-8 text-center">
            {hotels?.length || 0} hotel{(hotels?.length || 0) !== 1 ? 's' : ''} met jacuzzi in {cityName}
          </h2>

          {hotels && hotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-brand-orange-600 text-6xl mb-6">🏨</div>
              <h3 className="text-2xl font-bold text-brand-navy-900 mb-4">
                Nog geen hotels beschikbaar
              </h3>
              <p className="text-brand-navy-600 text-lg mb-8">
                We werken hard aan het toevoegen van meer accommodaties in {cityName}.
              </p>
              <Link
                href="/"
                className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Bekijk andere steden
                <svg width="16" height="16" viewBox="0 0 16 16" className="ml-2">
                  <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Romantic Spots Section */}
      {cityContent.romanticSpots && (
        <section className="py-16 bg-brand-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-12 text-center">
              Romantische hotspots in {cityName}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cityContent.romanticSpots.map((spot, index) => (
                <div key={index} className="bg-pure-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-lg font-bold text-brand-navy-900 mb-3">{spot.name}</h3>
                  <p className="text-brand-navy-600 text-sm">{spot.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

        {/* FAQ Section */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-12 text-center">
            Veelgestelde vragen over hotels met jacuzzi in {cityName}
          </h2>
          
          <div className="space-y-6">
            <div className="bg-brand-navy-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-brand-navy-900 mb-3">
                Wat zijn de beste hotels met jacuzzi in {cityName}?
              </h3>
              <p className="text-brand-navy-700">
                De beste hotels met jacuzzi in {cityName} bieden een combinatie van luxe accommodaties, 
                uitstekende service en unieke locaties. Kijk naar hotels met hoge beoordelingen, 
                moderne faciliteiten en een romantische sfeer die past bij de charme van {cityName}.
              </p>
            </div>
            
            <div className="bg-brand-navy-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-brand-navy-900 mb-3">
                Zijn er hotels met privé jacuzzi op de kamer in {cityName}?
              </h3>
              <p className="text-brand-navy-700">
                Ja, er zijn verschillende hotels in {cityName} die suites en kamers aanbieden met 
                privé jacuzzi. Deze accommodaties bieden de ultieme privacy en romantiek voor 
                een onvergetelijk verblijf in {cityName}.
              </p>
            </div>
            
            <div className="bg-brand-navy-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-brand-navy-900 mb-3">
                Wat is de beste tijd om {cityName} te bezoeken?
              </h3>
              <p className="text-brand-navy-700">
                {cityName} is het hele jaar door een prachtige bestemming. Voor een romantisch 
                verblijf met jacuzzi zijn de lente en herfst ideaal vanwege het aangename weer. 
                In de winter kun je genieten van de gezellige sfeer en warme accommodaties.
              </p>
            </div>
            </div>
          </div>
        </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-navy-900 text-pure-white relative">
        <WavePattern />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor jouw romantische verblijf in {cityName}?
          </h2>
          <p className="text-xl text-brand-navy-200 mb-8">
            Ontdek de perfecte accommodatie met jacuzzi en beleef een onvergetelijke tijd in {cityName}.
          </p>
          
          <Link
            href="/"
            className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Bekijk alle hotels
            <svg width="20" height="20" viewBox="0 0 20 20" className="ml-2">
              <path d="M7 3l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            "name": `Hotels met Jacuzzi ${cityName}`,
            "description": `Ontdek de beste hotels met jacuzzi in ${cityName}, ${provinceName}. Van luxe wellness hotels tot romantische accommodaties.`,
            "url": `https://jacuzzihotels.nl/stad/${awaited.slug}`,
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": city.latitude || 52.3676,
              "longitude": city.longitude || 4.9041
            },
            "touristType": ["Couples", "Romantic travelers", "Wellness enthusiasts"],
            "containedInPlace": {
              "@type": "City",
              "name": cityName,
                "addressCountry": "NL"
            },
            "mainEntity": {
              "@type": "ItemList",
              "name": `Hotels met jacuzzi in ${cityName}`,
              "numberOfItems": hotels?.length || 0,
              "itemListElement": hotels?.map((hotel, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Hotel",
                  "name": hotel.name,
                  "description": hotel.description,
                  "image": hotel.image_url,
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": hotel.rating,
                    "bestRating": 5
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": hotel.price_range,
                    "priceCurrency": "EUR"
                  }
                }
              })) || []
            },
            "faq": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": `Wat zijn de beste hotels met jacuzzi in ${cityName}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `De beste hotels met jacuzzi in ${cityName} bieden een combinatie van luxe accommodaties, uitstekende service en unieke locaties. Kijk naar hotels met hoge beoordelingen, moderne faciliteiten en een romantische sfeer die past bij de charme van ${cityName}.`
                  }
                },
                {
                  "@type": "Question", 
                  "name": `Zijn er hotels met privé jacuzzi op de kamer in ${cityName}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Ja, er zijn verschillende hotels in ${cityName} die suites en kamers aanbieden met privé jacuzzi. Deze accommodaties bieden de ultieme privacy en romantiek voor een onvergetelijk verblijf in ${cityName}.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `Wat is de beste tijd om ${cityName} te bezoeken?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${cityName} is het hele jaar door een prachtige bestemming. Voor een romantisch verblijf met jacuzzi zijn de lente en herfst ideaal vanwege het aangename weer. In de winter kun je genieten van de gezellige sfeer en warme accommodaties.`
                  }
                }
              ]
            }
          })
        }}
      />
    </div>
  )
}