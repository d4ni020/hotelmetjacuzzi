'use client'

interface BookingButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export default function BookingButton({ variant = 'primary', children, className = '' }: BookingButtonProps) {
  const handleBookingClick = () => {
    // Track affiliate click
    if (typeof window !== 'undefined') {
      // Analytics tracking would go here
      console.log('Affiliate click tracked');
      // Redirect to actual affiliate link
      window.open('https://booking.com/hotel-amsterdam-canal-suite', '_blank');
    }
  }

  const baseClasses = variant === 'primary' 
    ? 'bg-brand-orange-600 hover:bg-brand-orange-700 text-pure-white'
    : 'bg-pure-white text-brand-navy-900'

  return (
    <button
      onClick={handleBookingClick}
      className={`${baseClasses} font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  )
}
