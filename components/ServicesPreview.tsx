'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Wrench, 
  Settings, 
  Droplets, 
  Car, 
  Shield, 
  Clock,
  ArrowRight 
} from 'lucide-react'

export default function ServicesPreview() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('services-preview')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const services = [
    {
      icon: Wrench,
      title: 'Reparații Auto',
      description: 'Reparații complete pentru toate mărcile și modelele de autovehicule',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Settings,
      title: 'Diagnoză Tehnică',
      description: 'Diagnoză computerizată cu echipamente de ultimă generație',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Droplets,
      title: 'Schimb Ulei',
      description: 'Schimb ulei și filtre cu produse de calitate superioară',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Car,
      title: 'Montaj Roți',
      description: 'Montaj, echilibrare și aliniere roți pentru siguranță maximă',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'ITP',
      description: 'Inspecție tehnică periodică și pregătire pentru ITP',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Service Rapid',
      description: 'Reparații rapide pentru probleme minore și urgente',
      color: 'from-pink-500 to-pink-600'
    }
  ]

  return (
    <section id="services-preview" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Serviciile <span className="text-gradient">Noastre</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferim o gamă completă de servicii auto profesionale pentru a-ți menține vehiculul în stare perfectă
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Link
                href="/servicii"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 group-hover:translate-x-1"
              >
                Află mai multe
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/servicii"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
          >
            <span>Vezi Toate Serviciile</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
