'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Wrench, 
  Settings, 
  Droplets, 
  Car, 
  Shield, 
  Clock,
  Battery,
  Gauge,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function ServicesList() {
  const services = [
    {
      icon: Wrench,
      title: 'Reparații Auto Complete',
      description: 'Reparații pentru toate mărcile și modelele de autovehicule',
      features: ['Motor', 'Transmisie', 'Sistem de frânare', 'Suspensie'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Settings,
      title: 'Diagnoză Tehnică',
      description: 'Diagnoză computerizată cu echipamente de ultimă generație',
      features: ['Diagnostic OBD', 'Testare sisteme', 'Identificare erori', 'Raport detaliat'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Droplets,
      title: 'Schimb Ulei și Filtre',
      description: 'Schimb ulei și filtre cu produse de calitate superioară',
      features: ['Ulei motor', 'Filtru ulei', 'Filtru aer', 'Filtru combustibil'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Car,
      title: 'Montaj și Echilibrare Roți',
      description: 'Montaj, echilibrare și aliniere roți pentru siguranță maximă',
      features: ['Montaj roți', 'Echilibrare', 'Aliniere', 'Schimb anvelope'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'ITP și Pregătire',
      description: 'Inspecție tehnică periodică și pregătire pentru ITP',
      features: ['Pregătire ITP', 'Verificări tehnice', 'Reparații necesare', 'Asistență la ITP'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Service Rapid',
      description: 'Reparații rapide pentru probleme minore și urgente',
      features: ['Reparații urgente', 'Service expres', 'Diagnostic rapid', 'Piese în stoc'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Battery,
      title: 'Sistem Electric',
      description: 'Reparații și înlocuiri pentru sistemul electric al vehiculului',
      features: ['Baterie', 'Alternator', 'Starter', 'Sistem de încărcare'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Gauge,
      title: 'Sistem de Răcire',
      description: 'Reparații și întreținere sistem de răcire motor',
      features: ['Radiator', 'Termostat', 'Pompa de apă', 'Antigel'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Sistem de Frânare',
      description: 'Reparații complete sistem de frânare pentru siguranță',
      features: ['Plăcuțe frână', 'Discuri frână', 'Lichid frână', 'Cilindri frână'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const getServiceSlug = (title: string) => {
    const slugMap: Record<string, string> = {
      'Reparații Auto Complete': 'reparatii-auto',
      'Diagnoză Tehnică': 'diagnoza-tehnica',
      'Schimb Ulei și Filtre': 'schimb-ulei',
      'Montaj și Echilibrare Roți': 'montaj-roti',
      'ITP și Pregătire': 'itp',
      'Service Rapid': 'service-rapid',
      'Sistem Electric': 'sistem-electric',
      'Sistem de Răcire': 'sistem-de-racire',
      'Sistem de Frânare': 'sistem-de-franare'
    }
    return slugMap[title] || title.toLowerCase().replace(/ă/g, 'a').replace(/ț/g, 't').replace(/î/g, 'i').replace(/â/g, 'a').replace(/ș/g, 's').replace(/\s+/g, '-')
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const slug = getServiceSlug(service.title)
        return (
          <Link 
            key={index}
            href={`/servicii/${slug}`}
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group h-full cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center text-primary-400 font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                <span>Află mai multe</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          </Link>
        )
      })}
    </div>
  )
}
