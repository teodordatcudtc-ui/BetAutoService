'use client'

import { useEffect, useState } from 'react'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import MapSection from '@/components/MapSection'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`min-h-screen pt-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <ContactHero />
      <div className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <ContactForm />
                <ContactInfo />
              </div>
              <div>
                <MapSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
