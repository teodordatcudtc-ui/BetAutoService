'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock } from 'lucide-react'

export default function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      {/* Map */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-dark-900 mb-4">
          Ne <span className="text-gradient">Găsești</span> Aici
        </h3>
        
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22775.829683390886!2d26.165263576329448!3d44.47460913731791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f901be492451%3A0x5d2fa004abcf9a39!2sBet%20Auto%20Service!5e0!3m2!1sen!2sro!4v1760516438636!5m2!1sen!2sro"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Locația Bet Auto Service - Strada Drumul Garii 8, București"
            className="w-full"
          />
        </div>
      </div>

      {/* Location Details */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h4 className="text-lg font-bold text-dark-900 mb-4 flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-primary-500" />
          <span>Detalii Locație</span>
        </h4>
        
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-700 mb-1">Adresă Completă</h5>
            <p className="text-gray-600">Strada Drumul Garii 8, București 077085, România</p>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-700 mb-1">Zona</h5>
            <p className="text-gray-600">Sector 7, București - Zona de service auto</p>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-700 mb-1">Acces</h5>
            <p className="text-gray-600">Ușor accesibil cu mașina, parcare disponibilă în fața service-ului</p>
          </div>
        </div>
      </div>

      {/* Directions */}
      <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-xl p-6 border border-primary-500/20">
        <h4 className="text-lg font-bold text-dark-900 mb-4 flex items-center space-x-2">
          <Navigation className="h-5 w-5 text-primary-500" />
          <span>Cum Să Ajungi</span>
        </h4>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
              1
            </div>
            <p className="text-gray-700">Navighează către Strada Drumul Garii 8, București</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
              2
            </div>
            <p className="text-gray-700">Caută semnul &quot;Bet Auto Service&quot; pe clădire</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
              3
            </div>
            <p className="text-gray-700">Parchează în fața service-ului sau sună-ne pentru direcții</p>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-white rounded-lg">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>Dacă ai probleme să ne găsești, sună-ne la 0726226622</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
