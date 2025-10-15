'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Award, Users, Clock, Wrench } from 'lucide-react'

export default function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: 'Pasiune',
      description: 'Lucrăm cu pasiune pentru fiecare proiect, tratând fiecare vehicul ca și cum ar fi al nostru',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Încredere',
      description: 'Construim relații de încredere cu clienții noștri prin transparență și comunicare deschisă',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Calitate',
      description: 'Ne mândrim cu standardele înalte de calitate în toate serviciile pe care le oferim',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Users,
      title: 'Echipa',
      description: 'Echipa noastră de specialiști este baza succesului nostru și a satisfacției clienților',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      title: 'Punctualitate',
      description: 'Respectăm timpii promiși și livrăm serviciile în termenul stabilit',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Wrench,
      title: 'Profesionalism',
      description: 'Lucrăm cu profesionalism și atenție la detalii în fiecare reparație',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Valorile <span className="text-gradient">Noastre</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Acestea sunt principiile care ne ghidează în fiecare zi și ne fac să fim diferiți
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="text-gray-300">
                {value.description}
              </p>
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
          <div className="bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl p-8 border border-primary-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Vrei să faci parte din familia noastră de clienți?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Contactează-ne astăzi și descoperă de ce suntem alegerea preferată a multor șoferi din București.
            </p>
            <a
              href="tel:0726226622"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
            >
              <span>Sună Acum</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
