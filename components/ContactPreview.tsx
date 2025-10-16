'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function ContactPreview() {
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

    const element = document.getElementById('contact-preview')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

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
    }
  ]

  return (
    <section id="contact-preview" className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contactează-ne <span className="text-gradient">Astăzi</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Suntem aici să te ajutăm cu toate nevoile tale auto. Programează o vizită sau sună-ne pentru consultanță.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 px-4 sm:px-0">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group"
            >
              <div className="bg-primary-500/20 rounded-lg p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <info.icon className="h-8 w-8 text-primary-400 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl p-8 max-w-4xl mx-auto border border-primary-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Programează o Vizită la Service
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Completează formularul nostru de contact sau sună-ne direct pentru a programa o vizită.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Formular Contact</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="tel:0726226622"
                className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <Phone className="h-5 w-5" />
                <span>Sună Acum</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
