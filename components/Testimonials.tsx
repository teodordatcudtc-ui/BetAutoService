'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
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

    const element = document.getElementById('testimonials')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const testimonials = [
    {
      name: 'Mihai Popescu',
      role: 'Proprietar BMW X5',
      content: 'Serviciul excelent! Am adus mașina pentru o reparație complexă și a fost gata în timpul promis. Prețurile sunt corecte și personalul foarte profesional.',
      rating: 5
    },
    {
      name: 'Ana Ionescu',
      role: 'Proprietar Audi A4',
      content: 'Recomand cu încredere! Am fost mulțumită de toate serviciile primite. Diagnosticul a fost precis și reparația a fost făcută cu atenție la detalii.',
      rating: 5
    },
    {
      name: 'Alexandru Dumitrescu',
      role: 'Proprietar Mercedes C-Class',
      content: 'Echipa de la Bet Auto Service este foarte competentă. Am avut o problemă cu motorul și au rezolvat-o rapid și eficient. Voi reveni sigur!',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Ce Spun <span className="text-gradient">Clienții Noștri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mii de clienți mulțumiți ne-au ales pentru serviciile noastre de calitate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative"
            >
              <Quote className="h-8 w-8 text-primary-400 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-dark-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-primary-500/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              Vrei să devii și tu unul dintre clienții noștri mulțumiți?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Contactează-ne astăzi pentru o programare sau pentru mai multe informații despre serviciile noastre.
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
