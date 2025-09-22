import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Province, City, Hotel } from '@/lib/supabase'
import HotelCard from '@/components/HotelCard'
import ScrollButton from '@/components/ScrollButton'

// Mock data
const mockProvinces: Province[] = [
  { id: 1, name: "Limburg", slug: "limburg", seo_text: "Ontdek de perfecte hotels met jacuzzi in Limburg", created_at: "2024-01-01" },
  { id: 2, name: "Noord-Holland", slug: "noord-holland", seo_text: "Ontdek de perfecte hotels met jacuzzi in Noord-Holland", created_at: "2024-01-01" },
  { id: 3, name: "Gelderland", slug: "gelderland", seo_text: "Ontdek de perfecte hotels met jacuzzi in Gelderland", created_at: "2024-01-01" },
  { id: 4, name: "Zuid-Holland", slug: "zuid-holland", seo_text: "Ontdek de perfecte hotels met jacuzzi in Zuid-Holland", created_at: "2024-01-01" },
  { id: 5, name: "Utrecht", slug: "utrecht", seo_text: "Ontdek de perfecte hotels met jacuzzi in Utrecht", created_at: "2024-01-01" },
  { id: 6, name: "Noord-Brabant", slug: "noord-brabant", seo_text: "Ontdek de perfecte hotels met jacuzzi in Noord-Brabant", created_at: "2024-01-01" },
  { id: 7, name: "Groningen", slug: "groningen", seo_text: "Ontdek de perfecte hotels met jacuzzi in Groningen, waar de rust van het noorden samenvalt met luxe wellness faciliteiten. Van landgoederen tot stadshotels, vind uw ideale romantische uitje.", created_at: "2024-01-01" },
  { id: 11, name: "Zeeland", slug: "zeeland", seo_text: "Ontdek de perfecte hotels met jacuzzi in Zeeland, waar de rust van de kust samenvloeit met luxe wellness faciliteiten. Van Renesse tot Middelburg, vind uw ideale romantische uitje aan zee.", created_at: "2024-01-01" }
]

