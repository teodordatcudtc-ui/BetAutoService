'use client'

import { motion } from 'framer-motion'
import { Award, Users, Clock, Shield, Wrench } from 'lucide-react'

export default function AboutHero() {
  const stats = [
    { icon: Users, value: '500+', label: 'Clienți Mulțumiți' },
    { icon: Award, value: '10+', label: 'Ani Experiență' },
    { icon: Clock, value: '24h', label: 'Service Rapid' },
    { icon: Shield, value: '100%', label: 'Garanție' },
  ]

  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-20">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23facc15' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Despre <span className="text-gradient">Bet Auto Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Cu peste 10 ani de experiență în domeniul auto, ne-am construit o reputație solidă 
              prin servicii de calitate și prețuri corecte.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Echipa noastră de mecanici specializați lucrează cu pasiune pentru a-ți menține 
              vehiculul în stare perfectă, folosind doar piese și componente de calitate superioară.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
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
            
            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark-900">10+</div>
                  <div className="text-sm text-gray-600">Ani Experiență</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
