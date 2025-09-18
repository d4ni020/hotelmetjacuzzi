import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Province {
  id: number
  name: string
  slug: string
  seo_text: string
  created_at: string
}

export interface City {
  id: number
  name: string
  slug: string
  province_id: number
  seo_text: string
  latitude?: number
  longitude?: number
  created_at: string
}

export interface Hotel {
  id: number
  name: string
  slug: string
  description: string
  province_id: number
  city_id: number
  price_range: string
  facilities: string[]
  affiliate_link: string
  image_url: string
  rating: number
  popular?: boolean
  created_at: string
}

export interface HotelRoom {
  id: number
  hotel_id: number
  name: string
  description: string
  price_range: string
  image_url: string
  features: string[]
  created_at: string
}

export interface AffiliateClick {
  id: number
  hotel_id: number
  hotel_name: string
  affiliate_link: string
  user_agent: string
  ip_address: string
  referer: string
  clicked_at: string
}
