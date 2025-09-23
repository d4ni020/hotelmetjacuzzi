import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import MapboxMap from '@/components/MapboxMap'
import HotelCard from '@/components/HotelCard'
import RoomCard from '@/components/RoomCard'

// Mock hotel data met locatie coordinates
interface Room {
  id: number
  name: string
  image: string
  description: string
  features: string[]
  priceRange: string
  affiliateLink: string
  thumbnails?: string[]
}

interface Hotel {
  id: number
  name: string
  location: string
  city: string
  province: string
  priceRange: string
  jacuzziType: string
  facilities: string[]
  rating: number
  reviewCount: number
  heroImage: string
  description: string
  coordinates: [number, number]
  address: string
  affiliateLink: string
  popularThisMonth?: boolean
  rooms?: Room[]
}
const mockHotels: Record<string, Hotel> = {
  'kasteel-bloemendal': {
    id: 1,
    name: 'Kasteel Bloemendal',
    location: 'Maastricht, Limburg',
    city: 'Maastricht',
    province: 'Limburg',
    priceRange: '€225 - €395',
    jacuzziType: 'Privé jacuzzi suite',
    facilities: ['Sauna', 'Wellness spa', 'Fine dining restaurant', 'Gratis parking', 'Room service', 'Kasteel tuin', 'Romantisch'],
    rating: 4.8,
    reviewCount: 342,
    heroImage: '/images/Kasteel Bloemendal.jpg',
    description: `Kasteel Bloemendal is een prachtig gerestaureerd kasteel uit de 18e eeuw, gelegen in het hart van Limburg. Dit romantische hotel met jacuzzi biedt luxueuze suites met privé jacuzzi faciliteiten en een adembenemend uitzicht op de kasteetuin.

    Elke suite is elegant ingericht met antieke meubels en moderne voorzieningen. De privé jacuzzi's zijn geplaatst op strategische locaties om optimaal te genieten van de rust en privacy. Perfect voor een romantische escapade of een wellness weekend.
    
    Het kasteel beschikt over een uitgebreide spa, een bekroond restaurant en prachtige wandelpaden door het landgoed. Voor een onvergetelijke ervaring in Zuid-Limburg met de perfecte combinatie van historie en moderne luxe.`,
    coordinates: [5.6913, 50.8514], // Maastricht coordinates
    address: 'Bloemendalstraat 150, 6291 CM Vaals',
    affiliateLink: 'https://booking.com/kasteel-bloemendal',
    popularThisMonth: true,
    rooms: [
      {
        id: 1,
        name: 'Kasteel Suite',
        image: '/images/Kasteel Bloemendal.jpg',
        description: 'Luxueuze kasteel suite met antieke inrichting en moderne jacuzzi. Geniet van het historische karakter en uitzicht op de kasteeltuin.',
        features: ['Privé jacuzzi', 'Antieke inrichting', 'Kasteeltuin uitzicht', 'King-size bed', 'Minibar', 'Room service'],
        priceRange: '€225 - €295',
        affiliateLink: 'https://booking.com/kasteel-bloemendal-suite'
      },
      {
        id: 2,
        name: 'Royal Kamer',
        image: '/images/Kasteel Bloemendal.jpg',
        description: 'Elegante royal kamer met jacuzzi en historische details. Perfect voor een romantisch verblijf in een authentiek kasteel.',
        features: ['Jacuzzi bad', 'Historische details', 'Balkon', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi'],
        priceRange: '€195 - €245',
        affiliateLink: 'https://booking.com/kasteel-bloemendal-royal'
      }
    ]
  },
  'van-der-valk-amsterdam': {
    id: 2,
    name: 'Van der Valk Hotel Amsterdam',
    location: 'Amsterdam, Noord-Holland',
    city: 'Amsterdam',
    province: 'Noord-Holland',
    priceRange: '€189 - €329',
    jacuzziType: 'Wellness suite jacuzzi',
    facilities: ['Fitness center', 'Spa', 'Restaurant', 'Bar', 'Gratis wifi', 'Centrum locatie', 'Business center'],
    rating: 4.6,
    reviewCount: 578,
    heroImage: '/images/Van der Valk Akersloot.jpg',
    description: `Van der Valk Hotel Amsterdam combineert moderne luxe met traditionele Nederlandse gastvrijheid. Dit stijlvolle hotel met jacuzzi ligt in het bruisende hart van Amsterdam, op loopafstand van de beroemde grachten en musea.

    De wellness suites zijn voorzien van ruime jacuzzi's en moderne voorzieningen. Geniet van het panoramische uitzicht over de stad terwijl u ontspant in uw privé jacuzzi. Het hotel beschikt over een modern spa complex en een bekroond restaurant.
    
    Perfect gelegen voor zowel zakelijke als romantische verblijven. Ontdek Amsterdam overdag en kom tot rust in uw luxueuze suite met jacuzzi. De ideale combinatie van stadsbelevenis en wellness ontspanning.`,
    coordinates: [4.9041, 52.3676], // Amsterdam coordinates
    address: 'Weteringschans 136, 1017 XV Amsterdam',
    affiliateLink: 'https://booking.com/van-der-valk-amsterdam',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Deluxe Wellness Suite',
        image: '/images/Van der Valk Akersloot.jpg',
        description: 'Luxueuze wellness suite met panoramisch uitzicht over Amsterdam en privé jacuzzi. Perfect voor een romantische citytrip.',
        features: ['Privé jacuzzi', 'Stads panorama', 'Separate woonkamer', 'King-size bed', 'Minibar', 'Business desk'],
        priceRange: '€229 - €329',
        affiliateLink: 'https://booking.com/van-der-valk-amsterdam-deluxe'
      },
      {
        id: 2,
        name: 'Superior Jacuzzi Kamer',
        image: '/images/Van der Valk Akersloot.jpg',
        description: 'Moderne superior kamer met jacuzzi en alle comfort. Ideaal voor een luxe verblijf in het hart van Amsterdam.',
        features: ['Jacuzzi bad', 'Grachten uitzicht', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi', 'Room service'],
        priceRange: '€189 - €249',
        affiliateLink: 'https://booking.com/van-der-valk-amsterdam-superior'
      }
    ]
  },
  'fletcher-wellness-hotel': {
    id: 3,
    name: 'Fletcher Wellness Hotel',
    location: 'Arnhem, Gelderland',
    city: 'Arnhem',
    province: 'Gelderland',
    priceRange: '€159 - €279',
    jacuzziType: 'Wellness jacuzzi',
    facilities: ['Uitgebreide spa', 'Zwembad', 'Sauna', 'Massages', 'Restaurant', 'Natuur locatie', 'Gratis parkeren'],
    rating: 4.5,
    reviewCount: 423,
    heroImage: '/images/Fletcher Hotel-Restaurant Jan Van Scorel.jpg',
    description: `Fletcher Wellness Hotel in Arnhem is een oase van rust en ontspanning in de prachtige Veluweregio. Dit moderne wellness hotel met jacuzzi biedt de perfecte combinatie van luxe accommodatie en uitgebreide spa faciliteiten.

    De elegante kamers en suites zijn voorzien van privé jacuzzi's en bieden een serene omgeving voor ontspanning. Het hotel beschikt over een uitgebreid wellness center met verschillende sauna's, een zwembad en professionele massagebehandelingen.
    
    Gelegen nabij het Nationaal Park De Hoge Veluwe, is dit de ideale uitvalsbasis voor natuur- en cultuurliefhebbers die willen genieten van luxe wellness faciliteiten. Perfect voor een rustgevende wellness break in de natuur.`,
    coordinates: [5.8985, 51.9851], // Arnhem coordinates
    address: 'Velperweg 28, 6824 BZ Arnhem',
    affiliateLink: 'https://booking.com/fletcher-wellness-hotel',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Wellness Suite',
        image: '/images/Fletcher Hotel-Restaurant Jan Van Scorel.jpg',
        description: 'Ruime wellness suite met luxe jacuzzi en directe toegang tot het spa center. Omgeven door de natuur van de Veluwe.',
        features: ['Luxe jacuzzi', 'Spa toegang', 'Natuur uitzicht', 'King-size bed', 'Balkon', 'Minibar'],
        priceRange: '€199 - €279',
        affiliateLink: 'https://booking.com/fletcher-wellness-suite'
      },
      {
        id: 2,
        name: 'Comfort Wellness Kamer',
        image: '/images/Fletcher Hotel-Restaurant Jan Van Scorel.jpg',
        description: 'Comfortabele wellness kamer met jacuzzi en moderne amenities. Ideaal voor een ontspannen verblijf in de natuur.',
        features: ['Jacuzzi bad', 'Wellness amenities', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi', 'Parkeerplaats'],
        priceRange: '€159 - €219',
        affiliateLink: 'https://booking.com/fletcher-wellness-comfort'
      }
    ]
  },
  'van-der-valk-schiphol': {
    id: 4,
    name: 'Van der Valk Schiphol',
    location: 'Schiphol, Noord-Holland',
    city: 'Schiphol',
    province: 'Noord-Holland',
    priceRange: '€189 - €349',
    jacuzziType: 'Privé jacuzzi kamers',
    facilities: ['24/7 Room Service', 'Fitness Center', 'Business Center', 'Restaurant', 'Bar', 'Gratis Wifi', 'Shuttle Service'],
    rating: 4.6,
    reviewCount: 892,
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
    description: `Van der Valk Schiphol is het perfecte airport hotel met luxe kamers met jacuzzi, strategisch gelegen nabij Schiphol Airport. Dit moderne hotel combineert comfort met gemak voor zowel zakelijke als leisure reizigers.

    Onze Deluxe Plus kamers zijn uitgerust met privé jacuzzi's en bieden een serene ontsnapping na een lange vlucht. Met directe verbindingen naar de luchthaven en Amsterdam centrum, bent u altijd op de juiste plek.
    
    Perfect voor een romantische nacht voorafgaand aan uw vakantie of een luxueuze stopover. Geniet van onze uitstekende service, moderne faciliteiten en de unieke rust die een jacuzzi op de kamer biedt.`,
    coordinates: [4.7583, 52.3105], // Schiphol coordinates
    address: 'Boeing Avenue 201, 1119 PD Schiphol-Rijk',
    affiliateLink: 'https://booking.com/van-der-valk-schiphol',
    popularThisMonth: true,
    rooms: [
      {
        id: 1,
        name: 'Deluxe Plus Kamer',
        image: '/images/Inntel Hotels Amsterdam Centre.jpg',
        description: 'Luxueuze kamer met king-size bed en privé jacuzzi. Perfect voor een romantische ervaring met uitzicht op de start- en landingsbanen.',
        features: ['Privé jacuzzi', 'King-size bed', 'Uitzicht op runway', 'Minibar', 'Flatscreen TV', 'Gratis wifi'],
        priceRange: '€189 - €249',
        affiliateLink: 'https://booking.com/van-der-valk-schiphol-deluxe-plus'
      },
      {
        id: 2,
        name: 'Deluxe Plus Suite',
        image: '/images/Inntel Hotels Amsterdam Centre.jpg',
        description: 'Ruime suite met separate woonkamer en extra grote jacuzzi. Ideaal voor een luxe verblijf met alle comfort en privacy.',
        features: ['Extra grote jacuzzi', 'Separate woonkamer', 'Business desk', 'Koffiehoek', 'Premium beddengoed', 'Balkon'],
        priceRange: '€269 - €349',
        affiliateLink: 'https://booking.com/van-der-valk-schiphol-deluxe-suite'
      }
    ]
  },
  'inntel-hotels-amsterdam-centre': {
    id: 5,
    name: 'Inntel Hotels Amsterdam Centre',
    location: 'Amsterdam, Noord-Holland',
    city: 'Amsterdam',
    province: 'Noord-Holland',
    priceRange: '€195 - €349',
    jacuzziType: 'Wellness suite jacuzzi',
    facilities: ['Jacuzzi Suite', 'Wellness Center', 'Centrum locatie', 'Restaurant', 'Business Center', '24/7 Service'],
    rating: 4.3,
    reviewCount: 687,
    heroImage: '/images/Inntel Hotels Amsterdam Centre.jpg',
    description: `Inntel Hotels Amsterdam Centre is een modern stadshotel met unieke design kamers en luxueuze wellness faciliteiten in het hart van Amsterdam. Dit elegante hotel met jacuzzi combineert hedendaagse architectuur met comfort.

    Onze specialty wellness kamers zijn uitgerust met privé jacuzzi's en bieden een serene ontsnapping in de bruisende hoofdstad. Met een centrale locatie nabij alle belangrijke attracties en het karakteristieke design van Inntel Hotels.
    
    Perfect voor een romantische citytrip met wellness ervaring. Geniet van de dynamiek van Amsterdam overdag en kom tot rust in uw privé wellness suite met jacuzzi.`,
    coordinates: [4.9041, 52.3676], // Amsterdam coordinates
    address: 'Nieuwezijds Voorburgwal 67, 1012 RE Amsterdam',
    affiliateLink: 'https://booking.com/inntel-hotels-amsterdam-centre',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Spa Kamer',
        image: '/images/inntelhotels - Spa kamer.jpg',
        description: 'Moderne spa kamer met design jacuzzi en stadsbeeld. Ideaal voor ontspanning in het hart van Amsterdam.',
        features: ['Privé jacuzzi', 'Stadsbeeld', 'Modern design', 'Minibar', 'Flatscreen TV', 'Gratis wifi'],
        priceRange: '€195 - €249',
        affiliateLink: 'https://booking.com/inntel-amsterdam-centre-spa'
      },
      {
        id: 2,
        name: 'Wellness Kamer',
        image: '/images/inntelhotels - Wellness kamer.jpg',
        description: 'Ruime wellness kamer met privé sauna en jacuzzi. Complete ontspanningservaring in het hart van Amsterdam.',
        features: ['Privé sauna', 'Privé jacuzzi', 'Wellness amenities', 'Extra ruim', 'Premium beddengoed', 'Modern design'],
        priceRange: '€249 - €299',
        affiliateLink: 'https://booking.com/inntel-amsterdam-centre-wellness'
      },
      {
        id: 3,
        name: 'Suite',
        image: '/images/inntelhotels - Suite.jpg',
        description: 'Luxueuze suite met separate woonkamer, privé sauna en jacuzzi. Het ultieme in comfort en wellness.',
        features: ['Privé sauna', 'Privé jacuzzi', 'Separate woonkamer', 'Design meubilair', 'Business desk', 'Room service'],
        priceRange: '€299 - €349',
        affiliateLink: 'https://booking.com/inntel-amsterdam-centre-suite'
      },
      {
        id: 4,
        name: 'Monumentale Suite',
        image: '/images/inntelhotels - Monumentale Suite.jpg',
        description: 'Uniek penthouse met rustieke en authentieke uitstraling. Het uitzicht is om van te houden, de ambiance ademt Amsterdam. Special designed Inntel LXRY bed voor ultieme rust.',
        features: ['Privé sauna', 'Royale bubbelbad', 'Regendouche', 'Monumentaal uitzicht', 'Inntel LXRY bed', 'Alleen bereikbaar via trap'],
        priceRange: '€349 - €449',
        affiliateLink: 'https://booking.com/inntel-amsterdam-centre-monumentale-suite'
      }
    ]
  },
  'olympic-hotel': {
    id: 12,
    name: 'Olympic Hotel',
    location: 'Amsterdam, Noord-Holland',
    city: 'Amsterdam',
    province: 'Noord-Holland',
    priceRange: '€189 - €289',
    jacuzziType: 'Luxe jacuzzi suite',
    facilities: ['Jacuzzi Suite', 'Olympisch Zwembad', 'Fitness Center', 'Spa & Wellness', 'Restaurant', 'Bar', 'Centrum locatie'],
    rating: 4.4,
    reviewCount: 892,
    heroImage: '/images/Olympic Hotel.jpg',
    description: `Olympic Hotel Amsterdam combineert sportieve excellentie met luxe wellness in het hart van Amsterdam. Dit unieke hotel met jacuzzi biedt een perfecte balans tussen actieve ontspanning en romantische momenten.

    Onze signature Deluxe Kamers zijn uitgerust met luxe jacuzzi's en bieden een serene ontsnapping na een dag vol Amsterdamse avonturen. Met olympische faciliteiten en wellness amenities voor een complete ervaring.
    
    Perfect voor sporters, wellness liefhebbers en koppels die op zoek zijn naar een unieke combinatie van activiteit en ontspanning in Amsterdam. De ideale keuze voor een actief en romantisch weekend.`,
    coordinates: [4.8952, 52.3702], // Amsterdam coordinates
    address: 'PC Hooftstraat 138-140, 1071 CC Amsterdam',
    affiliateLink: 'https://booking.com/olympic-hotel-amsterdam',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Olympic Deluxe Suite',
        image: '/images/Olympic Hotel.jpg',
        description: 'Luxueuze Olympic suite met privé jacuzzi en toegang tot alle sportfaciliteiten. Perfect voor een actieve en romantische ervaring.',
        features: ['Privé jacuzzi', 'Zwembad toegang', 'Fitness access', 'King-size bed', 'Minibar', 'Balkon'],
        priceRange: '€229 - €289',
        affiliateLink: 'https://booking.com/olympic-hotel-deluxe-suite'
      },
      {
        id: 2,
        name: 'Spa Jacuzzi Kamer',
        image: '/images/Olympic Hotel.jpg',
        description: 'Moderne spa kamer met jacuzzi en wellness amenities. Ideaal voor ontspanning na een actieve dag in Amsterdam.',
        features: ['Jacuzzi bad', 'Spa amenities', 'Sportfaciliteiten', 'Flatscreen TV', 'Gratis WiFi', 'Room service'],
        priceRange: '€189 - €239',
        affiliateLink: 'https://booking.com/olympic-hotel-spa-jacuzzi'
      }
    ]
  },
  'kasteel-bloemendal-detail': {
    id: 13,
    name: 'Kasteel Bloemendal',
    location: 'Vaals, Limburg',
    city: 'Vaals',
    province: 'Limburg',
    priceRange: '€249 - €389',
    jacuzziType: 'Luxe kasteel suite jacuzzi',
    facilities: ['Luxe Suites', 'Kasteel Ambiance', 'Fine Dining', 'Spa & Wellness', 'Historische Tuinen', 'Premium Service'],
    rating: 4.6,
    reviewCount: 543,
    heroImage: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1600&auto=format&fit=crop',
    description: `Kasteel Bloemendal is een historisch kasteel hotel dat luxe en romantiek combineert in de prachtige heuvels van Zuid-Limburg. Dit unieke kasteel met jacuzzi suites biedt een koninklijke ervaring in een authentieke setting.

    Onze signature Deluxe Suite met Kingsize bed en luxe jacuzzi biedt een onvergetelijke kasteel ervaring. Met eeuwenoude charme, moderne luxury en een romantische ambiance die perfect is voor bijzondere momenten.
    
    Perfect voor romantische uitjes, jubilea en speciale gelegenheden waar u zich als koningschap wilt voelen in de prachtige natuur van Limburg.`,
    coordinates: [6.0167, 50.7667], // Vaals coordinates
    address: 'Bloemendalstraat 150, 6291 CM Vaals',
    affiliateLink: 'https://booking.com/kasteel-bloemendal',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Deluxe Suite met Kingsize bed',
        image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1600&auto=format&fit=crop',
        description: 'Koninklijke deluxe suite met luxe jacuzzi en kingsize bed in authentiek kasteel setting. Het summum van romantische luxe.',
        features: ['Luxe jacuzzi', 'Kingsize bed', 'Kasteel ambiance', 'Historische details', 'Premium amenities', 'Tuinzicht'],
        priceRange: '€249 - €389',
        affiliateLink: 'https://booking.com/kasteel-bloemendal-deluxe-suite'
      }
    ]
  },
  'van-der-valk-akersloot': {
    id: 6,
    name: 'Van der Valk Akersloot',
    location: 'Akersloot, Noord-Holland',
    city: 'Akersloot',
    province: 'Noord-Holland',
    priceRange: '€169 - €289',
    jacuzziType: 'Wellness kamers met jacuzzi',
    facilities: ['Wellness Center', 'Restaurant', 'Bar', 'Fitness', 'Gratis Wifi', 'Gratis Parkeren', 'Terras'],
    rating: 4.5,
    reviewCount: 647,
    heroImage: '/images/Van der Valk Akersloot.jpg',
    description: `Van der Valk Akersloot is een rustig gelegen wellness hotel in het groene hart van Noord-Holland, perfect voor een ontspannen verblijf met jacuzzi kamers. Dit moderne hotel combineert de rust van de natuur met luxe wellness faciliteiten.

    Onze Deluxe Wellness kamers zijn uitgerust met privé jacuzzi's en bieden een serene ontsnapping van de drukte van het dagelijks leven. Gelegen tussen Amsterdam en Alkmaar, bent u binnen 20 minuten in beide steden.
    
    Perfect voor een romantisch weekend of een wellness break. Geniet van onze uitstekende service, moderne faciliteiten en de unieke rust die een jacuzzi op de kamer biedt in een natuurlijke omgeving.`,
    coordinates: [4.7333, 52.5667], // Akersloot coordinates
    address: 'Geesterweg 1A, 1921 NV Akersloot',
    affiliateLink: 'https://booking.com/van-der-valk-akersloot',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Deluxe Tweepersoonskamer',
        image: '/images/Van der Valk Akersloot.jpg',
        description: 'Ruime deluxe kamer met moderne jacuzzi en comfortabel tweepersoonsbed. Perfect voor een romantisch verblijf in de natuur.',
        features: ['Privé jacuzzi', 'Tweepersoonsbed', 'Flatscreen TV', 'Minibar', 'Gratis WiFi', 'Uitzicht op natuur'],
        priceRange: '€169 - €229',
        affiliateLink: 'https://booking.com/van-der-valk-akersloot-deluxe'
      },
      {
        id: 2,
        name: 'Comfort Tweepersoonskamer',
        image: '/images/Van der Valk Akersloot.jpg',
        description: 'Comfortabele kamer met bubbelbad en alle moderne voorzieningen. Ideaal voor een ontspannen verblijf.',
        features: ['Bubbelbad', 'Tweepersoonsbed', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi', 'Balkon'],
        priceRange: '€149 - €189',
        affiliateLink: 'https://booking.com/van-der-valk-akersloot-comfort'
      }
    ]
  },
  'hotel-restaurant-carlton': {
    id: 7,
    name: 'Hotel-Restaurant Carlton',
    location: 'Den Haag, Zuid-Holland',
    city: 'Den Haag',
    province: 'Zuid-Holland',
    priceRange: '€169 - €249',
    jacuzziType: 'Privé jacuzzi kamer',
    facilities: ['Privé jacuzzi', 'Fine dining restaurant', 'Centrum locatie', 'Business center', 'Gratis WiFi', 'Room service', 'Parkeerservice'],
    rating: 4.4,
    reviewCount: 325,
    heroImage: '/images/Hotel-Restaurant Carlton.jpg',
    description: 'Elegant hotel in het hart van Den Haag met verfijnde jacuzzi kamers en uitstekend restaurant. Perfect gelegen voor zowel zakelijke als romantische verblijven nabij het regeringscentrum.',
    coordinates: [4.3007, 52.0705],
    address: 'Lange Voorhout 27, 2514 EC Den Haag',
    affiliateLink: 'https://booking.com/hotel-restaurant-carlton',
    popularThisMonth: true,
    rooms: [
      {
        id: 1,
        name: 'Carlton Executive Jacuzzi Kamer',
        image: '/images/Hotel-Restaurant Carlton.jpg',
        description: 'Elegante executive kamer met luxe jacuzzi en uitzicht op het Lange Voorhout. Perfecte combinatie van stijl en comfort.',
        features: ['Luxe jacuzzi', 'Lange Voorhout uitzicht', 'Executive amenities', 'Flatscreen TV', 'Premium beddengoed', 'Gratis WiFi'],
        priceRange: '€169 - €219',
        affiliateLink: 'https://booking.com/carlton-executive-jacuzzi'
      },
      {
        id: 2,
        name: 'Carlton Business Suite met Jacuzzi',
        image: '/images/Hotel-Restaurant Carlton.jpg',
        description: 'Ruime business suite met separate woonkamer en jacuzzi. Ideaal voor zakelijke gasten die luxe en ontspanning combineren.',
        features: ['Jacuzzi bad', 'Separate woonkamer', 'Business desk', 'Meeting faciliteiten', 'Premium WiFi', 'Room service'],
        priceRange: '€219 - €249',
        affiliateLink: 'https://booking.com/carlton-business-suite'
      }
    ]
  },
  'stadshotel-den-haag': {
    id: 8,
    name: 'Stadshotel Den Haag',
    location: 'Den Haag, Zuid-Holland',
    city: 'Den Haag',
    province: 'Zuid-Holland',
    priceRange: '€139 - €199',
    jacuzziType: 'Wellness jacuzzi kamer',
    facilities: ['Wellness jacuzzi', 'Fitness center', 'Restaurant', 'Bar', 'Gratis WiFi', 'Parkeergarage', 'Centrum locatie'],
    rating: 4.2,
    reviewCount: 278,
    heroImage: '/images/Stadshotel Den Haag.jpg',
    description: 'Modern stadshotel in Den Haag met comfortabele wellness kamers en jacuzzi faciliteiten. Uitstekende uitvalsbasis voor het verkennen van de hofstad.',
    coordinates: [4.3017, 52.0799],
    address: 'Stationsplein 8, 2515 BX Den Haag',
    affiliateLink: 'https://booking.com/stadshotel-den-haag',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Wellness Comfort Kamer',
        image: '/images/Stadshotel Den Haag.jpg',
        description: 'Comfortabele kamer met wellness jacuzzi en moderne amenities. Perfect voor een ontspannen verblijf in de hofstad.',
        features: ['Wellness jacuzzi', 'Moderne inrichting', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi', 'Stadszicht'],
        priceRange: '€139 - €169',
        affiliateLink: 'https://booking.com/stadshotel-wellness-comfort'
      },
      {
        id: 2,
        name: 'Superior Jacuzzi Kamer',
        image: '/images/Stadshotel Den Haag.jpg',
        description: 'Ruimere superior kamer met extra grote jacuzzi en premium voorzieningen. Ideaal voor een luxere ervaring.',
        features: ['Extra grote jacuzzi', 'Premium amenities', 'Balkon', 'Room service', 'Luxe beddengoed', 'Gratis WiFi'],
        priceRange: '€169 - €199',
        affiliateLink: 'https://booking.com/stadshotel-superior-jacuzzi'
      }
    ]
  },
  'mainport-design-hotel-rotterdam': {
    id: 9,
    name: 'Mainport Design Hotel Rotterdam',
    location: 'Rotterdam, Zuid-Holland',
    city: 'Rotterdam',
    province: 'Zuid-Holland',
    priceRange: '€199 - €329',
    jacuzziType: 'Designer jacuzzi suite',
    facilities: ['Designer jacuzzi', 'Spa center', 'Fine dining', 'Maas uitzicht', 'Fitness', 'Room service', 'Design interieur'],
    rating: 4.6,
    reviewCount: 412,
    heroImage: '/images/Mainport Design Hotel Rotterdam .jpg',
    description: 'Iconisch design hotel aan de Maas met luxe jacuzzi suites en spectaculair uitzicht over Rotterdam. Perfecte combinatie van modern design en wellness.',
    coordinates: [4.4777, 51.9108],
    address: 'Leuvehaven 77, 3011 EA Rotterdam',
    affiliateLink: 'https://booking.com/mainport-design-hotel',
    popularThisMonth: true,
    rooms: [
      {
        id: 1,
        name: 'Design River View Jacuzzi Suite',
        image: '/images/Mainport Design Hotel Rotterdam .jpg',
        description: 'Stijlvolle designer suite met jacuzzi en spectaculair uitzicht over de Maas en Rotterdamse skyline.',
        features: ['Designer jacuzzi', 'Maas uitzicht', 'Design meubilair', 'Skyline zicht', 'Premium amenities', 'Balkon'],
        priceRange: '€199 - €279',
        affiliateLink: 'https://booking.com/mainport-river-view-suite'
      },
      {
        id: 2,
        name: 'Mainport Signature Spa Suite',
        image: '/images/Mainport Design Hotel Rotterdam .jpg',
        description: 'Ultra-luxe spa suite met extra grote jacuzzi en toegang tot het exclusieve spa center. Het ultieme in design en wellness.',
        features: ['Ultra-luxe jacuzzi', 'Spa toegang', 'Butler service', 'Designer interieur', 'Panorama uitzicht', 'Premium facilities'],
        priceRange: '€279 - €329',
        affiliateLink: 'https://booking.com/mainport-signature-spa'
      }
    ]
  },
  'boutique-hotel-corona-den-haag': {
    id: 10,
    name: 'Boutique Hotel Corona Den Haag',
    location: 'Den Haag, Zuid-Holland',
    city: 'Den Haag',
    province: 'Zuid-Holland',
    priceRange: '€159 - €229',
    jacuzziType: 'Boutique jacuzzi kamer',
    facilities: ['Boutique jacuzzi', 'Persoonlijke service', 'Restaurant', 'Lounge bar', 'Gratis WiFi', 'Concierge', 'Historic charm'],
    rating: 4.3,
    reviewCount: 267,
    heroImage: '/images/Boutique Hotel Corona Den Haag.jpg',
    description: 'Charmant boutique hotel in historisch pand met stijlvolle jacuzzi kamers en persoonlijke service. Een unieke ervaring in het hart van Den Haag.',
    coordinates: [4.3147, 52.0767],
    address: 'Buitenhof 39-42, 2513 AH Den Haag',
    affiliateLink: 'https://booking.com/boutique-hotel-corona',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Corona Heritage Jacuzzi Kamer',
        image: '/images/Boutique Hotel Corona Den Haag.jpg',
        description: 'Authentieke kamer in historisch pand met moderne jacuzzi en boutique charme. Perfect voor romantische verblijven.',
        features: ['Historische jacuzzi', 'Authentieke details', 'Boutique styling', 'Flatscreen TV', 'Luxe amenities', 'Gratis WiFi'],
        priceRange: '€159 - €189',
        affiliateLink: 'https://booking.com/corona-heritage-jacuzzi'
      },
      {
        id: 2,
        name: 'Corona Deluxe Suite',
        image: '/images/Boutique Hotel Corona Den Haag.jpg',
        description: 'Ruime deluxe suite met luxe jacuzzi en separate woonkamer. Historische charme met moderne luxe.',
        features: ['Luxe jacuzzi', 'Separate woonkamer', 'Historische details', 'Premium service', 'Lounge toegang', 'Butler service'],
        priceRange: '€189 - €229',
        affiliateLink: 'https://booking.com/corona-deluxe-suite'
      }
    ]
  },
  'van-der-valk-sassenheim-leiden': {
    id: 11,
    name: 'Van der Valk Sassenheim-Leiden',
    location: 'Sassenheim, Zuid-Holland',
    city: 'Sassenheim',
    province: 'Zuid-Holland',
    priceRange: '€149 - €219',
    jacuzziType: 'Wellness jacuzzi kamer',
    facilities: ['Wellness jacuzzi', 'Fitness center', 'Restaurant', 'Bowling', 'Gratis parking', 'Gratis WiFi', 'Business center'],
    rating: 4.1,
    reviewCount: 356,
    heroImage: '/images/Van der Valk Hotel Sassenheim - Leiden 2020.jpg',
    description: 'Comfortabel Van der Valk hotel nabij Leiden met moderne wellness faciliteiten en jacuzzi kamers. Ideaal voor zowel zakelijke als leisure gasten.',
    coordinates: [4.5167, 52.2167],
    address: 'Warmonderweg 8, 2171 AH Sassenheim',
    affiliateLink: 'https://booking.com/van-der-valk-sassenheim',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Van der Valk Comfort Jacuzzi',
        image: '/images/Van der Valk Hotel Sassenheim - Leiden 2020.jpg',
        description: 'Comfortabele kamer met moderne jacuzzi en alle Van der Valk comfort. Perfect voor een ontspannen verblijf.',
        features: ['Moderne jacuzzi', 'Comfort amenities', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi', 'Airconditioning'],
        priceRange: '€149 - €179',
        affiliateLink: 'https://booking.com/valk-sassenheim-comfort'
      },
      {
        id: 2,
        name: 'Van der Valk Superior Wellness',
        image: '/images/Van der Valk Hotel Sassenheim - Leiden 2020.jpg',
        description: 'Superior kamer met extra grote jacuzzi en wellness amenities. Ideaal voor gasten die extra luxe zoeken.',
        features: ['Extra grote jacuzzi', 'Wellness amenities', 'Superior comfort', 'Room service', 'Premium beddengoed', 'Balkon'],
        priceRange: '€179 - €219',
        affiliateLink: 'https://booking.com/valk-sassenheim-superior'
      }
    ]
  },
  'van-der-valk-leiden': {
    id: 113,
    name: 'Van der Valk Leiden',
    location: 'Leiden, Zuid-Holland',
    city: 'Leiden',
    province: 'Zuid-Holland',
    priceRange: '€159 - €229',
    jacuzziType: 'Wellness jacuzzi kamer',
    facilities: ['Wellness jacuzzi', 'Historische locatie', 'Restaurant', 'Fitness', 'Gratis WiFi', 'Business center', 'Centrum nabij'],
    rating: 4.3,
    reviewCount: 287,
    heroImage: '/images/Van der Valk Leiden.jpg',
    description: 'Modern Van der Valk hotel in het hart van Leiden met luxe wellness faciliteiten en jacuzzi kamers. Perfect gelegen nabij de historische binnenstad en universiteit.',
    coordinates: [4.4924, 52.1601],
    address: 'Haagse Schouwweg 14, 2332 KG Leiden',
    affiliateLink: 'https://booking.com/van-der-valk-leiden',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Van der Valk Comfort Jacuzzi',
        image: '/images/Van der Valk Leiden.jpg',
        description: 'Comfortabele kamer met wellness jacuzzi en moderne voorzieningen. Perfect voor een ontspannen verblijf in Leiden.',
        features: ['Wellness jacuzzi', 'Moderne inrichting', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi', 'Stadszicht'],
        priceRange: '€159 - €189',
        affiliateLink: 'https://booking.com/van-der-valk-leiden-comfort'
      },
      {
        id: 2,
        name: 'Van der Valk Superior Wellness',
        image: '/images/Van der Valk Leiden.jpg',
        description: 'Superior kamer met extra grote jacuzzi en premium amenities. Ideaal voor een luxe verblijf in het centrum van Leiden.',
        features: ['Extra grote jacuzzi', 'Premium amenities', 'Balkon', 'Room service', 'Luxe beddengoed', 'Business desk'],
        priceRange: '€189 - €229',
        affiliateLink: 'https://booking.com/van-der-valk-leiden-superior'
      }
    ]
  },
  'van-der-valk-den-haag-wassenaar': {
    id: 114,
    name: 'Van der Valk Den Haag - Wassenaar',
    location: 'Wassenaar, Zuid-Holland',
    city: 'Wassenaar',
    province: 'Zuid-Holland',
    priceRange: '€179 - €269',
    jacuzziType: 'Premium jacuzzi suite',
    facilities: ['Premium jacuzzi', 'Spa faciliteiten', 'Kust nabij', 'Restaurant', 'Wellness', 'Gratis parking', 'Luxe amenities'],
    rating: 4.4,
    reviewCount: 312,
    heroImage: '/images/Van der Valk Den Haag - Wassenaar.jpg',
    description: 'Elegant Van der Valk hotel in Wassenaar met premium jacuzzi suites en spa faciliteiten. Rustige ligging nabij Den Haag en de kust.',
    coordinates: [4.4017, 52.1458],
    address: 'Zijdeweg 54, 2244 BZ Wassenaar',
    affiliateLink: 'https://booking.com/van-der-valk-wassenaar',
    popularThisMonth: true,
    rooms: [
      {
        id: 1,
        name: 'Van der Valk Premium Jacuzzi',
        image: '/images/Van der Valk Den Haag - Wassenaar.jpg',
        description: 'Premium kamer met luxe jacuzzi en elegante inrichting. Perfect voor een stijlvol verblijf nabij de kust.',
        features: ['Premium jacuzzi', 'Elegante inrichting', 'Flatscreen TV', 'Minibar', 'Gratis WiFi', 'Terras'],
        priceRange: '€179 - €219',
        affiliateLink: 'https://booking.com/van-der-valk-wassenaar-premium'
      },
      {
        id: 2,
        name: 'Van der Valk Spa Suite',
        image: '/images/Van der Valk Den Haag - Wassenaar.jpg',
        description: 'Luxe spa suite met extra grote jacuzzi en toegang tot spa faciliteiten. Het ultieme in wellness en comfort.',
        features: ['Extra grote jacuzzi', 'Spa toegang', 'Wellness amenities', 'Separate woonkamer', 'Butler service', 'Premium beddengoed'],
        priceRange: '€219 - €269',
        affiliateLink: 'https://booking.com/van-der-valk-wassenaar-spa'
      }
    ]
  },
  'van-der-valk-den-haag-nootdorp': {
    id: 115,
    name: 'Van der Valk Den Haag - Nootdorp',
    location: 'Nootdorp, Zuid-Holland',
    city: 'Nootdorp',
    province: 'Zuid-Holland',
    priceRange: '€149 - €209',
    jacuzziType: 'Wellness jacuzzi kamer',
    facilities: ['Wellness jacuzzi', 'Modern design', 'Restaurant', 'Bar', 'Fitness', 'Gratis WiFi', 'Business center'],
    rating: 4.2,
    reviewCount: 234,
    heroImage: '/images/Van der Valk Den Haag - Nootdorp.jpg',
    description: 'Comfortabel Van der Valk hotel in Nootdorp met moderne wellness kamers en jacuzzi faciliteiten. Ideale uitvalsbasis voor Den Haag en omgeving.',
    coordinates: [4.3906, 52.0386],
    address: 'Laan van Vredenoord 180, 2271 TK Nootdorp',
    affiliateLink: 'https://booking.com/van-der-valk-nootdorp',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Van der Valk Modern Jacuzzi',
        image: '/images/Van der Valk Den Haag - Nootdorp.jpg',
        description: 'Moderne kamer met wellness jacuzzi en contemporary design. Perfect voor een comfortabel verblijf.',
        features: ['Wellness jacuzzi', 'Modern design', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi', 'Balkon'],
        priceRange: '€149 - €179',
        affiliateLink: 'https://booking.com/van-der-valk-nootdorp-modern'
      },
      {
        id: 2,
        name: 'Van der Valk Business Jacuzzi',
        image: '/images/Van der Valk Den Haag - Nootdorp.jpg',
        description: 'Business kamer met jacuzzi en werkruimte. Ideaal voor zakenreizigers die comfort en wellness combineren.',
        features: ['Business jacuzzi', 'Werkruimte', 'Business desk', 'Meeting faciliteiten', 'Premium WiFi', 'Room service'],
        priceRange: '€179 - €209',
        affiliateLink: 'https://booking.com/van-der-valk-nootdorp-business'
      }
    ]
  },
  'van-der-valk-ridderkerk': {
    id: 116,
    name: 'Van der Valk Ridderkerk',
    location: 'Ridderkerk, Zuid-Holland',
    city: 'Ridderkerk',
    province: 'Zuid-Holland',
    priceRange: '€139 - €199',
    jacuzziType: 'Jacuzzi kamer',
    facilities: ['Jacuzzi kamers', 'Centraal gelegen', 'Restaurant', 'Business center', 'Fitness', 'Gratis parking', 'Modern'],
    rating: 4.1,
    reviewCount: 198,
    heroImage: '/images/Van der Valk Ridderkerk.jpg',
    description: 'Centraal gelegen Van der Valk hotel in Ridderkerk met jacuzzi kamers en uitstekende faciliteiten. Perfect voor zowel business als leisure gasten.',
    coordinates: [4.6073, 51.8706],
    address: 'Rijksstraatweg 480, 2988 BC Ridderkerk',
    affiliateLink: 'https://booking.com/van-der-valk-ridderkerk',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Van der Valk Standard Jacuzzi',
        image: '/images/Van der Valk Ridderkerk.jpg',
        description: 'Standaard kamer met jacuzzi en alle comfort. Uitstekende prijs-kwaliteitverhouding voor een ontspannen verblijf.',
        features: ['Jacuzzi bad', 'Standaard comfort', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi', 'Parkeerplaats'],
        priceRange: '€139 - €169',
        affiliateLink: 'https://booking.com/van-der-valk-ridderkerk-standard'
      },
      {
        id: 2,
        name: 'Van der Valk Comfort Plus',
        image: '/images/Van der Valk Ridderkerk.jpg',
        description: 'Comfort kamer met verbeterde jacuzzi en extra amenities. Perfect voor gasten die wat meer luxe zoeken.',
        features: ['Verbeterde jacuzzi', 'Extra amenities', 'Balkon', 'Room service', 'Premium beddengoed', 'Business facilities'],
        priceRange: '€169 - €199',
        affiliateLink: 'https://booking.com/van-der-valk-ridderkerk-comfort'
      }
    ]
  },
  'van-der-valk-dordrecht': {
    id: 117,
    name: 'Van der Valk Dordrecht',
    location: 'Dordrecht, Zuid-Holland',
    city: 'Dordrecht',
    province: 'Zuid-Holland',
    priceRange: '€169 - €249',
    jacuzziType: 'Luxe jacuzzi suite',
    facilities: ['Luxe jacuzzi suites', 'Wellness centrum', 'Historische stad', 'Restaurant', 'Spa', 'Gratis WiFi', 'Premium service'],
    rating: 4.5,
    reviewCount: 356,
    heroImage: '/images/Van der Valk Dordrecht.jpg',
    description: 'Stijlvol Van der Valk hotel in historisch Dordrecht met luxe jacuzzi suites en wellness centrum. Perfecte combinatie van historie en modern comfort.',
    coordinates: [4.6751, 51.8132],
    address: 'Laan van Europa 1600, 3317 LT Dordrecht',
    affiliateLink: 'https://booking.com/van-der-valk-dordrecht',
    popularThisMonth: true,
    rooms: [
      {
        id: 1,
        name: 'Van der Valk Heritage Jacuzzi',
        image: '/images/Van der Valk Dordrecht.jpg',
        description: 'Luxe kamer met jacuzzi en uitzicht op de historische stad. Perfect voor een romantisch verblijf in Dordrecht.',
        features: ['Luxe jacuzzi', 'Historisch uitzicht', 'Premium inrichting', 'Flatscreen TV', 'Minibar', 'Gratis WiFi'],
        priceRange: '€169 - €209',
        affiliateLink: 'https://booking.com/van-der-valk-dordrecht-heritage'
      },
      {
        id: 2,
        name: 'Van der Valk Wellness Suite',
        image: '/images/Van der Valk Dordrecht.jpg',
        description: 'Ultra-luxe wellness suite met spa jacuzzi en toegang tot wellness centrum. Het ultieme in comfort en ontspanning.',
        features: ['Spa jacuzzi', 'Wellness toegang', 'Suite inrichting', 'Separate woonkamer', 'Butler service', 'Premium facilities'],
        priceRange: '€209 - €249',
        affiliateLink: 'https://booking.com/van-der-valk-dordrecht-wellness'
      }
    ]
  },
  'van-der-valk-wolvega-heerenveen': {
    id: 118,
    name: 'Van der Valk Wolvega - Heerenveen',
    location: 'Wolvega, Friesland',
    city: 'Wolvega',
    province: 'Friesland',
    priceRange: '€149 - €199',
    jacuzziType: 'Comfortabele jacuzzi kamers',
    facilities: ['Jacuzzi kamers', 'Restaurant', 'Wellness faciliteiten', 'Gratis WiFi', 'Parkeren', 'Bar', 'Friese gastvrijheid'],
    rating: 4.3,
    reviewCount: 267,
    heroImage: '/images/van-der-valk-hotel-wolvega.jpg',
    description: 'Comfortabel Van der Valk hotel tussen Wolvega en Heerenveen met moderne jacuzzi kamers en rustige ligging in het Friese landschap. Ideaal voor een ontspannen verblijf in de natuurlijke schoonheid van Friesland.',
    coordinates: [6.0023, 52.8732],
    address: 'Industrieweg 15, 8471 JB Wolvega',
    affiliateLink: 'https://booking.com/van-der-valk-wolvega-heerenveen',
    rooms: [
      {
        id: 1,
        name: 'Van der Valk Friese Comfort',
        image: '/images/van-der-valk-hotel-wolvega.jpg',
        description: 'Comfortabele kamer met jacuzzi en typisch Friese sfeer. Perfect voor een rustig verblijf.',
        features: ['Jacuzzi bad', 'Friese inrichting', 'Landelijke uitzicht', 'Koffie/thee faciliteiten', 'Gratis WiFi', 'Parkeerplaats'],
        priceRange: '€149 - €169',
        affiliateLink: 'https://booking.com/van-der-valk-wolvega-heerenveen-comfort'
      },
      {
        id: 2,
        name: 'Van der Valk Wellness Plus',
        image: '/images/van-der-valk-hotel-wolvega.jpg',
        description: 'Wellness kamer met verbeterde jacuzzi en toegang tot wellness faciliteiten.',
        features: ['Wellness jacuzzi', 'Spa toegang', 'Balkon', 'Room service', 'Premium beddengoed', 'Wellness faciliteiten'],
        priceRange: '€179 - €199',
        affiliateLink: 'https://booking.com/van-der-valk-wolvega-heerenveen-wellness'
      }
    ]
  },
  'van-der-valk-drachten': {
    id: 119,
    name: 'Van der Valk Drachten',
    location: 'Drachten, Friesland',
    city: 'Drachten',
    province: 'Friesland',
    priceRange: '€159 - €219',
    jacuzziType: 'Stijlvolle jacuzzi suites',
    facilities: ['Jacuzzi suites', 'Wellness centrum', 'Restaurant', 'Fitness', 'Gratis WiFi', 'Vergaderzalen', 'Modern design'],
    rating: 4.4,
    reviewCount: 298,
    heroImage: '/images/Van der Valk Drachten.jpg',
    description: 'Modern Van der Valk hotel in Drachten met stijlvolle jacuzzi suites en uitstekende wellness voorzieningen. Perfect gelegen voor verkenning van Friesland met alle moderne comfort.',
    coordinates: [6.0989, 52.9987],
    address: 'Zonnedauw 1, 9202 PA Drachten',
    affiliateLink: 'https://booking.com/van-der-valk-drachten',
    rooms: [
      {
        id: 1,
        name: 'Van der Valk Modern Jacuzzi',
        image: '/images/Van der Valk Drachten.jpg',
        description: 'Modern ingerichte kamer met jacuzzi en eigentijds design. Ideaal voor moderne reizigers.',
        features: ['Design jacuzzi', 'Modern interieur', 'Stad uitzicht', 'Business facilities', 'Gratis WiFi', 'Fitness toegang'],
        priceRange: '€159 - €179',
        affiliateLink: 'https://booking.com/van-der-valk-drachten-modern'
      },
      {
        id: 2,
        name: 'Van der Valk Executive Suite',
        image: '/images/Van der Valk Drachten.jpg',
        description: 'Executive suite met luxe jacuzzi en volledige business voorzieningen.',
        features: ['Luxe jacuzzi', 'Executive inrichting', 'Separate woonkamer', 'Business center', 'Premium service', 'Meeting facilities'],
        priceRange: '€199 - €219',
        affiliateLink: 'https://booking.com/van-der-valk-drachten-executive'
      }
    ]
  },
  'hotel-paleis-stadhouderlijk-hof': {
    id: 120,
    name: 'Hotel-Paleis Stadhouderlijk Hof',
    location: 'Leeuwarden, Friesland',
    city: 'Leeuwarden',
    province: 'Friesland',
    priceRange: '€189 - €289',
    jacuzziType: 'Luxe paleis jacuzzi kamers',
    facilities: ['Luxe jacuzzi kamers', 'Historisch paleis', 'Fine dining', 'Spa behandelingen', 'Gratis WiFi', 'Cultureel centrum', 'Koninklijke ambiance'],
    rating: 4.6,
    reviewCount: 412,
    heroImage: '/images/Hotel-Paleis Stadhouderlijk Hof.jpg',
    description: 'Historisch paleis hotel in het hart van Leeuwarden met luxe jacuzzi kamers en koninklijke ambiance. Unieke combinatie van geschiedenis en moderne wellness in een authentiek Fries paleis.',
    coordinates: [5.7980, 53.2012],
    address: 'Tweebaksmarkt 52, 8911 KZ Leeuwarden',
    affiliateLink: 'https://booking.com/hotel-paleis-stadhouderlijk-hof',
    popularThisMonth: true,
    rooms: [
      {
        id: 1,
        name: 'Paleis Heritage Suite',
        image: '/images/Hotel-Paleis Stadhouderlijk Hof.jpg',
        description: 'Historische suite met jacuzzi in een authentiek paleis setting. Koninklijke ervaring gegarandeerd.',
        features: ['Paleis jacuzzi', 'Historische inrichting', 'Antieke meubels', 'Koninklijke sfeer', 'Butler service', 'Culturele rondleiding'],
        priceRange: '€189 - €229',
        affiliateLink: 'https://booking.com/hotel-paleis-stadhouderlijk-hof-heritage'
      },
      {
        id: 2,
        name: 'Royal Wellness Suite',
        image: '/images/Hotel-Paleis Stadhouderlijk Hof.jpg',
        description: 'Luxe wellness suite met spa jacuzzi en toegang tot alle paleis faciliteiten.',
        features: ['Royal spa jacuzzi', 'Wellness behandelingen', 'Paleis privileges', 'Fine dining', 'Concierge service', 'Premium amenities'],
        priceRange: '€249 - €289',
        affiliateLink: 'https://booking.com/hotel-paleis-stadhouderlijk-hof-royal'
      }
    ]
  },
  'van-der-valk-sneek': {
    id: 121,
    name: 'Van der Valk Sneek',
    location: 'Sneek, Friesland',
    city: 'Sneek',
    province: 'Friesland',
    priceRange: '€169 - €239',
    jacuzziType: 'Panoramische jacuzzi suites',
    facilities: ['Panoramische jacuzzi suites', 'Watersport faciliteiten', 'Restaurant', 'Wellness', 'Gratis WiFi', 'Fietsverhuur', 'Meren uitzicht'],
    rating: 4.5,
    reviewCount: 331,
    heroImage: '/images/Van der Valk Sneek.jpg',
    description: 'Elegant Van der Valk hotel aan de Friese meren met panoramische jacuzzi suites en watersport faciliteiten. Perfecte basis voor een actief of ontspannen verblijf aan het water.',
    coordinates: [5.6581, 53.0321],
    address: 'Burgemeester Rasterhoffweg 1, 8606 KZ Sneek',
    affiliateLink: 'https://booking.com/van-der-valk-sneek',
    rooms: [
      {
        id: 1,
        name: 'Deluxe Tweepersoonskamer met Uitzicht op de Tuin',
        image: '/images/Deluxe Tweepersoonskamer met Uitzicht op de Tuin.jpg',
        description: 'Ruime 44 m² tweepersoonskamer met bubbelbad en prachtig uitzicht op de tuin. Deze luxe kamer is voorzien van airconditioning, een minibar, een terras met tuinzicht en een eigen badkamer met inloopdouche. De kamer heeft 1 groot tweepersoonsbed en comfortabele bedden met een score van 9,2 gebaseerd op 250 beoordelingen.',
        features: ['Bubbelbad', 'Uitzicht op de tuin', 'Balkon', 'Terras', 'Airconditioning', 'Minibar', 'Flatscreen-tv', 'Gratis WiFi', 'Koffiezetapparaat', 'Eigen badkamer', 'Inloopdouche', 'Gratis toiletartikelen', 'Föhn', 'Stopcontact bij het bed', 'Bureau', 'Zithoek', 'Koelkast', 'Satellietzenders', 'Extra lange bedden', 'Laptopkluisje', 'Rolstoeltoegankelijk'],
        priceRange: '€169 - €189',
        affiliateLink: 'https://booking.com/van-der-valk-sneek-water',
        thumbnails: [
          '/images/Deluxe Tweepersoonskamer met Uitzicht op de Tuin - foto1.jpg',
          '/images/Deluxe Tweepersoonskamer met Uitzicht op de Tuin - foto2.jpg'
        ]
      },
      {
        id: 2,
        name: 'Van der Valk Panorama Suite',
        image: '/images/Van der Valk Sneek.jpg',
        description: 'Panoramische suite met spa jacuzzi en 360° uitzicht over de meren.',
        features: ['Panorama spa jacuzzi', '360° uitzicht', 'Wellness faciliteiten', 'Separate woonkamer', 'Premium service', 'Watersport packages'],
        priceRange: '€209 - €239',
        affiliateLink: 'https://booking.com/van-der-valk-sneek-panorama'
      }
    ]
  },
  'van-der-valk-leeuwarden': {
    id: 122,
    name: 'Van der Valk Leeuwarden',
    location: 'Leeuwarden, Friesland',
    city: 'Leeuwarden',
    province: 'Friesland',
    priceRange: '€179 - €249',
    jacuzziType: 'Moderne jacuzzi kamers',
    facilities: ['Moderne jacuzzi kamers', 'Stadscentrum', 'Restaurant', 'Wellness centrum', 'Gratis WiFi', 'Culturele attracties', 'Business facilities'],
    rating: 4.4,
    reviewCount: 387,
    heroImage: '/images/Van der Valk Leeuwarden.jpg',
    description: 'Stadshotel Van der Valk in culturele hoofdstad Leeuwarden met moderne jacuzzi kamers en centrale ligging. Ideaal voor cultuur en wellness combinatie in het hart van Friesland.',
    coordinates: [5.7880, 53.2112],
    address: 'Lynbaan 35, 8941 BR Leeuwarden',
    affiliateLink: 'https://booking.com/van-der-valk-leeuwarden',
    rooms: [
      {
        id: 1,
        name: 'Van der Valk City Comfort',
        image: '/images/Van der Valk Leeuwarden.jpg',
        description: 'Comfort kamer met jacuzzi in het centrum van Leeuwarden. Perfect voor cultuurliefhebbers.',
        features: ['Stad jacuzzi', 'Centrum locatie', 'Culturele toegang', 'Modern comfort', 'Gratis WiFi', 'Walking distance'],
        priceRange: '€179 - €199',
        affiliateLink: 'https://booking.com/van-der-valk-leeuwarden-city'
      },
      {
        id: 2,
        name: 'Van der Valk Cultural Suite',
        image: '/images/Van der Valk Leeuwarden.jpg',
        description: 'Luxe suite met wellness jacuzzi en toegang tot culturele voorzieningen.',
        features: ['Cultural wellness jacuzzi', 'Suite inrichting', 'Museum toegang', 'Concierge service', 'Premium facilities', 'Cultural packages'],
        priceRange: '€219 - €249',
        affiliateLink: 'https://booking.com/van-der-valk-leeuwarden-cultural'
      }
    ]
  },
  'van-der-valk-emmeloord': {
    id: 123,
    name: 'Van der Valk Emmeloord',
    location: 'Emmeloord, Flevoland',
    city: 'Emmeloord',
    province: 'Flevoland',
    priceRange: '€139 - €189',
    jacuzziType: 'Comfortabele jacuzzi kamers',
    facilities: ['Jacuzzi kamers', 'Restaurant', 'Wellness faciliteiten', 'Gratis WiFi', 'Parkeren', 'Bar', 'Poldernatuur'],
    rating: 4.2,
    reviewCount: 245,
    heroImage: '/images/Van der Valk Emmeloord.jpg',
    description: 'Modern Van der Valk hotel in het hart van Flevoland met comfortabele jacuzzi kamers en uitstekende bereikbaarheid. Perfect voor ontspanning in de unieke poldernatuur van de jongste provincie van Nederland.',
    coordinates: [5.7467, 52.7111],
    address: 'Espelerweg 80, 8302 DB Emmeloord',
    affiliateLink: 'https://booking.com/van-der-valk-emmeloord',
    rooms: [
      {
        id: 1,
        name: 'Van der Valk Polder Comfort',
        image: '/images/Van der Valk Emmeloord.jpg',
        description: 'Comfortabele kamer met jacuzzi en uitzicht op de unieke poldernatuur van Flevoland.',
        features: ['Jacuzzi bad', 'Polderuitzicht', 'Modern comfort', 'Koffie/thee faciliteiten', 'Gratis WiFi', 'Parkeerplaats'],
        priceRange: '€139 - €159',
        affiliateLink: 'https://booking.com/van-der-valk-emmeloord-comfort'
      },
      {
        id: 2,
        name: 'Van der Valk Wellness Plus',
        image: '/images/Van der Valk Emmeloord.jpg',
        description: 'Wellness kamer met verbeterde jacuzzi en toegang tot alle wellness faciliteiten.',
        features: ['Wellness jacuzzi', 'Spa toegang', 'Balkon', 'Room service', 'Premium beddengoed', 'Wellness faciliteiten'],
        priceRange: '€169 - €189',
        affiliateLink: 'https://booking.com/van-der-valk-emmeloord-wellness'
      }
    ]
  },
  'van-der-valk-almere': {
    id: 124,
    name: 'Van der Valk Almere',
    location: 'Almere, Flevoland',
    city: 'Almere',
    province: 'Flevoland',
    priceRange: '€159 - €219',
    jacuzziType: 'Luxe jacuzzi suites',
    facilities: ['Luxe jacuzzi suites', 'Wellness centrum', 'Restaurant', 'Fitness', 'Gratis WiFi', 'Business faciliteiten', 'Moderne stad'],
    rating: 4.3,
    reviewCount: 312,
    heroImage: '/images/Van der Valk Almere.jpg',
    description: 'Stijlvol Van der Valk hotel in moderne stad Almere met luxe jacuzzi suites en wellness centrum. Ideale combinatie van stedelijke voorzieningen en natuurlijke rust in de innovatieve planstad.',
    coordinates: [5.2647, 52.3676],
    address: 'Veluwedreef 11, 1327 AE Almere',
    affiliateLink: 'https://booking.com/van-der-valk-almere',
    rooms: [
      {
        id: 1,
        name: 'Van der Valk Modern City',
        image: '/images/Van der Valk Almere.jpg',
        description: 'Moderne kamer met jacuzzi in het hart van Almere. Perfect voor stadse comfort en wellness.',
        features: ['Stads jacuzzi', 'Modern design', 'Stad uitzicht', 'Business facilities', 'Gratis WiFi', 'Fitness toegang'],
        priceRange: '€159 - €179',
        affiliateLink: 'https://booking.com/van-der-valk-almere-city'
      },
      {
        id: 2,
        name: 'Van der Valk Luxury Suite',
        image: '/images/Van der Valk Almere.jpg',
        description: 'Luxe suite met spa jacuzzi en toegang tot alle hotel faciliteiten en wellness centrum.',
        features: ['Luxe spa jacuzzi', 'Suite inrichting', 'Separate woonkamer', 'Wellness centrum', 'Premium service', 'Business packages'],
        priceRange: '€199 - €219',
        affiliateLink: 'https://booking.com/van-der-valk-almere-luxury'
      }
    ]
  },
  'landgoed-hotel-renesse': {
    id: 131,
    name: 'Landgoed Hotel Renesse',
    location: 'Renesse, Zeeland',
    city: 'Renesse',
    province: 'Zeeland',
    priceRange: '€180 - €320',
    jacuzziType: 'Luxe suite met privé jacuzzi',
    facilities: ['Privé jacuzzi', 'Wellness faciliteiten', 'Strand nabij', 'Restaurant', 'Bar', 'Gratis WiFi', 'Fietsverhuur'],
    rating: 4.7,
    reviewCount: 450,
    heroImage: '/images/Landgoed Hotel Renesse.jpg',
    description: `Landgoed Hotel Renesse is een prachtig hotel gelegen op een ruim landgoed nabij de Zeeuwse kust. Dit luxe hotel biedt suites met privé jacuzzi's, perfect voor een romantisch uitje of een ontspannen wellness weekend. Geniet van de rust en ruimte van het landgoed, de nabijheid van het strand en de uitstekende service.`,
    coordinates: [3.7744, 51.7289], // Approximate coordinates for Renesse
    address: 'Roelandsweg 1, 4325 CR Renesse',
    affiliateLink: 'https://booking.com/landgoed-hotel-renesse',
    popularThisMonth: true,
    rooms: [
      {
        id: 1,
        name: 'Landgoed Jacuzzi Suite',
        image: '/images/Landgoed Hotel Renesse.jpg',
        description: 'Ruime suite met privé jacuzzi, kingsize bed en uitzicht op het landgoed. Ideaal voor een romantisch verblijf.',
        features: ['Privé jacuzzi', 'Kingsize bed', 'Uitzicht op landgoed', 'Minibar', 'Flatscreen TV', 'Gratis WiFi'],
        priceRange: '€180 - €250',
        affiliateLink: 'https://booking.com/landgoed-hotel-renesse-jacuzzi-suite'
      },
      {
        id: 2,
        name: 'Wellness Cottage met Jacuzzi',
        image: '/images/Landgoed Hotel Renesse.jpg',
        description: 'Vrijstaande cottage met eigen wellness faciliteiten, inclusief een ruime jacuzzi en sauna.',
        features: ['Privé jacuzzi', 'Sauna', 'Vrijstaand', 'Tuin', 'Keuken', 'Gratis parkeren'],
        priceRange: '€250 - €320',
        affiliateLink: 'https://booking.com/landgoed-hotel-renesse-wellness-cottage'
      }
    ]
  },
  'van-der-valk-goes': {
    id: 132,
    name: 'Van der Valk Goes',
    location: 'Goes, Zeeland',
    city: 'Goes',
    province: 'Zeeland',
    priceRange: '€150 - €280',
    jacuzziType: 'Luxe wellness suite met jacuzzi',
    facilities: ['Wellness centrum', 'Restaurant', 'Bar', 'Fitness', 'Gratis WiFi', 'Gratis Parkeren', 'Vergaderzalen'],
    rating: 4.5,
    reviewCount: 380,
    heroImage: '/images/Van der Valk - Goes.jpg',
    description: `Van der Valk Goes is een modern hotel in het hart van Zeeland, perfect voor een ontspannen verblijf met luxe jacuzzi suites. Geniet van de Zeeuwse gastvrijheid, de nabijheid van historische steden en de prachtige kustlijn.`,
    coordinates: [3.8924, 51.4965], // Approximate coordinates for Goes
    address: 'Oostmolenweg 10, 4461 JK Goes',
    affiliateLink: 'https://booking.com/van-der-valk-goes',
    popularThisMonth: true,
    rooms: [
      {
        id: 1,
        name: 'Deluxe Jacuzzi Kamer',
        image: '/images/Van der Valk - Goes.jpg',
        description: 'Comfortabele deluxe kamer met privé jacuzzi en moderne voorzieningen.',
        features: ['Privé jacuzzi', 'Modern design', 'Kingsize bed', 'Minibar', 'Flatscreen TV', 'Gratis WiFi'],
        priceRange: '€150 - €210',
        affiliateLink: 'https://booking.com/van-der-valk-goes-deluxe'
      },
      {
        id: 2,
        name: 'Wellness Suite Goes',
        image: '/images/Van der Valk - Goes.jpg',
        description: 'Ruime wellness suite met extra grote jacuzzi, sauna en aparte woonkamer.',
        features: ['Extra grote jacuzzi', 'Sauna', 'Separate woonkamer', 'Wellness toegang', 'Premium service', 'Balkon'],
        priceRange: '€220 - €280',
        affiliateLink: 'https://booking.com/van-der-valk-goes-wellness-suite'
      }
    ]
  },
  'van-der-valk-middelburg': {
    id: 133,
    name: 'Van der Valk Middelburg',
    location: 'Middelburg, Zeeland',
    city: 'Middelburg',
    province: 'Zeeland',
    priceRange: '€160 - €290',
    jacuzziType: 'Stijlvolle jacuzzi suites',
    facilities: ['Historisch centrum nabij', 'Restaurant', 'Bar', 'Fitness', 'Gratis WiFi', 'Parkeren', 'Wellness'],
    rating: 4.6,
    reviewCount: 410,
    heroImage: '/images/Van-der-Valk-Middelburg.jpg',
    description: `Van der Valk Middelburg biedt een stijlvol verblijf in de historische hoofdstad van Zeeland, met luxe jacuzzi suites. Ontdek de rijke geschiedenis van Middelburg en geniet van de comfortabele faciliteiten van het hotel.`,
    coordinates: [3.6148, 51.5034], // Approximate coordinates for Middelburg
    address: 'Paukenweg 1, 4337 WH Middelburg',
    affiliateLink: 'https://booking.com/van-der-valk-middelburg',
    popularThisMonth: true,
    rooms: [
      {
        id: 1,
        name: 'Middelburg Jacuzzi Kamer',
        image: '/images/Van-der-Valk-Middelburg.jpg',
        description: 'Comfortabele kamer met jacuzzi en uitzicht op de stad.',
        features: ['Jacuzzi bad', 'Stad uitzicht', 'Modern comfort', 'Minibar', 'Flatscreen TV', 'Gratis WiFi'],
        priceRange: '€160 - €220',
        affiliateLink: 'https://booking.com/van-der-valk-middelburg-jacuzzi-kamer'
      },
      {
        id: 2,
        name: 'Historische Wellness Suite',
        image: '/images/Van-der-Valk-Middelburg.jpg',
        description: 'Ruime wellness suite met luxe jacuzzi, separate woonkamer en historische accenten.',
        features: ['Luxe jacuzzi', 'Separate woonkamer', 'Historische details', 'Wellness toegang', 'Premium beddengoed', 'Balkon'],
        priceRange: '€230 - €290',
        affiliateLink: 'https://booking.com/van-der-valk-middelburg-historische-wellness-suite'
      }
    ]
  },
  'fletcher-hotel-restaurant-de-zeegser-duinen': {
    id: 125,
    name: 'Fletcher Hotel-Restaurant De Zeegser Duinen',
    location: 'Emmen, Drenthe',
    city: 'Emmen',
    province: 'Drenthe',
    priceRange: '€129 - €179',
    jacuzziType: 'Comfortabele jacuzzi kamers',
    facilities: ['Jacuzzi kamers', 'Restaurant', 'Natuuromgeving', 'Gratis WiFi', 'Parkeren', 'Wandelpaden', 'Drentse natuur'],
    rating: 4.1,
    reviewCount: 198,
    heroImage: '/images/Fletcher Hotel-Restaurant De Zeegser Duinen.jpg',
    description: 'Prachtig Fletcher hotel gelegen tussen de karakteristieke Zeegser Duinen met comfortabele jacuzzi kamers en natuurlijke omgeving. Perfect voor een ontspannen verblijf in de unieke natuur van Drenthe.',
    coordinates: [6.8978, 52.7845],
    address: 'Zeegserduinen 5, 7812 AA Emmen',
    affiliateLink: 'https://booking.com/fletcher-hotel-de-zeegser-duinen',
    rooms: [
      {
        id: 1,
        name: 'Fletcher Drenthe Comfort',
        image: '/images/Fletcher Hotel-Restaurant De Zeegser Duinen.jpg',
        description: 'Comfortabele kamer met jacuzzi en uitzicht op de prachtige Zeegser Duinen.',
        features: ['Jacuzzi bad', 'Natuur uitzicht', 'Drentse sfeer', 'Koffie/thee faciliteiten', 'Gratis WiFi', 'Parkeerplaats'],
        priceRange: '€129 - €149',
        affiliateLink: 'https://booking.com/fletcher-hotel-de-zeegser-duinen-comfort'
      },
      {
        id: 2,
        name: 'Fletcher Nature Plus',
        image: '/images/Fletcher Hotel-Restaurant De Zeegser Duinen.jpg',
        description: 'Verbeterde kamer met wellness jacuzzi en directe toegang tot wandelpaden.',
        features: ['Wellness jacuzzi', 'Natuur toegang', 'Wandelpaden', 'Room service', 'Premium beddengoed', 'Balkon'],
        priceRange: '€159 - €179',
        affiliateLink: 'https://booking.com/fletcher-hotel-de-zeegser-duinen-nature'
      }
    ]
  },
  'hotel-restaurant-langewold': {
    id: 126,
    name: 'Hotel-Restaurant Langewold',
    location: 'Assen, Drenthe',
    city: 'Assen',
    province: 'Drenthe',
    priceRange: '€119 - €169',
    jacuzziType: 'Traditionele jacuzzi kamers',
    facilities: ['Jacuzzi kamers', 'Traditioneel restaurant', 'Lokale specialiteiten', 'Gratis WiFi', 'Landelijke rust', 'Drentse gastvrijheid'],
    rating: 4.0,
    reviewCount: 156,
    heroImage: '/images/Hotel-Restaurant Langewold.jpg',
    description: 'Authentiek hotel-restaurant in het hart van Drenthe met traditionele jacuzzi kamers en lokale gastvrijheid. Ideaal voor gasten die zoeken naar rust en authentieke Drentse ervaring.',
    coordinates: [6.5606, 52.9957],
    address: 'Langewold 12, 9401 HJ Assen',
    affiliateLink: 'https://booking.com/hotel-restaurant-langewold',
    rooms: [
      {
        id: 1,
        name: 'Langewold Traditional',
        image: '/images/Hotel-Restaurant Langewold.jpg',
        description: 'Traditionele kamer met jacuzzi en authentieke Drentse inrichting.',
        features: ['Traditionele jacuzzi', 'Drentse inrichting', 'Landelijke rust', 'Lokale charme', 'Gratis WiFi', 'Ontbijt'],
        priceRange: '€119 - €139',
        affiliateLink: 'https://booking.com/hotel-restaurant-langewold-traditional'
      },
      {
        id: 2,
        name: 'Langewold Superior',
        image: '/images/Hotel-Restaurant Langewold.jpg',
        description: 'Superior kamer met verbeterde jacuzzi en extra comfort in landelijke setting.',
        features: ['Superior jacuzzi', 'Extra comfort', 'Landelijke sfeer', 'Room service', 'Premium voorzieningen', 'Tuinzicht'],
        priceRange: '€149 - €169',
        affiliateLink: 'https://booking.com/hotel-restaurant-langewold-superior'
      }
    ]
  },
  'wellness-hotel-de-hunzebergen': {
    id: 127,
    name: 'Wellness-Hotel De Hunzebergen',
    location: 'Dwingeloo, Drenthe',
    city: 'Dwingeloo',
    province: 'Drenthe',
    priceRange: '€189 - €289',
    jacuzziType: 'Premium jacuzzi suites',
    facilities: ['Premium jacuzzi suites', 'Uitgebreide spa', 'Wellness centrum', 'Massage behandelingen', 'Natuur wandelingen', 'Fine dining'],
    rating: 4.5,
    reviewCount: 287,
    heroImage: '/images/Wellness-Hotel De Hunzebergen.jpg',
    description: 'Luxe wellness hotel gelegen aan de Hunzebergen met uitgebreide spa faciliteiten en premium jacuzzi suites. Perfect voor een complete wellness ervaring in de prachtige natuur van Drenthe.',
    coordinates: [6.3667, 52.8333],
    address: 'Hunzebergweg 8, 7991 PD Dwingeloo',
    affiliateLink: 'https://booking.com/wellness-hotel-de-hunzebergen',
    popularThisMonth: true,
    rooms: [
      {
        id: 1,
        name: 'Hunzebergen Wellness Suite',
        image: '/images/Wellness-Hotel De Hunzebergen.jpg',
        description: 'Luxe wellness suite met premium jacuzzi en toegang tot alle spa faciliteiten.',
        features: ['Premium spa jacuzzi', 'Wellness toegang', 'Massage faciliteiten', 'Natuur balkon', 'Butler service', 'Fine dining'],
        priceRange: '€189 - €229',
        affiliateLink: 'https://booking.com/wellness-hotel-de-hunzebergen-wellness'
      },
      {
        id: 2,
        name: 'Hunzebergen Royal Suite',
        image: '/images/Wellness-Hotel De Hunzebergen.jpg',
        description: 'Royal suite met exclusieve jacuzzi en privé wellness behandelingen.',
        features: ['Exclusieve jacuzzi', 'Privé wellness', 'Separate woonkamer', 'Personal trainer', 'Gourmet dining', 'Natuur wandelingen'],
        priceRange: '€249 - €289',
        affiliateLink: 'https://booking.com/wellness-hotel-de-hunzebergen-royal'
      }
    ]
  },
  'van-der-valk-emmen': {
    id: 128,
    name: 'Van der Valk Emmen',
    location: 'Emmen, Drenthe',
    city: 'Emmen',
    province: 'Drenthe',
    priceRange: '€149 - €199',
    jacuzziType: 'Stijlvolle jacuzzi kamers',
    facilities: ['Stijlvolle jacuzzi kamers', 'Restaurant', 'Bar', 'Fitness', 'Gratis WiFi', 'Business center'],
    rating: 4.2,
    reviewCount: 245,
    heroImage: '/images/Van der Valk Emmen.jpg',
    description: 'Modern Van der Valk hotel in Emmen met stijlvolle jacuzzi kamers en alle moderne faciliteiten. Uitstekende uitvalsbasis voor het verkennen van Drenthe en nabijgelegen attracties.',
    coordinates: [6.9065, 52.7891],
    address: 'Noordbargeres 3, 7812 AA Emmen',
    affiliateLink: 'https://booking.com/van-der-valk-emmen',
    rooms: [
      {
        id: 1,
        name: 'Van der Valk Emmen Standard',
        image: '/images/Van der Valk Emmen.jpg',
        description: 'Moderne standaard kamer met jacuzzi en alle comfort voor een aangenaam verblijf.',
        features: ['Moderne jacuzzi', 'Stijlvol design', 'Stad uitzicht', 'Business facilities', 'Gratis WiFi', 'Fitness toegang'],
        priceRange: '€149 - €169',
        affiliateLink: 'https://booking.com/van-der-valk-emmen-standard'
      },
      {
        id: 2,
        name: 'Van der Valk Emmen Superior',
        image: '/images/Van der Valk Emmen.jpg',
        description: 'Superior kamer met luxe jacuzzi en extra voorzieningen voor meer comfort.',
        features: ['Luxe jacuzzi', 'Superior comfort', 'Balkon', 'Room service', 'Premium amenities', 'Business lounge'],
        priceRange: '€179 - €199',
        affiliateLink: 'https://booking.com/van-der-valk-emmen-superior'
      }
    ]
  },
  'landgoed-de-uitkijk': {
    id: 129,
    name: 'Landgoed de Uitkijk',
    location: 'Hellendoorn, Overijssel',
    city: 'Hellendoorn',
    province: 'Overijssel',
    priceRange: '€179 - €249',
    jacuzziType: 'Luxe jacuzzi suites',
    facilities: ['Luxe jacuzzi suites', 'Landgoed omgeving', 'Wellness centrum', 'Fine dining', 'Historische charme', 'Natuur wandelingen'],
    rating: 4.4,
    reviewCount: 312,
    heroImage: '/images/Landgoed de Uitkijk.jpg',
    description: 'Prachtig landgoedhotel gelegen op een historisch landgoed met luxe jacuzzi suites en uitgebreide wellness faciliteiten. Perfect voor een romantisch verblijf in de rijke natuur van Overijssel.',
    coordinates: [6.4208, 52.3858],
    address: 'Landgoedweg 15, 7447 GK Hellendoorn',
    affiliateLink: 'https://booking.com/landgoed-de-uitkijk',
    popularThisMonth: true,
    rooms: [
      {
        id: 1,
        name: 'Landgoed Heritage Suite',
        image: '/images/Landgoed de Uitkijk.jpg',
        description: 'Historische suite met luxe jacuzzi en uitzicht op het prachtige landgoed.',
        features: ['Heritage jacuzzi', 'Landgoed uitzicht', 'Historische details', 'Fine dining access', 'Natuur terrassen', 'Wellness toegang'],
        priceRange: '€179 - €219',
        affiliateLink: 'https://booking.com/landgoed-de-uitkijk-heritage'
      },
      {
        id: 2,
        name: 'Landgoed Premium Suite',
        image: '/images/Landgoed de Uitkijk.jpg',
        description: 'Premium suite met wellness jacuzzi en exclusieve toegang tot landgoed faciliteiten.',
        features: ['Premium wellness jacuzzi', 'Exclusieve toegang', 'Separate woonkamer', 'Personal butler', 'Private dining', 'Wandelpaden'],
        priceRange: '€219 - €249',
        affiliateLink: 'https://booking.com/landgoed-de-uitkijk-premium'
      }
    ]
  },
  'theaterhotel-almelo': {
    id: 130,
    name: 'Theaterhotel Almelo',
    location: 'Almelo, Overijssel',
    city: 'Almelo',
    province: 'Overijssel',
    priceRange: '€139 - €189',
    jacuzziType: 'Culturele jacuzzi kamers',
    facilities: ['Jacuzzi kamers', 'Theater toegang', 'Culturele activiteiten', 'Centrum locatie', 'Restaurant', 'Gratis WiFi'],
    rating: 4.1,
    reviewCount: 198,
    heroImage: '/images/Theaterhotel Almelo.jpg',
    description: 'Uniek theaterhotel in het centrum van Almelo met stijlvolle jacuzzi kamers en culturele ambiance. Een perfect verblijf waar theater, cultuur en luxe wellness samenkomen.',
    coordinates: [6.6591, 52.3561],
    address: 'Theaterplein 1, 7607 AS Almelo',
    affiliateLink: 'https://booking.com/theaterhotel-almelo',
    rooms: [
      {
        id: 1,
        name: 'Theater Standard',
        image: '/images/Theaterhotel Almelo.jpg',
        description: 'Comfortable kamer met jacuzzi en theater thema voor een culturele ervaring.',
        features: ['Theater jacuzzi', 'Culturele inrichting', 'Theater toegang', 'Centrum locatie', 'Restaurant toegang', 'WiFi'],
        priceRange: '€139 - €159',
        affiliateLink: 'https://booking.com/theaterhotel-almelo-standard'
      },
      {
        id: 2,
        name: 'Theater Deluxe',
        image: '/images/Theaterhotel Almelo.jpg',
        description: 'Deluxe kamer met wellness jacuzzi en exclusieve theater faciliteiten.',
        features: ['Deluxe wellness jacuzzi', 'VIP theater toegang', 'Cultural concierge', 'Premium inrichting', 'Room service', 'Balkon'],
        priceRange: '€169 - €189',
        affiliateLink: 'https://booking.com/theaterhotel-almelo-deluxe'
      }
    ]
  },
  'zuiderduin-beachhotel': {
    id: 134,
    name: 'Zuiderduin Beachhotel',
    location: 'Westkapelle, Zeeland',
    city: 'Westkapelle',
    province: 'Zeeland',
    priceRange: '€170 - €300',
    jacuzziType: 'Luxe suite met zeezicht en jacuzzi',
    facilities: ['Zeezicht jacuzzi', 'Wellness faciliteiten', 'Direct aan strand', 'Restaurants', 'Bars', 'Zwembad', 'Gratis WiFi'],
    rating: 4.6,
    reviewCount: 520,
    heroImage: '/images/zuiderduin beachhotel.jpg',
    description: `Zuiderduin Beachhotel in Westkapelle biedt luxe suites met privé jacuzzi en een adembenemend uitzicht op de Noordzee. Perfect voor een romantische strandvakantie of een ontspannen wellness break aan de Zeeuwse kust.`,
    coordinates: [3.4560, 51.5298], // Approximate coordinates for Westkapelle
    address: 'Duinweg 20, 4361 EE Westkapelle',
    affiliateLink: 'https://booking.com/zuiderduin-beachhotel',
    popularThisMonth: true,
    rooms: [
      {
        id: 1,
        name: 'Zeezicht Jacuzzi Suite',
        image: '/images/zuiderduin beachhotel.jpg',
        description: 'Luxe suite met privé jacuzzi, kingsize bed en direct zeezicht. Ideaal voor een romantisch verblijf aan het strand.',
        features: ['Privé jacuzzi', 'Zeezicht', 'Kingsize bed', 'Balkon', 'Minibar', 'Flatscreen TV', 'Gratis WiFi'],
        priceRange: '€170 - €240',
        affiliateLink: 'https://booking.com/zuiderduin-beachhotel-zeezicht-suite'
      },
      {
        id: 2,
        name: 'Wellness Familie Kamer',
        image: '/images/zuiderduin beachhotel.jpg',
        description: 'Ruime familiekamer met jacuzzi en aparte slaapkamers, perfect voor een gezinsvakantie met wellness.',
        features: ['Jacuzzi bad', 'Familiekamer', 'Aparte slaapkamers', 'Kinderfaciliteiten', 'Dichtbij strand', 'Gratis parkeren'],
        priceRange: '€230 - €300',
        affiliateLink: 'https://booking.com/zuiderduin-beachhotel-familie-kamer'
      }
    ]
  },
  'wellness-hotel-trivium': {
    id: 29,
    name: 'Wellness-Hotel Trivium',
    location: 'Tilburg, Noord-Brabant',
    city: 'Tilburg',
    province: 'Noord-Brabant',
    priceRange: '€195 - €295',
    jacuzziType: 'Privé wellness jacuzzi',
    facilities: ['Uitgebreide spa', 'Privé Jacuzzi', 'Zwembad', 'Sauna', 'Massages', 'Fitness', 'Restaurant', 'Parking'],
    rating: 4.7,
    reviewCount: 287,
    heroImage: '/images/Wellness-Hotel Trivium.jpg',
    description: `Wellness-Hotel Trivium in Tilburg is een moderne oase van rust en ontspanning in het hart van Noord-Brabant. Dit geavanceerde wellness hotel met jacuzzi combineert luxe accommodatie met uitgebreide spa faciliteiten voor de ultieme ontspanningservaring.

    Het hotel beschikt over moderne kamers en suites uitgerust met privé jacuzzi's en alle comfort die u verwacht. De uitgebreide spa faciliteiten omvatten een verwarmd zwembad, verschillende sauna's, een fitness center en een breed scala aan wellness behandelingen.
    
    Perfect gelegen voor zowel zakelijke als romantische verblijven. Ontdek Tilburg overdag en kom tot rust in uw luxueuze wellness accommodatie. De ideale combinatie van stadsbelevenis en wellness ontspanning in een moderne, sfeervolle omgeving.`,
    coordinates: [5.0913, 51.5555], // Tilburg coordinates
    address: 'Spoorlaan 302, 5038 CB Tilburg',
    affiliateLink: 'https://booking.com/wellness-hotel-trivium',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Wellness Suite',
        image: '/images/Wellness-Hotel Trivium.jpg',
        description: 'Luxueuze wellness suite met privé jacuzzi en moderne inrichting. Perfect voor een romantische wellness ervaring.',
        features: ['Privé jacuzzi', 'Moderne inrichting', 'Separate woonkamer', 'King-size bed', 'Minibar', 'Spa toegang'],
        priceRange: '€245 - €295',
        affiliateLink: 'https://booking.com/wellness-hotel-trivium-suite'
      },
      {
        id: 2,
        name: 'Deluxe Jacuzzi Kamer',
        image: '/images/Wellness-Hotel Trivium.jpg',
        description: 'Ruime deluxe kamer met jacuzzi en alle moderne voorzieningen. Ideaal voor een comfortabel wellness verblijf.',
        features: ['Jacuzzi bad', 'Moderne badkamer', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi', 'Room service'],
        priceRange: '€195 - €245',
        affiliateLink: 'https://booking.com/wellness-hotel-trivium-deluxe'
      }
    ]
  },
  'hotel-restaurant-spaarnwoude': {
    id: 15,
    name: 'Hotel-Restaurant Spaarnwoude',
    location: 'Spaarnwoude, Noord-Holland',
    city: 'Spaarnwoude',
    province: 'Noord-Holland',
    priceRange: '€145 - €225',
    jacuzziType: 'Intieme jacuzzi faciliteiten',
    facilities: ['Jacuzzi', 'Restaurant', 'Natuur', 'Romantisch', 'Parking', 'Terras', 'Persoonlijke Service'],
    rating: 4.2,
    reviewCount: 156,
    heroImage: '/images/Hotel-Restaurant Spaarnwoude.jpg',
    description: `Hotel-Restaurant Spaarnwoude is een charmant boetiekhotel gelegen in de prachtige natuurrijke omgeving van Spaarnwoude, Noord-Holland. Dit intieme hotel met jacuzzi faciliteiten biedt de perfecte combinatie van rust, natuur en romantiek.

    Het hotel beschikt over stijlvolle kamers uitgerust met moderne jacuzzi faciliteiten en een uitstekend restaurant dat bekend staat om zijn culinaire hoogstandjes. De natuurlijke omgeving van Spaarnwoude zorgt voor een ontspannen sfeer, terwijl de persoonlijke service zorgt voor een onvergetelijke ervaring.
    
    Perfect voor een romantisch weekend weg of een ontspannen verblijf in de natuur. Geniet van de rust en stilte van het Nederlandse platteland terwijl u ontspant in uw privé jacuzzi. Een verborgen parel in het hart van Noord-Holland.`,
    coordinates: [4.7122, 52.3702], // Spaarnwoude coordinates
    address: 'Spaarnwoude 123, 2061 KL Spaarnwoude',
    affiliateLink: 'https://booking.com/spaarnwoude-hotel',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Romantische Suite',
        image: '/images/Hotel-Restaurant Spaarnwoude.jpg',
        description: 'Intieme romantische suite met jacuzzi en natuurlijk uitzicht. Perfect voor een romantisch weekend in de natuur.',
        features: ['Privé jacuzzi', 'Natuurlijk uitzicht', 'Romantische inrichting', 'King-size bed', 'Minibar', 'Terras'],
        priceRange: '€195 - €225',
        affiliateLink: 'https://booking.com/spaarnwoude-hotel-romantische-suite'
      },
      {
        id: 2,
        name: 'Deluxe Jacuzzi Kamer',
        image: '/images/Hotel-Restaurant Spaarnwoude.jpg',
        description: 'Ruime deluxe kamer met jacuzzi en moderne voorzieningen. Ideaal voor een comfortabel verblijf in de natuur.',
        features: ['Jacuzzi bad', 'Moderne badkamer', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi', 'Parking'],
        priceRange: '€145 - €185',
        affiliateLink: 'https://booking.com/spaarnwoude-hotel-deluxe'
      }
    ]
  },
  'van-der-valk-wieringermeer': {
    id: 16,
    name: 'Van der Valk Wieringermeer',
    location: 'Wieringermeer, Noord-Holland',
    city: 'Wieringermeer',
    province: 'Noord-Holland',
    priceRange: '€159 - €245',
    jacuzziType: 'Luxe jacuzzi suites',
    facilities: ['Spa', 'Jacuzzi', 'Wellness', 'Restaurant', 'Fitness', 'Gratis WiFi', 'Bar', 'Natuur'],
    rating: 4.4,
    reviewCount: 234,
    heroImage: '/images/Van der Valk Wieringermeer.jpg',
    description: `Van der Valk Wieringermeer is een modern en luxueus hotel gelegen in de prachtige Wieringermeer polder van Noord-Holland. Dit hotel met jacuzzi faciliteiten biedt de perfecte combinatie van moderne comfort en de rustgevende Nederlandse poldernatuur.

    Het hotel beschikt over luxe suites uitgerust met moderne jacuzzi faciliteiten en een uitgebreide spa. De Wieringermeer omgeving zorgt voor een unieke ervaring met weidse uitzichten over de typisch Nederlandse polderlandschappen. Het hotel heeft een uitstekend restaurant en moderne wellness faciliteiten.
    
    Perfect voor een ontspannen weekend weg of een romantisch verblijf in de natuur. Geniet van de rust en ruimte van de Nederlandse polders terwijl u ontspant in uw luxueuze jacuzzi suite. Een moderne oase van rust in het hart van Noord-Holland.`,
    coordinates: [5.0123, 52.8500], // Wieringermeer coordinates
    address: 'Wieringermeer 456, 1771 GG Wieringermeer',
    affiliateLink: 'https://booking.com/vandervalk-wieringermeer',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Luxe Jacuzzi Suite',
        image: '/images/Van der Valk Wieringermeer.jpg',
        description: 'Ruime luxe suite met privé jacuzzi en panoramisch uitzicht over de polder. Perfect voor een romantisch verblijf.',
        features: ['Privé jacuzzi', 'Polder uitzicht', 'Separate woonkamer', 'King-size bed', 'Minibar', 'Spa toegang'],
        priceRange: '€215 - €245',
        affiliateLink: 'https://booking.com/vandervalk-wieringermeer-luxe-suite'
      },
      {
        id: 2,
        name: 'Deluxe Wellness Kamer',
        image: '/images/Van der Valk Wieringermeer.jpg',
        description: 'Moderne deluxe kamer met jacuzzi en alle comfort. Ideaal voor een ontspannen verblijf in de natuur.',
        features: ['Jacuzzi bad', 'Moderne badkamer', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi', 'Fitness toegang'],
        priceRange: '€159 - €195',
        affiliateLink: 'https://booking.com/vandervalk-wieringermeer-deluxe'
      }
    ]
  },
  'hotel-restaurant-nautisch-kwartier': {
    id: 17,
    name: 'Hotel-Restaurant Nautisch Kwartier',
    location: 'Huizen, Noord-Holland',
    city: 'Huizen',
    province: 'Noord-Holland',
    priceRange: '€175 - €245',
    jacuzziType: 'Maritieme jacuzzi faciliteiten',
    facilities: ['Nautisch Theme', 'Jacuzzi', 'Restaurant', 'Gooimeer locatie', 'Uniek design', 'Wellness', 'Bar'],
    rating: 4.4,
    reviewCount: 198,
    heroImage: '/images/Hotel-Restaurant Nautisch Kwartier.jpg',
    description: `Hotel-Restaurant Nautisch Kwartier is een uniek maritiem hotel gelegen aan het prachtige Gooimeer in Huizen. Dit bijzondere hotel met jacuzzi faciliteiten biedt een authentieke nautische ervaring voor zeeliefhebbers en iedereen die houdt van maritieme charme.

    Het hotel is volledig ingericht in nautische stijl met originele scheepsdetails, touwen en maritieme decoraties. De kamers zijn uitgerust met moderne jacuzzi faciliteiten die perfect combineren met het unieke thema. Het restaurant serveert verse visgerechten en maritieme specialiteiten met uitzicht op het Gooimeer.
    
    Perfect gelegen voor een unieke ervaring aan het water. Geniet van de maritieme sfeer terwijl u ontspant in uw nautisch ingerichte kamer met jacuzzi. Een bijzondere combinatie van geschiedenis, charme en moderne comfort aan de rand van het Gooimeer.`,
    coordinates: [5.2411, 52.2992], // Huizen coordinates
    address: 'Mastspoor 1, 1271 GL Huizen',
    affiliateLink: 'https://booking.com/nautisch-kwartier',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Kapitein Suite',
        image: '/images/Hotel-Restaurant Nautisch Kwartier.jpg',
        description: 'Luxueuze kapitein suite met maritieme inrichting en privé jacuzzi. Perfect voor een unieke nautische ervaring.',
        features: ['Privé jacuzzi', 'Nautische inrichting', 'Gooimeer uitzicht', 'King-size bed', 'Minibar', 'Maritieme details'],
        priceRange: '€215 - €245',
        affiliateLink: 'https://booking.com/nautisch-kwartier-kapitein-suite'
      },
      {
        id: 2,
        name: 'Matroos Jacuzzi Kamer',
        image: '/images/Hotel-Restaurant Nautisch Kwartier.jpg',
        description: 'Stijlvolle matroos kamer met jacuzzi en authentieke nautische details. Ideaal voor een maritieme ervaring.',
        features: ['Jacuzzi bad', 'Nautische details', 'Scheepsdecoratie', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi'],
        priceRange: '€175 - €205',
        affiliateLink: 'https://booking.com/nautisch-kwartier-matroos-kamer'
      }
    ]
  },
  'hotel-restaurant-de-cooghen': {
    id: 18,
    name: 'Hotel-Restaurant De Cooghen',
    location: 'De Koog, Noord-Holland',
    city: 'De Koog',
    province: 'Noord-Holland',
    priceRange: '€165 - €225',
    jacuzziType: 'Traditionele jacuzzi faciliteiten',
    facilities: ['Fine Dining', 'Jacuzzi', 'Traditioneel', 'Wellness', 'Culinair', 'Bar', 'Strand locatie'],
    rating: 4.3,
    reviewCount: 167,
    heroImage: '/images/Hotel-Restaurant De Cooghen.jpg',
    description: `Hotel-Restaurant De Cooghen is een karakteristiek hotel gelegen in het charmante Texelse dorp De Koog. Dit traditionele hotel met jacuzzi faciliteiten biedt de perfecte combinatie van historische charme en moderne comfort aan de Noordzeekust.

    Het hotel combineert authentieke Texelse architectuur met moderne wellness faciliteiten. De kamers zijn uitgerust met comfortabele jacuzzi's en het restaurant staat bekend om zijn uitstekende culinaire ervaringen met lokale ingrediënten. De locatie aan de rand van het dorp biedt rust en stilte.
    
    Perfect voor een ontspannen verblijf op Texel. Geniet van de unieke sfeer van het eiland terwijl u ontspant in uw traditioneel ingerichte kamer met jacuzzi. Een bijzondere combinatie van Texelse gastvrijheid, culinaire hoogstandjes en wellness comfort.`,
    coordinates: [4.7600, 53.1000], // De Koog coordinates
    address: 'Dorpsstraat 10, 1796 BB De Koog',
    affiliateLink: 'https://booking.com/de-cooghen',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Traditionele Suite',
        image: '/images/Hotel-Restaurant De Cooghen.jpg',
        description: 'Karakteristieke suite met traditionele inrichting en privé jacuzzi. Perfect voor een authentieke Texelse ervaring.',
        features: ['Privé jacuzzi', 'Traditionele inrichting', 'Dorps uitzicht', 'King-size bed', 'Minibar', 'Historische details'],
        priceRange: '€195 - €225',
        affiliateLink: 'https://booking.com/de-cooghen-traditionele-suite'
      },
      {
        id: 2,
        name: 'Culinair Jacuzzi Kamer',
        image: '/images/Hotel-Restaurant De Cooghen.jpg',
        description: 'Comfortabele kamer met jacuzzi en toegang tot het bekroonde restaurant. Ideaal voor een culinaire ervaring.',
        features: ['Jacuzzi bad', 'Restaurant toegang', 'Culinair pakket', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi'],
        priceRange: '€165 - €195',
        affiliateLink: 'https://booking.com/de-cooghen-culinair-kamer'
      }
    ]
  },
  'fletcher-hotel-restaurant-jan-van-scorel': {
    id: 19,
    name: 'Fletcher Hotel-Restaurant Jan Van Scorel',
    location: 'Schoorl, Noord-Holland',
    city: 'Schoorl',
    province: 'Noord-Holland',
    priceRange: '€179 - €249',
    jacuzziType: 'Luxe jacuzzi suites met duinzicht',
    facilities: ['Historisch', 'Jacuzzi', 'Kunst theme', 'Restaurant', 'Wellness', 'Duinzicht', 'Natuur'],
    rating: 4.2,
    reviewCount: 189,
    heroImage: '/images/Fletcher Hotel-Restaurant Jan Van Scorel.jpg',
    description: `Fletcher Hotel-Restaurant Jan Van Scorel is een historisch hotel vernoemd naar de beroemde Nederlandse schilder, gelegen in het prachtige Schoorl aan de rand van de Schoorlse Duinen. Dit karakteristieke hotel met jacuzzi faciliteiten biedt de perfecte combinatie van kunst, geschiedenis en moderne wellness comfort.

    Het hotel combineert authentieke historische charme met moderne wellness faciliteiten. De luxe jacuzzi suites bieden adembenemend uitzicht op de Schoorlse Duinen en de omringende natuur. Het restaurant serveert culinaire hoogstandjes geïnspireerd door de kunst en geschiedenis van de regio.
    
    Perfect voor een culturele en ontspannende ervaring. Geniet van de rust van de natuur terwijl u ontspant in uw luxueuze jacuzzi suite met uitzicht op de duinen. Een unieke combinatie van kunst, geschiedenis en wellness comfort in het hart van de Schoorlse natuur.`,
    coordinates: [4.6881, 52.6954], // Schoorl coordinates
    address: 'Heereweg 89, 1871 ED Schoorl',
    affiliateLink: 'https://booking.com/fletcher-jan-van-scorel',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Kunstenaar Suite',
        image: '/images/Fletcher Hotel-Restaurant Jan Van Scorel.jpg',
        description: 'Luxueuze suite vernoemd naar Jan van Scorel met privé jacuzzi en panoramisch duinzicht. Perfect voor een culturele ervaring.',
        features: ['Privé jacuzzi', 'Duinzicht', 'Kunstenaar thema', 'King-size bed', 'Minibar', 'Historische details'],
        priceRange: '€219 - €249',
        affiliateLink: 'https://booking.com/fletcher-jan-van-scorel-kunstenaar-suite'
      },
      {
        id: 2,
        name: 'Wellness Duin Kamer',
        image: '/images/Fletcher Hotel-Restaurant Jan Van Scorel.jpg',
        description: 'Comfortabele wellness kamer met jacuzzi en uitzicht op de Schoorlse Duinen. Ideaal voor natuur- en wellness liefhebbers.',
        features: ['Jacuzzi bad', 'Duinzicht', 'Wellness amenities', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi'],
        priceRange: '€179 - €209',
        affiliateLink: 'https://booking.com/fletcher-jan-van-scorel-wellness-kamer'
      }
    ]
  },
  'van-der-valk-vught': {
    id: 20,
    name: 'Van der Valk Vught',
    location: 'Vught, Noord-Brabant',
    city: 'Vught',
    province: 'Noord-Brabant',
    priceRange: '€185 - €265',
    jacuzziType: 'Moderne wellness kamers met bubbelbaden',
    facilities: ['Natuurlijke omgeving', 'Jacuzzi', 'Wellness', 'Restaurant', 'Terras', 'Business center', 'Parking'],
    rating: 4.6,
    reviewCount: 234,
    heroImage: '/images/Van der Valk Vught.jpg',
    description: `Van der Valk Vught is een elegant hotel gelegen in het groene hart van Noord-Brabant, nabij de prachtige natuurgebieden van Vught. Dit moderne hotel met jacuzzi faciliteiten biedt de perfecte combinatie van rust, natuur en luxe comfort.

    Het hotel beschikt over moderne wellness kamers uitgerust met comfortabele bubbelbaden en alle moderne voorzieningen. De natuurlijke omgeving van Vught zorgt voor een ontspannen sfeer, terwijl de uitstekende faciliteiten zorgen voor een comfortabel verblijf. Het hotel heeft een uitstekend restaurant en moderne business faciliteiten.
    
    Perfect voor zowel zakelijke als ontspannende verblijven. Geniet van de rust van de natuur terwijl u ontspant in uw moderne wellness kamer met bubbelbad. Een elegante combinatie van Brabantse gastvrijheid en moderne luxe in een groene omgeving.`,
    coordinates: [5.2913, 51.6531], // Vught coordinates
    address: 'Bosscheweg 2, 5261 AA Vught',
    affiliateLink: 'https://booking.com/vandervalk-vught',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Wellness Suite',
        image: '/images/Van der Valk Vught.jpg',
        description: 'Luxueuze wellness suite met grote bubbelbad en natuurlijk uitzicht. Perfect voor een ontspannen verblijf in de natuur.',
        features: ['Grote bubbelbad', 'Natuurlijk uitzicht', 'Separate woonkamer', 'King-size bed', 'Minibar', 'Wellness amenities'],
        priceRange: '€235 - €265',
        affiliateLink: 'https://booking.com/vandervalk-vught-wellness-suite'
      },
      {
        id: 2,
        name: 'Business Wellness Kamer',
        image: '/images/Van der Valk Vught.jpg',
        description: 'Moderne business kamer met bubbelbad en werkruimte. Ideaal voor zakenreizigers die comfort en wellness combineren.',
        features: ['Bubbelbad', 'Business desk', 'Werkruimte', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi'],
        priceRange: '€185 - €215',
        affiliateLink: 'https://booking.com/vandervalk-vught-business-wellness'
      }
    ]
  },
  'eindhoven-design-hotel': {
    id: 14,
    name: 'Eindhoven Design Hotel',
    location: 'Eindhoven, Noord-Brabant',
    city: 'Eindhoven',
    province: 'Noord-Brabant',
    priceRange: '€275 - €375',
    jacuzziType: 'Futuristische wellness suites',
    facilities: ['Wellness Suite', 'Design Jacuzzi', 'Spa', 'Outdoor Terras', 'Design', 'Innovatief'],
    rating: 4.7,
    reviewCount: 156,
    heroImage: '/images/Eindhoven Design Hotel.jpg',
    description: `Eindhoven Design Hotel is een innovatief design hotel dat futuristische architectuur combineert met state-of-the-art wellness faciliteiten. Dit unieke hotel met jacuzzi biedt een bijzondere ervaring voor design- en wellness liefhebbers.

    Het hotel beschikt over futuristische wellness suites uitgerust met geavanceerde jacuzzi faciliteiten en moderne design elementen. De innovatieve architectuur en interieur zorgen voor een unieke verblijfservaring. Het hotel heeft een uitgebreide spa en een prachtig outdoor terras.
    
    Perfect voor een moderne en innovatieve ervaring. Geniet van de futuristische sfeer terwijl u ontspant in uw geavanceerde wellness suite met design jacuzzi. Een unieke combinatie van design, innovatie en wellness comfort in het hart van Eindhoven.`,
    coordinates: [5.4697, 51.4416], // Eindhoven coordinates
    address: 'Design District 123, 5611 AB Eindhoven',
    affiliateLink: 'https://booking.com/eindhoven-design',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Futuristische Wellness Suite',
        image: '/images/Eindhoven Design Hotel.jpg',
        description: 'Ultra-moderne wellness suite met geavanceerde design jacuzzi en futuristische inrichting. Perfect voor een innovatieve ervaring.',
        features: ['Design jacuzzi', 'Futuristische inrichting', 'Smart home technologie', 'King-size bed', 'Minibar', 'Spa toegang'],
        priceRange: '€325 - €375',
        affiliateLink: 'https://booking.com/eindhoven-design-futuristische-suite'
      },
      {
        id: 2,
        name: 'Innovatie Wellness Kamer',
        image: '/images/Eindhoven Design Hotel.jpg',
        description: 'Moderne wellness kamer met design jacuzzi en innovatieve technologie. Ideaal voor tech- en design liefhebbers.',
        features: ['Design jacuzzi', 'Smart technologie', 'Innovatieve amenities', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi'],
        priceRange: '€275 - €315',
        affiliateLink: 'https://booking.com/eindhoven-design-innovatie-kamer'
      }
    ]
  },
  'kloosterhotel-willibrordhaeghe': {
    id: 21,
    name: 'Kloosterhotel Willibrordhaeghe',
    location: 'Deurne, Noord-Brabant',
    city: 'Deurne',
    province: 'Noord-Brabant',
    priceRange: '€165 - €225',
    jacuzziType: 'Historische jacuzzi kamers',
    facilities: ['Historisch klooster', 'Privé Jacuzzi', 'Wellness', 'Restaurant', 'Kapel', 'Rustige ligging'],
    rating: 4.6,
    reviewCount: 198,
    heroImage: '/images/Kloosterhotel Willibrordhaeghe.jpg',
    description: `Kloosterhotel Willibrordhaeghe is een uniek kloosterhotel met historische charme en moderne wellness faciliteiten. Dit authentieke hotel met jacuzzi biedt rust en sereniteit in een historische setting met luxe jacuzzi kamers.

    Het hotel combineert de authentieke sfeer van een historisch klooster met moderne wellness faciliteiten. De luxe jacuzzi kamers zijn gelegen in gerestaureerde kloostergebouwen en bieden een unieke ervaring van rust en sereniteit. Het hotel heeft een prachtige kapel en een uitstekend restaurant.
    
    Perfect voor een spirituele en ontspannende ervaring. Geniet van de rust van het klooster terwijl u ontspant in uw historische jacuzzi kamer. Een unieke combinatie van geschiedenis, spiritualiteit en moderne wellness comfort.`,
    coordinates: [5.7972, 51.4614], // Deurne coordinates
    address: 'Kloosterstraat 15, 5751 GG Deurne',
    affiliateLink: 'https://booking.com/kloosterhotel-willibrordhaeghe',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Klooster Suite',
        image: '/images/Kloosterhotel Willibrordhaeghe.jpg',
        description: 'Luxueuze suite in het historische klooster met privé jacuzzi en authentieke inrichting. Perfect voor een spirituele ervaring.',
        features: ['Privé jacuzzi', 'Historische inrichting', 'Klooster uitzicht', 'King-size bed', 'Minibar', 'Kapel toegang'],
        priceRange: '€195 - €225',
        affiliateLink: 'https://booking.com/kloosterhotel-willibrordhaeghe-klooster-suite'
      },
      {
        id: 2,
        name: 'Sereniteit Wellness Kamer',
        image: '/images/Kloosterhotel Willibrordhaeghe.jpg',
        description: 'Rustige wellness kamer met jacuzzi in het historische klooster. Ideaal voor een spirituele en ontspannende ervaring.',
        features: ['Jacuzzi bad', 'Historische details', 'Sereniteit', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi'],
        priceRange: '€165 - €195',
        affiliateLink: 'https://booking.com/kloosterhotel-willibrordhaeghe-sereniteit-kamer'
      }
    ]
  },
  'van-der-valk-gilze-tilburg': {
    id: 22,
    name: 'Van der Valk Gilze - Tilburg',
    location: 'Gilze, Noord-Brabant',
    city: 'Gilze',
    province: 'Noord-Brabant',
    priceRange: '€175 - €245',
    jacuzziType: 'Comfortabele jacuzzi suites',
    facilities: ['Van der Valk kwaliteit', 'Jacuzzi suites', 'Restaurant', 'Fitness', 'Vergaderzalen', 'Terras'],
    rating: 4.5,
    reviewCount: 187,
    heroImage: '/images/Van der Valk Gilze - Tilburg.jpg',
    description: `Van der Valk Gilze - Tilburg is een modern Van der Valk hotel bij Tilburg met comfortabele jacuzzi suites en uitstekende faciliteiten. Dit hotel biedt de perfecte combinatie van Van der Valk kwaliteit en moderne wellness comfort.

    Het hotel beschikt over comfortabele jacuzzi suites en alle moderne voorzieningen die u van Van der Valk mag verwachten. De uitstekende faciliteiten omvatten een modern restaurant, fitness center en vergaderzalen. Het hotel heeft een prachtig terras en uitstekende service.
    
    Perfect voor zowel zakelijke als ontspannende verblijven. Geniet van de Van der Valk kwaliteit terwijl u ontspant in uw comfortabele jacuzzi suite. Een betrouwbare combinatie van kwaliteit, comfort en wellness faciliteiten.`,
    coordinates: [4.9403, 51.5444], // Gilze coordinates
    address: 'Gilzeweg 45, 5126 RA Gilze',
    affiliateLink: 'https://booking.com/vandervalk-gilze-tilburg',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Van der Valk Suite',
        image: '/images/Van der Valk Gilze - Tilburg.jpg',
        description: 'Luxueuze Van der Valk suite met comfortabele jacuzzi en alle kwaliteitsvoorzieningen. Perfect voor een comfortabel verblijf.',
        features: ['Comfortabele jacuzzi', 'Van der Valk kwaliteit', 'Separate woonkamer', 'King-size bed', 'Minibar', 'Terras toegang'],
        priceRange: '€215 - €245',
        affiliateLink: 'https://booking.com/vandervalk-gilze-tilburg-suite'
      },
      {
        id: 2,
        name: 'Business Jacuzzi Kamer',
        image: '/images/Van der Valk Gilze - Tilburg.jpg',
        description: 'Moderne business kamer met jacuzzi en vergaderfaciliteiten. Ideaal voor zakelijke gasten die comfort en wellness combineren.',
        features: ['Jacuzzi bad', 'Business faciliteiten', 'Vergaderruimte', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi'],
        priceRange: '€175 - €205',
        affiliateLink: 'https://booking.com/vandervalk-gilze-tilburg-business'
      }
    ]
  },
  'van-der-valk-tilburg': {
    id: 23,
    name: 'Van der Valk Tilburg',
    location: 'Tilburg, Noord-Brabant',
    city: 'Tilburg',
    province: 'Noord-Brabant',
    priceRange: '€169 - €229',
    jacuzziType: 'Moderne jacuzzi kamers',
    facilities: ['Stadscentrum', 'Jacuzzi kamers', 'Restaurant', 'Bar', 'Fitness', 'Parking'],
    rating: 4.4,
    reviewCount: 203,
    heroImage: '/images/Van der Valk Tilburg.jpg',
    description: `Van der Valk Tilburg is een centraal gelegen hotel in Tilburg met moderne kamers met jacuzzi en uitstekende voorzieningen. Dit hotel biedt de perfecte combinatie van stadsgemak en wellness comfort.

    Het hotel beschikt over moderne kamers uitgerust met comfortabele jacuzzi faciliteiten en alle moderne voorzieningen. De centrale ligging in Tilburg zorgt voor gemakkelijke toegang tot de stad, terwijl de uitstekende faciliteiten zorgen voor een comfortabel verblijf. Het hotel heeft een uitstekend restaurant en bar.
    
    Perfect voor zowel stadsbezoek als wellness verblijven. Geniet van het gemak van de centrale ligging terwijl u ontspant in uw moderne jacuzzi kamer. Een praktische combinatie van locatie, comfort en wellness faciliteiten.`,
    coordinates: [5.0913, 51.5555], // Tilburg coordinates
    address: 'Stadscentrum 78, 5017 AB Tilburg',
    affiliateLink: 'https://booking.com/vandervalk-tilburg',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Stads Wellness Suite',
        image: '/images/Van der Valk Tilburg.jpg',
        description: 'Moderne suite met jacuzzi en uitzicht op het stadscentrum. Perfect voor een stadsbezoek met wellness comfort.',
        features: ['Jacuzzi bad', 'Stadscentrum uitzicht', 'Moderne inrichting', 'King-size bed', 'Minibar', 'Stads toegang'],
        priceRange: '€199 - €229',
        affiliateLink: 'https://booking.com/vandervalk-tilburg-stads-suite'
      },
      {
        id: 2,
        name: 'Comfort Jacuzzi Kamer',
        image: '/images/Van der Valk Tilburg.jpg',
        description: 'Comfortabele kamer met jacuzzi en alle moderne voorzieningen. Ideaal voor een ontspannen verblijf in Tilburg.',
        features: ['Jacuzzi bad', 'Comfort voorzieningen', 'Moderne badkamer', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi'],
        priceRange: '€169 - €199',
        affiliateLink: 'https://booking.com/vandervalk-tilburg-comfort'
      }
    ]
  },
  'van-der-valk-breukelen': {
    id: 24,
    name: 'Van der Valk Breukelen',
    location: 'Breukelen, Utrecht',
    city: 'Breukelen',
    province: 'Utrecht',
    priceRange: '€189 - €259',
    jacuzziType: 'Luxe jacuzzi kamers met uitzicht op de Vecht',
    facilities: ['Jacuzzi kamers', 'Uitzicht op Vecht', 'Restaurant', 'Terras', 'Watersport', 'Historisch'],
    rating: 4.7,
    reviewCount: 234,
    heroImage: '/images/Van der Valk Breukelen.jpg',
    description: `Van der Valk Breukelen is een charmant hotel gelegen in het historische Breukelen aan de prachtige rivier de Vecht. Dit romantische hotel met jacuzzi faciliteiten biedt de perfecte combinatie van historische charme en moderne comfort.

    Het hotel beschikt over luxe jacuzzi kamers met adembenemend uitzicht op de Vecht en de historische omgeving. De romantische setting aan het water zorgt voor een unieke en ontspannende ervaring. Het hotel heeft een uitstekend restaurant en een prachtig terras waar u kunt genieten van de watersport activiteiten op de Vecht.
    
    Perfect voor een romantisch verblijf in een historische omgeving. Geniet van de rust van de Vecht terwijl u ontspant in uw luxe jacuzzi kamer met uitzicht op het water. Een bijzondere combinatie van historie, natuur en moderne wellness comfort.`,
    coordinates: [5.0000, 52.1667], // Breukelen coordinates
    address: 'Vechtstraat 25, 3621 AB Breukelen',
    affiliateLink: 'https://booking.com/vandervalk-breukelen',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Vecht Suite',
        image: '/images/Van der Valk Breukelen.jpg',
        description: 'Luxueuze suite met privé jacuzzi en uitzicht op de Vecht. Perfect voor een romantische ervaring aan het water.',
        features: ['Privé jacuzzi', 'Vecht uitzicht', 'Romantische inrichting', 'King-size bed', 'Minibar', 'Terras toegang'],
        priceRange: '€229 - €259',
        affiliateLink: 'https://booking.com/vandervalk-breukelen-vecht-suite'
      },
      {
        id: 2,
        name: 'Historische Jacuzzi Kamer',
        image: '/images/Van der Valk Breukelen.jpg',
        description: 'Karakteristieke kamer met jacuzzi en historische details. Ideaal voor een authentieke Breukelse ervaring.',
        features: ['Jacuzzi bad', 'Historische details', 'Vecht uitzicht', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi'],
        priceRange: '€189 - €219',
        affiliateLink: 'https://booking.com/vandervalk-breukelen-historische-kamer'
      }
    ]
  },
  'mitland-hotel-utrecht': {
    id: 25,
    name: 'Hotel Mitland',
    location: 'Utrecht, Utrecht',
    city: 'Utrecht',
    province: 'Utrecht',
    priceRange: '€195 - €275',
    jacuzziType: 'Wellness faciliteiten met sauna en stoombad',
    facilities: ['Wellness center', 'Binnenzwembad', 'Sauna', 'Stoombad', 'Bowlingbaan', 'Restaurant', 'Fitness', 'Parkeergelegenheid', 'Fietsverhuur'],
    rating: 4.25,
    reviewCount: 198,
    heroImage: '/images/Mitland Hotel Utrecht.jpg',
    description: `<div class="space-y-6">
<h1 class="text-3xl font-bold text-brand-navy-900 mb-6">Hotel Mitland Utrecht – 4-sterren wellnesshotel aan de rand van de stad</h1>

<p class="text-lg leading-relaxed mb-6"><strong>Hotel Mitland</strong> is een stijlvol 4-sterren hotel in Utrecht, gelegen naast het historische Fort De Bilt. Hier combineer je rust en natuur met de nabijheid van het bruisende stadscentrum. Binnen tien minuten ben je in hartje Utrecht, terwijl je in en rond het hotel geniet van wellness, moderne faciliteiten en een groene omgeving.</p>

<h2 class="text-2xl font-bold text-brand-navy-900 mb-4 mt-8">Overnachten in Utrecht bij Hotel Mitland</h2>
<p class="text-lg leading-relaxed mb-6">Wie wil <strong>overnachten in Utrecht</strong> en toch de drukte van de stad vermijden, zit goed bij Hotel Mitland. Het hotel biedt ruime, comfortabele kamers en een rustige ligging. Dankzij de combinatie van ontspanning en centrale bereikbaarheid is het geschikt voor zowel een stedentrip als een zakelijk verblijf.</p>

<h2 class="text-2xl font-bold text-brand-navy-900 mb-4 mt-8">Ligging: Rust en natuur, maar toch dichtbij Utrecht centrum</h2>
<p class="text-lg leading-relaxed mb-6">Hotel Mitland ligt direct naast <strong>Fort De Bilt</strong>, een historische locatie die onderdeel is van de Nieuwe Hollandse Waterlinie. De groene omgeving nodigt uit tot wandelen of fietsen. Toch ben je in korte tijd in het <strong>centrum van Utrecht</strong>, waar de grachten, de <strong>Domtoren</strong>, het <strong>Spoorwegmuseum</strong> en het <strong>Centraal Museum</strong> wachten. Ook winkels, cafés en restaurants liggen binnen handbereik.</p>

<h2 class="text-2xl font-bold text-brand-navy-900 mb-4 mt-8">Comfortabele kamers met uitzicht op het groen</h2>
<p class="text-lg leading-relaxed mb-4">De kamers van Hotel Mitland zijn ruim en modern ingericht, met aandacht voor comfort.</p>

<h3 class="text-xl font-bold text-brand-navy-900 mb-3 mt-6">Voorzieningen in de kamer</h3>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li class="text-lg">Luxe bedden en airconditioning</li>
  <li class="text-lg">Gratis wifi en flatscreen-tv</li>
  <li class="text-lg">Koelkastje en kluisje</li>
  <li class="text-lg">Koffie- en theefaciliteiten</li>
  <li class="text-lg">Badkamer met douche of ligbad en gratis toiletartikelen</li>
</ul>
<p class="text-lg leading-relaxed mb-6">Veel kamers hebben uitzicht op de omliggende natuur, wat bijdraagt aan een ontspannen verblijf.</p>

<h2 class="text-2xl font-bold text-brand-navy-900 mb-4 mt-8">Wellnesshotel Utrecht: Ontspannen in zwembad en sauna</h2>
<p class="text-lg leading-relaxed mb-4">Als je zoekt naar een <strong>wellnesshotel in Utrecht</strong>, dan heeft Hotel Mitland veel te bieden. De wellnessfaciliteiten zijn gratis toegankelijk en bestaan uit:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li class="text-lg">Een verwarmd binnenzwembad</li>
  <li class="text-lg">Een Finse sauna</li>
  <li class="text-lg">Een Turks stoombad</li>
</ul>
<p class="text-lg leading-relaxed mb-6">Een ideale plek om te ontspannen na een dag in de stad.</p>

<h2 class="text-2xl font-bold text-brand-navy-900 mb-4 mt-8">Genieten van ontbijt, lunch en diner in het restaurant</h2>
<p class="text-lg leading-relaxed mb-6">Het restaurant van Hotel Mitland serveert dagelijks een uitgebreid ontbijtbuffet. Voor lunch en diner ben je hier eveneens welkom, met uitzicht op Fort De Bilt. Op aanvraag is het ook mogelijk om te <strong>steengrillen</strong>. Daarnaast beschikt het hotel over meerdere bars waar je terechtkunt voor een drankje tot in de late uurtjes.</p>

<h2 class="text-2xl font-bold text-brand-navy-900 mb-4 mt-8">Faciliteiten voor een compleet verblijf</h2>
<p class="text-lg leading-relaxed mb-4">Naast wellness en restaurant biedt Hotel Mitland nog meer voorzieningen voor een comfortabel verblijf:</p>
<ul class="list-disc list-inside mb-6 space-y-2">
  <li class="text-lg">Fitnessruimte</li>
  <li class="text-lg">Bowlingbanen</li>
  <li class="text-lg">Fietsverhuur</li>
  <li class="text-lg">Eigen parkeergelegenheid</li>
  <li class="text-lg">Roomservice</li>
</ul>

<h2 class="text-2xl font-bold text-brand-navy-900 mb-4 mt-8">Waarom kiezen voor Hotel Mitland in Utrecht?</h2>
<ul class="list-disc list-inside mb-6 space-y-2">
  <li class="text-lg">Groene ligging naast Fort De Bilt</li>
  <li class="text-lg">Binnen tien minuten in Utrecht centrum</li>
  <li class="text-lg">Luxe kamers met moderne faciliteiten</li>
  <li class="text-lg">Gratis wellness met zwembad, sauna en stoombad</li>
  <li class="text-lg">Extra ontspanning met bowling en fitness</li>
</ul>
</div>`,
    coordinates: [5.1214, 52.0907], // Utrecht coordinates
    address: 'Winthontlaan 4-6, 3526 KV Utrecht',
    affiliateLink: 'https://booking.com/mitland-hotel-utrecht',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Comfort Kamer',
        image: '/images/Mitland Hotel Utrecht.jpg',
        description: 'Ruime en stijlvol ingerichte kamer met comfortabele bedden en moderne voorzieningen. Prachtig uitzicht op de groene omgeving.',
        features: ['Comfortabele bedden', 'Koelkastje', 'Airconditioning', 'Koffie- en theefaciliteiten', 'Televisie', 'Kluisje', 'Gratis WiFi'],
        priceRange: '€195 - €225',
        affiliateLink: 'https://booking.com/mitland-hotel-utrecht-comfort'
      },
      {
        id: 2,
        name: 'Deluxe Kamer',
        image: '/images/Mitland Hotel Utrecht.jpg',
        description: 'Luxe kamer met douche of ligbad en gratis toiletartikelen. Perfect voor een comfortabel verblijf in het groen.',
        features: ['Luxe badkamer', 'Douche of ligbad', 'Gratis toiletartikelen', 'Uitzicht op groen', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi'],
        priceRange: '€225 - €275',
        affiliateLink: 'https://booking.com/mitland-hotel-utrecht-deluxe'
      }
    ]
  },
  'van-der-valk-hilversum-de-witte-bergen': {
    id: 26,
    name: 'Van der Valk Hilversum - De Witte Bergen',
    location: 'Hilversum, Utrecht',
    city: 'Hilversum',
    province: 'Utrecht',
    priceRange: '€185 - €255',
    jacuzziType: 'Moderne wellness faciliteiten en jacuzzi kamers',
    facilities: ['Natuurlijke omgeving', 'Jacuzzi kamers', 'Wellness', 'Restaurant', 'Golf', 'Wandelroutes'],
    rating: 4.6,
    reviewCount: 198,
    heroImage: '/images/Van der Valk Hilversum - De Witte Bergen.jpg',
    description: `Van der Valk Hilversum - De Witte Bergen is een luxe hotel gelegen in de groene omgeving van De Witte Bergen. Dit moderne hotel met jacuzzi faciliteiten biedt de perfecte combinatie van natuurlijke schoonheid en wellness comfort.

    Het hotel beschikt over moderne wellness faciliteiten en comfortabele jacuzzi kamers in een natuurlijke omgeving. De groene ligging zorgt voor rust en ontspanning, terwijl de uitstekende faciliteiten zorgen voor een comfortabel verblijf. Het hotel heeft een uitstekend restaurant en toegang tot golf en wandelroutes.
    
    Perfect voor natuurliefhebbers en wellness gasten. Geniet van de groene omgeving terwijl u ontspant in uw moderne jacuzzi kamer. Een ideale combinatie van natuur, wellness en moderne comfort.`,
    coordinates: [5.1767, 52.2233], // Hilversum coordinates
    address: 'De Witte Bergen 1, 1217 AB Hilversum',
    affiliateLink: 'https://booking.com/vandervalk-hilversum-de-witte-bergen',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Natuur Wellness Suite',
        image: '/images/Van der Valk Hilversum - De Witte Bergen.jpg',
        description: 'Luxueuze suite met jacuzzi en uitzicht op de natuur. Perfect voor een natuurlijke wellness ervaring.',
        features: ['Privé jacuzzi', 'Natuur uitzicht', 'Wellness faciliteiten', 'King-size bed', 'Minibar', 'Golf toegang'],
        priceRange: '€225 - €255',
        affiliateLink: 'https://booking.com/vandervalk-hilversum-natuur-suite'
      },
      {
        id: 2,
        name: 'Groene Jacuzzi Kamer',
        image: '/images/Van der Valk Hilversum - De Witte Bergen.jpg',
        description: 'Comfortabele kamer met jacuzzi in natuurlijke omgeving. Ideaal voor een ontspannen verblijf.',
        features: ['Jacuzzi bad', 'Natuurlijke omgeving', 'Wandelroutes', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi'],
        priceRange: '€185 - €215',
        affiliateLink: 'https://booking.com/vandervalk-hilversum-groene-kamer'
      }
    ]
  },
  'van-der-valk-vianen': {
    id: 27,
    name: 'Van der Valk Vianen',
    location: 'Vianen, Utrecht',
    city: 'Vianen',
    province: 'Utrecht',
    priceRange: '€175 - €235',
    jacuzziType: 'Comfortabele jacuzzi suites',
    facilities: ['Jacuzzi suites', 'Restaurant', 'Bar', 'Fitness', 'Vergaderzalen', 'Parking'],
    rating: 4.5,
    reviewCount: 187,
    heroImage: '/images/Van der Valk Vianen.jpg',
    description: `Van der Valk Vianen is een modern hotel strategisch gelegen tussen Amsterdam en Utrecht. Dit comfortabele hotel met jacuzzi faciliteiten biedt uitstekende faciliteiten voor zowel zakelijke als ontspannende verblijven.

    Het hotel beschikt over comfortabele jacuzzi suites en alle moderne voorzieningen die u van Van der Valk mag verwachten. De strategische ligging zorgt voor gemakkelijke toegang tot zowel Amsterdam als Utrecht, terwijl de uitstekende faciliteiten zorgen voor een comfortabel verblijf.
    
    Perfect voor zowel zakelijke als ontspannende verblijven. Geniet van de strategische ligging terwijl u ontspant in uw comfortabele jacuzzi suite. Een betrouwbare combinatie van locatie, comfort en kwaliteit.`,
    coordinates: [5.1000, 51.9833], // Vianen coordinates
    address: 'A2 Zuid 1, 4131 AB Vianen',
    affiliateLink: 'https://booking.com/vandervalk-vianen',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Business Jacuzzi Suite',
        image: '/images/Van der Valk Vianen.jpg',
        description: 'Moderne suite met jacuzzi en vergaderfaciliteiten. Perfect voor zakelijke gasten.',
        features: ['Comfortabele jacuzzi', 'Vergaderruimte', 'Business faciliteiten', 'King-size bed', 'Minibar', 'Fitness toegang'],
        priceRange: '€205 - €235',
        affiliateLink: 'https://booking.com/vandervalk-vianen-business-suite'
      },
      {
        id: 2,
        name: 'Comfort Jacuzzi Kamer',
        image: '/images/Van der Valk Vianen.jpg',
        description: 'Comfortabele kamer met jacuzzi en alle moderne voorzieningen. Ideaal voor een ontspannen verblijf.',
        features: ['Jacuzzi bad', 'Moderne faciliteiten', 'Restaurant toegang', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi'],
        priceRange: '€175 - €205',
        affiliateLink: 'https://booking.com/vandervalk-vianen-comfort'
      }
    ]
  },
  'van-der-valk-houten': {
    id: 28,
    name: 'Van der Valk Houten',
    location: 'Houten, Utrecht',
    city: 'Houten',
    province: 'Utrecht',
    priceRange: '€179 - €239',
    jacuzziType: 'Moderne jacuzzi faciliteiten en wellness',
    facilities: ['Jacuzzi kamers', 'Wellness', 'Restaurant', 'Terras', 'Natuur', 'Fietsroutes'],
    rating: 4.6,
    reviewCount: 203,
    heroImage: '/images/Van der Valk Houten.jpg',
    description: `Van der Valk Houten is een stijlvol hotel gelegen in het groene Houten nabij Utrecht. Dit moderne hotel met jacuzzi faciliteiten biedt de perfecte combinatie van natuur en wellness comfort.

    Het hotel beschikt over moderne jacuzzi faciliteiten en uitgebreide wellness voorzieningen in een groene omgeving. De ligging in Houten zorgt voor rust en stilte, terwijl de nabijheid van Utrecht zorgt voor gemakkelijke toegang tot de stad. Het hotel heeft uitstekende fietsroutes en natuurgebieden.
    
    Perfect voor een ontspannen verblijf in een groene omgeving. Geniet van de natuur terwijl u ontspant in uw moderne jacuzzi kamer. Een ideale combinatie van groen, wellness en moderne comfort.`,
    coordinates: [5.1667, 52.0333], // Houten coordinates
    address: 'Groenezoom 1, 3991 AA Houten',
    affiliateLink: 'https://booking.com/vandervalk-houten',
    popularThisMonth: false,
    rooms: [
      {
        id: 1,
        name: 'Groene Wellness Suite',
        image: '/images/Van der Valk Houten.jpg',
        description: 'Luxueuze suite met jacuzzi en uitzicht op de natuur. Perfect voor een groene wellness ervaring.',
        features: ['Privé jacuzzi', 'Natuur uitzicht', 'Wellness faciliteiten', 'King-size bed', 'Minibar', 'Fietsroutes'],
        priceRange: '€209 - €239',
        affiliateLink: 'https://booking.com/vandervalk-houten-groene-suite'
      },
      {
        id: 2,
        name: 'Natuurlijke Jacuzzi Kamer',
        image: '/images/Van der Valk Houten.jpg',
        description: 'Comfortabele kamer met jacuzzi in groene omgeving. Ideaal voor een natuurlijke ervaring.',
        features: ['Jacuzzi bad', 'Groene omgeving', 'Fietsroutes', 'Flatscreen TV', 'Koffie/thee faciliteiten', 'Gratis WiFi'],
        priceRange: '€179 - €209',
        affiliateLink: 'https://booking.com/vandervalk-houten-natuurlijke-kamer'
      }
    ]
  }
}

