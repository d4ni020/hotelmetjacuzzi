'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HotelCard from '@/components/HotelCard'
import { DotGridPattern } from '@/components/SVGPattern'
import { Hotel, Province, City } from '@/lib/supabase'

// Mock data voor development (later vervangen door Supabase calls)
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
      popular: true,
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
      id: 4,
      name: "Rotterdam Marina Hotel",
      slug: "rotterdam-marina-hotel",
      description: "Modern boutique hotel met uitzicht op de Maas, luxe suites met bubbelbaden en wellness faciliteiten.",
      province_id: 4,
      city_id: 4,
      price_range: "Vanaf €195",
      facilities: ["Bubbelbad", "Balkon", "Restaurant", "Fitness"],
      affiliate_link: "https://booking.com/rotterdam-marina",
      image_url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1600&auto=format&fit=crop",
      rating: 4.4,
      created_at: "2024-01-01"
    },
    {
      id: 5,
      name: "Utrecht Central Wellness",
      slug: "utrecht-central-wellness",
      description: "Stijlvol hotel in het centrum van Utrecht met privé jacuzzi's en complete wellness ervaring.",
      province_id: 5,
      city_id: 5,
      price_range: "Vanaf €175",
      facilities: ["Privé Jacuzzi", "Sauna", "Spa", "Restaurant"],
      affiliate_link: "https://booking.com/utrecht-central",
      image_url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1600&auto=format&fit=crop",
      rating: 4.6,
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
    },
    {
      id: 17,
      name: "Landgoed Hotel Renesse",
      slug: "landgoed-hotel-renesse",
      description: "Luxe landgoedhotel in Renesse met uitgebreide spa faciliteiten en jacuzzi. Perfect voor een ontspannen strandvakantie met wellness.",
      province_id: 11,
      city_id: 17,
      price_range: "Vanaf €169",
      facilities: ["Spa & Wellness", "Jacuzzi", "Strand nabij", "Landgoed", "Fine dining", "Natuur"],
      affiliate_link: "https://booking.com/landgoed-hotel-renesse",
      image_url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop",
      rating: 4.5,
      created_at: "2024-01-01"
    },
    {
      id: 18,
      name: "Zuiderduin Beachhotel",
      slug: "zuiderduin-beachhotel",
      description: "Uniek strandhotel in Zeeland met spectaculaire jacuzzi faciliteiten en direct toegang tot het strand. Luxe en natuur in perfect harmonie.",
      province_id: 11,
      city_id: 17,
      price_range: "Vanaf €195",
      facilities: ["Strand access", "Jacuzzi", "Zee uitzicht", "Wellness center", "Restaurant", "Thalasso"],
      affiliate_link: "https://booking.com/zuiderduin-beachhotel",
      image_url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop",
      rating: 4.7,
      created_at: "2024-01-01"
    },
    {
      id: 19,
      name: "Van der Valk Middelburg",
      slug: "van-der-valk-middelburg",
      description: "Stijlvol Van der Valk hotel in het historische Middelburg met moderne spa en jacuzzi faciliteiten. Perfecte combinatie van cultuur en ontspanning.",
      province_id: 11,
      city_id: 18,
      price_range: "Vanaf €149",
      facilities: ["Spa faciliteiten", "Jacuzzi", "Historisch centrum", "Restaurant", "Bar", "Gratis parkeren"],
      affiliate_link: "https://booking.com/vandervalk-middelburg",
      image_url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
      rating: 4.4,
      created_at: "2024-01-01"
    },
    {
      id: 20,
      name: "Van der Valk Goes",
      slug: "van-der-valk-goes",
      description: "Comfortabel Van der Valk hotel in Goes met uitstekende wellness faciliteiten en jacuzzi. Ideale uitvalsbasis voor het ontdekken van Zeeland.",
      province_id: 11,
      city_id: 19,
      price_range: "Vanaf €139",
      facilities: ["Wellness", "Jacuzzi", "Sauna", "Restaurant", "Fitness", "Gratis WiFi"],
      affiliate_link: "https://booking.com/vandervalk-goes",
      image_url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
      rating: 4.3,
      created_at: "2024-01-01"
    },
    {
      id: 21,
      name: "Van der Valk Akersloot",
      slug: "van-der-valk-akersloot",
      description: "Luxe Van der Valk hotel in Akersloot met prachtige wellness faciliteiten en jacuzzi. Gelegen in het groene hart van Noord-Holland.",
      province_id: 2,
      city_id: 20,
      price_range: "Vanaf €169",
      facilities: ["Wellness Center", "Jacuzzi", "Sauna", "Restaurant", "Bar", "Gratis parkeren"],
      affiliate_link: "https://booking.com/vandervalk-akersloot",
      image_url: "/images/Van der Valk Akersloot.jpg",
      rating: 4.5,
      created_at: "2024-01-01"
    },
    {
      id: 22,
      name: "Van der Valk Wieringermeer",
      slug: "van-der-valk-wieringermeer",
      description: "Modern Van der Valk hotel in Wieringermeer met uitgebreide spa en jacuzzi faciliteiten. Perfect voor een ontspannen weekend.",
      province_id: 2,
      city_id: 21,
      price_range: "Vanaf €159",
      facilities: ["Spa", "Jacuzzi", "Wellness", "Restaurant", "Fitness", "Gratis WiFi"],
      affiliate_link: "https://booking.com/vandervalk-wieringermeer",
      image_url: "/images/Van der Valk Wieringermeer.jpg",
      rating: 4.4,
      created_at: "2024-01-01"
    },
    {
      id: 23,
      name: "Olympic Hotel",
      slug: "olympic-hotel",
      description: "Stijlvol Olympic Hotel in Amsterdam met luxe wellness faciliteiten en privé jacuzzi's. Een oase van rust in het hart van de stad.",
      province_id: 2,
      city_id: 2,
      price_range: "Vanaf €219",
      facilities: ["Privé Jacuzzi", "Wellness", "Spa", "Restaurant", "Bar", "Concierge"],
      affiliate_link: "https://booking.com/olympic-hotel-amsterdam",
      image_url: "/images/Olympic Hotel.jpg",
      rating: 4.6,
      created_at: "2024-01-01"
    },
    {
      id: 24,
      name: "Inntel Hotels Amsterdam Centre",
      slug: "inntel-hotels-amsterdam-centre",
      description: "Modern Inntel hotel in het centrum van Amsterdam met elegante jacuzzi suites en wellness faciliteiten. Perfecte locatie voor stad en ontspanning.",
      province_id: 2,
      city_id: 2,
      price_range: "Vanaf €195",
      facilities: ["Jacuzzi Suite", "Wellness", "Centrum locatie", "Restaurant", "Business Center", "24/7 Service"],
      affiliate_link: "https://booking.com/inntel-amsterdam-centre",
      image_url: "/images/Inntel Hotels Amsterdam Centre.jpg",
      rating: 4.3,
      created_at: "2024-01-01"
    },
    {
      id: 25,
      name: "Hotel-Restaurant Spaarnwoude",
      slug: "hotel-restaurant-spaarnwoude",
      description: "Charmant hotel-restaurant in Spaarnwoude met intieme jacuzzi faciliteiten en natuurlijke omgeving. Ideaal voor een romantisch uitje.",
      province_id: 2,
      city_id: 22,
      price_range: "Vanaf €145",
      facilities: ["Jacuzzi", "Restaurant", "Natuur", "Romantisch", "Parking", "Terras"],
      affiliate_link: "https://booking.com/spaarnwoude-hotel",
      image_url: "/images/Hotel-Restaurant Spaarnwoude.jpg",
      rating: 4.2,
      created_at: "2024-01-01"
    },
    {
      id: 26,
      name: "Hotel-Restaurant Nautisch Kwartier",
      slug: "hotel-restaurant-nautisch-kwartier",
      description: "Uniek nautisch hotel met maritieme wellness faciliteiten en jacuzzi. Een bijzondere ervaring voor zeeliefhebbers.",
      province_id: 2,
      city_id: 2,
      price_range: "Vanaf €175",
      facilities: ["Nautisch Theme", "Jacuzzi", "Restaurant", "Haven locatie", "Uniek design", "Wellness"],
      affiliate_link: "https://booking.com/nautisch-kwartier",
      image_url: "/images/Hotel-Restaurant Nautisch Kwartier.jpg",
      rating: 4.4,
      created_at: "2024-01-01"
    },
    {
      id: 27,
      name: "Hotel-Restaurant De Cooghen",
      slug: "hotel-restaurant-de-cooghen",
      description: "Traditioneel hotel-restaurant De Cooghen met moderne wellness en jacuzzi faciliteiten. Perfect voor een culinaire en ontspannende ervaring.",
      province_id: 2,
      city_id: 2,
      price_range: "Vanaf €165",
      facilities: ["Fine Dining", "Jacuzzi", "Traditioneel", "Wellness", "Culinair", "Bar"],
      affiliate_link: "https://booking.com/de-cooghen",
      image_url: "/images/Hotel-Restaurant De Cooghen.jpg",
      rating: 4.3,
      created_at: "2024-01-01"
    },
    {
      id: 28,
      name: "Hotel-Restaurant Heiloo",
      slug: "hotel-restaurant-heiloo",
      description: "Gastvrij hotel-restaurant in Heiloo met comfortabele jacuzzi faciliteiten en lokale charme. Een authentieke Noord-Hollandse ervaring.",
      province_id: 2,
      city_id: 23,
      price_range: "Vanaf €135",
      facilities: ["Lokale Charme", "Jacuzzi", "Restaurant", "Familie hotel", "Gratis parkeren", "Landelijk"],
      affiliate_link: "https://booking.com/heiloo-hotel",
      image_url: "/images/Hotel-Restaurant Heiloo.jpg",
      rating: 4.1,
      created_at: "2024-01-01"
    },
    {
      id: 29,
      name: "Fletcher Hotel-Restaurant Jan Van Scorel",
      slug: "fletcher-hotel-restaurant-jan-van-scorel",
      description: "Historisch Fletcher hotel vernoemd naar de beroemde schilder, met moderne wellness en jacuzzi. Kunst en ontspanning in harmonie.",
      province_id: 2,
      city_id: 2,
      price_range: "Vanaf €179",
      facilities: ["Historisch", "Jacuzzi", "Kunst theme", "Restaurant", "Wellness", "Centraal"],
      affiliate_link: "https://booking.com/fletcher-jan-van-scorel",
      image_url: "/images/Fletcher Hotel-Restaurant Jan Van Scorel.jpg",
      rating: 4.2,
      created_at: "2024-01-01"
    },
    {
      id: 30,
      name: "Van der Valk Schiphol",
      slug: "van-der-valk-schiphol",
      description: "Praktisch Van der Valk hotel bij Schiphol met ultramoderne wellness en jacuzzi faciliteiten. Perfect voor zakenreizigers en vakantiegangers.",
      province_id: 2,
      city_id: 24,
      price_range: "Vanaf €189",
      facilities: ["Luchthaven nabij", "Jacuzzi", "Business", "Wellness", "24/7 Service", "Shuttle service"],
      affiliate_link: "https://booking.com/vandervalk-schiphol",
      image_url: "/images/van-der-valk-schiphol-exterior.jpg",
      rating: 4.5,
      created_at: "2024-01-01"
    },
    {
      id: 31,
      name: "Kloosterhotel Willibrordhaeghe",
      slug: "kloosterhotel-willibrordhaeghe",
      description: "Uniek kloosterhotel met historische charme en moderne wellness faciliteiten. Rust en sereniteit in een authentieke setting met luxe jacuzzi kamers.",
      province_id: 6,
      city_id: 33,
      price_range: "Vanaf €165",
      facilities: ["Historisch klooster", "Privé Jacuzzi", "Wellness", "Restaurant", "Kapel", "Rustige ligging"],
      affiliate_link: "https://booking.com/kloosterhotel-willibrordhaeghe",
      image_url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1600&auto=format&fit=crop",
      rating: 4.6,
      created_at: "2024-01-01"
    },
    {
      id: 32,
      name: "Wellness-Hotel Trivium",
      slug: "wellness-hotel-trivium",
      description: "Geavanceerd wellness hotel met uitgebreide spa faciliteiten en kamers met moderne jacuzzi's. De perfecte combinatie van luxe en welzijn.",
      province_id: 6,
      city_id: 30,
      price_range: "Vanaf €195",
      facilities: ["Uitgebreide spa", "Privé Jacuzzi", "Zwembad", "Sauna", "Massages", "Fitness"],
      affiliate_link: "https://booking.com/wellness-hotel-trivium",
      image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop",
      rating: 4.7,
      created_at: "2024-01-01"
    },
    {
      id: 33,
      name: "Van der Valk Gilze - Tilburg",
      slug: "van-der-valk-gilze-tilburg",
      description: "Modern Van der Valk hotel bij Tilburg met comfortabele jacuzzi suites en uitstekende faciliteiten. Ideaal voor zowel zakenreizigers als vakantiegangers.",
      province_id: 6,
      city_id: 32,
      price_range: "Vanaf €175",
      facilities: ["Van der Valk kwaliteit", "Jacuzzi suites", "Restaurant", "Fitness", "Vergaderzalen", "Terras"],
      affiliate_link: "https://booking.com/vandervalk-gilze-tilburg",
      image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
      rating: 4.5,
      created_at: "2024-01-01"
    },
    {
      id: 34,
      name: "Van der Valk Vught",
      slug: "van-der-valk-vught",
      description: "Elegant Van der Valk hotel in het groene Vught met moderne wellness kamers uitgerust met bubbelbaden. Rustige ligging nabij natuurgebieden.",
      province_id: 6,
      city_id: 31,
      price_range: "Vanaf €185",
      facilities: ["Natuurlijke omgeving", "Jacuzzi", "Wellness", "Restaurant", "Terras", "Business center"],
      affiliate_link: "https://booking.com/vandervalk-vught",
      image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1600&auto=format&fit=crop",
      rating: 4.6,
      created_at: "2024-01-01"
    },
    {
      id: 35,
      name: "Van der Valk Tilburg",
      slug: "van-der-valk-tilburg",
      description: "Centraal gelegen Van der Valk hotel in Tilburg met moderne kamers met jacuzzi en uitstekende voorzieningen. Perfect voor stadsbezoek en wellness.",
      province_id: 6,
      city_id: 30,
      price_range: "Vanaf €169",
      facilities: ["Stadscentrum", "Jacuzzi kamers", "Restaurant", "Bar", "Fitness", "Parking"],
      affiliate_link: "https://booking.com/vandervalk-tilburg",
      image_url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1600&auto=format&fit=crop",
      rating: 4.4,
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
      image_url: "/images/Van der Valk Wolvega - Heerenveen.jpg",
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

export default function HomePage() {
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(mockHotels)
  const [visibleHotels, setVisibleHotels] = useState(9) // Start with 9 hotels
  const [filters, setFilters] = useState({
    province: '',
    city: '',
    priceRange: '',
    jacuzziType: ''
  })

  const mockProvinces: Province[] = [
    { id: 1, name: "Limburg", slug: "limburg", seo_text: "", created_at: "2024-01-01" },
    { id: 2, name: "Noord-Holland", slug: "noord-holland", seo_text: "", created_at: "2024-01-01" },
    { id: 3, name: "Gelderland", slug: "gelderland", seo_text: "", created_at: "2024-01-01" },
    { id: 4, name: "Zuid-Holland", slug: "zuid-holland", seo_text: "", created_at: "2024-01-01" },
    { id: 5, name: "Utrecht", slug: "utrecht", seo_text: "", created_at: "2024-01-01" },
    { id: 6, name: "Noord-Brabant", slug: "noord-brabant", seo_text: "", created_at: "2024-01-01" },
    { id: 7, name: "Groningen", slug: "groningen", seo_text: "", created_at: "2024-01-01" },
    { id: 11, name: "Zeeland", slug: "zeeland", seo_text: "", created_at: "2024-01-01" },
    { id: 12, name: "Friesland", slug: "friesland", seo_text: "", created_at: "2024-01-01" }
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
    { id: 17, name: "Renesse", slug: "renesse", province_id: 11, seo_text: "", created_at: "2024-01-01" },
    { id: 18, name: "Middelburg", slug: "middelburg", province_id: 11, seo_text: "", created_at: "2024-01-01" },
    { id: 19, name: "Goes", slug: "goes", province_id: 11, seo_text: "", created_at: "2024-01-01" },
    { id: 20, name: "Akersloot", slug: "akersloot", province_id: 2, seo_text: "", created_at: "2024-01-01" },
    { id: 21, name: "Wieringermeer", slug: "wieringermeer", province_id: 2, seo_text: "", created_at: "2024-01-01" },
    { id: 22, name: "Spaarnwoude", slug: "spaarnwoude", province_id: 2, seo_text: "", created_at: "2024-01-01" },
    { id: 23, name: "Heiloo", slug: "heiloo", province_id: 2, seo_text: "", created_at: "2024-01-01" },
    { id: 24, name: "Schiphol", slug: "schiphol", province_id: 2, seo_text: "", created_at: "2024-01-01" },
    { id: 25, name: "Groningen", slug: "groningen", province_id: 7, seo_text: "", created_at: "2024-01-01" },
    { id: 46, name: "Leeuwarden", slug: "leeuwarden", province_id: 12, seo_text: "", created_at: "2024-01-01" },
    { id: 47, name: "Sneek", slug: "sneek", province_id: 12, seo_text: "", created_at: "2024-01-01" },
    { id: 48, name: "Heerenveen", slug: "heerenveen", province_id: 12, seo_text: "", created_at: "2024-01-01" },
    { id: 49, name: "Drachten", slug: "drachten", province_id: 12, seo_text: "", created_at: "2024-01-01" },
    { id: 50, name: "Wolvega", slug: "wolvega", province_id: 12, seo_text: "", created_at: "2024-01-01" }
  ]

  // Filter logic when filters change
  useEffect(() => {
    let filtered = mockHotels

    if (filters.province) {
      const province = mockProvinces.find(p => p.slug === filters.province)
      if (province) {
        filtered = filtered.filter(hotel => hotel.province_id === province.id)
      }
    }

    if (filters.city) {
      const city = mockCities.find(c => c.slug === filters.city)
      if (city) {
        filtered = filtered.filter(hotel => hotel.city_id === city.id)
      }
    }

    if (filters.priceRange) {
      filtered = filtered.filter(hotel => {
        const price = parseInt(hotel.price_range.replace(/[^\d]/g, ''))
        switch (filters.priceRange) {
          case 'budget':
            return price >= 100 && price <= 150
          case 'mid':
            return price > 150 && price <= 250
          case 'luxury':
            return price > 250
          default:
            return true
        }
      })
    }

    if (filters.jacuzziType) {
      filtered = filtered.filter(hotel => {
        const facilitiesLower = hotel.facilities.map(f => f.toLowerCase())
        switch (filters.jacuzziType) {
          case 'prive':
            return facilitiesLower.some(f => f.includes('privé') || f.includes('jacuzzi'))
          case 'bubbelbad':
            return facilitiesLower.some(f => f.includes('bubbel'))
          case 'suite':
            return facilitiesLower.some(f => f.includes('suite') || f.includes('wellness'))
          case 'outdoor':
            return facilitiesLower.some(f => f.includes('outdoor'))
          default:
            return true
        }
      })
    }

    setFilteredHotels(filtered)
    setVisibleHotels(9) // Reset to 9 hotels when filters change
  }, [filters])

  // Function to load more hotels
  const loadMoreHotels = () => {
    setVisibleHotels(prev => prev + 6)
  }


    return (
    <main className="min-h-screen bg-light-gray">
      {/* Professional SVG Pattern Background */}
      <DotGridPattern opacity={0.06} />

      {/* Hero Section */}
      <section className="relative bg-brand-navy-900 text-pure-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Hotels met Jacuzzi in Nederland
              </h1>
              <p className="text-xl md:text-2xl text-brand-navy-200 mb-8 leading-relaxed">
                Ontdek de meest romantische wellness overnachtingen. Van luxe hotels tot intieme bed & breakfasts - 
                vind het perfecte hotel met jacuzzi voor een onvergetelijke ervaring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('filters')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Vind jouw hotel
                </button>
                <a 
                  href="#provincies" 
                  className="border-2 border-brand-orange-600 text-brand-orange-600 hover:bg-brand-orange-600 hover:text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Ontdek per regio
                </a>
        </div>
      </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop"
                alt="Luxe hotelkamer met jacuzzi - Romantisch verblijf Nederland"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange-600 text-pure-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">250+</div>
                <div className="text-sm">Hotels beschikbaar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-pure-white relative overflow-hidden">
        {/* Subtle SVG Background Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.02,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='category-pattern' patternUnits='userSpaceOnUse' width='100' height='100'%3E%3Cg fill='none' stroke='%231A2637' stroke-width='1'%3E%3Cpath d='M25 25h50v50H25z'/%3E%3Cpath d='M50 25v50'/%3E%3Cpath d='M25 50h50'/%3E%3Ccircle cx='50' cy='50' r='20'/%3E%3Ccircle cx='50' cy='50' r='10'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23category-pattern)'/%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Ontdek hotels met jacuzzi voor elk moment
            </h2>
            <p className="text-lg text-brand-navy-600 max-w-3xl mx-auto">
              Of je nu zoekt naar een <strong>goedkoop hotel met jacuzzi</strong>, een <strong>wellness hotel met jacuzzi in Nederland</strong>, 
              of een <strong>romantisch hotel met jacuzzi</strong> - wij hebben de perfecte accommodatie voor jouw droomvakantie.
            </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Goedkoop hotel met jacuzzi */}
            <Link href="/goedkoop-hotel-met-jacuzzi" className="group">
              <div className="bg-pure-white border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop"
                    alt="Goedkoop hotel met jacuzzi - Budget vriendelijke wellness"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-navy-900 text-pure-white px-3 py-1 rounded-full text-xs font-semibold">
                      Budget Vriendelijk
                    </span>
        </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors duration-300">
                    Goedkoop hotel met jacuzzi
                  </h3>
                  <p className="text-brand-navy-600 mb-6 line-clamp-2 flex-1">
                    Geniet van luxe wellness zonder de hoge kosten. Ontdek betaalbare hotels met jacuzzi 
                    faciliteiten vanaf €100 per nacht voor een perfecte prijs-kwaliteit verhouding.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 w-full justify-center group-hover:shadow-lg">
                      Bekijk aanbiedingen
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Wellness hotel met jacuzzi in Nederland */}
            <Link href="/wellness-hotel-met-jacuzzi" className="group">
              <div className="bg-pure-white border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop"
                    alt="Wellness hotel met jacuzzi in Nederland - Complete spa ervaring"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-orange-600 text-pure-white px-3 py-1 rounded-full text-xs font-semibold">
                      Complete Wellness
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors duration-300">
                    Wellness hotel met jacuzzi in Nederland
                  </h3>
                  <p className="text-brand-navy-600 mb-6 line-clamp-2 flex-1">
                    Ervaar totale ontspanning in Nederlandse wellness resorts met uitgebreide spa faciliteiten, 
                    jacuzzi's, sauna's en professionele behandelingen voor lichaam en geest.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 w-full justify-center group-hover:shadow-lg">
                      Ontdek wellness
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Romantisch hotel met jacuzzi */}
            <Link href="/romantisch-hotel-met-jacuzzi" className="group">
              <div className="bg-pure-white border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=600&auto=format&fit=crop"
                    alt="Romantisch hotel met jacuzzi - Intieme wellness ervaring"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-pink-500 text-pure-white px-3 py-1 rounded-full text-xs font-semibold">
                      Romantisch
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors duration-300">
                    Romantisch hotel met jacuzzi
                  </h3>
                  <p className="text-brand-navy-600 mb-6 line-clamp-2 flex-1">
                    Creëer onvergetelijke momenten samen in intieme hotels met privé jacuzzi's. 
                    Perfect voor verjaardagen, jubilea of gewoon een romantisch weekendje weg.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 w-full justify-center group-hover:shadow-lg">
                      Plan romantiek
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Hotels - Same style as /hotels */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-6">
              Uitgelichte Hotels met Jacuzzi
          </h2>
            <p className="text-lg text-brand-navy-600 max-w-3xl mx-auto">
              Onze top selectie van romantische hotels voor een perfecte wellness overnachting ({filteredHotels.length} hotels)
            </p>
        </div>


          {/* Filter Section */}
          <div id="filters" className="bg-pure-white rounded-2xl shadow-lg p-6 mb-8 border border-brand-navy-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Province filter */}
              <select
                value={filters.province}
                onChange={(e) => setFilters({ ...filters, province: e.target.value })}
                className="px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600"
              >
                <option value="">Alle provincies</option>
                {mockProvinces.map((province) => (
                  <option key={province.id} value={province.slug}>
                    {province.name}
                  </option>
                ))}
              </select>

              {/* City filter */}
              <select
                value={filters.city}
                onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                className="px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600"
              >
                <option value="">Alle steden</option>
                {mockCities.map((city) => (
                  <option key={city.id} value={city.slug}>
                    {city.name}
                  </option>
                ))}
              </select>

              {/* Price filter */}
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="px-4 py-3 border-2 border-brand-navy-200 rounded-lg focus:outline-none focus:border-brand-orange-600"
              >
                <option value="">Alle prijzen</option>
                <option value="budget">€100 - €150</option>
                <option value="mid">€150 - €250</option>
                <option value="luxury">€250+</option>
              </select>

              {/* Filter button */}
              <button
                className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Filter hotels ({filteredHotels.length})
              </button>
            </div>
          </div>

          {/* Current Date Widget - Left aligned */}
          <div className="flex items-center mb-8">
            <div className="bg-pure-white border border-brand-navy-200 rounded-lg px-4 py-2 shadow-sm">
              <div className="flex items-center space-x-2 text-brand-navy-600">
                <svg width="16" height="16" viewBox="0 0 16 16" className="text-brand-orange-600">
                  <path 
                    fill="currentColor" 
                    d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5 0zM2 2a1 1 0 00-1 1v1h14V3a1 1 0 00-1-1H2zM1 5v9a1 1 0 001 1h12a1 1 0 001-1V5H1z"
                  />
                  <path 
                    fill="currentColor" 
                    d="M4.5 7a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5zm3 0a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5zm3 0a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5z"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
            </div>
          </div>

          {filteredHotels.length > 0 ? (
            <>
              {/* Hotels Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredHotels.slice(0, visibleHotels).map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
              
              {/* Load More Button - Only show if there are more hotels to load */}
              {visibleHotels < filteredHotels.length && (
                <div className="text-center mt-12">
                  <button 
                    onClick={loadMoreHotels}
                    className="bg-brand-navy-900 hover:bg-brand-navy-800 text-pure-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg"
                  >
                    Meer hotels laden ({Math.min(6, filteredHotels.length - visibleHotels)} meer)
                  </button>
                </div>
              )}
            </>
        ) : (
          <div className="text-center py-12">
              <div className="text-brand-orange-600 text-6xl mb-6">🏨</div>
              <h3 className="text-2xl font-bold text-brand-navy-900 mb-4">
                Geen hotels gevonden
              </h3>
              <p className="text-brand-navy-600 text-lg mb-8">
                Probeer andere filters om meer resultaten te vinden.
              </p>
              <button 
                onClick={() => setFilters({ province: '', city: '', priceRange: '', jacuzziType: '' })}
                className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Reset filters
              </button>
          </div>
        )}
        </div>
      </section>

      {/* Province Navigation */}
      <section id="provincies" className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Ontdek per Provincie
            </h2>
            <p className="text-lg text-brand-navy-600">
              Verken de beste hotels met jacuzzi in elke provincie van Nederland
          </p>
        </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {mockProvinces.map((province) => (
              <Link 
                key={province.id}
                href={`/provincie/${province.slug}`}
                className="group bg-brand-navy-50 hover:bg-brand-navy-100 border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 text-center"
              >
                <div className="text-2xl font-bold text-brand-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors">
                  {province.name}
    </div>
                <div className="text-brand-navy-600 text-sm">
                  Ontdek hotels →
                </div>
              </Link>
            ))}
            
            {/* CTA Card to view all provinces */}
            <Link 
              href="/provincies"
              className="group bg-pure-white hover:bg-brand-orange-50 border-2 border-brand-orange-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 text-center flex flex-col justify-center min-h-[120px]"
            >
              <div className="flex items-center justify-center space-x-2 text-brand-orange-600 group-hover:text-brand-orange-700 transition-colors">
                <span className="text-lg font-semibold">Bekijk alle provincies</span>
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path 
                    d="M8 4l6 6-6 6" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="text-brand-navy-500 text-sm mt-2">
                Ontdek alle {mockProvinces.length} provincies
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Cities Navigation */}
      <section id="steden" className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Populaire Steden
            </h2>
            <p className="text-lg text-brand-navy-600">
              Ontdek jacuzzi hotels in de meest gewilde steden van Nederland
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockCities.slice(0, 8).map((city) => (
              <Link 
                key={city.id}
                href={`/stad/${city.slug}`}
                className="group bg-pure-white hover:bg-brand-navy-50 border-2 border-brand-navy-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 text-center shadow-md hover:shadow-lg"
              >
                <div className="text-xl font-bold text-brand-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors">
                  {city.name}
                </div>
                <div className="text-brand-navy-600 text-sm">
                  Bekijk hotels →
                </div>
              </Link>
            ))}
            
            {/* CTA Card to view all cities */}
            <Link 
              href="/steden"
              className="group bg-pure-white hover:bg-brand-orange-50 border-2 border-brand-orange-200 hover:border-brand-orange-600 rounded-xl p-6 transition-all duration-300 text-center flex flex-col justify-center min-h-[120px] shadow-md hover:shadow-lg"
            >
              <div className="flex items-center justify-center space-x-2 text-brand-orange-600 group-hover:text-brand-orange-700 transition-colors">
                <span className="text-lg font-semibold">Bekijk alle steden</span>
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path 
                    d="M8 4l6 6-6 6" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="text-brand-navy-500 text-sm mt-2">
                Ontdek alle {mockCities.length} steden
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Laatste Wellness Tips & Trends
            </h2>
            <p className="text-lg text-brand-navy-600 max-w-2xl mx-auto">
              Ontdek de nieuwste trends, tips en geheimen voor de perfecte wellness overnachting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <Link href="/blog/beste-jacuzzi-hotels-2024" className="group">
              <article className="bg-pure-white rounded-2xl shadow-lg hover:shadow-xl border-2 border-brand-navy-200 hover:border-brand-orange-600 transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop"
                    alt="De 10 Beste Jacuzzi Hotels van Nederland in 2024"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-navy-900 text-pure-white px-3 py-1 rounded-full text-xs font-semibold">
                      Hotel Reviews
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors duration-300 line-clamp-2">
                    De 10 Beste Jacuzzi Hotels van Nederland in 2024
                  </h3>
                  <p className="text-brand-navy-600 mb-4 line-clamp-3 flex-1">
                    Ontdek welke hotels dit jaar de meest luxueuze jacuzzi ervaringen bieden, van romantische kastelen tot moderne wellness resorts.
                  </p>
                  <div className="flex items-center justify-between text-sm text-brand-navy-500">
                    <div className="flex items-center space-x-4">
                      <span>15 December 2024</span>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>8 min</span>
                      </div>
                    </div>
                    <span className="text-brand-orange-600 font-semibold group-hover:text-brand-orange-700">
                      Lees meer →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Blog Post 2 */}
            <Link href="/blog/romantisch-weekend-jacuzzi-tips" className="group">
              <article className="bg-pure-white rounded-2xl shadow-lg hover:shadow-xl border-2 border-brand-navy-200 hover:border-brand-orange-600 transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop"
                    alt="Romantisch Weekend: Tips voor de Perfecte Jacuzzi Date"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-orange-600 text-pure-white px-3 py-1 rounded-full text-xs font-semibold">
                      Romantiek
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors duration-300 line-clamp-2">
                    Romantisch Weekend: Tips voor de Perfecte Jacuzzi Date
                  </h3>
                  <p className="text-brand-navy-600 mb-4 line-clamp-3 flex-1">
                    Maak van jullie wellness weekend een onvergetelijke ervaring met deze romantische tips en trucs voor een perfecte jacuzzi date.
                  </p>
                  <div className="flex items-center justify-between text-sm text-brand-navy-500">
                    <div className="flex items-center space-x-4">
                      <span>12 December 2024</span>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>6 min</span>
                      </div>
                    </div>
                    <span className="text-brand-orange-600 font-semibold group-hover:text-brand-orange-700">
                      Lees meer →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Blog Post 3 */}
            <Link href="/blog/wellness-trends-2024-spa-hotels" className="group">
              <article className="bg-pure-white rounded-2xl shadow-lg hover:shadow-xl border-2 border-brand-navy-200 hover:border-brand-orange-600 transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"
                    alt="Wellness Trends 2024: Wat is Hot in Spa Hotels?"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-navy-700 text-pure-white px-3 py-1 rounded-full text-xs font-semibold">
                      Wellness Trends
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors duration-300 line-clamp-2">
                    Wellness Trends 2024: Wat is Hot in Spa Hotels?
                  </h3>
                  <p className="text-brand-navy-600 mb-4 line-clamp-3 flex-1">
                    Van infrared sauna's tot zoutwater jacuzzi's - ontdek de nieuwste wellness trends die je vindt in de beste spa hotels van Nederland.
                  </p>
                  <div className="flex items-center justify-between text-sm text-brand-navy-500">
                    <div className="flex items-center space-x-4">
                      <span>8 December 2024</span>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>5 min</span>
                      </div>
                    </div>
                    <span className="text-brand-orange-600 font-semibold group-hover:text-brand-orange-700">
                      Lees meer →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* CTA to Blog Page */}
          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Bekijk alle wellness tips</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Top 10 Hotels met Jacuzzi op de Kamer */}
      <section className="py-16 bg-light-gray relative overflow-hidden">
        {/* Subtle SVG Background Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.03,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid-pattern' patternUnits='userSpaceOnUse' width='60' height='60'%3E%3Cg fill='none' stroke='%231A2637' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3Cpath d='M15 15h30v30H15z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid-pattern)'/%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 mb-4">
              Top 10 hotels met jacuzzi op de kamer
            </h2>
            <p className="text-lg text-brand-navy-600 max-w-3xl mx-auto">
              Ontdek de meest luxueuze <strong>hotels met jacuzzi op kamer</strong> in Nederland. 
              Deze exclusieve selectie biedt romantische wellness suites met privé jacuzzi faciliteiten voor de perfecte ontspanningservaring.
            </p>
          </div>

          <div className="space-y-6">
            {/* Hotel #1 - Van der Valk Hotel Amsterdam */}
            <div className="bg-pure-white rounded-2xl shadow-lg border-2 border-brand-navy-200 overflow-hidden hover:shadow-xl hover:border-brand-orange-600 transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 h-48 lg:h-auto relative">
                  <Image
                    src="/images/Van der Valk De Bilt - Utrecht.jpg"
                    alt="Van der Valk Hotel Amsterdam - Jacuzzi op kamer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="bg-brand-orange-600 text-pure-white rounded-lg px-2 py-1 shadow-lg">
                      <span className="text-xs font-bold uppercase">Meest geboekt deze maand</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-6 flex flex-col lg:flex-row lg:items-center">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="bg-brand-navy-900 text-pure-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        #1
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-brand-navy-900 mb-1">Van der Valk Hotel Amsterdam</h3>
                        <p className="text-brand-navy-500 text-sm mb-3">Amsterdam, Noord-Holland</p>
                        <p className="text-brand-navy-600 leading-relaxed line-clamp-2">
                          Luxueus hotel in het hart van Amsterdam met elegante suites voorzien van private jacuzzi's. 
                          Perfect voor een romantische stedentrip met wellness ervaring.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-4 w-full lg:w-auto">
                    <Link 
                      href="/hotel/van-der-valk-amsterdam"
                      className="block text-center lg:inline-block bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full lg:w-auto"
                    >
                      Bekijk hotel
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel #2 - Olympic Hotel */}
            <div className="bg-pure-white rounded-2xl shadow-lg border-2 border-brand-navy-200 overflow-hidden hover:shadow-xl hover:border-brand-orange-600 transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 h-48 lg:h-auto relative">
                  <Image
                    src="/images/Olympic Hotel.jpg"
                    alt="Olympic Hotel - Jacuzzi op kamer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="lg:w-2/3 p-6 flex flex-col lg:flex-row lg:items-center">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="bg-brand-navy-900 text-pure-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        #2
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-brand-navy-900 mb-1">Olympic Hotel</h3>
                        <p className="text-brand-navy-500 text-sm mb-3">Amsterdam, Noord-Holland</p>
                        <p className="text-brand-navy-600 leading-relaxed line-clamp-2">
                          Stijlvol Olympic Hotel met luxe wellness faciliteiten en privé jacuzzi's. 
                          Een oase van rust in het hart van de stad met uitstekende service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-4 w-full lg:w-auto">
                    <Link 
                      href="/hotel/olympic-hotel"
                      className="block text-center lg:inline-block bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full lg:w-auto"
                    >
                      Bekijk hotel
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel #3 - Kasteel Bloemendal */}
            <div className="bg-pure-white rounded-2xl shadow-lg border-2 border-brand-navy-200 overflow-hidden hover:shadow-xl hover:border-brand-orange-600 transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 h-48 lg:h-auto relative">
                  <Image
                    src="/images/Kasteel Bloemendal.jpg"
                    alt="Kasteel Bloemendal - Jacuzzi op kamer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="lg:w-2/3 p-6 flex flex-col lg:flex-row lg:items-center">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="bg-brand-navy-900 text-pure-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        #3
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-brand-navy-900 mb-1">Kasteel Bloemendal</h3>
                        <p className="text-brand-navy-500 text-sm mb-3">Maastricht, Limburg</p>
                        <p className="text-brand-navy-600 leading-relaxed line-clamp-2">
                          Historisch kasteel met moderne wellness suites en luxe jacuzzi's. 
                          Een sprookjesachtige locatie voor een onvergetelijke romantische ervaring.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-4 w-full lg:w-auto">
                    <Link 
                      href="/hotel/kasteel-bloemendal"
                      className="block text-center lg:inline-block bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full lg:w-auto"
                    >
                      Bekijk hotel
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel #4 - Fletcher Wellness Hotel */}
            <div className="bg-pure-white rounded-2xl shadow-lg border-2 border-brand-navy-200 overflow-hidden hover:shadow-xl hover:border-brand-orange-600 transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 h-48 lg:h-auto relative">
                  <Image
                    src="/images/Fletcher Hotel-Restaurant Jan Van Scorel.jpg"
                    alt="Fletcher Wellness Hotel - Jacuzzi op kamer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="lg:w-2/3 p-6 flex flex-col lg:flex-row lg:items-center">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="bg-brand-navy-900 text-pure-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        #4
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-brand-navy-900 mb-1">Fletcher Wellness Hotel</h3>
                        <p className="text-brand-navy-500 text-sm mb-3">Arnhem, Gelderland</p>
                        <p className="text-brand-navy-600 leading-relaxed line-clamp-2">
                          Ontspanning pur sang in dit wellness hotel met jacuzzi kamers en uitgebreide spa faciliteiten. 
                          Ideaal voor een complete wellness ervaring.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-4 w-full lg:w-auto">
                    <Link 
                      href="/hotel/fletcher-wellness-hotel"
                      className="block text-center lg:inline-block bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full lg:w-auto"
                    >
                      Bekijk hotel
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel #5 - Inntel Hotels Amsterdam Centre */}
            <div className="bg-pure-white rounded-2xl shadow-lg border-2 border-brand-navy-200 overflow-hidden hover:shadow-xl hover:border-brand-orange-600 transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 h-48 lg:h-auto relative">
                  <Image
                    src="/images/Inntel Hotels Amsterdam Centre.jpg"
                    alt="Inntel Hotels Amsterdam Centre - Jacuzzi op kamer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="lg:w-2/3 p-6 flex flex-col lg:flex-row lg:items-center">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="bg-brand-navy-900 text-pure-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        #5
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-brand-navy-900 mb-1">Inntel Hotels Amsterdam Centre</h3>
                        <p className="text-brand-navy-500 text-sm mb-3">Amsterdam, Noord-Holland</p>
                        <p className="text-brand-navy-600 leading-relaxed line-clamp-2">
                          Modern Inntel hotel in het centrum met elegante jacuzzi suites en wellness faciliteiten. 
                          Perfecte locatie voor stad en ontspanning gecombineerd.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-4 w-full lg:w-auto">
                    <Link 
                      href="/hotel/inntel-hotels-amsterdam-centre"
                      className="block text-center lg:inline-block bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full lg:w-auto"
                    >
                      Bekijk hotel
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel #6 - Rotterdam Marina Hotel */}
            <div className="bg-pure-white rounded-2xl shadow-lg border-2 border-brand-navy-200 overflow-hidden hover:shadow-xl hover:border-brand-orange-600 transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 h-48 lg:h-auto relative">
                  <Image
                    src="/images/Wellness-Hotel Trivium.jpg"
                    alt="Rotterdam Marina Hotel - Jacuzzi op kamer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="lg:w-2/3 p-6 flex flex-col lg:flex-row lg:items-center">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="bg-brand-navy-900 text-pure-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        #6
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-brand-navy-900 mb-1">Rotterdam Marina Hotel</h3>
                        <p className="text-brand-navy-500 text-sm mb-3">Rotterdam, Zuid-Holland</p>
                        <p className="text-brand-navy-600 leading-relaxed line-clamp-2">
                          Modern boutique hotel met uitzicht op de Maas, luxe suites met bubbelbaden en wellness faciliteiten. 
                          Unieke locatie aan het water.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-4 w-full lg:w-auto">
                    <Link 
                      href="/hotel/rotterdam-marina-hotel"
                      className="block text-center lg:inline-block bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full lg:w-auto"
                    >
                      Bekijk hotel
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel #7 - Utrecht Central Wellness */}
            <div className="bg-pure-white rounded-2xl shadow-lg border-2 border-brand-navy-200 overflow-hidden hover:shadow-xl hover:border-brand-orange-600 transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 h-48 lg:h-auto relative">
                  <Image
                    src="/images/Mitland Hotel Utrecht.jpg"
                    alt="Utrecht Central Wellness - Jacuzzi op kamer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="lg:w-2/3 p-6 flex flex-col lg:flex-row lg:items-center">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="bg-brand-navy-900 text-pure-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        #7
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-brand-navy-900 mb-1">Utrecht Central Wellness</h3>
                        <p className="text-brand-navy-500 text-sm mb-3">Utrecht, Utrecht</p>
                        <p className="text-brand-navy-600 leading-relaxed line-clamp-2">
                          Stijlvol hotel in het centrum van Utrecht met privé jacuzzi's en complete wellness ervaring. 
                          Perfecte uitvalsbasis voor cultuur en ontspanning.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-4 w-full lg:w-auto">
                    <Link 
                      href="/hotel/utrecht-central-wellness"
                      className="block text-center lg:inline-block bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full lg:w-auto"
                    >
                      Bekijk hotel
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel #8 - Van der Valk Akersloot */}
            <div className="bg-pure-white rounded-2xl shadow-lg border-2 border-brand-navy-200 overflow-hidden hover:shadow-xl hover:border-brand-orange-600 transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 h-48 lg:h-auto relative">
                  <Image
                    src="/images/Van der Valk Akersloot.jpg"
                    alt="Van der Valk Akersloot - Jacuzzi op kamer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="lg:w-2/3 p-6 flex flex-col lg:flex-row lg:items-center">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="bg-brand-navy-900 text-pure-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        #8
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-brand-navy-900 mb-1">Van der Valk Akersloot</h3>
                        <p className="text-brand-navy-500 text-sm mb-3">Akersloot, Noord-Holland</p>
                        <p className="text-brand-navy-600 leading-relaxed line-clamp-2">
                          Luxe Van der Valk hotel met prachtige wellness faciliteiten en jacuzzi. 
                          Gelegen in het groene hart van Noord-Holland voor rust en natuur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-4 w-full lg:w-auto">
                    <Link 
                      href="/hotel/van-der-valk-akersloot"
                      className="block text-center lg:inline-block bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full lg:w-auto"
                    >
                      Bekijk hotel
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel #9 - Eindhoven Design Hotel */}
            <div className="bg-pure-white rounded-2xl shadow-lg border-2 border-brand-navy-200 overflow-hidden hover:shadow-xl hover:border-brand-orange-600 transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 h-48 lg:h-auto relative">
                  <Image
                    src="/images/Inntel Hotels Utrecht Centre.jpg"
                    alt="Eindhoven Design Hotel - Jacuzzi op kamer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="lg:w-2/3 p-6 flex flex-col lg:flex-row lg:items-center">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="bg-brand-navy-900 text-pure-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        #9
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-brand-navy-900 mb-1">Eindhoven Design Hotel</h3>
                        <p className="text-brand-navy-500 text-sm mb-3">Eindhoven, Noord-Brabant</p>
                        <p className="text-brand-navy-600 leading-relaxed line-clamp-2">
                          Innovatief design hotel met futuristische wellness suites en state-of-the-art jacuzzi faciliteiten. 
                          Modern design ontmoet luxe ontspanning.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-4 w-full lg:w-auto">
                    <Link 
                      href="/hotel/eindhoven-design-hotel"
                      className="block text-center lg:inline-block bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full lg:w-auto"
                    >
                      Bekijk hotel
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel #10 - Van der Valk Schiphol */}
            <div className="bg-pure-white rounded-2xl shadow-lg border-2 border-brand-navy-200 overflow-hidden hover:shadow-xl hover:border-brand-orange-600 transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 h-48 lg:h-auto relative">
                  <Image
                    src="/images/van-der-valk-schiphol-exterior.jpg"
                    alt="Van der Valk Schiphol - Jacuzzi op kamer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="lg:w-2/3 p-6 flex flex-col lg:flex-row lg:items-center">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="bg-brand-navy-900 text-pure-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        #10
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-brand-navy-900 mb-1">Van der Valk Schiphol</h3>
                        <p className="text-brand-navy-500 text-sm mb-3">Schiphol, Noord-Holland</p>
                        <p className="text-brand-navy-600 leading-relaxed line-clamp-2">
                          Praktisch Van der Valk hotel bij Schiphol met ultramoderne wellness en jacuzzi faciliteiten. 
                          Perfect voor zakenreizigers en vakantiegangers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-4 w-full lg:w-auto">
                    <Link 
                      href="/hotel/van-der-valk-schiphol"
                      className="block text-center lg:inline-block bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full lg:w-auto"
                    >
                      Bekijk hotel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA to All Hotels */}
          <div className="text-center mt-12">
            <Link 
              href="/hotel-met-jacuzzi" 
              className="inline-flex items-center bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Bekijk alle hotels met jacuzzi</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-brand-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-brand-navy mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-900 text-center mb-8">
              De Ultimate Gids voor Hotels met Jacuzzi in Nederland
            </h2>
            
            <div className="text-brand-navy-700 leading-relaxed space-y-6">
              <p>
                Een <strong>hotel met jacuzzi</strong> boeken in Nederland is de perfecte manier om te ontspannen en 
                te genieten van een luxueuze wellness overnachting. Of je nu zoekt naar een romantisch weekend weg 
                of gewoon wilt ontsnappen aan de dagelijkse stress, Nederland biedt een uitgebreide selectie van 
                hotels met privé jacuzzi's, bubbelbaden en wellness faciliteiten.
              </p>

              <p>
                Van historische kastelen in Limburg tot moderne design hotels in Amsterdam - er is voor elke 
                smaak en budget wel een geschikt <strong>romantisch hotel</strong> te vinden. Veel hotels combineren 
                hun jacuzzi faciliteiten met uitgebreide spa's, sauna's en massagebehandelingen voor een complete 
                wellness ervaring.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
                Waarom Kiezen voor een Wellness Overnachting?
              </h3>
              
              <p>
                Een <strong>wellness overnachting</strong> in een hotel met jacuzzi biedt veel meer dan alleen een 
                comfortabele slaapplaats. Het is een investering in je welzijn en relatie. De warme, bruisende 
                bubbels van een jacuzzi helpen bij het verlichten van spierspanning, verbeteren de doorbloeding 
                en zorgen voor diepe ontspanning.
              </p>

              <p>
                Moderne hotels begrijpen dat gasten op zoek zijn naar unieke ervaringen. Daarom vind je steeds 
                meer kamers met luxe badkamers uitgerust met twee-persoons jacuzzi's, regendouches en zelfs 
                sauna's. Sommige suites beschikken over een apart wellness gedeelte met panoramische uitzichten.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
                Populaire Bestemmingen voor Jacuzzi Hotels
              </h3>
              
              <p>
                <strong>Amsterdam</strong> staat bekend om zijn boutique hotels met designbadkamers en luxe 
                wellness faciliteiten. Voor een meer landelijke setting bieden provincies zoals 
                <strong>Gelderland</strong> en <strong>Limburg</strong> prachtige kasteel hotels en wellness 
                resorts omgeven door natuur.
              </p>

              <p>
                De <strong>Veluwe</strong> herbergt enkele van Nederland's meest luxueuze spa hotels, terwijl 
                de kustprovincies zoals <strong>Zeeland</strong> en <strong>Noord-Holland</strong> hotels bieden 
                met zeezicht en thalassotherapie. Zuid-Holland combineert stedelijke sophistication met 
                ontspanningsmogelijkheden in historische steden als Delft en Leiden.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy-900 mt-8 mb-4">
                Tips voor het Boeken van jouw Perfecte Hotel met Jacuzzi
              </h3>
              
              <p>
                Controleer altijd of de jacuzzi privé is op je kamer of gedeeld met andere gasten. Veel hotels 
                bieden verschillende opties: van intieme twee-persoons bubbelbaden tot luxe suites met complete 
                wellness ruimtes. Lees reviews van andere gasten om een goed beeld te krijgen van de kwaliteit 
                en netheid van de faciliteiten.
              </p>

              <p>
                Boek ruim van tevoren, vooral voor weekenden en feestdagen. De meest gewilde kamers met jacuzzi 
                zijn vaak als eerste uitverkocht. Overweeg een midweek verblijf voor betere beschikbaarheid en 
                vaak aantrekkelijkere tarieven. Veel hotels bieden arrangementen inclusief diner, wellness 
                behandelingen of champagne voor extra romantiek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-navy-900 text-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor jouw Perfecte Wellness Overnachting?
          </h2>
          <p className="text-xl text-brand-navy-200 mb-8 max-w-2xl mx-auto">
            Ontdek vandaag nog de meest romantische hotels met jacuzzi in Nederland. 
            Van luxe kastelen tot moderne wellness resorts - jouw droomverblijf wacht op je.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#filters" 
              className="bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
            >
              Zoek jouw hotel nu
            </a>
            <a 
              href="/contact" 
              className="border-2 border-brand-orange-600 text-brand-orange-600 hover:bg-brand-orange-600 hover:text-pure-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
            >
              Persoonlijk advies
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-brand-navy-800 rounded-xl p-6">
              <div className="text-2xl font-bold text-brand-orange-600 mb-2">250+</div>
              <div className="text-brand-navy-200">Beschikbare Hotels</div>
            </div>
            <div className="bg-brand-navy-800 rounded-xl p-6">
              <div className="text-2xl font-bold text-brand-orange-600 mb-2">4.8★</div>
              <div className="text-brand-navy-200">Gemiddelde Beoordeling</div>
            </div>
            <div className="bg-brand-navy-800 rounded-xl p-6">
              <div className="text-2xl font-bold text-brand-orange-600 mb-2">24/7</div>
              <div className="text-brand-navy-200">Klantenservice</div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TravelAgency',
            name: 'Hotels met Jacuzzi Nederland',
            description: 'Specialist in romantische hotels met jacuzzi en wellness overnachtingen in Nederland. Vind het perfecte hotel voor een onvergetelijke ervaring.',
            url: 'https://jacuzzihotels.nl',
            sameAs: [
              'https://facebook.com/jacuzzihotelsnl',
              'https://instagram.com/jacuzzihotelsnl'
            ],
            priceRange: '€100-€350',
            areaServed: {
              '@type': 'Country',
              name: 'Nederland'
            }
          })
        }}
      />
    </main>
  )
}
