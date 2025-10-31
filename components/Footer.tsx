'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Wrench, Mail, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 group">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-primary-500/30 rounded-xl blur-lg group-hover:bg-primary-500/50 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl shadow-lg">
                    <Wrench className="h-7 w-7 text-black" />
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-primary-400 transition-colors duration-300">
                    Bet Auto Service
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Sparkles className="h-3 w-3 text-primary-400" />
                    <p className="text-xs text-gray-400 font-medium">Service Profesional</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Service auto profesional în București cu peste 10 ani de experiență în domeniu.
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  href="tel:0726226622" 
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300 p-3 rounded-lg hover:bg-primary-500/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-6 w-6" />
                </motion.a>
                <motion.a 
                  href="mailto:contact@betautoservice.ro" 
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300 p-3 rounded-lg hover:bg-primary-500/10"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-black text-white mb-6">Link-uri Rapide</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Acasă', href: '/' },
                  { name: 'Servicii', href: '/servicii' },
                  { name: 'Despre Noi', href: '/despre-noi' },
                  { name: 'Contact', href: '/contact' },
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-primary-400 transition-all duration-300 inline-block group"
                    >
                      <span className="group-hover:translate-x-2 inline-block transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-black text-white mb-6">Servicii Principale</h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  'Reparații Auto',
                  'Diagnoză Tehnică',
                  'Schimb Ulei',
                  'Montaj Roți',
                  'ITP',
                  'Service General'
                ].map((service, index) => (
                  <li key={index} className="hover:text-primary-400 transition-colors duration-300 cursor-default">
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xl font-black text-white mb-6">Contact</h4>
              <div className="space-y-5">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-primary-500/20 rounded-lg p-2 group-hover:bg-primary-500/30 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  </div>
                  <div>
                    <p className="text-gray-400 leading-relaxed">
                      Strada Drumul Garii 8<br />
                      București 077085
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-primary-500/20 rounded-lg p-2 group-hover:bg-primary-500/30 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  </div>
                  <a 
                    href="tel:0726226622" 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 font-semibold"
                  >
                    0726226622
                  </a>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-primary-500/20 rounded-lg p-2 group-hover:bg-primary-500/30 transition-colors duration-300">
                    <Clock className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  </div>
                  <div className="text-gray-400 leading-relaxed">
                    <p className="font-semibold mb-1">Luni - Vineri: 08:00 - 18:00</p>
                    <p className="font-semibold mb-1">Sâmbătă: 09:00 - 14:00</p>
                    <p>Duminică: Închis</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-white/10 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Bet Auto Service. Toate drepturile rezervate.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-8 text-sm">
              <Link 
                href="/politica-confidentialitate" 
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                Politica de Confidențialitate
              </Link>
              <Link 
                href="/politica-cookie-uri" 
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                Politica Cookie-uri
              </Link>
              <Link 
                href="/termeni-conditii" 
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
