'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, ArrowRight, Shield, Clock, Wrench, Sparkles } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    { icon: Wrench, text: 'Reparații', color: 'from-red-500/20 to-red-600/20' },
    { icon: Shield, text: 'Garantie', color: 'from-blue-500/20 to-blue-600/20' },
    { icon: Clock, text: 'Service Rapid', color: 'from-green-500/20 to-green-600/20' },
  ]

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Service Auto Professional Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900/85 via-dark-900/75 to-dark-900/85"></div>
          <div className="absolute inset-0 bg-mesh opacity-20"></div>
        </motion.div>
      </div>

      {/* Content Box - Elegant Frame */}
      <div className="relative z-10 container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40, scale: isVisible ? 1 : 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {/* Elegant Content Frame */}
          <div className="glass-card-strong p-6 lg:p-8 rounded-2xl border-2 border-primary-500/30 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 via-primary-600/20 to-primary-500/20 opacity-50 blur-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary-500/20 backdrop-blur-sm border border-primary-500/40 rounded-full px-4 py-1.5 mb-4"
              >
                <Sparkles className="h-3.5 w-3.5 text-primary-400" />
                <span className="text-primary-400 font-semibold text-xs">Service Auto de Încredere în București</span>
              </motion.div>

              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Service Auto{' '}
                <span className="text-gradient-glow inline-block">
                  Profesional
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Reparații de calitate, prețuri corecte și servicii complete pentru toate mărcile în București
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link 
                  href="/contact" 
                  className="btn-primary text-sm px-6 py-2.5 flex items-center space-x-2 group relative z-10"
                >
                  <span className="relative z-10">Programează Vizită</span>
                  <ArrowRight className="h-3.5 w-3.5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="tel:0726226622"
                  className="btn-secondary text-sm px-6 py-2.5 flex items-center space-x-2 group relative z-10"
                >
                  <Phone className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>0726226622</span>
                </a>
              </motion.div>

              {/* Features Row - Compact and Elegant */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="hidden md:flex flex-wrap justify-center gap-3"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`group relative bg-gradient-to-br ${feature.color} backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20 hover:border-primary-500/50 transition-all duration-300 cursor-pointer`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-primary-500/30 rounded-lg p-1.5 group-hover:bg-primary-500/40 transition-colors duration-300">
                        <feature.icon className="h-3.5 w-3.5 text-primary-400" />
                      </div>
                      <span className="text-white font-semibold text-xs group-hover:text-primary-400 transition-colors duration-300">
                        {feature.text}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 rounded-lg transition-all duration-300"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
