'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Award, Clock, ArrowRight, Wrench } from 'lucide-react'

export default function AboutPreview() {
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

    const element = document.getElementById('about-preview')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const stats = [
    { icon: Users, value: '500+', label: 'Clienți Mulțumiți' },
    { icon: Award, value: '10+', label: 'Ani Experiență' },
    { icon: Clock, value: '24h', label: 'Service Rapid' },
  ]

  return (
    <section id="about-preview" className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-0">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Despre <span className="text-gradient">Bet Auto Service</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Cu peste 10 ani de experiență în domeniul auto, ne-am construit o reputație solidă 
              prin servicii de calitate și prețuri corecte. Echipa noastră de mecanici specializați 
              lucrează cu pasiune pentru a-ți menține vehiculul în stare perfectă.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Folosim doar piese și componente de calitate superioară, iar toate reparațiile 
              beneficiază de garanție extinsă. Suntem aici pentru tine, când ai nevoie de noi.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-primary-500/20 rounded-lg p-4 mb-3">
                    <stat.icon className="h-8 w-8 text-primary-400 mx-auto" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/despre-noi"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
            >
              <span>Află Mai Multe</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-200 to-gray-300">
              <div className="w-full h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="h-12 w-12 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">Bet Auto Service</h3>
                  <p className="text-gray-600">Service Auto Profesional</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-primary-500 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-black" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark-900">100%</div>
                  <div className="text-sm text-gray-600">Satisfacție Garantată</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
