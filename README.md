# JacuzziHotels - Next.js Affiliate Website

Een moderne affiliate website voor hotels met jacuzzi, gebouwd met Next.js, TypeScript, Tailwind CSS en Supabase.

## Features

- 🏨 **Homepage met filterbalk**: Filter op provincie, stad en prijsklasse
- 🎯 **Affiliate tracking**: Click tracking voor affiliate links
- 📱 **Responsive design**: Werkt perfect op desktop en mobiel
- ⚡ **Snelle performance**: Next.js App Router met optimale SEO
- 🎨 **Modern design**: Romantische maar frisse uitstraling
- 🔍 **SEO geoptimaliseerd**: Metadata, structured data en semantische HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Deployment**: Vercel (aanbevolen)

## Setup

### 1. Clone en installeer dependencies

```bash
cd /Users/gebruiker/vibe-coding
npm install
```

### 2. Supabase setup

1. Maak een nieuw project aan op [supabase.com](https://supabase.com)
2. Ga naar Settings > API en kopieer je URL en anon key
3. Maak een `.env.local` bestand:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

4. Run het SQL schema in je Supabase SQL editor (zie `supabase-schema.sql`)

### 3. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Database Schema

### Provinces
- `id`, `name`, `slug`, `seo_text`, `created_at`

### Cities  
- `id`, `name`, `slug`, `province_id`, `seo_text`, `created_at`

### Hotels
- `id`, `name`, `slug`, `description`, `province_id`, `city_id`
- `price_range`, `facilities` (JSONB), `affiliate_link`, `image_url`, `rating`, `created_at`

## Customization

### Kleuren aanpassen
Pas de kleuren aan in `tailwind.config.js` of gebruik CSS custom properties.

### Affiliate links
Vervang de `affiliate_link` waarden in de database door echte affiliate links van je netwerk.

### Click tracking
De `handleAffiliateClick` functie in `page.tsx` kan worden uitgebreid met analytics (Google Analytics, etc.).

## Deployment

### Vercel (aanbevolen)
1. Push naar GitHub
2. Verbind repository met Vercel
3. Voeg environment variables toe
4. Deploy automatisch

### Andere platforms
- Netlify
- Railway
- DigitalOcean App Platform

## SEO Features

- ✅ Semantische HTML structuur
- ✅ Meta tags en Open Graph
- ✅ Responsive images met Next.js Image
- ✅ Fast loading met App Router
- ✅ Structured data ready (uitbreidbaar)

## Juridisch

- Affiliate disclosure in footer
- Privacy policy pagina toevoegen
- Cookie consent implementeren

## Support

Voor vragen of problemen, check de Next.js en Supabase documentatie.