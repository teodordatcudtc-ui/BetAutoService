'use client'

import { useEffect, useState } from 'react'
import AboutHero from '@/components/AboutHero'
import TeamSection from '@/components/TeamSection'
import ValuesSection from '@/components/ValuesSection'
import HistorySection from '@/components/HistorySection'

export default function DespreNoi() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`min-h-screen pt-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <AboutHero />
      <HistorySection />
      <ValuesSection />
      <TeamSection />
    </div>
  )
}
