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

  const getServiceSlug = (title: string) => {
    const slugMap: Record<string, string> = {
      'Reparații Auto': 'reparatii-auto',
      'Diagnoză Tehnică': 'diagnoza-tehnica',
      'Schimb Ulei': 'schimb-ulei',
      'Montaj Roți': 'montaj-roti',
      'ITP': 'itp',
      'Service Rapid': 'service-rapid'
    }
    return slugMap[title] || title.toLowerCase().replace(/ă/g, 'a').replace(/ț/g, 't').replace(/î/g, 'i').replace(/â/g, 'a').replace(/ș/g, 's').replace(/\s+/g, '-')
  }

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
    <section id="services-preview" className="py-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark-900 mb-4 leading-tight">
            Serviciile <span className="text-gradient">Noastre</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Servicii profesionale pentru toate nevoile tale auto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 px-4 sm:px-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                y: isVisible ? 0 : 60,
                scale: isVisible ? 1 : 0.9
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-modern group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/5 transition-all duration-500"></div>
              
              {/* Icon with glow effect */}
              <div className="relative mb-5">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className={`relative w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-black text-dark-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                {service.description}
              </p>
              <Link
                href={`/servicii/${getServiceSlug(service.title)}`}
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-all duration-300 text-sm group-hover:gap-2"
              >
                <span>Află mai multe</span>
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/servicii"
            className="btn-primary text-base px-8 py-3.5 inline-flex items-center space-x-2 group"
          >
            <span>Vezi Toate Serviciile</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
