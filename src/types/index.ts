export interface FilterState {
  province: string
  city: string
  priceRange: string
}

export interface HotelCardProps {
  hotel: {
    id: number
    name: string
    slug: string
    description: string
    price_range: string
    facilities: string[]
    affiliate_link: string
    image_url: string
    rating: number
    popular?: boolean
    province_id?: number
    city_id?: number
  }
}

export interface FilterBarProps {
  provinces: Array<{ id: number; name: string; slug: string }>
  cities: Array<{ id: number; name: string; slug: string; province_id: number }>
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  priceOptions: string[]
}
