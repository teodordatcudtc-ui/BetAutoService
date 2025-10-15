'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

export default function ContactHero() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '0726226622',
      link: 'tel:0726226622',
      description: 'Sună-ne pentru programare'
    },
    {
      icon: MapPin,
      title: 'Adresă',
      value: 'Strada Drumul Garii 8, București 077085',
      link: 'https://maps.google.com/?q=Strada+Drumul+Garii+8,+București+077085',
      description: 'Vino să ne vizitezi'
    },
    {
      icon: Clock,
      title: 'Program',
      value: 'Luni - Vineri: 08:00 - 18:00',
      link: null,
      description: 'Sâmbătă: 09:00 - 14:00'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@betautoservice.ro',
      link: 'mailto:contact@betautoservice.ro',
      description: 'Trimite-ne un mesaj'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23facc15' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contactează-ne <span className="text-gradient">Astăzi</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Suntem aici să te ajutăm cu toate nevoile tale auto. Programează o vizită sau sună-ne pentru consultanță.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group"
            >
              <div className="bg-primary-500/20 rounded-lg p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <info.icon className="h-8 w-8 text-primary-400 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300 block mb-2"
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-white mb-2">{info.value}</p>
              )}
              <p className="text-gray-400 text-sm">{info.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
