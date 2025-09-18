'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Monitor scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user has scrolled down 50% of the page
      const scrolled = document.documentElement.scrollTop
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercentage = (scrolled / maxHeight) * 100

      if (scrollPercentage > 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility)

    // Clean up
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-brand-navy-900 hover:bg-brand-orange-600 text-pure-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-orange-600 focus:ring-offset-2"
          aria-label="Scroll naar boven"
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </button>
      )}
    </>
  )
}
