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
        image: '/images/Inntel Hotels Amsterdam Centre.jpg',
        description: 'Moderne spa kamer met design jacuzzi en stadsbeeld. Ideaal voor ontspanning in het hart van Amsterdam.',
        features: ['Design jacuzzi', 'Stadsbeeld', 'Modern design', 'Minibar', 'Flatscreen TV', 'Gratis wifi'],
        priceRange: '€195 - €249',
        affiliateLink: 'https://booking.com/inntel-amsterdam-centre-spa'
      },
      {
        id: 2,
        name: 'Wellness Kamer',
        image: '/images/Inntel Hotels Amsterdam Centre.jpg',
        description: 'Ruime wellness kamer met grote jacuzzi en wellness amenities. Complete ontspanningservaring in de stad.',
        features: ['Grote jacuzzi', 'Wellness amenities', 'Extra ruim', 'Koffiehoek', 'Premium beddengoed', 'Balkon'],
        priceRange: '€249 - €299',
        affiliateLink: 'https://booking.com/inntel-amsterdam-centre-wellness'
      },
      {
        id: 3,
        name: 'Suite',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop',
        description: 'Luxueuze suite met separate woonkamer en premium jacuzzi. Het ultieme in comfort en stijl.',
        features: ['Premium jacuzzi', 'Separate woonkamer', 'Design meubilair', 'Business desk', 'Room service', 'Panorama uitzicht'],
        priceRange: '€299 - €349',
        affiliateLink: 'https://booking.com/inntel-amsterdam-centre-suite'
      }
    ]
  },
  'olympic-hotel': {
    id: 2,
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
    id: 3,
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
        description: 'Koninklijke deluxe suite met luxe jacuzzi en kingsize bed in authentieke kasteel setting. Het summum van romantische luxe.',
        features: ['Luxe jacuzzi', 'Kingsize bed', 'Kasteel ambiance', 'Historische details', 'Premium amenities', 'Tuinzicht'],
        priceRange: '€249 - €389',
        affiliateLink: 'https://booking.com/kasteel-bloemendal-deluxe-suite'
      }
    ]
  },
  'van-der-valk-akersloot': {
    id: 5,
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
        description: 'Kamer met jacuzzi en prachtig uitzicht op de Friese meren. Perfect voor waterliefhebbers.',
        features: ['Meren jacuzzi', 'Water uitzicht', 'Watersport toegang', 'Balkon', 'Gratis WiFi', 'Bootje verhuur'],
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
    title: `${hotel.name} | Luxe hotel met jacuzzi in ${hotel.province}`,
    description: `${hotel.description.substring(0, 155)}...`,
    keywords: [`${hotel.name}`, `hotel met jacuzzi ${hotel.city}`, `wellness hotel ${hotel.province}`, 'jacuzzi kamer', 'romantisch hotel'],
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

        {/* Wellness Features Section */}
        <section className="py-16 bg-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              {/* Dynamic Wellness Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
                {hotel.name} biedt de perfecte combinatie van luxe en ontspanning in {hotel.province}
              </h2>
              <p className="text-lg text-brand-navy-600 max-w-4xl mx-auto mb-8">
                {hotel.description.split('\n\n')[0]}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-navy-900 mb-6">
                  Faciliteiten & Voorzieningen
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {hotel.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-brand-navy-50 rounded-lg border border-brand-navy-200">
                      <div className="w-2 h-2 bg-brand-orange-600 rounded-full flex-shrink-0"></div>
                      <span className="text-brand-navy-700 font-medium">{facility}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-brand-navy-50 rounded-xl border border-brand-navy-200">
                  <h4 className="text-lg font-bold text-brand-navy-900 mb-3">Locatie Voordelen</h4>
                  <ul className="space-y-2 text-brand-navy-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-orange-600 rounded-full mr-3"></span>
                      Uitstekende bereikbaarheid
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-orange-600 rounded-full mr-3"></span>
                      Centrale ligging in {hotel.city}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-orange-600 rounded-full mr-3"></span>
                      Perfecte uitvalsbasis voor {hotel.province}
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src={hotel.heroImage}
                  alt={`${hotel.name} - wellness faciliteiten`}
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 bg-brand-orange-600 text-pure-white px-4 py-2 rounded-lg font-bold">
                  {hotel.jacuzziType}
                </div>
              </div>
            </div>

            {/* Internal Links */}
            <div className="mt-12 pt-8 border-t border-brand-navy-200 text-center">
              <p className="text-brand-navy-600 mb-6">
                Bekijk ook onze andere <Link href="/hotel-met-jacuzzi-op-kamer" className="text-brand-orange-600 hover:text-brand-orange-700 font-medium">hotels met jacuzzi op de kamer</Link> of 
                ontdek meer <Link href={`/provincie/${hotel.province.toLowerCase().replace(' ', '-')}`} className="text-brand-orange-600 hover:text-brand-orange-700 font-medium">hotels in {hotel.province}</Link>.
              </p>
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
              {relatedHotels.slice(0, 3).map((relatedHotel) => (
                <div key={relatedHotel.id} className="bg-pure-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-brand-navy-200">
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
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-navy-900 mb-2">{relatedHotel.name}</h3>
                    <p className="text-brand-navy-600 mb-4 line-clamp-2">{relatedHotel.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-brand-navy-900">{relatedHotel.price_range}</span>
                      <span className="text-sm text-brand-orange-600 font-semibold">★ {relatedHotel.rating}/5</span>
                    </div>
                    <Link 
                      href={`/hotel/${relatedHotel.slug}`}
                      className="block w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
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