const mockCities: City[] = [
  { id: 1, name: "Maastricht", slug: "maastricht", province_id: 1, seo_text: "", created_at: "2024-01-01" },
  { id: 2, name: "Amsterdam", slug: "amsterdam", province_id: 2, seo_text: "", created_at: "2024-01-01" },
  { id: 3, name: "Arnhem", slug: "arnhem", province_id: 3, seo_text: "", created_at: "2024-01-01" },
  { id: 4, name: "Rotterdam", slug: "rotterdam", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 15, name: "Den Haag", slug: "den-haag", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 40, name: "Sassenheim", slug: "sassenheim", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 41, name: "Leiden", slug: "leiden", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 42, name: "Wassenaar", slug: "wassenaar", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 43, name: "Nootdorp", slug: "nootdorp", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 44, name: "Ridderkerk", slug: "ridderkerk", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 45, name: "Dordrecht", slug: "dordrecht", province_id: 4, seo_text: "", created_at: "2024-01-01" },
  { id: 5, name: "Utrecht", slug: "utrecht-stad", province_id: 5, seo_text: "", created_at: "2024-01-01" },
  { id: 34, name: "Hilversum", slug: "hilversum", province_id: 5, seo_text: "", created_at: "2024-01-01" },
  { id: 35, name: "Vianen", slug: "vianen", province_id: 5, seo_text: "", created_at: "2024-01-01" },
  { id: 36, name: "Houten", slug: "houten", province_id: 5, seo_text: "", created_at: "2024-01-01" },
  { id: 37, name: "Breukelen", slug: "breukelen", province_id: 5, seo_text: "", created_at: "2024-01-01" },
  { id: 38, name: "De Bilt", slug: "de-bilt", province_id: 5, seo_text: "", created_at: "2024-01-01" },
  { id: 39, name: "Amersfoort", slug: "amersfoort", province_id: 5, seo_text: "", created_at: "2024-01-01" },
  { id: 6, name: "Eindhoven", slug: "eindhoven", province_id: 6, seo_text: "", created_at: "2024-01-01" },
  { id: 30, name: "Tilburg", slug: "tilburg", province_id: 6, seo_text: "", created_at: "2024-01-01" },
  { id: 31, name: "Vught", slug: "vught", province_id: 6, seo_text: "", created_at: "2024-01-01" },
  { id: 32, name: "Gilze", slug: "gilze", province_id: 6, seo_text: "", created_at: "2024-01-01" },
  { id: 33, name: "Deurne", slug: "deurne", province_id: 6, seo_text: "", created_at: "2024-01-01" },
  { id: 20, name: "Akersloot", slug: "akersloot", province_id: 2, seo_text: "", created_at: "2024-01-01" },
  { id: 21, name: "Wieringermeer", slug: "wieringermeer", province_id: 2, seo_text: "", created_at: "2024-01-01" },
  { id: 22, name: "Spaarnwoude", slug: "spaarnwoude", province_id: 2, seo_text: "", created_at: "2024-01-01" },
  { id: 23, name: "Heiloo", slug: "heiloo", province_id: 2, seo_text: "", created_at: "2024-01-01" },
  { id: 24, name: "Schiphol", slug: "schiphol", province_id: 2, seo_text: "", created_at: "2024-01-01" },
  { id: 17, name: "Renesse", slug: "renesse", province_id: 11, seo_text: "", created_at: "2024-01-01" },
  { id: 18, name: "Middelburg", slug: "middelburg", province_id: 11, seo_text: "", created_at: "2024-01-01" },
  { id: 19, name: "Goes", slug: "goes", province_id: 11, seo_text: "", created_at: "2024-01-01" },
  { id: 7, name: "Veluwe", slug: "veluwe", province_id: 3, seo_text: "", created_at: "2024-01-01" },
  { id: 8, name: "Oosterbeek", slug: "oosterbeek", province_id: 3, seo_text: "", created_at: "2024-01-01" },
  { id: 9, name: "Nijmegen", slug: "nijmegen", province_id: 3, seo_text: "", created_at: "2024-01-01" },
  { id: 25, name: "Groningen", slug: "groningen", province_id: 7, seo_text: "", created_at: "2024-01-01" }
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
    image_url: "/images/zuiderduin beachhotel.jpg",
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
    image_url: "/images/Hotel-Restaurant Nautisch Kwartier.jpg",
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
    image_url: "/images/Hotel-Restaurant Nautisch Kwartier.jpg",
    rating: 4.4,
    created_at: "2024-01-01"
  },
  // Gelderland hotels
  {
    id: 21,
    name: "Fletcher Hotel-Restaurant De Mallejan",
    slug: "fletcher-mallejan-veluwe",
    description: "Prachtig wellness hotel midden op de Veluwe met luxe spa faciliteiten en kamers met privé jacuzzi.",
    province_id: 3,
    city_id: 7,
    price_range: "Vanaf €179",
    facilities: ["Privé Jacuzzi", "Wellness Center", "Restaurant", "Fietsenverhuur"],
    affiliate_link: "https://booking.com/fletcher-mallejan",
    image_url: "/images/Kasteel Bloemendal.jpg",
    rating: 4.6,
    created_at: "2024-01-01"
  },
  {
    id: 22,
    name: "Landgoed De Rosep",
    slug: "landgoed-de-rosep",
    description: "Exclusief landgoed hotel in Oosterbeek met romantische suites uitgerust met bubbelbaden en wellness faciliteiten.",
    province_id: 3,
    city_id: 8,
    price_range: "Vanaf €225",
    facilities: ["Bubbelbad Suites", "Landgoed", "Fine Dining", "Wellness", "Natuur"],
    affiliate_link: "https://booking.com/landgoed-de-rosep",
    image_url: "/images/Hotel-Restaurant Heiloo.jpg",
    rating: 4.8,
    created_at: "2024-01-01"
  },
  {
    id: 23,
    name: "Hotel Van der Valk Nijmegen",
    slug: "van-der-valk-nijmegen",
    description: "Modern hotel in Nijmegen met intieme jacuzzi kamers en uitstekende faciliteiten. Perfecte uitvalsbasis voor het ontdekken van Gelderland.",
    province_id: 3,
    city_id: 9,
    price_range: "Vanaf €165",
    facilities: ["Jacuzzi Kamers", "Restaurant", "Bar", "Fitness", "Gratis WiFi"],
    affiliate_link: "https://booking.com/van-der-valk-nijmegen",
    image_url: "/images/Van der Valk Wieringermeer.jpg",
    rating: 4.5,
    created_at: "2024-01-01"
  },
  // Noord-Holland hotels
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
    image_url: "/images/Kasteel Bloemendal.jpg",
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
    id: 27,
    name: "Olympic Hotel",
    slug: "olympic-hotel",
    description: "Stijlvol Olympic Hotel in Amsterdam met luxe wellness faciliteiten en privé jacuzzi's. Een oase van rust in het hart van de stad.",
    province_id: 2,
    city_id: 2,
    price_range: "Vanaf €199",
    facilities: ["Privé Jacuzzi", "Wellness", "Restaurant", "Bar", "Stad"],
    affiliate_link: "https://booking.com/olympic-hotel",
    image_url: "/images/Van der Valk Akersloot.jpg",
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
    image_url: "/images/Kasteel Bloemendal.jpg",
    rating: 4.8,
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
    image_url: "/images/Van der Valk Akersloot.jpg",
    rating: 4.4,
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
    id: 33,
    name: "Fletcher Hotel-Restaurant Jan Van Scorel",
    slug: "fletcher-hotel-restaurant-jan-van-scorel",
    description: "Uniek hotel met uitzicht op de Schoorlse Duinen en luxe jacuzzi suites. Perfecte combinatie van natuur en wellness.",
    province_id: 2,
    city_id: 2,
    price_range: "Vanaf €199",
    facilities: ["Jacuzzi Suites", "Duinzicht", "Wellness", "Restaurant", "Natuur"],
    affiliate_link: "https://booking.com/fletcher-hotel-restaurant-jan-van-scorel",
    image_url: "/images/Kasteel Bloemendal.jpg",
    rating: 4.7,
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
    image_url: "/images/Hotel-Restaurant Nautisch Kwartier.jpg",
    rating: 4.6,
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
    image_url: "/images/Kasteel Bloemendal.jpg",
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
    image_url: "/images/Van der Valk Gilze - Tilburg.jpg",
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
  {
    id: 108,
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
    id: 109,
    name: "Stadshotel Den Haag",
    slug: "stadshotel-den-haag",
    description: "Modern stadshotel in Den Haag met comfortabele wellness kamers en jacuzzi faciliteiten. Uitstekende uitvalsbasis voor het verkennen van de hofstad.",
    province_id: 4,
    city_id: 15,
    price_range: "Vanaf €139",
    facilities: ["Wellness jacuzzi", "Fitness center", "Restaurant", "Bar", "Gratis WiFi", "Parkeergarage"],
    affiliate_link: "https://booking.com/stadshotel-den-haag",
    image_url: "/images/Stadshotel Den Haag.jpg",
    rating: 4.2,
    created_at: "2024-01-01"
  },
  {
    id: 110,
    name: "Mainport Design Hotel Rotterdam",
    slug: "mainport-design-hotel-rotterdam",
    description: "Iconisch design hotel aan de Maas met luxe jacuzzi suites en spectaculair uitzicht over Rotterdam. Perfecte combinatie van modern design en wellness.",
    province_id: 4,
    city_id: 4,
    price_range: "Vanaf €199",
    facilities: ["Designer jacuzzi", "Spa center", "Fine dining", "Maas uitzicht", "Fitness", "Room service"],
    affiliate_link: "https://booking.com/mainport-design-hotel",
    image_url: "/images/Mainport Design Hotel Rotterdam .jpg",
    rating: 4.6,
    popular: true,
    created_at: "2024-01-01"
  },
  {
    id: 111,
    name: "Boutique Hotel Corona Den Haag",
    slug: "boutique-hotel-corona-den-haag",
    description: "Charmant boutique hotel in historisch pand met stijlvolle jacuzzi kamers en persoonlijke service. Een unieke ervaring in het hart van Den Haag.",
    province_id: 4,
    city_id: 15,
    price_range: "Vanaf €159",
    facilities: ["Boutique jacuzzi", "Persoonlijke service", "Restaurant", "Lounge bar", "Gratis WiFi", "Concierge"],
    affiliate_link: "https://booking.com/boutique-hotel-corona",
    image_url: "/images/Boutique Hotel Corona Den Haag.jpg",
    rating: 4.3,
    created_at: "2024-01-01"
  },
  {
    id: 112,
    name: "Van der Valk Sassenheim-Leiden",
    slug: "van-der-valk-sassenheim-leiden",
    description: "Comfortabel Van der Valk hotel nabij Leiden met moderne wellness faciliteiten en jacuzzi kamers. Ideaal voor zowel zakelijke als leisure gasten.",
    province_id: 4,
    city_id: 40,
    price_range: "Vanaf €149",
    facilities: ["Wellness jacuzzi", "Fitness center", "Restaurant", "Bowling", "Gratis parking", "Gratis WiFi"],
    affiliate_link: "https://booking.com/van-der-valk-sassenheim",
    image_url: "/images/Van der Valk Hotel Sassenheim - Leiden 2020.jpg",
    rating: 4.1,
    created_at: "2024-01-01"
  },
  {
    id: 113,
    name: "Van der Valk Leiden",
    slug: "van-der-valk-leiden",
    description: "Modern Van der Valk hotel in het hart van Leiden met luxe wellness faciliteiten en jacuzzi kamers. Perfect gelegen nabij de historische binnenstad.",
    province_id: 4,
    city_id: 41,
    price_range: "Vanaf €159",
    facilities: ["Wellness jacuzzi", "Historische locatie", "Restaurant", "Fitness", "Gratis WiFi", "Business center"],
    affiliate_link: "https://booking.com/van-der-valk-leiden",
    image_url: "/images/Van der Valk Leiden.jpg",
    rating: 4.3,
    created_at: "2024-01-01"
  },
  {
    id: 114,
    name: "Van der Valk Den Haag - Wassenaar",
    slug: "van-der-valk-den-haag-wassenaar",
    description: "Elegant Van der Valk hotel in Wassenaar met premium jacuzzi suites en spa faciliteiten. Rustige ligging nabij Den Haag en de kust.",
    province_id: 4,
    city_id: 42,
    price_range: "Vanaf €179",
    facilities: ["Premium jacuzzi", "Spa faciliteiten", "Kust nabij", "Restaurant", "Wellness", "Gratis parking"],
    affiliate_link: "https://booking.com/van-der-valk-wassenaar",
    image_url: "/images/Van der Valk Den Haag - Wassenaar.jpg",
    rating: 4.4,
    created_at: "2024-01-01"
  },
  {
    id: 115,
    name: "Van der Valk Den Haag - Nootdorp",
    slug: "van-der-valk-den-haag-nootdorp",
    description: "Comfortabel Van der Valk hotel in Nootdorp met moderne wellness kamers en jacuzzi faciliteiten. Ideale uitvalsbasis voor Den Haag en omgeving.",
    province_id: 4,
    city_id: 43,
    price_range: "Vanaf €149",
    facilities: ["Wellness jacuzzi", "Modern design", "Restaurant", "Bar", "Fitness", "Gratis WiFi"],
    affiliate_link: "https://booking.com/van-der-valk-nootdorp",
    image_url: "/images/Van der Valk Den Haag - Nootdorp.jpg",
    rating: 4.2,
    created_at: "2024-01-01"
  },
  {
    id: 116,
    name: "Van der Valk Ridderkerk",
    slug: "van-der-valk-ridderkerk",
    description: "Centraal gelegen Van der Valk hotel in Ridderkerk met jacuzzi kamers en uitstekende faciliteiten. Perfect voor zowel business als leisure.",
    province_id: 4,
    city_id: 44,
    price_range: "Vanaf €139",
    facilities: ["Jacuzzi kamers", "Centraal gelegen", "Restaurant", "Business center", "Fitness", "Gratis parking"],
    affiliate_link: "https://booking.com/van-der-valk-ridderkerk",
    image_url: "/images/Van der Valk Ridderkerk.jpg",
    rating: 4.1,
    created_at: "2024-01-01"
  },
  {
    id: 117,
    name: "Van der Valk Dordrecht",
    slug: "van-der-valk-dordrecht",
    description: "Stijlvol Van der Valk hotel in historisch Dordrecht met luxe jacuzzi suites en wellness centrum. Perfecte combinatie van historie en modern comfort.",
    province_id: 4,
    city_id: 45,
    price_range: "Vanaf €169",
    facilities: ["Luxe jacuzzi suites", "Wellness centrum", "Historische stad", "Restaurant", "Spa", "Gratis WiFi"],
    affiliate_link: "https://booking.com/van-der-valk-dordrecht",
    image_url: "/images/Van der Valk Dordrecht.jpg",
    rating: 4.5,
    popular: true,
    created_at: "2024-01-01"
  }
]

