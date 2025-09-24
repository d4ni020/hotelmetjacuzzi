import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  title: 'Hotels met Jacuzzi | Beste hoteltips & deals',
  description: 'Ontdek de mooiste hotels met jacuzzi op de kamer of spa. Vergelijk prijzen, bekijk foto\'s en klik door naar aanbieders met de beste deals.',
  keywords: 'hotels met jacuzzi, wellness hotels, romantische hotels, spa hotels, jacuzzi op kamer',
  authors: [{ name: 'Hotelmetjacuzzi.net' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
      { url: '/favicon.svg', sizes: '32x32', type: 'image/svg+xml' }
    ]
  },
  openGraph: {
    title: 'Hotels met Jacuzzi | Beste hoteltips & deals',
    description: 'Ontdek de mooiste hotels met jacuzzi op de kamer of spa. Vergelijk prijzen, bekijk foto\'s en klik door naar aanbieders met de beste deals.',
    type: 'website',
    locale: 'nl_NL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotels met Jacuzzi | Beste hoteltips & deals',
    description: 'Ontdek de mooiste hotels met jacuzzi op de kamer of spa. Vergelijk prijzen, bekijk foto\'s en klik door naar aanbieders met de beste deals.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" suppressHydrationWarning={true}>
      <head>
        <link rel="preload" href="/images/Amsterdam - Hero.jpg" as="image" />
        <link rel="preload" href="/images/Utrecht - Domtoren - Hero.jpg" as="image" />
        <link rel="preload" href="/images/Maastricht - Hero.jpg" as="image" />
      </head>
      <body className={inter.className}>
        {/* Professional Sticky Navbar */}
        <Navbar />

        <main>{children}</main>

        {/* Professional Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </body>
    </html>
  )
}