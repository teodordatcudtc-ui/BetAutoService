'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, Shield, Wrench } from 'lucide-react'

export default function ServiceDetails() {
  const details = [
    {
      icon: Clock,
      title: 'Program de Lucru',
      description: 'Luni - Vineri: 08:00 - 18:00\nSâmbătă: 09:00 - 14:00\nDuminică: Închis',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Garanție',
      description: 'Toate reparațiile beneficiază de garanție extinsă conform legislației în vigoare',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Wrench,
      title: 'Echipamente',
      description: 'Folosim doar echipamente și unelte de ultimă generație pentru servicii de calitate',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CheckCircle,
      title: 'Piese Originale',
      description: 'Lucrăm exclusiv cu piese și componente de calitate superioară și originale',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <div className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          De Ce Să Ne <span className="text-gradient">Alegi</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Ne mândrim cu serviciile noastre de calitate și cu atenția la detalii
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {details.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group"
          >
            <div className={`w-16 h-16 bg-gradient-to-r ${detail.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <detail.icon className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
              {detail.title}
            </h3>
            
            <p className="text-gray-300 text-sm whitespace-pre-line">
              {detail.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl p-8 border border-primary-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ai Nevoie de Un Service Auto de Încredere?
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Contactează-ne astăzi pentru o programare sau pentru mai multe informații despre serviciile noastre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0726226622"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center space-x-2 group"
            >
              <span>Sună Acum</span>
            </a>
            <a
              href="/contact"
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center space-x-2 group"
            >
              <span>Formular Contact</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
