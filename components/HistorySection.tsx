'use client'

import { motion } from 'framer-motion'
import { Calendar, Target, Award, Users } from 'lucide-react'

export default function HistorySection() {
  const milestones = [
    {
      year: '2014',
      title: 'Începutul Poveștii',
      description: 'Am deschis primul nostru service auto cu o echipă mică dar dedicată',
      icon: Calendar
    },
    {
      year: '2016',
      title: 'Prima Extindere',
      description: 'Am investit în echipamente noi și am extins echipa cu mecanici specializați',
      icon: Target
    },
    {
      year: '2018',
      title: 'Recunoaștere',
      description: 'Am primit primul premiu pentru calitatea serviciilor oferite',
      icon: Award
    },
    {
      year: '2020',
      title: 'Modernizare',
      description: 'Am implementat tehnologii noi de diagnostic și reparații',
      icon: Users
    },
    {
      year: '2022',
      title: 'Expansiune',
      description: 'Am deschis un nou atelier și am angajat mai mulți specialiști',
      icon: Target
    },
    {
      year: '2024',
      title: 'Prezent',
      description: 'Suntem unul dintre cele mai de încredere service-uri auto din București',
      icon: Award
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Istoria <span className="text-gradient">Noastră</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la un mic atelier la unul dintre cele mai de încredere service-uri auto din București
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-500 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-12`}
              >
                {/* Content */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                } text-center md:text-left`}>
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                      <div className="bg-primary-500 p-3 rounded-lg">
                        <milestone.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-primary-600">{milestone.year}</div>
                    </div>
                    <h3 className="text-xl font-bold text-dark-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Spacer for mobile */}
                <div className="md:hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