// SVG Pattern Component
const DiamondPattern = () => (
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      opacity: 0.03,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='diamond-pattern' patternUnits='userSpaceOnUse' width='80' height='80'%3E%3Cg fill='none' stroke='%23F36F21' stroke-width='0.5'%3E%3C!-- Diamant vormen --%3E%3Cpath d='M40 10 L60 40 L40 70 L20 40 Z'/%3E%3Cpath d='M10 25 L25 40 L10 55 L-5 40 Z'/%3E%3Cpath d='M70 25 L85 40 L70 55 L55 40 Z'/%3E%3Cpath d='M25 -5 L40 10 L25 25 L10 10 Z'/%3E%3Cpath d='M55 -5 L70 10 L55 25 L40 10 Z'/%3E%3Cpath d='M25 55 L40 70 L25 85 L10 70 Z'/%3E%3Cpath d='M55 55 L70 70 L55 85 L40 70 Z'/%3E%3C!-- Accent lijnen --%3E%3Cline x1='0' y1='40' x2='80' y2='40'/%3E%3Cline x1='40' y1='0' x2='40' y2='80'/%3E%3C!-- Kleine diamanten --%3E%3Ccircle cx='20' cy='20' r='2' fill='%23F36F21' opacity='0.6'/%3E%3Ccircle cx='60' cy='20' r='2' fill='%23F36F21' opacity='0.6'/%3E%3Ccircle cx='20' cy='60' r='2' fill='%23F36F21' opacity='0.6'/%3E%3Ccircle cx='60' cy='60' r='2' fill='%23F36F21' opacity='0.6'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23diamond-pattern)'/%3E%3C/svg%3E")`
    }}
  />
)