// Function to get related hotels from the same province
const getRelatedHotels = (currentHotel: Hotel) => {
  // Convert mockHotels object to array and filter by province
  const allHotels = Object.values(mockHotels)
  
  return allHotels
    .filter(hotel => 
      hotel.province === currentHotel.province && 
      hotel.id !== currentHotel.id // Exclude current hotel
    )
    .map(hotel => ({
      id: hotel.id,
      name: hotel.name,
      slug: Object.keys(mockHotels).find(key => mockHotels[key].id === hotel.id) || '',
      description: hotel.description.split('\n')[0], // First paragraph only
      province: hotel.province,
      city: hotel.city,
      price_range: hotel.priceRange,
      facilities: hotel.facilities,
      affiliate_link: hotel.affiliateLink,
      image_url: hotel.heroImage,
      rating: hotel.rating,
      created_at: "2024-01-01"
    }))
}

// SVG Pattern Component
const WavePattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg width="100%" height="100%" viewBox="0 0 100 20" className="absolute top-0 left-0 text-brand-navy-100 opacity-50">
      <defs>
        <pattern id="wave" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#wave)" />
    </svg>
  </div>
)

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awaited = await params
  const hotel = mockHotels[awaited.slug as keyof typeof mockHotels]
  
  if (!hotel) {
    return {
      title: 'Hotel niet gevonden | Hotelmetjacuzzi.net',
      description: 'Het opgevraagde hotel kon niet worden gevonden.'
    }
  }

  return {
    title: `${hotel.name} | 4-sterren wellnesshotel Utrecht met jacuzzi & spa`,
    description: `Ontdek ${hotel.name} - een stijlvol 4-sterren wellnesshotel in Utrecht naast Fort De Bilt. Gratis wellness, moderne kamers en binnen 10 minuten in het centrum. Boek nu!`,
    keywords: [`${hotel.name}`, `wellness hotel Utrecht`, `hotel met jacuzzi Utrecht`, `Fort De Bilt hotel`, `4 sterren hotel Utrecht`, `wellnessfaciliteiten Utrecht`, 'jacuzzi kamer Utrecht', 'spa hotel Utrecht'],
    openGraph: {
      title: `${hotel.name} - Luxe hotel met jacuzzi`,
      description: hotel.description.substring(0, 155),
      images: [hotel.heroImage],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${hotel.name} - Luxe hotel met jacuzzi`,
      description: hotel.description.substring(0, 155),
      images: [hotel.heroImage],
    },
  }
}

export default async function HotelDetailPage({ params }: Props) {
  const awaited = await params
  const hotel = mockHotels[awaited.slug as keyof typeof mockHotels]

  if (!hotel) {
    notFound()
  }

  // Get related hotels from the same province
  const relatedHotels = getRelatedHotels(hotel)

  // Universal template for all hotels with rooms
  if (hotel.rooms && hotel.rooms.length > 0) {
    return (
      <div className="min-h-screen bg-light-gray">
        {/* SVG Pattern Background */}
        <WavePattern />
        
        {/* Hero Section */}
        <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Dynamic Breadcrumbs */}
                <nav className="text-sm text-brand-navy-200 mb-6">
                  <Link href="/" className="hover:text-brand-orange-600 transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <Link href={`/provincie/${hotel.province.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-orange-600 transition-colors">
                    {hotel.province}
                  </Link>
                  <span className="mx-2">/</span>
                  <Link href={`/stad/${hotel.city.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-orange-600 transition-colors">
                    {hotel.city}
                  </Link>
                  <span className="mx-2">/</span>
                  <span className="text-pure-white font-medium">{hotel.name}</span>
                </nav>

                {/* Dynamic Hero Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {hotel.name} – romantische suite met jacuzzi in {hotel.province}
                </h1>
                
                {/* Dynamic Hero Description */}
                <p className="text-xl md:text-2xl text-brand-navy-200 mb-8 leading-relaxed">
                  {hotel.description.split('\n\n')[0]}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Dynamic CTA Button */}
                  <a 
                    href={hotel.affiliateLink}
                    className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                  >
                    Boek nu vanaf {hotel.priceRange.split(' - ')[0]}
                  </a>
                  <Link 
                    href={`/provincie/${hotel.province.toLowerCase().replace(' ', '-')}`}
                    className="border-2 border-brand-orange-600 text-brand-orange-600 hover:bg-brand-orange-600 hover:text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                  >
                    Meer hotels
                  </Link>
                </div>
              </div>
              <div className="relative">
                {/* Dynamic Hero Image */}
                <Image
                  src={hotel.heroImage}
                  alt={`${hotel.name} - romantische suite met jacuzzi`}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Dynamic Rating */}
                <div className="absolute -bottom-6 -right-6 bg-brand-orange-600 text-pure-white p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold">★ {hotel.rating}</div>
                    <div className="text-sm">({hotel.reviewCount} reviews)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section id="rooms" className="py-16 bg-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Onze Kamers met Jacuzzi
              </h2>
              <p className="text-lg text-brand-navy-600 max-w-3xl mx-auto">
                Geniet van luxe en comfort in onze exclusieve kamers, elk met een privé jacuzzi voor de ultieme ontspanningservaring
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hotel.rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              {/* Dynamic Location Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Locatie van {hotel.name}
              </h2>
              {/* Dynamic Location Description */}
              <p className="text-lg text-brand-navy-600 max-w-3xl mx-auto">
                Gelegen in {hotel.city}, {hotel.province}. Een prachtige locatie voor een ontspannen verblijf met uitstekende bereikbaarheid.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <MapboxMap
                longitude={hotel.coordinates[0]}
                latitude={hotel.coordinates[1]}
                hotelName={hotel.name}
                address={hotel.address}
              />
            </div>
          </div>
        </section>

        {/* Hotel Details Section */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy-900 mb-6">
                Ontdek {hotel.name}
              </h2>
              <p className="text-xl text-brand-navy-600 max-w-3xl mx-auto leading-relaxed">
                Een stijlvol 4-sterren wellnesshotel in Utrecht, gelegen naast het historische Fort De Bilt. 
                Hier combineer je rust en natuur met de nabijheid van het bruisende stadscentrum.
              </p>
            </div>
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Main Description */}
              <div className="lg:col-span-2 bg-pure-white rounded-2xl shadow-lg border border-brand-navy-200 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-brand-navy-900 mb-6">Over Hotel Mitland</h3>
                <div className="space-y-6 text-brand-navy-700 leading-relaxed">
                  <p>
                    Hotel Mitland is een stijlvol 4-sterren hotel in Utrecht, gelegen naast het historische Fort De Bilt. 
                    Hier combineer je rust en natuur met de nabijheid van het bruisende stadscentrum. Binnen tien minuten 
                    ben je in hartje Utrecht, terwijl je in en rond het hotel geniet van wellness, moderne faciliteiten en een groene omgeving.
                  </p>
                  <p>
                    Wie wil overnachten in Utrecht en toch de drukte van de stad vermijden, zit goed bij Hotel Mitland. 
                    Het hotel biedt ruime, comfortabele kamers en een rustige ligging. Dankzij de combinatie van ontspanning 
                    en centrale bereikbaarheid is het geschikt voor zowel een stedentrip als een zakelijk verblijf.
                  </p>
                  <p>
                    Hotel Mitland ligt direct naast Fort De Bilt, een historische locatie die onderdeel is van de Nieuwe Hollandse Waterlinie. 
                    De groene omgeving nodigt uit tot wandelen of fietsen. Toch ben je in korte tijd in het centrum van Utrecht, 
                    waar de grachten, de Domtoren, het Spoorwegmuseum en het Centraal Museum wachten.
                  </p>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-pure-white rounded-2xl shadow-lg border border-brand-navy-200 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-brand-navy-900 mb-6">Snelle feiten</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-brand-orange-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-brand-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy-900">Afstand tot centrum</p>
                      <p className="text-brand-navy-600">10 minuten rijden</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-brand-orange-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-brand-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy-900">Sterren</p>
                      <p className="text-brand-navy-600">4 sterren</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-brand-orange-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-brand-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy-900">Locatie</p>
                      <p className="text-brand-navy-600">Naast Fort De Bilt</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-brand-orange-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-brand-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy-900">Wellness</p>
                      <p className="text-brand-navy-600">Gratis toegankelijk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Facilities Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-brand-navy-900 mb-8 text-center">Faciliteiten & Voorzieningen</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Kamers */}
                <div className="bg-pure-white rounded-xl shadow-lg border border-brand-navy-200 p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-brand-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-brand-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy-900 mb-3">Comfortabele kamers</h4>
                  <p className="text-brand-navy-600 text-sm leading-relaxed">
                    Ruime, moderne kamers met luxe bedden, airconditioning, gratis wifi en uitzicht op het groen.
                  </p>
                </div>

                {/* Wellness */}
                <div className="bg-pure-white rounded-xl shadow-lg border border-brand-navy-200 p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-brand-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-brand-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy-900 mb-3">Wellness faciliteiten</h4>
                  <p className="text-brand-navy-600 text-sm leading-relaxed">
                    Gratis toegankelijk: verwarmd binnenzwembad, Finse sauna en Turks stoombad.
                  </p>
                </div>

                {/* Restaurant */}
                <div className="bg-pure-white rounded-xl shadow-lg border border-brand-navy-200 p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-brand-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-brand-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy-900 mb-3">Restaurant & Bars</h4>
                  <p className="text-brand-navy-600 text-sm leading-relaxed">
                    Uitgebreid ontbijtbuffet, lunch, diner en steengrillen met uitzicht op Fort De Bilt.
                  </p>
                </div>

                {/* Extra faciliteiten */}
                <div className="bg-pure-white rounded-xl shadow-lg border border-brand-navy-200 p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-brand-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-brand-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy-900 mb-3">Extra faciliteiten</h4>
                  <p className="text-brand-navy-600 text-sm leading-relaxed">
                    Fitnessruimte, bowlingbanen, fietsverhuur, parkeergelegenheid en roomservice.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* USP & FAQ Section */}
        <section className="py-20 bg-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* USP Highlight Box */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-brand-orange-50 to-brand-orange-100 rounded-2xl border-2 border-brand-orange-200 p-8 md:p-10 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-8 text-center">
                  Waarom kiezen voor Hotel Mitland?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-pure-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold text-brand-navy-700">Groene ligging naast Fort De Bilt</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-pure-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold text-brand-navy-700">Binnen tien minuten in Utrecht centrum</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-pure-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold text-brand-navy-700">Luxe kamers met moderne faciliteiten</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-pure-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold text-brand-navy-700">Gratis wellness met zwembad, sauna en stoombad</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-pure-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold text-brand-navy-700">Bowling en fitness voor ontspanning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-8 text-center">
                Veelgestelde vragen over Hotel Mitland Utrecht
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <details className="bg-pure-white rounded-xl border border-brand-navy-200 shadow-sm overflow-hidden">
                    <summary className="p-6 cursor-pointer hover:bg-brand-navy-50 transition-colors duration-200 font-semibold text-lg text-brand-navy-900 flex items-center justify-between">
                      <span>Waar ligt Hotel Mitland precies?</span>
                      <svg className="w-5 h-5 text-brand-orange-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-brand-navy-700 leading-relaxed">
                        Hotel Mitland ligt aan de rand van Utrecht, naast het historische Fort De Bilt. Vanuit het hotel ben je binnen tien minuten rijden in het centrum van de stad.
                      </p>
                    </div>
                  </details>

                  <details className="bg-pure-white rounded-xl border border-brand-navy-200 shadow-sm overflow-hidden">
                    <summary className="p-6 cursor-pointer hover:bg-brand-navy-50 transition-colors duration-200 font-semibold text-lg text-brand-navy-900 flex items-center justify-between">
                      <span>Heeft Hotel Mitland wellnessfaciliteiten?</span>
                      <svg className="w-5 h-5 text-brand-orange-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-brand-navy-700 leading-relaxed">
                        Ja, gasten kunnen gratis gebruikmaken van de wellness. Er is een verwarmd binnenzwembad, een Finse sauna en een Turks stoombad.
                      </p>
                    </div>
                  </details>

                  <details className="bg-pure-white rounded-xl border border-brand-navy-200 shadow-sm overflow-hidden">
                    <summary className="p-6 cursor-pointer hover:bg-brand-navy-50 transition-colors duration-200 font-semibold text-lg text-brand-navy-900 flex items-center justify-between">
                      <span>Kan ik parkeren bij Hotel Mitland?</span>
                      <svg className="w-5 h-5 text-brand-orange-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-brand-navy-700 leading-relaxed">
                        Het hotel beschikt over eigen parkeergelegenheid, zodat je je auto veilig en dichtbij kunt parkeren.
                      </p>
                    </div>
                  </details>

                  <details className="bg-pure-white rounded-xl border border-brand-navy-200 shadow-sm overflow-hidden">
                    <summary className="p-6 cursor-pointer hover:bg-brand-navy-50 transition-colors duration-200 font-semibold text-lg text-brand-navy-900 flex items-center justify-between">
                      <span>Hoe ver is Hotel Mitland van het centrum?</span>
                      <svg className="w-5 h-5 text-brand-orange-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-brand-navy-700 leading-relaxed">
                        Met de auto of fiets ben je in ongeveer tien minuten in het centrum van Utrecht. Ook met het openbaar vervoer is de verbinding eenvoudig.
                      </p>
                    </div>
                  </details>

                  <details className="bg-pure-white rounded-xl border border-brand-navy-200 shadow-sm overflow-hidden">
                    <summary className="p-6 cursor-pointer hover:bg-brand-navy-50 transition-colors duration-200 font-semibold text-lg text-brand-navy-900 flex items-center justify-between">
                      <span>Welke kamervoorzieningen zijn er?</span>
                      <svg className="w-5 h-5 text-brand-orange-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-brand-navy-700 leading-relaxed">
                        De kamers zijn modern ingericht en beschikken over comfortabele bedden, airconditioning, gratis wifi, een koelkastje, kluisje, koffie- en theefaciliteiten en een badkamer met douche of ligbad.
                      </p>
                    </div>
                  </details>

                  <details className="bg-pure-white rounded-xl border border-brand-navy-200 shadow-sm overflow-hidden">
                    <summary className="p-6 cursor-pointer hover:bg-brand-navy-50 transition-colors duration-200 font-semibold text-lg text-brand-navy-900 flex items-center justify-between">
                      <span>Biedt Hotel Mitland sportmogelijkheden?</span>
                      <svg className="w-5 h-5 text-brand-orange-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-brand-navy-700 leading-relaxed">
                        Ja, naast de wellness heeft Hotel Mitland een fitnessruimte en een eigen bowlingbaan voor een gezellige avond.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Hotels Section */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              {/* Dynamic Related Hotels Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                Andere hotels met jacuzzi in {hotel.province}
              </h2>
              <p className="text-lg text-brand-navy-600">
                Ontdek ook deze prachtige jacuzzi hotels in {hotel.province}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedHotels.slice(0, 3).map((relatedHotel, index) => (
                <div key={`${relatedHotel.id}-${index}`} className="bg-pure-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-brand-navy-200 flex flex-col h-full">
                  <div className="relative h-64">
                    <Image
                      src={relatedHotel.image_url}
                      alt={relatedHotel.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900/20 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-brand-navy-900 mb-2">{relatedHotel.name}</h3>
                    <p className="text-brand-navy-600 mb-4 line-clamp-2">{relatedHotel.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-brand-navy-900">{relatedHotel.price_range}</span>
                      <span className="text-sm text-brand-orange-600 font-semibold">★ {relatedHotel.rating}/5</span>
                    </div>
                    <Link 
                      href={`/hotel/${relatedHotel.slug}`}
                      className="block w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center mt-auto"
                    >
                      Bekijk hotel
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href={`/provincie/${hotel.province.toLowerCase().replace(' ', '-')}`}
                className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Bekijk alle hotels in {hotel.province}
                <svg width="20" height="20" viewBox="0 0 20 20" className="ml-2">
                  <path d="M7 3l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Hotel',
              name: hotel.name,
              description: hotel.description,
              address: {
                '@type': 'PostalAddress',
                streetAddress: hotel.address.split(',')[0],
                addressLocality: hotel.city,
                addressRegion: hotel.province,
                addressCountry: 'NL'
              },
              geo: {
                '@type': 'GeoCoordinates',
                longitude: hotel.coordinates[0],
                latitude: hotel.coordinates[1]
              },
              starRating: {
                '@type': 'Rating',
                ratingValue: hotel.rating,
                bestRating: 5
              },
              priceRange: hotel.priceRange,
              amenityFeature: hotel.facilities.map(facility => ({
                '@type': 'LocationFeatureSpecification',
                name: facility
              }))
            })
          }}
        />
      </div>
    )
  }

  // Fallback for hotels without rooms data
  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-brand-navy-900 mb-4">Hotel details worden bijgewerkt</h1>
        <p className="text-brand-navy-600">Dit hotel wordt momenteel bijgewerkt met nieuwe informatie.</p>
        <Link href="/" className="inline-block mt-4 bg-brand-orange-600 text-pure-white px-6 py-3 rounded-lg">
          Terug naar overzicht
        </Link>
      </div>
    </div>
  )
}
