'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail, Car, Wrench, Shield, Award } from 'lucide-react'

export default function ContactInfo() {
  const infoSections = [
    {
      icon: Phone,
      title: 'Programări',
      items: [
        'Programări prin telefon: 0726226622',
        'Programări online prin formular',
        'Programări urgente disponibile',
        'Confirmare programare prin SMS'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Program de Lucru',
      items: [
        'Luni - Vineri: 08:00 - 18:00',
        'Sâmbătă: 09:00 - 14:00',
        'Duminică: Închis',
        'Service de urgență disponibil'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Car,
      title: 'Servicii Disponibile',
      items: [
        'Reparații complete',
        'Diagnostic computerizat',
        'Schimb ulei și filtre',
        'Montaj și echilibrare roți',
        'ITP și pregătire',
        'Service rapid'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Garanții',
      items: [
        'Garanție extinsă pe reparații',
        'Garanție pe piese montate',
        'Garanție pe servicii efectuate',
        'Asistență post-reparație'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const quickActions = [
    {
      icon: Phone,
      title: 'Sună Acum',
      description: 'Pentru programări urgente',
      action: 'tel:0726226622',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Vezi Pe Hartă',
      description: 'Strada Drumul Garii 8',
      action: 'https://maps.google.com/?q=Strada+Drumul+Garii+8,+București+077085',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Trimite Email',
      description: 'contact@betautoservice.ro',
      action: 'mailto:contact@betautoservice.ro',
      color: 'bg-purple-500'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h3 className="text-2xl font-bold text-dark-900 mb-6">
          Informații de <span className="text-gradient">Contact</span>
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-primary-500 p-3 rounded-lg">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-dark-900">Telefon</h4>
              <a href="tel:0726226622" className="text-primary-600 hover:text-primary-700 transition-colors duration-300">
                0726226622
              </a>
              <p className="text-sm text-gray-600">Disponibil în programul de lucru</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary-500 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-dark-900">Adresă</h4>
              <p className="text-gray-700">Strada Drumul Garii 8</p>
              <p className="text-gray-700">București 077085</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary-500 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-dark-900">Program</h4>
              <p className="text-gray-700">Luni - Vineri: 08:00 - 18:00</p>
              <p className="text-gray-700">Sâmbătă: 09:00 - 14:00</p>
              <p className="text-gray-700">Duminică: Închis</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary-500 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-dark-900">Email</h4>
              <a href="mailto:contact@betautoservice.ro" className="text-primary-600 hover:text-primary-700 transition-colors duration-300">
                contact@betautoservice.ro
              </a>
              <p className="text-sm text-gray-600">Răspundem în 24 de ore</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h3 className="text-2xl font-bold text-dark-900 mb-6">
          Acțiuni <span className="text-gradient">Rapide</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.action}
              target={action.action.startsWith('http') ? '_blank' : undefined}
              rel={action.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 group"
            >
              <div className={`${action.color} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors duration-300">
                  {action.title}
                </h4>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Service Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {infoSections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-10 h-10 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                <section.icon className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-lg font-bold text-dark-900">{section.title}</h4>
            </div>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
