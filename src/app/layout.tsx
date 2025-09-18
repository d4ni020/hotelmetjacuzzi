import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hotels met Jacuzzi | Beste hoteltips & deals',
  description: 'Ontdek de mooiste hotels met jacuzzi op de kamer of spa. Vergelijk prijzen, bekijk foto\'s en klik door naar aanbieders met de beste deals.',
  keywords: 'hotels met jacuzzi, wellness hotels, romantische hotels, spa hotels, jacuzzi op kamer',
  authors: [{ name: 'JacuzziHotels' }],
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