// Add generateStaticParams
export async function generateStaticParams() {
  return mockProvinces.map(({ slug }) => ({ slug }))
}

// Add revalidate for ISR
export const revalidate = 86400 // 24 hours

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params; // Await params to fix error
  const province = mockProvinces.find(p => p.slug === awaitedParams.slug)

  if (!province) return {}

  const title = `Hotels met jacuzzi in ${province.name} - Romantisch verblijf | Hotelmetjacuzzi.net`
  const description = province.seo_text?.substring(0, 160) || `Ontdek de beste hotels met jacuzzi in ${province.name}. Luxe suites met privé wellness, spa faciliteiten en romantische arrangementen. Boek nu!`

  return {
    title,
    description,
    alternates: {
      canonical: `/provincie/${province.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/provincie/${province.slug}`,
      type: 'website',
      images: [{
        url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop',
        width: 1600,
        height: 900,
        alt: `Jacuzzi hotel in ${province.name}`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop'],
    },
  }
}

// Add generateMetadata

function generateProvinceSeoText(provinceName: string, cities: City[] = []): string {
  // Get up to 3 city names for better context
  const cityNames = cities.slice(0, 3).map(city => city.name).join(', ') || 'diverse steden';
  
  return (
    `${provinceName} is een veelzijdige provincie in Nederland met een uitstekend aanbod aan hotels met jacuzzi. Of je nu een romantisch weekend plant of gewoon wilt ontspannen, een jacuzzi op de kamer biedt de ultieme wellness ervaring. In steden als ${cityNames} vind je diverse opties, van luxe suites tot complete wellness hotels.\n\n` +
    
    `## Jacuzzi hotels in ${provinceName}: wat kun je verwachten?\n\n` +
    `Hotels met jacuzzi in ${provinceName} bieden verschillende opties: privé jacuzzi's op de kamer, wellness suites met extra faciliteiten, of gedeelde spa ruimtes. De prijzen variëren van €120 tot €300 per nacht, afhankelijk van de luxe en het seizoen. Veel hotels bieden ook arrangementen met diner, massage of andere extra's.\n\n` +
    
    `## Populaire locaties in ${provinceName}\n\n` +
    `De beste hotels met jacuzzi vind je verspreid door de provincie. In stedelijke gebieden zoals ${cityNames} zijn er moderne opties met stadszicht, terwijl de landelijke gebieden meer rust en natuur bieden. Zoek je naar termen als "jacuzzi op kamer ${provinceName}", "wellness hotel ${provinceName}" of "romantisch hotel jacuzzi ${provinceName}"? Dan vind je zeker wat je zoekt.\n\n` +
    
    `## Activiteiten combineren met je verblijf\n\n` +
    `Een verblijf in een jacuzzi hotel in ${provinceName} is perfect te combineren met lokale activiteiten. Verken historische stadscentra, maak wandelingen door natuurgebieden, bezoek musea of geniet van lokale gastronomie. Na een dag vol indrukken is het heerlijk ontspannen in je eigen bubbelbad.\n\n` +
    
    `## Tips voor je boeking\n\n` +
    `Boek ruim van tevoren voor de beste kamers met jacuzzi, vooral in weekenden en vakantieperiodes. Vergelijk prijzen via verschillende aanbieders en let op speciale arrangementen. Check altijd de recensies over de wellness faciliteiten en vraag zo nodig naar de exacte voorzieningen op de kamer.\n\n` +
    
    `Ontdek de beste jacuzzi hotels in ${provinceName} en geniet van een onvergetelijk verblijf met extra comfort en luxe. De combinatie van ontspanning en de unieke omgeving maakt je verblijf compleet.`
  )
}

export default async function ProvincePage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params; // Await params to fix error
  // Find province in mock data
  const province = mockProvinces.find(p => p.slug === awaitedParams.slug)

  if (!province) {
    notFound()
  }

  const allCities = mockCities.filter(c => c.province_id === province.id)
  const hotels = mockHotels.filter(h => h.province_id === province.id)

  // Filter cities with hotels
  const citiesWithHotels = (allCities || []).filter(city => 
    (hotels || []).some(hotel => hotel.city_id === city.id)
  )

  const provinceName = province.name
  const seoText = province.seo_text || generateProvinceSeoText(provinceName, allCities || []) // Use DB seo_text if available, pass cities for better context

  // Province-specific hero images - using verified working URLs
  const getProvinceHeroImage = (provinceName: string) => {
    const images = {
      'Gelderland': '/images/Veluwe - hero.jpg', // Local Gelderland Veluwe hero image
      'Noord-Holland': 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1600&auto=format&fit=crop', // Amsterdam canal golden hour - verified working
      'Limburg': 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop', // Historic Dutch architecture - verified working
      'Zeeland': '/images/Zeeland-Hero.jpg', // Local Zeeland hero image
      'Zuid-Holland': '/images/Zuid-Hollad-Erasmus.jpg', // Local Zuid-Holland Erasmus bridge hero image
      'Utrecht': '/images/Domtoren-Utrecht-Hero.jpg', // Local Utrecht Domtoren hero image
      'Groningen': '/images/Groningen-Hero.jpg', // Local Groningen hero image
      'Noord-Brabant': 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop' // Historic Dutch architecture - verified working
    }
    return images[provinceName as keyof typeof images] || images['Noord-Brabant']
  }

  return (
    <main className="min-h-screen bg-light-gray">
      {/* Professional Diamond Pattern Background */}
      <DiamondPattern />

      {/* Hero Section */}
      <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm">
                  <li><Link href="/" className="text-brand-navy-200 hover:text-pure-white">Home</Link></li>
                  <li className="text-brand-navy-300">/</li>
                  <li><Link href="/provincies" className="text-brand-navy-200 hover:text-pure-white">Provincies</Link></li>
                  <li className="text-brand-navy-300">/</li>
                  <li className="text-pure-white font-semibold">{provinceName}</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Hotel met Jacuzzi in {provinceName}
              </h1>
              <p className="text-xl md:text-2xl text-brand-navy-200 mb-8 leading-relaxed">
                Ontdek de mooiste <strong>hotels met jacuzzi</strong> in {provinceName}. 
                Van romantische wellness hotels tot luxe spa resorts - vind jouw perfecte ontspanningsbestemming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ScrollButton 
                  targetId="hotels"
                  className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Bekijk alle hotels
                </ScrollButton>
                <Link 
                  href="/hotels" 
                  className="border-2 border-brand-orange-600 text-brand-orange-600 hover:bg-brand-orange-600 hover:text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Alle provincies
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src={getProvinceHeroImage(provinceName)}
                alt={`${provinceName} - Hotels met jacuzzi en wellness`}
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange-600 text-pure-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">{hotels?.length || 0}+</div>
                <div className="text-sm">Hotels beschikbaar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section id="seo-content" className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 text-center mb-8">
              Alles over Hotels met Jacuzzi in {provinceName}
            </h2>
            <div className="bg-brand-navy-50 rounded-2xl p-8 shadow-lg border border-brand-navy-200">
              <div className="prose prose-lg max-w-none text-brand-navy-700">
                {/* Convert markdown-like format to proper HTML */}
                {seoText.split('\n\n').map((paragraph: string, i: number) => {
                  if (paragraph.startsWith('## ')) {
                    // It's a heading
                    return <h3 key={i} className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">{paragraph.replace('## ', '')}</h3>
                  }
                  return <p key={i} className="mb-6 leading-relaxed">{paragraph}</p>
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Cities Section */}
      {citiesWithHotels.length > 0 && (
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Aanbevolen Steden in {provinceName}
              </h2>
              <p className="text-lg text-brand-navy-600">
                Ontdek jacuzzi hotels in de populairste steden van {provinceName}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {citiesWithHotels.map(city => {
                const cityHotels = (hotels || []).filter(hotel => hotel.city_id === city.id);
                return (
                  <Link 
                    href={`/stad/${city.slug}`} 
                    key={city.id}
                    className="group bg-pure-white hover:bg-brand-navy-50 border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <h3 className="text-xl font-bold text-brand-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-brand-navy-600 mb-4">
                      {cityHotels.length} hotel{cityHotels.length !== 1 ? 's' : ''} met jacuzzi beschikbaar
                    </p>
                    <div className="text-brand-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                      Bekijk hotels →
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Hotels Section */}
      <section id="hotels" className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Top Jacuzzi Hotels in {provinceName}
            </h2>
            <p className="text-lg text-brand-navy-600">
              Onze selectie van de beste hotels met privé jacuzzi's en wellness faciliteiten
            </p>
          </div>
          {hotels && hotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-brand-navy-600 mb-4">Nog geen hotels beschikbaar in {provinceName}</p>
              <p className="text-brand-navy-500">We voegen binnenkort nieuwe jacuzzi hotels toe!</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Veelgestelde Vragen
              </h2>
              <p className="text-lg text-brand-navy-600">
                Alles wat je wilt weten over hotels met jacuzzi in {provinceName}
              </p>
            </div>
            <div className="bg-pure-white rounded-2xl shadow-lg p-8 border border-brand-navy-200 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Welke hotels in {provinceName} hebben een privé jacuzzi?</h3>
                <p className="text-brand-navy-700 leading-relaxed">Veel hotels bieden suites met privé jacuzzi. Kijk naar opties in {allCities?.[0]?.name || 'hoofdsteden'} voor de beste keuzes. Deze hotels combineren vaak luxe accommodatie met wellness faciliteiten.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Wat kost een nacht in een jacuzzi hotel in {provinceName}?</h3>
                <p className="text-brand-navy-700 leading-relaxed">Prijzen starten vanaf €120 per nacht, afhankelijk van seizoen, locatie en luxeniveau. Premium suites met uitgebreide wellness faciliteiten kunnen tot €300 per nacht kosten.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Zijn er romantische jacuzzi hotels in {provinceName}?</h3>
                <p className="text-brand-navy-700 leading-relaxed">Absoluut! Veel hotels richten zich specifiek op koppels met romantische arrangementen, privé wellness en bijzondere ervaringen zoals champagne en chocolade.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">Kan ik een jacuzzi hotel boeken met uitzicht in {provinceName}?</h3>
                <p className="text-brand-navy-700 leading-relaxed">Ja, verschillende hotels bieden kamers met prachtig uitzicht op natuur, water of historische stadscentra, gecombineerd met luxe jacuzzi faciliteiten.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://jacuzzihotels.nl/' },
              { '@type': 'ListItem', position: 2, name: provinceName, item: `https://jacuzzihotels.nl/provincie/${province.slug}` }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: `Hotels met jacuzzi in ${provinceName}`,
            numberOfItems: (hotels || []).length,
            itemListElement: (hotels || []).map((h: Hotel, i: number) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Hotel',
                name: h.name,
                url: `https://jacuzzihotels.nl/hotel/${h.slug}`,
                image: h.image_url,
                priceRange: h.price_range,
                starRating: {
                  '@type': 'Rating',
                  ratingValue: h.rating,
                  bestRating: 5
                },
                address: {
                  '@type': 'PostalAddress',
                  addressRegion: provinceName
                }
              }
            }))
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: `Welke hotels in ${provinceName} hebben een privé jacuzzi?`,
                acceptedAnswer: { 
                  '@type': 'Answer', 
                  text: `Veel hotels bieden suites met privé jacuzzi. Kijk naar opties in ${allCities?.[0]?.name || 'hoofdsteden'} voor de beste keuzes.` 
                }
              },
              {
                '@type': 'Question',
                name: `Wat kost een nacht in een jacuzzi hotel in ${provinceName}?`,
                acceptedAnswer: { 
                  '@type': 'Answer', 
                  text: `Prijzen starten vanaf €120, afhankelijk van seizoen en locatie. Check actuele tarieven via de links.` 
                }
              },
              {
                '@type': 'Question',
                name: `Zijn er romantische jacuzzi hotels in ${provinceName}?`,
                acceptedAnswer: { 
                  '@type': 'Answer', 
                  text: `Ja, diverse hotels richten zich op koppels met privé wellness en arrangementen.` 
                }
              },
              {
                '@type': 'Question',
                name: `Kan ik een jacuzzi hotel boeken met uitzicht in ${provinceName}?`,
                acceptedAnswer: { 
                  '@type': 'Answer', 
                  text: `Sommige hotels bieden kamers met uitzicht op natuur of stad, gecombineerd met jacuzzi faciliteiten.` 
                }
              },
              {
                '@type': 'Question',
                name: `Zijn er hotels met jacuzzi en sauna in ${provinceName}?`,
                acceptedAnswer: { 
                  '@type': 'Answer', 
                  text: `Ja, meerdere accommodaties combineren jacuzzi met sauna voor complete wellness ervaringen.` 
                }
              },
            ]
          })
        }}
      />
    </main>
  )
}


