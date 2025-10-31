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
    <section id="contact-preview" className="py-16 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-40 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Contactează-ne <span className="text-gradient-glow">Astăzi</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Programează o vizită sau sună-ne pentru consultanță
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10 px-4 sm:px-0">
          {contactInfo.map((info, index) => (
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
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card-strong p-6 text-center group relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="relative mb-5">
                  <div className="absolute inset-0 bg-primary-500/20 rounded-xl blur-lg group-hover:bg-primary-500/30 transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-primary-500/30 to-primary-600/30 rounded-xl p-4 w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <info.icon className="h-8 w-8 text-primary-400" />
                  </div>
                </div>
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-300 block mb-2 text-base font-semibold"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-white mb-2 text-base font-semibold">{info.value}</p>
                )}
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="relative glass-card-strong p-6 max-w-3xl mx-auto border-2 border-primary-500/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-primary-600/20 to-primary-500/20 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                Programează o Vizită
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-5">
                Completează formularul sau sună-ne direct
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary text-base px-8 py-3.5 inline-flex items-center space-x-2 group"
                >
                  <span>Formular Contact</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="tel:0726226622"
                  className="btn-secondary text-base px-8 py-3.5 inline-flex items-center space-x-2 group"
                >
                  <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Sună Acum</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
