'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

export default function ContactInfo() {

  return (
    <div className="mt-8">
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
    </div>
  )
}
