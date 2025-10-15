'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import ServicesPreview from '@/components/ServicesPreview'
import AboutPreview from '@/components/AboutPreview'
import ContactPreview from '@/components/ContactPreview'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <Testimonials />
      <ContactPreview />
    </div>
  )
}
