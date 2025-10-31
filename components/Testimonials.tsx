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
    <section id="testimonials" className="py-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-40 right-20 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark-900 mb-4 leading-tight">
            Ce Spun <span className="text-gradient">Clienții Noștri</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Clienți mulțumiți pentru serviciile noastre de calitate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0 mb-10">
          {testimonials.map((testimonial, index) => (
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
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-modern group relative overflow-hidden"
            >
              {/* Quote icon with glow */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Quote className="h-20 w-20 text-primary-400" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-5 text-sm leading-relaxed italic relative">
                  <Quote className="absolute -top-1 -left-1 h-4 w-4 text-primary-400/30" />
                  &quot;{testimonial.content}&quot;
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-black text-dark-900 text-base mb-0.5">{testimonial.name}</div>
                  <div className="text-xs text-gray-500 font-semibold">{testimonial.role}</div>
                </div>
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/5 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="relative glass-card-strong p-6 max-w-3xl mx-auto border-2 border-primary-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-black text-dark-900 mb-3">
                Vrei să devii clientul nostru?
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-5">
                Contactează-ne pentru o programare sau mai multe informații.
              </p>
              <a
                href="tel:0726226622"
                className="btn-primary text-base px-8 py-3.5 inline-flex items-center space-x-2 group"
              >
                <span>Sună Acum</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
