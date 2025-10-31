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
    <section id="about-preview" className="py-16 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-0">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
              Despre <span className="text-gradient-glow">Bet Auto Service</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
              Cu peste 10 ani de experiență, oferim servicii de calitate și prețuri corecte. 
              Echipa noastră lucrează pentru a-ți menține vehiculul în stare perfectă.
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">
              Folosim doar piese de calitate superioară, iar toate reparațiile beneficiază de garanție extinsă.
            </p>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0, 
                    y: isVisible ? 0 : 20
                  }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center glass-card p-4 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative mb-3">
                    <div className="absolute inset-0 bg-primary-500/20 rounded-lg blur-lg group-hover:bg-primary-500/30 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-primary-500/30 to-primary-600/30 rounded-lg p-3 w-12 h-12 mx-auto flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-black text-white mb-1 group-hover:text-primary-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/despre-noi"
              className="btn-primary text-base px-8 py-3.5 inline-flex items-center space-x-2 group"
            >
              <span>Află Mai Multe</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-primary-500/20">
              <div className="w-full h-[350px] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-dark-900/20 to-transparent z-10"></div>
                <div className="text-center relative z-20">
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    <Wrench className="h-12 w-12 text-black" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-white mb-1 text-shadow">Bet Auto Service</h3>
                  <p className="text-base text-gray-200 font-semibold">Service Auto Profesional</p>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass-card-strong p-5 shadow-xl border-2 border-primary-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500/30 rounded-lg blur-lg"></div>
                  <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-lg shadow-lg">
                    <Award className="h-6 w-6 text-black" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white mb-0.5">100%</div>
                  <div className="text-xs text-gray-300 font-semibold">Satisfacție</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
