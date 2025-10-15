'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Wrench, Settings, Shield, Award } from 'lucide-react'

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Mihai Popescu',
      role: 'Manager General',
      experience: '15 ani experiență',
      specialty: 'Management și coordonare',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      icon: Award
    },
    {
      name: 'Alexandru Ionescu',
      role: 'Mecanic Șef',
      experience: '12 ani experiență',
      specialty: 'Reparații complexe',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      icon: Wrench
    },
    {
      name: 'Cristian Dumitrescu',
      role: 'Specialist Diagnostic',
      experience: '10 ani experiență',
      specialty: 'Diagnostic computerizat',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      icon: Settings
    },
    {
      name: 'Andrei Marinescu',
      role: 'Specialist ITP',
      experience: '8 ani experiență',
      specialty: 'Pregătire și inspecții ITP',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      icon: Shield
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
            Echipa <span className="text-gradient">Noastră</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesioniști dedicați cu experiență vastă în domeniul auto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group"
            >
              <div className="relative mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary-500/20 group-hover:border-primary-500/40 transition-colors duration-300"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary-500 p-2 rounded-full">
                  <member.icon className="h-4 w-4 text-white" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                {member.name}
              </h3>
              
              <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
              <p className="text-sm text-gray-500">{member.specialty}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl p-8 border border-primary-500/20">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              Vrei să lucrezi cu noi?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Căutăm întotdeauna mecanici talentați și dedicați pentru a ne extinde echipa.
            </p>
            <a
              href="mailto:cariere@betautoservice.ro"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
            >
              <span>Trimite CV-ul</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
