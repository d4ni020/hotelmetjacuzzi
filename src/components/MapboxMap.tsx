'use client'

import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

interface MapboxMapProps {
  longitude: number
  latitude: number
  hotelName: string
  address: string
  className?: string
}

export default function MapboxMap({ longitude, latitude, hotelName, address, className = '' }: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    // Set Mapbox access token
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.eyJ1IjoiZGFuaWVsbTg2ZGFuaWVsIiwiYSI6ImNtZmgzcXh3ZzA2amMyanF3MGtjbWFpa2sifQ.a8JrNOMPgc_LzLvT-wU3eQ'

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [longitude, latitude],
      zoom: 14,
      attributionControl: false
    })

    // Add custom marker
    const markerElement = document.createElement('div')
    markerElement.className = 'custom-marker'
    markerElement.style.cssText = `
      width: 32px;
      height: 32px;
      background-color: #F36F21;
      border: 4px solid white;
      border-radius: 50%;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform 0.2s ease;
    `
    
    markerElement.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" style="color: white;">
        <path fill="currentColor" d="M8 16s6-5.582 6-10A6 6 0 0 0 2 6c0 4.418 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
      </svg>
    `
    
    markerElement.addEventListener('mouseenter', () => {
      markerElement.style.transform = 'scale(1.1)'
    })
    
    markerElement.addEventListener('mouseleave', () => {
      markerElement.style.transform = 'scale(1)'
    })

    new mapboxgl.Marker(markerElement)
      .setLngLat([longitude, latitude])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-2">
              <h3 class="font-bold text-brand-navy-900 mb-1">${hotelName}</h3>
              <p class="text-sm text-brand-navy-600">${address}</p>
            </div>
          `)
      )
      .addTo(map.current)

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')

    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [longitude, latitude, hotelName, address])

  const openInMapbox = () => {
    const mapboxUrl = `https://www.mapbox.com/search/?query=${encodeURIComponent(address)}`
    window.open(mapboxUrl, '_blank')
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div 
        ref={mapContainer} 
        className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-brand-navy-200"
      />
      <div className="text-center">
        <button
          onClick={openInMapbox}
          className="inline-flex items-center bg-brand-navy-900 hover:bg-brand-navy-800 text-pure-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" className="mr-2">
            <path fill="currentColor" d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
          </svg>
          Open in Mapbox →
        </button>
      </div>
    </div>
  )
}
