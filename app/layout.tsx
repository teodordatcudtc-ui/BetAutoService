import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://betautoservice.ro'),
  title: 'Bet Auto Service - Service Auto Profesional în București',
  description: 'Service auto profesional în București. Reparații, diagnoză, schimb ulei, roți și multe altele. Programează o vizită la Strada Drumul Garii 8. Telefon: 0726226622',
  keywords: 'service auto, reparații auto, București, diagnoză auto, schimb ulei, roți, Bet Auto Service',
  authors: [{ name: 'Bet Auto Service' }],
  openGraph: {
    title: 'Bet Auto Service - Service Auto Profesional în București',
    description: 'Service auto profesional în București. Reparații, diagnoză, schimb ulei, roți și multe altele.',
    type: 'website',
    locale: 'ro_RO',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
