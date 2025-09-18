import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ hotelId: string }> }
) {
  try {
    const { hotelId: hotelIdParam } = await params
    const hotelId = parseInt(hotelIdParam)
    
    if (isNaN(hotelId)) {
      return NextResponse.json({ error: 'Invalid hotel ID' }, { status: 400 })
    }

    // Get hotel data from Supabase
    const { data: hotel, error: hotelError } = await supabase
      .from('hotels')
      .select('id, name, affiliate_link')
      .eq('id', hotelId)
      .single()

    if (hotelError || !hotel) {
      return NextResponse.json({ error: 'Hotel not found' }, { status: 404 })
    }

    if (!hotel.affiliate_link) {
      return NextResponse.json({ error: 'No affiliate link available' }, { status: 404 })
    }

    // Get request information for logging
    const userAgent = request.headers.get('user-agent') || ''
    const referer = request.headers.get('referer') || ''
    const forwardedFor = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const ipAddress = forwardedFor?.split(',')[0] || realIp || 'unknown'

    // Log the click event to Supabase
    const { error: logError } = await supabase
      .from('affiliate_clicks')
      .insert({
        hotel_id: hotel.id,
        hotel_name: hotel.name,
        affiliate_link: hotel.affiliate_link,
        user_agent: userAgent,
        ip_address: ipAddress,
        referer: referer
      })

    if (logError) {
      console.error('Error logging affiliate click:', logError)
      // Continue with redirect even if logging fails
    }

    // Create GA4 tracking URL with affiliate_click event
    const trackingParams = new URLSearchParams({
      event: 'affiliate_click',
      hotel_id: hotelId.toString(),
      hotel_name: hotel.name,
      affiliate_link: hotel.affiliate_link,
      timestamp: new Date().toISOString()
    })

    // Add GA4 tracking to the affiliate link
    const affiliateUrl = new URL(hotel.affiliate_link)
    trackingParams.forEach((value, key) => {
      affiliateUrl.searchParams.set(`ga4_${key}`, value)
    })

    // Perform 302 redirect to affiliate link with GA4 tracking
    return NextResponse.redirect(affiliateUrl.toString(), { status: 302 })

  } catch (error) {
    console.error('Error in affiliate redirect:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
