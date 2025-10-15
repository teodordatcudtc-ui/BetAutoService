'use client'

import { useEffect, useState } from 'react'
import ServicesList from '@/components/ServicesList'
import ServiceDetails from '@/components/ServiceDetails'

export default function Servicii() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`min-h-screen pt-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Serviciile <span className="text-gradient">Noastre</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Oferim o gamă completă de servicii auto profesionale pentru a-ți menține vehiculul în stare perfectă
              </p>
            </div>
            <ServicesList />
            <ServiceDetails />
          </div>
        </div>
      </div>
    </div>
  )
}
